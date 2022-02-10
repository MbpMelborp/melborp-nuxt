exports.ids = [34];
exports.modules = {

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("706ea63f", content, true, context)
};

/***/ }),

/***/ 169:
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"icons\",\"defaultSprite\":true,\"symbols\":[\"arrow\"]}]");

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_icons_list_vue_vue_type_style_index_0_id_19facdbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_icons_list_vue_vue_type_style_index_0_id_19facdbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_icons_list_vue_vue_type_style_index_0_id_19facdbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_icons_list_vue_vue_type_style_index_0_id_19facdbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_icons_list_vue_vue_type_style_index_0_id_19facdbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "._icon-container[data-v-19facdbe]{padding:25px;max-width:1050px;margin:0 auto;box-sizing:border-box}._icon-container *[data-v-19facdbe]{box-sizing:inherit}._icon-search-wrapper[data-v-19facdbe]{margin:10px 25px}._icon-sprite-title[data-v-19facdbe]{width:100%;text-align:center;text-transform:uppercase;font-family:monospace;letter-spacing:.1em}._icon-search[data-v-19facdbe]{width:100%;height:50px;font-size:20px;text-indent:10px}._icon-preview-wrapper[data-v-19facdbe]{display:flex;flex-wrap:wrap;justify-content:center}._icon-preview[data-v-19facdbe]{width:200px;height:200px;padding:10px;text-align:center}._icon-card[data-v-19facdbe]{width:100%;height:100%;border-radius:5px;padding:5px;display:flex;align-items:center;justify-content:center;flex-direction:column;position:relative}._icon-card[data-v-19facdbe]:hover{box-shadow:0 0 3px rgba(0,0,0,.2)}._icon-name[data-v-19facdbe]{margin-top:10px;font-family:monospace;width:100%;color:#333;background:#fff;overflow:hidden;padding:2px;border-radius:3px}._icon-name-input[data-v-19facdbe]{position:absolute;width:100%;height:100%;left:0;top:0;bottom:0;right:0;opacity:0;cursor:copy}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxtjs/svg-sprite/lib/pages/icons-list.vue?vue&type=template&id=19facdbe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"_icon-container"},[_vm._ssrNode("<div class=\"_icon-search-wrapper\" data-v-19facdbe><input placeholder=\"Search Icons\""+(_vm._ssrAttr("value",(_vm.query)))+" class=\"_icon-search\" data-v-19facdbe></div> "),_vm._ssrNode("<div data-v-19facdbe>","</div>",_vm._l((_vm.filteredSprites),function(sprite){return _vm._ssrNode("<div class=\"_icon-preview-wrapper\" data-v-19facdbe>","</div>",[_vm._ssrNode("<h2 class=\"_icon-sprite-title\" data-v-19facdbe>"+_vm._ssrEscape("\n        "+_vm._s(sprite.name)+"\n      ")+"</h2> "),_vm._l((sprite.symbols),function(symbol){return _vm._ssrNode("<div class=\"_icon-preview\" data-v-19facdbe>","</div>",[_vm._ssrNode("<div class=\"_icon-card\" data-v-19facdbe>","</div>",[_vm._ssrNode("<div class=\"_icon-svg\" data-v-19facdbe>","</div>",[_c('svg-icon',{staticClass:"icon",attrs:{"name":symbol.path,"title":symbol.path,"width":_vm.size + 'px',"height":_vm.size + 'px'}})],1),_vm._ssrNode(" <code class=\"_icon-name\" data-v-19facdbe>"+_vm._ssrEscape("\n            "+_vm._s(symbol.name)+"\n          ")+"</code> <input type=\"text\" readonly=\"readonly\""+(_vm._ssrAttr("value",symbol.path))+" class=\"_icon-name-input\" data-v-19facdbe>")],2)])})],2)}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxtjs/svg-sprite/lib/pages/icons-list.vue?vue&type=template&id=19facdbe&scoped=true&

// EXTERNAL MODULE: ./assets/sprite/gen/sprites.json
var sprites = __webpack_require__(169);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxtjs/svg-sprite/lib/pages/icons-list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var icons_listvue_type_script_lang_js_ = ({
  layout: 'svg-sprite',
  props: {
    size: {
      type: Number,
      default: 60
    },
    onClick: {
      type: Function,
      default: () => () => {}
    }
  },

  data() {
    return {
      query: '',
      sprites: sprites.map(sprite => {
        const namespace = sprite.defaultSprite ? '' : `${sprite.name}/`;
        return {
          name: sprite.name,
          symbols: sprite.symbols.map(symbol => ({
            name: symbol,
            path: `${namespace}${symbol}`
          }))
        };
      })
    };
  },

  computed: {
    filteredSprites() {
      return this.sprites.map(sprite => ({ ...sprite,
        symbols: sprite.symbols.filter(s => s.path.match(this.query))
      })).filter(sprite => sprite.symbols.length);
    }

  },
  methods: {
    copy(e) {
      const el = e.target;
      el.select();
      el.setSelectionRange(0, 99999);
      document.execCommand('copy');
      this.onClick(`Icon "${e.target.value}" copied to clipboard`);
    }

  },

  head() {
    return {
      title: 'Icons list - nuxt-svg-sprite'
    };
  }

});
// CONCATENATED MODULE: ./node_modules/@nuxtjs/svg-sprite/lib/pages/icons-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_icons_listvue_type_script_lang_js_ = (icons_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxtjs/svg-sprite/lib/pages/icons-list.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(170)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_icons_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "19facdbe",
  "6258f6e4"
  
)

/* harmony default export */ var icons_list = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=34.js.map