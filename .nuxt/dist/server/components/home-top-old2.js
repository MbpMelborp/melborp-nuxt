exports.ids = [9,3,5];
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


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ea42e96c", content, true, context)
};

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeTop_old_2_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeTop_old_2_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeTop_old_2_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeTop_old_2_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeTop_old_2_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".image_back img{height:100vh;}.nav_home *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.home_top{display:grid;grid-template-columns:[l1] 5vw [m1] auto auto auto [m2] 5vw [r1];grid-template-rows:[t1]5vh auto 1em [b1];grid-gap:0;grid-template-areas:\". . . . .\" \". welcome welcome welcome .\" \". . . . .\";height:100vh;width:100vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(5, 9, 15, var(--tw-bg-opacity));}.home_top_welcome{grid-area:welcome;display:grid;grid-template-columns:[l1] auto auto auto [r1];grid-template-rows:[t1] auto auto auto auto [b1];grid-gap:0;grid-template-areas:\". . . .\" \"welcome welcome welcome welcome\" \"welcome welcome welcome welcome\" \". . . .\";z-index:2}.home_top_welcome{margin-left:auto;margin-right:auto;}.home_top_welcome{width:100%;}.home_top_welcome{max-width:1920px;}.home_top_welcome{align-items:center;}.home_top_welcome{align-self:center;}.home_top_welcome{justify-self:start;}.home_top_welcome_nav{grid-area:welcome;}.home_top_welcome_nav .nav_home{width:100%;}.home_top_welcome_nav .nav_home h1{display:block;}.home_top_welcome_nav .nav_home h1{width:100%;}.home_top_welcome_nav .nav_home h1 div{--fontSize:78px;font-size:var(--fontSize)}.home_top_welcome_nav .nav_home h1 div{width:100%;}.home_top_welcome_nav .nav_home h1 div{line-height:1;}.home_top_welcome_nav .nav_home .dest{margin-bottom:.5em;}.home_top_welcome_nav .nav_home .dest span{line-height:.75em;letter-spacing:-.02em;@include font-size(10rem !important)}@media (max-width:768px){.home_top_welcome_nav .nav_home .dest span{@include font-size(12rem !important)}}.home_top .image_back{grid-column-start:l1;grid-column-end:r1;grid-row-start:t1;grid-row-end:b1;z-index:1;}.home_top .image_back img{height:100vh;width:100vw;display:block;-o-object-fit:cover;object-fit:cover}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/HomeTop_old_2.vue?vue&type=template&id=3998ef76&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home_top",attrs:{"data-scroll-section":"","data-scroll-call":"section_home"}},[_vm._ssrNode("<div class=\"home_top_welcome\">","</div>",[_vm._ssrNode("<div class=\"home_top_welcome_nav\">","</div>",[_vm._ssrNode("<div class=\"nav_home\">","</div>",[_vm._ssrNode("<h1>","</h1>",[_c('div',{directives:[{name:"split-characters",rawName:"v-split-characters"}],ref:"business",staticClass:"h-business"},[_vm._ssrNode("\n            Business\n          ")]),_vm._ssrNode(" "),_c('div',{directives:[{name:"split-characters",rawName:"v-split-characters"}],ref:"updaters",staticClass:"h-updaters"},[_vm._ssrNode("\n            Updaters\n          ")])],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div data-scroll data-scroll-call=\"index_home\" data-scroll-repeat=\"true\" data-scroll-speed=\"-1\" data-scroll-position=\"top\" class=\"image_back\">","</div>",[(_vm.animacion)?_c('HomeBkg',{attrs:{"story":_vm.story}}):_c('HomeBkgImage',{attrs:{"story":_vm.story}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HomeTop_old_2.vue?vue&type=template&id=3998ef76&

// EXTERNAL MODULE: ./node_modules/gsap/dist/gsap.js
var gsap = __webpack_require__(7);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./components/HomeBkg.vue + 4 modules
var HomeBkg = __webpack_require__(110);

// EXTERNAL MODULE: ./components/HomeBkgImage.vue + 4 modules
var HomeBkgImage = __webpack_require__(92);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/HomeTop_old_2.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // COMPONENS



/* harmony default export */ var HomeTop_old_2vue_type_script_lang_js_ = ({
  components: {
    HomeBkg: HomeBkg["default"],
    HomeBkgImage: HomeBkgImage["default"]
  },
  props: {
    story: {
      type: Object,
      default: null
    },
    init: {
      type: Object,
      default: null
    },
    animacion: {
      type: Boolean,
      default: null
    }
  },

  data() {
    console.log('👌 HOMETOP -> data', this.$store.getters['app/getLoad']);
    return {
      tl_home: gsap["gsap"].timeline({
        paused: true,
        ease: gsap["Expo"].easeOut
      }),
      tl_work: gsap["gsap"].timeline({
        paused: true,
        ease: gsap["Expo"].easeOut
      }),
      tl_about: gsap["gsap"].timeline({
        paused: true,
        ease: gsap["Expo"].easeOut
      }),
      tl_init: gsap["gsap"].timeline({
        paused: false,
        delay: this.$store.getters['app/getLoad'] == null ? 3 : 0,
        ease: gsap["Power4"].easeInOut
      }),
      weight: [100, 900, 5],
      width: [20, 160, 10],
      observer: null
    };
  },

  computed: {
    getSection() {
      return this.$store.getters.getSection;
    },

    ...Object(external_vuex_["mapGetters"])({
      home: 'app/getHome'
    })
  },

  mounted() {
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
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'app/setHome') {
        gsap["gsap"].set('.home_top_welcome_title, .dest span', {
          color: this.home.texto_home
        });
        this.tl_home.to('.nav_home h1 span', {
          '--font-weight': gsap["gsap"].utils.random(this.weight[0], this.weight[1], this.weight[2]),
          '--font-width': gsap["gsap"].utils.random(this.width[0], this.width[1], this.width[2]),
          color: this.home.texto_home_hover,
          duration: 0.2,
          stagger: {
            each: 0.05,
            from: 'edges'
          }
        });
      }
    });
    this.$nextTick(() => {
      this.tl_init.from('.h-business', {
        x: '-100vw',
        scaleX: 2,
        duration: 1
      });
      this.tl_init.from('.h-updaters', {
        x: '150vw',
        scaleX: 2,
        duration: 1
      }, '-=0.6');
      const elements = document.querySelectorAll('.nav_home div');
      elements.forEach(element => this.setText(element));
    });
  },

  destroyed() {
    this.tl_init.kill();
  },

  methods: {
    calcTextSize() {
      const text = this.$refs.business;
      const parentContainerWidth = text.parentNode.clientWidth;
      const currentTextWidth = text.scrollWidth;
      const currentFontSize = parseInt(window.getComputedStyle(text).fontSize);
      const newValue = Math.min(Math.max(16, parentContainerWidth / currentTextWidth * currentFontSize), 500);
      console.log('FONT_SIZE', currentTextWidth, currentTextWidth, newValue);
      text.style.setProperty('--fontSize', newValue + 'px');
    },

    setText(element) {
      const fontWeight = gsap["gsap"].utils.random(this.weight[0], this.weight[1], this.weight[2]);
      const fontWidth = gsap["gsap"].utils.random(this.width[0], this.width[1], this.width[2]);
      gsap["gsap"].set(element, {
        fontVariationSettings: '"wght" var(--font-weight, ' + fontWeight + '), "wdth" var(--font-width, ' + fontWidth + '), "ital" 0',
        '--font-weight': fontWeight,
        '--font-width': fontWidth
      });
    },

    textHover(evt) {
      if (evt === 'home') {
        this.tl_home.play();
      }

      if (evt === 'work') {
        this.tl_work.play();
      }

      if (evt === 'about') {
        this.tl_about.play();
      }
    },

    textLeave(evt) {
      if (evt === 'home') {
        this.tl_home.pause().reverse();
      }

      if (evt === 'work') {
        this.tl_work.pause().reverse();
      }

      if (evt === 'about') {
        this.tl_about.pause().reverse();
      }
    },

    onClassChange(classAttrValue) {
      const classList = classAttrValue.split(' ');

      if (classList.includes('is-inview')) {
        document.getElementById('nav_site').classList.remove('dif');
        gsap["gsap"].set('#nav_site #logo_melborp', {
          fill: this.home.nav
        });
        gsap["gsap"].set('#nav_site a', {
          color: this.home.nav
        });
      } else {
        document.getElementById('nav_site').classList.add('dif');
        gsap["gsap"].set('#nav_site #logo_melborp', {
          fill: 'white'
        });
        gsap["gsap"].set('#nav_site a', {
          color: 'white'
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./components/HomeTop_old_2.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomeTop_old_2vue_type_script_lang_js_ = (HomeTop_old_2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HomeTop_old_2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(194)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomeTop_old_2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6da249dc"
  
)

/* harmony default export */ var HomeTop_old_2 = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HomeBkg: __webpack_require__(110).default,HomeBkgImage: __webpack_require__(92).default})


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6b36d0a3", content, true, context)
};

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/HomeBkgImage.vue?vue&type=template&id=51b59bf4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"src":_vm.story.content.imagen.filename + '/m/filters:quality(10)',"data-src":_vm.story.content.imagen.filename + '/m/',"alt":"Melborp"},on:{"load":_vm.loaded}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HomeBkgImage.vue?vue&type=template&id=51b59bf4&scoped=true&

// EXTERNAL MODULE: ./node_modules/gsap/dist/gsap.js
var gsap = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/HomeBkgImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var HomeBkgImagevue_type_script_lang_js_ = ({
  props: {
    story: {
      type: Object,
      default: null
    }
  },
  methods: {
    loaded(e) {
      if (window) {
        if (!e.target.classList.contains('isLoaded') && !e.target.classList.contains('isLoading')) {
          gsap["gsap"].set(e.target, {
            clipPath: 'inset(0% 0% 100% 0%)',
            // webkitClipPath: 'inset(0% 0% 100% 0%)',
            scaleY: 1.1,
            autoAlpha: 0
          });
        } else {
          gsap["gsap"].to(e.target, {
            clipPath: 'inset(0% 0% 0% 0%)',
            // webkitClipPath: 'inset(0% 0% 0% 0%)',
            scaleY: 1,
            autoAlpha: 1,
            duration: 0.5,
            ease: gsap["Power2"].easeInOut,
            onComplete: () => {
              window.dispatchEvent(new Event('resize'));
            }
          });
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./components/HomeBkgImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomeBkgImagevue_type_script_lang_js_ = (HomeBkgImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HomeBkgImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomeBkgImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "51b59bf4",
  "aff0ac7e"
  
)

/* harmony default export */ var HomeBkgImage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkgImage_vue_vue_type_style_index_0_id_51b59bf4_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkgImage_vue_vue_type_style_index_0_id_51b59bf4_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkgImage_vue_vue_type_style_index_0_id_51b59bf4_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkgImage_vue_vue_type_style_index_0_id_51b59bf4_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkgImage_vue_vue_type_style_index_0_id_51b59bf4_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "img[data-v-51b59bf4]{-webkit-clip-path:inset(0 0 100% 0);clip-path:inset(0 0 100% 0);opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=home-top-old2.js.map