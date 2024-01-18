/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Data/Data.js":
/*!**********************************!*\
  !*** ./src/scripts/Data/Data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar data = {\n  // Add in custom JSON data here\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n\n//# sourceURL=webpack://vanilla-website/./src/scripts/Data/Data.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\n/* harmony import */ var _Data_Data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data/Data.js */ \"./src/scripts/Data/Data.js\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _pageSections_title_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageSections/title.js */ \"./src/scripts/pageSections/title.js\");\n\n\n\n\nfunction RenderSite() {\n  let body = document.querySelector('body');\n  let makeEle = new _utils__WEBPACK_IMPORTED_MODULE_0__.MakeElement();\n  let bodyContainer = makeEle.createEle('div', 'bodyContainer', [12, 12, 12, 12], ['bodyContain']);\n\n  /* Call in Pages here */\n  bodyContainer.append((0,_pageSections_title_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n  body.append(bodyContainer);\n}\nRenderSite();\n\n//# sourceURL=webpack://vanilla-website/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/pageSections/title.js":
/*!*******************************************!*\
  !*** ./src/scripts/pageSections/title.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/scripts/utils.js\");\n\nconst TitlePage = function (PersonInfo) {\n  const makeEle = new _utils__WEBPACK_IMPORTED_MODULE_0__.MakeElement();\n  const svgArray = ['1', '2', '3'];\n  const mainContent = makeEle.createEle('div', 'titleMainContent', null, ['titleOuterContainer', 'bodyContainerItem']);\n  const nameTitle = makeEle.createEle('div', 'titleName', null, 'titleName');\n  const titleImage = makeEle.createEle('div', 'titleImage', null, 'titleImage');\n  mainContent.append(titleImage, nameTitle);\n  return mainContent;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitlePage);\n\n//# sourceURL=webpack://vanilla-website/./src/scripts/pageSections/title.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetBacon\": () => (/* binding */ GetBacon),\n/* harmony export */   \"MakeElement\": () => (/* binding */ MakeElement),\n/* harmony export */   \"displayModal\": () => (/* binding */ displayModal)\n/* harmony export */ });\nconst GetBacon = () => {\n  const body = fetch('https://baconipsum.com/api/?type=all-meat&paras=3').then(res => res.json());\n  return body;\n};\n\n/*\n  MakeElements --- \n\n    MakeElement.createEle : Creates HTML element of your choosing\n                            \n                            Type: Takes string value, can create any element type ie \"div\", \"span\",\"img\"\n                            Name: Takes string value, sets element Id value\n                            Gridsize: Takes Array value, [xs,sm,md,lg]. Used for bootstrap's grid system\n                            Custom: Takes string value, sets custom classes\n                                    Uses an array if there is more than one custom class being called in.\n                                    \n\n*/\n\nfunction MakeElement() {\n  this.createEle = function (type, name, gridsize, custom) {\n    let newElement = document.createElement(type);\n    newElement.id = name;\n    let classStuff = ['noPadding'];\n    if (Array.isArray(custom)) {\n      custom.forEach(function (clas) {\n        classStuff.push(clas);\n      });\n    } else {\n      classStuff.push(custom);\n    }\n\n    /* \n      Gridsize needs to be depreciated or removed completely\n       No one uses bootstrap anymore. \n        Maybe able to salvage it for another type of class?\n     */\n\n    if (gridsize != null) {\n      gridsize.forEach(function (siz, i) {\n        let multiSize = ['xs', 'sm', 'md', 'lg'];\n        if (parseInt(siz) == 0) {\n          classStuff.push(`hidden-${multiSize[i]}`);\n        } else {\n          classStuff.push(`col-${multiSize[i]}-${siz}`);\n        }\n      });\n    }\n    classStuff.forEach(function (clas) {\n      newElement.classList.add(clas);\n    });\n    return newElement;\n  };\n}\nfunction displayModal(picture) {\n  let displayedModal = makeEle.createEle('div', 'displayModal', [12, 12, 12, 12], 'displayModalContainer');\n  let displayPicture = makeEle.createEle('img', 'displayPicture', [12, 12, 12, 12], 'displayModalPicture');\n  let pictureInfo = makeEle.createEle('div', 'picInfo', [12, 12, 12, 12], 'picInfo');\n  displayPicture.src = picture;\n  displayedModal.append(displayPicture);\n  document.querySelector('body').append(displayedModal);\n  displayedModal.addEventListener('click', e => {\n    if (e.target.classList.contains('displayModalContainer')) {\n      displayedModal.remove();\n    }\n  });\n  return displayedModal;\n}\n\n//# sourceURL=webpack://vanilla-website/./src/scripts/utils.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://vanilla-website/./src/styles/styles.scss?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/scripts/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/styles.scss");
/******/ 	
/******/ })()
;