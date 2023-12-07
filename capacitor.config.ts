import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'CineCritique',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
