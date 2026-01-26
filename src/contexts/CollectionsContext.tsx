import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import type { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getGoogleDriveProvider } from '../services/storage';
import type {
  ItemCollection,
  CollectionItem,
  CollectionType,
  FieldDefinition,
  PhotoAttachment,
  AppData,
} from '../types';
import { getItemEstimatedValue } from '../types';

interface CollectionsContextValue {
  // Data
  collections: ItemCollection[];
  items: CollectionItem[];
  loading: boolean;
  error: string | null;

  // Computed
  totalItems: number;
  totalEstimatedValue: number;
  itemCount: (collectionId: string) => number;
  collectionValue: (collectionId: string) => number;

  // Collection operations
  createCollection: (
    name: string,
    type: CollectionType,
    customFields?: FieldDefinition[],
    notes?: string
  ) => Promise<ItemCollection>;
  updateCollection: (collection: ItemCollection) => Promise<void>;
  deleteCollection: (collectionId: string) => Promise<void>;
  getCollection: (collectionId: string) => ItemCollection | undefined;

  // Item operations
  createItem: (
    collectionId: string,
    fieldValues: Record<string, string>,
    photoFiles?: File[]
  ) => Promise<CollectionItem>;
  updateItem: (
    item: CollectionItem,
    newPhotoFiles?: File[]
  ) => Promise<void>;
  deleteItem: (itemId: string) => Promise<void>;
  getItem: (itemId: string) => CollectionItem | undefined;
  getItemsForCollection: (collectionId: string) => CollectionItem[];

  // Photo operations
  addPhotosToItem: (itemId: string, files: File[]) => Promise<void>;
  removePhotoFromItem: (itemId: string, photoId: string) => Promise<void>;

  // Sync
  refresh: () => Promise<void>;

  // Initialize (call after auth)
  initialize: (userId: string) => Promise<void>;
}

const CollectionsContext = createContext<CollectionsContextValue | null>(null);

export function CollectionsProvider({ children }: { children: ReactNode }) {
  const [collections, setCollections] = useState<ItemCollection[]>([]);
  const [items, setItems] = useState<CollectionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const unsubscribeRef = useRef<(() => void) | null>(null);
  const initializedRef = useRef(false);

  // Initialize storage and subscribe to changes
  const initialize = useCallback(async (userId: string) => {
    if (initializedRef.current) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const storage = getGoogleDriveProvider();
      await storage.initialize(userId);

      // Subscribe to changes
      unsubscribeRef.current = storage.subscribeToChanges((data: AppData) => {
        console.log('[CollectionsContext] Got data update:', data.collections.length, 'collections');
        setCollections(data.collections);
        setItems(data.items);
        setLoading(false);
      });

      initializedRef.current = true;
      setLoading(false);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to initialize';
      console.error('[CollectionsContext] Initialize error:', message);
      setError(message);
      setLoading(false);
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, []);

  // Computed values
  const totalItems = items.length;

  const totalEstimatedValue = items.reduce((sum, item) => {
    const value = getItemEstimatedValue(item);
    return sum + (value || 0);
  }, 0);

  const itemCount = useCallback(
    (collectionId: string) => {
      return items.filter((i) => i.collectionId === collectionId).length;
    },
    [items]
  );

  const collectionValue = useCallback(
    (collectionId: string) => {
      return items
        .filter((i) => i.collectionId === collectionId)
        .reduce((sum, item) => {
          const value = getItemEstimatedValue(item);
          return sum + (value || 0);
        }, 0);
    },
    [items]
  );

  // Collection operations
  const createCollection = useCallback(
    async (
      name: string,
      type: CollectionType,
      customFields?: FieldDefinition[],
      notes?: string
    ): Promise<ItemCollection> => {
      const storage = getGoogleDriveProvider();

      const collection: ItemCollection = {
        id: uuidv4(),
        name,
        type,
        customFields,
        notes: notes || '',
        createdAt: new Date().toISOString(),
      };

      await storage.createCollection(collection);
      return collection;
    },
    []
  );

  const updateCollection = useCallback(
    async (collection: ItemCollection): Promise<void> => {
      const storage = getGoogleDriveProvider();
      await storage.updateCollection(collection);
    },
    []
  );

  const deleteCollection = useCallback(
    async (collectionId: string): Promise<void> => {
      const storage = getGoogleDriveProvider();
      await storage.deleteCollection(collectionId);
    },
    []
  );

  const getCollection = useCallback(
    (collectionId: string): ItemCollection | undefined => {
      return collections.find((c) => c.id === collectionId);
    },
    [collections]
  );

  // Item operations
  const createItem = useCallback(
    async (
      collectionId: string,
      fieldValues: Record<string, string>,
      photoFiles?: File[]
    ): Promise<CollectionItem> => {
      const storage = getGoogleDriveProvider();

      // Upload photos first
      const photos: PhotoAttachment[] = [];
      if (photoFiles) {
        for (const file of photoFiles) {
          const photo = await storage.uploadPhoto(file);
          photos.push(photo);
        }
      }

      const item: CollectionItem = {
        id: uuidv4(),
        collectionId,
        fieldValues,
        photos,
        addedAt: new Date().toISOString(),
      };

      await storage.createItem(item);
      return item;
    },
    []
  );

  const updateItem = useCallback(
    async (item: CollectionItem, newPhotoFiles?: File[]): Promise<void> => {
      const storage = getGoogleDriveProvider();

      // Upload new photos if any
      if (newPhotoFiles && newPhotoFiles.length > 0) {
        const newPhotos: PhotoAttachment[] = [];
        for (const file of newPhotoFiles) {
          const photo = await storage.uploadPhoto(file);
          newPhotos.push(photo);
        }
        item.photos = [...item.photos, ...newPhotos];
      }

      await storage.updateItem(item);
    },
    []
  );

  const deleteItem = useCallback(async (itemId: string): Promise<void> => {
    const storage = getGoogleDriveProvider();
    await storage.deleteItem(itemId);
  }, []);

  const getItem = useCallback(
    (itemId: string): CollectionItem | undefined => {
      return items.find((i) => i.id === itemId);
    },
    [items]
  );

  const getItemsForCollection = useCallback(
    (collectionId: string): CollectionItem[] => {
      return items.filter((i) => i.collectionId === collectionId);
    },
    [items]
  );

  // Photo operations
  const addPhotosToItem = useCallback(
    async (itemId: string, files: File[]): Promise<void> => {
      const item = items.find((i) => i.id === itemId);
      if (!item) return;

      const storage = getGoogleDriveProvider();

      const newPhotos: PhotoAttachment[] = [];
      for (const file of files) {
        const photo = await storage.uploadPhoto(file);
        newPhotos.push(photo);
      }

      const updatedItem: CollectionItem = {
        ...item,
        photos: [...item.photos, ...newPhotos],
      };

      await storage.updateItem(updatedItem);
    },
    [items]
  );

  const removePhotoFromItem = useCallback(
    async (itemId: string, photoId: string): Promise<void> => {
      const item = items.find((i) => i.id === itemId);
      if (!item) return;

      const storage = getGoogleDriveProvider();

      // Find and delete the photo file
      const photo = item.photos.find((p) => p.id === photoId);
      if (photo?.driveFileId) {
        await storage.deletePhoto(photo.driveFileId).catch(() => {});
      }

      // Update item without this photo
      const updatedItem: CollectionItem = {
        ...item,
        photos: item.photos.filter((p) => p.id !== photoId),
      };

      await storage.updateItem(updatedItem);
    },
    [items]
  );

  // Sync
  const refresh = useCallback(async (): Promise<void> => {
    const storage = getGoogleDriveProvider();
    await storage.forceSync();
  }, []);

  const value: CollectionsContextValue = {
    collections,
    items,
    loading,
    error,

    totalItems,
    totalEstimatedValue,
    itemCount,
    collectionValue,

    createCollection,
    updateCollection,
    deleteCollection,
    getCollection,

    createItem,
    updateItem,
    deleteItem,
    getItem,
    getItemsForCollection,

    addPhotosToItem,
    removePhotoFromItem,

    refresh,
    initialize,
  };

  return (
    <CollectionsContext.Provider value={value}>
      {children}
    </CollectionsContext.Provider>
  );
}

export function useCollections(): CollectionsContextValue {
  const context = useContext(CollectionsContext);
  if (!context) {
    throw new Error('useCollections must be used within a CollectionsProvider');
  }
  return context;
}
