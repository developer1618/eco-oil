import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _618de49a = () => interopDefault(import('..\\pages\\clients\\index.vue' /* webpackChunkName: "pages/clients/index" */))
const _0d9b1875 = () => interopDefault(import('..\\pages\\coupons\\index.vue' /* webpackChunkName: "pages/coupons/index" */))
const _69dac212 = () => interopDefault(import('..\\pages\\directories\\index.vue' /* webpackChunkName: "pages/directories/index" */))
const _8aa35ace = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _517c9fba = () => interopDefault(import('..\\pages\\logs\\index.vue' /* webpackChunkName: "pages/logs/index" */))
const _e4ec344e = () => interopDefault(import('..\\pages\\main\\index.vue' /* webpackChunkName: "pages/main/index" */))
const _4350b3c2 = () => interopDefault(import('..\\pages\\organization\\index.vue' /* webpackChunkName: "pages/organization/index" */))
const _33091efa = () => interopDefault(import('..\\pages\\reports\\index.vue' /* webpackChunkName: "pages/reports/index" */))
const _265af78e = () => interopDefault(import('..\\pages\\reset-password\\index.vue' /* webpackChunkName: "pages/reset-password/index" */))
const _b1b56828 = () => interopDefault(import('..\\pages\\screening\\index.vue' /* webpackChunkName: "pages/screening/index" */))
const _35e885bb = () => interopDefault(import('..\\pages\\send-email\\index.vue' /* webpackChunkName: "pages/send-email/index" */))
const _3f3ef5a2 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages/settings/index" */))
const _082435fe = () => interopDefault(import('..\\pages\\sub-access\\index.vue' /* webpackChunkName: "pages/sub-access/index" */))
const _971f6d4c = () => interopDefault(import('..\\pages\\sub-city\\index.vue' /* webpackChunkName: "pages/sub-city/index" */))
const _5e55dd72 = () => interopDefault(import('..\\pages\\sub-clients\\index.vue' /* webpackChunkName: "pages/sub-clients/index" */))
const _5849173e = () => interopDefault(import('..\\pages\\sub-form\\index.vue' /* webpackChunkName: "pages/sub-form/index" */))
const _67391595 = () => interopDefault(import('..\\pages\\sub-invitations\\index.vue' /* webpackChunkName: "pages/sub-invitations/index" */))
const _a6ae1e12 = () => interopDefault(import('..\\pages\\sub-lang\\index.vue' /* webpackChunkName: "pages/sub-lang/index" */))
const _1fe25d92 = () => interopDefault(import('..\\pages\\sub-organization\\index.vue' /* webpackChunkName: "pages/sub-organization/index" */))
const _28b9d971 = () => interopDefault(import('..\\pages\\sub-region\\index.vue' /* webpackChunkName: "pages/sub-region/index" */))
const _a2e112aa = () => interopDefault(import('..\\pages\\sub-rewards\\index.vue' /* webpackChunkName: "pages/sub-rewards/index" */))
const _c721ea9c = () => interopDefault(import('..\\pages\\sub-roles\\index.vue' /* webpackChunkName: "pages/sub-roles/index" */))
const _b7434e2a = () => interopDefault(import('..\\pages\\sub-visualization\\index.vue' /* webpackChunkName: "pages/sub-visualization/index" */))
const _54d6aacc = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))
const _4cadfab2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/clients",
    component: _618de49a,
    name: "clients"
  }, {
    path: "/coupons",
    component: _0d9b1875,
    name: "coupons"
  }, {
    path: "/directories",
    component: _69dac212,
    name: "directories"
  }, {
    path: "/login",
    component: _8aa35ace,
    name: "login"
  }, {
    path: "/logs",
    component: _517c9fba,
    name: "logs"
  }, {
    path: "/main",
    component: _e4ec344e,
    name: "main"
  }, {
    path: "/organization",
    component: _4350b3c2,
    name: "organization"
  }, {
    path: "/reports",
    component: _33091efa,
    name: "reports"
  }, {
    path: "/reset-password",
    component: _265af78e,
    name: "reset-password"
  }, {
    path: "/screening",
    component: _b1b56828,
    name: "screening"
  }, {
    path: "/send-email",
    component: _35e885bb,
    name: "send-email"
  }, {
    path: "/settings",
    component: _3f3ef5a2,
    name: "settings"
  }, {
    path: "/sub-access",
    component: _082435fe,
    name: "sub-access"
  }, {
    path: "/sub-city",
    component: _971f6d4c,
    name: "sub-city"
  }, {
    path: "/sub-clients",
    component: _5e55dd72,
    name: "sub-clients"
  }, {
    path: "/sub-form",
    component: _5849173e,
    name: "sub-form"
  }, {
    path: "/sub-invitations",
    component: _67391595,
    name: "sub-invitations"
  }, {
    path: "/sub-lang",
    component: _a6ae1e12,
    name: "sub-lang"
  }, {
    path: "/sub-organization",
    component: _1fe25d92,
    name: "sub-organization"
  }, {
    path: "/sub-region",
    component: _28b9d971,
    name: "sub-region"
  }, {
    path: "/sub-rewards",
    component: _a2e112aa,
    name: "sub-rewards"
  }, {
    path: "/sub-roles",
    component: _c721ea9c,
    name: "sub-roles"
  }, {
    path: "/sub-visualization",
    component: _b7434e2a,
    name: "sub-visualization"
  }, {
    path: "/users",
    component: _54d6aacc,
    name: "users"
  }, {
    path: "/",
    component: _4cadfab2,
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
