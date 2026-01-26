import { useState } from 'react';
import { Button, Card, Icon } from '../common';
import { COLLECTION_TYPES } from '../../data/collectionTypes';
import { useCollections } from '../../hooks/useCollections';
import type { CollectionType } from '../../types';

interface AddCollectionFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export function AddCollectionForm({ onClose, onSuccess }: AddCollectionFormProps) {
  const { createCollection } = useCollections();
  const [name, setName] = useState('');
  const [selectedType, setSelectedType] = useState<CollectionType>('other');
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Please enter a collection name');
      return;
    }

    setSaving(true);
    setError(null);

    try {
      await createCollection(name.trim(), selectedType, undefined, notes);
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create collection');
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
            <Icon name="chevron-left" size={24} />
          </button>
          <h1 className="heading">New Collection</h1>
          <div style={{ width: 40 }} />
        </header>

        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <Card className="form-section">
            <label className="form-label">Collection Name</label>
            <input
              type="text"
              className="input"
              placeholder="My Collection"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </Card>

          {/* Type Selection */}
          <Card className="form-section">
            <label className="form-label">Collection Type</label>
            <div className="type-grid">
              {COLLECTION_TYPES.map((type) => (
                <button
                  key={type.type}
                  type="button"
                  className={`type-option ${selectedType === type.type ? 'selected' : ''}`}
                  onClick={() => setSelectedType(type.type)}
                >
                  <div
                    className="type-icon"
                    style={{
                      backgroundColor: selectedType === type.type ? type.color : 'transparent',
                      borderColor: type.color,
                    }}
                  >
                    <Icon
                      name={type.icon}
                      size={20}
                      color={selectedType === type.type ? 'white' : type.color}
                    />
                  </div>
                  <span className="type-name">{type.displayName}</span>
                </button>
              ))}
            </div>
          </Card>

          {/* Notes */}
          <Card className="form-section">
            <label className="form-label">Notes (Optional)</label>
            <textarea
              className="input textarea"
              placeholder="Add any notes about this collection..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
          </Card>

          {/* Error */}
          {error && <p className="form-error">{error}</p>}

          {/* Submit */}
          <Button type="submit" disabled={saving}>
            {saving ? 'Creating...' : 'Create Collection'}
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

        .type-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-sm);
        }

        .type-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-xs);
          padding: var(--spacing-sm);
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: var(--radius-md);
          transition: background var(--transition-fast);
        }

        .type-option:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .type-option.selected {
          background: rgba(51, 166, 140, 0.1);
        }

        .type-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid;
          transition: all var(--transition-fast);
        }

        .type-name {
          font-size: var(--font-xs);
          color: var(--color-text);
        }

        .textarea {
          resize: vertical;
          min-height: 80px;
        }

        .form-error {
          color: var(--color-error);
          font-size: var(--font-sm);
          margin-bottom: var(--spacing-md);
          text-align: center;
        }

        form .btn {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
