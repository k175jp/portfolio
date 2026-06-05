// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://k175jp.github.io",
  base: "/portfolio",
  integrations: [],
  vite: {
    plugins: [tailwindcss()]
  }
});