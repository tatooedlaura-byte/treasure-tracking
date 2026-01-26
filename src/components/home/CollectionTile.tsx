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
        }

        .tile-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--spacing-md);
        }

        .tile-name {
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
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }
      `}</style>
    </Card>
  );
}
