exports.ids = [6];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("20b23da6", content, true, context)
};

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/HomeBkgMarquee.vue?vue&type=template&id=626b1e4a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"marquee"},[_vm._ssrNode("<div class=\"text_home\" data-v-626b1e4a><div class=\"text_home_int\" data-v-626b1e4a><span class=\"anim\" data-v-626b1e4a>Somos</span> <h2 class=\"anim bu\" data-v-626b1e4a>Business Updaters</h2> <span class=\"anim\" data-v-626b1e4a>\n        y nuestro objetivo es usar la creatividad para transformar negocios\n        que puedan cambiar el mundo.\n      </span></div></div> <div class=\"marquee_top\" data-v-626b1e4a></div> "),_vm._ssrNode("<div class=\"marquee_int\" data-v-626b1e4a>","</div>",[_c('vue-marquee',{attrs:{"show-progress":false,"duration":_vm.story.content.proyectos.length * 8000}},_vm._l((!_vm.$isMobile()
          ? _vm.proyectos
          : _vm.story.content.proyectos),function(proyecto,index){return _c('vue-marquee-slide',{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:({ selector: 'img', observer: false }),expression:"{ selector: 'img', observer: false }"}],key:index},[_c('img',{staticClass:"gallery",attrs:{"data-src":proyecto.content.home[0].media1.filename + '/m/0x400',"data-loading":proyecto.content.home[0].media1.filename +
            '/m/filters:quality(10)',"data-error":proyecto.content.home[0].media1.filename +
            '/m/filters:quality(10)'}})])}),1)],1),_vm._ssrNode(" "),(!_vm.$isMobile())?_vm._ssrNode("<div class=\"marquee_int2\" data-v-626b1e4a>","</div>",[(!_vm.$isMobile())?_c('vue-marquee',{attrs:{"show-progress":false,"direction":"right","duration":_vm.story.content.proyectos.length * 8000}},_vm._l((_vm.proyectos2),function(proyecto,index2){return _c('vue-marquee-slide',{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:({ selector: 'img', observer: false }),expression:"{ selector: 'img', observer: false }"}],key:index2},[_c('img',{staticClass:"gallery",attrs:{"data-src":proyecto.content.home[0].media1.filename + '/m/0x400',"data-loading":proyecto.content.home[0].media1.filename +
            '/m/filters:quality(10)',"data-error":proyecto.content.home[0].media1.filename +
            '/m/filters:quality(10)'}})])}),1):_vm._e()],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"scroll\" data-v-626b1e4a>","</div>",[_c('a',{directives:[{name:"cursor-down",rawName:"v-cursor-down"}],attrs:{"href":"#"},on:{"click":_vm.toScrollNav}},[_vm._ssrNode("<svg viewBox=\"0 0 23 60\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" data-v-626b1e4a><g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" data-v-626b1e4a><g transform=\"translate(-10.000000, -5.000000)\" fill=\"#FFFFFF\" data-v-626b1e4a><path d=\"M22,5 L21.9995924,62.792 L32.3033009,52.4895924 L33.0104076,53.1966991 L21.6966991,64.5104076 L21.4995924,64.313 L21.3033009,64.5104076 L9.98959236,53.1966991 L10.6966991,52.4895924 L20.9995924,62.793 L21,5 L22,5 Z\" data-v-626b1e4a></path></g></g></svg>")])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HomeBkgMarquee.vue?vue&type=template&id=626b1e4a&scoped=true&

// EXTERNAL MODULE: ./node_modules/gsap/dist/gsap.js
var gsap = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/HomeBkgMarquee.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const chunk = function (arr) {
  const half = Math.floor(arr.length / 2);
  return arr.slice(0, half);
};

const chunk2 = function (arr) {
  const half = Math.floor(arr.length / 2);
  return arr.slice(half, arr.length);
};

/* harmony default export */ var HomeBkgMarqueevue_type_script_lang_js_ = ({
  props: {
    story: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      proyectos: chunk(this.story.content.proyectos),
      proyectos2: chunk2(this.story.content.proyectos),
      transY1: [-4, 8],
      transY2: [-8, 4],
      scale: [0.6, 1.1]
    };
  },

  mounted() {
    this.$Lazyload.$on('loading', ({
      bindType,
      el,
      naturalHeight,
      naturalWidth,
      $parent,
      src,
      loading,
      error
    }, formCache) => {
      if (el.classList.contains('gallery')) {
        gsap["gsap"].set(el, {
          clipPath: 'inset(0% 0% 100% 0%)',
          autoAlpha: 0
        });
      }
    });
    this.$Lazyload.$on('loaded', ({
      bindType,
      el,
      naturalHeight,
      naturalWidth,
      $parent,
      src,
      loading,
      error
    }, formCache) => {
      if (window) {
        if (el.classList.contains('gallery')) {
          gsap["gsap"].to(el, {
            clipPath: 'inset(0% 0% 0% 0%)',
            autoAlpha: 1,
            duration: 0.5,
            ease: gsap["Power2"].easeInOut,
            onStart: () => {
              window.dispatchEvent(new Event('resize'));
            }
          });
        }
      }
    });
    gsap["gsap"].set('.marquee_int img', {
      y: () => {
        const sc = (Math.random() * (this.transY1[1] - this.transY1[0]) + this.transY1[0]).toFixed(4);
        return sc;
      },
      scale: () => {
        const sc = (Math.random() * (this.scale[1] - this.scale[0]) + this.scale[0]).toFixed(4);
        return sc;
      }
    });
    gsap["gsap"].set('.marquee_int2 img', {
      y: () => {
        const sc = (Math.random() * (this.transY2[1] - this.transY2[0]) + this.transY2[0]).toFixed(4);
        return sc;
      },
      scale: () => {
        const sc = (Math.random() * (this.scale[1] - this.scale[0]) + this.scale[0]).toFixed(4);
        return sc;
      }
    });
    gsap["gsap"].set('.text_home_int .anim', {
      clipPath: 'inset(0% 0% 100% 0%)',
      y: '5vh'
    });
    gsap["gsap"].set('.marquee_int2, .marquee_int', {
      y: '-5vh',
      autoAlpha: 0
    });
    gsap["gsap"].to('.text_home_int .anim', {
      clipPath: 'inset(0% 0% 0% 0%)',
      delay: 3,
      duration: 0.8,
      stagger: 0.2,
      y: 0,
      ease: gsap["Power2"].easeInOut
    });
    gsap["gsap"].to('.bu', {
      '--font-weight': 500,
      duration: 0.8,
      delay: 3.2,
      ease: gsap["Power2"].easeInOut
    });
    gsap["gsap"].to('.marquee_int2, .marquee_int', {
      duration: 0.4,
      stagger: 0.2,
      y: 0,
      autoAlpha: 1,
      delay: 2,
      ease: gsap["Power2"].easeInOut
    }); // this.$store.subscribe((mutation, state) => {
    //   if (
    //     mutation.type === 'app/setPreload' ||
    //     mutation.type === 'app/setSection'
    //   ) {
    //   }
    // })
  },

  methods: {
    toScrollNav(event) {
      this.$emit('to-scroll-nav', event);
    },

    loaded(e) {
      if (window) {
        if (!e.target.classList.contains('isLoaded') && !e.target.classList.contains('isLoading')) {
          gsap["gsap"].set(e.target, {
            autoAlpha: 0
          });
        } else {
          gsap["gsap"].to(e.target, {
            autoAlpha: 1,
            duration: 0.5,
            ease: gsap["Power2"].easeInOut,
            onComplete: () => {
              window.dispatchEvent(new Event('resize'));
            }
          });
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./components/HomeBkgMarquee.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomeBkgMarqueevue_type_script_lang_js_ = (HomeBkgMarqueevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HomeBkgMarquee.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(127)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomeBkgMarqueevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "626b1e4a",
  "376b9188"
  
)

/* harmony default export */ var HomeBkgMarquee = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkgMarquee_vue_vue_type_style_index_0_id_626b1e4a_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkgMarquee_vue_vue_type_style_index_0_id_626b1e4a_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkgMarquee_vue_vue_type_style_index_0_id_626b1e4a_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkgMarquee_vue_vue_type_style_index_0_id_626b1e4a_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkgMarquee_vue_vue_type_style_index_0_id_626b1e4a_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".marquee[data-v-626b1e4a]{display:grid;grid-gap:0;grid-template-columns:[l1] auto [r1];grid-template-rows:[t1] auto 45vh 2vh 45vh auto [b1];grid-template-areas:\".\" \"marquee\" \".\" \"marquee2\" \"scroll\";height:100vh;width:100vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden}@media (max-width:768px){.marquee[data-v-626b1e4a]{grid-template-columns:[l1] auto [r1];grid-template-rows:[t1] auto 45vh 25vh [b1];grid-template-areas:\".\" \"marquee\" \"scroll\"}}.marquee .text_home[data-v-626b1e4a]{grid-column-start:l1;grid-column-end:r1;grid-row-start:t1;grid-row-end:b1;background-color:rgba(0,0,0,.5)}.marquee .text_home[data-v-626b1e4a]{z-index:30}.marquee .text_home[data-v-626b1e4a]{display:flex}.marquee .text_home[data-v-626b1e4a]{align-items:center}.marquee .text_home[data-v-626b1e4a]{justify-content:center}.marquee .text_home .text_home_int[data-v-626b1e4a]{margin-left:auto;margin-right:auto}.marquee .text_home .text_home_int[data-v-626b1e4a]{width:100%}.marquee .text_home .text_home_int[data-v-626b1e4a]{text-align:center}.marquee .text_home .text_home_int[data-v-626b1e4a]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}@media (min-width: 768px){.marquee .text_home .text_home_int[data-v-626b1e4a]{max-width:1536px}}.marquee .text_home .text_home_int h2[data-v-626b1e4a]{font-variation-settings:\"wght\" 200,\"wdth\" 180,\"ital\" 0;font-variation-settings:\"wght\" var(--font-weight,200),\"wdth\" var(--font-width,180),\"ital\" 0}.marquee .text_home .text_home_int h2[data-v-626b1e4a]{margin-top:0.25rem;margin-bottom:0.25rem}.marquee .text_home .text_home_int h2[data-v-626b1e4a]{font-size:3rem;line-height:1}.marquee .text_home .text_home_int h2[data-v-626b1e4a]{line-height:1}@media (min-width: 768px){.marquee .text_home .text_home_int h2[data-v-626b1e4a]{font-size:8rem;line-height:1}}.marquee .text_home .text_home_int span[data-v-626b1e4a]{font-variation-settings:\"wght\" 150,\"wdth\" 80,\"ital\" 0;font-variation-settings:\"wght\" var(--font-weight,150),\"wdth\" var(--font-width,80),\"ital\" 0}.marquee .text_home .text_home_int span[data-v-626b1e4a]{margin-left:auto;margin-right:auto}.marquee .text_home .text_home_int span[data-v-626b1e4a]{display:block}.marquee .text_home .text_home_int span[data-v-626b1e4a]{width:100%}.marquee .text_home .text_home_int span[data-v-626b1e4a]{max-width:24rem}.marquee .text_home .text_home_int span[data-v-626b1e4a]{font-size:1.25rem;line-height:1.75rem}@media (min-width: 768px){.marquee .text_home .text_home_int span[data-v-626b1e4a]{max-width:56rem}}@media (min-width: 768px){.marquee .text_home .text_home_int span[data-v-626b1e4a]{font-size:1.5rem;line-height:2rem}}.marquee .marquee_top[data-v-626b1e4a]{grid-column-start:l1;grid-column-end:r1;grid-row-start:t1;grid-row-end:b1;background-color:rgba(0,0,0,.5)}.marquee .marquee_top[data-v-626b1e4a]{z-index:20}.marquee .marquee_int[data-v-626b1e4a]{grid-area:marquee}.marquee .marquee_int[data-v-626b1e4a]{z-index:10}.marquee .marquee_int .marquee-slide[data-v-626b1e4a]{padding-left:1.5rem;padding-right:1.5rem}.marquee .marquee_int2[data-v-626b1e4a]{grid-area:marquee2}.marquee .marquee_int2[data-v-626b1e4a]{z-index:10}.marquee .marquee_int2[data-v-626b1e4a]{display:none}@media (min-width: 768px){.marquee .marquee_int2[data-v-626b1e4a]{display:block}}.marquee .marquee_int2 .marquee-slide[data-v-626b1e4a]{padding-left:1.5rem;padding-right:1.5rem}.marquee img[data-v-626b1e4a]{width:37.8vh;height:42vh;filter:blur(4px)}.marquee img[data-v-626b1e4a]{margin-left:2rem;margin-right:2rem}.marquee img[data-v-626b1e4a]{display:block}.marquee img[data-v-626b1e4a]{-o-object-fit:cover;object-fit:cover}.marquee .scroll[data-v-626b1e4a]{grid-area:scroll}.marquee .scroll[data-v-626b1e4a]{z-index:30}.marquee .scroll[data-v-626b1e4a]{display:flex}.marquee .scroll[data-v-626b1e4a]{align-items:center}.marquee .scroll[data-v-626b1e4a]{justify-content:center}.marquee .scroll[data-v-626b1e4a]{align-self:flex-end}.marquee .scroll[data-v-626b1e4a]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.marquee .scroll svg[data-v-626b1e4a]{width:1.5rem}@-webkit-keyframes bounce-data-v-626b1e4a{0%, 100%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);animation-timing-function:cubic-bezier(0,0,0.2,1)}}@keyframes bounce-data-v-626b1e4a{0%, 100%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);animation-timing-function:cubic-bezier(0,0,0.2,1)}}.marquee .scroll svg[data-v-626b1e4a]{-webkit-animation:bounce-data-v-626b1e4a 1s infinite;animation:bounce-data-v-626b1e4a 1s infinite}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=home-bkg-marquee.js.map