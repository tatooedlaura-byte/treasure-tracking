import { useState, useEffect, useCallback } from 'react';
import { Icon, Card } from '../common';
import { searchMovies, getPosterUrl, isTMDBConfigured, type MovieSearchResult } from '../../services/movieApi';

interface MovieSearchProps {
  onSelect: (movie: MovieSearchResult, posterUrl: string | null) => void;
  onClose: () => void;
}

export function MovieSearch({ onSelect, onClose }: MovieSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<MovieSearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const isConfigured = isTMDBConfigured();

  const doSearch = useCallback(async () => {
    if (!query.trim()) return;

    setLoading(true);
    setSearched(true);
    const movies = await searchMovies(query);
    setResults(movies);
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

  const handleSelect = (movie: MovieSearchResult) => {
    const posterUrl = getPosterUrl(movie.poster_path, 'w500');
    onSelect(movie, posterUrl);
  };

  if (!isConfigured) {
    return (
      <div className="movie-search-overlay">
        <div className="movie-search-modal">
          <header className="modal-header">
            <h2>Movie Search</h2>
            <button className="close-btn" onClick={onClose}>
              <Icon name="x" size={24} />
            </button>
          </header>
          <div className="config-warning">
            <Icon name="help-circle" size={48} color="var(--color-warning)" />
            <h3>TMDB API Key Required</h3>
            <p>To search for movie covers, add your free TMDB API key:</p>
            <ol>
              <li>Go to <strong>themoviedb.org</strong> and create an account</li>
              <li>Go to Settings &gt; API and request an API key</li>
              <li>Add <code>VITE_TMDB_API_KEY=your_key</code> to your .env file</li>
              <li>Restart the app</li>
            </ol>
          </div>
        </div>
        <style>{movieSearchStyles}</style>
      </div>
    );
  }

  return (
    <div className="movie-search-overlay">
      <div className="movie-search-modal">
        <header className="modal-header">
          <h2>Search Movies</h2>
          <button className="close-btn" onClick={onClose}>
            <Icon name="x" size={24} />
          </button>
        </header>

        <div className="search-input-container">
          <Icon name="search" size={20} />
          <input
            type="text"
            className="search-input"
            placeholder="Search for a movie..."
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
              <Icon name="disc" size={48} color="var(--color-text-secondary)" />
              <p>No movies found for "{query}"</p>
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className="results-grid">
              {results.map((movie) => (
                <Card
                  key={movie.id}
                  className="movie-card"
                  onClick={() => handleSelect(movie)}
                >
                  <div className="movie-poster">
                    {movie.poster_path ? (
                      <img
                        src={getPosterUrl(movie.poster_path, 'w185') || ''}
                        alt={movie.title}
                      />
                    ) : (
                      <div className="no-poster">
                        <Icon name="disc" size={32} />
                      </div>
                    )}
                  </div>
                  <div className="movie-info">
                    <h3 className="movie-title">{movie.title}</h3>
                    <span className="movie-year">
                      {movie.release_date?.split('-')[0] || 'Unknown'}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {!loading && !searched && (
            <div className="search-hint">
              <Icon name="disc" size={48} color="var(--color-accent)" />
              <p>Type a movie title to search</p>
            </div>
          )}
        </div>
      </div>
      <style>{movieSearchStyles}</style>
    </div>
  );
}

const movieSearchStyles = `
  .movie-search-overlay {
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

  .movie-search-modal {
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
    .movie-search-overlay {
      align-items: center;
    }
    .movie-search-modal {
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

  .results-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }

  @media (min-width: 400px) {
    .results-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .movie-card {
    cursor: pointer;
    padding: 0 !important;
    overflow: hidden;
  }

  .movie-poster {
    aspect-ratio: 2/3;
    background: var(--color-background);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .movie-poster img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .no-poster {
    color: var(--color-text-secondary);
  }

  .movie-info {
    padding: var(--spacing-sm);
  }

  .movie-title {
    font-size: var(--font-sm);
    font-weight: 600;
    color: var(--color-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .movie-year {
    font-size: var(--font-xs);
    color: var(--color-text-secondary);
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
