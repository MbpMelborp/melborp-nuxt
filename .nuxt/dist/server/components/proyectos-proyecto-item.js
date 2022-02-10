exports.ids = [20];
exports.modules = {

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("24dab865", content, true, context)
};

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_ProyectoItem_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_ProyectoItem_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_ProyectoItem_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_ProyectoItem_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_ProyectoItem_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".proyect-wrap .item-project{margin-left:auto;margin-right:auto}.proyect-wrap .item-project{width:100%}.proyect-wrap .item-project{max-width:1536px}.proyect-wrap .item-project{overflow:hidden}.proyect-wrap .item-project{padding-top:2rem}.proyect-wrap .item-project{padding-bottom:2rem}@media (min-width: 768px){.proyect-wrap .item-project{padding-bottom:8rem}}@media (min-width: 1536px){.proyect-wrap .item-project{margin-bottom:3rem}}.proyect-wrap .item-project hr{margin-left:1rem;margin-right:1rem}.proyect-wrap .item-project hr{margin-bottom:2rem}@media (min-width: 768px){.proyect-wrap .item-project hr{margin-left:3.5rem;margin-right:3.5rem}}.proyect-wrap .item-project-wrap{margin-left:2rem;margin-right:2rem}@media (min-width: 768px){.proyect-wrap .item-project-wrap{margin-left:5rem;margin-right:5rem}}.proyect-wrap .item-project-wrap .item-project-title{font-variation-settings:\"wght\" 400,\"wdth\" 80,\"ital\" 0;font-variation-settings:\"wght\" var(--font-weight,400),\"wdth\" var(--font-width,80),\"ital\" 0}.proyect-wrap .item-project-wrap .item-project-title{margin-bottom:2rem}.proyect-wrap .item-project-wrap .item-project-title{font-size:0.875rem;line-height:1.25rem}.proyect-wrap .item-project-wrap p{margin-bottom:1rem}.proyect-wrap .item-project-wrap-fl{display:flex}.proyect-wrap .item-project-wrap-fl{flex-direction:column-reverse}.proyect-wrap .item-project-wrap-fl{align-items:center}.proyect-wrap .item-project-wrap-fl{justify-content:space-between}.proyect-wrap .item-project-wrap-fl{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.proyect-wrap .item-project-wrap-fl{transition-duration:1000ms}.proyect-wrap .item-project-wrap-fl{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl{flex-direction:row}}.proyect-wrap .item-project-wrap-fl-title{width:100%}.proyect-wrap .item-project-wrap-fl-title{font-size:0.875rem;line-height:1.25rem}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-title{width:33.333333%}}.proyect-wrap .item-project-wrap-fl-title p{font-size:1rem;line-height:1.5rem}.proyect-wrap .item-project-wrap-fl-title h4{font-variation-settings:\"wght\" 600,\"wdth\" 120,\"ital\" 0;font-variation-settings:\"wght\" var(--font-weight,600),\"wdth\" var(--font-width,120),\"ital\" 0}.proyect-wrap .item-project-wrap-fl-title h4{margin-bottom:0.5rem}.proyect-wrap .item-project-wrap-fl-title h4{font-size:1.875rem;line-height:2.25rem}.proyect-wrap .item-project-wrap-fl-title h4{text-transform:uppercase}.proyect-wrap .item-project-wrap-fl-title h3{margin-bottom:1.5rem}.proyect-wrap .item-project-wrap-fl-title h3{font-size:1.5rem;line-height:2rem}.proyect-wrap .item-project-wrap-fl-title-intro .tipo{font-variation-settings:\"wght\" 500,\"wdth\" 130,\"ital\" 0;font-variation-settings:\"wght\" var(--font-weight,500),\"wdth\" var(--font-width,130),\"ital\" 0}.proyect-wrap .item-project-wrap-fl-title-intro .tipo{margin-bottom:1rem}.proyect-wrap .item-project-wrap-fl-title-intro .tipo{opacity:0.5}.proyect-wrap .item-project-wrap-fl-title .pmel{margin-bottom:1rem}.proyect-wrap .item-project-wrap-fl-title .pmel h5{font-variation-settings:\"wght\" 600,\"wdth\" 120,\"ital\" 0;font-variation-settings:\"wght\" var(--font-weight,600),\"wdth\" var(--font-width,120),\"ital\" 0}.proyect-wrap .item-project-wrap-fl-title .pmel h5{margin-bottom:0.5rem}.proyect-wrap .item-project-wrap-fl-title .pmel h5{font-size:1.25rem;line-height:1.75rem}.proyect-wrap .item-project-wrap-fl-title .pmel h5{text-transform:uppercase}.proyect-wrap .item-project-wrap-fl-title .pmel.nproblem p{text-decoration:line-through}.proyect-wrap .item-project-wrap-fl-content{margin-bottom:2rem}.proyect-wrap .item-project-wrap-fl-content{margin-top:4rem}.proyect-wrap .item-project-wrap-fl-content{width:100%}.proyect-wrap .item-project-wrap-fl-content{font-size:0.875rem;line-height:1.25rem}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content{margin-bottom:0px}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content{margin-top:0px}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content{display:grid}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content{width:58.333333%}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content{grid-template-columns:repeat(12, minmax(0, 1fr))}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content{grid-template-rows:repeat(6, minmax(0, 1fr))}}.proyect-wrap .item-project-wrap-fl-content .img_1{display:block}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content .img_1{grid-column:span 7 / span 7}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content .img_1{grid-column-start:1}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content .img_1{grid-row:span 5 / span 5}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content .img_1{grid-row-start:1}}.proyect-wrap .item-project-wrap-fl-content .img_1,.proyect-wrap .item-project-wrap-fl-content .img_2{transition:all .5s ease-in-out}.proyect-wrap .item-project-wrap-fl-content .img_2{display:none}.proyect-wrap .item-project-wrap-fl-content .img_2{transition-delay:75ms}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content .img_2{grid-column:span 6 / span 6}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content .img_2{grid-column-start:7}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content .img_2{grid-row:span 4 / span 4}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content .img_2{grid-row-start:3}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content .img_2{display:block}}.proyect-wrap .item-project-wrap-fl-content .img_3{transition:all .5s ease-in-out}.proyect-wrap .item-project-wrap-fl-content .img_3{display:none}.proyect-wrap .item-project-wrap-fl-content .img_3{transition-delay:100ms}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content .img_3{grid-column:span 4 / span 4}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content .img_3{grid-column-start:2}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content .img_3{grid-row:span 3 / span 3}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content .img_3{grid-row-start:4}}@media (min-width: 768px){.proyect-wrap .item-project-wrap-fl-content .img_3{display:block}}.proyect-wrap .item-project-wrap-fl-content img{width:100%}.proyect-wrap .item-project-wrap-fl-content img{-o-object-fit:cover;object-fit:cover}@media (min-width:768px){.proyect-wrap .item-project-wrap-fl:hover .img_1{transform:scale(.8)!important}.proyect-wrap .item-project-wrap-fl:hover .img_2{transform:scale(.9)!important}.proyect-wrap .item-project-wrap-fl:hover .img_3{transform:scale(1.1)!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/proyectos/ProyectoItem.vue?vue&type=template&id=5499cb1e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"proyect-wrap"},[_vm._ssrNode("<div class=\"item-project\">","</div>",[_vm._ssrNode("<div class=\"item-project-wrap\">","</div>",[_c('nuxt-link',{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],staticClass:"item-project-wrap-fl",attrs:{"to":_vm.proyecto.full_slug}},[_c('div',{staticClass:"item-project-wrap-fl-title"},[_c('h4',[_vm._v("\n            "+_vm._s(_vm.proyecto.content.cliente)+",\n            "+_vm._s(_vm.proyecto.content.nombre)+"\n          ")]),_vm._v(" "),_c('h3',[_vm._v("\n            "+_vm._s(_vm.proyecto.content.titular)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"item-project-wrap-fl-title-intro"},[_c('div',{staticClass:"tipo"},[_vm._v("\n              "+_vm._s(_vm.proyecto.content.tipo)+"\n            ")]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(
                _vm.$storyapi.richTextResolver.render(_vm.proyecto.content.intro)
              )}}),_vm._v(" "),_c('div',{staticClass:"pmel nproblem"},[_c('h5',[_vm._v("Problem")]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(
                  _vm.$storyapi.richTextResolver.render(_vm.proyecto.content.problem)
                )}})]),_vm._v(" "),_c('div',{staticClass:"pmel nmelborp"},[_c('h5',[_vm._v("Melborp")]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(
                  _vm.$storyapi.richTextResolver.render(_vm.proyecto.content.melborp)
                )}})])])]),_vm._v(" "),_c('div',{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:({ selector: 'img' }),expression:"{ selector: 'img' }"}],staticClass:"item-project-wrap-fl-content"},[_c('img',{staticClass:"img_1 vlazy",attrs:{"data-src":_vm.proyecto.content.home[0].media1.filename + '/m/',"data-loading":_vm.proyecto.content.home[0].media1.filename +
              '/m/filters:quality(10)',"data-error":_vm.proyecto.content.home[0].media1.filename +
              '/m/filters:quality(10)',"alt":_vm.proyecto.content.nombre}}),_vm._v(" "),_c('img',{staticClass:"img_2 vlazy",attrs:{"data-scroll":!_vm.$isMobile() ? true : false,"data-scroll-speed":!_vm.$isMobile() ? 0.5 : 0,"data-src":_vm.proyecto.content.home[0].media2.filename + '/m/',"data-loading":_vm.proyecto.content.home[0].media2.filename +
              '/m/filters:quality(10)',"data-error":_vm.proyecto.content.home[0].media2.filename +
              '/m/filters:quality(10)',"alt":_vm.proyecto.content.nombre}}),_vm._v(" "),_c('img',{staticClass:"img_3 vlazy",attrs:{"data-scroll":!_vm.$isMobile() ? true : false,"data-scroll-speed":!_vm.$isMobile() ? -0.5 : 0,"data-src":_vm.proyecto.content.home[0].media3.filename + '/m/',"data-loading":_vm.proyecto.content.home[0].media3.filename +
              '/m/filters:quality(10)',"data-error":_vm.proyecto.content.home[0].media3.filename +
              '/m/filters:quality(10)',"alt":_vm.proyecto.content.nombre}})])])],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/proyectos/ProyectoItem.vue?vue&type=template&id=5499cb1e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/proyectos/ProyectoItem.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ProyectoItemvue_type_script_lang_js_ = ({
  props: {
    proyecto: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/proyectos/ProyectoItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var proyectos_ProyectoItemvue_type_script_lang_js_ = (ProyectoItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/proyectos/ProyectoItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(143)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  proyectos_ProyectoItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d56eef44"
  
)

/* harmony default export */ var ProyectoItem = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=proyectos-proyecto-item.js.map