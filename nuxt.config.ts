import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  ssr: true,
  
  // ✅ Configuração crucial para S3
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/', // Garante que assets vão para /_nuxt/
  },
  
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
    server: {
      allowedHosts: [
        'subaverage-elaine-unappetizingly.ngrok-free.dev',
        '.ngrok-free.dev',
      ],
    },
  },
  
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [        '/',
        '/fale-conosco',
        '/financiamento-imoveis',
        '/incorporadora',
        '/obrigado',
        '/parceiros',
        '/politica-de-privacidade',
        '/simulador-coleta-dados',],
    },
    routeRules: {
      '/_nuxt/**': {
        headers: { 'cache-control': 'public,max-age=31536000,immutable' },
      },
      '/images/**': {
        headers: { 'cache-control': 'public,max-age=31536000,immutable' },
      },
      '/icons/**': {
        headers: { 'cache-control': 'public,max-age=31536000,immutable' },
      },
    },
  },
  
  // ✅ CRÍTICO: Desabilitar otimização de imagens para modo estático
  image: {
    provider: 'none', // Desabilita processamento de imagens
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