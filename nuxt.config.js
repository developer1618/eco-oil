let baseUrl = "http://92.255.76.192/api";
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  layout: "default",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "ECO OIL",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/axios",
    "~/plugins/vee-validate",
    "~/plugins/datepicker",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/postcss8",
    "@nuxtjs/moment",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/auth-next", "@nuxtjs/axios"],

  auth: {
    strategies: {
      local: {
        url: "http://92.255.76.192/api",
        token: {
          property: "access_token",
          maxAge: 86400,
        },
        refreshToken: {
          property: "refresh_token",
        },
        user: {
          property: "user",
        },
        endpoints: {
          login: {
            url: "http://92.255.76.192/api/Login",
          },
          refresh: { url: 'http://1319152-cd48417.tw1.ru/token/refresh/' },
          logout: {
            url: "http://92.255.76.192/api/Logout",
          },
          user: {
            url: "http://92.255.76.192/api/UserDetailView",
          },
        },
      },
    },
    redirect: {
      login: "/login",
      logout: "/login",
      home: "/admin/",
    },
  },
  router: {
    middleware: ["auth"],
  },

  axios: {
    baseUrl: baseUrl,
    credentials: false,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
