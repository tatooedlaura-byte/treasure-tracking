import { useState, useEffect, useCallback } from 'react';

export type AppearanceMode = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'treasureTracking_appearance';

export function useAppearance() {
  const [mode, setModeState] = useState<AppearanceMode>(() => {
    // Check localStorage first
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      return saved;
    }
    return 'light'; // Default to light mode like iOS app
  });

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  // Set mode and persist to localStorage
  const setMode = useCallback((newMode: AppearanceMode) => {
    setModeState(newMode);
    localStorage.setItem(STORAGE_KEY, newMode);
  }, []);

  // Apply theme to document
  useEffect(() => {
    const applyTheme = (theme: 'light' | 'dark') => {
      document.documentElement.setAttribute('data-theme', theme);
      setResolvedTheme(theme);

      // Update meta theme-color for mobile browsers
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) {
        metaTheme.setAttribute(
          'content',
          theme === 'dark' ? 'rgb(20, 26, 31)' : 'rgb(51, 89, 115)'
        );
      }
    };

    if (mode === 'system') {
      // Use system preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      applyTheme(mediaQuery.matches ? 'dark' : 'light');

      // Listen for changes
      const handler = (e: MediaQueryListEvent) => {
        applyTheme(e.matches ? 'dark' : 'light');
      };
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } else {
      applyTheme(mode);
    }
  }, [mode]);

  return {
    mode,
    setMode,
    resolvedTheme,
    isDark: resolvedTheme === 'dark',
  };
}
