import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { Card, Icon, SwipeableItem, PullToRefresh, EmptyState } from '../common';
import { ItemCard } from './ItemCard';
import { AddItemForm } from '../item/AddItemForm';
import { ItemDetailView } from '../item/ItemDetailView';
import { EditCollectionForm } from './EditCollectionForm';
import { useCollections } from '../../hooks/useCollections';
import { getCollectionTypeInfo, getCollectionFields } from '../../data/collectionTypes';
import { getItemName, getItemEstimatedValue, getItemCondition } from '../../types';
import { searchMovies, getPosterUrl, isTMDBConfigured } from '../../services/movieApi';
import type { ItemCollection, CollectionItem } from '../../types';

interface CollectionDetailViewProps {
  collection: ItemCollection;
  onBack: () => void;
  onHome?: () => void;
}

type SortOption = 'name' | 'date' | 'condition' | 'value';

// Helper to strip leading articles for sorting
function getSortableName(name: string): string {
  const lower = name.toLowerCase();
  if (lower.startsWith('the ')) return name.slice(4);
  if (lower.startsWith('a ')) return name.slice(2);
  if (lower.startsWith('an ')) return name.slice(3);
  return name;
}

export function CollectionDetailView({ collection, onBack, onHome }: CollectionDetailViewProps) {
  const { getItemsForCollection, deleteCollection, deleteItem, collectionValue, updateItem, refresh } = useCollections();

  const [showAddItem, setShowAddItem] = useState(false);
  const [showEditCollection, setShowEditCollection] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [showMenu, setShowMenu] = useState(false);
  const [fetchingPosters, setFetchingPosters] = useState(false);
  const [fetchProgress, setFetchProgress] = useState({ current: 0, total: 0, currentTitle: '' });
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isDVDCollection = collection.type === 'dvds';
  const tmdbConfigured = isTMDBConfigured();

  // Close menu when clicking outside
  useEffect(() => {
    if (!showMenu) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);

  // Restore scroll position when returning from item detail
  useEffect(() => {
    if (!selectedItem && !showAddItem && !showEditCollection && savedScrollPosition > 0) {
      // Use setTimeout to ensure the DOM has rendered
      setTimeout(() => {
        window.scrollTo(0, savedScrollPosition);
      }, 0);
    }
  }, [selectedItem, showAddItem, showEditCollection, savedScrollPosition]);

  const typeInfo = getCollectionTypeInfo(collection.type);
  const fields = getCollectionFields(collection.type, collection.customFields);
  const items = getItemsForCollection(collection.id);
  const value = collectionValue(collection.id);

  // Filter and sort items
  const filteredItems = useMemo(() => {
    let result = items;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((item) => {
        const name = getItemName(item).toLowerCase();
        return (
          name.includes(query) ||
          Object.values(item.fieldValues).some((v) =>
            v.toLowerCase().includes(query)
          )
        );
      });
    }

    // Sort
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return getSortableName(getItemName(a)).localeCompare(getSortableName(getItemName(b)));
        case 'date':
          return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
        case 'condition': {
          const condA = getItemCondition(a);
          const condB = getItemCondition(b);
          if (!condA && !condB) return 0;
          if (!condA) return 1;
          if (!condB) return -1;
          return condA.localeCompare(condB);
        }
        case 'value': {
          const valA = getItemEstimatedValue(a) || 0;
          const valB = getItemEstimatedValue(b) || 0;
          return valB - valA;
        }
        default:
          return 0;
      }
    });

    return result;
  }, [items, searchQuery, sortBy]);

  // Group items by first letter when sorted by name and has enough items
  const showAlphabetIndex = sortBy === 'name' && filteredItems.length > 10 && !searchQuery;

  const groupedItems = useMemo(() => {
    if (!showAlphabetIndex) return null;

    const groups: Record<string, CollectionItem[]> = {};

    filteredItems.forEach((item) => {
      const name = getSortableName(getItemName(item));
      const firstChar = name.charAt(0).toUpperCase();
      const letter = /[A-Z]/.test(firstChar) ? firstChar : '#';

      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(item);
    });

    return groups;
  }, [filteredItems, showAlphabetIndex]);

  // Get available letters for the index
  const availableLetters = useMemo(() => {
    if (!groupedItems) return [];
    return Object.keys(groupedItems).sort((a, b) => {
      if (a === '#') return 1;
      if (b === '#') return -1;
      return a.localeCompare(b);
    });
  }, [groupedItems]);

  const scrollToLetter = (letter: string) => {
    const section = sectionRefs.current[letter];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Items without photos
  const itemsWithoutPhotos = useMemo(() => {
    return items.filter(item => item.photos.length === 0);
  }, [items]);

  // Fetch missing posters for DVD collections
  const fetchMissingPosters = useCallback(async () => {
    if (!isDVDCollection || !tmdbConfigured || itemsWithoutPhotos.length === 0) return;

    setFetchingPosters(true);
    setFetchProgress({ current: 0, total: itemsWithoutPhotos.length, currentTitle: '' });

    for (let i = 0; i < itemsWithoutPhotos.length; i++) {
      const item = itemsWithoutPhotos[i];
      const movieName = getItemName(item);

      setFetchProgress({ current: i + 1, total: itemsWithoutPhotos.length, currentTitle: movieName });

      try {
        const results = await searchMovies(movieName);
        if (results.length > 0) {
          const movie = results[0];
          const posterUrl = getPosterUrl(movie.poster_path, 'w500');

          if (posterUrl) {
            // Fetch poster image
            const response = await fetch(posterUrl);
            const blob = await response.blob();
            const file = new File([blob], `${movie.title.replace(/[^a-z0-9]/gi, '_')}_poster.jpg`, {
              type: 'image/jpeg',
            });

            // Update item with poster
            await updateItem(item, [file]);
          }
        }
      } catch (err) {
        console.error(`Failed to fetch poster for "${movieName}":`, err);
      }

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    setFetchingPosters(false);
    setFetchProgress({ current: 0, total: 0, currentTitle: '' });
  }, [isDVDCollection, tmdbConfigured, itemsWithoutPhotos, updateItem]);

  const handleDeleteCollection = async () => {
    if (confirm(`Delete "${collection.name}" and all its items?`)) {
      await deleteCollection(collection.id);
      onBack();
    }
  };

  const handleSelectItem = (item: CollectionItem) => {
    // Save current scroll position before navigating to item detail
    setSavedScrollPosition(window.scrollY);
    setSelectedItem(item);
  };

  // Show edit collection form
  if (showEditCollection) {
    return (
      <EditCollectionForm
        collection={collection}
        onClose={() => setShowEditCollection(false)}
        onSuccess={() => setShowEditCollection(false)}
      />
    );
  }

  // Show add item form
  if (showAddItem) {
    return (
      <AddItemForm
        collection={collection}
        fields={fields}
        onClose={() => setShowAddItem(false)}
        onSuccess={() => setShowAddItem(false)}
      />
    );
  }

  // Show item detail
  if (selectedItem) {
    return (
      <ItemDetailView
        item={selectedItem}
        collection={collection}
        fields={fields}
        onBack={() => setSelectedItem(null)}
      />
    );
  }

  return (
    <PullToRefresh onRefresh={refresh}>
    <div className="adaptive-background">
      <div className="container">
        {/* Header */}
        <header className="detail-header">
          <div className="header-left">
            {onHome && (
              <button className="home-btn" onClick={onHome}>
                <Icon name="home" size={28} />
              </button>
            )}
            <button className="back-btn" onClick={onBack}>
              <Icon name="chevron-left" size={32} />
            </button>
          </div>
          <h1 className="heading">{collection.name}</h1>
          <div className="header-actions" ref={menuRef}>
            <button className="header-btn" onClick={() => setShowAddItem(true)}>
              <Icon name="plus-circle" size={24} />
            </button>
            <button className="header-btn" onClick={() => setShowMenu(!showMenu)}>
              <Icon name="more-horizontal" size={24} />
            </button>
            {showMenu && (
              <div className="dropdown-menu">
                <button onClick={() => { setShowMenu(false); setShowEditCollection(true); }} className="menu-item">
                  <Icon name="edit" size={20} />
                  Edit Collection
                </button>
                <hr className="menu-divider" />
                <button onClick={handleDeleteCollection} className="menu-item danger">
                  <Icon name="trash" size={20} />
                  Delete Collection
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Stats */}
        <Card className="collection-stats">
          <div
            className="stats-icon"
            style={{
              background: `linear-gradient(135deg, ${typeInfo.color}, ${typeInfo.color}B3)`,
            }}
          >
            <Icon name={typeInfo.icon} size={24} color="white" />
          </div>
          <div className="stats-info">
            <span className="stats-count">{items.length} items</span>
            {value > 0 && (
              <span className="stats-value">${Math.round(value)} total value</span>
            )}
          </div>
        </Card>

        {/* Fetch Missing Posters for DVDs */}
        {isDVDCollection && tmdbConfigured && itemsWithoutPhotos.length > 0 && !fetchingPosters && (
          <Card className="fetch-posters-card" onClick={fetchMissingPosters}>
            <div className="fetch-posters-content">
              <Icon name="image" size={24} color="var(--color-dvds)" />
              <div>
                <h3>Fetch Missing Posters</h3>
                <p>{itemsWithoutPhotos.length} movie{itemsWithoutPhotos.length !== 1 ? 's' : ''} without cover art</p>
              </div>
            </div>
            <Icon name="chevron-right" size={20} color="var(--color-text-secondary)" />
          </Card>
        )}

        {/* Fetching Progress */}
        {fetchingPosters && (
          <Card className="fetch-progress-card">
            <div className="fetch-progress-content">
              <div className="spinner small" />
              <div>
                <h3>Fetching Posters...</h3>
                <p>{fetchProgress.current} of {fetchProgress.total}: {fetchProgress.currentTitle}</p>
              </div>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${(fetchProgress.current / fetchProgress.total) * 100}%` }}
              />
            </div>
          </Card>
        )}

        {/* Search */}
        {items.length > 0 && (
          <div className={`search-input-wrapper ${showAlphabetIndex ? 'with-index' : ''}`}>
            <Icon name="search" size={18} />
            <input
              type="text"
              className="search-input"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}

        {/* Sort Bar */}
        {items.length > 0 && (
          <div className={`sort-bar ${showAlphabetIndex ? 'with-index' : ''}`}>
            <div className="sort-controls">
              <span className="sort-label">Sort:</span>
              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
              >
                <option value="date">Date Added</option>
                <option value="name">Name</option>
                <option value="condition">Condition</option>
                <option value="value">Value</option>
              </select>
            </div>
            <span className="items-count">{filteredItems.length} items</span>
          </div>
        )}

        {/* Items List */}
        {filteredItems.length === 0 ? (
          items.length === 0 ? (
            <EmptyState
              type="items"
              title="No items yet"
              description="Add your first item to start building this collection"
              actionLabel="Add Item"
              onAction={() => setShowAddItem(true)}
            />
          ) : (
            <EmptyState
              type="search"
              title="No matching items"
              description="Try a different search term or adjust your filters"
            />
          )
        ) : showAlphabetIndex && groupedItems ? (
          <div className="items-with-index">
            <div className="items-list" ref={listRef}>
              {availableLetters.map((letter) => (
                <div
                  key={letter}
                  ref={(el) => { sectionRefs.current[letter] = el; }}
                  className="letter-section"
                >
                  <div className="letter-header">{letter}</div>
                  {groupedItems[letter].map((item) => (
                    <SwipeableItem key={item.id} onDelete={() => deleteItem(item.id)}>
                      <ItemCard
                        item={item}
                        fields={fields}
                        onClick={() => handleSelectItem(item)}
                      />
                    </SwipeableItem>
                  ))}
                </div>
              ))}
            </div>
            <div className="alphabet-index">
              {availableLetters.map((letter) => (
                <button
                  key={letter}
                  className="index-letter"
                  onClick={() => scrollToLetter(letter)}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="items-list">
            {filteredItems.map((item) => (
              <SwipeableItem key={item.id} onDelete={() => deleteItem(item.id)}>
                <ItemCard
                  item={item}
                  fields={fields}
                  onClick={() => handleSelectItem(item)}
                />
              </SwipeableItem>
            ))}
          </div>
        )}

        {/* FAB */}
        {items.length > 0 && (
          <button className="fab" onClick={() => setShowAddItem(true)}>
            <Icon name="plus" size={28} color="white" />
          </button>
        )}
      </div>

      <style>{`
        .detail-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
          position: relative;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
        }

        .home-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-md);
          cursor: pointer;
          color: var(--color-accent);
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .back-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-md);
          cursor: pointer;
          color: var(--color-text);
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .header-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-sm);
          cursor: pointer;
          color: var(--color-text);
        }

        .header-actions {
          display: flex;
          align-items: center;
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: var(--color-card);
          border-radius: var(--radius-md);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          min-width: 180px;
          z-index: 100;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          width: 100%;
          padding: var(--spacing-md);
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--color-text);
          font-size: var(--font-md);
        }

        .menu-item.danger {
          color: var(--color-error);
        }

        .menu-divider {
          margin: 0;
          border: none;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .collection-stats {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .stats-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stats-info {
          display: flex;
          flex-direction: column;
        }

        .stats-count {
          font-size: var(--font-lg);
          font-weight: 600;
          color: var(--color-text);
        }

        .stats-value {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
        }

        .fetch-posters-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
          cursor: pointer;
          background: linear-gradient(135deg, rgba(92, 77, 115, 0.1), rgba(92, 77, 115, 0.05));
          border: 2px solid rgba(92, 77, 115, 0.3);
        }

        .fetch-posters-card:hover {
          border-color: rgba(92, 77, 115, 0.5);
          background: linear-gradient(135deg, rgba(92, 77, 115, 0.15), rgba(92, 77, 115, 0.08));
        }

        .fetch-posters-content {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }

        .fetch-posters-content h3,
        .fetch-progress-content h3 {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 2px;
        }

        .fetch-posters-content p,
        .fetch-progress-content p {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
        }

        .fetch-progress-card {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
          background: linear-gradient(135deg, rgba(92, 77, 115, 0.1), rgba(92, 77, 115, 0.05));
          border: 2px solid rgba(92, 77, 115, 0.3);
        }

        .fetch-progress-content {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(92, 77, 115, 0.2);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--color-dvds);
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .spinner.small {
          width: 24px;
          height: 24px;
          border: 3px solid rgba(92, 77, 115, 0.2);
          border-top-color: var(--color-dvds);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm) var(--spacing-md);
          background: var(--color-card);
          border-radius: var(--radius-md);
          border: var(--card-border);
          margin-bottom: var(--spacing-sm);
        }

        .search-input-wrapper.with-index {
          margin-right: 28px;
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

        .sort-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-sm) 0;
          margin-bottom: var(--spacing-sm);
        }

        .sort-bar.with-index {
          margin-right: 28px;
        }

        .sort-controls {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          min-width: 0;
        }

        .sort-label {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          flex-shrink: 0;
        }

        .sort-select {
          padding: var(--spacing-xs) var(--spacing-sm);
          background: transparent;
          border: none;
          font-size: var(--font-sm);
          color: var(--color-text);
          font-weight: 500;
          cursor: pointer;
        }

        .items-count {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          flex-shrink: 0;
        }

        .items-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          padding-bottom: 80px;
        }

        .items-with-index {
          display: flex;
          position: relative;
        }

        .items-with-index .items-list {
          flex: 1;
          padding-right: 28px;
        }

        .letter-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .letter-header {
          font-size: var(--font-sm);
          font-weight: 700;
          color: var(--color-text);
          padding: var(--spacing-sm) var(--spacing-xs);
          position: sticky;
          top: 0;
          background: var(--color-background);
          z-index: 5;
        }

        .alphabet-index {
          position: fixed;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          z-index: 9999;
          background: var(--color-card);
          border-radius: 12px;
          padding: 6px 4px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
          border: 2px solid var(--color-primary);
          -webkit-transform: translateY(-50%);
          -webkit-backface-visibility: hidden;
        }

        .index-letter {
          width: 22px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text);
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          -webkit-tap-highlight-color: transparent;
        }

        .index-letter:active {
          background: var(--color-primary);
          color: white;
          border-radius: 4px;
        }

        .fab {
          position: fixed;
          bottom: calc(var(--spacing-lg) + env(safe-area-inset-bottom, 0px));
          right: var(--spacing-lg);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-accent), var(--color-icon-teal));
          border: none;
          box-shadow: 0 4px 12px rgba(51, 166, 140, 0.4);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-fast);
        }

        .fab:active {
          transform: scale(0.95);
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
    </PullToRefresh>
  );
}
