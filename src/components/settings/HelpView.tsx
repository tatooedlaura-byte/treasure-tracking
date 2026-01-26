import { Card, Icon } from '../common';

interface HelpViewProps {
  onClose: () => void;
}

export function HelpView({ onClose }: HelpViewProps) {
  const helpTopics = [
    {
      icon: 'layers',
      title: 'Creating Collections',
      content: 'Tap "New" to create a collection. Choose from 9 types (Coins, Stamps, Cards, etc.) or select "Other" for a custom collection. Each type has pre-defined fields specific to that collectible.',
    },
    {
      icon: 'plus',
      title: 'Adding Items',
      content: 'Open a collection and tap the + button to add items. Fill in the details and optionally add photos. All items are automatically synced to your Google Drive.',
    },
    {
      icon: 'camera',
      title: 'Photos',
      content: 'Add multiple photos to each item. Tap a photo to view it full screen. You can delete photos from the full screen view.',
    },
    {
      icon: 'search',
      title: 'Searching',
      content: 'Use the search icon on the home screen to search across all your collections. The search looks through item names and all field values.',
    },
    {
      icon: 'upload-download',
      title: 'Import & Export',
      content: 'Export your data as JSON for backup. Import data from JSON files or CSV spreadsheets to quickly add items.',
    },
    {
      icon: 'sun',
      title: 'Dark Mode',
      content: 'Go to Settings to switch between Light, Dark, or System appearance modes.',
    },
  ];

  return (
    <div className="adaptive-background">
      <div className="container">
        {/* Header */}
        <header className="help-header">
          <div style={{ width: 40 }} />
          <h1 className="heading">Help</h1>
          <button className="done-btn" onClick={onClose}>
            Done
          </button>
        </header>

        {/* Help Topics */}
        {helpTopics.map((topic, index) => (
          <Card key={index} className="help-topic">
            <div className="topic-header">
              <Icon name={topic.icon} size={24} color="var(--color-accent)" />
              <h3 className="topic-title">{topic.title}</h3>
            </div>
            <p className="topic-content">{topic.content}</p>
          </Card>
        ))}

        {/* Footer */}
        <p className="help-footer caption">
          Your data is stored securely in your Google Drive's app data folder.
          Only this app can access it.
        </p>
      </div>

      <style>{`
        .help-header {
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

        .help-topic {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .topic-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-sm);
        }

        .topic-title {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
        }

        .topic-content {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        .help-footer {
          text-align: center;
          padding: var(--spacing-lg);
        }
      `}</style>
    </div>
  );
}
