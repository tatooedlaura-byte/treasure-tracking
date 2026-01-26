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
      <div className="stat-icon-wrapper" style={{ background: `${color}18` }}>
        <Icon name={icon} size={22} color={color} />
      </div>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>

      <style>{`
        .stat-bubble {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex: 1;
        }

        .stat-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-value {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-text);
          letter-spacing: -0.5px;
        }

        .stat-label {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      `}</style>
    </div>
  );
}
