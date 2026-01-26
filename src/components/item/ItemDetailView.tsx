import { useState } from 'react';
import { Card, Icon, ConditionBadge } from '../common';
import { AddItemForm } from './AddItemForm';
import { useCollections } from '../../hooks/useCollections';
import { getItemName, getItemCondition } from '../../types';
import { Share } from '@capacitor/share';
import type { ItemCollection, CollectionItem, FieldDefinition } from '../../types';

interface ItemDetailViewProps {
  item: CollectionItem;
  collection: ItemCollection;
  fields: FieldDefinition[];
  onBack: () => void;
}

export function ItemDetailView({
  item: initialItem,
  collection,
  fields,
  onBack,
}: ItemDetailViewProps) {
  const { getItem, deleteItem, removePhotoFromItem } = useCollections();

  // Get fresh item data
  const item = getItem(initialItem.id) || initialItem;

  const [showEdit, setShowEdit] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [showFullScreenPhoto, setShowFullScreenPhoto] = useState(false);

  const name = getItemName(item);
  const condition = getItemCondition(item);

  const handleDelete = async () => {
    if (confirm(`Delete "${name}"?`)) {
      await deleteItem(item.id);
      onBack();
    }
  };

  const handleShare = async () => {
    let text = `Item: ${name}\n`;
    text += `Collection: ${collection.name}\n\n`;

    for (const field of fields) {
      const value = item.fieldValues[field.name];
      if (value && field.name !== 'Name') {
        if (field.type === 'currency') {
          text += `${field.name}: $${parseFloat(value).toFixed(2)}\n`;
        } else {
          text += `${field.name}: ${value}\n`;
        }
      }
    }

    text += '\n- Shared from Treasure Tracking';

    try {
      await Share.share({
        title: name,
        text,
      });
    } catch {
      // User cancelled or share not available
    }
  };

  const handleDeletePhoto = async (photoId: string) => {
    if (confirm('Delete this photo?')) {
      await removePhotoFromItem(item.id, photoId);
      if (item.photos.length <= 1) {
        setShowFullScreenPhoto(false);
      }
    }
  };

  // Show edit form
  if (showEdit) {
    return (
      <AddItemForm
        collection={collection}
        fields={fields}
        existingItem={item}
        onClose={() => setShowEdit(false)}
        onSuccess={() => setShowEdit(false)}
      />
    );
  }

  // Full screen photo viewer
  if (showFullScreenPhoto && item.photos.length > 0) {
    return (
      <div className="fullscreen-photo">
        <header className="photo-header">
          <button className="photo-close" onClick={() => setShowFullScreenPhoto(false)}>
            <Icon name="x" size={24} color="white" />
          </button>
          <span className="photo-counter">
            {selectedPhotoIndex + 1} / {item.photos.length}
          </span>
          <button
            className="photo-delete"
            onClick={() => handleDeletePhoto(item.photos[selectedPhotoIndex].id)}
          >
            <Icon name="trash" size={24} color="white" />
          </button>
        </header>

        <img
          src={item.photos[selectedPhotoIndex].url}
          alt=""
          className="fullscreen-img"
        />

        {item.photos.length > 1 && (
          <>
            <button
              className="photo-nav prev"
              onClick={() =>
                setSelectedPhotoIndex((i) =>
                  i > 0 ? i - 1 : item.photos.length - 1
                )
              }
            >
              <Icon name="chevron-left" size={32} color="white" />
            </button>
            <button
              className="photo-nav next"
              onClick={() =>
                setSelectedPhotoIndex((i) =>
                  i < item.photos.length - 1 ? i + 1 : 0
                )
              }
            >
              <Icon name="chevron-right" size={32} color="white" />
            </button>
          </>
        )}

        <style>{`
          .fullscreen-photo {
            position: fixed;
            inset: 0;
            background: black;
            z-index: 300;
            display: flex;
            flex-direction: column;
          }

          .photo-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--spacing-md);
            padding-top: calc(var(--spacing-md) + env(safe-area-inset-top, 0px));
          }

          .photo-close, .photo-delete {
            background: transparent;
            border: none;
            padding: var(--spacing-sm);
            cursor: pointer;
          }

          .photo-counter {
            color: white;
            font-size: var(--font-sm);
          }

          .fullscreen-img {
            flex: 1;
            object-fit: contain;
          }

          .photo-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            border: none;
            padding: var(--spacing-md);
            cursor: pointer;
          }

          .photo-nav.prev { left: var(--spacing-sm); }
          .photo-nav.next { right: var(--spacing-sm); }
        `}</style>
      </div>
    );
  }

  return (
    <div className="adaptive-background">
      <div className="container">
        {/* Header */}
        <header className="detail-header">
          <button className="back-btn" onClick={onBack}>
            <Icon name="chevron-left" size={24} />
          </button>
          <h1 className="heading" style={{ flex: 1, textAlign: 'center' }}>
            {name}
          </h1>
          <div className="header-actions">
            <button className="header-btn" onClick={() => setShowMenu(!showMenu)}>
              <Icon name="more-vertical" size={24} />
            </button>
            {showMenu && (
              <div className="dropdown-menu">
                <button onClick={handleShare} className="menu-item">
                  <Icon name="share" size={20} />
                  Share
                </button>
                <button onClick={() => { setShowMenu(false); setShowEdit(true); }} className="menu-item">
                  <Icon name="edit" size={20} />
                  Edit
                </button>
                <hr className="menu-divider" />
                <button onClick={handleDelete} className="menu-item danger">
                  <Icon name="trash" size={20} />
                  Delete
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Photos */}
        {item.photos.length > 0 && (
          <div className="photo-carousel">
            <div className="photo-track">
              {item.photos.map((photo, index) => (
                <img
                  key={photo.id}
                  src={photo.url}
                  alt=""
                  className="carousel-photo"
                  onClick={() => {
                    setSelectedPhotoIndex(index);
                    setShowFullScreenPhoto(true);
                  }}
                />
              ))}
            </div>
            <p className="photo-hint caption">Tap photo to view full screen</p>
          </div>
        )}

        {/* Fields */}
        <Card className="item-fields">
          {fields.map((field) => {
            const value = item.fieldValues[field.name];
            if (!value) return null;

            return (
              <div key={field.id} className="field-row">
                <span className="field-label">{field.name}</span>
                {field.type === 'condition' && condition ? (
                  <ConditionBadge condition={condition} />
                ) : field.type === 'currency' ? (
                  <span className="field-value">${parseFloat(value).toFixed(2)}</span>
                ) : (
                  <span className="field-value">{value}</span>
                )}
              </div>
            );
          })}

          <hr className="divider" />

          <p className="caption">
            Added {new Date(item.addedAt).toLocaleDateString()}
          </p>
        </Card>
      </div>

      <style>{`
        .detail-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
          position: relative;
        }

        .back-btn, .header-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-sm);
          cursor: pointer;
          color: var(--color-text);
        }

        .header-actions {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: var(--color-card);
          border-radius: var(--radius-md);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          min-width: 160px;
          z-index: 100;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          width: 100%;
          padding: var(--spacing-md);
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--color-text);
          font-size: var(--font-md);
        }

        .menu-item.danger {
          color: var(--color-error);
        }

        .menu-divider {
          margin: 0;
          border: none;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .photo-carousel {
          margin-bottom: var(--spacing-lg);
        }

        .photo-track {
          display: flex;
          gap: var(--spacing-sm);
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding-bottom: var(--spacing-sm);
        }

        .carousel-photo {
          flex: 0 0 auto;
          width: 100%;
          max-width: 300px;
          height: 200px;
          object-fit: cover;
          border-radius: var(--radius-lg);
          scroll-snap-align: center;
          cursor: pointer;
        }

        .photo-hint {
          text-align: center;
          margin-top: var(--spacing-xs);
        }

        .item-fields {
          padding: var(--spacing-lg);
        }

        .field-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: var(--spacing-md);
        }

        .field-label {
          font-size: var(--font-xs);
          color: var(--color-text-secondary);
        }

        .field-value {
          font-size: var(--font-md);
          color: var(--color-text);
        }

        .divider {
          margin: var(--spacing-md) 0;
          border: none;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
