// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {enabled: false},
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@formkit/auto-animate',
    'shadcn-nuxt',
    'nuxt-swiper',
    '@nuxtjs/color-mode'
  ],
  tailwindcss: {
    viewer: {endpoint: '/_tailwind', exportViewer: true},
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  }
})