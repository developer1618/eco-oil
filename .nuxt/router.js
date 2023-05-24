import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d8af7492 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _53b0b546 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _38b6879e = () => interopDefault(import('..\\pages\\partner\\index.vue' /* webpackChunkName: "pages/partner/index" */))
const _37f9e97e = () => interopDefault(import('..\\pages\\admin\\bonus\\index.vue' /* webpackChunkName: "pages/admin/bonus/index" */))
const _3f60a08c = () => interopDefault(import('..\\pages\\admin\\cards\\index.vue' /* webpackChunkName: "pages/admin/cards/index" */))
const _c531a196 = () => interopDefault(import('..\\pages\\admin\\clients\\index.vue' /* webpackChunkName: "pages/admin/clients/index" */))
const _c27985be = () => interopDefault(import('..\\pages\\admin\\device\\index.vue' /* webpackChunkName: "pages/admin/device/index" */))
const _0be60522 = () => interopDefault(import('..\\pages\\admin\\monitoring\\index.vue' /* webpackChunkName: "pages/admin/monitoring/index" */))
const _1334686c = () => interopDefault(import('..\\pages\\admin\\partners\\index.vue' /* webpackChunkName: "pages/admin/partners/index" */))
const _52256618 = () => interopDefault(import('..\\pages\\admin\\profile\\index.vue' /* webpackChunkName: "pages/admin/profile/index" */))
const _b59ca0fa = () => interopDefault(import('..\\pages\\admin\\report\\index.vue' /* webpackChunkName: "pages/admin/report/index" */))
const _78f25ea3 = () => interopDefault(import('..\\pages\\admin\\scoreboard\\index.vue' /* webpackChunkName: "pages/admin/scoreboard/index" */))
const _5ae21a42 = () => interopDefault(import('..\\pages\\admin\\scoreboard2\\index.vue' /* webpackChunkName: "pages/admin/scoreboard2/index" */))
const _1fb08df4 = () => interopDefault(import('..\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _1dfcb41d = () => interopDefault(import('..\\pages\\admin\\staff\\index.vue' /* webpackChunkName: "pages/admin/staff/index" */))
const _0f144ad8 = () => interopDefault(import('..\\pages\\admin\\stations\\index.vue' /* webpackChunkName: "pages/admin/stations/index" */))
const _67fa96de = () => interopDefault(import('..\\pages\\partner\\employees\\index.vue' /* webpackChunkName: "pages/partner/employees/index" */))
const _920249ca = () => interopDefault(import('..\\pages\\partner\\settings\\index.vue' /* webpackChunkName: "pages/partner/settings/index" */))
const _87d55d88 = () => interopDefault(import('..\\pages\\admin\\device\\adddevice\\index.vue' /* webpackChunkName: "pages/admin/device/adddevice/index" */))
const _c74eaf48 = () => interopDefault(import('..\\pages\\admin\\partners\\addpartners\\index.vue' /* webpackChunkName: "pages/admin/partners/addpartners/index" */))
const _53d81c9e = () => interopDefault(import('..\\pages\\admin\\staff\\addstaff\\index.vue' /* webpackChunkName: "pages/admin/staff/addstaff/index" */))
const _3448f7dc = () => interopDefault(import('..\\pages\\admin\\stations\\addstations\\index.vue' /* webpackChunkName: "pages/admin/stations/addstations/index" */))
const _6d7ac24d = () => interopDefault(import('..\\pages\\partner\\employees\\addemployees\\index.vue' /* webpackChunkName: "pages/partner/employees/addemployees/index" */))
const _519cbee4 = () => interopDefault(import('..\\pages\\admin\\path\\to\\flowbite\\dist\\flowbite.min.js' /* webpackChunkName: "pages/admin/path/to/flowbite/dist/flowbite.min" */))
const _02ad5f39 = () => interopDefault(import('..\\pages\\admin\\clients\\editclients\\_slug.vue' /* webpackChunkName: "pages/admin/clients/editclients/_slug" */))
const _15bb3f78 = () => interopDefault(import('..\\pages\\admin\\device\\editpartners\\_slug.vue' /* webpackChunkName: "pages/admin/device/editpartners/_slug" */))
const _7df46c4f = () => interopDefault(import('..\\pages\\admin\\partners\\editpartners\\_slug.vue' /* webpackChunkName: "pages/admin/partners/editpartners/_slug" */))
const _02fc92e4 = () => interopDefault(import('..\\pages\\admin\\profile\\forgotPassword\\_slug.vue' /* webpackChunkName: "pages/admin/profile/forgotPassword/_slug" */))
const _092ca139 = () => interopDefault(import('..\\pages\\admin\\staff\\editstaff\\_slug.vue' /* webpackChunkName: "pages/admin/staff/editstaff/_slug" */))
const _5fd18427 = () => interopDefault(import('..\\pages\\admin\\stations\\editstations\\_slug.vue' /* webpackChunkName: "pages/admin/stations/editstations/_slug" */))
const _53940100 = () => interopDefault(import('..\\pages\\partner\\employees\\editemployees\\_slug.vue' /* webpackChunkName: "pages/partner/employees/editemployees/_slug" */))
const _7ba30724 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _d8af7492,
    name: "admin"
  }, {
    path: "/login",
    component: _53b0b546,
    name: "login"
  }, {
    path: "/partner",
    component: _38b6879e,
    name: "partner"
  }, {
    path: "/admin/bonus",
    component: _37f9e97e,
    name: "admin-bonus"
  }, {
    path: "/admin/cards",
    component: _3f60a08c,
    name: "admin-cards"
  }, {
    path: "/admin/clients",
    component: _c531a196,
    name: "admin-clients"
  }, {
    path: "/admin/device",
    component: _c27985be,
    name: "admin-device"
  }, {
    path: "/admin/monitoring",
    component: _0be60522,
    name: "admin-monitoring"
  }, {
    path: "/admin/partners",
    component: _1334686c,
    name: "admin-partners"
  }, {
    path: "/admin/profile",
    component: _52256618,
    name: "admin-profile"
  }, {
    path: "/admin/report",
    component: _b59ca0fa,
    name: "admin-report"
  }, {
    path: "/admin/scoreboard",
    component: _78f25ea3,
    name: "admin-scoreboard"
  }, {
    path: "/admin/scoreboard2",
    component: _5ae21a42,
    name: "admin-scoreboard2"
  }, {
    path: "/admin/settings",
    component: _1fb08df4,
    name: "admin-settings"
  }, {
    path: "/admin/staff",
    component: _1dfcb41d,
    name: "admin-staff"
  }, {
    path: "/admin/stations",
    component: _0f144ad8,
    name: "admin-stations"
  }, {
    path: "/partner/employees",
    component: _67fa96de,
    name: "partner-employees"
  }, {
    path: "/partner/settings",
    component: _920249ca,
    name: "partner-settings"
  }, {
    path: "/admin/device/adddevice",
    component: _87d55d88,
    name: "admin-device-adddevice"
  }, {
    path: "/admin/partners/addpartners",
    component: _c74eaf48,
    name: "admin-partners-addpartners"
  }, {
    path: "/admin/staff/addstaff",
    component: _53d81c9e,
    name: "admin-staff-addstaff"
  }, {
    path: "/admin/stations/addstations",
    component: _3448f7dc,
    name: "admin-stations-addstations"
  }, {
    path: "/partner/employees/addemployees",
    component: _6d7ac24d,
    name: "partner-employees-addemployees"
  }, {
    path: "/admin/path/to/flowbite/dist/flowbite.min",
    component: _519cbee4,
    name: "admin-path-to-flowbite-dist-flowbite.min"
  }, {
    path: "/admin/clients/editclients/:slug?",
    component: _02ad5f39,
    name: "admin-clients-editclients-slug"
  }, {
    path: "/admin/device/editpartners/:slug?",
    component: _15bb3f78,
    name: "admin-device-editpartners-slug"
  }, {
    path: "/admin/partners/editpartners/:slug?",
    component: _7df46c4f,
    name: "admin-partners-editpartners-slug"
  }, {
    path: "/admin/profile/forgotPassword/:slug?",
    component: _02fc92e4,
    name: "admin-profile-forgotPassword-slug"
  }, {
    path: "/admin/staff/editstaff/:slug?",
    component: _092ca139,
    name: "admin-staff-editstaff-slug"
  }, {
    path: "/admin/stations/editstations/:slug?",
    component: _5fd18427,
    name: "admin-stations-editstations-slug"
  }, {
    path: "/partner/employees/editemployees/:slug?",
    component: _53940100,
    name: "partner-employees-editemployees-slug"
  }, {
    path: "/",
    component: _7ba30724,
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
