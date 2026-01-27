import { Button } from './Button';
import { Icon } from './Icon';

interface EmptyStateProps {
  type: 'collections' | 'items' | 'search';
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

function CollectionsIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Treasure chest base */}
      <rect x="20" y="55" width="80" height="45" rx="4" fill="var(--color-secondary)" opacity="0.3" />
      <rect x="25" y="60" width="70" height="35" rx="2" fill="var(--color-secondary)" opacity="0.5" />

      {/* Chest lid */}
      <path d="M20 55 Q60 35 100 55" stroke="var(--color-primary)" strokeWidth="4" fill="none" />
      <ellipse cx="60" cy="45" rx="40" ry="12" fill="var(--color-accent)" opacity="0.4" />

      {/* Lock */}
      <circle cx="60" cy="70" r="8" fill="var(--color-accent)" opacity="0.6" />
      <rect x="57" y="70" width="6" height="10" fill="var(--color-accent)" opacity="0.8" />

      {/* Sparkles */}
      <circle cx="30" cy="35" r="3" fill="var(--color-accent)" opacity="0.7" />
      <circle cx="90" cy="30" r="2" fill="var(--color-accent)" opacity="0.5" />
      <circle cx="85" cy="45" r="2.5" fill="var(--color-accent)" opacity="0.6" />

      {/* Dashed outline suggesting "add more" */}
      <rect x="15" y="50" width="90" height="55" rx="6" stroke="var(--color-text-secondary)" strokeWidth="2" strokeDasharray="6 4" fill="none" opacity="0.3" />
    </svg>
  );
}

function ItemsIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stack of items/cards */}
      <rect x="30" y="70" width="60" height="40" rx="4" fill="var(--color-text-secondary)" opacity="0.15" transform="rotate(-5 60 90)" />
      <rect x="30" y="65" width="60" height="40" rx="4" fill="var(--color-text-secondary)" opacity="0.25" transform="rotate(3 60 85)" />
      <rect x="30" y="60" width="60" height="40" rx="4" fill="var(--color-secondary)" opacity="0.4" />

      {/* Plus sign */}
      <circle cx="60" cy="45" r="18" fill="var(--color-accent)" opacity="0.2" />
      <line x1="60" y1="35" x2="60" y2="55" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" />
      <line x1="50" y1="45" x2="70" y2="45" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" />

      {/* Small decorative elements */}
      <circle cx="25" cy="55" r="2" fill="var(--color-accent)" opacity="0.5" />
      <circle cx="95" cy="60" r="2.5" fill="var(--color-accent)" opacity="0.4" />
      <circle cx="88" cy="45" r="2" fill="var(--color-primary)" opacity="0.5" />
    </svg>
  );
}

function SearchIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Magnifying glass */}
      <circle cx="50" cy="50" r="25" stroke="var(--color-text-secondary)" strokeWidth="4" fill="var(--color-accent)" fillOpacity="0.1" />
      <line x1="68" y1="68" x2="90" y2="90" stroke="var(--color-text-secondary)" strokeWidth="6" strokeLinecap="round" />

      {/* X marks suggesting "not found" */}
      <line x1="42" y1="42" x2="58" y2="58" stroke="var(--color-text-secondary)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <line x1="58" y1="42" x2="42" y2="58" stroke="var(--color-text-secondary)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

      {/* Question marks */}
      <text x="25" y="35" fontSize="16" fill="var(--color-text-secondary)" opacity="0.4">?</text>
      <text x="85" y="45" fontSize="14" fill="var(--color-text-secondary)" opacity="0.3">?</text>
    </svg>
  );
}

export function EmptyState({ type, title, description, actionLabel, onAction }: EmptyStateProps) {
  const illustrations = {
    collections: <CollectionsIllustration />,
    items: <ItemsIllustration />,
    search: <SearchIllustration />,
  };

  return (
    <div className="empty-state-container">
      <div className="empty-state-illustration">
        {illustrations[type]}
      </div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-description">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction}>
          <Icon name="plus" size={20} />
          {actionLabel}
        </Button>
      )}

      <style>{`
        .empty-state-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--spacing-xxl) var(--spacing-lg);
          text-align: center;
          gap: var(--spacing-md);
          background: linear-gradient(135deg, rgba(51, 166, 140, 0.03), rgba(230, 115, 102, 0.03));
          border-radius: var(--radius-lg);
          border: var(--card-border);
        }

        .empty-state-illustration {
          margin-bottom: var(--spacing-sm);
        }

        .empty-state-title {
          color: var(--color-text);
          font-weight: 600;
          font-size: var(--font-lg);
          margin: 0;
        }

        .empty-state-description {
          color: var(--color-text-secondary);
          font-size: var(--font-md);
          margin: 0;
          max-width: 280px;
        }
      `}</style>
    </div>
  );
}
