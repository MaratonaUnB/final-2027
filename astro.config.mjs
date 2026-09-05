// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Publicado em GitHub Pages sob o subcaminho do repositório.
  // Ao migrar para domínio próprio: ajustar `site` e remover `base`.
  site: 'https://maratonaunb.github.io',
  base: '/final-2027/',

  integrations: [vue()],

  vite: {
    plugins: [tailwindcss()]
  }
});