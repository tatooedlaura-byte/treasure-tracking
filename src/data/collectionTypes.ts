import { v4 as uuidv4 } from 'uuid';
import type { CollectionType, CollectionTypeInfo, FieldDefinition } from '../types';

// Helper to create field definitions
function field(
  name: string,
  type: FieldDefinition['type'],
  options?: string[]
): FieldDefinition {
  return {
    id: uuidv4(),
    name,
    type,
    required: false,
    options,
  };
}

// Collection type colors - WARM & VINTAGE
export const COLLECTION_COLORS: Record<CollectionType, string> = {
  currency: '#B88E4A', // Antique gold
  stamps: '#A85248',   // Aged crimson
  cards: '#567673',    // Patina teal
  dvds: '#5C4D73',     // Dusty purple
  vinyl: '#2D2A26',    // Rich black
  books: '#7A593E',    // Leather brown
  comics: '#B8763E',   // Burnt sienna
  toys: '#C69E34',     // Brass yellow
  other: '#6C6258',    // Warm gray
};

// Collection type icons (web equivalents of SF Symbols)
export const COLLECTION_ICONS: Record<CollectionType, string> = {
  currency: 'dollar-sign',
  stamps: 'stamp',
  cards: 'layers',
  dvds: 'disc',
  vinyl: 'music',
  books: 'book-open',
  comics: 'book',
  toys: 'puzzle',
  other: 'archive',
};

// Collection type display names
export const COLLECTION_NAMES: Record<CollectionType, string> = {
  currency: 'Currency',
  stamps: 'Stamps',
  cards: 'Trading Cards',
  dvds: 'DVDs/Movies',
  vinyl: 'Vinyl Records',
  books: 'Books',
  comics: 'Comics',
  toys: 'Toys/Lego',
  other: 'Other',
};

// Default fields for each collection type
function getDefaultFields(type: CollectionType): FieldDefinition[] {
  const fields: FieldDefinition[] = [field('Name', 'text')];

  switch (type) {
    case 'currency':
      fields.push(
        field('Type', 'picker', ['Coin', 'Paper', 'Token']),
        field('Country', 'text'),
        field('Year', 'text'),
        field('Denomination', 'text'),
        field('Condition', 'condition')
      );
      break;

    case 'stamps':
      fields.push(
        field('Country', 'text'),
        field('Year', 'text'),
        field('Condition', 'condition')
      );
      break;

    case 'cards':
      fields.push(
        field('Set/Series', 'text'),
        field('Year', 'text'),
        field('Card Number', 'text'),
        field('Condition', 'condition')
      );
      break;

    case 'dvds':
      fields.push(
        field('Format', 'picker', ['DVD', 'Blu-ray', '4K UHD', 'Digital']),
        field('Genre', 'text'),
        field('Director', 'text'),
        field('Year', 'text')
      );
      break;

    case 'vinyl':
      fields.push(
        field('Artist', 'text'),
        field('Format', 'picker', ['LP', 'EP', 'Single', '78 RPM']),
        field('Year', 'text'),
        field('Condition', 'condition')
      );
      break;

    case 'books':
      fields.push(
        field('Author', 'text'),
        field('ISBN', 'text'),
        field('Publisher', 'text'),
        field('Year', 'text')
      );
      break;

    case 'comics':
      fields.push(
        field('Publisher', 'text'),
        field('Issue #', 'text'),
        field('Year', 'text'),
        field('Condition', 'condition')
      );
      break;

    case 'toys':
      fields.push(
        field('Brand', 'picker', ['Lego', 'Hot Wheels', 'Funko Pop', 'Action Figure', 'Other']),
        field('Set Number', 'text'),
        field('Theme', 'text'),
        field('Pieces', 'number'),
        field('Year', 'text'),
        field('Condition', 'condition'),
        field('Sealed', 'picker', ['Yes', 'No'])
      );
      break;

    case 'other':
      // Just has Name and Notes
      break;
  }

  // All types get notes and value fields at the end
  fields.push(
    field('Notes', 'longText'),
    field('Purchase Price', 'currency'),
    field('Estimated Value', 'currency')
  );

  return fields;
}

// All collection types with their info
export const COLLECTION_TYPES: CollectionTypeInfo[] = [
  'currency',
  'stamps',
  'cards',
  'dvds',
  'vinyl',
  'books',
  'comics',
  'toys',
  'other',
].map((type) => ({
  type: type as CollectionType,
  displayName: COLLECTION_NAMES[type as CollectionType],
  icon: COLLECTION_ICONS[type as CollectionType],
  color: COLLECTION_COLORS[type as CollectionType],
  defaultFields: getDefaultFields(type as CollectionType),
}));

// Get collection type info
export function getCollectionTypeInfo(type: CollectionType): CollectionTypeInfo {
  return COLLECTION_TYPES.find((t) => t.type === type) || COLLECTION_TYPES[8]; // Default to 'other'
}

// Get fields for a collection (either custom or default)
export function getCollectionFields(
  type: CollectionType,
  customFields?: FieldDefinition[]
): FieldDefinition[] {
  return customFields || getDefaultFields(type);
}
