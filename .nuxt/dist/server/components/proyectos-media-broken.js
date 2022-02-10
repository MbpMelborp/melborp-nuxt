exports.ids = [14];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d8facbc0", content, true, context)
};

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Media_broken_vue_vue_type_style_index_0_id_45fa9d9f_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Media_broken_vue_vue_type_style_index_0_id_45fa9d9f_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Media_broken_vue_vue_type_style_index_0_id_45fa9d9f_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Media_broken_vue_vue_type_style_index_0_id_45fa9d9f_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Media_broken_vue_vue_type_style_index_0_id_45fa9d9f_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".media_broken[data-v-45fa9d9f]{display:grid;width:100%;grid-template-columns:repeat(1, minmax(0, 1fr))}@media (min-width: 768px){.media_broken[data-v-45fa9d9f]{grid-template-columns:repeat(12, minmax(0, 1fr))}.media_broken[data-v-45fa9d9f]{grid-template-rows:repeat(1, minmax(0, 1fr))}}.media_broken.pgap-1[data-v-45fa9d9f]{gap:0px}@media (min-width: 768px){.media_broken.pgap-1[data-v-45fa9d9f]{gap:0.25rem}}.media_broken.pgap-2[data-v-45fa9d9f]{gap:0px}@media (min-width: 768px){.media_broken.pgap-2[data-v-45fa9d9f]{gap:0.5rem}}.media_broken.pgap-3[data-v-45fa9d9f]{gap:0px}@media (min-width: 768px){.media_broken.pgap-3[data-v-45fa9d9f]{gap:0.75rem}}.media_broken.pgap-4[data-v-45fa9d9f]{gap:0px}@media (min-width: 768px){.media_broken.pgap-4[data-v-45fa9d9f]{gap:1rem}}.media_broken.pgap-5[data-v-45fa9d9f]{gap:0px}@media (min-width: 768px){.media_broken.pgap-5[data-v-45fa9d9f]{gap:1.25rem}}.media_broken.pgap-6[data-v-45fa9d9f]{gap:0px}@media (min-width: 768px){.media_broken.pgap-6[data-v-45fa9d9f]{gap:1.5rem}}.media_broken.pgap-7[data-v-45fa9d9f]{gap:0px}@media (min-width: 768px){.media_broken.pgap-7[data-v-45fa9d9f]{gap:1.75rem}}.media_broken.pgap-8[data-v-45fa9d9f]{gap:0px}@media (min-width: 768px){.media_broken.pgap-8[data-v-45fa9d9f]{gap:2rem}}.media_broken.pgap-9[data-v-45fa9d9f]{gap:0px}@media (min-width: 768px){.media_broken.pgap-9[data-v-45fa9d9f]{gap:2.25rem}}.media_broken.pgap-10[data-v-45fa9d9f]{gap:0px}@media (min-width: 768px){.media_broken.pgap-10[data-v-45fa9d9f]{gap:2.5rem}}.media_broken.pgap-11[data-v-45fa9d9f]{gap:0px}@media (min-width: 768px){.media_broken.pgap-11[data-v-45fa9d9f]{gap:2.75rem}}.media_broken.pgap-12[data-v-45fa9d9f]{gap:0px}@media (min-width: 768px){.media_broken.pgap-12[data-v-45fa9d9f]{gap:3rem}}.media_broken .item[data-v-45fa9d9f]{grid-row:auto}.media_broken .item[data-v-45fa9d9f]{margin-bottom:2rem}@media (min-width: 768px){.media_broken .item[data-v-45fa9d9f]{grid-row:1 / -1}}.media_broken .item.pz-0[data-v-45fa9d9f]{z-index:0}.media_broken .item.pz-10[data-v-45fa9d9f]{z-index:10}.media_broken .item.pz-20[data-v-45fa9d9f]{z-index:20}.media_broken .item.pz-30[data-v-45fa9d9f]{z-index:30}.media_broken .item.pz-40[data-v-45fa9d9f]{z-index:40}.media_broken .item.pz-50[data-v-45fa9d9f]{z-index:50}.media_broken .item.s-1[data-v-45fa9d9f]{grid-column-start:1}@media (min-width: 768px){.media_broken .item.s-1[data-v-45fa9d9f]{grid-column-start:1}}.media_broken .item.s-2[data-v-45fa9d9f]{grid-column-start:1}@media (min-width: 768px){.media_broken .item.s-2[data-v-45fa9d9f]{grid-column-start:2}}.media_broken .item.s-3[data-v-45fa9d9f]{grid-column-start:1}@media (min-width: 768px){.media_broken .item.s-3[data-v-45fa9d9f]{grid-column-start:3}}.media_broken .item.s-4[data-v-45fa9d9f]{grid-column-start:1}@media (min-width: 768px){.media_broken .item.s-4[data-v-45fa9d9f]{grid-column-start:4}}.media_broken .item.s-5[data-v-45fa9d9f]{grid-column-start:1}@media (min-width: 768px){.media_broken .item.s-5[data-v-45fa9d9f]{grid-column-start:5}}.media_broken .item.s-6[data-v-45fa9d9f]{grid-column-start:1}@media (min-width: 768px){.media_broken .item.s-6[data-v-45fa9d9f]{grid-column-start:6}}.media_broken .item.s-7[data-v-45fa9d9f]{grid-column-start:1}@media (min-width: 768px){.media_broken .item.s-7[data-v-45fa9d9f]{grid-column-start:7}}.media_broken .item.s-8[data-v-45fa9d9f]{grid-column-start:1}@media (min-width: 768px){.media_broken .item.s-8[data-v-45fa9d9f]{grid-column-start:8}}.media_broken .item.s-9[data-v-45fa9d9f]{grid-column-start:1}@media (min-width: 768px){.media_broken .item.s-9[data-v-45fa9d9f]{grid-column-start:9}}.media_broken .item.s-10[data-v-45fa9d9f]{grid-column-start:1}@media (min-width: 768px){.media_broken .item.s-10[data-v-45fa9d9f]{grid-column-start:10}}.media_broken .item.s-11[data-v-45fa9d9f]{grid-column-start:1}@media (min-width: 768px){.media_broken .item.s-11[data-v-45fa9d9f]{grid-column-start:11}}.media_broken .item.s-12[data-v-45fa9d9f]{grid-column-start:1}@media (min-width: 768px){.media_broken .item.s-12[data-v-45fa9d9f]{grid-column-start:12}}.media_broken .item.e-1[data-v-45fa9d9f]{grid-column-end:2}@media (min-width: 768px){.media_broken .item.e-1[data-v-45fa9d9f]{grid-column-end:1}}.media_broken .item.e-2[data-v-45fa9d9f]{grid-column-end:2}@media (min-width: 768px){.media_broken .item.e-2[data-v-45fa9d9f]{grid-column-end:2}}.media_broken .item.e-3[data-v-45fa9d9f]{grid-column-end:2}@media (min-width: 768px){.media_broken .item.e-3[data-v-45fa9d9f]{grid-column-end:3}}.media_broken .item.e-4[data-v-45fa9d9f]{grid-column-end:2}@media (min-width: 768px){.media_broken .item.e-4[data-v-45fa9d9f]{grid-column-end:4}}.media_broken .item.e-5[data-v-45fa9d9f]{grid-column-end:2}@media (min-width: 768px){.media_broken .item.e-5[data-v-45fa9d9f]{grid-column-end:5}}.media_broken .item.e-6[data-v-45fa9d9f]{grid-column-end:2}@media (min-width: 768px){.media_broken .item.e-6[data-v-45fa9d9f]{grid-column-end:6}}.media_broken .item.e-7[data-v-45fa9d9f]{grid-column-end:2}@media (min-width: 768px){.media_broken .item.e-7[data-v-45fa9d9f]{grid-column-end:7}}.media_broken .item.e-8[data-v-45fa9d9f]{grid-column-end:2}@media (min-width: 768px){.media_broken .item.e-8[data-v-45fa9d9f]{grid-column-end:8}}.media_broken .item.e-9[data-v-45fa9d9f]{grid-column-end:2}@media (min-width: 768px){.media_broken .item.e-9[data-v-45fa9d9f]{grid-column-end:9}}.media_broken .item.e-10[data-v-45fa9d9f]{grid-column-end:2}@media (min-width: 768px){.media_broken .item.e-10[data-v-45fa9d9f]{grid-column-end:10}}.media_broken .item.e-11[data-v-45fa9d9f]{grid-column-end:2}@media (min-width: 768px){.media_broken .item.e-11[data-v-45fa9d9f]{grid-column-end:11}}.media_broken .item.e-12[data-v-45fa9d9f]{grid-column-end:2}@media (min-width: 768px){.media_broken .item.e-12[data-v-45fa9d9f]{grid-column-end:12}}.media_broken .item.e-13[data-v-45fa9d9f]{grid-column-end:2}@media (min-width: 768px){.media_broken .item.e-13[data-v-45fa9d9f]{grid-column-end:13}}.media_broken .item.sp-1[data-v-45fa9d9f]{grid-column:span 1 / span 1}.media_broken .item.sp-2[data-v-45fa9d9f]{grid-column:span 2 / span 2}.media_broken .item.sp-3[data-v-45fa9d9f]{grid-column:span 3 / span 3}.media_broken .item.sp-4[data-v-45fa9d9f]{grid-column:span 4 / span 4}.media_broken .item.sp-5[data-v-45fa9d9f]{grid-column:span 5 / span 5}.media_broken .item.sp-6[data-v-45fa9d9f]{grid-column:span 6 / span 6}.media_broken .item.sp-7[data-v-45fa9d9f]{grid-column:span 7 / span 7}.media_broken .item.sp-8[data-v-45fa9d9f]{grid-column:span 8 / span 8}.media_broken .item.sp-9[data-v-45fa9d9f]{grid-column:span 9 / span 9}.media_broken .item.sp-10[data-v-45fa9d9f]{grid-column:span 10 / span 10}.media_broken .item.sp-11[data-v-45fa9d9f]{grid-column:span 11 / span 11}.media_broken .item.sp-12[data-v-45fa9d9f]{grid-column:span 12 / span 12}@media (min-width: 768px){.media_broken .item.pm-0[data-v-45fa9d9f]{margin-bottom:0px}}@media (min-width: 768px){.media_broken .item.pm-2[data-v-45fa9d9f]{margin-bottom:1.5rem}}@media (min-width: 768px){.media_broken .item.pm-4[data-v-45fa9d9f]{margin-bottom:2rem}}@media (min-width: 768px){.media_broken .item.pm-6[data-v-45fa9d9f]{margin-bottom:2.5rem}}@media (min-width: 768px){.media_broken .item.pm-8[data-v-45fa9d9f]{margin-bottom:3rem}}@media (min-width: 768px){.media_broken .item.pm-10[data-v-45fa9d9f]{margin-bottom:3.5rem}}@media (min-width: 768px){.media_broken .item.pm-12[data-v-45fa9d9f]{margin-bottom:4rem}}@media (min-width: 768px){.media_broken .item.pm-14[data-v-45fa9d9f]{margin-bottom:5rem}}@media (min-width: 768px){.media_broken .item.pm-16[data-v-45fa9d9f]{margin-bottom:6rem}}@media (min-width: 768px){.media_broken .item.pm-18[data-v-45fa9d9f]{margin-bottom:7rem}}@media (min-width: 768px){.media_broken .item.pm-20[data-v-45fa9d9f]{margin-bottom:8rem}}@media (min-width: 768px){.media_broken .item.pt-0[data-v-45fa9d9f]{margin-top:0px}}@media (min-width: 768px){.media_broken .item.pt-2[data-v-45fa9d9f]{margin-top:1.5rem}}@media (min-width: 768px){.media_broken .item.pt-4[data-v-45fa9d9f]{margin-top:2rem}}@media (min-width: 768px){.media_broken .item.pt-6[data-v-45fa9d9f]{margin-top:2.5rem}}@media (min-width: 768px){.media_broken .item.pt-8[data-v-45fa9d9f]{margin-top:3rem}}@media (min-width: 768px){.media_broken .item.pt-10[data-v-45fa9d9f]{margin-top:3.5rem}}@media (min-width: 768px){.media_broken .item.pt-12[data-v-45fa9d9f]{margin-top:4rem}}@media (min-width: 768px){.media_broken .item.pt-14[data-v-45fa9d9f]{margin-top:5rem}}@media (min-width: 768px){.media_broken .item.pt-16[data-v-45fa9d9f]{margin-top:6rem}}@media (min-width: 768px){.media_broken .item.pt-18[data-v-45fa9d9f]{margin-top:7rem}}@media (min-width: 768px){.media_broken .item.pt-20[data-v-45fa9d9f]{margin-top:8rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/proyectos/Media_broken.vue?vue&type=template&id=45fa9d9f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("media_broken pgap-" + (_vm.media.gap))},[_vm._l((_vm.media.broken_item),function(item,i){return [_c('div',{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:({ selector: 'img' }),expression:"{ selector: 'img' }"}],key:_vm.media._uid + '_' + i,staticClass:"item",class:item.classText,attrs:{"data-scroll":!_vm.$isMobile() ? item.parallax != 0 : null,"data-scroll-speed":!_vm.$isMobile() ? (item.parallax === 0 ? 0 : item.parallax) : null}},[_vm._ssrNode(((item.imagen.filename)?("<img"+(_vm._ssrAttr("data-src",item.imagen.filename + '/m/'))+(_vm._ssrAttr("data-loading",item.imagen.filename + '/m/filters:quality(10)'))+(_vm._ssrAttr("data-error",item.imagen.filename + '/m/filters:quality(10)'))+" alt=\"Melborp\" class=\"vlazy\" data-v-45fa9d9f>"):"<!---->")+" "+((item.descripcion != '')?("<div"+(_vm._ssrStyle(null,("font-variation-settings: 'wght' var(--font-weight, " + (item.wght) + "), 'wdth' var(--font-width, " + (item.wdth) + "), 'ital' 0;"), null))+" data-v-45fa9d9f>"+(_vm._s(_vm.$storyapi.richTextResolver.render(item.descripcion)))+"</div>"):"<!---->"))])]})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/proyectos/Media_broken.vue?vue&type=template&id=45fa9d9f&scoped=true&

// EXTERNAL MODULE: ./mixins/loader.js
var loader = __webpack_require__(89);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/proyectos/Media_broken.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Media_brokenvue_type_script_lang_js_ = ({
  mixins: [loader["a" /* default */]],
  props: {
    media: {
      type: Object,
      default: null
    }
  },

  beforeMount() {
    this.media.broken_item.forEach(item => {
      item.classes = [];

      if (item.inicio !== '') {
        item.classes.push(`s-${item.inicio}`);
      }

      if (item.fin !== '') {
        item.classes.push(`e-${item.fin}`);
      }

      if (item.ancho !== '') {
        item.classes.push(`sp-${item.ancho}`);
      }

      if (item.z_index !== '') {
        item.classes.push(`p${item.z_index}`);
      }

      if (item.ubicacion !== '') {
        item.classes.push(`${item.ubicacion}`);
      }

      if (item.size !== '') {
        item.classes.push(`${item.size}`);
      }

      if (item.abajo !== '') {
        if (!this.$isMobile()) item.classes.push(`pm-${item.abajo}`);
      }

      if (item.arriba !== '') {
        if (!this.$isMobile()) item.classes.push(`pt-${item.arriba}`);
      }

      item.classText = item.classes.join(' ');
    });
    console.log(this.media.broken_item);
  },

  mounted() {
    console.log('BROKEN', this.media);
  }

});
// CONCATENATED MODULE: ./components/proyectos/Media_broken.vue?vue&type=script&lang=js&
 /* harmony default export */ var proyectos_Media_brokenvue_type_script_lang_js_ = (Media_brokenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/proyectos/Media_broken.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(124)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  proyectos_Media_brokenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "45fa9d9f",
  "70631b36"
  
)

/* harmony default export */ var Media_broken = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  mounted() {
    if (window) {
      window.dispatchEvent(new Event('resize'));
    }

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
      if (window) {
        window.dispatchEvent(new Event('resize'));
      }

      if (el.classList.contains('vlazy')) {
        if (this.$isMobile()) {
          gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].set(el, {
            clipPath: 'inset(0% 0% 100% 0%)',
            scaleY: 1.1,
            autoAlpha: 0
          });
        } else {
          gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].set(el, {
            clipPath: 'inset(0% 0% 0% 0%)',
            scaleY: 1,
            autoAlpha: 0
          });
        }
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
        if (el.classList.contains('vlazy')) {
          if (el.classList.contains('vlazy')) {
            gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to(el, {
              clipPath: 'inset(0% 0% 0% 0%)',
              scaleY: 1,
              autoAlpha: 1,
              duration: 0.5,
              ease: gsap__WEBPACK_IMPORTED_MODULE_0__["Power2"].easeInOut,
              onStart: () => {
                window.dispatchEvent(new Event('resize'));
              }
            });
          } else {
            gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to(el, {
              clipPath: 'inset(0% 0% 0% 0%)',
              scaleY: 1,
              autoAlpha: 1,
              duration: 0.8,
              ease: gsap__WEBPACK_IMPORTED_MODULE_0__["Power2"].easeInOut,
              onStart: () => {
                window.dispatchEvent(new Event('resize'));
              }
            });
          }
        }
      }
    });
  },

  methods: {
    loaded(e) {
      if (window) {
        if (!e.target.classList.contains('isLoaded') && !e.target.classList.contains('isLoading')) {
          gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].set(e.target, {
            // clipPath: 'inset(0% 0% 100% 0%)',
            // webkitClipPath: 'inset(0% 0% 100% 0%)',
            scaleY: 1,
            autoAlpha: 0
          });
        } else {
          gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to(e.target, {
            // clipPath: 'inset(0% 0% 0% 0%)',
            // webkitClipPath: 'inset(0% 0% 0% 0%)',
            scaleY: 1,
            autoAlpha: 1,
            duration: 0.5,
            ease: gsap__WEBPACK_IMPORTED_MODULE_0__["Power2"].easeInOut,
            onStart: () => {
              window.dispatchEvent(new Event('resize'));
            }
          });
        }
      }
    },

    clipToRight(e, observer, isIntersecting, ratio) {
      if (isIntersecting) {
        console.log('👓', ' clipToRight', isIntersecting, e, observer);
        e.forEach(function (entry, i) {
          if (entry.target.loaded === false || entry.target.loaded === undefined) {
            entry.target.loaded = true;
            gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].fromTo(entry.target, {
              clipPath: 'inset(0% 100% 0% 0%)',
              y: 10
            }, {
              clipPath: 'inset(0% 0% 0% 0%)',
              y: 0,
              duration: 1,
              delay: 0.2,
              stagger: i * 0.2,
              overwrite: false,
              ease: gsap__WEBPACK_IMPORTED_MODULE_0__["Power2"].easeInOut,
              onStart: () => {},
              onComplete: () => {
                gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].killTweensOf(entry.target);
              }
            });
          }
        });
      }
    },

    clipToTop(e, observer, isIntersecting, ratio) {
      if (isIntersecting) {
        console.log('👓', ' clipToRight', isIntersecting, e, observer);
        e.forEach(function (entry, i) {
          if (entry.target.loaded === false || entry.target.loaded === undefined) {
            entry.target.loaded = true;
            gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].fromTo(entry.target, {
              clipPath: 'inset(100% 0% 0% 0%)',
              y: 10
            }, {
              clipPath: 'inset(0% 0% 0% 0%)',
              y: 0,
              duration: 1,
              delay: 0.2,
              stagger: i * 0.2,
              overwrite: false,
              ease: gsap__WEBPACK_IMPORTED_MODULE_0__["Power2"].easeInOut,
              onStart: () => {},
              onComplete: () => {
                gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].killTweensOf(entry.target);
              }
            });
          }
        });
      }
    }

  }
});

/***/ })

};;
//# sourceMappingURL=proyectos-media-broken.js.map