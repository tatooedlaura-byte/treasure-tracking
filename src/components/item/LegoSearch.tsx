import { useState, useEffect, useCallback } from 'react';
import { Icon, Card } from '../common';
import {
  searchLegoSets,
  getThemeName,
  isRebrickableConfigured,
  type LegoSetSearchResult,
} from '../../services/rebrickableApi';

interface LegoSearchProps {
  onSelect: (set: LegoSetSearchResult, themeName: string) => void;
  onClose: () => void;
}

export function LegoSearch({ onSelect, onClose }: LegoSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<LegoSetSearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const isConfigured = isRebrickableConfigured();

  const doSearch = useCallback(async () => {
    if (!query.trim()) return;

    setLoading(true);
    setSearched(true);
    const sets = await searchLegoSets(query);
    setResults(sets);
    setLoading(false);
  }, [query]);

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }

    const timer = setTimeout(doSearch, 500);
    return () => clearTimeout(timer);
  }, [query, doSearch]);

  const handleSelect = async (set: LegoSetSearchResult) => {
    // Fetch theme name before returning
    const themeName = await getThemeName(set.theme_id);
    onSelect(set, themeName);
  };

  if (!isConfigured) {
    return (
      <div className="lego-search-overlay">
        <div className="lego-search-modal">
          <header className="modal-header">
            <h2>Lego Search</h2>
            <button className="close-btn" onClick={onClose}>
              <Icon name="x" size={24} />
            </button>
          </header>
          <div className="config-warning">
            <Icon name="help-circle" size={48} color="var(--color-warning)" />
            <h3>Rebrickable API Key Required</h3>
            <p>To search for Lego sets, add your free Rebrickable API key:</p>
            <ol>
              <li>Go to <strong>rebrickable.com</strong> and create an account</li>
              <li>Go to Settings &gt; API and generate a key</li>
              <li>Add <code>VITE_REBRICKABLE_API_KEY=your_key</code> to your .env file</li>
              <li>Restart the app</li>
            </ol>
          </div>
        </div>
        <style>{legoSearchStyles}</style>
      </div>
    );
  }

  return (
    <div className="lego-search-overlay">
      <div className="lego-search-modal">
        <header className="modal-header">
          <h2>Search Lego Sets</h2>
          <button className="close-btn" onClick={onClose}>
            <Icon name="x" size={24} />
          </button>
        </header>

        <div className="search-input-container">
          <Icon name="search" size={20} />
          <input
            type="text"
            className="search-input"
            placeholder="Search by name or set number..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>

        <div className="results-container">
          {loading && (
            <div className="loading">
              <div className="spinner" />
              <span>Searching...</span>
            </div>
          )}

          {!loading && searched && results.length === 0 && (
            <div className="no-results">
              <Icon name="puzzle" size={48} color="var(--color-text-secondary)" />
              <p>No Lego sets found for "{query}"</p>
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className="results-list">
              {results.map((set) => (
                <Card
                  key={set.set_num}
                  className="lego-card"
                  onClick={() => handleSelect(set)}
                >
                  <div className="lego-image">
                    {set.set_img_url ? (
                      <img src={set.set_img_url} alt={set.name} />
                    ) : (
                      <div className="no-image">
                        <Icon name="puzzle" size={32} />
                      </div>
                    )}
                  </div>
                  <div className="lego-info">
                    <h3 className="lego-name">{set.name}</h3>
                    <div className="lego-meta">
                      <span className="lego-set-num">{set.set_num}</span>
                      <span className="lego-year">{set.year}</span>
                      <span className="lego-parts">{set.num_parts} pcs</span>
                    </div>
                  </div>
                  <Icon name="chevron-right" size={20} color="var(--color-text-secondary)" />
                </Card>
              ))}
            </div>
          )}

          {!loading && !searched && (
            <div className="search-hint">
              <Icon name="puzzle" size={48} color="var(--color-toys)" />
              <p>Search by set name or number</p>
              <p className="hint-example">e.g. "Millennium Falcon" or "75192"</p>
            </div>
          )}
        </div>
      </div>
      <style>{legoSearchStyles}</style>
    </div>
  );
}

const legoSearchStyles = `
  .lego-search-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 300;
    padding: var(--spacing-md);
  }

  .lego-search-modal {
    background: var(--color-card);
    border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    width: 100%;
    max-width: 500px;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  @media (min-width: 640px) {
    .lego-search-overlay {
      align-items: center;
    }
    .lego-search-modal {
      border-radius: var(--radius-xl);
      max-height: 70vh;
    }
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-lg);
    border-bottom: 1px solid var(--card-border);
  }

  .modal-header h2 {
    font-size: var(--font-lg);
    font-weight: 700;
  }

  .close-btn {
    background: transparent;
    border: none;
    padding: var(--spacing-xs);
    cursor: pointer;
    color: var(--color-text);
  }

  .search-input-container {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-md) var(--spacing-lg);
    border-bottom: 1px solid var(--card-border);
    color: var(--color-text-secondary);
  }

  .search-input-container .search-input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: var(--font-md);
    color: var(--color-text);
    outline: none;
  }

  .results-container {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-md);
  }

  .loading, .no-results, .search-hint {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-md);
    padding: var(--spacing-xxl);
    color: var(--color-text-secondary);
    text-align: center;
  }

  .hint-example {
    font-size: var(--font-sm);
    opacity: 0.7;
  }

  .results-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .lego-card {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md) !important;
    cursor: pointer;
  }

  .lego-image {
    width: 70px;
    height: 70px;
    border-radius: var(--radius-md);
    background: var(--color-background);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
  }

  .lego-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .no-image {
    color: var(--color-text-secondary);
  }

  .lego-info {
    flex: 1;
    min-width: 0;
  }

  .lego-name {
    font-size: var(--font-md);
    font-weight: 600;
    color: var(--color-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
  }

  .lego-meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    font-size: var(--font-xs);
    color: var(--color-text-secondary);
  }

  .lego-set-num {
    font-weight: 600;
    color: var(--color-toys);
  }

  .config-warning {
    padding: var(--spacing-xl);
    text-align: center;
  }

  .config-warning h3 {
    margin: var(--spacing-md) 0;
    color: var(--color-text);
  }

  .config-warning p {
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
  }

  .config-warning ol {
    text-align: left;
    padding-left: var(--spacing-xl);
    color: var(--color-text-secondary);
    line-height: 1.8;
  }

  .config-warning code {
    background: var(--color-background);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: var(--font-sm);
  }
`;
