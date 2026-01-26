import type { AuthUser } from '../../types';

/**
 * Abstract interface for authentication providers.
 * Currently only Google is supported.
 */
export interface AuthProvider {
  /**
   * The type of auth provider
   */
  readonly providerType: 'google';

  /**
   * Sign in the user via OAuth flow
   */
  signIn(): Promise<AuthUser>;

  /**
   * Sign out the current user
   */
  signOut(): Promise<void>;

  /**
   * Get the currently signed-in user, or null if not signed in
   */
  getCurrentUser(): Promise<AuthUser | null>;

  /**
   * Subscribe to auth state changes.
   * Returns an unsubscribe function.
   */
  onAuthStateChanged(callback: (user: AuthUser | null) => void): () => void;

  /**
   * Check if a user is currently signed in
   */
  isSignedIn(): Promise<boolean>;

  /**
   * Get the current access token (for API calls)
   */
  getAccessToken(): string | null;

  /**
   * Refresh the access token if possible
   */
  refreshAccessToken(): Promise<string | null>;
}
