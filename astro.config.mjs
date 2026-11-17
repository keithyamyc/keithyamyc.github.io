import { defineConfig } from 'astro/config';
import { rehypeFigures } from './src/lib/rehype-figures.mjs';

export default defineConfig({
  site: 'https://keithyamyc.github.io',
  output: 'static',
  markdown: {
    rehypePlugins: [rehypeFigures],
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
