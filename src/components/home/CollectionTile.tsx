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
          overflow: hidden;
        }

        .collection-tile::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, ${typeInfo.color}, ${typeInfo.color}99);
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }

        .tile-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--spacing-md);
          box-shadow: 0 4px 12px ${typeInfo.color}40;
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }

        .collection-tile:hover .tile-icon {
          transform: scale(1.05);
          box-shadow: 0 6px 16px ${typeInfo.color}50;
        }

        .tile-name {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: var(--spacing-xs);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        .tile-count {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          background: rgba(51, 89, 115, 0.08);
          padding: 4px 12px;
          border-radius: 12px;
        }

        [data-theme="dark"] .tile-count {
          background: rgba(242, 224, 191, 0.1);
        }
      `}</style>
    </Card>
  );
}
