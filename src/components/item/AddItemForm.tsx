import { useState, useCallback } from 'react';
import { Button, Card, Icon, AuthenticatedImage } from '../common';
import { FieldEditor } from './FieldEditor';
import { MovieSearch } from './MovieSearch';
import { LegoSearch } from './LegoSearch';
import { useCollections } from '../../hooks/useCollections';
import { searchMovies, getPosterUrl, isTMDBConfigured, type MovieSearchResult } from '../../services/movieApi';
import { type LegoSetSearchResult } from '../../services/rebrickableApi';
import { takePhoto } from '../../utils/camera';
import type { ItemCollection, FieldDefinition, CollectionItem } from '../../types';

interface AddItemFormProps {
  collection: ItemCollection;
  fields: FieldDefinition[];
  existingItem?: CollectionItem;
  onClose: () => void;
  onSuccess: () => void;
}

export function AddItemForm({
  collection,
  fields,
  existingItem,
  onClose,
  onSuccess,
}: AddItemFormProps) {
  const { createItem, updateItem } = useCollections();
  const isEditing = !!existingItem;

  const [fieldValues, setFieldValues] = useState<Record<string, string>>(
    existingItem?.fieldValues || {}
  );
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showMovieSearch, setShowMovieSearch] = useState(false);
  const [showLegoSearch, setShowLegoSearch] = useState(false);
  const [fetchingPoster, setFetchingPoster] = useState(false);
  const [posterFetched, setPosterFetched] = useState(false);

  const isDVDCollection = collection.type === 'dvds';
  const isToysCollection = collection.type === 'toys';
  const tmdbConfigured = isTMDBConfigured();

  const handleMovieSelect = async (movie: MovieSearchResult, moviePosterUrl: string | null) => {
    // Fill in fields from movie data
    setFieldValues((prev) => ({
      ...prev,
      Name: movie.title,
      Year: movie.release_date?.split('-')[0] || '',
    }));

    // Fetch the poster and convert to file for upload
    if (moviePosterUrl) {
      try {
        const response = await fetch(moviePosterUrl);
        const blob = await response.blob();
        const file = new File([blob], `${movie.title.replace(/[^a-z0-9]/gi, '_')}_poster.jpg`, {
          type: 'image/jpeg',
        });
        setPhotoFiles([file]);
      } catch (err) {
        console.error('Failed to fetch poster:', err);
      }
    }

    setShowMovieSearch(false);
  };

  const handleLegoSelect = async (set: LegoSetSearchResult, themeName: string) => {
    // Fill in fields from Lego set data
    setFieldValues((prev) => ({
      ...prev,
      Name: set.name,
      'Set Number': set.set_num,
      Theme: themeName,
      Pieces: set.num_parts.toString(),
      Year: set.year.toString(),
      Brand: 'Lego',
    }));

    // Fetch the set image and convert to file for upload
    if (set.set_img_url) {
      try {
        const response = await fetch(set.set_img_url);
        const blob = await response.blob();
        const file = new File([blob], `${set.set_num}_${set.name.replace(/[^a-z0-9]/gi, '_')}.jpg`, {
          type: 'image/jpeg',
        });
        setPhotoFiles([file]);
      } catch (err) {
        console.error('Failed to fetch Lego set image:', err);
      }
    }

    setShowLegoSearch(false);
  };

  // Auto-fetch movie poster when Name field is filled for DVD collections
  const autoFetchMoviePoster = useCallback(async (movieName: string) => {
    if (!isDVDCollection || !tmdbConfigured || !movieName.trim()) {
      return;
    }

    setFetchingPoster(true);
    try {
      const results = await searchMovies(movieName);
      if (results.length > 0) {
        const movie = results[0];
        const posterUrl = getPosterUrl(movie.poster_path, 'w500');

        // Auto-fill year if empty (use functional update to avoid stale state)
        if (movie.release_date) {
          setFieldValues((prev) => {
            if (!prev['Year']) {
              return { ...prev, Year: movie.release_date.split('-')[0] };
            }
            return prev;
          });
        }

        // Fetch and set poster
        if (posterUrl) {
          const response = await fetch(posterUrl);
          const blob = await response.blob();
          const file = new File([blob], `${movie.title.replace(/[^a-z0-9]/gi, '_')}_poster.jpg`, {
            type: 'image/jpeg',
          });
          setPhotoFiles((prev) => prev.length === 0 ? [file] : prev);
          setPosterFetched(true);
        }
      }
    } catch (err) {
      console.error('Auto-fetch poster failed:', err);
    } finally {
      setFetchingPoster(false);
    }
  }, [isDVDCollection, tmdbConfigured]);

  const handleFieldChange = (fieldName: string, value: string) => {
    setFieldValues((prev) => ({ ...prev, [fieldName]: value }));
  };

  // Reset poster fetched when name changes (so auto-fetch can work again on blur)
  const handleNameChange = (value: string) => {
    if (posterFetched) {
      setPosterFetched(false);
    }
    setFieldValues((prev) => ({ ...prev, Name: value }));
  };

  const handleNameBlur = () => {
    // Only auto-fetch if we haven't already and there are no photos
    if (isDVDCollection && fieldValues['Name'] && !posterFetched && photoFiles.length === 0) {
      autoFetchMoviePoster(fieldValues['Name']);
    }
  };

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setPhotoFiles((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const removePhoto = (index: number) => {
    setPhotoFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSaving(true);
    setError(null);

    try {
      if (isEditing) {
        await updateItem(
          { ...existingItem, fieldValues },
          photoFiles.length > 0 ? photoFiles : undefined
        );
      } else {
        await createItem(collection.id, fieldValues, photoFiles);
      }
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save item');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="adaptive-background">
      <div className="container">
        {/* Header */}
        <header className="form-header">
          <button className="back-btn" onClick={onClose}>
            <Icon name="x" size={28} />
          </button>
          <h1 className="heading">{isEditing ? 'Edit Item' : 'Add Item'}</h1>
          <div style={{ width: 40 }} />
        </header>

        {/* Movie Search Button for DVDs */}
        {isDVDCollection && !isEditing && (
          <Card className="movie-search-card" onClick={() => setShowMovieSearch(true)}>
            <div className="movie-search-content">
              <Icon name="search" size={24} color="var(--color-dvds)" />
              <div>
                <h3>Search Movie Database</h3>
                <p>Find movie covers and auto-fill details</p>
              </div>
            </div>
            <Icon name="chevron-right" size={20} color="var(--color-text-secondary)" />
          </Card>
        )}

        {/* Lego Search Button for Toys */}
        {isToysCollection && !isEditing && (
          <Card className="lego-search-card" onClick={() => setShowLegoSearch(true)}>
            <div className="lego-search-content">
              <Icon name="puzzle" size={24} color="var(--color-toys)" />
              <div>
                <h3>Search Lego Database</h3>
                <p>Find set images and auto-fill details</p>
              </div>
            </div>
            <Icon name="chevron-right" size={20} color="var(--color-text-secondary)" />
          </Card>
        )}

        {/* Movie Search Modal */}
        {showMovieSearch && (
          <MovieSearch
            onSelect={handleMovieSelect}
            onClose={() => setShowMovieSearch(false)}
          />
        )}

        {/* Lego Search Modal */}
        {showLegoSearch && (
          <LegoSearch
            onSelect={handleLegoSelect}
            onClose={() => setShowLegoSearch(false)}
          />
        )}

        <form onSubmit={handleSubmit}>
          {/* Fields */}
          {fields.map((field) => (
            <Card key={field.id} className="form-section">
              <FieldEditor
                field={field}
                value={fieldValues[field.name] || ''}
                onChange={field.name === 'Name' && isDVDCollection
                  ? handleNameChange
                  : (value) => handleFieldChange(field.name, value)}
                onBlur={field.name === 'Name' && isDVDCollection ? handleNameBlur : undefined}
              />
              {field.name === 'Name' && isDVDCollection && fetchingPoster && (
                <div className="poster-fetching">
                  <div className="spinner small" />
                  <span>Finding movie poster...</span>
                </div>
              )}
            </Card>
          ))}

          {/* Photos */}
          <Card className="form-section">
            <label className="form-label">Photos</label>

            {/* Existing photos (if editing) */}
            {isEditing && existingItem.photos.length > 0 && (
              <div className="photo-grid">
                {existingItem.photos.map((photo) => (
                  <div key={photo.id} className="photo-thumb">
                    <AuthenticatedImage src={photo.url} alt="" />
                  </div>
                ))}
              </div>
            )}

            {/* New photos */}
            {photoFiles.length > 0 && (
              <div className="photo-grid">
                {photoFiles.map((file, index) => (
                  <div key={index} className="photo-thumb">
                    <img src={URL.createObjectURL(file)} alt="" />
                    <button
                      type="button"
                      className="photo-remove"
                      onClick={() => removePhoto(index)}
                    >
                      <Icon name="x" size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="photo-btn-row">
              <button
                type="button"
                className="add-photo-btn"
                onClick={async () => {
                  try {
                    const file = await takePhoto();
                    setPhotoFiles((prev) => [...prev, file]);
                  } catch {
                    // User cancelled
                  }
                }}
              >
                <Icon name="camera" size={20} />
                Take Photo
              </button>
              <label className="add-photo-btn">
                <Icon name="image" size={20} />
                Add Photos
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoSelect}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          </Card>

          {/* Error */}
          {error && <p className="form-error">{error}</p>}

          {/* Submit */}
          <Button type="submit" disabled={saving}>
            {saving ? 'Saving...' : isEditing ? 'Save Changes' : 'Add Item'}
          </Button>
        </form>
      </div>

      <style>{`
        .form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
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

        .form-section {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .form-label {
          display: block;
          font-size: var(--font-sm);
          font-weight: 600;
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
        }

        .photo-thumb {
          aspect-ratio: 1;
          border-radius: var(--radius-md);
          overflow: hidden;
          position: relative;
        }

        .photo-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .photo-remove {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .photo-btn-row {
          display: flex;
          gap: var(--spacing-sm);
        }

        .add-photo-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-md);
          border: 2px dashed var(--color-text-secondary);
          border-radius: var(--radius-md);
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          background: transparent;
          font: inherit;
        }

        .add-photo-btn:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .form-error {
          color: var(--color-error);
          font-size: var(--font-sm);
          margin-bottom: var(--spacing-md);
          text-align: center;
        }

        form .btn {
          width: 100%;
          margin-bottom: var(--spacing-lg);
        }

        .movie-search-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
          cursor: pointer;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05));
          border: 2px solid rgba(139, 92, 246, 0.3);
        }

        .movie-search-card:hover {
          border-color: rgba(139, 92, 246, 0.5);
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.08));
        }

        .movie-search-content {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }

        .movie-search-content h3 {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 2px;
        }

        .movie-search-content p {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
        }

        .lego-search-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
          cursor: pointer;
          background: linear-gradient(135deg, rgba(219, 175, 61, 0.1), rgba(219, 175, 61, 0.05));
          border: 2px solid rgba(219, 175, 61, 0.3);
        }

        .lego-search-card:hover {
          border-color: rgba(219, 175, 61, 0.5);
          background: linear-gradient(135deg, rgba(219, 175, 61, 0.15), rgba(219, 175, 61, 0.08));
        }

        .lego-search-content {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }

        .lego-search-content h3 {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 2px;
        }

        .lego-search-content p {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
        }

        .poster-fetching {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-top: var(--spacing-sm);
          padding: var(--spacing-sm);
          background: rgba(92, 77, 115, 0.1);
          border-radius: 6px;
          font-size: var(--font-sm);
          color: var(--color-dvds);
        }

        .spinner.small {
          width: 16px;
          height: 16px;
          border-width: 2px;
          border-color: rgba(92, 77, 115, 0.2);
          border-top-color: var(--color-dvds);
        }
      `}</style>
    </div>
  );
}
