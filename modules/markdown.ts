import { addVitePlugin } from '@nuxt/kit';
import Doc from 'vite-plugin-md';
import Shiki from 'markdown-it-shiki';

export default async () => {
  addVitePlugin(Doc({
    // wrapperComponent: 'Post',
    wrapperClasses: "youus m-auto mb-8",
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
