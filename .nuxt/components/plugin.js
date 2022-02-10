import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  DelayHydration: () => import('../../node_modules/nuxt-delay-hydration/dist/components/DelayHydration.js' /* webpackChunkName: "components/delay-hydration" */).then(c => wrapFunctional(c.default || c)),
  HydrationStatus: () => import('../../node_modules/nuxt-delay-hydration/dist/components/HydrationStatus.js' /* webpackChunkName: "components/hydration-status" */).then(c => wrapFunctional(c.default || c)),
  Contacto: () => import('../../components/Contacto.vue' /* webpackChunkName: "components/contacto" */).then(c => wrapFunctional(c.default || c)),
  CursorMouse: () => import('../../components/CursorMouse.vue' /* webpackChunkName: "components/cursor-mouse" */).then(c => wrapFunctional(c.default || c)),
  HomeBkg: () => import('../../components/HomeBkg.vue' /* webpackChunkName: "components/home-bkg" */).then(c => wrapFunctional(c.default || c)),
  HomeBkgAnim: () => import('../../components/HomeBkgAnim.vue' /* webpackChunkName: "components/home-bkg-anim" */).then(c => wrapFunctional(c.default || c)),
  HomeBkgImage: () => import('../../components/HomeBkgImage.vue' /* webpackChunkName: "components/home-bkg-image" */).then(c => wrapFunctional(c.default || c)),
  HomeBkgMarquee: () => import('../../components/HomeBkgMarquee.vue' /* webpackChunkName: "components/home-bkg-marquee" */).then(c => wrapFunctional(c.default || c)),
  HomeTop: () => import('../../components/HomeTop.vue' /* webpackChunkName: "components/home-top" */).then(c => wrapFunctional(c.default || c)),
  HomeTopOld: () => import('../../components/HomeTop_old.vue' /* webpackChunkName: "components/home-top-old" */).then(c => wrapFunctional(c.default || c)),
  HomeTopOld2: () => import('../../components/HomeTop_old_2.vue' /* webpackChunkName: "components/home-top-old2" */).then(c => wrapFunctional(c.default || c)),
  Nav: () => import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c)),
  Preload: () => import('../../components/Preload.vue' /* webpackChunkName: "components/preload" */).then(c => wrapFunctional(c.default || c)),
  PreloadImages: () => import('../../components/PreloadImages.vue' /* webpackChunkName: "components/preload-images" */).then(c => wrapFunctional(c.default || c)),
  PreloadInterior: () => import('../../components/PreloadInterior.vue' /* webpackChunkName: "components/preload-interior" */).then(c => wrapFunctional(c.default || c)),
  Proyecto: () => import('../../components/Proyecto.vue' /* webpackChunkName: "components/proyecto" */).then(c => wrapFunctional(c.default || c)),
  BoxComponent: () => import('../../components/box-component.vue' /* webpackChunkName: "components/box-component" */).then(c => wrapFunctional(c.default || c)),
  TeamBroken: () => import('../../components/team/Team_broken.vue' /* webpackChunkName: "components/team-broken" */).then(c => wrapFunctional(c.default || c)),
  ProyectosMedia: () => import('../../components/proyectos/Media.vue' /* webpackChunkName: "components/proyectos-media" */).then(c => wrapFunctional(c.default || c)),
  ProyectosMediaBroken: () => import('../../components/proyectos/Media_broken.vue' /* webpackChunkName: "components/proyectos-media-broken" */).then(c => wrapFunctional(c.default || c)),
  ProyectosMediaCarrusel: () => import('../../components/proyectos/Media_carrusel.vue' /* webpackChunkName: "components/proyectos-media-carrusel" */).then(c => wrapFunctional(c.default || c)),
  ProyectosMediaDerecha: () => import('../../components/proyectos/Media_derecha.vue' /* webpackChunkName: "components/proyectos-media-derecha" */).then(c => wrapFunctional(c.default || c)),
  ProyectosMediaFull: () => import('../../components/proyectos/Media_full.vue' /* webpackChunkName: "components/proyectos-media-full" */).then(c => wrapFunctional(c.default || c)),
  ProyectosMediaSobrepuestas: () => import('../../components/proyectos/Media_sobrepuestas.vue' /* webpackChunkName: "components/proyectos-media-sobrepuestas" */).then(c => wrapFunctional(c.default || c)),
  ProyectosMediaVideo: () => import('../../components/proyectos/Media_video.vue' /* webpackChunkName: "components/proyectos-media-video" */).then(c => wrapFunctional(c.default || c)),
  ProyectosProyectoItem: () => import('../../components/proyectos/ProyectoItem.vue' /* webpackChunkName: "components/proyectos-proyecto-item" */).then(c => wrapFunctional(c.default || c)),
  ProyectosTipo: () => import('../../components/proyectos/Tipo.vue' /* webpackChunkName: "components/proyectos-tipo" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
