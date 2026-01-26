import { Card, Icon } from '../common';
import { getCollectionTypeInfo } from '../../data/collectionTypes';
import type { ItemCollection } from '../../types';

interface CollectionTileProps {
  collection: ItemCollection;
  itemCount: number;
  onClick: () => void;
}

export function CollectionTile({ collection, itemCount, onClick }: CollectionTileProps) {
  const typeInfo = getCollectionTypeInfo(collection.type);

  return (
    <Card className="collection-tile" onClick={onClick}>
      <div
        className="tile-icon"
        style={{
          background: `linear-gradient(135deg, ${typeInfo.color}, ${typeInfo.color}B3)`,
        }}
      >
        <Icon name={typeInfo.icon} size={24} color="white" />
      </div>
      <h3 className="tile-name">{collection.name}</h3>
      <span className="tile-count">{itemCount} items</span>

      <style>{`
        .collection-tile {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--spacing-lg);
          cursor: pointer;
          text-align: center;
          position: relative;
          border-left: 4px solid ${typeInfo.color};
        }

        .tile-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--spacing-md);
          box-shadow:
            inset 0 2px 4px rgba(0, 0, 0, 0.2),
            0 2px 4px rgba(89, 60, 31, 0.15);
          transition: transform var(--transition-fast);
        }

        .collection-tile:hover .tile-icon {
          transform: scale(1.08);
        }

        .tile-name {
          font-family: var(--font-family);
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: var(--spacing-xs);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        .tile-count {
          font-family: var(--font-family-sans);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          font-style: italic;
        }
      `}</style>
    </Card>
  );
}
