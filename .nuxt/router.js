import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _29ff771a = () => interopDefault(import('..\\pages\\clients\\index.vue' /* webpackChunkName: "pages/clients/index" */))
const _53e6aa16 = () => interopDefault(import('..\\pages\\coupons\\index.vue' /* webpackChunkName: "pages/coupons/index" */))
const _0376f177 = () => interopDefault(import('..\\pages\\directories\\index.vue' /* webpackChunkName: "pages/directories/index" */))
const _413af5ce = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _09fd2da3 = () => interopDefault(import('..\\pages\\logs\\index.vue' /* webpackChunkName: "pages/logs/index" */))
const _7f75394e = () => interopDefault(import('..\\pages\\main\\index.vue' /* webpackChunkName: "pages/main/index" */))
const _9b04b8c2 = () => interopDefault(import('..\\pages\\organization\\index.vue' /* webpackChunkName: "pages/organization/index" */))
const _a225f9fa = () => interopDefault(import('..\\pages\\reports\\index.vue' /* webpackChunkName: "pages/reports/index" */))
const _4f6f21b9 = () => interopDefault(import('..\\pages\\reset-password\\index.vue' /* webpackChunkName: "pages/reset-password/index" */))
const _197c3e6c = () => interopDefault(import('..\\pages\\screening\\index.vue' /* webpackChunkName: "pages/screening/index" */))
const _0e6fe33b = () => interopDefault(import('..\\pages\\send-email\\index.vue' /* webpackChunkName: "pages/send-email/index" */))
const _262142af = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages/settings/index" */))
const _1b359832 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _29ff771a,
    name: "clients"
  }, {
    path: "/coupons",
    component: _53e6aa16,
    name: "coupons"
  }, {
    path: "/directories",
    component: _0376f177,
    name: "directories"
  }, {
    path: "/login",
    component: _413af5ce,
    name: "login"
  }, {
    path: "/logs",
    component: _09fd2da3,
    name: "logs"
  }, {
    path: "/main",
    component: _7f75394e,
    name: "main"
  }, {
    path: "/organization",
    component: _9b04b8c2,
    name: "organization"
  }, {
    path: "/reports",
    component: _a225f9fa,
    name: "reports"
  }, {
    path: "/reset-password",
    component: _4f6f21b9,
    name: "reset-password"
  }, {
    path: "/screening",
    component: _197c3e6c,
    name: "screening"
  }, {
    path: "/send-email",
    component: _0e6fe33b,
    name: "send-email"
  }, {
    path: "/settings",
    component: _262142af,
    name: "settings"
  }, {
    path: "/",
    component: _1b359832,
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
