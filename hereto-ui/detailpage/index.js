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
/******/ 	var __webpack_modules__ = ({

/***/ 6035:
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADCSURBVFiF7ZYxEoMgFEQXq3gDbhM8VjIWKZzJseQ43ACrkCpFJoHPAqOFbPsH3hOZVaDn7FHsAn3bViiYv8MA656XidlvYAWicGnWTKBxukAXOFxA7AF930IVYQiTW0YbHSfhszdVcAApuCjgltFiCFSzfe8ur82qYj17g5daWbj09NkCtEQmnBLIliDgtIAoQcKLBKISBfBigR+JQniTtOiKcyd5B6q/A58k7ki0ivd6t8IJ+AeCutZC2D/lnp5d8wYU/03wvJ9QowAAAABJRU5ErkJggg=="

/***/ }),

/***/ 3744:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
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

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_DetailPage; }
});

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(1895);
// EXTERNAL MODULE: ./lib/static/image/download_icon.png
var download_icon = __webpack_require__(6035);
var download_icon_default = /*#__PURE__*/__webpack_require__.n(download_icon);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./lib/components/DetailPage/index.vue?vue&type=script&setup=true&lang=js


const _withScopeId = n => (_pushScopeId("data-v-304e3cd4"), n = n(), _popScopeId(), n);
const _hoisted_1 = {
  class: "h-detail-page"
};
const _hoisted_2 = {
  key: 0,
  class: "h-detail-page-value"
};
const _hoisted_3 = {
  key: 1,
  class: "h-detail-page-value"
};
const _hoisted_4 = {
  key: 2,
  class: "h-detail-page-multiline"
};
const _hoisted_5 = {
  key: 1
};
const _hoisted_6 = {
  key: 2
};
const _hoisted_7 = {
  key: 3
};
const _hoisted_8 = {
  key: 4
};
const _hoisted_9 = ["onClick"];
/* harmony default export */ var DetailPagevue_type_script_setup_true_lang_js = ({
  __name: 'index',
  props: {
    data: {
      type: Array,
      default: () => {
        return [{
          label: '',
          value: ''
        }];
      }
    },
    theme: {
      type: String,
      default: 'transparent'
    }
  },
  emits: ['click'],
  setup(__props, {
    emit
  }) {
    const props = __props;
    const clickBtn = val => {
      emit('click', val);
    };
    return (_ctx, _cache) => {
      const _component_h_preview_img = (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.resolveComponent)("h-preview-img");
      return (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", _hoisted_1, [(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementVNode)("ul", null, [((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(true), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.Fragment, null, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.renderList)(props.data, (item, index) => {
        return (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("li", {
          key: index,
          class: "h-detail-page-li"
        }, [(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementVNode)("div", {
          class: "h-detail-page-label",
          style: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.normalizeStyle)({
            color: item.labelColor,
            fontSize: item.labelSize,
            width: item.labelWidth
          })
        }, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(item.label), 5), item.type === 'img' ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", _hoisted_2, [(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createVNode)(_component_h_preview_img, {
          url: item.value,
          class: "h-detail-page-img",
          theme: props.theme
        }, null, 8, ["url", "theme"])])) : item.type === 'custom' ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", _hoisted_3, [(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.renderSlot)(_ctx.$slots, "custom", {
          row: item
        })])) : item.type === 'multiline' && item.list.length > 0 ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", _hoisted_4, [((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(true), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.Fragment, null, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.renderList)(item.list, (val, ind) => {
          return (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", {
            class: "value-list",
            key: ind
          }, [(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementVNode)("div", {
            class: "label",
            style: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.normalizeStyle)({
              color: val.labelColor,
              fontSize: val.labelSize
            })
          }, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(val.label), 5), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementVNode)("div", {
            class: "value",
            style: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.normalizeStyle)({
              color: val.valueColor,
              fontSize: val.valueSize,
              marginLeft: val.marginLeft,
              fontWeight: val.valueWeight
            })
          }, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(val.value), 5), val.value2 ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", {
            key: 0,
            class: "value value2",
            style: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.normalizeStyle)({
              color: val.valueColor,
              fontSize: val.valueSize,
              marginLeft: val.marginLeft,
              fontWeight: val.value2Weight
            })
          }, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(val.value2), 5)) : (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createCommentVNode)("", true), val.value3 ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", {
            key: 1,
            class: "value value3",
            style: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.normalizeStyle)({
              color: val.valueColor,
              fontSize: val.valueSize,
              marginLeft: val.marginLeft,
              fontWeight: val.value3Weight
            })
          }, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(val.value3), 5)) : (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createCommentVNode)("", true), val.value4 ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", {
            key: 2,
            class: "value value4",
            style: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.normalizeStyle)({
              color: val.valueColor,
              fontSize: val.valueSize,
              marginLeft: val.marginLeft,
              fontWeight: val.value4Weight
            })
          }, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(val.value4), 5)) : (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createCommentVNode)("", true), val.value5 ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", {
            key: 3,
            class: "value value5",
            style: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.normalizeStyle)({
              color: val.valueColor,
              fontSize: val.valueSize,
              marginLeft: val.marginLeft,
              fontWeight: val.value5Weight
            })
          }, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(val.value5), 5)) : (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createCommentVNode)("", true), val.value6 ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", {
            key: 4,
            class: "value value6",
            style: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.normalizeStyle)({
              color: val.valueColor,
              fontSize: val.valueSize,
              marginLeft: val.marginLeft,
              fontWeight: val.value6Weight
            })
          }, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(val.value6), 5)) : (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createCommentVNode)("", true)]);
        }), 128))])) : ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", {
          key: 3,
          class: "h-detail-page-value",
          style: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.normalizeStyle)({
            color: item.valueColor,
            fontSize: item.valueSize
          })
        }, [(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createTextVNode)((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(item.value) + " ", 1), item.value2 ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("span", {
          key: 0,
          style: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.normalizeStyle)({
            paddingLeft: item.marginLeft
          })
        }, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(item.value2), 5)) : (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createCommentVNode)("", true), item.value3 ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("span", _hoisted_5, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(item.value3), 1)) : (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createCommentVNode)("", true), item.value4 ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("span", _hoisted_6, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(item.value4), 1)) : (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createCommentVNode)("", true), item.value5 ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("span", _hoisted_7, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(item.value5), 1)) : (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createCommentVNode)("", true), item.value6 ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("span", _hoisted_8, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.toDisplayString)(item.value6), 1)) : (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createCommentVNode)("", true), item.type === 'btn' ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", {
          key: 5,
          style: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.normalizeStyle)({
            marginLeft: item.marginLeft
          }),
          onClick: $event => clickBtn(item.value),
          class: "h-detail-page-btn-box"
        }, [(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementVNode)("img", {
          src: (download_icon_default()),
          style: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.normalizeStyle)({
            width: item.btnSize,
            height: item.btnSize
          })
        }, null, 4), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementVNode)("span", {
          style: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.normalizeStyle)({
            fontSize: item.downloadTextSize
          })
        }, "下载", 4)], 12, _hoisted_9)) : (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createCommentVNode)("", true)], 4))]);
      }), 128))])]);
    };
  }
});
;// CONCATENATED MODULE: ./lib/components/DetailPage/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./lib/components/DetailPage/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(DetailPagevue_type_script_setup_true_lang_js, [['__scopeId',"data-v-304e3cd4"]])

/* harmony default export */ var DetailPage = (__exports__);
;// CONCATENATED MODULE: ./lib/components/DetailPage/index.js

DetailPage.install = Vue => {
  Vue.component('h-detail-page', DetailPage);
};
/* harmony default export */ var components_DetailPage = (DetailPage);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});