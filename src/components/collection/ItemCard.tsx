import { Card, Icon, ConditionBadge, AuthenticatedImage } from '../common';
import { getItemName, getItemEstimatedValue, getItemCondition } from '../../types';
import type { CollectionItem, FieldDefinition } from '../../types';

// Words that should stay lowercase unless first word
const LOWERCASE_WORDS = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'by', 'of', 'in'];

function toTitleCase(str: string): string {
  return str
    .split(' ')
    .map((word, index) => {
      if (word.length === 0) return word;
      const lower = word.toLowerCase();
      // Always capitalize first word, otherwise check if it's a lowercase word
      if (index === 0 || !LOWERCASE_WORDS.includes(lower)) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return lower;
    })
    .join(' ');
}

interface ItemCardProps {
  item: CollectionItem;
  fields: FieldDefinition[];
  onClick: () => void;
}

export function ItemCard({ item, fields, onClick }: ItemCardProps) {
  const name = toTitleCase(getItemName(item));
  const value = getItemEstimatedValue(item);
  const condition = getItemCondition(item);
  const hasPhotos = item.photos.length > 0;

  // Get first few field values for preview
  const previewFields = fields
    .filter((f) => f.name !== 'Name' && f.name !== 'Notes' && f.type !== 'longText')
    .slice(0, 2)
    .map((f) => ({
      name: f.name,
      value: item.fieldValues[f.name] || '',
    }))
    .filter((f) => f.value);

  return (
    <Card className="item-card" onClick={onClick}>
      {/* Thumbnail */}
      <div className="item-thumb">
        {hasPhotos ? (
          <AuthenticatedImage
            src={item.photos[0].url}
            alt={name}
            className="item-thumb-img"
            fallback={<Icon name="image" size={24} color="var(--color-text-secondary)" />}
          />
        ) : (
          <Icon name="image" size={24} color="var(--color-text-secondary)" />
        )}
      </div>

      {/* Content */}
      <div className="item-content">
        <h3 className="item-name">{name}</h3>

        {previewFields.length > 0 && (
          <p className="item-preview">
            {previewFields.map((f) => f.value).join(' • ')}
          </p>
        )}

        <div className="item-meta">
          {condition && <ConditionBadge condition={condition} />}
          {value !== undefined && (
            <span className="item-value">${value.toFixed(2)}</span>
          )}
        </div>
      </div>

      {/* Chevron */}
      <Icon name="chevron-right" size={20} color="var(--color-text-secondary)" />

      <style>{`
        .item-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          cursor: pointer;
        }

        .item-thumb {
          width: 60px;
          height: 60px;
          border-radius: 10px;
          background: var(--color-background);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
        }

        .item-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .item-content {
          flex: 1;
          min-width: 0;
        }

        .item-name {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .item-preview {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: 2px;
        }

        .item-meta {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-top: var(--spacing-xs);
        }

        .item-value {
          font-size: var(--font-sm);
          font-weight: 600;
          color: var(--color-success);
        }
      `}</style>
    </Card>
  );
}
