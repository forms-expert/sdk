import { defineConfig } from 'tsup';

export default defineConfig([
  // Core package
  {
    entry: { 'core/index': 'core/index.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    sourcemap: true,
  },
  // Vanilla JS widget (also IIFE for CDN)
  {
    entry: { 'vanilla/index': 'vanilla/index.ts' },
    format: ['esm', 'cjs', 'iife'],
    dts: true,
    sourcemap: true,
    globalName: 'FormsExpert',
    minify: true,
  },
  // React package
  {
    entry: { 'react/index': 'react/index.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    external: ['react', 'react-dom'],
  },
  // Vue package
  {
    entry: { 'vue/index': 'vue/index.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    external: ['vue'],
  },
]);
