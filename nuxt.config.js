export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - hyper-management',
    title: 'hyper-management',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/inject'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/business/employees', prefix: 'business-employees' },
    { path: '~/components/customers', prefix: 'customers' },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/firebase',
  ],
  firebase: {
    config: {
      apiKey: '*******',
      authDomain: '***********',
      databaseURL: '*********',
      projectId: '*********',
      storageBucket: '*******',
      messagingSenderId: '*******',
      appId: '*******',
      measurementId: '*******',
    },
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'auth/onAuthStateChanged',
        },
      },
      firestore: true,
    },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      icons: 'md',
    },
    theme: {
      light: true,
      themes: {
        light: {
          base: '#000',
          add: '#1E88E5',
          'add-top': '#fff',
          edit: '#90CAF9',
          'edit-top': '#fff',
          delete: '#D81B60',
          'delete-top': '#fff',
          primary: '#f44336',
          secondary: '#e91e63',
          accent: '#03a9f4',
          error: '#ff5722',
          warning: '#ff9800',
          info: '#607d8b',
          success: '#4caf50',
        },
      },
    },
  },
  router: {
    middleware: 'business-selected',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
