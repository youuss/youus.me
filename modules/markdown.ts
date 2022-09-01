import { addVitePlugin } from '@nuxt/kit';
import Doc from 'vite-plugin-md';
import Vue from '@vitejs/plugin-vue';
import Shiki from 'markdown-it-shiki';

export default async () => {
  addVitePlugin(Vue({
    include: [/\.md/],
    exclude: [/\.vue$/]
  }));
  addVitePlugin(Doc({
    headEnabled: true,
    markdownItOptions: {
      quotes: '""\'\'',
    },
    markdownItSetup(MarkdownIt) {
      MarkdownIt.use(Shiki, {
        theme: {
          light: 'vitesse-light',
          dark: 'vitesse-dark',
        },
      })
    },
  }));
}
