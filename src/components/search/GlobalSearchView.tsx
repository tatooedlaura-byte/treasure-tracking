import { useState, useMemo } from 'react';
import { Card, Icon } from '../common';
import { useCollections } from '../../hooks/useCollections';
import { getCollectionTypeInfo } from '../../data/collectionTypes';
import { getItemName } from '../../types';
import type { CollectionItem } from '../../types';

interface GlobalSearchViewProps {
  onClose: () => void;
}

interface SearchResult {
  item: CollectionItem;
  collectionName: string;
  collectionColor: string;
}

export function GlobalSearchView({ onClose }: GlobalSearchViewProps) {
  const { collections, items } = useCollections();
  const [query, setQuery] = useState('');

  // Search across all items
  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];

    const searchQuery = query.toLowerCase();

    return items
      .filter((item) => {
        const name = getItemName(item).toLowerCase();
        if (name.includes(searchQuery)) return true;

        // Search field values
        return Object.values(item.fieldValues).some((v) =>
          v.toLowerCase().includes(searchQuery)
        );
      })
      .map((item) => {
        const collection = collections.find((c) => c.id === item.collectionId);
        const typeInfo = collection
          ? getCollectionTypeInfo(collection.type)
          : null;

        return {
          item,
          collectionName: collection?.name || 'Unknown',
          collectionColor: typeInfo?.color || '#666',
        };
      })
      .slice(0, 50); // Limit results
  }, [query, items, collections]);

  return (
    <div className="adaptive-background">
      <div className="container">
        {/* Header */}
        <header className="search-header">
          <div className="search-input-wrapper">
            <Icon name="search" size={20} />
            <input
              type="text"
              className="search-input"
              placeholder="Search all items..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            {query && (
              <button className="clear-btn" onClick={() => setQuery('')}>
                <Icon name="x" size={18} />
              </button>
            )}
          </div>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </header>

        {/* Results */}
        {query.trim() ? (
          results.length === 0 ? (
            <div className="no-results">
              <Icon name="search" size={48} className="empty-state-icon" />
              <p>No results found</p>
              <p className="caption">Try a different search term</p>
            </div>
          ) : (
            <div className="results-list">
              <p className="results-count">
                {results.length} {results.length === 1 ? 'result' : 'results'}
              </p>
              {results.map((result) => (
                <Card key={result.item.id} className="result-card">
                  <div
                    className="result-indicator"
                    style={{ backgroundColor: result.collectionColor }}
                  />
                  <div className="result-content">
                    <h3 className="result-name">{getItemName(result.item)}</h3>
                    <p className="result-collection">{result.collectionName}</p>
                  </div>
                  <Icon name="chevron-right" size={20} color="var(--color-text-secondary)" />
                </Card>
              ))}
            </div>
          )
        ) : (
          <div className="search-hint">
            <Icon name="search" size={48} className="empty-state-icon" />
            <p>Search across all your collections</p>
          </div>
        )}
      </div>

      <style>{`
        .search-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) 0;
        }

        .search-input-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm) var(--spacing-md);
          background: var(--color-card);
          border-radius: var(--radius-md);
          border: var(--card-border);
        }

        .search-input-wrapper svg {
          color: var(--color-text-secondary);
        }

        .search-input {
          flex: 1;
          border: none;
          background: transparent;
          font-size: var(--font-md);
          color: var(--color-text);
        }

        .search-input:focus {
          outline: none;
        }

        .clear-btn {
          background: transparent;
          border: none;
          padding: 4px;
          cursor: pointer;
          color: var(--color-text-secondary);
        }

        .cancel-btn {
          background: transparent;
          border: none;
          color: var(--color-accent);
          font-size: var(--font-md);
          font-weight: 600;
          cursor: pointer;
        }

        .no-results, .search-hint {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-xxl);
          text-align: center;
          color: var(--color-text-secondary);
        }

        .results-count {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-md);
        }

        .results-list {
          padding-bottom: var(--spacing-lg);
        }

        .result-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          margin-bottom: var(--spacing-sm);
          cursor: pointer;
        }

        .result-indicator {
          width: 4px;
          height: 40px;
          border-radius: 2px;
        }

        .result-content {
          flex: 1;
        }

        .result-name {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
        }

        .result-collection {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
        }
      `}</style>
    </div>
  );
}
