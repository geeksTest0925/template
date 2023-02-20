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
  "default": function() { return /* binding */ components_Select; }
});

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(1895);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./lib/components/Select/index.vue?vue&type=script&setup=true&lang=js


const _withScopeId = n => (_pushScopeId("data-v-754e4094"), n = n(), _popScopeId(), n);
const _hoisted_1 = {
  class: "h-select-container"
};
const _hoisted_2 = {
  key: 0,
  class: "h-select-asterisk"
};

/**
 * props，用于声明一个组件的 props。
 * @style {Object}  提供了一种改变 select 元素的样式。
 * @bordered {Boolean} 是否有边框
 * @emptyStyle {Object} 提供了一种改变空状态时元素的样式（包含图片宽高、字体大小）。
 */

/* harmony default export */ var Selectvue_type_script_setup_true_lang_js = ({
  __name: 'index',
  props: {
    bordered: {
      type: Boolean,
      default: () => true
    },
    emptyStyle: {
      type: Object,
      default: () => {
        return {
          width: '60px',
          fontSize: '12px',
          margin: '0',
          textAlign: 'center',
          color: 'rgb(102, 102, 102)'
        };
      }
    },
    required: {
      type: Boolean,
      default: () => false
    }
  },
  setup(__props) {
    const props = __props;
    (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.useCssVars)(_ctx => ({
      "4eca8ed4": (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.unref)(selectorPadding),
      "83a85506": (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.unref)(selectBg)
    }));
    const bordered = (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.ref)(props.bordered);
    const isRequired = (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.ref)(props.required);
    const selectBg = bordered.value ? 'transparent' : '#F5F7FA';
    const selectorPadding = isRequired.value ? '25px' : '11px';
    return (_ctx, _cache) => {
      const _component_h_empty = (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.resolveComponent)("h-empty");
      const _component_a_select = (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.resolveComponent)("a-select");
      return (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", _hoisted_1, [props.required ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", _hoisted_2, "*")) : (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createCommentVNode)("", true), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createVNode)(_component_a_select, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.mergeProps)({
        ref: "select"
      }, _ctx.$attrs, {
        class: "h-select",
        dropdownClassName: "h-select-dropdown",
        dropdownStyle: {
          borderRadius: '6px'
        },
        bordered: bordered.value
      }), {
        notFoundContent: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.withCtx)(() => [(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createVNode)(_component_h_empty, {
          theme: "light",
          style: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.normalizeStyle)(props.emptyStyle)
        }, null, 8, ["style"])]),
        _: 1
      }, 16, ["bordered"])]);
    };
  }
});
;// CONCATENATED MODULE: ./lib/components/Select/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./lib/components/Select/index.vue



;



const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Selectvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-754e4094"]])

/* harmony default export */ var Select = (__exports__);
;// CONCATENATED MODULE: ./lib/components/Select/index.js

Select.install = Vue => {
  Vue.component('h-select', Select);
};
/* harmony default export */ var components_Select = (Select);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});