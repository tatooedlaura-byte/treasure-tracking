// Rebrickable API service for fetching Lego set images and data
// Get a free API key at: https://rebrickable.com/api/

const REBRICKABLE_API_KEY = import.meta.env.VITE_REBRICKABLE_API_KEY;
const REBRICKABLE_BASE_URL = 'https://rebrickable.com/api/v3/lego';

export interface LegoSetSearchResult {
  set_num: string;
  name: string;
  year: number;
  theme_id: number;
  num_parts: number;
  set_img_url: string | null;
}

export interface LegoTheme {
  id: number;
  name: string;
  parent_id: number | null;
}

// Cache for themes to avoid repeated lookups
let themesCache: Map<number, LegoTheme> | null = null;

// Search for Lego sets by name or set number
export async function searchLegoSets(query: string): Promise<LegoSetSearchResult[]> {
  if (!REBRICKABLE_API_KEY) {
    console.warn('Rebrickable API key not configured. Add VITE_REBRICKABLE_API_KEY to your .env file.');
    return [];
  }

  if (!query.trim()) return [];

  try {
    const response = await fetch(
      `${REBRICKABLE_BASE_URL}/sets/?search=${encodeURIComponent(query)}&page_size=20`,
      {
        headers: {
          Authorization: `key ${REBRICKABLE_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Rebrickable API error: ${response.status}`);
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Failed to search Lego sets:', error);
    return [];
  }
}

// Get theme name by ID
export async function getThemeName(themeId: number): Promise<string> {
  if (!REBRICKABLE_API_KEY) return '';

  // Load themes cache if needed
  if (!themesCache) {
    themesCache = new Map();
    try {
      // Fetch first page of themes (covers most common ones)
      const response = await fetch(
        `${REBRICKABLE_BASE_URL}/themes/?page_size=1000`,
        {
          headers: {
            Authorization: `key ${REBRICKABLE_API_KEY}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        for (const theme of data.results || []) {
          themesCache.set(theme.id, theme);
        }
      }
    } catch (error) {
      console.error('Failed to fetch themes:', error);
    }
  }

  const theme = themesCache.get(themeId);
  return theme?.name || '';
}

// Get a single Lego set by set number
export async function getLegoSet(setNum: string): Promise<LegoSetSearchResult | null> {
  if (!REBRICKABLE_API_KEY) {
    console.warn('Rebrickable API key not configured.');
    return null;
  }

  try {
    const response = await fetch(
      `${REBRICKABLE_BASE_URL}/sets/${setNum}/`,
      {
        headers: {
          Authorization: `key ${REBRICKABLE_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Rebrickable API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to get Lego set:', error);
    return null;
  }
}

// Check if Rebrickable is configured
export function isRebrickableConfigured(): boolean {
  return !!REBRICKABLE_API_KEY;
}
