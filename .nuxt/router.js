import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7a97de6c = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _85d183dc = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _2222c713 = () => interopDefault(import('..\\pages\\partner\\index.vue' /* webpackChunkName: "pages/partner/index" */))
const _c9f7e9ae = () => interopDefault(import('..\\pages\\admin\\bonus\\index.vue' /* webpackChunkName: "pages/admin/bonus/index" */))
const _4359d165 = () => interopDefault(import('..\\pages\\admin\\cards\\index.vue' /* webpackChunkName: "pages/admin/cards/index" */))
const _666f9220 = () => interopDefault(import('..\\pages\\admin\\clients\\index.vue' /* webpackChunkName: "pages/admin/clients/index" */))
const _c6055e54 = () => interopDefault(import('..\\pages\\admin\\device\\index.vue' /* webpackChunkName: "pages/admin/device/index" */))
const _60fc2ea4 = () => interopDefault(import('..\\pages\\admin\\monitoring\\index.vue' /* webpackChunkName: "pages/admin/monitoring/index" */))
const _6b3862e1 = () => interopDefault(import('..\\pages\\admin\\partners\\index.vue' /* webpackChunkName: "pages/admin/partners/index" */))
const _c014a042 = () => interopDefault(import('..\\pages\\admin\\profile\\index.vue' /* webpackChunkName: "pages/admin/profile/index" */))
const _b9287990 = () => interopDefault(import('..\\pages\\admin\\report\\index.vue' /* webpackChunkName: "pages/admin/report/index" */))
const _403ce050 = () => interopDefault(import('..\\pages\\admin\\scoreboard\\index.vue' /* webpackChunkName: "pages/admin/scoreboard/index" */))
const _4985e84a = () => interopDefault(import('..\\pages\\admin\\scoreboard2\\index.vue' /* webpackChunkName: "pages/admin/scoreboard2/index" */))
const _77b48869 = () => interopDefault(import('..\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _fdf25470 = () => interopDefault(import('..\\pages\\admin\\staff\\index.vue' /* webpackChunkName: "pages/admin/staff/index" */))
const _6718454d = () => interopDefault(import('..\\pages\\admin\\stations\\index.vue' /* webpackChunkName: "pages/admin/stations/index" */))
const _42f9a9fc = () => interopDefault(import('..\\pages\\partner\\employees\\index.vue' /* webpackChunkName: "pages/partner/employees/index" */))
const _1dee0c50 = () => interopDefault(import('..\\pages\\partner\\settings\\index.vue' /* webpackChunkName: "pages/partner/settings/index" */))
const _157b4a67 = () => interopDefault(import('..\\pages\\admin\\device\\adddevice\\index.vue' /* webpackChunkName: "pages/admin/device/adddevice/index" */))
const _72781407 = () => interopDefault(import('..\\pages\\admin\\partners\\addpartners\\index.vue' /* webpackChunkName: "pages/admin/partners/addpartners/index" */))
const _3b9f36ee = () => interopDefault(import('..\\pages\\admin\\staff\\addstaff\\index.vue' /* webpackChunkName: "pages/admin/staff/addstaff/index" */))
const _0a686387 = () => interopDefault(import('..\\pages\\admin\\stations\\addstations\\index.vue' /* webpackChunkName: "pages/admin/stations/addstations/index" */))
const _09566078 = () => interopDefault(import('..\\pages\\partner\\employees\\addemployees\\index.vue' /* webpackChunkName: "pages/partner/employees/addemployees/index" */))
const _53492543 = () => interopDefault(import('..\\pages\\admin\\path\\to\\flowbite\\dist\\flowbite.min.js' /* webpackChunkName: "pages/admin/path/to/flowbite/dist/flowbite.min" */))
const _646c522e = () => interopDefault(import('..\\pages\\admin\\clients\\editclients\\_slug.vue' /* webpackChunkName: "pages/admin/clients/editclients/_slug" */))
const _56e15339 = () => interopDefault(import('..\\pages\\admin\\device\\editpartners\\_slug.vue' /* webpackChunkName: "pages/admin/device/editpartners/_slug" */))
const _6bc27604 = () => interopDefault(import('..\\pages\\admin\\partners\\editpartners\\_slug.vue' /* webpackChunkName: "pages/admin/partners/editpartners/_slug" */))
const _6b16390e = () => interopDefault(import('..\\pages\\admin\\profile\\forgotPassword\\_slug.vue' /* webpackChunkName: "pages/admin/profile/forgotPassword/_slug" */))
const _45dd56ae = () => interopDefault(import('..\\pages\\admin\\staff\\editstaff\\_slug.vue' /* webpackChunkName: "pages/admin/staff/editstaff/_slug" */))
const _4d9f8ddc = () => interopDefault(import('..\\pages\\admin\\stations\\editstations\\_slug.vue' /* webpackChunkName: "pages/admin/stations/editstations/_slug" */))
const _332c2835 = () => interopDefault(import('..\\pages\\partner\\employees\\editemployees\\_slug.vue' /* webpackChunkName: "pages/partner/employees/editemployees/_slug" */))
const _55781559 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7a97de6c,
    name: "admin"
  }, {
    path: "/login",
    component: _85d183dc,
    name: "login"
  }, {
    path: "/partner",
    component: _2222c713,
    name: "partner"
  }, {
    path: "/admin/bonus",
    component: _c9f7e9ae,
    name: "admin-bonus"
  }, {
    path: "/admin/cards",
    component: _4359d165,
    name: "admin-cards"
  }, {
    path: "/admin/clients",
    component: _666f9220,
    name: "admin-clients"
  }, {
    path: "/admin/device",
    component: _c6055e54,
    name: "admin-device"
  }, {
    path: "/admin/monitoring",
    component: _60fc2ea4,
    name: "admin-monitoring"
  }, {
    path: "/admin/partners",
    component: _6b3862e1,
    name: "admin-partners"
  }, {
    path: "/admin/profile",
    component: _c014a042,
    name: "admin-profile"
  }, {
    path: "/admin/report",
    component: _b9287990,
    name: "admin-report"
  }, {
    path: "/admin/scoreboard",
    component: _403ce050,
    name: "admin-scoreboard"
  }, {
    path: "/admin/scoreboard2",
    component: _4985e84a,
    name: "admin-scoreboard2"
  }, {
    path: "/admin/settings",
    component: _77b48869,
    name: "admin-settings"
  }, {
    path: "/admin/staff",
    component: _fdf25470,
    name: "admin-staff"
  }, {
    path: "/admin/stations",
    component: _6718454d,
    name: "admin-stations"
  }, {
    path: "/partner/employees",
    component: _42f9a9fc,
    name: "partner-employees"
  }, {
    path: "/partner/settings",
    component: _1dee0c50,
    name: "partner-settings"
  }, {
    path: "/admin/device/adddevice",
    component: _157b4a67,
    name: "admin-device-adddevice"
  }, {
    path: "/admin/partners/addpartners",
    component: _72781407,
    name: "admin-partners-addpartners"
  }, {
    path: "/admin/staff/addstaff",
    component: _3b9f36ee,
    name: "admin-staff-addstaff"
  }, {
    path: "/admin/stations/addstations",
    component: _0a686387,
    name: "admin-stations-addstations"
  }, {
    path: "/partner/employees/addemployees",
    component: _09566078,
    name: "partner-employees-addemployees"
  }, {
    path: "/admin/path/to/flowbite/dist/flowbite.min",
    component: _53492543,
    name: "admin-path-to-flowbite-dist-flowbite.min"
  }, {
    path: "/admin/clients/editclients/:slug?",
    component: _646c522e,
    name: "admin-clients-editclients-slug"
  }, {
    path: "/admin/device/editpartners/:slug?",
    component: _56e15339,
    name: "admin-device-editpartners-slug"
  }, {
    path: "/admin/partners/editpartners/:slug?",
    component: _6bc27604,
    name: "admin-partners-editpartners-slug"
  }, {
    path: "/admin/profile/forgotPassword/:slug?",
    component: _6b16390e,
    name: "admin-profile-forgotPassword-slug"
  }, {
    path: "/admin/staff/editstaff/:slug?",
    component: _45dd56ae,
    name: "admin-staff-editstaff-slug"
  }, {
    path: "/admin/stations/editstations/:slug?",
    component: _4d9f8ddc,
    name: "admin-stations-editstations-slug"
  }, {
    path: "/partner/employees/editemployees/:slug?",
    component: _332c2835,
    name: "partner-employees-editemployees-slug"
  }, {
    path: "/",
    component: _55781559,
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
