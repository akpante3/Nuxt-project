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
  sanity: {
    projectId: "21fy9g0s",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true,
  },
  css: ['~/assets/css/main.css'],
  plugins: [
    { src: '~/plugins/sanity-image-builder.js', mode: 'client' }
  ]
})