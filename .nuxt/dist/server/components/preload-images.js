exports.ids = [11];
exports.modules = {

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6423b0e3", content, true, context)
};

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_PreloadImages_vue_vue_type_style_index_0_id_f7ab425e_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_PreloadImages_vue_vue_type_style_index_0_id_f7ab425e_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_PreloadImages_vue_vue_type_style_index_0_id_f7ab425e_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_PreloadImages_vue_vue_type_style_index_0_id_f7ab425e_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_PreloadImages_vue_vue_type_style_index_0_id_f7ab425e_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".preloadp[data-v-f7ab425e]{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;width:100vw;height:100vh;z-index:9000;}.preloadp .preload[data-v-f7ab425e]{display:grid;grid-template-columns:[l1] auto [r1];grid-template-rows:[t1] auto [b1];grid-gap:0;width:100vw;height:100vh;grid-template-areas:\"content\";z-index:10;overflow:hidden;}.preloadp .preload .arrow[data-v-f7ab425e]{grid-area:content;z-index:1}.preloadp .preload .capa_1[data-v-f7ab425e]{grid-area:content;grid-template-columns:[l1] auto [r1];grid-template-rows:[t1] auto 150px auto [b1];grid-gap:0;grid-template-areas:\".\" \"marquee\" \".\";overflow:hidden;color:#fff;z-index:3;-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0);background:rgba(0,0,0,.5)}@media (max-width:768px){.preloadp .preload .capa_1[data-v-f7ab425e]{grid-template-rows:[t1] auto 250px auto [b1]}}.preloadp .preload .capa_1 .arrow[data-v-f7ab425e]{grid-area:marquee;align-self:center;justify-self:center;width:30vh;height:50vh;z-index:1}@media (max-width:768px){.preloadp .preload .capa_1 .arrow[data-v-f7ab425e]{width:20vh;height:30vh}}.preloadp .preload .capa_1 .marquee-container[data-v-f7ab425e]{align-self:center;grid-area:marquee;width:100%;transform:rotate(-10deg) scale(1.1);z-index:1;}.preloadp .preload .capa_1 .marquee-container .logop[data-v-f7ab425e]{height:80px;display:inline-block;margin:0 10px}@media (max-width:768px){.preloadp .preload .capa_1 .marquee-container .logop[data-v-f7ab425e]{height:60px}}.preloadp .preload .capa_1 .marquee-container .logop svg[data-v-f7ab425e]{margin-top:12px;height:80px}@media (max-width:768px){.preloadp .preload .capa_1 .marquee-container .logop svg[data-v-f7ab425e]{height:60px;display:block}}.preloadp .preload .capa_1 .marquee-container .business[data-v-f7ab425e]{font-size:80px;display:inline-block;font-weight:700;line-height:1em;text-transform:uppercase;margin:0 10px}@media (max-width:768px){.preloadp .preload .capa_1 .marquee-container .business[data-v-f7ab425e]{font-size:60px;display:block}}.preloadp .preload .capa_1 .marquee-container .updaters[data-v-f7ab425e]{font-size:80px;display:inline-block;text-transform:uppercase;margin:0 10px;line-height:1em}@media (max-width:768px){.preloadp .preload .capa_1 .marquee-container .updaters[data-v-f7ab425e]{font-size:60px;display:block}}.preloadp .preload .capa_1[data-v-f7ab425e],.preloadp .preload .marquee[data-v-f7ab425e]{display:grid;width:100vw;height:100vh;align-items:center;justify-items:center}.preloadp .preload .marquee[data-v-f7ab425e]{grid-area:content;z-index:2;background:#000;grid-template-columns:[l1] auto [r1];grid-template-rows:[t1] auto 42vh auto [b1];grid-gap:0;grid-template-areas:\".\" \"marquee\" \".\";}.preloadp .preload .marquee .marquee_int[data-v-f7ab425e]{grid-area:marquee;width:100%;height:100%;}.preloadp .preload .marquee .marquee_int .marquee-container img[data-v-f7ab425e]{width:37.8vh;height:42vh;filter:blur(4px)}.preloadp .preload .marquee .marquee_int .marquee-container img[data-v-f7ab425e]{margin-left:2rem;margin-right:2rem;}.preloadp .preload .marquee .marquee_int .marquee-container img[data-v-f7ab425e]{display:block;}.preloadp .preload .marquee .marquee_int .marquee-container img[data-v-f7ab425e]{-o-object-fit:cover;object-fit:cover;}.preloadp .preload .capa_2[data-v-f7ab425e]{width:100vw;height:100vh;background:#fff;grid-area:content;z-index:1;-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/PreloadImages.vue?vue&type=template&id=f7ab425e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"preloadp"},[_vm._ssrNode("<div class=\"preload\" data-v-f7ab425e>","</div>",[(_vm.proyectos)?_vm._ssrNode("<div class=\"marquee\" data-v-f7ab425e>","</div>",[_vm._ssrNode("<div class=\"marquee_int\" data-v-f7ab425e>","</div>",[_c('vue-marquee',{attrs:{"show-progress":false,"duration":_vm.proyectos.length * 8000}},_vm._l((_vm.proyectos),function(proyecto,index){return _c('vue-marquee-slide',{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:({ selector: 'img' }),expression:"{ selector: 'img' }"}],key:index},[_c('img',{staticClass:"marquee_proy",attrs:{"data-src":proyecto.content.home[0].media1.filename +
                '/m/filters:quality(10)'}})])}),1)],1)]):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"capa_1\" data-v-f7ab425e>","</div>",[_c('vue-marquee',{attrs:{"show-progress":false,"duration":52011}},_vm._l((12),function(i){return _c('vue-marquee-slide',{key:i},[_c('span',{staticClass:"logop"},[_c('svg',{attrs:{"viewBox":"0 0 181 54","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"id":"logo_melborp_wrap","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"logo_melborp","fill":"#fff"}},[_c('path',{attrs:{"id":"logo_m","d":"M0,11.8998 L2.27,11.8998 L2.27,18.1558 L2.386,18.1558 C2.89,16.1388 4.034,14.4898 5.819,13.2088 C7.623,11.9098 9.669,11.2408 11.958,11.2018 C13.432,11.2018 14.722,11.3758 15.827,11.7258 C16.913,12.0938 17.835,12.5888 18.591,13.2088 C20.046,14.5278 20.919,16.0218 21.21,17.6898 L21.327,17.6898 C22.994,13.4028 26.233,11.2408 31.044,11.2018 C33.895,11.2018 36.194,12.0158 37.939,13.6458 C39.685,15.3528 40.577,18.0098 40.616,21.6178 L40.616,42.5368 L38.376,42.5368 L38.376,21.5588 C38.376,19.6198 38.094,18.0488 37.532,16.8458 C36.969,15.7398 36.252,14.9258 35.379,14.4018 C34.583,13.8598 33.788,13.5098 32.993,13.3548 C32.198,13.2188 31.548,13.1508 31.044,13.1508 C28.251,13.1508 25.962,14.1108 24.178,16.0318 C22.354,17.9328 21.443,20.7258 21.443,24.4108 L21.443,42.5368 L19.173,42.5368 L19.173,21.5588 C19.173,19.6198 18.892,18.0678 18.33,16.9038 C17.786,15.7988 17.117,14.9838 16.322,14.4598 C15.527,13.8778 14.751,13.5098 13.995,13.3548 C13.199,13.2188 12.52,13.1508 11.958,13.1508 C9.669,13.1508 7.526,14.0338 5.528,15.7988 C3.433,17.6218 2.347,20.4928 2.27,24.4108 L2.27,42.5368 L0,42.5368 L0,11.8998 Z"}}),_vm._v(" "),_c('polygon',{attrs:{"id":"logo_l","points":"73.492 42.536 75.761 42.536 75.761 0 73.492 0"}}),_vm._v(" "),_c('path',{attrs:{"id":"logo_b","d":"M98.2926,39.918 C99.6696,39.045 100.7946,37.91 101.6676,36.514 C103.2976,33.546 104.1116,30.21 104.1116,26.506 C104.1116,22.975 103.1996,19.901 101.3766,17.282 C99.5536,14.625 96.7896,13.248 93.0856,13.151 C89.1286,13.19 86.1896,14.441 84.2696,16.904 C82.3686,19.368 81.4186,22.568 81.4186,26.506 C81.3786,30.404 82.2906,33.799 84.1526,36.689 C85.9756,39.676 88.9536,41.208 93.0856,41.285 C95.1216,41.285 96.8576,40.83 98.2926,39.918 L98.2926,39.918 Z M79.0906,0 L81.3596,0 L81.3596,18.417 L81.4766,18.417 C82.4266,15.993 83.9786,14.179 86.1316,12.976 C88.2646,11.793 90.5826,11.202 93.0856,11.202 C97.6236,11.241 100.9786,12.705 103.1516,15.595 C105.3046,18.504 106.3806,22.141 106.3806,26.506 C106.3416,30.113 105.8666,33.013 104.9546,35.205 C103.9666,37.436 102.7726,39.142 101.3766,40.325 C99.9406,41.489 98.4966,42.265 97.0416,42.653 C95.5286,43.06 94.2096,43.264 93.0856,43.264 C91.1456,43.225 89.4576,42.886 88.0226,42.245 C86.6066,41.606 85.4136,40.869 84.4436,40.034 C82.6586,38.134 81.6696,36.679 81.4766,35.67 L81.3596,35.67 L81.3596,42.536 L79.0906,42.536 L79.0906,0 Z"}}),_vm._v(" "),_c('path',{attrs:{"id":"logo_o","d":"M113.2495,36.9501 C115.2285,39.7631 118.1275,41.2081 121.9485,41.2851 C125.8475,41.2081 128.7865,39.7631 130.7645,36.9501 C132.7435,34.2351 133.7325,30.9961 133.7325,27.2331 C133.7325,23.4121 132.7435,20.1341 130.7645,17.3991 C128.7865,14.6641 125.8475,13.2481 121.9485,13.1511 C118.1275,13.2481 115.2285,14.6641 113.2495,17.3991 C111.1745,20.1341 110.1365,23.4121 110.1365,27.2331 C110.1365,30.9961 111.1745,34.2351 113.2495,36.9501 M111.5625,15.9151 C113.9865,12.8511 117.4495,11.2791 121.9485,11.2021 C126.5065,11.2791 129.9795,12.8511 132.3645,15.9151 C134.7895,18.9601 136.0015,22.7331 136.0015,27.2331 C136.0015,31.6741 134.7895,35.4281 132.3645,38.4921 C129.9795,41.5761 126.5065,43.1671 121.9485,43.2641 C117.4495,43.1671 113.9865,41.5761 111.5625,38.4921 C109.1185,35.4281 107.8965,31.6741 107.8965,27.2331 C107.8965,22.7331 109.1185,18.9601 111.5625,15.9151"}}),_vm._v(" "),_c('path',{attrs:{"id":"logo_p","d":"M175.5054,37.1251 C177.2894,34.4091 178.1824,31.1311 178.1824,27.2911 C178.1824,23.6251 177.3094,20.3861 175.5634,17.5731 C173.7404,14.7221 170.7824,13.2481 166.6894,13.1511 C162.6744,13.2481 159.7944,14.6841 158.0484,17.4571 C156.3034,20.2311 155.4494,23.5081 155.4884,27.2911 C155.4494,31.0151 156.2444,34.2351 157.8744,36.9501 C159.5414,39.7631 162.4804,41.2081 166.6894,41.2851 C170.6654,41.2471 173.6044,39.8591 175.5054,37.1251 L175.5054,37.1251 Z M155.4304,18.9411 L155.5464,18.9411 C156.0314,17.2341 157.1854,15.5471 159.0084,13.8781 C160.7934,12.1721 163.3534,11.2791 166.6894,11.2021 C171.3834,11.2791 174.8554,12.8701 177.1054,15.9731 C179.3364,19.0181 180.4514,22.7911 180.4514,27.2911 C180.4514,32.0041 179.3364,35.8151 177.1054,38.7251 C174.8554,41.7121 171.3834,43.2241 166.6894,43.2641 C164.1484,43.2641 161.9084,42.6821 159.9694,41.5181 C157.9704,40.3741 156.4974,38.5891 155.5464,36.1651 L155.4304,36.1651 L155.4304,53.5051 L153.1614,53.5051 L153.1614,11.9001 L155.4304,11.9001 L155.4304,18.9411 Z"}}),_vm._v(" "),_c('path',{attrs:{"id":"logo_r","d":"M147.5341,11.8997 L149.7741,11.8997 L149.7741,42.5367 L147.5341,42.5367 L147.5341,25.8067 C147.3981,23.5377 147.0591,21.7627 146.5161,20.4827 C145.9921,19.2217 145.1781,18.0487 144.0721,16.9627 C142.6371,15.6237 141.1621,14.7317 139.6501,14.2857 C138.1761,13.8977 136.8281,13.8007 135.6051,13.9947 L135.6051,11.7257 C138.4181,11.6477 140.9001,12.2687 143.0541,13.5867 C145.2451,14.9257 146.6721,16.6327 147.3301,18.7077 L147.5341,18.7077 L147.5341,11.8997 Z"}}),_vm._v(" "),_c('path',{attrs:{"id":"logo_e","d":"M68.3099,25.5447 C68.0189,22.3837 66.9229,19.5507 65.0219,17.0487 C63.1219,14.5467 60.4649,13.2477 57.0499,13.1507 C53.5009,13.2477 50.7569,14.4987 48.8169,16.9037 C46.9159,19.3287 45.9269,22.2087 45.8489,25.5447 L68.3099,25.5447 Z M43.5799,27.5227 C43.3279,22.9457 44.2979,19.1147 46.4889,16.0307 C48.7199,12.8887 52.2399,11.2787 57.0499,11.2017 C61.6089,11.2787 65.0219,12.9667 67.2919,16.2637 C69.5609,19.5217 70.6469,23.3527 70.5499,27.7557 C70.5889,32.0817 69.4639,35.7187 67.1749,38.6667 C64.9059,41.6337 61.5309,43.1657 57.0499,43.2637 C49.5829,43.1657 45.1699,39.4717 43.8129,32.1777 L46.0819,32.1777 C47.3809,38.1717 51.0379,41.2077 57.0499,41.2847 C60.8139,41.2457 63.6259,39.8407 65.4879,37.0667 C67.4079,34.3897 68.3489,31.2087 68.3099,27.5227 L43.5799,27.5227 Z"}})])])])]),_vm._v(" "),_c('span',{staticClass:"business"},[_vm._v(" Business ")]),_vm._v(" "),_c('span',{staticClass:"updaters"},[_vm._v(" Updaters ")])])}),1),_vm._ssrNode(" <svg width=\"45px\" height=\"45px\" viewBox=\"0 0 45 45\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"arrow\" data-v-f7ab425e><g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" data-v-f7ab425e><g transform=\"translate(22.374000, 22.374000) scale(-1, 1) translate(-22.374000, -22.374000) translate(1.000000, 1.000000)\" stroke=\"#FFFFFF\" stroke-width=\"1.46\" data-v-f7ab425e><line x1=\"42.748\" y1=\"42.748\" x2=\"0\" y2=\"0\" data-v-f7ab425e></line> <polyline id=\"arr\" points=\"42.3738 0.3742 0.3738 0.3742 0.3738 42.3742\" data-v-f7ab425e></polyline></g></g></svg>")],2),_vm._ssrNode(" <div class=\"capa_2\" data-v-f7ab425e></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PreloadImages.vue?vue&type=template&id=f7ab425e&scoped=true&

// EXTERNAL MODULE: ./node_modules/gsap/dist/gsap.js
var gsap = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/PreloadImages.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PreloadImagesvue_type_script_lang_js_ = ({
  data() {
    return {
      proyectos: null,
      tl_preload_salida: gsap["gsap"].timeline({
        paused: true,
        delay: 3,
        ease: gsap["Power4"].easeInOut,
        onUpdate: () => {},
        onComplete: () => {
          console.log('⏱️ PRELOAD -> tl_preload_salida onComplete');
          this.$store.commit('app/setPreload', true);
        }
      }),
      tl_preload_arrow: gsap["gsap"].timeline({
        ease: gsap["Power4"].easeInOut,
        repeat: -1,
        onUpdate: () => {},
        onComplete: () => {}
      }),
      transY: [-8, 8],
      scale: [0.6, 1.1]
    };
  },

  fetchOnServer: false,

  async fetch() {
    try {
      const home = await this.$storyapi.get(`cdn/stories/home`, {
        version: 'published',
        resolve_relations: 'page.proyectos,page.destacado'
      });
      console.log('PRELOAD HOME ', home.data.story.content.proyectos);
      this.proyectos = home.data.story.content.proyectos;
    } catch (e) {
      console.error('ERROR Home', e);
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.tl_preload_salida.play();
    });
    this.initTimelines(); // this.$Lazyload.$on(
    //   'loading',
    //   (
    //     {
    //       bindType,
    //       el,
    //       naturalHeight,
    //       naturalWidth,
    //       $parent,
    //       src,
    //       loading,
    //       error,
    //     },
    //     formCache
    //   ) => {
    //     gsap.set(el, {
    //       y: () => {
    //         const sc = (
    //           Math.random() * (this.transY[1] - this.transY[0]) +
    //           this.transY[0]
    //         ).toFixed(4)
    //         return sc
    //       },
    //       scale: () => {
    //         const sc = (
    //           Math.random() * (this.scale[1] - this.scale[0]) +
    //           this.scale[0]
    //         ).toFixed(4)
    //         return sc
    //       },
    //     })
    //   }
    // )

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
      if (el.classList.contains('marquee_proy')) {
        gsap["gsap"].to(el, {
          y: () => {
            const sc = (Math.random() * (this.transY[1] - this.transY[0]) + this.transY[0]).toFixed(4);
            return sc;
          },
          scale: () => {
            const sc = (Math.random() * (this.scale[1] - this.scale[0]) + this.scale[0]).toFixed(4);
            return sc;
          },
          autoAlpha: 1,
          duration: 0.5,
          ease: gsap["Power4"].easeInOut // onStart: () => {
          //   window.dispatchEvent(new Event('resize'))
          // },

        });
      }
    });
  },

  methods: {
    initTimelines() {
      const abierto = {
        clipPath: 'inset(0% 0% 0% 0%)' // webkitClipPath: 'inset(0% 0% 0% 0%)',

      };
      const tiempoEntrada = 1;
      const cerradoToLeft = {
        clipPath: 'inset(0% 0% 0% 100%)' // webkitClipPath: 'inset(0% 0% 0% 100%)',

      };
      this.tl_preload_salida.addLabel('salida', `+=0`);
      this.tl_preload_salida.fromTo('.capa_2', abierto, { ...cerradoToLeft,
        delay: 0,
        duration: tiempoEntrada
      }, 'salida+=0');
      this.tl_preload_salida.fromTo('.preloadp .marquee', abierto, { ...cerradoToLeft,
        duration: tiempoEntrada / 2
      }, `salida-=${tiempoEntrada * 0.1}`);
      this.tl_preload_salida.fromTo('.capa_1', abierto, { ...cerradoToLeft,
        duration: tiempoEntrada / 2
      }, `salida-=${tiempoEntrada * 0.1}`);
      this.tl_preload_arrow.fromTo('.arrow', {
        x: '-100vw',
        y: '100vw'
      }, {
        x: '100vw',
        y: '-100vw',
        delay: 0,
        duration: 2
      });
    }

  }
});
// CONCATENATED MODULE: ./components/PreloadImages.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PreloadImagesvue_type_script_lang_js_ = (PreloadImagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/PreloadImages.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(196)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PreloadImagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f7ab425e",
  "7386fda8"
  
)

/* harmony default export */ var PreloadImages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=preload-images.js.map