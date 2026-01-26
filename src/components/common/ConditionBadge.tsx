import type { ItemCondition } from '../../types';
import { getConditionInfo } from '../../types';

interface ConditionBadgeProps {
  condition: ItemCondition;
  showLabel?: boolean;
}

export function ConditionBadge({ condition, showLabel = true }: ConditionBadgeProps) {
  const info = getConditionInfo(condition);
  if (!info) return null;

  return (
    <span
      className="condition-badge"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '0.75rem',
        fontWeight: 600,
        backgroundColor: `${info.color}20`,
        color: info.color,
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: info.color,
        }}
      />
      {showLabel ? condition : info.shortName}
    </span>
  );
}
