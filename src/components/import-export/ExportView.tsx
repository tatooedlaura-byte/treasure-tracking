import { useState } from 'react';
import { Card, Icon, Button } from '../common';
import { useCollections } from '../../hooks/useCollections';
import { getGoogleDriveProvider } from '../../services/storage';
import { Share } from '@capacitor/share';
import type { ExportData } from '../../types';

interface ExportViewProps {
  onClose: () => void;
  onCSVImport?: () => void;
}

export function ExportView({ onClose, onCSVImport }: ExportViewProps) {
  const { collections, items } = useCollections();
  const [importing, setImporting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleExport = async () => {
    try {
      const storage = getGoogleDriveProvider();
      const data = await storage.getAllData();

      const exportData: ExportData = {
        exportDate: new Date().toISOString(),
        version: '1.1.0',
        collections: data.collections,
        items: data.items,
      };

      const json = JSON.stringify(exportData, null, 2);
      const blob = new Blob([json], { type: 'application/json' });

      // Try native share first
      try {
        await Share.share({
          title: 'Treasure Tracking Export',
          text: `Exported ${collections.length} collections with ${items.length} items`,
          url: URL.createObjectURL(blob),
        });
      } catch {
        // Fallback to download
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `treasure-tracking-export-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Export failed');
    }
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImporting(true);
    setError(null);

    try {
      const text = await file.text();
      const data: ExportData = JSON.parse(text);

      // Validate structure
      if (!data.collections || !Array.isArray(data.collections)) {
        throw new Error('Invalid export file: missing collections');
      }
      if (!data.items || !Array.isArray(data.items)) {
        throw new Error('Invalid export file: missing items');
      }

      const storage = getGoogleDriveProvider();

      // Import collections
      for (const collection of data.collections) {
        await storage.createCollection(collection);
      }

      // Import items
      for (const item of data.items) {
        await storage.createItem(item);
      }

      alert(`Imported ${data.collections.length} collections and ${data.items.length} items`);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Import failed');
    } finally {
      setImporting(false);
    }
  };

  return (
    <div className="adaptive-background">
      <div className="container">
        {/* Header */}
        <header className="export-header">
          <div style={{ width: 40 }} />
          <h1 className="heading">Import/Export</h1>
          <button className="done-btn" onClick={onClose}>
            Done
          </button>
        </header>

        {/* Export Section */}
        <Card className="export-section">
          <div className="section-header">
            <Icon name="share" size={24} color="var(--color-accent)" />
            <div>
              <h3 className="section-title">Export Data</h3>
              <p className="section-desc">Save your data as a JSON file</p>
            </div>
          </div>
          <p className="section-stats">
            {collections.length} collections, {items.length} items
          </p>
          <Button onClick={handleExport}>Export JSON</Button>
        </Card>

        {/* Import Section */}
        <Card className="export-section">
          <div className="section-header">
            <Icon name="upload-download" size={24} color="var(--color-primary)" />
            <div>
              <h3 className="section-title">Import Data</h3>
              <p className="section-desc">Load data from a JSON file</p>
            </div>
          </div>
          <label className="import-btn">
            {importing ? 'Importing...' : 'Select JSON File'}
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              disabled={importing}
              style={{ display: 'none' }}
            />
          </label>
        </Card>

        {/* CSV Import */}
        <Card className="export-section">
          <div className="section-header">
            <Icon name="layers" size={24} color="var(--color-secondary)" />
            <div>
              <h3 className="section-title">Import CSV</h3>
              <p className="section-desc">Bulk import items from a spreadsheet</p>
            </div>
          </div>
          {onCSVImport ? (
            <Button onClick={onCSVImport}>Import CSV</Button>
          ) : (
            <p className="csv-note caption">
              CSV import requires selecting a collection first.
            </p>
          )}
        </Card>

        {/* Error */}
        {error && (
          <p className="export-error">{error}</p>
        )}
      </div>

      <style>{`
        .export-header {
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

        .export-section {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .section-header {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
        }

        .section-title {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
        }

        .section-desc {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
        }

        .section-stats {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-md);
        }

        .import-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: var(--spacing-md);
          background: rgba(51, 89, 115, 0.1);
          color: var(--color-primary);
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .import-btn:hover {
          background: rgba(51, 89, 115, 0.15);
        }

        .csv-note {
          text-align: center;
        }

        .export-error {
          color: var(--color-error);
          text-align: center;
          padding: var(--spacing-md);
        }

        .btn {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
