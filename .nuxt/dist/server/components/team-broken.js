exports.ids = [22];
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
//# sourceMappingURL=team-broken.js.map