import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tatooedlaura.treasuretracking',
  appName: 'Treasure Tracking',
  webDir: 'dist',
  ios: {
    scheme: 'Treasure Tracking',
    contentInset: 'automatic'
  },
  plugins: {
    Preferences: {
      group: 'com.tatooedlaura.treasuretracking'
    }
  }
};

export default config;
