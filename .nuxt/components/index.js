import { wrapFunctional } from './utils'

export { default as DelayHydration } from '../../node_modules/nuxt-delay-hydration/dist/components/DelayHydration.js'
export { default as HydrationStatus } from '../../node_modules/nuxt-delay-hydration/dist/components/HydrationStatus.js'
export { default as Contacto } from '../../components/Contacto.vue'
export { default as CursorMouse } from '../../components/CursorMouse.vue'
export { default as HomeBkg } from '../../components/HomeBkg.vue'
export { default as HomeBkgAnim } from '../../components/HomeBkgAnim.vue'
export { default as HomeBkgImage } from '../../components/HomeBkgImage.vue'
export { default as HomeBkgMarquee } from '../../components/HomeBkgMarquee.vue'
export { default as HomeTop } from '../../components/HomeTop.vue'
export { default as HomeTopOld } from '../../components/HomeTop_old.vue'
export { default as HomeTopOld2 } from '../../components/HomeTop_old_2.vue'
export { default as Nav } from '../../components/Nav.vue'
export { default as Preload } from '../../components/Preload.vue'
export { default as PreloadImages } from '../../components/PreloadImages.vue'
export { default as PreloadInterior } from '../../components/PreloadInterior.vue'
export { default as Proyecto } from '../../components/Proyecto.vue'
export { default as BoxComponent } from '../../components/box-component.vue'
export { default as TeamBroken } from '../../components/team/Team_broken.vue'
export { default as ProyectosMedia } from '../../components/proyectos/Media.vue'
export { default as ProyectosMediaBroken } from '../../components/proyectos/Media_broken.vue'
export { default as ProyectosMediaCarrusel } from '../../components/proyectos/Media_carrusel.vue'
export { default as ProyectosMediaDerecha } from '../../components/proyectos/Media_derecha.vue'
export { default as ProyectosMediaFull } from '../../components/proyectos/Media_full.vue'
export { default as ProyectosMediaSobrepuestas } from '../../components/proyectos/Media_sobrepuestas.vue'
export { default as ProyectosMediaVideo } from '../../components/proyectos/Media_video.vue'
export { default as ProyectosProyectoItem } from '../../components/proyectos/ProyectoItem.vue'
export { default as ProyectosTipo } from '../../components/proyectos/Tipo.vue'

export const LazyDelayHydration = import('../../node_modules/nuxt-delay-hydration/dist/components/DelayHydration.js' /* webpackChunkName: "components/delay-hydration" */).then(c => wrapFunctional(c.default || c))
export const LazyHydrationStatus = import('../../node_modules/nuxt-delay-hydration/dist/components/HydrationStatus.js' /* webpackChunkName: "components/hydration-status" */).then(c => wrapFunctional(c.default || c))
export const LazyContacto = import('../../components/Contacto.vue' /* webpackChunkName: "components/contacto" */).then(c => wrapFunctional(c.default || c))
export const LazyCursorMouse = import('../../components/CursorMouse.vue' /* webpackChunkName: "components/cursor-mouse" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeBkg = import('../../components/HomeBkg.vue' /* webpackChunkName: "components/home-bkg" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeBkgAnim = import('../../components/HomeBkgAnim.vue' /* webpackChunkName: "components/home-bkg-anim" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeBkgImage = import('../../components/HomeBkgImage.vue' /* webpackChunkName: "components/home-bkg-image" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeBkgMarquee = import('../../components/HomeBkgMarquee.vue' /* webpackChunkName: "components/home-bkg-marquee" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeTop = import('../../components/HomeTop.vue' /* webpackChunkName: "components/home-top" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeTopOld = import('../../components/HomeTop_old.vue' /* webpackChunkName: "components/home-top-old" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeTopOld2 = import('../../components/HomeTop_old_2.vue' /* webpackChunkName: "components/home-top-old2" */).then(c => wrapFunctional(c.default || c))
export const LazyNav = import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const LazyPreload = import('../../components/Preload.vue' /* webpackChunkName: "components/preload" */).then(c => wrapFunctional(c.default || c))
export const LazyPreloadImages = import('../../components/PreloadImages.vue' /* webpackChunkName: "components/preload-images" */).then(c => wrapFunctional(c.default || c))
export const LazyPreloadInterior = import('../../components/PreloadInterior.vue' /* webpackChunkName: "components/preload-interior" */).then(c => wrapFunctional(c.default || c))
export const LazyProyecto = import('../../components/Proyecto.vue' /* webpackChunkName: "components/proyecto" */).then(c => wrapFunctional(c.default || c))
export const LazyBoxComponent = import('../../components/box-component.vue' /* webpackChunkName: "components/box-component" */).then(c => wrapFunctional(c.default || c))
export const LazyTeamBroken = import('../../components/team/Team_broken.vue' /* webpackChunkName: "components/team-broken" */).then(c => wrapFunctional(c.default || c))
export const LazyProyectosMedia = import('../../components/proyectos/Media.vue' /* webpackChunkName: "components/proyectos-media" */).then(c => wrapFunctional(c.default || c))
export const LazyProyectosMediaBroken = import('../../components/proyectos/Media_broken.vue' /* webpackChunkName: "components/proyectos-media-broken" */).then(c => wrapFunctional(c.default || c))
export const LazyProyectosMediaCarrusel = import('../../components/proyectos/Media_carrusel.vue' /* webpackChunkName: "components/proyectos-media-carrusel" */).then(c => wrapFunctional(c.default || c))
export const LazyProyectosMediaDerecha = import('../../components/proyectos/Media_derecha.vue' /* webpackChunkName: "components/proyectos-media-derecha" */).then(c => wrapFunctional(c.default || c))
export const LazyProyectosMediaFull = import('../../components/proyectos/Media_full.vue' /* webpackChunkName: "components/proyectos-media-full" */).then(c => wrapFunctional(c.default || c))
export const LazyProyectosMediaSobrepuestas = import('../../components/proyectos/Media_sobrepuestas.vue' /* webpackChunkName: "components/proyectos-media-sobrepuestas" */).then(c => wrapFunctional(c.default || c))
export const LazyProyectosMediaVideo = import('../../components/proyectos/Media_video.vue' /* webpackChunkName: "components/proyectos-media-video" */).then(c => wrapFunctional(c.default || c))
export const LazyProyectosProyectoItem = import('../../components/proyectos/ProyectoItem.vue' /* webpackChunkName: "components/proyectos-proyecto-item" */).then(c => wrapFunctional(c.default || c))
export const LazyProyectosTipo = import('../../components/proyectos/Tipo.vue' /* webpackChunkName: "components/proyectos-tipo" */).then(c => wrapFunctional(c.default || c))
