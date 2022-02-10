exports.ids = [4];
exports.modules = {

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d5efc23e", content, true, context)
};

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkgAnim_vue_vue_type_style_index_0_id_27fcbacb_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkgAnim_vue_vue_type_style_index_0_id_27fcbacb_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkgAnim_vue_vue_type_style_index_0_id_27fcbacb_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkgAnim_vue_vue_type_style_index_0_id_27fcbacb_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_15_HomeBkgAnim_vue_vue_type_style_index_0_id_27fcbacb_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body[data-v-27fcbacb]{font-size:15px;margin:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;overscroll-behavior-y:none}body[data-v-27fcbacb]:after{-webkit-animation:grain-data-v-27fcbacb 6s steps(10) infinite;animation:grain-data-v-27fcbacb 6s steps(10) infinite;background-repeat:repeat;content:\"\";height:300%;left:-100%;opacity:0;pointer-events:none;position:fixed;top:-100%;transition:opacity .4s ease;width:300%;will-change:transform;z-index:3}.loaded body[data-v-27fcbacb]:after{opacity:.06}body #cdawrap[data-v-27fcbacb]{--cda-bottom:3rem;--cda-left:3rem;--cda-width:400px;--cda-footer-fontsize:initial;--cda-footer-color:hsla(0,0%,100%,0.5)}body #cdawrap a[data-v-27fcbacb]:hover{text-decoration:none;opacity:.7}img[data-v-27fcbacb]{display:block}@-webkit-keyframes grain-data-v-27fcbacb{0%{transform:translate(20%,-15%)}10%{transform:translate(-20%,-15%)}20%{transform:translate(20%,-5%)}30%{transform:translate(-20%,-5%)}40%{transform:translate(20%,5%)}50%{transform:translate(-20%,5%)}60%{transform:translate(20%,15%)}70%{transform:translate(-20%,15%)}80%{transform:translate(20%,5%)}90%{transform:translate(-20%,5%)}to{transform:translate(20%,-5%)}}@keyframes grain-data-v-27fcbacb{0%{transform:translate(20%,-15%)}10%{transform:translate(-20%,-15%)}20%{transform:translate(20%,-5%)}30%{transform:translate(-20%,-5%)}40%{transform:translate(20%,5%)}50%{transform:translate(-20%,5%)}60%{transform:translate(20%,15%)}70%{transform:translate(-20%,15%)}80%{transform:translate(20%,5%)}90%{transform:translate(-20%,5%)}to{transform:translate(20%,-5%)}}#container[data-v-27fcbacb]{height:100vh;width:100vw}.demo-1[data-v-27fcbacb]{overflow:hidden;z-index:1}.demo-1[data-v-27fcbacb],.demo-1__header[data-v-27fcbacb]{height:100%;left:0;position:fixed;top:0;width:100%}.demo-1__header[data-v-27fcbacb]{align-items:center;display:flex;flex-direction:column;justify-content:center;opacity:0;z-index:2;}.loaded .demo-1__header[data-v-27fcbacb]{opacity:1;transition:opacity .4s ease}.demo-1__title[data-v-27fcbacb]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.demo-1__description[data-v-27fcbacb]{font-size:2rem;margin-top:-1rem;opacity:.75}.demo-1__gallery[data-v-27fcbacb]{height:295rem;position:relative;visibility:hidden}@media (max-width:1200px){.demo-1__gallery[data-v-27fcbacb]{height:650rem}}.demo-1__gallery__figure[data-v-27fcbacb]{position:absolute}.demo-1__gallery__figure[data-v-27fcbacb]:first-child{height:40rem;width:70rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(2){height:50rem;left:85rem;top:30rem;width:40rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(3){height:50rem;left:15rem;top:60rem;width:60rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(4){height:30rem;right:0;top:10rem;width:50rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(5){height:60rem;right:15rem;top:55rem;width:40rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(6){height:75rem;left:5rem;top:120rem;width:57.5rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(7){height:70rem;right:0;top:130rem;width:50rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(8){height:50rem;left:85rem;top:95rem;width:40rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(9){height:65rem;left:75rem;top:155rem;width:50rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(10){height:43rem;right:0;top:215rem;width:30rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(11){height:50rem;left:70rem;top:235rem;width:80rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(12){left:0;top:210rem;height:70rem;width:50rem}@media (max-width:1200px){.demo-1__gallery__figure[data-v-27fcbacb]:first-child{height:60rem;width:100rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(2){height:110rem;left:auto;right:0;top:25rem;width:70rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(3){height:80rem;left:12rem;top:80rem;width:89rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(4){height:60rem;right:0;top:153rem;width:60rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(5){height:110rem;left:0;right:auto;top:180rem;width:70rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(6){height:135rem;left:95rem;top:230rem;width:87.5rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(7){height:110rem;left:0;right:auto;top:310rem;width:80rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(8){height:50rem;left:auto;right:0;top:385rem;width:80rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(9){height:100rem;left:110rem;top:450rem;width:70rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(10){height:50rem;left:20rem;right:auto;top:440rem;width:55rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(11){height:70rem;left:auto;right:0;top:570rem;width:70rem}.demo-1__gallery__figure[data-v-27fcbacb]:nth-child(12){left:0;top:515rem;height:100rem;width:90rem}}.demo-1__gallery__image[data-v-27fcbacb]{height:100%;left:0;-o-object-fit:cover;object-fit:cover;position:absolute;top:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/HomeBkgAnim.vue?vue&type=template&id=27fcbacb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"bkg_home"},[_vm._ssrNode("<main data-v-27fcbacb><div class=\"frame\" data-v-27fcbacb><div class=\"frame__title-wrap\" data-v-27fcbacb><h1 class=\"frame__title\" data-v-27fcbacb>Infinite WebGL Scrolling Gallery</h1> <p class=\"frame__tagline\" data-v-27fcbacb>\n          using <a href=\"https://github.com/oframe/ogl\" data-v-27fcbacb>OGL</a> with shaders\n        </p></div> <div class=\"frame__links\" data-v-27fcbacb><a href=\"https://tympanus.net/Tutorials/BreathingDots/\" data-v-27fcbacb>Previous Demo</a> <a href=\"https://tympanus.net/codrops/?p=52634\" data-v-27fcbacb>Article</a> <a href=\"https://github.com/lhbizarro/infinite-webl-gallery\" target=\"_blank\" data-v-27fcbacb>GitHub</a></div> <div class=\"frame__demos\" data-v-27fcbacb><a href=\"index.html\" class=\"frame__demo frame__demo--current\" data-v-27fcbacb>Demo 1</a> <a href=\"index2.html\" class=\"frame__demo\" data-v-27fcbacb>Demo 2</a></div></div> <div class=\"demo-1\" data-v-27fcbacb><div class=\"demo-1__header\" data-v-27fcbacb><h1 class=\"demo-1__title\" data-v-27fcbacb>Business Updaters</h1></div> <div class=\"demo-1__gallery\" data-v-27fcbacb><figure class=\"demo-1__gallery__figure\" data-v-27fcbacb><img src=\"/proy/1.jpg\" class=\"demo-1__gallery__image\" data-v-27fcbacb></figure> <figure class=\"demo-1__gallery__figure\" data-v-27fcbacb><img src=\"/proy/2.jpg\" class=\"demo-1__gallery__image\" data-v-27fcbacb></figure> <figure class=\"demo-1__gallery__figure\" data-v-27fcbacb><img src=\"/proy/3.jpg\" class=\"demo-1__gallery__image\" data-v-27fcbacb></figure> <figure class=\"demo-1__gallery__figure\" data-v-27fcbacb><img src=\"/proy/4.jpg\" class=\"demo-1__gallery__image\" data-v-27fcbacb></figure> <figure class=\"demo-1__gallery__figure\" data-v-27fcbacb><img src=\"/proy/5.jpg\" class=\"demo-1__gallery__image\" data-v-27fcbacb></figure> <figure class=\"demo-1__gallery__figure\" data-v-27fcbacb><img src=\"/proy/6.jpg\" class=\"demo-1__gallery__image\" data-v-27fcbacb></figure> <figure class=\"demo-1__gallery__figure\" data-v-27fcbacb><img src=\"/proy/7.jpg\" class=\"demo-1__gallery__image\" data-v-27fcbacb></figure> <figure class=\"demo-1__gallery__figure\" data-v-27fcbacb><img src=\"/proy/8.jpg\" class=\"demo-1__gallery__image\" data-v-27fcbacb></figure> <figure class=\"demo-1__gallery__figure\" data-v-27fcbacb><img src=\"/proy/9.jpg\" class=\"demo-1__gallery__image\" data-v-27fcbacb></figure> <figure class=\"demo-1__gallery__figure\" data-v-27fcbacb><img src=\"/proy/10.jpg\" class=\"demo-1__gallery__image\" data-v-27fcbacb></figure> <figure class=\"demo-1__gallery__figure\" data-v-27fcbacb><img src=\"/proy/11.jpg\" class=\"demo-1__gallery__image\" data-v-27fcbacb></figure> <figure class=\"demo-1__gallery__figure\" data-v-27fcbacb><img src=\"/proy/12.jpg\" class=\"demo-1__gallery__image\" data-v-27fcbacb></figure></div></div></main>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HomeBkgAnim.vue?vue&type=template&id=27fcbacb&scoped=true&

// EXTERNAL MODULE: external "ogl"
var external_ogl_ = __webpack_require__(83);

// EXTERNAL MODULE: external "normalize-wheel"
var external_normalize_wheel_ = __webpack_require__(84);
var external_normalize_wheel_default = /*#__PURE__*/__webpack_require__.n(external_normalize_wheel_);

// CONCATENATED MODULE: ./utils/math.js
function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}
// CONCATENATED MODULE: ./utils/fragment.glsl
/* harmony default export */ var fragment = ("precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 uImageSizes;\nuniform vec2 uPlaneSizes;\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec2 ratio = vec2(min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0), min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0));\n\n  vec2 uv = vec2(vUv.x * ratio.x + (1.0 - ratio.x) * 0.5, vUv.y * ratio.y + (1.0 - ratio.y) * 0.5);\n\n  gl_FragColor.rgb = texture2D(tMap, uv).rgb;\n  gl_FragColor.a = 1.0;\n}\n");
// CONCATENATED MODULE: ./utils/vertex.glsl
/* harmony default export */ var vertex = ("#define PI 3.1415926535897932384626433832795\n\nprecision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform float uStrength;\nuniform vec2 uViewportSizes;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n  newPosition.z += sin(newPosition.y / uViewportSizes.y * PI + PI / 2.0) * -uStrength;\n\n  vUv = uv;\n\n  gl_Position = projectionMatrix * newPosition;\n}\n");
// CONCATENATED MODULE: ./utils/Media.js



/* harmony default export */ var Media = (class {
  constructor({
    element,
    geometry,
    gl,
    height,
    scene,
    screen,
    viewport
  }) {
    this.element = element;
    this.image = this.element.querySelector('img');
    this.extra = 0;
    this.height = height;
    this.geometry = geometry;
    this.gl = gl;
    this.scene = scene;
    this.screen = screen;
    this.viewport = viewport;
    this.createMesh();
    this.createBounds();
    this.onResize();
  }

  createMesh() {
    const image = new Image();
    const texture = new external_ogl_["Texture"](this.gl, {
      generateMipmaps: false
    });
    image.src = this.image.src;

    image.onload = _ => {
      program.uniforms.uImageSizes.value = [image.naturalWidth, image.naturalHeight];
      texture.image = image;
    };

    const program = new external_ogl_["Program"](this.gl, {
      fragment: fragment,
      vertex: vertex,
      uniforms: {
        tMap: {
          value: texture
        },
        uPlaneSizes: {
          value: [0, 0]
        },
        uImageSizes: {
          value: [0, 0]
        },
        uViewportSizes: {
          value: [this.viewport.width, this.viewport.height]
        },
        uStrength: {
          value: 0
        }
      },
      transparent: true
    });
    this.plane = new external_ogl_["Mesh"](this.gl, {
      geometry: this.geometry,
      program
    });
    this.plane.setParent(this.scene);
  }

  createBounds() {
    this.bounds = this.element.getBoundingClientRect();
    this.updateScale();
    this.updateX();
    this.updateY();
    this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
  }

  updateScale() {
    this.plane.scale.x = this.viewport.width * this.bounds.width / this.screen.width;
    this.plane.scale.y = this.viewport.height * this.bounds.height / this.screen.height;
  }

  updateX(x = 0) {
    this.plane.position.x = -(this.viewport.width / 2) + this.plane.scale.x / 2 + (this.bounds.left - x) / this.screen.width * this.viewport.width;
  }

  updateY(y = 0) {
    this.plane.position.y = this.viewport.height / 2 - this.plane.scale.y / 2 - (this.bounds.top - y) / this.screen.height * this.viewport.height - this.extra;
  }

  update(y, direction) {
    this.updateScale();
    this.updateX();
    this.updateY(y.current);
    const planeOffset = this.plane.scale.y / 2;
    const viewportOffset = this.viewport.height / 2;
    this.isBefore = this.plane.position.y + planeOffset < -viewportOffset;
    this.isAfter = this.plane.position.y - planeOffset > viewportOffset;

    if (direction === 'up' && this.isBefore) {
      this.extra -= this.height;
      this.isBefore = false;
      this.isAfter = false;
    }

    if (direction === 'down' && this.isAfter) {
      this.extra += this.height;
      this.isBefore = false;
      this.isAfter = false;
    }

    this.plane.program.uniforms.uStrength.value = (y.current - y.last) / this.screen.width * 10;
  }
  /**
   * Events.
   */


  onResize(sizes) {
    this.extra = 0;

    if (sizes) {
      const {
        height,
        screen,
        viewport
      } = sizes;
      if (height) this.height = height;
      if (screen) this.screen = screen;

      if (viewport) {
        this.viewport = viewport;
        this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height];
      }
    }

    this.createBounds();
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--15!./components/HomeBkgAnim.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import * as Three from 'three'




/* harmony default export */ var HomeBkgAnimvue_type_script_lang_js_ = ({
  props: {
    story: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      speed: 2,
      gallery: null,
      screen: null,
      renderer: null,
      camera: null,
      scene: null,
      gl: null,
      mediasElements: null,
      planeGeometry: null,
      medias: null,
      isDown: null,
      start: null,
      viewport: null,
      direction: null,
      galleryBounds: null,
      galleryHeight: null,
      scroll: {
        ease: 0.05,
        current: 0,
        target: 0,
        last: 0
      }
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },

  beforeDestroy() {},

  methods: {
    init() {
      this.createRenderer();
      this.createCamera();
      this.createScene();
      this.createGallery();
      this.onResize(); // this.createGeometry()
      // this.createMedias()
      // this.update()
      // this.addEventListeners()
    },

    createGallery() {
      this.gallery = document.querySelector('.demo-1__gallery');
    },

    createRenderer() {
      this.renderer = new external_ogl_["Renderer"]({
        alpha: true
      });
      this.gl = this.renderer.gl;
      document.body.appendChild(this.gl.canvas);
    },

    createCamera() {
      this.camera = new external_ogl_["Camera"](this.gl);
      this.camera.fov = 45;
      this.camera.position.z = 5;
    },

    createScene() {
      this.scene = new external_ogl_["Transform"]();
    },

    createGeometry() {
      this.planeGeometry = new external_ogl_["Plane"](this.gl, {
        heightSegments: 10
      });
    },

    createMedias() {
      this.mediasElements = document.querySelectorAll('.demo-1__gallery__figure');
      this.medias = Array.from(this.mediasElements).map(element => {
        const media = new Media({
          element,
          geometry: this.planeGeometry,
          gl: this.gl,
          height: this.galleryHeight,
          scene: this.scene,
          screen: this.screen,
          viewport: this.viewport
        });
        return media;
      });
      console.log('📷 MEDIA -> createMedias', this.medias);
    },

    /**
     * Events.
     */
    onTouchDown(event) {
      this.isDown = true;
      this.scroll.position = this.scroll.current;
      this.start = event.touches ? event.touches[0].clientY : event.clientY;
    },

    onTouchMove(event) {
      if (!this.isDown) return;
      const y = event.touches ? event.touches[0].clientY : event.clientY;
      const distance = (this.start - y) * 2;
      this.scroll.target = this.scroll.position + distance;
    },

    onTouchUp(event) {
      this.isDown = false;
    },

    onWheel(event) {
      const normalized = external_normalize_wheel_default()(event);
      const speed = normalized.pixelY;
      this.scroll.target += speed * 0.5;
    },

    /**
     * Resize.
     */
    onResize() {
      this.screen = {
        height: window.innerHeight,
        width: window.innerWidth
      };
      this.renderer.setSize(this.screen.width, this.screen.height);

      try {
        this.camera.perspective({
          aspect: this.gl.canvas.width / this.gl.canvas.height
        });
      } catch (error) {
        console.error('📷 MEDIA -> error', error);
      }

      const fov = this.camera.fov * (Math.PI / 180);
      const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
      const width = height * this.camera.aspect;
      this.viewport = {
        height,
        width
      };
      this.galleryBounds = this.gallery.getBoundingClientRect();
      this.galleryHeight = this.viewport.height * this.galleryBounds.height / this.screen.height;

      if (this.medias) {
        this.medias.forEach(media => media.onResize({
          height: this.galleryHeight,
          screen: this.screen,
          viewport: this.viewport
        }));
      }
    },

    /**
     * Update.
     */
    update() {
      this.scroll.target += this.speed;
      this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);

      if (this.scroll.current > this.scroll.last) {
        this.direction = 'down';
        this.speed = 2;
      } else if (this.scroll.current < this.scroll.last) {
        this.direction = 'up';
        this.speed = -2;
      }

      if (this.medias) {
        this.medias.forEach(media => media.update(this.scroll, this.direction));
      }

      this.renderer.render({
        scene: this.scene,
        camera: this.camera
      });
      this.scroll.last = this.scroll.current;
      window.requestAnimationFrame(this.update.bind(this));
    },

    addEventListeners() {
      window.addEventListener('resize', this.onResize.bind(this));
      window.addEventListener('mousewheel', this.onWheel.bind(this));
      window.addEventListener('wheel', this.onWheel.bind(this));
      window.addEventListener('mousedown', this.onTouchDown.bind(this));
      window.addEventListener('mousemove', this.onTouchMove.bind(this));
      window.addEventListener('mouseup', this.onTouchUp.bind(this));
      window.addEventListener('touchstart', this.onTouchDown.bind(this));
      window.addEventListener('touchmove', this.onTouchMove.bind(this));
      window.addEventListener('touchend', this.onTouchUp.bind(this));
    }

  }
});
// CONCATENATED MODULE: ./components/HomeBkgAnim.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomeBkgAnimvue_type_script_lang_js_ = (HomeBkgAnimvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HomeBkgAnim.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(190)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomeBkgAnimvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "27fcbacb",
  "19afef1b"
  
)

/* harmony default export */ var HomeBkgAnim = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-bkg-anim.js.map