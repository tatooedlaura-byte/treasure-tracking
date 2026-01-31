import { Card, Icon, Button } from '../common';
import { useAppearance, type AppearanceMode } from '../../hooks/useAppearance';
import { useAuth } from '../../hooks/useAuth';

interface SettingsViewProps {
  onClose: () => void;
}

export function SettingsView({ onClose }: SettingsViewProps) {
  const { mode, setMode } = useAppearance();
  const { user, signOut } = useAuth();

  const modeOptions: { value: AppearanceMode; label: string; icon: string }[] = [
    { value: 'system', label: 'System', icon: 'monitor' },
    { value: 'light', label: 'Light', icon: 'sun' },
    { value: 'dark', label: 'Dark', icon: 'moon' },
  ];

  const handleSignOut = async () => {
    if (confirm('Sign out of your account?')) {
      await signOut();
    }
  };

  return (
    <div className="adaptive-background">
      <div className="container">
        {/* Header */}
        <header className="settings-header">
          <div style={{ width: 40 }} />
          <h1 className="heading">Settings</h1>
          <button className="done-btn" onClick={onClose}>
            Done
          </button>
        </header>

        {/* Appearance Section */}
        <Card className="settings-section">
          <h2 className="section-title">Appearance</h2>
          <div className="appearance-options">
            {modeOptions.map((opt) => (
              <button
                key={opt.value}
                className={`appearance-option ${mode === opt.value ? 'selected' : ''}`}
                onClick={() => setMode(opt.value)}
              >
                <Icon
                  name={opt.icon}
                  size={20}
                  color={mode === opt.value ? 'var(--color-accent)' : 'var(--color-text-secondary)'}
                />
                <span>{opt.label}</span>
                <div className="check-placeholder">
                  {mode === opt.value && (
                    <Icon name="check" size={18} color="var(--color-accent)" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Account Section */}
        {user && (
          <Card className="settings-section">
            <h2 className="section-title">Account</h2>
            <div className="account-info">
              {user.photoURL && (
                <img src={user.photoURL} alt="" className="account-avatar" />
              )}
              <div className="account-details">
                <span className="account-name">{user.displayName || 'User'}</span>
                <span className="account-email">{user.email}</span>
              </div>
            </div>
            <Button variant="secondary" onClick={handleSignOut}>
              Sign Out
            </Button>
          </Card>
        )}

        {/* About Section */}
        <Card className="settings-section">
          <h2 className="section-title">About</h2>
          <div className="about-row">
            <span>Version</span>
            <span className="about-value">1.1.0</span>
          </div>
          <div className="about-row">
            <span>App</span>
            <span className="about-value">Treasure Tracking</span>
          </div>
        </Card>
      </div>

      <style>{`
        .settings-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
        }

        .done-btn {
          background: transparent;
          border: none;
          color: var(--color-accent);
          font-size: var(--font-md);
          font-weight: 600;
          cursor: pointer;
        }

        .settings-section {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .section-title {
          font-size: var(--font-sm);
          font-weight: 600;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--spacing-md);
        }

        .appearance-options {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .appearance-option {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: var(--radius-md);
          transition: background var(--transition-fast);
        }

        .appearance-option:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .appearance-option span {
          flex: 1;
          text-align: left;
          color: var(--color-text);
        }

        .appearance-option.selected {
          background: rgba(51, 166, 140, 0.1);
        }

        .check-placeholder {
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .account-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }

        .account-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }

        .account-details {
          display: flex;
          flex-direction: column;
        }

        .account-name {
          font-weight: 600;
          color: var(--color-text);
        }

        .account-email {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
        }

        .about-row {
          display: flex;
          justify-content: space-between;
          padding: var(--spacing-sm) 0;
          color: var(--color-text);
        }

        .about-value {
          color: var(--color-text-secondary);
        }

        .btn-secondary {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
