import { useState } from 'react';
import { Card, Icon, Button } from '../common';
import { useCollections } from '../../hooks/useCollections';
import { getCollectionFields } from '../../data/collectionTypes';
import type { ItemCollection } from '../../types';

interface CSVImportViewProps {
  onClose: () => void;
}

interface CSVData {
  headers: string[];
  rows: string[][];
}

export function CSVImportView({ onClose }: CSVImportViewProps) {
  const { collections, createItem } = useCollections();
  const [step, setStep] = useState<'select' | 'map' | 'preview' | 'done'>('select');
  const [selectedCollection, setSelectedCollection] = useState<ItemCollection | null>(null);
  const [csvData, setCsvData] = useState<CSVData | null>(null);
  const [columnMapping, setColumnMapping] = useState<Record<string, string>>({});
  const [importing, setImporting] = useState(false);
  const [importedCount, setImportedCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const parseCSV = (text: string): CSVData => {
    const lines = text.trim().split('\n');
    const headers = parseCSVLine(lines[0]);
    const rows = lines.slice(1).map(line => parseCSVLine(line));
    return { headers, rows };
  };

  const parseCSVLine = (line: string): string[] => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const data = parseCSV(text);
      setCsvData(data);
      setStep('map');

      // Auto-map columns with matching names
      if (selectedCollection) {
        const fields = getCollectionFields(selectedCollection.type);
        const autoMap: Record<string, string> = {};

        // Common aliases for field names
        const aliases: Record<string, string[]> = {
          'Name': ['name', 'title', 'item', 'movie', 'film', 'album', 'book'],
          'Year': ['year', 'release', 'released', 'date'],
          'Genre': ['genre', 'category', 'type', 'color'],
          'Director': ['director', 'directed by'],
          'Author': ['author', 'writer', 'by'],
          'Condition': ['condition', 'state', 'quality'],
          'Value': ['value', 'price', 'cost', 'worth'],
        };

        for (const field of fields) {
          // Try exact match first
          let matchingHeader = data.headers.find(
            h => h.toLowerCase() === field.name.toLowerCase()
          );

          // Try aliases
          if (!matchingHeader && aliases[field.name]) {
            for (const alias of aliases[field.name]) {
              matchingHeader = data.headers.find(
                h => h.toLowerCase() === alias.toLowerCase()
              );
              if (matchingHeader) break;
            }
          }

          if (matchingHeader) {
            autoMap[field.name] = matchingHeader;
          }
        }
        setColumnMapping(autoMap);
      }
    } catch (err) {
      setError('Failed to parse CSV file');
    }
  };

  const handleImport = async () => {
    if (!selectedCollection || !csvData) return;

    // Filter out empty mappings
    const validMappings = Object.entries(columnMapping).filter(([, v]) => v && v.trim() !== '');

    if (validMappings.length === 0) {
      setError('Please match at least one column to a field');
      return;
    }

    setImporting(true);
    setError(null);
    let count = 0;

    try {
      for (let i = 0; i < csvData.rows.length; i++) {
        const row = csvData.rows[i];
        const fieldValues: Record<string, string> = {};

        // Map CSV columns to field values
        for (const [fieldName, csvHeader] of Object.entries(columnMapping)) {
          if (!csvHeader) continue; // Skip empty mappings
          const headerIndex = csvData.headers.indexOf(csvHeader);
          if (headerIndex >= 0 && row[headerIndex]) {
            fieldValues[fieldName] = row[headerIndex];
          }
        }

        // Only create item if we have at least one value
        if (Object.keys(fieldValues).length > 0) {
          await createItem(selectedCollection.id, fieldValues);
          count++;
          // Update progress every 10 items
          if (count % 10 === 0) {
            setImportedCount(count);
          }
        }
      }

      console.log('[CSV Import] Imported count:', count);
      setImportedCount(count);
      setStep('done');
    } catch (err) {
      console.error('[CSV Import] Error:', err);
      setError(err instanceof Error ? err.message : 'Import failed');
    } finally {
      setImporting(false);
    }
  };

  const fields = selectedCollection ? getCollectionFields(selectedCollection.type) : [];

  return (
    <div className="adaptive-background">
      <div className="container">
        {/* Header */}
        <header className="csv-header">
          <button className="back-btn" onClick={onClose}>
            <Icon name="chevron-left" size={24} />
          </button>
          <h1 className="heading">Import CSV</h1>
          <div style={{ width: 40 }} />
        </header>

        {/* Step 1: Select Collection */}
        {step === 'select' && (
          <>
            <Card className="csv-section">
              <h3 className="section-title">1. Select Collection</h3>
              <p className="section-desc">Choose which collection to import items into</p>

              <div className="collection-list">
                {collections.length === 0 ? (
                  <p className="no-collections">No collections yet. Create one first.</p>
                ) : (
                  collections.map((col) => (
                    <button
                      key={col.id}
                      className={`collection-option ${selectedCollection?.id === col.id ? 'selected' : ''}`}
                      onClick={() => setSelectedCollection(col)}
                    >
                      {col.name}
                    </button>
                  ))
                )}
              </div>
            </Card>

            {selectedCollection && (
              <Card className="csv-section">
                <h3 className="section-title">2. Select CSV File</h3>
                <p className="section-desc">Choose a CSV file to import</p>
                <label className="file-btn">
                  Select CSV File
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileSelect}
                    style={{ display: 'none' }}
                  />
                </label>
              </Card>
            )}
          </>
        )}

        {/* Step 2: Map Columns */}
        {step === 'map' && csvData && (
          <>
            {/* Auto-mapping success message */}
            {Object.keys(columnMapping).length > 0 && (
              <Card className="csv-section auto-mapped-notice">
                <Icon name="check-circle" size={20} color="var(--color-success)" />
                <span>
                  Auto-matched {Object.keys(columnMapping).length} column{Object.keys(columnMapping).length !== 1 ? 's' : ''}!
                  Review below or just click Import.
                </span>
              </Card>
            )}

            <Card className="csv-section">
              <h3 className="section-title">Column Mapping</h3>
              <p className="section-desc">
                Your CSV columns are matched to collection fields.
                Adjust if needed, or leave as "Skip" to ignore a field.
              </p>

              <div className="mapping-list">
                {fields.map((field) => {
                  const mappedHeader = columnMapping[field.name];
                  const headerIndex = mappedHeader ? csvData.headers.indexOf(mappedHeader) : -1;
                  const sampleValue = headerIndex >= 0 && csvData.rows[0] ? csvData.rows[0][headerIndex] : null;

                  return (
                    <div key={field.id} className="mapping-row">
                      <div className="field-info-col">
                        <span className="field-name">{field.name}</span>
                        {sampleValue && (
                          <span className="sample-value">e.g. "{sampleValue}"</span>
                        )}
                      </div>
                      <select
                        className="column-select"
                        value={columnMapping[field.name] || ''}
                        onChange={(e) =>
                          setColumnMapping({ ...columnMapping, [field.name]: e.target.value })
                        }
                      >
                        <option value="">-- Skip --</option>
                        {csvData.headers.map((header) => (
                          <option key={header} value={header}>
                            {header}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="csv-section">
              <h3 className="section-title">Preview ({csvData.rows.length} items)</h3>
              <p className="section-desc">First few rows from your CSV file</p>

              <div className="preview-table">
                <div className="preview-row preview-header">
                  {csvData.headers.slice(0, 3).map((header, j) => (
                    <span key={j} className="preview-cell">{header}</span>
                  ))}
                  {csvData.headers.length > 3 && <span className="preview-cell">...</span>}
                </div>
                {csvData.rows.slice(0, 3).map((row, i) => (
                  <div key={i} className="preview-row">
                    {row.slice(0, 3).map((cell, j) => (
                      <span key={j} className="preview-cell">{cell || '-'}</span>
                    ))}
                    {row.length > 3 && <span className="preview-cell">...</span>}
                  </div>
                ))}
                {csvData.rows.length > 3 && (
                  <p className="preview-more">+ {csvData.rows.length - 3} more items</p>
                )}
              </div>
            </Card>

            <Button onClick={handleImport} disabled={importing} className="import-btn">
              {importing
                ? `Importing... ${importedCount} of ${csvData.rows.length}`
                : `Import ${csvData.rows.length} Items to ${selectedCollection?.name}`}
            </Button>

            {importing && (
              <p className="import-progress-hint">Please wait, this may take a moment for large files...</p>
            )}

            {!importing && (
              <button className="back-link" onClick={() => {
                setStep('select');
                setCsvData(null);
                setColumnMapping({});
              }}>
                ← Start over with different file
              </button>
            )}
          </>
        )}

        {/* Step 3: Done */}
        {step === 'done' && (
          <Card className="csv-section done-section">
            <Icon name="check-circle" size={48} color="var(--color-success)" />
            <h3 className="done-title">Import Complete!</h3>
            <p className="done-desc">Successfully imported {importedCount} items</p>
            <Button onClick={onClose}>Done</Button>
          </Card>
        )}

        {/* Error */}
        {error && <p className="csv-error">{error}</p>}
      </div>

      <style>{`
        .csv-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
        }

        .back-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-sm);
          cursor: pointer;
          color: var(--color-text);
        }

        .csv-section {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .section-title {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: var(--spacing-xs);
        }

        .section-desc {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-md);
        }

        .collection-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .collection-option {
          padding: var(--spacing-md);
          background: transparent;
          border: 2px solid var(--color-border);
          border-radius: var(--radius-md);
          text-align: left;
          cursor: pointer;
          font-size: var(--font-md);
          color: var(--color-text);
          transition: all var(--transition-fast);
        }

        .collection-option.selected {
          border-color: var(--color-accent);
          background: rgba(51, 166, 140, 0.1);
        }

        .no-collections {
          color: var(--color-text-secondary);
          text-align: center;
          padding: var(--spacing-lg);
        }

        .file-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: var(--spacing-md);
          background: var(--color-accent);
          color: white;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
        }

        .mapping-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .auto-mapped-notice {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-md) var(--spacing-lg);
          background: rgba(51, 166, 140, 0.1);
          border: 1px solid var(--color-success);
        }

        .auto-mapped-notice span {
          color: var(--color-text);
          font-size: var(--font-sm);
        }

        .mapping-row {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-sm) 0;
          border-bottom: 1px solid var(--color-border);
        }

        .mapping-row:last-child {
          border-bottom: none;
        }

        .field-info-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .field-name {
          font-weight: 600;
          color: var(--color-text);
        }

        .sample-value {
          font-size: var(--font-xs);
          color: var(--color-text-secondary);
          font-style: italic;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 120px;
        }

        .column-select {
          flex: 1;
          padding: var(--spacing-sm) var(--spacing-md);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          background: var(--color-card);
          color: var(--color-text);
          font-size: var(--font-md);
        }

        .preview-table {
          background: rgba(0, 0, 0, 0.05);
          border-radius: var(--radius-sm);
          padding: var(--spacing-sm);
          overflow: hidden;
        }

        .preview-row {
          display: flex;
          gap: var(--spacing-sm);
          padding: var(--spacing-xs) 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .preview-row.preview-header {
          font-weight: 600;
          color: var(--color-text);
          border-bottom: 2px solid var(--color-border);
        }

        .preview-row:last-child {
          border-bottom: none;
        }

        .preview-cell {
          flex: 1;
          font-size: var(--font-xs);
          color: var(--color-text-secondary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .preview-more {
          font-size: var(--font-xs);
          color: var(--color-text-secondary);
          text-align: center;
          margin-top: var(--spacing-sm);
        }

        .done-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: var(--spacing-md);
        }

        .done-title {
          font-size: var(--font-lg);
          color: var(--color-text);
        }

        .done-desc {
          color: var(--color-text-secondary);
        }

        .csv-error {
          color: var(--color-error);
          text-align: center;
          padding: var(--spacing-md);
        }

        .import-btn {
          width: 100%;
          margin-bottom: var(--spacing-sm);
        }

        .import-progress-hint {
          text-align: center;
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          font-style: italic;
        }

        .back-link {
          display: block;
          width: 100%;
          text-align: center;
          background: transparent;
          border: none;
          color: var(--color-text-secondary);
          font-size: var(--font-sm);
          padding: var(--spacing-md);
          cursor: pointer;
        }

        .back-link:hover {
          color: var(--color-text);
        }
      `}</style>
    </div>
  );
}
