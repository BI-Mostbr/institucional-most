import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // ✅ SSR ativado para pré-renderização (SSG)
  ssr: true,
  
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
    // ✅ CRUCIAL: Define que vai gerar arquivos estáticos
    preset: 'static',

    // ✅ Pré-renderiza todas as rotas automaticamente
    prerender: {
      crawlLinks: true, // Descobre rotas automaticamente
      routes: [
        '/',
        '/fale-conosco',
        '/financiamento-imoveis',
        '/incorporadora',
        '/obrigado',
        '/parceiros',
        '/politica-de-privacidade',
        '/simulador-coleta-dados',
      ],
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