import { useState, useMemo, useEffect, useRef } from 'react';
import { Card, Icon, Button } from '../common';
import { ItemCard } from './ItemCard';
import { AddItemForm } from '../item/AddItemForm';
import { ItemDetailView } from '../item/ItemDetailView';
import { EditCollectionForm } from './EditCollectionForm';
import { useCollections } from '../../hooks/useCollections';
import { getCollectionTypeInfo, getCollectionFields } from '../../data/collectionTypes';
import { getItemName, getItemEstimatedValue, getItemCondition } from '../../types';
import type { ItemCollection, CollectionItem } from '../../types';

interface CollectionDetailViewProps {
  collection: ItemCollection;
  onBack: () => void;
  onHome?: () => void;
}

type SortOption = 'name' | 'date' | 'condition' | 'value';

export function CollectionDetailView({ collection, onBack, onHome }: CollectionDetailViewProps) {
  const { getItemsForCollection, deleteCollection, collectionValue } = useCollections();

  const [showAddItem, setShowAddItem] = useState(false);
  const [showEditCollection, setShowEditCollection] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('date');
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
          return getItemName(a).localeCompare(getItemName(b));
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

  const handleDeleteCollection = async () => {
    if (confirm(`Delete "${collection.name}" and all its items?`)) {
      await deleteCollection(collection.id);
      onBack();
    }
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
    <div className="adaptive-background">
      <div className="container">
        {/* Header */}
        <header className="detail-header">
          <div className="header-left">
            {onHome && (
              <button className="home-btn" onClick={onHome}>
                <Icon name="home" size={22} />
              </button>
            )}
            <button className="back-btn" onClick={onBack}>
              <Icon name="chevron-left" size={24} />
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

        {/* Search */}
        {items.length > 0 && (
          <div className="search-input-wrapper">
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
          <div className="sort-bar">
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
          <Card className="empty-state">
            <Icon name="archive" size={50} className="empty-state-icon" />
            <h3>{items.length === 0 ? 'No items yet' : 'No matching items'}</h3>
            <p className="caption">
              {items.length === 0
                ? 'Add your first item to this collection'
                : 'Try a different search term'}
            </p>
            {items.length === 0 && (
              <Button onClick={() => setShowAddItem(true)}>
                <Icon name="plus" size={20} />
                Add Item
              </Button>
            )}
          </Card>
        ) : (
          <div className="items-list">
            {filteredItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                fields={fields}
                onClick={() => setSelectedItem(item)}
              />
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
          padding: var(--spacing-sm);
          cursor: pointer;
          color: var(--color-accent);
        }

        .back-btn, .header-btn {
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

        .sort-controls {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .sort-label {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
        }

        .sort-select {
          padding: var(--spacing-xs) var(--spacing-sm);
          background: transparent;
          border: none;
          font-size: var(--font-sm);
          color: var(--color-accent);
          font-weight: 500;
          cursor: pointer;
        }

        .items-count {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
        }

        .items-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          padding-bottom: 80px;
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
  );
}
