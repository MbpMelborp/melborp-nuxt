import Vue from 'vue'
import delayHydration from './hydration/hydrationRace.js'

import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_4e1c6a27 from 'nuxt_plugin_plugin_4e1c6a27' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_vlazyload_ab201a2a from 'nuxt_plugin_vlazyload_ab201a2a' // Source: ./v-lazy-load.js (mode: 'all')
import nuxt_plugin_templatesplugin630b5fb1_73d6195e from 'nuxt_plugin_templatesplugin630b5fb1_73d6195e' // Source: ./templates.plugin.630b5fb1.js (mode: 'all')
import nuxt_plugin_nuxtsvgsprite_21f46a9b from 'nuxt_plugin_nuxtsvgsprite_21f46a9b' // Source: ./nuxt-svg-sprite.js (mode: 'all')
import nuxt_plugin_workbox_2580d199 from 'nuxt_plugin_workbox_2580d199' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_3b4120a8 from 'nuxt_plugin_metaplugin_3b4120a8' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_gtm_44a4e9d3 from 'nuxt_plugin_gtm_44a4e9d3' // Source: ./gtm.js (mode: 'all')
import nuxt_plugin_axios_102757bd from 'nuxt_plugin_axios_102757bd' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_moment_036f317b from 'nuxt_plugin_moment_036f317b' // Source: ./moment.js (mode: 'all')
import nuxt_plugin_image_09a35690 from 'nuxt_plugin_image_09a35690' // Source: ./image.js (mode: 'all')
import nuxt_plugin_both_2a2312c0 from 'nuxt_plugin_both_2a2312c0' // Source: ../plugins/both.js (mode: 'all')
import nuxt_plugin_client_035ad0d4 from 'nuxt_plugin_client_035ad0d4' // Source: ../plugins/client.js (mode: 'client')
import nuxt_plugin_server_640c091e from 'nuxt_plugin_server_640c091e' // Source: ../plugins/server.js (mode: 'server')
import nuxt_plugin_cursor_cd736faa from 'nuxt_plugin_cursor_cd736faa' // Source: ../plugins/cursor.js (mode: 'client')
import nuxt_plugin_marquee_24da068b from 'nuxt_plugin_marquee_24da068b' // Source: ../plugins/marquee.js (mode: 'client')
import nuxt_plugin_video_37b75512 from 'nuxt_plugin_video_37b75512' // Source: ../plugins/video.js (mode: 'client')
import nuxt_plugin_carousel_2496c93e from 'nuxt_plugin_carousel_2496c93e' // Source: ../plugins/carousel.js (mode: 'client')
import nuxt_plugin_size_644e8220 from 'nuxt_plugin_size_644e8220' // Source: ../plugins/size.js (mode: 'client')
import nuxt_plugin_lazyload_10f2b7b2 from 'nuxt_plugin_lazyload_10f2b7b2' // Source: ../plugins/lazyload.js (mode: 'client')
import nuxt_plugin_ismobile_95c5a216 from 'nuxt_plugin_ismobile_95c5a216' // Source: ../plugins/ismobile.js (mode: 'client')
import nuxt_plugin_console_76270136 from 'nuxt_plugin_console_76270136' // Source: ../plugins/console.js (mode: 'client')
import nuxt_plugin_intersect_6c88e6ee from 'nuxt_plugin_intersect_6c88e6ee' // Source: ../plugins/intersect.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    console.time('[NuxtDelayHydration] Hydration time')
    const style = 'background: #e2f8e5; color: #2e9127;'
    console.log('%c[NuxtDelayHydration] Started delaying hydration with mode: "init"', style)

    const hydrationEvent = await delayHydration()

    console.log(`%c[NuxtDelayHydration] Finished delaying hydration with trigger: "${hydrationEvent}"`, style)
    console.timeEnd('[NuxtDelayHydration] Hydration time')
}

  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"MELBORP - Business Updaters","htmlAttrs":{"lang":"en"},"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preconnect","href":"\u002F\u002Fa.storyblok.com"},{"hid":"shortcut-icon","rel":"shortcut icon","href":"\u002Ffavicon.ico"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.05b678fe.json","hid":"manifest"}],"script":[{"rel":"preload","src":"https:\u002F\u002Fkit.fontawesome.com\u002F6328404de0.js","crossorigin":"anonymous"}],"bodyAttrs":{"class":"development debug-screens"},"meta":[{"hid":"description","name":"description","content":"Somos un Bussines Updaters y nuestro objetivo es usar la creatividad para transformar negocios que puedan cambiar el mundo."},{"hid":"abstract","name":"abstract","content":"Somos un Bussines Updaters y nuestro objetivo es usar la creatividad para transformar negocios que puedan cambiar el mundo."},{"hid":"keywords","name":"keywords","content":"Agencia de Publicidad, Agencia Creativa, Publicidad, Agencia de Publicidad, Diseño de Marcas, Campañas, Logotipos, Diseño de empaques, Imagen Corporativa, redes sociales, digital, sitios web, branding, planeación de marcas, investigación de mercados, sura, argos, dislicores, ruta n, medellin, colombia, bogota, experiencias de marca"},{"hid":"geo.position\"","name":"geo.position\"","content":"6.1554102,-75.5317308,"},{"hid":"geo.placename\"","name":"geo.placename\"","content":"Melborp"},{"property":"og:site_name","content":"MELBORP"},{"property":"og:url","content":"https:\u002F\u002Fmelborp.art\u002F"},{"property":"og:type","content":"website"},{"property":"og:title","content":"MELBORP - Business Updaters"},{"property":"og:description","content":"Somos un Bussines Updaters y nuestro objetivo es usar la creatividad para transformar negocios que puedan cambiar el mundo."},{"property":"og:image","content":"https:\u002F\u002Fmelborp.art\u002Ffb.png?v=1"},{"property":"og:image:url","content":"https:\u002F\u002Fmelborp.art\u002Ffb.png?v=1"},{"property":"og:image:secure_url","content":"https:\u002F\u002Fmelborp.art\u002Ffb.png?v=1"},{"property":"og:latitude","content":"6.2095861"},{"name":"twitter:card","content":"summary"},{"property":"og:longitude","content":"6.2095861"},{"name":"twitter:site","content":"@melborpco"},{"property":"og:street_address","content":" Envigado, Colombia Km 17 Vía Las Palmas Parque La Reserva Piso 4 "},{"name":"twitter:url","content":"https:\u002F\u002Fmelborp.art\u002F"},{"property":"og:locality","content":"Medellín"},{"name":"twitter:title","content":"MELBORP"},{"property":"og:region","content":"Medellín"},{"name":"twitter:description","content":"Somos un Bussines Updaters y nuestro objetivo es usar la creatividad para transformar negocios que puedan cambiar el mundo."},{"property":"og:country_name","content":"Colombia"},{"property":"og:email","content":"info@melborp.co"},{"property":"og:phone_number","content":"(4) 3119826"},{"name":"dcterms.title","content":"MELBORP"},{"name":"dcterms.description","content":"Somos un Bussines Updaters y nuestro objetivo es usar la creatividad para transformar negocios que puedan cambiar el mundo."},{"name":"dcterms.identifier","content":"https:\u002F\u002Fmelborp.art\u002F"},{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"melborp"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"melborp"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"melborp"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_4e1c6a27 === 'function') {
    await nuxt_plugin_plugin_4e1c6a27(app.context, inject)
  }

  if (typeof nuxt_plugin_vlazyload_ab201a2a === 'function') {
    await nuxt_plugin_vlazyload_ab201a2a(app.context, inject)
  }

  if (typeof nuxt_plugin_templatesplugin630b5fb1_73d6195e === 'function') {
    await nuxt_plugin_templatesplugin630b5fb1_73d6195e(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtsvgsprite_21f46a9b === 'function') {
    await nuxt_plugin_nuxtsvgsprite_21f46a9b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_2580d199 === 'function') {
    await nuxt_plugin_workbox_2580d199(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_3b4120a8 === 'function') {
    await nuxt_plugin_metaplugin_3b4120a8(app.context, inject)
  }

  if (typeof nuxt_plugin_gtm_44a4e9d3 === 'function') {
    await nuxt_plugin_gtm_44a4e9d3(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_102757bd === 'function') {
    await nuxt_plugin_axios_102757bd(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_036f317b === 'function') {
    await nuxt_plugin_moment_036f317b(app.context, inject)
  }

  if (typeof nuxt_plugin_image_09a35690 === 'function') {
    await nuxt_plugin_image_09a35690(app.context, inject)
  }

  if (typeof nuxt_plugin_both_2a2312c0 === 'function') {
    await nuxt_plugin_both_2a2312c0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_client_035ad0d4 === 'function') {
    await nuxt_plugin_client_035ad0d4(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_server_640c091e === 'function') {
    await nuxt_plugin_server_640c091e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_cursor_cd736faa === 'function') {
    await nuxt_plugin_cursor_cd736faa(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_marquee_24da068b === 'function') {
    await nuxt_plugin_marquee_24da068b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_video_37b75512 === 'function') {
    await nuxt_plugin_video_37b75512(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_carousel_2496c93e === 'function') {
    await nuxt_plugin_carousel_2496c93e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_size_644e8220 === 'function') {
    await nuxt_plugin_size_644e8220(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_lazyload_10f2b7b2 === 'function') {
    await nuxt_plugin_lazyload_10f2b7b2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_ismobile_95c5a216 === 'function') {
    await nuxt_plugin_ismobile_95c5a216(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_console_76270136 === 'function') {
    await nuxt_plugin_console_76270136(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_intersect_6c88e6ee === 'function') {
    await nuxt_plugin_intersect_6c88e6ee(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    const { route } = router.resolve(app.context.route.fullPath)
    // Ignore 404s rather than blindly replacing URL
    if (!route.matched.length && process.client) {
      return resolve()
    }
    router.replace(route, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
