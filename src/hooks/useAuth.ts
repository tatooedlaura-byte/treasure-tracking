import { useState, useEffect, useCallback, useRef } from 'react';
import { getGoogleAuthProvider } from '../services/auth';
import type { AuthUser } from '../types';

interface UseAuthReturn {
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;

  // Auth methods
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;

  // Access token for API calls
  getAccessToken: () => string | null;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const unsubscribeRef = useRef<(() => void) | null>(null);

  // Subscribe to auth state changes
  useEffect(() => {
    const provider = getGoogleAuthProvider();

    unsubscribeRef.current = provider.onAuthStateChanged((authUser) => {
      setUser(authUser);
      setLoading(false);
    });

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, []);

  const signIn = useCallback(async () => {
    setError(null);

    try {
      const provider = getGoogleAuthProvider();
      const user = await provider.signIn();
      setUser(user);
      setLoading(false);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Sign in failed';
      setError(message);
      setLoading(false);
      throw err;
    }
  }, []);

  const signOut = useCallback(async () => {
    setError(null);

    try {
      const provider = getGoogleAuthProvider();
      await provider.signOut();
      setUser(null);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Sign out failed';
      setError(message);
      throw err;
    }
  }, []);

  const getAccessToken = useCallback(() => {
    const provider = getGoogleAuthProvider();
    return provider.getAccessToken();
  }, []);

  return {
    user,
    loading,
    error,
    isAuthenticated: !!user,

    signIn,
    signOut,
    getAccessToken,
  };
}
