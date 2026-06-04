import { defineConfig } from 'astro/config';

export default defineConfig({
  // If repo is named "yash2700.github.io" → base: '/'
  // If repo is named "portfolio" → base: '/portfolio'
  site: 'https://yaswanth-reddy.github.io',
  base: '/',
  output: 'static',
  compressHTML: true,
});
