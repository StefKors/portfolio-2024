// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthq/studio'],
  // force module initialization on dev env
  // studio: {
  //   enabled: true
  // },
  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-10-20'
})