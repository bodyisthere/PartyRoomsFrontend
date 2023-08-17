import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr({ exportAsDefault: true }), react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('https://dummyjson.com'),
    __PROJECT__: JSON.stringify('frontend'),
  },
});
