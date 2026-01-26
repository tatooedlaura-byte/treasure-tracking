import { Icon } from '../common';

interface StatBubbleProps {
  icon: string;
  value: string;
  label: string;
  color: string;
}

export function StatBubble({ icon, value, label, color }: StatBubbleProps) {
  return (
    <div className="stat-bubble">
      <Icon name={icon} size={24} color={color} />
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>

      <style>{`
        .stat-bubble {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          flex: 1;
          padding: 0 var(--spacing-sm);
          border-right: 1px solid rgba(89, 60, 31, 0.15);
        }

        .stat-bubble:last-child {
          border-right: none;
        }

        [data-theme="dark"] .stat-bubble {
          border-right-color: rgba(184, 142, 74, 0.2);
        }

        .stat-value {
          font-family: var(--font-family);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text);
        }

        .stat-label {
          font-family: var(--font-family-sans);
          font-size: 0.7rem;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
}
