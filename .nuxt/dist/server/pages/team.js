exports.ids = [31,22];
exports.modules = {

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("087d374e", content, true, context)
};

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Team_broken_vue_vue_type_style_index_0_id_74a7add8_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Team_broken_vue_vue_type_style_index_0_id_74a7add8_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Team_broken_vue_vue_type_style_index_0_id_74a7add8_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Team_broken_vue_vue_type_style_index_0_id_74a7add8_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_Team_broken_vue_vue_type_style_index_0_id_74a7add8_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".media_broken[data-v-74a7add8]{margin-top:0px;margin-bottom:0px;display:grid;width:100%;grid-template-columns:repeat(1, minmax(0, 1fr));padding-left:1rem;padding-right:1rem}@media (min-width: 1024px){.media_broken[data-v-74a7add8]{margin-top:4rem;margin-bottom:4rem}.media_broken[data-v-74a7add8]{grid-template-columns:repeat(12, minmax(0, 1fr))}.media_broken[data-v-74a7add8]{grid-template-rows:repeat(1, minmax(0, 1fr))}.media_broken[data-v-74a7add8]{gap:1rem}}.media_broken.pgap-1[data-v-74a7add8]{gap:0.25rem}.media_broken.pgap-2[data-v-74a7add8]{gap:0.5rem}.media_broken.pgap-3[data-v-74a7add8]{gap:0.75rem}.media_broken.pgap-4[data-v-74a7add8]{gap:1rem}.media_broken.pgap-5[data-v-74a7add8]{gap:1.25rem}.media_broken.pgap-6[data-v-74a7add8]{gap:1.5rem}.media_broken.pgap-7[data-v-74a7add8]{gap:1.75rem}.media_broken.pgap-8[data-v-74a7add8]{gap:2rem}.media_broken.pgap-9[data-v-74a7add8]{gap:2.25rem}.media_broken.pgap-10[data-v-74a7add8]{gap:2.5rem}.media_broken.pgap-11[data-v-74a7add8]{gap:2.75rem}.media_broken.pgap-12[data-v-74a7add8]{gap:3rem}@media (min-width: 1024px){.media_broken .item[data-v-74a7add8]{grid-row:1 / -1}}@media (min-width: 1024px){.media_broken .item[data-v-74a7add8]{margin-bottom:1rem}}.media_broken .item.pz-0[data-v-74a7add8]{z-index:0}.media_broken .item.pz-10[data-v-74a7add8]{z-index:10}.media_broken .item.pz-20[data-v-74a7add8]{z-index:20}.media_broken .item.pz-30[data-v-74a7add8]{z-index:30}.media_broken .item.pz-40[data-v-74a7add8]{z-index:40}.media_broken .item.pz-50[data-v-74a7add8]{z-index:50}@media (min-width: 1024px){.media_broken .item.s-1[data-v-74a7add8]{grid-column-start:1}}@media (min-width: 1024px){.media_broken .item.s-2[data-v-74a7add8]{grid-column-start:2}}@media (min-width: 1024px){.media_broken .item.s-3[data-v-74a7add8]{grid-column-start:3}}@media (min-width: 1024px){.media_broken .item.s-4[data-v-74a7add8]{grid-column-start:4}}@media (min-width: 1024px){.media_broken .item.s-5[data-v-74a7add8]{grid-column-start:5}}@media (min-width: 1024px){.media_broken .item.s-6[data-v-74a7add8]{grid-column-start:6}}@media (min-width: 1024px){.media_broken .item.s-7[data-v-74a7add8]{grid-column-start:7}}@media (min-width: 1024px){.media_broken .item.s-8[data-v-74a7add8]{grid-column-start:8}}@media (min-width: 1024px){.media_broken .item.s-9[data-v-74a7add8]{grid-column-start:9}}@media (min-width: 1024px){.media_broken .item.s-10[data-v-74a7add8]{grid-column-start:10}}@media (min-width: 1024px){.media_broken .item.s-11[data-v-74a7add8]{grid-column-start:11}}@media (min-width: 1024px){.media_broken .item.s-12[data-v-74a7add8]{grid-column-start:12}}@media (min-width: 1024px){.media_broken .item.e-1[data-v-74a7add8]{grid-column-end:1}}@media (min-width: 1024px){.media_broken .item.e-2[data-v-74a7add8]{grid-column-end:2}}@media (min-width: 1024px){.media_broken .item.e-3[data-v-74a7add8]{grid-column-end:3}}@media (min-width: 1024px){.media_broken .item.e-4[data-v-74a7add8]{grid-column-end:4}}@media (min-width: 1024px){.media_broken .item.e-5[data-v-74a7add8]{grid-column-end:5}}@media (min-width: 1024px){.media_broken .item.e-6[data-v-74a7add8]{grid-column-end:6}}@media (min-width: 1024px){.media_broken .item.e-7[data-v-74a7add8]{grid-column-end:7}}@media (min-width: 1024px){.media_broken .item.e-8[data-v-74a7add8]{grid-column-end:8}}@media (min-width: 1024px){.media_broken .item.e-9[data-v-74a7add8]{grid-column-end:9}}@media (min-width: 1024px){.media_broken .item.e-10[data-v-74a7add8]{grid-column-end:10}}@media (min-width: 1024px){.media_broken .item.e-11[data-v-74a7add8]{grid-column-end:11}}@media (min-width: 1024px){.media_broken .item.e-12[data-v-74a7add8]{grid-column-end:12}}@media (min-width: 1024px){.media_broken .item.e-13[data-v-74a7add8]{grid-column-end:13}}@media (min-width: 1024px){.media_broken .item.sp-1[data-v-74a7add8]{grid-column:span 1 / span 1}}@media (min-width: 1024px){.media_broken .item.sp-2[data-v-74a7add8]{grid-column:span 2 / span 2}}@media (min-width: 1024px){.media_broken .item.sp-3[data-v-74a7add8]{grid-column:span 3 / span 3}}@media (min-width: 1024px){.media_broken .item.sp-4[data-v-74a7add8]{grid-column:span 4 / span 4}}@media (min-width: 1024px){.media_broken .item.sp-5[data-v-74a7add8]{grid-column:span 5 / span 5}}@media (min-width: 1024px){.media_broken .item.sp-6[data-v-74a7add8]{grid-column:span 6 / span 6}}@media (min-width: 1024px){.media_broken .item.sp-7[data-v-74a7add8]{grid-column:span 7 / span 7}}@media (min-width: 1024px){.media_broken .item.sp-8[data-v-74a7add8]{grid-column:span 8 / span 8}}@media (min-width: 1024px){.media_broken .item.sp-9[data-v-74a7add8]{grid-column:span 9 / span 9}}@media (min-width: 1024px){.media_broken .item.sp-10[data-v-74a7add8]{grid-column:span 10 / span 10}}@media (min-width: 1024px){.media_broken .item.sp-11[data-v-74a7add8]{grid-column:span 11 / span 11}}@media (min-width: 1024px){.media_broken .item.sp-12[data-v-74a7add8]{grid-column:span 12 / span 12}}@media (min-width: 1024px){.media_broken .item.pm-0[data-v-74a7add8]{margin-bottom:0px}}@media (min-width: 1024px){.media_broken .item.pm-2[data-v-74a7add8]{margin-bottom:1.5rem}}@media (min-width: 1024px){.media_broken .item.pm-4[data-v-74a7add8]{margin-bottom:2rem}}@media (min-width: 1024px){.media_broken .item.pm-6[data-v-74a7add8]{margin-bottom:2.5rem}}@media (min-width: 1024px){.media_broken .item.pm-8[data-v-74a7add8]{margin-bottom:3rem}}@media (min-width: 1024px){.media_broken .item.pm-10[data-v-74a7add8]{margin-bottom:3.5rem}}@media (min-width: 1024px){.media_broken .item.pm-12[data-v-74a7add8]{margin-bottom:4rem}}@media (min-width: 1024px){.media_broken .item.pm-14[data-v-74a7add8]{margin-bottom:5rem}}@media (min-width: 1024px){.media_broken .item.pm-16[data-v-74a7add8]{margin-bottom:6rem}}@media (min-width: 1024px){.media_broken .item.pm-18[data-v-74a7add8]{margin-bottom:7rem}}@media (min-width: 1024px){.media_broken .item.pm-20[data-v-74a7add8]{margin-bottom:8rem}}@media (min-width: 1024px){.media_broken .item.pti-0[data-v-74a7add8]{margin-top:0px}}@media (min-width: 1024px){.media_broken .item.pti-2[data-v-74a7add8]{margin-top:1.5rem}}@media (min-width: 1024px){.media_broken .item.pti-4[data-v-74a7add8]{margin-top:2rem}}@media (min-width: 1024px){.media_broken .item.pti-6[data-v-74a7add8]{margin-top:2.5rem}}@media (min-width: 1024px){.media_broken .item.pti-8[data-v-74a7add8]{margin-top:3rem}}@media (min-width: 1024px){.media_broken .item.pti-10[data-v-74a7add8]{margin-top:3.5rem}}@media (min-width: 1024px){.media_broken .item.pti-12[data-v-74a7add8]{margin-top:4rem}}@media (min-width: 1024px){.media_broken .item.pti-14[data-v-74a7add8]{margin-top:5rem}}@media (min-width: 1024px){.media_broken .item.pti-16[data-v-74a7add8]{margin-top:6rem}}@media (min-width: 1024px){.media_broken .item.pti-18[data-v-74a7add8]{margin-top:7rem}}@media (min-width: 1024px){.media_broken .item.pti-20[data-v-74a7add8]{margin-top:8rem}}.media_broken .item .item_int[data-v-74a7add8]{margin-bottom:3rem}.media_broken .item .item_int[data-v-74a7add8]{display:grid}.media_broken .item .item_int[data-v-74a7add8]{grid-template-columns:repeat(6, minmax(0, 1fr))}.media_broken .item .item_int[data-v-74a7add8]{grid-template-rows:repeat(6, minmax(0, 1fr))}.media_broken .item .item_int[data-v-74a7add8]{gap:0.5rem}@media (min-width: 1024px){.media_broken .item .item_int[data-v-74a7add8]{margin-bottom:0px}}.media_broken .item .item_int .hv[data-v-74a7add8]{font-variation-settings:\"wght\" 100,\"wdth\" 130,\"ital\" 0;font-variation-settings:\"wght\" var(--font-weight,100),\"wdth\" var(--font-width,130),\"ital\" 0}.media_broken .item .item_int .hv[data-v-74a7add8]{z-index:30}.media_broken .item .item_int .hv[data-v-74a7add8]{grid-column-start:1}.media_broken .item .item_int .hv[data-v-74a7add8]{grid-column-end:5}.media_broken .item .item_int .hv[data-v-74a7add8]{grid-row-start:1}.media_broken .item .item_int .hv[data-v-74a7add8]{grid-row-end:6}.media_broken .item .item_int .hv[data-v-74a7add8]{display:none}.media_broken .item .item_int .hv[data-v-74a7add8]{padding:2rem}.media_broken .item .item_int .hv[data-v-74a7add8]{font-size:0.875rem;line-height:1.25rem}.media_broken .item .item_int .hv[data-v-74a7add8]{line-height:1.25}.media_broken .item .item_int .foto[data-v-74a7add8]{z-index:10}.media_broken .item .item_int .foto[data-v-74a7add8]{grid-column-start:1}.media_broken .item .item_int .foto[data-v-74a7add8]{grid-column-end:7}.media_broken .item .item_int .foto[data-v-74a7add8]{grid-row-start:1}.media_broken .item .item_int .foto[data-v-74a7add8]{grid-row-end:7}.media_broken .item .item_int .foto[data-v-74a7add8]{overflow:hidden}.media_broken .item .item_int .info[data-v-74a7add8]{z-index:20}.media_broken .item .item_int .info .arrow-team[data-v-74a7add8]{margin-left:auto;margin-right:auto}.media_broken .item .item_int .info .arrow-team[data-v-74a7add8]{margin-bottom:0.5rem}.media_broken .item .item_int .info .arrow-team[data-v-74a7add8]{height:1.5rem}.media_broken .item .item_int .info .arrow-team[data-v-74a7add8]{width:1.5rem}.media_broken .item .item_int .info h3[data-v-74a7add8]{font-variation-settings:\"wght\" 400,\"wdth\" 130,\"ital\" 0;font-variation-settings:\"wght\" var(--font-weight,400),\"wdth\" var(--font-width,130),\"ital\" 0}.media_broken .item .item_int .info h3[data-v-74a7add8]{margin-bottom:0.5rem}.media_broken .item .item_int .info h3[data-v-74a7add8]{text-transform:uppercase}.media_broken .item .item_int .info h3[data-v-74a7add8],.media_broken .item .item_int .info h4[data-v-74a7add8]{line-height:1em!important}.media_broken .item .item_int .info h4[data-v-74a7add8]{font-variation-settings:\"wght\" 200,\"wdth\" 130,\"ital\" 0;font-variation-settings:\"wght\" var(--font-weight,200),\"wdth\" var(--font-width,130),\"ital\" 0}.media_broken .item.x-left .info[data-v-74a7add8]{grid-column-start:1}.media_broken .item.x-left .info[data-v-74a7add8]{grid-column-end:4}.media_broken .item.x-left .info[data-v-74a7add8]{margin-left:1rem}@media (min-width: 1024px){.media_broken .item.x-left .info[data-v-74a7add8]{margin-left:0px}}.media_broken .item.x-right .info[data-v-74a7add8]{grid-column-start:4}.media_broken .item.x-right .info[data-v-74a7add8]{grid-column-end:7}.media_broken .item.x-right .info[data-v-74a7add8]{margin-right:1rem}.media_broken .item.x-right .info[data-v-74a7add8]{text-align:right}@media (min-width: 1024px){.media_broken .item.x-right .info[data-v-74a7add8]{margin-right:0px}}.media_broken .item.x-right .info .arrow-team[data-v-74a7add8]{margin-left:auto}.media_broken .item.y-up .info[data-v-74a7add8]{grid-row-start:1}.media_broken .item.y-up .info[data-v-74a7add8]{grid-row-end:3}.media_broken .item.y-up .info[data-v-74a7add8]{align-self:flex-start}.media_broken .item.y-up .info[data-v-74a7add8]{padding-top:1rem}.media_broken .item.y-down .info[data-v-74a7add8]{grid-row-start:4}.media_broken .item.y-down .info[data-v-74a7add8]{grid-row-end:7}.media_broken .item.y-down .info[data-v-74a7add8]{align-self:flex-end}.media_broken .item.y-down .info[data-v-74a7add8]{padding-bottom:1rem}.media_broken .item.grande .info h3[data-v-74a7add8]{margin-bottom:0.5rem}@media (min-width: 1024px){.media_broken .item.grande .info h3[data-v-74a7add8]{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 1024px){.media_broken .item.grande .info h4[data-v-74a7add8]{font-size:1.125rem;line-height:1.75rem}}@media (min-width: 1024px){.media_broken .item.pequeno .info h3[data-v-74a7add8]{font-size:1.125rem;line-height:1.75rem}}@media (min-width: 1024px){.media_broken .item.pequeno .info h4[data-v-74a7add8]{font-size:0.875rem;line-height:1.25rem}}@media (min-width: 1024px){.media_broken .item.x-left.grande .info[data-v-74a7add8]{--tw-translate-x:-2.5rem;transform:var(--tw-transform)}}@media (min-width: 1024px){.media_broken .item.x-left.grande .info h4[data-v-74a7add8]{margin-left:1rem}}@media (min-width: 1024px){.media_broken .item.x-right.grande .info[data-v-74a7add8]{--tw-translate-x:2.5rem;transform:var(--tw-transform)}}@media (min-width: 1024px){.media_broken .item.x-right.grande .info h4[data-v-74a7add8]{margin-right:1rem}}.media_broken .item.x-left.pequeno .info[data-v-74a7add8]{padding-left:1rem}.media_broken .item.x-right.pequeno .info[data-v-74a7add8]{padding-right:1rem}@media (min-width: 1024px){.media_broken .item.y-up.grande .info[data-v-74a7add8]{padding-top:2.5rem}}@media (min-width: 1024px){.media_broken .item.y-down.grande .info[data-v-74a7add8]{padding-bottom:2.5rem}}@media (min-width: 1024px){.media_broken .item.y-up.pequeno .info[data-v-74a7add8]{padding-top:1rem}}@media (min-width: 1024px){.media_broken .item.y-down.pequeno .info[data-v-74a7add8]{padding-bottom:1rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(183);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("58b84398", content, true, context)
};

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/team/Team_broken.vue?vue&type=template&id=74a7add8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"media_broken"},[_vm._l((_vm.media.team),function(item,i){return [_vm._ssrNode("<div"+(_vm._ssrAttr("id",'team-' + item._uid))+(_vm._ssrAttr("data-scroll",!_vm.$isMobile() ? item.parallax != 0 : null))+(_vm._ssrAttr("data-scroll-speed",!_vm.$isMobile() ? (item.parallax === 0 ? 0 : item.parallax * 0.6) : 0))+(_vm._ssrClass("item",item.classText))+" data-v-74a7add8>","</div>",[_vm._ssrNode("<div class=\"item_int\" data-v-74a7add8>","</div>",[_vm._ssrNode("<div class=\"info anim\" data-v-74a7add8><svg viewBox=\"0 0 45 45\" class=\"arrow-team\" data-v-74a7add8><g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" data-v-74a7add8><g transform=\"translate(1.000000, 1.000000)\" stroke=\"#000\" stroke-width=\"1.46\" data-v-74a7add8><g id=\"arrw\" data-v-74a7add8><line x1=\"42.748\" y1=\"42.748\" x2=\"0\" y2=\"0\" transform=\"translate(21.374000, 21.374000) scale(-1, 1) translate(-21.374000, -21.374000) \" data-v-74a7add8></line> <polyline transform=\"translate(21.373800, 21.374200) scale(-1, 1) translate(-21.373800, -21.374200) \" points=\"42.3738 0.3742 0.3738 0.3742 0.3738 42.3742\" data-v-74a7add8></polyline></g></g></g></svg> <h3 data-v-74a7add8>"+_vm._ssrEscape(_vm._s(item.nombre))+"</h3> <h4 data-v-74a7add8>"+_vm._ssrEscape(_vm._s(item.cargo))+"</h4></div> "),_c('div',{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:({ selector: 'img' }),expression:"{ selector: 'img' }"},{name:"intersection",rawName:"v-intersection",value:(_vm.clipToTop),expression:"clipToTop"}],staticClass:"foto"},[_vm._ssrNode("<img"+(_vm._ssrAttr("data-src",item.foto.filename + '/m/'))+(_vm._ssrAttr("data-loading",item.foto.filename + '/m/filters:quality(10)'))+(_vm._ssrAttr("data-error",item.foto.filename + '/m/filters:quality(10)'))+(_vm._ssrAttr("alt",item.nombre))+" class=\"vlazy\" data-v-74a7add8>")])],2)])]})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/team/Team_broken.vue?vue&type=template&id=74a7add8&scoped=true&

// EXTERNAL MODULE: ./mixins/loader.js
var loader = __webpack_require__(89);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/team/Team_broken.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { gsap, Power2, Sine } from 'gsap'

/* harmony default export */ var Team_brokenvue_type_script_lang_js_ = ({
  mixins: [loader["a" /* default */]],
  props: {
    media: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      tl_hover: []
    };
  },

  beforeMount() {
    this.media.team.forEach(item => {
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
        item.classes.push(`pm-${item.abajo}`);
      }

      if (item.arriba !== '') {
        item.classes.push(`pti-${item.arriba}`);
      }

      if (item.alto !== '') {
        item.classes.push(`${item.alto}`);
      }

      if (item.fuente !== '') {
        item.classes.push(`${item.fuente}`);
      }

      if (item.ubicacion_texto !== '') {
        item.classes.push(`x-${item.ubicacion_texto}`);
      }

      if (item.ubicacion_texto2 !== '') {
        item.classes.push(`y-${item.ubicacion_texto2}`);
      }

      item.classText = item.classes.join(' ');
    });
  },

  mounted() {
    this.initTimelines();
  },

  methods: {
    initTimelines() {
      console.log('🗂️ TEAM -> initTimelines', this.media); // this.media.team.forEach((item, i) => {
      //   this.tl_hover[i] = gsap.timeline({
      //     paused: true,
      //     ease: Power2.easeInOut,
      //     onStart: () => {},
      //     onComplete: () => {},
      //   })
      //   const id = '#team-' + item._uid
      //   // gsap.set(id + ' .anim, ' + id + ' .info ', {
      //   //   opacity: 0,
      //   // })
      //   this.tl_hover[i].fromTo(
      //     id + ' .anim',
      //     {
      //       opacity: 0,
      //       y: 0,
      //       x: 10,
      //       scale: 1,
      //     },
      //     {
      //       opacity: 1,
      //       x: 0,
      //       y: 0,
      //       scale: 1,
      //       duration: 0.7,
      //       ease: Sine.easeInOut,
      //       stagger: {
      //         each: 0.1,
      //         from: 'center',
      //       },
      //     },
      //     '+=0'
      //   )
      //   this.tl_hover[i].fromTo(
      //     id + ' .foto img',
      //     {
      //       scale: 1,
      //       opacity: 1,
      //     },
      //     {
      //       opacity: 1,
      //       scale: 1.1,
      //       duration: 0.3,
      //       ease: Sine.easeInOut,
      //     },
      //     '-=0.6'
      //   )
      // })
    },

    hoverTeam(id, i, bool) {// if (bool) {
      //   this.tl_hover[i].play()
      // } else {
      //   this.tl_hover[i].reverse()
      // }
    }

  }
});
// CONCATENATED MODULE: ./components/team/Team_broken.vue?vue&type=script&lang=js&
 /* harmony default export */ var team_Team_brokenvue_type_script_lang_js_ = (Team_brokenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/team/Team_broken.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(141)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  team_Team_brokenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "74a7add8",
  "1a20210a"
  
)

/* harmony default export */ var Team_broken = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_team_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_team_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_team_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_team_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_team_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".team_top{margin-left:auto;margin-right:auto;width:100%;max-width:1536px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-top:11rem;line-height:1;}.team_top .team_header h2{margin-left:1rem;margin-right:1rem;}.team_top .team_header h2{font-size:2.25rem;line-height:2.5rem;}@media (min-width: 1024px){.team_top .team_header h2{margin-left:0px;margin-right:0px;}}@media (min-width: 1024px){.team_top .team_header h2{display:grid;}}@media (min-width: 1024px){.team_top .team_header h2{grid-template-columns:repeat(12, minmax(0, 1fr));}}@media (min-width: 1024px){.team_top .team_header h2{grid-template-rows:repeat(3, minmax(0, 1fr));}}@media (min-width: 1024px){.team_top .team_header h2{-moz-column-gap:1rem;column-gap:1rem;}}@media (min-width: 1024px){.team_top .team_header h2{row-gap:0px;}}@media (min-width: 1024px){.team_top .team_header h2{font-size:4.5rem;line-height:1;}}.team_top .team_header h2 span{line-height:1;}@media (min-width: 1024px){.team_top .team_header h2 span{display:block;}}.team_top .team_header h2 span.title_1{font-variation-settings:\"wght\" 200,\"wdth\" 130,\"ital\" 0;font-variation-settings:\"wght\" var(--font-weight,200),\"wdth\" var(--font-width,130),\"ital\" 0}.team_top .team_header h2 span.title_1{grid-column:span 1 / span 1;}.team_top .team_header h2 span.title_1{grid-row:span 1 / span 1;}.team_top .team_header h2 span.title_1{grid-row-start:1;}@media (min-width: 1024px){.team_top .team_header h2 span.title_1{grid-column:span 6 / span 6;}}@media (min-width: 1024px){.team_top .team_header h2 span.title_1{grid-column-start:4;}}@media (min-width: 1024px){.team_top .team_header h2 span.title_1{text-align:center;}}.team_top .team_header h2 span.title_2{grid-row:span 1 / span 1;}.team_top .team_header h2 span.title_2{grid-row-start:2;}.team_top .team_header h2 span.title_2{text-transform:uppercase;}@media (min-width: 1024px){.team_top .team_header h2 span.title_2{grid-column:span 6 / span 6;}}@media (min-width: 1024px){.team_top .team_header h2 span.title_2{grid-column-start:6;}}.team_top .team_header h2 span.title_2,.team_top .team_header h2 span.title_3{font-variation-settings:\"wght\" 400,\"wdth\" 130,\"ital\" 0;font-variation-settings:\"wght\" var(--font-weight,400),\"wdth\" var(--font-width,130),\"ital\" 0}.team_top .team_header h2 span.title_3{grid-row:span 1 / span 1;}.team_top .team_header h2 span.title_3{grid-row-start:3;}.team_top .team_header h2 span.title_3{text-transform:uppercase;}@media (min-width: 1024px){.team_top .team_header h2 span.title_3{grid-column:span 6 / span 6;}}@media (min-width: 1024px){.team_top .team_header h2 span.title_3{grid-column-start:5;}}.team_people{margin-left:auto;margin-right:auto;width:100%;max-width:1536px;padding-top:5rem;padding-bottom:5rem;padding-top:5rem;}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./pages/team.vue?vue&type=template&id=07272dc9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('LocomotiveScroll',{ref:"scroller",attrs:{"id":"melborp-team","getted-options":{
    direction: 'vertical',
    smartphone: {
      direction: 'vertical',
    },
    tablet: {
      direction: 'vertical',
    },
  }}},[_c('div',{class:'content_interior vertical' + (_vm.story != null ? ' loaded' : '')},[_c('div',{staticClass:"team_top",attrs:{"data-scroll-section":"","data-scroll-call":"section_team"}},[_c('div',{staticClass:"team_header"},[_c('h2',[(_vm.story.content.titulo[0].titulo1)?_c('span',{staticClass:"title_1"},[_vm._v(_vm._s(_vm.story.content.titulo[0].titulo1)+"\n          ")]):_vm._e(),_vm._v(" "),(_vm.story.content.titulo[0].titulo2)?_c('span',{staticClass:"title_2"},[_vm._v(_vm._s(_vm.story.content.titulo[0].titulo2)+"\n          ")]):_vm._e(),_vm._v(" "),(_vm.story.content.titulo[0].titulo3)?_c('span',{staticClass:"title_3"},[_vm._v(_vm._s(_vm.story.content.titulo[0].titulo3))]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"team_people",attrs:{"data-scroll-section":""}},[_c('div',{staticClass:"team_people_grid"},_vm._l((_vm.story.content.teams),function(team,i){return _c('Team',{key:i,attrs:{"media":team}})}),1)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/team.vue?vue&type=template&id=07272dc9&

// EXTERNAL MODULE: ./node_modules/gsap/dist/gsap.js
var gsap = __webpack_require__(7);
var gsap_default = /*#__PURE__*/__webpack_require__.n(gsap);

// EXTERNAL MODULE: ./node_modules/gsap/ScrollTrigger.js
var ScrollTrigger = __webpack_require__(91);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./components/team/Team_broken.vue + 4 modules
var Team_broken = __webpack_require__(166);

// EXTERNAL MODULE: ./utils/transitions.js
var transitions = __webpack_require__(93);

// EXTERNAL MODULE: ./mixins/loader.js
var loader = __webpack_require__(89);

// EXTERNAL MODULE: ./mixins/head.js
var head = __webpack_require__(94);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./pages/team.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // COMPONENTES





gsap_default.a.registerPlugin(ScrollTrigger["a" /* ScrollTrigger */]);
/* harmony default export */ var teamvue_type_script_lang_js_ = ({
  components: {
    Team: Team_broken["default"]
  },
  mixins: [loader["a" /* default */], head["a" /* default */]],
  transition: { ...transitions["a" /* custom */]
  },

  asyncData({
    route,
    payload,
    app,
    error,
    store
  }) {
    try {
      if (payload) {
        // store.commit('app/setLoad', true)
        return {
          story: payload
        };
      } else {
        const fullSlug = route.path === '/' || route.path === '' ? 'team' : route.path;
        return app.$storyapi.get(`cdn/stories/${fullSlug}`, {
          version: 'published'
        }).then(res => {
          console.log('👌 TEAM -> Storyblok', res.data.story);
          return {
            story: res.data.story
          };
        }).catch(res => {
          if (!res.response) {
            console.error('❌ TEAM -> Storyblok', res);
            error({
              statusCode: 404,
              message: 'Failed to receive content form api'
            });
          } else {
            console.error('❌ TEAM -> Storyblok', res.response.data);
            error({
              statusCode: res.response.status,
              message: res.response.data
            });
          }
        });
      }
    } catch (e) {
      console.error('ERROR Team', e);
    }
  },

  data() {
    return {
      cargado: false
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      section: 'app/getSection',
      home: 'app/getHome',
      load: 'app/getLoad'
    })
  },

  beforeCreate() {
    if (this.load != null) {
      this.setLoad(false);
    }
  },

  mounted() {
    this.initScrolltrigger();
    this.$nextTick(() => {
      const elements = document.querySelectorAll('[data-scroll-trigger]');
      elements.forEach(element => this.elementAnimation(element));
    }); // this.setHome({
    //   fondo: this.story.content.fondo.color,
    //   texto: this.story.content.texto.color,
    //   texto_home: this.story.content.texto_home.color,
    //   texto_home_hover: this.story.content.texto_home_hover.color,
    //   nav: this.story.content.navegacion.color,
    // })
    // gsap.set('body', {
    //   background: this.story.content.fondo.color,
    //   color: this.story.content.texto.color,
    // })

    this.setLoad(true);
    this.setStyles();
  },

  methods: { ...Object(external_vuex_["mapMutations"])({
      setSection: 'app/setSection',
      setPage: 'app/setPage',
      setLoad: 'app/setLoad'
    }),

    animateHome() {
      gsap_default.a.from('.home_top', {
        autoAlpha: 0,
        duration: 2,
        delay: 1,
        ease: 'expo.out',
        opacity: 0.1
      });
    },

    setStyles() {
      setTimeout(() => {
        console.log('👌 TEAM -> setTimeout', document.getElementById('nav_site'), this.story.content.colores[0]);
        document.getElementById('nav_site').classList.remove('dif');
        gsap_default.a.set('#nav_site #logo_melborp', {
          fill: this.story.content.colores[0].nombre.color
        });
        gsap_default.a.set('#nav_site a', {
          color: this.story.content.colores[0].nombre.color
        });
      }, 1000);
      gsap_default.a.set('body, .content_interior', {
        background: this.story.content.colores[0].fondo.color,
        color: this.story.content.colores[0].texto.color
      });
      this.setPage({
        fondo: this.story.content.colores[0].fondo.color,
        texto: this.story.content.colores[0].texto.color,
        nav: this.story.content.colores[0].nombre.color
      });
    },

    initScrolltrigger() {
      const locomotive = this.$refs.scroller.locomotive;
      locomotive.on('scroll', ScrollTrigger["a" /* ScrollTrigger */].update);
      ScrollTrigger["a" /* ScrollTrigger */].scrollerProxy(locomotive.el, {
        scrollTop(value) {
          return arguments.length ? locomotive.scrollTo(value, 0, 0) : locomotive.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        }

      });
      locomotive.on('call', (value, way, obj) => {
        this.setSection(value);

        switch (value) {
          case 'fadeText':
            {
              break;
            }

          case 'index_home':
            {
              break;
            }

          default:
            break;
        }
      });
    },

    elementAnimation(element) {
      gsap_default.a.from(element, {
        scrollTrigger: {
          trigger: element,
          scroller: this.$refs.scroller.locomotive.el,
          scrub: true,
          start: 'top bottom',
          end: 'bottom center'
        },
        clipPath: 'inset(100% 0% 0% 0%)',
        // webkitClipPath: 'inset(100% 0% 0% 0%)',
        ease: 'none'
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/team.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_teamvue_type_script_lang_js_ = (teamvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/team.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(182)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_teamvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7383796c"
  
)

/* harmony default export */ var team = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollTrigger; });
/* unused harmony export default */
/*!
 * ScrollTrigger 3.6.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap,
    _coreInitted,
    _win,
    _doc,
    _docEl,
    _body,
    _root,
    _resizeDelay,
    _raf,
    _request,
    _toArray,
    _clamp,
    _time2,
    _syncInterval,
    _refreshing,
    _pointerIsDown,
    _transformProp,
    _i,
    _prevWidth,
    _prevHeight,
    _autoRefresh,
    _sort,
    _suppressOverwrites,
    _ignoreResize,
    _limitCallbacks,
    // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
_startup = 1,
    _proxies = [],
    _scrollers = [],
    _getTime = Date.now,
    _time1 = _getTime(),
    _lastScrollTime = 0,
    _enabled = 1,
    _passThrough = function _passThrough(v) {
  return v;
},
    _round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _isViewport = function _isViewport(e) {
  return !!~_root.indexOf(e);
},
    _getProxyProp = function _getProxyProp(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
},
    _getScrollFunc = function _getScrollFunc(element, _ref) {
  var s = _ref.s,
      sc = _ref.sc;

  var i = _scrollers.indexOf(element),
      offset = sc === _vertical.sc ? 1 : 2;

  !~i && (i = _scrollers.push(element) - 1);
  return _scrollers[i + offset] || (_scrollers[i + offset] = _getProxyProp(element, s) || (_isViewport(element) ? sc : function (value) {
    return arguments.length ? element[s] = value : element[s];
  }));
},
    _getBoundsFunc = function _getBoundsFunc(element) {
  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
    _winOffsets.width = _win.innerWidth;
    _winOffsets.height = _win.innerHeight;
    return _winOffsets;
  } : function () {
    return _getBounds(element);
  });
},
    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref2) {
  var d = _ref2.d,
      d2 = _ref2.d2,
      a = _ref2.a;
  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
    return a()[d];
  } : function () {
    return (isViewport ? _win["inner" + d2] : scroller["client" + d2]) || 0;
  };
},
    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
    return _winOffsets;
  };
},
    _maxScroll = function _maxScroll(element, _ref3) {
  var s = _ref3.s,
      d2 = _ref3.d2,
      d = _ref3.d,
      a = _ref3.a;
  return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? Math.max(_docEl[s], _body[s]) - (_win["inner" + d2] || _docEl["client" + d2] || _body["client" + d2]) : element[s] - element["offset" + d2];
},
    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
},
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _callIfFunc = function _callIfFunc(value) {
  return _isFunction(value) && value();
},
    _combineFunc = function _combineFunc(f1, f2) {
  return function () {
    var result1 = _callIfFunc(f1),
        result2 = _callIfFunc(f2);

    return function () {
      _callIfFunc(result1);

      _callIfFunc(result2);
    };
  };
},
    _abs = Math.abs,
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _left = "left",
    _top = "top",
    _right = "right",
    _bottom = "bottom",
    _width = "width",
    _height = "height",
    _Right = "Right",
    _Left = "Left",
    _Top = "Top",
    _Bottom = "Bottom",
    _padding = "padding",
    _margin = "margin",
    _Width = "Width",
    _Height = "Height",
    _px = "px",
    _horizontal = {
  s: _scrollLeft,
  p: _left,
  p2: _Left,
  os: _right,
  os2: _Right,
  d: _width,
  d2: _Width,
  a: "x",
  sc: function sc(value) {
    return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
  }
},
    _vertical = {
  s: _scrollTop,
  p: _top,
  p2: _Top,
  os: _bottom,
  os2: _Bottom,
  d: _height,
  d2: _Height,
  a: "y",
  op: _horizontal,
  sc: function sc(value) {
    return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
  }
},
    _getComputedStyle = function _getComputedStyle(element) {
  return _win.getComputedStyle(element);
},
    _makePositionable = function _makePositionable(element) {
  return element.style.position = _getComputedStyle(element).position === "absolute" ? "absolute" : "relative";
},
    // if the element already has position: absolute, leave that, otherwise make it position: relative
_setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    //_isInViewport = element => (element = _getBounds(element)) && !(element.top > (_win.innerHeight || _docEl.clientHeight) || element.bottom < 0 || element.left > (_win.innerWidth || _docEl.clientWidth) || element.right < 0) && element,
_getBounds = function _getBounds(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1),
      bounds = element.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
},
    _getSize = function _getSize(element, _ref4) {
  var d2 = _ref4.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
},
    _getLabelRatioArray = function _getLabelRatioArray(timeline) {
  var a = [],
      labels = timeline.labels,
      duration = timeline.duration(),
      p;

  for (p in labels) {
    a.push(labels[p] / duration);
  }

  return a;
},
    _getClosestLabel = function _getClosestLabel(animation) {
  return function (value) {
    return gsap.utils.snap(_getLabelRatioArray(animation), value);
  };
},
    _getLabelAtDirection = function _getLabelAtDirection(timeline) {
  return function (value, st) {
    var a = _getLabelRatioArray(timeline),
        i;

    a.sort(function (a, b) {
      return a - b;
    });

    if (st.direction > 0) {
      value -= 1e-4; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.

      for (i = 0; i < a.length; i++) {
        if (a[i] >= value) {
          return a[i];
        }
      }

      return a.pop();
    } else {
      i = a.length;
      value += 1e-4;

      while (i--) {
        if (a[i] <= value) {
          return a[i];
        }
      }
    }

    return a[0];
  };
},
    _multiListener = function _multiListener(func, element, types, callback) {
  return types.split(",").forEach(function (type) {
    return func(element, type, callback);
  });
},
    _addListener = function _addListener(element, type, func) {
  return element.addEventListener(type, func, {
    passive: true
  });
},
    _removeListener = function _removeListener(element, type, func) {
  return element.removeEventListener(type, func);
},
    _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
},
    _defaults = {
  toggleActions: "play",
  anticipatePin: 0
},
    _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
},
    _offsetToPx = function _offsetToPx(value, size) {
  if (_isString(value)) {
    var eqIndex = value.indexOf("="),
        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

    if (~eqIndex) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }

    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }

  return value;
},
    _createMarker = function _createMarker(type, name, container, direction, _ref5, offset, matchWidthEl) {
  var startColor = _ref5.startColor,
      endColor = _ref5.endColor,
      fontSize = _ref5.fontSize,
      indent = _ref5.indent,
      fontWeight = _ref5.fontWeight;

  var e = _doc.createElement("div"),
      useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed",
      isScroller = type.indexOf("scroller") !== -1,
      parent = useFixedPosition ? _body : container,
      isStart = type.indexOf("start") !== -1,
      color = isStart ? startColor : endColor,
      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

  css += "position:" + (isScroller && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type);
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
  e._offset = e["offset" + direction.op.d2];

  _positionMarker(e, 0, direction, isStart);

  return e;
},
    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  },
      side = direction[flipped ? "os2" : "p2"],
      oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? "1px" : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start + "px";
  gsap.set(marker, vars);
},
    _triggers = [],
    _ids = {},
    _sync = function _sync() {
  return _request || (_request = _raf(_updateAll));
},
    _onScroll = function _onScroll() {
  if (!_request) {
    _request = _raf(_updateAll);
    _lastScrollTime || _dispatch("scrollStart");
    _lastScrollTime = _getTime();
  }
},
    _onResize = function _onResize() {
  return !_refreshing && !_ignoreResize && !_doc.fullscreenElement && _resizeDelay.restart(true);
},
    // ignore resizes triggered by refresh()
_listeners = {},
    _emptyArray = [],
    _media = [],
    _creatingMedia,
    // when ScrollTrigger.matchMedia() is called, we record the current media key here (like "(min-width: 800px)") so that we can assign it to everything that's created during that call. Then we can revert just those when necessary. In the ScrollTrigger's init() call, the _creatingMedia is recorded as a "media" property on the instance.
_lastMediaTick,
    _onMediaChange = function _onMediaChange(e) {
  var tick = gsap.ticker.frame,
      matches = [],
      i = 0,
      index;

  if (_lastMediaTick !== tick || _startup) {
    _revertAll();

    for (; i < _media.length; i += 4) {
      index = _win.matchMedia(_media[i]).matches;

      if (index !== _media[i + 3]) {
        // note: some browsers fire the matchMedia event multiple times, like when going full screen, so we shouldn't call the function multiple times. Check to see if it's already matched.
        _media[i + 3] = index;
        index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2](); // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.
      }
    }

    _revertRecorded(); // in case killing/reverting any of the animations actually added inline styles back.


    for (i = 0; i < matches.length; i++) {
      index = matches[i];
      _creatingMedia = _media[index];
      _media[index + 2] = _media[index + 1](e);
    }

    _creatingMedia = 0;
    _coreInitted && _refreshAll(0, 1);
    _lastMediaTick = tick;

    _dispatch("matchMedia");
  }
},
    _softRefresh = function _softRefresh() {
  return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
},
    _dispatch = function _dispatch(type) {
  return _listeners[type] && _listeners[type].map(function (f) {
    return f();
  }) || _emptyArray;
},
    _savedStyles = [],
    // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
_revertRecorded = function _revertRecorded(media) {
  for (var i = 0; i < _savedStyles.length; i += 4) {
    if (!media || _savedStyles[i + 3] === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i + 2].uncache = 1;
    }
  }
},
    _revertAll = function _revertAll(kill, media) {
  var trigger;

  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];

    if (!media || trigger.media === media) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.scroll.rec || (trigger.scroll.rec = trigger.scroll()); // record the scroll positions so that in each refresh() we can ensure that it doesn't shift. Remember, pinning can make things change around, especially if the same element is pinned multiple times. If one was already recorded, don't re-record because unpinning may have occurred and made it shorter.

        trigger.revert();
      }
    }
  }

  _revertRecorded(media);

  media || _dispatch("revert");
},
    _refreshAll = function _refreshAll(force, skipRevert) {
  if (_lastScrollTime && !force) {
    _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

    return;
  }

  var refreshInits = _dispatch("refreshInit");

  _sort && ScrollTrigger.sort();
  skipRevert || _revertAll();

  for (_i = 0; _i < _triggers.length; _i++) {
    _triggers[_i].refresh();
  }

  refreshInits.forEach(function (result) {
    return result && result.render && result.render(-1);
  }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.

  _i = _triggers.length;

  while (_i--) {
    _triggers[_i].scroll.rec = 0;
  }

  _resizeDelay.pause();

  _dispatch("refresh");
},
    _lastScroll = 0,
    _direction = 1,
    _updateAll = function _updateAll() {
  var l = _triggers.length,
      time = _getTime(),
      recordVelocity = time - _time1 >= 50,
      scroll = l && _triggers[0].scroll();

  _direction = _lastScroll > scroll ? -1 : 1;
  _lastScroll = scroll;

  if (recordVelocity) {
    if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
      _lastScrollTime = 0;

      _dispatch("scrollEnd");
    }

    _time2 = _time1;
    _time1 = time;
  }

  if (_direction < 0) {
    _i = l;

    while (_i-- > 0) {
      _triggers[_i] && _triggers[_i].update(0, recordVelocity);
    }

    _direction = 1;
  } else {
    for (_i = 0; _i < l; _i++) {
      _triggers[_i] && _triggers[_i].update(0, recordVelocity);
    }
  }

  _request = 0;
},
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex"],
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
    _swapPinOut = function _swapPinOut(pin, spacer, state) {
  _setState(state);

  if (pin.parentNode === spacer) {
    var parent = spacer.parentNode;

    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }
},
    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
  if (pin.parentNode !== spacer) {
    var i = _propNamesToCopy.length,
        spacerStyle = spacer.style,
        pinStyle = pin.style,
        p;

    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }

    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

    _setState(spacerState);

    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
    pinStyle[_padding] = cs[_padding];
    pin.parentNode.insertBefore(spacer, pin);
    spacer.appendChild(pin);
  }
},
    _capsExp = /([A-Z])/g,
    _setState = function _setState(state) {
  if (state) {
    var style = state.t.style,
        l = state.length,
        i = 0,
        p,
        value;
    (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off

    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];

      if (value) {
        style[p] = value;
      } else if (style[p]) {
        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
},
    _getState = function _getState(element) {
  // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
  var l = _stateProps.length,
      style = element.style,
      state = [],
      i = 0;

  for (; i < l; i++) {
    state.push(_stateProps[i], style[_stateProps[i]]);
  }

  state.t = element;
  return state;
},
    _copyState = function _copyState(state, override, omitOffsets) {
  var result = [],
      l = state.length,
      i = omitOffsets ? 8 : 0,
      // skip top, left, right, bottom if omitOffsets is true
  p;

  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }

  result.t = state.t;
  return result;
},
    _winOffsets = {
  left: 0,
  top: 0
},
    _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax) {
  _isFunction(value) && (value = value(self));

  if (_isString(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }

  if (!_isNumber(value)) {
    _isFunction(trigger) && (trigger = trigger(self));

    var element = _toArray(trigger)[0] || _body,
        bounds = _getBounds(element) || {},
        offsets = value.split(" "),
        localOffset,
        globalOffset,
        display;

    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      // if display is "none", it won't report getBoundingClientRect() properly
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }

    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
  } else if (markerScroller) {
    _positionMarker(markerScroller, scrollerSize, direction, true);
  }

  if (marker) {
    var position = value + scrollerSize,
        isStart = marker._isStart;
    scrollerMax = "scroll" + direction.d2;

    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[scrollerMax], _docEl[scrollerMax]) : marker.parentNode[scrollerMax]) <= position + 1);

    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }

  return Math.round(value);
},
    _prefixExp = /(?:webkit|moz|length|cssText|inset)/i,
    _reparent = function _reparent(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style = element.style,
        p,
        cs;

    if (parent === _body) {
      element._stOrig = style.cssText; // record original inline styles so we can revert them later

      cs = _getComputedStyle(element);

      for (p in cs) {
        // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
          style[p] = cs[p];
        }
      }

      style.top = top;
      style.left = left;
    } else {
      style.cssText = element._stOrig;
    }

    gsap.core.getCache(element).uncache = 1;
    parent.appendChild(element);
  }
},
    // returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
_getTweenCreator = function _getTweenCreator(scroller, direction) {
  var getScroll = _getScrollFunc(scroller, direction),
      prop = "_scroll" + direction.p2,
      // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
  lastScroll1,
      lastScroll2,
      getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween.tween,
        onComplete = vars.onComplete,
        modifiers = {};
    tween && tween.kill();
    lastScroll1 = Math.round(initialValue);
    vars[prop] = scrollTo;
    vars.modifiers = modifiers;

    modifiers[prop] = function (value) {
      value = _round(getScroll()); // round because in some [very uncommon] Windows environments, it can get reported with decimals even though it was set without.

      if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2) {
        // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
        tween.kill();
        getTween.tween = 0;
      } else {
        value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
      }

      lastScroll2 = lastScroll1;
      return lastScroll1 = _round(value);
    };

    vars.onComplete = function () {
      getTween.tween = 0;
      onComplete && onComplete.call(tween);
    };

    tween = getTween.tween = gsap.to(scroller, vars);
    return tween;
  };

  scroller[prop] = getScroll;
  scroller.addEventListener("wheel", function () {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  }); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.

  return getTween;
};

_horizontal.op = _vertical;
var ScrollTrigger = /*#__PURE__*/function () {
  function ScrollTrigger(vars, animation) {
    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
    this.init(vars, animation);
  }

  var _proto = ScrollTrigger.prototype;

  _proto.init = function init(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(1); // in case it's being initted again

    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }

    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);

    var direction = vars.horizontal ? _horizontal : _vertical,
        _vars = vars,
        onUpdate = _vars.onUpdate,
        toggleClass = _vars.toggleClass,
        id = _vars.id,
        onToggle = _vars.onToggle,
        onRefresh = _vars.onRefresh,
        scrub = _vars.scrub,
        trigger = _vars.trigger,
        pin = _vars.pin,
        pinSpacing = _vars.pinSpacing,
        invalidateOnRefresh = _vars.invalidateOnRefresh,
        anticipatePin = _vars.anticipatePin,
        onScrubComplete = _vars.onScrubComplete,
        onSnapComplete = _vars.onSnapComplete,
        once = _vars.once,
        snap = _vars.snap,
        pinReparent = _vars.pinReparent,
        isToggle = !scrub && scrub !== 0,
        scroller = _toArray(vars.scroller || _win)[0],
        scrollerCache = gsap.core.getCache(scroller),
        isViewport = _isViewport(scroller),
        useFixedPosition = "pinType" in vars ? vars.pinType === "fixed" : isViewport || _getProxyProp(scroller, "pinType") === "fixed",
        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
        toggleActions = isToggle && vars.toggleActions.split(" "),
        markers = "markers" in vars ? vars.markers : _defaults.markers,
        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
        self = this,
        onRefreshInit = vars.onRefreshInit && function () {
      return vars.onRefreshInit(self);
    },
        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
        tweenTo,
        pinCache,
        snapFunc,
        isReverted,
        scroll1,
        scroll2,
        start,
        end,
        markerStart,
        markerEnd,
        markerStartTrigger,
        markerEndTrigger,
        markerVars,
        change,
        pinOriginalState,
        pinActiveState,
        pinState,
        spacer,
        offset,
        pinGetter,
        pinSetter,
        pinStart,
        pinChange,
        spacingStart,
        spacerState,
        markerStartSetter,
        markerEndSetter,
        cs,
        snap1,
        snap2,
        scrubTween,
        scrubSmooth,
        snapDurClamp,
        snapDelayedCall,
        prevProgress,
        prevScroll,
        prevAnimProgress;

    self.media = _creatingMedia;
    anticipatePin *= 45;

    _triggers.push(self);

    self.scroller = scroller;
    self.scroll = _getScrollFunc(scroller, direction);
    scroll1 = self.scroll();
    self.vars = vars;
    animation = animation || vars.animation;
    "refreshPriority" in vars && (_sort = 1);
    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _vertical),
      left: _getTweenCreator(scroller, _horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

    if (animation) {
      animation.vars.lazy = false;
      animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
      self.animation = animation.pause();
      animation.scrollTrigger = self;
      scrubSmooth = _isNumber(scrub) && scrub;
      scrubSmooth && (scrubTween = gsap.to(animation, {
        ease: "power3",
        duration: scrubSmooth,
        onComplete: function onComplete() {
          return onScrubComplete && onScrubComplete(self);
        }
      }));
      snap1 = 0;
      id || (id = animation.vars.id);
    }

    if (snap) {
      _isObject(snap) || (snap = {
        snapTo: snap
      });
      "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
        scrollBehavior: "auto"
      }); // smooth scrolling doesn't work with snap.

      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : gsap.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
        if (Math.abs(self.getVelocity()) < 10 && !_pointerIsDown) {
          var totalProgress = animation && !isToggle ? animation.totalProgress() : self.progress,
              velocity = (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
              change1 = _abs(velocity / 2) * velocity / 0.185,
              naturalEnd = totalProgress + (snap.inertia === false ? 0 : change1),
              endValue = _clamp(0, 1, snapFunc(naturalEnd, self)),
              scroll = self.scroll(),
              endScroll = Math.round(start + endValue * change),
              _snap = snap,
              onStart = _snap.onStart,
              _onInterrupt = _snap.onInterrupt,
              _onComplete = _snap.onComplete,
              tween = tweenTo.tween;

          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= Math.abs(endScroll - scroll)) {
              // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
              return;
            }

            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: Math.abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
              },
              onComplete: function onComplete() {
                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _onComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && onStart(self, tweenTo.tween);
          }
        } else if (self.isActive) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }

    id && (_ids[id] = self);
    trigger = self.trigger = _toArray(trigger || pin)[0];
    pin = pin === true ? trigger : _toArray(pin)[0];
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });

    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default.

      self.pin = pin;
      vars.force3D !== false && gsap.set(pin, {
        force3D: true
      });
      pinCache = gsap.core.getCache(pin);

      if (!pinCache.spacer) {
        // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
        pinCache.spacer = spacer = _doc.createElement("div");
        spacer.setAttribute("class", "pin-spacer" + (id ? " pin-spacer-" + id : ""));
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }

      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap.getProperty(pin);
      pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).

      _swapPinIn(pin, spacer, cs);

      pinState = _getState(pin);
    }

    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];
      markerStart = _createMarker("start", id, scroller, direction, markerVars, offset);
      markerEnd = _createMarker("end", id, scroller, direction, markerVars, offset);

      if (!useFixedPosition) {
        _makePositionable(isViewport ? _body : scroller);

        gsap.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }

    self.revert = function (revert) {
      var r = revert !== false || !self.enabled,
          prevRefreshing = _refreshing;

      if (r !== isReverted) {
        if (r) {
          prevScroll = Math.max(self.scroll(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.

          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }

        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.style.display = r ? "none" : "block";
        });
        r && (_refreshing = 1);
        self.update(r); // make sure the pin is back in its original position so that all the measurements are correct.

        _refreshing = prevRefreshing;
        pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
        isReverted = r;
      }
    };

    self.refresh = function (soft, force) {
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }

      if (pin && soft && _lastScrollTime) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

        return;
      }

      _refreshing = 1;
      scrubTween && scrubTween.pause();
      invalidateOnRefresh && animation && animation.progress(0).invalidate();
      isReverted || self.revert();

      var size = getScrollerSize(),
          scrollerBounds = getScrollerOffsets(),
          max = _maxScroll(scroller, direction),
          offset = 0,
          otherPinOffset = 0,
          parsedEnd = vars.end,
          parsedEndTrigger = vars.endTrigger || trigger,
          parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
          i = triggerIndex,
          cs,
          bounds,
          scroll,
          isVertical,
          override,
          curTrigger,
          curPin,
          oppositeScroll,
          initted;

      while (i--) {
        // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.

        curPin = curTrigger.pin;
        curPin && (curPin === trigger || curPin === pin) && curTrigger.revert();
      }

      start = _parsePosition(parsedStart, trigger, size, direction, self.scroll(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max) || (pin ? -0.001 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : start + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.

          parsedEndTrigger = trigger;
        }
      }

      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, self.scroll() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max)) || -0.001;
      change = end - start || (start -= 0.01) && 0.001;
      offset = 0;
      i = triggerIndex;

      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;

        if (curPin && curTrigger.start - curTrigger._pinPush < start) {
          cs = curTrigger.end - curTrigger.start;
          curPin === trigger && (offset += cs);
          curPin === pin && (otherPinOffset += cs);
        }
      }

      start += offset;
      end += offset;
      self._pinPush = otherPinOffset;

      if (markerStart && offset) {
        // offset the markers if necessary
        cs = {};
        cs[direction.a] = "+=" + offset;
        gsap.set([markerStart, markerEnd], cs);
      }

      if (pin) {
        cs = _getComputedStyle(pin);
        isVertical = direction === _vertical;
        scroll = self.scroll(); // recalculate because the triggers can affect the scroll

        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
        !max && end > 1 && ((isViewport ? _body : scroller).style["overflow-" + direction.a] = "scroll"); // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://greensock.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/

        _swapPinIn(pin, spacer, cs);

        pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.

        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();

        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
          i && spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).

          _setState(spacerState);

          useFixedPosition && self.scroll(prevScroll);
        }

        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs[_padding];
          override[_padding + _Top] = cs[_padding + _Top];
          override[_padding + _Right] = cs[_padding + _Right];
          override[_padding + _Bottom] = cs[_padding + _Bottom];
          override[_padding + _Left] = cs[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
        }

        if (animation) {
          // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
          initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.

          _suppressOverwrites(1);

          animation.progress(1, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.

          animation.progress(0, true);
          initted || animation.invalidate();

          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }
      } else if (trigger && self.scroll()) {
        // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
        bounds = trigger.parentNode;

        while (bounds && bounds !== _body) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }

          bounds = bounds.parentNode;
        }
      }

      for (i = 0; i < triggerIndex; i++) {
        // make sure we revert from first to last to make sure things reach their end state properly
        curTrigger = _triggers[i].pin;
        curTrigger && (curTrigger === trigger || curTrigger === pin) && _triggers[i].revert(false);
      }

      self.start = start;
      self.end = end;
      scroll1 = scroll2 = self.scroll(); // reset velocity

      scroll1 < prevScroll && self.scroll(prevScroll);
      self.revert(false);
      _refreshing = 0;
      animation && isToggle && animation._initted && animation.progress(prevAnimProgress, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().

      if (prevProgress !== self.progress) {
        // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
        scrubTween && animation.totalProgress(prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.

        self.progress = prevProgress;
        self.update();
      }

      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      onRefresh && onRefresh(self);
    };

    self.getVelocity = function () {
      return (self.scroll() - scroll2) / (_getTime() - _time2) * 1000 || 0;
    };

    self.update = function (reset, recordVelocity) {
      var scroll = self.scroll(),
          p = reset ? 0 : (scroll - start) / change,
          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
          prevProgress = self.progress,
          isActive,
          wasActive,
          toggleState,
          action,
          stateChanged,
          toggled;

      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = scroll;

        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).


      anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);

      if (clipped !== prevProgress && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress && prevProgress < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)

        self.direction = clipped > prevProgress ? 1 : -1;
        self.progress = clipped;

        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            scrubTween.vars.totalProgress = clipped;
            scrubTween.invalidate().restart();
          } else if (animation) {
            animation.totalProgress(clipped, !!_refreshing);
          }
        }

        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

          if (!useFixedPosition) {
            pinSetter(pinStart + pinChange * clipped);
          } else if (stateChanged) {
            action = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)

            if (pinReparent) {
              if (!reset && (isActive || action)) {
                var bounds = _getBounds(pin, true),
                    _offset = scroll - start;

                _reparent(pin, _body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }

            _setState(isActive || action ? pinActiveState : pinState);

            pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !action ? pinChange : 0));
          }
        }

        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        }); // classes could affect positioning, so do it even if reset or refreshing is true.

        onUpdate && !isToggle && !reset && onUpdate(self);

        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.

          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)

            if (animation && (action === "complete" || action === "reset" || action in animation)) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else {
                animation[action]();
              }
            }

            onUpdate && onUpdate(self);
          }

          if (toggled || !_limitCallbacks) {
            // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
            onToggle && toggled && onToggle(self);
            callbacks[toggleState] && callbacks[toggleState](self);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.

            if (!toggled) {
              // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && callbacks[toggleState](self);
            }
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      } // update absolutely-positioned markers (only if the scroller isn't the viewport)


      if (markerEndSetter) {
        markerStartSetter(scroll + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(scroll);
      }
    };

    self.enable = function () {
      if (!self.enabled) {
        self.enabled = true;

        _addListener(scroller, "resize", _onResize);

        _addListener(scroller, "scroll", _onScroll);

        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
        !animation || !animation.add ? self.refresh() : gsap.delayedCall(0.01, function () {
          return start || end || self.refresh();
        }) && (change = 0.01) && (start = end = 0); // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick.
      }
    };

    self.disable = function (reset, allowAnimation) {
      if (self.enabled) {
        reset !== false && self.revert();
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }

        if (!isViewport) {
          var i = _triggers.length;

          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return; //don't remove the listeners if there are still other triggers referencing it.
            }
          }

          _removeListener(scroller, "resize", _onResize);

          _removeListener(scroller, "scroll", _onScroll);
        }
      }
    };

    self.kill = function (revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      id && delete _ids[id];

      var i = _triggers.indexOf(self);

      _triggers.splice(i, 1);

      i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...

      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.render(-1);
        allowAnimation || animation.kill();
      }

      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
        return m.parentNode.removeChild(m);
      });

      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;

        _triggers.forEach(function (t) {
          return t.pin === pin && i++;
        });

        i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
      }
    };

    self.enable();
  };

  ScrollTrigger.register = function register(core) {
    if (!_coreInitted) {
      gsap = core || _getGSAP();

      if (_windowExists() && window.document) {
        _win = window;
        _doc = document;
        _docEl = _doc.documentElement;
        _body = _doc.body;
      }

      if (gsap) {
        _toArray = gsap.utils.toArray;
        _clamp = gsap.utils.clamp;
        _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
        gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.

        if (_body) {
          _raf = _win.requestAnimationFrame || function (f) {
            return setTimeout(f, 16);
          };

          _addListener(_win, "wheel", _onScroll);

          _root = [_win, _doc, _docEl, _body];

          _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!


          var bodyStyle = _body.style,
              border = bodyStyle.borderTop,
              bounds;
          bodyStyle.borderTop = "1px solid #000"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.

          bounds = _getBounds(_body);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding

          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTop = border : bodyStyle.removeProperty("border-top");
          _syncInterval = setInterval(_sync, 200);
          gsap.delayedCall(0.5, function () {
            return _startup = 0;
          });

          _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.


          _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/


          _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", function () {
            return _pointerIsDown = 1;
          });

          _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", function () {
            return _pointerIsDown = 0;
          });

          _transformProp = gsap.utils.checkPrefix("transform");

          _stateProps.push(_transformProp);

          _coreInitted = _getTime();
          _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc, "visibilitychange", function () {
            var w = _win.innerWidth,
                h = _win.innerHeight;

            if (_doc.hidden) {
              _prevWidth = w;
              _prevHeight = h;
            } else if (_prevWidth !== w || _prevHeight !== h) {
              _onResize();
            }
          }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", function () {
            return _lastScrollTime || _refreshAll();
          }, _win, "resize", _onResize];

          _iterateAutoRefresh(_addListener);
        }
      }
    }

    return _coreInitted;
  };

  ScrollTrigger.defaults = function defaults(config) {
    for (var p in config) {
      _defaults[p] = config[p];
    }
  };

  ScrollTrigger.kill = function kill() {
    _enabled = 0;

    _triggers.slice(0).forEach(function (trigger) {
      return trigger.kill(1);
    });
  };

  ScrollTrigger.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);

    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };

  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
    var t = _toArray(target)[0],
        i = _scrollers.indexOf(t),
        isViewport = _isViewport(t);

    if (~i) {
      _scrollers.splice(i, isViewport ? 6 : 2);
    }

    isViewport ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
  };

  ScrollTrigger.matchMedia = function matchMedia(vars) {
    // _media is populated in the following order: mediaQueryString, onMatch, onUnmatch, isMatched. So if there are two media queries, the Array would have a length of 8
    var mq, p, i, func, result;

    for (p in vars) {
      i = _media.indexOf(p);
      func = vars[p];
      _creatingMedia = p;

      if (p === "all") {
        func();
      } else {
        mq = _win.matchMedia(p);

        if (mq) {
          mq.matches && (result = func());

          if (~i) {
            _media[i + 1] = _combineFunc(_media[i + 1], func);
            _media[i + 2] = _combineFunc(_media[i + 2], result);
          } else {
            i = _media.length;

            _media.push(p, func, result);

            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }

          _media[i + 3] = mq.matches;
        }
      }

      _creatingMedia = 0;
    }

    return _media;
  };

  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
    query || (_media.length = 0);
    query = _media.indexOf(query);
    query >= 0 && _media.splice(query, 4);
  };

  return ScrollTrigger;
}();
ScrollTrigger.version = "3.6.1";

ScrollTrigger.saveStyles = function (targets) {
  return targets ? _toArray(targets).forEach(function (target) {
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);

      i >= 0 && _savedStyles.splice(i, 4);

      _savedStyles.push(target, target.style.cssText, gsap.core.getCache(target), _creatingMedia);
    }
  }) : _savedStyles;
};

ScrollTrigger.revert = function (soft, media) {
  return _revertAll(!soft, media);
};

ScrollTrigger.create = function (vars, animation) {
  return new ScrollTrigger(vars, animation);
};

ScrollTrigger.refresh = function (safe) {
  return safe ? _onResize() : _refreshAll(true);
};

ScrollTrigger.update = _updateAll;

ScrollTrigger.maxScroll = function (element, horizontal) {
  return _maxScroll(element, horizontal ? _horizontal : _vertical);
};

ScrollTrigger.getScrollFunc = function (element, horizontal) {
  return _getScrollFunc(_toArray(element)[0], horizontal ? _horizontal : _vertical);
};

ScrollTrigger.getById = function (id) {
  return _ids[id];
};

ScrollTrigger.getAll = function () {
  return _triggers.slice(0);
};

ScrollTrigger.isScrolling = function () {
  return !!_lastScrollTime;
};

ScrollTrigger.addEventListener = function (type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};

ScrollTrigger.removeEventListener = function (type, callback) {
  var a = _listeners[type],
      i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};

ScrollTrigger.batch = function (targets, vars) {
  var result = [],
      varsCopy = {},
      interval = vars.interval || 0.016,
      batchMax = vars.batchMax || 1e9,
      proxyCallback = function proxyCallback(type, callback) {
    var elements = [],
        triggers = [],
        delay = gsap.delayedCall(interval, function () {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function (self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  },
      p;

  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }

  if (_isFunction(batchMax)) {
    batchMax = batchMax();

    _addListener(ScrollTrigger, "refresh", function () {
      return batchMax = vars.batchMax();
    });
  }

  _toArray(targets).forEach(function (target) {
    var config = {};

    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }

    config.trigger = target;
    result.push(ScrollTrigger.create(config));
  });

  return result;
};

ScrollTrigger.sort = function (func) {
  return _triggers.sort(func || function (a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
  });
};

_getGSAP() && gsap.registerPlugin(ScrollTrigger);


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return custom; });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);

const abierto = {
  // webkitClipPath: 'inset(0% 0% 0% 0%)',
  clipPath: 'inset(0% 0% 0% 0%)'
};
const tiempoEntrada = 1;
const cerradoToLeft = {
  // webkitClipPath: 'inset(0% 0% 0% 100%)',
  clipPath: 'inset(0% 0% 0% 100%)'
};
const custom = {
  name: 'custom',
  appear: true,
  css: false,

  beforeEnter(el) {
    console.log('🏁 TRANSITION -> beforeEnter', el);
  },

  enter(el, done) {
    console.log('🏁 TRANSITION -> enter', el);
    gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].fromTo(el, {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: tiempoEntrada,
      onComplete: () => {
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].set('.preload_inner', {
          display: 'none'
        });
      }
    });
    done();
  },

  afterEnter(el) {
    console.log('🏁 TRANSITION -> afterEnter', el);
  },

  enterCancelled(el) {
    console.log('🏁 TRANSITION -> enterCancelled', el);
  },

  // --------
  // SALIDA
  // --------
  beforeLeave(el) {
    console.log('🏁 TRANSITION -> beforeLeave', el);
    gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].fromTo('.preload_inner .capa_2', abierto, { ...cerradoToLeft,
      delay: 0.5,
      duration: 0.5
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].fromTo('.preload_inner .capa_1', abierto, { ...cerradoToLeft,
      duration: 0.5,
      delay: 0.7
    });
  },

  leave(el, done) {
    console.log('🏁 TRANSITION -> leave', el);
    done();
  },

  afterLeave(el) {
    console.log('🏁 TRANSITION -> afterLeave', el);
  },

  leaveCancelled(el) {
    console.log('🏁 TRANSITION -> leaveCancelled', el);
  }

};

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  head() {
    const headInfo = {
      title: 'MELBORP - Business Updaters | ' + this.story.content.seo.title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.story.content.seo.description || 'Somos un business Updaters y nuestro objetivo es usar la creatividad para transformar negocios que puedan cambiar el mundo.'
      }, {
        hid: 'abstract',
        name: 'abstract',
        content: this.story.content.seo.description || 'Somos un business Updaters y nuestro objetivo es usar la creatividad para transformar negocios que puedan cambiar el mundo.'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: 'Agencia de Publicidad, Agencia Creativa, Publicidad, Agencia de Publicidad, Diseño de Marcas, Campañas, Logotipos, Diseño de empaques, Imagen Corporativa, redes sociales, digital, sitios web, branding, planeación de marcas, investigación de mercados, sura, argos, dislicores, ruta n, medellin, colombia, bogota, experiencias de marca'
      }, {
        hid: 'geo.position"',
        name: 'geo.position"',
        content: '6.1554102,-75.5317308,'
      }, {
        hid: 'geo.placename"',
        name: 'geo.placename"',
        content: 'Melborp'
      }, {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'MELBORP'
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: this.story.content.seo.og_image ? this.story.content.seo.og_image : 'https://melborp.art/'
      }, {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: this.story.content.seo.title || 'Melborp - Business Updaters'
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: this.story.content.seo.og_description || this.story.content.seo.title || 'Somos un business Updaters y nuestro objetivo es usar la creatividad para transformar negocios que puedan cambiar el mundo.'
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: this.story.content.seo.og_image ? this.story.content.seo.og_image : 'https://melborp.art/fb.png?v=1'
      }, {
        hid: 'og:image:url',
        property: 'og:image:url',
        content: this.story.content.seo.og_image ? this.story.content.seo.og_image : 'https://melborp.art/fb.png?v=1'
      }, {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: this.story.content.seo.og_image ? this.story.content.seo.og_image : 'https://melborp.art/fb.png?v=1'
      }, {
        hid: 'og:latitude',
        property: 'og:latitude',
        content: '6.2095861'
      }, {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      }, {
        hid: 'og:longitude',
        property: 'og:longitude',
        content: '6.2095861'
      }, {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@melborpco'
      }, {
        hid: 'og:street_address',
        property: 'og:street_address',
        content: ' Envigado, Colombia Km 17 Vía Las Palmas Parque La Reserva Piso 4 '
      }, {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://melborp.art/'
      }, {
        hid: 'og:locality',
        property: 'og:locality',
        content: 'Medellín'
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'MELBORP'
      }, {
        hid: 'og:region',
        property: 'og:region',
        content: 'Antioquia'
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: this.story.content.seo.twitter_description || this.story.content.seo.description || 'Somos un business Updaters y nuestro objetivo es usar la creatividad para transformar negocios que puedan cambiar el mundo.'
      }, {
        hid: 'og:country_name',
        property: 'og:country_name',
        content: 'Colombia'
      }, {
        hid: 'og:email',
        property: 'og:email',
        content: 'info@melborp.co'
      }, {
        hid: 'og:phone_number',
        property: 'og:phone_number',
        content: '(4) 3119826'
      }, {
        hid: 'dcterms.title',
        name: 'dcterms.title',
        content: 'MELBORP'
      }, {
        hid: 'dcterms.description',
        name: 'dcterms.description',
        content: this.story.content.seo.description || 'Somos un business Updaters y nuestro objetivo es usar la creatividad para transformar negocios que puedan cambiar el mundo.'
      }, {
        hid: 'dcterms.identifier',
        name: 'dcterms.identifier',
        content: 'https://melborp.art/'
      }]
    };
    console.log('🧢  HEAD ->', this.story.content.seo.title, headInfo);
    return headInfo;
  }

});

/***/ })

};;
//# sourceMappingURL=team.js.map