exports.ids = [2];
exports.modules = {

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("032f06ae", content, true, context)
};

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Contacto_vue_vue_type_style_index_0_id_339bd7a1_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Contacto_vue_vue_type_style_index_0_id_339bd7a1_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Contacto_vue_vue_type_style_index_0_id_339bd7a1_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Contacto_vue_vue_type_style_index_0_id_339bd7a1_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Contacto_vue_vue_type_style_index_0_id_339bd7a1_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contacto_wrap[data-v-339bd7a1]{display:block;width:100vw;padding-top:8rem}@media (min-width: 768px){.contacto_wrap[data-v-339bd7a1]{display:grid}.contacto_wrap[data-v-339bd7a1]{min-height:100vh}.contacto_wrap[data-v-339bd7a1]{grid-template-columns:repeat(12, minmax(0, 1fr))}.contacto_wrap[data-v-339bd7a1]{grid-template-rows:repeat(6, minmax(0, 1fr))}.contacto_wrap[data-v-339bd7a1]{padding-top:0px}}.contacto_wrap .contacto-img-1[data-v-339bd7a1]{z-index:0}.contacto_wrap .contacto-img-1[data-v-339bd7a1]{display:none}@media (min-width: 768px){.contacto_wrap .contacto-img-1[data-v-339bd7a1]{grid-column:span 4 / span 4}}@media (min-width: 768px){.contacto_wrap .contacto-img-1[data-v-339bd7a1]{grid-column-start:1}}@media (min-width: 768px){.contacto_wrap .contacto-img-1[data-v-339bd7a1]{grid-row:span 4 / span 4}}@media (min-width: 768px){.contacto_wrap .contacto-img-1[data-v-339bd7a1]{grid-row-start:1}}@media (min-width: 768px){.contacto_wrap .contacto-img-1[data-v-339bd7a1]{display:block}}.contacto_wrap .contacto-img-1 img[data-v-339bd7a1]{height:100%}.contacto_wrap .contacto-img-1 img[data-v-339bd7a1]{width:100%}.contacto_wrap .contacto-img-1 img[data-v-339bd7a1]{-o-object-fit:cover;object-fit:cover}.contacto_wrap .contacto-img-2[data-v-339bd7a1]{z-index:0}.contacto_wrap .contacto-img-2[data-v-339bd7a1]{grid-row:span 2 / span 2}.contacto_wrap .contacto-img-2[data-v-339bd7a1]{grid-row-start:4}.contacto_wrap .contacto-img-2[data-v-339bd7a1]{display:none}@media (min-width: 768px){.contacto_wrap .contacto-img-2[data-v-339bd7a1]{grid-column:span 3 / span 3}}@media (min-width: 768px){.contacto_wrap .contacto-img-2[data-v-339bd7a1]{grid-column-start:10}}@media (min-width: 768px){.contacto_wrap .contacto-img-2[data-v-339bd7a1]{display:block}}.contacto_wrap .contacto-img-2 img[data-v-339bd7a1]{height:100%}.contacto_wrap .contacto-img-2 img[data-v-339bd7a1]{width:100%}.contacto_wrap .contacto-img-2 img[data-v-339bd7a1]{-o-object-fit:cover;object-fit:cover}.contacto_wrap .contacto_int[data-v-339bd7a1]{z-index:10}.contacto_wrap .contacto_int[data-v-339bd7a1]{grid-row:span 3 / span 3}.contacto_wrap .contacto_int[data-v-339bd7a1]{grid-row-start:2}.contacto_wrap .contacto_int[data-v-339bd7a1]{margin-bottom:2rem}.contacto_wrap .contacto_int[data-v-339bd7a1]{display:block}.contacto_wrap .contacto_int[data-v-339bd7a1]{width:100%}@media (min-width: 768px){.contacto_wrap .contacto_int[data-v-339bd7a1]{grid-column:span 8 / span 8}}@media (min-width: 768px){.contacto_wrap .contacto_int[data-v-339bd7a1]{grid-column-start:3}}@media (min-width: 768px){.contacto_wrap .contacto_int[data-v-339bd7a1]{margin-bottom:0px}}@media (min-width: 768px){.contacto_wrap .contacto_int[data-v-339bd7a1]{align-self:center}}.contacto_wrap .contacto_int address[data-v-339bd7a1]{font-style:normal}.contacto_wrap .contacto_int address p[data-v-339bd7a1]{margin-left:1rem;margin-right:1rem}@media (min-width: 768px){.contacto_wrap .contacto_int address p[data-v-339bd7a1]{margin-left:0px;margin-right:0px}}@media (min-width: 768px){.contacto_wrap .contacto_int address p[data-v-339bd7a1]{display:grid}}@media (min-width: 768px){.contacto_wrap .contacto_int address p[data-v-339bd7a1]{grid-template-columns:repeat(12, minmax(0, 1fr))}}@media (min-width: 768px){.contacto_wrap .contacto_int address p[data-v-339bd7a1]{grid-template-rows:repeat(3, minmax(0, 1fr))}}@media (min-width: 768px){.contacto_wrap .contacto_int address p[data-v-339bd7a1]{-moz-column-gap:1rem;column-gap:1rem}}@media (min-width: 768px){.contacto_wrap .contacto_int address p[data-v-339bd7a1]{row-gap:0px}}.contacto_wrap .contacto_int address p span[data-v-339bd7a1]{line-height:1}@media (min-width: 768px){.contacto_wrap .contacto_int address p span[data-v-339bd7a1]{display:block}}.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{grid-column:span 1 / span 1}.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{grid-row:span 1 / span 1}.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{grid-row-start:1}.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{font-size:2.25rem;line-height:2.5rem}.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{text-transform:uppercase}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{grid-column:span 8 / span 8}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{grid-column-start:3}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{font-size:3.75rem;line-height:1}}@media (min-width: 1280px){.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1]{font-size:4.5rem;line-height:1}}.contacto_wrap .contacto_int address p span.a1[data-v-339bd7a1],.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{font-variation-settings:\"wght\" 400,\"wdth\" 120,\"ital\" 0;font-variation-settings:\"wght\" var(--font-weight,400),\"wdth\" var(--font-width,120),\"ital\" 0}.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{grid-row:span 1 / span 1}.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{grid-row-start:2}.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{text-align:right}.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{font-size:2.25rem;line-height:2.5rem}.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{text-transform:uppercase}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{grid-column:span 8 / span 8}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{grid-column-start:1}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{font-size:3.75rem;line-height:1}}@media (min-width: 1280px){.contacto_wrap .contacto_int address p span.a2[data-v-339bd7a1]{font-size:4.5rem;line-height:1}}.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{font-variation-settings:\"wght\" 400,\"wdth\" 130,\"ital\" 0;font-variation-settings:\"wght\" var(--font-weight,400),\"wdth\" var(--font-width,130),\"ital\" 0}.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{grid-row:span 1 / span 1}.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{grid-row-start:2}.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{align-self:center}.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{font-size:1rem;line-height:1.5rem}.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{text-transform:uppercase}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{grid-column:span 2 / span 2}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{grid-column-start:9}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{font-size:1.125rem;line-height:1.75rem}}@media (min-width: 1280px){.contacto_wrap .contacto_int address p span.a3[data-v-339bd7a1]{font-size:1.25rem;line-height:1.75rem}}.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{font-variation-settings:\"wght\" 200,\"wdth\" 130,\"ital\" 0;font-variation-settings:\"wght\" var(--font-weight,200),\"wdth\" var(--font-width,130),\"ital\" 0}.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{grid-row:span 1 / span 1}.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{grid-row-start:3}.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{text-align:center}.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{font-size:2.25rem;line-height:2.5rem}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{grid-column:span 10 / span 10}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{grid-column-start:2}}@media (min-width: 768px){.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{font-size:3rem;line-height:1}}@media (min-width: 1280px){.contacto_wrap .contacto_int address p span.a4[data-v-339bd7a1]{font-size:4.5rem;line-height:1}}.contacto_wrap .contacto[data-v-339bd7a1]{z-index:10}.contacto_wrap .contacto[data-v-339bd7a1]{margin-bottom:2rem}.contacto_wrap .contacto[data-v-339bd7a1]{display:flex}.contacto_wrap .contacto[data-v-339bd7a1]{width:100%}.contacto_wrap .contacto[data-v-339bd7a1]{flex-direction:column}.contacto_wrap .contacto[data-v-339bd7a1]{justify-content:space-between}@media (min-width: 768px){.contacto_wrap .contacto[data-v-339bd7a1]{grid-column:span 10 / span 10}}@media (min-width: 768px){.contacto_wrap .contacto[data-v-339bd7a1]{grid-column-start:1}}@media (min-width: 768px){.contacto_wrap .contacto[data-v-339bd7a1]{grid-row:span 2 / span 2}}@media (min-width: 768px){.contacto_wrap .contacto[data-v-339bd7a1]{grid-row-start:5}}@media (min-width: 768px){.contacto_wrap .contacto[data-v-339bd7a1]{margin-bottom:0px}}@media (min-width: 768px){.contacto_wrap .contacto[data-v-339bd7a1]{align-self:flex-end}}.contacto_wrap .contacto .contacto_info[data-v-339bd7a1]{margin-left:auto;margin-right:auto}.contacto_wrap .contacto .contacto_info[data-v-339bd7a1]{margin-top:auto}.contacto_wrap .contacto .contacto_info[data-v-339bd7a1]{width:100%}.contacto_wrap .contacto .contacto_info[data-v-339bd7a1]{max-width:1536px}.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{margin-left:1rem;margin-right:1rem}.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{font-size:1.25rem;line-height:1.75rem}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{margin-left:4rem;margin-right:4rem}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{display:grid}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{grid-template-columns:repeat(12, minmax(0, 1fr))}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{grid-template-rows:repeat(2, minmax(0, 1fr))}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{-moz-column-gap:1rem;column-gap:1rem}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{row-gap:0px}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int[data-v-339bd7a1]{font-size:1.125rem;line-height:1.75rem}}.contacto_wrap .contacto .contacto_info .contacto_info_int a[data-v-339bd7a1]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.contacto_wrap .contacto .contacto_info .contacto_info_int a[data-v-339bd7a1]{transition-duration:300ms}.contacto_wrap .contacto .contacto_info .contacto_info_int a[data-v-339bd7a1]{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.contacto_wrap .contacto .contacto_info .contacto_info_int a[data-v-339bd7a1]:hover{--tw-text-opacity:1;color:rgba(10, 18, 31, var(--tw-text-opacity))}.contacto_wrap .contacto .contacto_info .contacto_info_int .mails[data-v-339bd7a1]{margin-bottom:2rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .mails[data-v-339bd7a1]{align-self:flex-start}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .mails[data-v-339bd7a1]{grid-column:span 2 / span 2}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .mails[data-v-339bd7a1]{grid-column-start:4}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .mails[data-v-339bd7a1]{grid-row:span 1 / span 1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .mails[data-v-339bd7a1]{grid-row-start:1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .mails[data-v-339bd7a1]{margin-bottom:0px}}.contacto_wrap .contacto .contacto_info .contacto_info_int .mails a[data-v-339bd7a1]{margin-bottom:0px}.contacto_wrap .contacto .contacto_info .contacto_info_int .mails a[data-v-339bd7a1]{display:block}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat[data-v-339bd7a1]{margin-bottom:2rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat[data-v-339bd7a1]{align-self:flex-start}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .chat[data-v-339bd7a1]{grid-column:span 2 / span 2}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .chat[data-v-339bd7a1]{grid-column-start:1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .chat[data-v-339bd7a1]{grid-row:span 1 / span 1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .chat[data-v-339bd7a1]{grid-row-start:1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .chat[data-v-339bd7a1]{margin-bottom:0px}}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{margin-bottom:0.5rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{display:block}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{border-radius:9999px}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{border-width:1px}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{padding-left:0.5rem;padding-right:0.5rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{padding-top:0.375rem;padding-bottom:0.375rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{text-align:center}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{font-size:0.875rem;line-height:1.25rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a[data-v-339bd7a1]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a.wap[data-v-339bd7a1]{--tw-border-opacity:1;border-color:rgba(209, 250, 229, var(--tw-border-opacity))}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a.wap[data-v-339bd7a1]{--tw-text-opacity:1;color:rgba(16, 185, 129, var(--tw-text-opacity))}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a.wap[data-v-339bd7a1]:hover{--tw-border-opacity:1;border-color:rgba(52, 211, 153, var(--tw-border-opacity))}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a.fac[data-v-339bd7a1]{--tw-border-opacity:1;border-color:rgba(219, 234, 254, var(--tw-border-opacity))}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a.fac[data-v-339bd7a1]{--tw-text-opacity:1;color:rgba(59, 130, 246, var(--tw-text-opacity))}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a.fac[data-v-339bd7a1]:hover{--tw-border-opacity:1;border-color:rgba(96, 165, 250, var(--tw-border-opacity))}.contacto_wrap .contacto .contacto_info .contacto_info_int .chat a i[data-v-339bd7a1]{font-size:0.875rem;line-height:1.25rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .tels[data-v-339bd7a1]{margin-bottom:2rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .tels[data-v-339bd7a1]{align-self:flex-start}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .tels[data-v-339bd7a1]{grid-column:span 2 / span 2}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .tels[data-v-339bd7a1]{grid-column-start:7}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .tels[data-v-339bd7a1]{grid-row:span 1 / span 1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .tels[data-v-339bd7a1]{grid-row-start:1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .tels[data-v-339bd7a1]{margin-bottom:0px}}.contacto_wrap .contacto .contacto_info .contacto_info_int .tels p[data-v-339bd7a1]{margin-bottom:0.75rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{margin-bottom:2rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{margin-top:3rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{align-self:flex-start}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{grid-column:span 2 / span 2}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{grid-column-start:10}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{grid-row:span 1 / span 1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{grid-row-start:1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{margin-bottom:0px}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .hvs[data-v-339bd7a1]{margin-top:0px}}.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{margin-top:4rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{display:flex}.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1] > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{font-weight:300}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{grid-column:span 4 / span 4}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{grid-column-start:1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{grid-row:span 1 / span 1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{grid-row-start:2}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{margin-top:0.5rem}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{align-self:flex-end}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social[data-v-339bd7a1]{padding-bottom:2rem}}.contacto_wrap .contacto .contacto_info .contacto_info_int .social a[data-v-339bd7a1]{font-variation-settings:\"wght\" 200,\"wdth\" 130,\"ital\" 0;font-variation-settings:\"wght\" var(--font-weight,200),\"wdth\" var(--font-width,130),\"ital\" 0}.contacto_wrap .contacto .contacto_info .contacto_info_int .social a[data-v-339bd7a1]{display:inline-block}.contacto_wrap .contacto .contacto_info .contacto_info_int .social a[data-v-339bd7a1]{font-size:1.25rem;line-height:1.75rem}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .social a[data-v-339bd7a1]{font-size:1.125rem;line-height:1.75rem}}.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{margin-top:4rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{display:flex}.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1] > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{font-size:0.875rem;line-height:1.25rem}.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{font-weight:300}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{grid-column:span 4 / span 4}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{grid-column-start:9}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{grid-row:span 1 / span 1}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{grid-row-start:2}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{margin-top:0.5rem}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{align-self:flex-end}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{justify-self:end}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{padding-bottom:2rem}}@media (min-width: 768px){.contacto_wrap .contacto .contacto_info .contacto_info_int .nit[data-v-339bd7a1]{text-align:right}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/Contacto.vue?vue&type=template&id=339bd7a1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contacto_wrap"},[_vm._ssrNode("<div class=\"contacto_int\" data-v-339bd7a1><address data-v-339bd7a1><p data-v-339bd7a1><span class=\"a1\" data-v-339bd7a1>"+_vm._ssrEscape(_vm._s(_vm.story.content.direccion_1)+" ")+"</span> <span class=\"a2\" data-v-339bd7a1>"+_vm._ssrEscape(_vm._s(_vm.story.content.direccion_2)+" ")+"</span> <span class=\"a3\" data-v-339bd7a1>"+_vm._ssrEscape(_vm._s(_vm.story.content.direccion_3)+" ")+"</span> <span class=\"a4\" data-v-339bd7a1>"+_vm._ssrEscape(_vm._s(_vm.story.content.direccion_4)+" ")+"</span></p></address></div> "),_vm._ssrNode("<div class=\"contacto\" data-v-339bd7a1>","</div>",[_vm._ssrNode("<div class=\"contacto_info\" data-v-339bd7a1>","</div>",[_vm._ssrNode("<div class=\"contacto_info_int\" data-v-339bd7a1>","</div>",[_vm._ssrNode("<div class=\"chat\" data-v-339bd7a1>","</div>",[_c('a',{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],staticClass:"wap",attrs:{"href":("https://wa.me/57" + (_vm.story.content.whataspp)),"target":"_blank"}},[_vm._ssrNode("<i class=\"fab fa-whatsapp\" data-v-339bd7a1></i> Whatsapp\n          ")]),_vm._ssrNode(" "),_c('a',{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],staticClass:"fac",attrs:{"href":"http://m.me/melborpco","target":"_blank"}},[_vm._ssrNode("<i class=\"fab fa-facebook-messenger\" data-v-339bd7a1></i> Facebook\n          ")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mails\" data-v-339bd7a1>","</div>",[_c('a',{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],attrs:{"href":"mailto:info@melborp.co "}},[_vm._ssrNode("info@melborp.co\n          ")]),_vm._ssrNode(" "),_c('a',{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],attrs:{"href":"mailto:brief@melborp.co"}},[_vm._ssrNode("brief@melborp.co")])],2),_vm._ssrNode(" <div class=\"tels\" data-v-339bd7a1>"+(_vm._s(_vm.$storyapi.richTextResolver.render(_vm.story.content.tels)))+"</div> "),_vm._ssrNode("<div class=\"hvs\" data-v-339bd7a1>","</div>",[_vm._ssrNode("<p data-v-339bd7a1><b data-v-339bd7a1> Hojas de vida</b></p> "),_c('a',{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],attrs:{"href":"mailto:welcome@melborp.co"}},[_vm._ssrNode("welcome@melborp.co")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"social\" data-v-339bd7a1>","</div>",[_c('a',{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],attrs:{"href":"https://www.behance.net/melborp","target":"_blank"}},[_vm._ssrNode("<i class=\"fab fa-behance\" data-v-339bd7a1></i>")]),_vm._ssrNode(" "),_c('a',{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],attrs:{"href":"https://www.instagram.com/melborp/","target":"_blank"}},[_vm._ssrNode("<i class=\"fab fa-instagram\" data-v-339bd7a1></i>")]),_vm._ssrNode(" "),_c('a',{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],attrs:{"href":"https://www.instagram.com/melborp/","target":"_blank"}},[_vm._ssrNode("<i class=\"fab fa-facebook-f\" data-v-339bd7a1></i>")]),_vm._ssrNode(" "),_c('a',{directives:[{name:"cursor-right",rawName:"v-cursor-right"}],attrs:{"href":"https://www.linkedin.com/company/melborp/","target":"_blank"}},[_vm._ssrNode("<i class=\"fab fa-linkedin-in\" data-v-339bd7a1></i>")])],2),_vm._ssrNode(" <div class=\"nit\" data-v-339bd7a1>MBP GROUP SAS | NIT: 900490170</div>")],2)])]),_vm._ssrNode(" "),_c('div',{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:({ selector: 'img' }),expression:"{ selector: 'img' }"}],staticClass:"contacto-img-1"},[_vm._ssrNode("<img"+(_vm._ssrAttr("data-src",_vm.story.content.imagenes[0].filename + '/m/'))+(_vm._ssrAttr("data-loading",_vm.story.content.imagenes[0].filename + '/m/filters:quality(10)'))+(_vm._ssrAttr("data-error",_vm.story.content.imagenes[0].filename + '/m/filters:quality(10)'))+" class=\"vlazy\" data-v-339bd7a1>")]),_vm._ssrNode(" "),_c('div',{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:({ selector: 'img' }),expression:"{ selector: 'img' }"}],staticClass:"contacto-img-2"},[_vm._ssrNode("<img"+(_vm._ssrAttr("data-src",_vm.story.content.imagenes[1].filename + '/m/'))+(_vm._ssrAttr("data-loading",_vm.story.content.imagenes[1].filename + '/m/filters:quality(10)'))+(_vm._ssrAttr("data-error",_vm.story.content.imagenes[1].filename + '/m/filters:quality(10)'))+" class=\"vlazy\" data-v-339bd7a1>")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Contacto.vue?vue&type=template&id=339bd7a1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/Contacto.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Contactovue_type_script_lang_js_ = ({
  props: {
    story: {
      type: Object,
      default: null
    }
  },

  mounted() {
    console.log('CONTACTO', this.story.content);
  }

});
// CONCATENATED MODULE: ./components/Contacto.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Contactovue_type_script_lang_js_ = (Contactovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Contacto.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(139)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Contactovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "339bd7a1",
  "0b656a54"
  
)

/* harmony default export */ var Contacto = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contacto.js.map