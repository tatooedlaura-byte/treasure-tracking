import { useEffect } from 'react';
import { LandingPage } from './components/auth';
import { HomeView } from './components/home';
import { LoadingSpinner } from './components/common';
import { useAuth } from './hooks/useAuth';
import { CollectionsProvider, useCollections } from './contexts';
import { useAppearance } from './hooks/useAppearance';
import './App.css';

function AppContent() {
  const { user, loading: authLoading, isAuthenticated, error: authError } = useAuth();
  const { initialize, loading: dataLoading, error: dataError } = useCollections();

  // Initialize appearance mode on mount
  useAppearance();

  // Initialize storage when user is authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      console.log('[App] User authenticated, initializing storage...');
      initialize(user.id);
    }
  }, [isAuthenticated, user, initialize]);

  console.log('[App] State:', { authLoading, isAuthenticated, dataLoading, authError, dataError });

  // Show error if any
  if (authError || dataError) {
    return (
      <div style={{ padding: 20, textAlign: 'center' }}>
        <h2>Error</h2>
        <p>{authError || dataError}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  // Show loading while checking auth
  if (authLoading) {
    return <LoadingSpinner fullScreen />;
  }

  // Show landing page if not authenticated
  if (!isAuthenticated) {
    return <LandingPage />;
  }

  // Show loading while initializing data
  if (dataLoading) {
    return <LoadingSpinner fullScreen />;
  }

  // Show main app
  return <HomeView />;
}

function App() {
  return (
    <CollectionsProvider>
      <AppContent />
    </CollectionsProvider>
  );
}

export default App;
