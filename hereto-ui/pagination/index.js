(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("hereto-ui", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["hereto-ui"] = factory(require("vue"));
	else
		root["hereto-ui"] = factory(root["Vue"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__1895__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3744:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 1895:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1895__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_Pagination; }
});

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(1895);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./lib/components/Pagination/index.vue?vue&type=script&setup=true&lang=js

const _withScopeId = n => (_pushScopeId("data-v-3931c3b2"), n = n(), _popScopeId(), n);
const _hoisted_1 = {
  class: "h-pagination-container"
};
const _hoisted_2 = {
  key: 0,
  class: "h-pagination-total"
};
/* harmony default export */ var Paginationvue_type_script_setup_true_lang_js = ({
  __name: 'index',
  props: {
    total: {
      type: Number,
      default: () => 0
    },
    showTotal: {
      type: Boolean,
      default: () => true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_a_pagination = (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.resolveComponent)("a-pagination");
      return (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", _hoisted_1, [props.showTotal ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", _hoisted_2, [(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createTextVNode)("总计 "), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementVNode)("span", null, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(props.total), 1), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createTextVNode)(" 条")])) : (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createCommentVNode)("", true), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createVNode)(_component_a_pagination, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.mergeProps)(_ctx.$attrs, {
        "show-quick-jumper": "",
        total: props.total
      }), null, 16, ["total"])]);
    };
  }
});
;// CONCATENATED MODULE: ./lib/components/Pagination/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./lib/components/Pagination/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Paginationvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-3931c3b2"]])

/* harmony default export */ var Pagination = (__exports__);
;// CONCATENATED MODULE: ./lib/components/Pagination/index.js

Pagination.install = Vue => {
  Vue.component('h-pagination', Pagination);
};
/* harmony default export */ var components_Pagination = (Pagination);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});