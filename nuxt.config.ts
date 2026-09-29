import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/fonts', '@nuxtjs/seo', '@nuxt/image', '@nuxt/icon'],

  css: ['~/assets/css/main.css'],

  // Los componentes en subcarpetas (layout/, ui/) se usan sin prefijo de ruta.
  components: [{ path: '~/components', pathPrefix: false }],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      // Cada página ya construye su propio título completo con useSeoMeta,
      // así que desactivamos el sufijo automático "| Chispa" del módulo SEO.
      titleTemplate: '%s',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  // Datos base para todo el paquete SEO (title, OG, schema.org, sitemap...).
  // TODO: sustituir por el dominio real cuando esté contratado.
  site: {
    url: 'https://www.chispagranada.es',
    name: 'Chispa',
    description:
      'Chispa es un local creativo en Granada: cumpleaños infantiles con talleres personalizados y talleres de pintura y manualidades para niños y adultos.',
    defaultLocale: 'es',
    indexable: true,
  },

  fonts: {
    families: [
      { name: 'Fraunces', provider: 'google', global: true },
      { name: 'Public Sans', provider: 'google', global: true },
      { name: 'Caveat', provider: 'google', global: true },
    ],
  },

  sitemap: {
    autoLastmod: true,
  },

  schemaOrg: {
    identity: 'LocalBusiness',
  },

  // Sitio totalmente estático: no hay contenido dinámico ni backend.
  routeRules: {
    '/**': { prerender: true },
  },
})
