import { defineNuxtConfig } from 'nuxt'

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
    '@/assets/components.scss'
  ],
  extensions: ['.md'],
  modules: ['./modules/markdown', '@unocss/nuxt']
})
