import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://adsroicalc.com',
  integrations: [react(), tailwind(), sitemap()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "ca"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});