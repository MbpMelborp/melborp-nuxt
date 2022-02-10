exports.ids = [3];
exports.modules = {

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("cf4ef8fa", content, true, context)
};

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/HomeBkg.vue?vue&type=template&id=1cdc855c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"bkg_home"},[_vm._ssrNode("<div id=\"container\" data-v-1cdc855c></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HomeBkg.vue?vue&type=template&id=1cdc855c&scoped=true&

// EXTERNAL MODULE: external "three"
var external_three_ = __webpack_require__(82);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/HomeBkg.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var HomeBkgvue_type_script_lang_js_ = ({
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      geometry: null,
      texture: null,
      img: null,
      bgWidth: null,
      bgHeight: null,
      uniforms: null,
      loader: null,
      fShader: null,
      vShader: null,
      play: true,
      observer: null
    };
  },

  mounted() {
    // this.$store.subscribe((mutation, state) => {
    //   if (mutation.type === 'app/setSection') {
    //     this.play = mutation.payload === 'index_home'
    //   }
    // })
    this.ShaderLoader('./home/v1_vertexShader.vert', './home/v1_fragment.frag', this.start);
    this.observer = new MutationObserver(mutations => {
      for (const m of mutations) {
        const newValue = m.target.getAttribute(m.attributeName);
        this.$nextTick(() => {
          this.onClassChange(newValue, m.oldValue);
        });
      }
    });
    this.observer.observe(this.$refs.bkg_home, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['class']
    });
  },

  beforeDestroy() {
    this.observer.disconnect();
  },

  methods: {
    start(vertex, fragment) {
      this.fShader = fragment;
      this.vShader = vertex;
      this.init();
      this.animate();
    },

    init() {
      const container = document.getElementById('container');
      this.camera = new external_three_["Camera"]();
      this.camera.position.z = 1;
      this.scene = new external_three_["Scene"]();
      const geometry = new external_three_["PlaneBufferGeometry"](2, 2);
      this.uniforms = {
        u_time: {
          type: 'f',
          value: 1.0
        },
        u_resolution: {
          type: 'v2',
          value: new external_three_["Vector2"]()
        },
        u_mouse: {
          type: 'v2',
          value: new external_three_["Vector2"]()
        }
      };
      const material = new external_three_["ShaderMaterial"]({
        uniforms: this.uniforms,
        vertexShader: this.vShader,
        // document.getElementById('vertexShader').textContent,
        fragmentShader: this.fShader // : fragmentShader, // document.getElementById('fragmentShader').textContent,

      });
      material.needsUpdate = true;
      const mesh = new external_three_["Mesh"](geometry, material);
      this.scene.add(mesh);
      this.renderer = new external_three_["WebGLRenderer"]();
      this.renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(this.renderer.domElement);
      this.onWindowResize();
      window.addEventListener('resize', this.onWindowResize, false);
      document.onmousemove = this.mouseMove;
    },

    onWindowResize(event) {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.uniforms.u_resolution.value.x = this.renderer.domElement.width;
      this.uniforms.u_resolution.value.y = this.renderer.domElement.height;
    },

    animate() {
      if (!this.play) return;
      requestAnimationFrame(this.animate);
      this.render();
    },

    mouseMove(e) {
      this.uniforms.u_mouse.value.x = e.pageX;
      this.uniforms.u_mouse.value.y = e.pageY;
    },

    render() {
      this.uniforms.u_time.value += 0.05 * (1 + this.uniforms.u_mouse.value.x / 500);
      this.renderer.render(this.scene, this.camera);
    },

    ShaderLoader(vertexUrl, fragmentUrl, onLoad, onProgress, onError) {
      const vertexLoader = new external_three_["XHRLoader"](external_three_["DefaultLoadingManager"]);
      vertexLoader.setResponseType('text');
      vertexLoader.load(vertexUrl, function (vertexText) {
        const fragmentLoader = new external_three_["XHRLoader"](external_three_["DefaultLoadingManager"]);
        fragmentLoader.setResponseType('text');
        fragmentLoader.load(fragmentUrl, function (fragmentText) {
          onLoad(vertexText, fragmentText);
        });
      }, onProgress, onError);
    },

    onClassChange(classAttrValue) {
      const classList = classAttrValue.split(' ');

      if (classList.includes('is-inview')) {
        document.getElementById('nav_site').classList.remove('dif');
        this.play = true;

        if (this.fShader !== null) {
          this.animate();
        }
      } else {
        document.getElementById('nav_site').classList.add('dif');
        this.play = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/HomeBkg.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomeBkgvue_type_script_lang_js_ = (HomeBkgvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HomeBkg.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(130)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomeBkgvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1cdc855c",
  "395d1b2c"
  
)

/* harmony default export */ var HomeBkg = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkg_vue_vue_type_style_index_0_id_1cdc855c_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkg_vue_vue_type_style_index_0_id_1cdc855c_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkg_vue_vue_type_style_index_0_id_1cdc855c_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkg_vue_vue_type_style_index_0_id_1cdc855c_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkg_vue_vue_type_style_index_0_id_1cdc855c_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#container[data-v-1cdc855c]{height:100vh;width:100vw}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=home-bkg.js.map