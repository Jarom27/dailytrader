import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src/',
  outDir: '../dist',
  rollupOptions: {
    input: resolve(__dirname, 'src/index.html'),
  },
});