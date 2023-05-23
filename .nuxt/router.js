import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _30dac43a = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _2a11fd89 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _3b6b84ca = () => interopDefault(import('..\\pages\\partner\\index.vue' /* webpackChunkName: "pages/partner/index" */))
const _6a1f705c = () => interopDefault(import('..\\pages\\admin\\bonus\\index.vue' /* webpackChunkName: "pages/admin/bonus/index" */))
const _73460e0e = () => interopDefault(import('..\\pages\\admin\\cards\\index.vue' /* webpackChunkName: "pages/admin/cards/index" */))
const _4c3f4889 = () => interopDefault(import('..\\pages\\admin\\clients\\index.vue' /* webpackChunkName: "pages/admin/clients/index" */))
const _6a98a94d = () => interopDefault(import('..\\pages\\admin\\device\\index.vue' /* webpackChunkName: "pages/admin/device/index" */))
const _708f18ca = () => interopDefault(import('..\\pages\\admin\\monitoring\\index.vue' /* webpackChunkName: "pages/admin/monitoring/index" */))
const _3f5f7998 = () => interopDefault(import('..\\pages\\admin\\partners\\index.vue' /* webpackChunkName: "pages/admin/partners/index" */))
const _f4753370 = () => interopDefault(import('..\\pages\\admin\\profile\\index.vue' /* webpackChunkName: "pages/admin/profile/index" */))
const _71071baf = () => interopDefault(import('..\\pages\\admin\\report\\index.vue' /* webpackChunkName: "pages/admin/report/index" */))
const _469dd4cf = () => interopDefault(import('..\\pages\\admin\\scoreboard\\index.vue' /* webpackChunkName: "pages/admin/scoreboard/index" */))
const _8b5b7b9a = () => interopDefault(import('..\\pages\\admin\\scoreboard2\\index.vue' /* webpackChunkName: "pages/admin/scoreboard2/index" */))
const _4bdb9f20 = () => interopDefault(import('..\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _9e19db1e = () => interopDefault(import('..\\pages\\admin\\staff\\index.vue' /* webpackChunkName: "pages/admin/staff/index" */))
const _3b3f5c04 = () => interopDefault(import('..\\pages\\admin\\stations\\index.vue' /* webpackChunkName: "pages/admin/stations/index" */))
const _9873f836 = () => interopDefault(import('..\\pages\\partner\\employees\\index.vue' /* webpackChunkName: "pages/partner/employees/index" */))
const _f6ab5d72 = () => interopDefault(import('..\\pages\\partner\\settings\\index.vue' /* webpackChunkName: "pages/partner/settings/index" */))
const _25265ce0 = () => interopDefault(import('..\\pages\\admin\\device\\adddevice\\index.vue' /* webpackChunkName: "pages/admin/device/adddevice/index" */))
const _5a8fdeb0 = () => interopDefault(import('..\\pages\\admin\\partners\\addpartners\\index.vue' /* webpackChunkName: "pages/admin/partners/addpartners/index" */))
const _0008bc1c = () => interopDefault(import('..\\pages\\admin\\staff\\addstaff\\index.vue' /* webpackChunkName: "pages/admin/staff/addstaff/index" */))
const _1affa3a0 = () => interopDefault(import('..\\pages\\admin\\stations\\addstations\\index.vue' /* webpackChunkName: "pages/admin/stations/addstations/index" */))
const _35c6aea1 = () => interopDefault(import('..\\pages\\partner\\employees\\addemployees\\index.vue' /* webpackChunkName: "pages/partner/employees/addemployees/index" */))
const _665f6e8c = () => interopDefault(import('..\\pages\\admin\\path\\to\\flowbite\\dist\\flowbite.min.js' /* webpackChunkName: "pages/admin/path/to/flowbite/dist/flowbite.min" */))
const _0f67e336 = () => interopDefault(import('..\\pages\\admin\\clients\\editclients\\_slug.vue' /* webpackChunkName: "pages/admin/clients/editclients/_slug" */))
const _2a7de120 = () => interopDefault(import('..\\pages\\admin\\device\\editpartners\\_slug.vue' /* webpackChunkName: "pages/admin/device/editpartners/_slug" */))
const _f2b7ff0a = () => interopDefault(import('..\\pages\\admin\\partners\\editpartners\\_slug.vue' /* webpackChunkName: "pages/admin/partners/editpartners/_slug" */))
const _0bc4a7e2 = () => interopDefault(import('..\\pages\\admin\\profile\\forgotPassword\\_slug.vue' /* webpackChunkName: "pages/admin/profile/forgotPassword/_slug" */))
const _3d0c7336 = () => interopDefault(import('..\\pages\\admin\\staff\\editstaff\\_slug.vue' /* webpackChunkName: "pages/admin/staff/editstaff/_slug" */))
const _68811853 = () => interopDefault(import('..\\pages\\admin\\stations\\editstations\\_slug.vue' /* webpackChunkName: "pages/admin/stations/editstations/_slug" */))
const _d674c1a8 = () => interopDefault(import('..\\pages\\partner\\employees\\editemployees\\_slug.vue' /* webpackChunkName: "pages/partner/employees/editemployees/_slug" */))
const _1c28847c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _30dac43a,
    name: "admin"
  }, {
    path: "/login",
    component: _2a11fd89,
    name: "login"
  }, {
    path: "/partner",
    component: _3b6b84ca,
    name: "partner"
  }, {
    path: "/admin/bonus",
    component: _6a1f705c,
    name: "admin-bonus"
  }, {
    path: "/admin/cards",
    component: _73460e0e,
    name: "admin-cards"
  }, {
    path: "/admin/clients",
    component: _4c3f4889,
    name: "admin-clients"
  }, {
    path: "/admin/device",
    component: _6a98a94d,
    name: "admin-device"
  }, {
    path: "/admin/monitoring",
    component: _708f18ca,
    name: "admin-monitoring"
  }, {
    path: "/admin/partners",
    component: _3f5f7998,
    name: "admin-partners"
  }, {
    path: "/admin/profile",
    component: _f4753370,
    name: "admin-profile"
  }, {
    path: "/admin/report",
    component: _71071baf,
    name: "admin-report"
  }, {
    path: "/admin/scoreboard",
    component: _469dd4cf,
    name: "admin-scoreboard"
  }, {
    path: "/admin/scoreboard2",
    component: _8b5b7b9a,
    name: "admin-scoreboard2"
  }, {
    path: "/admin/settings",
    component: _4bdb9f20,
    name: "admin-settings"
  }, {
    path: "/admin/staff",
    component: _9e19db1e,
    name: "admin-staff"
  }, {
    path: "/admin/stations",
    component: _3b3f5c04,
    name: "admin-stations"
  }, {
    path: "/partner/employees",
    component: _9873f836,
    name: "partner-employees"
  }, {
    path: "/partner/settings",
    component: _f6ab5d72,
    name: "partner-settings"
  }, {
    path: "/admin/device/adddevice",
    component: _25265ce0,
    name: "admin-device-adddevice"
  }, {
    path: "/admin/partners/addpartners",
    component: _5a8fdeb0,
    name: "admin-partners-addpartners"
  }, {
    path: "/admin/staff/addstaff",
    component: _0008bc1c,
    name: "admin-staff-addstaff"
  }, {
    path: "/admin/stations/addstations",
    component: _1affa3a0,
    name: "admin-stations-addstations"
  }, {
    path: "/partner/employees/addemployees",
    component: _35c6aea1,
    name: "partner-employees-addemployees"
  }, {
    path: "/admin/path/to/flowbite/dist/flowbite.min",
    component: _665f6e8c,
    name: "admin-path-to-flowbite-dist-flowbite.min"
  }, {
    path: "/admin/clients/editclients/:slug?",
    component: _0f67e336,
    name: "admin-clients-editclients-slug"
  }, {
    path: "/admin/device/editpartners/:slug?",
    component: _2a7de120,
    name: "admin-device-editpartners-slug"
  }, {
    path: "/admin/partners/editpartners/:slug?",
    component: _f2b7ff0a,
    name: "admin-partners-editpartners-slug"
  }, {
    path: "/admin/profile/forgotPassword/:slug?",
    component: _0bc4a7e2,
    name: "admin-profile-forgotPassword-slug"
  }, {
    path: "/admin/staff/editstaff/:slug?",
    component: _3d0c7336,
    name: "admin-staff-editstaff-slug"
  }, {
    path: "/admin/stations/editstations/:slug?",
    component: _68811853,
    name: "admin-stations-editstations-slug"
  }, {
    path: "/partner/employees/editemployees/:slug?",
    component: _d674c1a8,
    name: "partner-employees-editemployees-slug"
  }, {
    path: "/",
    component: _1c28847c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
