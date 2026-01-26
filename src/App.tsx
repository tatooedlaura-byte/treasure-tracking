import { useEffect } from 'react';
import { LandingPage } from './components/auth';
import { HomeView } from './components/home';
import { LoadingSpinner } from './components/common';
import { useAuth } from './hooks/useAuth';
import { useCollections } from './hooks/useCollections';
import { useAppearance } from './hooks/useAppearance';
import './App.css';

function App() {
  const { user, loading: authLoading, isAuthenticated } = useAuth();
  const { initialize, loading: dataLoading } = useCollections();

  // Initialize appearance mode on mount
  useAppearance();

  // Initialize storage when user is authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      initialize(user.id);
    }
  }, [isAuthenticated, user, initialize]);

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

export default App;
