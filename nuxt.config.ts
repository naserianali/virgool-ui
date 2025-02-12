// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {enabled: true},
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@formkit/auto-animate',
    'shadcn-nuxt',
    'nuxt-swiper',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@vee-validate/nuxt',
    'pinia-plugin-persistedstate'
  ],
  tailwindcss: {
    viewer: {endpoint: '/_tailwind', exportViewer: true},
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  icon: {},
  runtimeConfig: {
    public: {
      apiBase: "http://192.168.0.189:5000",
    },
  },
})