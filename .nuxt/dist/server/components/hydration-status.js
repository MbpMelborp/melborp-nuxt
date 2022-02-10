exports.ids = [10];
exports.modules = {

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = void 0;
var _default = {
  name: 'HydrationStatus',

  render(h) {
    this.$parent.$once('hook:mounted', () => {
      this.$forceUpdate();
    });
    return h('span', {
      key: this.$parent._isMounted ? 'hydrated' : 'unhydrated'
    }, this.$parent._isMounted ? 'hydrated' : 'unhydrated');
  }

};
module.exports = _default;

/***/ })

};;
//# sourceMappingURL=hydration-status.js.map