exports.ids = [17];
exports.modules = {

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("120c4426", content, true, context)
};

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Media_full_vue_vue_type_style_index_0_id_3b0bbaab_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Media_full_vue_vue_type_style_index_0_id_3b0bbaab_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Media_full_vue_vue_type_style_index_0_id_3b0bbaab_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Media_full_vue_vue_type_style_index_0_id_3b0bbaab_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Media_full_vue_vue_type_style_index_0_id_3b0bbaab_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".media_full[data-v-3b0bbaab]{display:flex;width:100%;flex-direction:column;align-items:center}@media (min-width: 768px){.media_full[data-v-3b0bbaab]{flex-direction:row}}.media_full .img-wrapper[data-v-3b0bbaab]{margin-bottom:2rem}.media_full .img-wrapper[data-v-3b0bbaab]{padding-left:0px;padding-right:0px}@media (min-width: 768px){.media_full .img-wrapper[data-v-3b0bbaab]{padding-left:2rem;padding-right:2rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/proyectos/Media_full.vue?vue&type=template&id=3b0bbaab&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:({ selector: 'img' }),expression:"{ selector: 'img' }"}],staticClass:"media_full"},[_vm._ssrNode("<img"+(_vm._ssrAttr("data-src",_vm.media.imagen.filename + '/m/'))+(_vm._ssrAttr("data-loading",_vm.media.imagen.filename + '/m/filters:quality(10)'))+(_vm._ssrAttr("data-error",_vm.media.imagen.filename + '/m/filters:quality(10)'))+" alt=\"Melborp\" class=\"vlazy media-full\" data-v-3b0bbaab>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/proyectos/Media_full.vue?vue&type=template&id=3b0bbaab&scoped=true&

// EXTERNAL MODULE: ./node_modules/gsap/dist/gsap.js
var gsap = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/proyectos/Media_full.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Media_fullvue_type_script_lang_js_ = ({
  props: {
    media: {
      type: Object,
      default: null
    }
  },

  data() {
    return {};
  },

  mounted() {
    if (window) {
      window.dispatchEvent(new Event('resize'));
    }

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
        if (el.classList.contains('media-full')) {
          gsap["gsap"].to(el, {
            // clipPath: 'inset(0% 0% 0% 0%)',
            // webkitClipPath: 'inset(0% 0% 0% 0%)',
            scaleY: 1,
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
  },

  methods: {
    loaded() {
      if (window) {
        window.dispatchEvent(new Event('resize'));
      }
    }

  }
});
// CONCATENATED MODULE: ./components/proyectos/Media_full.vue?vue&type=script&lang=js&
 /* harmony default export */ var proyectos_Media_fullvue_type_script_lang_js_ = (Media_fullvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/proyectos/Media_full.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(122)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  proyectos_Media_fullvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3b0bbaab",
  "880fd1a0"
  
)

/* harmony default export */ var Media_full = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=proyectos-media-full.js.map