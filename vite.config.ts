import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  base: '',
  publicDir: false,
  plugins: [react(), visualizer()],
  build: {
    lib: {
      entry: './src/lib.ts',
      name: 'react-bitrix24',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
