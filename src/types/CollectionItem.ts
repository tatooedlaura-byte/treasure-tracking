import type { ItemCondition } from './Collection';

// Photo attachment
export interface PhotoAttachment {
  id: string;
  fileName: string;
  url: string;
  driveFileId?: string; // Google Drive file ID for cloud-stored photos
}

// Collection item entity
export interface CollectionItem {
  id: string;
  collectionId: string;
  fieldValues: Record<string, string>; // Field name -> value
  photos: PhotoAttachment[];
  addedAt: string; // ISO date string
}

// Helper functions for item data access
export function getItemName(item: CollectionItem): string {
  const name = item.fieldValues['Name'];
  if (name && name.trim()) {
    return name;
  }

  // Build name from other fields
  const identifyingFields = [
    'Country', 'Year', 'Denomination', 'Artist', 'Title',
    'Set/Series', 'Card Number', 'Issue #', 'Format'
  ];

  const parts: string[] = [];
  for (const field of identifyingFields) {
    const value = item.fieldValues[field];
    if (value && value.trim()) {
      parts.push(value);
      if (parts.length >= 3) break;
    }
  }

  return parts.length > 0 ? parts.join(' ') : 'Untitled';
}

export function getItemEstimatedValue(item: CollectionItem): number | undefined {
  const value = item.fieldValues['Estimated Value'];
  if (!value) return undefined;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? undefined : parsed;
}

export function getItemPurchasePrice(item: CollectionItem): number | undefined {
  const value = item.fieldValues['Purchase Price'];
  if (!value) return undefined;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? undefined : parsed;
}

export function getItemCondition(item: CollectionItem): ItemCondition | undefined {
  const value = item.fieldValues['Condition'];
  if (!value) return undefined;
  return value as ItemCondition;
}

export function getItemValue(item: CollectionItem, fieldName: string): string {
  return item.fieldValues[fieldName] ?? '';
}
