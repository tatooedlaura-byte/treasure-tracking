import type { ItemCollection, CollectionItem, PhotoAttachment, AppData } from '../../types';

/**
 * Error types for storage operations
 */
export type StorageErrorCode =
  | 'not_authenticated'
  | 'not_initialized'
  | 'not_found'
  | 'permission_denied'
  | 'quota_exceeded'
  | 'network_error'
  | 'unknown';

/**
 * Custom error class for storage operations
 */
export class StorageError extends Error {
  readonly code: StorageErrorCode;
  readonly cause?: unknown;

  constructor(message: string, code: StorageErrorCode, cause?: unknown) {
    super(message);
    this.name = 'StorageError';
    this.code = code;
    this.cause = cause;
  }
}

/**
 * Sync result type
 */
export interface SyncResult {
  success: boolean;
  uploaded: number;
  downloaded: number;
  errors: string[];
}

/**
 * Abstract interface for storage providers.
 */
export interface StorageProvider {
  readonly providerType: 'googledrive';

  /**
   * Initialize the storage provider for a user
   */
  initialize(userId: string): Promise<void>;

  // MARK: - Collections

  /**
   * Get all collections
   */
  getCollections(): Promise<ItemCollection[]>;

  /**
   * Create a new collection
   */
  createCollection(collection: ItemCollection): Promise<ItemCollection>;

  /**
   * Update an existing collection
   */
  updateCollection(collection: ItemCollection): Promise<ItemCollection>;

  /**
   * Delete a collection and all its items
   */
  deleteCollection(collectionId: string): Promise<void>;

  // MARK: - Items

  /**
   * Get all items
   */
  getItems(): Promise<CollectionItem[]>;

  /**
   * Get items for a specific collection
   */
  getItemsForCollection(collectionId: string): Promise<CollectionItem[]>;

  /**
   * Create a new item
   */
  createItem(item: CollectionItem): Promise<CollectionItem>;

  /**
   * Update an existing item
   */
  updateItem(item: CollectionItem): Promise<CollectionItem>;

  /**
   * Delete an item
   */
  deleteItem(itemId: string): Promise<void>;

  // MARK: - Photos

  /**
   * Upload a photo and return attachment info
   */
  uploadPhoto(file: File): Promise<PhotoAttachment>;

  /**
   * Delete a photo from storage
   */
  deletePhoto(driveFileId: string): Promise<void>;

  // MARK: - Sync

  /**
   * Subscribe to data changes
   */
  subscribeToChanges(callback: (data: AppData) => void): () => void;

  /**
   * Force sync with remote
   */
  forceSync(): Promise<SyncResult>;

  /**
   * Get all data (for export)
   */
  getAllData(): Promise<AppData>;
}
