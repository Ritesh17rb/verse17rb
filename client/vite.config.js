import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_SERVER_DOMAIN || 'http://localhost:3000', // Use environment variable or fallback
        secure: false,
      },
    },
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
});
