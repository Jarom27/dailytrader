import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({

  envDir: '.env',
  root: 'src/',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        listing: resolve(__dirname, 'src/item-listing/index.html'),
        details: resolve(__dirname, 'src/item-details/index.html')
      },

    },
  },
});
