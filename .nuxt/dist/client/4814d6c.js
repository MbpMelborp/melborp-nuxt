(window.webpackJsonp=window.webpackJsonp||[]).push([[26,8],{344:function(t,a,o){"use strict";o(10);var n=o(46),c=o(1);a.a={mounted:function(){var t=this;window&&window.dispatchEvent(new Event("resize")),this.$Lazyload.$on("loading",(function(a,o){a.bindType;var c=a.el;a.naturalHeight,a.naturalWidth,a.$parent,a.src,a.loading,a.error;window&&window.dispatchEvent(new Event("resize")),c.classList.contains("vlazy")&&(t.$isMobile()?n.b.set(c,{clipPath:"inset(0% 0% 100% 0%)",scaleY:1.1,autoAlpha:0}):n.b.set(c,{clipPath:"inset(0% 0% 0% 0%)",scaleY:1,autoAlpha:0}))})),this.$Lazyload.$on("loaded",(function(t,a){t.bindType;var o=t.el;t.naturalHeight,t.naturalWidth,t.$parent,t.src,t.loading,t.error;window&&o.classList.contains("vlazy")&&(o.classList.contains("vlazy")?n.b.to(o,{clipPath:"inset(0% 0% 0% 0%)",scaleY:1,autoAlpha:1,duration:.5,ease:c.c.easeInOut,onStart:function(){window.dispatchEvent(new Event("resize"))}}):n.b.to(o,{clipPath:"inset(0% 0% 0% 0%)",scaleY:1,autoAlpha:1,duration:.8,ease:c.c.easeInOut,onStart:function(){window.dispatchEvent(new Event("resize"))}}))}))},methods:{loaded:function(t){window&&(t.target.classList.contains("isLoaded")||t.target.classList.contains("isLoading")?n.b.to(t.target,{scaleY:1,autoAlpha:1,duration:.5,ease:c.c.easeInOut,onStart:function(){window.dispatchEvent(new Event("resize"))}}):n.b.set(t.target,{scaleY:1,autoAlpha:0}))},clipToRight:function(t,a,o,i){o&&t.forEach((function(t,a){!1!==t.target.loaded&&void 0!==t.target.loaded||(t.target.loaded=!0,n.b.fromTo(t.target,{clipPath:"inset(0% 100% 0% 0%)",y:10},{clipPath:"inset(0% 0% 0% 0%)",y:0,duration:1,delay:.2,stagger:.2*a,overwrite:!1,ease:c.c.easeInOut,onStart:function(){},onComplete:function(){n.b.killTweensOf(t.target)}}))}))},clipToTop:function(t,a,o,i){o&&t.forEach((function(t,a){!1!==t.target.loaded&&void 0!==t.target.loaded||(t.target.loaded=!0,n.b.fromTo(t.target,{clipPath:"inset(100% 0% 0% 0%)",y:10},{clipPath:"inset(0% 0% 0% 0%)",y:0,duration:1,delay:.2,stagger:.2*a,overwrite:!1,ease:c.c.easeInOut,onStart:function(){},onComplete:function(){n.b.killTweensOf(t.target)}}))}))}}}},345:function(t,a,o){"use strict";o.d(a,"a",(function(){return s}));o(17),o(11),o(14),o(21),o(10),o(22);var n=o(3),c=o(46);function i(t,a){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),o.push.apply(o,n)}return o}function e(t){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){Object(n.a)(t,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(o,a))}))}return t}var r={clipPath:"inset(0% 0% 0% 0%)"},d={clipPath:"inset(0% 0% 0% 100%)"},s={name:"custom",appear:!0,css:!1,beforeEnter:function(t){},enter:function(t,a){c.b.fromTo(t,{x:-10,opacity:0},{x:0,opacity:1,duration:1,onComplete:function(){c.b.set(".preload_inner",{display:"none"})}}),a()},afterEnter:function(t){},enterCancelled:function(t){},beforeLeave:function(t){c.b.fromTo(".preload_inner .capa_2",r,e(e({},d),{},{delay:.5,duration:.5})),c.b.fromTo(".preload_inner .capa_1",r,e(e({},d),{},{duration:.5,delay:.7}))},leave:function(t,a){a()},afterLeave:function(t){},leaveCancelled:function(t){}}},346:function(t,a,o){"use strict";o(11),o(39);a.a={head:function(){return{title:"MELBORP - Business Updaters | "+this.story.content.seo.title,meta:[{hid:"description",name:"description",content:this.story.content.seo.description||"Somos un business Updaters y nuestro objetivo es usar la creatividad para transformar negocios que puedan cambiar el mundo."},{hid:"abstract",name:"abstract",content:this.story.content.seo.description||"Somos un business Updaters y nuestro objetivo es usar la creatividad para transformar negocios que puedan cambiar el mundo."},{hid:"keywords",name:"keywords",content:"Agencia de Publicidad, Agencia Creativa, Publicidad, Agencia de Publicidad, Diseño de Marcas, Campañas, Logotipos, Diseño de empaques, Imagen Corporativa, redes sociales, digital, sitios web, branding, planeación de marcas, investigación de mercados, sura, argos, dislicores, ruta n, medellin, colombia, bogota, experiencias de marca"},{hid:'geo.position"',name:'geo.position"',content:"6.1554102,-75.5317308,"},{hid:'geo.placename"',name:'geo.placename"',content:"Melborp"},{hid:"og:site_name",property:"og:site_name",content:"MELBORP"},{hid:"og:url",property:"og:url",content:this.story.content.seo.og_image?this.story.content.seo.og_image:"https://melborp.art/"},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:title",property:"og:title",content:this.story.content.seo.title||"Melborp - Business Updaters"},{hid:"og:description",property:"og:description",content:this.story.content.seo.og_description||this.story.content.seo.title||"Somos un business Updaters y nuestro objetivo es usar la creatividad para transformar negocios que puedan cambiar el mundo."},{hid:"og:image",property:"og:image",content:this.story.content.seo.og_image?this.story.content.seo.og_image:"https://melborp.art/fb.png?v=1"},{hid:"og:image:url",property:"og:image:url",content:this.story.content.seo.og_image?this.story.content.seo.og_image:"https://melborp.art/fb.png?v=1"},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.story.content.seo.og_image?this.story.content.seo.og_image:"https://melborp.art/fb.png?v=1"},{hid:"og:latitude",property:"og:latitude",content:"6.2095861"},{hid:"twitter:card",name:"twitter:card",content:"summary"},{hid:"og:longitude",property:"og:longitude",content:"6.2095861"},{hid:"twitter:site",name:"twitter:site",content:"@melborpco"},{hid:"og:street_address",property:"og:street_address",content:" Envigado, Colombia Km 17 Vía Las Palmas Parque La Reserva Piso 4 "},{hid:"twitter:url",name:"twitter:url",content:"https://melborp.art/"},{hid:"og:locality",property:"og:locality",content:"Medellín"},{hid:"twitter:title",name:"twitter:title",content:"MELBORP"},{hid:"og:region",property:"og:region",content:"Antioquia"},{hid:"twitter:description",name:"twitter:description",content:this.story.content.seo.twitter_description||this.story.content.seo.description||"Somos un business Updaters y nuestro objetivo es usar la creatividad para transformar negocios que puedan cambiar el mundo."},{hid:"og:country_name",property:"og:country_name",content:"Colombia"},{hid:"og:email",property:"og:email",content:"info@melborp.co"},{hid:"og:phone_number",property:"og:phone_number",content:"(4) 3119826"},{hid:"dcterms.title",name:"dcterms.title",content:"MELBORP"},{hid:"dcterms.description",name:"dcterms.description",content:this.story.content.seo.description||"Somos un business Updaters y nuestro objetivo es usar la creatividad para transformar negocios que puedan cambiar el mundo."},{hid:"dcterms.identifier",name:"dcterms.identifier",content:"https://melborp.art/"}]}}}},354:function(t,a,o){var n=o(370);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o(38).default)("032f06ae",n,!0,{sourceMap:!1})},369:function(t,a,o){"use strict";o(354)},370:function(t,a,o){var n=o(37)((function(t){return t[1]}));n.push([t.i,'.contacto_wrap[data-v-339bd7a1]{display:block;width:100vw;padding-top:8rem}@media (min-width: 768px){.contacto_wrap[data-v-339bd7a1]{display:grid}.contacto_wrap[data-v-339bd7a1]{min-height:100vh}.contacto_wrap[data-v-339bd7a1]{grid-template-columns:repeat(12, minmax(0, 1fr))}.contacto_wrap[data-v-339bd7a1]{grid-template-rows:repeat(6, minmax(0, 1fr))}.contacto_wrap[data-v-339bd7a1]{padding-top:0px}}.contacto_wrap .contacto-img-1[data-v-339bd7a1]{z-index:0}.contacto_wrap .contacto-img-1[data-v-339bd7a1]{display:none}@media (min-width: 768px){.contacto_wrap .contacto-img-1[data-v-339bd7a1]{grid-column:span 4 / span 4}}@media (min-width: 768px){.contacto_wrap .contacto-img-1[data-v-339bd7a1]{grid-column-start:1}}@media (min-width: 768px){.contacto_wrap .contacto-img-1[data-v-339bd7a1]{grid-row:span 4 / span 4}}@media (min-width: 768px){.contacto_wrap .contacto-img-1[data-v-339bd7a1]{grid-row-start:1}}@media (min-width: 768px){.contacto_wrap .contacto-img-1[data-v-339bd7a1]{display:block}}.contacto_wrap .contacto-img-1 img[data-v-339bd7a1]{height:100%}.contacto_wrap .contacto-img-1 img[data-v-339bd7a1]{width:100%}.contacto_wrap .contacto-img-1 img[data-v-339bd7a1]{-o-object-fit:cover;object-fit:cover}.contacto_wrap .contacto-img-2[data-v-339bd7a1]{z-index:0}.contacto_wrap .contacto-img-2[data-v-339bd7a1]{grid-row:span 2 / span 2}.contacto_wrap .contacto-img-2[data-v-339bd7a1]{grid-row-start:4}.contacto_wrap .contacto-img-2[data-v-339bd7a1]{display:none}@media (min-width: 768px){.contacto_wrap .contacto-img-2[data-v-339bd7a1]{grid-column:span 3 / span 3}}@media (min-width: 768px){.contacto_wrap .contacto-img-2[data-v-339bd7a1]{grid-column-start:10}}@media (min-width: 768px){.contacto_wrap .contacto-img-2[data-v-339bd7a1]{display:block}}.contacto_wrap .contacto-img-2 img[data-v-339bd7a1]{height:100%}.contacto_wrap .contacto-img-2 img[data-v-339bd7a1]{width:100%}.contacto_wrap .contacto-img-2 img[data-v-339bd7a1]{-o-object-fit:cover;object-fit:cover}.contacto_wrap .contacto_int[data-v-339bd7a1]{z-index:10}.contacto_wrap .contacto_int[data-v-339bd7a1]{grid-row:span 3 / span 3}.contacto_wrap .contacto_int[data-v-339bd7a1]{grid-row-start:2}.contacto_wrap .contacto_int[data-v-339bd7a1]{margin-bottom:2rem}.contacto_wrap .contacto_int[data-v-339bd7a1]{display:block}.contacto_wrap .contacto_int[data-v-339bd7a1]{width:100%}@media (min-width: 768px){.contacto_wrap .contacto_int[data-v-339bd7a1]{grid-column:span 8 / span 8}}@media (min-width: 768px){.contacto_wrap .contacto_int[data-v-339bd7a1]{grid-column-start:3}}@media (min-width: 768px){.contacto_wrap .contacto_int[data-v-339bd7a1]{margin-bottom:0px}}@media (min-width: 768px){.contacto_wrap .contacto_int[data-v-339bd7a1]{align-self:center}}.contacto_wrap .contacto_int address[data-v-339bd7a1]{font-style:normal}.contacto_wrap .contacto_int address p[data-v-339bd7a1]{margin-left:1rem;margin-right:1rem}@media (min-width: 768px){.contacto_wrap .contacto_int address p[data-v-339bd7a1]{margin-left:0px;margin-right:0px}}@media (min-width: 768px){.contacto_wrap .contacto_int address p[data-v-339bd7a1]{display:grid}}@media (min-width: 768px){.contacto_wrap .contacto_int address p[data-v-339bd7a1]{grid-template-columns:repeat(12, minmax(0, 1fr))}}@media (min-width: 768px){.contacto_wrap .contacto_int address p[data-v-339bd7a1]{grid-template-rows:repeat(3, minmax(0, 1fr))}}@media (min-width: 768px){.contacto_wrap .contacto_int address p[data-v-339bd7a1]{-moz-column-gap:1rem;column-gap:1rem}}@media (min-width: 768px){.contacto_wrap .contacto_int address p[data-v-339bd7a1]{row-gap:0px}}.contacto_wrap .contacto_int address p span[data-v-339bd7a1]{line-height:1}@media (min-width: 768px){.contacto_wrap .contacto_int address p span[data-v-339bd7a1]{display:block}}.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{grid-column:span 1 / span 1}.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{grid-row:span 1 / span 1}.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{grid-row-start:1}.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{font-size:2.25rem;line-height:2.5rem}.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{text-transform:uppercase}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{grid-column:span 8 / span 8}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{grid-column-start:3}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{font-size:3.75rem;line-height:1}}@media (min-width: 1280px){.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{font-size:4.5rem;line-height:1}}.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1],.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{font-variation-settings:"wght" 400,"wdth" 120,"ital" 0;font-variation-settings:"wght" var(--font-weight,400),"wdth" var(--font-width,120),"ital" 0}.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{grid-row:span 1 / span 1}.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{grid-row-start:2}.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{text-align:right}.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{font-size:2.25rem;line-height:2.5rem}.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{text-transform:uppercase}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{grid-column:span 8 / span 8}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{grid-column-start:1}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{font-size:3.75rem;line-height:1}}@media (min-width: 1280px){.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{font-size:4.5rem;line-height:1}}.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{font-variation-settings:"wght" 400,"wdth" 130,"ital" 0;font-variation-settings:"wght" var(--font-weight,400),"wdth" var(--font-width,130),"ital" 0}.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{grid-row:span 1 / span 1}.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{grid-row-start:2}.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{align-self:center}.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{font-size:1rem;line-height:1.5rem}.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{text-transform:uppercase}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{grid-column:span 2 / span 2}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{grid-column-start:9}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{font-size:1.125rem;line-height:1.75rem}}@media (min-width: 1280px){.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{font-size:1.25rem;line-height:1.75rem}}.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{font-variation-settings:"wght" 200,"wdth" 130,"ital" 0;font-variation-settings:"wght" var(--font-weight,200),"wdth" var(--font-width,130),"ital" 0}.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{grid-row:span 1 / span 1}.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{grid-row-start:3}.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{text-align:center}.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{font-size:2.25rem;line-height:2.5rem}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{grid-column:span 10 / span 10}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{grid-column-start:2}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{font-size:3rem;line-height:1}}@media (min-width: 1280px){.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{font-size:4.5rem;line-height:1}}.contacto_wrap .contacto[data-v-339bd7a1]{z-index:10}.contacto_wrap .contacto[data-v-339bd7a1]{margin-bottom:2rem}.contacto_wrap .contacto[data-v-339bd7a1]{display:flex}.contacto_wrap .contacto[data-v-339bd7a1]{width:100%}.contacto_wrap .contacto[data-v-339bd7a1]{flex-direction:column}.contacto_wrap .contacto[data-v-339bd7a1]{justify-content:space-between}@media (min-width: 768px){.contacto_wrap .contacto[data-v-339bd7a1]{grid-column:span 10 / span 10}}@media (min-width: 768px){.contacto_wrap .contacto[data-v-339bd7a1]{grid-column-start:1}}@media (min-width: 768px){.contacto_wrap .contacto[data-v-339bd7a1]{grid-row:span 2 / span 2}}@media (min-width: 768px){.contacto_wrap .contacto[data-v-339bd7a1]{grid-row-start:5}}@media (min-width: 768px){.contacto_wrap .contacto[data-v-339bd7a1]{margin-bottom:0px}}@media (min-width: 768px){.contacto_wrap .contacto[data-v-339bd7a1]{align-self:flex-end}}.contacto_wrap .contacto .contacto_info[data-v-339bd7a1]{margin-left:auto;margin-right:auto}.contacto_wrap .contacto .contacto_info[data-v-339bd7a1]{margin-top:auto}.contacto_wrap .contacto .contacto_info[data-v-339bd7a1]{width:100%}.contacto_wrap .contacto .contacto_info[data-v-339bd7a1]{max-width:1536px}.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{margin-left:1rem;margin-right:1rem}.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{font-size:1.25rem;line-height:1.75rem}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{margin-left:4rem;margin-right:4rem}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{display:grid}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{grid-template-columns:repeat(12, minmax(0, 1fr))}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{grid-template-rows:repeat(2, minmax(0, 1fr))}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{-moz-column-gap:1rem;column-gap:1rem}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{row-gap:0px}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{font-size:1.125rem;line-height:1.75rem}}.contacto_wrap .contacto .contacto_info .contacto_info_int a[data-v-339bd7a1]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.contacto_wrap .contacto .contacto_info .contacto_info_int a[data-v-339bd7a1]{transition-duration:300ms}.contacto_wrap .contacto .contacto_info .contacto_info_int a[data-v-339bd7a1]{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.contacto_wrap .contacto .contacto_info .contacto_info_int a[data-v-339bd7a1]:hover{--tw-text-opacity:1;color:rgba(10, 18, 31, var(--tw-text-opacity))}.contacto_wrap .contacto .contacto_info .contacto_info_int .mails[data-v-339bd7a1]{margin-bottom:2rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .mails[data-v-339bd7a1]{align-self:flex-start}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .mails[data-v-339bd7a1]{grid-column:span 2 / span 2}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .mails[data-v-339bd7a1]{grid-column-start:4}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .mails[data-v-339bd7a1]{grid-row:span 1 / span 1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .mails[data-v-339bd7a1]{grid-row-start:1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .mails[data-v-339bd7a1]{margin-bottom:0px}}.contacto_wrap .contacto .contacto_info .contacto_info_int .mails a[data-v-339bd7a1]{margin-bottom:0px}.contacto_wrap .contacto .contacto_info .contacto_info_int .mails a[data-v-339bd7a1]{display:block}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat[data-v-339bd7a1]{margin-bottom:2rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat[data-v-339bd7a1]{align-self:flex-start}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .chat[data-v-339bd7a1]{grid-column:span 2 / span 2}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .chat[data-v-339bd7a1]{grid-column-start:1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .chat[data-v-339bd7a1]{grid-row:span 1 / span 1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .chat[data-v-339bd7a1]{grid-row-start:1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .chat[data-v-339bd7a1]{margin-bottom:0px}}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{margin-bottom:0.5rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{display:block}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{border-radius:9999px}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{border-width:1px}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{padding-left:0.5rem;padding-right:0.5rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{padding-top:0.375rem;padding-bottom:0.375rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{text-align:center}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{font-size:0.875rem;line-height:1.25rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a.wap[data-v-339bd7a1]{--tw-border-opacity:1;border-color:rgba(209, 250, 229, var(--tw-border-opacity))}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a.wap[data-v-339bd7a1]{--tw-text-opacity:1;color:rgba(16, 185, 129, var(--tw-text-opacity))}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a.wap[data-v-339bd7a1]:hover{--tw-border-opacity:1;border-color:rgba(52, 211, 153, var(--tw-border-opacity))}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a.fac[data-v-339bd7a1]{--tw-border-opacity:1;border-color:rgba(219, 234, 254, var(--tw-border-opacity))}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a.fac[data-v-339bd7a1]{--tw-text-opacity:1;color:rgba(59, 130, 246, var(--tw-text-opacity))}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a.fac[data-v-339bd7a1]:hover{--tw-border-opacity:1;border-color:rgba(96, 165, 250, var(--tw-border-opacity))}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a i[data-v-339bd7a1]{font-size:0.875rem;line-height:1.25rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .tels[data-v-339bd7a1]{margin-bottom:2rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .tels[data-v-339bd7a1]{align-self:flex-start}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .tels[data-v-339bd7a1]{grid-column:span 2 / span 2}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .tels[data-v-339bd7a1]{grid-column-start:7}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .tels[data-v-339bd7a1]{grid-row:span 1 / span 1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .tels[data-v-339bd7a1]{grid-row-start:1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .tels[data-v-339bd7a1]{margin-bottom:0px}}.contacto_wrap .contacto .contacto_info .contacto_info_int .tels p[data-v-339bd7a1]{margin-bottom:0.75rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{margin-bottom:2rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{margin-top:3rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{align-self:flex-start}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{grid-column:span 2 / span 2}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{grid-column-start:10}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{grid-row:span 1 / span 1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{grid-row-start:1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{margin-bottom:0px}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{margin-top:0px}}.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{margin-top:4rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{display:flex}.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1] > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{font-weight:300}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{grid-column:span 4 / span 4}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{grid-column-start:1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{grid-row:span 1 / span 1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{grid-row-start:2}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{margin-top:0.5rem}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{align-self:flex-end}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{padding-bottom:2rem}}.contacto_wrap .contacto .contacto_info .contacto_info_int .social a[data-v-339bd7a1]{font-variation-settings:"wght" 200,"wdth" 130,"ital" 0;font-variation-settings:"wght" var(--font-weight,200),"wdth" var(--font-width,130),"ital" 0}.contacto_wrap .contacto .contacto_info .contacto_info_int .social a[data-v-339bd7a1]{display:inline-block}.contacto_wrap .contacto .contacto_info .contacto_info_int .social a[data-v-339bd7a1]{font-size:1.25rem;line-height:1.75rem}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social a[data-v-339bd7a1]{font-size:1.125rem;line-height:1.75rem}}.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{margin-top:4rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{display:flex}.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1] > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{font-size:0.875rem;line-height:1.25rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{font-weight:300}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{grid-column:span 4 / span 4}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{grid-column-start:9}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{grid-row:span 1 / span 1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{grid-row-start:2}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{margin-top:0.5rem}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{align-self:flex-end}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{justify-self:end}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{padding-bottom:2rem}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{text-align:right}}',""]),n.locals={},t.exports=n},410:function(t,a,o){"use strict";o.r(a);var n={props:{story:{type:Object,default:null}},mounted:function(){}},c=(o(369),o(9)),i=Object(c.a)(n,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"contacto_wrap"},[o("div",{staticClass:"contacto_int"},[o("address",[o("p",[o("span",{staticClass:"a1"},[t._v(t._s(t.story.content.direccion_1)+" ")]),t._v(" "),o("span",{staticClass:"a2"},[t._v(t._s(t.story.content.direccion_2)+" ")]),t._v(" "),o("span",{staticClass:"a3"},[t._v(t._s(t.story.content.direccion_3)+" ")]),t._v(" "),o("span",{staticClass:"a4"},[t._v(t._s(t.story.content.direccion_4)+" ")])])])]),t._v(" "),o("div",{staticClass:"contacto"},[o("div",{staticClass:"contacto_info"},[o("div",{staticClass:"contacto_info_int"},[o("div",{staticClass:"chat"},[o("a",{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],staticClass:"wap",attrs:{href:"https://wa.me/57"+t.story.content.whataspp,target:"_blank"}},[o("i",{staticClass:"fab fa-whatsapp"}),t._v(" Whatsapp\n          ")]),t._v(" "),o("a",{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],staticClass:"fac",attrs:{href:"http://m.me/melborpco",target:"_blank"}},[o("i",{staticClass:"fab fa-facebook-messenger"}),t._v(" Facebook\n          ")])]),t._v(" "),o("div",{staticClass:"mails"},[o("a",{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],attrs:{href:"mailto:info@melborp.co "}},[t._v("info@melborp.co\n          ")]),t._v(" "),o("a",{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],attrs:{href:"mailto:brief@melborp.co"}},[t._v("brief@melborp.co")])]),t._v(" "),o("div",{staticClass:"tels",domProps:{innerHTML:t._s(t.$storyapi.richTextResolver.render(t.story.content.tels))}}),t._v(" "),o("div",{staticClass:"hvs"},[t._m(0),t._v(" "),o("a",{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],attrs:{href:"mailto:welcome@melborp.co"}},[t._v("welcome@melborp.co")])]),t._v(" "),o("div",{staticClass:"social"},[o("a",{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],attrs:{href:"https://www.behance.net/melborp",target:"_blank"}},[o("i",{staticClass:"fab fa-behance"})]),t._v(" "),o("a",{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],attrs:{href:"https://www.instagram.com/melborp/",target:"_blank"}},[o("i",{staticClass:"fab fa-instagram"})]),t._v(" "),o("a",{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],attrs:{href:"https://www.instagram.com/melborp/",target:"_blank"}},[o("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),o("a",{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],attrs:{href:"https://www.linkedin.com/company/melborp/",target:"_blank"}},[o("i",{staticClass:"fab fa-linkedin-in"})])]),t._v(" "),o("div",{staticClass:"nit"},[t._v("MBP GROUP SAS | NIT: 900490170")])])])]),t._v(" "),o("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"contacto-img-1"},[o("img",{staticClass:"vlazy",attrs:{"data-src":t.story.content.imagenes[0].filename+"/m/","data-loading":t.story.content.imagenes[0].filename+"/m/filters:quality(10)","data-error":t.story.content.imagenes[0].filename+"/m/filters:quality(10)"}})]),t._v(" "),o("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"contacto-img-2"},[o("img",{staticClass:"vlazy",attrs:{"data-src":t.story.content.imagenes[1].filename+"/m/","data-loading":t.story.content.imagenes[1].filename+"/m/filters:quality(10)","data-error":t.story.content.imagenes[1].filename+"/m/filters:quality(10)"}})])])}),[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("p",[o("b",[t._v(" Hojas de vida")])])}],!1,null,"339bd7a1",null);a.default=i.exports},475:function(t,a,o){"use strict";o.r(a);o(17),o(11),o(14),o(21),o(10),o(22);var n=o(3),c=(o(50),o(23),o(56),o(40),o(60),o(46)),i=o(350),e=o(47),r=o(345),d=o(344),s=o(346);function p(t,a){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),o.push.apply(o,n)}return o}function _(t){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?p(Object(o),!0).forEach((function(a){Object(n.a)(t,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(o,a))}))}return t}c.a.registerPlugin(i.a);var m={mixins:[d.a,s.a],transition:_({},r.a),asyncData:function(t){var a=t.route,o=t.payload,n=t.app,c=t.error;t.store;try{if(o)return{story:o};var i="/"===a.path||""===a.path?"contacto":a.path;return n.$storyapi.get("cdn/stories/".concat(i),{version:"published"}).then((function(t){return{story:t.data.story}})).catch((function(t){t.response?c({statusCode:t.response.status,message:t.response.data}):c({statusCode:404,message:"Failed to receive content form api"})}))}catch(t){}},data:function(){return{cargado:!1}},computed:_({},Object(e.b)({section:"app/getSection",home:"app/getHome",load:"app/getLoad"})),beforeCreate:function(){null!=this.load&&this.setLoad(!1)},mounted:function(){this.setLoad(!0),this.setStyles()},methods:_(_({},Object(e.c)({setSection:"app/setSection",setPage:"app/setPage",setLoad:"app/setLoad"})),{},{setStyles:function(){var t=this;setTimeout((function(){!1===t.story.content.navdif?document.getElementById("nav_site").classList.remove("dif"):document.getElementById("nav_site").classList.add("dif"),c.a.set("#nav_site #logo_melborp",{fill:t.story.content.navegacion.color}),c.a.set("#nav_site a",{color:t.story.content.navegacion.color})}),1e3),c.a.set("body, .content_interior",{background:this.story.content.fondo.color,color:this.story.content.texto.color}),this.setPage({fondo:this.story.content.fondo.color,texto:this.story.content.texto.color,nav:this.story.content.navegacion.color})},onClassChange:function(t){t.split(" ").includes("is-inview")&&c.a.set(".body",{backgroundColor:this.story.content.fondo.color,color:this.story.content.texto.color})},initScrolltrigger:function(){var t=this,a=this.$refs.scroller.locomotive;a.on("scroll",i.a.update),i.a.scrollerProxy(a.el,{scrollTop:function(t){return arguments.length?a.scrollTo(t,0,0):a.scroll.instance.scroll.y},getBoundingClientRect:function(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}}}),a.on("call",(function(a,o,n){t.setSection(a)}))},elementAnimation:function(t){c.a.from(t,{scrollTrigger:{trigger:t,scroller:this.$refs.scroller.locomotive.el,scrub:!0,start:"top bottom",end:"bottom center"},clipPath:"inset(100% 0% 0% 0%)",ease:"none"})}})},l=o(9),w=Object(l.a)(m,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("LocomotiveScroll",{ref:"scroller",attrs:{id:"melborp-contacto","getted-options":{direction:"vertical",smartphone:{direction:"vertical"},tablet:{direction:"vertical"}}}},[o("div",{class:"content_interior vertical"+(null!=t.story?" loaded":"")},[o("div",{staticClass:"min-h-screen",attrs:{"data-scroll-section":"","data-scroll-call":"contacto"}},[o("Contacto",{attrs:{story:t.story}})],1)])])}),[],!1,null,null,null);a.default=w.exports;installComponents(w,{Contacto:o(410).default})}}]);