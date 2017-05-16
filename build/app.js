/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_Zaid_nuget_packages_Fable_Core_1_0_0_narumi_917_fable_core_String__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_Zaid_nuget_packages_Fable_Core_1_0_0_narumi_917_fable_core_String___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_Zaid_nuget_packages_Fable_Core_1_0_0_narumi_917_fable_core_String__);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_Zaid_nuget_packages_Fable_Core_1_0_0_narumi_917_fable_core_String__["fsFormat"])("Hello from Node")(function (x) {
  console.log(x);
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ReferenceError: Unknown plugin \"transform-runtime\" specified in \"base\" at 4, attempted to resolve relative to \"C:\\\\Users\\\\Zaid\\\\.nuget\\\\packages\\\\Fable.Core\\\\1.0.0-narumi-917\\\\fable-core\"\n    at C:\\Projects\\Projects\\F#\\FableNode\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:180:17\n    at Array.map (native)\n    at Function.normalisePlugins (C:\\Projects\\Projects\\F#\\FableNode\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:158:20)\n    at OptionManager.mergeOptions (C:\\Projects\\Projects\\F#\\FableNode\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:234:36)\n    at OptionManager.init (C:\\Projects\\Projects\\F#\\FableNode\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:368:12)\n    at File.initOptions (C:\\Projects\\Projects\\F#\\FableNode\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:212:65)\n    at new File (C:\\Projects\\Projects\\F#\\FableNode\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:135:24)\n    at Pipeline.transform (C:\\Projects\\Projects\\F#\\FableNode\\node_modules\\babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (C:\\Projects\\Projects\\F#\\FableNode\\node_modules\\babel-loader\\lib\\index.js:46:20)\n    at Object.module.exports (C:\\Projects\\Projects\\F#\\FableNode\\node_modules\\babel-loader\\lib\\index.js:163:20)");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_App_fs__ = __webpack_require__(0);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__src_App_fs__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__src_App_fs__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map