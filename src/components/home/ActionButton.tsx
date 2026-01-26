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
          min-height: 80px;
          padding: var(--spacing-md);
          background: var(--color-card);
          border: 1px solid rgba(89, 60, 31, 0.15);
          border-radius: 8px;
          cursor: pointer;
          transition: all var(--transition-fast);
          box-shadow:
            0 2px 4px rgba(89, 60, 31, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        [data-theme="dark"] .action-button {
          border: 1px solid rgba(184, 142, 74, 0.25);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .action-button:hover {
          transform: translateY(-2px);
          border-color: var(--color-accent);
          box-shadow: 0 4px 8px rgba(89, 60, 31, 0.15);
        }

        .action-button:active {
          transform: scale(0.98);
        }

        .action-title {
          font-family: var(--font-family-sans);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text);
          text-align: center;
          white-space: pre-line;
          line-height: 1.3;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      `}</style>
    </button>
  );
}
