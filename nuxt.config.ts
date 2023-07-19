// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: './tailwind.config.js',
  }
})
