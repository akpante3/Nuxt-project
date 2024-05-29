// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/sanity", "@nuxt/eslint"],
  css: ['~/assets/css/main.css'],
  plugins: [
    { src: '~/plugins/vuejs-smart-table.js', mode: 'client' }
  ]
})