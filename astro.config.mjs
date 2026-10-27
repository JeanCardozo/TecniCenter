import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Netlify exposes URL at build time; set SITE_URL only when a custom domain is added.
export default defineConfig({
  site: process.env.SITE_URL ?? process.env.URL ?? 'https://tecnicenter.netlify.app',
  integrations: [sitemap()],
});
