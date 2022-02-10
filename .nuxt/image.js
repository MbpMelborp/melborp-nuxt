import Vue from 'vue'
import { createImage} from '~image'
import NuxtImg from '~image/components/nuxt-img.vue'
import NuxtPicture from '~image/components/nuxt-picture.vue'

import * as staticRuntime$a90d from '/Users/juanosoriocano/Documents/MEBORP/DEV/MELBORP/nuxt-gsap-locomotive/node_modules/@nuxt/image/dist/runtime/providers/static.js'
import * as ipxRuntime$34e6 from '/Users/juanosoriocano/Documents/MEBORP/DEV/MELBORP/nuxt-gsap-locomotive/node_modules/@nuxt/image/dist/runtime/providers/ipx.js'

const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 320,
    "md": 750,
    "lg": 1000,
    "xl": 1920,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx"
}

imageOptions.providers = {
  ['static']: { provider: staticRuntime$a90d, defaults: {"domains":[]} },
  ['ipx']: { provider: ipxRuntime$34e6, defaults: {} }
}

Vue.component(NuxtImg.name, NuxtImg)
Vue.component(NuxtPicture.name, NuxtPicture)
Vue.component('NImg', NuxtImg)
Vue.component('NPicture', NuxtPicture)

export default function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext)

  if (process.static && process.server) {
    nuxtContext.beforeNuxtRender(({ nuxtState }) => {
      const ssrData = nuxtState.data[0] || {}
      ssrData._img = nuxtState._img || {}
    })
  }

  inject('img', $img)
}
