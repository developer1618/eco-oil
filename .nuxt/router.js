import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2959a2c7 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _233cb661 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _4a1665c0 = () => interopDefault(import('../pages/partner/index.vue' /* webpackChunkName: "pages/partner/index" */))
const _377bb317 = () => interopDefault(import('../pages/admin/bonus/index.vue' /* webpackChunkName: "pages/admin/bonus/index" */))
const _6e76355b = () => interopDefault(import('../pages/admin/cards/index.vue' /* webpackChunkName: "pages/admin/cards/index" */))
const _0d195300 = () => interopDefault(import('../pages/admin/clients/index.vue' /* webpackChunkName: "pages/admin/clients/index" */))
const _45eb5ef4 = () => interopDefault(import('../pages/admin/device/index.vue' /* webpackChunkName: "pages/admin/device/index" */))
const _3aa13634 = () => interopDefault(import('../pages/admin/monitoring/index.vue' /* webpackChunkName: "pages/admin/monitoring/index" */))
const _143cbb6e = () => interopDefault(import('../pages/admin/partners/index.vue' /* webpackChunkName: "pages/admin/partners/index" */))
const _4de304e1 = () => interopDefault(import('../pages/admin/profile/index.vue' /* webpackChunkName: "pages/admin/profile/index" */))
const _14941852 = () => interopDefault(import('../pages/admin/report/index.vue' /* webpackChunkName: "pages/admin/report/index" */))
const _7481e59c = () => interopDefault(import('../pages/admin/scoreboard/index.vue' /* webpackChunkName: "pages/admin/scoreboard/index" */))
const _30426d96 = () => interopDefault(import('../pages/admin/scoreboard2/index.vue' /* webpackChunkName: "pages/admin/scoreboard2/index" */))
const _23f2a87e = () => interopDefault(import('../pages/admin/settings/index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _78b59898 = () => interopDefault(import('../pages/admin/staff/index.vue' /* webpackChunkName: "pages/admin/staff/index" */))
const _0e85c25d = () => interopDefault(import('../pages/admin/stations/index.vue' /* webpackChunkName: "pages/admin/stations/index" */))
const _f8caf794 = () => interopDefault(import('../pages/partner/employees/index.vue' /* webpackChunkName: "pages/partner/employees/index" */))
const _23f330e8 = () => interopDefault(import('../pages/partner/settings/index.vue' /* webpackChunkName: "pages/partner/settings/index" */))
const _3f277ec8 = () => interopDefault(import('../pages/admin/device/adddevice/index.vue' /* webpackChunkName: "pages/admin/device/adddevice/index" */))
const _4248b474 = () => interopDefault(import('../pages/admin/partners/addpartners/index.vue' /* webpackChunkName: "pages/admin/partners/addpartners/index" */))
const _4e1f7e68 = () => interopDefault(import('../pages/admin/staff/addstaff/index.vue' /* webpackChunkName: "pages/admin/staff/addstaff/index" */))
const _3d3067ee = () => interopDefault(import('../pages/admin/stations/addstations/index.vue' /* webpackChunkName: "pages/admin/stations/addstations/index" */))
const _8fe5905a = () => interopDefault(import('../pages/partner/employees/addemployees/index.vue' /* webpackChunkName: "pages/partner/employees/addemployees/index" */))
const _63b0f200 = () => interopDefault(import('../pages/admin/path/to/flowbite/dist/flowbite.min.js' /* webpackChunkName: "pages/admin/path/to/flowbite/dist/flowbite.min" */))
const _98c867b2 = () => interopDefault(import('../pages/admin/clients/editclients/_slug.vue' /* webpackChunkName: "pages/admin/clients/editclients/_slug" */))
const _9cf9c804 = () => interopDefault(import('../pages/admin/device/editpartners/_slug.vue' /* webpackChunkName: "pages/admin/device/editpartners/_slug" */))
const _2bb5aac9 = () => interopDefault(import('../pages/admin/partners/editpartners/_slug.vue' /* webpackChunkName: "pages/admin/partners/editpartners/_slug" */))
const _1a87f7da = () => interopDefault(import('../pages/admin/profile/forgotPassword/_slug.vue' /* webpackChunkName: "pages/admin/profile/forgotPassword/_slug" */))
const _2c8d8217 = () => interopDefault(import('../pages/admin/staff/editstaff/_slug.vue' /* webpackChunkName: "pages/admin/staff/editstaff/_slug" */))
const _9685296e = () => interopDefault(import('../pages/admin/stations/editstations/_slug.vue' /* webpackChunkName: "pages/admin/stations/editstations/_slug" */))
const _2f725ccc = () => interopDefault(import('../pages/partner/employees/editemployees/_slug.vue' /* webpackChunkName: "pages/partner/employees/editemployees/_slug" */))
const _2bad6972 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2959a2c7,
    name: "admin"
  }, {
    path: "/login",
    component: _233cb661,
    name: "login"
  }, {
    path: "/partner",
    component: _4a1665c0,
    name: "partner"
  }, {
    path: "/admin/bonus",
    component: _377bb317,
    name: "admin-bonus"
  }, {
    path: "/admin/cards",
    component: _6e76355b,
    name: "admin-cards"
  }, {
    path: "/admin/clients",
    component: _0d195300,
    name: "admin-clients"
  }, {
    path: "/admin/device",
    component: _45eb5ef4,
    name: "admin-device"
  }, {
    path: "/admin/monitoring",
    component: _3aa13634,
    name: "admin-monitoring"
  }, {
    path: "/admin/partners",
    component: _143cbb6e,
    name: "admin-partners"
  }, {
    path: "/admin/profile",
    component: _4de304e1,
    name: "admin-profile"
  }, {
    path: "/admin/report",
    component: _14941852,
    name: "admin-report"
  }, {
    path: "/admin/scoreboard",
    component: _7481e59c,
    name: "admin-scoreboard"
  }, {
    path: "/admin/scoreboard2",
    component: _30426d96,
    name: "admin-scoreboard2"
  }, {
    path: "/admin/settings",
    component: _23f2a87e,
    name: "admin-settings"
  }, {
    path: "/admin/staff",
    component: _78b59898,
    name: "admin-staff"
  }, {
    path: "/admin/stations",
    component: _0e85c25d,
    name: "admin-stations"
  }, {
    path: "/partner/employees",
    component: _f8caf794,
    name: "partner-employees"
  }, {
    path: "/partner/settings",
    component: _23f330e8,
    name: "partner-settings"
  }, {
    path: "/admin/device/adddevice",
    component: _3f277ec8,
    name: "admin-device-adddevice"
  }, {
    path: "/admin/partners/addpartners",
    component: _4248b474,
    name: "admin-partners-addpartners"
  }, {
    path: "/admin/staff/addstaff",
    component: _4e1f7e68,
    name: "admin-staff-addstaff"
  }, {
    path: "/admin/stations/addstations",
    component: _3d3067ee,
    name: "admin-stations-addstations"
  }, {
    path: "/partner/employees/addemployees",
    component: _8fe5905a,
    name: "partner-employees-addemployees"
  }, {
    path: "/admin/path/to/flowbite/dist/flowbite.min",
    component: _63b0f200,
    name: "admin-path-to-flowbite-dist-flowbite.min"
  }, {
    path: "/admin/clients/editclients/:slug?",
    component: _98c867b2,
    name: "admin-clients-editclients-slug"
  }, {
    path: "/admin/device/editpartners/:slug?",
    component: _9cf9c804,
    name: "admin-device-editpartners-slug"
  }, {
    path: "/admin/partners/editpartners/:slug?",
    component: _2bb5aac9,
    name: "admin-partners-editpartners-slug"
  }, {
    path: "/admin/profile/forgotPassword/:slug?",
    component: _1a87f7da,
    name: "admin-profile-forgotPassword-slug"
  }, {
    path: "/admin/staff/editstaff/:slug?",
    component: _2c8d8217,
    name: "admin-staff-editstaff-slug"
  }, {
    path: "/admin/stations/editstations/:slug?",
    component: _9685296e,
    name: "admin-stations-editstations-slug"
  }, {
    path: "/partner/employees/editemployees/:slug?",
    component: _2f725ccc,
    name: "partner-employees-editemployees-slug"
  }, {
    path: "/",
    component: _2bad6972,
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
