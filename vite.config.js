import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src/',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html'),
      list: resolve(__dirname, 'src/items-listing/index.html'),
      details: resolve(__dirname, 'src/item-details/index.html')
    },
  },
});
