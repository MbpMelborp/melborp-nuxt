exports.ids = [24];
exports.modules = {

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3ad0a7b5", content, true, context)
};

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_horizontal_scroll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_horizontal_scroll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_horizontal_scroll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_horizontal_scroll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_horizontal_scroll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(38);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(39);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"Flexa\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2-variations\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype-variations\")}@font-face{font-family:\"Flexa Mono\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2-variations\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype-variations\")}.proyecto{display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:2rem 0}.proyecto,.proyecto .proyecto_tipo{width:100%;justify-content:center;align-items:center}.proyecto .proyecto_tipo{margin:5vh 0;display:grid;grid-gap:0}.proyecto .proyecto_tipo .bg{display:none}.proyecto .proyecto_tipo .proyecto_arrow{grid-column-start:14;grid-column-end:20;grid-row-start:2;grid-row-end:8}.proyecto .proyecto_tipo .proyecto_arrow svg,.proyecto img{width:100%;-o-object-fit:contain;object-fit:contain}.proyecto img{height:auto}.proyecto .tipo_1{grid-template-columns:repeat(22,[col] 1fr);grid-template-rows:repeat(12,8.3%);grid-template-areas:\"\t.\t.\t.\t.\t.\t.\t.\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\t\";align-items:stretch}.proyecto .tipo_1 .proyecto_title{grid-column-start:2;grid-column-end:19;grid-row-start:3;grid-row-end:6;min-height:40vh}.proyecto .tipo_1 .proyecto_title .proyecto_title_int{text-align:left}.proyecto .tipo_1 .proyecto_media_1{grid-area:media_1;height:100%}.proyecto .tipo_1 .proyecto_media_2{grid-area:media_2;height:100%}.proyecto .tipo_1 .proyecto_media_3{grid-area:media_3}.proyecto .tipo_1 .proyecto_media_3 img{height:100%}.proyecto .tipo_1 .proyecto_data{grid-area:data;align-self:flex-start}.proyecto .tipo_2{grid-template-columns:repeat(22,[col] 1fr);grid-template-rows:repeat(12,8.3%);grid-template-areas:\"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t\";align-items:stretch}.proyecto .tipo_2 .proyecto_title{grid-column-start:2;grid-column-end:19;grid-row-start:3;grid-row-end:6;min-height:40vh}.proyecto .tipo_2 .proyecto_title .proyecto_title_int{text-align:left}.proyecto .tipo_2 .proyecto_media_1{grid-area:media_1;height:100%}.proyecto .tipo_2 .proyecto_media_2{grid-area:media_2;height:100%}.proyecto .tipo_2 .proyecto_media_3{grid-area:media_3}.proyecto .tipo_2 .proyecto_media_3 img{height:100%}.proyecto .tipo_2 .proyecto_data{grid-area:data;align-self:flex-start}.proyecto .tipo_3{grid-template-columns:repeat(22,[col] 1fr);grid-template-rows:repeat(10,9.2%);grid-template-areas:\"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\t.\t.\t.\t.\t.\t.\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\t.\t.\t.\t.\t.\t.\t.\t\"}.proyecto .tipo_3 .proyecto_title{grid-column-start:2;grid-column-end:19;grid-row-start:3;grid-row-end:4}.proyecto .tipo_3 .proyecto_title .proyecto_title_int{text-align:left}.proyecto .tipo_3 .proyecto_arrow{grid-column-start:2;grid-column-end:5;grid-row-start:4;grid-row-end:8}.proyecto .tipo_3 .proyecto_arrow svg{max-width:350px;-o-object-fit:contain;object-fit:contain}.proyecto .tipo_3 .proyecto_media_1{grid-area:media_1;height:100%}.proyecto .tipo_3 .proyecto_media_2{grid-area:media_2;height:100%}.proyecto .tipo_3 .proyecto_media_3{grid-area:media_3;height:100%}.proyecto .tipo_3 .proyecto_data{grid-area:data}.proyecto .tipo_4{grid-template-columns:repeat(22,[col] 1fr);grid-template-rows:repeat(10,9.2%);grid-template-areas:\"\t.\t.\t.\t.\t.\t.\t.\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\t.\t.\t.\t.\t.\t.\t.\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\t.\t.\t.\t.\t.\t.\t\"}.proyecto .tipo_4 .proyecto_title{grid-column-start:2;grid-column-end:19;grid-row-start:3;grid-row-end:4}.proyecto .tipo_4 .proyecto_title .proyecto_title_int{text-align:left}.proyecto .tipo_4 .proyecto_arrow{grid-column-start:2;grid-column-end:5;grid-row-start:4;grid-row-end:8}.proyecto .tipo_4 .proyecto_arrow svg{max-width:350px;-o-object-fit:contain;object-fit:contain}.proyecto .tipo_4 .proyecto_media_1{grid-area:media_1;height:100%}.proyecto .tipo_4 .proyecto_media_2{grid-area:media_2;height:100%}.proyecto .tipo_4 .proyecto_media_3{grid-area:media_3;height:100%}.proyecto .tipo_4 .proyecto_data{grid-area:data}.proyecto .tipo_5{grid-template-columns:repeat(22,[col] 1fr);grid-template-rows:repeat(10,9.2%);grid-template-areas:\"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\t.\t.\t.\t.\t.\t.\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\t\"}.proyecto .tipo_5 .proyecto_title{grid-column-start:2;grid-column-end:19;grid-row-start:3;grid-row-end:4}.proyecto .tipo_5 .proyecto_title .proyecto_title_int{text-align:left}.proyecto .tipo_5 .proyecto_arrow{grid-column-start:13;grid-column-end:18;grid-row-start:2;grid-row-end:4}.proyecto .tipo_5 .proyecto_arrow svg{max-width:350px;-o-object-fit:contain;object-fit:contain}.proyecto .tipo_5 .proyecto_media_1{grid-area:media_1;height:100%}.proyecto .tipo_5 .proyecto_media_2{grid-area:media_2;height:100%}.proyecto .tipo_5 .proyecto_media_3{grid-area:media_3;height:100%}.proyecto .tipo_5 .proyecto_data{grid-area:data}.proyecto .tipo_6{grid-template-columns:repeat(22,[col] 1fr);grid-template-rows:repeat(10,9.2%);grid-template-areas:\"\t.\t.\t.\t.\t.\t.\t.\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\t\"}.proyecto .tipo_6 .proyecto_title{grid-column-start:2;grid-column-end:19;grid-row-start:3;grid-row-end:4}.proyecto .tipo_6 .proyecto_title .proyecto_title_int{text-align:left}.proyecto .tipo_6 .proyecto_arrow{grid-column-start:2;grid-column-end:5;grid-row-start:4;grid-row-end:8}.proyecto .tipo_6 .proyecto_arrow svg{max-width:350px;-o-object-fit:contain;object-fit:contain}.proyecto .tipo_6 .proyecto_media_1{grid-area:media_1;height:100%}.proyecto .tipo_6 .proyecto_media_2{grid-area:media_2;height:100%}.proyecto .tipo_6 .proyecto_media_3{grid-area:media_3;height:100%}.proyecto .tipo_6 .proyecto_data{grid-area:data}.proyecto .tipo_7{grid-template-columns:repeat(22,[col] 1fr);grid-template-rows:repeat(10,9.2%);grid-template-areas:\"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\t.\t.\t.\t.\t.\t.\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\tmedia_3\t.\t\" \"\t.\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\tmedia_1\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\tmedia_2\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\tdata\tdata\tdata\tdata\tdata\tdata\t.\t\"}.proyecto .tipo_7 .proyecto_title{grid-column-start:2;grid-column-end:19;grid-row-start:3;grid-row-end:4}.proyecto .tipo_7 .proyecto_title .proyecto_title_int{text-align:left}.proyecto .tipo_7 .proyecto_arrow{display:none;grid-column-start:13;grid-column-end:18;grid-row-start:2;grid-row-end:4}.proyecto .tipo_7 .proyecto_arrow svg{max-width:250px;-o-object-fit:contain;object-fit:contain}.proyecto .tipo_7 .proyecto_media_1{grid-area:media_1;height:100%}.proyecto .tipo_7 .proyecto_media_2{grid-area:media_2;height:100%}.proyecto .tipo_7 .proyecto_media_3{grid-area:media_3;height:100%}.proyecto .tipo_7 .proyecto_data{grid-area:data}@media(max-width:768px){.proyecto{min-height:100vh;padding:0}.proyecto .proyecto_tipo{width:100%;margin:0;grid-template-columns:repeat(12,[col] 1fr);grid-template-rows:repeat(10,10%);grid-template-areas:\"\t.\ttitle\ttitle\ttitle\ttitle\ttitle\ttitle\ttitle\ttitle\ttitle\ttitle\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t.\t\" \"\t.\tdata\tdata\tdata\tdata\tdata\tdata\tdata\tdata\tdata\tdata\t.\t\" \"\t.\tdata\tdata\tdata\tdata\tdata\tdata\tdata\tdata\tdata\tdata\t.\t\";overflow:hidden}.proyecto .proyecto_tipo .proyecto_title{grid-area:title;align-self:flex-start;z-index:3;height:auto;min-height:auto;padding-top:2em;padding-bottom:2em}.proyecto .proyecto_tipo .proyecto_data{grid-area:data;z-index:3;padding-top:2em;padding-bottom:2em}.proyecto .proyecto_tipo .proyecto_arrow,.proyecto .proyecto_tipo .proyecto_data .proyecto_body{display:none}.proyecto .proyecto_tipo.tipo_1 .proyecto_media_1,.proyecto .proyecto_tipo.tipo_3 .proyecto_media_1,.proyecto .proyecto_tipo.tipo_5 .proyecto_media_1,.proyecto .proyecto_tipo.tipo_7 .proyecto_media_1{grid-column-start:3;grid-column-end:13;grid-row-start:3;grid-row-end:7;height:auto;z-index:1}.proyecto .proyecto_tipo.tipo_1 .proyecto_media_1 img,.proyecto .proyecto_tipo.tipo_3 .proyecto_media_1 img,.proyecto .proyecto_tipo.tipo_5 .proyecto_media_1 img,.proyecto .proyecto_tipo.tipo_7 .proyecto_media_1 img{width:100%;height:100%}.proyecto .proyecto_tipo.tipo_1 .proyecto_media_2,.proyecto .proyecto_tipo.tipo_3 .proyecto_media_2,.proyecto .proyecto_tipo.tipo_5 .proyecto_media_2,.proyecto .proyecto_tipo.tipo_7 .proyecto_media_2{grid-column-start:1;grid-column-end:8;grid-row-start:6;grid-row-end:9;height:auto;z-index:1}.proyecto .proyecto_tipo.tipo_1 .proyecto_media_2 img,.proyecto .proyecto_tipo.tipo_3 .proyecto_media_2 img,.proyecto .proyecto_tipo.tipo_5 .proyecto_media_2 img,.proyecto .proyecto_tipo.tipo_7 .proyecto_media_2 img{width:100%;height:100%}.proyecto .proyecto_tipo.tipo_2 .proyecto_media_1,.proyecto .proyecto_tipo.tipo_4 .proyecto_media_1,.proyecto .proyecto_tipo.tipo_6 .proyecto_media_1{grid-column-start:1;grid-column-end:11;grid-row-start:3;grid-row-end:7;height:auto;z-index:1}.proyecto .proyecto_tipo.tipo_2 .proyecto_media_1 img,.proyecto .proyecto_tipo.tipo_4 .proyecto_media_1 img,.proyecto .proyecto_tipo.tipo_6 .proyecto_media_1 img{width:100%;height:100%}.proyecto .proyecto_tipo.tipo_2 .proyecto_media_2,.proyecto .proyecto_tipo.tipo_4 .proyecto_media_2,.proyecto .proyecto_tipo.tipo_6 .proyecto_media_2{grid-column-start:5;grid-column-end:13;grid-row-start:6;grid-row-end:9;height:auto;z-index:1}.proyecto .proyecto_tipo.tipo_2 .proyecto_media_2 img,.proyecto .proyecto_tipo.tipo_4 .proyecto_media_2 img,.proyecto .proyecto_tipo.tipo_6 .proyecto_media_2 img{width:100%;height:100%}.proyecto .proyecto_tipo .proyecto_data_content{z-index:3}.proyecto .proyecto_tipo .bg{display:block;grid-column-start:1;grid-column-end:13;grid-row-start:1;grid-row-end:11;height:100%;z-index:0}.proyecto .proyecto_tipo .proyecto_media_3{display:none}}body{font-family:\"Flexa\",sans-serif;font-stretch:100%;font-weight:200}footer{padding:12.5vw 6.25vw}footer a{font-size:5vw;color:#000}*{box-sizing:border-box}canvas{height:100%;left:0;position:absolute;top:0;transition:opacity 1s ease;width:100%}nav#nav_site{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;position:relative;z-index:3}nav#nav_site.dif{-webkit-mix-blend-mode:difference;-moz-mix-blend-mode:difference;-o-mix-blend-mode:difference;-ms-mix-blend-mode:difference;mix-blend-mode:difference}nav#nav_site.dif #logo_melborp{fill:\"#fff\";transition:fill .5s ease-in-out}nav#nav_site.dif a{color:#fff;transition:color .5s ease-in-out}nav#nav_site .nav_wrapper{position:fixed;z-index:1;display:grid;width:100vw;grid-template-columns:[l1] 5vw [m1] auto auto auto [m2] 5vw [r1];grid-template-rows:[t1] 5vh auto 1em [b1];grid-gap:0;grid-template-areas:\". . . . .\" \". nav_logo . nav_link .\" \". . . . .\"}@media(max-width:768px){nav#nav_site .nav_wrapper{grid-template-rows:[t1] 1.2em auto 1em [b1]}}nav#nav_site .nav_wrapper .logo{grid-area:nav_logo;max-width:120px;mix-blend-mode:exclusion}nav#nav_site .nav_wrapper .nav{grid-area:nav_link}nav#nav_site .nav_wrapper .nav a{font-stretch:100%;font-weight:100vh}.content_interior{position:relative;opacity:0}.content_interior.loaded{opacity:1}[data-scroll-trigger]{-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}.example.horizontal{width:500vw;height:100vh;overflow:hidden;display:flex}header{height:100vh;display:flex;align-items:center;justify-content:center;background:rgba(255,212,125,.6)}header h1{line-height:1;margin:0;color:#000;font-size:6em;height:60vh;font-stretch:60%;font-weight:200}.example-content{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-around;width:100%;height:100%}.example-big-square{width:50vw;padding-top:50vw;background-color:#000}.example-small-square{width:25vw;padding-top:25vw;background-color:#000}.example.horizontal footer,.example.horizontal header{width:100vw;height:100vh;display:flex;align-items:center}.example.horizontal footer{padding:0 12.5vw}.example-section{height:100vh}.example.horizontal .example-section{width:100vw}.example.vertical .example-section,.example.vertical footer{padding-top:50vw}.example-fade-text{padding:12.5vw 6.25vw}.example-fade-text h2{font-size:5vw}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./pages/horizontal-scroll.vue?vue&type=template&id=875dc1d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('LocomotiveScroll',{ref:"scroller",attrs:{"getted-options":{
    smooth: true,
    direction: 'horizontal',
    smartphone: {
      smooth: true,
      direction: 'horizontal',
    },
    tablet: {
      smooth: true,
      direction: 'horizontal',
    },
  }}},[_c('div',{staticClass:"example horizontal"},[_c('header',{attrs:{"data-scroll-section":""}},[_c('h1',[_vm._v("\n        Horizontal"),_c('br'),_vm._v("\n        Scroll\n      ")])]),_vm._v(" "),_c('div',{staticClass:"example-section",attrs:{"data-scroll-section":""}},[_c('div',{staticClass:"example-content"},[_c('div',{staticClass:"example-big-square",attrs:{"data-scroll":"","data-scroll-speed":"-0.5"}}),_vm._v(" "),_c('div',{staticClass:"example-small-square",attrs:{"data-scroll":"","data-scroll-speed":"2"}})])]),_vm._v(" "),_c('div',{staticClass:"example-section",attrs:{"data-scroll-section":""}},[_c('div',{staticClass:"example-content"},[_c('div',{staticClass:"example-big-square",attrs:{"data-scroll":"","data-scroll-speed":"-0.5"}}),_vm._v(" "),_c('div',{staticClass:"example-small-square",attrs:{"data-scroll":"","data-scroll-speed":"2"}})])]),_vm._v(" "),_c('div',{staticClass:"example-section",attrs:{"data-scroll-section":""}},[_c('div',{staticClass:"example-content"},[_c('div',{staticClass:"example-big-square",attrs:{"data-scroll":"","data-scroll-speed":"-0.5"}}),_vm._v(" "),_c('div',{staticClass:"example-small-square",attrs:{"data-scroll":"","data-scroll-speed":"2"}})])]),_vm._v(" "),_c('footer',{attrs:{"data-scroll-section":""}},[_c('nuxt-link',{attrs:{"to":"/scroll-trigger/"}},[_vm._v(" Go to Gsap Scroll Trigger ")])],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/horizontal-scroll.vue?vue&type=template&id=875dc1d2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./pages/horizontal-scroll.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var horizontal_scrollvue_type_script_lang_js_ = ({
  mounted() {}

});
// CONCATENATED MODULE: ./pages/horizontal-scroll.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_horizontal_scrollvue_type_script_lang_js_ = (horizontal_scrollvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/horizontal-scroll.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(172)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_horizontal_scrollvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1f86da97"
  
)

/* harmony default export */ var horizontal_scroll = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=horizontal-scroll.js.map