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
      <div className="action-icon-wrapper" style={{ background: `${color}15` }}>
        <Icon name={icon} size={26} color={color} />
      </div>
      <span className="action-title">{title}</span>

      <style>{`
        .action-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
          flex: 1;
          min-height: 90px;
          padding: var(--spacing-md);
          background: var(--color-card);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-fast);
          box-shadow: 0 2px 8px rgba(51, 89, 115, 0.08);
        }

        [data-theme="dark"] .action-button {
          border: 1px solid rgba(242, 224, 191, 0.15);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(51, 89, 115, 0.12);
        }

        .action-button:active {
          transform: scale(0.97);
        }

        .action-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .action-title {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text);
          text-align: center;
          white-space: pre-line;
          line-height: 1.2;
        }
      `}</style>
    </button>
  );
}
