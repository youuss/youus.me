import { defineNuxtConfig } from 'nuxt'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  autoImports: {
    dirs: [
      'composables/**',
      'utils/**'
    ]
  },
  css: [
    '@/assets/var.css',
    '@/assets/common.scss',
    '@/assets/animation.scss',
    '@/assets/janghood.scss',
    '@/assets/youus.scss',
    '@/assets/markdown.scss'
  ],
  extensions: ['.md'],
  modules: ['./modules/markdown', '@unocss/nuxt'],
  vite: {
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis'  // fix nuxt3 global
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,  // fix nuxt3 process
            buffer: true
          }),
        ]
      }
    },
    server: {
      proxy: {
        '/yq': {
          target: 'https://www.yuque.com/api/v2',  //这里是接口地址
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/yq/, '')
        },
      },
    }
  }
})
