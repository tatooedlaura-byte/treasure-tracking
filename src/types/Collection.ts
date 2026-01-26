// Collection type enum matching iOS
export type CollectionType =
  | 'currency'
  | 'stamps'
  | 'cards'
  | 'dvds'
  | 'vinyl'
  | 'books'
  | 'comics'
  | 'toys'
  | 'other';

// Field types
export type FieldType =
  | 'text'
  | 'longText'
  | 'number'
  | 'currency'
  | 'date'
  | 'condition'
  | 'picker';

// Item condition grades
export type ItemCondition =
  | 'Mint'
  | 'Near Mint'
  | 'Excellent'
  | 'Very Good'
  | 'Good'
  | 'Fair'
  | 'Poor';

// Field definition for dynamic forms
export interface FieldDefinition {
  id: string;
  name: string;
  type: FieldType;
  required: boolean;
  options?: string[];
}

// Collection entity
export interface ItemCollection {
  id: string;
  name: string;
  type: CollectionType;
  customFields?: FieldDefinition[];
  notes: string;
  createdAt: string; // ISO date string
}

// Collection type display info
export interface CollectionTypeInfo {
  type: CollectionType;
  displayName: string;
  icon: string;
  color: string;
  defaultFields: FieldDefinition[];
}

// Condition display info
export interface ConditionInfo {
  value: ItemCondition;
  icon: string;
  shortName: string;
  color: string;
}

// All condition info
export const CONDITIONS: ConditionInfo[] = [
  { value: 'Mint', icon: 'star', shortName: 'M', color: '#FFD600' },
  { value: 'Near Mint', icon: 'star-half', shortName: 'NM', color: '#99CC33' },
  { value: 'Excellent', icon: 'sparkles', shortName: 'EX', color: '#4DBF66' },
  { value: 'Very Good', icon: 'thumbs-up', shortName: 'VG', color: '#4DB3E6' },
  { value: 'Good', icon: 'check-circle', shortName: 'G', color: '#8080E6' },
  { value: 'Fair', icon: 'minus-circle', shortName: 'F', color: '#F29933' },
  { value: 'Poor', icon: 'alert-triangle', shortName: 'P', color: '#E64D4D' },
];

export function getConditionInfo(condition: ItemCondition): ConditionInfo | undefined {
  return CONDITIONS.find(c => c.value === condition);
}
