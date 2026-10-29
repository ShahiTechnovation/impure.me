import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://impure.me',
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
    },
  },
});

