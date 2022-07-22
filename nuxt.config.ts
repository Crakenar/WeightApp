import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@pinia/nuxt'],
    // serverMiddleware: [
    //     {path: '/', handler: '~/server-middleware/index.js'}
    // ],
    typescript: {
        strict: true
    }
})
