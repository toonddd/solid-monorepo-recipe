import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});
