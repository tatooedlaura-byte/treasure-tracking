import { useState } from 'react';
import { Card, Icon, Button } from '../common';
import { StatBubble } from './StatBubble';
import { CollectionTile } from './CollectionTile';
import { ActionButton } from './ActionButton';
import { AddCollectionForm } from '../collection/AddCollectionForm';
import { CollectionDetailView } from '../collection/CollectionDetailView';
import { SettingsView } from '../settings/SettingsView';
import { GlobalSearchView } from '../search/GlobalSearchView';
import { ExportView, CSVImportView } from '../import-export';
import { HelpView } from '../settings/HelpView';
import { useCollections } from '../../hooks/useCollections';
import type { ItemCollection } from '../../types';

// App icon path - use import.meta.env.BASE_URL for correct path
const APP_ICON = `${import.meta.env.BASE_URL}treasure-icon.png`;

export function HomeView() {
  const {
    collections,
    totalItems,
    totalEstimatedValue,
    itemCount,
  } = useCollections();

  const [showAddCollection, setShowAddCollection] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showCSVImport, setShowCSVImport] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<ItemCollection | null>(null);

  // Show collection detail if selected
  if (selectedCollection) {
    return (
      <CollectionDetailView
        collection={selectedCollection}
        onBack={() => setSelectedCollection(null)}
        onHome={() => setSelectedCollection(null)}
      />
    );
  }

  // Show modals/views
  if (showAddCollection) {
    return (
      <AddCollectionForm
        onClose={() => setShowAddCollection(false)}
        onSuccess={() => setShowAddCollection(false)}
      />
    );
  }

  if (showSettings) {
    return <SettingsView onClose={() => setShowSettings(false)} />;
  }

  if (showSearch) {
    return <GlobalSearchView onClose={() => setShowSearch(false)} />;
  }

  if (showExport) {
    return (
      <ExportView
        onClose={() => setShowExport(false)}
        onCSVImport={() => {
          setShowExport(false);
          setShowCSVImport(true);
        }}
      />
    );
  }

  if (showCSVImport) {
    return <CSVImportView onClose={() => setShowCSVImport(false)} />;
  }

  if (showHelp) {
    return <HelpView onClose={() => setShowHelp(false)} />;
  }

  return (
    <div className="adaptive-background">
      <div className="container">
        {/* Header */}
        <header className="home-header">
          <button className="header-btn" onClick={() => setShowSettings(true)}>
            <Icon name="settings" size={24} />
          </button>

          {totalItems > 0 && (
            <button className="header-btn" onClick={() => setShowSearch(true)}>
              <Icon name="search" size={24} />
            </button>
          )}
        </header>

        {/* Hero */}
        <section className="hero">
          <div className="app-icon-wrapper">
            <img src={APP_ICON} alt="Treasure Tracking" className="app-icon" />
          </div>
          <h1 className="title">Treasure Tracking</h1>
          <p className="subheading">Track & organize your treasures</p>
        </section>

        {/* Stats */}
        {collections.length > 0 && (
          <Card className="stats-card">
            <StatBubble
              icon="layers"
              value={String(collections.length)}
              label="Collections"
              color="var(--color-primary)"
            />
            <StatBubble
              icon="archive"
              value={String(totalItems)}
              label="Items"
              color="var(--color-accent)"
            />
            {totalEstimatedValue > 0 && (
              <StatBubble
                icon="dollar-sign"
                value={`$${Math.round(totalEstimatedValue)}`}
                label="Value"
                color="var(--color-success)"
              />
            )}
          </Card>
        )}

        {/* Collections Section */}
        <section className="collections-section">
          <h2 className="heading">My Collections</h2>

          {collections.length === 0 ? (
            <Card className="empty-state">
              <Icon name="archive" size={50} className="empty-state-icon" />
              <h3>No collections yet</h3>
              <p className="caption">Start by creating your first collection</p>
              <Button onClick={() => setShowAddCollection(true)}>
                <Icon name="plus-circle" size={20} />
                Create Collection
              </Button>
            </Card>
          ) : (
            <div className="grid-2">
              {collections.map((collection) => (
                <CollectionTile
                  key={collection.id}
                  collection={collection}
                  itemCount={itemCount(collection.id)}
                  onClick={() => setSelectedCollection(collection)}
                />
              ))}
            </div>
          )}
        </section>

        {/* Actions */}
        <section className="actions-section">
          <ActionButton
            icon="plus-circle"
            title="New"
            color="var(--color-secondary)"
            onClick={() => setShowAddCollection(true)}
          />
          <ActionButton
            icon="help-circle"
            title="Help"
            color="var(--color-accent)"
            onClick={() => setShowHelp(true)}
          />
          <ActionButton
            icon="upload-download"
            title={`Import/\nExport`}
            color="var(--color-primary)"
            onClick={() => setShowExport(true)}
          />
        </section>
      </div>

      <style>{`
        .home-header {
          display: flex;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
        }

        .header-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-sm);
          cursor: pointer;
          color: var(--color-text);
        }

        .hero {
          text-align: center;
          padding: var(--spacing-lg) 0;
        }

        .app-icon-wrapper {
          margin-bottom: var(--spacing-md);
        }

        .app-icon {
          width: 90px;
          height: 90px;
          border-radius: 20px;
          box-shadow: 0 5px 20px rgba(51, 89, 115, 0.3);
          border: 2px solid var(--color-accent);
        }

        .stats-card {
          display: flex;
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-lg);
        }

        .collections-section {
          margin-bottom: var(--spacing-lg);
        }

        .collections-section .heading {
          margin-bottom: var(--spacing-md);
        }

        .actions-section {
          display: flex;
          gap: var(--spacing-md);
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--spacing-xxl);
          text-align: center;
          gap: var(--spacing-md);
        }

        .empty-state h3 {
          color: var(--color-text-secondary);
        }
      `}</style>
    </div>
  );
}
