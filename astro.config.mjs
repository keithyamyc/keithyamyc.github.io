import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://keithyam.github.io',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
