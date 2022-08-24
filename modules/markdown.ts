import { addVitePlugin } from '@nuxt/kit';
import Doc from 'vite-plugin-md';
import Vue from '@vitejs/plugin-vue';

export default async () => {
  addVitePlugin(Vue({
    include: [/\.md/],
    exclude: [/\.vue$/]
  }));
  addVitePlugin(Doc());
}
