import { useState, useMemo } from 'react';
import { Card, Icon, Button } from '../common';
import { ItemCard } from './ItemCard';
import { AddItemForm } from '../item/AddItemForm';
import { ItemDetailView } from '../item/ItemDetailView';
import { useCollections } from '../../hooks/useCollections';
import { getCollectionTypeInfo, getCollectionFields } from '../../data/collectionTypes';
import { getItemName, getItemEstimatedValue, getItemCondition } from '../../types';
import type { ItemCollection, CollectionItem } from '../../types';

interface CollectionDetailViewProps {
  collection: ItemCollection;
  onBack: () => void;
}

type SortOption = 'name' | 'date' | 'condition' | 'value';

export function CollectionDetailView({ collection, onBack }: CollectionDetailViewProps) {
  const { getItemsForCollection, deleteCollection, collectionValue } = useCollections();

  const [showAddItem, setShowAddItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('date');
  const [showMenu, setShowMenu] = useState(false);

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
          <button className="back-btn" onClick={onBack}>
            <Icon name="chevron-left" size={24} />
          </button>
          <h1 className="heading">{collection.name}</h1>
          <div className="header-actions">
            <button className="header-btn" onClick={() => setShowMenu(!showMenu)}>
              <Icon name="more-vertical" size={24} />
            </button>
            {showMenu && (
              <div className="dropdown-menu">
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

        {/* Search and Sort */}
        {items.length > 0 && (
          <div className="search-sort-row">
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
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
            >
              <option value="date">Newest</option>
              <option value="name">Name</option>
              <option value="condition">Condition</option>
              <option value="value">Value</option>
            </select>
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

        .back-btn, .header-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-sm);
          cursor: pointer;
          color: var(--color-text);
        }

        .header-actions {
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

        .search-sort-row {
          display: flex;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
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

        .sort-select {
          padding: var(--spacing-sm) var(--spacing-md);
          background: var(--color-card);
          border: var(--card-border);
          border-radius: var(--radius-md);
          font-size: var(--font-sm);
          color: var(--color-text);
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
