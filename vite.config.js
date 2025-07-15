import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      maxParallelFileReads: 50  // reduce la cantidad de archivos abiertos simultáneamente
    }
  }
});
