import { useState } from 'react';
import { Card, Icon } from '../common';
import { useCollections } from '../../hooks/useCollections';
import { getCollectionFields, getCollectionTypeInfo } from '../../data/collectionTypes';
import type { ItemCollection, FieldDefinition } from '../../types';

interface EditCollectionFormProps {
  collection: ItemCollection;
  onClose: () => void;
  onSuccess: () => void;
}

export function EditCollectionForm({ collection, onClose, onSuccess }: EditCollectionFormProps) {
  const { updateCollection } = useCollections();
  const typeInfo = getCollectionTypeInfo(collection.type);

  // Get default fields for this collection type
  const defaultFields = getCollectionFields(collection.type);

  // Current selected fields (from collection or defaults)
  const currentFields = collection.customFields || defaultFields;

  const [name, setName] = useState(collection.name);
  const [notes, setNotes] = useState(collection.notes || '');
  const [selectedFieldIds, setSelectedFieldIds] = useState<Set<string>>(
    new Set(currentFields.map((f) => f.id))
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleField = (field: FieldDefinition) => {
    if (field.required) return; // Can't toggle required fields

    const newSelected = new Set(selectedFieldIds);
    if (newSelected.has(field.id)) {
      newSelected.delete(field.id);
    } else {
      newSelected.add(field.id);
    }
    setSelectedFieldIds(newSelected);
  };

  const handleSave = async () => {
    if (!name.trim()) {
      setError('Please enter a collection name');
      return;
    }

    setSaving(true);
    setError(null);

    try {
      // Build custom fields array from selected fields
      const customFields = defaultFields.filter((f) => selectedFieldIds.has(f.id));

      const updatedCollection: ItemCollection = {
        ...collection,
        name: name.trim(),
        notes,
        customFields,
      };

      await updateCollection(updatedCollection);
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save changes');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="adaptive-background">
      <div className="container">
        {/* Header */}
        <header className="form-header">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <h1 className="heading">Edit Collection</h1>
          <button className="save-btn" onClick={handleSave} disabled={saving}>
            {saving ? 'Saving...' : 'Save'}
          </button>
        </header>

        {/* Collection Info */}
        <Card className="form-section">
          <div className="collection-type-badge">
            <div
              className="type-icon"
              style={{ backgroundColor: typeInfo.color }}
            >
              <Icon name={typeInfo.icon} size={20} color="white" />
            </div>
            <span>{typeInfo.displayName}</span>
          </div>

          <label className="form-label">Collection Name</label>
          <input
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="form-label" style={{ marginTop: 'var(--spacing-md)' }}>
            Notes (Optional)
          </label>
          <textarea
            className="input textarea"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
          />
        </Card>

        {/* Field Customization */}
        <Card className="form-section">
          <h3 className="section-title">Customize Fields</h3>
          <p className="section-desc">Choose which fields to include in this collection</p>

          <div className="fields-list">
            {defaultFields.map((field) => {
              const isSelected = selectedFieldIds.has(field.id);
              const isRequired = field.required;

              return (
                <button
                  key={field.id}
                  className={`field-option ${isSelected ? 'selected' : ''} ${isRequired ? 'required' : ''}`}
                  onClick={() => toggleField(field)}
                  disabled={isRequired}
                >
                  <div className="field-checkbox">
                    {isSelected ? (
                      <Icon name="check-circle" size={22} color="var(--color-accent)" />
                    ) : (
                      <Icon name="circle" size={22} color="var(--color-text-secondary)" />
                    )}
                  </div>
                  <div className="field-info">
                    <span className="field-name">{field.name}</span>
                    <span className="field-type">{getFieldTypeLabel(field.type)}</span>
                  </div>
                  {isRequired && (
                    <span className="required-badge">Required</span>
                  )}
                </button>
              );
            })}
          </div>

          <p className="fields-hint caption">
            Required fields cannot be removed
          </p>
        </Card>

        {/* Error */}
        {error && <p className="form-error">{error}</p>}
      </div>

      <style>{`
        .form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
        }

        .cancel-btn, .save-btn {
          background: transparent;
          border: none;
          font-size: var(--font-md);
          font-weight: 600;
          cursor: pointer;
        }

        .cancel-btn {
          color: var(--color-text-secondary);
        }

        .save-btn {
          color: var(--color-accent);
        }

        .save-btn:disabled {
          opacity: 0.5;
        }

        .form-section {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .collection-type-badge {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-lg);
          padding: var(--spacing-sm);
          background: rgba(0, 0, 0, 0.05);
          border-radius: var(--radius-md);
          width: fit-content;
        }

        .type-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-label {
          display: block;
          font-size: var(--font-sm);
          font-weight: 600;
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .textarea {
          resize: vertical;
          min-height: 60px;
        }

        .section-title {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: var(--spacing-xs);
        }

        .section-desc {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-md);
        }

        .fields-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .field-option {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          background: transparent;
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          text-align: left;
          transition: background var(--transition-fast);
        }

        .field-option:hover:not(:disabled) {
          background: rgba(0, 0, 0, 0.05);
        }

        .field-option:disabled {
          cursor: default;
        }

        .field-checkbox {
          flex-shrink: 0;
        }

        .field-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .field-name {
          font-size: var(--font-md);
          color: var(--color-text);
          font-weight: 500;
        }

        .field-type {
          font-size: var(--font-xs);
          color: var(--color-text-secondary);
        }

        .required-badge {
          font-size: var(--font-xs);
          color: var(--color-warning);
          background: rgba(230, 115, 102, 0.15);
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          font-weight: 600;
        }

        .fields-hint {
          margin-top: var(--spacing-md);
          text-align: center;
        }

        .form-error {
          color: var(--color-error);
          font-size: var(--font-sm);
          text-align: center;
        }
      `}</style>
    </div>
  );
}

function getFieldTypeLabel(type: string): string {
  switch (type) {
    case 'text':
      return 'Text';
    case 'longText':
      return 'Long Text';
    case 'number':
      return 'Number';
    case 'currency':
      return 'Currency ($)';
    case 'date':
      return 'Year';
    case 'condition':
      return 'Condition Picker';
    case 'picker':
      return 'Options Picker';
    default:
      return type;
  }
}
