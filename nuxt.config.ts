import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    // https://unocss.dev/integrations/nuxt
    '@unocss/nuxt',
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    // https://v8.i18n.nuxtjs.org/
    '@nuxtjs/i18n',
  ],
  i18n: {
    // used in URL path prefix
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    // if you are using custom path, default
    vueI18n: './i18n.config.ts'
  },
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ]
  }
})
