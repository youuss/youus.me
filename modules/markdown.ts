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
    wrapperClasses: 'youus m-auto',
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
