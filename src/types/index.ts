export * from './Collection';
export * from './CollectionItem';

// Auth types
export type AuthProviderType = 'google';

export interface AuthUser {
  id: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  provider: AuthProviderType;
}

// Export data structure (for JSON import/export)
export interface ExportData {
  exportDate: string;
  version: string;
  collections: import('./Collection').ItemCollection[];
  items: import('./CollectionItem').CollectionItem[];
}

// App data (stored in Google Drive)
export interface AppData {
  collections: import('./Collection').ItemCollection[];
  items: import('./CollectionItem').CollectionItem[];
  lastModified: string;
}
