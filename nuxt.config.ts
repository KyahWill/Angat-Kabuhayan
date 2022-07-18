import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/styles.css"],
  plugins: ['~/plugins/firebase.js'],
  build: {
    postcss: {
      postcssOptions:{
      	plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  }
})
