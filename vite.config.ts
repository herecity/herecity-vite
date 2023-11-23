import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@hooks': '/src/hooks',
      '@styles': '/src/styles',
      '@routes': '/src/routes',
      '@pages': '/src/pages',
      '@api': '/src/api',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/_utils";',
      },
    },
  },
});
