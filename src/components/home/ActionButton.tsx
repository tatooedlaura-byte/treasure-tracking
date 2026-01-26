import { Icon } from '../common';

interface ActionButtonProps {
  icon: string;
  title: string;
  color: string;
  onClick: () => void;
}

export function ActionButton({ icon, title, color, onClick }: ActionButtonProps) {
  return (
    <button className="action-button" onClick={onClick}>
      <Icon name={icon} size={24} color={color} />
      <span className="action-title">{title}</span>

      <style>{`
        .action-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
          flex: 1;
          min-height: 70px;
          padding: var(--spacing-md);
          background: var(--color-card);
          border: var(--card-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .action-button:active {
          transform: scale(0.97);
        }

        .action-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text);
          text-align: center;
          white-space: pre-line;
        }
      `}</style>
    </button>
  );
}
