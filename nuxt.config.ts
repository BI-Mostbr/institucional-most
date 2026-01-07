import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/icon'],
  experimental: {
    payloadExtraction: false,
    viewTransition: true,
    writeEarlyHints: false,
  },
  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
    ],
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    routeRules: {
      '/_nuxt/**': {
        headers: { 'cache-control': 'public,max-age=31536000,immutable' },
      },
      '/images/**': {
        headers: { 'cache-control': 'public,max-age=31536000,immutable' },
      },
    },
  },
  image: {
    format: ['webp', 'png', 'jpeg'],
  },
  routeRules: {
    '/images/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable',
      },
    },
  },
})
