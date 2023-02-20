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

/***/ 8901:
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABuSURBVEiJ7dSxDoAgDATQK99MZ+lM//kcjAlxqwYStTfBUN5AeoJgeu9NRDYAIGmq2iLzJQqe2PU8DXyaBBNM8IegjN04OyStrMKAo3vX/yFJW4WRNIkOuTvHe6019Mb31yLBBBN8ITh2750e3gHtNCJXYSkBDgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 4905:
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABZSURBVEiJ7dWxCsAgEAPQnF9+fnmciiiCxFKXJvvl4RIBMSSTPanexwHIoSBC6igq+DYGDRr8Izht4zZzgXJLMmNV8ukLb2IPWC961d+TQYMGDQIYt1fe4QbAE3vIRtlttwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 5603:
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIwSURBVEiJvZa/axRBFMc/79bKVraJKcRqF3NziIoRezshrCmMt9H/IAGx2karBevkP8jtKgjpI+kONInYbAJ7ucI+oFhZZsYid8smuf115vzCwO7y5n3ezL4384Qa8n1/CXgC3AduAzeAU2PMiYgMgW9a689xHO9W+ZIK0BtgHZivExgwBDZ6vd5mI2C3210UkU3gXk3QRe1rrdfiOD6oBK6urj43xnyYEnTeucjK1tbWx/w3a1awkZY7nc5xkiRHWRDjh9E2fr1CWCZjzKMoivYAWhn57J/NRHnfFmTZ+GpWQGBOKfUnSZIv4xWuF1l6nkcQBJUegyDA87wyk3WA1qioC+vMcRxc1y2FBkGA67o4jlMGnPd9f8lSSq0BD4qs+v0+rutmo9/vT4SlaUoYhmVAgN+WUuotcLPMqgjaEAaA+L7/k7OzsVJ5ANAYBvyylFLv61rnV2rbdlMYwPUWcNpkxj/qtAWc1LXOb2mappXZe1HGmBNLKfUUuNUEFoZhZfZOkoh8t5RSd4DHTWBjTQH9ZC0sLBgRedkUNg1Ua/3OOjw8/KGUekFBadi2DVCajWPoYDDISmaChlEUvb42etkYjUva3t4uBOVVozw2IHcf+r6/Bzys5b259nu93iLk7kOt9dqMYOd8Z8A4jg9EZOWqYSKykm+mzvU0SZIcdTqdY2D5qmClTdQY2m63d0TkLjA3JWtfa/0siqKdS0GUzfpvjfAE8MRWn7NzuFGr/xehHAgi9QaYnQAAAABJRU5ErkJggg=="

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
  "default": function() { return /* binding */ components_Upload; }
});

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(1895);
// EXTERNAL MODULE: ./lib/static/image/ic_add.png
var ic_add = __webpack_require__(8901);
var ic_add_default = /*#__PURE__*/__webpack_require__.n(ic_add);
// EXTERNAL MODULE: ./lib/static/image/ic_white_add.png
var ic_white_add = __webpack_require__(4905);
var ic_white_add_default = /*#__PURE__*/__webpack_require__.n(ic_white_add);
// EXTERNAL MODULE: ./lib/static/image/mask_close_icon.png
var mask_close_icon = __webpack_require__(5603);
var mask_close_icon_default = /*#__PURE__*/__webpack_require__.n(mask_close_icon);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./lib/components/Upload/index.vue?vue&type=script&setup=true&lang=js





const _withScopeId = n => ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.pushScopeId)("data-v-7e17d0fc"), n = n(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.popScopeId)(), n);
const _hoisted_1 = {
  key: 0,
  class: "h-upload-ic-add-box"
};
const _hoisted_2 = {
  key: 0,
  src: (ic_add_default()),
  class: "h-upload-ic-add"
};
const _hoisted_3 = {
  key: 1,
  src: (ic_white_add_default()),
  class: "h-upload-ic-add"
};
const _hoisted_4 = ["onClick"];
const _hoisted_5 = ["src"];
const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementVNode)("img", {
  src: (mask_close_icon_default()),
  class: "h-mask-close"
}, null, -1));

/* harmony default export */ var Uploadvue_type_script_setup_true_lang_js = ({
  __name: 'index',
  props: {
    theme: {
      type: String,
      default: "light"
    },
    pictureCardSize: {
      type: String,
      default: "60px"
    },
    plusIconSize: {
      type: String,
      default: "14px"
    },
    radius: {
      type: String,
      default: "4px"
    }
  },
  emits: ["preview", "change"],
  setup(__props, {
    emit
  }) {
    const props = __props;
    (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.useCssVars)(_ctx => ({
      "6502e3f6": (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.unref)(radius),
      "4cc55e4a": (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.unref)(setBorder),
      "51d97a3c": (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.unref)(pictureCardSize),
      "2e3f39f2": (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.unref)(plusIconSize)
    }));

    /**
     * props，用于声明一个组件的 props。
     * @theme {string} 主题.
     * @pictureCardSize {string} 设置照片墙卡片大小.
     * @plusIconSize {string} 设置照片墙卡片加号大小.
     * @radius {string} 设置圆角大小.
     */

    const attrs = (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.useAttrs)();
    const visible = (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.ref)(false);
    const previewImage = (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.ref)("");
    const url = (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.ref)("");
    const pictureCardSize = props.pictureCardSize;
    const plusIconSize = props.plusIconSize;
    const radius = props.radius;
    const isShowAdd = (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.ref)(true);
    (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.watch)(() => attrs.fileList, val => {
      const isReady = val.every(item => item.status !== "uploading");
      if (val && isReady) {
        isShowAdd.value = val.length < (attrs.maxCount || 1);
      }
    });

    /**
     * setBorder，设置圆角。
     */
    const setBorder = (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.computed)(() => {
      switch (props.theme) {
        case "light":
          return "0";
        case "dark":
          return "1px solid rgba(255, 255, 255, 0.2)";
        default:
          return "0";
      }
    });
    function getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }
    const handlePreview = async file => {
      visible.value = true;
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      previewImage.value = file.url || file.preview;
      emit("preview", previewImage.value, file);
    };
    const handleChange = info => {
      emit("change", info);
      (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.nextTick)(() => {
        const actions = [...document.getElementsByClassName("ant-upload-list-item-actions")][0];
        if (actions) {
          const previewText = [...document.getElementsByClassName("ant-upload-list-item-actions")][0].children[0];
          const removeText = [...document.getElementsByClassName("ant-upload-list-item-actions")][0].children[1];
          previewText.title = "预览";
          removeText.title = "删除";
        }
      });
    };
    const clickClose = () => {
      visible.value = false;
    };
    return (_ctx, _cache) => {
      const _component_a_upload = (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.resolveComponent)("a-upload");
      return (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.Fragment, null, [(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createVNode)(_component_a_upload, (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.mergeProps)({
        radius: props.radius
      }, _ctx.$attrs, {
        "picture-card-size": props.pictureCardSize,
        "plus-icon-size": props.plusIconSize,
        onPreview: handlePreview,
        onChange: handleChange,
        class: "h-upload"
      }), {
        default: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.withCtx)(() => [(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.unref)(attrs).listType === 'picture-card' && isShowAdd.value ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("div", _hoisted_1, [props.theme === 'light' ? ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("img", _hoisted_2)) : ((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.openBlock)(), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementBlock)("img", _hoisted_3))])) : (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createCommentVNode)("", true)]),
        _: 1
      }, 16, ["radius", "picture-card-size", "plus-icon-size"]), (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.withDirectives)((0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementVNode)("div", {
        class: "h-mask",
        onClick: (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.withModifiers)(clickClose, ["stop"])
      }, [(0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.createElementVNode)("img", {
        src: previewImage.value,
        class: "h-mask-big-img"
      }, null, 8, _hoisted_5), _hoisted_6], 8, _hoisted_4), [[external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.vShow, visible.value]])], 64);
    };
  }
});
;// CONCATENATED MODULE: ./lib/components/Upload/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./lib/components/Upload/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Uploadvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-7e17d0fc"]])

/* harmony default export */ var Upload = (__exports__);
;// CONCATENATED MODULE: ./lib/components/Upload/index.js

Upload.install = Vue => {
  Vue.component('h-upload', Upload);
};
/* harmony default export */ var components_Upload = (Upload);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});