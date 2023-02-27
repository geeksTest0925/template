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
  "default": function() { return /* binding */ components_ModalConfirm; }
});

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(1895);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./lib/components/ModalConfirm/index.vue?vue&type=script&setup=true&lang=js

const _withScopeId = n => ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.pushScopeId)("data-v-35c8792e"), n = n(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.popScopeId)(), n);
const _hoisted_1 = {
  key: 0,
  class: "h-modal-confirm-container"
};
const _hoisted_2 = {
  class: "h-modal-confirm-header"
};
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementVNode)("div", {
  class: "h-modal-confirm-icon"
}, null, -1));
const _hoisted_4 = {
  class: "h-modal-confirm-title"
};
/* harmony default export */ var ModalConfirmvue_type_script_setup_true_lang_js = ({
  __name: 'index',
  props: {
    title: {
      type: String,
      default: () => ''
    },
    visible: {
      type: Boolean,
      default: () => true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.Fragment, null, [(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createTextVNode)((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(props.visible) + " ", 1), props.visible ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", _hoisted_1, [(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementVNode)("div", _hoisted_4, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(props.title), 1)])])) : (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createCommentVNode)("", true)], 64);
    };
  }
});
;// CONCATENATED MODULE: ./lib/components/ModalConfirm/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./lib/components/ModalConfirm/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ModalConfirmvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-35c8792e"]])

/* harmony default export */ var ModalConfirm = (__exports__);
;// CONCATENATED MODULE: ./lib/components/ModalConfirm/confirm.js


// 准备一个DOM容器
const div = document.createElement('div');
div.setAttribute('class', 'h-container');
document.body.appendChild(div);
const confirm_confirm = options => {
  const vnode = (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.h)(ModalConfirm, options);
  (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.render)(vnode, div);
};
const success = confirm_confirm.success = options => {
  return confirm_confirm({
    title: options.title,
    visible: true
  });
};
;// CONCATENATED MODULE: ./lib/components/ModalConfirm/index.js


ModalConfirm.success = options => {
  return success(options);
};
/* harmony default export */ var components_ModalConfirm = (ModalConfirm);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});