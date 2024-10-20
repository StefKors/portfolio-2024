// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthq/studio'],
  // force module initialization on dev env
  studio: {
    enabled: true
  },
  routeRules: {
    '/api/search.json': { prerender: true }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-10-20'
})