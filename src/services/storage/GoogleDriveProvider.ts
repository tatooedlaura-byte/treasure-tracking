import { v4 as uuidv4 } from 'uuid';
import type { ItemCollection, CollectionItem, PhotoAttachment, AppData } from '../../types';
import type { StorageProvider, SyncResult } from './StorageProvider';
import { StorageError } from './StorageProvider';
import { getGoogleAuthProvider } from '../auth/GoogleAuthProvider';

const DRIVE_API_BASE = 'https://www.googleapis.com/drive/v3';
const DRIVE_UPLOAD_BASE = 'https://www.googleapis.com/upload/drive/v3';
const DATA_FILE_NAME = 'treasure-tracking-data.json';

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  modifiedTime?: string;
}

interface DriveFileList {
  files: DriveFile[];
  nextPageToken?: string;
}

/**
 * Google Drive storage provider for Treasure Tracking.
 * Stores collections and items in the app's private appDataFolder.
 */
export class GoogleDriveProvider implements StorageProvider {
  readonly providerType = 'googledrive' as const;

  private userId: string | null = null;
  private initialized = false;
  private collections: ItemCollection[] = [];
  private items: CollectionItem[] = [];
  private dataFileId: string | null = null;
  private changeListeners: Set<(data: AppData) => void> = new Set();

  private async getAccessToken(): Promise<string> {
    let token = getGoogleAuthProvider().getAccessToken();
    if (!token) {
      token = await getGoogleAuthProvider().refreshAccessToken();
    }
    if (!token) {
      throw new StorageError(
        'Not authenticated with Google',
        'not_authenticated'
      );
    }
    return token;
  }

  async initialize(userId: string): Promise<void> {
    if (this.initialized && this.userId === userId) {
      return;
    }

    try {
      console.log('[GoogleDrive] Initializing for user:', userId);
      this.userId = userId;

      await this.getAccessToken();

      // Find or create the data file
      await this.findOrCreateDataFile();

      // Load existing data
      await this.loadData();

      this.initialized = true;
      console.log('[GoogleDrive] Initialization complete');
    } catch (error) {
      console.error('[GoogleDrive] Initialization failed:', error);
      throw new StorageError(
        'Failed to initialize Google Drive storage',
        'not_initialized',
        error
      );
    }
  }

  private ensureInitialized(): void {
    if (!this.initialized) {
      throw new StorageError(
        'Google Drive not initialized. Call initialize() first.',
        'not_initialized'
      );
    }
  }

  private async findOrCreateDataFile(): Promise<void> {
    const token = await this.getAccessToken();

    // Search for existing data file
    const searchUrl = new URL(`${DRIVE_API_BASE}/files`);
    searchUrl.searchParams.set('spaces', 'appDataFolder');
    searchUrl.searchParams.set('q', `name='${DATA_FILE_NAME}'`);
    searchUrl.searchParams.set('fields', 'files(id,name)');

    const searchResponse = await fetch(searchUrl.toString(), {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!searchResponse.ok) {
      throw new Error('Failed to search for data file');
    }

    const searchResult: DriveFileList = await searchResponse.json();

    if (searchResult.files.length > 0) {
      this.dataFileId = searchResult.files[0].id;
    } else {
      // Create new data file
      const createResponse = await fetch(`${DRIVE_API_BASE}/files`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: DATA_FILE_NAME,
          parents: ['appDataFolder'],
          mimeType: 'application/json',
        }),
      });

      if (!createResponse.ok) {
        throw new Error('Failed to create data file');
      }

      const newFile: DriveFile = await createResponse.json();
      this.dataFileId = newFile.id;

      // Initialize with empty data
      await this.saveData();
    }
  }

  private async loadData(): Promise<void> {
    if (!this.dataFileId) return;

    const token = await this.getAccessToken();
    const url = `${DRIVE_API_BASE}/files/${this.dataFileId}?alt=media`;

    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      if (response.status === 404) {
        this.collections = [];
        this.items = [];
        return;
      }
      throw new Error('Failed to load data');
    }

    const text = await response.text();
    if (!text.trim()) {
      this.collections = [];
      this.items = [];
      return;
    }

    try {
      const data = JSON.parse(text);
      this.collections = data.collections || [];
      this.items = data.items || [];
    } catch {
      this.collections = [];
      this.items = [];
    }
  }

  private async saveData(): Promise<void> {
    if (!this.dataFileId) return;

    const token = await this.getAccessToken();
    const url = `${DRIVE_UPLOAD_BASE}/files/${this.dataFileId}?uploadType=media`;

    const data: AppData = {
      collections: this.collections,
      items: this.items,
      lastModified: new Date().toISOString(),
    };

    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to save data');
    }
  }

  // MARK: - Collections

  async getCollections(): Promise<ItemCollection[]> {
    this.ensureInitialized();
    return this.collections;
  }

  async createCollection(collection: ItemCollection): Promise<ItemCollection> {
    this.ensureInitialized();

    try {
      this.collections = [...this.collections, collection];
      await this.saveData();
      this.notifyListeners();
      return collection;
    } catch (error) {
      throw new StorageError('Failed to create collection', 'unknown', error);
    }
  }

  async updateCollection(collection: ItemCollection): Promise<ItemCollection> {
    this.ensureInitialized();

    try {
      const index = this.collections.findIndex((c) => c.id === collection.id);
      if (index === -1) {
        throw new StorageError('Collection not found', 'not_found');
      }

      this.collections[index] = collection;
      await this.saveData();
      this.notifyListeners();
      return collection;
    } catch (error) {
      if (error instanceof StorageError) throw error;
      throw new StorageError('Failed to update collection', 'unknown', error);
    }
  }

  async deleteCollection(collectionId: string): Promise<void> {
    this.ensureInitialized();

    try {
      // Get items for this collection to delete their photos
      const collectionItems = this.items.filter(
        (item) => item.collectionId === collectionId
      );

      // Delete photos for all items in this collection
      for (const item of collectionItems) {
        for (const photo of item.photos) {
          if (photo.driveFileId) {
            await this.deletePhoto(photo.driveFileId).catch(() => {});
          }
        }
      }

      // Remove collection and its items
      this.collections = this.collections.filter((c) => c.id !== collectionId);
      this.items = this.items.filter((i) => i.collectionId !== collectionId);

      await this.saveData();
      this.notifyListeners();
    } catch (error) {
      throw new StorageError('Failed to delete collection', 'unknown', error);
    }
  }

  // MARK: - Items

  async getItems(): Promise<CollectionItem[]> {
    this.ensureInitialized();
    return this.items;
  }

  async getItemsForCollection(collectionId: string): Promise<CollectionItem[]> {
    this.ensureInitialized();
    return this.items.filter((item) => item.collectionId === collectionId);
  }

  async createItem(item: CollectionItem): Promise<CollectionItem> {
    this.ensureInitialized();

    try {
      this.items = [...this.items, item];
      await this.saveData();
      this.notifyListeners();
      return item;
    } catch (error) {
      throw new StorageError('Failed to create item', 'unknown', error);
    }
  }

  async updateItem(item: CollectionItem): Promise<CollectionItem> {
    this.ensureInitialized();

    try {
      const index = this.items.findIndex((i) => i.id === item.id);
      if (index === -1) {
        throw new StorageError('Item not found', 'not_found');
      }

      this.items[index] = item;
      await this.saveData();
      this.notifyListeners();
      return item;
    } catch (error) {
      if (error instanceof StorageError) throw error;
      throw new StorageError('Failed to update item', 'unknown', error);
    }
  }

  async deleteItem(itemId: string): Promise<void> {
    this.ensureInitialized();

    try {
      const item = this.items.find((i) => i.id === itemId);
      if (item) {
        // Delete associated photos
        for (const photo of item.photos) {
          if (photo.driveFileId) {
            await this.deletePhoto(photo.driveFileId).catch(() => {});
          }
        }
      }

      this.items = this.items.filter((i) => i.id !== itemId);
      await this.saveData();
      this.notifyListeners();
    } catch (error) {
      throw new StorageError('Failed to delete item', 'unknown', error);
    }
  }

  // MARK: - Photos

  async uploadPhoto(file: File): Promise<PhotoAttachment> {
    this.ensureInitialized();

    try {
      const token = await this.getAccessToken();
      const fileId = uuidv4();
      const fileName = `${fileId}_${file.name}`;

      // Create file metadata
      const metadata = {
        name: fileName,
        parents: ['appDataFolder'],
      };

      // Use multipart upload
      const boundary = '-------314159265358979323846';
      const delimiter = '\r\n--' + boundary + '\r\n';
      const closeDelimiter = '\r\n--' + boundary + '--';

      const metadataPart =
        delimiter +
        'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
        JSON.stringify(metadata);

      // Read file as array buffer
      const fileBuffer = await file.arrayBuffer();
      const fileBytes = new Uint8Array(fileBuffer);

      // Build multipart body
      const encoder = new TextEncoder();
      const metadataBytes = encoder.encode(metadataPart);
      const contentTypeBytes = encoder.encode(
        delimiter + `Content-Type: ${file.type}\r\n\r\n`
      );
      const closeBytes = encoder.encode(closeDelimiter);

      const body = new Uint8Array(
        metadataBytes.length +
          contentTypeBytes.length +
          fileBytes.length +
          closeBytes.length
      );
      let offset = 0;
      body.set(metadataBytes, offset);
      offset += metadataBytes.length;
      body.set(contentTypeBytes, offset);
      offset += contentTypeBytes.length;
      body.set(fileBytes, offset);
      offset += fileBytes.length;
      body.set(closeBytes, offset);

      const response = await fetch(
        `${DRIVE_UPLOAD_BASE}/files?uploadType=multipart`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': `multipart/related; boundary="${boundary}"`,
          },
          body: body,
        }
      );

      if (!response.ok) {
        throw new Error('Failed to upload photo');
      }

      const uploadedFile: DriveFile = await response.json();

      return {
        id: fileId,
        fileName: file.name,
        url: `https://www.googleapis.com/drive/v3/files/${uploadedFile.id}?alt=media`,
        driveFileId: uploadedFile.id,
      };
    } catch (error) {
      throw new StorageError('Failed to upload photo', 'unknown', error);
    }
  }

  async deletePhoto(driveFileId: string): Promise<void> {
    this.ensureInitialized();

    try {
      const token = await this.getAccessToken();
      const response = await fetch(`${DRIVE_API_BASE}/files/${driveFileId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok && response.status !== 404) {
        throw new Error('Failed to delete photo');
      }
    } catch (error) {
      throw new StorageError('Failed to delete photo', 'unknown', error);
    }
  }

  // MARK: - Sync

  subscribeToChanges(callback: (data: AppData) => void): () => void {
    this.changeListeners.add(callback);

    // Immediately notify with current data
    callback({
      collections: this.collections,
      items: this.items,
      lastModified: new Date().toISOString(),
    });

    return () => {
      this.changeListeners.delete(callback);
    };
  }

  async forceSync(): Promise<SyncResult> {
    await this.loadData();
    this.notifyListeners();
    return {
      success: true,
      uploaded: 0,
      downloaded: this.collections.length + this.items.length,
      errors: [],
    };
  }

  async getAllData(): Promise<AppData> {
    this.ensureInitialized();
    return {
      collections: this.collections,
      items: this.items,
      lastModified: new Date().toISOString(),
    };
  }

  // MARK: - Private Helpers

  private notifyListeners(): void {
    const data: AppData = {
      collections: this.collections,
      items: this.items,
      lastModified: new Date().toISOString(),
    };

    this.changeListeners.forEach((callback) => {
      try {
        callback(data);
      } catch (error) {
        console.error('Change listener error:', error);
      }
    });
  }
}

// Singleton instance
let storageInstance: GoogleDriveProvider | null = null;

export function getGoogleDriveProvider(): GoogleDriveProvider {
  if (!storageInstance) {
    storageInstance = new GoogleDriveProvider();
  }
  return storageInstance;
}
