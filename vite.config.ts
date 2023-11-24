import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@hooks': '/src/hooks',
      '@styles': '/src/styles',
      '@routes': '/src/routes',
      '@pages': '/src/pages',
      '@api': '/src/api',
      '@mocks': '/src/mocks',
      '@tests': '/src/tests',
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
