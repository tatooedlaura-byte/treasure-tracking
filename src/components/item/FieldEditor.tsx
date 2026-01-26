import { CONDITIONS } from '../../types';
import type { FieldDefinition } from '../../types';

interface FieldEditorProps {
  field: FieldDefinition;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

export function FieldEditor({ field, value, onChange, onBlur }: FieldEditorProps) {
  const labelId = `field-${field.id}`;

  switch (field.type) {
    case 'text':
      return (
        <div className="field-editor">
          <label htmlFor={labelId} className="form-label">
            {field.name}
            {field.required && <span className="required">*</span>}
          </label>
          <input
            id={labelId}
            type="text"
            className="input"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            placeholder={`Enter ${field.name.toLowerCase()}`}
          />
        </div>
      );

    case 'longText':
      return (
        <div className="field-editor">
          <label htmlFor={labelId} className="form-label">
            {field.name}
            {field.required && <span className="required">*</span>}
          </label>
          <textarea
            id={labelId}
            className="input textarea"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={`Enter ${field.name.toLowerCase()}`}
            rows={3}
          />
        </div>
      );

    case 'number':
      return (
        <div className="field-editor">
          <label htmlFor={labelId} className="form-label">
            {field.name}
            {field.required && <span className="required">*</span>}
          </label>
          <input
            id={labelId}
            type="number"
            className="input"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="0"
          />
        </div>
      );

    case 'currency':
      return (
        <div className="field-editor">
          <label htmlFor={labelId} className="form-label">
            {field.name}
            {field.required && <span className="required">*</span>}
          </label>
          <div className="currency-input">
            <span className="currency-symbol">$</span>
            <input
              id={labelId}
              type="number"
              step="0.01"
              min="0"
              className="input"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="0.00"
            />
          </div>
        </div>
      );

    case 'date':
      return (
        <div className="field-editor">
          <label htmlFor={labelId} className="form-label">
            {field.name}
            {field.required && <span className="required">*</span>}
          </label>
          <input
            id={labelId}
            type="date"
            className="input"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      );

    case 'condition':
      return (
        <div className="field-editor">
          <label className="form-label">
            {field.name}
            {field.required && <span className="required">*</span>}
          </label>
          <div className="condition-grid">
            {CONDITIONS.map((cond) => (
              <button
                key={cond.value}
                type="button"
                className={`condition-option ${value === cond.value ? 'selected' : ''}`}
                onClick={() => onChange(cond.value)}
                style={{
                  borderColor: value === cond.value ? cond.color : 'transparent',
                  backgroundColor: value === cond.value ? `${cond.color}20` : 'transparent',
                }}
              >
                <span
                  className="condition-dot"
                  style={{ backgroundColor: cond.color }}
                />
                <span className="condition-label">{cond.shortName}</span>
              </button>
            ))}
          </div>
        </div>
      );

    case 'picker':
      return (
        <div className="field-editor">
          <label htmlFor={labelId} className="form-label">
            {field.name}
            {field.required && <span className="required">*</span>}
          </label>
          <select
            id={labelId}
            className="input select"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="">Select {field.name.toLowerCase()}</option>
            {field.options?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      );

    default:
      return null;
  }
}

// Styles included in component for self-containment
const styles = `
  .field-editor {
    margin-bottom: 0;
  }

  .form-label {
    display: block;
    font-size: var(--font-sm);
    font-weight: 600;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-sm);
  }

  .required {
    color: var(--color-error);
    margin-left: 2px;
  }

  .textarea {
    resize: vertical;
    min-height: 80px;
  }

  .currency-input {
    position: relative;
  }

  .currency-symbol {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-secondary);
  }

  .currency-input .input {
    padding-left: 32px;
  }

  .select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23666' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 40px;
  }

  .condition-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }

  .condition-option {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border: 2px solid transparent;
    border-radius: var(--radius-md);
    background: transparent;
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .condition-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .condition-label {
    font-size: var(--font-sm);
    font-weight: 600;
    color: var(--color-text);
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);
}
