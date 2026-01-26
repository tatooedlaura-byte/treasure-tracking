import { useState } from 'react';
import { Button, Card, Icon } from '../common';
import { FieldEditor } from './FieldEditor';
import { useCollections } from '../../hooks/useCollections';
import type { ItemCollection, FieldDefinition, CollectionItem } from '../../types';

interface AddItemFormProps {
  collection: ItemCollection;
  fields: FieldDefinition[];
  existingItem?: CollectionItem;
  onClose: () => void;
  onSuccess: () => void;
}

export function AddItemForm({
  collection,
  fields,
  existingItem,
  onClose,
  onSuccess,
}: AddItemFormProps) {
  const { createItem, updateItem } = useCollections();
  const isEditing = !!existingItem;

  const [fieldValues, setFieldValues] = useState<Record<string, string>>(
    existingItem?.fieldValues || {}
  );
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFieldChange = (fieldName: string, value: string) => {
    setFieldValues((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setPhotoFiles((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const removePhoto = (index: number) => {
    setPhotoFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSaving(true);
    setError(null);

    try {
      if (isEditing) {
        await updateItem(
          { ...existingItem, fieldValues },
          photoFiles.length > 0 ? photoFiles : undefined
        );
      } else {
        await createItem(collection.id, fieldValues, photoFiles);
      }
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save item');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="adaptive-background">
      <div className="container">
        {/* Header */}
        <header className="form-header">
          <button className="back-btn" onClick={onClose}>
            <Icon name="x" size={24} />
          </button>
          <h1 className="heading">{isEditing ? 'Edit Item' : 'Add Item'}</h1>
          <div style={{ width: 40 }} />
        </header>

        <form onSubmit={handleSubmit}>
          {/* Fields */}
          {fields.map((field) => (
            <Card key={field.id} className="form-section">
              <FieldEditor
                field={field}
                value={fieldValues[field.name] || ''}
                onChange={(value) => handleFieldChange(field.name, value)}
              />
            </Card>
          ))}

          {/* Photos */}
          <Card className="form-section">
            <label className="form-label">Photos</label>

            {/* Existing photos (if editing) */}
            {isEditing && existingItem.photos.length > 0 && (
              <div className="photo-grid">
                {existingItem.photos.map((photo) => (
                  <div key={photo.id} className="photo-thumb">
                    <img src={photo.url} alt="" />
                  </div>
                ))}
              </div>
            )}

            {/* New photos */}
            {photoFiles.length > 0 && (
              <div className="photo-grid">
                {photoFiles.map((file, index) => (
                  <div key={index} className="photo-thumb">
                    <img src={URL.createObjectURL(file)} alt="" />
                    <button
                      type="button"
                      className="photo-remove"
                      onClick={() => removePhoto(index)}
                    >
                      <Icon name="x" size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <label className="add-photo-btn">
              <Icon name="camera" size={20} />
              Add Photos
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoSelect}
                style={{ display: 'none' }}
              />
            </label>
          </Card>

          {/* Error */}
          {error && <p className="form-error">{error}</p>}

          {/* Submit */}
          <Button type="submit" disabled={saving}>
            {saving ? 'Saving...' : isEditing ? 'Save Changes' : 'Add Item'}
          </Button>
        </form>
      </div>

      <style>{`
        .form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
        }

        .back-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-sm);
          cursor: pointer;
          color: var(--color-text);
        }

        .form-section {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .form-label {
          display: block;
          font-size: var(--font-sm);
          font-weight: 600;
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
        }

        .photo-thumb {
          aspect-ratio: 1;
          border-radius: var(--radius-md);
          overflow: hidden;
          position: relative;
        }

        .photo-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .photo-remove {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .add-photo-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-md);
          border: 2px dashed var(--color-text-secondary);
          border-radius: var(--radius-md);
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .add-photo-btn:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .form-error {
          color: var(--color-error);
          font-size: var(--font-sm);
          margin-bottom: var(--spacing-md);
          text-align: center;
        }

        form .btn {
          width: 100%;
          margin-bottom: var(--spacing-lg);
        }
      `}</style>
    </div>
  );
}
