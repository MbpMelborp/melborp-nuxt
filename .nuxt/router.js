import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _458b7075 = () => interopDefault(import('../node_modules/@nuxtjs/svg-sprite/lib/pages/icons-list.vue' /* webpackChunkName: "" */))
const _5fc8b2b0 = () => interopDefault(import('../pages/contacto.vue' /* webpackChunkName: "pages/contacto" */))
const _b9c661f6 = () => interopDefault(import('../pages/horizontal-scroll.vue' /* webpackChunkName: "pages/horizontal-scroll" */))
const _2fda3aec = () => interopDefault(import('../pages/image-loads.vue' /* webpackChunkName: "pages/image-loads" */))
const _78a34188 = () => interopDefault(import('../pages/normal.vue' /* webpackChunkName: "pages/normal" */))
const _3a6b81bb = () => interopDefault(import('../pages/on-call.vue' /* webpackChunkName: "pages/on-call" */))
const _f6d86104 = () => interopDefault(import('../pages/politica-de-privacidad.vue' /* webpackChunkName: "pages/politica-de-privacidad" */))
const _6a0ac44e = () => interopDefault(import('../pages/scroll-trigger.vue' /* webpackChunkName: "pages/scroll-trigger" */))
const _7c72ea3e = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _f7370416 = () => interopDefault(import('../pages/work/index.vue' /* webpackChunkName: "pages/work/index" */))
const _6373799d = () => interopDefault(import('../pages/work/_id.vue' /* webpackChunkName: "pages/work/_id" */))
const _223ba07e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/_icons",
    component: _458b7075,
    name: "icons-list"
  }, {
    path: "/contacto",
    component: _5fc8b2b0,
    name: "contacto"
  }, {
    path: "/horizontal-scroll",
    component: _b9c661f6,
    name: "horizontal-scroll"
  }, {
    path: "/image-loads",
    component: _2fda3aec,
    name: "image-loads"
  }, {
    path: "/normal",
    component: _78a34188,
    name: "normal"
  }, {
    path: "/on-call",
    component: _3a6b81bb,
    name: "on-call"
  }, {
    path: "/politica-de-privacidad",
    component: _f6d86104,
    name: "politica-de-privacidad"
  }, {
    path: "/scroll-trigger",
    component: _6a0ac44e,
    name: "scroll-trigger"
  }, {
    path: "/team",
    component: _7c72ea3e,
    name: "team"
  }, {
    path: "/work",
    component: _f7370416,
    name: "work"
  }, {
    path: "/work/:id",
    component: _6373799d,
    name: "work-id"
  }, {
    path: "/",
    component: _223ba07e,
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
