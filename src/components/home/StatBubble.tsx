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
      <Icon name={icon} size={20} color={color} />
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>

      <style>{`
        .stat-bubble {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          flex: 1;
        }

        .stat-value {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-text);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }
      `}</style>
    </div>
  );
}
