import { useState, useEffect } from 'react';
import { getGoogleAuthProvider } from '../../services/auth/GoogleAuthProvider';

interface AuthenticatedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
}

/**
 * Image component that handles Google Drive URLs requiring authentication.
 * Fetches the image with the auth token and displays it as a blob URL.
 */
export function AuthenticatedImage({ src, alt, className, fallback }: AuthenticatedImageProps) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    let objectUrl: string | null = null;

    async function loadImage() {
      // Check if it's a Google Drive URL that needs auth
      const needsAuth = src.includes('googleapis.com/drive');

      if (!needsAuth) {
        // Regular URL, use directly
        if (mounted) {
          setBlobUrl(src);
          setLoading(false);
        }
        return;
      }

      try {
        const token = getGoogleAuthProvider().getAccessToken();
        if (!token) {
          throw new Error('No auth token');
        }

        const response = await fetch(src, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.status}`);
        }

        const blob = await response.blob();
        objectUrl = URL.createObjectURL(blob);

        if (mounted) {
          setBlobUrl(objectUrl);
          setLoading(false);
        }
      } catch (err) {
        console.error('Failed to load authenticated image:', err);
        if (mounted) {
          setError(true);
          setLoading(false);
        }
      }
    }

    loadImage();

    return () => {
      mounted = false;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [src]);

  if (loading) {
    return fallback || <div className={className} style={{ background: 'var(--color-background)' }} />;
  }

  if (error || !blobUrl) {
    return fallback || null;
  }

  return <img src={blobUrl} alt={alt} className={className} />;
}
