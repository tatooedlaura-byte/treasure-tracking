// TMDB (The Movie Database) API service for fetching movie posters
// Get a free API key at: https://www.themoviedb.org/settings/api

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p';

export interface MovieSearchResult {
  id: number;
  title: string;
  release_date: string;
  poster_path: string | null;
  overview: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  release_date: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  genres: { id: number; name: string }[];
  runtime: number;
  vote_average: number;
}

// Get poster URL in different sizes
export function getPosterUrl(posterPath: string | null, size: 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original' = 'w342'): string | null {
  if (!posterPath) return null;
  return `${TMDB_IMAGE_BASE}/${size}${posterPath}`;
}

// Search for movies by title
export async function searchMovies(query: string): Promise<MovieSearchResult[]> {
  if (!TMDB_API_KEY) {
    console.warn('TMDB API key not configured. Add VITE_TMDB_API_KEY to your .env file.');
    return [];
  }

  if (!query.trim()) return [];

  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&include_adult=false`
    );

    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.status}`);
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Failed to search movies:', error);
    return [];
  }
}

// Get movie details by ID
export async function getMovieDetails(movieId: number): Promise<MovieDetails | null> {
  if (!TMDB_API_KEY) {
    console.warn('TMDB API key not configured.');
    return null;
  }

  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to get movie details:', error);
    return null;
  }
}

// Check if TMDB is configured
export function isTMDBConfigured(): boolean {
  return !!TMDB_API_KEY;
}
