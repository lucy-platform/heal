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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/arriving.svg":
/*!*****************************!*\
  !*** ./images/arriving.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13.43 17.76'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%237000cb;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath d='M5.71,14.75A5.39,5.39,0,0,0,5.71,4,5.15,5.15,0,0,0,1.92,5.53,5.63,5.63,0,0,0,.43,9.23a.42.42,0,1,0,.84,0A4.81,4.81,0,0,1,2.53,6.11,4.28,4.28,0,0,1,5.71,4.82a4.56,4.56,0,0,1,4.55,4.54,4.56,4.56,0,0,1-4.55,4.55.42.42,0,1,0,0,.84Z'/%3E%3Cpath d='M5.71,14.75v.43a5.82,5.82,0,0,0,0-11.64h0A5.6,5.6,0,0,0,1.61,5.23,6,6,0,0,0,0,9.22H0v0a.85.85,0,0,0,.82.85h0a.85.85,0,0,0,.85-.82A4.33,4.33,0,0,1,2.84,6.41,3.85,3.85,0,0,1,5.71,5.24,4.13,4.13,0,0,1,8.62,6.45a4.12,4.12,0,0,1-2.91,7,.85.85,0,1,0,0,1.7v-.86h0a5,5,0,1,0,0-9.95A4.72,4.72,0,0,0,2.22,5.81,5.23,5.23,0,0,0,.84,9.25h0A5.15,5.15,0,0,1,2.23,5.82,4.72,4.72,0,0,1,5.7,4.4h0a5,5,0,0,1,0,9.92Z'/%3E%3Cpath d='M6.14,17A3.43,3.43,0,0,0,3.7,16a3.71,3.71,0,0,0-2.52,1,.28.28,0,0,0,0,.4.27.27,0,0,0,.39,0,3.18,3.18,0,0,1,2.14-.89,2.82,2.82,0,0,1,2,.89.28.28,0,0,0,.4-.4Z'/%3E%3Cpath d='M6.14,17l.2-.2A3.72,3.72,0,0,0,3.7,15.66h0v0A4,4,0,0,0,1,16.78a.55.55,0,0,0-.18.41.58.58,0,0,0,.15.39.55.55,0,0,0,.41.18.58.58,0,0,0,.39-.15,2.85,2.85,0,0,1,1.94-.82,2.58,2.58,0,0,1,1.84.81.58.58,0,0,0,.8,0,.58.58,0,0,0,.17-.4.56.56,0,0,0-.17-.4l-.2.2-.2.2h0a3.14,3.14,0,0,0-2.24-1,3.47,3.47,0,0,0-2.33,1h0a3.42,3.42,0,0,1,2.33-1h0a3.14,3.14,0,0,1,2.24,1Z'/%3E%3Cpath d='M6.62,9.59H5.69V7.8a.6.6,0,1,0-1.2,0v2.4a.6.6,0,0,0,.6.6H6.62a.61.61,0,0,0,0-1.21Z'/%3E%3Cpath class='cls-1' d='M12.83,2.4H11V.6a.6.6,0,0,0-1.2,0V3a.6.6,0,0,0,.6.6h2.4a.6.6,0,0,0,0-1.2Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/camera.svg":
/*!***************************!*\
  !*** ./images/camera.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 39.14 32'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bopacity:0.8;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M36.1,32H3a3,3,0,0,1-3-3V7.18a3,3,0,0,1,3-3H15.29a1,1,0,0,0,1-.66l1-2.71A1.21,1.21,0,0,1,18.41,0h3.5A1.22,1.22,0,0,1,23,.62l1.66,3a1,1,0,0,0,.9.53H36.1a3,3,0,0,1,3,3V29A3,3,0,0,1,36.1,32ZM19,11.37a7.14,7.14,0,1,0,7.14,7.14A7.14,7.14,0,0,0,19,11.37Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/close.svg":
/*!**************************!*\
  !*** ./images/close.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15.67 15.67'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;stroke:%23ccc;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cline class='cls-1' x1='14.17' y1='1.5' x2='1.5' y2='14.17'/%3E%3Cline class='cls-1' x1='14.17' y1='14.17' x2='1.5' y2='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/confirmed.svg":
/*!******************************!*\
  !*** ./images/confirmed.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 175.58 237.33'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D.cls-2%7Bfill:url(%23linear-gradient);%7D.cls-3%7Bfill:url(%23linear-gradient-2);%7D.cls-4%7Bfill:url(%23linear-gradient-3);%7D.cls-5%7Bfill:url(%23linear-gradient-4);%7D.cls-6%7Bfill:url(%23linear-gradient-5);%7D.cls-7%7Bfill:url(%23linear-gradient-6);%7D.cls-8%7Bfill:url(%23linear-gradient-7);%7D.cls-9%7Bfill:url(%23linear-gradient-9);%7D.cls-10%7Bfill:url(%23linear-gradient-10);%7D.cls-11%7Bfill:url(%23linear-gradient-11);%7D.cls-12%7Bfill:url(%23linear-gradient-12);%7D.cls-13%7Bfill:url(%23linear-gradient-13);%7D.cls-14%7Bfill:url(%23linear-gradient-15);%7D.cls-15%7Bfill:url(%23linear-gradient-16);%7D.cls-16%7Bfill:url(%23linear-gradient-17);%7D.cls-17%7Bfill:url(%23linear-gradient-18);%7D.cls-18%7Bfill:url(%23linear-gradient-19);%7D.cls-19%7Bfill:url(%23linear-gradient-21);%7D.cls-20%7Bfill:url(%23linear-gradient-22);%7D.cls-21%7Bfill:url(%23linear-gradient-23);%7D%3C/style%3E%3ClinearGradient id='linear-gradient' x1='156.36' y1='78.24' x2='159.78' y2='78.24' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23006994'/%3E%3Cstop offset='1' stop-color='%23a52aff'/%3E%3C/linearGradient%3E%3ClinearGradient id='linear-gradient-2' x1='161.26' y1='18.94' x2='175.58' y2='18.94' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-3' x1='161.26' y1='38.64' x2='175.58' y2='38.64' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-4' x1='164.76' y1='23.62' x2='174.73' y2='23.62' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-5' x1='164.76' y1='26.99' x2='174.73' y2='26.99' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-6' x1='164.76' y1='30.35' x2='174.73' y2='30.35' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-7' x1='164.76' y1='33.71' x2='174.73' y2='33.71' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-9' x1='161.26' y1='58.34' x2='175.58' y2='58.34' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-10' x1='164.76' y1='43.32' x2='174.73' y2='43.32' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-11' x1='164.76' y1='46.69' x2='174.73' y2='46.69' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-12' x1='164.76' y1='50.05' x2='174.73' y2='50.05' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-13' x1='164.76' y1='53.42' x2='174.73' y2='53.42' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-15' x1='161.26' y1='78.04' x2='175.58' y2='78.04' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-16' x1='164.76' y1='63.03' x2='174.73' y2='63.03' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-17' x1='164.76' y1='66.39' x2='174.73' y2='66.39' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-18' x1='164.76' y1='69.75' x2='174.73' y2='69.75' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-19' x1='164.76' y1='73.12' x2='174.73' y2='73.12' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-21' x1='153.31' y1='18.63' x2='154.92' y2='18.63' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-22' x1='155.42' y1='18.59' x2='157.56' y2='18.59' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-23' x1='158.05' y1='18.89' x2='160.15' y2='18.89' xlink:href='%23linear-gradient'/%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M70.4,182.71A66.66,66.66,0,0,0,132,116.3c0-1.71-.06-3.44-.2-5.18a66.68,66.68,0,0,0-66.4-61.56c-1.72,0-3.45.07-5.19.2A67.9,67.9,0,0,0,35,56.54,61.05,61.05,0,0,0,9.1,81,70.78,70.78,0,0,0,0,116.37c0,1.1,0,2.19.07,3.3a3,3,0,1,0,6-.25c0-1-.06-2-.06-3,0-15.82,5.16-30.31,14.51-41.16a54.78,54.78,0,0,1,17.12-13.3,62,62,0,0,1,23-6.17c1.59-.12,3.17-.18,4.73-.18a60.69,60.69,0,0,1,60.42,56c.12,1.59.18,3.16.18,4.72a60.67,60.67,0,0,1-56,60.43,3,3,0,1,0,.46,6Z'/%3E%3Cpath class='cls-1' d='M118.91,225.15a66.67,66.67,0,0,0-94,7.23,3,3,0,0,0,4.56,3.91A60.68,60.68,0,0,1,115,229.7a3,3,0,1,0,3.9-4.55Z'/%3E%3Cpath class='cls-1' d='M150.13,12.24V89.15a56.42,56.42,0,0,0,6.75,26.76l4.24,7.88a1.22,1.22,0,0,0,2.13,0l4.25-7.64a56.42,56.42,0,0,0,7.11-27.41V12.24A12.24,12.24,0,0,0,162.37,0h0A12.24,12.24,0,0,0,150.13,12.24Z'/%3E%3Cpath class='cls-2' d='M159.78,78.25l-.13.82-.36.64-.54.43-.68.15-.69-.15-.54-.43-.35-.64-.13-.82.13-.83.35-.64.54-.43.69-.16.68.16.54.43.36.64Zm-.6,0-.09-.61-.22-.48-.36-.31-.44-.1-.46.1-.35.31-.23.48-.08.61.08.61.23.47.35.3.46.11.44-.11.36-.3.22-.47Z'/%3E%3Cpath class='cls-3' d='M174.73,18.08H162.12a.86.86,0,1,0,0,1.71h12.61a.86.86,0,0,0,0-1.71'/%3E%3Cpath class='cls-4' d='M174.73,37.79H162.12a.85.85,0,1,0,0,1.7h12.61a.85.85,0,0,0,0-1.7'/%3E%3Cpolyline class='cls-5' points='174.73 23.45 164.76 23.45 164.76 23.79 174.73 23.79'/%3E%3Cpolyline class='cls-6' points='174.73 26.82 164.76 26.82 164.76 27.16 174.73 27.16'/%3E%3Cpolyline class='cls-7' points='174.73 30.18 164.76 30.18 164.76 30.52 174.73 30.52'/%3E%3Cpolyline class='cls-8' points='174.73 33.54 164.76 33.54 164.76 33.88 174.73 33.88'/%3E%3Cpath class='cls-4' d='M174.73,37.79H162.12a.85.85,0,1,0,0,1.7h12.61a.85.85,0,0,0,0-1.7'/%3E%3Cpath class='cls-9' d='M174.73,57.49H162.12a.85.85,0,1,0,0,1.7h12.61a.85.85,0,1,0,0-1.7'/%3E%3Cpolyline class='cls-10' points='174.73 43.15 164.76 43.15 164.76 43.49 174.73 43.49'/%3E%3Cpolyline class='cls-11' points='174.73 46.52 164.76 46.52 164.76 46.86 174.73 46.86'/%3E%3Cpolyline class='cls-12' points='174.73 49.88 164.76 49.88 164.76 50.22 174.73 50.22'/%3E%3Cpolyline class='cls-13' points='174.73 53.24 164.76 53.24 164.76 53.59 174.73 53.59'/%3E%3Cpath class='cls-9' d='M174.73,57.49H162.12a.85.85,0,1,0,0,1.7h12.61a.85.85,0,1,0,0-1.7'/%3E%3Cpath class='cls-14' d='M174.73,77.19H162.12a.86.86,0,1,0,0,1.71h12.61a.86.86,0,0,0,.85-.86.85.85,0,0,0-.85-.85'/%3E%3Cpolyline class='cls-15' points='174.73 62.85 164.76 62.85 164.76 63.2 174.73 63.2'/%3E%3Cpolyline class='cls-16' points='174.73 66.22 164.76 66.22 164.76 66.56 174.73 66.56'/%3E%3Cpolyline class='cls-17' points='174.73 69.58 164.76 69.58 164.76 69.92 174.73 69.92'/%3E%3Cpolyline class='cls-18' points='174.73 72.95 164.76 72.95 164.76 73.29 174.73 73.29'/%3E%3Cpath class='cls-14' d='M174.73,77.19H162.12a.86.86,0,1,0,0,1.71h12.61a.86.86,0,0,0,.85-.86.85.85,0,0,0-.85-.85'/%3E%3Cpolygon class='cls-19' points='154.92 19.5 154.92 19.83 153.4 19.83 153.4 19.5 154 19.5 154 17.84 153.88 17.95 153.7 18.06 153.5 18.14 153.31 18.17 153.31 17.82 153.52 17.77 153.74 17.64 153.91 17.51 154 17.42 154.38 17.42 154.38 19.5 154.92 19.5'/%3E%3Cpath class='cls-20' d='M157.56,18.59l-.08.52-.23.4-.34.27-.42.1-.43-.1-.34-.27-.22-.4-.08-.52.08-.51.22-.41.34-.27.43-.09.42.09.34.27.23.41Zm-.38,0-.05-.38-.14-.3-.22-.19-.28-.07-.29.07-.22.19-.14.3-.05.38.05.39.14.29.22.19.29.07.28-.07.22-.19.14-.29Z'/%3E%3Cpath class='cls-21' d='M159.41,20.37v-.71h-1.36v-.33l1.47-1.91h.26v1.9h.37v.34h-.37v.71Zm-1-1.05h1V18Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/deaths.svg":
/*!***************************!*\
  !*** ./images/deaths.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 26.78 37.12'%3E%3Cdefs%3E%3Cstyle%3E.cls-1,.cls-2%7Bfill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;%7D.cls-1%7Bstroke:url(%23linear-gradient);%7D.cls-2%7Bstroke:url(%23linear-gradient-2);%7D%3C/style%3E%3ClinearGradient id='linear-gradient' y1='13.53' x2='26.78' y2='13.53' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ff931e'/%3E%3Cstop offset='1' stop-color='%23ff1d25'/%3E%3C/linearGradient%3E%3ClinearGradient id='linear-gradient-2' x1='3' y1='34.29' x2='22.71' y2='34.29' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ff1d25'/%3E%3Cstop offset='1' stop-color='%23ff8a1f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M13.26,26.06A12.53,12.53,0,0,0,13.26,1C6,1,1.24,6.49,1,13.24'/%3E%3Cpath class='cls-2' d='M4,36.12a12.52,12.52,0,0,1,17.71,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/down-blue.svg":
/*!******************************!*\
  !*** ./images/down-blue.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 7.14 4.51'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230000ff;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M5.54.27l-2,2-2-2A1,1,0,0,0,.27.27a1,1,0,0,0,0,1.33L2.91,4.23a.92.92,0,0,0,1.32,0L6.86,1.6A.94.94,0,0,0,5.54.27Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/down-whitet.svg":
/*!********************************!*\
  !*** ./images/down-whitet.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 7.14 4.51'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23ffffff;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M5.54.27l-2,2-2-2A1,1,0,0,0,.27.27a1,1,0,0,0,0,1.33L2.91,4.23a.92.92,0,0,0,1.32,0L6.86,1.6A.94.94,0,0,0,5.54.27Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/down.svg":
/*!*************************!*\
  !*** ./images/down.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 7.14 4.51'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23424242;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M5.54.27l-2,2-2-2A1,1,0,0,0,.27.27a1,1,0,0,0,0,1.33L2.91,4.23a.92.92,0,0,0,1.32,0L6.86,1.6A.94.94,0,0,0,5.54.27Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/employees.svg":
/*!******************************!*\
  !*** ./images/employees.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.78 37.12'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M13.26,27.06A13.53,13.53,0,0,0,13.26,0,12.85,12.85,0,0,0,3.75,3.9,14.11,14.11,0,0,0,0,13.2a1,1,0,1,0,2,.07,12,12,0,0,1,3.2-8A10.88,10.88,0,0,1,13.26,2a11.53,11.53,0,0,1,0,23.06,1,1,0,0,0,0,2Z'/%3E%3Cpath class='cls-1' d='M4.7,36.83a11.53,11.53,0,0,1,16.31,0,1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.42,13.53,13.53,0,0,0-19.13,0,1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/left.svg":
/*!*************************!*\
  !*** ./images/left.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12.13 15.63'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bopacity:0.4;%7D.cls-2%7Bfill:%23424242;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cg class='cls-1'%3E%3Cpath class='cls-2' d='M4.36,12.34a4.12,4.12,0,0,0,0-8.23A3.9,3.9,0,0,0,1.47,5.3,4.27,4.27,0,0,0,.33,8.12a.32.32,0,0,0,.31.34A.33.33,0,0,0,1,8.15a3.64,3.64,0,0,1,1-2.41,3.27,3.27,0,0,1,2.43-1,3.47,3.47,0,1,1,0,6.94.33.33,0,0,0,0,.65Z'/%3E%3Cpath class='cls-2' d='M4.36,12.34v.32a4.44,4.44,0,0,0,0-8.88h0A4.24,4.24,0,0,0,1.23,5.07,4.62,4.62,0,0,0,0,8.11H0v0a.65.65,0,0,0,.63.64h0a.65.65,0,0,0,.65-.62A3.29,3.29,0,0,1,2.17,6a2.91,2.91,0,0,1,2.19-.89A3.14,3.14,0,0,1,7.5,8.22a3.14,3.14,0,0,1-3.14,3.15.65.65,0,1,0,0,1.29V12h0a3.79,3.79,0,0,0,3.79-3.8A3.79,3.79,0,0,0,4.36,4.43,3.59,3.59,0,0,0,1.7,5.51,4,4,0,0,0,.64,8.14h0a4,4,0,0,1,1-2.62A3.58,3.58,0,0,1,4.35,4.44h0a3.79,3.79,0,0,1,0,7.57Z'/%3E%3Cpath class='cls-2' d='M7,14.75a3.91,3.91,0,0,0-2.8-1.21,4.27,4.27,0,0,0-2.89,1.2.32.32,0,0,0,.44.47,3.61,3.61,0,0,1,2.45-1,3.3,3.3,0,0,1,2.35,1A.32.32,0,0,0,7,14.75Z'/%3E%3Cpath class='cls-2' d='M7,14.75l.23-.23a4.22,4.22,0,0,0-3-1.3h0v0A4.58,4.58,0,0,0,1.13,14.5.64.64,0,0,0,.92,15a.65.65,0,0,0,.65.65A.7.7,0,0,0,2,15.45a3.27,3.27,0,0,1,2.22-.94,3,3,0,0,1,2.12.93A.65.65,0,0,0,7.46,15a.62.62,0,0,0-.19-.46L7,14.75,6.81,15h0a3.61,3.61,0,0,0-2.58-1.11A3.93,3.93,0,0,0,1.57,15h0a3.89,3.89,0,0,1,2.66-1.11h0A3.58,3.58,0,0,1,6.81,15Z'/%3E%3Cpath class='cls-2' d='M8.68,1.38h2.07V3.44a.69.69,0,0,0,1.38,0V.69A.69.69,0,0,0,11.44,0H8.68a.69.69,0,0,0,0,1.38Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/location.svg":
/*!*****************************!*\
  !*** ./images/location.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4.81 7.13'%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath d='M4.81,2.4c0,1.33-2.41,4.73-2.41,4.73S0,3.73,0,2.4a2.41,2.41,0,0,1,4.81,0ZM2.4,1.6a.71.71,0,1,0,.71.71A.71.71,0,0,0,2.4,1.6Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/name.svg":
/*!*************************!*\
  !*** ./images/name.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 5.88 5.88'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D%3C/style%3E%3ClinearGradient id='linear-gradient' x1='0.37' y1='4.37' x2='5.52' y2='1.52' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%237f0e00'/%3E%3Cstop offset='0.09' stop-color='%237d0f07'/%3E%3Cstop offset='0.22' stop-color='%2376121a'/%3E%3Cstop offset='0.37' stop-color='%236c183a'/%3E%3Cstop offset='0.54' stop-color='%235d1f66'/%3E%3Cstop offset='0.73' stop-color='%234a289f'/%3E%3Cstop offset='0.93' stop-color='%233333e3'/%3E%3Cstop offset='1' stop-color='%232a38ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Ccircle class='cls-1' cx='2.94' cy='2.94' r='2.94'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/oranges.svg":
/*!****************************!*\
  !*** ./images/oranges.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.69 38.29'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M12.53,29.08a12.79,12.79,0,1,0,0-25.58,12.15,12.15,0,0,0-9,3.68A13.32,13.32,0,0,0,0,16a1,1,0,0,0,2,.07A11.26,11.26,0,0,1,5,8.57,10.16,10.16,0,0,1,12.53,5.5a10.79,10.79,0,1,1,0,21.58,1,1,0,0,0,0,2Z'/%3E%3Cpath class='cls-1' d='M20.88,36.58a12.23,12.23,0,0,0-8.7-3.75,13.29,13.29,0,0,0-9,3.72A1,1,0,0,0,4.55,38a11.29,11.29,0,0,1,7.63-3.18A10.19,10.19,0,0,1,19.46,38a1,1,0,1,0,1.42-1.42Z'/%3E%3Cpath class='cls-1' d='M29.69,6.38h-1a1.51,1.51,0,0,1-3,0A1.4,1.4,0,0,1,25.75,6,15.74,15.74,0,0,1,27,3.22c.26-.47.51-.9.7-1.2L28,1.66,28,1.53,27.19,1l-.85.53.1.17c.23.38.82,1.36,1.34,2.37a14.83,14.83,0,0,1,.67,1.45,4.2,4.2,0,0,1,.19.57.9.9,0,0,1,.05.29h2a3.39,3.39,0,0,0-.14-.91,17,17,0,0,0-1.47-3.22c-.55-1-1-1.77-1-1.78a1,1,0,0,0-1.69,0s-.64,1-1.29,2.23a20,20,0,0,0-.9,1.87q-.2.46-.33.9a3.39,3.39,0,0,0-.14.91,3.51,3.51,0,0,0,7,0Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/present.svg":
/*!****************************!*\
  !*** ./images/present.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13.5 17'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%237000cb;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M4.36,13.71a4.11,4.11,0,0,0,0-8.22A3.89,3.89,0,0,0,1.47,6.67,4.29,4.29,0,0,0,.33,9.5a.31.31,0,0,0,.31.33A.32.32,0,0,0,1,9.52a3.59,3.59,0,0,1,1-2.4,3.27,3.27,0,0,1,2.43-1,3.47,3.47,0,0,1,0,6.94.32.32,0,1,0,0,.64Z'/%3E%3Cpath class='cls-1' d='M4.36,13.71V14a4.44,4.44,0,0,0,0-8.88h0A4.24,4.24,0,0,0,1.23,6.45,4.58,4.58,0,0,0,0,9.49H0v0a.65.65,0,0,0,.63.65h0a.66.66,0,0,0,.65-.63,3.33,3.33,0,0,1,.87-2.19,2.94,2.94,0,0,1,2.19-.88,3.14,3.14,0,0,1,0,6.28.65.65,0,1,0,0,1.3v-.66h0a3.8,3.8,0,0,0,0-7.6A3.59,3.59,0,0,0,1.7,6.89,4,4,0,0,0,.64,9.51h0a4,4,0,0,1,1-2.61A3.59,3.59,0,0,1,4.35,5.81h0a3.79,3.79,0,0,1,0,7.57Z'/%3E%3Cpath class='cls-1' d='M7,16.12a3.94,3.94,0,0,0-2.8-1.2,4.3,4.3,0,0,0-2.89,1.19.33.33,0,0,0,0,.46.32.32,0,0,0,.45,0,3.66,3.66,0,0,1,2.45-1,3.31,3.31,0,0,1,2.35,1,.31.31,0,0,0,.45,0A.32.32,0,0,0,7,16.12Z'/%3E%3Cpath class='cls-1' d='M7,16.12l.23-.23a4.26,4.26,0,0,0-3-1.3h0v0a4.62,4.62,0,0,0-3.11,1.28.66.66,0,0,0-.21.48.62.62,0,0,0,.18.44.64.64,0,0,0,.47.21A.66.66,0,0,0,2,16.82a3.3,3.3,0,0,1,2.22-.93,2.94,2.94,0,0,1,2.12.92.61.61,0,0,0,.45.19.65.65,0,0,0,.65-.65.65.65,0,0,0-.19-.46L7,16.12l-.23.24h0a3.62,3.62,0,0,0-2.58-1.12,4,4,0,0,0-2.67,1.11h0a3.92,3.92,0,0,1,2.66-1.1h0a3.58,3.58,0,0,1,2.56,1.11Z'/%3E%3Cpath class='cls-1' d='M12.81,2.75H10.75V.69a.69.69,0,1,0-1.38,0V3.44a.69.69,0,0,0,.69.69h2.75a.69.69,0,0,0,0-1.38Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/recovered.svg":
/*!******************************!*\
  !*** ./images/recovered.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 235.24 234.62'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M105.19,172.83A86.42,86.42,0,1,0,105.19,0,87.61,87.61,0,0,0,71,6.66,79.86,79.86,0,0,0,34.57,37.53,92.62,92.62,0,0,0,20.46,84.29a9.5,9.5,0,0,0,19,.67,76.83,76.83,0,0,1,5.38-26,63.35,63.35,0,0,1,22.63-28.8C77.59,23.18,90.15,19,105.19,19a67.42,67.42,0,1,1,0,134.83,9.5,9.5,0,1,0,0,19Z'/%3E%3Cpath class='cls-1' d='M125,218.41a86.33,86.33,0,0,0-122.21,0,9.5,9.5,0,0,0,13.44,13.43,67.33,67.33,0,0,1,95.33,0A9.5,9.5,0,0,0,125,218.41Z'/%3E%3Cpath class='cls-1' d='M189.88,159.47,219,188.61a9.5,9.5,0,0,0,13.44-13.43L203.31,146a9.5,9.5,0,0,0-13.43,13.44'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/report/back.svg":
/*!********************************!*\
  !*** ./images/report/back.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6.01 9.52'%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath d='M5.64,7.39,3,4.76,5.64,2.13A1.24,1.24,0,0,0,3.88.37L.37,3.88a1.24,1.24,0,0,0,0,1.76L3.88,9.16A1.25,1.25,0,0,0,5.64,7.39Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/report/search-bg-1.svg":
/*!***************************************!*\
  !*** ./images/report/search-bg-1.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 252.59 165.99'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23f9d6bb;%7D.cls-2%7Bfill:%23f58220;%7D.cls-3%7Bfill:%23424242;%7D.cls-4%7Bfill:%236accab;%7D.cls-5,.cls-6%7Bfill:none;stroke:%23424242;stroke-miterlimit:10;stroke-width:0.5px;%7D.cls-6%7Bstroke-dasharray:11.05 11.05;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M35.27,85.89A17.08,17.08,0,1,1,18.2,68.81,17.07,17.07,0,0,1,35.27,85.89Z'/%3E%3Cpath class='cls-2' d='M29.26,112a16.9,16.9,0,0,0-23.88,0,1.73,1.73,0,1,0,2.45,2.45,13.42,13.42,0,0,1,19,0A1.73,1.73,0,1,0,29.26,112Z'/%3E%3Cpath class='cls-3' d='M32,88.11a24.77,24.77,0,0,1,1.54-2.46c.56-.8,1.6-2,2.23-2.77l0,.19c-.33-.26-.64-.56-1-.84.37.2.76.39,1.11.62l.11.07L36,83c-.51.82-1.53,2.08-2.12,2.85A24.67,24.67,0,0,1,32,88.11Z'/%3E%3Cpath class='cls-3' d='M28,98.49c2.38-4.09,5.48-8.13,8.25-12l0,.1-1-.79,1.08.67,0,0,0,.06C33.93,90.66,30.81,94.69,28,98.49Z'/%3E%3Cpath class='cls-3' d='M3.79,88.11a24.67,24.67,0,0,1-1.87-2.22C1.34,85.12.78,84.32.27,83.5L.2,83.38l.1-.07c.36-.23.75-.41,1.12-.62-.32.28-.63.58-1,.84l0-.19a28.13,28.13,0,0,1,1.76,2.31A23.06,23.06,0,0,1,3.79,88.11Z'/%3E%3Cpath class='cls-3' d='M7.82,98.49C5,94.36,2.45,90.59,0,86.21l0-.06.05,0,1.07-.68-1,.79v-.09A144.36,144.36,0,0,1,7.82,98.49Z'/%3E%3Cpath class='cls-3' d='M34.94,80H1.55v-.35c0-7.4,6.56-11.34,13.82-12,2.42-.22,3.42-4.87,2.12-6.92,0,0,17.86,5.13,17.45,18.91Z'/%3E%3Cpath class='cls-4' d='M17.92,102.8h0A14.2,14.2,0,0,1,3.81,90.5l-.67-5.09,9.64,3.94.47.1a26.18,26.18,0,0,0,5.51.59,18.59,18.59,0,0,0,6.17-1.12l9-3.18-2.48,7.4A14.23,14.23,0,0,1,17.92,102.8Z'/%3E%3Cpath class='cls-1' d='M250.61,91.29a30.19,30.19,0,1,1-30.18-30.18A30.18,30.18,0,0,1,250.61,91.29Z'/%3E%3Cpath class='cls-2' d='M240,137.38a29.86,29.86,0,0,0-42.22,0,3.06,3.06,0,1,0,4.33,4.33,23.73,23.73,0,0,1,33.56,0,3.06,3.06,0,0,0,4.33-4.33Z'/%3E%3Cpath class='cls-3' d='M244.85,95.22a41.22,41.22,0,0,1,2.72-4.35c1-1.41,2.83-3.59,3.94-4.9l.05.33c-.59-.46-1.13-1-1.69-1.48.65.36,1.33.69,2,1.1L252,86l-.13.21c-.9,1.46-2.7,3.68-3.74,5A41.1,41.1,0,0,1,244.85,95.22Z'/%3E%3Cpath class='cls-3' d='M237.74,113.56c4.2-7.22,9.68-14.37,14.58-21.13l0,.16-1.76-1.39,1.9,1.19.1.06-.06.11C248.24,99.73,242.73,106.86,237.74,113.56Z'/%3E%3Cpath class='cls-3' d='M195,95.22a41.21,41.21,0,0,1-3.31-3.93,51.06,51.06,0,0,1-2.92-4.22l-.13-.21.19-.12c.63-.41,1.31-.74,2-1.1-.56.49-1.1,1-1.69,1.48l.05-.33c1.11,1.31,2.14,2.67,3.12,4.08A41.3,41.3,0,0,1,195,95.22Z'/%3E%3Cpath class='cls-3' d='M202.08,113.56a254.31,254.31,0,0,1-13.76-21.7l-.06-.1.09-.06,1.9-1.2-1.77,1.39,0-.15C193.43,99.08,197.89,105.77,202.08,113.56Z'/%3E%3Cpath class='cls-2' d='M220.51,50.82h0A29.51,29.51,0,0,1,250,80.33v.62a0,0,0,0,1,0,0H191a0,0,0,0,1,0,0v-.62a29.51,29.51,0,0,1,29.51-29.51Z'/%3E%3Cpath class='cls-2' d='M219.94,121.19h0A25.09,25.09,0,0,1,195,99.45l-1.18-9,17,7,.84.17a45.51,45.51,0,0,0,9.73,1,32.72,32.72,0,0,0,10.9-2L248.19,91,243.8,104.1A25.14,25.14,0,0,1,219.94,121.19Z'/%3E%3Cpath class='cls-5' d='M219.93,143a15.8,15.8,0,0,1-1,5.4'/%3E%3Cpath class='cls-6' d='M212,156.64a15.64,15.64,0,0,1-7.75,2H156.66A15.7,15.7,0,0,1,141,143V67.36a36.44,36.44,0,0,0-36.43-36.44h0A36.44,36.44,0,0,0,68.09,67.36v82.69a15.69,15.69,0,0,1-15.7,15.69H34a15.69,15.69,0,0,1-15.7-15.69V134.39'/%3E%3Cline class='cls-5' x1='18.34' y1='128.87' x2='18.34' y2='123.37'/%3E%3Cpath class='cls-1' d='M121.32,23.72A16.13,16.13,0,1,1,105.19,7.59,16.13,16.13,0,0,1,121.32,23.72Z'/%3E%3Cpath class='cls-2' d='M115.64,48.35a16,16,0,0,0-22.56,0,1.64,1.64,0,1,0,2.31,2.32,12.67,12.67,0,0,1,17.94,0,1.64,1.64,0,1,0,2.31-2.32Z'/%3E%3Cpath class='cls-3' d='M118.24,25.82a25.22,25.22,0,0,1,1.45-2.33c.53-.75,1.51-1.91,2.11-2.61l0,.18c-.32-.25-.61-.53-.91-.8.35.2.72.38,1,.59l.1.06L122,21c-.48.78-1.44,2-2,2.69A22,22,0,0,1,118.24,25.82Z'/%3E%3Cpath class='cls-3' d='M114.44,35.63a136.46,136.46,0,0,1,7.79-11.3l0,.09-.94-.75,1,.64.06,0,0,.06C120.05,28.23,117.11,32,114.44,35.63Z'/%3E%3Cpath class='cls-3' d='M91.58,25.82a22.09,22.09,0,0,1-1.77-2.1c-.55-.73-1.07-1.47-1.55-2.25l-.07-.12.1-.06c.33-.22.69-.39,1-.59-.31.27-.59.55-.91.79l0-.17c.59.7,1.14,1.42,1.66,2.17A23.33,23.33,0,0,1,91.58,25.82Z'/%3E%3Cpath class='cls-3' d='M95.38,35.63C92.71,31.73,90.31,28.16,88,24L88,24l0,0,1-.64-.94.74V24C90.76,27.89,93.14,31.46,95.38,35.63Z'/%3E%3Cpath class='cls-3' d='M121,18.2H89.47v-.34c0-7,6.19-10.7,13-11.32,2.28-.21,3.23-4.6,2-6.54,0,0,16.87,4.85,16.48,17.86Z'/%3E%3Cpath class='cls-2' d='M104.93,39.7h0A13.41,13.41,0,0,1,91.6,28.08L91,23.27l9.1,3.72.45.1a24.56,24.56,0,0,0,5.2.55,17.4,17.4,0,0,0,5.83-1.05l8.47-3-2.34,7A13.44,13.44,0,0,1,104.93,39.7Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/report/search-bg-2.svg":
/*!***************************************!*\
  !*** ./images/report/search-bg-2.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 252.59 165.99'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23f9d6bb;%7D.cls-2%7Bfill:%236accab;%7D.cls-3%7Bfill:%23424242;%7D.cls-4%7Bfill:%23f58220;%7D.cls-5,.cls-6%7Bfill:none;stroke:%23424242;stroke-miterlimit:10;stroke-width:0.5px;%7D.cls-6%7Bstroke-dasharray:11.05 11.05;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M35.27,85.89A17.08,17.08,0,1,1,18.2,68.81,17.07,17.07,0,0,1,35.27,85.89Z'/%3E%3Cpath class='cls-2' d='M29.26,112a16.9,16.9,0,0,0-23.88,0,1.73,1.73,0,1,0,2.45,2.45,13.42,13.42,0,0,1,19,0A1.73,1.73,0,1,0,29.26,112Z'/%3E%3Cpath class='cls-3' d='M32,88.11a24.77,24.77,0,0,1,1.54-2.46c.56-.8,1.6-2,2.23-2.77l0,.19c-.33-.26-.64-.56-1-.84.37.2.76.39,1.11.62l.11.07L36,83c-.51.82-1.53,2.08-2.12,2.85A24.67,24.67,0,0,1,32,88.11Z'/%3E%3Cpath class='cls-3' d='M28,98.49c2.38-4.09,5.48-8.13,8.25-12l0,.1-1-.79,1.08.67,0,0,0,.06C33.93,90.66,30.81,94.69,28,98.49Z'/%3E%3Cpath class='cls-3' d='M3.79,88.11a24.67,24.67,0,0,1-1.87-2.22C1.34,85.12.78,84.32.27,83.5L.2,83.38l.1-.07c.36-.23.75-.41,1.12-.62-.32.28-.63.58-1,.84l0-.19a28.13,28.13,0,0,1,1.76,2.31A23.06,23.06,0,0,1,3.79,88.11Z'/%3E%3Cpath class='cls-3' d='M7.82,98.49C5,94.36,2.45,90.59,0,86.21l0-.06.05,0,1.07-.68-1,.79v-.09A144.36,144.36,0,0,1,7.82,98.49Z'/%3E%3Cpath class='cls-3' d='M34.94,80H1.55v-.35c0-7.4,6.56-11.34,13.82-12,2.42-.22,3.42-4.87,2.12-6.92,0,0,17.86,5.13,17.45,18.91Z'/%3E%3Cpath class='cls-2' d='M17.92,102.8h0A14.2,14.2,0,0,1,3.81,90.5l-.67-5.09,9.64,3.94.47.1a26.18,26.18,0,0,0,5.51.59,18.59,18.59,0,0,0,6.17-1.12l9-3.18-2.48,7.4A14.23,14.23,0,0,1,17.92,102.8Z'/%3E%3Cpath class='cls-1' d='M250.61,91.29a30.19,30.19,0,1,1-30.18-30.18A30.18,30.18,0,0,1,250.61,91.29Z'/%3E%3Cpath class='cls-4' d='M240,137.38a29.86,29.86,0,0,0-42.22,0,3.06,3.06,0,1,0,4.33,4.33,23.73,23.73,0,0,1,33.56,0,3.06,3.06,0,0,0,4.33-4.33Z'/%3E%3Cpath class='cls-3' d='M244.85,95.22a41.22,41.22,0,0,1,2.72-4.35c1-1.41,2.83-3.59,3.94-4.9l.05.33c-.59-.46-1.13-1-1.69-1.48.65.36,1.33.69,2,1.1L252,86l-.13.21c-.9,1.46-2.7,3.68-3.74,5A41.1,41.1,0,0,1,244.85,95.22Z'/%3E%3Cpath class='cls-3' d='M237.74,113.56c4.2-7.22,9.68-14.37,14.58-21.13l0,.16-1.76-1.39,1.9,1.19.1.06-.06.11C248.24,99.73,242.73,106.86,237.74,113.56Z'/%3E%3Cpath class='cls-3' d='M195,95.22a41.21,41.21,0,0,1-3.31-3.93,51.06,51.06,0,0,1-2.92-4.22l-.13-.21.19-.12c.63-.41,1.31-.74,2-1.1-.56.49-1.1,1-1.69,1.48l.05-.33c1.11,1.31,2.14,2.67,3.12,4.08A41.3,41.3,0,0,1,195,95.22Z'/%3E%3Cpath class='cls-3' d='M202.08,113.56a254.31,254.31,0,0,1-13.76-21.7l-.06-.1.09-.06,1.9-1.2-1.77,1.39,0-.15C193.43,99.08,197.89,105.77,202.08,113.56Z'/%3E%3Cpath class='cls-2' d='M220.51,50.82h0A29.51,29.51,0,0,1,250,80.33v.62a0,0,0,0,1,0,0H191a0,0,0,0,1,0,0v-.62A29.51,29.51,0,0,1,220.51,50.82Z'/%3E%3Cpath class='cls-2' d='M219.94,121.19h0A25.09,25.09,0,0,1,195,99.45l-1.18-9,17,7,.84.17a45.51,45.51,0,0,0,9.73,1,32.72,32.72,0,0,0,10.9-2L248.19,91,243.8,104.1A25.14,25.14,0,0,1,219.94,121.19Z'/%3E%3Cpath class='cls-5' d='M219.93,143a15.8,15.8,0,0,1-1,5.4'/%3E%3Cpath class='cls-6' d='M212,156.64a15.64,15.64,0,0,1-7.75,2H156.66A15.7,15.7,0,0,1,141,143V67.36a36.44,36.44,0,1,0-72.87,0v82.69a15.69,15.69,0,0,1-15.7,15.69H34a15.69,15.69,0,0,1-15.7-15.69V134.39'/%3E%3Cline class='cls-5' x1='18.34' y1='128.87' x2='18.34' y2='123.37'/%3E%3Cpath class='cls-1' d='M121.32,23.72A16.13,16.13,0,1,1,105.19,7.59,16.13,16.13,0,0,1,121.32,23.72Z'/%3E%3Cpath class='cls-2' d='M115.64,48.35a16,16,0,0,0-22.56,0,1.64,1.64,0,1,0,2.31,2.32,12.67,12.67,0,0,1,17.94,0,1.64,1.64,0,1,0,2.31-2.32Z'/%3E%3Cpath class='cls-3' d='M118.24,25.82a25.22,25.22,0,0,1,1.45-2.33c.53-.75,1.51-1.91,2.11-2.61l0,.18c-.32-.25-.61-.53-.91-.8.35.2.72.38,1,.59l.1.06L122,21c-.48.78-1.44,2-2,2.69A22,22,0,0,1,118.24,25.82Z'/%3E%3Cpath class='cls-3' d='M114.44,35.63a136.46,136.46,0,0,1,7.79-11.3l0,.09-.94-.75,1,.64.06,0,0,.06C120.05,28.23,117.11,32,114.44,35.63Z'/%3E%3Cpath class='cls-3' d='M91.58,25.82a22.09,22.09,0,0,1-1.77-2.1c-.55-.73-1.07-1.47-1.55-2.25l-.07-.12.1-.06c.33-.22.69-.39,1-.59-.31.27-.59.55-.91.79l0-.17c.59.7,1.14,1.42,1.66,2.17A23.33,23.33,0,0,1,91.58,25.82Z'/%3E%3Cpath class='cls-3' d='M95.38,35.63C92.71,31.73,90.31,28.16,88,24L88,24l0,0,1-.64-.94.74V24C90.76,27.89,93.14,31.46,95.38,35.63Z'/%3E%3Cpath class='cls-3' d='M121,18.2H89.47v-.34c0-7,6.19-10.7,13-11.32,2.28-.21,3.23-4.6,2-6.54,0,0,16.87,4.85,16.48,17.86Z'/%3E%3Cpath class='cls-4' d='M104.93,39.7h0A13.41,13.41,0,0,1,91.6,28.08L91,23.27l9.1,3.72.45.1a24.56,24.56,0,0,0,5.2.55,17.4,17.4,0,0,0,5.83-1.05l8.47-3-2.34,7A13.44,13.44,0,0,1,104.93,39.7Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/report/search-gray.svg":
/*!***************************************!*\
  !*** ./images/report/search-gray.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8.71 9.84'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%238e8e8e;%7D.cls-2%7Bfill:none;stroke:%238e8e8e;stroke-linecap:round;stroke-miterlimit:10;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Ccircle class='cls-1' cx='3.78' cy='3.78' r='3.78'/%3E%3Cline class='cls-2' x1='7.27' y1='8.12' x2='8.21' y2='9.34'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/report/trace.svg":
/*!*********************************!*\
  !*** ./images/report/trace.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10.15 14.49'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23f9d6bb;%7D.cls-2%7Bfill:%236accab;%7D.cls-3%7Bfill:%23424242;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M9.84,6.39A4.77,4.77,0,1,1,5.08,1.62,4.76,4.76,0,0,1,9.84,6.39Z'/%3E%3Cpath class='cls-2' d='M8.17,13.66a4.72,4.72,0,0,0-6.67,0,.49.49,0,0,0,0,.69.48.48,0,0,0,.68,0,3.74,3.74,0,0,1,5.3,0,.49.49,0,0,0,.69,0A.51.51,0,0,0,8.17,13.66Z'/%3E%3Cpath class='cls-3' d='M8.93,7a8,8,0,0,1,.43-.69c.16-.22.45-.57.62-.77v0l-.27-.23.32.17,0,0,0,0c-.14.23-.42.58-.59.8A7.43,7.43,0,0,1,8.93,7Z'/%3E%3Cpath class='cls-3' d='M7.81,9.9a40.18,40.18,0,0,1,2.3-3.33v0l-.28-.22.3.19h0v0A39.48,39.48,0,0,1,7.81,9.9Z'/%3E%3Cpath class='cls-3' d='M1.06,7a7.43,7.43,0,0,1-.52-.62,7.25,7.25,0,0,1-.46-.67l0,0,0,0L.4,5.5l-.27.23V5.68c.17.2.33.42.49.64A8,8,0,0,1,1.06,7Z'/%3E%3Cpath class='cls-3' d='M2.18,9.9A39.42,39.42,0,0,1,0,6.48v0H0l.3-.19L0,6.48v0A39.42,39.42,0,0,1,2.18,9.9Z'/%3E%3Cpath class='cls-2' d='M5.09,0h0A4.66,4.66,0,0,1,9.75,4.66v.1a0,0,0,0,1,0,0H.43a0,0,0,0,1,0,0v-.1A4.66,4.66,0,0,1,5.09,0Z'/%3E%3Cpath class='cls-2' d='M5,11.11H5A4,4,0,0,1,1.06,7.68L.88,6.25l2.69,1.1.13,0a7.17,7.17,0,0,0,1.53.17A5.14,5.14,0,0,0,7,7.23l2.5-.88L8.77,8.41A4,4,0,0,1,5,11.11Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/screened.svg":
/*!*****************************!*\
  !*** ./images/screened.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.53 39.59'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M16.17,25.9a9.75,9.75,0,0,0,0-19.5A9.28,9.28,0,0,0,9.31,9.21a10.15,10.15,0,0,0-2.71,6.7,1,1,0,1,0,2,.07,8.17,8.17,0,0,1,2.15-5.38,7.3,7.3,0,0,1,5.42-2.2,7.75,7.75,0,0,1,0,15.5,1,1,0,0,0,0,2Z'/%3E%3Cpath class='cls-1' d='M22.78,31.23A9.74,9.74,0,0,0,9,31.23a1,1,0,1,0,1.41,1.41,7.76,7.76,0,0,1,11,0,1,1,0,1,0,1.41-1.41Z'/%3E%3Cpath class='cls-1' d='M2,4.6V2H28.53V3.67a1,1,0,1,0,2,0V1a1,1,0,0,0-.29-.71A1,1,0,0,0,29.53,0H1A1.05,1.05,0,0,0,.29.29,1.05,1.05,0,0,0,0,1V4.6a1,1,0,0,0,2,0Z'/%3E%3Cpath class='cls-1' d='M28.53,37.48v.11H2V35.93a1,1,0,0,0-2,0v2.66a1,1,0,0,0,1,1H29.53a1,1,0,0,0,.71-.3,1,1,0,0,0,.29-.7V37.48a1,1,0,1,0-2,0Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/slider-global.svg":
/*!**********************************!*\
  !*** ./images/slider-global.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17.27 17.27'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D.cls-2%7Bfill:%23ccc;opacity:0.4;%7D%3C/style%3E%3ClinearGradient id='linear-gradient' y1='8.63' x2='17.27' y2='8.63' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23006994'/%3E%3Cstop offset='1' stop-color='%23a52aff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Ccircle class='cls-1' cx='8.63' cy='8.63' r='8.63'/%3E%3Cpath class='cls-2' d='M8.63,0a8.6,8.6,0,0,0-7,3.65A9.46,9.46,0,0,1,4,3.33c7.74,0,10.32,7.92,7.84,13.31A8.63,8.63,0,0,0,8.63,0Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/slider.svg":
/*!***************************!*\
  !*** ./images/slider.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 13.15 13.15'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D.cls-2%7Bfill:%23ccc;opacity:0.4;%7D%3C/style%3E%3ClinearGradient id='linear-gradient' x1='-1.35' y1='2.01' x2='-10.81' y2='11.14' gradientTransform='translate(12.66)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23f58220'/%3E%3Cstop offset='0.17' stop-color='%23bc7b54'/%3E%3Cstop offset='0.4' stop-color='%237a7490'/%3E%3Cstop offset='0.6' stop-color='%23456ec0'/%3E%3Cstop offset='0.77' stop-color='%23206ae2'/%3E%3Cstop offset='0.91' stop-color='%230867f7'/%3E%3Cstop offset='1' stop-color='%2306f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Ccircle class='cls-1' cx='6.58' cy='6.58' r='6.58'/%3E%3Cpath class='cls-2' d='M6.58,0A6.56,6.56,0,0,0,1.22,2.78,7.48,7.48,0,0,1,3,2.54c5.9,0,7.87,6,6,10.13A6.57,6.57,0,0,0,6.58,0Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/star-filled.svg":
/*!********************************!*\
  !*** ./images/star-filled.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1,.cls-2%7Bfill:%23f58220;%7D.cls-1%7Bopacity:0.2;%7D.cls-3%7Bmask:url(%23mask);%7D.cls-4%7Bopacity:0;%7D.cls-5%7Bfilter:url(%23luminosity-invert);%7D%3C/style%3E%3Cfilter id='luminosity-invert' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeColorMatrix values='-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0'/%3E%3C/filter%3E%3Cmask id='mask' x='3.63' y='4.23' width='13' height='12' maskUnits='userSpaceOnUse'%3E%3Cg class='cls-5'%3E%3Cimage width='13' height='12' transform='translate(3.63 4.23)' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAYAAAC5tzfZAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzklEQVQoU72S3YpGUBRA18fJV5SSTnEuyPs/kxThQuIkEjnmbsowM83NrMu992r/tF/AyR+xfit4QjwFlVJ4nsc8zzRNc8s/SkmSEAQBfd//LEkpieMYKSVpmuK6LmEYYlkWVVVR1/VdEkIgpSTLMqIoQgiB4zjM88w4jpdOn4do25bjOHi/3wghsG0bgPM82ff9Il12WpaFaZpwHAdjDFprhmEgz/Pvpa7r8H0frTXrumKMYRgGvnKRiqJg2zZs26YsS5RSt9EAXvzXR3wAhKJSb0R5iQUAAAAASUVORK5CYII='/%3E%3C/g%3E%3C/mask%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Ccircle class='cls-1' cx='10' cy='10' r='10'/%3E%3Cpath class='cls-2' d='M10.64,6.73l.57,1.74a.18.18,0,0,0,.18.13h1.83a.67.67,0,0,1,.39,1.22L12.13,10.9a.21.21,0,0,0-.07.21l.57,1.74a.67.67,0,0,1-1,.75l-1.48-1.07a.18.18,0,0,0-.22,0L8.41,13.6a.67.67,0,0,1-1-.75l.57-1.74a.21.21,0,0,0-.07-.21L6.39,9.82A.67.67,0,0,1,6.78,8.6H8.61a.18.18,0,0,0,.18-.13l.57-1.74A.67.67,0,0,1,10.64,6.73Z'/%3E%3Cg class='cls-3'%3E%3Cg class='cls-4'%3E%3Cpath d='M10.64,6.73l.57,1.74a.18.18,0,0,0,.18.13h1.83a.67.67,0,0,1,.39,1.22L12.13,10.9a.21.21,0,0,0-.07.21l.57,1.74a.67.67,0,0,1-1,.75l-1.48-1.07a.18.18,0,0,0-.22,0L8.41,13.6a.67.67,0,0,1-1-.75l.57-1.74a.21.21,0,0,0-.07-.21L6.39,9.82A.67.67,0,0,1,6.78,8.6H8.61a.18.18,0,0,0,.18-.13l.57-1.74A.67.67,0,0,1,10.64,6.73Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./images/star-gray.svg":
/*!******************************!*\
  !*** ./images/star-gray.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 7.79 7.47'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%238e8e8e;%7D.cls-2%7Bmask:url(%23mask);%7D.cls-3%7Bopacity:0;%7D.cls-4%7Bfilter:url(%23luminosity-invert);%7D%3C/style%3E%3Cfilter id='luminosity-invert' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeColorMatrix values='-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0'/%3E%3C/filter%3E%3Cmask id='mask' x='-2.61' y='-2.86' width='13' height='13' maskUnits='userSpaceOnUse'%3E%3Cg class='cls-4'%3E%3Cimage width='13' height='13' transform='translate(-2.61 -2.86)' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsSAAALEgHS3X78AAAA2klEQVQoU72SvYqGMBBFj8FCiOn84zOxyfs/kZUgqbSQqBAQs8XCovsJy26xA9PMvYc7MJMAkV+W+MnwVH+C0qdh0zTkec6+7zjn3vTHJK011lratn2S70laa4wxWGtRSlEUBWma4pxjGIZ3SEpJVVV0XUdZlkgpybKM4zgIITDPM+u6Apf1tm3De0+MESEESZIghOA8T7z3X8AtCaDve4wx5HlOCIF935mmib7vr7Y7pJRiWRbGcSTGz5t771FK4b2/gfHaVVXFtm0jEF+vV6zrOn73JPzXG30AYJNY8q2LyPEAAAAASUVORK5CYII='/%3E%3C/g%3E%3C/mask%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M4.53.47,5.1,2.21a.2.2,0,0,0,.18.13H7.11a.68.68,0,0,1,.4,1.22L6,4.63A.19.19,0,0,0,6,4.85l.56,1.74a.67.67,0,0,1-1,.75L4,6.26a.24.24,0,0,0-.23,0L2.3,7.34a.67.67,0,0,1-1-.75l.57-1.74a.21.21,0,0,0-.07-.22L.28,3.56a.67.67,0,0,1,.4-1.22H2.5a.21.21,0,0,0,.19-.13L3.25.47A.67.67,0,0,1,4.53.47Z'/%3E%3Cg class='cls-2'%3E%3Cg class='cls-3'%3E%3Cpath d='M4.53.47,5.1,2.21a.2.2,0,0,0,.18.13H7.11a.68.68,0,0,1,.4,1.22L6,4.63A.19.19,0,0,0,6,4.85l.56,1.74a.67.67,0,0,1-1,.75L4,6.26a.24.24,0,0,0-.23,0L2.3,7.34a.67.67,0,0,1-1-.75l.57-1.74a.21.21,0,0,0-.07-.22L.28,3.56a.67.67,0,0,1,.4-1.22H2.5a.21.21,0,0,0,.19-.13L3.25.47A.67.67,0,0,1,4.53.47Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/global-dashboard/global-mobile.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/global-dashboard/global-mobile.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width: 768px) {\n  .root > .header {\n    padding: 30px 40px 20px 40px; } }\n\n@media screen and (max-width: 480px) {\n  .root > .header {\n    display: inline-block;\n    width: 100%; } }\n\n@media screen and (max-width: 480px) {\n  .root > .header .logo {\n    width: 100%;\n    text-align: center;\n    background-position: center center; } }\n\n@media screen and (max-width: 480px) {\n  .root > .header .title {\n    width: 100%;\n    display: inline-block;\n    margin-top: 1.5em;\n    font-size: 17px; } }\n\n@media screen and (max-width: 480px) {\n  .root .toolbar {\n    margin-right: 0;\n    display: inline-block;\n    width: 84%;\n    margin-left: 8%;\n    margin-top: 3em; } }\n\n@media screen and (max-width: 480px) {\n  .root .toolbar .countries.ddl {\n    background-color: #EFEFEF;\n    padding: 5px 10px;\n    border-radius: 20px;\n    width: 100%;\n    box-sizing: border-box; } }\n\n@media screen and (max-width: 768px) {\n  .root .stats {\n    width: 100%;\n    position: inherit;\n    display: inline-block; } }\n\n@media screen and (max-width: 480px) {\n  .root .stats {\n    height: 68vh; } }\n\n@media screen and (max-width: 768px) {\n  .root .stats .stat {\n    margin-top: 0em;\n    position: inherit;\n    width: 30.5%; } }\n\n@media screen and (max-width: 480px) {\n  .root .stats .stat {\n    width: 100%;\n    margin: 10px 0px 10px 0px; } }\n\n@media screen and (max-width: 768px) {\n  .root .stats .stats-header {\n    position: inherit;\n    top: 0px;\n    margin-left: 10px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    left: 0; } }\n\n@media screen and (max-width: 768px) {\n  .root .data-list-container {\n    width: 90%;\n    top: 0;\n    position: inherit;\n    margin-left: 5%;\n    display: inline-block; } }\n\n@media screen and (max-width: 480px) {\n  .root .data-list-container {\n    width: 86%;\n    margin-left: 7%; } }\n\n@media screen and (max-width: 768px) {\n  .root .data-list-container .data-list {\n    height: 65vh;\n    position: inherit; }\n    .root .data-list-container .data-list .header {\n      flex-direction: column;\n      align-items: flex-start;\n      padding: 10px 20px;\n      height: 80px;\n      justify-content: space-around; }\n    .root .data-list-container .data-list .list-widget {\n      display: flex; }\n      .root .data-list-container .data-list .list-widget .selected-item .population .label {\n        display: none !important; }\n      .root .data-list-container .data-list .list-widget .item {\n        flex-direction: column;\n        justify-content: space-around; }\n        .root .data-list-container .data-list .list-widget .item .c {\n          width: 75vw;\n          text-align: center;\n          margin: 5px 0px;\n          padding: 10px;\n          box-sizing: border-box; }\n          .root .data-list-container .data-list .list-widget .item .c.country .label {\n            display: none; }\n          .root .data-list-container .data-list .list-widget .item .c.country .value {\n            font-family: \"Century Gothic Bold\";\n            font-size: 1.3em; }\n          .root .data-list-container .data-list .list-widget .item .c.confirmed, .root .data-list-container .data-list .list-widget .item .c.deaths, .root .data-list-container .data-list .list-widget .item .c.recovered {\n            background-color: white;\n            border-radius: 10px; }\n        .root .data-list-container .data-list .list-widget .item .label {\n          margin-bottom: 0.6em; } }\n\n@media screen and (max-width: 768px) {\n  .root .map {\n    width: 100%;\n    margin-top: 1em;\n    height: 67vh;\n    position: inherit;\n    display: inline-block;\n    top: 0; } }\n\n@media screen and (max-width: 480px) {\n  .root .map .map-widget {\n    left: 35px;\n    right: 35px; } }\n\n@media screen and (max-width: 480px) {\n  .root .map .map-widget .filters .switch {\n    margin: 5px 5px;\n    padding: 9px 9px 9px 9px;\n    border-radius: 15px;\n    font-size: 8px; } }\n\n@media screen and (max-width: 768px) {\n  .root .dialog {\n    left: 0px;\n    right: 0px;\n    top: 0px;\n    bottom: 0px;\n    border-radius: 0px; }\n    .root .dialog .header {\n      height: unset; }\n      .root .dialog .header .first {\n        width: 0px; }\n    .root .dialog .body {\n      overflow: auto;\n      padding: 20px 10px; }\n      .root .dialog .body ol {\n        width: 100%; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/down.svg */ "./images/down.svg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../images/down-whitet.svg */ "./images/down-whitet.svg");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../images/confirmed.svg */ "./images/confirmed.svg");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../images/recovered.svg */ "./images/recovered.svg");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../images/deaths.svg */ "./images/deaths.svg");
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../images/screened.svg */ "./images/screened.svg");
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../images/employees.svg */ "./images/employees.svg");
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../images/oranges.svg */ "./images/oranges.svg");
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../images/slider.svg */ "./images/slider.svg");
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../images/slider-global.svg */ "./images/slider-global.svg");
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../images/down-blue.svg */ "./images/down-blue.svg");
var ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ../images/star-gray.svg */ "./images/star-gray.svg");
var ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! ../images/arriving.svg */ "./images/arriving.svg");
var ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(/*! ../images/left.svg */ "./images/left.svg");
var ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(/*! ../images/present.svg */ "./images/present.svg");
var ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(/*! ../images/star-filled.svg */ "./images/star-filled.svg");
var ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(/*! ../images/name.svg */ "./images/name.svg");
var ___CSS_LOADER_URL_IMPORT_17___ = __webpack_require__(/*! ../images/location.svg */ "./images/location.svg");
var ___CSS_LOADER_URL_IMPORT_18___ = __webpack_require__(/*! ../images/close.svg */ "./images/close.svg");
var ___CSS_LOADER_URL_IMPORT_19___ = __webpack_require__(/*! ../images/camera.svg */ "./images/camera.svg");
var ___CSS_LOADER_URL_IMPORT_20___ = __webpack_require__(/*! ../images/report/search-gray.svg */ "./images/report/search-gray.svg");
var ___CSS_LOADER_URL_IMPORT_21___ = __webpack_require__(/*! ../images/report/back.svg */ "./images/report/back.svg");
var ___CSS_LOADER_URL_IMPORT_22___ = __webpack_require__(/*! ../images/report/search-bg-1.svg */ "./images/report/search-bg-1.svg");
var ___CSS_LOADER_URL_IMPORT_23___ = __webpack_require__(/*! ../images/report/search-bg-2.svg */ "./images/report/search-bg-2.svg");
var ___CSS_LOADER_URL_IMPORT_24___ = __webpack_require__(/*! ../images/report/trace.svg */ "./images/report/trace.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_24___);
// Module
exports.push([module.i, "html {\n  margin: 0px;\n  padding: 0px;\n  scroll-behavior: smooth; }\n\n.root {\n  position: absolute;\n  color: #424242;\n  left: 0px;\n  right: 0px;\n  top: 10px;\n  bottom: 0px;\n  display: flex;\n  flex-direction: column; }\n  .root > .header {\n    flex-grow: 0;\n    height: 70px; }\n  .root .toolbar {\n    position: absolute;\n    top: 90px;\n    right: 0px;\n    flex-grow: 0;\n    height: 30px;\n    display: flex;\n    justify-content: flex-end;\n    margin-right: 40px;\n    margin-bottom: 10px; }\n    .root .toolbar .toolbar-button {\n      width: auto;\n      padding: 10px 20px;\n      border-radius: 50px;\n      background-color: #efefef;\n      margin: 0 4px;\n      font-size: 0.7rem;\n      cursor: pointer;\n      color: gray; }\n      .root .toolbar .toolbar-button .arrow {\n        width: 10px;\n        height: 10px;\n        display: inline-block;\n        margin-left: 20px;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: contain; }\n      .root .toolbar .toolbar-button:hover, .root .toolbar .toolbar-button.selected {\n        background: blue;\n        background: linear-gradient(9deg, blue 0%, #ff8a0f 95%);\n        color: white; }\n        .root .toolbar .toolbar-button:hover .arrow, .root .toolbar .toolbar-button.selected .arrow {\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n      .root .toolbar .toolbar-button.selected .arrow {\n        transform: rotate(180deg); }\n    .root .toolbar .countries.ddl {\n      background-color: #efefef;\n      padding: 5px 10px;\n      border-radius: 20px;\n      width: 200px; }\n    .root .toolbar .ddl {\n      position: relative;\n      cursor: pointer;\n      width: 150px; }\n      .root .toolbar .ddl .txt {\n        font-size: 11px;\n        padding: 5px 10px; }\n      .root .toolbar .ddl::before {\n        content: \"\";\n        position: absolute;\n        right: 10px;\n        top: 0px;\n        bottom: 0px;\n        width: 20px;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n        background-repeat: no-repeat;\n        background-size: 10px;\n        background-position: center; }\n      .root .toolbar .ddl select {\n        opacity: 0;\n        cursor: pointer;\n        position: absolute;\n        left: 0px;\n        right: 0px;\n        top: 0px;\n        bottom: 0px;\n        width: 100%; }\n      .root .toolbar .ddl:hover {\n        background: blue;\n        background: linear-gradient(9deg, blue 0%, #ff8a0f 95%);\n        color: white; }\n  .root .data-section {\n    flex-grow: 1;\n    position: relative; }\n  .root .stats {\n    position: absolute;\n    height: 200px;\n    width: 60%;\n    top: 0px;\n    left: 0px;\n    display: flex;\n    align-items: center;\n    padding-left: 30px;\n    padding-right: 30px;\n    box-sizing: border-box; }\n    .root .stats.stat-local {\n      width: 40%; }\n    .root .stats .stats-header {\n      position: absolute;\n      top: 0px;\n      left: 40px;\n      font-size: 12px; }\n      .root .stats .stats-header .dt {\n        display: flex; }\n        .root .stats .stats-header .dt .lbl {\n          margin-right: 5px;\n          color: #666;\n          font-style: italic; }\n    .root .stats .stat {\n      padding: 40px;\n      box-sizing: border-box;\n      margin: 10px;\n      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n      border-radius: 10px;\n      flex-grow: 1;\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      position: relative; }\n      .root .stats .stat.confirmed {\n        color: white;\n        background: linear-gradient(90deg, #2a6792, #933df1); }\n        .root .stats .stat.confirmed::before {\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "); }\n      .root .stats .stat.recovered {\n        color: white;\n        background: linear-gradient(90deg, #4aa79a, #5fb159); }\n        .root .stats .stat.recovered::before {\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + "); }\n      .root .stats .stat.deaths {\n        color: #424242;\n        background-color: white; }\n        .root .stats .stat.deaths::before {\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + "); }\n      .root .stats .stat.screened {\n        color: #ffffff;\n        background: linear-gradient(37deg, #640d0d 20%, #2a38ff 100%); }\n        .root .stats .stat.screened::before {\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + "); }\n      .root .stats .stat.employees {\n        color: #ffffff;\n        background: linear-gradient(3deg, #00127f 18%, #6affc2 100%); }\n        .root .stats .stat.employees::before {\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); }\n      .root .stats .stat.oranges {\n        color: #ffffff;\n        background: linear-gradient(20deg, #940031 0%, #ff8a0f 77%); }\n        .root .stats .stat.oranges::before {\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + "); }\n      .root .stats .stat::before {\n        content: \"\";\n        position: absolute;\n        display: block;\n        left: 17px;\n        top: -10px;\n        bottom: 0px;\n        width: 30%;\n        background-position: center;\n        background-size: 30px;\n        background-repeat: no-repeat; }\n      .root .stats .stat .metric {\n        font-size: 1.9em;\n        margin-left: 30%; }\n      .root .stats .stat .title {\n        font-size: 0.9em;\n        margin: 10px 0px 10px 30%; }\n  .root .map {\n    position: absolute;\n    left: 0px;\n    width: 60%;\n    bottom: 0px;\n    top: 200px; }\n    .root .map.local-map {\n      width: 40%; }\n    .root .map .map-widget {\n      position: absolute;\n      left: 40px;\n      top: 40px;\n      right: 40px;\n      bottom: 40px;\n      border-radius: 20px;\n      overflow: hidden;\n      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); }\n      .root .map .map-widget .filters {\n        position: absolute;\n        z-index: 401;\n        right: 15px;\n        top: 15px;\n        display: flex; }\n        .root .map .map-widget .filters .switch {\n          margin: 5px 10px;\n          padding: 10px 10px 10px 10px;\n          border-radius: 20px;\n          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n          cursor: pointer;\n          font-size: 11px;\n          text-transform: uppercase;\n          background-color: #efefef;\n          color: #424242; }\n          .root .map .map-widget .filters .switch.set {\n            font-weight: bold; }\n          .root .map .map-widget .filters .switch.confirmed.set {\n            color: white;\n            background: linear-gradient(90deg, #2a6792, #933df1); }\n            .root .map .map-widget .filters .switch.confirmed.set::before {\n              background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "); }\n          .root .map .map-widget .filters .switch.confirmed:hover {\n            color: white;\n            background: linear-gradient(90deg, #2a6792, #933df1); }\n            .root .map .map-widget .filters .switch.confirmed:hover::before {\n              background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "); }\n          .root .map .map-widget .filters .switch.recovered.set {\n            color: white;\n            background: linear-gradient(90deg, #4aa79a, #5fb159); }\n            .root .map .map-widget .filters .switch.recovered.set::before {\n              background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + "); }\n          .root .map .map-widget .filters .switch.recovered:hover {\n            color: white;\n            background: linear-gradient(90deg, #4aa79a, #5fb159); }\n            .root .map .map-widget .filters .switch.recovered:hover::before {\n              background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + "); }\n          .root .map .map-widget .filters .switch.deaths.set {\n            color: white;\n            background: linear-gradient(20deg, #940031 0%, #ff8a0f 77%); }\n            .root .map .map-widget .filters .switch.deaths.set::before {\n              background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + "); }\n          .root .map .map-widget .filters .switch.deaths:hover {\n            color: white;\n            background: linear-gradient(20deg, #940031 0%, #ff8a0f 77%); }\n            .root .map .map-widget .filters .switch.deaths:hover::before {\n              background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + "); }\n          .root .map .map-widget .filters .switch.screened.set {\n            color: #ffffff;\n            background: linear-gradient(37deg, #640d0d 20%, #2a38ff 100%); }\n            .root .map .map-widget .filters .switch.screened.set::before {\n              background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + "); }\n          .root .map .map-widget .filters .switch.screened:hover {\n            color: #ffffff;\n            background: linear-gradient(37deg, #640d0d 20%, #2a38ff 100%); }\n            .root .map .map-widget .filters .switch.screened:hover::before {\n              background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + "); }\n          .root .map .map-widget .filters .switch.employees.set {\n            color: #ffffff;\n            background: linear-gradient(3deg, #00127f 18%, #6affc2 100%); }\n            .root .map .map-widget .filters .switch.employees.set::before {\n              background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); }\n          .root .map .map-widget .filters .switch.employees:hover {\n            color: #ffffff;\n            background: linear-gradient(3deg, #00127f 18%, #6affc2 100%); }\n            .root .map .map-widget .filters .switch.employees:hover::before {\n              background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); }\n          .root .map .map-widget .filters .switch.oranges.set {\n            color: #ffffff;\n            background: linear-gradient(20deg, #940031 0%, #ff8a0f 77%); }\n            .root .map .map-widget .filters .switch.oranges.set::before {\n              background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + "); }\n          .root .map .map-widget .filters .switch.oranges:hover {\n            color: #ffffff;\n            background: linear-gradient(20deg, #940031 0%, #ff8a0f 77%); }\n            .root .map .map-widget .filters .switch.oranges:hover::before {\n              background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + "); }\n          .root .map .map-widget .filters .switch::before {\n            content: \"\";\n            display: none;\n            position: absolute;\n            left: -20px;\n            top: -4px;\n            bottom: 0px;\n            width: 30%;\n            background-position: center;\n            background-size: 11px;\n            background-repeat: no-repeat; }\n      .root .map .map-widget .gmap {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        left: 0px;\n        top: 0px; }\n        .root .map .map-widget .gmap .leaflet-container {\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          left: 0px;\n          top: 0px;\n          z-index: 400;\n          border-radius: 20px;\n          background-color: white; }\n          .root .map .map-widget .gmap .leaflet-container .leaflet-tile-container {\n            opacity: 0.5;\n            filter: saturate(20%); }\n  .root > .header {\n    flex-grow: 0;\n    height: 70px;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 0px 40px; }\n    .root > .header .logo {\n      flex-grow: 0;\n      width: 186px;\n      height: 40px;\n      display: block;\n      text-decoration: none;\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjkuNjIgMTcuMjEiPjxkZWZzPjxzdHlsZT4uY2xzLTEsLmNscy0yLC5jbHMtM3tmaWxsOm5vbmU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDowLjc1cHg7fS5jbHMtMXtzdHJva2U6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTJ7c3Ryb2tlOnVybCgjbGluZWFyLWdyYWRpZW50LTIpO30uY2xzLTN7c3Ryb2tlOnVybCgjbGluZWFyLWdyYWRpZW50LTMpO308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB5MT0iOC42MSIgeDI9IjEwLjU3IiB5Mj0iOC42MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzI5YWJlMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwNzFiYyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMiIgeDE9IjkuODIiIHkxPSI1LjM1IiB4Mj0iMjAuMTkiIHkyPSI1LjM1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmY5MzFlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmYxZDI1Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0zIiB4MT0iMTQuNTciIHkxPSI5LjUzIiB4Mj0iMjIuMiIgeTI9IjkuNTMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjFkMjUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjhhMWYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwLjE5LDUuMTNBNC45LDQuOSwwLDAsMCw1LjMzLjM4LDQuODUsNC44NSwwLDAsMCwuNDcsNS4yNHMtMS41NSw1LjYsOC4xLDExLjYiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNSwxMC4yMUE0Ljg2LDQuODYsMCwxLDAsMTUsLjQ5YTQuNjksNC42OSwwLDAsMC00Ljc2LDQuNzUiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yMS44MiwxMC4yNGE0Ljg2LDQuODYsMCwwLDAtNi44OCwwIi8+PHBhdGggZD0iTTM5LjE2LDNsLTYuNjEsOS45NEgzMS40N0wzOC4wOCwzWiIvPjxwYXRoIGQ9Ik00Ny4yOSwxMi45MWgtLjk1VjguODNBMy4yNCwzLjI0LDAsMCwwLDQ1LjkxLDdhMS40MSwxLjQxLDAsMCwwLTEuMjUtLjYxLDIuMTMsMi4xMywwLDAsMC0uODEuMTZBMi44OSwyLjg5LDAsMCwwLDQzLjEsN2EyLjcyLDIuNzIsMCwwLDAtLjYuNjYsMi40OCwyLjQ4LDAsMCwwLS4zOS44MnY0LjQ3aC0xVjIuNjloMVY3LjI3QTMuMzcsMy4zNywwLDAsMSw0My4zMSw2LDMuMTksMy4xOSwwLDAsMSw0NSw1LjQ5LDIuMTYsMi4xNiwwLDAsMSw0Niw1LjcyYTIsMiwwLDAsMSwuNzIuNjQsMi45MSwyLjkxLDAsMCwxLC40LDEsNS42LDUuNiwwLDAsMSwuMTMsMS4yOFoiLz48cGF0aCBkPSJNNTMsMTMuMDVhMy41LDMuNSwwLDAsMS0xLjQ2LS4zLDMuNTcsMy41NywwLDAsMS0xLjE2LS44MywzLjg4LDMuODgsMCwwLDEtLjc2LTEuMjEsNCw0LDAsMCwxLS4yNy0xLjQ3LDMuODksMy44OSwwLDAsMSwuMjctMS40NSwzLjYxLDMuNjEsMCwwLDEsLjc2LTEuMTksMy42NSwzLjY1LDAsMCwxLDQuMDctLjgxLDMuNDYsMy40NiwwLDAsMSwxLjE0LjgyLDMuNzMsMy43MywwLDAsMSwuNzQsMS4xOSwzLjc5LDMuNzksMCwwLDEsLjI3LDEuNDN2LjIyYS40NC40NCwwLDAsMSwwLC4xNUg1MC4zN2EzLDMsMCwwLDAsLjg3LDIsMi43OSwyLjc5LDAsMCwwLC44My41NywyLjU5LDIuNTksMCwwLDAsMSwuMiwyLjM3LDIuMzcsMCwwLDAsLjctLjEsMi42OCwyLjY4LDAsMCwwLC42NS0uMjYsMi42NSwyLjY1LDAsMCwwLC41My0uNDIsMS42LDEuNiwwLDAsMCwuMzYtLjU0bC44My4yM2EyLjMxLDIuMzEsMCwwLDEtLjQ4LjczLDMuMzksMy4zOSwwLDAsMS0uNzEuNTgsMy4yOCwzLjI4LDAsMCwxLS45LjM3QTMuNzUsMy43NSwwLDAsMSw1MywxMy4wNVptMi42OS00LjE3QTIuODcsMi44NywwLDAsMCw1NC44Niw3LDIuNywyLjcsMCwwLDAsNTQsNi40M2EyLjM4LDIuMzgsMCwwLDAtMS0uMiwyLjUsMi41LDAsMCwwLTEsLjIsMi41OSwyLjU5LDAsMCwwLS44My41NCwyLjcxLDIuNzEsMCwwLDAtLjU3Ljg0LDIuOSwyLjksMCwwLDAtLjI2LDEuMDdaIi8+PHBhdGggZD0iTTYwLjQ5LDEzLjA1YTIuNTYsMi41NiwwLDAsMS0xLS4xOCwyLjI3LDIuMjcsMCwwLDEtMS4yOC0xLjIsMi4yMSwyLjIxLDAsMCwxLS4xOC0uODksMS43NywxLjc3LDAsMCwxLC4yMi0uODgsMi4xLDIuMSwwLDAsMSwuNjMtLjcsMy4xMSwzLjExLDAsMCwxLDEtLjQ2LDQuNyw0LjcsMCwwLDEsMS4yMy0uMTYsNi4zNSw2LjM1LDAsMCwxLDEuMTQuMSw1LjM4LDUuMzgsMCwwLDEsMSwuMjhWOC4zYTIuMSwyLjEsMCwwLDAtLjU1LTEuNTMsMiwyLDAsMCwwLTEuNTEtLjU3LDMuMjMsMy4yMywwLDAsMC0xLjE1LjIzLDUuNTYsNS41NiwwLDAsMC0xLjE5LjY0bC0uMzMtLjYzYTQuOTMsNC45MywwLDAsMSwyLjc0LTEsMywzLDAsMCwxLDIuMTYuNzcsMi44NSwyLjg1LDAsMCwxLC43OCwyLjEzdjMuMjljMCwuMjYuMTIuMzkuMzUuMzl2Ljg0YTIsMiwwLDAsMS0uMzYsMCwuODEuODEsMCwwLDEtLjU3LS4xOC42Ny42NywwLDAsMS0uMjItLjUxbDAtLjU3YTMuMjksMy4yOSwwLDAsMS0xLjI2LDFBNCw0LDAsMCwxLDYwLjQ5LDEzLjA1Wm0uMjMtLjczQTMuMjEsMy4yMSwwLDAsMCw2Mi4wOCwxMmEyLjI2LDIuMjYsMCwwLDAsMS0uNzQsMS4yNiwxLjI2LDAsMCwwLC4xOS0uMjguNjYuNjYsMCwwLDAsLjA2LS4yN1Y5LjU2YTYuNiw2LjYsMCwwLDAtMS0uMjgsNiw2LDAsMCwwLTEtLjEsMi45MSwyLjkxLDAsMCwwLTEuNjQuNDJBMS4yOCwxLjI4LDAsMCwwLDU5LDEwLjcxYTEuNTEsMS41MSwwLDAsMCwuMTMuNjMsMS40NiwxLjQ2LDAsMCwwLC4zNy41MSwxLjU1LDEuNTUsMCwwLDAsLjU1LjM0QTEuNzMsMS43MywwLDAsMCw2MC43MiwxMi4zMloiLz48cGF0aCBkPSJNNjYuODksMi42OWgxdjguNTdhLjg1Ljg1LDAsMCwwLC4yMy42My44Mi44MiwwLDAsMCwuNjMuMjMsMS43MSwxLjcxLDAsMCwwLC4zNiwwLDIuMjIsMi4yMiwwLDAsMCwuMzktLjExbC4xNy43N2EzLDMsMCwwLDEtLjY1LjE4LDMuNTUsMy41NSwwLDAsMS0uNjcuMDcsMS4zLDEuMywwLDAsMS0xLjQxLTEuNDFaIi8+PC9nPjwvZz48L3N2Zz4=);\n      background-size: 100px;\n      background-repeat: no-repeat;\n      background-position: 0% 50%; }\n    .root > .header .title {\n      text-align: center;\n      font-size: 14px;\n      font-weight: bold;\n      flex-grow: 1; }\n      .root > .header .title span {\n        font-weight: normal; }\n        .root > .header .title span.highlight {\n          font-weight: bold; }\n    .root > .header .padder {\n      width: 200px; }\n      .root > .header .padder .action {\n        font-size: 11px;\n        padding: 10px 10px;\n        border-radius: 20px;\n        background-color: #969696;\n        color: white;\n        text-align: center;\n        cursor: pointer; }\n      .root > .header .padder .great {\n        text-transform: uppercase;\n        font-size: 0.7rem;\n        color: blue;\n        font-weight: bold; }\n  .root .header-buttons {\n    width: 30%;\n    height: 51px;\n    float: left;\n    clear: both;\n    padding: 20px 40px;\n    box-sizing: border-box;\n    padding-left: 30px;\n    margin-top: 10px;\n    margin-bottom: 10px; }\n    .root .header-buttons .toggle-button {\n      position: relative;\n      display: table;\n      text-transform: uppercase; }\n      .root .header-buttons .toggle-button .label {\n        color: lightgray;\n        font-size: 0.58rem;\n        padding: 0 8px;\n        display: table-cell; }\n        .root .header-buttons .toggle-button .label.global {\n          color: #000; }\n        .root .header-buttons .toggle-button .label.local {\n          color: #000; }\n      .root .header-buttons .toggle-button .range {\n        width: 50px;\n        position: relative;\n        display: table-cell;\n        cursor: pointer; }\n        .root .header-buttons .toggle-button .range .rail {\n          position: absolute;\n          width: 100%;\n          height: 2px;\n          top: 50%;\n          transform: translateY(-50%);\n          background-color: lightgray;\n          border-radius: 100px; }\n        .root .header-buttons .toggle-button .range .slider {\n          width: 20px;\n          height: 20px;\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n          background-repeat: no-repeat;\n          background-position: center;\n          background-size: contain;\n          position: absolute;\n          top: 50%;\n          left: 10px;\n          transform: translateY(-50%);\n          transition-duration: 0.4s; }\n          .root .header-buttons .toggle-button .range .slider.global {\n            left: 0;\n            right: 100%;\n            transform: translateY(-50%);\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + "); }\n          .root .header-buttons .toggle-button .range .slider.local {\n            right: 0;\n            left: 100%;\n            transform: translate(-100%, -50%);\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + "); }\n  .root .micon.confirmed .txt {\n    color: white;\n    background: linear-gradient(90deg, #2a6792, #933df1); }\n  .root .micon.recovered .txt {\n    color: white;\n    background: linear-gradient(90deg, #4aa79a, #5fb159); }\n  .root .micon.deaths .txt {\n    color: white;\n    border: 1px solid #eee;\n    background: linear-gradient(20deg, #940031 0%, #ff8a0f 77%); }\n  .root .micon.screened .txt {\n    color: #ffffff;\n    background: linear-gradient(37deg, #640d0d 20%, #2a38ff 100%); }\n  .root .micon.employees .txt {\n    color: #ffffff;\n    background: linear-gradient(3deg, #00127f 18%, #6affc2 100%); }\n  .root .micon.oranges .txt {\n    color: #ffffff;\n    background: linear-gradient(20deg, #940031 0%, #ff8a0f 77%); }\n  .root .micon .txt {\n    text-align: center;\n    padding: 5px;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    line-height: 25px;\n    font-size: 11px;\n    color: white;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    position: absolute; }\n  .root .micon.tiny .txt {\n    padding: 1px;\n    width: 3px;\n    height: 3px;\n    overflow: hidden; }\n  .root .micon.selected .inner {\n    border-radius: 50%;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    border: 10px solid blue;\n    opacity: 0;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    transform-origin: 0% 0%;\n    animation: map-ripple 2s linear 1s infinite; }\n  .root .micon.selected.confirmed .inner {\n    border: 10px solid blue; }\n  .root .micon.selected.recovered .inner {\n    border: 10px solid green; }\n  .root .micon.selected.deaths .inner {\n    border: 10px solid gray; }\n  .root .micon.selected.screened .inner {\n    border: 10px solid #640d0d; }\n  .root .micon.selected.employees .inner {\n    border: 10px solid #00127f; }\n  .root .micon.selected.oranges .inner {\n    border: 10px solid #f58220; }\n  .root .micon.selected .outer {\n    display: none;\n    border-radius: 50%;\n    position: absolute;\n    width: 150px;\n    height: 150px;\n    border: 4px solid blue;\n    opacity: 0.3;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%); }\n  .root .data-list-container {\n    position: absolute;\n    width: 40%;\n    top: 0px;\n    bottom: 0px;\n    right: 0px; }\n    .root .data-list-container.local-list {\n      width: 60%; }\n      .root .data-list-container.local-list .data-list .header {\n        border-bottom: 1px solid #efefef;\n        padding-top: 20px;\n        padding-bottom: 20px; }\n    .root .data-list-container .data-list {\n      overflow: hidden;\n      font-size: 14px;\n      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n      border-radius: 20px;\n      box-sizing: border-box;\n      display: flex;\n      flex-direction: column;\n      position: absolute;\n      left: 0px;\n      top: 20px;\n      bottom: 40px;\n      right: 40px; }\n      .root .data-list-container .data-list > .header {\n        padding: 40px 20px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center; }\n        .root .data-list-container .data-list > .header .title {\n          font-weight: bold;\n          text-transform: uppercase;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          white-space: nowrap; }\n          .root .data-list-container .data-list > .header .title.local-list {\n            color: #0066ff;\n            font-size: 0.7rem;\n            margin-left: 20px; }\n            .root .data-list-container .data-list > .header .title.local-list .arrow {\n              width: 10px;\n              height: 10px;\n              display: inline-block;\n              margin-right: 10px;\n              background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n              background-position: center;\n              background-repeat: no-repeat;\n              background-size: contain;\n              fill: blue; }\n        .root .data-list-container .data-list > .header .goback {\n          display: inline-block;\n          width: 12px;\n          position: relative;\n          left: -3px;\n          height: 12px;\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n          transform: rotate(90deg);\n          background-position: center;\n          background-repeat: no-repeat;\n          cursor: pointer; }\n        .root .data-list-container .data-list > .header .filters {\n          display: flex;\n          align-items: center; }\n          .root .data-list-container .data-list > .header .filters .lbl {\n            font-size: 11px;\n            text-transform: uppercase;\n            margin-right: 10px; }\n          .root .data-list-container .data-list > .header .filters .switch {\n            margin: 5px 5px;\n            padding: 10px 10px 10px 10px;\n            border-radius: 20px;\n            cursor: pointer;\n            font-size: 11px;\n            text-transform: uppercase;\n            background-color: #efefef;\n            color: #424242; }\n            .root .data-list-container .data-list > .header .filters .switch.set {\n              font-weight: bold; }\n            .root .data-list-container .data-list > .header .filters .switch.confirmed.set {\n              color: white;\n              background: linear-gradient(90deg, #2a6792, #933df1); }\n              .root .data-list-container .data-list > .header .filters .switch.confirmed.set::before {\n                background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "); }\n            .root .data-list-container .data-list > .header .filters .switch.confirmed:hover {\n              color: white;\n              background: linear-gradient(90deg, #2a6792, #933df1); }\n              .root .data-list-container .data-list > .header .filters .switch.confirmed:hover::before {\n                background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "); }\n            .root .data-list-container .data-list > .header .filters .switch.recovered.set {\n              color: white;\n              background: linear-gradient(90deg, #4aa79a, #5fb159); }\n              .root .data-list-container .data-list > .header .filters .switch.recovered.set::before {\n                background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + "); }\n            .root .data-list-container .data-list > .header .filters .switch.recovered:hover {\n              color: white;\n              background: linear-gradient(90deg, #4aa79a, #5fb159); }\n              .root .data-list-container .data-list > .header .filters .switch.recovered:hover::before {\n                background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + "); }\n            .root .data-list-container .data-list > .header .filters .switch.deaths.set {\n              color: white;\n              background: linear-gradient(20deg, #940031 0%, #ff8a0f 77%); }\n              .root .data-list-container .data-list > .header .filters .switch.deaths.set::before {\n                background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + "); }\n            .root .data-list-container .data-list > .header .filters .switch.deaths:hover {\n              color: white;\n              background: linear-gradient(20deg, #940031 0%, #ff8a0f 77%); }\n              .root .data-list-container .data-list > .header .filters .switch.deaths:hover::before {\n                background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + "); }\n            .root .data-list-container .data-list > .header .filters .switch.starred {\n              padding: 10px 12px; }\n              .root .data-list-container .data-list > .header .filters .switch.starred.set {\n                color: #ffffff;\n                background: linear-gradient(37deg, #640d0d 20%, #2a38ff 100%); }\n                .root .data-list-container .data-list > .header .filters .switch.starred.set::before {\n                  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + "); }\n              .root .data-list-container .data-list > .header .filters .switch.starred:hover {\n                color: #ffffff;\n                background: linear-gradient(37deg, #640d0d 20%, #2a38ff 100%); }\n                .root .data-list-container .data-list > .header .filters .switch.starred:hover::before {\n                  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + "); }\n            .root .data-list-container .data-list > .header .filters .switch.all {\n              padding: 10px 20px; }\n              .root .data-list-container .data-list > .header .filters .switch.all.set {\n                color: #ffffff;\n                background: linear-gradient(3deg, #00127f 18%, #6affc2 100%); }\n                .root .data-list-container .data-list > .header .filters .switch.all.set::before {\n                  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); }\n              .root .data-list-container .data-list > .header .filters .switch.all:hover {\n                color: #ffffff;\n                background: linear-gradient(3deg, #00127f 18%, #6affc2 100%); }\n                .root .data-list-container .data-list > .header .filters .switch.all:hover::before {\n                  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); }\n            .root .data-list-container .data-list > .header .filters .switch .icon {\n              width: 8px;\n              height: 8px;\n              display: inline-block;\n              margin-left: 20px;\n              background-position: center;\n              background-repeat: no-repeat;\n              background-size: contain; }\n              .root .data-list-container .data-list > .header .filters .switch .icon.star {\n                margin: 0 10px 0 0;\n                background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + "); }\n              .root .data-list-container .data-list > .header .filters .switch .icon.arrow {\n                margin: 0 0 0 10px;\n                background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n            .root .data-list-container .data-list > .header .filters .switch::before {\n              content: \"\";\n              display: none;\n              position: absolute;\n              left: -20px;\n              top: -4px;\n              bottom: 0px;\n              width: 30%;\n              background-position: center;\n              background-size: 11px;\n              background-repeat: no-repeat; }\n          .root .data-list-container .data-list > .header .filters .search {\n            min-width: 200px;\n            position: relative;\n            display: block;\n            box-sizing: border-box;\n            padding: 8px 20px;\n            border-radius: 55px;\n            border: 0;\n            background: #efefef;\n            color: black;\n            margin-right: 10px;\n            font-size: 13px;\n            outline: none; }\n            .root .data-list-container .data-list > .header .filters .search:focus, .root .data-list-container .data-list > .header .filters .search:active {\n              background-color: white;\n              box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1); }\n      .root .data-list-container .data-list .list-widget {\n        flex-grow: 1;\n        overflow: auto;\n        /* Track */\n        /* Handle */\n        /* Handle on hover */ }\n        .root .data-list-container .data-list .list-widget::-webkit-scrollbar {\n          width: 2px; }\n        .root .data-list-container .data-list .list-widget::-webkit-scrollbar-track {\n          background: #f1f1f1; }\n        .root .data-list-container .data-list .list-widget::-webkit-scrollbar-thumb {\n          background: #888; }\n        .root .data-list-container .data-list .list-widget::-webkit-scrollbar-thumb:hover {\n          background: #555; }\n        .root .data-list-container .data-list .list-widget .selected-item {\n          color: white;\n          background-color: #1e1744;\n          margin: 5px;\n          padding: 25px 10px;\n          border-radius: 10px;\n          cursor: pointer; }\n          .root .data-list-container .data-list .list-widget .selected-item .row1 {\n            display: flex;\n            height: 30px;\n            align-items: center;\n            justify-content: flex-start;\n            margin-bottom: 20px; }\n            .root .data-list-container .data-list .list-widget .selected-item .row1 .c {\n              display: flex;\n              margin-right: 25px;\n              align-items: center; }\n              .root .data-list-container .data-list .list-widget .selected-item .row1 .c .label {\n                margin-right: 15px;\n                font-size: 12px; }\n              .root .data-list-container .data-list .list-widget .selected-item .row1 .c .value {\n                color: rgba(255, 255, 255, 0.7); }\n              .root .data-list-container .data-list .list-widget .selected-item .row1 .c.notify .action {\n                font-size: 11px;\n                padding: 5px 15px;\n                border-radius: 20px;\n                background-color: #969696;\n                color: white;\n                text-align: center;\n                cursor: pointer; }\n          .root .data-list-container .data-list .list-widget .selected-item .row2 {\n            display: flex; }\n            .root .data-list-container .data-list .list-widget .selected-item .row2 .c {\n              background-color: white;\n              border-radius: 10px;\n              color: #424242;\n              margin-right: 10px;\n              padding: 20px 10px;\n              flex-grow: 1; }\n            .root .data-list-container .data-list .list-widget .selected-item .row2 .label {\n              margin-bottom: 5px;\n              font-size: 12px; }\n          .root .data-list-container .data-list .list-widget .selected-item .chart-row {\n            height: 100px;\n            position: relative; }\n            .root .data-list-container .data-list .list-widget .selected-item .chart-row .loading-data {\n              margin: 20px;\n              text-align: center;\n              font-style: italic; }\n        .root .data-list-container .data-list .list-widget .item {\n          background-color: #ededed;\n          display: flex;\n          margin: 5px;\n          padding: 25px 10px;\n          border-radius: 10px;\n          cursor: pointer; }\n          .root .data-list-container .data-list .list-widget .item.local-list {\n            border-radius: 0;\n            background-color: #fff;\n            border-bottom: 1px solid #ededed;\n            padding-top: 15px;\n            padding-bottom: 15px;\n            margin: 0; }\n            .root .data-list-container .data-list .list-widget .item.local-list.preview {\n              background-color: rgba(0, 102, 255, 0.04); }\n            .root .data-list-container .data-list .list-widget .item.local-list .c .label {\n              font-size: 11px;\n              font-weight: bolder; }\n            .root .data-list-container .data-list .list-widget .item.local-list .c .value {\n              font-size: 10px; }\n            .root .data-list-container .data-list .list-widget .item.local-list.warning {\n              background-color: rgba(255, 138, 15, 0.08); }\n            .root .data-list-container .data-list .list-widget .item.local-list.check-in + .check-out {\n              border-top: 6px solid #ededed; }\n            .root .data-list-container .data-list .list-widget .item.local-list.check-in + .arriving {\n              border-top: 6px solid #ededed; }\n            .root .data-list-container .data-list .list-widget .item.local-list.check-out + .arriving {\n              border-top: 6px solid #ededed; }\n          .root .data-list-container .data-list .list-widget .item:hover {\n            background-color: rgba(0, 102, 255, 0.04); }\n          .root .data-list-container .data-list .list-widget .item .c {\n            margin: 0px 5px;\n            width: 120px; }\n            .root .data-list-container .data-list .list-widget .item .c .label {\n              font-size: 11px;\n              margin-bottom: 8px; }\n            .root .data-list-container .data-list .list-widget .item .c .action {\n              font-size: 11px;\n              padding: 5px 15px;\n              border-radius: 20px;\n              background-color: #969696;\n              color: white;\n              text-align: center;\n              cursor: pointer; }\n            .root .data-list-container .data-list .list-widget .item .c.status {\n              width: 11%;\n              position: relative; }\n              .root .data-list-container .data-list .list-widget .item .c.status .label {\n                width: 100%;\n                height: 20px;\n                background-position: top center;\n                background-repeat: no-repeat;\n                background-size: contain;\n                margin-bottom: 0px;\n                position: absolute;\n                top: 50%;\n                transform: translateY(-50%);\n                background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + "); }\n                .root .data-list-container .data-list .list-widget .item .c.status .label.check-out {\n                  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + "); }\n                .root .data-list-container .data-list .list-widget .item .c.status .label.check-in {\n                  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + "); }\n                .root .data-list-container .data-list .list-widget .item .c.status .label.arriving {\n                  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + "); }\n              .root .data-list-container .data-list .list-widget .item .c.status .value {\n                display: none; }\n              .root .data-list-container .data-list .list-widget .item .c.status:hover .label {\n                position: absolute;\n                top: 0;\n                transform: translateY(0); }\n              .root .data-list-container .data-list .list-widget .item .c.status:hover .value {\n                display: block;\n                width: 100%;\n                text-transform: uppercase;\n                text-align: center;\n                font-size: 9px;\n                position: absolute;\n                bottom: 0; }\n            .root .data-list-container .data-list .list-widget .item .c.data-source {\n              width: 13.5%; }\n              .root .data-list-container .data-list .list-widget .item .c.data-source .value img {\n                height: 18px; }\n            .root .data-list-container .data-list .list-widget .item .c.starred {\n              width: 9%;\n              position: relative; }\n              .root .data-list-container .data-list .list-widget .item .c.starred .value.starred {\n                width: 100%;\n                height: 12px;\n                background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n                background-position: center;\n                background-repeat: no-repeat;\n                background-size: contain;\n                position: absolute;\n                top: 50%;\n                left: 0;\n                transform: translateY(-50%); }\n                .root .data-list-container .data-list .list-widget .item .c.starred .value.starred.fill {\n                  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\n                  height: 30px; }\n            .root .data-list-container .data-list .list-widget .item .c.temperature {\n              width: 13.5%; }\n              .root .data-list-container .data-list .list-widget .item .c.temperature .value {\n                position: relative;\n                font-size: 14px; }\n                .root .data-list-container .data-list .list-widget .item .c.temperature .value.celsius::after {\n                  content: \"\\2103\"; }\n                .root .data-list-container .data-list .list-widget .item .c.temperature .value.fahrenheit::after {\n                  content: \"\\2109\"; }\n            .root .data-list-container .data-list .list-widget .item .c.name {\n              width: 21.5%; }\n              .root .data-list-container .data-list .list-widget .item .c.name .label .icon {\n                width: 8px;\n                height: 8px;\n                margin-right: 6px;\n                display: inline-block;\n                background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");\n                background-repeat: no-repeat;\n                background-position: center;\n                background-size: contain; }\n            .root .data-list-container .data-list .list-widget .item .c.location {\n              width: 13.5%; }\n              .root .data-list-container .data-list .list-widget .item .c.location .label .icon {\n                width: 15px;\n                height: 9px;\n                display: inline-block;\n                background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ");\n                background-repeat: no-repeat;\n                background-position: center;\n                background-size: contain; }\n            .root .data-list-container .data-list .list-widget .item .c.last-country {\n              width: 30%; }\n      .root .data-list-container .data-list > .footer {\n        flex-grow: 0;\n        padding: 25px 10px;\n        background-color: #f8f8f8;\n        display: flex;\n        align-items: center;\n        font-size: 11px;\n        margin-top: 10px; }\n        .root .data-list-container .data-list > .footer .tip {\n          margin-right: 10px; }\n        .root .data-list-container .data-list > .footer .action {\n          padding: 5px 15px;\n          border-radius: 20px;\n          background-color: #969696;\n          color: white;\n          text-align: center;\n          cursor: pointer; }\n          .root .data-list-container .data-list > .footer .action:hover {\n            background: blue;\n            background: linear-gradient(9deg, blue 0%, #ff8a0f 95%);\n            color: white; }\n  .root .tt {\n    font-size: 12px;\n    background-color: white;\n    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n    color: #424242;\n    padding: 10px;\n    box-sizing: border-box; }\n    .root .tt .date {\n      font-size: 1.2em;\n      margin-bottom: 5px;\n      font-weight: bold; }\n    .root .tt .c {\n      margin-top: 5px; }\n  .root .bottom-bar {\n    width: 100%;\n    height: 40px;\n    z-index: 499; }\n    .root .bottom-bar .scanning-button {\n      position: absolute;\n      bottom: 0;\n      height: 75px;\n      width: 100%;\n      overflow: hidden; }\n      .root .bottom-bar .scanning-button img {\n        height: 100px;\n        position: absolute;\n        left: 50%;\n        bottom: -20px;\n        transform: translateX(-50%);\n        cursor: pointer; }\n    .root .bottom-bar .qr-code-holder {\n      min-width: 360px;\n      height: 390px;\n      background-color: transparent;\n      position: absolute;\n      left: 50%;\n      bottom: 0px;\n      transform: translateX(-50%);\n      cursor: pointer;\n      overflow: hidden; }\n      .root .bottom-bar .qr-code-holder .qr-code-box {\n        width: 280px;\n        height: 280px;\n        background-color: white;\n        position: absolute;\n        bottom: 78px;\n        left: 46%;\n        transform: translateX(-50%);\n        border-radius: 15px;\n        border: 2px solid #201547; }\n        .root .bottom-bar .qr-code-holder .qr-code-box .header {\n          width: 100%;\n          height: 40px;\n          position: relative; }\n          .root .bottom-bar .qr-code-holder .qr-code-box .header .closeButton {\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: contain;\n            width: 15px;\n            height: 15px;\n            cursor: pointer;\n            position: absolute;\n            top: 15px;\n            right: 15px; }\n        .root .bottom-bar .qr-code-holder .qr-code-box .qr-code-image {\n          width: 120px;\n          height: 120px;\n          display: block;\n          margin: 10px auto; }\n        .root .bottom-bar .qr-code-holder .qr-code-box p {\n          text-align: center;\n          font-size: 11px;\n          margin-top: 10px; }\n        .root .bottom-bar .qr-code-holder .qr-code-box h3 {\n          text-align: center;\n          font-size: 13px;\n          text-transform: uppercase;\n          margin: 0;\n          margin-top: 40px; }\n      .root .bottom-bar .qr-code-holder .qr-code-handle {\n        height: 100px;\n        position: absolute;\n        left: 50%;\n        bottom: -22px;\n        transform: translateX(-50%);\n        cursor: pointer; }\n  .root .message-container {\n    display: block;\n    position: fixed;\n    bottom: 15px;\n    right: 15px;\n    width: 300px;\n    height: auto;\n    max-height: 300px;\n    overflow-y: auto;\n    z-index: 500;\n    padding: 8px;\n    /* Track */\n    /* Handle */\n    /* Handle on hover */ }\n    .root .message-container::-webkit-scrollbar {\n      width: 2px; }\n    .root .message-container::-webkit-scrollbar-track {\n      background: #f1f1f1; }\n    .root .message-container::-webkit-scrollbar-thumb {\n      background: #888; }\n    .root .message-container::-webkit-scrollbar-thumb:hover {\n      background: #555; }\n    .root .message-container .message-box {\n      display: block;\n      width: 100%;\n      height: fit-content;\n      margin-bottom: 4px;\n      box-sizing: border-box;\n      position: relative;\n      background-color: white;\n      color: black;\n      box-shadow: 3px 2px 8px 1px rgba(0, 0, 0, 0.3);\n      border-radius: 15px;\n      padding: 20px 40px 20px 20px;\n      font-size: 0.8rem; }\n      .root .message-container .message-box a {\n        float: right; }\n      .root .message-container .message-box .close {\n        display: block;\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        top: 50%;\n        right: 20px;\n        transform: translate(50%, -50%);\n        box-sizing: border-box;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: contain;\n        cursor: pointer; }\n\n.dialog-sheet {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  background-color: rgba(79, 74, 109, 0.466);\n  z-index: 500; }\n\n.dialog {\n  position: fixed;\n  z-index: 500;\n  left: 40px;\n  top: 40px;\n  bottom: 40px;\n  right: 40px;\n  background-color: white;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  border-radius: 20px; }\n  .dialog.scann-form {\n    left: 20%;\n    right: 20%;\n    height: fit-content;\n    top: 50%;\n    transform: translateY(-50%); }\n    .dialog.scann-form .header {\n      height: 30px; }\n  .dialog .header {\n    flex-grow: 0;\n    height: 70px;\n    padding: 20px;\n    text-align: center;\n    font-size: 22px;\n    font-weight: bold;\n    position: relative;\n    display: flex; }\n    .dialog .header .title {\n      flex-grow: 1; }\n      .dialog .header .title.edit {\n        text-align: left;\n        padding-top: 10px; }\n        .dialog .header .title.edit .check-out {\n          position: relative;\n          padding-left: 40px;\n          font-weight: normal; }\n          .dialog .header .title.edit .check-out::before {\n            content: \"\";\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: contain;\n            width: 30px;\n            height: 25px;\n            position: absolute;\n            top: 0;\n            left: 0; }\n        .dialog .header .title.edit .check-in {\n          position: relative;\n          padding-left: 40px;\n          font-weight: normal; }\n          .dialog .header .title.edit .check-in::before {\n            content: \"\";\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: contain;\n            width: 30px;\n            height: 25px;\n            position: absolute;\n            top: 0;\n            left: 0; }\n        .dialog .header .title.edit .arriving {\n          position: relative;\n          padding-left: 40px;\n          font-weight: normal; }\n          .dialog .header .title.edit .arriving::before {\n            content: \"\";\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: contain;\n            width: 30px;\n            height: 25px;\n            position: absolute;\n            top: 0;\n            left: 0; }\n    .dialog .header .first,\n    .dialog .header .second {\n      flex-grow: 0;\n      width: 100px; }\n    .dialog .header .last {\n      padding-top: 10px;\n      padding-left: 10px; }\n      .dialog .header .last .closer {\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: contain;\n        width: 20px;\n        height: 12px;\n        cursor: pointer; }\n  .dialog .body {\n    flex-grow: 1;\n    padding: 20px 50px; }\n    .dialog .body ol {\n      width: 800px;\n      margin-right: auto;\n      margin-left: auto; }\n      .dialog .body ol li {\n        display: flex;\n        padding: 20px;\n        background-color: #f8f8f8;\n        margin: 10px;\n        border-radius: 10px;\n        font-size: 14px;\n        line-height: 1.5em;\n        align-items: center;\n        color: gray; }\n        .dialog .body ol li .text {\n          flex-grow: 1; }\n        .dialog .body ol li .action-container {\n          flex-grow: 0;\n          width: 200px; }\n        .dialog .body ol li .action {\n          display: inline-block;\n          float: right;\n          font-size: 11px;\n          padding: 5px 15px;\n          border-radius: 20px;\n          background-color: #969696;\n          color: white;\n          text-align: center;\n          cursor: pointer;\n          text-decoration: none; }\n    .dialog .body .left {\n      width: 55%;\n      display: inline-block;\n      box-sizing: border-box; }\n    .dialog .body .middle {\n      display: inline-block;\n      width: 10%;\n      box-sizing: border-box; }\n    .dialog .body .right {\n      width: 33%;\n      display: inline-block;\n      box-sizing: border-box;\n      vertical-align: top; }\n    .dialog .body .qrcodes {\n      display: flex;\n      justify-content: space-evenly; }\n      .dialog .body .qrcodes img {\n        height: 150px; }\n      .dialog .body .qrcodes .caption {\n        font-size: 12px;\n        text-transform: uppercase; }\n    .dialog .body .form-group {\n      position: relative;\n      width: 100%;\n      padding: 10px;\n      box-sizing: border-box; }\n      .dialog .body .form-group .label {\n        position: relative;\n        display: block;\n        width: 100%;\n        margin-bottom: 15px;\n        color: #000;\n        font-weight: 600; }\n        .dialog .body .form-group .label span {\n          float: right;\n          color: lightgray; }\n      .dialog .body .form-group .input {\n        position: relative;\n        display: block;\n        width: 100%;\n        box-sizing: border-box;\n        padding: 10px 20px;\n        border-radius: 35px;\n        background-color: #f8f8f8;\n        border: 0;\n        outline: none; }\n        .dialog .body .form-group .input.filled {\n          background: linear-gradient(3deg, #00127f 18%, #6affc2 100%);\n          color: #fff;\n          box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1); }\n      .dialog .body .form-group.buttons {\n        text-align: center;\n        margin-top: 10px; }\n        .dialog .body .form-group.buttons .submit-button {\n          width: auto;\n          padding: 10px 40px;\n          border-radius: 50px;\n          background-color: #f8f8f8;\n          border: 0;\n          box-shadow: -2px 6px 9px rgba(0, 0, 0, 0.3);\n          color: gray; }\n          .dialog .body .form-group.buttons .submit-button.valid {\n            background-color: orange;\n            color: #fff; }\n      .dialog .body .form-group .feedback {\n        display: block;\n        width: 100%;\n        height: auto;\n        color: black;\n        text-align: center; }\n        .dialog .body .form-group .feedback.info {\n          color: blue; }\n        .dialog .body .form-group .feedback.success {\n          color: green; }\n        .dialog .body .form-group .feedback.error {\n          color: red; }\n    .dialog .body.edit .form-group {\n      position: relative; }\n      .dialog .body.edit .form-group img.data-source-image {\n        height: 28px; }\n      .dialog .body.edit .form-group .temp-units {\n        position: absolute;\n        width: auto;\n        height: 35px;\n        top: 50%;\n        right: 0px;\n        transform: translate(100%, -50%); }\n        .dialog .body.edit .form-group .temp-units .temp-label {\n          display: inline-block;\n          width: 30px;\n          height: 30px;\n          border-radius: 50%;\n          position: relative;\n          margin: 2px;\n          font-size: 0.7rem;\n          cursor: pointer;\n          font-family: sans-serif;\n          font-weight: 300;\n          color: grey; }\n          .dialog .body.edit .form-group .temp-units .temp-label.selected {\n            background: white;\n            box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.2);\n            color: #424242; }\n          .dialog .body.edit .form-group .temp-units .temp-label span {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%); }\n      .dialog .body.edit .form-group .placeholder {\n        width: 180px;\n        height: 180px;\n        background-color: gray;\n        border-radius: 10px;\n        margin: 10px auto; }\n        .dialog .body.edit .form-group .placeholder img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover; }\n      .dialog .body.edit .form-group .take-photo {\n        position: absolute;\n        text-align: center;\n        left: 50%;\n        transform: translateX(-50%);\n        width: auto;\n        padding: 8px;\n        border-radius: 50px;\n        background-color: #f8f8f8;\n        border: 0;\n        color: gray;\n        font-size: 0.6rem;\n        font-weight: 700;\n        text-transform: uppercase;\n        cursor: pointer;\n        outline: none; }\n        .dialog .body.edit .form-group .take-photo .icon {\n          display: inline-block;\n          width: 15px;\n          height: 10px;\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ");\n          background-repeat: no-repeat;\n          background-position: center;\n          background-size: contain; }\n        .dialog .body.edit .form-group .take-photo:hover {\n          background: blue;\n          background: linear-gradient(9deg, blue 0%, #ff8a0f 95%);\n          color: white; }\n      .dialog .body.edit .form-group .label {\n        display: inline-block;\n        width: 33%;\n        font-size: 0.7rem;\n        text-align: right;\n        padding-right: 24px;\n        box-sizing: border-box; }\n        .dialog .body.edit .form-group .label.full-width {\n          width: 100%;\n          display: block;\n          text-align: left; }\n      .dialog .body.edit .form-group .value {\n        font-size: 0.8rem; }\n      .dialog .body.edit .form-group .input {\n        display: inline-block;\n        width: 66%;\n        height: 40px;\n        font: inherit;\n        outline: none; }\n        .dialog .body.edit .form-group .input.filled {\n          box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);\n          background: white;\n          color: black; }\n      .dialog .body.edit .form-group.buttons {\n        text-align: right;\n        margin-top: 0px;\n        outline: none; }\n        .dialog .body.edit .form-group.buttons .save-changes-button,\n        .dialog .body.edit .form-group.buttons .check-in-button {\n          width: auto;\n          padding: 10px 40px;\n          border-radius: 50px;\n          border: 0;\n          color: gray;\n          text-transform: uppercase;\n          outline: none; }\n          .dialog .body.edit .form-group.buttons .save-changes-button:hover,\n          .dialog .body.edit .form-group.buttons .check-in-button:hover {\n            background: blue;\n            background: linear-gradient(9deg, blue 0%, #ff8a0f 95%);\n            color: white; }\n        .dialog .body.edit .form-group.buttons .save-changes-button {\n          background-color: #f8f8f8; }\n        .dialog .body.edit .form-group.buttons .check-in-button {\n          background: transparent; }\n\n@keyframes map-ripple {\n  0% {\n    transform: scale(0.3) translate(-50%, -50%);\n    opacity: 0; }\n  75% {\n    transform: scale(1.75) translate(-50%, -50%);\n    opacity: 0.3; }\n  100% {\n    transform: scale(2) translate(-50%, -50%);\n    opacity: 0; } }\n\n@media (max-width: 1024px) {\n  * {\n    box-sizing: border-box; }\n  html,\n  body {\n    height: 100%; }\n  #root {\n    position: relative;\n    box-sizing: border-box;\n    height: 100%; }\n  .root {\n    position: relative;\n    height: 90%; }\n    .root .header {\n      height: 100px;\n      display: flex;\n      flex-direction: row; }\n    .root .header-buttons {\n      width: auto;\n      height: 31px;\n      box-sizing: border-box;\n      display: block; }\n    .root .data-section {\n      position: relative;\n      height: 100%; }\n      .root .data-section .stats {\n        position: relative;\n        height: auto;\n        width: 100%;\n        box-sizing: border-box; }\n        .root .data-section .stats.stat-local .stats-header {\n          display: none; }\n      .root .data-section .map {\n        width: 100%;\n        position: relative;\n        top: 0;\n        height: 400px; }\n      .root .data-section .data-list-container {\n        width: 100%;\n        position: relative;\n        margin: 0;\n        box-sizing: border-box; }\n        .root .data-section .data-list-container.local-list {\n          margin-bottom: 80px; }\n          .root .data-section .data-list-container.local-list .data-list {\n            margin-bottom: 30px; }\n        .root .data-section .data-list-container .data-list {\n          position: relative;\n          box-sizing: border-box;\n          margin: 0;\n          display: block;\n          height: fit-content; }\n          .root .data-section .data-list-container .data-list .header {\n            height: 120px;\n            display: flex;\n            flex-direction: row; }\n            .root .data-section .data-list-container .data-list .header .filters .search {\n              min-width: 300px; }\n          .root .data-section .data-list-container .data-list .list-widget {\n            display: flex;\n            flex-direction: column;\n            height: 500px;\n            overflow-y: auto; }\n            .root .data-section .data-list-container .data-list .list-widget .item {\n              display: flex;\n              flex-direction: row; }\n    .root .bottom-bar {\n      position: fixed;\n      bottom: 0; }\n    .root .dialog .header .first {\n      display: none; }\n    .root .dialog .header .title {\n      margin-top: 30px; }\n    .root .dialog .header .last {\n      position: absolute;\n      top: 20px;\n      right: 20px; }\n    .root .dialog.scann-form {\n      left: 0;\n      right: 0;\n      transform: translateY(0%);\n      top: 10%; }\n    .root .dialog.info .body .items li {\n      display: flex;\n      flex-direction: column; }\n      .root .dialog.info .body .items li .text,\n      .root .dialog.info .body .items li .action-container {\n        width: 100%; } }\n\n@media (max-width: 768px) {\n  * {\n    box-sizing: border-box; }\n  html,\n  body {\n    height: 100%; }\n  #root {\n    position: relative;\n    box-sizing: border-box;\n    height: 100%; }\n  .root {\n    position: relative; }\n    .root .header {\n      height: 100px;\n      display: flex;\n      flex-direction: row; }\n    .root .header-buttons {\n      width: auto;\n      height: 31px;\n      box-sizing: border-box;\n      display: block; }\n    .root .data-section {\n      position: relative;\n      height: 100%; }\n      .root .data-section .stats {\n        position: relative;\n        height: auto;\n        width: 100%;\n        box-sizing: border-box;\n        padding-top: 40px; }\n        .root .data-section .stats.stat-local {\n          position: relative;\n          height: auto;\n          width: 100%;\n          box-sizing: border-box; }\n          .root .data-section .stats.stat-local .stats-header {\n            display: none; }\n      .root .data-section .map {\n        width: 100%;\n        position: relative;\n        top: 0;\n        height: 400px; }\n      .root .data-section .data-list-container {\n        width: 100%;\n        position: relative;\n        margin: 0;\n        box-sizing: border-box; }\n        .root .data-section .data-list-container.local-list {\n          margin-bottom: 80px; }\n          .root .data-section .data-list-container.local-list .data-list {\n            margin-bottom: 30px; }\n        .root .data-section .data-list-container .data-list {\n          position: relative;\n          box-sizing: border-box;\n          margin: 0;\n          display: block;\n          height: fit-content; }\n          .root .data-section .data-list-container .data-list .header {\n            height: 120px;\n            display: flex;\n            flex-direction: row; }\n            .root .data-section .data-list-container .data-list .header .filters .search {\n              min-width: 300px; }\n          .root .data-section .data-list-container .data-list .list-widget {\n            display: flex;\n            flex-direction: column;\n            height: 500px;\n            overflow-y: auto; }\n            .root .data-section .data-list-container .data-list .list-widget .item {\n              display: flex;\n              flex-direction: row; }\n    .root .bottom-bar {\n      position: fixed;\n      bottom: 0; }\n    .root .dialog .header .first {\n      display: none; }\n    .root .dialog .header .title {\n      margin-top: 30px; }\n    .root .dialog .header .last {\n      position: absolute;\n      top: 20px;\n      right: 20px; }\n    .root .dialog.scann-form {\n      left: 0;\n      right: 0;\n      transform: translateY(0%);\n      top: 10%; }\n    .root .dialog.info .body .items li {\n      display: flex;\n      flex-direction: column; }\n      .root .dialog.info .body .items li .text,\n      .root .dialog.info .body .items li .action-container {\n        width: 100%; } }\n\n@media (max-width: 490px) {\n  * {\n    box-sizing: border-box; }\n  html,\n  body {\n    height: 100%; }\n  #root {\n    position: relative;\n    box-sizing: border-box;\n    height: 100%; }\n  .root {\n    position: relative; }\n    .root .header {\n      height: 100px;\n      display: flex;\n      flex-direction: column; }\n      .root .header .logo {\n        width: 100%;\n        display: block;\n        background-position: center; }\n      .root .header .title {\n        display: block;\n        width: 100%;\n        text-align: center;\n        font-size: 14px;\n        font-weight: bold; }\n      .root .header .padder {\n        display: none; }\n    .root .header-buttons {\n      width: auto;\n      height: 31px;\n      box-sizing: border-box;\n      display: block;\n      margin: 0 auto; }\n    .root .toolbar {\n      width: 100%;\n      box-sizing: border-box;\n      margin: 10px 0; }\n      .root .toolbar .toolbar-button {\n        margin: 0px auto; }\n      .root .toolbar .countries.ddl {\n        margin: 0px auto; }\n    .root .data-section {\n      position: relative;\n      height: 100%; }\n      .root .data-section .stats {\n        position: relative;\n        height: auto;\n        width: 100%;\n        box-sizing: border-box;\n        display: flex;\n        flex-direction: column; }\n        .root .data-section .stats .stats-header {\n          position: relative; }\n        .root .data-section .stats.stat-local .stats-header {\n          display: none; }\n      .root .data-section .map {\n        width: 100%;\n        position: relative;\n        top: 0;\n        height: 400px; }\n      .root .data-section .data-list-container {\n        width: 100%;\n        position: relative;\n        margin: 0;\n        box-sizing: border-box;\n        margin-bottom: 80px; }\n        .root .data-section .data-list-container .data-list {\n          position: relative;\n          box-sizing: border-box;\n          margin: 0;\n          display: block;\n          margin-bottom: 30px;\n          height: fit-content; }\n          .root .data-section .data-list-container .data-list .header {\n            height: 150px; }\n            .root .data-section .data-list-container .data-list .header .filters {\n              display: flex;\n              justify-content: center;\n              flex-wrap: wrap; }\n              .root .data-section .data-list-container .data-list .header .filters .search {\n                display: block;\n                width: 100%;\n                text-align: center; }\n          .root .data-section .data-list-container .data-list .list-widget {\n            display: flex;\n            flex-direction: column;\n            height: 500px;\n            overflow-y: auto; }\n            .root .data-section .data-list-container .data-list .list-widget .item {\n              display: flex;\n              flex-direction: row; }\n              .root .data-section .data-list-container .data-list .list-widget .item.local-list .status,\n              .root .data-section .data-list-container .data-list .list-widget .item.local-list .location,\n              .root .data-section .data-list-container .data-list .list-widget .item.local-list .data-source {\n                display: none; }\n    .root .bottom-bar {\n      position: fixed;\n      bottom: 0; }\n    .root .dialog .header .first {\n      display: none; }\n    .root .dialog .header .title {\n      margin-top: 30px; }\n    .root .dialog .header .last {\n      position: absolute;\n      top: 20px;\n      right: 20px; }\n    .root .dialog.scann-form {\n      left: 0;\n      right: 0;\n      top: 0;\n      height: auto;\n      transform: translateY(0); }\n      .root .dialog.scann-form .body .left {\n        width: 100%; }\n        .root .dialog.scann-form .body .left .form-group label,\n        .root .dialog.scann-form .body .left .form-group input {\n          text-align: left;\n          width: 100%; }\n        .root .dialog.scann-form .body .left .form-group .temp-units {\n          top: 0;\n          right: 0;\n          transform: translate(-15px, 50%); }\n          .root .dialog.scann-form .body .left .form-group .temp-units .temp-label {\n            margin: 6px; }\n      .root .dialog.scann-form .body .middle {\n        display: none; }\n      .root .dialog.scann-form .body .right {\n        width: 100%; }\n    .root .dialog.info .body .items li {\n      display: flex;\n      flex-direction: column; }\n      .root .dialog.info .body .items li .text,\n      .root .dialog.info .body .items li .action-container {\n        width: 100%; } }\n\n.report-section {\n  position: relative;\n  flex-grow: 1;\n  margin-top: 20px; }\n  .report-section .report-container {\n    position: absolute;\n    width: auto;\n    top: 0px;\n    bottom: 0px;\n    left: 40px;\n    right: 40px;\n    overflow: hidden;\n    font-size: 11px;\n    box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.13);\n    border-radius: 20px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column; }\n    .report-section .report-container .header {\n      padding: 20px;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      border-bottom: 1px solid #efefef; }\n      .report-section .report-container .header .title {\n        font-weight: bold;\n        text-transform: uppercase;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap; }\n        .report-section .report-container .header .title .arrow.hide {\n          display: none; }\n      .report-section .report-container .header .last-updated {\n        font-size: 9px; }\n        .report-section .report-container .header .last-updated i {\n          font-style: italic; }\n        .report-section .report-container .header .last-updated span {\n          font-weight: 700;\n          max-width: 250px;\n          overflow: hidden; }\n      .report-section .report-container .header .filters .search-box {\n        width: auto;\n        position: relative;\n        display: block;\n        box-sizing: border-box;\n        padding: 0px 30px;\n        border-radius: 55px;\n        border: 0;\n        background: #efefef;\n        color: black;\n        font-size: 13px;\n        outline: none;\n        margin-right: 10px; }\n        .report-section .report-container .header .filters .search-box.hide {\n          display: none; }\n        .report-section .report-container .header .filters .search-box .search {\n          min-width: 160px;\n          position: relative;\n          display: block;\n          padding: 8px;\n          border-radius: 0;\n          border: 0;\n          background: #efefef;\n          color: black;\n          font-size: 13px;\n          outline: none;\n          font-family: \"Raleway\"; }\n        .report-section .report-container .header .filters .search-box .close-button {\n          display: none; }\n        .report-section .report-container .header .filters .search-box::before {\n          content: \"\";\n          position: absolute;\n          top: 50%;\n          left: 10px;\n          width: 20px;\n          height: 12px;\n          transform: translateY(-50%);\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\n          background-repeat: no-repeat;\n          background-position: center;\n          background-size: contain; }\n        .report-section .report-container .header .filters .search-box:focus-within, .report-section .report-container .header .filters .search-box.filled {\n          background-color: white;\n          box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.13); }\n          .report-section .report-container .header .filters .search-box:focus-within .search, .report-section .report-container .header .filters .search-box.filled .search {\n            background-color: white; }\n          .report-section .report-container .header .filters .search-box:focus-within .close-button, .report-section .report-container .header .filters .search-box.filled .close-button {\n            display: block;\n            position: absolute;\n            top: 50%;\n            right: 10px;\n            width: 20px;\n            height: 8px;\n            transform: translateY(-50%);\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: contain;\n            cursor: pointer; }\n    .report-section .report-container .body {\n      display: block;\n      position: relative;\n      width: 100%;\n      height: 100%;\n      overflow-y: auto;\n      /* Track */\n      /* Handle */\n      /* Handle on hover */ }\n      .report-section .report-container .body::-webkit-scrollbar {\n        width: 2px; }\n      .report-section .report-container .body::-webkit-scrollbar-track {\n        background: #f1f1f1; }\n      .report-section .report-container .body::-webkit-scrollbar-thumb {\n        background: #888; }\n      .report-section .report-container .body::-webkit-scrollbar-thumb:hover {\n        background: #555; }\n      .report-section .report-container .body .back-button-container {\n        display: block;\n        box-sizing: border-box;\n        /* height: 15px; */\n        position: relative;\n        padding: 30px 15px 15px 15px;\n        text-transform: uppercase;\n        font-size: 9px;\n        font-weight: 800; }\n        .report-section .report-container .body .back-button-container.hide {\n          display: none; }\n        .report-section .report-container .body .back-button-container .back-button {\n          position: relative;\n          padding-left: 30px;\n          cursor: pointer; }\n          .report-section .report-container .body .back-button-container .back-button::before {\n            content: \"\";\n            position: absolute;\n            height: 10px;\n            width: 15px;\n            top: 50%;\n            left: 8px;\n            transform: translateY(-50%);\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ");\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: contain; }\n      .report-section .report-container .body .reports {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        align-items: flex-start;\n        padding: 20px 20px 80px 20px; }\n        .report-section .report-container .body .reports .report-card {\n          width: 220px;\n          height: 220px;\n          border-radius: 15px;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          margin: 20px;\n          box-sizing: border-box;\n          background-color: #efefef;\n          cursor: pointer; }\n          .report-section .report-container .body .reports .report-card .report-image {\n            width: 80px;\n            margin: 20px;\n            height: 80px;\n            background-size: contain;\n            background-repeat: no-repeat;\n            background-position: center; }\n          .report-section .report-container .body .reports .report-card .report-name {\n            margin-top: 10px;\n            text-transform: uppercase;\n            font-weight: 800; }\n          .report-section .report-container .body .reports .report-card:hover {\n            background-color: white;\n            box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.13); }\n      .report-section .report-container .body .contact-tracing-block {\n        position: relative;\n        display: block;\n        height: 90%; }\n        .report-section .report-container .body .contact-tracing-block .search-box {\n          position: absolute;\n          top: 40%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          width: 500px;\n          display: block;\n          box-sizing: border-box;\n          padding: 15px 80px 15px 20px;\n          border-radius: 55px;\n          border: 0;\n          background: #efefef;\n          color: black;\n          font-size: 13px;\n          outline: none;\n          margin: auto; }\n          .report-section .report-container .body .contact-tracing-block .search-box .search {\n            width: 100%;\n            position: relative;\n            display: block;\n            padding: 8px;\n            border-radius: 0;\n            border: 0;\n            background: #efefef;\n            color: black;\n            font-size: 15px;\n            outline: none;\n            font-family: \"Raleway\"; }\n          .report-section .report-container .body .contact-tracing-block .search-box .search-button {\n            position: absolute;\n            top: 50%;\n            right: 10px;\n            width: 80px;\n            height: 30px;\n            transform: translateY(-50%);\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: contain;\n            cursor: pointer; }\n          .report-section .report-container .body .contact-tracing-block .search-box::before {\n            content: \"\";\n            position: absolute;\n            top: 50%;\n            left: -250px;\n            width: 200px;\n            height: 200px;\n            transform: translateY(-50%);\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: contain; }\n          .report-section .report-container .body .contact-tracing-block .search-box::after {\n            content: \"\";\n            position: absolute;\n            top: 50%;\n            right: -250px;\n            width: 200px;\n            height: 200px;\n            transform: translateY(-50%);\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: contain; }\n          .report-section .report-container .body .contact-tracing-block .search-box:focus-within, .report-section .report-container .body .contact-tracing-block .search-box.filled {\n            background-color: white;\n            box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.13); }\n            .report-section .report-container .body .contact-tracing-block .search-box:focus-within .search, .report-section .report-container .body .contact-tracing-block .search-box.filled .search {\n              background-color: white; }\n        .report-section .report-container .body .contact-tracing-block .search-result-container {\n          display: block;\n          min-height: 100px;\n          margin-bottom: 80px; }\n          .report-section .report-container .body .contact-tracing-block .search-result-container .result-item {\n            display: flex;\n            flex-direction: row;\n            flex-wrap: nowrap;\n            align-items: center;\n            justify-content: space-between;\n            position: relative;\n            background-color: #efefef;\n            border-radius: 10px;\n            width: 75%;\n            margin: 4px auto;\n            transition: ease-in-out 0.8s; }\n            .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column {\n              padding: 20px 10px;\n              text-align: left;\n              font-size: 11px;\n              border-bottom: 1px solid #efefef;\n              transition: all 0.4s;\n              border: none; }\n              .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.status {\n                width: 6%;\n                height: 20px;\n                background-position: center;\n                background-repeat: no-repeat;\n                background-size: 15px;\n                background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + "); }\n                .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.status.check-out {\n                  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + "); }\n                .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.status.check-in {\n                  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + "); }\n                .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.status.arriving {\n                  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + "); }\n              .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.name {\n                width: 22%; }\n                .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.name .temp {\n                  position: relative;\n                  font-size: 14px;\n                  display: none; }\n                  .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.name .temp.celsius::after {\n                    content: \"\\2103\"; }\n                  .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.name .temp.fahrenheit::after {\n                    content: \"\\2109\"; }\n              .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.temperature {\n                width: 8%; }\n                .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.temperature .temp {\n                  position: relative;\n                  font-size: 14px; }\n                  .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.temperature .temp.celsius::after {\n                    content: \"\\2103\"; }\n                  .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.temperature .temp.fahrenheit::after {\n                    content: \"\\2109\"; }\n              .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.details {\n                width: 52%; }\n                .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.details .time {\n                  font-weight: 800; }\n                .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.details .connector {\n                  width: 100px;\n                  height: 100%;\n                  display: inline-block;\n                  position: relative; }\n                  .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.details .connector::before {\n                    content: \"\";\n                    width: 40px;\n                    height: 2px;\n                    position: absolute;\n                    top: 50%;\n                    left: 15px;\n                    transform: translateY(-50%);\n                    background-color: orange; }\n                  .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.details .connector::after {\n                    content: \"\";\n                    width: 8px;\n                    height: 8px;\n                    position: absolute;\n                    top: 50%;\n                    /* right: 15px; */\n                    transform: translateY(-50%);\n                    background-color: orange;\n                    border-radius: 50%;\n                    left: 60px; }\n              .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.trace {\n                display: none; }\n              .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.star {\n                display: none; }\n              .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.count {\n                width: 12%; }\n            .report-section .report-container .body .contact-tracing-block .search-result-container .result-item:hover {\n              animation: fadeIn ease-in-out 0.4s;\n              background-color: white;\n              box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.13);\n              margin-top: 8px;\n              margin-bottom: 15px; }\n              .report-section .report-container .body .contact-tracing-block .search-result-container .result-item:hover .column {\n                padding: 30px 10px;\n                border: none; }\n                .report-section .report-container .body .contact-tracing-block .search-result-container .result-item:hover .column.status, .report-section .report-container .body .contact-tracing-block .search-result-container .result-item:hover .column.count, .report-section .report-container .body .contact-tracing-block .search-result-container .result-item:hover .column.temperature {\n                  display: none; }\n                .report-section .report-container .body .contact-tracing-block .search-result-container .result-item:hover .column.name {\n                  font-size: 14px;\n                  width: 25%;\n                  margin-left: 10px; }\n                  .report-section .report-container .body .contact-tracing-block .search-result-container .result-item:hover .column.name .temp {\n                    display: block; }\n                .report-section .report-container .body .contact-tracing-block .search-result-container .result-item:hover .column.details {\n                  width: 55%; }\n                .report-section .report-container .body .contact-tracing-block .search-result-container .result-item:hover .column.trace {\n                  display: block;\n                  width: 15%; }\n                  .report-section .report-container .body .contact-tracing-block .search-result-container .result-item:hover .column.trace .trace-button {\n                    box-sizing: border-box;\n                    display: block;\n                    margin: auto;\n                    background-color: white;\n                    border-radius: 30px;\n                    padding: 13px 16px 10px 44px;\n                    /* text-align: right; */\n                    position: relative;\n                    box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.13);\n                    cursor: pointer;\n                    text-transform: uppercase;\n                    width: 110px;\n                    font-size: 10px; }\n                    .report-section .report-container .body .contact-tracing-block .search-result-container .result-item:hover .column.trace .trace-button::before {\n                      content: \"\";\n                      width: 26px;\n                      height: 16px;\n                      position: absolute;\n                      top: 50%;\n                      left: 14px;\n                      transform: translateY(-50%);\n                      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ");\n                      background-position: center;\n                      background-repeat: no-repeat;\n                      background-size: contain; }\n                .report-section .report-container .body .contact-tracing-block .search-result-container .result-item:hover .column.star {\n                  display: block;\n                  height: 12px;\n                  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n                  background-position: center;\n                  background-repeat: no-repeat;\n                  background-size: 15px;\n                  margin-right: 10px;\n                  padding-left: 60px; }\n          .report-section .report-container .body .contact-tracing-block .search-result-container .no-result {\n            display: block;\n            padding: 40px;\n            text-align: center;\n            font-weight: 700; }\n        .report-section .report-container .body .contact-tracing-block .tracing-container {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          justify-content: center; }\n          .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details {\n            width: 35%;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 20%;\n            overflow-y: auto;\n            overflow-x: hidden; }\n            .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details::-webkit-scrollbar {\n              display: none; }\n            .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block {\n              display: block;\n              margin: 8px 8px 55px 8px;\n              background: #ede2f7;\n              padding: 25px 30px;\n              border-radius: 20px;\n              position: relative; }\n              .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block:nth-child(odd) {\n                background-color: #ede2f7; }\n              .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block:nth-child(even) {\n                background-color: rgba(255, 138, 15, 0.08); }\n              .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block::before {\n                content: \"\";\n                width: 6px;\n                height: 6px;\n                border-radius: 50%;\n                background-color: orange;\n                position: absolute;\n                top: -4px;\n                left: 4px;\n                transform: translateX(-50%); }\n              .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block::after {\n                content: \"\";\n                width: 1px;\n                height: 45px;\n                background-color: orange;\n                position: absolute;\n                bottom: -46px;\n                left: 4px;\n                transform: translateX(-50%); }\n              .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block:first-child::before {\n                display: none; }\n              .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block:last-child::after {\n                display: none; }\n              .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .header {\n                display: block;\n                width: 100%;\n                padding: 10px;\n                position: relative;\n                font-weight: 700; }\n                .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .header .email {\n                  margin-right: 30px; }\n                .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .header .tel {\n                  margin-right: 30px; }\n                .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .header .star {\n                  display: inline-block;\n                  position: absolute;\n                  width: 20px;\n                  height: 12px;\n                  top: 50%;\n                  right: 10px;\n                  transform: translateY(-50%);\n                  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n                  background-position: center;\n                  background-repeat: no-repeat;\n                  background-size: contain; }\n              .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .sub-header {\n                display: block;\n                padding: 10px;\n                width: 100%; }\n                .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .sub-header .name {\n                  display: block;\n                  font-size: 16px;\n                  font-weight: 800;\n                  margin-bottom: 8px; }\n                .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .sub-header .temperature {\n                  display: block;\n                  font-size: 14px; }\n                  .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .sub-header .temperature.celsius::after {\n                    content: \"\\2103\"; }\n              .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .details {\n                display: block;\n                position: relative;\n                padding: 10px;\n                width: 100%; }\n                .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .details .title {\n                  display: block;\n                  font-weight: 700;\n                  text-transform: uppercase;\n                  margin: 4px 0; }\n                .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .details .item {\n                  display: block;\n                  position: relative;\n                  margin-bottom: 8px;\n                  font-size: 10px;\n                  font-weight: 600;\n                  padding-left: 10px; }\n                  .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .details .item::before {\n                    content: \"\";\n                    width: 6px;\n                    height: 6px;\n                    border-radius: 50%;\n                    background-color: black;\n                    position: absolute;\n                    top: 8px;\n                    left: 4px;\n                    transform: translateX(-50%); }\n                  .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .details .item::after {\n                    content: \"\";\n                    width: 1px;\n                    height: 35px;\n                    background-color: black;\n                    position: absolute;\n                    bottom: -12px;\n                    left: 4px;\n                    transform: translateX(-50%); }\n                  .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .details .item:last-child::after {\n                    display: none; }\n                  .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .details .item .name {\n                    display: block;\n                    padding: 6px 10px; }\n                  .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .details .item .other {\n                    display: block;\n                    padding: 6px 10px;\n                    font-weight: 700; }\n                    .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .details .item .other .email {\n                      margin-right: 30px; }\n                    .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .details .item .other .tel {\n                      margin-right: 30px; }\n                    .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details .details-block .details .item .other .star {\n                      display: inline-block;\n                      position: absolute;\n                      width: 20px;\n                      height: 8px;\n                      top: 50%;\n                      right: 0px;\n                      transform: translateY(-50%);\n                      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n                      background-position: center;\n                      background-repeat: no-repeat;\n                      background-size: contain; }\n          .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-nav {\n            width: 20%;\n            height: auto;\n            max-height: 250px;\n            position: absolute;\n            top: 50%;\n            right: 20%;\n            overflow: auto;\n            transform: translateY(-50%);\n            /* Track */\n            /* Handle */\n            /* Handle on hover */ }\n            .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-nav::-webkit-scrollbar {\n              width: 2px; }\n            .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-nav::-webkit-scrollbar-track {\n              background: #f1f1f1; }\n            .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-nav::-webkit-scrollbar-thumb {\n              background: #888; }\n            .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-nav::-webkit-scrollbar-thumb:hover {\n              background: #555; }\n            .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-nav .nav-item {\n              padding: 10px 20px;\n              display: inline-block;\n              margin: 4px;\n              cursor: pointer;\n              text-transform: uppercase;\n              text-decoration: none;\n              color: #424242; }\n              .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-nav .nav-item:hover {\n                background-color: #7000CB;\n                border-radius: 30px;\n                color: white; }\n              .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-nav .nav-item.active {\n                background-color: #efefef;\n                border-radius: 30px;\n                color: purple; }\n\n@media (max-width: 1088px) {\n  .report-section .report-container .body .contact-tracing-block .search-box {\n    width: 400px; }\n    .report-section .report-container .body .contact-tracing-block .search-box::before {\n      left: -200px;\n      width: 150px;\n      height: 150px; }\n    .report-section .report-container .body .contact-tracing-block .search-box::after {\n      right: -200px;\n      width: 150px;\n      height: 150px; }\n  .report-section .report-container .body .contact-tracing-block .search-result-container .result-item {\n    width: 85%; }\n    .report-section .report-container .body .contact-tracing-block .search-result-container .result-item .column.name {\n      width: 18%; }\n  .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-details {\n    width: 55%;\n    left: 5%; }\n  .report-section .report-container .body .contact-tracing-block .tracing-container .tracing-nav {\n    width: 30%;\n    right: 5%; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.report-image.contact-tracking {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NS42IDY4LjI3Ij48ZGVmcz48c3R5bGU+LmNscy0xe29wYWNpdHk6MC40O30uY2xzLTIsLmNscy0ze2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MC41cHg7fS5jbHMtM3tzdHJva2UtZGFzaGFycmF5OjYuODUgNi44NTt9LmNscy00e2ZpbGw6IzQyNDI0Mjt9LmNscy01e2ZpbGw6I2Y5ZDZiYjt9LmNscy02e2ZpbGw6I2Y1ODIyMDt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48ZyBjbGFzcz0iY2xzLTEiPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjU4LjE2IiB5MT0iNjYuNzYiIHgyPSI2MS42NiIgeTI9IjY2Ljc2Ii8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNjguNTEsNjYuNzZoNy43MWE5LjE0LDkuMTQsMCwwLDAsOS4xMy05LjE0VjkuMzlBOS4xNCw5LjE0LDAsMCwwLDc2LjIyLjI1SDEyLjczQTkuMTQsOS4xNCwwLDAsMCwzLjYsOS4zOVYyMS42MiIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjMuNiIgeTE9IjI1LjA0IiB4Mj0iMy42IiB5Mj0iMjguNTQiLz48L2c+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNy4zNSwzMy40NGMwLDItMy42OCw4LjU4LTMuNjgsOC41OFMwLDM1LjQ3LDAsMzMuNDRhMy42OCwzLjY4LDAsMCwxLDcuMzUsMFpNMy42NywzMmExLjM4LDEuMzgsMCwxLDAsMS4zOCwxLjM4QTEuMzcsMS4zNywwLDAsMCwzLjY3LDMyWiIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTY1LjU1LDM0Ljc4YTE5LjcsMTkuNywwLDEsMS0xOS43LTE5LjY5QTE5LjcsMTkuNywwLDAsMSw2NS41NSwzNC43OFoiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik01OC42Miw2NC44NmExOS40NywxOS40NywwLDAsMC0yNy41NSwwLDIsMiwwLDEsMCwyLjgyLDIuODIsMTUuNSwxNS41LDAsMCwxLDIxLjksMCwyLDIsMCwxLDAsMi44My0yLjgyWiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTYxLjc5LDM3LjM1YTI1LjA4LDI1LjA4LDAsMCwxLDEuNzgtMi44NGMuNjMtLjkyLDEuODQtMi4zNSwyLjU3LTMuMmwwLC4yMmMtLjM5LS4zLS43NC0uNjUtMS4xMS0xLC40My4yNC44OC40NSwxLjI5LjcybC4xMi4wOC0uMDkuMTNjLS41OCwxLTEuNzYsMi40LTIuNDQsMy4yOUEyNi4zNiwyNi4zNiwwLDAsMSw2MS43OSwzNy4zNVoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik01Ny4xNSw0OS4zMmMyLjc0LTQuNzIsNi4zMi05LjM4LDkuNTEtMTMuOGwwLC4xMS0xLjE1LS45LDEuMjQuNzcuMDYsMCwwLC4wN0M2NCw0MC4yOSw2MC40MSw0NC45NCw1Ny4xNSw0OS4zMloiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0yOS4yNCwzNy4zNWEyNi40NiwyNi40NiwwLDAsMS0yLjE2LTIuNTdjLS42Ny0uODktMS4zMS0xLjgtMS45LTIuNzVsLS4wOC0uMTQuMTItLjA4Yy40MS0uMjYuODUtLjQ4LDEuMjgtLjcyLS4zNy4zMy0uNzIuNjctMS4xMSwxbDAtLjIxYTMyLjc2LDMyLjc2LDAsMCwxLDIsMi42NkEyNS4wOCwyNS4wOCwwLDAsMSwyOS4yNCwzNy4zNVoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0zMy44OCw0OS4zMmMtMy4yNi00Ljc2LTYuMTktOS4xMi05LTE0LjE2bDAtLjA3LjA1LDAsMS4yNC0uNzhMMjUsMzUuMThsMC0uMTFBMTY3LjM3LDE2Ny4zNywwLDAsMSwzMy44OCw0OS4zMloiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik00NS45MSw4LjM4aDBBMTkuMjUsMTkuMjUsMCwwLDEsNjUuMTYsMjcuNjNWMjhhMCwwLDAsMCwxLDAsMEgyNi42NmEwLDAsMCwwLDEsMCwwdi0uNEExOS4yNSwxOS4yNSwwLDAsMSw0NS45MSw4LjM4WiIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTQ1LjUzLDU0LjI5aDBBMTYuMzcsMTYuMzcsMCwwLDEsMjkuMjYsNDAuMTFsLS43Ny01Ljg4LDExLjEyLDQuNTQuNTQuMTJhMzAuMTgsMzAuMTgsMCwwLDAsNi4zNS42OCwyMS4zOSwyMS4zOSwwLDAsMCw3LjEyLTEuMjlMNjQsMzQuNjEsNjEuMSw0My4xNEExNi4zOSwxNi4zOSwwLDAsMSw0NS41Myw1NC4yOVoiLz48L2c+PC9nPjwvc3ZnPg==); }\n\n.report-image.employee-status {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0My45MyA3MS42Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Y5ZDZiYjt9LmNscy0ye2ZpbGw6I2Y1ODIyMDt9LmNscy0ze2ZpbGw6IzQyNDI0Mjt9LmNscy00e2ZpbGw6IzcwMDBjYjt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00MC42OCwzOC4xMkExOS43LDE5LjcsMCwxLDEsMjEsMTguNDIsMTkuNjksMTkuNjksMCwwLDEsNDAuNjgsMzguMTJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMzMuNzUsNjguMTlhMTkuNDksMTkuNDksMCwwLDAtMjcuNTUsMEEyLDIsMCwwLDAsOSw3MWExNS41LDE1LjUsMCwwLDEsMjEuOSwwLDIsMiwwLDAsMCwyLjgyLTIuODJaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMzYuOTIsNDAuNjhhMjkuNDYsMjkuNDYsMCwwLDEsMS43OC0yLjg0Yy42NC0uOTIsMS44NC0yLjM0LDIuNTctMy4xOWwwLC4yMWMtLjM5LS4zLS43NC0uNjQtMS4xMS0xLC40My4yNC44Ny40NiwxLjI4LjcybC4xMi4wOC0uMDguMTRjLS41OSwxLTEuNzYsMi40LTIuNDQsMy4yOEEyNi40NiwyNi40NiwwLDAsMSwzNi45Miw0MC42OFoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0zMi4yOCw1Mi42NUMzNSw0Ny45MywzOC42LDQzLjI3LDQxLjgsMzguODZsMCwuMTEtMS4xNS0uOTEsMS4yNC43OC4wNywwLDAsLjA3QzM5LjEzLDQzLjYyLDM1LjU0LDQ4LjI3LDMyLjI4LDUyLjY1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTQuMzgsNDAuNjhhMjUuMTEsMjUuMTEsMCwwLDEtMi4xNi0yLjU3LDMwLjUzLDMwLjUzLDAsMCwxLTEuOS0yLjc1bC0uMDktLjE0LjEyLS4wOGMuNDEtLjI2Ljg2LS40NywxLjI4LS43MS0uMzYuMzItLjcyLjY3LTEuMSwxbDAtLjIyYTMyLjg3LDMyLjg3LDAsMCwxLDIsMi42NkEyOS40NiwyOS40NiwwLDAsMSw0LjM4LDQwLjY4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTksNTIuNjVBMTY3LjI1LDE2Ny4yNSwwLDAsMSwwLDM4LjQ5bDAtLjA3LjA2LDBMMS4zLDM3LjZsLTEuMTUuOTEsMC0uMUMzLjM4LDQzLjIsNi4yOCw0Ny41Nyw5LDUyLjY1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIxLDExLjcxaDBBMTkuMjUsMTkuMjUsMCwwLDEsNDAuMywzMXYuNGEwLDAsMCwwLDEsMCwwSDEuNzlhMCwwLDAsMCwxLDAsMFYzMUExOS4yNSwxOS4yNSwwLDAsMSwyMSwxMS43MVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yMC42Nyw1Ny42MmgwQTE2LjM3LDE2LjM3LDAsMCwxLDQuNCw0My40NGwtLjc3LTUuODcsMTEuMTEsNC41NC41NS4xMWEzMC4xMiwzMC4xMiwwLDAsMCw2LjM1LjY5LDIxLjM0LDIxLjM0LDAsMCwwLDcuMTEtMS4zTDM5LjEsMzcuOTRsLTIuODYsOC41NEExNi40MiwxNi40MiwwLDAsMSwyMC42Nyw1Ny42MloiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik00Mi4wNSwxMy44NGgwYTEuMzIsMS4zMiwwLDAsMS0xLjMyLTEuMjRMNDAuMTcsMmExLjg4LDEuODgsMCwwLDEsMS44OC0yaDBhMS44NywxLjg3LDAsMCwxLDEuODcsMkw0My4zNiwxMi42QTEuMzEsMS4zMSwwLDAsMSw0Mi4wNSwxMy44NFoiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjQyLjExIiBjeT0iMTUuNjciIHI9IjAuOTQiLz48L2c+PC9nPjwvc3ZnPg==); }\n\n/* employee report */\n.e-stats {\n  display: flex;\n  justify-content: center; }\n  .e-stats .stat {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 200px;\n    height: 200px;\n    border-radius: 10px;\n    box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.13);\n    text-align: center;\n    margin: 50px; }\n    .e-stats .stat .title {\n      text-transform: uppercase;\n      font-size: 1.1em;\n      font-weight: bold; }\n    .e-stats .stat .value {\n      font-size: 1.7em; }\n    .e-stats .stat .bg {\n      background-size: contain;\n      background-repeat: no-repeat;\n      background-position: center;\n      width: 80px;\n      height: 80px; }\n  .e-stats .office .bg {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgOTMuOSA4MC43MiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye2ZpbGw6I2I1YjViNTt9LmNscy0ze2ZpbGw6IzQyNDI0Mjt9LmNscy00e2ZpbGw6I2Y5ZDZiYjt9LmNscy01e2ZpbGw6IzZhY2NhYjt9LmNscy02e29wYWNpdHk6MC4zNTttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy03e2ZpbGw6IzdjZmNlYjt9LmNscy04e2ZpbGw6IzIwMTU0Nzt9LmNscy05e2ZpbGw6IzUxNTE1MTt9PC9zdHlsZT48L2RlZnM+PGcgY2xhc3M9ImNscy0xIj48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iNTUuMiIgeT0iMjguMzciIHdpZHRoPSIzNi4xNSIgaGVpZ2h0PSI0NS40NyIvPjxyZWN0IHg9IjUyLjY2IiB5PSIyMy42NyIgd2lkdGg9IjQxLjIzIiBoZWlnaHQ9IjQuMDUiLz48cmVjdCBjbGFzcz0iY2xzLTMiIHg9IjYyLjk3IiB5PSIzNy45MiIgd2lkdGg9IjYuMSIgaGVpZ2h0PSI5LjU1Ii8+PHJlY3QgY2xhc3M9ImNscy0zIiB4PSI3Ni41OSIgeT0iMzcuOTIiIHdpZHRoPSI2LjEiIGhlaWdodD0iOS41NSIvPjxyZWN0IGNsYXNzPSJjbHMtMyIgeD0iNjIuOTciIHk9IjU1LjA1IiB3aWR0aD0iNi4xIiBoZWlnaHQ9IjkuNTUiLz48cmVjdCBjbGFzcz0iY2xzLTMiIHg9Ijc2LjU5IiB5PSI1NS4wNSIgd2lkdGg9IjYuMSIgaGVpZ2h0PSI5LjU1Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNTguNzYsMzEuMzFBMjEuMjksMjEuMjksMCwxLDEsMzcuNDcsMTAsMjEuMjksMjEuMjksMCwwLDEsNTguNzYsMzEuMzFaIi8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNNTEuMjcsNjMuODJhMjEuMDUsMjEuMDUsMCwwLDAtMjkuNzgsMCwyLjE2LDIuMTYsMCwwLDAsMy4wNSwzLjA1LDE2Ljc0LDE2Ljc0LDAsMCwxLDIzLjY3LDAsMi4xNiwyLjE2LDAsMCwwLDMuMDYtMy4wNVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik01OC4zNCwyNEgxNi43MnYtLjQ0YzAtOS4yMiw4LjE3LTE0LjEzLDE3LjIzLTE0Ljk1LDMtLjI3LDQuMjYtNi4wNywyLjY0LTguNjMsMCwwLDIyLjI3LDYuNCwyMS43NSwyMy41OFoiLz48aW1hZ2UgY2xhc3M9ImNscy02IiB3aWR0aD0iNzQiIGhlaWdodD0iNjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMjAuNzIpIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVvQUFBQThDQVlBQUFEQnF5eXRBQUFBQ1hCSVdYTUFBQXNTQUFBTEVnSFMzWDc4QUFBRkFFbEVRVlI0WHUyYjRYYWJPQkNGTDY2VHphYmRubjMveDl3MGlaMG0wZjZRcm5VMWpFRFlibEFiN2prNkFveGg5R2xtSkl3OGhCQ3dhVjc3dVJOYU5BekRNSGZPMmdvWGVzU3c5UHNUVUhxRzVUWnlDYndtVUFaT2JkdmI3MEcyZ2JwLzJwNkROZ2xLQUhuMWdQSHhYaFdjZXJROUJhdWFvd3drTFR2bldNL0FMSkFBNE4zc0J3Q0JUZmFBdWFBU0pEYWFZSFlUcFVkWU5VQzFZcjlYYUFUSzVDT0Y4U1dWdld4L3dSaFdUNkFzcERkVFhsTTlRSUFOd3pEeXFscm9xUWNSeUUwNi8wYTJGVnBQc0N3a0JmTUs0R2VxZDNLTTN3TmlHQTRLcXdBbElhZjVpSkJ1QWZ4bGFrTHpZSzBwRzJxRTlDTGxpR3l2L2M0QUU0SnpIcVdRN2xMNU81VTdaR0QwTG5vaHI3R1dhcENPcVR3amQ2eWVUMWhOb0t3MzdSR0IzQUg0S3VVZUVaakM2c0dyYk1neDFBam9DYmxUZ1hwaUh6UlhuVUE1STkwT09TZmRJa0w1Q3VBZktRcUxlV3ROcjlLUjdoMDUveWlrVzVTUU5IZHBKeS8ycUJ0RUVBcnFYd0RmQVh4THgrNVFldFZhU2QyT2NocHlUd0FlRU8yRCtmd0YwZXZZeVRwZEFOQUdhbytjbys0UlFYMUhDVXU5cWhkUTlKUWpnQU9pZllUMGhnam5BRDl0QU1hckxDaHZ4R1A0MGF2dUVlRVFGa05RUWEyVnB5d281aWJtSmFUakRNWG0vRG8zNm5uVEE0YmdOMlR2dWtjT1A2OW5Qa0kyUHhIVUFibWQ5TERtUVlqenFUMTM5RE1wT3VGa0NISUVwSGZSd3p4UUh3V0owdnpFOEdLNHZTS0hvQTQrYkovYU93by85U2piS0M4RWRSVGtEWFYrcFNQZjJxQmVVZWFrSThielB1K0pvamxIMmRxR29RSWp0RnZaVmxCNnJWOHRHM3FjQXRDejlMRkxJVFYxYWkxSEFXUEtPNVRBYkZFRDZNcHJpSWtjaU1Dc25RcW41azBqVFlHaXJEdnF4WGRPc2NuOG82V2VwWFpaSUUyQXFCWlFsQVhXVXRaU2kxMkw3RnNDaXFyZDFMdnhJbU91b09LeEE5T2R1MGc3WEM2OTZXSURmcUd1YXRjMVFIMEtiYUFhdFlGcTFBYXFVUnVvUm0yZ0dyV0JhdFFHcWxFYnFFWnRvQnExZ1dyVU5VRHBnNmg5S0YxVFY3WHJuRjhQZ2lrdzIvYmNOZVhaV0xOMVVrdEFUZDNVSzJ0cHpxNjV6blhWQXNwZVhCY3plTy90K1RQc3hUOXRuS21BYUlObm05cTlDTmdVS05zTEZvYTNLSXM1TCtETVh4SXZrTzFNcmlmd2JQWGdUUUt6b0lKVEt5UzdHT3NuOHJ0N3ZocmlHNUN6ZmttOFVHb3ZiZFMxQlZ4QVJvQVdGcHdhUUFsS3ZZRDd2S2tGcEd1TjlFM3NHL3A3QVhwSWhmWVNtZ1htZWRScGZ3OEFJWVFnYjR0dHVHbG9FZEFCNVZvanBNOTdlNlZPVUUrcFBDTkRlMEVabWpZTTQ4WHMraWdqRzI3cVJjOEFIaEhmdWlxa0kvcFpwS0YyNjVLZkg0aTJQNlAwTGh1R0kzazV5Z3M1dTJMTlF1STcvZDZXL2FqZFB3RDhsMnA2MXhFNURLdGVCZmdlNVlGU0Z5WU1JSHRTand2SnJPMlB5TEFlRU50eVFCbUN0VnpWQkVwN2hlc0trRDZqVy9lMk5KRmg1RVhEUXlvYWdocCswNkJTUWdkaTQreU5YaEF2U2dEdjZmaWl4VmdmcEZwRUtLeEhaRkE2Q3JMZFFFUnlBdGJpVVF3dk52eGRqbkh4S0Jkb3JPbE5sT2RWM29pdEkrQlpvUWVNUTArUDg5Z0J2OGVDZkE3L09rRSttdHFHM2tnRktBay9vTHdScGVGb2wvbllGU05yU3BPNm5RdnFVd1czUnlOZTYzOWhlQVBkcHpleGQ3ejFSajFBb2l3c0JVWm9PdGxjTkkreXMvUlRZa1BaT3p0VEZGQlBvRmdyTEs4VWp1SDlYNi82RDlBLzVJK05GcGIxTW51cytpL1F6L2hYMldEMlQzVU5FakFENm5UU2VIbTF0KzN0cnkzYk9OMC9iVThCb3BwQXFReTA0cVBLOGJYbE5yQUZqbW94S0U4VDhMclFVaWllcmdMcU0raC9EQ3dDaWdERzJuWUFBQUFBU1VWT1JLNUNZSUk9Ii8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNNjAuNjIsNzMuODVIMTMuNzlhMS4zLDEuMywwLDAsMS0xLjMtMS4zdi0uODlINjEuOTJ2Ljg5QTEuMywxLjMsMCwwLDEsNjAuNjIsNzMuODVaIi8+PHBhdGggY2xhc3M9ImNscy04IiBkPSJNNjEuOTMsNzEuNDlIMTIuNDhWNDAuNTVhMS4yNSwxLjI1LDAsMCwxLDEuMjQtMS4yNWg0N2ExLjI1LDEuMjUsMCwwLDEsMS4yNSwxLjI1WiIvPjxyZWN0IGNsYXNzPSJjbHMtOSIgeD0iMTQuMzYiIHk9IjcxLjA1IiB3aWR0aD0iNS43MSIgaGVpZ2h0PSIwLjgxIi8+PHJlY3QgY2xhc3M9ImNscy05IiB4PSI1My41OCIgeT0iNzEuMDUiIHdpZHRoPSI1LjcxIiBoZWlnaHQ9IjAuODEiLz48L2c+PC9nPjwvZz48L3N2Zz4=); }\n  .e-stats .remote .bg {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgOTMuODEgNzguNDQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtMntmaWxsOiNiNWI1YjU7fS5jbHMtM3tmaWxsOiM0MjQyNDI7fS5jbHMtNHtmaWxsOiNmOWQ2YmI7fS5jbHMtNXtmaWxsOiM2YWNjYWI7fS5jbHMtNntvcGFjaXR5OjAuMzU7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtN3tmaWxsOiMyMDE1NDc7fS5jbHMtOHtmaWxsOiM3Y2ZjZWI7fS5jbHMtOXtmaWxsOiM1MTUxNTE7fTwvc3R5bGU+PC9kZWZzPjxnIGNsYXNzPSJjbHMtMSI+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cmVjdCBjbGFzcz0iY2xzLTIiIHg9IjQ1LjY0IiB5PSI0My45MSIgd2lkdGg9IjQ1LjAxIiBoZWlnaHQ9IjIxLjc1Ii8+PHBvbHlnb24gcG9pbnRzPSI5My44MSA0My4xMSA2Ny44MiAyMS4yNyA0Mi40OCA0My4xMSA5My44MSA0My4xMSIvPjxyZWN0IGNsYXNzPSJjbHMtMyIgeD0iNzYuOTMiIHk9IjUyLjA4IiB3aWR0aD0iNy41OSIgaGVpZ2h0PSIxMS44OCIvPjxyZWN0IGNsYXNzPSJjbHMtMyIgeD0iNTEuMTQiIHk9IjQ4Ljk4IiB3aWR0aD0iNi40MiIgaGVpZ2h0PSI1LjU5Ii8+PHJlY3QgY2xhc3M9ImNscy0zIiB4PSI1OC40OCIgeT0iNDguOTgiIHdpZHRoPSI2LjQyIiBoZWlnaHQ9IjUuNTkiLz48cmVjdCBjbGFzcz0iY2xzLTMiIHg9IjUxLjE0IiB5PSI1NS40IiB3aWR0aD0iNi40MiIgaGVpZ2h0PSI1LjU5Ii8+PHJlY3QgY2xhc3M9ImNscy0zIiB4PSI1OC40OCIgeT0iNTUuNCIgd2lkdGg9IjYuNDIiIGhlaWdodD0iNS41OSIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTU3LjE3LDMwLjQxQTIwLjY4LDIwLjY4LDAsMSwxLDM2LjQ5LDkuNzMsMjAuNjgsMjAuNjgsMCwwLDEsNTcuMTcsMzAuNDFaIi8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNNDkuODksNjJBMjAuNDUsMjAuNDUsMCwwLDAsMjEsNjJhMi4xLDIuMSwwLDEsMCwzLDMsMTYuMjYsMTYuMjYsMCwwLDEsMjMsMCwyLjEsMi4xLDAsMCwwLDMtM1oiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik01Ni43NiwyMy4zM0gxNi4zNFYyMi45YzAtOC45NSw3LjkzLTEzLjczLDE2LjczLTE0LjUyQzM2LDguMTIsMzcuMjEsMi40OSwzNS42NCwwYzAsMCwyMS42Myw2LjIyLDIxLjEyLDIyLjlaIi8+PGltYWdlIGNsYXNzPSJjbHMtNiIgd2lkdGg9IjczIiBoZWlnaHQ9IjU5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE5LjQ0KSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFa0FBQUE3Q0FZQUFBQTNtYWNXQUFBQUNYQklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUV4RWxFUVZSNFh1MmJjWE9pTUJERkg5YTJudTNkM1BmL21OZFdxYlZ5ZjVBSEw4c1NncldDSGQ3TVRnSWliSDdzSmtGaVVWVVZGcVcxSGpvZ1IwVlJGRVBIVEtYcUFsRlFqRDFIQXNnY1FibU5Hd3N1QzVJQjAxZjN0cWVVYlpodU4vVWNZRWxJQXNjckMzVDN6MUdWbEpYWmJzb1VyRjVJQnBEYXl0azNSMWdlSE5ySjJkY0x5dTI0QXlBMm1GQldDWnNiS0F2b2xEQitqcUlvWEZBZFNLYi9VUkIzd2RaU3YwTVgxRndnV1VDZllrZXBuOEozQ0txd29QcW1BQm81aEhFZmpyK1h1Z0tiQ3lnTFNNRWNBWHdFWS8xVHZzdklpaFJCa2pUVC9vZUFIZ0E4bXBMQVBGQlR5UU5FTUFjQTcxTGE3eFJBTisyR0lra0JiWUw5Q3JaQkM0dFJ4ZWpqT2E0dE5vd3B4dWdobEJMQVBwajYxK25FVlI0a0cwVnIxREEyQUo3RXRxaGhLYWlwbzhsR2tRTGFBOWlodlprOG5zY1NiQUVEcW9Ia2pHZ3J0SDNRQTJvZ1R3QitpeWtvOWxOVFJaTVhSUitJQWQyajlVMUJNaTFYWVgraEtaY1RTZmVvSVNpa3Z3RCtBSGdPK3phSW8ybUtEbHpUUmFPb0JQQ0d1ZzEzNFZpRlNOTU1HQnpkdkhSam43UkZEZWtQWWxBYVRYT0JwRkgwaUxhdCtsbUpqRzdDUXZKR05xWWNvMm1MR2d4Qk1lMFUwaFQ5a3UyUENJTDlFRkJIajAwL0QxSVVUVU9qbXpjRllObzlvNDJxTGRxVTB3c0Mxd0ZWU1VsSVREVUxhSWQ0Q21NbnhCMnRBZGhadGhkTm1uWWM2UmhWakN3UDBqVUFVVGFTRG9nQmxlaE9XNUlUWWM2K05aSnNnN3kwMDlIdUVTMHdRdE1SYmtwSVI3U2ROQ05JbzRkdFNkM1FKdVc4UHNtV052VVVGb0U5U0YwaDZibStVemJkT014L0luNHlzSEFzSUMwSCt5UWVhRk5QWVZsVEJ6akNYVnNjMllBYWx1ZW50c08yMFZVS0VtVko2OGxYanRtTys1clNpTEorcWM4MlU1TEtnVVJaV0RrMmhYSjhHdVhmR0VqVW1JdG1PM0lCMlFmVDFFMGRwUlcrTHIzb2FBZStTUmYxNlJLUWZyd1dTQmxhSUdWb2daU2hCVktHRmtnWldpQmxhSUdVb1FWU2hoWklHYm9FSkgxbTZyelltMGdYOWVtY0I5ektHRXpkSGp1VlBQLzYvRXhxREtUVVJUMmJRa00rRGQxVVZ6bVE3TWxQc3M5Yjc4TmZCci84OUgyR0tzU3ZyTlhVNTFHd1VwRHNIYkFnckIzUjluRVY0dDl5dmx2MkpuS2hoT2VuQnk0SnkwS3FuRklCZWV0OERzSDRkb0kveEovMUE5Y1hwTDdTUC9xbWE1SUl6NEtDVXdLSUllbmQ1ell2YXVGd3BZYStLa1k0Yms3djNjcGc5SlhBTEN3dmtwcnROUUJVVlZYSkMwcWJZcHBPZHAyUGZZVTh4emU0dTJCN3RNQU82QzRKN0tSZGFsVUowRTB4alo0OTJsVWFDdWdkODEwTDhBTGdGYlhmZThSUlpWT3ZJNjlQOHRMTXJ2T3hnRXJNZTFYSks0Qi9vV1JVdmFOTnZkNW9BdnhJOGlCcDZCSUUwRWJRTGF4UElxZ1gxTzBvRWFkZFg5K1VCVW52Q0Y5aEkzeW1xelJ1WWFYYlN6Qk5PMDI1TktUUWVRTjF3K3lGRHFoUHlzYWZ3bjR1a0xxbE5aTnZhQ0hwYU1jMkF6V09CbFpPSkRHbDJPaVQ3TnZoZGxmZmNxUTdLOTJBYnJycGZ1NHJjZnZydU8wSTF3RUVHRWlTY2tCOElVcFQwSzRpVVVCemdHUkIyU2NGMWpzalcrN2ZKbmdCM1dZVThjN1lwU3h6QUVSWlVBcUx3SFFpT1dxZVpHZmZUVWVHK002c2pDbWN1VUJpcWFBOGl3TEMrNWZTOG4rMzFuci83N2I4YzNJQUVEQUFxVG1vdXpyWHEzdmJVOG8yVExlYmVnb09sUVZKWllCRkgvWHNuMUp1NDNMQXFFWkQ4cFFBTjduR0F2RjBFVWcvWGY4QkoxOE5US3FWVXZFQUFBQUFTVVZPUks1Q1lJST0iLz48cGF0aCBjbGFzcz0iY2xzLTciIGQ9Ik01OSw3MS43MkgxMy40OGExLjI1LDEuMjUsMCwwLDEtMS4yNi0xLjI2di0uODdoNDh2Ljg3QTEuMjUsMS4yNSwwLDAsMSw1OSw3MS43MloiLz48cGF0aCBjbGFzcz0iY2xzLTgiIGQ9Ik02MC4yNCw2OS40NGgtNDhWMzkuMzhhMS4yMiwxLjIyLDAsMCwxLDEuMjItMS4yMUg1OWExLjIyLDEuMjIsMCwwLDEsMS4yMiwxLjIxWiIvPjxyZWN0IGNsYXNzPSJjbHMtOSIgeD0iMTQuMDQiIHk9IjY5IiB3aWR0aD0iNS41NCIgaGVpZ2h0PSIwLjc5Ii8+PHJlY3QgY2xhc3M9ImNscy05IiB4PSI1Mi4xMyIgeT0iNjkiIHdpZHRoPSI1LjU0IiBoZWlnaHQ9IjAuNzkiLz48L2c+PC9nPjwvZz48L3N2Zz4=); }\n  .e-stats .leave .bg {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNzMgODEuNDQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtMntmaWxsOiNkZWRlZGU7fS5jbHMtM3tmaWxsOiNhYmFiYWI7fS5jbHMtNHtmaWxsOiM0MjQyNDI7fS5jbHMtNXtvcGFjaXR5OjAuMzttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy02e2ZpbGw6Izk5OTt9LmNscy03e2ZpbGw6IzdhN2E3YTt9LmNscy04e2ZpbGw6IzUxNTE1MTt9PC9zdHlsZT48L2RlZnM+PGcgY2xhc3M9ImNscy0xIj48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTU3Ljc2LDMwLjQxQTIwLjY4LDIwLjY4LDAsMSwxLDM3LjA4LDkuNzMsMjAuNjgsMjAuNjgsMCwwLDEsNTcuNzYsMzAuNDFaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNTAuNDgsNjJhMjAuNDUsMjAuNDUsMCwwLDAtMjguOTIsMCwyLjEsMi4xLDAsMSwwLDMsMywxNi4yNiwxNi4yNiwwLDAsMSwyMywwLDIuMSwyLjEsMCwxLDAsMy0zWiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTU3LjM2LDIzLjMzSDE2LjkzVjIyLjljMC04Ljk1LDcuOTQtMTMuNzMsMTYuNzMtMTQuNTJDMzYuNTksOC4xMiwzNy44LDIuNDksMzYuMjMsMGMwLDAsMjEuNjMsNi4yMiwyMS4xMywyMi45WiIvPjxpbWFnZSBjbGFzcz0iY2xzLTUiIHdpZHRoPSI3MyIgaGVpZ2h0PSI1OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAyMi40NCkiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRWtBQUFBN0NBWUFBQUEzbWFjV0FBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFFeEVsRVFWUjRYdTJiY1hPaU1CREZIOWEybnUzZDNQZi9tTmRXcWJWeWY1QUhMOHNTZ3JXQ0hkN01UZ0lpYkg3c0prRmlVVlVWRnFXMUhqb2dSMFZSRkVQSFRLWHFBbEZRakQxSEFzZ2NRYm1OR3dzdUM1SUIwMWYzdHFlVWJaaHVOL1VjWUVsSUFzY3JDM1QzejFHVmxKWFpic29VckY1SUJwRGF5dGszUjFnZUhOckoyZGNMeXUyNEF5QTJtRkJXQ1pzYktBdm9sREIranFJb1hGQWRTS2IvVVJCM3dkWlN2ME1YMUZ3Z1dVQ2ZZa2VwbjhKM0NLcXdvUHFtQUJvNWhIRWZqcitYdWdLYkN5Z0xTTUVjQVh3RVkvMVR2c3ZJaWhSQmtqVFQvb2VBSGdBOG1wTEFQRkJUeVFORU1BY0E3MUxhN3hSQU4rMkdJa2tCYllMOUNyWkJDNHRSeGVqak9hNHROb3dweHVnaGxCTEFQcGo2MStuRVZSNGtHMFZyMURBMkFKN0V0cWhoS2FpcG84bEdrUUxhQTlpaHZaazhuc2NTYkFFRHFvSGtqR2dydEgzUUEyb2dUd0IraXlrbzlsTlRSWk1YUlIrSUFkMmo5VTFCTWkxWFlYK2hLWmNUU2Zlb0lTaWt2d0QrQUhnTyt6YUlvMm1LRGx6VFJhT29CUENHdWcxMzRWaUZTTk1NR0J6ZHZIUmpuN1JGRGVrUFlsQWFUWE9CcEZIMGlMYXQrbG1Kakc3Q1F2SkdOcVljbzJtTEdneEJNZTBVMGhUOWt1MlBDSUw5RUZCSGowMC9EMUlVVFVPam16Y0ZZTm85bzQycUxkcVUwd3NDMXdGVlNVbElURFVMYUlkNENtTW54QjJ0QWRoWnRoZE5tblljNlJoVmpDd1AwalVBVVRhU0RvZ0JsZWhPVzVJVFljNitOWkpzZzd5MDA5SHVFUzB3UXRNUmJrcElSN1NkTkNOSW80ZHRTZDNRSnVXOFBzbVdOdlVVRm9FOVNGMGg2Ym0rVXpiZE9NeC9JbjR5c0hBc0lDMEgreVFlYUZOUFlWbFRCempDWFZzYzJZQWFsdWVudHNPMjBWVUtFbVZKNjhsWGp0bU8rNXJTaUxKK3FjODJVNUxLZ1VSWldEazJoWEo4R3VYZkdFalVtSXRtTzNJQjJRZlQxRTBkcFJXK0xyM29hQWUrU1JmMTZSS1FmcndXU0JsYUlHVm9nWlNoQlZLR0ZrZ1pXaUJsYUlHVW9RVlNoaFpJR2JvRUpIMW02cnpZbTBnWDllbWNCOXpLR0V6ZEhqdVZQUC82L0V4cURLVFVSVDJiUWtNK0RkMVVWem1RN01sUHNzOWI3OE5mQnIvODlIMkdLc1N2ck5YVTUxR3dVcERzSGJBZ3JCM1I5bkVWNHQ5eXZsdjJKbktoaE9lbkJ5NEp5MEtxbkZJQmVldDhEc0g0ZG9JL3hKLzFBOWNYcEw3U1AvcW1hNUlJejRLQ1V3S0lJZW5kNXpZdmF1RndwWWErS2tZNGJrN3YzY3BnOUpYQUxDd3ZrcHJ0TlFCVVZWWEpDMHFiWXBwT2RwMlBmWVU4eHplNHUyQjd0TUFPNkM0SjdLUmRhbFVKMEUweGpaNDkybFVhQ3VnZDgxMEw4QUxnRmJYZmU4UlJaVk92STY5UDh0TE1ydk94Z0VyTWUxWEpLNEIvb1dSVXZhTk52ZDVvQXZ4SThpQnA2QklFMEViUUxheFBJcWdYMU8wb0VhZGRYOStVQlVudkNGOWhJM3ltcXpSdVlhWGJTekJOTzAyNU5LVFFlUU4xdyt5RkRxaFB5c2Fmd240dWtMcWxOWk52YUNIcGFNYzJBeldPQmxaT0pER2wyT2lUN052aGRsZmZjcVE3SzkyQWJycnBmdTRyY2Z2cnVPMEkxd0VFR0VpU2NrQjhJVXBUMEs0aVVVQnpnR1JCMlNjRjFqc2pXKzdmSm5nQjNXWVU4YzdZcFN4ekFFUlpVQXFMd0hRaU9XcWVaR2ZmVFVlRytNNnNqQ21jdVVCaXFhQThpd0xDKzVmUzhuKzMxbnIvNzdiOGMzSUFFREFBcVRtb3V6clhxM3ZiVThvMlRMZWJlZ29PbFFWSlpZQkZIL1hzbjFKdTQzTEFxRVpEOHBRQU43bkdBdkYwRVVnL1hmOEJKMThOVEtxVlV2RUFBQUFBU1VWT1JLNUNZSUk9Ii8+PHBhdGggY2xhc3M9ImNscy02IiBkPSJNNTkuNTcsNzEuNzJIMTQuMDlhMS4yNiwxLjI2LDAsMCwxLTEuMjctMS4yNnYtLjg3aDQ4di44N0ExLjI2LDEuMjYsMCwwLDEsNTkuNTcsNzEuNzJaIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNNjAuODQsNjkuNDRoLTQ4VjM5LjM4QTEuMjEsMS4yMSwwLDAsMSwxNCwzOC4xN0g1OS42M2ExLjIxLDEuMjEsMCwwLDEsMS4yMSwxLjIxWiIvPjxyZWN0IGNsYXNzPSJjbHMtOCIgeD0iMTQuNjQiIHk9IjY5IiB3aWR0aD0iNS41NCIgaGVpZ2h0PSIwLjc5Ii8+PHJlY3QgY2xhc3M9ImNscy04IiB4PSI1Mi43MyIgeT0iNjkiIHdpZHRoPSI1LjU0IiBoZWlnaHQ9IjAuNzkiLz48L2c+PC9nPjwvZz48L3N2Zz4=); }\n  .e-stats .unknown .bg {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMy41IDE3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmNjQ2NDt9LmNscy0ye2ZpbGw6IzQyNDI0Mjt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMy4zNCwzLjI1LDEyLjE5LDIuMDksMTMuMzQuOTRhLjU0LjU0LDAsMCwwLDAtLjc4LjU1LjU1LDAsMCwwLS43NywwTDExLDEuNzFhLjU1LjU1LDAsMCwwLDAsLjc3TDEyLjU3LDRhLjU0LjU0LDAsMCwwLC43Ny0uNzdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOS41MS45NGwxLjE1LDEuMTVMOS41MSwzLjI1YS41NC41NCwwLDAsMCwuNzcuNzdsMS41NS0xLjU0YS41Ni41NiwwLDAsMCwwLS43OEwxMC4yOC4xNmEuNTUuNTUsMCwwLDAtLjc3LDAsLjU0LjU0LDAsMCwwLDAsLjc4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQuMzYsMTMuNzFhNC4xMSw0LjExLDAsMCwwLDAtOC4yMkEzLjg5LDMuODksMCwwLDAsMS40Nyw2LjY3LDQuMjksNC4yOSwwLDAsMCwuMzMsOS41YS4zMS4zMSwwLDAsMCwuMzEuMzNBLjMyLjMyLDAsMCwwLDEsOS41MmEzLjU5LDMuNTksMCwwLDEsMS0yLjQsMy4yNywzLjI3LDAsMCwxLDIuNDMtMSwzLjQ3LDMuNDcsMCwwLDEsMCw2Ljk0LjMyLjMyLDAsMSwwLDAsLjY0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQuMzYsMTMuNzFWMTRhNC40NCw0LjQ0LDAsMCwwLDAtOC44OGgwQTQuMjQsNC4yNCwwLDAsMCwxLjIzLDYuNDUsNC41OCw0LjU4LDAsMCwwLDAsOS40OUgwdjBhLjY1LjY1LDAsMCwwLC42My42NWgwYS42Ni42NiwwLDAsMCwuNjUtLjYzLDMuMzMsMy4zMywwLDAsMSwuODctMi4xOSwyLjk0LDIuOTQsMCwwLDEsMi4xOS0uODgsMy4xNCwzLjE0LDAsMCwxLDAsNi4yOC42NS42NSwwLDEsMCwwLDEuM3YtLjY2aDBhMy44LDMuOCwwLDAsMCwwLTcuNkEzLjU5LDMuNTksMCwwLDAsMS43LDYuODksNCw0LDAsMCwwLC42NCw5LjUxaDBhNCw0LDAsMCwxLDEtMi42MUEzLjU5LDMuNTksMCwwLDEsNC4zNSw1LjgxaDBhMy43OSwzLjc5LDAsMCwxLDAsNy41N1oiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik03LDE2LjEyYTMuOTQsMy45NCwwLDAsMC0yLjgtMS4yLDQuMyw0LjMsMCwwLDAtMi44OSwxLjE5LjMzLjMzLDAsMCwwLDAsLjQ2LjMyLjMyLDAsMCwwLC40NSwwLDMuNjYsMy42NiwwLDAsMSwyLjQ1LTEsMy4zMSwzLjMxLDAsMCwxLDIuMzUsMSwuMzEuMzEsMCwwLDAsLjQ1LDBBLjMyLjMyLDAsMCwwLDcsMTYuMTJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNywxNi4xMmwuMjMtLjIzYTQuMjYsNC4yNiwwLDAsMC0zLTEuM2gwdjBhNC42Miw0LjYyLDAsMCwwLTMuMTEsMS4yOC42Ni42NiwwLDAsMC0uMjEuNDguNjIuNjIsMCwwLDAsLjE4LjQ0LjY0LjY0LDAsMCwwLC40Ny4yMUEuNjYuNjYsMCwwLDAsMiwxNi44MmEzLjMsMy4zLDAsMCwxLDIuMjItLjkzLDIuOTQsMi45NCwwLDAsMSwyLjEyLjkyLjYxLjYxLDAsMCwwLC40NS4xOS42NS42NSwwLDAsMCwuNjUtLjY1LjY1LjY1LDAsMCwwLS4xOS0uNDZMNywxNi4xMmwtLjIzLjI0aDBhMy42MiwzLjYyLDAsMCwwLTIuNTgtMS4xMiw0LDQsMCwwLDAtMi42NywxLjExaDBhMy45MiwzLjkyLDAsMCwxLDIuNjYtMS4xaDBhMy41OCwzLjU4LDAsMCwxLDIuNTYsMS4xMVoiLz48L2c+PC9nPjwvc3ZnPg==); }\n\n.e-users {\n  padding: 20px;\n  box-sizing: border-box;\n  overflow: auto; }\n  .e-users .e-user {\n    display: inline-block;\n    position: relative;\n    vertical-align: top;\n    width: 115px;\n    height: 115px;\n    box-sizing: border-box;\n    padding: 10px;\n    margin: 20px;\n    box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.13);\n    border-radius: 5px;\n    text-align: center; }\n    .e-users .e-user .title {\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      font-size: 1.3em; }\n    .e-users .e-user .status {\n      position: absolute;\n      bottom: 10px;\n      font-weight: bold; }\n    .e-users .e-user::after {\n      content: '';\n      position: absolute;\n      right: 5px;\n      top: 5px;\n      width: 20px;\n      height: 20px;\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat; }\n    .e-users .e-user.office::after {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMy41IDE3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzcwMDBjYjt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00LjM2LDEzLjcxYTQuMTEsNC4xMSwwLDAsMCwwLTguMjJBMy44OSwzLjg5LDAsMCwwLDEuNDcsNi42Nyw0LjI5LDQuMjksMCwwLDAsLjMzLDkuNWEuMzEuMzEsMCwwLDAsLjMxLjMzQS4zMi4zMiwwLDAsMCwxLDkuNTJhMy41OSwzLjU5LDAsMCwxLDEtMi40LDMuMjcsMy4yNywwLDAsMSwyLjQzLTEsMy40NywzLjQ3LDAsMCwxLDAsNi45NC4zMi4zMiwwLDEsMCwwLC42NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00LjM2LDEzLjcxVjE0YTQuNDQsNC40NCwwLDAsMCwwLTguODhoMEE0LjI0LDQuMjQsMCwwLDAsMS4yMyw2LjQ1LDQuNTgsNC41OCwwLDAsMCwwLDkuNDlIMHYwYS42NS42NSwwLDAsMCwuNjMuNjVoMGEuNjYuNjYsMCwwLDAsLjY1LS42MywzLjMzLDMuMzMsMCwwLDEsLjg3LTIuMTksMi45NCwyLjk0LDAsMCwxLDIuMTktLjg4LDMuMTQsMy4xNCwwLDAsMSwwLDYuMjguNjUuNjUsMCwxLDAsMCwxLjN2LS42NmgwYTMuOCwzLjgsMCwwLDAsMC03LjZBMy41OSwzLjU5LDAsMCwwLDEuNyw2Ljg5LDQsNCwwLDAsMCwuNjQsOS41MWgwYTQsNCwwLDAsMSwxLTIuNjFBMy41OSwzLjU5LDAsMCwxLDQuMzUsNS44MWgwYTMuNzksMy43OSwwLDAsMSwwLDcuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNywxNi4xMmEzLjk0LDMuOTQsMCwwLDAtMi44LTEuMiw0LjMsNC4zLDAsMCwwLTIuODksMS4xOS4zMy4zMywwLDAsMCwwLC40Ni4zMi4zMiwwLDAsMCwuNDUsMCwzLjY2LDMuNjYsMCwwLDEsMi40NS0xLDMuMzEsMy4zMSwwLDAsMSwyLjM1LDEsLjMxLjMxLDAsMCwwLC40NSwwQS4zMi4zMiwwLDAsMCw3LDE2LjEyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTcsMTYuMTJsLjIzLS4yM2E0LjI2LDQuMjYsMCwwLDAtMy0xLjNoMHYwYTQuNjIsNC42MiwwLDAsMC0zLjExLDEuMjguNjYuNjYsMCwwLDAtLjIxLjQ4LjYyLjYyLDAsMCwwLC4xOC40NC42NC42NCwwLDAsMCwuNDcuMjFBLjY2LjY2LDAsMCwwLDIsMTYuODJhMy4zLDMuMywwLDAsMSwyLjIyLS45MywyLjk0LDIuOTQsMCwwLDEsMi4xMi45Mi42MS42MSwwLDAsMCwuNDUuMTkuNjUuNjUsMCwwLDAsLjY1LS42NS42NS42NSwwLDAsMC0uMTktLjQ2TDcsMTYuMTJsLS4yMy4yNGgwYTMuNjIsMy42MiwwLDAsMC0yLjU4LTEuMTIsNCw0LDAsMCwwLTIuNjcsMS4xMWgwYTMuOTIsMy45MiwwLDAsMSwyLjY2LTEuMWgwYTMuNTgsMy41OCwwLDAsMSwyLjU2LDEuMTFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTIuODEsMi43NUgxMC43NVYuNjlhLjY5LjY5LDAsMSwwLTEuMzgsMFYzLjQ0YS42OS42OSwwLDAsMCwuNjkuNjloMi43NWEuNjkuNjksMCwwLDAsMC0xLjM4WiIvPjwvZz48L2c+PC9zdmc+); }\n    .e-users .e-user.remote::after {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMy41IDE3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzcwMDBjYjt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00LjM2LDEzLjcxYTQuMTEsNC4xMSwwLDAsMCwwLTguMjJBMy44OSwzLjg5LDAsMCwwLDEuNDcsNi42Nyw0LjI5LDQuMjksMCwwLDAsLjMzLDkuNWEuMzEuMzEsMCwwLDAsLjMxLjMzQS4zMi4zMiwwLDAsMCwxLDkuNTJhMy41OSwzLjU5LDAsMCwxLDEtMi40LDMuMjcsMy4yNywwLDAsMSwyLjQzLTEsMy40NywzLjQ3LDAsMCwxLDAsNi45NC4zMi4zMiwwLDEsMCwwLC42NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00LjM2LDEzLjcxVjE0YTQuNDQsNC40NCwwLDAsMCwwLTguODhoMEE0LjI0LDQuMjQsMCwwLDAsMS4yMyw2LjQ1LDQuNTgsNC41OCwwLDAsMCwwLDkuNDlIMHYwYS42NS42NSwwLDAsMCwuNjMuNjVoMGEuNjYuNjYsMCwwLDAsLjY1LS42MywzLjMzLDMuMzMsMCwwLDEsLjg3LTIuMTksMi45NCwyLjk0LDAsMCwxLDIuMTktLjg4LDMuMTQsMy4xNCwwLDAsMSwwLDYuMjguNjUuNjUsMCwxLDAsMCwxLjN2LS42NmgwYTMuOCwzLjgsMCwwLDAsMC03LjZBMy41OSwzLjU5LDAsMCwwLDEuNyw2Ljg5LDQsNCwwLDAsMCwuNjQsOS41MWgwYTQsNCwwLDAsMSwxLTIuNjFBMy41OSwzLjU5LDAsMCwxLDQuMzUsNS44MWgwYTMuNzksMy43OSwwLDAsMSwwLDcuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNywxNi4xMmEzLjk0LDMuOTQsMCwwLDAtMi44LTEuMiw0LjMsNC4zLDAsMCwwLTIuODksMS4xOS4zMy4zMywwLDAsMCwwLC40Ni4zMi4zMiwwLDAsMCwuNDUsMCwzLjY2LDMuNjYsMCwwLDEsMi40NS0xLDMuMzEsMy4zMSwwLDAsMSwyLjM1LDEsLjMxLjMxLDAsMCwwLC40NSwwQS4zMi4zMiwwLDAsMCw3LDE2LjEyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTcsMTYuMTJsLjIzLS4yM2E0LjI2LDQuMjYsMCwwLDAtMy0xLjNoMHYwYTQuNjIsNC42MiwwLDAsMC0zLjExLDEuMjguNjYuNjYsMCwwLDAtLjIxLjQ4LjYyLjYyLDAsMCwwLC4xOC40NC42NC42NCwwLDAsMCwuNDcuMjFBLjY2LjY2LDAsMCwwLDIsMTYuODJhMy4zLDMuMywwLDAsMSwyLjIyLS45MywyLjk0LDIuOTQsMCwwLDEsMi4xMi45Mi42MS42MSwwLDAsMCwuNDUuMTkuNjUuNjUsMCwwLDAsLjY1LS42NS42NS42NSwwLDAsMC0uMTktLjQ2TDcsMTYuMTJsLS4yMy4yNGgwYTMuNjIsMy42MiwwLDAsMC0yLjU4LTEuMTIsNCw0LDAsMCwwLTIuNjcsMS4xMWgwYTMuOTIsMy45MiwwLDAsMSwyLjY2LTEuMWgwYTMuNTgsMy41OCwwLDAsMSwyLjU2LDEuMTFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTIuODEsMi43NUgxMC43NVYuNjlhLjY5LjY5LDAsMSwwLTEuMzgsMFYzLjQ0YS42OS42OSwwLDAsMCwuNjkuNjloMi43NWEuNjkuNjksMCwwLDAsMC0xLjM4WiIvPjwvZz48L2c+PC9zdmc+); }\n    .e-users .e-user.leave::after {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMy4xMiAxNi45MSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM5MjkyOTM7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNC43MSwxMy4zNWE0LjQ1LDQuNDUsMCwxLDAsMC04LjlBNC4yNSw0LjI1LDAsMCwwLDEuNTksNS43Myw0LjY3LDQuNjcsMCwwLDAsLjM1LDguNzlhLjM2LjM2LDAsMCwwLC4zNC4zNi4zNS4zNSwwLDAsMCwuMzYtLjM0LDQsNCwwLDAsMSwxLTIuNkEzLjUzLDMuNTMsMCwwLDEsNC43MSw1LjE0YTMuNzYsMy43NiwwLDEsMSwwLDcuNTEuMzUuMzUsMCwwLDAsMCwuN1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00LjcxLDEzLjM1di4zNWE0LjgxLDQuODEsMCwwLDAsMC05LjYxaDBhNC41OCw0LjU4LDAsMCwwLTMuMzgsMS40QTUsNSwwLDAsMCwwLDguNzhIMHYwYS43LjcsMCwwLDAsLjY4LjdoMGEuNjkuNjksMCwwLDAsLjctLjY3LDMuNTYsMy41NiwwLDAsMSwxLTIuMzcsMy4xNSwzLjE1LDAsMCwxLDIuMzYtMSwzLjM4LDMuMzgsMCwwLDEsMy40LDMuNCwzLjQsMy40LDAsMCwxLTMuNCwzLjQuNy43LDAsMSwwLDAsMS40VjEzaDBhNC4xMSw0LjExLDAsMSwwLDAtOC4yMUEzLjg2LDMuODYsMCwwLDAsMS44NCw2LDQuMiw0LjIsMCwwLDAsLjcsOC44aDBBNC4zMSw0LjMxLDAsMCwxLDEuODQsNiwzLjkxLDMuOTEsMCwwLDEsNC43MSw0LjhoMGE0LjEsNC4xLDAsMSwxLDAsOC4xOVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03LjYyLDE2YTQuMjMsNC4yMywwLDAsMC0zLTEuMzFBNC42Miw0LjYyLDAsMCwwLDEuNDYsMTZhLjM1LjM1LDAsMCwwLDAsLjQ5LjM0LjM0LDAsMCwwLC40OSwwLDMuOTEsMy45MSwwLDAsMSwyLjY1LTEuMSwzLjU2LDMuNTYsMCwwLDEsMi41NCwxLjEuMzQuMzQsMCwwLDAsLjQ5LDBBLjM2LjM2LDAsMCwwLDcuNjIsMTZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNy42MiwxNmwuMjUtLjI1QTQuNTgsNC41OCwwLDAsMCw0LjYsMTQuM2gwdjBhNSw1LDAsMCwwLTMuMzcsMS4zOUEuNy43LDAsMCwwLDEuNywxNi45YS42OC42OCwwLDAsMCwuNDgtLjE5LDMuNTksMy41OSwwLDAsMSwyLjQxLTEsMy4yMywzLjIzLDAsMCwxLDIuMjksMSwuNjcuNjcsMCwwLDAsLjQ5LjIxLjcuNywwLDAsMCwuNS0uMjEuNjkuNjksMCwwLDAsLjItLjUuNjcuNjcsMCwwLDAtLjItLjQ5TDcuNjIsMTZsLS4yNS4yNWgwQTMuODksMy44OSwwLDAsMCw0LjU5LDE1LDQuMjQsNC4yNCwwLDAsMCwxLjcsMTYuMmgwQTQuMjUsNC4yNSwwLDAsMSw0LjU5LDE1aDBhMy44OSwzLjg5LDAsMCwxLDIuNzcsMS4yWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTkuNCwxLjVoMi4yM1YzLjcyYS43NS43NSwwLDEsMCwxLjQ5LDB2LTNBLjc0Ljc0LDAsMCwwLDEyLjM3LDBoLTNhLjc1Ljc1LDAsMCwwLDAsMS41WiIvPjwvZz48L2c+PC9zdmc+); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/leaflet/dist/leaflet-src.js":
/*!**************************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet-src.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* @preserve
 * Leaflet 1.6.0, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

var version = "1.6.0";

/*
 * @namespace Util
 *
 * Various utility functions, used by Leaflet internally.
 */

var freeze = Object.freeze;
Object.freeze = function (obj) { return obj; };

// @function extend(dest: Object, src?: Object): Object
// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
function extend(dest) {
	var i, j, len, src;

	for (j = 1, len = arguments.length; j < len; j++) {
		src = arguments[j];
		for (i in src) {
			dest[i] = src[i];
		}
	}
	return dest;
}

// @function create(proto: Object, properties?: Object): Object
// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
var create = Object.create || (function () {
	function F() {}
	return function (proto) {
		F.prototype = proto;
		return new F();
	};
})();

// @function bind(fn: Function, …): Function
// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
// Has a `L.bind()` shortcut.
function bind(fn, obj) {
	var slice = Array.prototype.slice;

	if (fn.bind) {
		return fn.bind.apply(fn, slice.call(arguments, 1));
	}

	var args = slice.call(arguments, 2);

	return function () {
		return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
	};
}

// @property lastId: Number
// Last unique ID used by [`stamp()`](#util-stamp)
var lastId = 0;

// @function stamp(obj: Object): Number
// Returns the unique ID of an object, assigning it one if it doesn't have it.
function stamp(obj) {
	/*eslint-disable */
	obj._leaflet_id = obj._leaflet_id || ++lastId;
	return obj._leaflet_id;
	/* eslint-enable */
}

// @function throttle(fn: Function, time: Number, context: Object): Function
// Returns a function which executes function `fn` with the given scope `context`
// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
// `fn` will be called no more than one time per given amount of `time`. The arguments
// received by the bound function will be any arguments passed when binding the
// function, followed by any arguments passed when invoking the bound function.
// Has an `L.throttle` shortcut.
function throttle(fn, time, context) {
	var lock, args, wrapperFn, later;

	later = function () {
		// reset lock and call if queued
		lock = false;
		if (args) {
			wrapperFn.apply(context, args);
			args = false;
		}
	};

	wrapperFn = function () {
		if (lock) {
			// called too soon, queue to call later
			args = arguments;

		} else {
			// call and lock until later
			fn.apply(context, arguments);
			setTimeout(later, time);
			lock = true;
		}
	};

	return wrapperFn;
}

// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
// Returns the number `num` modulo `range` in such a way so it lies within
// `range[0]` and `range[1]`. The returned value will be always smaller than
// `range[1]` unless `includeMax` is set to `true`.
function wrapNum(x, range, includeMax) {
	var max = range[1],
	    min = range[0],
	    d = max - min;
	return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
}

// @function falseFn(): Function
// Returns a function which always returns `false`.
function falseFn() { return false; }

// @function formatNum(num: Number, digits?: Number): Number
// Returns the number `num` rounded to `digits` decimals, or to 6 decimals by default.
function formatNum(num, digits) {
	var pow = Math.pow(10, (digits === undefined ? 6 : digits));
	return Math.round(num * pow) / pow;
}

// @function trim(str: String): String
// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
function trim(str) {
	return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

// @function splitWords(str: String): String[]
// Trims and splits the string on whitespace and returns the array of parts.
function splitWords(str) {
	return trim(str).split(/\s+/);
}

// @function setOptions(obj: Object, options: Object): Object
// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
function setOptions(obj, options) {
	if (!obj.hasOwnProperty('options')) {
		obj.options = obj.options ? create(obj.options) : {};
	}
	for (var i in options) {
		obj.options[i] = options[i];
	}
	return obj.options;
}

// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
// be appended at the end. If `uppercase` is `true`, the parameter names will
// be uppercased (e.g. `'?A=foo&B=bar'`)
function getParamString(obj, existingUrl, uppercase) {
	var params = [];
	for (var i in obj) {
		params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
	}
	return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
}

var templateRe = /\{ *([\w_-]+) *\}/g;

// @function template(str: String, data: Object): String
// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
// `('Hello foo, bar')`. You can also specify functions instead of strings for
// data values — they will be evaluated passing `data` as an argument.
function template(str, data) {
	return str.replace(templateRe, function (str, key) {
		var value = data[key];

		if (value === undefined) {
			throw new Error('No value provided for variable ' + str);

		} else if (typeof value === 'function') {
			value = value(data);
		}
		return value;
	});
}

// @function isArray(obj): Boolean
// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
var isArray = Array.isArray || function (obj) {
	return (Object.prototype.toString.call(obj) === '[object Array]');
};

// @function indexOf(array: Array, el: Object): Number
// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
function indexOf(array, el) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === el) { return i; }
	}
	return -1;
}

// @property emptyImageUrl: String
// Data URI string containing a base64-encoded empty GIF image.
// Used as a hack to free memory from unused images on WebKit-powered
// mobile devices (by setting image `src` to this string).
var emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

// inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

function getPrefixed(name) {
	return window['webkit' + name] || window['moz' + name] || window['ms' + name];
}

var lastTime = 0;

// fallback for IE 7-8
function timeoutDefer(fn) {
	var time = +new Date(),
	    timeToCall = Math.max(0, 16 - (time - lastTime));

	lastTime = time + timeToCall;
	return window.setTimeout(fn, timeToCall);
}

var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;
var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') ||
		getPrefixed('CancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };

// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
// `context` if given. When `immediate` is set, `fn` is called immediately if
// the browser doesn't have native support for
// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
// otherwise it's delayed. Returns a request ID that can be used to cancel the request.
function requestAnimFrame(fn, context, immediate) {
	if (immediate && requestFn === timeoutDefer) {
		fn.call(context);
	} else {
		return requestFn.call(window, bind(fn, context));
	}
}

// @function cancelAnimFrame(id: Number): undefined
// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
function cancelAnimFrame(id) {
	if (id) {
		cancelFn.call(window, id);
	}
}


var Util = (Object.freeze || Object)({
	freeze: freeze,
	extend: extend,
	create: create,
	bind: bind,
	lastId: lastId,
	stamp: stamp,
	throttle: throttle,
	wrapNum: wrapNum,
	falseFn: falseFn,
	formatNum: formatNum,
	trim: trim,
	splitWords: splitWords,
	setOptions: setOptions,
	getParamString: getParamString,
	template: template,
	isArray: isArray,
	indexOf: indexOf,
	emptyImageUrl: emptyImageUrl,
	requestFn: requestFn,
	cancelFn: cancelFn,
	requestAnimFrame: requestAnimFrame,
	cancelAnimFrame: cancelAnimFrame
});

// @class Class
// @aka L.Class

// @section
// @uninheritable

// Thanks to John Resig and Dean Edwards for inspiration!

function Class() {}

Class.extend = function (props) {

	// @function extend(props: Object): Function
	// [Extends the current class](#class-inheritance) given the properties to be included.
	// Returns a Javascript function that is a class constructor (to be called with `new`).
	var NewClass = function () {

		// call the constructor
		if (this.initialize) {
			this.initialize.apply(this, arguments);
		}

		// call all constructor hooks
		this.callInitHooks();
	};

	var parentProto = NewClass.__super__ = this.prototype;

	var proto = create(parentProto);
	proto.constructor = NewClass;

	NewClass.prototype = proto;

	// inherit parent's statics
	for (var i in this) {
		if (this.hasOwnProperty(i) && i !== 'prototype' && i !== '__super__') {
			NewClass[i] = this[i];
		}
	}

	// mix static properties into the class
	if (props.statics) {
		extend(NewClass, props.statics);
		delete props.statics;
	}

	// mix includes into the prototype
	if (props.includes) {
		checkDeprecatedMixinEvents(props.includes);
		extend.apply(null, [proto].concat(props.includes));
		delete props.includes;
	}

	// merge options
	if (proto.options) {
		props.options = extend(create(proto.options), props.options);
	}

	// mix given properties into the prototype
	extend(proto, props);

	proto._initHooks = [];

	// add method for calling all hooks
	proto.callInitHooks = function () {

		if (this._initHooksCalled) { return; }

		if (parentProto.callInitHooks) {
			parentProto.callInitHooks.call(this);
		}

		this._initHooksCalled = true;

		for (var i = 0, len = proto._initHooks.length; i < len; i++) {
			proto._initHooks[i].call(this);
		}
	};

	return NewClass;
};


// @function include(properties: Object): this
// [Includes a mixin](#class-includes) into the current class.
Class.include = function (props) {
	extend(this.prototype, props);
	return this;
};

// @function mergeOptions(options: Object): this
// [Merges `options`](#class-options) into the defaults of the class.
Class.mergeOptions = function (options) {
	extend(this.prototype.options, options);
	return this;
};

// @function addInitHook(fn: Function): this
// Adds a [constructor hook](#class-constructor-hooks) to the class.
Class.addInitHook = function (fn) { // (Function) || (String, args...)
	var args = Array.prototype.slice.call(arguments, 1);

	var init = typeof fn === 'function' ? fn : function () {
		this[fn].apply(this, args);
	};

	this.prototype._initHooks = this.prototype._initHooks || [];
	this.prototype._initHooks.push(init);
	return this;
};

function checkDeprecatedMixinEvents(includes) {
	if (typeof L === 'undefined' || !L || !L.Mixin) { return; }

	includes = isArray(includes) ? includes : [includes];

	for (var i = 0; i < includes.length; i++) {
		if (includes[i] === L.Mixin.Events) {
			console.warn('Deprecated include of L.Mixin.Events: ' +
				'this property will be removed in future releases, ' +
				'please inherit from L.Evented instead.', new Error().stack);
		}
	}
}

/*
 * @class Evented
 * @aka L.Evented
 * @inherits Class
 *
 * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
 *
 * @example
 *
 * ```js
 * map.on('click', function(e) {
 * 	alert(e.latlng);
 * } );
 * ```
 *
 * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
 *
 * ```js
 * function onClick(e) { ... }
 *
 * map.on('click', onClick);
 * map.off('click', onClick);
 * ```
 */

var Events = {
	/* @method on(type: String, fn: Function, context?: Object): this
	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
	 *
	 * @alternative
	 * @method on(eventMap: Object): this
	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
	 */
	on: function (types, fn, context) {

		// types can be a map of types/handlers
		if (typeof types === 'object') {
			for (var type in types) {
				// we don't process space-separated events here for performance;
				// it's a hot path since Layer uses the on(obj) syntax
				this._on(type, types[type], fn);
			}

		} else {
			// types can be a string of space-separated words
			types = splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				this._on(types[i], fn, context);
			}
		}

		return this;
	},

	/* @method off(type: String, fn?: Function, context?: Object): this
	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
	 *
	 * @alternative
	 * @method off(eventMap: Object): this
	 * Removes a set of type/listener pairs.
	 *
	 * @alternative
	 * @method off: this
	 * Removes all listeners to all events on the object. This includes implicitly attached events.
	 */
	off: function (types, fn, context) {

		if (!types) {
			// clear all listeners if called without arguments
			delete this._events;

		} else if (typeof types === 'object') {
			for (var type in types) {
				this._off(type, types[type], fn);
			}

		} else {
			types = splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				this._off(types[i], fn, context);
			}
		}

		return this;
	},

	// attach listener (without syntactic sugar now)
	_on: function (type, fn, context) {
		this._events = this._events || {};

		/* get/init listeners for type */
		var typeListeners = this._events[type];
		if (!typeListeners) {
			typeListeners = [];
			this._events[type] = typeListeners;
		}

		if (context === this) {
			// Less memory footprint.
			context = undefined;
		}
		var newListener = {fn: fn, ctx: context},
		    listeners = typeListeners;

		// check if fn already there
		for (var i = 0, len = listeners.length; i < len; i++) {
			if (listeners[i].fn === fn && listeners[i].ctx === context) {
				return;
			}
		}

		listeners.push(newListener);
	},

	_off: function (type, fn, context) {
		var listeners,
		    i,
		    len;

		if (!this._events) { return; }

		listeners = this._events[type];

		if (!listeners) {
			return;
		}

		if (!fn) {
			// Set all removed listeners to noop so they are not called if remove happens in fire
			for (i = 0, len = listeners.length; i < len; i++) {
				listeners[i].fn = falseFn;
			}
			// clear all listeners for a type if function isn't specified
			delete this._events[type];
			return;
		}

		if (context === this) {
			context = undefined;
		}

		if (listeners) {

			// find fn and remove it
			for (i = 0, len = listeners.length; i < len; i++) {
				var l = listeners[i];
				if (l.ctx !== context) { continue; }
				if (l.fn === fn) {

					// set the removed listener to noop so that's not called if remove happens in fire
					l.fn = falseFn;

					if (this._firingCount) {
						/* copy array in case events are being fired */
						this._events[type] = listeners = listeners.slice();
					}
					listeners.splice(i, 1);

					return;
				}
			}
		}
	},

	// @method fire(type: String, data?: Object, propagate?: Boolean): this
	// Fires an event of the specified type. You can optionally provide an data
	// object — the first argument of the listener function will contain its
	// properties. The event can optionally be propagated to event parents.
	fire: function (type, data, propagate) {
		if (!this.listens(type, propagate)) { return this; }

		var event = extend({}, data, {
			type: type,
			target: this,
			sourceTarget: data && data.sourceTarget || this
		});

		if (this._events) {
			var listeners = this._events[type];

			if (listeners) {
				this._firingCount = (this._firingCount + 1) || 1;
				for (var i = 0, len = listeners.length; i < len; i++) {
					var l = listeners[i];
					l.fn.call(l.ctx || this, event);
				}

				this._firingCount--;
			}
		}

		if (propagate) {
			// propagate the event to parents (set with addEventParent)
			this._propagateEvent(event);
		}

		return this;
	},

	// @method listens(type: String): Boolean
	// Returns `true` if a particular event type has any listeners attached to it.
	listens: function (type, propagate) {
		var listeners = this._events && this._events[type];
		if (listeners && listeners.length) { return true; }

		if (propagate) {
			// also check parents for listeners if event propagates
			for (var id in this._eventParents) {
				if (this._eventParents[id].listens(type, propagate)) { return true; }
			}
		}
		return false;
	},

	// @method once(…): this
	// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
	once: function (types, fn, context) {

		if (typeof types === 'object') {
			for (var type in types) {
				this.once(type, types[type], fn);
			}
			return this;
		}

		var handler = bind(function () {
			this
			    .off(types, fn, context)
			    .off(types, handler, context);
		}, this);

		// add a listener that's executed once and removed after that
		return this
		    .on(types, fn, context)
		    .on(types, handler, context);
	},

	// @method addEventParent(obj: Evented): this
	// Adds an event parent - an `Evented` that will receive propagated events
	addEventParent: function (obj) {
		this._eventParents = this._eventParents || {};
		this._eventParents[stamp(obj)] = obj;
		return this;
	},

	// @method removeEventParent(obj: Evented): this
	// Removes an event parent, so it will stop receiving propagated events
	removeEventParent: function (obj) {
		if (this._eventParents) {
			delete this._eventParents[stamp(obj)];
		}
		return this;
	},

	_propagateEvent: function (e) {
		for (var id in this._eventParents) {
			this._eventParents[id].fire(e.type, extend({
				layer: e.target,
				propagatedFrom: e.target
			}, e), true);
		}
	}
};

// aliases; we should ditch those eventually

// @method addEventListener(…): this
// Alias to [`on(…)`](#evented-on)
Events.addEventListener = Events.on;

// @method removeEventListener(…): this
// Alias to [`off(…)`](#evented-off)

// @method clearAllEventListeners(…): this
// Alias to [`off()`](#evented-off)
Events.removeEventListener = Events.clearAllEventListeners = Events.off;

// @method addOneTimeEventListener(…): this
// Alias to [`once(…)`](#evented-once)
Events.addOneTimeEventListener = Events.once;

// @method fireEvent(…): this
// Alias to [`fire(…)`](#evented-fire)
Events.fireEvent = Events.fire;

// @method hasEventListeners(…): Boolean
// Alias to [`listens(…)`](#evented-listens)
Events.hasEventListeners = Events.listens;

var Evented = Class.extend(Events);

/*
 * @class Point
 * @aka L.Point
 *
 * Represents a point with `x` and `y` coordinates in pixels.
 *
 * @example
 *
 * ```js
 * var point = L.point(200, 300);
 * ```
 *
 * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
 *
 * ```js
 * map.panBy([200, 300]);
 * map.panBy(L.point(200, 300));
 * ```
 *
 * Note that `Point` does not inherit from Leafet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function Point(x, y, round) {
	// @property x: Number; The `x` coordinate of the point
	this.x = (round ? Math.round(x) : x);
	// @property y: Number; The `y` coordinate of the point
	this.y = (round ? Math.round(y) : y);
}

var trunc = Math.trunc || function (v) {
	return v > 0 ? Math.floor(v) : Math.ceil(v);
};

Point.prototype = {

	// @method clone(): Point
	// Returns a copy of the current point.
	clone: function () {
		return new Point(this.x, this.y);
	},

	// @method add(otherPoint: Point): Point
	// Returns the result of addition of the current and the given points.
	add: function (point) {
		// non-destructive, returns a new point
		return this.clone()._add(toPoint(point));
	},

	_add: function (point) {
		// destructive, used directly for performance in situations where it's safe to modify existing point
		this.x += point.x;
		this.y += point.y;
		return this;
	},

	// @method subtract(otherPoint: Point): Point
	// Returns the result of subtraction of the given point from the current.
	subtract: function (point) {
		return this.clone()._subtract(toPoint(point));
	},

	_subtract: function (point) {
		this.x -= point.x;
		this.y -= point.y;
		return this;
	},

	// @method divideBy(num: Number): Point
	// Returns the result of division of the current point by the given number.
	divideBy: function (num) {
		return this.clone()._divideBy(num);
	},

	_divideBy: function (num) {
		this.x /= num;
		this.y /= num;
		return this;
	},

	// @method multiplyBy(num: Number): Point
	// Returns the result of multiplication of the current point by the given number.
	multiplyBy: function (num) {
		return this.clone()._multiplyBy(num);
	},

	_multiplyBy: function (num) {
		this.x *= num;
		this.y *= num;
		return this;
	},

	// @method scaleBy(scale: Point): Point
	// Multiply each coordinate of the current point by each coordinate of
	// `scale`. In linear algebra terms, multiply the point by the
	// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
	// defined by `scale`.
	scaleBy: function (point) {
		return new Point(this.x * point.x, this.y * point.y);
	},

	// @method unscaleBy(scale: Point): Point
	// Inverse of `scaleBy`. Divide each coordinate of the current point by
	// each coordinate of `scale`.
	unscaleBy: function (point) {
		return new Point(this.x / point.x, this.y / point.y);
	},

	// @method round(): Point
	// Returns a copy of the current point with rounded coordinates.
	round: function () {
		return this.clone()._round();
	},

	_round: function () {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	},

	// @method floor(): Point
	// Returns a copy of the current point with floored coordinates (rounded down).
	floor: function () {
		return this.clone()._floor();
	},

	_floor: function () {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	},

	// @method ceil(): Point
	// Returns a copy of the current point with ceiled coordinates (rounded up).
	ceil: function () {
		return this.clone()._ceil();
	},

	_ceil: function () {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this;
	},

	// @method trunc(): Point
	// Returns a copy of the current point with truncated coordinates (rounded towards zero).
	trunc: function () {
		return this.clone()._trunc();
	},

	_trunc: function () {
		this.x = trunc(this.x);
		this.y = trunc(this.y);
		return this;
	},

	// @method distanceTo(otherPoint: Point): Number
	// Returns the cartesian distance between the current and the given points.
	distanceTo: function (point) {
		point = toPoint(point);

		var x = point.x - this.x,
		    y = point.y - this.y;

		return Math.sqrt(x * x + y * y);
	},

	// @method equals(otherPoint: Point): Boolean
	// Returns `true` if the given point has the same coordinates.
	equals: function (point) {
		point = toPoint(point);

		return point.x === this.x &&
		       point.y === this.y;
	},

	// @method contains(otherPoint: Point): Boolean
	// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
	contains: function (point) {
		point = toPoint(point);

		return Math.abs(point.x) <= Math.abs(this.x) &&
		       Math.abs(point.y) <= Math.abs(this.y);
	},

	// @method toString(): String
	// Returns a string representation of the point for debugging purposes.
	toString: function () {
		return 'Point(' +
		        formatNum(this.x) + ', ' +
		        formatNum(this.y) + ')';
	}
};

// @factory L.point(x: Number, y: Number, round?: Boolean)
// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.

// @alternative
// @factory L.point(coords: Number[])
// Expects an array of the form `[x, y]` instead.

// @alternative
// @factory L.point(coords: Object)
// Expects a plain object of the form `{x: Number, y: Number}` instead.
function toPoint(x, y, round) {
	if (x instanceof Point) {
		return x;
	}
	if (isArray(x)) {
		return new Point(x[0], x[1]);
	}
	if (x === undefined || x === null) {
		return x;
	}
	if (typeof x === 'object' && 'x' in x && 'y' in x) {
		return new Point(x.x, x.y);
	}
	return new Point(x, y, round);
}

/*
 * @class Bounds
 * @aka L.Bounds
 *
 * Represents a rectangular area in pixel coordinates.
 *
 * @example
 *
 * ```js
 * var p1 = L.point(10, 10),
 * p2 = L.point(40, 60),
 * bounds = L.bounds(p1, p2);
 * ```
 *
 * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * otherBounds.intersects([[10, 10], [40, 60]]);
 * ```
 *
 * Note that `Bounds` does not inherit from Leafet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function Bounds(a, b) {
	if (!a) { return; }

	var points = b ? [a, b] : a;

	for (var i = 0, len = points.length; i < len; i++) {
		this.extend(points[i]);
	}
}

Bounds.prototype = {
	// @method extend(point: Point): this
	// Extends the bounds to contain the given point.
	extend: function (point) { // (Point)
		point = toPoint(point);

		// @property min: Point
		// The top left corner of the rectangle.
		// @property max: Point
		// The bottom right corner of the rectangle.
		if (!this.min && !this.max) {
			this.min = point.clone();
			this.max = point.clone();
		} else {
			this.min.x = Math.min(point.x, this.min.x);
			this.max.x = Math.max(point.x, this.max.x);
			this.min.y = Math.min(point.y, this.min.y);
			this.max.y = Math.max(point.y, this.max.y);
		}
		return this;
	},

	// @method getCenter(round?: Boolean): Point
	// Returns the center point of the bounds.
	getCenter: function (round) {
		return new Point(
		        (this.min.x + this.max.x) / 2,
		        (this.min.y + this.max.y) / 2, round);
	},

	// @method getBottomLeft(): Point
	// Returns the bottom-left point of the bounds.
	getBottomLeft: function () {
		return new Point(this.min.x, this.max.y);
	},

	// @method getTopRight(): Point
	// Returns the top-right point of the bounds.
	getTopRight: function () { // -> Point
		return new Point(this.max.x, this.min.y);
	},

	// @method getTopLeft(): Point
	// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
	getTopLeft: function () {
		return this.min; // left, top
	},

	// @method getBottomRight(): Point
	// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
	getBottomRight: function () {
		return this.max; // right, bottom
	},

	// @method getSize(): Point
	// Returns the size of the given bounds
	getSize: function () {
		return this.max.subtract(this.min);
	},

	// @method contains(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle contains the given one.
	// @alternative
	// @method contains(point: Point): Boolean
	// Returns `true` if the rectangle contains the given point.
	contains: function (obj) {
		var min, max;

		if (typeof obj[0] === 'number' || obj instanceof Point) {
			obj = toPoint(obj);
		} else {
			obj = toBounds(obj);
		}

		if (obj instanceof Bounds) {
			min = obj.min;
			max = obj.max;
		} else {
			min = max = obj;
		}

		return (min.x >= this.min.x) &&
		       (max.x <= this.max.x) &&
		       (min.y >= this.min.y) &&
		       (max.y <= this.max.y);
	},

	// @method intersects(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle intersects the given bounds. Two bounds
	// intersect if they have at least one point in common.
	intersects: function (bounds) { // (Bounds) -> Boolean
		bounds = toBounds(bounds);

		var min = this.min,
		    max = this.max,
		    min2 = bounds.min,
		    max2 = bounds.max,
		    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
		    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

		return xIntersects && yIntersects;
	},

	// @method overlaps(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle overlaps the given bounds. Two bounds
	// overlap if their intersection is an area.
	overlaps: function (bounds) { // (Bounds) -> Boolean
		bounds = toBounds(bounds);

		var min = this.min,
		    max = this.max,
		    min2 = bounds.min,
		    max2 = bounds.max,
		    xOverlaps = (max2.x > min.x) && (min2.x < max.x),
		    yOverlaps = (max2.y > min.y) && (min2.y < max.y);

		return xOverlaps && yOverlaps;
	},

	isValid: function () {
		return !!(this.min && this.max);
	}
};


// @factory L.bounds(corner1: Point, corner2: Point)
// Creates a Bounds object from two corners coordinate pairs.
// @alternative
// @factory L.bounds(points: Point[])
// Creates a Bounds object from the given array of points.
function toBounds(a, b) {
	if (!a || a instanceof Bounds) {
		return a;
	}
	return new Bounds(a, b);
}

/*
 * @class LatLngBounds
 * @aka L.LatLngBounds
 *
 * Represents a rectangular geographical area on a map.
 *
 * @example
 *
 * ```js
 * var corner1 = L.latLng(40.712, -74.227),
 * corner2 = L.latLng(40.774, -74.125),
 * bounds = L.latLngBounds(corner1, corner2);
 * ```
 *
 * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * map.fitBounds([
 * 	[40.712, -74.227],
 * 	[40.774, -74.125]
 * ]);
 * ```
 *
 * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
 *
 * Note that `LatLngBounds` does not inherit from Leafet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function LatLngBounds(corner1, corner2) { // (LatLng, LatLng) or (LatLng[])
	if (!corner1) { return; }

	var latlngs = corner2 ? [corner1, corner2] : corner1;

	for (var i = 0, len = latlngs.length; i < len; i++) {
		this.extend(latlngs[i]);
	}
}

LatLngBounds.prototype = {

	// @method extend(latlng: LatLng): this
	// Extend the bounds to contain the given point

	// @alternative
	// @method extend(otherBounds: LatLngBounds): this
	// Extend the bounds to contain the given bounds
	extend: function (obj) {
		var sw = this._southWest,
		    ne = this._northEast,
		    sw2, ne2;

		if (obj instanceof LatLng) {
			sw2 = obj;
			ne2 = obj;

		} else if (obj instanceof LatLngBounds) {
			sw2 = obj._southWest;
			ne2 = obj._northEast;

			if (!sw2 || !ne2) { return this; }

		} else {
			return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
		}

		if (!sw && !ne) {
			this._southWest = new LatLng(sw2.lat, sw2.lng);
			this._northEast = new LatLng(ne2.lat, ne2.lng);
		} else {
			sw.lat = Math.min(sw2.lat, sw.lat);
			sw.lng = Math.min(sw2.lng, sw.lng);
			ne.lat = Math.max(ne2.lat, ne.lat);
			ne.lng = Math.max(ne2.lng, ne.lng);
		}

		return this;
	},

	// @method pad(bufferRatio: Number): LatLngBounds
	// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
	// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
	// Negative values will retract the bounds.
	pad: function (bufferRatio) {
		var sw = this._southWest,
		    ne = this._northEast,
		    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
		    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

		return new LatLngBounds(
		        new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
		        new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
	},

	// @method getCenter(): LatLng
	// Returns the center point of the bounds.
	getCenter: function () {
		return new LatLng(
		        (this._southWest.lat + this._northEast.lat) / 2,
		        (this._southWest.lng + this._northEast.lng) / 2);
	},

	// @method getSouthWest(): LatLng
	// Returns the south-west point of the bounds.
	getSouthWest: function () {
		return this._southWest;
	},

	// @method getNorthEast(): LatLng
	// Returns the north-east point of the bounds.
	getNorthEast: function () {
		return this._northEast;
	},

	// @method getNorthWest(): LatLng
	// Returns the north-west point of the bounds.
	getNorthWest: function () {
		return new LatLng(this.getNorth(), this.getWest());
	},

	// @method getSouthEast(): LatLng
	// Returns the south-east point of the bounds.
	getSouthEast: function () {
		return new LatLng(this.getSouth(), this.getEast());
	},

	// @method getWest(): Number
	// Returns the west longitude of the bounds
	getWest: function () {
		return this._southWest.lng;
	},

	// @method getSouth(): Number
	// Returns the south latitude of the bounds
	getSouth: function () {
		return this._southWest.lat;
	},

	// @method getEast(): Number
	// Returns the east longitude of the bounds
	getEast: function () {
		return this._northEast.lng;
	},

	// @method getNorth(): Number
	// Returns the north latitude of the bounds
	getNorth: function () {
		return this._northEast.lat;
	},

	// @method contains(otherBounds: LatLngBounds): Boolean
	// Returns `true` if the rectangle contains the given one.

	// @alternative
	// @method contains (latlng: LatLng): Boolean
	// Returns `true` if the rectangle contains the given point.
	contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean
		if (typeof obj[0] === 'number' || obj instanceof LatLng || 'lat' in obj) {
			obj = toLatLng(obj);
		} else {
			obj = toLatLngBounds(obj);
		}

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2, ne2;

		if (obj instanceof LatLngBounds) {
			sw2 = obj.getSouthWest();
			ne2 = obj.getNorthEast();
		} else {
			sw2 = ne2 = obj;
		}

		return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
		       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
	},

	// @method intersects(otherBounds: LatLngBounds): Boolean
	// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
	intersects: function (bounds) {
		bounds = toLatLngBounds(bounds);

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2 = bounds.getSouthWest(),
		    ne2 = bounds.getNorthEast(),

		    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
		    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

		return latIntersects && lngIntersects;
	},

	// @method overlaps(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
	overlaps: function (bounds) {
		bounds = toLatLngBounds(bounds);

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2 = bounds.getSouthWest(),
		    ne2 = bounds.getNorthEast(),

		    latOverlaps = (ne2.lat > sw.lat) && (sw2.lat < ne.lat),
		    lngOverlaps = (ne2.lng > sw.lng) && (sw2.lng < ne.lng);

		return latOverlaps && lngOverlaps;
	},

	// @method toBBoxString(): String
	// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
	toBBoxString: function () {
		return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
	},

	// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
	// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
	equals: function (bounds, maxMargin) {
		if (!bounds) { return false; }

		bounds = toLatLngBounds(bounds);

		return this._southWest.equals(bounds.getSouthWest(), maxMargin) &&
		       this._northEast.equals(bounds.getNorthEast(), maxMargin);
	},

	// @method isValid(): Boolean
	// Returns `true` if the bounds are properly initialized.
	isValid: function () {
		return !!(this._southWest && this._northEast);
	}
};

// TODO International date line?

// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.

// @alternative
// @factory L.latLngBounds(latlngs: LatLng[])
// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
function toLatLngBounds(a, b) {
	if (a instanceof LatLngBounds) {
		return a;
	}
	return new LatLngBounds(a, b);
}

/* @class LatLng
 * @aka L.LatLng
 *
 * Represents a geographical point with a certain latitude and longitude.
 *
 * @example
 *
 * ```
 * var latlng = L.latLng(50.5, 30.5);
 * ```
 *
 * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
 *
 * ```
 * map.panTo([50, 30]);
 * map.panTo({lon: 30, lat: 50});
 * map.panTo({lat: 50, lng: 30});
 * map.panTo(L.latLng(50, 30));
 * ```
 *
 * Note that `LatLng` does not inherit from Leaflet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function LatLng(lat, lng, alt) {
	if (isNaN(lat) || isNaN(lng)) {
		throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
	}

	// @property lat: Number
	// Latitude in degrees
	this.lat = +lat;

	// @property lng: Number
	// Longitude in degrees
	this.lng = +lng;

	// @property alt: Number
	// Altitude in meters (optional)
	if (alt !== undefined) {
		this.alt = +alt;
	}
}

LatLng.prototype = {
	// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
	// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
	equals: function (obj, maxMargin) {
		if (!obj) { return false; }

		obj = toLatLng(obj);

		var margin = Math.max(
		        Math.abs(this.lat - obj.lat),
		        Math.abs(this.lng - obj.lng));

		return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
	},

	// @method toString(): String
	// Returns a string representation of the point (for debugging purposes).
	toString: function (precision) {
		return 'LatLng(' +
		        formatNum(this.lat, precision) + ', ' +
		        formatNum(this.lng, precision) + ')';
	},

	// @method distanceTo(otherLatLng: LatLng): Number
	// Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
	distanceTo: function (other) {
		return Earth.distance(this, toLatLng(other));
	},

	// @method wrap(): LatLng
	// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
	wrap: function () {
		return Earth.wrapLatLng(this);
	},

	// @method toBounds(sizeInMeters: Number): LatLngBounds
	// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
	toBounds: function (sizeInMeters) {
		var latAccuracy = 180 * sizeInMeters / 40075017,
		    lngAccuracy = latAccuracy / Math.cos((Math.PI / 180) * this.lat);

		return toLatLngBounds(
		        [this.lat - latAccuracy, this.lng - lngAccuracy],
		        [this.lat + latAccuracy, this.lng + lngAccuracy]);
	},

	clone: function () {
		return new LatLng(this.lat, this.lng, this.alt);
	}
};



// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).

// @alternative
// @factory L.latLng(coords: Array): LatLng
// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.

// @alternative
// @factory L.latLng(coords: Object): LatLng
// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.

function toLatLng(a, b, c) {
	if (a instanceof LatLng) {
		return a;
	}
	if (isArray(a) && typeof a[0] !== 'object') {
		if (a.length === 3) {
			return new LatLng(a[0], a[1], a[2]);
		}
		if (a.length === 2) {
			return new LatLng(a[0], a[1]);
		}
		return null;
	}
	if (a === undefined || a === null) {
		return a;
	}
	if (typeof a === 'object' && 'lat' in a) {
		return new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
	}
	if (b === undefined) {
		return null;
	}
	return new LatLng(a, b, c);
}

/*
 * @namespace CRS
 * @crs L.CRS.Base
 * Object that defines coordinate reference systems for projecting
 * geographical points into pixel (screen) coordinates and back (and to
 * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
 * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
 *
 * Leaflet defines the most usual CRSs by default. If you want to use a
 * CRS not defined by default, take a look at the
 * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
 *
 * Note that the CRS instances do not inherit from Leafet's `Class` object,
 * and can't be instantiated. Also, new classes can't inherit from them,
 * and methods can't be added to them with the `include` function.
 */

var CRS = {
	// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
	// Projects geographical coordinates into pixel coordinates for a given zoom.
	latLngToPoint: function (latlng, zoom) {
		var projectedPoint = this.projection.project(latlng),
		    scale = this.scale(zoom);

		return this.transformation._transform(projectedPoint, scale);
	},

	// @method pointToLatLng(point: Point, zoom: Number): LatLng
	// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
	// zoom into geographical coordinates.
	pointToLatLng: function (point, zoom) {
		var scale = this.scale(zoom),
		    untransformedPoint = this.transformation.untransform(point, scale);

		return this.projection.unproject(untransformedPoint);
	},

	// @method project(latlng: LatLng): Point
	// Projects geographical coordinates into coordinates in units accepted for
	// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
	project: function (latlng) {
		return this.projection.project(latlng);
	},

	// @method unproject(point: Point): LatLng
	// Given a projected coordinate returns the corresponding LatLng.
	// The inverse of `project`.
	unproject: function (point) {
		return this.projection.unproject(point);
	},

	// @method scale(zoom: Number): Number
	// Returns the scale used when transforming projected coordinates into
	// pixel coordinates for a particular zoom. For example, it returns
	// `256 * 2^zoom` for Mercator-based CRS.
	scale: function (zoom) {
		return 256 * Math.pow(2, zoom);
	},

	// @method zoom(scale: Number): Number
	// Inverse of `scale()`, returns the zoom level corresponding to a scale
	// factor of `scale`.
	zoom: function (scale) {
		return Math.log(scale / 256) / Math.LN2;
	},

	// @method getProjectedBounds(zoom: Number): Bounds
	// Returns the projection's bounds scaled and transformed for the provided `zoom`.
	getProjectedBounds: function (zoom) {
		if (this.infinite) { return null; }

		var b = this.projection.bounds,
		    s = this.scale(zoom),
		    min = this.transformation.transform(b.min, s),
		    max = this.transformation.transform(b.max, s);

		return new Bounds(min, max);
	},

	// @method distance(latlng1: LatLng, latlng2: LatLng): Number
	// Returns the distance between two geographical coordinates.

	// @property code: String
	// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
	//
	// @property wrapLng: Number[]
	// An array of two numbers defining whether the longitude (horizontal) coordinate
	// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
	// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
	//
	// @property wrapLat: Number[]
	// Like `wrapLng`, but for the latitude (vertical) axis.

	// wrapLng: [min, max],
	// wrapLat: [min, max],

	// @property infinite: Boolean
	// If true, the coordinate space will be unbounded (infinite in both axes)
	infinite: false,

	// @method wrapLatLng(latlng: LatLng): LatLng
	// Returns a `LatLng` where lat and lng has been wrapped according to the
	// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
	wrapLatLng: function (latlng) {
		var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
		    lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,
		    alt = latlng.alt;

		return new LatLng(lat, lng, alt);
	},

	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
	// Returns a `LatLngBounds` with the same size as the given one, ensuring
	// that its center is within the CRS's bounds.
	// Only accepts actual `L.LatLngBounds` instances, not arrays.
	wrapLatLngBounds: function (bounds) {
		var center = bounds.getCenter(),
		    newCenter = this.wrapLatLng(center),
		    latShift = center.lat - newCenter.lat,
		    lngShift = center.lng - newCenter.lng;

		if (latShift === 0 && lngShift === 0) {
			return bounds;
		}

		var sw = bounds.getSouthWest(),
		    ne = bounds.getNorthEast(),
		    newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift),
		    newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);

		return new LatLngBounds(newSw, newNe);
	}
};

/*
 * @namespace CRS
 * @crs L.CRS.Earth
 *
 * Serves as the base for CRS that are global such that they cover the earth.
 * Can only be used as the base for other CRS and cannot be used directly,
 * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
 * meters.
 */

var Earth = extend({}, CRS, {
	wrapLng: [-180, 180],

	// Mean Earth Radius, as recommended for use by
	// the International Union of Geodesy and Geophysics,
	// see http://rosettacode.org/wiki/Haversine_formula
	R: 6371000,

	// distance between two geographical points using spherical law of cosines approximation
	distance: function (latlng1, latlng2) {
		var rad = Math.PI / 180,
		    lat1 = latlng1.lat * rad,
		    lat2 = latlng2.lat * rad,
		    sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2),
		    sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2),
		    a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
		    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return this.R * c;
	}
});

/*
 * @namespace Projection
 * @projection L.Projection.SphericalMercator
 *
 * Spherical Mercator projection — the most common projection for online maps,
 * used by almost all free and commercial tile providers. Assumes that Earth is
 * a sphere. Used by the `EPSG:3857` CRS.
 */

var earthRadius = 6378137;

var SphericalMercator = {

	R: earthRadius,
	MAX_LATITUDE: 85.0511287798,

	project: function (latlng) {
		var d = Math.PI / 180,
		    max = this.MAX_LATITUDE,
		    lat = Math.max(Math.min(max, latlng.lat), -max),
		    sin = Math.sin(lat * d);

		return new Point(
			this.R * latlng.lng * d,
			this.R * Math.log((1 + sin) / (1 - sin)) / 2);
	},

	unproject: function (point) {
		var d = 180 / Math.PI;

		return new LatLng(
			(2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d,
			point.x * d / this.R);
	},

	bounds: (function () {
		var d = earthRadius * Math.PI;
		return new Bounds([-d, -d], [d, d]);
	})()
};

/*
 * @class Transformation
 * @aka L.Transformation
 *
 * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
 * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
 * the reverse. Used by Leaflet in its projections code.
 *
 * @example
 *
 * ```js
 * var transformation = L.transformation(2, 5, -1, 10),
 * 	p = L.point(1, 2),
 * 	p2 = transformation.transform(p), //  L.point(7, 8)
 * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
 * ```
 */


// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
// Creates a `Transformation` object with the given coefficients.
function Transformation(a, b, c, d) {
	if (isArray(a)) {
		// use array properties
		this._a = a[0];
		this._b = a[1];
		this._c = a[2];
		this._d = a[3];
		return;
	}
	this._a = a;
	this._b = b;
	this._c = c;
	this._d = d;
}

Transformation.prototype = {
	// @method transform(point: Point, scale?: Number): Point
	// Returns a transformed point, optionally multiplied by the given scale.
	// Only accepts actual `L.Point` instances, not arrays.
	transform: function (point, scale) { // (Point, Number) -> Point
		return this._transform(point.clone(), scale);
	},

	// destructive transform (faster)
	_transform: function (point, scale) {
		scale = scale || 1;
		point.x = scale * (this._a * point.x + this._b);
		point.y = scale * (this._c * point.y + this._d);
		return point;
	},

	// @method untransform(point: Point, scale?: Number): Point
	// Returns the reverse transformation of the given point, optionally divided
	// by the given scale. Only accepts actual `L.Point` instances, not arrays.
	untransform: function (point, scale) {
		scale = scale || 1;
		return new Point(
		        (point.x / scale - this._b) / this._a,
		        (point.y / scale - this._d) / this._c);
	}
};

// factory L.transformation(a: Number, b: Number, c: Number, d: Number)

// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// Instantiates a Transformation object with the given coefficients.

// @alternative
// @factory L.transformation(coefficients: Array): Transformation
// Expects an coefficients array of the form
// `[a: Number, b: Number, c: Number, d: Number]`.

function toTransformation(a, b, c, d) {
	return new Transformation(a, b, c, d);
}

/*
 * @namespace CRS
 * @crs L.CRS.EPSG3857
 *
 * The most common CRS for online maps, used by almost all free and commercial
 * tile providers. Uses Spherical Mercator projection. Set in by default in
 * Map's `crs` option.
 */

var EPSG3857 = extend({}, Earth, {
	code: 'EPSG:3857',
	projection: SphericalMercator,

	transformation: (function () {
		var scale = 0.5 / (Math.PI * SphericalMercator.R);
		return toTransformation(scale, 0.5, -scale, 0.5);
	}())
});

var EPSG900913 = extend({}, EPSG3857, {
	code: 'EPSG:900913'
});

// @namespace SVG; @section
// There are several static functions which can be called without instantiating L.SVG:

// @function create(name: String): SVGElement
// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
// corresponding to the class name passed. For example, using 'line' will return
// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
function svgCreate(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

// @function pointsToPath(rings: Point[], closed: Boolean): String
// Generates a SVG path string for multiple rings, with each ring turning
// into "M..L..L.." instructions
function pointsToPath(rings, closed) {
	var str = '',
	i, j, len, len2, points, p;

	for (i = 0, len = rings.length; i < len; i++) {
		points = rings[i];

		for (j = 0, len2 = points.length; j < len2; j++) {
			p = points[j];
			str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
		}

		// closes the ring for polygons; "x" is VML syntax
		str += closed ? (svg ? 'z' : 'x') : '';
	}

	// SVG complains about empty path strings
	return str || 'M0 0';
}

/*
 * @namespace Browser
 * @aka L.Browser
 *
 * A namespace with static properties for browser/feature detection used by Leaflet internally.
 *
 * @example
 *
 * ```js
 * if (L.Browser.ielt9) {
 *   alert('Upgrade your browser, dude!');
 * }
 * ```
 */

var style$1 = document.documentElement.style;

// @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).
var ie = 'ActiveXObject' in window;

// @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.
var ielt9 = ie && !document.addEventListener;

// @property edge: Boolean; `true` for the Edge web browser.
var edge = 'msLaunchUri' in navigator && !('documentMode' in document);

// @property webkit: Boolean;
// `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
var webkit = userAgentContains('webkit');

// @property android: Boolean
// `true` for any browser running on an Android platform.
var android = userAgentContains('android');

// @property android23: Boolean; `true` for browsers running on Android 2 or Android 3.
var android23 = userAgentContains('android 2') || userAgentContains('android 3');

/* See https://stackoverflow.com/a/17961266 for details on detecting stock Android */
var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10); // also matches AppleWebKit
// @property androidStock: Boolean; `true` for the Android stock browser (i.e. not Chrome)
var androidStock = android && userAgentContains('Google') && webkitVer < 537 && !('AudioNode' in window);

// @property opera: Boolean; `true` for the Opera browser
var opera = !!window.opera;

// @property chrome: Boolean; `true` for the Chrome browser.
var chrome = userAgentContains('chrome');

// @property gecko: Boolean; `true` for gecko-based browsers like Firefox.
var gecko = userAgentContains('gecko') && !webkit && !opera && !ie;

// @property safari: Boolean; `true` for the Safari browser.
var safari = !chrome && userAgentContains('safari');

var phantom = userAgentContains('phantom');

// @property opera12: Boolean
// `true` for the Opera browser supporting CSS transforms (version 12 or later).
var opera12 = 'OTransition' in style$1;

// @property win: Boolean; `true` when the browser is running in a Windows platform
var win = navigator.platform.indexOf('Win') === 0;

// @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.
var ie3d = ie && ('transition' in style$1);

// @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.
var webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23;

// @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.
var gecko3d = 'MozPerspective' in style$1;

// @property any3d: Boolean
// `true` for all browsers supporting CSS transforms.
var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;

// @property mobile: Boolean; `true` for all browsers running in a mobile device.
var mobile = typeof orientation !== 'undefined' || userAgentContains('mobile');

// @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.
var mobileWebkit = mobile && webkit;

// @property mobileWebkit3d: Boolean
// `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
var mobileWebkit3d = mobile && webkit3d;

// @property msPointer: Boolean
// `true` for browsers implementing the Microsoft touch events model (notably IE10).
var msPointer = !window.PointerEvent && window.MSPointerEvent;

// @property pointer: Boolean
// `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
var pointer = !webkit && !!(window.PointerEvent || msPointer);

// @property touch: Boolean
// `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
// This does not necessarily mean that the browser is running in a computer with
// a touchscreen, it only means that the browser is capable of understanding
// touch events.
var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window ||
		(window.DocumentTouch && document instanceof window.DocumentTouch));

// @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.
var mobileOpera = mobile && opera;

// @property mobileGecko: Boolean
// `true` for gecko-based browsers running in a mobile device.
var mobileGecko = mobile && gecko;

// @property retina: Boolean
// `true` for browsers on a high-resolution "retina" screen or on any screen when browser's display zoom is more than 100%.
var retina = (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1;

// @property passiveEvents: Boolean
// `true` for browsers that support passive events.
var passiveEvents = (function () {
	var supportsPassiveOption = false;
	try {
		var opts = Object.defineProperty({}, 'passive', {
			get: function () {
				supportsPassiveOption = true;
			}
		});
		window.addEventListener('testPassiveEventSupport', falseFn, opts);
		window.removeEventListener('testPassiveEventSupport', falseFn, opts);
	} catch (e) {
		// Errors can safely be ignored since this is only a browser support test.
	}
	return supportsPassiveOption;
});

// @property canvas: Boolean
// `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
var canvas = (function () {
	return !!document.createElement('canvas').getContext;
}());

// @property svg: Boolean
// `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).
var svg = !!(document.createElementNS && svgCreate('svg').createSVGRect);

// @property vml: Boolean
// `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).
var vml = !svg && (function () {
	try {
		var div = document.createElement('div');
		div.innerHTML = '<v:shape adj="1"/>';

		var shape = div.firstChild;
		shape.style.behavior = 'url(#default#VML)';

		return shape && (typeof shape.adj === 'object');

	} catch (e) {
		return false;
	}
}());


function userAgentContains(str) {
	return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
}


var Browser = (Object.freeze || Object)({
	ie: ie,
	ielt9: ielt9,
	edge: edge,
	webkit: webkit,
	android: android,
	android23: android23,
	androidStock: androidStock,
	opera: opera,
	chrome: chrome,
	gecko: gecko,
	safari: safari,
	phantom: phantom,
	opera12: opera12,
	win: win,
	ie3d: ie3d,
	webkit3d: webkit3d,
	gecko3d: gecko3d,
	any3d: any3d,
	mobile: mobile,
	mobileWebkit: mobileWebkit,
	mobileWebkit3d: mobileWebkit3d,
	msPointer: msPointer,
	pointer: pointer,
	touch: touch,
	mobileOpera: mobileOpera,
	mobileGecko: mobileGecko,
	retina: retina,
	passiveEvents: passiveEvents,
	canvas: canvas,
	svg: svg,
	vml: vml
});

/*
 * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
 */


var POINTER_DOWN =   msPointer ? 'MSPointerDown'   : 'pointerdown';
var POINTER_MOVE =   msPointer ? 'MSPointerMove'   : 'pointermove';
var POINTER_UP =     msPointer ? 'MSPointerUp'     : 'pointerup';
var POINTER_CANCEL = msPointer ? 'MSPointerCancel' : 'pointercancel';
var TAG_WHITE_LIST = ['INPUT', 'SELECT', 'OPTION'];

var _pointers = {};
var _pointerDocListener = false;

// DomEvent.DoubleTap needs to know about this
var _pointersCount = 0;

// Provides a touch events wrapper for (ms)pointer events.
// ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

function addPointerListener(obj, type, handler, id) {
	if (type === 'touchstart') {
		_addPointerStart(obj, handler, id);

	} else if (type === 'touchmove') {
		_addPointerMove(obj, handler, id);

	} else if (type === 'touchend') {
		_addPointerEnd(obj, handler, id);
	}

	return this;
}

function removePointerListener(obj, type, id) {
	var handler = obj['_leaflet_' + type + id];

	if (type === 'touchstart') {
		obj.removeEventListener(POINTER_DOWN, handler, false);

	} else if (type === 'touchmove') {
		obj.removeEventListener(POINTER_MOVE, handler, false);

	} else if (type === 'touchend') {
		obj.removeEventListener(POINTER_UP, handler, false);
		obj.removeEventListener(POINTER_CANCEL, handler, false);
	}

	return this;
}

function _addPointerStart(obj, handler, id) {
	var onDown = bind(function (e) {
		if (e.pointerType !== 'mouse' && e.MSPOINTER_TYPE_MOUSE && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
			// In IE11, some touch events needs to fire for form controls, or
			// the controls will stop working. We keep a whitelist of tag names that
			// need these events. For other target tags, we prevent default on the event.
			if (TAG_WHITE_LIST.indexOf(e.target.tagName) < 0) {
				preventDefault(e);
			} else {
				return;
			}
		}

		_handlePointer(e, handler);
	});

	obj['_leaflet_touchstart' + id] = onDown;
	obj.addEventListener(POINTER_DOWN, onDown, false);

	// need to keep track of what pointers and how many are active to provide e.touches emulation
	if (!_pointerDocListener) {
		// we listen documentElement as any drags that end by moving the touch off the screen get fired there
		document.documentElement.addEventListener(POINTER_DOWN, _globalPointerDown, true);
		document.documentElement.addEventListener(POINTER_MOVE, _globalPointerMove, true);
		document.documentElement.addEventListener(POINTER_UP, _globalPointerUp, true);
		document.documentElement.addEventListener(POINTER_CANCEL, _globalPointerUp, true);

		_pointerDocListener = true;
	}
}

function _globalPointerDown(e) {
	_pointers[e.pointerId] = e;
	_pointersCount++;
}

function _globalPointerMove(e) {
	if (_pointers[e.pointerId]) {
		_pointers[e.pointerId] = e;
	}
}

function _globalPointerUp(e) {
	delete _pointers[e.pointerId];
	_pointersCount--;
}

function _handlePointer(e, handler) {
	e.touches = [];
	for (var i in _pointers) {
		e.touches.push(_pointers[i]);
	}
	e.changedTouches = [e];

	handler(e);
}

function _addPointerMove(obj, handler, id) {
	var onMove = function (e) {
		// don't fire touch moves when mouse isn't down
		if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) { return; }

		_handlePointer(e, handler);
	};

	obj['_leaflet_touchmove' + id] = onMove;
	obj.addEventListener(POINTER_MOVE, onMove, false);
}

function _addPointerEnd(obj, handler, id) {
	var onUp = function (e) {
		_handlePointer(e, handler);
	};

	obj['_leaflet_touchend' + id] = onUp;
	obj.addEventListener(POINTER_UP, onUp, false);
	obj.addEventListener(POINTER_CANCEL, onUp, false);
}

/*
 * Extends the event handling code with double tap support for mobile browsers.
 */

var _touchstart = msPointer ? 'MSPointerDown' : pointer ? 'pointerdown' : 'touchstart';
var _touchend = msPointer ? 'MSPointerUp' : pointer ? 'pointerup' : 'touchend';
var _pre = '_leaflet_';

// inspired by Zepto touch code by Thomas Fuchs
function addDoubleTapListener(obj, handler, id) {
	var last, touch$$1,
	    doubleTap = false,
	    delay = 250;

	function onTouchStart(e) {
		var count;

		if (pointer) {
			if ((!edge) || e.pointerType === 'mouse') { return; }
			count = _pointersCount;
		} else {
			count = e.touches.length;
		}

		if (count > 1) { return; }

		var now = Date.now(),
		    delta = now - (last || now);

		touch$$1 = e.touches ? e.touches[0] : e;
		doubleTap = (delta > 0 && delta <= delay);
		last = now;
	}

	function onTouchEnd(e) {
		if (doubleTap && !touch$$1.cancelBubble) {
			if (pointer) {
				if ((!edge) || e.pointerType === 'mouse') { return; }
				// work around .type being readonly with MSPointer* events
				var newTouch = {},
				    prop, i;

				for (i in touch$$1) {
					prop = touch$$1[i];
					newTouch[i] = prop && prop.bind ? prop.bind(touch$$1) : prop;
				}
				touch$$1 = newTouch;
			}
			touch$$1.type = 'dblclick';
			touch$$1.button = 0;
			handler(touch$$1);
			last = null;
		}
	}

	obj[_pre + _touchstart + id] = onTouchStart;
	obj[_pre + _touchend + id] = onTouchEnd;
	obj[_pre + 'dblclick' + id] = handler;

	obj.addEventListener(_touchstart, onTouchStart, passiveEvents ? {passive: false} : false);
	obj.addEventListener(_touchend, onTouchEnd, passiveEvents ? {passive: false} : false);

	// On some platforms (notably, chrome<55 on win10 + touchscreen + mouse),
	// the browser doesn't fire touchend/pointerup events but does fire
	// native dblclicks. See #4127.
	// Edge 14 also fires native dblclicks, but only for pointerType mouse, see #5180.
	obj.addEventListener('dblclick', handler, false);

	return this;
}

function removeDoubleTapListener(obj, id) {
	var touchstart = obj[_pre + _touchstart + id],
	    touchend = obj[_pre + _touchend + id],
	    dblclick = obj[_pre + 'dblclick' + id];

	obj.removeEventListener(_touchstart, touchstart, passiveEvents ? {passive: false} : false);
	obj.removeEventListener(_touchend, touchend, passiveEvents ? {passive: false} : false);
	if (!edge) {
		obj.removeEventListener('dblclick', dblclick, false);
	}

	return this;
}

/*
 * @namespace DomUtil
 *
 * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
 * tree, used by Leaflet internally.
 *
 * Most functions expecting or returning a `HTMLElement` also work for
 * SVG elements. The only difference is that classes refer to CSS classes
 * in HTML and SVG classes in SVG.
 */


// @property TRANSFORM: String
// Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
var TRANSFORM = testProp(
	['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

// webkitTransition comes first because some browser versions that drop vendor prefix don't do
// the same for the transitionend event, in particular the Android 4.1 stock browser

// @property TRANSITION: String
// Vendor-prefixed transition style name.
var TRANSITION = testProp(
	['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

// @property TRANSITION_END: String
// Vendor-prefixed transitionend event name.
var TRANSITION_END =
	TRANSITION === 'webkitTransition' || TRANSITION === 'OTransition' ? TRANSITION + 'End' : 'transitionend';


// @function get(id: String|HTMLElement): HTMLElement
// Returns an element given its DOM id, or returns the element itself
// if it was passed directly.
function get(id) {
	return typeof id === 'string' ? document.getElementById(id) : id;
}

// @function getStyle(el: HTMLElement, styleAttrib: String): String
// Returns the value for a certain style attribute on an element,
// including computed values or values set through CSS.
function getStyle(el, style) {
	var value = el.style[style] || (el.currentStyle && el.currentStyle[style]);

	if ((!value || value === 'auto') && document.defaultView) {
		var css = document.defaultView.getComputedStyle(el, null);
		value = css ? css[style] : null;
	}
	return value === 'auto' ? null : value;
}

// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
function create$1(tagName, className, container) {
	var el = document.createElement(tagName);
	el.className = className || '';

	if (container) {
		container.appendChild(el);
	}
	return el;
}

// @function remove(el: HTMLElement)
// Removes `el` from its parent element
function remove(el) {
	var parent = el.parentNode;
	if (parent) {
		parent.removeChild(el);
	}
}

// @function empty(el: HTMLElement)
// Removes all of `el`'s children elements from `el`
function empty(el) {
	while (el.firstChild) {
		el.removeChild(el.firstChild);
	}
}

// @function toFront(el: HTMLElement)
// Makes `el` the last child of its parent, so it renders in front of the other children.
function toFront(el) {
	var parent = el.parentNode;
	if (parent && parent.lastChild !== el) {
		parent.appendChild(el);
	}
}

// @function toBack(el: HTMLElement)
// Makes `el` the first child of its parent, so it renders behind the other children.
function toBack(el) {
	var parent = el.parentNode;
	if (parent && parent.firstChild !== el) {
		parent.insertBefore(el, parent.firstChild);
	}
}

// @function hasClass(el: HTMLElement, name: String): Boolean
// Returns `true` if the element's class attribute contains `name`.
function hasClass(el, name) {
	if (el.classList !== undefined) {
		return el.classList.contains(name);
	}
	var className = getClass(el);
	return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
}

// @function addClass(el: HTMLElement, name: String)
// Adds `name` to the element's class attribute.
function addClass(el, name) {
	if (el.classList !== undefined) {
		var classes = splitWords(name);
		for (var i = 0, len = classes.length; i < len; i++) {
			el.classList.add(classes[i]);
		}
	} else if (!hasClass(el, name)) {
		var className = getClass(el);
		setClass(el, (className ? className + ' ' : '') + name);
	}
}

// @function removeClass(el: HTMLElement, name: String)
// Removes `name` from the element's class attribute.
function removeClass(el, name) {
	if (el.classList !== undefined) {
		el.classList.remove(name);
	} else {
		setClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
	}
}

// @function setClass(el: HTMLElement, name: String)
// Sets the element's class.
function setClass(el, name) {
	if (el.className.baseVal === undefined) {
		el.className = name;
	} else {
		// in case of SVG element
		el.className.baseVal = name;
	}
}

// @function getClass(el: HTMLElement): String
// Returns the element's class.
function getClass(el) {
	// Check if the element is an SVGElementInstance and use the correspondingElement instead
	// (Required for linked SVG elements in IE11.)
	if (el.correspondingElement) {
		el = el.correspondingElement;
	}
	return el.className.baseVal === undefined ? el.className : el.className.baseVal;
}

// @function setOpacity(el: HTMLElement, opacity: Number)
// Set the opacity of an element (including old IE support).
// `opacity` must be a number from `0` to `1`.
function setOpacity(el, value) {
	if ('opacity' in el.style) {
		el.style.opacity = value;
	} else if ('filter' in el.style) {
		_setOpacityIE(el, value);
	}
}

function _setOpacityIE(el, value) {
	var filter = false,
	    filterName = 'DXImageTransform.Microsoft.Alpha';

	// filters collection throws an error if we try to retrieve a filter that doesn't exist
	try {
		filter = el.filters.item(filterName);
	} catch (e) {
		// don't set opacity to 1 if we haven't already set an opacity,
		// it isn't needed and breaks transparent pngs.
		if (value === 1) { return; }
	}

	value = Math.round(value * 100);

	if (filter) {
		filter.Enabled = (value !== 100);
		filter.Opacity = value;
	} else {
		el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
	}
}

// @function testProp(props: String[]): String|false
// Goes through the array of style names and returns the first name
// that is a valid style name for an element. If no such name is found,
// it returns false. Useful for vendor-prefixed styles like `transform`.
function testProp(props) {
	var style = document.documentElement.style;

	for (var i = 0; i < props.length; i++) {
		if (props[i] in style) {
			return props[i];
		}
	}
	return false;
}

// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
// and optionally scaled by `scale`. Does not have an effect if the
// browser doesn't support 3D CSS transforms.
function setTransform(el, offset, scale) {
	var pos = offset || new Point(0, 0);

	el.style[TRANSFORM] =
		(ie3d ?
			'translate(' + pos.x + 'px,' + pos.y + 'px)' :
			'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
		(scale ? ' scale(' + scale + ')' : '');
}

// @function setPosition(el: HTMLElement, position: Point)
// Sets the position of `el` to coordinates specified by `position`,
// using CSS translate or top/left positioning depending on the browser
// (used by Leaflet internally to position its layers).
function setPosition(el, point) {

	/*eslint-disable */
	el._leaflet_pos = point;
	/* eslint-enable */

	if (any3d) {
		setTransform(el, point);
	} else {
		el.style.left = point.x + 'px';
		el.style.top = point.y + 'px';
	}
}

// @function getPosition(el: HTMLElement): Point
// Returns the coordinates of an element previously positioned with setPosition.
function getPosition(el) {
	// this method is only used for elements previously positioned using setPosition,
	// so it's safe to cache the position for performance

	return el._leaflet_pos || new Point(0, 0);
}

// @function disableTextSelection()
// Prevents the user from generating `selectstart` DOM events, usually generated
// when the user drags the mouse through a page with text. Used internally
// by Leaflet to override the behaviour of any click-and-drag interaction on
// the map. Affects drag interactions on the whole document.

// @function enableTextSelection()
// Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).
var disableTextSelection;
var enableTextSelection;
var _userSelect;
if ('onselectstart' in document) {
	disableTextSelection = function () {
		on(window, 'selectstart', preventDefault);
	};
	enableTextSelection = function () {
		off(window, 'selectstart', preventDefault);
	};
} else {
	var userSelectProperty = testProp(
		['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

	disableTextSelection = function () {
		if (userSelectProperty) {
			var style = document.documentElement.style;
			_userSelect = style[userSelectProperty];
			style[userSelectProperty] = 'none';
		}
	};
	enableTextSelection = function () {
		if (userSelectProperty) {
			document.documentElement.style[userSelectProperty] = _userSelect;
			_userSelect = undefined;
		}
	};
}

// @function disableImageDrag()
// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
// for `dragstart` DOM events, usually generated when the user drags an image.
function disableImageDrag() {
	on(window, 'dragstart', preventDefault);
}

// @function enableImageDrag()
// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
function enableImageDrag() {
	off(window, 'dragstart', preventDefault);
}

var _outlineElement;
var _outlineStyle;
// @function preventOutline(el: HTMLElement)
// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
// of the element `el` invisible. Used internally by Leaflet to prevent
// focusable elements from displaying an outline when the user performs a
// drag interaction on them.
function preventOutline(element) {
	while (element.tabIndex === -1) {
		element = element.parentNode;
	}
	if (!element.style) { return; }
	restoreOutline();
	_outlineElement = element;
	_outlineStyle = element.style.outline;
	element.style.outline = 'none';
	on(window, 'keydown', restoreOutline);
}

// @function restoreOutline()
// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
function restoreOutline() {
	if (!_outlineElement) { return; }
	_outlineElement.style.outline = _outlineStyle;
	_outlineElement = undefined;
	_outlineStyle = undefined;
	off(window, 'keydown', restoreOutline);
}

// @function getSizedParentNode(el: HTMLElement): HTMLElement
// Finds the closest parent node which size (width and height) is not null.
function getSizedParentNode(element) {
	do {
		element = element.parentNode;
	} while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);
	return element;
}

// @function getScale(el: HTMLElement): Object
// Computes the CSS scale currently applied on the element.
// Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
// and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
function getScale(element) {
	var rect = element.getBoundingClientRect(); // Read-only in old browsers.

	return {
		x: rect.width / element.offsetWidth || 1,
		y: rect.height / element.offsetHeight || 1,
		boundingClientRect: rect
	};
}


var DomUtil = (Object.freeze || Object)({
	TRANSFORM: TRANSFORM,
	TRANSITION: TRANSITION,
	TRANSITION_END: TRANSITION_END,
	get: get,
	getStyle: getStyle,
	create: create$1,
	remove: remove,
	empty: empty,
	toFront: toFront,
	toBack: toBack,
	hasClass: hasClass,
	addClass: addClass,
	removeClass: removeClass,
	setClass: setClass,
	getClass: getClass,
	setOpacity: setOpacity,
	testProp: testProp,
	setTransform: setTransform,
	setPosition: setPosition,
	getPosition: getPosition,
	disableTextSelection: disableTextSelection,
	enableTextSelection: enableTextSelection,
	disableImageDrag: disableImageDrag,
	enableImageDrag: enableImageDrag,
	preventOutline: preventOutline,
	restoreOutline: restoreOutline,
	getSizedParentNode: getSizedParentNode,
	getScale: getScale
});

/*
 * @namespace DomEvent
 * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
 */

// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.

// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Adds a listener function (`fn`) to a particular DOM event type of the
// element `el`. You can optionally specify the context of the listener
// (object the `this` keyword will point to). You can also pass several
// space-separated types (e.g. `'click dblclick'`).

// @alternative
// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function on(obj, types, fn, context) {

	if (typeof types === 'object') {
		for (var type in types) {
			addOne(obj, type, types[type], fn);
		}
	} else {
		types = splitWords(types);

		for (var i = 0, len = types.length; i < len; i++) {
			addOne(obj, types[i], fn, context);
		}
	}

	return this;
}

var eventsKey = '_leaflet_events';

// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Removes a previously added listener function.
// Note that if you passed a custom context to on, you must pass the same
// context to `off` in order to remove the listener.

// @alternative
// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function off(obj, types, fn, context) {

	if (typeof types === 'object') {
		for (var type in types) {
			removeOne(obj, type, types[type], fn);
		}
	} else if (types) {
		types = splitWords(types);

		for (var i = 0, len = types.length; i < len; i++) {
			removeOne(obj, types[i], fn, context);
		}
	} else {
		for (var j in obj[eventsKey]) {
			removeOne(obj, j, obj[eventsKey][j]);
		}
		delete obj[eventsKey];
	}

	return this;
}

function addOne(obj, type, fn, context) {
	var id = type + stamp(fn) + (context ? '_' + stamp(context) : '');

	if (obj[eventsKey] && obj[eventsKey][id]) { return this; }

	var handler = function (e) {
		return fn.call(context || obj, e || window.event);
	};

	var originalHandler = handler;

	if (pointer && type.indexOf('touch') === 0) {
		// Needs DomEvent.Pointer.js
		addPointerListener(obj, type, handler, id);

	} else if (touch && (type === 'dblclick') && addDoubleTapListener &&
	           !(pointer && chrome)) {
		// Chrome >55 does not need the synthetic dblclicks from addDoubleTapListener
		// See #5180
		addDoubleTapListener(obj, handler, id);

	} else if ('addEventListener' in obj) {

		if (type === 'mousewheel') {
			obj.addEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, passiveEvents ? {passive: false} : false);

		} else if ((type === 'mouseenter') || (type === 'mouseleave')) {
			handler = function (e) {
				e = e || window.event;
				if (isExternalTarget(obj, e)) {
					originalHandler(e);
				}
			};
			obj.addEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);

		} else {
			if (type === 'click' && android) {
				handler = function (e) {
					filterClick(e, originalHandler);
				};
			}
			obj.addEventListener(type, handler, false);
		}

	} else if ('attachEvent' in obj) {
		obj.attachEvent('on' + type, handler);
	}

	obj[eventsKey] = obj[eventsKey] || {};
	obj[eventsKey][id] = handler;
}

function removeOne(obj, type, fn, context) {

	var id = type + stamp(fn) + (context ? '_' + stamp(context) : ''),
	    handler = obj[eventsKey] && obj[eventsKey][id];

	if (!handler) { return this; }

	if (pointer && type.indexOf('touch') === 0) {
		removePointerListener(obj, type, id);

	} else if (touch && (type === 'dblclick') && removeDoubleTapListener &&
	           !(pointer && chrome)) {
		removeDoubleTapListener(obj, id);

	} else if ('removeEventListener' in obj) {

		if (type === 'mousewheel') {
			obj.removeEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, passiveEvents ? {passive: false} : false);

		} else {
			obj.removeEventListener(
				type === 'mouseenter' ? 'mouseover' :
				type === 'mouseleave' ? 'mouseout' : type, handler, false);
		}

	} else if ('detachEvent' in obj) {
		obj.detachEvent('on' + type, handler);
	}

	obj[eventsKey][id] = null;
}

// @function stopPropagation(ev: DOMEvent): this
// Stop the given event from propagation to parent elements. Used inside the listener functions:
// ```js
// L.DomEvent.on(div, 'click', function (ev) {
// 	L.DomEvent.stopPropagation(ev);
// });
// ```
function stopPropagation(e) {

	if (e.stopPropagation) {
		e.stopPropagation();
	} else if (e.originalEvent) {  // In case of Leaflet event.
		e.originalEvent._stopped = true;
	} else {
		e.cancelBubble = true;
	}
	skipped(e);

	return this;
}

// @function disableScrollPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'mousewheel'` events (plus browser variants).
function disableScrollPropagation(el) {
	addOne(el, 'mousewheel', stopPropagation);
	return this;
}

// @function disableClickPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,
// `'mousedown'` and `'touchstart'` events (plus browser variants).
function disableClickPropagation(el) {
	on(el, 'mousedown touchstart dblclick', stopPropagation);
	addOne(el, 'click', fakeStop);
	return this;
}

// @function preventDefault(ev: DOMEvent): this
// Prevents the default action of the DOM Event `ev` from happening (such as
// following a link in the href of the a element, or doing a POST request
// with page reload when a `<form>` is submitted).
// Use it inside listener functions.
function preventDefault(e) {
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
	return this;
}

// @function stop(ev: DOMEvent): this
// Does `stopPropagation` and `preventDefault` at the same time.
function stop(e) {
	preventDefault(e);
	stopPropagation(e);
	return this;
}

// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
// Gets normalized mouse position from a DOM event relative to the
// `container` (border excluded) or to the whole page if not specified.
function getMousePosition(e, container) {
	if (!container) {
		return new Point(e.clientX, e.clientY);
	}

	var scale = getScale(container),
	    offset = scale.boundingClientRect; // left and top  values are in page scale (like the event clientX/Y)

	return new Point(
		// offset.left/top values are in page scale (like clientX/Y),
		// whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
		(e.clientX - offset.left) / scale.x - container.clientLeft,
		(e.clientY - offset.top) / scale.y - container.clientTop
	);
}

// Chrome on Win scrolls double the pixels as in other platforms (see #4538),
// and Firefox scrolls device pixels, not CSS pixels
var wheelPxFactor =
	(win && chrome) ? 2 * window.devicePixelRatio :
	gecko ? window.devicePixelRatio : 1;

// @function getWheelDelta(ev: DOMEvent): Number
// Gets normalized wheel delta from a mousewheel DOM event, in vertical
// pixels scrolled (negative if scrolling down).
// Events from pointing devices without precise scrolling are mapped to
// a best guess of 60 pixels.
function getWheelDelta(e) {
	return (edge) ? e.wheelDeltaY / 2 : // Don't trust window-geometry-based delta
	       (e.deltaY && e.deltaMode === 0) ? -e.deltaY / wheelPxFactor : // Pixels
	       (e.deltaY && e.deltaMode === 1) ? -e.deltaY * 20 : // Lines
	       (e.deltaY && e.deltaMode === 2) ? -e.deltaY * 60 : // Pages
	       (e.deltaX || e.deltaZ) ? 0 :	// Skip horizontal/depth wheel events
	       e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : // Legacy IE pixels
	       (e.detail && Math.abs(e.detail) < 32765) ? -e.detail * 20 : // Legacy Moz lines
	       e.detail ? e.detail / -32765 * 60 : // Legacy Moz pages
	       0;
}

var skipEvents = {};

function fakeStop(e) {
	// fakes stopPropagation by setting a special event flag, checked/reset with skipped(e)
	skipEvents[e.type] = true;
}

function skipped(e) {
	var events = skipEvents[e.type];
	// reset when checking, as it's only used in map container and propagates outside of the map
	skipEvents[e.type] = false;
	return events;
}

// check if element really left/entered the event target (for mouseenter/mouseleave)
function isExternalTarget(el, e) {

	var related = e.relatedTarget;

	if (!related) { return true; }

	try {
		while (related && (related !== el)) {
			related = related.parentNode;
		}
	} catch (err) {
		return false;
	}
	return (related !== el);
}

var lastClick;

// this is a horrible workaround for a bug in Android where a single touch triggers two click events
function filterClick(e, handler) {
	var timeStamp = (e.timeStamp || (e.originalEvent && e.originalEvent.timeStamp)),
	    elapsed = lastClick && (timeStamp - lastClick);

	// are they closer together than 500ms yet more than 100ms?
	// Android typically triggers them ~300ms apart while multiple listeners
	// on the same event should be triggered far faster;
	// or check if click is simulated on the element, and if it is, reject any non-simulated events

	if ((elapsed && elapsed > 100 && elapsed < 500) || (e.target._simulatedClick && !e._simulated)) {
		stop(e);
		return;
	}
	lastClick = timeStamp;

	handler(e);
}




var DomEvent = (Object.freeze || Object)({
	on: on,
	off: off,
	stopPropagation: stopPropagation,
	disableScrollPropagation: disableScrollPropagation,
	disableClickPropagation: disableClickPropagation,
	preventDefault: preventDefault,
	stop: stop,
	getMousePosition: getMousePosition,
	getWheelDelta: getWheelDelta,
	fakeStop: fakeStop,
	skipped: skipped,
	isExternalTarget: isExternalTarget,
	addListener: on,
	removeListener: off
});

/*
 * @class PosAnimation
 * @aka L.PosAnimation
 * @inherits Evented
 * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
 *
 * @example
 * ```js
 * var fx = new L.PosAnimation();
 * fx.run(el, [300, 500], 0.5);
 * ```
 *
 * @constructor L.PosAnimation()
 * Creates a `PosAnimation` object.
 *
 */

var PosAnimation = Evented.extend({

	// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
	// Run an animation of a given element to a new position, optionally setting
	// duration in seconds (`0.25` by default) and easing linearity factor (3rd
	// argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
	// `0.5` by default).
	run: function (el, newPos, duration, easeLinearity) {
		this.stop();

		this._el = el;
		this._inProgress = true;
		this._duration = duration || 0.25;
		this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

		this._startPos = getPosition(el);
		this._offset = newPos.subtract(this._startPos);
		this._startTime = +new Date();

		// @event start: Event
		// Fired when the animation starts
		this.fire('start');

		this._animate();
	},

	// @method stop()
	// Stops the animation (if currently running).
	stop: function () {
		if (!this._inProgress) { return; }

		this._step(true);
		this._complete();
	},

	_animate: function () {
		// animation loop
		this._animId = requestAnimFrame(this._animate, this);
		this._step();
	},

	_step: function (round) {
		var elapsed = (+new Date()) - this._startTime,
		    duration = this._duration * 1000;

		if (elapsed < duration) {
			this._runFrame(this._easeOut(elapsed / duration), round);
		} else {
			this._runFrame(1);
			this._complete();
		}
	},

	_runFrame: function (progress, round) {
		var pos = this._startPos.add(this._offset.multiplyBy(progress));
		if (round) {
			pos._round();
		}
		setPosition(this._el, pos);

		// @event step: Event
		// Fired continuously during the animation.
		this.fire('step');
	},

	_complete: function () {
		cancelAnimFrame(this._animId);

		this._inProgress = false;
		// @event end: Event
		// Fired when the animation ends.
		this.fire('end');
	},

	_easeOut: function (t) {
		return 1 - Math.pow(1 - t, this._easeOutPower);
	}
});

/*
 * @class Map
 * @aka L.Map
 * @inherits Evented
 *
 * The central class of the API — it is used to create a map on a page and manipulate it.
 *
 * @example
 *
 * ```js
 * // initialize the map on the "map" div with a given center and zoom
 * var map = L.map('map', {
 * 	center: [51.505, -0.09],
 * 	zoom: 13
 * });
 * ```
 *
 */

var Map = Evented.extend({

	options: {
		// @section Map State Options
		// @option crs: CRS = L.CRS.EPSG3857
		// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
		// sure what it means.
		crs: EPSG3857,

		// @option center: LatLng = undefined
		// Initial geographic center of the map
		center: undefined,

		// @option zoom: Number = undefined
		// Initial map zoom level
		zoom: undefined,

		// @option minZoom: Number = *
		// Minimum zoom level of the map.
		// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
		// the lowest of their `minZoom` options will be used instead.
		minZoom: undefined,

		// @option maxZoom: Number = *
		// Maximum zoom level of the map.
		// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
		// the highest of their `maxZoom` options will be used instead.
		maxZoom: undefined,

		// @option layers: Layer[] = []
		// Array of layers that will be added to the map initially
		layers: [],

		// @option maxBounds: LatLngBounds = null
		// When this option is set, the map restricts the view to the given
		// geographical bounds, bouncing the user back if the user tries to pan
		// outside the view. To set the restriction dynamically, use
		// [`setMaxBounds`](#map-setmaxbounds) method.
		maxBounds: undefined,

		// @option renderer: Renderer = *
		// The default method for drawing vector layers on the map. `L.SVG`
		// or `L.Canvas` by default depending on browser support.
		renderer: undefined,


		// @section Animation Options
		// @option zoomAnimation: Boolean = true
		// Whether the map zoom animation is enabled. By default it's enabled
		// in all browsers that support CSS3 Transitions except Android.
		zoomAnimation: true,

		// @option zoomAnimationThreshold: Number = 4
		// Won't animate zoom if the zoom difference exceeds this value.
		zoomAnimationThreshold: 4,

		// @option fadeAnimation: Boolean = true
		// Whether the tile fade animation is enabled. By default it's enabled
		// in all browsers that support CSS3 Transitions except Android.
		fadeAnimation: true,

		// @option markerZoomAnimation: Boolean = true
		// Whether markers animate their zoom with the zoom animation, if disabled
		// they will disappear for the length of the animation. By default it's
		// enabled in all browsers that support CSS3 Transitions except Android.
		markerZoomAnimation: true,

		// @option transform3DLimit: Number = 2^23
		// Defines the maximum size of a CSS translation transform. The default
		// value should not be changed unless a web browser positions layers in
		// the wrong place after doing a large `panBy`.
		transform3DLimit: 8388608, // Precision limit of a 32-bit float

		// @section Interaction Options
		// @option zoomSnap: Number = 1
		// Forces the map's zoom level to always be a multiple of this, particularly
		// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
		// By default, the zoom level snaps to the nearest integer; lower values
		// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
		// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
		zoomSnap: 1,

		// @option zoomDelta: Number = 1
		// Controls how much the map's zoom level will change after a
		// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
		// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
		// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
		zoomDelta: 1,

		// @option trackResize: Boolean = true
		// Whether the map automatically handles browser window resize to update itself.
		trackResize: true
	},

	initialize: function (id, options) { // (HTMLElement or String, Object)
		options = setOptions(this, options);

		// Make sure to assign internal flags at the beginning,
		// to avoid inconsistent state in some edge cases.
		this._handlers = [];
		this._layers = {};
		this._zoomBoundLayers = {};
		this._sizeChanged = true;

		this._initContainer(id);
		this._initLayout();

		// hack for https://github.com/Leaflet/Leaflet/issues/1980
		this._onResize = bind(this._onResize, this);

		this._initEvents();

		if (options.maxBounds) {
			this.setMaxBounds(options.maxBounds);
		}

		if (options.zoom !== undefined) {
			this._zoom = this._limitZoom(options.zoom);
		}

		if (options.center && options.zoom !== undefined) {
			this.setView(toLatLng(options.center), options.zoom, {reset: true});
		}

		this.callInitHooks();

		// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
		this._zoomAnimated = TRANSITION && any3d && !mobileOpera &&
				this.options.zoomAnimation;

		// zoom transitions run with the same duration for all layers, so if one of transitionend events
		// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
		if (this._zoomAnimated) {
			this._createAnimProxy();
			on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
		}

		this._addLayers(this.options.layers);
	},


	// @section Methods for modifying map state

	// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
	// Sets the view of the map (geographical center and zoom) with the given
	// animation options.
	setView: function (center, zoom, options) {

		zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
		center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);
		options = options || {};

		this._stop();

		if (this._loaded && !options.reset && options !== true) {

			if (options.animate !== undefined) {
				options.zoom = extend({animate: options.animate}, options.zoom);
				options.pan = extend({animate: options.animate, duration: options.duration}, options.pan);
			}

			// try animating pan or zoom
			var moved = (this._zoom !== zoom) ?
				this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :
				this._tryAnimatedPan(center, options.pan);

			if (moved) {
				// prevent resize handler call, the view will refresh after animation anyway
				clearTimeout(this._sizeTimer);
				return this;
			}
		}

		// animation didn't start, just reset the map view
		this._resetView(center, zoom);

		return this;
	},

	// @method setZoom(zoom: Number, options?: Zoom/pan options): this
	// Sets the zoom of the map.
	setZoom: function (zoom, options) {
		if (!this._loaded) {
			this._zoom = zoom;
			return this;
		}
		return this.setView(this.getCenter(), zoom, {zoom: options});
	},

	// @method zoomIn(delta?: Number, options?: Zoom options): this
	// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
	zoomIn: function (delta, options) {
		delta = delta || (any3d ? this.options.zoomDelta : 1);
		return this.setZoom(this._zoom + delta, options);
	},

	// @method zoomOut(delta?: Number, options?: Zoom options): this
	// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
	zoomOut: function (delta, options) {
		delta = delta || (any3d ? this.options.zoomDelta : 1);
		return this.setZoom(this._zoom - delta, options);
	},

	// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
	// Zooms the map while keeping a specified geographical point on the map
	// stationary (e.g. used internally for scroll zoom and double-click zoom).
	// @alternative
	// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
	// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
	setZoomAround: function (latlng, zoom, options) {
		var scale = this.getZoomScale(zoom),
		    viewHalf = this.getSize().divideBy(2),
		    containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng),

		    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
		    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

		return this.setView(newCenter, zoom, {zoom: options});
	},

	_getBoundsCenterZoom: function (bounds, options) {

		options = options || {};
		bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);

		var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
		    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),

		    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));

		zoom = (typeof options.maxZoom === 'number') ? Math.min(options.maxZoom, zoom) : zoom;

		if (zoom === Infinity) {
			return {
				center: bounds.getCenter(),
				zoom: zoom
			};
		}

		var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),

		    swPoint = this.project(bounds.getSouthWest(), zoom),
		    nePoint = this.project(bounds.getNorthEast(), zoom),
		    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

		return {
			center: center,
			zoom: zoom
		};
	},

	// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
	// Sets a map view that contains the given geographical bounds with the
	// maximum zoom level possible.
	fitBounds: function (bounds, options) {

		bounds = toLatLngBounds(bounds);

		if (!bounds.isValid()) {
			throw new Error('Bounds are not valid.');
		}

		var target = this._getBoundsCenterZoom(bounds, options);
		return this.setView(target.center, target.zoom, options);
	},

	// @method fitWorld(options?: fitBounds options): this
	// Sets a map view that mostly contains the whole world with the maximum
	// zoom level possible.
	fitWorld: function (options) {
		return this.fitBounds([[-90, -180], [90, 180]], options);
	},

	// @method panTo(latlng: LatLng, options?: Pan options): this
	// Pans the map to a given center.
	panTo: function (center, options) { // (LatLng)
		return this.setView(center, this._zoom, {pan: options});
	},

	// @method panBy(offset: Point, options?: Pan options): this
	// Pans the map by a given number of pixels (animated).
	panBy: function (offset, options) {
		offset = toPoint(offset).round();
		options = options || {};

		if (!offset.x && !offset.y) {
			return this.fire('moveend');
		}
		// If we pan too far, Chrome gets issues with tiles
		// and makes them disappear or appear in the wrong place (slightly offset) #2602
		if (options.animate !== true && !this.getSize().contains(offset)) {
			this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
			return this;
		}

		if (!this._panAnim) {
			this._panAnim = new PosAnimation();

			this._panAnim.on({
				'step': this._onPanTransitionStep,
				'end': this._onPanTransitionEnd
			}, this);
		}

		// don't fire movestart if animating inertia
		if (!options.noMoveStart) {
			this.fire('movestart');
		}

		// animate pan unless animate: false specified
		if (options.animate !== false) {
			addClass(this._mapPane, 'leaflet-pan-anim');

			var newPos = this._getMapPanePos().subtract(offset).round();
			this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
		} else {
			this._rawPanBy(offset);
			this.fire('move').fire('moveend');
		}

		return this;
	},

	// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
	// Sets the view of the map (geographical center and zoom) performing a smooth
	// pan-zoom animation.
	flyTo: function (targetCenter, targetZoom, options) {

		options = options || {};
		if (options.animate === false || !any3d) {
			return this.setView(targetCenter, targetZoom, options);
		}

		this._stop();

		var from = this.project(this.getCenter()),
		    to = this.project(targetCenter),
		    size = this.getSize(),
		    startZoom = this._zoom;

		targetCenter = toLatLng(targetCenter);
		targetZoom = targetZoom === undefined ? startZoom : targetZoom;

		var w0 = Math.max(size.x, size.y),
		    w1 = w0 * this.getZoomScale(startZoom, targetZoom),
		    u1 = (to.distanceTo(from)) || 1,
		    rho = 1.42,
		    rho2 = rho * rho;

		function r(i) {
			var s1 = i ? -1 : 1,
			    s2 = i ? w1 : w0,
			    t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,
			    b1 = 2 * s2 * rho2 * u1,
			    b = t1 / b1,
			    sq = Math.sqrt(b * b + 1) - b;

			    // workaround for floating point precision bug when sq = 0, log = -Infinite,
			    // thus triggering an infinite loop in flyTo
			    var log = sq < 0.000000001 ? -18 : Math.log(sq);

			return log;
		}

		function sinh(n) { return (Math.exp(n) - Math.exp(-n)) / 2; }
		function cosh(n) { return (Math.exp(n) + Math.exp(-n)) / 2; }
		function tanh(n) { return sinh(n) / cosh(n); }

		var r0 = r(0);

		function w(s) { return w0 * (cosh(r0) / cosh(r0 + rho * s)); }
		function u(s) { return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2; }

		function easeOut(t) { return 1 - Math.pow(1 - t, 1.5); }

		var start = Date.now(),
		    S = (r(1) - r0) / rho,
		    duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;

		function frame() {
			var t = (Date.now() - start) / duration,
			    s = easeOut(t) * S;

			if (t <= 1) {
				this._flyToFrame = requestAnimFrame(frame, this);

				this._move(
					this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom),
					this.getScaleZoom(w0 / w(s), startZoom),
					{flyTo: true});

			} else {
				this
					._move(targetCenter, targetZoom)
					._moveEnd(true);
			}
		}

		this._moveStart(true, options.noMoveStart);

		frame.call(this);
		return this;
	},

	// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
	// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
	// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
	flyToBounds: function (bounds, options) {
		var target = this._getBoundsCenterZoom(bounds, options);
		return this.flyTo(target.center, target.zoom, options);
	},

	// @method setMaxBounds(bounds: Bounds): this
	// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
	setMaxBounds: function (bounds) {
		bounds = toLatLngBounds(bounds);

		if (!bounds.isValid()) {
			this.options.maxBounds = null;
			return this.off('moveend', this._panInsideMaxBounds);
		} else if (this.options.maxBounds) {
			this.off('moveend', this._panInsideMaxBounds);
		}

		this.options.maxBounds = bounds;

		if (this._loaded) {
			this._panInsideMaxBounds();
		}

		return this.on('moveend', this._panInsideMaxBounds);
	},

	// @method setMinZoom(zoom: Number): this
	// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
	setMinZoom: function (zoom) {
		var oldZoom = this.options.minZoom;
		this.options.minZoom = zoom;

		if (this._loaded && oldZoom !== zoom) {
			this.fire('zoomlevelschange');

			if (this.getZoom() < this.options.minZoom) {
				return this.setZoom(zoom);
			}
		}

		return this;
	},

	// @method setMaxZoom(zoom: Number): this
	// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
	setMaxZoom: function (zoom) {
		var oldZoom = this.options.maxZoom;
		this.options.maxZoom = zoom;

		if (this._loaded && oldZoom !== zoom) {
			this.fire('zoomlevelschange');

			if (this.getZoom() > this.options.maxZoom) {
				return this.setZoom(zoom);
			}
		}

		return this;
	},

	// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
	// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
	panInsideBounds: function (bounds, options) {
		this._enforcingBounds = true;
		var center = this.getCenter(),
		    newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));

		if (!center.equals(newCenter)) {
			this.panTo(newCenter, options);
		}

		this._enforcingBounds = false;
		return this;
	},

	// @method panInside(latlng: LatLng, options?: options): this
	// Pans the map the minimum amount to make the `latlng` visible. Use
	// `padding`, `paddingTopLeft` and `paddingTopRight` options to fit
	// the display to more restricted bounds, like [`fitBounds`](#map-fitbounds).
	// If `latlng` is already within the (optionally padded) display bounds,
	// the map will not be panned.
	panInside: function (latlng, options) {
		options = options || {};

		var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
		    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),
		    center = this.getCenter(),
		    pixelCenter = this.project(center),
		    pixelPoint = this.project(latlng),
		    pixelBounds = this.getPixelBounds(),
		    halfPixelBounds = pixelBounds.getSize().divideBy(2),
		    paddedBounds = toBounds([pixelBounds.min.add(paddingTL), pixelBounds.max.subtract(paddingBR)]);

		if (!paddedBounds.contains(pixelPoint)) {
			this._enforcingBounds = true;
			var diff = pixelCenter.subtract(pixelPoint),
			    newCenter = toPoint(pixelPoint.x + diff.x, pixelPoint.y + diff.y);

			if (pixelPoint.x < paddedBounds.min.x || pixelPoint.x > paddedBounds.max.x) {
				newCenter.x = pixelCenter.x - diff.x;
				if (diff.x > 0) {
					newCenter.x += halfPixelBounds.x - paddingTL.x;
				} else {
					newCenter.x -= halfPixelBounds.x - paddingBR.x;
				}
			}
			if (pixelPoint.y < paddedBounds.min.y || pixelPoint.y > paddedBounds.max.y) {
				newCenter.y = pixelCenter.y - diff.y;
				if (diff.y > 0) {
					newCenter.y += halfPixelBounds.y - paddingTL.y;
				} else {
					newCenter.y -= halfPixelBounds.y - paddingBR.y;
				}
			}
			this.panTo(this.unproject(newCenter), options);
			this._enforcingBounds = false;
		}
		return this;
	},

	// @method invalidateSize(options: Zoom/pan options): this
	// Checks if the map container size changed and updates the map if so —
	// call it after you've changed the map size dynamically, also animating
	// pan by default. If `options.pan` is `false`, panning will not occur.
	// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
	// that it doesn't happen often even if the method is called many
	// times in a row.

	// @alternative
	// @method invalidateSize(animate: Boolean): this
	// Checks if the map container size changed and updates the map if so —
	// call it after you've changed the map size dynamically, also animating
	// pan by default.
	invalidateSize: function (options) {
		if (!this._loaded) { return this; }

		options = extend({
			animate: false,
			pan: true
		}, options === true ? {animate: true} : options);

		var oldSize = this.getSize();
		this._sizeChanged = true;
		this._lastCenter = null;

		var newSize = this.getSize(),
		    oldCenter = oldSize.divideBy(2).round(),
		    newCenter = newSize.divideBy(2).round(),
		    offset = oldCenter.subtract(newCenter);

		if (!offset.x && !offset.y) { return this; }

		if (options.animate && options.pan) {
			this.panBy(offset);

		} else {
			if (options.pan) {
				this._rawPanBy(offset);
			}

			this.fire('move');

			if (options.debounceMoveend) {
				clearTimeout(this._sizeTimer);
				this._sizeTimer = setTimeout(bind(this.fire, this, 'moveend'), 200);
			} else {
				this.fire('moveend');
			}
		}

		// @section Map state change events
		// @event resize: ResizeEvent
		// Fired when the map is resized.
		return this.fire('resize', {
			oldSize: oldSize,
			newSize: newSize
		});
	},

	// @section Methods for modifying map state
	// @method stop(): this
	// Stops the currently running `panTo` or `flyTo` animation, if any.
	stop: function () {
		this.setZoom(this._limitZoom(this._zoom));
		if (!this.options.zoomSnap) {
			this.fire('viewreset');
		}
		return this._stop();
	},

	// @section Geolocation methods
	// @method locate(options?: Locate options): this
	// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
	// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
	// and optionally sets the map view to the user's location with respect to
	// detection accuracy (or to the world view if geolocation failed).
	// Note that, if your page doesn't use HTTPS, this method will fail in
	// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
	// See `Locate options` for more details.
	locate: function (options) {

		options = this._locateOptions = extend({
			timeout: 10000,
			watch: false
			// setView: false
			// maxZoom: <Number>
			// maximumAge: 0
			// enableHighAccuracy: false
		}, options);

		if (!('geolocation' in navigator)) {
			this._handleGeolocationError({
				code: 0,
				message: 'Geolocation not supported.'
			});
			return this;
		}

		var onResponse = bind(this._handleGeolocationResponse, this),
		    onError = bind(this._handleGeolocationError, this);

		if (options.watch) {
			this._locationWatchId =
			        navigator.geolocation.watchPosition(onResponse, onError, options);
		} else {
			navigator.geolocation.getCurrentPosition(onResponse, onError, options);
		}
		return this;
	},

	// @method stopLocate(): this
	// Stops watching location previously initiated by `map.locate({watch: true})`
	// and aborts resetting the map view if map.locate was called with
	// `{setView: true}`.
	stopLocate: function () {
		if (navigator.geolocation && navigator.geolocation.clearWatch) {
			navigator.geolocation.clearWatch(this._locationWatchId);
		}
		if (this._locateOptions) {
			this._locateOptions.setView = false;
		}
		return this;
	},

	_handleGeolocationError: function (error) {
		var c = error.code,
		    message = error.message ||
		            (c === 1 ? 'permission denied' :
		            (c === 2 ? 'position unavailable' : 'timeout'));

		if (this._locateOptions.setView && !this._loaded) {
			this.fitWorld();
		}

		// @section Location events
		// @event locationerror: ErrorEvent
		// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
		this.fire('locationerror', {
			code: c,
			message: 'Geolocation error: ' + message + '.'
		});
	},

	_handleGeolocationResponse: function (pos) {
		var lat = pos.coords.latitude,
		    lng = pos.coords.longitude,
		    latlng = new LatLng(lat, lng),
		    bounds = latlng.toBounds(pos.coords.accuracy * 2),
		    options = this._locateOptions;

		if (options.setView) {
			var zoom = this.getBoundsZoom(bounds);
			this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
		}

		var data = {
			latlng: latlng,
			bounds: bounds,
			timestamp: pos.timestamp
		};

		for (var i in pos.coords) {
			if (typeof pos.coords[i] === 'number') {
				data[i] = pos.coords[i];
			}
		}

		// @event locationfound: LocationEvent
		// Fired when geolocation (using the [`locate`](#map-locate) method)
		// went successfully.
		this.fire('locationfound', data);
	},

	// TODO Appropriate docs section?
	// @section Other Methods
	// @method addHandler(name: String, HandlerClass: Function): this
	// Adds a new `Handler` to the map, given its name and constructor function.
	addHandler: function (name, HandlerClass) {
		if (!HandlerClass) { return this; }

		var handler = this[name] = new HandlerClass(this);

		this._handlers.push(handler);

		if (this.options[name]) {
			handler.enable();
		}

		return this;
	},

	// @method remove(): this
	// Destroys the map and clears all related event listeners.
	remove: function () {

		this._initEvents(true);

		if (this._containerId !== this._container._leaflet_id) {
			throw new Error('Map container is being reused by another instance');
		}

		try {
			// throws error in IE6-8
			delete this._container._leaflet_id;
			delete this._containerId;
		} catch (e) {
			/*eslint-disable */
			this._container._leaflet_id = undefined;
			/* eslint-enable */
			this._containerId = undefined;
		}

		if (this._locationWatchId !== undefined) {
			this.stopLocate();
		}

		this._stop();

		remove(this._mapPane);

		if (this._clearControlPos) {
			this._clearControlPos();
		}
		if (this._resizeRequest) {
			cancelAnimFrame(this._resizeRequest);
			this._resizeRequest = null;
		}

		this._clearHandlers();

		if (this._loaded) {
			// @section Map state change events
			// @event unload: Event
			// Fired when the map is destroyed with [remove](#map-remove) method.
			this.fire('unload');
		}

		var i;
		for (i in this._layers) {
			this._layers[i].remove();
		}
		for (i in this._panes) {
			remove(this._panes[i]);
		}

		this._layers = [];
		this._panes = [];
		delete this._mapPane;
		delete this._renderer;

		return this;
	},

	// @section Other Methods
	// @method createPane(name: String, container?: HTMLElement): HTMLElement
	// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
	// then returns it. The pane is created as a child of `container`, or
	// as a child of the main map pane if not set.
	createPane: function (name, container) {
		var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),
		    pane = create$1('div', className, container || this._mapPane);

		if (name) {
			this._panes[name] = pane;
		}
		return pane;
	},

	// @section Methods for Getting Map State

	// @method getCenter(): LatLng
	// Returns the geographical center of the map view
	getCenter: function () {
		this._checkIfLoaded();

		if (this._lastCenter && !this._moved()) {
			return this._lastCenter;
		}
		return this.layerPointToLatLng(this._getCenterLayerPoint());
	},

	// @method getZoom(): Number
	// Returns the current zoom level of the map view
	getZoom: function () {
		return this._zoom;
	},

	// @method getBounds(): LatLngBounds
	// Returns the geographical bounds visible in the current map view
	getBounds: function () {
		var bounds = this.getPixelBounds(),
		    sw = this.unproject(bounds.getBottomLeft()),
		    ne = this.unproject(bounds.getTopRight());

		return new LatLngBounds(sw, ne);
	},

	// @method getMinZoom(): Number
	// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
	getMinZoom: function () {
		return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
	},

	// @method getMaxZoom(): Number
	// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
	getMaxZoom: function () {
		return this.options.maxZoom === undefined ?
			(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :
			this.options.maxZoom;
	},

	// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
	// Returns the maximum zoom level on which the given bounds fit to the map
	// view in its entirety. If `inside` (optional) is set to `true`, the method
	// instead returns the minimum zoom level on which the map view fits into
	// the given bounds in its entirety.
	getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number
		bounds = toLatLngBounds(bounds);
		padding = toPoint(padding || [0, 0]);

		var zoom = this.getZoom() || 0,
		    min = this.getMinZoom(),
		    max = this.getMaxZoom(),
		    nw = bounds.getNorthWest(),
		    se = bounds.getSouthEast(),
		    size = this.getSize().subtract(padding),
		    boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(),
		    snap = any3d ? this.options.zoomSnap : 1,
		    scalex = size.x / boundsSize.x,
		    scaley = size.y / boundsSize.y,
		    scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);

		zoom = this.getScaleZoom(scale, zoom);

		if (snap) {
			zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level
			zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
		}

		return Math.max(min, Math.min(max, zoom));
	},

	// @method getSize(): Point
	// Returns the current size of the map container (in pixels).
	getSize: function () {
		if (!this._size || this._sizeChanged) {
			this._size = new Point(
				this._container.clientWidth || 0,
				this._container.clientHeight || 0);

			this._sizeChanged = false;
		}
		return this._size.clone();
	},

	// @method getPixelBounds(): Bounds
	// Returns the bounds of the current map view in projected pixel
	// coordinates (sometimes useful in layer and overlay implementations).
	getPixelBounds: function (center, zoom) {
		var topLeftPoint = this._getTopLeftPoint(center, zoom);
		return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
	},

	// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
	// the map pane? "left point of the map layer" can be confusing, specially
	// since there can be negative offsets.
	// @method getPixelOrigin(): Point
	// Returns the projected pixel coordinates of the top left point of
	// the map layer (useful in custom layer and overlay implementations).
	getPixelOrigin: function () {
		this._checkIfLoaded();
		return this._pixelOrigin;
	},

	// @method getPixelWorldBounds(zoom?: Number): Bounds
	// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
	// If `zoom` is omitted, the map's current zoom level is used.
	getPixelWorldBounds: function (zoom) {
		return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
	},

	// @section Other Methods

	// @method getPane(pane: String|HTMLElement): HTMLElement
	// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
	getPane: function (pane) {
		return typeof pane === 'string' ? this._panes[pane] : pane;
	},

	// @method getPanes(): Object
	// Returns a plain object containing the names of all [panes](#map-pane) as keys and
	// the panes as values.
	getPanes: function () {
		return this._panes;
	},

	// @method getContainer: HTMLElement
	// Returns the HTML element that contains the map.
	getContainer: function () {
		return this._container;
	},


	// @section Conversion Methods

	// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
	// Returns the scale factor to be applied to a map transition from zoom level
	// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
	getZoomScale: function (toZoom, fromZoom) {
		// TODO replace with universal implementation after refactoring projections
		var crs = this.options.crs;
		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
		return crs.scale(toZoom) / crs.scale(fromZoom);
	},

	// @method getScaleZoom(scale: Number, fromZoom: Number): Number
	// Returns the zoom level that the map would end up at, if it is at `fromZoom`
	// level and everything is scaled by a factor of `scale`. Inverse of
	// [`getZoomScale`](#map-getZoomScale).
	getScaleZoom: function (scale, fromZoom) {
		var crs = this.options.crs;
		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
		var zoom = crs.zoom(scale * crs.scale(fromZoom));
		return isNaN(zoom) ? Infinity : zoom;
	},

	// @method project(latlng: LatLng, zoom: Number): Point
	// Projects a geographical coordinate `LatLng` according to the projection
	// of the map's CRS, then scales it according to `zoom` and the CRS's
	// `Transformation`. The result is pixel coordinate relative to
	// the CRS origin.
	project: function (latlng, zoom) {
		zoom = zoom === undefined ? this._zoom : zoom;
		return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);
	},

	// @method unproject(point: Point, zoom: Number): LatLng
	// Inverse of [`project`](#map-project).
	unproject: function (point, zoom) {
		zoom = zoom === undefined ? this._zoom : zoom;
		return this.options.crs.pointToLatLng(toPoint(point), zoom);
	},

	// @method layerPointToLatLng(point: Point): LatLng
	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
	// returns the corresponding geographical coordinate (for the current zoom level).
	layerPointToLatLng: function (point) {
		var projectedPoint = toPoint(point).add(this.getPixelOrigin());
		return this.unproject(projectedPoint);
	},

	// @method latLngToLayerPoint(latlng: LatLng): Point
	// Given a geographical coordinate, returns the corresponding pixel coordinate
	// relative to the [origin pixel](#map-getpixelorigin).
	latLngToLayerPoint: function (latlng) {
		var projectedPoint = this.project(toLatLng(latlng))._round();
		return projectedPoint._subtract(this.getPixelOrigin());
	},

	// @method wrapLatLng(latlng: LatLng): LatLng
	// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
	// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
	// CRS's bounds.
	// By default this means longitude is wrapped around the dateline so its
	// value is between -180 and +180 degrees.
	wrapLatLng: function (latlng) {
		return this.options.crs.wrapLatLng(toLatLng(latlng));
	},

	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
	// Returns a `LatLngBounds` with the same size as the given one, ensuring that
	// its center is within the CRS's bounds.
	// By default this means the center longitude is wrapped around the dateline so its
	// value is between -180 and +180 degrees, and the majority of the bounds
	// overlaps the CRS's bounds.
	wrapLatLngBounds: function (latlng) {
		return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
	},

	// @method distance(latlng1: LatLng, latlng2: LatLng): Number
	// Returns the distance between two geographical coordinates according to
	// the map's CRS. By default this measures distance in meters.
	distance: function (latlng1, latlng2) {
		return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
	},

	// @method containerPointToLayerPoint(point: Point): Point
	// Given a pixel coordinate relative to the map container, returns the corresponding
	// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
	containerPointToLayerPoint: function (point) { // (Point)
		return toPoint(point).subtract(this._getMapPanePos());
	},

	// @method layerPointToContainerPoint(point: Point): Point
	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
	// returns the corresponding pixel coordinate relative to the map container.
	layerPointToContainerPoint: function (point) { // (Point)
		return toPoint(point).add(this._getMapPanePos());
	},

	// @method containerPointToLatLng(point: Point): LatLng
	// Given a pixel coordinate relative to the map container, returns
	// the corresponding geographical coordinate (for the current zoom level).
	containerPointToLatLng: function (point) {
		var layerPoint = this.containerPointToLayerPoint(toPoint(point));
		return this.layerPointToLatLng(layerPoint);
	},

	// @method latLngToContainerPoint(latlng: LatLng): Point
	// Given a geographical coordinate, returns the corresponding pixel coordinate
	// relative to the map container.
	latLngToContainerPoint: function (latlng) {
		return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
	},

	// @method mouseEventToContainerPoint(ev: MouseEvent): Point
	// Given a MouseEvent object, returns the pixel coordinate relative to the
	// map container where the event took place.
	mouseEventToContainerPoint: function (e) {
		return getMousePosition(e, this._container);
	},

	// @method mouseEventToLayerPoint(ev: MouseEvent): Point
	// Given a MouseEvent object, returns the pixel coordinate relative to
	// the [origin pixel](#map-getpixelorigin) where the event took place.
	mouseEventToLayerPoint: function (e) {
		return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
	},

	// @method mouseEventToLatLng(ev: MouseEvent): LatLng
	// Given a MouseEvent object, returns geographical coordinate where the
	// event took place.
	mouseEventToLatLng: function (e) { // (MouseEvent)
		return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
	},


	// map initialization methods

	_initContainer: function (id) {
		var container = this._container = get(id);

		if (!container) {
			throw new Error('Map container not found.');
		} else if (container._leaflet_id) {
			throw new Error('Map container is already initialized.');
		}

		on(container, 'scroll', this._onScroll, this);
		this._containerId = stamp(container);
	},

	_initLayout: function () {
		var container = this._container;

		this._fadeAnimated = this.options.fadeAnimation && any3d;

		addClass(container, 'leaflet-container' +
			(touch ? ' leaflet-touch' : '') +
			(retina ? ' leaflet-retina' : '') +
			(ielt9 ? ' leaflet-oldie' : '') +
			(safari ? ' leaflet-safari' : '') +
			(this._fadeAnimated ? ' leaflet-fade-anim' : ''));

		var position = getStyle(container, 'position');

		if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
			container.style.position = 'relative';
		}

		this._initPanes();

		if (this._initControlPos) {
			this._initControlPos();
		}
	},

	_initPanes: function () {
		var panes = this._panes = {};
		this._paneRenderers = {};

		// @section
		//
		// Panes are DOM elements used to control the ordering of layers on the map. You
		// can access panes with [`map.getPane`](#map-getpane) or
		// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
		// [`map.createPane`](#map-createpane) method.
		//
		// Every map has the following default panes that differ only in zIndex.
		//
		// @pane mapPane: HTMLElement = 'auto'
		// Pane that contains all other map panes

		this._mapPane = this.createPane('mapPane', this._container);
		setPosition(this._mapPane, new Point(0, 0));

		// @pane tilePane: HTMLElement = 200
		// Pane for `GridLayer`s and `TileLayer`s
		this.createPane('tilePane');
		// @pane overlayPane: HTMLElement = 400
		// Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
		this.createPane('shadowPane');
		// @pane shadowPane: HTMLElement = 500
		// Pane for overlay shadows (e.g. `Marker` shadows)
		this.createPane('overlayPane');
		// @pane markerPane: HTMLElement = 600
		// Pane for `Icon`s of `Marker`s
		this.createPane('markerPane');
		// @pane tooltipPane: HTMLElement = 650
		// Pane for `Tooltip`s.
		this.createPane('tooltipPane');
		// @pane popupPane: HTMLElement = 700
		// Pane for `Popup`s.
		this.createPane('popupPane');

		if (!this.options.markerZoomAnimation) {
			addClass(panes.markerPane, 'leaflet-zoom-hide');
			addClass(panes.shadowPane, 'leaflet-zoom-hide');
		}
	},


	// private methods that modify map state

	// @section Map state change events
	_resetView: function (center, zoom) {
		setPosition(this._mapPane, new Point(0, 0));

		var loading = !this._loaded;
		this._loaded = true;
		zoom = this._limitZoom(zoom);

		this.fire('viewprereset');

		var zoomChanged = this._zoom !== zoom;
		this
			._moveStart(zoomChanged, false)
			._move(center, zoom)
			._moveEnd(zoomChanged);

		// @event viewreset: Event
		// Fired when the map needs to redraw its content (this usually happens
		// on map zoom or load). Very useful for creating custom overlays.
		this.fire('viewreset');

		// @event load: Event
		// Fired when the map is initialized (when its center and zoom are set
		// for the first time).
		if (loading) {
			this.fire('load');
		}
	},

	_moveStart: function (zoomChanged, noMoveStart) {
		// @event zoomstart: Event
		// Fired when the map zoom is about to change (e.g. before zoom animation).
		// @event movestart: Event
		// Fired when the view of the map starts changing (e.g. user starts dragging the map).
		if (zoomChanged) {
			this.fire('zoomstart');
		}
		if (!noMoveStart) {
			this.fire('movestart');
		}
		return this;
	},

	_move: function (center, zoom, data) {
		if (zoom === undefined) {
			zoom = this._zoom;
		}
		var zoomChanged = this._zoom !== zoom;

		this._zoom = zoom;
		this._lastCenter = center;
		this._pixelOrigin = this._getNewPixelOrigin(center);

		// @event zoom: Event
		// Fired repeatedly during any change in zoom level, including zoom
		// and fly animations.
		if (zoomChanged || (data && data.pinch)) {	// Always fire 'zoom' if pinching because #3530
			this.fire('zoom', data);
		}

		// @event move: Event
		// Fired repeatedly during any movement of the map, including pan and
		// fly animations.
		return this.fire('move', data);
	},

	_moveEnd: function (zoomChanged) {
		// @event zoomend: Event
		// Fired when the map has changed, after any animations.
		if (zoomChanged) {
			this.fire('zoomend');
		}

		// @event moveend: Event
		// Fired when the center of the map stops changing (e.g. user stopped
		// dragging the map).
		return this.fire('moveend');
	},

	_stop: function () {
		cancelAnimFrame(this._flyToFrame);
		if (this._panAnim) {
			this._panAnim.stop();
		}
		return this;
	},

	_rawPanBy: function (offset) {
		setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
	},

	_getZoomSpan: function () {
		return this.getMaxZoom() - this.getMinZoom();
	},

	_panInsideMaxBounds: function () {
		if (!this._enforcingBounds) {
			this.panInsideBounds(this.options.maxBounds);
		}
	},

	_checkIfLoaded: function () {
		if (!this._loaded) {
			throw new Error('Set map center and zoom first.');
		}
	},

	// DOM event handling

	// @section Interaction events
	_initEvents: function (remove$$1) {
		this._targets = {};
		this._targets[stamp(this._container)] = this;

		var onOff = remove$$1 ? off : on;

		// @event click: MouseEvent
		// Fired when the user clicks (or taps) the map.
		// @event dblclick: MouseEvent
		// Fired when the user double-clicks (or double-taps) the map.
		// @event mousedown: MouseEvent
		// Fired when the user pushes the mouse button on the map.
		// @event mouseup: MouseEvent
		// Fired when the user releases the mouse button on the map.
		// @event mouseover: MouseEvent
		// Fired when the mouse enters the map.
		// @event mouseout: MouseEvent
		// Fired when the mouse leaves the map.
		// @event mousemove: MouseEvent
		// Fired while the mouse moves over the map.
		// @event contextmenu: MouseEvent
		// Fired when the user pushes the right mouse button on the map, prevents
		// default browser context menu from showing if there are listeners on
		// this event. Also fired on mobile when the user holds a single touch
		// for a second (also called long press).
		// @event keypress: KeyboardEvent
		// Fired when the user presses a key from the keyboard that produces a character value while the map is focused.
		// @event keydown: KeyboardEvent
		// Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event,
		// the `keydown` event is fired for keys that produce a character value and for keys
		// that do not produce a character value.
		// @event keyup: KeyboardEvent
		// Fired when the user releases a key from the keyboard while the map is focused.
		onOff(this._container, 'click dblclick mousedown mouseup ' +
			'mouseover mouseout mousemove contextmenu keypress keydown keyup', this._handleDOMEvent, this);

		if (this.options.trackResize) {
			onOff(window, 'resize', this._onResize, this);
		}

		if (any3d && this.options.transform3DLimit) {
			(remove$$1 ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
		}
	},

	_onResize: function () {
		cancelAnimFrame(this._resizeRequest);
		this._resizeRequest = requestAnimFrame(
		        function () { this.invalidateSize({debounceMoveend: true}); }, this);
	},

	_onScroll: function () {
		this._container.scrollTop  = 0;
		this._container.scrollLeft = 0;
	},

	_onMoveEnd: function () {
		var pos = this._getMapPanePos();
		if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
			// https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
			// a pixel offset on very high values, see: http://jsfiddle.net/dg6r5hhb/
			this._resetView(this.getCenter(), this.getZoom());
		}
	},

	_findEventTargets: function (e, type) {
		var targets = [],
		    target,
		    isHover = type === 'mouseout' || type === 'mouseover',
		    src = e.target || e.srcElement,
		    dragging = false;

		while (src) {
			target = this._targets[stamp(src)];
			if (target && (type === 'click' || type === 'preclick') && !e._simulated && this._draggableMoved(target)) {
				// Prevent firing click after you just dragged an object.
				dragging = true;
				break;
			}
			if (target && target.listens(type, true)) {
				if (isHover && !isExternalTarget(src, e)) { break; }
				targets.push(target);
				if (isHover) { break; }
			}
			if (src === this._container) { break; }
			src = src.parentNode;
		}
		if (!targets.length && !dragging && !isHover && isExternalTarget(src, e)) {
			targets = [this];
		}
		return targets;
	},

	_handleDOMEvent: function (e) {
		if (!this._loaded || skipped(e)) { return; }

		var type = e.type;

		if (type === 'mousedown' || type === 'keypress' || type === 'keyup' || type === 'keydown') {
			// prevents outline when clicking on keyboard-focusable element
			preventOutline(e.target || e.srcElement);
		}

		this._fireDOMEvent(e, type);
	},

	_mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],

	_fireDOMEvent: function (e, type, targets) {

		if (e.type === 'click') {
			// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
			// @event preclick: MouseEvent
			// Fired before mouse click on the map (sometimes useful when you
			// want something to happen on click before any existing click
			// handlers start running).
			var synth = extend({}, e);
			synth.type = 'preclick';
			this._fireDOMEvent(synth, synth.type, targets);
		}

		if (e._stopped) { return; }

		// Find the layer the event is propagating from and its parents.
		targets = (targets || []).concat(this._findEventTargets(e, type));

		if (!targets.length) { return; }

		var target = targets[0];
		if (type === 'contextmenu' && target.listens(type, true)) {
			preventDefault(e);
		}

		var data = {
			originalEvent: e
		};

		if (e.type !== 'keypress' && e.type !== 'keydown' && e.type !== 'keyup') {
			var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);
			data.containerPoint = isMarker ?
				this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
			data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
			data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
		}

		for (var i = 0; i < targets.length; i++) {
			targets[i].fire(type, data, true);
			if (data.originalEvent._stopped ||
				(targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1)) { return; }
		}
	},

	_draggableMoved: function (obj) {
		obj = obj.dragging && obj.dragging.enabled() ? obj : this;
		return (obj.dragging && obj.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());
	},

	_clearHandlers: function () {
		for (var i = 0, len = this._handlers.length; i < len; i++) {
			this._handlers[i].disable();
		}
	},

	// @section Other Methods

	// @method whenReady(fn: Function, context?: Object): this
	// Runs the given function `fn` when the map gets initialized with
	// a view (center and zoom) and at least one layer, or immediately
	// if it's already initialized, optionally passing a function context.
	whenReady: function (callback, context) {
		if (this._loaded) {
			callback.call(context || this, {target: this});
		} else {
			this.on('load', callback, context);
		}
		return this;
	},


	// private methods for getting map state

	_getMapPanePos: function () {
		return getPosition(this._mapPane) || new Point(0, 0);
	},

	_moved: function () {
		var pos = this._getMapPanePos();
		return pos && !pos.equals([0, 0]);
	},

	_getTopLeftPoint: function (center, zoom) {
		var pixelOrigin = center && zoom !== undefined ?
			this._getNewPixelOrigin(center, zoom) :
			this.getPixelOrigin();
		return pixelOrigin.subtract(this._getMapPanePos());
	},

	_getNewPixelOrigin: function (center, zoom) {
		var viewHalf = this.getSize()._divideBy(2);
		return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
	},

	_latLngToNewLayerPoint: function (latlng, zoom, center) {
		var topLeft = this._getNewPixelOrigin(center, zoom);
		return this.project(latlng, zoom)._subtract(topLeft);
	},

	_latLngBoundsToNewLayerBounds: function (latLngBounds, zoom, center) {
		var topLeft = this._getNewPixelOrigin(center, zoom);
		return toBounds([
			this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft),
			this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft),
			this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft),
			this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)
		]);
	},

	// layer point of the current center
	_getCenterLayerPoint: function () {
		return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
	},

	// offset of the specified place to the current center in pixels
	_getCenterOffset: function (latlng) {
		return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
	},

	// adjust center for view to get inside bounds
	_limitCenter: function (center, zoom, bounds) {

		if (!bounds) { return center; }

		var centerPoint = this.project(center, zoom),
		    viewHalf = this.getSize().divideBy(2),
		    viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
		    offset = this._getBoundsOffset(viewBounds, bounds, zoom);

		// If offset is less than a pixel, ignore.
		// This prevents unstable projections from getting into
		// an infinite loop of tiny offsets.
		if (offset.round().equals([0, 0])) {
			return center;
		}

		return this.unproject(centerPoint.add(offset), zoom);
	},

	// adjust offset for view to get inside bounds
	_limitOffset: function (offset, bounds) {
		if (!bounds) { return offset; }

		var viewBounds = this.getPixelBounds(),
		    newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

		return offset.add(this._getBoundsOffset(newBounds, bounds));
	},

	// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
	_getBoundsOffset: function (pxBounds, maxBounds, zoom) {
		var projectedMaxBounds = toBounds(
		        this.project(maxBounds.getNorthEast(), zoom),
		        this.project(maxBounds.getSouthWest(), zoom)
		    ),
		    minOffset = projectedMaxBounds.min.subtract(pxBounds.min),
		    maxOffset = projectedMaxBounds.max.subtract(pxBounds.max),

		    dx = this._rebound(minOffset.x, -maxOffset.x),
		    dy = this._rebound(minOffset.y, -maxOffset.y);

		return new Point(dx, dy);
	},

	_rebound: function (left, right) {
		return left + right > 0 ?
			Math.round(left - right) / 2 :
			Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
	},

	_limitZoom: function (zoom) {
		var min = this.getMinZoom(),
		    max = this.getMaxZoom(),
		    snap = any3d ? this.options.zoomSnap : 1;
		if (snap) {
			zoom = Math.round(zoom / snap) * snap;
		}
		return Math.max(min, Math.min(max, zoom));
	},

	_onPanTransitionStep: function () {
		this.fire('move');
	},

	_onPanTransitionEnd: function () {
		removeClass(this._mapPane, 'leaflet-pan-anim');
		this.fire('moveend');
	},

	_tryAnimatedPan: function (center, options) {
		// difference between the new and current centers in pixels
		var offset = this._getCenterOffset(center)._trunc();

		// don't animate too far unless animate: true specified in options
		if ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }

		this.panBy(offset, options);

		return true;
	},

	_createAnimProxy: function () {

		var proxy = this._proxy = create$1('div', 'leaflet-proxy leaflet-zoom-animated');
		this._panes.mapPane.appendChild(proxy);

		this.on('zoomanim', function (e) {
			var prop = TRANSFORM,
			    transform = this._proxy.style[prop];

			setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));

			// workaround for case when transform is the same and so transitionend event is not fired
			if (transform === this._proxy.style[prop] && this._animatingZoom) {
				this._onZoomTransitionEnd();
			}
		}, this);

		this.on('load moveend', this._animMoveEnd, this);

		this._on('unload', this._destroyAnimProxy, this);
	},

	_destroyAnimProxy: function () {
		remove(this._proxy);
		this.off('load moveend', this._animMoveEnd, this);
		delete this._proxy;
	},

	_animMoveEnd: function () {
		var c = this.getCenter(),
		    z = this.getZoom();
		setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
	},

	_catchTransitionEnd: function (e) {
		if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
			this._onZoomTransitionEnd();
		}
	},

	_nothingToAnimate: function () {
		return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
	},

	_tryAnimatedZoom: function (center, zoom, options) {

		if (this._animatingZoom) { return true; }

		options = options || {};

		// don't animate if disabled, not supported or zoom difference is too large
		if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
		        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }

		// offset is the pixel coords of the zoom origin relative to the current center
		var scale = this.getZoomScale(zoom),
		    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);

		// don't animate if the zoom origin isn't within one screen from the current center, unless forced
		if (options.animate !== true && !this.getSize().contains(offset)) { return false; }

		requestAnimFrame(function () {
			this
			    ._moveStart(true, false)
			    ._animateZoom(center, zoom, true);
		}, this);

		return true;
	},

	_animateZoom: function (center, zoom, startAnim, noUpdate) {
		if (!this._mapPane) { return; }

		if (startAnim) {
			this._animatingZoom = true;

			// remember what center/zoom to set after animation
			this._animateToCenter = center;
			this._animateToZoom = zoom;

			addClass(this._mapPane, 'leaflet-zoom-anim');
		}

		// @section Other Events
		// @event zoomanim: ZoomAnimEvent
		// Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.
		this.fire('zoomanim', {
			center: center,
			zoom: zoom,
			noUpdate: noUpdate
		});

		// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
		setTimeout(bind(this._onZoomTransitionEnd, this), 250);
	},

	_onZoomTransitionEnd: function () {
		if (!this._animatingZoom) { return; }

		if (this._mapPane) {
			removeClass(this._mapPane, 'leaflet-zoom-anim');
		}

		this._animatingZoom = false;

		this._move(this._animateToCenter, this._animateToZoom);

		// This anim frame should prevent an obscure iOS webkit tile loading race condition.
		requestAnimFrame(function () {
			this._moveEnd(true);
		}, this);
	}
});

// @section

// @factory L.map(id: String, options?: Map options)
// Instantiates a map object given the DOM ID of a `<div>` element
// and optionally an object literal with `Map options`.
//
// @alternative
// @factory L.map(el: HTMLElement, options?: Map options)
// Instantiates a map object given an instance of a `<div>` HTML element
// and optionally an object literal with `Map options`.
function createMap(id, options) {
	return new Map(id, options);
}

/*
 * @class Control
 * @aka L.Control
 * @inherits Class
 *
 * L.Control is a base class for implementing map controls. Handles positioning.
 * All other controls extend from this class.
 */

var Control = Class.extend({
	// @section
	// @aka Control options
	options: {
		// @option position: String = 'topright'
		// The position of the control (one of the map corners). Possible values are `'topleft'`,
		// `'topright'`, `'bottomleft'` or `'bottomright'`
		position: 'topright'
	},

	initialize: function (options) {
		setOptions(this, options);
	},

	/* @section
	 * Classes extending L.Control will inherit the following methods:
	 *
	 * @method getPosition: string
	 * Returns the position of the control.
	 */
	getPosition: function () {
		return this.options.position;
	},

	// @method setPosition(position: string): this
	// Sets the position of the control.
	setPosition: function (position) {
		var map = this._map;

		if (map) {
			map.removeControl(this);
		}

		this.options.position = position;

		if (map) {
			map.addControl(this);
		}

		return this;
	},

	// @method getContainer: HTMLElement
	// Returns the HTMLElement that contains the control.
	getContainer: function () {
		return this._container;
	},

	// @method addTo(map: Map): this
	// Adds the control to the given map.
	addTo: function (map) {
		this.remove();
		this._map = map;

		var container = this._container = this.onAdd(map),
		    pos = this.getPosition(),
		    corner = map._controlCorners[pos];

		addClass(container, 'leaflet-control');

		if (pos.indexOf('bottom') !== -1) {
			corner.insertBefore(container, corner.firstChild);
		} else {
			corner.appendChild(container);
		}

		this._map.on('unload', this.remove, this);

		return this;
	},

	// @method remove: this
	// Removes the control from the map it is currently active on.
	remove: function () {
		if (!this._map) {
			return this;
		}

		remove(this._container);

		if (this.onRemove) {
			this.onRemove(this._map);
		}

		this._map.off('unload', this.remove, this);
		this._map = null;

		return this;
	},

	_refocusOnMap: function (e) {
		// if map exists and event is not a keyboard event
		if (this._map && e && e.screenX > 0 && e.screenY > 0) {
			this._map.getContainer().focus();
		}
	}
});

var control = function (options) {
	return new Control(options);
};

/* @section Extension methods
 * @uninheritable
 *
 * Every control should extend from `L.Control` and (re-)implement the following methods.
 *
 * @method onAdd(map: Map): HTMLElement
 * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
 *
 * @method onRemove(map: Map)
 * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
 */

/* @namespace Map
 * @section Methods for Layers and Controls
 */
Map.include({
	// @method addControl(control: Control): this
	// Adds the given control to the map
	addControl: function (control) {
		control.addTo(this);
		return this;
	},

	// @method removeControl(control: Control): this
	// Removes the given control from the map
	removeControl: function (control) {
		control.remove();
		return this;
	},

	_initControlPos: function () {
		var corners = this._controlCorners = {},
		    l = 'leaflet-',
		    container = this._controlContainer =
		            create$1('div', l + 'control-container', this._container);

		function createCorner(vSide, hSide) {
			var className = l + vSide + ' ' + l + hSide;

			corners[vSide + hSide] = create$1('div', className, container);
		}

		createCorner('top', 'left');
		createCorner('top', 'right');
		createCorner('bottom', 'left');
		createCorner('bottom', 'right');
	},

	_clearControlPos: function () {
		for (var i in this._controlCorners) {
			remove(this._controlCorners[i]);
		}
		remove(this._controlContainer);
		delete this._controlCorners;
		delete this._controlContainer;
	}
});

/*
 * @class Control.Layers
 * @aka L.Control.Layers
 * @inherits Control
 *
 * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](http://leafletjs.com/examples/layers-control/)). Extends `Control`.
 *
 * @example
 *
 * ```js
 * var baseLayers = {
 * 	"Mapbox": mapbox,
 * 	"OpenStreetMap": osm
 * };
 *
 * var overlays = {
 * 	"Marker": marker,
 * 	"Roads": roadsLayer
 * };
 *
 * L.control.layers(baseLayers, overlays).addTo(map);
 * ```
 *
 * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
 *
 * ```js
 * {
 *     "<someName1>": layer1,
 *     "<someName2>": layer2
 * }
 * ```
 *
 * The layer names can contain HTML, which allows you to add additional styling to the items:
 *
 * ```js
 * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
 * ```
 */

var Layers = Control.extend({
	// @section
	// @aka Control.Layers options
	options: {
		// @option collapsed: Boolean = true
		// If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.
		collapsed: true,
		position: 'topright',

		// @option autoZIndex: Boolean = true
		// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
		autoZIndex: true,

		// @option hideSingleBase: Boolean = false
		// If `true`, the base layers in the control will be hidden when there is only one.
		hideSingleBase: false,

		// @option sortLayers: Boolean = false
		// Whether to sort the layers. When `false`, layers will keep the order
		// in which they were added to the control.
		sortLayers: false,

		// @option sortFunction: Function = *
		// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
		// that will be used for sorting the layers, when `sortLayers` is `true`.
		// The function receives both the `L.Layer` instances and their names, as in
		// `sortFunction(layerA, layerB, nameA, nameB)`.
		// By default, it sorts layers alphabetically by their name.
		sortFunction: function (layerA, layerB, nameA, nameB) {
			return nameA < nameB ? -1 : (nameB < nameA ? 1 : 0);
		}
	},

	initialize: function (baseLayers, overlays, options) {
		setOptions(this, options);

		this._layerControlInputs = [];
		this._layers = [];
		this._lastZIndex = 0;
		this._handlingClick = false;

		for (var i in baseLayers) {
			this._addLayer(baseLayers[i], i);
		}

		for (i in overlays) {
			this._addLayer(overlays[i], i, true);
		}
	},

	onAdd: function (map) {
		this._initLayout();
		this._update();

		this._map = map;
		map.on('zoomend', this._checkDisabledLayers, this);

		for (var i = 0; i < this._layers.length; i++) {
			this._layers[i].layer.on('add remove', this._onLayerChange, this);
		}

		return this._container;
	},

	addTo: function (map) {
		Control.prototype.addTo.call(this, map);
		// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
		return this._expandIfNotCollapsed();
	},

	onRemove: function () {
		this._map.off('zoomend', this._checkDisabledLayers, this);

		for (var i = 0; i < this._layers.length; i++) {
			this._layers[i].layer.off('add remove', this._onLayerChange, this);
		}
	},

	// @method addBaseLayer(layer: Layer, name: String): this
	// Adds a base layer (radio button entry) with the given name to the control.
	addBaseLayer: function (layer, name) {
		this._addLayer(layer, name);
		return (this._map) ? this._update() : this;
	},

	// @method addOverlay(layer: Layer, name: String): this
	// Adds an overlay (checkbox entry) with the given name to the control.
	addOverlay: function (layer, name) {
		this._addLayer(layer, name, true);
		return (this._map) ? this._update() : this;
	},

	// @method removeLayer(layer: Layer): this
	// Remove the given layer from the control.
	removeLayer: function (layer) {
		layer.off('add remove', this._onLayerChange, this);

		var obj = this._getLayer(stamp(layer));
		if (obj) {
			this._layers.splice(this._layers.indexOf(obj), 1);
		}
		return (this._map) ? this._update() : this;
	},

	// @method expand(): this
	// Expand the control container if collapsed.
	expand: function () {
		addClass(this._container, 'leaflet-control-layers-expanded');
		this._section.style.height = null;
		var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
		if (acceptableHeight < this._section.clientHeight) {
			addClass(this._section, 'leaflet-control-layers-scrollbar');
			this._section.style.height = acceptableHeight + 'px';
		} else {
			removeClass(this._section, 'leaflet-control-layers-scrollbar');
		}
		this._checkDisabledLayers();
		return this;
	},

	// @method collapse(): this
	// Collapse the control container if expanded.
	collapse: function () {
		removeClass(this._container, 'leaflet-control-layers-expanded');
		return this;
	},

	_initLayout: function () {
		var className = 'leaflet-control-layers',
		    container = this._container = create$1('div', className),
		    collapsed = this.options.collapsed;

		// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
		container.setAttribute('aria-haspopup', true);

		disableClickPropagation(container);
		disableScrollPropagation(container);

		var section = this._section = create$1('section', className + '-list');

		if (collapsed) {
			this._map.on('click', this.collapse, this);

			if (!android) {
				on(container, {
					mouseenter: this.expand,
					mouseleave: this.collapse
				}, this);
			}
		}

		var link = this._layersLink = create$1('a', className + '-toggle', container);
		link.href = '#';
		link.title = 'Layers';

		if (touch) {
			on(link, 'click', stop);
			on(link, 'click', this.expand, this);
		} else {
			on(link, 'focus', this.expand, this);
		}

		if (!collapsed) {
			this.expand();
		}

		this._baseLayersList = create$1('div', className + '-base', section);
		this._separator = create$1('div', className + '-separator', section);
		this._overlaysList = create$1('div', className + '-overlays', section);

		container.appendChild(section);
	},

	_getLayer: function (id) {
		for (var i = 0; i < this._layers.length; i++) {

			if (this._layers[i] && stamp(this._layers[i].layer) === id) {
				return this._layers[i];
			}
		}
	},

	_addLayer: function (layer, name, overlay) {
		if (this._map) {
			layer.on('add remove', this._onLayerChange, this);
		}

		this._layers.push({
			layer: layer,
			name: name,
			overlay: overlay
		});

		if (this.options.sortLayers) {
			this._layers.sort(bind(function (a, b) {
				return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
			}, this));
		}

		if (this.options.autoZIndex && layer.setZIndex) {
			this._lastZIndex++;
			layer.setZIndex(this._lastZIndex);
		}

		this._expandIfNotCollapsed();
	},

	_update: function () {
		if (!this._container) { return this; }

		empty(this._baseLayersList);
		empty(this._overlaysList);

		this._layerControlInputs = [];
		var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;

		for (i = 0; i < this._layers.length; i++) {
			obj = this._layers[i];
			this._addItem(obj);
			overlaysPresent = overlaysPresent || obj.overlay;
			baseLayersPresent = baseLayersPresent || !obj.overlay;
			baseLayersCount += !obj.overlay ? 1 : 0;
		}

		// Hide base layers section if there's only one layer.
		if (this.options.hideSingleBase) {
			baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
			this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
		}

		this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';

		return this;
	},

	_onLayerChange: function (e) {
		if (!this._handlingClick) {
			this._update();
		}

		var obj = this._getLayer(stamp(e.target));

		// @namespace Map
		// @section Layer events
		// @event baselayerchange: LayersControlEvent
		// Fired when the base layer is changed through the [layer control](#control-layers).
		// @event overlayadd: LayersControlEvent
		// Fired when an overlay is selected through the [layer control](#control-layers).
		// @event overlayremove: LayersControlEvent
		// Fired when an overlay is deselected through the [layer control](#control-layers).
		// @namespace Control.Layers
		var type = obj.overlay ?
			(e.type === 'add' ? 'overlayadd' : 'overlayremove') :
			(e.type === 'add' ? 'baselayerchange' : null);

		if (type) {
			this._map.fire(type, obj);
		}
	},

	// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
	_createRadioElement: function (name, checked) {

		var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' +
				name + '"' + (checked ? ' checked="checked"' : '') + '/>';

		var radioFragment = document.createElement('div');
		radioFragment.innerHTML = radioHtml;

		return radioFragment.firstChild;
	},

	_addItem: function (obj) {
		var label = document.createElement('label'),
		    checked = this._map.hasLayer(obj.layer),
		    input;

		if (obj.overlay) {
			input = document.createElement('input');
			input.type = 'checkbox';
			input.className = 'leaflet-control-layers-selector';
			input.defaultChecked = checked;
		} else {
			input = this._createRadioElement('leaflet-base-layers_' + stamp(this), checked);
		}

		this._layerControlInputs.push(input);
		input.layerId = stamp(obj.layer);

		on(input, 'click', this._onInputClick, this);

		var name = document.createElement('span');
		name.innerHTML = ' ' + obj.name;

		// Helps from preventing layer control flicker when checkboxes are disabled
		// https://github.com/Leaflet/Leaflet/issues/2771
		var holder = document.createElement('div');

		label.appendChild(holder);
		holder.appendChild(input);
		holder.appendChild(name);

		var container = obj.overlay ? this._overlaysList : this._baseLayersList;
		container.appendChild(label);

		this._checkDisabledLayers();
		return label;
	},

	_onInputClick: function () {
		var inputs = this._layerControlInputs,
		    input, layer;
		var addedLayers = [],
		    removedLayers = [];

		this._handlingClick = true;

		for (var i = inputs.length - 1; i >= 0; i--) {
			input = inputs[i];
			layer = this._getLayer(input.layerId).layer;

			if (input.checked) {
				addedLayers.push(layer);
			} else if (!input.checked) {
				removedLayers.push(layer);
			}
		}

		// Bugfix issue 2318: Should remove all old layers before readding new ones
		for (i = 0; i < removedLayers.length; i++) {
			if (this._map.hasLayer(removedLayers[i])) {
				this._map.removeLayer(removedLayers[i]);
			}
		}
		for (i = 0; i < addedLayers.length; i++) {
			if (!this._map.hasLayer(addedLayers[i])) {
				this._map.addLayer(addedLayers[i]);
			}
		}

		this._handlingClick = false;

		this._refocusOnMap();
	},

	_checkDisabledLayers: function () {
		var inputs = this._layerControlInputs,
		    input,
		    layer,
		    zoom = this._map.getZoom();

		for (var i = inputs.length - 1; i >= 0; i--) {
			input = inputs[i];
			layer = this._getLayer(input.layerId).layer;
			input.disabled = (layer.options.minZoom !== undefined && zoom < layer.options.minZoom) ||
			                 (layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom);

		}
	},

	_expandIfNotCollapsed: function () {
		if (this._map && !this.options.collapsed) {
			this.expand();
		}
		return this;
	},

	_expand: function () {
		// Backward compatibility, remove me in 1.1.
		return this.expand();
	},

	_collapse: function () {
		// Backward compatibility, remove me in 1.1.
		return this.collapse();
	}

});


// @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
// Creates a layers control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.
var layers = function (baseLayers, overlays, options) {
	return new Layers(baseLayers, overlays, options);
};

/*
 * @class Control.Zoom
 * @aka L.Control.Zoom
 * @inherits Control
 *
 * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.
 */

var Zoom = Control.extend({
	// @section
	// @aka Control.Zoom options
	options: {
		position: 'topleft',

		// @option zoomInText: String = '+'
		// The text set on the 'zoom in' button.
		zoomInText: '+',

		// @option zoomInTitle: String = 'Zoom in'
		// The title set on the 'zoom in' button.
		zoomInTitle: 'Zoom in',

		// @option zoomOutText: String = '&#x2212;'
		// The text set on the 'zoom out' button.
		zoomOutText: '&#x2212;',

		// @option zoomOutTitle: String = 'Zoom out'
		// The title set on the 'zoom out' button.
		zoomOutTitle: 'Zoom out'
	},

	onAdd: function (map) {
		var zoomName = 'leaflet-control-zoom',
		    container = create$1('div', zoomName + ' leaflet-bar'),
		    options = this.options;

		this._zoomInButton  = this._createButton(options.zoomInText, options.zoomInTitle,
		        zoomName + '-in',  container, this._zoomIn);
		this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
		        zoomName + '-out', container, this._zoomOut);

		this._updateDisabled();
		map.on('zoomend zoomlevelschange', this._updateDisabled, this);

		return container;
	},

	onRemove: function (map) {
		map.off('zoomend zoomlevelschange', this._updateDisabled, this);
	},

	disable: function () {
		this._disabled = true;
		this._updateDisabled();
		return this;
	},

	enable: function () {
		this._disabled = false;
		this._updateDisabled();
		return this;
	},

	_zoomIn: function (e) {
		if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
			this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
		}
	},

	_zoomOut: function (e) {
		if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
			this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
		}
	},

	_createButton: function (html, title, className, container, fn) {
		var link = create$1('a', className, container);
		link.innerHTML = html;
		link.href = '#';
		link.title = title;

		/*
		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
		 */
		link.setAttribute('role', 'button');
		link.setAttribute('aria-label', title);

		disableClickPropagation(link);
		on(link, 'click', stop);
		on(link, 'click', fn, this);
		on(link, 'click', this._refocusOnMap, this);

		return link;
	},

	_updateDisabled: function () {
		var map = this._map,
		    className = 'leaflet-disabled';

		removeClass(this._zoomInButton, className);
		removeClass(this._zoomOutButton, className);

		if (this._disabled || map._zoom === map.getMinZoom()) {
			addClass(this._zoomOutButton, className);
		}
		if (this._disabled || map._zoom === map.getMaxZoom()) {
			addClass(this._zoomInButton, className);
		}
	}
});

// @namespace Map
// @section Control options
// @option zoomControl: Boolean = true
// Whether a [zoom control](#control-zoom) is added to the map by default.
Map.mergeOptions({
	zoomControl: true
});

Map.addInitHook(function () {
	if (this.options.zoomControl) {
		// @section Controls
		// @property zoomControl: Control.Zoom
		// The default zoom control (only available if the
		// [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
		this.zoomControl = new Zoom();
		this.addControl(this.zoomControl);
	}
});

// @namespace Control.Zoom
// @factory L.control.zoom(options: Control.Zoom options)
// Creates a zoom control
var zoom = function (options) {
	return new Zoom(options);
};

/*
 * @class Control.Scale
 * @aka L.Control.Scale
 * @inherits Control
 *
 * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
 *
 * @example
 *
 * ```js
 * L.control.scale().addTo(map);
 * ```
 */

var Scale = Control.extend({
	// @section
	// @aka Control.Scale options
	options: {
		position: 'bottomleft',

		// @option maxWidth: Number = 100
		// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
		maxWidth: 100,

		// @option metric: Boolean = True
		// Whether to show the metric scale line (m/km).
		metric: true,

		// @option imperial: Boolean = True
		// Whether to show the imperial scale line (mi/ft).
		imperial: true

		// @option updateWhenIdle: Boolean = false
		// If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
	},

	onAdd: function (map) {
		var className = 'leaflet-control-scale',
		    container = create$1('div', className),
		    options = this.options;

		this._addScales(options, className + '-line', container);

		map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
		map.whenReady(this._update, this);

		return container;
	},

	onRemove: function (map) {
		map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
	},

	_addScales: function (options, className, container) {
		if (options.metric) {
			this._mScale = create$1('div', className, container);
		}
		if (options.imperial) {
			this._iScale = create$1('div', className, container);
		}
	},

	_update: function () {
		var map = this._map,
		    y = map.getSize().y / 2;

		var maxMeters = map.distance(
			map.containerPointToLatLng([0, y]),
			map.containerPointToLatLng([this.options.maxWidth, y]));

		this._updateScales(maxMeters);
	},

	_updateScales: function (maxMeters) {
		if (this.options.metric && maxMeters) {
			this._updateMetric(maxMeters);
		}
		if (this.options.imperial && maxMeters) {
			this._updateImperial(maxMeters);
		}
	},

	_updateMetric: function (maxMeters) {
		var meters = this._getRoundNum(maxMeters),
		    label = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';

		this._updateScale(this._mScale, label, meters / maxMeters);
	},

	_updateImperial: function (maxMeters) {
		var maxFeet = maxMeters * 3.2808399,
		    maxMiles, miles, feet;

		if (maxFeet > 5280) {
			maxMiles = maxFeet / 5280;
			miles = this._getRoundNum(maxMiles);
			this._updateScale(this._iScale, miles + ' mi', miles / maxMiles);

		} else {
			feet = this._getRoundNum(maxFeet);
			this._updateScale(this._iScale, feet + ' ft', feet / maxFeet);
		}
	},

	_updateScale: function (scale, text, ratio) {
		scale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';
		scale.innerHTML = text;
	},

	_getRoundNum: function (num) {
		var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
		    d = num / pow10;

		d = d >= 10 ? 10 :
		    d >= 5 ? 5 :
		    d >= 3 ? 3 :
		    d >= 2 ? 2 : 1;

		return pow10 * d;
	}
});


// @factory L.control.scale(options?: Control.Scale options)
// Creates an scale control with the given options.
var scale = function (options) {
	return new Scale(options);
};

/*
 * @class Control.Attribution
 * @aka L.Control.Attribution
 * @inherits Control
 *
 * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.
 */

var Attribution = Control.extend({
	// @section
	// @aka Control.Attribution options
	options: {
		position: 'bottomright',

		// @option prefix: String = 'Leaflet'
		// The HTML text shown before the attributions. Pass `false` to disable.
		prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
	},

	initialize: function (options) {
		setOptions(this, options);

		this._attributions = {};
	},

	onAdd: function (map) {
		map.attributionControl = this;
		this._container = create$1('div', 'leaflet-control-attribution');
		disableClickPropagation(this._container);

		// TODO ugly, refactor
		for (var i in map._layers) {
			if (map._layers[i].getAttribution) {
				this.addAttribution(map._layers[i].getAttribution());
			}
		}

		this._update();

		return this._container;
	},

	// @method setPrefix(prefix: String): this
	// Sets the text before the attributions.
	setPrefix: function (prefix) {
		this.options.prefix = prefix;
		this._update();
		return this;
	},

	// @method addAttribution(text: String): this
	// Adds an attribution text (e.g. `'Vector data &copy; Mapbox'`).
	addAttribution: function (text) {
		if (!text) { return this; }

		if (!this._attributions[text]) {
			this._attributions[text] = 0;
		}
		this._attributions[text]++;

		this._update();

		return this;
	},

	// @method removeAttribution(text: String): this
	// Removes an attribution text.
	removeAttribution: function (text) {
		if (!text) { return this; }

		if (this._attributions[text]) {
			this._attributions[text]--;
			this._update();
		}

		return this;
	},

	_update: function () {
		if (!this._map) { return; }

		var attribs = [];

		for (var i in this._attributions) {
			if (this._attributions[i]) {
				attribs.push(i);
			}
		}

		var prefixAndAttribs = [];

		if (this.options.prefix) {
			prefixAndAttribs.push(this.options.prefix);
		}
		if (attribs.length) {
			prefixAndAttribs.push(attribs.join(', '));
		}

		this._container.innerHTML = prefixAndAttribs.join(' | ');
	}
});

// @namespace Map
// @section Control options
// @option attributionControl: Boolean = true
// Whether a [attribution control](#control-attribution) is added to the map by default.
Map.mergeOptions({
	attributionControl: true
});

Map.addInitHook(function () {
	if (this.options.attributionControl) {
		new Attribution().addTo(this);
	}
});

// @namespace Control.Attribution
// @factory L.control.attribution(options: Control.Attribution options)
// Creates an attribution control.
var attribution = function (options) {
	return new Attribution(options);
};

Control.Layers = Layers;
Control.Zoom = Zoom;
Control.Scale = Scale;
Control.Attribution = Attribution;

control.layers = layers;
control.zoom = zoom;
control.scale = scale;
control.attribution = attribution;

/*
	L.Handler is a base class for handler classes that are used internally to inject
	interaction features like dragging to classes like Map and Marker.
*/

// @class Handler
// @aka L.Handler
// Abstract class for map interaction handlers

var Handler = Class.extend({
	initialize: function (map) {
		this._map = map;
	},

	// @method enable(): this
	// Enables the handler
	enable: function () {
		if (this._enabled) { return this; }

		this._enabled = true;
		this.addHooks();
		return this;
	},

	// @method disable(): this
	// Disables the handler
	disable: function () {
		if (!this._enabled) { return this; }

		this._enabled = false;
		this.removeHooks();
		return this;
	},

	// @method enabled(): Boolean
	// Returns `true` if the handler is enabled
	enabled: function () {
		return !!this._enabled;
	}

	// @section Extension methods
	// Classes inheriting from `Handler` must implement the two following methods:
	// @method addHooks()
	// Called when the handler is enabled, should add event hooks.
	// @method removeHooks()
	// Called when the handler is disabled, should remove the event hooks added previously.
});

// @section There is static function which can be called without instantiating L.Handler:
// @function addTo(map: Map, name: String): this
// Adds a new Handler to the given map with the given name.
Handler.addTo = function (map, name) {
	map.addHandler(name, this);
	return this;
};

var Mixin = {Events: Events};

/*
 * @class Draggable
 * @aka L.Draggable
 * @inherits Evented
 *
 * A class for making DOM elements draggable (including touch support).
 * Used internally for map and marker dragging. Only works for elements
 * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
 *
 * @example
 * ```js
 * var draggable = new L.Draggable(elementToDrag);
 * draggable.enable();
 * ```
 */

var START = touch ? 'touchstart mousedown' : 'mousedown';
var END = {
	mousedown: 'mouseup',
	touchstart: 'touchend',
	pointerdown: 'touchend',
	MSPointerDown: 'touchend'
};
var MOVE = {
	mousedown: 'mousemove',
	touchstart: 'touchmove',
	pointerdown: 'touchmove',
	MSPointerDown: 'touchmove'
};


var Draggable = Evented.extend({

	options: {
		// @section
		// @aka Draggable options
		// @option clickTolerance: Number = 3
		// The max number of pixels a user can shift the mouse pointer during a click
		// for it to be considered a valid click (as opposed to a mouse drag).
		clickTolerance: 3
	},

	// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
	// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
	initialize: function (element, dragStartTarget, preventOutline$$1, options) {
		setOptions(this, options);

		this._element = element;
		this._dragStartTarget = dragStartTarget || element;
		this._preventOutline = preventOutline$$1;
	},

	// @method enable()
	// Enables the dragging ability
	enable: function () {
		if (this._enabled) { return; }

		on(this._dragStartTarget, START, this._onDown, this);

		this._enabled = true;
	},

	// @method disable()
	// Disables the dragging ability
	disable: function () {
		if (!this._enabled) { return; }

		// If we're currently dragging this draggable,
		// disabling it counts as first ending the drag.
		if (Draggable._dragging === this) {
			this.finishDrag();
		}

		off(this._dragStartTarget, START, this._onDown, this);

		this._enabled = false;
		this._moved = false;
	},

	_onDown: function (e) {
		// Ignore simulated events, since we handle both touch and
		// mouse explicitly; otherwise we risk getting duplicates of
		// touch events, see #4315.
		// Also ignore the event if disabled; this happens in IE11
		// under some circumstances, see #3666.
		if (e._simulated || !this._enabled) { return; }

		this._moved = false;

		if (hasClass(this._element, 'leaflet-zoom-anim')) { return; }

		if (Draggable._dragging || e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) { return; }
		Draggable._dragging = this;  // Prevent dragging multiple objects at once.

		if (this._preventOutline) {
			preventOutline(this._element);
		}

		disableImageDrag();
		disableTextSelection();

		if (this._moving) { return; }

		// @event down: Event
		// Fired when a drag is about to start.
		this.fire('down');

		var first = e.touches ? e.touches[0] : e,
		    sizedParent = getSizedParentNode(this._element);

		this._startPoint = new Point(first.clientX, first.clientY);

		// Cache the scale, so that we can continuously compensate for it during drag (_onMove).
		this._parentScale = getScale(sizedParent);

		on(document, MOVE[e.type], this._onMove, this);
		on(document, END[e.type], this._onUp, this);
	},

	_onMove: function (e) {
		// Ignore simulated events, since we handle both touch and
		// mouse explicitly; otherwise we risk getting duplicates of
		// touch events, see #4315.
		// Also ignore the event if disabled; this happens in IE11
		// under some circumstances, see #3666.
		if (e._simulated || !this._enabled) { return; }

		if (e.touches && e.touches.length > 1) {
			this._moved = true;
			return;
		}

		var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
		    offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);

		if (!offset.x && !offset.y) { return; }
		if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) { return; }

		// We assume that the parent container's position, border and scale do not change for the duration of the drag.
		// Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
		// and we can use the cached value for the scale.
		offset.x /= this._parentScale.x;
		offset.y /= this._parentScale.y;

		preventDefault(e);

		if (!this._moved) {
			// @event dragstart: Event
			// Fired when a drag starts
			this.fire('dragstart');

			this._moved = true;
			this._startPos = getPosition(this._element).subtract(offset);

			addClass(document.body, 'leaflet-dragging');

			this._lastTarget = e.target || e.srcElement;
			// IE and Edge do not give the <use> element, so fetch it
			// if necessary
			if ((window.SVGElementInstance) && (this._lastTarget instanceof SVGElementInstance)) {
				this._lastTarget = this._lastTarget.correspondingUseElement;
			}
			addClass(this._lastTarget, 'leaflet-drag-target');
		}

		this._newPos = this._startPos.add(offset);
		this._moving = true;

		cancelAnimFrame(this._animRequest);
		this._lastEvent = e;
		this._animRequest = requestAnimFrame(this._updatePosition, this, true);
	},

	_updatePosition: function () {
		var e = {originalEvent: this._lastEvent};

		// @event predrag: Event
		// Fired continuously during dragging *before* each corresponding
		// update of the element's position.
		this.fire('predrag', e);
		setPosition(this._element, this._newPos);

		// @event drag: Event
		// Fired continuously during dragging.
		this.fire('drag', e);
	},

	_onUp: function (e) {
		// Ignore simulated events, since we handle both touch and
		// mouse explicitly; otherwise we risk getting duplicates of
		// touch events, see #4315.
		// Also ignore the event if disabled; this happens in IE11
		// under some circumstances, see #3666.
		if (e._simulated || !this._enabled) { return; }
		this.finishDrag();
	},

	finishDrag: function () {
		removeClass(document.body, 'leaflet-dragging');

		if (this._lastTarget) {
			removeClass(this._lastTarget, 'leaflet-drag-target');
			this._lastTarget = null;
		}

		for (var i in MOVE) {
			off(document, MOVE[i], this._onMove, this);
			off(document, END[i], this._onUp, this);
		}

		enableImageDrag();
		enableTextSelection();

		if (this._moved && this._moving) {
			// ensure drag is not fired after dragend
			cancelAnimFrame(this._animRequest);

			// @event dragend: DragEndEvent
			// Fired when the drag ends.
			this.fire('dragend', {
				distance: this._newPos.distanceTo(this._startPos)
			});
		}

		this._moving = false;
		Draggable._dragging = false;
	}

});

/*
 * @namespace LineUtil
 *
 * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
 */

// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
// Improves rendering performance dramatically by lessening the number of points to draw.

// @function simplify(points: Point[], tolerance: Number): Point[]
// Dramatically reduces the number of points in a polyline while retaining
// its shape and returns a new array of simplified points, using the
// [Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm).
// Used for a huge performance boost when processing/displaying Leaflet polylines for
// each zoom level and also reducing visual noise. tolerance affects the amount of
// simplification (lesser value means higher quality but slower and with more points).
// Also released as a separated micro-library [Simplify.js](http://mourner.github.com/simplify-js/).
function simplify(points, tolerance) {
	if (!tolerance || !points.length) {
		return points.slice();
	}

	var sqTolerance = tolerance * tolerance;

	    // stage 1: vertex reduction
	    points = _reducePoints(points, sqTolerance);

	    // stage 2: Douglas-Peucker simplification
	    points = _simplifyDP(points, sqTolerance);

	return points;
}

// @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
// Returns the distance between point `p` and segment `p1` to `p2`.
function pointToSegmentDistance(p, p1, p2) {
	return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
}

// @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
// Returns the closest point from a point `p` on a segment `p1` to `p2`.
function closestPointOnSegment(p, p1, p2) {
	return _sqClosestPointOnSegment(p, p1, p2);
}

// Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
function _simplifyDP(points, sqTolerance) {

	var len = points.length,
	    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
	    markers = new ArrayConstructor(len);

	    markers[0] = markers[len - 1] = 1;

	_simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

	var i,
	    newPoints = [];

	for (i = 0; i < len; i++) {
		if (markers[i]) {
			newPoints.push(points[i]);
		}
	}

	return newPoints;
}

function _simplifyDPStep(points, markers, sqTolerance, first, last) {

	var maxSqDist = 0,
	index, i, sqDist;

	for (i = first + 1; i <= last - 1; i++) {
		sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);

		if (sqDist > maxSqDist) {
			index = i;
			maxSqDist = sqDist;
		}
	}

	if (maxSqDist > sqTolerance) {
		markers[index] = 1;

		_simplifyDPStep(points, markers, sqTolerance, first, index);
		_simplifyDPStep(points, markers, sqTolerance, index, last);
	}
}

// reduce points that are too close to each other to a single point
function _reducePoints(points, sqTolerance) {
	var reducedPoints = [points[0]];

	for (var i = 1, prev = 0, len = points.length; i < len; i++) {
		if (_sqDist(points[i], points[prev]) > sqTolerance) {
			reducedPoints.push(points[i]);
			prev = i;
		}
	}
	if (prev < len - 1) {
		reducedPoints.push(points[len - 1]);
	}
	return reducedPoints;
}

var _lastCode;

// @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
// Clips the segment a to b by rectangular bounds with the
// [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
// (modifying the segment points directly!). Used by Leaflet to only show polyline
// points that are on the screen or near, increasing performance.
function clipSegment(a, b, bounds, useLastCode, round) {
	var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds),
	    codeB = _getBitCode(b, bounds),

	    codeOut, p, newCode;

	    // save 2nd code to avoid calculating it on the next segment
	    _lastCode = codeB;

	while (true) {
		// if a,b is inside the clip window (trivial accept)
		if (!(codeA | codeB)) {
			return [a, b];
		}

		// if a,b is outside the clip window (trivial reject)
		if (codeA & codeB) {
			return false;
		}

		// other cases
		codeOut = codeA || codeB;
		p = _getEdgeIntersection(a, b, codeOut, bounds, round);
		newCode = _getBitCode(p, bounds);

		if (codeOut === codeA) {
			a = p;
			codeA = newCode;
		} else {
			b = p;
			codeB = newCode;
		}
	}
}

function _getEdgeIntersection(a, b, code, bounds, round) {
	var dx = b.x - a.x,
	    dy = b.y - a.y,
	    min = bounds.min,
	    max = bounds.max,
	    x, y;

	if (code & 8) { // top
		x = a.x + dx * (max.y - a.y) / dy;
		y = max.y;

	} else if (code & 4) { // bottom
		x = a.x + dx * (min.y - a.y) / dy;
		y = min.y;

	} else if (code & 2) { // right
		x = max.x;
		y = a.y + dy * (max.x - a.x) / dx;

	} else if (code & 1) { // left
		x = min.x;
		y = a.y + dy * (min.x - a.x) / dx;
	}

	return new Point(x, y, round);
}

function _getBitCode(p, bounds) {
	var code = 0;

	if (p.x < bounds.min.x) { // left
		code |= 1;
	} else if (p.x > bounds.max.x) { // right
		code |= 2;
	}

	if (p.y < bounds.min.y) { // bottom
		code |= 4;
	} else if (p.y > bounds.max.y) { // top
		code |= 8;
	}

	return code;
}

// square distance (to avoid unnecessary Math.sqrt calls)
function _sqDist(p1, p2) {
	var dx = p2.x - p1.x,
	    dy = p2.y - p1.y;
	return dx * dx + dy * dy;
}

// return closest point on segment or distance to that point
function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
	var x = p1.x,
	    y = p1.y,
	    dx = p2.x - x,
	    dy = p2.y - y,
	    dot = dx * dx + dy * dy,
	    t;

	if (dot > 0) {
		t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

		if (t > 1) {
			x = p2.x;
			y = p2.y;
		} else if (t > 0) {
			x += dx * t;
			y += dy * t;
		}
	}

	dx = p.x - x;
	dy = p.y - y;

	return sqDist ? dx * dx + dy * dy : new Point(x, y);
}


// @function isFlat(latlngs: LatLng[]): Boolean
// Returns true if `latlngs` is a flat array, false is nested.
function isFlat(latlngs) {
	return !isArray(latlngs[0]) || (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');
}

function _flat(latlngs) {
	console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.');
	return isFlat(latlngs);
}


var LineUtil = (Object.freeze || Object)({
	simplify: simplify,
	pointToSegmentDistance: pointToSegmentDistance,
	closestPointOnSegment: closestPointOnSegment,
	clipSegment: clipSegment,
	_getEdgeIntersection: _getEdgeIntersection,
	_getBitCode: _getBitCode,
	_sqClosestPointOnSegment: _sqClosestPointOnSegment,
	isFlat: isFlat,
	_flat: _flat
});

/*
 * @namespace PolyUtil
 * Various utility functions for polygon geometries.
 */

/* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
 * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
 * Used by Leaflet to only show polygon points that are on the screen or near, increasing
 * performance. Note that polygon points needs different algorithm for clipping
 * than polyline, so there's a separate method for it.
 */
function clipPolygon(points, bounds, round) {
	var clippedPoints,
	    edges = [1, 4, 2, 8],
	    i, j, k,
	    a, b,
	    len, edge, p;

	for (i = 0, len = points.length; i < len; i++) {
		points[i]._code = _getBitCode(points[i], bounds);
	}

	// for each edge (left, bottom, right, top)
	for (k = 0; k < 4; k++) {
		edge = edges[k];
		clippedPoints = [];

		for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
			a = points[i];
			b = points[j];

			// if a is inside the clip window
			if (!(a._code & edge)) {
				// if b is outside the clip window (a->b goes out of screen)
				if (b._code & edge) {
					p = _getEdgeIntersection(b, a, edge, bounds, round);
					p._code = _getBitCode(p, bounds);
					clippedPoints.push(p);
				}
				clippedPoints.push(a);

			// else if b is inside the clip window (a->b enters the screen)
			} else if (!(b._code & edge)) {
				p = _getEdgeIntersection(b, a, edge, bounds, round);
				p._code = _getBitCode(p, bounds);
				clippedPoints.push(p);
			}
		}
		points = clippedPoints;
	}

	return points;
}


var PolyUtil = (Object.freeze || Object)({
	clipPolygon: clipPolygon
});

/*
 * @namespace Projection
 * @section
 * Leaflet comes with a set of already defined Projections out of the box:
 *
 * @projection L.Projection.LonLat
 *
 * Equirectangular, or Plate Carree projection — the most simple projection,
 * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
 * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
 * `EPSG:4326` and `Simple` CRS.
 */

var LonLat = {
	project: function (latlng) {
		return new Point(latlng.lng, latlng.lat);
	},

	unproject: function (point) {
		return new LatLng(point.y, point.x);
	},

	bounds: new Bounds([-180, -90], [180, 90])
};

/*
 * @namespace Projection
 * @projection L.Projection.Mercator
 *
 * Elliptical Mercator projection — more complex than Spherical Mercator. Assumes that Earth is an ellipsoid. Used by the EPSG:3395 CRS.
 */

var Mercator = {
	R: 6378137,
	R_MINOR: 6356752.314245179,

	bounds: new Bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),

	project: function (latlng) {
		var d = Math.PI / 180,
		    r = this.R,
		    y = latlng.lat * d,
		    tmp = this.R_MINOR / r,
		    e = Math.sqrt(1 - tmp * tmp),
		    con = e * Math.sin(y);

		var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
		y = -r * Math.log(Math.max(ts, 1E-10));

		return new Point(latlng.lng * d * r, y);
	},

	unproject: function (point) {
		var d = 180 / Math.PI,
		    r = this.R,
		    tmp = this.R_MINOR / r,
		    e = Math.sqrt(1 - tmp * tmp),
		    ts = Math.exp(-point.y / r),
		    phi = Math.PI / 2 - 2 * Math.atan(ts);

		for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
			con = e * Math.sin(phi);
			con = Math.pow((1 - con) / (1 + con), e / 2);
			dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
			phi += dphi;
		}

		return new LatLng(phi * d, point.x * d / r);
	}
};

/*
 * @class Projection

 * An object with methods for projecting geographical coordinates of the world onto
 * a flat surface (and back). See [Map projection](http://en.wikipedia.org/wiki/Map_projection).

 * @property bounds: Bounds
 * The bounds (specified in CRS units) where the projection is valid

 * @method project(latlng: LatLng): Point
 * Projects geographical coordinates into a 2D point.
 * Only accepts actual `L.LatLng` instances, not arrays.

 * @method unproject(point: Point): LatLng
 * The inverse of `project`. Projects a 2D point into a geographical location.
 * Only accepts actual `L.Point` instances, not arrays.

 * Note that the projection instances do not inherit from Leafet's `Class` object,
 * and can't be instantiated. Also, new classes can't inherit from them,
 * and methods can't be added to them with the `include` function.

 */




var index = (Object.freeze || Object)({
	LonLat: LonLat,
	Mercator: Mercator,
	SphericalMercator: SphericalMercator
});

/*
 * @namespace CRS
 * @crs L.CRS.EPSG3395
 *
 * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
 */
var EPSG3395 = extend({}, Earth, {
	code: 'EPSG:3395',
	projection: Mercator,

	transformation: (function () {
		var scale = 0.5 / (Math.PI * Mercator.R);
		return toTransformation(scale, 0.5, -scale, 0.5);
	}())
});

/*
 * @namespace CRS
 * @crs L.CRS.EPSG4326
 *
 * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
 *
 * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),
 * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`
 * with this CRS, ensure that there are two 256x256 pixel tiles covering the
 * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),
 * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.
 */

var EPSG4326 = extend({}, Earth, {
	code: 'EPSG:4326',
	projection: LonLat,
	transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
});

/*
 * @namespace CRS
 * @crs L.CRS.Simple
 *
 * A simple CRS that maps longitude and latitude into `x` and `y` directly.
 * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
 * axis should still be inverted (going from bottom to top). `distance()` returns
 * simple euclidean distance.
 */

var Simple = extend({}, CRS, {
	projection: LonLat,
	transformation: toTransformation(1, 0, -1, 0),

	scale: function (zoom) {
		return Math.pow(2, zoom);
	},

	zoom: function (scale) {
		return Math.log(scale) / Math.LN2;
	},

	distance: function (latlng1, latlng2) {
		var dx = latlng2.lng - latlng1.lng,
		    dy = latlng2.lat - latlng1.lat;

		return Math.sqrt(dx * dx + dy * dy);
	},

	infinite: true
});

CRS.Earth = Earth;
CRS.EPSG3395 = EPSG3395;
CRS.EPSG3857 = EPSG3857;
CRS.EPSG900913 = EPSG900913;
CRS.EPSG4326 = EPSG4326;
CRS.Simple = Simple;

/*
 * @class Layer
 * @inherits Evented
 * @aka L.Layer
 * @aka ILayer
 *
 * A set of methods from the Layer base class that all Leaflet layers use.
 * Inherits all methods, options and events from `L.Evented`.
 *
 * @example
 *
 * ```js
 * var layer = L.marker(latlng).addTo(map);
 * layer.addTo(map);
 * layer.remove();
 * ```
 *
 * @event add: Event
 * Fired after the layer is added to a map
 *
 * @event remove: Event
 * Fired after the layer is removed from a map
 */


var Layer = Evented.extend({

	// Classes extending `L.Layer` will inherit the following options:
	options: {
		// @option pane: String = 'overlayPane'
		// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
		pane: 'overlayPane',

		// @option attribution: String = null
		// String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
		attribution: null,

		bubblingMouseEvents: true
	},

	/* @section
	 * Classes extending `L.Layer` will inherit the following methods:
	 *
	 * @method addTo(map: Map|LayerGroup): this
	 * Adds the layer to the given map or layer group.
	 */
	addTo: function (map) {
		map.addLayer(this);
		return this;
	},

	// @method remove: this
	// Removes the layer from the map it is currently active on.
	remove: function () {
		return this.removeFrom(this._map || this._mapToAdd);
	},

	// @method removeFrom(map: Map): this
	// Removes the layer from the given map
	removeFrom: function (obj) {
		if (obj) {
			obj.removeLayer(this);
		}
		return this;
	},

	// @method getPane(name? : String): HTMLElement
	// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
	getPane: function (name) {
		return this._map.getPane(name ? (this.options[name] || name) : this.options.pane);
	},

	addInteractiveTarget: function (targetEl) {
		this._map._targets[stamp(targetEl)] = this;
		return this;
	},

	removeInteractiveTarget: function (targetEl) {
		delete this._map._targets[stamp(targetEl)];
		return this;
	},

	// @method getAttribution: String
	// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
	getAttribution: function () {
		return this.options.attribution;
	},

	_layerAdd: function (e) {
		var map = e.target;

		// check in case layer gets added and then removed before the map is ready
		if (!map.hasLayer(this)) { return; }

		this._map = map;
		this._zoomAnimated = map._zoomAnimated;

		if (this.getEvents) {
			var events = this.getEvents();
			map.on(events, this);
			this.once('remove', function () {
				map.off(events, this);
			}, this);
		}

		this.onAdd(map);

		if (this.getAttribution && map.attributionControl) {
			map.attributionControl.addAttribution(this.getAttribution());
		}

		this.fire('add');
		map.fire('layeradd', {layer: this});
	}
});

/* @section Extension methods
 * @uninheritable
 *
 * Every layer should extend from `L.Layer` and (re-)implement the following methods.
 *
 * @method onAdd(map: Map): this
 * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
 *
 * @method onRemove(map: Map): this
 * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
 *
 * @method getEvents(): Object
 * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
 *
 * @method getAttribution(): String
 * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
 *
 * @method beforeAdd(map: Map): this
 * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
 */


/* @namespace Map
 * @section Layer events
 *
 * @event layeradd: LayerEvent
 * Fired when a new layer is added to the map.
 *
 * @event layerremove: LayerEvent
 * Fired when some layer is removed from the map
 *
 * @section Methods for Layers and Controls
 */
Map.include({
	// @method addLayer(layer: Layer): this
	// Adds the given layer to the map
	addLayer: function (layer) {
		if (!layer._layerAdd) {
			throw new Error('The provided object is not a Layer.');
		}

		var id = stamp(layer);
		if (this._layers[id]) { return this; }
		this._layers[id] = layer;

		layer._mapToAdd = this;

		if (layer.beforeAdd) {
			layer.beforeAdd(this);
		}

		this.whenReady(layer._layerAdd, layer);

		return this;
	},

	// @method removeLayer(layer: Layer): this
	// Removes the given layer from the map.
	removeLayer: function (layer) {
		var id = stamp(layer);

		if (!this._layers[id]) { return this; }

		if (this._loaded) {
			layer.onRemove(this);
		}

		if (layer.getAttribution && this.attributionControl) {
			this.attributionControl.removeAttribution(layer.getAttribution());
		}

		delete this._layers[id];

		if (this._loaded) {
			this.fire('layerremove', {layer: layer});
			layer.fire('remove');
		}

		layer._map = layer._mapToAdd = null;

		return this;
	},

	// @method hasLayer(layer: Layer): Boolean
	// Returns `true` if the given layer is currently added to the map
	hasLayer: function (layer) {
		return !!layer && (stamp(layer) in this._layers);
	},

	/* @method eachLayer(fn: Function, context?: Object): this
	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
	 * ```
	 * map.eachLayer(function(layer){
	 *     layer.bindPopup('Hello');
	 * });
	 * ```
	 */
	eachLayer: function (method, context) {
		for (var i in this._layers) {
			method.call(context, this._layers[i]);
		}
		return this;
	},

	_addLayers: function (layers) {
		layers = layers ? (isArray(layers) ? layers : [layers]) : [];

		for (var i = 0, len = layers.length; i < len; i++) {
			this.addLayer(layers[i]);
		}
	},

	_addZoomLimit: function (layer) {
		if (isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
			this._zoomBoundLayers[stamp(layer)] = layer;
			this._updateZoomLevels();
		}
	},

	_removeZoomLimit: function (layer) {
		var id = stamp(layer);

		if (this._zoomBoundLayers[id]) {
			delete this._zoomBoundLayers[id];
			this._updateZoomLevels();
		}
	},

	_updateZoomLevels: function () {
		var minZoom = Infinity,
		    maxZoom = -Infinity,
		    oldZoomSpan = this._getZoomSpan();

		for (var i in this._zoomBoundLayers) {
			var options = this._zoomBoundLayers[i].options;

			minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
			maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
		}

		this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
		this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;

		// @section Map state change events
		// @event zoomlevelschange: Event
		// Fired when the number of zoomlevels on the map is changed due
		// to adding or removing a layer.
		if (oldZoomSpan !== this._getZoomSpan()) {
			this.fire('zoomlevelschange');
		}

		if (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {
			this.setZoom(this._layersMaxZoom);
		}
		if (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {
			this.setZoom(this._layersMinZoom);
		}
	}
});

/*
 * @class LayerGroup
 * @aka L.LayerGroup
 * @inherits Layer
 *
 * Used to group several layers and handle them as one. If you add it to the map,
 * any layers added or removed from the group will be added/removed on the map as
 * well. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * L.layerGroup([marker1, marker2])
 * 	.addLayer(polyline)
 * 	.addTo(map);
 * ```
 */

var LayerGroup = Layer.extend({

	initialize: function (layers, options) {
		setOptions(this, options);

		this._layers = {};

		var i, len;

		if (layers) {
			for (i = 0, len = layers.length; i < len; i++) {
				this.addLayer(layers[i]);
			}
		}
	},

	// @method addLayer(layer: Layer): this
	// Adds the given layer to the group.
	addLayer: function (layer) {
		var id = this.getLayerId(layer);

		this._layers[id] = layer;

		if (this._map) {
			this._map.addLayer(layer);
		}

		return this;
	},

	// @method removeLayer(layer: Layer): this
	// Removes the given layer from the group.
	// @alternative
	// @method removeLayer(id: Number): this
	// Removes the layer with the given internal ID from the group.
	removeLayer: function (layer) {
		var id = layer in this._layers ? layer : this.getLayerId(layer);

		if (this._map && this._layers[id]) {
			this._map.removeLayer(this._layers[id]);
		}

		delete this._layers[id];

		return this;
	},

	// @method hasLayer(layer: Layer): Boolean
	// Returns `true` if the given layer is currently added to the group.
	// @alternative
	// @method hasLayer(id: Number): Boolean
	// Returns `true` if the given internal ID is currently added to the group.
	hasLayer: function (layer) {
		return !!layer && (layer in this._layers || this.getLayerId(layer) in this._layers);
	},

	// @method clearLayers(): this
	// Removes all the layers from the group.
	clearLayers: function () {
		return this.eachLayer(this.removeLayer, this);
	},

	// @method invoke(methodName: String, …): this
	// Calls `methodName` on every layer contained in this group, passing any
	// additional parameters. Has no effect if the layers contained do not
	// implement `methodName`.
	invoke: function (methodName) {
		var args = Array.prototype.slice.call(arguments, 1),
		    i, layer;

		for (i in this._layers) {
			layer = this._layers[i];

			if (layer[methodName]) {
				layer[methodName].apply(layer, args);
			}
		}

		return this;
	},

	onAdd: function (map) {
		this.eachLayer(map.addLayer, map);
	},

	onRemove: function (map) {
		this.eachLayer(map.removeLayer, map);
	},

	// @method eachLayer(fn: Function, context?: Object): this
	// Iterates over the layers of the group, optionally specifying context of the iterator function.
	// ```js
	// group.eachLayer(function (layer) {
	// 	layer.bindPopup('Hello');
	// });
	// ```
	eachLayer: function (method, context) {
		for (var i in this._layers) {
			method.call(context, this._layers[i]);
		}
		return this;
	},

	// @method getLayer(id: Number): Layer
	// Returns the layer with the given internal ID.
	getLayer: function (id) {
		return this._layers[id];
	},

	// @method getLayers(): Layer[]
	// Returns an array of all the layers added to the group.
	getLayers: function () {
		var layers = [];
		this.eachLayer(layers.push, layers);
		return layers;
	},

	// @method setZIndex(zIndex: Number): this
	// Calls `setZIndex` on every layer contained in this group, passing the z-index.
	setZIndex: function (zIndex) {
		return this.invoke('setZIndex', zIndex);
	},

	// @method getLayerId(layer: Layer): Number
	// Returns the internal ID for a layer
	getLayerId: function (layer) {
		return stamp(layer);
	}
});


// @factory L.layerGroup(layers?: Layer[], options?: Object)
// Create a layer group, optionally given an initial set of layers and an `options` object.
var layerGroup = function (layers, options) {
	return new LayerGroup(layers, options);
};

/*
 * @class FeatureGroup
 * @aka L.FeatureGroup
 * @inherits LayerGroup
 *
 * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
 *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
 *  * Events are propagated to the `FeatureGroup`, so if the group has an event
 * handler, it will handle events from any of the layers. This includes mouse events
 * and custom events.
 *  * Has `layeradd` and `layerremove` events
 *
 * @example
 *
 * ```js
 * L.featureGroup([marker1, marker2, polyline])
 * 	.bindPopup('Hello world!')
 * 	.on('click', function() { alert('Clicked on a member of the group!'); })
 * 	.addTo(map);
 * ```
 */

var FeatureGroup = LayerGroup.extend({

	addLayer: function (layer) {
		if (this.hasLayer(layer)) {
			return this;
		}

		layer.addEventParent(this);

		LayerGroup.prototype.addLayer.call(this, layer);

		// @event layeradd: LayerEvent
		// Fired when a layer is added to this `FeatureGroup`
		return this.fire('layeradd', {layer: layer});
	},

	removeLayer: function (layer) {
		if (!this.hasLayer(layer)) {
			return this;
		}
		if (layer in this._layers) {
			layer = this._layers[layer];
		}

		layer.removeEventParent(this);

		LayerGroup.prototype.removeLayer.call(this, layer);

		// @event layerremove: LayerEvent
		// Fired when a layer is removed from this `FeatureGroup`
		return this.fire('layerremove', {layer: layer});
	},

	// @method setStyle(style: Path options): this
	// Sets the given path options to each layer of the group that has a `setStyle` method.
	setStyle: function (style) {
		return this.invoke('setStyle', style);
	},

	// @method bringToFront(): this
	// Brings the layer group to the top of all other layers
	bringToFront: function () {
		return this.invoke('bringToFront');
	},

	// @method bringToBack(): this
	// Brings the layer group to the back of all other layers
	bringToBack: function () {
		return this.invoke('bringToBack');
	},

	// @method getBounds(): LatLngBounds
	// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
	getBounds: function () {
		var bounds = new LatLngBounds();

		for (var id in this._layers) {
			var layer = this._layers[id];
			bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
		}
		return bounds;
	}
});

// @factory L.featureGroup(layers: Layer[])
// Create a feature group, optionally given an initial set of layers.
var featureGroup = function (layers) {
	return new FeatureGroup(layers);
};

/*
 * @class Icon
 * @aka L.Icon
 *
 * Represents an icon to provide when creating a marker.
 *
 * @example
 *
 * ```js
 * var myIcon = L.icon({
 *     iconUrl: 'my-icon.png',
 *     iconRetinaUrl: 'my-icon@2x.png',
 *     iconSize: [38, 95],
 *     iconAnchor: [22, 94],
 *     popupAnchor: [-3, -76],
 *     shadowUrl: 'my-icon-shadow.png',
 *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
 *     shadowSize: [68, 95],
 *     shadowAnchor: [22, 94]
 * });
 *
 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
 * ```
 *
 * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
 *
 */

var Icon = Class.extend({

	/* @section
	 * @aka Icon options
	 *
	 * @option iconUrl: String = null
	 * **(required)** The URL to the icon image (absolute or relative to your script path).
	 *
	 * @option iconRetinaUrl: String = null
	 * The URL to a retina sized version of the icon image (absolute or relative to your
	 * script path). Used for Retina screen devices.
	 *
	 * @option iconSize: Point = null
	 * Size of the icon image in pixels.
	 *
	 * @option iconAnchor: Point = null
	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
	 * will be aligned so that this point is at the marker's geographical location. Centered
	 * by default if size is specified, also can be set in CSS with negative margins.
	 *
	 * @option popupAnchor: Point = [0, 0]
	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
	 *
	 * @option tooltipAnchor: Point = [0, 0]
	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
	 *
	 * @option shadowUrl: String = null
	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
	 *
	 * @option shadowRetinaUrl: String = null
	 *
	 * @option shadowSize: Point = null
	 * Size of the shadow image in pixels.
	 *
	 * @option shadowAnchor: Point = null
	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
	 * as iconAnchor if not specified).
	 *
	 * @option className: String = ''
	 * A custom class name to assign to both icon and shadow images. Empty by default.
	 */

	options: {
		popupAnchor: [0, 0],
		tooltipAnchor: [0, 0]
	},

	initialize: function (options) {
		setOptions(this, options);
	},

	// @method createIcon(oldIcon?: HTMLElement): HTMLElement
	// Called internally when the icon has to be shown, returns a `<img>` HTML element
	// styled according to the options.
	createIcon: function (oldIcon) {
		return this._createIcon('icon', oldIcon);
	},

	// @method createShadow(oldIcon?: HTMLElement): HTMLElement
	// As `createIcon`, but for the shadow beneath it.
	createShadow: function (oldIcon) {
		return this._createIcon('shadow', oldIcon);
	},

	_createIcon: function (name, oldIcon) {
		var src = this._getIconUrl(name);

		if (!src) {
			if (name === 'icon') {
				throw new Error('iconUrl not set in Icon options (see the docs).');
			}
			return null;
		}

		var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);
		this._setIconStyles(img, name);

		return img;
	},

	_setIconStyles: function (img, name) {
		var options = this.options;
		var sizeOption = options[name + 'Size'];

		if (typeof sizeOption === 'number') {
			sizeOption = [sizeOption, sizeOption];
		}

		var size = toPoint(sizeOption),
		    anchor = toPoint(name === 'shadow' && options.shadowAnchor || options.iconAnchor ||
		            size && size.divideBy(2, true));

		img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');

		if (anchor) {
			img.style.marginLeft = (-anchor.x) + 'px';
			img.style.marginTop  = (-anchor.y) + 'px';
		}

		if (size) {
			img.style.width  = size.x + 'px';
			img.style.height = size.y + 'px';
		}
	},

	_createImg: function (src, el) {
		el = el || document.createElement('img');
		el.src = src;
		return el;
	},

	_getIconUrl: function (name) {
		return retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
	}
});


// @factory L.icon(options: Icon options)
// Creates an icon instance with the given options.
function icon(options) {
	return new Icon(options);
}

/*
 * @miniclass Icon.Default (Icon)
 * @aka L.Icon.Default
 * @section
 *
 * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
 * no icon is specified. Points to the blue marker image distributed with Leaflet
 * releases.
 *
 * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
 * (which is a set of `Icon options`).
 *
 * If you want to _completely_ replace the default icon, override the
 * `L.Marker.prototype.options.icon` with your own icon instead.
 */

var IconDefault = Icon.extend({

	options: {
		iconUrl:       'marker-icon.png',
		iconRetinaUrl: 'marker-icon-2x.png',
		shadowUrl:     'marker-shadow.png',
		iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
		shadowSize:  [41, 41]
	},

	_getIconUrl: function (name) {
		if (!IconDefault.imagePath) {	// Deprecated, backwards-compatibility only
			IconDefault.imagePath = this._detectIconPath();
		}

		// @option imagePath: String
		// `Icon.Default` will try to auto-detect the location of the
		// blue icon images. If you are placing these images in a non-standard
		// way, set this option to point to the right path.
		return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
	},

	_detectIconPath: function () {
		var el = create$1('div',  'leaflet-default-icon-path', document.body);
		var path = getStyle(el, 'background-image') ||
		           getStyle(el, 'backgroundImage');	// IE8

		document.body.removeChild(el);

		if (path === null || path.indexOf('url') !== 0) {
			path = '';
		} else {
			path = path.replace(/^url\(["']?/, '').replace(/marker-icon\.png["']?\)$/, '');
		}

		return path;
	}
});

/*
 * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
 */


/* @namespace Marker
 * @section Interaction handlers
 *
 * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
 *
 * ```js
 * marker.dragging.disable();
 * ```
 *
 * @property dragging: Handler
 * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
 */

var MarkerDrag = Handler.extend({
	initialize: function (marker) {
		this._marker = marker;
	},

	addHooks: function () {
		var icon = this._marker._icon;

		if (!this._draggable) {
			this._draggable = new Draggable(icon, icon, true);
		}

		this._draggable.on({
			dragstart: this._onDragStart,
			predrag: this._onPreDrag,
			drag: this._onDrag,
			dragend: this._onDragEnd
		}, this).enable();

		addClass(icon, 'leaflet-marker-draggable');
	},

	removeHooks: function () {
		this._draggable.off({
			dragstart: this._onDragStart,
			predrag: this._onPreDrag,
			drag: this._onDrag,
			dragend: this._onDragEnd
		}, this).disable();

		if (this._marker._icon) {
			removeClass(this._marker._icon, 'leaflet-marker-draggable');
		}
	},

	moved: function () {
		return this._draggable && this._draggable._moved;
	},

	_adjustPan: function (e) {
		var marker = this._marker,
		    map = marker._map,
		    speed = this._marker.options.autoPanSpeed,
		    padding = this._marker.options.autoPanPadding,
		    iconPos = getPosition(marker._icon),
		    bounds = map.getPixelBounds(),
		    origin = map.getPixelOrigin();

		var panBounds = toBounds(
			bounds.min._subtract(origin).add(padding),
			bounds.max._subtract(origin).subtract(padding)
		);

		if (!panBounds.contains(iconPos)) {
			// Compute incremental movement
			var movement = toPoint(
				(Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) -
				(Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x),

				(Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) -
				(Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)
			).multiplyBy(speed);

			map.panBy(movement, {animate: false});

			this._draggable._newPos._add(movement);
			this._draggable._startPos._add(movement);

			setPosition(marker._icon, this._draggable._newPos);
			this._onDrag(e);

			this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
		}
	},

	_onDragStart: function () {
		// @section Dragging events
		// @event dragstart: Event
		// Fired when the user starts dragging the marker.

		// @event movestart: Event
		// Fired when the marker starts moving (because of dragging).

		this._oldLatLng = this._marker.getLatLng();
		this._marker
		    .closePopup()
		    .fire('movestart')
		    .fire('dragstart');
	},

	_onPreDrag: function (e) {
		if (this._marker.options.autoPan) {
			cancelAnimFrame(this._panRequest);
			this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
		}
	},

	_onDrag: function (e) {
		var marker = this._marker,
		    shadow = marker._shadow,
		    iconPos = getPosition(marker._icon),
		    latlng = marker._map.layerPointToLatLng(iconPos);

		// update shadow position
		if (shadow) {
			setPosition(shadow, iconPos);
		}

		marker._latlng = latlng;
		e.latlng = latlng;
		e.oldLatLng = this._oldLatLng;

		// @event drag: Event
		// Fired repeatedly while the user drags the marker.
		marker
		    .fire('move', e)
		    .fire('drag', e);
	},

	_onDragEnd: function (e) {
		// @event dragend: DragEndEvent
		// Fired when the user stops dragging the marker.

		 cancelAnimFrame(this._panRequest);

		// @event moveend: Event
		// Fired when the marker stops moving (because of dragging).
		delete this._oldLatLng;
		this._marker
		    .fire('moveend')
		    .fire('dragend', e);
	}
});

/*
 * @class Marker
 * @inherits Interactive layer
 * @aka L.Marker
 * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * L.marker([50.5, 30.5]).addTo(map);
 * ```
 */

var Marker = Layer.extend({

	// @section
	// @aka Marker options
	options: {
		// @option icon: Icon = *
		// Icon instance to use for rendering the marker.
		// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
		// If not specified, a common instance of `L.Icon.Default` is used.
		icon: new IconDefault(),

		// Option inherited from "Interactive layer" abstract class
		interactive: true,

		// @option keyboard: Boolean = true
		// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
		keyboard: true,

		// @option title: String = ''
		// Text for the browser tooltip that appear on marker hover (no tooltip by default).
		title: '',

		// @option alt: String = ''
		// Text for the `alt` attribute of the icon image (useful for accessibility).
		alt: '',

		// @option zIndexOffset: Number = 0
		// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
		zIndexOffset: 0,

		// @option opacity: Number = 1.0
		// The opacity of the marker.
		opacity: 1,

		// @option riseOnHover: Boolean = false
		// If `true`, the marker will get on top of others when you hover the mouse over it.
		riseOnHover: false,

		// @option riseOffset: Number = 250
		// The z-index offset used for the `riseOnHover` feature.
		riseOffset: 250,

		// @option pane: String = 'markerPane'
		// `Map pane` where the markers icon will be added.
		pane: 'markerPane',

		// @option pane: String = 'shadowPane'
		// `Map pane` where the markers shadow will be added.
		shadowPane: 'shadowPane',

		// @option bubblingMouseEvents: Boolean = false
		// When `true`, a mouse event on this marker will trigger the same event on the map
		// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
		bubblingMouseEvents: false,

		// @section Draggable marker options
		// @option draggable: Boolean = false
		// Whether the marker is draggable with mouse/touch or not.
		draggable: false,

		// @option autoPan: Boolean = false
		// Whether to pan the map when dragging this marker near its edge or not.
		autoPan: false,

		// @option autoPanPadding: Point = Point(50, 50)
		// Distance (in pixels to the left/right and to the top/bottom) of the
		// map edge to start panning the map.
		autoPanPadding: [50, 50],

		// @option autoPanSpeed: Number = 10
		// Number of pixels the map should pan by.
		autoPanSpeed: 10
	},

	/* @section
	 *
	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
	 */

	initialize: function (latlng, options) {
		setOptions(this, options);
		this._latlng = toLatLng(latlng);
	},

	onAdd: function (map) {
		this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;

		if (this._zoomAnimated) {
			map.on('zoomanim', this._animateZoom, this);
		}

		this._initIcon();
		this.update();
	},

	onRemove: function (map) {
		if (this.dragging && this.dragging.enabled()) {
			this.options.draggable = true;
			this.dragging.removeHooks();
		}
		delete this.dragging;

		if (this._zoomAnimated) {
			map.off('zoomanim', this._animateZoom, this);
		}

		this._removeIcon();
		this._removeShadow();
	},

	getEvents: function () {
		return {
			zoom: this.update,
			viewreset: this.update
		};
	},

	// @method getLatLng: LatLng
	// Returns the current geographical position of the marker.
	getLatLng: function () {
		return this._latlng;
	},

	// @method setLatLng(latlng: LatLng): this
	// Changes the marker position to the given point.
	setLatLng: function (latlng) {
		var oldLatLng = this._latlng;
		this._latlng = toLatLng(latlng);
		this.update();

		// @event move: Event
		// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
		return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
	},

	// @method setZIndexOffset(offset: Number): this
	// Changes the [zIndex offset](#marker-zindexoffset) of the marker.
	setZIndexOffset: function (offset) {
		this.options.zIndexOffset = offset;
		return this.update();
	},

	// @method getIcon: Icon
	// Returns the current icon used by the marker
	getIcon: function () {
		return this.options.icon;
	},

	// @method setIcon(icon: Icon): this
	// Changes the marker icon.
	setIcon: function (icon) {

		this.options.icon = icon;

		if (this._map) {
			this._initIcon();
			this.update();
		}

		if (this._popup) {
			this.bindPopup(this._popup, this._popup.options);
		}

		return this;
	},

	getElement: function () {
		return this._icon;
	},

	update: function () {

		if (this._icon && this._map) {
			var pos = this._map.latLngToLayerPoint(this._latlng).round();
			this._setPos(pos);
		}

		return this;
	},

	_initIcon: function () {
		var options = this.options,
		    classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

		var icon = options.icon.createIcon(this._icon),
		    addIcon = false;

		// if we're not reusing the icon, remove the old one and init new one
		if (icon !== this._icon) {
			if (this._icon) {
				this._removeIcon();
			}
			addIcon = true;

			if (options.title) {
				icon.title = options.title;
			}

			if (icon.tagName === 'IMG') {
				icon.alt = options.alt || '';
			}
		}

		addClass(icon, classToAdd);

		if (options.keyboard) {
			icon.tabIndex = '0';
		}

		this._icon = icon;

		if (options.riseOnHover) {
			this.on({
				mouseover: this._bringToFront,
				mouseout: this._resetZIndex
			});
		}

		var newShadow = options.icon.createShadow(this._shadow),
		    addShadow = false;

		if (newShadow !== this._shadow) {
			this._removeShadow();
			addShadow = true;
		}

		if (newShadow) {
			addClass(newShadow, classToAdd);
			newShadow.alt = '';
		}
		this._shadow = newShadow;


		if (options.opacity < 1) {
			this._updateOpacity();
		}


		if (addIcon) {
			this.getPane().appendChild(this._icon);
		}
		this._initInteraction();
		if (newShadow && addShadow) {
			this.getPane(options.shadowPane).appendChild(this._shadow);
		}
	},

	_removeIcon: function () {
		if (this.options.riseOnHover) {
			this.off({
				mouseover: this._bringToFront,
				mouseout: this._resetZIndex
			});
		}

		remove(this._icon);
		this.removeInteractiveTarget(this._icon);

		this._icon = null;
	},

	_removeShadow: function () {
		if (this._shadow) {
			remove(this._shadow);
		}
		this._shadow = null;
	},

	_setPos: function (pos) {

		if (this._icon) {
			setPosition(this._icon, pos);
		}

		if (this._shadow) {
			setPosition(this._shadow, pos);
		}

		this._zIndex = pos.y + this.options.zIndexOffset;

		this._resetZIndex();
	},

	_updateZIndex: function (offset) {
		if (this._icon) {
			this._icon.style.zIndex = this._zIndex + offset;
		}
	},

	_animateZoom: function (opt) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

		this._setPos(pos);
	},

	_initInteraction: function () {

		if (!this.options.interactive) { return; }

		addClass(this._icon, 'leaflet-interactive');

		this.addInteractiveTarget(this._icon);

		if (MarkerDrag) {
			var draggable = this.options.draggable;
			if (this.dragging) {
				draggable = this.dragging.enabled();
				this.dragging.disable();
			}

			this.dragging = new MarkerDrag(this);

			if (draggable) {
				this.dragging.enable();
			}
		}
	},

	// @method setOpacity(opacity: Number): this
	// Changes the opacity of the marker.
	setOpacity: function (opacity) {
		this.options.opacity = opacity;
		if (this._map) {
			this._updateOpacity();
		}

		return this;
	},

	_updateOpacity: function () {
		var opacity = this.options.opacity;

		if (this._icon) {
			setOpacity(this._icon, opacity);
		}

		if (this._shadow) {
			setOpacity(this._shadow, opacity);
		}
	},

	_bringToFront: function () {
		this._updateZIndex(this.options.riseOffset);
	},

	_resetZIndex: function () {
		this._updateZIndex(0);
	},

	_getPopupAnchor: function () {
		return this.options.icon.options.popupAnchor;
	},

	_getTooltipAnchor: function () {
		return this.options.icon.options.tooltipAnchor;
	}
});


// factory L.marker(latlng: LatLng, options? : Marker options)

// @factory L.marker(latlng: LatLng, options? : Marker options)
// Instantiates a Marker object given a geographical point and optionally an options object.
function marker(latlng, options) {
	return new Marker(latlng, options);
}

/*
 * @class Path
 * @aka L.Path
 * @inherits Interactive layer
 *
 * An abstract class that contains options and constants shared between vector
 * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
 */

var Path = Layer.extend({

	// @section
	// @aka Path options
	options: {
		// @option stroke: Boolean = true
		// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
		stroke: true,

		// @option color: String = '#3388ff'
		// Stroke color
		color: '#3388ff',

		// @option weight: Number = 3
		// Stroke width in pixels
		weight: 3,

		// @option opacity: Number = 1.0
		// Stroke opacity
		opacity: 1,

		// @option lineCap: String= 'round'
		// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
		lineCap: 'round',

		// @option lineJoin: String = 'round'
		// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
		lineJoin: 'round',

		// @option dashArray: String = null
		// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
		dashArray: null,

		// @option dashOffset: String = null
		// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
		dashOffset: null,

		// @option fill: Boolean = depends
		// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
		fill: false,

		// @option fillColor: String = *
		// Fill color. Defaults to the value of the [`color`](#path-color) option
		fillColor: null,

		// @option fillOpacity: Number = 0.2
		// Fill opacity.
		fillOpacity: 0.2,

		// @option fillRule: String = 'evenodd'
		// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
		fillRule: 'evenodd',

		// className: '',

		// Option inherited from "Interactive layer" abstract class
		interactive: true,

		// @option bubblingMouseEvents: Boolean = true
		// When `true`, a mouse event on this path will trigger the same event on the map
		// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
		bubblingMouseEvents: true
	},

	beforeAdd: function (map) {
		// Renderer is set here because we need to call renderer.getEvents
		// before this.getEvents.
		this._renderer = map.getRenderer(this);
	},

	onAdd: function () {
		this._renderer._initPath(this);
		this._reset();
		this._renderer._addPath(this);
	},

	onRemove: function () {
		this._renderer._removePath(this);
	},

	// @method redraw(): this
	// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
	redraw: function () {
		if (this._map) {
			this._renderer._updatePath(this);
		}
		return this;
	},

	// @method setStyle(style: Path options): this
	// Changes the appearance of a Path based on the options in the `Path options` object.
	setStyle: function (style) {
		setOptions(this, style);
		if (this._renderer) {
			this._renderer._updateStyle(this);
			if (this.options.stroke && style && style.hasOwnProperty('weight')) {
				this._updateBounds();
			}
		}
		return this;
	},

	// @method bringToFront(): this
	// Brings the layer to the top of all path layers.
	bringToFront: function () {
		if (this._renderer) {
			this._renderer._bringToFront(this);
		}
		return this;
	},

	// @method bringToBack(): this
	// Brings the layer to the bottom of all path layers.
	bringToBack: function () {
		if (this._renderer) {
			this._renderer._bringToBack(this);
		}
		return this;
	},

	getElement: function () {
		return this._path;
	},

	_reset: function () {
		// defined in child classes
		this._project();
		this._update();
	},

	_clickTolerance: function () {
		// used when doing hit detection for Canvas layers
		return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
	}
});

/*
 * @class CircleMarker
 * @aka L.CircleMarker
 * @inherits Path
 *
 * A circle of a fixed size with radius specified in pixels. Extends `Path`.
 */

var CircleMarker = Path.extend({

	// @section
	// @aka CircleMarker options
	options: {
		fill: true,

		// @option radius: Number = 10
		// Radius of the circle marker, in pixels
		radius: 10
	},

	initialize: function (latlng, options) {
		setOptions(this, options);
		this._latlng = toLatLng(latlng);
		this._radius = this.options.radius;
	},

	// @method setLatLng(latLng: LatLng): this
	// Sets the position of a circle marker to a new location.
	setLatLng: function (latlng) {
		var oldLatLng = this._latlng;
		this._latlng = toLatLng(latlng);
		this.redraw();

		// @event move: Event
		// Fired when the marker is moved via [`setLatLng`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
		return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
	},

	// @method getLatLng(): LatLng
	// Returns the current geographical position of the circle marker
	getLatLng: function () {
		return this._latlng;
	},

	// @method setRadius(radius: Number): this
	// Sets the radius of a circle marker. Units are in pixels.
	setRadius: function (radius) {
		this.options.radius = this._radius = radius;
		return this.redraw();
	},

	// @method getRadius(): Number
	// Returns the current radius of the circle
	getRadius: function () {
		return this._radius;
	},

	setStyle : function (options) {
		var radius = options && options.radius || this._radius;
		Path.prototype.setStyle.call(this, options);
		this.setRadius(radius);
		return this;
	},

	_project: function () {
		this._point = this._map.latLngToLayerPoint(this._latlng);
		this._updateBounds();
	},

	_updateBounds: function () {
		var r = this._radius,
		    r2 = this._radiusY || r,
		    w = this._clickTolerance(),
		    p = [r + w, r2 + w];
		this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
	},

	_update: function () {
		if (this._map) {
			this._updatePath();
		}
	},

	_updatePath: function () {
		this._renderer._updateCircle(this);
	},

	_empty: function () {
		return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
	},

	// Needed by the `Canvas` renderer for interactivity
	_containsPoint: function (p) {
		return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
	}
});


// @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
// Instantiates a circle marker object given a geographical point, and an optional options object.
function circleMarker(latlng, options) {
	return new CircleMarker(latlng, options);
}

/*
 * @class Circle
 * @aka L.Circle
 * @inherits CircleMarker
 *
 * A class for drawing circle overlays on a map. Extends `CircleMarker`.
 *
 * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
 *
 * @example
 *
 * ```js
 * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
 * ```
 */

var Circle = CircleMarker.extend({

	initialize: function (latlng, options, legacyOptions) {
		if (typeof options === 'number') {
			// Backwards compatibility with 0.7.x factory (latlng, radius, options?)
			options = extend({}, legacyOptions, {radius: options});
		}
		setOptions(this, options);
		this._latlng = toLatLng(latlng);

		if (isNaN(this.options.radius)) { throw new Error('Circle radius cannot be NaN'); }

		// @section
		// @aka Circle options
		// @option radius: Number; Radius of the circle, in meters.
		this._mRadius = this.options.radius;
	},

	// @method setRadius(radius: Number): this
	// Sets the radius of a circle. Units are in meters.
	setRadius: function (radius) {
		this._mRadius = radius;
		return this.redraw();
	},

	// @method getRadius(): Number
	// Returns the current radius of a circle. Units are in meters.
	getRadius: function () {
		return this._mRadius;
	},

	// @method getBounds(): LatLngBounds
	// Returns the `LatLngBounds` of the path.
	getBounds: function () {
		var half = [this._radius, this._radiusY || this._radius];

		return new LatLngBounds(
			this._map.layerPointToLatLng(this._point.subtract(half)),
			this._map.layerPointToLatLng(this._point.add(half)));
	},

	setStyle: Path.prototype.setStyle,

	_project: function () {

		var lng = this._latlng.lng,
		    lat = this._latlng.lat,
		    map = this._map,
		    crs = map.options.crs;

		if (crs.distance === Earth.distance) {
			var d = Math.PI / 180,
			    latR = (this._mRadius / Earth.R) / d,
			    top = map.project([lat + latR, lng]),
			    bottom = map.project([lat - latR, lng]),
			    p = top.add(bottom).divideBy(2),
			    lat2 = map.unproject(p).lat,
			    lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) /
			            (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;

			if (isNaN(lngR) || lngR === 0) {
				lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
			}

			this._point = p.subtract(map.getPixelOrigin());
			this._radius = isNaN(lngR) ? 0 : p.x - map.project([lat2, lng - lngR]).x;
			this._radiusY = p.y - top.y;

		} else {
			var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));

			this._point = map.latLngToLayerPoint(this._latlng);
			this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
		}

		this._updateBounds();
	}
});

// @factory L.circle(latlng: LatLng, options?: Circle options)
// Instantiates a circle object given a geographical point, and an options object
// which contains the circle radius.
// @alternative
// @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
// Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
// Do not use in new applications or plugins.
function circle(latlng, options, legacyOptions) {
	return new Circle(latlng, options, legacyOptions);
}

/*
 * @class Polyline
 * @aka L.Polyline
 * @inherits Path
 *
 * A class for drawing polyline overlays on a map. Extends `Path`.
 *
 * @example
 *
 * ```js
 * // create a red polyline from an array of LatLng points
 * var latlngs = [
 * 	[45.51, -122.68],
 * 	[37.77, -122.43],
 * 	[34.04, -118.2]
 * ];
 *
 * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
 *
 * // zoom the map to the polyline
 * map.fitBounds(polyline.getBounds());
 * ```
 *
 * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
 *
 * ```js
 * // create a red polyline from an array of arrays of LatLng points
 * var latlngs = [
 * 	[[45.51, -122.68],
 * 	 [37.77, -122.43],
 * 	 [34.04, -118.2]],
 * 	[[40.78, -73.91],
 * 	 [41.83, -87.62],
 * 	 [32.76, -96.72]]
 * ];
 * ```
 */


var Polyline = Path.extend({

	// @section
	// @aka Polyline options
	options: {
		// @option smoothFactor: Number = 1.0
		// How much to simplify the polyline on each zoom level. More means
		// better performance and smoother look, and less means more accurate representation.
		smoothFactor: 1.0,

		// @option noClip: Boolean = false
		// Disable polyline clipping.
		noClip: false
	},

	initialize: function (latlngs, options) {
		setOptions(this, options);
		this._setLatLngs(latlngs);
	},

	// @method getLatLngs(): LatLng[]
	// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
	getLatLngs: function () {
		return this._latlngs;
	},

	// @method setLatLngs(latlngs: LatLng[]): this
	// Replaces all the points in the polyline with the given array of geographical points.
	setLatLngs: function (latlngs) {
		this._setLatLngs(latlngs);
		return this.redraw();
	},

	// @method isEmpty(): Boolean
	// Returns `true` if the Polyline has no LatLngs.
	isEmpty: function () {
		return !this._latlngs.length;
	},

	// @method closestLayerPoint(p: Point): Point
	// Returns the point closest to `p` on the Polyline.
	closestLayerPoint: function (p) {
		var minDistance = Infinity,
		    minPoint = null,
		    closest = _sqClosestPointOnSegment,
		    p1, p2;

		for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
			var points = this._parts[j];

			for (var i = 1, len = points.length; i < len; i++) {
				p1 = points[i - 1];
				p2 = points[i];

				var sqDist = closest(p, p1, p2, true);

				if (sqDist < minDistance) {
					minDistance = sqDist;
					minPoint = closest(p, p1, p2);
				}
			}
		}
		if (minPoint) {
			minPoint.distance = Math.sqrt(minDistance);
		}
		return minPoint;
	},

	// @method getCenter(): LatLng
	// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.
	getCenter: function () {
		// throws error when not yet added to map as this center calculation requires projected coordinates
		if (!this._map) {
			throw new Error('Must add layer to map before using getCenter()');
		}

		var i, halfDist, segDist, dist, p1, p2, ratio,
		    points = this._rings[0],
		    len = points.length;

		if (!len) { return null; }

		// polyline centroid algorithm; only uses the first ring if there are multiple

		for (i = 0, halfDist = 0; i < len - 1; i++) {
			halfDist += points[i].distanceTo(points[i + 1]) / 2;
		}

		// The line is so small in the current view that all points are on the same pixel.
		if (halfDist === 0) {
			return this._map.layerPointToLatLng(points[0]);
		}

		for (i = 0, dist = 0; i < len - 1; i++) {
			p1 = points[i];
			p2 = points[i + 1];
			segDist = p1.distanceTo(p2);
			dist += segDist;

			if (dist > halfDist) {
				ratio = (dist - halfDist) / segDist;
				return this._map.layerPointToLatLng([
					p2.x - ratio * (p2.x - p1.x),
					p2.y - ratio * (p2.y - p1.y)
				]);
			}
		}
	},

	// @method getBounds(): LatLngBounds
	// Returns the `LatLngBounds` of the path.
	getBounds: function () {
		return this._bounds;
	},

	// @method addLatLng(latlng: LatLng, latlngs? LatLng[]): this
	// Adds a given point to the polyline. By default, adds to the first ring of
	// the polyline in case of a multi-polyline, but can be overridden by passing
	// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
	addLatLng: function (latlng, latlngs) {
		latlngs = latlngs || this._defaultShape();
		latlng = toLatLng(latlng);
		latlngs.push(latlng);
		this._bounds.extend(latlng);
		return this.redraw();
	},

	_setLatLngs: function (latlngs) {
		this._bounds = new LatLngBounds();
		this._latlngs = this._convertLatLngs(latlngs);
	},

	_defaultShape: function () {
		return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
	},

	// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
	_convertLatLngs: function (latlngs) {
		var result = [],
		    flat = isFlat(latlngs);

		for (var i = 0, len = latlngs.length; i < len; i++) {
			if (flat) {
				result[i] = toLatLng(latlngs[i]);
				this._bounds.extend(result[i]);
			} else {
				result[i] = this._convertLatLngs(latlngs[i]);
			}
		}

		return result;
	},

	_project: function () {
		var pxBounds = new Bounds();
		this._rings = [];
		this._projectLatlngs(this._latlngs, this._rings, pxBounds);

		if (this._bounds.isValid() && pxBounds.isValid()) {
			this._rawPxBounds = pxBounds;
			this._updateBounds();
		}
	},

	_updateBounds: function () {
		var w = this._clickTolerance(),
		    p = new Point(w, w);
		this._pxBounds = new Bounds([
			this._rawPxBounds.min.subtract(p),
			this._rawPxBounds.max.add(p)
		]);
	},

	// recursively turns latlngs into a set of rings with projected coordinates
	_projectLatlngs: function (latlngs, result, projectedBounds) {
		var flat = latlngs[0] instanceof LatLng,
		    len = latlngs.length,
		    i, ring;

		if (flat) {
			ring = [];
			for (i = 0; i < len; i++) {
				ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
				projectedBounds.extend(ring[i]);
			}
			result.push(ring);
		} else {
			for (i = 0; i < len; i++) {
				this._projectLatlngs(latlngs[i], result, projectedBounds);
			}
		}
	},

	// clip polyline by renderer bounds so that we have less to render for performance
	_clipPoints: function () {
		var bounds = this._renderer._bounds;

		this._parts = [];
		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
			return;
		}

		if (this.options.noClip) {
			this._parts = this._rings;
			return;
		}

		var parts = this._parts,
		    i, j, k, len, len2, segment, points;

		for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
			points = this._rings[i];

			for (j = 0, len2 = points.length; j < len2 - 1; j++) {
				segment = clipSegment(points[j], points[j + 1], bounds, j, true);

				if (!segment) { continue; }

				parts[k] = parts[k] || [];
				parts[k].push(segment[0]);

				// if segment goes out of screen, or it's the last one, it's the end of the line part
				if ((segment[1] !== points[j + 1]) || (j === len2 - 2)) {
					parts[k].push(segment[1]);
					k++;
				}
			}
		}
	},

	// simplify each clipped part of the polyline for performance
	_simplifyPoints: function () {
		var parts = this._parts,
		    tolerance = this.options.smoothFactor;

		for (var i = 0, len = parts.length; i < len; i++) {
			parts[i] = simplify(parts[i], tolerance);
		}
	},

	_update: function () {
		if (!this._map) { return; }

		this._clipPoints();
		this._simplifyPoints();
		this._updatePath();
	},

	_updatePath: function () {
		this._renderer._updatePoly(this);
	},

	// Needed by the `Canvas` renderer for interactivity
	_containsPoint: function (p, closed) {
		var i, j, k, len, len2, part,
		    w = this._clickTolerance();

		if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

		// hit detection for polylines
		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];

			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				if (!closed && (j === 0)) { continue; }

				if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
					return true;
				}
			}
		}
		return false;
	}
});

// @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
// Instantiates a polyline object given an array of geographical points and
// optionally an options object. You can create a `Polyline` object with
// multiple separate lines (`MultiPolyline`) by passing an array of arrays
// of geographic points.
function polyline(latlngs, options) {
	return new Polyline(latlngs, options);
}

// Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
Polyline._flat = _flat;

/*
 * @class Polygon
 * @aka L.Polygon
 * @inherits Polyline
 *
 * A class for drawing polygon overlays on a map. Extends `Polyline`.
 *
 * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
 *
 *
 * @example
 *
 * ```js
 * // create a red polygon from an array of LatLng points
 * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
 *
 * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
 *
 * // zoom the map to the polygon
 * map.fitBounds(polygon.getBounds());
 * ```
 *
 * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
 *
 * ```js
 * var latlngs = [
 *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
 *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
 * ];
 * ```
 *
 * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
 *
 * ```js
 * var latlngs = [
 *   [ // first polygon
 *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
 *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
 *   ],
 *   [ // second polygon
 *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
 *   ]
 * ];
 * ```
 */

var Polygon = Polyline.extend({

	options: {
		fill: true
	},

	isEmpty: function () {
		return !this._latlngs.length || !this._latlngs[0].length;
	},

	getCenter: function () {
		// throws error when not yet added to map as this center calculation requires projected coordinates
		if (!this._map) {
			throw new Error('Must add layer to map before using getCenter()');
		}

		var i, j, p1, p2, f, area, x, y, center,
		    points = this._rings[0],
		    len = points.length;

		if (!len) { return null; }

		// polygon centroid algorithm; only uses the first ring if there are multiple

		area = x = y = 0;

		for (i = 0, j = len - 1; i < len; j = i++) {
			p1 = points[i];
			p2 = points[j];

			f = p1.y * p2.x - p2.y * p1.x;
			x += (p1.x + p2.x) * f;
			y += (p1.y + p2.y) * f;
			area += f * 3;
		}

		if (area === 0) {
			// Polygon is so small that all points are on same pixel.
			center = points[0];
		} else {
			center = [x / area, y / area];
		}
		return this._map.layerPointToLatLng(center);
	},

	_convertLatLngs: function (latlngs) {
		var result = Polyline.prototype._convertLatLngs.call(this, latlngs),
		    len = result.length;

		// remove last point if it equals first one
		if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
			result.pop();
		}
		return result;
	},

	_setLatLngs: function (latlngs) {
		Polyline.prototype._setLatLngs.call(this, latlngs);
		if (isFlat(this._latlngs)) {
			this._latlngs = [this._latlngs];
		}
	},

	_defaultShape: function () {
		return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
	},

	_clipPoints: function () {
		// polygons need a different clipping algorithm so we redefine that

		var bounds = this._renderer._bounds,
		    w = this.options.weight,
		    p = new Point(w, w);

		// increase clip padding by stroke width to avoid stroke on clip edges
		bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));

		this._parts = [];
		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
			return;
		}

		if (this.options.noClip) {
			this._parts = this._rings;
			return;
		}

		for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
			clipped = clipPolygon(this._rings[i], bounds, true);
			if (clipped.length) {
				this._parts.push(clipped);
			}
		}
	},

	_updatePath: function () {
		this._renderer._updatePoly(this, true);
	},

	// Needed by the `Canvas` renderer for interactivity
	_containsPoint: function (p) {
		var inside = false,
		    part, p1, p2, i, j, k, len, len2;

		if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

		// ray casting algorithm for detecting if point is in polygon
		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];

			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				p1 = part[j];
				p2 = part[k];

				if (((p1.y > p.y) !== (p2.y > p.y)) && (p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
					inside = !inside;
				}
			}
		}

		// also check if it's on polygon stroke
		return inside || Polyline.prototype._containsPoint.call(this, p, true);
	}

});


// @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
function polygon(latlngs, options) {
	return new Polygon(latlngs, options);
}

/*
 * @class GeoJSON
 * @aka L.GeoJSON
 * @inherits FeatureGroup
 *
 * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
 * GeoJSON data and display it on the map. Extends `FeatureGroup`.
 *
 * @example
 *
 * ```js
 * L.geoJSON(data, {
 * 	style: function (feature) {
 * 		return {color: feature.properties.color};
 * 	}
 * }).bindPopup(function (layer) {
 * 	return layer.feature.properties.description;
 * }).addTo(map);
 * ```
 */

var GeoJSON = FeatureGroup.extend({

	/* @section
	 * @aka GeoJSON options
	 *
	 * @option pointToLayer: Function = *
	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
	 * The default is to spawn a default `Marker`:
	 * ```js
	 * function(geoJsonPoint, latlng) {
	 * 	return L.marker(latlng);
	 * }
	 * ```
	 *
	 * @option style: Function = *
	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
	 * called internally when data is added.
	 * The default value is to not override any defaults:
	 * ```js
	 * function (geoJsonFeature) {
	 * 	return {}
	 * }
	 * ```
	 *
	 * @option onEachFeature: Function = *
	 * A `Function` that will be called once for each created `Feature`, after it has
	 * been created and styled. Useful for attaching events and popups to features.
	 * The default is to do nothing with the newly created layers:
	 * ```js
	 * function (feature, layer) {}
	 * ```
	 *
	 * @option filter: Function = *
	 * A `Function` that will be used to decide whether to include a feature or not.
	 * The default is to include all features:
	 * ```js
	 * function (geoJsonFeature) {
	 * 	return true;
	 * }
	 * ```
	 * Note: dynamically changing the `filter` option will have effect only on newly
	 * added data. It will _not_ re-evaluate already included features.
	 *
	 * @option coordsToLatLng: Function = *
	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
	 * The default is the `coordsToLatLng` static method.
	 *
	 * @option markersInheritOptions: Boolean = false
	 * Whether default Markers for "Point" type Features inherit from group options.
	 */

	initialize: function (geojson, options) {
		setOptions(this, options);

		this._layers = {};

		if (geojson) {
			this.addData(geojson);
		}
	},

	// @method addData( <GeoJSON> data ): this
	// Adds a GeoJSON object to the layer.
	addData: function (geojson) {
		var features = isArray(geojson) ? geojson : geojson.features,
		    i, len, feature;

		if (features) {
			for (i = 0, len = features.length; i < len; i++) {
				// only add this if geometry or geometries are set and not null
				feature = features[i];
				if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
					this.addData(feature);
				}
			}
			return this;
		}

		var options = this.options;

		if (options.filter && !options.filter(geojson)) { return this; }

		var layer = geometryToLayer(geojson, options);
		if (!layer) {
			return this;
		}
		layer.feature = asFeature(geojson);

		layer.defaultOptions = layer.options;
		this.resetStyle(layer);

		if (options.onEachFeature) {
			options.onEachFeature(geojson, layer);
		}

		return this.addLayer(layer);
	},

	// @method resetStyle( <Path> layer? ): this
	// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
	// If `layer` is omitted, the style of all features in the current layer is reset.
	resetStyle: function (layer) {
		if (layer === undefined) {
			return this.eachLayer(this.resetStyle, this);
		}
		// reset any custom styles
		layer.options = extend({}, layer.defaultOptions);
		this._setLayerStyle(layer, this.options.style);
		return this;
	},

	// @method setStyle( <Function> style ): this
	// Changes styles of GeoJSON vector layers with the given style function.
	setStyle: function (style) {
		return this.eachLayer(function (layer) {
			this._setLayerStyle(layer, style);
		}, this);
	},

	_setLayerStyle: function (layer, style) {
		if (layer.setStyle) {
			if (typeof style === 'function') {
				style = style(layer.feature);
			}
			layer.setStyle(style);
		}
	}
});

// @section
// There are several static functions which can be called without instantiating L.GeoJSON:

// @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
// Creates a `Layer` from a given GeoJSON feature. Can use a custom
// [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
// functions if provided as options.
function geometryToLayer(geojson, options) {

	var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
	    coords = geometry ? geometry.coordinates : null,
	    layers = [],
	    pointToLayer = options && options.pointToLayer,
	    _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng,
	    latlng, latlngs, i, len;

	if (!coords && !geometry) {
		return null;
	}

	switch (geometry.type) {
	case 'Point':
		latlng = _coordsToLatLng(coords);
		return _pointToLayer(pointToLayer, geojson, latlng, options);

	case 'MultiPoint':
		for (i = 0, len = coords.length; i < len; i++) {
			latlng = _coordsToLatLng(coords[i]);
			layers.push(_pointToLayer(pointToLayer, geojson, latlng, options));
		}
		return new FeatureGroup(layers);

	case 'LineString':
	case 'MultiLineString':
		latlngs = coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, _coordsToLatLng);
		return new Polyline(latlngs, options);

	case 'Polygon':
	case 'MultiPolygon':
		latlngs = coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, _coordsToLatLng);
		return new Polygon(latlngs, options);

	case 'GeometryCollection':
		for (i = 0, len = geometry.geometries.length; i < len; i++) {
			var layer = geometryToLayer({
				geometry: geometry.geometries[i],
				type: 'Feature',
				properties: geojson.properties
			}, options);

			if (layer) {
				layers.push(layer);
			}
		}
		return new FeatureGroup(layers);

	default:
		throw new Error('Invalid GeoJSON object.');
	}
}

function _pointToLayer(pointToLayerFn, geojson, latlng, options) {
	return pointToLayerFn ?
		pointToLayerFn(geojson, latlng) :
		new Marker(latlng, options && options.markersInheritOptions && options);
}

// @function coordsToLatLng(coords: Array): LatLng
// Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
// or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
function coordsToLatLng(coords) {
	return new LatLng(coords[1], coords[0], coords[2]);
}

// @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
// Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
// `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
// Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
	var latlngs = [];

	for (var i = 0, len = coords.length, latlng; i < len; i++) {
		latlng = levelsDeep ?
			coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) :
			(_coordsToLatLng || coordsToLatLng)(coords[i]);

		latlngs.push(latlng);
	}

	return latlngs;
}

// @function latLngToCoords(latlng: LatLng, precision?: Number): Array
// Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
function latLngToCoords(latlng, precision) {
	precision = typeof precision === 'number' ? precision : 6;
	return latlng.alt !== undefined ?
		[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] :
		[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];
}

// @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean): Array
// Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
// `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
	var coords = [];

	for (var i = 0, len = latlngs.length; i < len; i++) {
		coords.push(levelsDeep ?
			latLngsToCoords(latlngs[i], levelsDeep - 1, closed, precision) :
			latLngToCoords(latlngs[i], precision));
	}

	if (!levelsDeep && closed) {
		coords.push(coords[0]);
	}

	return coords;
}

function getFeature(layer, newGeometry) {
	return layer.feature ?
		extend({}, layer.feature, {geometry: newGeometry}) :
		asFeature(newGeometry);
}

// @function asFeature(geojson: Object): Object
// Normalize GeoJSON geometries/features into GeoJSON features.
function asFeature(geojson) {
	if (geojson.type === 'Feature' || geojson.type === 'FeatureCollection') {
		return geojson;
	}

	return {
		type: 'Feature',
		properties: {},
		geometry: geojson
	};
}

var PointToGeoJSON = {
	toGeoJSON: function (precision) {
		return getFeature(this, {
			type: 'Point',
			coordinates: latLngToCoords(this.getLatLng(), precision)
		});
	}
};

// @namespace Marker
// @section Other methods
// @method toGeoJSON(precision?: Number): Object
// `precision` is the number of decimal places for coordinates.
// The default value is 6 places.
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
Marker.include(PointToGeoJSON);

// @namespace CircleMarker
// @method toGeoJSON(precision?: Number): Object
// `precision` is the number of decimal places for coordinates.
// The default value is 6 places.
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
Circle.include(PointToGeoJSON);
CircleMarker.include(PointToGeoJSON);


// @namespace Polyline
// @method toGeoJSON(precision?: Number): Object
// `precision` is the number of decimal places for coordinates.
// The default value is 6 places.
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
Polyline.include({
	toGeoJSON: function (precision) {
		var multi = !isFlat(this._latlngs);

		var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);

		return getFeature(this, {
			type: (multi ? 'Multi' : '') + 'LineString',
			coordinates: coords
		});
	}
});

// @namespace Polygon
// @method toGeoJSON(precision?: Number): Object
// `precision` is the number of decimal places for coordinates.
// The default value is 6 places.
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
Polygon.include({
	toGeoJSON: function (precision) {
		var holes = !isFlat(this._latlngs),
		    multi = holes && !isFlat(this._latlngs[0]);

		var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);

		if (!holes) {
			coords = [coords];
		}

		return getFeature(this, {
			type: (multi ? 'Multi' : '') + 'Polygon',
			coordinates: coords
		});
	}
});


// @namespace LayerGroup
LayerGroup.include({
	toMultiPoint: function (precision) {
		var coords = [];

		this.eachLayer(function (layer) {
			coords.push(layer.toGeoJSON(precision).geometry.coordinates);
		});

		return getFeature(this, {
			type: 'MultiPoint',
			coordinates: coords
		});
	},

	// @method toGeoJSON(precision?: Number): Object
	// `precision` is the number of decimal places for coordinates.
	// The default value is 6 places.
	// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
	toGeoJSON: function (precision) {

		var type = this.feature && this.feature.geometry && this.feature.geometry.type;

		if (type === 'MultiPoint') {
			return this.toMultiPoint(precision);
		}

		var isGeometryCollection = type === 'GeometryCollection',
		    jsons = [];

		this.eachLayer(function (layer) {
			if (layer.toGeoJSON) {
				var json = layer.toGeoJSON(precision);
				if (isGeometryCollection) {
					jsons.push(json.geometry);
				} else {
					var feature = asFeature(json);
					// Squash nested feature collections
					if (feature.type === 'FeatureCollection') {
						jsons.push.apply(jsons, feature.features);
					} else {
						jsons.push(feature);
					}
				}
			}
		});

		if (isGeometryCollection) {
			return getFeature(this, {
				geometries: jsons,
				type: 'GeometryCollection'
			});
		}

		return {
			type: 'FeatureCollection',
			features: jsons
		};
	}
});

// @namespace GeoJSON
// @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
// Creates a GeoJSON layer. Optionally accepts an object in
// [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
// (you can alternatively add it later with `addData` method) and an `options` object.
function geoJSON(geojson, options) {
	return new GeoJSON(geojson, options);
}

// Backward compatibility.
var geoJson = geoJSON;

/*
 * @class ImageOverlay
 * @aka L.ImageOverlay
 * @inherits Interactive layer
 *
 * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
 * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
 * L.imageOverlay(imageUrl, imageBounds).addTo(map);
 * ```
 */

var ImageOverlay = Layer.extend({

	// @section
	// @aka ImageOverlay options
	options: {
		// @option opacity: Number = 1.0
		// The opacity of the image overlay.
		opacity: 1,

		// @option alt: String = ''
		// Text for the `alt` attribute of the image (useful for accessibility).
		alt: '',

		// @option interactive: Boolean = false
		// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
		interactive: false,

		// @option crossOrigin: Boolean|String = false
		// Whether the crossOrigin attribute will be added to the image.
		// If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
		// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
		crossOrigin: false,

		// @option errorOverlayUrl: String = ''
		// URL to the overlay image to show in place of the overlay that failed to load.
		errorOverlayUrl: '',

		// @option zIndex: Number = 1
		// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
		zIndex: 1,

		// @option className: String = ''
		// A custom class name to assign to the image. Empty by default.
		className: ''
	},

	initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)
		this._url = url;
		this._bounds = toLatLngBounds(bounds);

		setOptions(this, options);
	},

	onAdd: function () {
		if (!this._image) {
			this._initImage();

			if (this.options.opacity < 1) {
				this._updateOpacity();
			}
		}

		if (this.options.interactive) {
			addClass(this._image, 'leaflet-interactive');
			this.addInteractiveTarget(this._image);
		}

		this.getPane().appendChild(this._image);
		this._reset();
	},

	onRemove: function () {
		remove(this._image);
		if (this.options.interactive) {
			this.removeInteractiveTarget(this._image);
		}
	},

	// @method setOpacity(opacity: Number): this
	// Sets the opacity of the overlay.
	setOpacity: function (opacity) {
		this.options.opacity = opacity;

		if (this._image) {
			this._updateOpacity();
		}
		return this;
	},

	setStyle: function (styleOpts) {
		if (styleOpts.opacity) {
			this.setOpacity(styleOpts.opacity);
		}
		return this;
	},

	// @method bringToFront(): this
	// Brings the layer to the top of all overlays.
	bringToFront: function () {
		if (this._map) {
			toFront(this._image);
		}
		return this;
	},

	// @method bringToBack(): this
	// Brings the layer to the bottom of all overlays.
	bringToBack: function () {
		if (this._map) {
			toBack(this._image);
		}
		return this;
	},

	// @method setUrl(url: String): this
	// Changes the URL of the image.
	setUrl: function (url) {
		this._url = url;

		if (this._image) {
			this._image.src = url;
		}
		return this;
	},

	// @method setBounds(bounds: LatLngBounds): this
	// Update the bounds that this ImageOverlay covers
	setBounds: function (bounds) {
		this._bounds = toLatLngBounds(bounds);

		if (this._map) {
			this._reset();
		}
		return this;
	},

	getEvents: function () {
		var events = {
			zoom: this._reset,
			viewreset: this._reset
		};

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}

		return events;
	},

	// @method setZIndex(value: Number): this
	// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
	setZIndex: function (value) {
		this.options.zIndex = value;
		this._updateZIndex();
		return this;
	},

	// @method getBounds(): LatLngBounds
	// Get the bounds that this ImageOverlay covers
	getBounds: function () {
		return this._bounds;
	},

	// @method getElement(): HTMLElement
	// Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
	// used by this overlay.
	getElement: function () {
		return this._image;
	},

	_initImage: function () {
		var wasElementSupplied = this._url.tagName === 'IMG';
		var img = this._image = wasElementSupplied ? this._url : create$1('img');

		addClass(img, 'leaflet-image-layer');
		if (this._zoomAnimated) { addClass(img, 'leaflet-zoom-animated'); }
		if (this.options.className) { addClass(img, this.options.className); }

		img.onselectstart = falseFn;
		img.onmousemove = falseFn;

		// @event load: Event
		// Fired when the ImageOverlay layer has loaded its image
		img.onload = bind(this.fire, this, 'load');
		img.onerror = bind(this._overlayOnError, this, 'error');

		if (this.options.crossOrigin || this.options.crossOrigin === '') {
			img.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;
		}

		if (this.options.zIndex) {
			this._updateZIndex();
		}

		if (wasElementSupplied) {
			this._url = img.src;
			return;
		}

		img.src = this._url;
		img.alt = this.options.alt;
	},

	_animateZoom: function (e) {
		var scale = this._map.getZoomScale(e.zoom),
		    offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;

		setTransform(this._image, offset, scale);
	},

	_reset: function () {
		var image = this._image,
		    bounds = new Bounds(
		        this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
		        this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
		    size = bounds.getSize();

		setPosition(image, bounds.min);

		image.style.width  = size.x + 'px';
		image.style.height = size.y + 'px';
	},

	_updateOpacity: function () {
		setOpacity(this._image, this.options.opacity);
	},

	_updateZIndex: function () {
		if (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) {
			this._image.style.zIndex = this.options.zIndex;
		}
	},

	_overlayOnError: function () {
		// @event error: Event
		// Fired when the ImageOverlay layer fails to load its image
		this.fire('error');

		var errorUrl = this.options.errorOverlayUrl;
		if (errorUrl && this._url !== errorUrl) {
			this._url = errorUrl;
			this._image.src = errorUrl;
		}
	}
});

// @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)
// Instantiates an image overlay object given the URL of the image and the
// geographical bounds it is tied to.
var imageOverlay = function (url, bounds, options) {
	return new ImageOverlay(url, bounds, options);
};

/*
 * @class VideoOverlay
 * @aka L.VideoOverlay
 * @inherits ImageOverlay
 *
 * Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.
 *
 * A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)
 * HTML5 element.
 *
 * @example
 *
 * ```js
 * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
 * 	videoBounds = [[ 32, -130], [ 13, -100]];
 * L.videoOverlay(videoUrl, videoBounds ).addTo(map);
 * ```
 */

var VideoOverlay = ImageOverlay.extend({

	// @section
	// @aka VideoOverlay options
	options: {
		// @option autoplay: Boolean = true
		// Whether the video starts playing automatically when loaded.
		autoplay: true,

		// @option loop: Boolean = true
		// Whether the video will loop back to the beginning when played.
		loop: true,

		// @option keepAspectRatio: Boolean = true
		// Whether the video will save aspect ratio after the projection.
		// Relevant for supported browsers. Browser compatibility- https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
		keepAspectRatio: true
	},

	_initImage: function () {
		var wasElementSupplied = this._url.tagName === 'VIDEO';
		var vid = this._image = wasElementSupplied ? this._url : create$1('video');

		addClass(vid, 'leaflet-image-layer');
		if (this._zoomAnimated) { addClass(vid, 'leaflet-zoom-animated'); }
		if (this.options.className) { addClass(vid, this.options.className); }

		vid.onselectstart = falseFn;
		vid.onmousemove = falseFn;

		// @event load: Event
		// Fired when the video has finished loading the first frame
		vid.onloadeddata = bind(this.fire, this, 'load');

		if (wasElementSupplied) {
			var sourceElements = vid.getElementsByTagName('source');
			var sources = [];
			for (var j = 0; j < sourceElements.length; j++) {
				sources.push(sourceElements[j].src);
			}

			this._url = (sourceElements.length > 0) ? sources : [vid.src];
			return;
		}

		if (!isArray(this._url)) { this._url = [this._url]; }

		if (!this.options.keepAspectRatio && vid.style.hasOwnProperty('objectFit')) { vid.style['objectFit'] = 'fill'; }
		vid.autoplay = !!this.options.autoplay;
		vid.loop = !!this.options.loop;
		for (var i = 0; i < this._url.length; i++) {
			var source = create$1('source');
			source.src = this._url[i];
			vid.appendChild(source);
		}
	}

	// @method getElement(): HTMLVideoElement
	// Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
	// used by this overlay.
});


// @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
// Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
// geographical bounds it is tied to.

function videoOverlay(video, bounds, options) {
	return new VideoOverlay(video, bounds, options);
}

/*
 * @class SVGOverlay
 * @aka L.SVGOverlay
 * @inherits ImageOverlay
 *
 * Used to load, display and provide DOM access to an SVG file over specific bounds of the map. Extends `ImageOverlay`.
 *
 * An SVG overlay uses the [`<svg>`](https://developer.mozilla.org/docs/Web/SVG/Element/svg) element.
 *
 * @example
 *
 * ```js
 * var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
 * svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
 * svgElement.setAttribute('viewBox', "0 0 200 200");
 * svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
 * var svgElementBounds = [ [ 32, -130 ], [ 13, -100 ] ];
 * L.svgOverlay(svgElement, svgElementBounds).addTo(map);
 * ```
 */

var SVGOverlay = ImageOverlay.extend({
	_initImage: function () {
		var el = this._image = this._url;

		addClass(el, 'leaflet-image-layer');
		if (this._zoomAnimated) { addClass(el, 'leaflet-zoom-animated'); }
		if (this.options.className) { addClass(el, this.options.className); }

		el.onselectstart = falseFn;
		el.onmousemove = falseFn;
	}

	// @method getElement(): SVGElement
	// Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
	// used by this overlay.
});


// @factory L.svgOverlay(svg: String|SVGElement, bounds: LatLngBounds, options?: SVGOverlay options)
// Instantiates an image overlay object given an SVG element and the geographical bounds it is tied to.
// A viewBox attribute is required on the SVG element to zoom in and out properly.

function svgOverlay(el, bounds, options) {
	return new SVGOverlay(el, bounds, options);
}

/*
 * @class DivOverlay
 * @inherits Layer
 * @aka L.DivOverlay
 * Base model for L.Popup and L.Tooltip. Inherit from it for custom popup like plugins.
 */

// @namespace DivOverlay
var DivOverlay = Layer.extend({

	// @section
	// @aka DivOverlay options
	options: {
		// @option offset: Point = Point(0, 7)
		// The offset of the popup position. Useful to control the anchor
		// of the popup when opening it on some overlays.
		offset: [0, 7],

		// @option className: String = ''
		// A custom CSS class name to assign to the popup.
		className: '',

		// @option pane: String = 'popupPane'
		// `Map pane` where the popup will be added.
		pane: 'popupPane'
	},

	initialize: function (options, source) {
		setOptions(this, options);

		this._source = source;
	},

	onAdd: function (map) {
		this._zoomAnimated = map._zoomAnimated;

		if (!this._container) {
			this._initLayout();
		}

		if (map._fadeAnimated) {
			setOpacity(this._container, 0);
		}

		clearTimeout(this._removeTimeout);
		this.getPane().appendChild(this._container);
		this.update();

		if (map._fadeAnimated) {
			setOpacity(this._container, 1);
		}

		this.bringToFront();
	},

	onRemove: function (map) {
		if (map._fadeAnimated) {
			setOpacity(this._container, 0);
			this._removeTimeout = setTimeout(bind(remove, undefined, this._container), 200);
		} else {
			remove(this._container);
		}
	},

	// @namespace Popup
	// @method getLatLng: LatLng
	// Returns the geographical point of popup.
	getLatLng: function () {
		return this._latlng;
	},

	// @method setLatLng(latlng: LatLng): this
	// Sets the geographical point where the popup will open.
	setLatLng: function (latlng) {
		this._latlng = toLatLng(latlng);
		if (this._map) {
			this._updatePosition();
			this._adjustPan();
		}
		return this;
	},

	// @method getContent: String|HTMLElement
	// Returns the content of the popup.
	getContent: function () {
		return this._content;
	},

	// @method setContent(htmlContent: String|HTMLElement|Function): this
	// Sets the HTML content of the popup. If a function is passed the source layer will be passed to the function. The function should return a `String` or `HTMLElement` to be used in the popup.
	setContent: function (content) {
		this._content = content;
		this.update();
		return this;
	},

	// @method getElement: String|HTMLElement
	// Alias for [getContent()](#popup-getcontent)
	getElement: function () {
		return this._container;
	},

	// @method update: null
	// Updates the popup content, layout and position. Useful for updating the popup after something inside changed, e.g. image loaded.
	update: function () {
		if (!this._map) { return; }

		this._container.style.visibility = 'hidden';

		this._updateContent();
		this._updateLayout();
		this._updatePosition();

		this._container.style.visibility = '';

		this._adjustPan();
	},

	getEvents: function () {
		var events = {
			zoom: this._updatePosition,
			viewreset: this._updatePosition
		};

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}
		return events;
	},

	// @method isOpen: Boolean
	// Returns `true` when the popup is visible on the map.
	isOpen: function () {
		return !!this._map && this._map.hasLayer(this);
	},

	// @method bringToFront: this
	// Brings this popup in front of other popups (in the same map pane).
	bringToFront: function () {
		if (this._map) {
			toFront(this._container);
		}
		return this;
	},

	// @method bringToBack: this
	// Brings this popup to the back of other popups (in the same map pane).
	bringToBack: function () {
		if (this._map) {
			toBack(this._container);
		}
		return this;
	},

	_prepareOpen: function (parent, layer, latlng) {
		if (!(layer instanceof Layer)) {
			latlng = layer;
			layer = parent;
		}

		if (layer instanceof FeatureGroup) {
			for (var id in parent._layers) {
				layer = parent._layers[id];
				break;
			}
		}

		if (!latlng) {
			if (layer.getCenter) {
				latlng = layer.getCenter();
			} else if (layer.getLatLng) {
				latlng = layer.getLatLng();
			} else {
				throw new Error('Unable to get source layer LatLng.');
			}
		}

		// set overlay source to this layer
		this._source = layer;

		// update the overlay (content, layout, ect...)
		this.update();

		return latlng;
	},

	_updateContent: function () {
		if (!this._content) { return; }

		var node = this._contentNode;
		var content = (typeof this._content === 'function') ? this._content(this._source || this) : this._content;

		if (typeof content === 'string') {
			node.innerHTML = content;
		} else {
			while (node.hasChildNodes()) {
				node.removeChild(node.firstChild);
			}
			node.appendChild(content);
		}
		this.fire('contentupdate');
	},

	_updatePosition: function () {
		if (!this._map) { return; }

		var pos = this._map.latLngToLayerPoint(this._latlng),
		    offset = toPoint(this.options.offset),
		    anchor = this._getAnchor();

		if (this._zoomAnimated) {
			setPosition(this._container, pos.add(anchor));
		} else {
			offset = offset.add(pos).add(anchor);
		}

		var bottom = this._containerBottom = -offset.y,
		    left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;

		// bottom position the popup in case the height of the popup changes (images loading etc)
		this._container.style.bottom = bottom + 'px';
		this._container.style.left = left + 'px';
	},

	_getAnchor: function () {
		return [0, 0];
	}

});

/*
 * @class Popup
 * @inherits DivOverlay
 * @aka L.Popup
 * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
 * open popups while making sure that only one popup is open at one time
 * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
 *
 * @example
 *
 * If you want to just bind a popup to marker click and then open it, it's really easy:
 *
 * ```js
 * marker.bindPopup(popupContent).openPopup();
 * ```
 * Path overlays like polylines also have a `bindPopup` method.
 * Here's a more complicated way to open a popup on a map:
 *
 * ```js
 * var popup = L.popup()
 * 	.setLatLng(latlng)
 * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
 * 	.openOn(map);
 * ```
 */


// @namespace Popup
var Popup = DivOverlay.extend({

	// @section
	// @aka Popup options
	options: {
		// @option maxWidth: Number = 300
		// Max width of the popup, in pixels.
		maxWidth: 300,

		// @option minWidth: Number = 50
		// Min width of the popup, in pixels.
		minWidth: 50,

		// @option maxHeight: Number = null
		// If set, creates a scrollable container of the given height
		// inside a popup if its content exceeds it.
		maxHeight: null,

		// @option autoPan: Boolean = true
		// Set it to `false` if you don't want the map to do panning animation
		// to fit the opened popup.
		autoPan: true,

		// @option autoPanPaddingTopLeft: Point = null
		// The margin between the popup and the top left corner of the map
		// view after autopanning was performed.
		autoPanPaddingTopLeft: null,

		// @option autoPanPaddingBottomRight: Point = null
		// The margin between the popup and the bottom right corner of the map
		// view after autopanning was performed.
		autoPanPaddingBottomRight: null,

		// @option autoPanPadding: Point = Point(5, 5)
		// Equivalent of setting both top left and bottom right autopan padding to the same value.
		autoPanPadding: [5, 5],

		// @option keepInView: Boolean = false
		// Set it to `true` if you want to prevent users from panning the popup
		// off of the screen while it is open.
		keepInView: false,

		// @option closeButton: Boolean = true
		// Controls the presence of a close button in the popup.
		closeButton: true,

		// @option autoClose: Boolean = true
		// Set it to `false` if you want to override the default behavior of
		// the popup closing when another popup is opened.
		autoClose: true,

		// @option closeOnEscapeKey: Boolean = true
		// Set it to `false` if you want to override the default behavior of
		// the ESC key for closing of the popup.
		closeOnEscapeKey: true,

		// @option closeOnClick: Boolean = *
		// Set it if you want to override the default behavior of the popup closing when user clicks
		// on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.

		// @option className: String = ''
		// A custom CSS class name to assign to the popup.
		className: ''
	},

	// @namespace Popup
	// @method openOn(map: Map): this
	// Adds the popup to the map and closes the previous one. The same as `map.openPopup(popup)`.
	openOn: function (map) {
		map.openPopup(this);
		return this;
	},

	onAdd: function (map) {
		DivOverlay.prototype.onAdd.call(this, map);

		// @namespace Map
		// @section Popup events
		// @event popupopen: PopupEvent
		// Fired when a popup is opened in the map
		map.fire('popupopen', {popup: this});

		if (this._source) {
			// @namespace Layer
			// @section Popup events
			// @event popupopen: PopupEvent
			// Fired when a popup bound to this layer is opened
			this._source.fire('popupopen', {popup: this}, true);
			// For non-path layers, we toggle the popup when clicking
			// again the layer, so prevent the map to reopen it.
			if (!(this._source instanceof Path)) {
				this._source.on('preclick', stopPropagation);
			}
		}
	},

	onRemove: function (map) {
		DivOverlay.prototype.onRemove.call(this, map);

		// @namespace Map
		// @section Popup events
		// @event popupclose: PopupEvent
		// Fired when a popup in the map is closed
		map.fire('popupclose', {popup: this});

		if (this._source) {
			// @namespace Layer
			// @section Popup events
			// @event popupclose: PopupEvent
			// Fired when a popup bound to this layer is closed
			this._source.fire('popupclose', {popup: this}, true);
			if (!(this._source instanceof Path)) {
				this._source.off('preclick', stopPropagation);
			}
		}
	},

	getEvents: function () {
		var events = DivOverlay.prototype.getEvents.call(this);

		if (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
			events.preclick = this._close;
		}

		if (this.options.keepInView) {
			events.moveend = this._adjustPan;
		}

		return events;
	},

	_close: function () {
		if (this._map) {
			this._map.closePopup(this);
		}
	},

	_initLayout: function () {
		var prefix = 'leaflet-popup',
		    container = this._container = create$1('div',
			prefix + ' ' + (this.options.className || '') +
			' leaflet-zoom-animated');

		var wrapper = this._wrapper = create$1('div', prefix + '-content-wrapper', container);
		this._contentNode = create$1('div', prefix + '-content', wrapper);

		disableClickPropagation(wrapper);
		disableScrollPropagation(this._contentNode);
		on(wrapper, 'contextmenu', stopPropagation);

		this._tipContainer = create$1('div', prefix + '-tip-container', container);
		this._tip = create$1('div', prefix + '-tip', this._tipContainer);

		if (this.options.closeButton) {
			var closeButton = this._closeButton = create$1('a', prefix + '-close-button', container);
			closeButton.href = '#close';
			closeButton.innerHTML = '&#215;';

			on(closeButton, 'click', this._onCloseButtonClick, this);
		}
	},

	_updateLayout: function () {
		var container = this._contentNode,
		    style = container.style;

		style.width = '';
		style.whiteSpace = 'nowrap';

		var width = container.offsetWidth;
		width = Math.min(width, this.options.maxWidth);
		width = Math.max(width, this.options.minWidth);

		style.width = (width + 1) + 'px';
		style.whiteSpace = '';

		style.height = '';

		var height = container.offsetHeight,
		    maxHeight = this.options.maxHeight,
		    scrolledClass = 'leaflet-popup-scrolled';

		if (maxHeight && height > maxHeight) {
			style.height = maxHeight + 'px';
			addClass(container, scrolledClass);
		} else {
			removeClass(container, scrolledClass);
		}

		this._containerWidth = this._container.offsetWidth;
	},

	_animateZoom: function (e) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),
		    anchor = this._getAnchor();
		setPosition(this._container, pos.add(anchor));
	},

	_adjustPan: function () {
		if (!this.options.autoPan) { return; }
		if (this._map._panAnim) { this._map._panAnim.stop(); }

		var map = this._map,
		    marginBottom = parseInt(getStyle(this._container, 'marginBottom'), 10) || 0,
		    containerHeight = this._container.offsetHeight + marginBottom,
		    containerWidth = this._containerWidth,
		    layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);

		layerPos._add(getPosition(this._container));

		var containerPos = map.layerPointToContainerPoint(layerPos),
		    padding = toPoint(this.options.autoPanPadding),
		    paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding),
		    paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding),
		    size = map.getSize(),
		    dx = 0,
		    dy = 0;

		if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right
			dx = containerPos.x + containerWidth - size.x + paddingBR.x;
		}
		if (containerPos.x - dx - paddingTL.x < 0) { // left
			dx = containerPos.x - paddingTL.x;
		}
		if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom
			dy = containerPos.y + containerHeight - size.y + paddingBR.y;
		}
		if (containerPos.y - dy - paddingTL.y < 0) { // top
			dy = containerPos.y - paddingTL.y;
		}

		// @namespace Map
		// @section Popup events
		// @event autopanstart: Event
		// Fired when the map starts autopanning when opening a popup.
		if (dx || dy) {
			map
			    .fire('autopanstart')
			    .panBy([dx, dy]);
		}
	},

	_onCloseButtonClick: function (e) {
		this._close();
		stop(e);
	},

	_getAnchor: function () {
		// Where should we anchor the popup on the source layer?
		return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
	}

});

// @namespace Popup
// @factory L.popup(options?: Popup options, source?: Layer)
// Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.
var popup = function (options, source) {
	return new Popup(options, source);
};


/* @namespace Map
 * @section Interaction Options
 * @option closePopupOnClick: Boolean = true
 * Set it to `false` if you don't want popups to close when user clicks the map.
 */
Map.mergeOptions({
	closePopupOnClick: true
});


// @namespace Map
// @section Methods for Layers and Controls
Map.include({
	// @method openPopup(popup: Popup): this
	// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
	// @alternative
	// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
	// Creates a popup with the specified content and options and opens it in the given point on a map.
	openPopup: function (popup, latlng, options) {
		if (!(popup instanceof Popup)) {
			popup = new Popup(options).setContent(popup);
		}

		if (latlng) {
			popup.setLatLng(latlng);
		}

		if (this.hasLayer(popup)) {
			return this;
		}

		if (this._popup && this._popup.options.autoClose) {
			this.closePopup();
		}

		this._popup = popup;
		return this.addLayer(popup);
	},

	// @method closePopup(popup?: Popup): this
	// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
	closePopup: function (popup) {
		if (!popup || popup === this._popup) {
			popup = this._popup;
			this._popup = null;
		}
		if (popup) {
			this.removeLayer(popup);
		}
		return this;
	}
});

/*
 * @namespace Layer
 * @section Popup methods example
 *
 * All layers share a set of methods convenient for binding popups to it.
 *
 * ```js
 * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
 * layer.openPopup();
 * layer.closePopup();
 * ```
 *
 * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
 */

// @section Popup methods
Layer.include({

	// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
	// Binds a popup to the layer with the passed `content` and sets up the
	// necessary event listeners. If a `Function` is passed it will receive
	// the layer as the first argument and should return a `String` or `HTMLElement`.
	bindPopup: function (content, options) {

		if (content instanceof Popup) {
			setOptions(content, options);
			this._popup = content;
			content._source = this;
		} else {
			if (!this._popup || options) {
				this._popup = new Popup(options, this);
			}
			this._popup.setContent(content);
		}

		if (!this._popupHandlersAdded) {
			this.on({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			});
			this._popupHandlersAdded = true;
		}

		return this;
	},

	// @method unbindPopup(): this
	// Removes the popup previously bound with `bindPopup`.
	unbindPopup: function () {
		if (this._popup) {
			this.off({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			});
			this._popupHandlersAdded = false;
			this._popup = null;
		}
		return this;
	},

	// @method openPopup(latlng?: LatLng): this
	// Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
	openPopup: function (layer, latlng) {
		if (this._popup && this._map) {
			latlng = this._popup._prepareOpen(this, layer, latlng);

			// open the popup on the map
			this._map.openPopup(this._popup, latlng);
		}

		return this;
	},

	// @method closePopup(): this
	// Closes the popup bound to this layer if it is open.
	closePopup: function () {
		if (this._popup) {
			this._popup._close();
		}
		return this;
	},

	// @method togglePopup(): this
	// Opens or closes the popup bound to this layer depending on its current state.
	togglePopup: function (target) {
		if (this._popup) {
			if (this._popup._map) {
				this.closePopup();
			} else {
				this.openPopup(target);
			}
		}
		return this;
	},

	// @method isPopupOpen(): boolean
	// Returns `true` if the popup bound to this layer is currently open.
	isPopupOpen: function () {
		return (this._popup ? this._popup.isOpen() : false);
	},

	// @method setPopupContent(content: String|HTMLElement|Popup): this
	// Sets the content of the popup bound to this layer.
	setPopupContent: function (content) {
		if (this._popup) {
			this._popup.setContent(content);
		}
		return this;
	},

	// @method getPopup(): Popup
	// Returns the popup bound to this layer.
	getPopup: function () {
		return this._popup;
	},

	_openPopup: function (e) {
		var layer = e.layer || e.target;

		if (!this._popup) {
			return;
		}

		if (!this._map) {
			return;
		}

		// prevent map click
		stop(e);

		// if this inherits from Path its a vector and we can just
		// open the popup at the new location
		if (layer instanceof Path) {
			this.openPopup(e.layer || e.target, e.latlng);
			return;
		}

		// otherwise treat it like a marker and figure out
		// if we should toggle it open/closed
		if (this._map.hasLayer(this._popup) && this._popup._source === layer) {
			this.closePopup();
		} else {
			this.openPopup(layer, e.latlng);
		}
	},

	_movePopup: function (e) {
		this._popup.setLatLng(e.latlng);
	},

	_onKeyPress: function (e) {
		if (e.originalEvent.keyCode === 13) {
			this._openPopup(e);
		}
	}
});

/*
 * @class Tooltip
 * @inherits DivOverlay
 * @aka L.Tooltip
 * Used to display small texts on top of map layers.
 *
 * @example
 *
 * ```js
 * marker.bindTooltip("my tooltip text").openTooltip();
 * ```
 * Note about tooltip offset. Leaflet takes two options in consideration
 * for computing tooltip offsetting:
 * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
 *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
 *   move it to the bottom. Negatives will move to the left and top.
 * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
 *   should adapt this value if you use a custom icon.
 */


// @namespace Tooltip
var Tooltip = DivOverlay.extend({

	// @section
	// @aka Tooltip options
	options: {
		// @option pane: String = 'tooltipPane'
		// `Map pane` where the tooltip will be added.
		pane: 'tooltipPane',

		// @option offset: Point = Point(0, 0)
		// Optional offset of the tooltip position.
		offset: [0, 0],

		// @option direction: String = 'auto'
		// Direction where to open the tooltip. Possible values are: `right`, `left`,
		// `top`, `bottom`, `center`, `auto`.
		// `auto` will dynamically switch between `right` and `left` according to the tooltip
		// position on the map.
		direction: 'auto',

		// @option permanent: Boolean = false
		// Whether to open the tooltip permanently or only on mouseover.
		permanent: false,

		// @option sticky: Boolean = false
		// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
		sticky: false,

		// @option interactive: Boolean = false
		// If true, the tooltip will listen to the feature events.
		interactive: false,

		// @option opacity: Number = 0.9
		// Tooltip container opacity.
		opacity: 0.9
	},

	onAdd: function (map) {
		DivOverlay.prototype.onAdd.call(this, map);
		this.setOpacity(this.options.opacity);

		// @namespace Map
		// @section Tooltip events
		// @event tooltipopen: TooltipEvent
		// Fired when a tooltip is opened in the map.
		map.fire('tooltipopen', {tooltip: this});

		if (this._source) {
			// @namespace Layer
			// @section Tooltip events
			// @event tooltipopen: TooltipEvent
			// Fired when a tooltip bound to this layer is opened.
			this._source.fire('tooltipopen', {tooltip: this}, true);
		}
	},

	onRemove: function (map) {
		DivOverlay.prototype.onRemove.call(this, map);

		// @namespace Map
		// @section Tooltip events
		// @event tooltipclose: TooltipEvent
		// Fired when a tooltip in the map is closed.
		map.fire('tooltipclose', {tooltip: this});

		if (this._source) {
			// @namespace Layer
			// @section Tooltip events
			// @event tooltipclose: TooltipEvent
			// Fired when a tooltip bound to this layer is closed.
			this._source.fire('tooltipclose', {tooltip: this}, true);
		}
	},

	getEvents: function () {
		var events = DivOverlay.prototype.getEvents.call(this);

		if (touch && !this.options.permanent) {
			events.preclick = this._close;
		}

		return events;
	},

	_close: function () {
		if (this._map) {
			this._map.closeTooltip(this);
		}
	},

	_initLayout: function () {
		var prefix = 'leaflet-tooltip',
		    className = prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

		this._contentNode = this._container = create$1('div', className);
	},

	_updateLayout: function () {},

	_adjustPan: function () {},

	_setPosition: function (pos) {
		var map = this._map,
		    container = this._container,
		    centerPoint = map.latLngToContainerPoint(map.getCenter()),
		    tooltipPoint = map.layerPointToContainerPoint(pos),
		    direction = this.options.direction,
		    tooltipWidth = container.offsetWidth,
		    tooltipHeight = container.offsetHeight,
		    offset = toPoint(this.options.offset),
		    anchor = this._getAnchor();

		if (direction === 'top') {
			pos = pos.add(toPoint(-tooltipWidth / 2 + offset.x, -tooltipHeight + offset.y + anchor.y, true));
		} else if (direction === 'bottom') {
			pos = pos.subtract(toPoint(tooltipWidth / 2 - offset.x, -offset.y, true));
		} else if (direction === 'center') {
			pos = pos.subtract(toPoint(tooltipWidth / 2 + offset.x, tooltipHeight / 2 - anchor.y + offset.y, true));
		} else if (direction === 'right' || direction === 'auto' && tooltipPoint.x < centerPoint.x) {
			direction = 'right';
			pos = pos.add(toPoint(offset.x + anchor.x, anchor.y - tooltipHeight / 2 + offset.y, true));
		} else {
			direction = 'left';
			pos = pos.subtract(toPoint(tooltipWidth + anchor.x - offset.x, tooltipHeight / 2 - anchor.y - offset.y, true));
		}

		removeClass(container, 'leaflet-tooltip-right');
		removeClass(container, 'leaflet-tooltip-left');
		removeClass(container, 'leaflet-tooltip-top');
		removeClass(container, 'leaflet-tooltip-bottom');
		addClass(container, 'leaflet-tooltip-' + direction);
		setPosition(container, pos);
	},

	_updatePosition: function () {
		var pos = this._map.latLngToLayerPoint(this._latlng);
		this._setPosition(pos);
	},

	setOpacity: function (opacity) {
		this.options.opacity = opacity;

		if (this._container) {
			setOpacity(this._container, opacity);
		}
	},

	_animateZoom: function (e) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
		this._setPosition(pos);
	},

	_getAnchor: function () {
		// Where should we anchor the tooltip on the source layer?
		return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
	}

});

// @namespace Tooltip
// @factory L.tooltip(options?: Tooltip options, source?: Layer)
// Instantiates a Tooltip object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.
var tooltip = function (options, source) {
	return new Tooltip(options, source);
};

// @namespace Map
// @section Methods for Layers and Controls
Map.include({

	// @method openTooltip(tooltip: Tooltip): this
	// Opens the specified tooltip.
	// @alternative
	// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
	// Creates a tooltip with the specified content and options and open it.
	openTooltip: function (tooltip, latlng, options) {
		if (!(tooltip instanceof Tooltip)) {
			tooltip = new Tooltip(options).setContent(tooltip);
		}

		if (latlng) {
			tooltip.setLatLng(latlng);
		}

		if (this.hasLayer(tooltip)) {
			return this;
		}

		return this.addLayer(tooltip);
	},

	// @method closeTooltip(tooltip?: Tooltip): this
	// Closes the tooltip given as parameter.
	closeTooltip: function (tooltip) {
		if (tooltip) {
			this.removeLayer(tooltip);
		}
		return this;
	}

});

/*
 * @namespace Layer
 * @section Tooltip methods example
 *
 * All layers share a set of methods convenient for binding tooltips to it.
 *
 * ```js
 * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
 * layer.openTooltip();
 * layer.closeTooltip();
 * ```
 */

// @section Tooltip methods
Layer.include({

	// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
	// Binds a tooltip to the layer with the passed `content` and sets up the
	// necessary event listeners. If a `Function` is passed it will receive
	// the layer as the first argument and should return a `String` or `HTMLElement`.
	bindTooltip: function (content, options) {

		if (content instanceof Tooltip) {
			setOptions(content, options);
			this._tooltip = content;
			content._source = this;
		} else {
			if (!this._tooltip || options) {
				this._tooltip = new Tooltip(options, this);
			}
			this._tooltip.setContent(content);

		}

		this._initTooltipInteractions();

		if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
			this.openTooltip();
		}

		return this;
	},

	// @method unbindTooltip(): this
	// Removes the tooltip previously bound with `bindTooltip`.
	unbindTooltip: function () {
		if (this._tooltip) {
			this._initTooltipInteractions(true);
			this.closeTooltip();
			this._tooltip = null;
		}
		return this;
	},

	_initTooltipInteractions: function (remove$$1) {
		if (!remove$$1 && this._tooltipHandlersAdded) { return; }
		var onOff = remove$$1 ? 'off' : 'on',
		    events = {
			remove: this.closeTooltip,
			move: this._moveTooltip
		    };
		if (!this._tooltip.options.permanent) {
			events.mouseover = this._openTooltip;
			events.mouseout = this.closeTooltip;
			if (this._tooltip.options.sticky) {
				events.mousemove = this._moveTooltip;
			}
			if (touch) {
				events.click = this._openTooltip;
			}
		} else {
			events.add = this._openTooltip;
		}
		this[onOff](events);
		this._tooltipHandlersAdded = !remove$$1;
	},

	// @method openTooltip(latlng?: LatLng): this
	// Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
	openTooltip: function (layer, latlng) {
		if (this._tooltip && this._map) {
			latlng = this._tooltip._prepareOpen(this, layer, latlng);

			// open the tooltip on the map
			this._map.openTooltip(this._tooltip, latlng);

			// Tooltip container may not be defined if not permanent and never
			// opened.
			if (this._tooltip.options.interactive && this._tooltip._container) {
				addClass(this._tooltip._container, 'leaflet-clickable');
				this.addInteractiveTarget(this._tooltip._container);
			}
		}

		return this;
	},

	// @method closeTooltip(): this
	// Closes the tooltip bound to this layer if it is open.
	closeTooltip: function () {
		if (this._tooltip) {
			this._tooltip._close();
			if (this._tooltip.options.interactive && this._tooltip._container) {
				removeClass(this._tooltip._container, 'leaflet-clickable');
				this.removeInteractiveTarget(this._tooltip._container);
			}
		}
		return this;
	},

	// @method toggleTooltip(): this
	// Opens or closes the tooltip bound to this layer depending on its current state.
	toggleTooltip: function (target) {
		if (this._tooltip) {
			if (this._tooltip._map) {
				this.closeTooltip();
			} else {
				this.openTooltip(target);
			}
		}
		return this;
	},

	// @method isTooltipOpen(): boolean
	// Returns `true` if the tooltip bound to this layer is currently open.
	isTooltipOpen: function () {
		return this._tooltip.isOpen();
	},

	// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
	// Sets the content of the tooltip bound to this layer.
	setTooltipContent: function (content) {
		if (this._tooltip) {
			this._tooltip.setContent(content);
		}
		return this;
	},

	// @method getTooltip(): Tooltip
	// Returns the tooltip bound to this layer.
	getTooltip: function () {
		return this._tooltip;
	},

	_openTooltip: function (e) {
		var layer = e.layer || e.target;

		if (!this._tooltip || !this._map) {
			return;
		}
		this.openTooltip(layer, this._tooltip.options.sticky ? e.latlng : undefined);
	},

	_moveTooltip: function (e) {
		var latlng = e.latlng, containerPoint, layerPoint;
		if (this._tooltip.options.sticky && e.originalEvent) {
			containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
			layerPoint = this._map.containerPointToLayerPoint(containerPoint);
			latlng = this._map.layerPointToLatLng(layerPoint);
		}
		this._tooltip.setLatLng(latlng);
	}
});

/*
 * @class DivIcon
 * @aka L.DivIcon
 * @inherits Icon
 *
 * Represents a lightweight icon for markers that uses a simple `<div>`
 * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
 *
 * @example
 * ```js
 * var myIcon = L.divIcon({className: 'my-div-icon'});
 * // you can set .my-div-icon styles in CSS
 *
 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
 * ```
 *
 * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
 */

var DivIcon = Icon.extend({
	options: {
		// @section
		// @aka DivIcon options
		iconSize: [12, 12], // also can be set through CSS

		// iconAnchor: (Point),
		// popupAnchor: (Point),

		// @option html: String|HTMLElement = ''
		// Custom HTML code to put inside the div element, empty by default. Alternatively,
		// an instance of `HTMLElement`.
		html: false,

		// @option bgPos: Point = [0, 0]
		// Optional relative position of the background, in pixels
		bgPos: null,

		className: 'leaflet-div-icon'
	},

	createIcon: function (oldIcon) {
		var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
		    options = this.options;

		if (options.html instanceof Element) {
			empty(div);
			div.appendChild(options.html);
		} else {
			div.innerHTML = options.html !== false ? options.html : '';
		}

		if (options.bgPos) {
			var bgPos = toPoint(options.bgPos);
			div.style.backgroundPosition = (-bgPos.x) + 'px ' + (-bgPos.y) + 'px';
		}
		this._setIconStyles(div, 'icon');

		return div;
	},

	createShadow: function () {
		return null;
	}
});

// @factory L.divIcon(options: DivIcon options)
// Creates a `DivIcon` instance with the given options.
function divIcon(options) {
	return new DivIcon(options);
}

Icon.Default = IconDefault;

/*
 * @class GridLayer
 * @inherits Layer
 * @aka L.GridLayer
 *
 * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
 * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
 *
 *
 * @section Synchronous usage
 * @example
 *
 * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
 *
 * ```js
 * var CanvasLayer = L.GridLayer.extend({
 *     createTile: function(coords){
 *         // create a <canvas> element for drawing
 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
 *
 *         // setup tile width and height according to the options
 *         var size = this.getTileSize();
 *         tile.width = size.x;
 *         tile.height = size.y;
 *
 *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
 *         var ctx = tile.getContext('2d');
 *
 *         // return the tile so it can be rendered on screen
 *         return tile;
 *     }
 * });
 * ```
 *
 * @section Asynchronous usage
 * @example
 *
 * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
 *
 * ```js
 * var CanvasLayer = L.GridLayer.extend({
 *     createTile: function(coords, done){
 *         var error;
 *
 *         // create a <canvas> element for drawing
 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
 *
 *         // setup tile width and height according to the options
 *         var size = this.getTileSize();
 *         tile.width = size.x;
 *         tile.height = size.y;
 *
 *         // draw something asynchronously and pass the tile to the done() callback
 *         setTimeout(function() {
 *             done(error, tile);
 *         }, 1000);
 *
 *         return tile;
 *     }
 * });
 * ```
 *
 * @section
 */


var GridLayer = Layer.extend({

	// @section
	// @aka GridLayer options
	options: {
		// @option tileSize: Number|Point = 256
		// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
		tileSize: 256,

		// @option opacity: Number = 1.0
		// Opacity of the tiles. Can be used in the `createTile()` function.
		opacity: 1,

		// @option updateWhenIdle: Boolean = (depends)
		// Load new tiles only when panning ends.
		// `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
		// `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
		// [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
		updateWhenIdle: mobile,

		// @option updateWhenZooming: Boolean = true
		// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
		updateWhenZooming: true,

		// @option updateInterval: Number = 200
		// Tiles will not update more than once every `updateInterval` milliseconds when panning.
		updateInterval: 200,

		// @option zIndex: Number = 1
		// The explicit zIndex of the tile layer.
		zIndex: 1,

		// @option bounds: LatLngBounds = undefined
		// If set, tiles will only be loaded inside the set `LatLngBounds`.
		bounds: null,

		// @option minZoom: Number = 0
		// The minimum zoom level down to which this layer will be displayed (inclusive).
		minZoom: 0,

		// @option maxZoom: Number = undefined
		// The maximum zoom level up to which this layer will be displayed (inclusive).
		maxZoom: undefined,

		// @option maxNativeZoom: Number = undefined
		// Maximum zoom number the tile source has available. If it is specified,
		// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
		// from `maxNativeZoom` level and auto-scaled.
		maxNativeZoom: undefined,

		// @option minNativeZoom: Number = undefined
		// Minimum zoom number the tile source has available. If it is specified,
		// the tiles on all zoom levels lower than `minNativeZoom` will be loaded
		// from `minNativeZoom` level and auto-scaled.
		minNativeZoom: undefined,

		// @option noWrap: Boolean = false
		// Whether the layer is wrapped around the antimeridian. If `true`, the
		// GridLayer will only be displayed once at low zoom levels. Has no
		// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
		// in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
		// tiles outside the CRS limits.
		noWrap: false,

		// @option pane: String = 'tilePane'
		// `Map pane` where the grid layer will be added.
		pane: 'tilePane',

		// @option className: String = ''
		// A custom class name to assign to the tile layer. Empty by default.
		className: '',

		// @option keepBuffer: Number = 2
		// When panning the map, keep this many rows and columns of tiles before unloading them.
		keepBuffer: 2
	},

	initialize: function (options) {
		setOptions(this, options);
	},

	onAdd: function () {
		this._initContainer();

		this._levels = {};
		this._tiles = {};

		this._resetView();
		this._update();
	},

	beforeAdd: function (map) {
		map._addZoomLimit(this);
	},

	onRemove: function (map) {
		this._removeAllTiles();
		remove(this._container);
		map._removeZoomLimit(this);
		this._container = null;
		this._tileZoom = undefined;
	},

	// @method bringToFront: this
	// Brings the tile layer to the top of all tile layers.
	bringToFront: function () {
		if (this._map) {
			toFront(this._container);
			this._setAutoZIndex(Math.max);
		}
		return this;
	},

	// @method bringToBack: this
	// Brings the tile layer to the bottom of all tile layers.
	bringToBack: function () {
		if (this._map) {
			toBack(this._container);
			this._setAutoZIndex(Math.min);
		}
		return this;
	},

	// @method getContainer: HTMLElement
	// Returns the HTML element that contains the tiles for this layer.
	getContainer: function () {
		return this._container;
	},

	// @method setOpacity(opacity: Number): this
	// Changes the [opacity](#gridlayer-opacity) of the grid layer.
	setOpacity: function (opacity) {
		this.options.opacity = opacity;
		this._updateOpacity();
		return this;
	},

	// @method setZIndex(zIndex: Number): this
	// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
	setZIndex: function (zIndex) {
		this.options.zIndex = zIndex;
		this._updateZIndex();

		return this;
	},

	// @method isLoading: Boolean
	// Returns `true` if any tile in the grid layer has not finished loading.
	isLoading: function () {
		return this._loading;
	},

	// @method redraw: this
	// Causes the layer to clear all the tiles and request them again.
	redraw: function () {
		if (this._map) {
			this._removeAllTiles();
			this._update();
		}
		return this;
	},

	getEvents: function () {
		var events = {
			viewprereset: this._invalidateAll,
			viewreset: this._resetView,
			zoom: this._resetView,
			moveend: this._onMoveEnd
		};

		if (!this.options.updateWhenIdle) {
			// update tiles on move, but not more often than once per given interval
			if (!this._onMove) {
				this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
			}

			events.move = this._onMove;
		}

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}

		return events;
	},

	// @section Extension methods
	// Layers extending `GridLayer` shall reimplement the following method.
	// @method createTile(coords: Object, done?: Function): HTMLElement
	// Called only internally, must be overridden by classes extending `GridLayer`.
	// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
	// is specified, it must be called when the tile has finished loading and drawing.
	createTile: function () {
		return document.createElement('div');
	},

	// @section
	// @method getTileSize: Point
	// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
	getTileSize: function () {
		var s = this.options.tileSize;
		return s instanceof Point ? s : new Point(s, s);
	},

	_updateZIndex: function () {
		if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {
			this._container.style.zIndex = this.options.zIndex;
		}
	},

	_setAutoZIndex: function (compare) {
		// go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)

		var layers = this.getPane().children,
		    edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min

		for (var i = 0, len = layers.length, zIndex; i < len; i++) {

			zIndex = layers[i].style.zIndex;

			if (layers[i] !== this._container && zIndex) {
				edgeZIndex = compare(edgeZIndex, +zIndex);
			}
		}

		if (isFinite(edgeZIndex)) {
			this.options.zIndex = edgeZIndex + compare(-1, 1);
			this._updateZIndex();
		}
	},

	_updateOpacity: function () {
		if (!this._map) { return; }

		// IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
		if (ielt9) { return; }

		setOpacity(this._container, this.options.opacity);

		var now = +new Date(),
		    nextFrame = false,
		    willPrune = false;

		for (var key in this._tiles) {
			var tile = this._tiles[key];
			if (!tile.current || !tile.loaded) { continue; }

			var fade = Math.min(1, (now - tile.loaded) / 200);

			setOpacity(tile.el, fade);
			if (fade < 1) {
				nextFrame = true;
			} else {
				if (tile.active) {
					willPrune = true;
				} else {
					this._onOpaqueTile(tile);
				}
				tile.active = true;
			}
		}

		if (willPrune && !this._noPrune) { this._pruneTiles(); }

		if (nextFrame) {
			cancelAnimFrame(this._fadeFrame);
			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
		}
	},

	_onOpaqueTile: falseFn,

	_initContainer: function () {
		if (this._container) { return; }

		this._container = create$1('div', 'leaflet-layer ' + (this.options.className || ''));
		this._updateZIndex();

		if (this.options.opacity < 1) {
			this._updateOpacity();
		}

		this.getPane().appendChild(this._container);
	},

	_updateLevels: function () {

		var zoom = this._tileZoom,
		    maxZoom = this.options.maxZoom;

		if (zoom === undefined) { return undefined; }

		for (var z in this._levels) {
			if (this._levels[z].el.children.length || z === zoom) {
				this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
				this._onUpdateLevel(z);
			} else {
				remove(this._levels[z].el);
				this._removeTilesAtZoom(z);
				this._onRemoveLevel(z);
				delete this._levels[z];
			}
		}

		var level = this._levels[zoom],
		    map = this._map;

		if (!level) {
			level = this._levels[zoom] = {};

			level.el = create$1('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
			level.el.style.zIndex = maxZoom;

			level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
			level.zoom = zoom;

			this._setZoomTransform(level, map.getCenter(), map.getZoom());

			// force the browser to consider the newly added element for transition
			falseFn(level.el.offsetWidth);

			this._onCreateLevel(level);
		}

		this._level = level;

		return level;
	},

	_onUpdateLevel: falseFn,

	_onRemoveLevel: falseFn,

	_onCreateLevel: falseFn,

	_pruneTiles: function () {
		if (!this._map) {
			return;
		}

		var key, tile;

		var zoom = this._map.getZoom();
		if (zoom > this.options.maxZoom ||
			zoom < this.options.minZoom) {
			this._removeAllTiles();
			return;
		}

		for (key in this._tiles) {
			tile = this._tiles[key];
			tile.retain = tile.current;
		}

		for (key in this._tiles) {
			tile = this._tiles[key];
			if (tile.current && !tile.active) {
				var coords = tile.coords;
				if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
					this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
				}
			}
		}

		for (key in this._tiles) {
			if (!this._tiles[key].retain) {
				this._removeTile(key);
			}
		}
	},

	_removeTilesAtZoom: function (zoom) {
		for (var key in this._tiles) {
			if (this._tiles[key].coords.z !== zoom) {
				continue;
			}
			this._removeTile(key);
		}
	},

	_removeAllTiles: function () {
		for (var key in this._tiles) {
			this._removeTile(key);
		}
	},

	_invalidateAll: function () {
		for (var z in this._levels) {
			remove(this._levels[z].el);
			this._onRemoveLevel(z);
			delete this._levels[z];
		}
		this._removeAllTiles();

		this._tileZoom = undefined;
	},

	_retainParent: function (x, y, z, minZoom) {
		var x2 = Math.floor(x / 2),
		    y2 = Math.floor(y / 2),
		    z2 = z - 1,
		    coords2 = new Point(+x2, +y2);
		coords2.z = +z2;

		var key = this._tileCoordsToKey(coords2),
		    tile = this._tiles[key];

		if (tile && tile.active) {
			tile.retain = true;
			return true;

		} else if (tile && tile.loaded) {
			tile.retain = true;
		}

		if (z2 > minZoom) {
			return this._retainParent(x2, y2, z2, minZoom);
		}

		return false;
	},

	_retainChildren: function (x, y, z, maxZoom) {

		for (var i = 2 * x; i < 2 * x + 2; i++) {
			for (var j = 2 * y; j < 2 * y + 2; j++) {

				var coords = new Point(i, j);
				coords.z = z + 1;

				var key = this._tileCoordsToKey(coords),
				    tile = this._tiles[key];

				if (tile && tile.active) {
					tile.retain = true;
					continue;

				} else if (tile && tile.loaded) {
					tile.retain = true;
				}

				if (z + 1 < maxZoom) {
					this._retainChildren(i, j, z + 1, maxZoom);
				}
			}
		}
	},

	_resetView: function (e) {
		var animating = e && (e.pinch || e.flyTo);
		this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
	},

	_animateZoom: function (e) {
		this._setView(e.center, e.zoom, true, e.noUpdate);
	},

	_clampZoom: function (zoom) {
		var options = this.options;

		if (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) {
			return options.minNativeZoom;
		}

		if (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) {
			return options.maxNativeZoom;
		}

		return zoom;
	},

	_setView: function (center, zoom, noPrune, noUpdate) {
		var tileZoom = this._clampZoom(Math.round(zoom));
		if ((this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom) ||
		    (this.options.minZoom !== undefined && tileZoom < this.options.minZoom)) {
			tileZoom = undefined;
		}

		var tileZoomChanged = this.options.updateWhenZooming && (tileZoom !== this._tileZoom);

		if (!noUpdate || tileZoomChanged) {

			this._tileZoom = tileZoom;

			if (this._abortLoading) {
				this._abortLoading();
			}

			this._updateLevels();
			this._resetGrid();

			if (tileZoom !== undefined) {
				this._update(center);
			}

			if (!noPrune) {
				this._pruneTiles();
			}

			// Flag to prevent _updateOpacity from pruning tiles during
			// a zoom anim or a pinch gesture
			this._noPrune = !!noPrune;
		}

		this._setZoomTransforms(center, zoom);
	},

	_setZoomTransforms: function (center, zoom) {
		for (var i in this._levels) {
			this._setZoomTransform(this._levels[i], center, zoom);
		}
	},

	_setZoomTransform: function (level, center, zoom) {
		var scale = this._map.getZoomScale(zoom, level.zoom),
		    translate = level.origin.multiplyBy(scale)
		        .subtract(this._map._getNewPixelOrigin(center, zoom)).round();

		if (any3d) {
			setTransform(level.el, translate, scale);
		} else {
			setPosition(level.el, translate);
		}
	},

	_resetGrid: function () {
		var map = this._map,
		    crs = map.options.crs,
		    tileSize = this._tileSize = this.getTileSize(),
		    tileZoom = this._tileZoom;

		var bounds = this._map.getPixelWorldBounds(this._tileZoom);
		if (bounds) {
			this._globalTileRange = this._pxBoundsToTileRange(bounds);
		}

		this._wrapX = crs.wrapLng && !this.options.noWrap && [
			Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x),
			Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)
		];
		this._wrapY = crs.wrapLat && !this.options.noWrap && [
			Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x),
			Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)
		];
	},

	_onMoveEnd: function () {
		if (!this._map || this._map._animatingZoom) { return; }

		this._update();
	},

	_getTiledPixelBounds: function (center) {
		var map = this._map,
		    mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(),
		    scale = map.getZoomScale(mapZoom, this._tileZoom),
		    pixelCenter = map.project(center, this._tileZoom).floor(),
		    halfSize = map.getSize().divideBy(scale * 2);

		return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
	},

	// Private method to load tiles in the grid's active zoom level according to map bounds
	_update: function (center) {
		var map = this._map;
		if (!map) { return; }
		var zoom = this._clampZoom(map.getZoom());

		if (center === undefined) { center = map.getCenter(); }
		if (this._tileZoom === undefined) { return; }	// if out of minzoom/maxzoom

		var pixelBounds = this._getTiledPixelBounds(center),
		    tileRange = this._pxBoundsToTileRange(pixelBounds),
		    tileCenter = tileRange.getCenter(),
		    queue = [],
		    margin = this.options.keepBuffer,
		    noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([margin, -margin]),
		                              tileRange.getTopRight().add([margin, -margin]));

		// Sanity check: panic if the tile range contains Infinity somewhere.
		if (!(isFinite(tileRange.min.x) &&
		      isFinite(tileRange.min.y) &&
		      isFinite(tileRange.max.x) &&
		      isFinite(tileRange.max.y))) { throw new Error('Attempted to load an infinite number of tiles'); }

		for (var key in this._tiles) {
			var c = this._tiles[key].coords;
			if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {
				this._tiles[key].current = false;
			}
		}

		// _update just loads more tiles. If the tile zoom level differs too much
		// from the map's, let _setView reset levels and prune old tiles.
		if (Math.abs(zoom - this._tileZoom) > 1) { this._setView(center, zoom); return; }

		// create a queue of coordinates to load tiles from
		for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
			for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
				var coords = new Point(i, j);
				coords.z = this._tileZoom;

				if (!this._isValidTile(coords)) { continue; }

				var tile = this._tiles[this._tileCoordsToKey(coords)];
				if (tile) {
					tile.current = true;
				} else {
					queue.push(coords);
				}
			}
		}

		// sort tile queue to load tiles in order of their distance to center
		queue.sort(function (a, b) {
			return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
		});

		if (queue.length !== 0) {
			// if it's the first batch of tiles to load
			if (!this._loading) {
				this._loading = true;
				// @event loading: Event
				// Fired when the grid layer starts loading tiles.
				this.fire('loading');
			}

			// create DOM fragment to append tiles in one batch
			var fragment = document.createDocumentFragment();

			for (i = 0; i < queue.length; i++) {
				this._addTile(queue[i], fragment);
			}

			this._level.el.appendChild(fragment);
		}
	},

	_isValidTile: function (coords) {
		var crs = this._map.options.crs;

		if (!crs.infinite) {
			// don't load tile if it's out of bounds and not wrapped
			var bounds = this._globalTileRange;
			if ((!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x)) ||
			    (!crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y))) { return false; }
		}

		if (!this.options.bounds) { return true; }

		// don't load tile if it doesn't intersect the bounds in options
		var tileBounds = this._tileCoordsToBounds(coords);
		return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
	},

	_keyToBounds: function (key) {
		return this._tileCoordsToBounds(this._keyToTileCoords(key));
	},

	_tileCoordsToNwSe: function (coords) {
		var map = this._map,
		    tileSize = this.getTileSize(),
		    nwPoint = coords.scaleBy(tileSize),
		    sePoint = nwPoint.add(tileSize),
		    nw = map.unproject(nwPoint, coords.z),
		    se = map.unproject(sePoint, coords.z);
		return [nw, se];
	},

	// converts tile coordinates to its geographical bounds
	_tileCoordsToBounds: function (coords) {
		var bp = this._tileCoordsToNwSe(coords),
		    bounds = new LatLngBounds(bp[0], bp[1]);

		if (!this.options.noWrap) {
			bounds = this._map.wrapLatLngBounds(bounds);
		}
		return bounds;
	},
	// converts tile coordinates to key for the tile cache
	_tileCoordsToKey: function (coords) {
		return coords.x + ':' + coords.y + ':' + coords.z;
	},

	// converts tile cache key to coordinates
	_keyToTileCoords: function (key) {
		var k = key.split(':'),
		    coords = new Point(+k[0], +k[1]);
		coords.z = +k[2];
		return coords;
	},

	_removeTile: function (key) {
		var tile = this._tiles[key];
		if (!tile) { return; }

		remove(tile.el);

		delete this._tiles[key];

		// @event tileunload: TileEvent
		// Fired when a tile is removed (e.g. when a tile goes off the screen).
		this.fire('tileunload', {
			tile: tile.el,
			coords: this._keyToTileCoords(key)
		});
	},

	_initTile: function (tile) {
		addClass(tile, 'leaflet-tile');

		var tileSize = this.getTileSize();
		tile.style.width = tileSize.x + 'px';
		tile.style.height = tileSize.y + 'px';

		tile.onselectstart = falseFn;
		tile.onmousemove = falseFn;

		// update opacity on tiles in IE7-8 because of filter inheritance problems
		if (ielt9 && this.options.opacity < 1) {
			setOpacity(tile, this.options.opacity);
		}

		// without this hack, tiles disappear after zoom on Chrome for Android
		// https://github.com/Leaflet/Leaflet/issues/2078
		if (android && !android23) {
			tile.style.WebkitBackfaceVisibility = 'hidden';
		}
	},

	_addTile: function (coords, container) {
		var tilePos = this._getTilePos(coords),
		    key = this._tileCoordsToKey(coords);

		var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));

		this._initTile(tile);

		// if createTile is defined with a second argument ("done" callback),
		// we know that tile is async and will be ready later; otherwise
		if (this.createTile.length < 2) {
			// mark tile as ready, but delay one frame for opacity animation to happen
			requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
		}

		setPosition(tile, tilePos);

		// save tile in cache
		this._tiles[key] = {
			el: tile,
			coords: coords,
			current: true
		};

		container.appendChild(tile);
		// @event tileloadstart: TileEvent
		// Fired when a tile is requested and starts loading.
		this.fire('tileloadstart', {
			tile: tile,
			coords: coords
		});
	},

	_tileReady: function (coords, err, tile) {
		if (err) {
			// @event tileerror: TileErrorEvent
			// Fired when there is an error loading a tile.
			this.fire('tileerror', {
				error: err,
				tile: tile,
				coords: coords
			});
		}

		var key = this._tileCoordsToKey(coords);

		tile = this._tiles[key];
		if (!tile) { return; }

		tile.loaded = +new Date();
		if (this._map._fadeAnimated) {
			setOpacity(tile.el, 0);
			cancelAnimFrame(this._fadeFrame);
			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
		} else {
			tile.active = true;
			this._pruneTiles();
		}

		if (!err) {
			addClass(tile.el, 'leaflet-tile-loaded');

			// @event tileload: TileEvent
			// Fired when a tile loads.
			this.fire('tileload', {
				tile: tile.el,
				coords: coords
			});
		}

		if (this._noTilesToLoad()) {
			this._loading = false;
			// @event load: Event
			// Fired when the grid layer loaded all visible tiles.
			this.fire('load');

			if (ielt9 || !this._map._fadeAnimated) {
				requestAnimFrame(this._pruneTiles, this);
			} else {
				// Wait a bit more than 0.2 secs (the duration of the tile fade-in)
				// to trigger a pruning.
				setTimeout(bind(this._pruneTiles, this), 250);
			}
		}
	},

	_getTilePos: function (coords) {
		return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
	},

	_wrapCoords: function (coords) {
		var newCoords = new Point(
			this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x,
			this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);
		newCoords.z = coords.z;
		return newCoords;
	},

	_pxBoundsToTileRange: function (bounds) {
		var tileSize = this.getTileSize();
		return new Bounds(
			bounds.min.unscaleBy(tileSize).floor(),
			bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1]));
	},

	_noTilesToLoad: function () {
		for (var key in this._tiles) {
			if (!this._tiles[key].loaded) { return false; }
		}
		return true;
	}
});

// @factory L.gridLayer(options?: GridLayer options)
// Creates a new instance of GridLayer with the supplied options.
function gridLayer(options) {
	return new GridLayer(options);
}

/*
 * @class TileLayer
 * @inherits GridLayer
 * @aka L.TileLayer
 * Used to load and display tile layers on the map. Note that most tile servers require attribution, which you can set under `Layer`. Extends `GridLayer`.
 *
 * @example
 *
 * ```js
 * L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
 * ```
 *
 * @section URL template
 * @example
 *
 * A string of the following form:
 *
 * ```
 * 'http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
 * ```
 *
 * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add "&commat;2x" to the URL to load retina tiles.
 *
 * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
 *
 * ```
 * L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
 * ```
 */


var TileLayer = GridLayer.extend({

	// @section
	// @aka TileLayer options
	options: {
		// @option minZoom: Number = 0
		// The minimum zoom level down to which this layer will be displayed (inclusive).
		minZoom: 0,

		// @option maxZoom: Number = 18
		// The maximum zoom level up to which this layer will be displayed (inclusive).
		maxZoom: 18,

		// @option subdomains: String|String[] = 'abc'
		// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
		subdomains: 'abc',

		// @option errorTileUrl: String = ''
		// URL to the tile image to show in place of the tile that failed to load.
		errorTileUrl: '',

		// @option zoomOffset: Number = 0
		// The zoom number used in tile URLs will be offset with this value.
		zoomOffset: 0,

		// @option tms: Boolean = false
		// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
		tms: false,

		// @option zoomReverse: Boolean = false
		// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
		zoomReverse: false,

		// @option detectRetina: Boolean = false
		// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
		detectRetina: false,

		// @option crossOrigin: Boolean|String = false
		// Whether the crossOrigin attribute will be added to the tiles.
		// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
		// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
		crossOrigin: false
	},

	initialize: function (url, options) {

		this._url = url;

		options = setOptions(this, options);

		// detecting retina displays, adjusting tileSize and zoom levels
		if (options.detectRetina && retina && options.maxZoom > 0) {

			options.tileSize = Math.floor(options.tileSize / 2);

			if (!options.zoomReverse) {
				options.zoomOffset++;
				options.maxZoom--;
			} else {
				options.zoomOffset--;
				options.minZoom++;
			}

			options.minZoom = Math.max(0, options.minZoom);
		}

		if (typeof options.subdomains === 'string') {
			options.subdomains = options.subdomains.split('');
		}

		// for https://github.com/Leaflet/Leaflet/issues/137
		if (!android) {
			this.on('tileunload', this._onTileRemove);
		}
	},

	// @method setUrl(url: String, noRedraw?: Boolean): this
	// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
	// If the URL does not change, the layer will not be redrawn unless
	// the noRedraw parameter is set to false.
	setUrl: function (url, noRedraw) {
		if (this._url === url && noRedraw === undefined) {
			noRedraw = true;
		}

		this._url = url;

		if (!noRedraw) {
			this.redraw();
		}
		return this;
	},

	// @method createTile(coords: Object, done?: Function): HTMLElement
	// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
	// to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
	// callback is called when the tile has been loaded.
	createTile: function (coords, done) {
		var tile = document.createElement('img');

		on(tile, 'load', bind(this._tileOnLoad, this, done, tile));
		on(tile, 'error', bind(this._tileOnError, this, done, tile));

		if (this.options.crossOrigin || this.options.crossOrigin === '') {
			tile.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;
		}

		/*
		 Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
		 http://www.w3.org/TR/WCAG20-TECHS/H67
		*/
		tile.alt = '';

		/*
		 Set role="presentation" to force screen readers to ignore this
		 https://www.w3.org/TR/wai-aria/roles#textalternativecomputation
		*/
		tile.setAttribute('role', 'presentation');

		tile.src = this.getTileUrl(coords);

		return tile;
	},

	// @section Extension methods
	// @uninheritable
	// Layers extending `TileLayer` might reimplement the following method.
	// @method getTileUrl(coords: Object): String
	// Called only internally, returns the URL for a tile given its coordinates.
	// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
	getTileUrl: function (coords) {
		var data = {
			r: retina ? '@2x' : '',
			s: this._getSubdomain(coords),
			x: coords.x,
			y: coords.y,
			z: this._getZoomForUrl()
		};
		if (this._map && !this._map.options.crs.infinite) {
			var invertedY = this._globalTileRange.max.y - coords.y;
			if (this.options.tms) {
				data['y'] = invertedY;
			}
			data['-y'] = invertedY;
		}

		return template(this._url, extend(data, this.options));
	},

	_tileOnLoad: function (done, tile) {
		// For https://github.com/Leaflet/Leaflet/issues/3332
		if (ielt9) {
			setTimeout(bind(done, this, null, tile), 0);
		} else {
			done(null, tile);
		}
	},

	_tileOnError: function (done, tile, e) {
		var errorUrl = this.options.errorTileUrl;
		if (errorUrl && tile.getAttribute('src') !== errorUrl) {
			tile.src = errorUrl;
		}
		done(e, tile);
	},

	_onTileRemove: function (e) {
		e.tile.onload = null;
	},

	_getZoomForUrl: function () {
		var zoom = this._tileZoom,
		maxZoom = this.options.maxZoom,
		zoomReverse = this.options.zoomReverse,
		zoomOffset = this.options.zoomOffset;

		if (zoomReverse) {
			zoom = maxZoom - zoom;
		}

		return zoom + zoomOffset;
	},

	_getSubdomain: function (tilePoint) {
		var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
		return this.options.subdomains[index];
	},

	// stops loading all tiles in the background layer
	_abortLoading: function () {
		var i, tile;
		for (i in this._tiles) {
			if (this._tiles[i].coords.z !== this._tileZoom) {
				tile = this._tiles[i].el;

				tile.onload = falseFn;
				tile.onerror = falseFn;

				if (!tile.complete) {
					tile.src = emptyImageUrl;
					remove(tile);
					delete this._tiles[i];
				}
			}
		}
	},

	_removeTile: function (key) {
		var tile = this._tiles[key];
		if (!tile) { return; }

		// Cancels any pending http requests associated with the tile
		// unless we're on Android's stock browser,
		// see https://github.com/Leaflet/Leaflet/issues/137
		if (!androidStock) {
			tile.el.setAttribute('src', emptyImageUrl);
		}

		return GridLayer.prototype._removeTile.call(this, key);
	},

	_tileReady: function (coords, err, tile) {
		if (!this._map || (tile && tile.getAttribute('src') === emptyImageUrl)) {
			return;
		}

		return GridLayer.prototype._tileReady.call(this, coords, err, tile);
	}
});


// @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
// Instantiates a tile layer object given a `URL template` and optionally an options object.

function tileLayer(url, options) {
	return new TileLayer(url, options);
}

/*
 * @class TileLayer.WMS
 * @inherits TileLayer
 * @aka L.TileLayer.WMS
 * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
 *
 * @example
 *
 * ```js
 * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
 * 	layers: 'nexrad-n0r-900913',
 * 	format: 'image/png',
 * 	transparent: true,
 * 	attribution: "Weather data © 2012 IEM Nexrad"
 * });
 * ```
 */

var TileLayerWMS = TileLayer.extend({

	// @section
	// @aka TileLayer.WMS options
	// If any custom options not documented here are used, they will be sent to the
	// WMS server as extra parameters in each request URL. This can be useful for
	// [non-standard vendor WMS parameters](http://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
	defaultWmsParams: {
		service: 'WMS',
		request: 'GetMap',

		// @option layers: String = ''
		// **(required)** Comma-separated list of WMS layers to show.
		layers: '',

		// @option styles: String = ''
		// Comma-separated list of WMS styles.
		styles: '',

		// @option format: String = 'image/jpeg'
		// WMS image format (use `'image/png'` for layers with transparency).
		format: 'image/jpeg',

		// @option transparent: Boolean = false
		// If `true`, the WMS service will return images with transparency.
		transparent: false,

		// @option version: String = '1.1.1'
		// Version of the WMS service to use
		version: '1.1.1'
	},

	options: {
		// @option crs: CRS = null
		// Coordinate Reference System to use for the WMS requests, defaults to
		// map CRS. Don't change this if you're not sure what it means.
		crs: null,

		// @option uppercase: Boolean = false
		// If `true`, WMS request parameter keys will be uppercase.
		uppercase: false
	},

	initialize: function (url, options) {

		this._url = url;

		var wmsParams = extend({}, this.defaultWmsParams);

		// all keys that are not TileLayer options go to WMS params
		for (var i in options) {
			if (!(i in this.options)) {
				wmsParams[i] = options[i];
			}
		}

		options = setOptions(this, options);

		var realRetina = options.detectRetina && retina ? 2 : 1;
		var tileSize = this.getTileSize();
		wmsParams.width = tileSize.x * realRetina;
		wmsParams.height = tileSize.y * realRetina;

		this.wmsParams = wmsParams;
	},

	onAdd: function (map) {

		this._crs = this.options.crs || map.options.crs;
		this._wmsVersion = parseFloat(this.wmsParams.version);

		var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
		this.wmsParams[projectionKey] = this._crs.code;

		TileLayer.prototype.onAdd.call(this, map);
	},

	getTileUrl: function (coords) {

		var tileBounds = this._tileCoordsToNwSe(coords),
		    crs = this._crs,
		    bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])),
		    min = bounds.min,
		    max = bounds.max,
		    bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ?
		    [min.y, min.x, max.y, max.x] :
		    [min.x, min.y, max.x, max.y]).join(','),
		    url = TileLayer.prototype.getTileUrl.call(this, coords);
		return url +
			getParamString(this.wmsParams, url, this.options.uppercase) +
			(this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;
	},

	// @method setParams(params: Object, noRedraw?: Boolean): this
	// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
	setParams: function (params, noRedraw) {

		extend(this.wmsParams, params);

		if (!noRedraw) {
			this.redraw();
		}

		return this;
	}
});


// @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
// Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
function tileLayerWMS(url, options) {
	return new TileLayerWMS(url, options);
}

TileLayer.WMS = TileLayerWMS;
tileLayer.wms = tileLayerWMS;

/*
 * @class Renderer
 * @inherits Layer
 * @aka L.Renderer
 *
 * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
 * DOM container of the renderer, its bounds, and its zoom animation.
 *
 * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
 * itself can be added or removed to the map. All paths use a renderer, which can
 * be implicit (the map will decide the type of renderer and use it automatically)
 * or explicit (using the [`renderer`](#path-renderer) option of the path).
 *
 * Do not use this class directly, use `SVG` and `Canvas` instead.
 *
 * @event update: Event
 * Fired when the renderer updates its bounds, center and zoom, for example when
 * its map has moved
 */

var Renderer = Layer.extend({

	// @section
	// @aka Renderer options
	options: {
		// @option padding: Number = 0.1
		// How much to extend the clip area around the map view (relative to its size)
		// e.g. 0.1 would be 10% of map view in each direction
		padding: 0.1,

		// @option tolerance: Number = 0
		// How much to extend click tolerance round a path/object on the map
		tolerance : 0
	},

	initialize: function (options) {
		setOptions(this, options);
		stamp(this);
		this._layers = this._layers || {};
	},

	onAdd: function () {
		if (!this._container) {
			this._initContainer(); // defined by renderer implementations

			if (this._zoomAnimated) {
				addClass(this._container, 'leaflet-zoom-animated');
			}
		}

		this.getPane().appendChild(this._container);
		this._update();
		this.on('update', this._updatePaths, this);
	},

	onRemove: function () {
		this.off('update', this._updatePaths, this);
		this._destroyContainer();
	},

	getEvents: function () {
		var events = {
			viewreset: this._reset,
			zoom: this._onZoom,
			moveend: this._update,
			zoomend: this._onZoomEnd
		};
		if (this._zoomAnimated) {
			events.zoomanim = this._onAnimZoom;
		}
		return events;
	},

	_onAnimZoom: function (ev) {
		this._updateTransform(ev.center, ev.zoom);
	},

	_onZoom: function () {
		this._updateTransform(this._map.getCenter(), this._map.getZoom());
	},

	_updateTransform: function (center, zoom) {
		var scale = this._map.getZoomScale(zoom, this._zoom),
		    position = getPosition(this._container),
		    viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),
		    currentCenterPoint = this._map.project(this._center, zoom),
		    destCenterPoint = this._map.project(center, zoom),
		    centerOffset = destCenterPoint.subtract(currentCenterPoint),

		    topLeftOffset = viewHalf.multiplyBy(-scale).add(position).add(viewHalf).subtract(centerOffset);

		if (any3d) {
			setTransform(this._container, topLeftOffset, scale);
		} else {
			setPosition(this._container, topLeftOffset);
		}
	},

	_reset: function () {
		this._update();
		this._updateTransform(this._center, this._zoom);

		for (var id in this._layers) {
			this._layers[id]._reset();
		}
	},

	_onZoomEnd: function () {
		for (var id in this._layers) {
			this._layers[id]._project();
		}
	},

	_updatePaths: function () {
		for (var id in this._layers) {
			this._layers[id]._update();
		}
	},

	_update: function () {
		// Update pixel bounds of renderer container (for positioning/sizing/clipping later)
		// Subclasses are responsible of firing the 'update' event.
		var p = this.options.padding,
		    size = this._map.getSize(),
		    min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();

		this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());

		this._center = this._map.getCenter();
		this._zoom = this._map.getZoom();
	}
});

/*
 * @class Canvas
 * @inherits Renderer
 * @aka L.Canvas
 *
 * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
 * Inherits `Renderer`.
 *
 * Due to [technical limitations](http://caniuse.com/#search=canvas), Canvas is not
 * available in all web browsers, notably IE8, and overlapping geometries might
 * not display properly in some edge cases.
 *
 * @example
 *
 * Use Canvas by default for all paths in the map:
 *
 * ```js
 * var map = L.map('map', {
 * 	renderer: L.canvas()
 * });
 * ```
 *
 * Use a Canvas renderer with extra padding for specific vector geometries:
 *
 * ```js
 * var map = L.map('map');
 * var myRenderer = L.canvas({ padding: 0.5 });
 * var line = L.polyline( coordinates, { renderer: myRenderer } );
 * var circle = L.circle( center, { renderer: myRenderer } );
 * ```
 */

var Canvas = Renderer.extend({
	getEvents: function () {
		var events = Renderer.prototype.getEvents.call(this);
		events.viewprereset = this._onViewPreReset;
		return events;
	},

	_onViewPreReset: function () {
		// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
		this._postponeUpdatePaths = true;
	},

	onAdd: function () {
		Renderer.prototype.onAdd.call(this);

		// Redraw vectors since canvas is cleared upon removal,
		// in case of removing the renderer itself from the map.
		this._draw();
	},

	_initContainer: function () {
		var container = this._container = document.createElement('canvas');

		on(container, 'mousemove', this._onMouseMove, this);
		on(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this);
		on(container, 'mouseout', this._handleMouseOut, this);

		this._ctx = container.getContext('2d');
	},

	_destroyContainer: function () {
		cancelAnimFrame(this._redrawRequest);
		delete this._ctx;
		remove(this._container);
		off(this._container);
		delete this._container;
	},

	_updatePaths: function () {
		if (this._postponeUpdatePaths) { return; }

		var layer;
		this._redrawBounds = null;
		for (var id in this._layers) {
			layer = this._layers[id];
			layer._update();
		}
		this._redraw();
	},

	_update: function () {
		if (this._map._animatingZoom && this._bounds) { return; }

		Renderer.prototype._update.call(this);

		var b = this._bounds,
		    container = this._container,
		    size = b.getSize(),
		    m = retina ? 2 : 1;

		setPosition(container, b.min);

		// set canvas size (also clearing it); use double size on retina
		container.width = m * size.x;
		container.height = m * size.y;
		container.style.width = size.x + 'px';
		container.style.height = size.y + 'px';

		if (retina) {
			this._ctx.scale(2, 2);
		}

		// translate so we use the same path coordinates after canvas element moves
		this._ctx.translate(-b.min.x, -b.min.y);

		// Tell paths to redraw themselves
		this.fire('update');
	},

	_reset: function () {
		Renderer.prototype._reset.call(this);

		if (this._postponeUpdatePaths) {
			this._postponeUpdatePaths = false;
			this._updatePaths();
		}
	},

	_initPath: function (layer) {
		this._updateDashArray(layer);
		this._layers[stamp(layer)] = layer;

		var order = layer._order = {
			layer: layer,
			prev: this._drawLast,
			next: null
		};
		if (this._drawLast) { this._drawLast.next = order; }
		this._drawLast = order;
		this._drawFirst = this._drawFirst || this._drawLast;
	},

	_addPath: function (layer) {
		this._requestRedraw(layer);
	},

	_removePath: function (layer) {
		var order = layer._order;
		var next = order.next;
		var prev = order.prev;

		if (next) {
			next.prev = prev;
		} else {
			this._drawLast = prev;
		}
		if (prev) {
			prev.next = next;
		} else {
			this._drawFirst = next;
		}

		delete layer._order;

		delete this._layers[stamp(layer)];

		this._requestRedraw(layer);
	},

	_updatePath: function (layer) {
		// Redraw the union of the layer's old pixel
		// bounds and the new pixel bounds.
		this._extendRedrawBounds(layer);
		layer._project();
		layer._update();
		// The redraw will extend the redraw bounds
		// with the new pixel bounds.
		this._requestRedraw(layer);
	},

	_updateStyle: function (layer) {
		this._updateDashArray(layer);
		this._requestRedraw(layer);
	},

	_updateDashArray: function (layer) {
		if (typeof layer.options.dashArray === 'string') {
			var parts = layer.options.dashArray.split(/[, ]+/),
			    dashArray = [],
			    dashValue,
			    i;
			for (i = 0; i < parts.length; i++) {
				dashValue = Number(parts[i]);
				// Ignore dash array containing invalid lengths
				if (isNaN(dashValue)) { return; }
				dashArray.push(dashValue);
			}
			layer.options._dashArray = dashArray;
		} else {
			layer.options._dashArray = layer.options.dashArray;
		}
	},

	_requestRedraw: function (layer) {
		if (!this._map) { return; }

		this._extendRedrawBounds(layer);
		this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
	},

	_extendRedrawBounds: function (layer) {
		if (layer._pxBounds) {
			var padding = (layer.options.weight || 0) + 1;
			this._redrawBounds = this._redrawBounds || new Bounds();
			this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));
			this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
		}
	},

	_redraw: function () {
		this._redrawRequest = null;

		if (this._redrawBounds) {
			this._redrawBounds.min._floor();
			this._redrawBounds.max._ceil();
		}

		this._clear(); // clear layers in redraw bounds
		this._draw(); // draw layers

		this._redrawBounds = null;
	},

	_clear: function () {
		var bounds = this._redrawBounds;
		if (bounds) {
			var size = bounds.getSize();
			this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
		} else {
			this._ctx.clearRect(0, 0, this._container.width, this._container.height);
		}
	},

	_draw: function () {
		var layer, bounds = this._redrawBounds;
		this._ctx.save();
		if (bounds) {
			var size = bounds.getSize();
			this._ctx.beginPath();
			this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
			this._ctx.clip();
		}

		this._drawing = true;

		for (var order = this._drawFirst; order; order = order.next) {
			layer = order.layer;
			if (!bounds || (layer._pxBounds && layer._pxBounds.intersects(bounds))) {
				layer._updatePath();
			}
		}

		this._drawing = false;

		this._ctx.restore();  // Restore state before clipping.
	},

	_updatePoly: function (layer, closed) {
		if (!this._drawing) { return; }

		var i, j, len2, p,
		    parts = layer._parts,
		    len = parts.length,
		    ctx = this._ctx;

		if (!len) { return; }

		ctx.beginPath();

		for (i = 0; i < len; i++) {
			for (j = 0, len2 = parts[i].length; j < len2; j++) {
				p = parts[i][j];
				ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
			}
			if (closed) {
				ctx.closePath();
			}
		}

		this._fillStroke(ctx, layer);

		// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
	},

	_updateCircle: function (layer) {

		if (!this._drawing || layer._empty()) { return; }

		var p = layer._point,
		    ctx = this._ctx,
		    r = Math.max(Math.round(layer._radius), 1),
		    s = (Math.max(Math.round(layer._radiusY), 1) || r) / r;

		if (s !== 1) {
			ctx.save();
			ctx.scale(1, s);
		}

		ctx.beginPath();
		ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);

		if (s !== 1) {
			ctx.restore();
		}

		this._fillStroke(ctx, layer);
	},

	_fillStroke: function (ctx, layer) {
		var options = layer.options;

		if (options.fill) {
			ctx.globalAlpha = options.fillOpacity;
			ctx.fillStyle = options.fillColor || options.color;
			ctx.fill(options.fillRule || 'evenodd');
		}

		if (options.stroke && options.weight !== 0) {
			if (ctx.setLineDash) {
				ctx.setLineDash(layer.options && layer.options._dashArray || []);
			}
			ctx.globalAlpha = options.opacity;
			ctx.lineWidth = options.weight;
			ctx.strokeStyle = options.color;
			ctx.lineCap = options.lineCap;
			ctx.lineJoin = options.lineJoin;
			ctx.stroke();
		}
	},

	// Canvas obviously doesn't have mouse events for individual drawn objects,
	// so we emulate that by calculating what's under the mouse on mousemove/click manually

	_onClick: function (e) {
		var point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;

		for (var order = this._drawFirst; order; order = order.next) {
			layer = order.layer;
			if (layer.options.interactive && layer._containsPoint(point) && !this._map._draggableMoved(layer)) {
				clickedLayer = layer;
			}
		}
		if (clickedLayer)  {
			fakeStop(e);
			this._fireEvent([clickedLayer], e);
		}
	},

	_onMouseMove: function (e) {
		if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) { return; }

		var point = this._map.mouseEventToLayerPoint(e);
		this._handleMouseHover(e, point);
	},


	_handleMouseOut: function (e) {
		var layer = this._hoveredLayer;
		if (layer) {
			// if we're leaving the layer, fire mouseout
			removeClass(this._container, 'leaflet-interactive');
			this._fireEvent([layer], e, 'mouseout');
			this._hoveredLayer = null;
			this._mouseHoverThrottled = false;
		}
	},

	_handleMouseHover: function (e, point) {
		if (this._mouseHoverThrottled) {
			return;
		}

		var layer, candidateHoveredLayer;

		for (var order = this._drawFirst; order; order = order.next) {
			layer = order.layer;
			if (layer.options.interactive && layer._containsPoint(point)) {
				candidateHoveredLayer = layer;
			}
		}

		if (candidateHoveredLayer !== this._hoveredLayer) {
			this._handleMouseOut(e);

			if (candidateHoveredLayer) {
				addClass(this._container, 'leaflet-interactive'); // change cursor
				this._fireEvent([candidateHoveredLayer], e, 'mouseover');
				this._hoveredLayer = candidateHoveredLayer;
			}
		}

		if (this._hoveredLayer) {
			this._fireEvent([this._hoveredLayer], e);
		}

		this._mouseHoverThrottled = true;
		setTimeout(L.bind(function () {
			this._mouseHoverThrottled = false;
		}, this), 32);
	},

	_fireEvent: function (layers, e, type) {
		this._map._fireDOMEvent(e, type || e.type, layers);
	},

	_bringToFront: function (layer) {
		var order = layer._order;

		if (!order) { return; }

		var next = order.next;
		var prev = order.prev;

		if (next) {
			next.prev = prev;
		} else {
			// Already last
			return;
		}
		if (prev) {
			prev.next = next;
		} else if (next) {
			// Update first entry unless this is the
			// single entry
			this._drawFirst = next;
		}

		order.prev = this._drawLast;
		this._drawLast.next = order;

		order.next = null;
		this._drawLast = order;

		this._requestRedraw(layer);
	},

	_bringToBack: function (layer) {
		var order = layer._order;

		if (!order) { return; }

		var next = order.next;
		var prev = order.prev;

		if (prev) {
			prev.next = next;
		} else {
			// Already first
			return;
		}
		if (next) {
			next.prev = prev;
		} else if (prev) {
			// Update last entry unless this is the
			// single entry
			this._drawLast = prev;
		}

		order.prev = null;

		order.next = this._drawFirst;
		this._drawFirst.prev = order;
		this._drawFirst = order;

		this._requestRedraw(layer);
	}
});

// @factory L.canvas(options?: Renderer options)
// Creates a Canvas renderer with the given options.
function canvas$1(options) {
	return canvas ? new Canvas(options) : null;
}

/*
 * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
 */


var vmlCreate = (function () {
	try {
		document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
		return function (name) {
			return document.createElement('<lvml:' + name + ' class="lvml">');
		};
	} catch (e) {
		return function (name) {
			return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
		};
	}
})();


/*
 * @class SVG
 *
 *
 * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
 * with old versions of Internet Explorer.
 */

// mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences
var vmlMixin = {

	_initContainer: function () {
		this._container = create$1('div', 'leaflet-vml-container');
	},

	_update: function () {
		if (this._map._animatingZoom) { return; }
		Renderer.prototype._update.call(this);
		this.fire('update');
	},

	_initPath: function (layer) {
		var container = layer._container = vmlCreate('shape');

		addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));

		container.coordsize = '1 1';

		layer._path = vmlCreate('path');
		container.appendChild(layer._path);

		this._updateStyle(layer);
		this._layers[stamp(layer)] = layer;
	},

	_addPath: function (layer) {
		var container = layer._container;
		this._container.appendChild(container);

		if (layer.options.interactive) {
			layer.addInteractiveTarget(container);
		}
	},

	_removePath: function (layer) {
		var container = layer._container;
		remove(container);
		layer.removeInteractiveTarget(container);
		delete this._layers[stamp(layer)];
	},

	_updateStyle: function (layer) {
		var stroke = layer._stroke,
		    fill = layer._fill,
		    options = layer.options,
		    container = layer._container;

		container.stroked = !!options.stroke;
		container.filled = !!options.fill;

		if (options.stroke) {
			if (!stroke) {
				stroke = layer._stroke = vmlCreate('stroke');
			}
			container.appendChild(stroke);
			stroke.weight = options.weight + 'px';
			stroke.color = options.color;
			stroke.opacity = options.opacity;

			if (options.dashArray) {
				stroke.dashStyle = isArray(options.dashArray) ?
				    options.dashArray.join(' ') :
				    options.dashArray.replace(/( *, *)/g, ' ');
			} else {
				stroke.dashStyle = '';
			}
			stroke.endcap = options.lineCap.replace('butt', 'flat');
			stroke.joinstyle = options.lineJoin;

		} else if (stroke) {
			container.removeChild(stroke);
			layer._stroke = null;
		}

		if (options.fill) {
			if (!fill) {
				fill = layer._fill = vmlCreate('fill');
			}
			container.appendChild(fill);
			fill.color = options.fillColor || options.color;
			fill.opacity = options.fillOpacity;

		} else if (fill) {
			container.removeChild(fill);
			layer._fill = null;
		}
	},

	_updateCircle: function (layer) {
		var p = layer._point.round(),
		    r = Math.round(layer._radius),
		    r2 = Math.round(layer._radiusY || r);

		this._setPath(layer, layer._empty() ? 'M0 0' :
			'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + (65535 * 360));
	},

	_setPath: function (layer, path) {
		layer._path.v = path;
	},

	_bringToFront: function (layer) {
		toFront(layer._container);
	},

	_bringToBack: function (layer) {
		toBack(layer._container);
	}
};

var create$2 = vml ? vmlCreate : svgCreate;

/*
 * @class SVG
 * @inherits Renderer
 * @aka L.SVG
 *
 * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
 * Inherits `Renderer`.
 *
 * Due to [technical limitations](http://caniuse.com/#search=svg), SVG is not
 * available in all web browsers, notably Android 2.x and 3.x.
 *
 * Although SVG is not available on IE7 and IE8, these browsers support
 * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
 * (a now deprecated technology), and the SVG renderer will fall back to VML in
 * this case.
 *
 * @example
 *
 * Use SVG by default for all paths in the map:
 *
 * ```js
 * var map = L.map('map', {
 * 	renderer: L.svg()
 * });
 * ```
 *
 * Use a SVG renderer with extra padding for specific vector geometries:
 *
 * ```js
 * var map = L.map('map');
 * var myRenderer = L.svg({ padding: 0.5 });
 * var line = L.polyline( coordinates, { renderer: myRenderer } );
 * var circle = L.circle( center, { renderer: myRenderer } );
 * ```
 */

var SVG = Renderer.extend({

	getEvents: function () {
		var events = Renderer.prototype.getEvents.call(this);
		events.zoomstart = this._onZoomStart;
		return events;
	},

	_initContainer: function () {
		this._container = create$2('svg');

		// makes it possible to click through svg root; we'll reset it back in individual paths
		this._container.setAttribute('pointer-events', 'none');

		this._rootGroup = create$2('g');
		this._container.appendChild(this._rootGroup);
	},

	_destroyContainer: function () {
		remove(this._container);
		off(this._container);
		delete this._container;
		delete this._rootGroup;
		delete this._svgSize;
	},

	_onZoomStart: function () {
		// Drag-then-pinch interactions might mess up the center and zoom.
		// In this case, the easiest way to prevent this is re-do the renderer
		//   bounds and padding when the zooming starts.
		this._update();
	},

	_update: function () {
		if (this._map._animatingZoom && this._bounds) { return; }

		Renderer.prototype._update.call(this);

		var b = this._bounds,
		    size = b.getSize(),
		    container = this._container;

		// set size of svg-container if changed
		if (!this._svgSize || !this._svgSize.equals(size)) {
			this._svgSize = size;
			container.setAttribute('width', size.x);
			container.setAttribute('height', size.y);
		}

		// movement: update container viewBox so that we don't have to change coordinates of individual layers
		setPosition(container, b.min);
		container.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));

		this.fire('update');
	},

	// methods below are called by vector layers implementations

	_initPath: function (layer) {
		var path = layer._path = create$2('path');

		// @namespace Path
		// @option className: String = null
		// Custom class name set on an element. Only for SVG renderer.
		if (layer.options.className) {
			addClass(path, layer.options.className);
		}

		if (layer.options.interactive) {
			addClass(path, 'leaflet-interactive');
		}

		this._updateStyle(layer);
		this._layers[stamp(layer)] = layer;
	},

	_addPath: function (layer) {
		if (!this._rootGroup) { this._initContainer(); }
		this._rootGroup.appendChild(layer._path);
		layer.addInteractiveTarget(layer._path);
	},

	_removePath: function (layer) {
		remove(layer._path);
		layer.removeInteractiveTarget(layer._path);
		delete this._layers[stamp(layer)];
	},

	_updatePath: function (layer) {
		layer._project();
		layer._update();
	},

	_updateStyle: function (layer) {
		var path = layer._path,
		    options = layer.options;

		if (!path) { return; }

		if (options.stroke) {
			path.setAttribute('stroke', options.color);
			path.setAttribute('stroke-opacity', options.opacity);
			path.setAttribute('stroke-width', options.weight);
			path.setAttribute('stroke-linecap', options.lineCap);
			path.setAttribute('stroke-linejoin', options.lineJoin);

			if (options.dashArray) {
				path.setAttribute('stroke-dasharray', options.dashArray);
			} else {
				path.removeAttribute('stroke-dasharray');
			}

			if (options.dashOffset) {
				path.setAttribute('stroke-dashoffset', options.dashOffset);
			} else {
				path.removeAttribute('stroke-dashoffset');
			}
		} else {
			path.setAttribute('stroke', 'none');
		}

		if (options.fill) {
			path.setAttribute('fill', options.fillColor || options.color);
			path.setAttribute('fill-opacity', options.fillOpacity);
			path.setAttribute('fill-rule', options.fillRule || 'evenodd');
		} else {
			path.setAttribute('fill', 'none');
		}
	},

	_updatePoly: function (layer, closed) {
		this._setPath(layer, pointsToPath(layer._parts, closed));
	},

	_updateCircle: function (layer) {
		var p = layer._point,
		    r = Math.max(Math.round(layer._radius), 1),
		    r2 = Math.max(Math.round(layer._radiusY), 1) || r,
		    arc = 'a' + r + ',' + r2 + ' 0 1,0 ';

		// drawing a circle with two half-arcs
		var d = layer._empty() ? 'M0 0' :
			'M' + (p.x - r) + ',' + p.y +
			arc + (r * 2) + ',0 ' +
			arc + (-r * 2) + ',0 ';

		this._setPath(layer, d);
	},

	_setPath: function (layer, path) {
		layer._path.setAttribute('d', path);
	},

	// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
	_bringToFront: function (layer) {
		toFront(layer._path);
	},

	_bringToBack: function (layer) {
		toBack(layer._path);
	}
});

if (vml) {
	SVG.include(vmlMixin);
}

// @namespace SVG
// @factory L.svg(options?: Renderer options)
// Creates a SVG renderer with the given options.
function svg$1(options) {
	return svg || vml ? new SVG(options) : null;
}

Map.include({
	// @namespace Map; @method getRenderer(layer: Path): Renderer
	// Returns the instance of `Renderer` that should be used to render the given
	// `Path`. It will ensure that the `renderer` options of the map and paths
	// are respected, and that the renderers do exist on the map.
	getRenderer: function (layer) {
		// @namespace Path; @option renderer: Renderer
		// Use this specific instance of `Renderer` for this path. Takes
		// precedence over the map's [default renderer](#map-renderer).
		var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;

		if (!renderer) {
			renderer = this._renderer = this._createRenderer();
		}

		if (!this.hasLayer(renderer)) {
			this.addLayer(renderer);
		}
		return renderer;
	},

	_getPaneRenderer: function (name) {
		if (name === 'overlayPane' || name === undefined) {
			return false;
		}

		var renderer = this._paneRenderers[name];
		if (renderer === undefined) {
			renderer = this._createRenderer({pane: name});
			this._paneRenderers[name] = renderer;
		}
		return renderer;
	},

	_createRenderer: function (options) {
		// @namespace Map; @option preferCanvas: Boolean = false
		// Whether `Path`s should be rendered on a `Canvas` renderer.
		// By default, all `Path`s are rendered in a `SVG` renderer.
		return (this.options.preferCanvas && canvas$1(options)) || svg$1(options);
	}
});

/*
 * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
 */

/*
 * @class Rectangle
 * @aka L.Rectangle
 * @inherits Polygon
 *
 * A class for drawing rectangle overlays on a map. Extends `Polygon`.
 *
 * @example
 *
 * ```js
 * // define rectangle geographical bounds
 * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
 *
 * // create an orange rectangle
 * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
 *
 * // zoom the map to the rectangle bounds
 * map.fitBounds(bounds);
 * ```
 *
 */


var Rectangle = Polygon.extend({
	initialize: function (latLngBounds, options) {
		Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
	},

	// @method setBounds(latLngBounds: LatLngBounds): this
	// Redraws the rectangle with the passed bounds.
	setBounds: function (latLngBounds) {
		return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
	},

	_boundsToLatLngs: function (latLngBounds) {
		latLngBounds = toLatLngBounds(latLngBounds);
		return [
			latLngBounds.getSouthWest(),
			latLngBounds.getNorthWest(),
			latLngBounds.getNorthEast(),
			latLngBounds.getSouthEast()
		];
	}
});


// @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
function rectangle(latLngBounds, options) {
	return new Rectangle(latLngBounds, options);
}

SVG.create = create$2;
SVG.pointsToPath = pointsToPath;

GeoJSON.geometryToLayer = geometryToLayer;
GeoJSON.coordsToLatLng = coordsToLatLng;
GeoJSON.coordsToLatLngs = coordsToLatLngs;
GeoJSON.latLngToCoords = latLngToCoords;
GeoJSON.latLngsToCoords = latLngsToCoords;
GeoJSON.getFeature = getFeature;
GeoJSON.asFeature = asFeature;

/*
 * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
 * (zoom to a selected bounding box), enabled by default.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @option boxZoom: Boolean = true
	// Whether the map can be zoomed to a rectangular area specified by
	// dragging the mouse while pressing the shift key.
	boxZoom: true
});

var BoxZoom = Handler.extend({
	initialize: function (map) {
		this._map = map;
		this._container = map._container;
		this._pane = map._panes.overlayPane;
		this._resetStateTimeout = 0;
		map.on('unload', this._destroy, this);
	},

	addHooks: function () {
		on(this._container, 'mousedown', this._onMouseDown, this);
	},

	removeHooks: function () {
		off(this._container, 'mousedown', this._onMouseDown, this);
	},

	moved: function () {
		return this._moved;
	},

	_destroy: function () {
		remove(this._pane);
		delete this._pane;
	},

	_resetState: function () {
		this._resetStateTimeout = 0;
		this._moved = false;
	},

	_clearDeferredResetState: function () {
		if (this._resetStateTimeout !== 0) {
			clearTimeout(this._resetStateTimeout);
			this._resetStateTimeout = 0;
		}
	},

	_onMouseDown: function (e) {
		if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) { return false; }

		// Clear the deferred resetState if it hasn't executed yet, otherwise it
		// will interrupt the interaction and orphan a box element in the container.
		this._clearDeferredResetState();
		this._resetState();

		disableTextSelection();
		disableImageDrag();

		this._startPoint = this._map.mouseEventToContainerPoint(e);

		on(document, {
			contextmenu: stop,
			mousemove: this._onMouseMove,
			mouseup: this._onMouseUp,
			keydown: this._onKeyDown
		}, this);
	},

	_onMouseMove: function (e) {
		if (!this._moved) {
			this._moved = true;

			this._box = create$1('div', 'leaflet-zoom-box', this._container);
			addClass(this._container, 'leaflet-crosshair');

			this._map.fire('boxzoomstart');
		}

		this._point = this._map.mouseEventToContainerPoint(e);

		var bounds = new Bounds(this._point, this._startPoint),
		    size = bounds.getSize();

		setPosition(this._box, bounds.min);

		this._box.style.width  = size.x + 'px';
		this._box.style.height = size.y + 'px';
	},

	_finish: function () {
		if (this._moved) {
			remove(this._box);
			removeClass(this._container, 'leaflet-crosshair');
		}

		enableTextSelection();
		enableImageDrag();

		off(document, {
			contextmenu: stop,
			mousemove: this._onMouseMove,
			mouseup: this._onMouseUp,
			keydown: this._onKeyDown
		}, this);
	},

	_onMouseUp: function (e) {
		if ((e.which !== 1) && (e.button !== 1)) { return; }

		this._finish();

		if (!this._moved) { return; }
		// Postpone to next JS tick so internal click event handling
		// still see it as "moved".
		this._clearDeferredResetState();
		this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);

		var bounds = new LatLngBounds(
		        this._map.containerPointToLatLng(this._startPoint),
		        this._map.containerPointToLatLng(this._point));

		this._map
			.fitBounds(bounds)
			.fire('boxzoomend', {boxZoomBounds: bounds});
	},

	_onKeyDown: function (e) {
		if (e.keyCode === 27) {
			this._finish();
		}
	}
});

// @section Handlers
// @property boxZoom: Handler
// Box (shift-drag with mouse) zoom handler.
Map.addInitHook('addHandler', 'boxZoom', BoxZoom);

/*
 * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
 */

// @namespace Map
// @section Interaction Options

Map.mergeOptions({
	// @option doubleClickZoom: Boolean|String = true
	// Whether the map can be zoomed in by double clicking on it and
	// zoomed out by double clicking while holding shift. If passed
	// `'center'`, double-click zoom will zoom to the center of the
	//  view regardless of where the mouse was.
	doubleClickZoom: true
});

var DoubleClickZoom = Handler.extend({
	addHooks: function () {
		this._map.on('dblclick', this._onDoubleClick, this);
	},

	removeHooks: function () {
		this._map.off('dblclick', this._onDoubleClick, this);
	},

	_onDoubleClick: function (e) {
		var map = this._map,
		    oldZoom = map.getZoom(),
		    delta = map.options.zoomDelta,
		    zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;

		if (map.options.doubleClickZoom === 'center') {
			map.setZoom(zoom);
		} else {
			map.setZoomAround(e.containerPoint, zoom);
		}
	}
});

// @section Handlers
//
// Map properties include interaction handlers that allow you to control
// interaction behavior in runtime, enabling or disabling certain features such
// as dragging or touch zoom (see `Handler` methods). For example:
//
// ```js
// map.doubleClickZoom.disable();
// ```
//
// @property doubleClickZoom: Handler
// Double click zoom handler.
Map.addInitHook('addHandler', 'doubleClickZoom', DoubleClickZoom);

/*
 * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @option dragging: Boolean = true
	// Whether the map be draggable with mouse/touch or not.
	dragging: true,

	// @section Panning Inertia Options
	// @option inertia: Boolean = *
	// If enabled, panning of the map will have an inertia effect where
	// the map builds momentum while dragging and continues moving in
	// the same direction for some time. Feels especially nice on touch
	// devices. Enabled by default unless running on old Android devices.
	inertia: !android23,

	// @option inertiaDeceleration: Number = 3000
	// The rate with which the inertial movement slows down, in pixels/second².
	inertiaDeceleration: 3400, // px/s^2

	// @option inertiaMaxSpeed: Number = Infinity
	// Max speed of the inertial movement, in pixels/second.
	inertiaMaxSpeed: Infinity, // px/s

	// @option easeLinearity: Number = 0.2
	easeLinearity: 0.2,

	// TODO refactor, move to CRS
	// @option worldCopyJump: Boolean = false
	// With this option enabled, the map tracks when you pan to another "copy"
	// of the world and seamlessly jumps to the original one so that all overlays
	// like markers and vector layers are still visible.
	worldCopyJump: false,

	// @option maxBoundsViscosity: Number = 0.0
	// If `maxBounds` is set, this option will control how solid the bounds
	// are when dragging the map around. The default value of `0.0` allows the
	// user to drag outside the bounds at normal speed, higher values will
	// slow down map dragging outside bounds, and `1.0` makes the bounds fully
	// solid, preventing the user from dragging outside the bounds.
	maxBoundsViscosity: 0.0
});

var Drag = Handler.extend({
	addHooks: function () {
		if (!this._draggable) {
			var map = this._map;

			this._draggable = new Draggable(map._mapPane, map._container);

			this._draggable.on({
				dragstart: this._onDragStart,
				drag: this._onDrag,
				dragend: this._onDragEnd
			}, this);

			this._draggable.on('predrag', this._onPreDragLimit, this);
			if (map.options.worldCopyJump) {
				this._draggable.on('predrag', this._onPreDragWrap, this);
				map.on('zoomend', this._onZoomEnd, this);

				map.whenReady(this._onZoomEnd, this);
			}
		}
		addClass(this._map._container, 'leaflet-grab leaflet-touch-drag');
		this._draggable.enable();
		this._positions = [];
		this._times = [];
	},

	removeHooks: function () {
		removeClass(this._map._container, 'leaflet-grab');
		removeClass(this._map._container, 'leaflet-touch-drag');
		this._draggable.disable();
	},

	moved: function () {
		return this._draggable && this._draggable._moved;
	},

	moving: function () {
		return this._draggable && this._draggable._moving;
	},

	_onDragStart: function () {
		var map = this._map;

		map._stop();
		if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
			var bounds = toLatLngBounds(this._map.options.maxBounds);

			this._offsetLimit = toBounds(
				this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1),
				this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1)
					.add(this._map.getSize()));

			this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
		} else {
			this._offsetLimit = null;
		}

		map
		    .fire('movestart')
		    .fire('dragstart');

		if (map.options.inertia) {
			this._positions = [];
			this._times = [];
		}
	},

	_onDrag: function (e) {
		if (this._map.options.inertia) {
			var time = this._lastTime = +new Date(),
			    pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;

			this._positions.push(pos);
			this._times.push(time);

			this._prunePositions(time);
		}

		this._map
		    .fire('move', e)
		    .fire('drag', e);
	},

	_prunePositions: function (time) {
		while (this._positions.length > 1 && time - this._times[0] > 50) {
			this._positions.shift();
			this._times.shift();
		}
	},

	_onZoomEnd: function () {
		var pxCenter = this._map.getSize().divideBy(2),
		    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

		this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
		this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
	},

	_viscousLimit: function (value, threshold) {
		return value - (value - threshold) * this._viscosity;
	},

	_onPreDragLimit: function () {
		if (!this._viscosity || !this._offsetLimit) { return; }

		var offset = this._draggable._newPos.subtract(this._draggable._startPos);

		var limit = this._offsetLimit;
		if (offset.x < limit.min.x) { offset.x = this._viscousLimit(offset.x, limit.min.x); }
		if (offset.y < limit.min.y) { offset.y = this._viscousLimit(offset.y, limit.min.y); }
		if (offset.x > limit.max.x) { offset.x = this._viscousLimit(offset.x, limit.max.x); }
		if (offset.y > limit.max.y) { offset.y = this._viscousLimit(offset.y, limit.max.y); }

		this._draggable._newPos = this._draggable._startPos.add(offset);
	},

	_onPreDragWrap: function () {
		// TODO refactor to be able to adjust map pane position after zoom
		var worldWidth = this._worldWidth,
		    halfWidth = Math.round(worldWidth / 2),
		    dx = this._initialWorldOffset,
		    x = this._draggable._newPos.x,
		    newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
		    newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
		    newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

		this._draggable._absPos = this._draggable._newPos.clone();
		this._draggable._newPos.x = newX;
	},

	_onDragEnd: function (e) {
		var map = this._map,
		    options = map.options,

		    noInertia = !options.inertia || this._times.length < 2;

		map.fire('dragend', e);

		if (noInertia) {
			map.fire('moveend');

		} else {
			this._prunePositions(+new Date());

			var direction = this._lastPos.subtract(this._positions[0]),
			    duration = (this._lastTime - this._times[0]) / 1000,
			    ease = options.easeLinearity,

			    speedVector = direction.multiplyBy(ease / duration),
			    speed = speedVector.distanceTo([0, 0]),

			    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
			    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

			    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
			    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

			if (!offset.x && !offset.y) {
				map.fire('moveend');

			} else {
				offset = map._limitOffset(offset, map.options.maxBounds);

				requestAnimFrame(function () {
					map.panBy(offset, {
						duration: decelerationDuration,
						easeLinearity: ease,
						noMoveStart: true,
						animate: true
					});
				});
			}
		}
	}
});

// @section Handlers
// @property dragging: Handler
// Map dragging handler (by both mouse and touch).
Map.addInitHook('addHandler', 'dragging', Drag);

/*
 * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
 */

// @namespace Map
// @section Keyboard Navigation Options
Map.mergeOptions({
	// @option keyboard: Boolean = true
	// Makes the map focusable and allows users to navigate the map with keyboard
	// arrows and `+`/`-` keys.
	keyboard: true,

	// @option keyboardPanDelta: Number = 80
	// Amount of pixels to pan when pressing an arrow key.
	keyboardPanDelta: 80
});

var Keyboard = Handler.extend({

	keyCodes: {
		left:    [37],
		right:   [39],
		down:    [40],
		up:      [38],
		zoomIn:  [187, 107, 61, 171],
		zoomOut: [189, 109, 54, 173]
	},

	initialize: function (map) {
		this._map = map;

		this._setPanDelta(map.options.keyboardPanDelta);
		this._setZoomDelta(map.options.zoomDelta);
	},

	addHooks: function () {
		var container = this._map._container;

		// make the container focusable by tabbing
		if (container.tabIndex <= 0) {
			container.tabIndex = '0';
		}

		on(container, {
			focus: this._onFocus,
			blur: this._onBlur,
			mousedown: this._onMouseDown
		}, this);

		this._map.on({
			focus: this._addHooks,
			blur: this._removeHooks
		}, this);
	},

	removeHooks: function () {
		this._removeHooks();

		off(this._map._container, {
			focus: this._onFocus,
			blur: this._onBlur,
			mousedown: this._onMouseDown
		}, this);

		this._map.off({
			focus: this._addHooks,
			blur: this._removeHooks
		}, this);
	},

	_onMouseDown: function () {
		if (this._focused) { return; }

		var body = document.body,
		    docEl = document.documentElement,
		    top = body.scrollTop || docEl.scrollTop,
		    left = body.scrollLeft || docEl.scrollLeft;

		this._map._container.focus();

		window.scrollTo(left, top);
	},

	_onFocus: function () {
		this._focused = true;
		this._map.fire('focus');
	},

	_onBlur: function () {
		this._focused = false;
		this._map.fire('blur');
	},

	_setPanDelta: function (panDelta) {
		var keys = this._panKeys = {},
		    codes = this.keyCodes,
		    i, len;

		for (i = 0, len = codes.left.length; i < len; i++) {
			keys[codes.left[i]] = [-1 * panDelta, 0];
		}
		for (i = 0, len = codes.right.length; i < len; i++) {
			keys[codes.right[i]] = [panDelta, 0];
		}
		for (i = 0, len = codes.down.length; i < len; i++) {
			keys[codes.down[i]] = [0, panDelta];
		}
		for (i = 0, len = codes.up.length; i < len; i++) {
			keys[codes.up[i]] = [0, -1 * panDelta];
		}
	},

	_setZoomDelta: function (zoomDelta) {
		var keys = this._zoomKeys = {},
		    codes = this.keyCodes,
		    i, len;

		for (i = 0, len = codes.zoomIn.length; i < len; i++) {
			keys[codes.zoomIn[i]] = zoomDelta;
		}
		for (i = 0, len = codes.zoomOut.length; i < len; i++) {
			keys[codes.zoomOut[i]] = -zoomDelta;
		}
	},

	_addHooks: function () {
		on(document, 'keydown', this._onKeyDown, this);
	},

	_removeHooks: function () {
		off(document, 'keydown', this._onKeyDown, this);
	},

	_onKeyDown: function (e) {
		if (e.altKey || e.ctrlKey || e.metaKey) { return; }

		var key = e.keyCode,
		    map = this._map,
		    offset;

		if (key in this._panKeys) {
			if (!map._panAnim || !map._panAnim._inProgress) {
				offset = this._panKeys[key];
				if (e.shiftKey) {
					offset = toPoint(offset).multiplyBy(3);
				}

				map.panBy(offset);

				if (map.options.maxBounds) {
					map.panInsideBounds(map.options.maxBounds);
				}
			}
		} else if (key in this._zoomKeys) {
			map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);

		} else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) {
			map.closePopup();

		} else {
			return;
		}

		stop(e);
	}
});

// @section Handlers
// @section Handlers
// @property keyboard: Handler
// Keyboard navigation handler.
Map.addInitHook('addHandler', 'keyboard', Keyboard);

/*
 * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @section Mousewheel options
	// @option scrollWheelZoom: Boolean|String = true
	// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
	// it will zoom to the center of the view regardless of where the mouse was.
	scrollWheelZoom: true,

	// @option wheelDebounceTime: Number = 40
	// Limits the rate at which a wheel can fire (in milliseconds). By default
	// user can't zoom via wheel more often than once per 40 ms.
	wheelDebounceTime: 40,

	// @option wheelPxPerZoomLevel: Number = 60
	// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
	// mean a change of one full zoom level. Smaller values will make wheel-zooming
	// faster (and vice versa).
	wheelPxPerZoomLevel: 60
});

var ScrollWheelZoom = Handler.extend({
	addHooks: function () {
		on(this._map._container, 'mousewheel', this._onWheelScroll, this);

		this._delta = 0;
	},

	removeHooks: function () {
		off(this._map._container, 'mousewheel', this._onWheelScroll, this);
	},

	_onWheelScroll: function (e) {
		var delta = getWheelDelta(e);

		var debounce = this._map.options.wheelDebounceTime;

		this._delta += delta;
		this._lastMousePos = this._map.mouseEventToContainerPoint(e);

		if (!this._startTime) {
			this._startTime = +new Date();
		}

		var left = Math.max(debounce - (+new Date() - this._startTime), 0);

		clearTimeout(this._timer);
		this._timer = setTimeout(bind(this._performZoom, this), left);

		stop(e);
	},

	_performZoom: function () {
		var map = this._map,
		    zoom = map.getZoom(),
		    snap = this._map.options.zoomSnap || 0;

		map._stop(); // stop panning and fly animations if any

		// map the delta with a sigmoid function to -4..4 range leaning on -1..1
		var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
		    d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,
		    d4 = snap ? Math.ceil(d3 / snap) * snap : d3,
		    delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;

		this._delta = 0;
		this._startTime = null;

		if (!delta) { return; }

		if (map.options.scrollWheelZoom === 'center') {
			map.setZoom(zoom + delta);
		} else {
			map.setZoomAround(this._lastMousePos, zoom + delta);
		}
	}
});

// @section Handlers
// @property scrollWheelZoom: Handler
// Scroll wheel zoom handler.
Map.addInitHook('addHandler', 'scrollWheelZoom', ScrollWheelZoom);

/*
 * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @section Touch interaction options
	// @option tap: Boolean = true
	// Enables mobile hacks for supporting instant taps (fixing 200ms click
	// delay on iOS/Android) and touch holds (fired as `contextmenu` events).
	tap: true,

	// @option tapTolerance: Number = 15
	// The max number of pixels a user can shift his finger during touch
	// for it to be considered a valid tap.
	tapTolerance: 15
});

var Tap = Handler.extend({
	addHooks: function () {
		on(this._map._container, 'touchstart', this._onDown, this);
	},

	removeHooks: function () {
		off(this._map._container, 'touchstart', this._onDown, this);
	},

	_onDown: function (e) {
		if (!e.touches) { return; }

		preventDefault(e);

		this._fireClick = true;

		// don't simulate click or track longpress if more than 1 touch
		if (e.touches.length > 1) {
			this._fireClick = false;
			clearTimeout(this._holdTimeout);
			return;
		}

		var first = e.touches[0],
		    el = first.target;

		this._startPos = this._newPos = new Point(first.clientX, first.clientY);

		// if touching a link, highlight it
		if (el.tagName && el.tagName.toLowerCase() === 'a') {
			addClass(el, 'leaflet-active');
		}

		// simulate long hold but setting a timeout
		this._holdTimeout = setTimeout(bind(function () {
			if (this._isTapValid()) {
				this._fireClick = false;
				this._onUp();
				this._simulateEvent('contextmenu', first);
			}
		}, this), 1000);

		this._simulateEvent('mousedown', first);

		on(document, {
			touchmove: this._onMove,
			touchend: this._onUp
		}, this);
	},

	_onUp: function (e) {
		clearTimeout(this._holdTimeout);

		off(document, {
			touchmove: this._onMove,
			touchend: this._onUp
		}, this);

		if (this._fireClick && e && e.changedTouches) {

			var first = e.changedTouches[0],
			    el = first.target;

			if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
				removeClass(el, 'leaflet-active');
			}

			this._simulateEvent('mouseup', first);

			// simulate click if the touch didn't move too much
			if (this._isTapValid()) {
				this._simulateEvent('click', first);
			}
		}
	},

	_isTapValid: function () {
		return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
	},

	_onMove: function (e) {
		var first = e.touches[0];
		this._newPos = new Point(first.clientX, first.clientY);
		this._simulateEvent('mousemove', first);
	},

	_simulateEvent: function (type, e) {
		var simulatedEvent = document.createEvent('MouseEvents');

		simulatedEvent._simulated = true;
		e.target._simulatedClick = true;

		simulatedEvent.initMouseEvent(
		        type, true, true, window, 1,
		        e.screenX, e.screenY,
		        e.clientX, e.clientY,
		        false, false, false, false, 0, null);

		e.target.dispatchEvent(simulatedEvent);
	}
});

// @section Handlers
// @property tap: Handler
// Mobile touch hacks (quick tap and touch hold) handler.
if (touch && !pointer) {
	Map.addInitHook('addHandler', 'tap', Tap);
}

/*
 * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @section Touch interaction options
	// @option touchZoom: Boolean|String = *
	// Whether the map can be zoomed by touch-dragging with two fingers. If
	// passed `'center'`, it will zoom to the center of the view regardless of
	// where the touch events (fingers) were. Enabled for touch-capable web
	// browsers except for old Androids.
	touchZoom: touch && !android23,

	// @option bounceAtZoomLimits: Boolean = true
	// Set it to false if you don't want the map to zoom beyond min/max zoom
	// and then bounce back when pinch-zooming.
	bounceAtZoomLimits: true
});

var TouchZoom = Handler.extend({
	addHooks: function () {
		addClass(this._map._container, 'leaflet-touch-zoom');
		on(this._map._container, 'touchstart', this._onTouchStart, this);
	},

	removeHooks: function () {
		removeClass(this._map._container, 'leaflet-touch-zoom');
		off(this._map._container, 'touchstart', this._onTouchStart, this);
	},

	_onTouchStart: function (e) {
		var map = this._map;
		if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }

		var p1 = map.mouseEventToContainerPoint(e.touches[0]),
		    p2 = map.mouseEventToContainerPoint(e.touches[1]);

		this._centerPoint = map.getSize()._divideBy(2);
		this._startLatLng = map.containerPointToLatLng(this._centerPoint);
		if (map.options.touchZoom !== 'center') {
			this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
		}

		this._startDist = p1.distanceTo(p2);
		this._startZoom = map.getZoom();

		this._moved = false;
		this._zooming = true;

		map._stop();

		on(document, 'touchmove', this._onTouchMove, this);
		on(document, 'touchend', this._onTouchEnd, this);

		preventDefault(e);
	},

	_onTouchMove: function (e) {
		if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

		var map = this._map,
		    p1 = map.mouseEventToContainerPoint(e.touches[0]),
		    p2 = map.mouseEventToContainerPoint(e.touches[1]),
		    scale = p1.distanceTo(p2) / this._startDist;

		this._zoom = map.getScaleZoom(scale, this._startZoom);

		if (!map.options.bounceAtZoomLimits && (
			(this._zoom < map.getMinZoom() && scale < 1) ||
			(this._zoom > map.getMaxZoom() && scale > 1))) {
			this._zoom = map._limitZoom(this._zoom);
		}

		if (map.options.touchZoom === 'center') {
			this._center = this._startLatLng;
			if (scale === 1) { return; }
		} else {
			// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
			var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
			if (scale === 1 && delta.x === 0 && delta.y === 0) { return; }
			this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
		}

		if (!this._moved) {
			map._moveStart(true, false);
			this._moved = true;
		}

		cancelAnimFrame(this._animRequest);

		var moveFn = bind(map._move, map, this._center, this._zoom, {pinch: true, round: false});
		this._animRequest = requestAnimFrame(moveFn, this, true);

		preventDefault(e);
	},

	_onTouchEnd: function () {
		if (!this._moved || !this._zooming) {
			this._zooming = false;
			return;
		}

		this._zooming = false;
		cancelAnimFrame(this._animRequest);

		off(document, 'touchmove', this._onTouchMove);
		off(document, 'touchend', this._onTouchEnd);

		// Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
		if (this._map.options.zoomAnimation) {
			this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
		} else {
			this._map._resetView(this._center, this._map._limitZoom(this._zoom));
		}
	}
});

// @section Handlers
// @property touchZoom: Handler
// Touch zoom handler.
Map.addInitHook('addHandler', 'touchZoom', TouchZoom);

Map.BoxZoom = BoxZoom;
Map.DoubleClickZoom = DoubleClickZoom;
Map.Drag = Drag;
Map.Keyboard = Keyboard;
Map.ScrollWheelZoom = ScrollWheelZoom;
Map.Tap = Tap;
Map.TouchZoom = TouchZoom;

Object.freeze = freeze;

exports.version = version;
exports.Control = Control;
exports.control = control;
exports.Browser = Browser;
exports.Evented = Evented;
exports.Mixin = Mixin;
exports.Util = Util;
exports.Class = Class;
exports.Handler = Handler;
exports.extend = extend;
exports.bind = bind;
exports.stamp = stamp;
exports.setOptions = setOptions;
exports.DomEvent = DomEvent;
exports.DomUtil = DomUtil;
exports.PosAnimation = PosAnimation;
exports.Draggable = Draggable;
exports.LineUtil = LineUtil;
exports.PolyUtil = PolyUtil;
exports.Point = Point;
exports.point = toPoint;
exports.Bounds = Bounds;
exports.bounds = toBounds;
exports.Transformation = Transformation;
exports.transformation = toTransformation;
exports.Projection = index;
exports.LatLng = LatLng;
exports.latLng = toLatLng;
exports.LatLngBounds = LatLngBounds;
exports.latLngBounds = toLatLngBounds;
exports.CRS = CRS;
exports.GeoJSON = GeoJSON;
exports.geoJSON = geoJSON;
exports.geoJson = geoJson;
exports.Layer = Layer;
exports.LayerGroup = LayerGroup;
exports.layerGroup = layerGroup;
exports.FeatureGroup = FeatureGroup;
exports.featureGroup = featureGroup;
exports.ImageOverlay = ImageOverlay;
exports.imageOverlay = imageOverlay;
exports.VideoOverlay = VideoOverlay;
exports.videoOverlay = videoOverlay;
exports.SVGOverlay = SVGOverlay;
exports.svgOverlay = svgOverlay;
exports.DivOverlay = DivOverlay;
exports.Popup = Popup;
exports.popup = popup;
exports.Tooltip = Tooltip;
exports.tooltip = tooltip;
exports.Icon = Icon;
exports.icon = icon;
exports.DivIcon = DivIcon;
exports.divIcon = divIcon;
exports.Marker = Marker;
exports.marker = marker;
exports.TileLayer = TileLayer;
exports.tileLayer = tileLayer;
exports.GridLayer = GridLayer;
exports.gridLayer = gridLayer;
exports.SVG = SVG;
exports.svg = svg$1;
exports.Renderer = Renderer;
exports.Canvas = Canvas;
exports.canvas = canvas$1;
exports.Path = Path;
exports.CircleMarker = CircleMarker;
exports.circleMarker = circleMarker;
exports.Circle = Circle;
exports.circle = circle;
exports.Polyline = Polyline;
exports.polyline = polyline;
exports.Polygon = Polygon;
exports.polygon = polygon;
exports.Rectangle = Rectangle;
exports.rectangle = rectangle;
exports.Map = Map;
exports.map = createMap;

var oldL = window.L;
exports.noConflict = function() {
	window.L = oldL;
	return this;
}

// Always export us to window global (see #2364)
window.L = exports;

})));


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-leaflet/es/AttributionControl.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-leaflet/es/AttributionControl.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapControl */ "./node_modules/react-leaflet/es/MapControl.js");







var AttributionControl =
/*#__PURE__*/
function (_MapControl) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AttributionControl, _MapControl);

  function AttributionControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = AttributionControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Control"].Attribution(props);
  };

  return AttributionControl;
}(_MapControl__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(AttributionControl));

/***/ }),

/***/ "./node_modules/react-leaflet/es/Circle.js":
/*!*************************************************!*\
  !*** ./node_modules/react-leaflet/es/Circle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");








var Circle =
/*#__PURE__*/
function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Circle, _Path);

  function Circle() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Circle.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var center = props.center,
        radius = props.radius,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["center", "radius"]);

    return new leaflet__WEBPACK_IMPORTED_MODULE_2__["Circle"](center, radius, this.getOptions(options));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.center !== fromProps.center) {
      this.leafletElement.setLatLng(toProps.center);
    }

    if (toProps.radius !== fromProps.radius) {
      this.leafletElement.setRadius(toProps.radius);
    }
  };

  return Circle;
}(_Path__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withLeaflet"])(Circle));

/***/ }),

/***/ "./node_modules/react-leaflet/es/CircleMarker.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/CircleMarker.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");








var CircleMarker =
/*#__PURE__*/
function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(CircleMarker, _Path);

  function CircleMarker() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = CircleMarker.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__["CircleMarker"](props.center, this.getOptions(props));
    this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
      popupContainer: el
    });
    return el;
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.center !== fromProps.center) {
      this.leafletElement.setLatLng(toProps.center);
    }

    if (toProps.radius !== fromProps.radius) {
      this.leafletElement.setRadius(toProps.radius);
    }
  };

  return CircleMarker;
}(_Path__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withLeaflet"])(CircleMarker));

/***/ }),

/***/ "./node_modules/react-leaflet/es/DivOverlay.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/DivOverlay.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DivOverlay; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MapComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapComponent */ "./node_modules/react-leaflet/es/MapComponent.js");
/* harmony import */ var _utils_updateClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/updateClassName */ "./node_modules/react-leaflet/es/utils/updateClassName.js");









var DivOverlay =
/*#__PURE__*/
function (_MapComponent) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(DivOverlay, _MapComponent);

  function DivOverlay(props) {
    var _this;

    _this = _MapComponent.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onClose", function () {
      if (_this.props.onClose) {
        _this.props.onClose();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onOpen", function () {
      _this.forceUpdate(); // Re-render now that leafletElement is created


      if (_this.props.onOpen) {
        _this.props.onOpen();
      }
    });

    _this.leafletElement = _this.createLeafletElement(props);
    return _this;
  }

  var _proto = DivOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(_props) {
    throw new Error('createLeafletElement() must be implemented');
  };

  _proto.updateLeafletElement = function updateLeafletElement(_prevProps, _props) {};

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    Object(_utils_updateClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(this.leafletElement._container, prevProps.className, this.props.className);
    this.updateLeafletElement(prevProps, this.props);

    if (this.leafletElement.isOpen()) {
      this.leafletElement.update();
      this.onRender();
    }
  };

  _proto.onRender = function onRender() {};

  _proto.render = function render() {
    if (this.leafletElement._contentNode) {
      return Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["createPortal"])(this.props.children, this.leafletElement._contentNode);
    }

    return null;
  };

  return DivOverlay;
}(_MapComponent__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/FeatureGroup.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/FeatureGroup.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");








var FeatureGroup =
/*#__PURE__*/
function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(FeatureGroup, _Path);

  function FeatureGroup() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = FeatureGroup.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__["FeatureGroup"](this.getOptions(props));
    this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
      layerContainer: el,
      popupContainer: el
    });
    return el;
  };

  _proto.componentDidMount = function componentDidMount() {
    _Path.prototype.componentDidMount.call(this);

    this.setStyle(this.props);
  };

  return FeatureGroup;
}(_Path__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withLeaflet"])(FeatureGroup));

/***/ }),

/***/ "./node_modules/react-leaflet/es/GeoJSON.js":
/*!**************************************************!*\
  !*** ./node_modules/react-leaflet/es/GeoJSON.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");







var GeoJSON =
/*#__PURE__*/
function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GeoJSON, _Path);

  function GeoJSON() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = GeoJSON.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["GeoJSON"](props.data, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (typeof toProps.style === 'function') {
      this.leafletElement.setStyle(toProps.style);
    } else {
      this.setStyleIfChanged(fromProps, toProps);
    }
  };

  return GeoJSON;
}(_Path__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(GeoJSON));

/***/ }),

/***/ "./node_modules/react-leaflet/es/GridLayer.js":
/*!****************************************************!*\
  !*** ./node_modules/react-leaflet/es/GridLayer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");







var GridLayer =
/*#__PURE__*/
function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(GridLayer, _MapLayer);

  function GridLayer() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = GridLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_2__["GridLayer"](this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    var opacity = toProps.opacity,
        zIndex = toProps.zIndex;

    if (opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(opacity);
    }

    if (zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(zIndex);
    }
  };

  _proto.getOptions = function getOptions(props) {
    var options = _MapLayer.prototype.getOptions.call(this, props);

    return props.leaflet.map == null ? options : // $FlowFixMe: object spread type
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      maxZoom: props.leaflet.map.options.maxZoom,
      minZoom: props.leaflet.map.options.minZoom
    }, options);
  };

  _proto.render = function render() {
    return null;
  };

  return GridLayer;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/ImageOverlay.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/ImageOverlay.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");








var ImageOverlay =
/*#__PURE__*/
function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ImageOverlay, _MapLayer);

  function ImageOverlay() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = ImageOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__["ImageOverlay"](props.url, props.bounds, this.getOptions(props));
    this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
      popupContainer: el
    });
    return el;
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url);
    }

    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLngBounds"])(toProps.bounds));
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(toProps.zIndex);
    }
  };

  return ImageOverlay;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withLeaflet"])(ImageOverlay));

/***/ }),

/***/ "./node_modules/react-leaflet/es/LayerGroup.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/LayerGroup.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");








var LayerGroup =
/*#__PURE__*/
function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(LayerGroup, _MapLayer);

  function LayerGroup() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = LayerGroup.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__["LayerGroup"]([], this.getOptions(props));
    this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
      layerContainer: el
    });
    return el;
  };

  return LayerGroup;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withLeaflet"])(LayerGroup));

/***/ }),

/***/ "./node_modules/react-leaflet/es/LayersControl.js":
/*!********************************************************!*\
  !*** ./node_modules/react-leaflet/es/LayersControl.js ***!
  \********************************************************/
/*! exports provided: ControlledLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlledLayer", function() { return ControlledLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MapControl */ "./node_modules/react-leaflet/es/MapControl.js");











// Abtract class for layer container, extended by BaseLayer and Overlay
var ControlledLayer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ControlledLayer, _Component);

  function ControlledLayer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "contextValue", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "layer", void 0);

    return _this;
  }

  var _proto = ControlledLayer.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(_ref) {
    var checked = _ref.checked;

    if (this.props.leaflet.map == null) {
      return;
    } // Handle dynamically (un)checking the layer => adding/removing from the map


    if (this.props.checked === true && (checked == null || checked === false)) {
      this.props.leaflet.map.addLayer(this.layer);
    } else if (checked === true && (this.props.checked == null || this.props.checked === false)) {
      this.props.leaflet.map.removeLayer(this.layer);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.removeLayerControl(this.layer);
  };

  _proto.addLayer = function addLayer() {
    throw new Error('Must be implemented in extending class');
  };

  _proto.removeLayer = function removeLayer(layer) {
    this.props.removeLayer(layer);
  };

  _proto.render = function render() {
    var children = this.props.children;
    return children ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_7__["LeafletProvider"], {
      value: this.contextValue
    }, children) : null;
  };

  return ControlledLayer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var BaseLayer =
/*#__PURE__*/
function (_ControlledLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(BaseLayer, _ControlledLayer);

  function BaseLayer(props) {
    var _this2;

    _this2 = _ControlledLayer.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "addLayer", function (layer) {
      _this2.layer = layer; // Keep layer reference to handle dynamic changes of props

      var _this2$props = _this2.props,
          addBaseLayer = _this2$props.addBaseLayer,
          checked = _this2$props.checked,
          name = _this2$props.name;
      addBaseLayer(layer, name, checked);
    });

    _this2.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props.leaflet, {
      layerContainer: {
        addLayer: _this2.addLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2)),
        removeLayer: _this2.removeLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2))
      }
    });
    return _this2;
  }

  return BaseLayer;
}(ControlledLayer);

var Overlay =
/*#__PURE__*/
function (_ControlledLayer2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Overlay, _ControlledLayer2);

  function Overlay(props) {
    var _this3;

    _this3 = _ControlledLayer2.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3), "addLayer", function (layer) {
      _this3.layer = layer; // Keep layer reference to handle dynamic changes of props

      var _this3$props = _this3.props,
          addOverlay = _this3$props.addOverlay,
          checked = _this3$props.checked,
          name = _this3$props.name;
      addOverlay(layer, name, checked);
    });

    _this3.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props.leaflet, {
      layerContainer: {
        addLayer: _this3.addLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3)),
        removeLayer: _this3.removeLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3))
      }
    });
    return _this3;
  }

  return Overlay;
}(ControlledLayer);

var LayersControl =
/*#__PURE__*/
function (_MapControl) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(LayersControl, _MapControl);

  function LayersControl(props) {
    var _this4;

    _this4 = _MapControl.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4), "controlProps", void 0);

    _this4.controlProps = {
      addBaseLayer: _this4.addBaseLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4)),
      addOverlay: _this4.addOverlay.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4)),
      leaflet: props.leaflet,
      removeLayer: _this4.removeLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4)),
      removeLayerControl: _this4.removeLayerControl.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4))
    };
    return _this4;
  }

  var _proto2 = LayersControl.prototype;

  _proto2.createLeafletElement = function createLeafletElement(props) {
    var _children = props.children,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children"]);

    return new leaflet__WEBPACK_IMPORTED_MODULE_5__["Control"].Layers(undefined, undefined, options);
  };

  _proto2.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _MapControl.prototype.updateLeafletElement.call(this, fromProps, toProps);

    if (toProps.collapsed !== fromProps.collapsed) {
      if (toProps.collapsed === true) {
        this.leafletElement.collapse();
      } else {
        this.leafletElement.expand();
      }
    }
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    var _this5 = this;

    setTimeout(function () {
      _MapControl.prototype.componentWillUnmount.call(_this5);
    }, 0);
  };

  _proto2.addBaseLayer = function addBaseLayer(layer, name, checked) {
    if (checked === void 0) {
      checked = false;
    }

    if (checked && this.props.leaflet.map != null) {
      this.props.leaflet.map.addLayer(layer);
    }

    this.leafletElement.addBaseLayer(layer, name);
  };

  _proto2.addOverlay = function addOverlay(layer, name, checked) {
    if (checked === void 0) {
      checked = false;
    }

    if (checked && this.props.leaflet.map != null) {
      this.props.leaflet.map.addLayer(layer);
    }

    this.leafletElement.addOverlay(layer, name);
  };

  _proto2.removeLayer = function removeLayer(layer) {
    if (this.props.leaflet.map != null) {
      this.props.leaflet.map.removeLayer(layer);
    }
  };

  _proto2.removeLayerControl = function removeLayerControl(layer) {
    this.leafletElement.removeLayer(layer);
  };

  _proto2.render = function render() {
    var _this6 = this;

    var children = react__WEBPACK_IMPORTED_MODULE_6__["Children"].map(this.props.children, function (child) {
      return child ? Object(react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"])(child, _this6.controlProps) : null;
    });
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, children);
  };

  return LayersControl;
}(_MapControl__WEBPACK_IMPORTED_MODULE_8__["default"]);

var LayersControlExport = Object(_context__WEBPACK_IMPORTED_MODULE_7__["withLeaflet"])(LayersControl);
LayersControlExport.BaseLayer = BaseLayer;
LayersControlExport.Overlay = Overlay;
/* harmony default export */ __webpack_exports__["default"] = (LayersControlExport);

/***/ }),

/***/ "./node_modules/react-leaflet/es/Map.js":
/*!**********************************************!*\
  !*** ./node_modules/react-leaflet/es/Map.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapEvented__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MapEvented */ "./node_modules/react-leaflet/es/MapEvented.js");
/* harmony import */ var _utils_updateClassName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/updateClassName */ "./node_modules/react-leaflet/es/utils/updateClassName.js");
/* harmony import */ var _utils_omit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/omit */ "./node_modules/react-leaflet/es/utils/omit.js");













var OTHER_PROPS = ['children', 'className', 'id', 'style', 'useFlyTo', 'whenReady'];

var normalizeCenter = function normalizeCenter(pos) {
  return Array.isArray(pos) ? [pos[0], pos[1]] : [pos.lat, pos.lon ? pos.lon : pos.lng];
};

var Map =
/*#__PURE__*/
function (_MapEvented) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Map, _MapEvented);

  function Map(props) {
    var _this;

    _this = _MapEvented.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "className", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "contextValue", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "container", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "viewport", {
      center: undefined,
      zoom: undefined
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_ready", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_updating", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onViewportChange", function () {
      var center = _this.leafletElement.getCenter();

      _this.viewport = {
        center: center ? [center.lat, center.lng] : undefined,
        zoom: _this.leafletElement.getZoom()
      };

      if (_this.props.onViewportChange && !_this._updating) {
        _this.props.onViewportChange(_this.viewport);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onViewportChanged", function () {
      if (_this.props.onViewportChanged && !_this._updating) {
        _this.props.onViewportChanged(_this.viewport);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "bindContainer", function (container) {
      _this.container = container;
    });

    _this.className = props.className;
    return _this;
  }

  var _proto = Map.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var viewport = props.viewport,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["viewport"]);

    if (viewport) {
      if (viewport.center) {
        options.center = viewport.center;
      }

      if (typeof viewport.zoom === 'number') {
        options.zoom = viewport.zoom;
      }
    }

    return new leaflet__WEBPACK_IMPORTED_MODULE_5__["Map"](this.container, options);
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    this._updating = true;
    var bounds = toProps.bounds,
        boundsOptions = toProps.boundsOptions,
        boxZoom = toProps.boxZoom,
        center = toProps.center,
        className = toProps.className,
        doubleClickZoom = toProps.doubleClickZoom,
        dragging = toProps.dragging,
        keyboard = toProps.keyboard,
        maxBounds = toProps.maxBounds,
        scrollWheelZoom = toProps.scrollWheelZoom,
        tap = toProps.tap,
        touchZoom = toProps.touchZoom,
        useFlyTo = toProps.useFlyTo,
        viewport = toProps.viewport,
        zoom = toProps.zoom;
    Object(_utils_updateClassName__WEBPACK_IMPORTED_MODULE_9__["default"])(this.container, fromProps.className, className);

    if (viewport && viewport !== fromProps.viewport) {
      var c = viewport.center ? viewport.center : center;
      var z = viewport.zoom == null ? zoom : viewport.zoom;

      if (useFlyTo === true) {
        this.leafletElement.flyTo(c, z, this.getZoomPanOptions(toProps));
      } else {
        this.leafletElement.setView(c, z, this.getZoomPanOptions(toProps));
      }
    } else if (center && this.shouldUpdateCenter(center, fromProps.center)) {
      if (useFlyTo === true) {
        this.leafletElement.flyTo(center, zoom, this.getZoomPanOptions(toProps));
      } else {
        this.leafletElement.setView(center, zoom, this.getZoomPanOptions(toProps));
      }
    } else if (typeof zoom === 'number' && zoom !== fromProps.zoom) {
      if (fromProps.zoom == null) {
        this.leafletElement.setView(center, zoom, this.getZoomPanOptions(toProps));
      } else {
        this.leafletElement.setZoom(zoom, this.getZoomPanOptions(toProps));
      }
    }

    if (maxBounds && this.shouldUpdateBounds(maxBounds, fromProps.maxBounds)) {
      this.leafletElement.setMaxBounds(maxBounds);
    }

    if (bounds && (this.shouldUpdateBounds(bounds, fromProps.bounds) || boundsOptions !== fromProps.boundsOptions)) {
      if (useFlyTo === true) {
        this.leafletElement.flyToBounds(bounds, this.getFitBoundsOptions(toProps));
      } else {
        this.leafletElement.fitBounds(bounds, this.getFitBoundsOptions(toProps));
      }
    }

    if (boxZoom !== fromProps.boxZoom) {
      if (boxZoom === true) {
        this.leafletElement.boxZoom.enable();
      } else {
        this.leafletElement.boxZoom.disable();
      }
    }

    if (doubleClickZoom !== fromProps.doubleClickZoom) {
      if (doubleClickZoom === true || typeof doubleClickZoom === 'string') {
        this.leafletElement.options.doubleClickZoom = doubleClickZoom;
        this.leafletElement.doubleClickZoom.enable();
      } else {
        this.leafletElement.doubleClickZoom.disable();
      }
    }

    if (dragging !== fromProps.dragging) {
      if (dragging === true) {
        this.leafletElement.dragging.enable();
      } else {
        this.leafletElement.dragging.disable();
      }
    }

    if (keyboard !== fromProps.keyboard) {
      if (keyboard === true) {
        this.leafletElement.keyboard.enable();
      } else {
        this.leafletElement.keyboard.disable();
      }
    }

    if (scrollWheelZoom !== fromProps.scrollWheelZoom) {
      if (scrollWheelZoom === true || typeof scrollWheelZoom === 'string') {
        this.leafletElement.options.scrollWheelZoom = scrollWheelZoom;
        this.leafletElement.scrollWheelZoom.enable();
      } else {
        this.leafletElement.scrollWheelZoom.disable();
      }
    }

    if (tap !== fromProps.tap) {
      if (tap === true) {
        this.leafletElement.tap.enable();
      } else {
        this.leafletElement.tap.disable();
      }
    }

    if (touchZoom !== fromProps.touchZoom) {
      if (touchZoom === true || typeof touchZoom === 'string') {
        this.leafletElement.options.touchZoom = touchZoom;
        this.leafletElement.touchZoom.enable();
      } else {
        this.leafletElement.touchZoom.disable();
      }
    }

    this._updating = false;
  };

  _proto.getZoomPanOptions = function getZoomPanOptions(props) {
    var animate = props.animate,
        duration = props.duration,
        easeLinearity = props.easeLinearity,
        noMoveStart = props.noMoveStart;
    return {
      animate: animate,
      duration: duration,
      easeLinearity: easeLinearity,
      noMoveStart: noMoveStart
    };
  };

  _proto.getFitBoundsOptions = function getFitBoundsOptions(props) {
    var zoomPanOptions = this.getZoomPanOptions(props);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, zoomPanOptions, {}, props.boundsOptions);
  };

  _proto.componentDidMount = function componentDidMount() {
    var props = _utils_omit__WEBPACK_IMPORTED_MODULE_10__["default"].apply(void 0, [this.props].concat(OTHER_PROPS));
    this.leafletElement = this.createLeafletElement(props);
    this.leafletElement.on('move', this.onViewportChange);
    this.leafletElement.on('moveend', this.onViewportChanged);

    if (props.bounds != null) {
      this.leafletElement.fitBounds(props.bounds, this.getFitBoundsOptions(props));
    }

    this.contextValue = {
      layerContainer: this.leafletElement,
      map: this.leafletElement
    };

    _MapEvented.prototype.componentDidMount.call(this);

    this.forceUpdate(); // Re-render now that leafletElement is created
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this._ready === false) {
      this._ready = true;

      if (this.props.whenReady) {
        this.leafletElement.whenReady(this.props.whenReady);
      }
    }

    _MapEvented.prototype.componentDidUpdate.call(this, prevProps);

    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _MapEvented.prototype.componentWillUnmount.call(this);

    this.leafletElement.off('move', this.onViewportChange);
    this.leafletElement.off('moveend', this.onViewportChanged); // The canvas renderer uses requestAnimationFrame, making a deferred call to a deleted object
    // When preferCanvas is set, use simpler teardown logic

    if (this.props.preferCanvas === true) {
      this.leafletElement._initEvents(true);

      this.leafletElement._stop();
    } else {
      this.leafletElement.remove();
    }
  };

  _proto.shouldUpdateCenter = function shouldUpdateCenter(next, prev) {
    if (!prev) return true;
    next = normalizeCenter(next);
    prev = normalizeCenter(prev);
    return next[0] !== prev[0] || next[1] !== prev[1];
  };

  _proto.shouldUpdateBounds = function shouldUpdateBounds(next, prev) {
    return prev ? !Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["latLngBounds"])(next).equals(Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["latLngBounds"])(prev)) : true;
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: this.className,
      id: this.props.id,
      ref: this.bindContainer,
      style: this.props.style
    }, this.contextValue ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_7__["LeafletProvider"], {
      value: this.contextValue
    }, this.props.children) : null);
  };

  return Map;
}(_MapEvented__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/MapComponent.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/MapComponent.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapComponent; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _MapEvented__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapEvented */ "./node_modules/react-leaflet/es/MapEvented.js");






var MapComponent =
/*#__PURE__*/
function (_MapEvented) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(MapComponent, _MapEvented);

  function MapComponent() {
    return _MapEvented.apply(this, arguments) || this;
  }

  var _proto = MapComponent.prototype;

  _proto.getOptions = function getOptions(props) {
    if (props.pane != null) {
      return props;
    }

    if (props.leaflet != null && props.leaflet.pane != null) {
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        pane: props.leaflet.pane
      });
    }

    return props;
  };

  return MapComponent;
}(_MapEvented__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/MapControl.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/MapControl.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapControl; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);








var MapControl =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(MapControl, _Component);

  function MapControl(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "leafletElement", void 0);

    _this.leafletElement = _this.createLeafletElement(_this.props);
    return _this;
  }

  var _proto = MapControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(_props) {
    throw new Error('createLeafletElement() must be implemented');
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setPosition(toProps.position);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    this.leafletElement.addTo(this.props.leaflet.map);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.leafletElement.remove();
  };

  _proto.render = function render() {
    return null;
  };

  return MapControl;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/MapEvented.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/MapEvented.js ***!
  \*****************************************************/
/*! exports provided: EVENTS_RE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS_RE", function() { return EVENTS_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapEvented; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);







var EVENTS_RE = /^on(.+)$/i;

var MapEvented =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(MapEvented, _Component);

  function MapEvented(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "_leafletEvents", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "leafletElement", void 0);

    _this._leafletEvents = _this.extractLeafletEvents(props);
    return _this;
  }

  var _proto = MapEvented.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.bindLeafletEvents(this._leafletEvents);
  };

  _proto.componentDidUpdate = function componentDidUpdate(_prevProps) {
    this._leafletEvents = this.bindLeafletEvents(this.extractLeafletEvents(this.props), this._leafletEvents);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    var el = this.leafletElement;
    if (!el) return;
    Object.keys(this._leafletEvents).forEach(function (ev) {
      el.off(ev, _this2._leafletEvents[ev]);
    });
  };

  _proto.extractLeafletEvents = function extractLeafletEvents(props) {
    return Object.keys(props).reduce(function (res, prop) {
      if (EVENTS_RE.test(prop)) {
        if (props[prop] != null) {
          var _key = prop.replace(EVENTS_RE, function (match, p) {
            return p.toLowerCase();
          });

          res[_key] = props[prop];
        }
      }

      return res;
    }, {});
  };

  _proto.bindLeafletEvents = function bindLeafletEvents(next, prev) {
    if (next === void 0) {
      next = {};
    }

    if (prev === void 0) {
      prev = {};
    }

    var el = this.leafletElement;
    if (el == null || el.on == null) return {};

    var diff = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prev);

    Object.keys(prev).forEach(function (ev) {
      if (next[ev] == null || prev[ev] !== next[ev]) {
        delete diff[ev];
        el.off(ev, prev[ev]);
      }
    });
    Object.keys(next).forEach(function (ev) {
      if (prev[ev] == null || next[ev] !== prev[ev]) {
        diff[ev] = next[ev];
        el.on(ev, next[ev]);
      }
    });
    return diff;
  };

  _proto.fireLeafletEvent = function fireLeafletEvent(type, data) {
    var el = this.leafletElement;
    if (el) el.fire(type, data);
  };

  return MapEvented;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/MapLayer.js":
/*!***************************************************!*\
  !*** ./node_modules/react-leaflet/es/MapLayer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MapComponent */ "./node_modules/react-leaflet/es/MapComponent.js");










var MapLayer =
/*#__PURE__*/
function (_MapComponent) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(MapLayer, _MapComponent);

  function MapLayer(props) {
    var _this;

    _this = _MapComponent.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "contextValue", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "leafletElement", void 0);

    _this.leafletElement = _this.createLeafletElement(props);
    return _this;
  }

  var _proto = MapLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(_props) {
    throw new Error('createLeafletElement() must be implemented');
  };

  _proto.updateLeafletElement = function updateLeafletElement(_fromProps, _toProps) {};

  _proto.componentDidMount = function componentDidMount() {
    _MapComponent.prototype.componentDidMount.call(this);

    this.layerContainer.addLayer(this.leafletElement);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapComponent.prototype.componentDidUpdate.call(this, prevProps);

    if (this.props.attribution !== prevProps.attribution) {
      var map = this.props.leaflet.map;

      if (map != null && map.attributionControl != null) {
        map.attributionControl.removeAttribution(prevProps.attribution);
        map.attributionControl.addAttribution(this.props.attribution);
      }
    }

    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _MapComponent.prototype.componentWillUnmount.call(this);

    this.layerContainer.removeLayer(this.leafletElement);
  };

  _proto.render = function render() {
    var children = this.props.children;

    if (children == null) {
      return null;
    }

    return this.contextValue == null ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, children) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_5__["LeafletProvider"], {
      value: this.contextValue
    }, children);
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MapLayer, [{
    key: "layerContainer",
    get: function get() {
      return this.props.leaflet.layerContainer || this.props.leaflet.map;
    }
  }]);

  return MapLayer;
}(_MapComponent__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/Marker.js":
/*!*************************************************!*\
  !*** ./node_modules/react-leaflet/es/Marker.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");









var Marker =
/*#__PURE__*/
function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Marker, _MapLayer);

  function Marker() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = Marker.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"](props.position, this.getOptions(props));
    this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
      popupContainer: el
    });
    return el;
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setLatLng(toProps.position);
    }

    if (toProps.icon !== fromProps.icon) {
      this.leafletElement.setIcon(toProps.icon);
    }

    if (toProps.zIndexOffset !== fromProps.zIndexOffset) {
      this.leafletElement.setZIndexOffset(toProps.zIndexOffset);
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.draggable !== fromProps.draggable) {
      if (toProps.draggable === true) {
        this.leafletElement.dragging.enable();
      } else {
        this.leafletElement.dragging.disable();
      }
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    return children == null || this.contextValue == null ? null : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_4__["LeafletProvider"], {
      value: this.contextValue
    }, children);
  };

  return Marker;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_4__["withLeaflet"])(Marker));

/***/ }),

/***/ "./node_modules/react-leaflet/es/Pane.js":
/*!***********************************************!*\
  !*** ./node_modules/react-leaflet/es/Pane.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _utils_updateClassName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/updateClassName */ "./node_modules/react-leaflet/es/utils/updateClassName.js");
/* harmony import */ var _utils_omit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/omit */ "./node_modules/react-leaflet/es/utils/omit.js");






// flowlint sketchy-null-string:off





var idCounter = 0;

var uniqueId = function uniqueId() {
  return ++idCounter;
};

var LEAFLET_PANES = ['tile', 'shadow', 'overlay', 'map', 'marker', 'tooltip', 'popup'];
var PANE_RE = /-*pane/gi;

var isLeafletPane = function isLeafletPane(name) {
  return LEAFLET_PANES.indexOf(name.replace(PANE_RE, '')) !== -1;
};

var paneStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

var Pane =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Pane, _Component);

  function Pane() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "state", {
      name: undefined,
      context: undefined
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "setStyle", function (_temp) {
      var _ref = _temp === void 0 ? _this.props : _temp,
          style = _ref.style,
          className = _ref.className;

      var pane = _this.getPane(_this.state.name);

      if (pane) {
        if (className) {
          Object(_utils_updateClassName__WEBPACK_IMPORTED_MODULE_7__["addClassName"])(pane, className);
        }

        if (style) {
          // Without the cast, Flow throws this error:
          //   Cannot assign style[key] to pane.style[key] because string
          //   is incompatible with number.
          Object.keys(style).forEach(function (key) {
            pane.style[key] = style[key];
          });
        }
      }
    });

    return _this;
  }

  var _proto = Pane.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.createPane(this.props);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!this.state.name) {
      // Do nothing if this.state.name is undefined due to errors or
      // an invalid props.name value
      return;
    } // If the 'name' prop has changed the current pane is unmounted and a new
    // pane is created.


    if (this.props.name !== prevProps.name) {
      this.removePane();
      this.createPane(this.props);
    } else {
      // Remove the previous css class name from the pane if it has changed.
      // setStyle() will take care of adding in the updated className
      if (prevProps.className && this.props.className !== prevProps.className) {
        var pane = this.getPane(this.state.name);

        if (pane != null && prevProps.className != null) {
          Object(_utils_updateClassName__WEBPACK_IMPORTED_MODULE_7__["removeClassName"])(pane, prevProps.className);
        }
      } // Update the pane's DOM node style and class


      this.setStyle(this.props);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removePane();
  };

  _proto.createPane = function createPane(props) {
    var map = props.leaflet.map;
    var name = props.name || "pane-" + uniqueId();

    if (map != null && map.createPane != null) {
      var isDefault = isLeafletPane(name);
      var existing = isDefault || this.getPane(name);

      if (existing == null) {
        map.createPane(name, this.getParentPane());
      } else {
        var message = isDefault ? "You must use a unique name for a pane that is not a default leaflet pane (" + name + ")" : "A pane with this name already exists. (" + name + ")";
         true ? warning__WEBPACK_IMPORTED_MODULE_5___default()(false, message) : undefined;
      }

      this.setState({
        name: name,
        context: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
          pane: name
        })
      }, this.setStyle);
    }
  };

  _proto.removePane = function removePane() {
    // Remove the created pane
    var name = this.state.name;

    if (name != null) {
      var pane = this.getPane(name);
      if (pane != null && pane.remove) pane.remove();
      var map = this.props.leaflet.map;

      if (map != null && map._panes != null) {
        map._panes = Object(_utils_omit__WEBPACK_IMPORTED_MODULE_8__["default"])(map._panes, name);
        map._paneRenderers = Object(_utils_omit__WEBPACK_IMPORTED_MODULE_8__["default"])(map._paneRenderers, name);
      }
    }
  };

  _proto.getParentPane = function getParentPane() {
    return this.getPane(this.props.pane || this.props.leaflet.pane);
  };

  _proto.getPane = function getPane(name) {
    if (name != null && this.props.leaflet.map != null) {
      return this.props.leaflet.map.getPane(name);
    }
  };

  _proto.render = function render() {
    var context = this.state.context;
    return context ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_6__["LeafletProvider"], {
      value: context
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: paneStyles
    }, this.props.children)) : null;
  };

  return Pane;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_6__["withLeaflet"])(Pane));

/***/ }),

/***/ "./node_modules/react-leaflet/es/Path.js":
/*!***********************************************!*\
  !*** ./node_modules/react-leaflet/es/Path.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");
/* harmony import */ var _utils_pick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/pick */ "./node_modules/react-leaflet/es/utils/pick.js");







var OPTIONS = ['stroke', 'color', 'weight', 'opacity', 'lineCap', 'lineJoin', 'dashArray', 'dashOffset', 'fill', 'fillColor', 'fillOpacity', 'fillRule', 'bubblingMouseEvents', 'renderer', 'className', // Interactive Layer
'interactive', // Layer
'pane', 'attribution'];

var Path =
/*#__PURE__*/
function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Path, _MapLayer);

  function Path(props) {
    var _this;

    _this = _MapLayer.call(this, props) || this;

    if (_this.contextValue == null) {
      _this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
        popupContainer: _this.leafletElement
      });
    }

    return _this;
  }

  var _proto = Path.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapLayer.prototype.componentDidUpdate.call(this, prevProps);

    this.setStyleIfChanged(prevProps, this.props);
  };

  _proto.getPathOptions = function getPathOptions(props) {
    return Object(_utils_pick__WEBPACK_IMPORTED_MODULE_4__["default"])(props, OPTIONS);
  };

  _proto.setStyle = function setStyle(options) {
    if (options === void 0) {
      options = {};
    }

    this.leafletElement.setStyle(options);
  };

  _proto.setStyleIfChanged = function setStyleIfChanged(fromProps, toProps) {
    var nextStyle = this.getPathOptions(toProps);

    if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default()(nextStyle, this.getPathOptions(fromProps))) {
      this.setStyle(nextStyle);
    }
  };

  return Path;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/Polygon.js":
/*!**************************************************!*\
  !*** ./node_modules/react-leaflet/es/Polygon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");







var Polygon =
/*#__PURE__*/
function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Polygon, _Path);

  function Polygon() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Polygon.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Polygon"](props.positions, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.positions !== fromProps.positions) {
      this.leafletElement.setLatLngs(toProps.positions);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Polygon;
}(_Path__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(Polygon));

/***/ }),

/***/ "./node_modules/react-leaflet/es/Polyline.js":
/*!***************************************************!*\
  !*** ./node_modules/react-leaflet/es/Polyline.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");







var Polyline =
/*#__PURE__*/
function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Polyline, _Path);

  function Polyline() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Polyline.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Polyline"](props.positions, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.positions !== fromProps.positions) {
      this.leafletElement.setLatLngs(toProps.positions);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Polyline;
}(_Path__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(Polyline));

/***/ }),

/***/ "./node_modules/react-leaflet/es/Popup.js":
/*!************************************************!*\
  !*** ./node_modules/react-leaflet/es/Popup.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _DivOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DivOverlay */ "./node_modules/react-leaflet/es/DivOverlay.js");










var Popup =
/*#__PURE__*/
function (_DivOverlay) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Popup, _DivOverlay);

  function Popup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _DivOverlay.call.apply(_DivOverlay, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "onPopupOpen", function (_ref) {
      var popup = _ref.popup;

      if (popup === _this.leafletElement) {
        _this.onOpen();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "onPopupClose", function (_ref2) {
      var popup = _ref2.popup;

      if (popup === _this.leafletElement) {
        _this.onClose();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "onRender", function () {
      if (_this.props.autoPan !== false && _this.leafletElement.isOpen()) {
        if (_this.leafletElement._map && _this.leafletElement._map._panAnim) {
          _this.leafletElement._map._panAnim = undefined;
        }

        _this.leafletElement._adjustPan();
      }
    });

    return _this;
  }

  var _proto = Popup.prototype;

  _proto.getOptions = function getOptions(props) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _DivOverlay.prototype.getOptions.call(this, props), {
      autoPan: false
    });
  };

  _proto.createLeafletElement = function createLeafletElement(props) {
    var options = this.getOptions(props);
    options.autoPan = props.autoPan !== false;
    return new leaflet__WEBPACK_IMPORTED_MODULE_4__["Popup"](options, props.leaflet.popupContainer);
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setLatLng(toProps.position);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    var position = this.props.position;
    var _this$props$leaflet = this.props.leaflet,
        map = _this$props$leaflet.map,
        popupContainer = _this$props$leaflet.popupContainer;
    var el = this.leafletElement;

    if (map != null) {
      map.on({
        popupopen: this.onPopupOpen,
        popupclose: this.onPopupClose
      });
    }

    if (popupContainer) {
      // Attach to container component
      popupContainer.bindPopup(el);
    } else {
      // Attach to a Map
      if (position) {
        el.setLatLng(position);
      }

      el.openOn(map);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var map = this.props.leaflet.map;

    if (map != null) {
      map.off({
        popupopen: this.onPopupOpen,
        popupclose: this.onPopupClose
      });
      map.removeLayer(this.leafletElement);
    }

    _DivOverlay.prototype.componentWillUnmount.call(this);
  };

  return Popup;
}(_DivOverlay__WEBPACK_IMPORTED_MODULE_6__["default"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Popup, "defaultProps", {
  pane: 'popupPane'
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_5__["withLeaflet"])(Popup));

/***/ }),

/***/ "./node_modules/react-leaflet/es/Rectangle.js":
/*!****************************************************!*\
  !*** ./node_modules/react-leaflet/es/Rectangle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");







var Rectangle =
/*#__PURE__*/
function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Rectangle, _Path);

  function Rectangle() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Rectangle.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Rectangle"](props.bounds, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(toProps.bounds);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Rectangle;
}(_Path__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(Rectangle));

/***/ }),

/***/ "./node_modules/react-leaflet/es/SVGOverlay.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/SVGOverlay.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MapComponent */ "./node_modules/react-leaflet/es/MapComponent.js");











var SVGOverlay =
/*#__PURE__*/
function (_MapComponent) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(SVGOverlay, _MapComponent);

  function SVGOverlay(props) {
    var _this;

    _this = _MapComponent.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "leafletElement", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "container", void 0);

    _this.leafletElement = _this.createLeafletElement(props);
    return _this;
  }

  var _proto = SVGOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    this.container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    return new leaflet__WEBPACK_IMPORTED_MODULE_4__["SVGOverlay"](this.container, props.bounds, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(toProps.bounds);
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(toProps.zIndex);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    _MapComponent.prototype.componentDidMount.call(this);

    this.layerContainer.addLayer(this.leafletElement);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapComponent.prototype.componentDidUpdate.call(this, prevProps);

    if (this.props.attribution !== prevProps.attribution) {
      var map = this.props.leaflet.map;

      if (map != null && map.attributionControl != null) {
        map.attributionControl.removeAttribution(prevProps.attribution);
        map.attributionControl.addAttribution(this.props.attribution);
      }
    }

    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _MapComponent.prototype.componentWillUnmount.call(this);

    this.layerContainer.removeLayer(this.leafletElement);
    this.container = null;
  };

  _proto.render = function render() {
    var children = this.props.children;

    if (children == null || this.container == null) {
      return null;
    }

    return Object(react_dom__WEBPACK_IMPORTED_MODULE_5__["createPortal"])(children, this.container);
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(SVGOverlay, [{
    key: "layerContainer",
    get: function get() {
      return this.props.leaflet.layerContainer || this.props.leaflet.map;
    }
  }]);

  return SVGOverlay;
}(_MapComponent__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_6__["withLeaflet"])(SVGOverlay));

/***/ }),

/***/ "./node_modules/react-leaflet/es/ScaleControl.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/ScaleControl.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapControl */ "./node_modules/react-leaflet/es/MapControl.js");







var ScaleControl =
/*#__PURE__*/
function (_MapControl) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ScaleControl, _MapControl);

  function ScaleControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = ScaleControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Control"].Scale(props);
  };

  return ScaleControl;
}(_MapControl__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(ScaleControl));

/***/ }),

/***/ "./node_modules/react-leaflet/es/TileLayer.js":
/*!****************************************************!*\
  !*** ./node_modules/react-leaflet/es/TileLayer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _GridLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GridLayer */ "./node_modules/react-leaflet/es/GridLayer.js");







var TileLayer =
/*#__PURE__*/
function (_GridLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TileLayer, _GridLayer);

  function TileLayer() {
    return _GridLayer.apply(this, arguments) || this;
  }

  var _proto = TileLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"](props.url, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _GridLayer.prototype.updateLeafletElement.call(this, fromProps, toProps);

    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url);
    }
  };

  return TileLayer;
}(_GridLayer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(TileLayer));

/***/ }),

/***/ "./node_modules/react-leaflet/es/Tooltip.js":
/*!**************************************************!*\
  !*** ./node_modules/react-leaflet/es/Tooltip.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _DivOverlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DivOverlay */ "./node_modules/react-leaflet/es/DivOverlay.js");









var Tooltip =
/*#__PURE__*/
function (_DivOverlay) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Tooltip, _DivOverlay);

  function Tooltip() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _DivOverlay.call.apply(_DivOverlay, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onTooltipOpen", function (_ref) {
      var tooltip = _ref.tooltip;

      if (tooltip === _this.leafletElement) {
        _this.onOpen();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onTooltipClose", function (_ref2) {
      var tooltip = _ref2.tooltip;

      if (tooltip === _this.leafletElement) {
        _this.onClose();
      }
    });

    return _this;
  }

  var _proto = Tooltip.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_3__["Tooltip"](this.getOptions(props), props.leaflet.popupContainer);
  };

  _proto.componentDidMount = function componentDidMount() {
    var popupContainer = this.props.leaflet.popupContainer;
    if (popupContainer == null) return;
    popupContainer.on({
      tooltipopen: this.onTooltipOpen,
      tooltipclose: this.onTooltipClose
    });
    popupContainer.bindTooltip(this.leafletElement);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var popupContainer = this.props.leaflet.popupContainer;
    if (popupContainer == null) return;
    popupContainer.off({
      tooltipopen: this.onTooltipOpen,
      tooltipclose: this.onTooltipClose
    });

    if (popupContainer._map != null) {
      popupContainer.unbindTooltip(this.leafletElement);
    }
  };

  return Tooltip;
}(_DivOverlay__WEBPACK_IMPORTED_MODULE_5__["default"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Tooltip, "defaultProps", {
  pane: 'tooltipPane'
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_4__["withLeaflet"])(Tooltip));

/***/ }),

/***/ "./node_modules/react-leaflet/es/VideoOverlay.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/VideoOverlay.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");







var VideoOverlay =
/*#__PURE__*/
function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(VideoOverlay, _MapLayer);

  function VideoOverlay() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = VideoOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["VideoOverlay"](props.url, props.bounds, this.getOptions(props));
  };

  _proto.componentDidMount = function componentDidMount() {
    _MapLayer.prototype.componentDidMount.call(this);

    if (this.props.play === true) {
      this.leafletElement.getElement().play();
    }
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url);
    }

    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLngBounds"])(toProps.bounds));
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(toProps.zIndex);
    } // flowlint-next-line sketchy-null-bool:off


    if (toProps.play === true && !fromProps.play) {
      this.leafletElement.getElement().play(); // flowlint-next-line sketchy-null-bool:off
    } else if (!toProps.play && fromProps.play === true) {
      this.leafletElement.getElement().pause();
    }
  };

  return VideoOverlay;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(VideoOverlay));

/***/ }),

/***/ "./node_modules/react-leaflet/es/WMSTileLayer.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/WMSTileLayer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _GridLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GridLayer */ "./node_modules/react-leaflet/es/GridLayer.js");
/* harmony import */ var _MapEvented__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MapEvented */ "./node_modules/react-leaflet/es/MapEvented.js");










var WMSTileLayer =
/*#__PURE__*/
function (_GridLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(WMSTileLayer, _GridLayer);

  function WMSTileLayer() {
    return _GridLayer.apply(this, arguments) || this;
  }

  var _proto = WMSTileLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var url = props.url,
        params = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["url"]);

    var _this$getOptions = this.getOptions(params),
        _l = _this$getOptions.leaflet,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$getOptions, ["leaflet"]);

    return new leaflet__WEBPACK_IMPORTED_MODULE_2__["TileLayer"].WMS(url, options);
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _GridLayer.prototype.updateLeafletElement.call(this, fromProps, toProps);

    var prevUrl = fromProps.url,
        _po = fromProps.opacity,
        _pz = fromProps.zIndex,
        prevProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(fromProps, ["url", "opacity", "zIndex"]);

    var _this$getOptions2 = this.getOptions(prevProps),
        _pl = _this$getOptions2.leaflet,
        prevParams = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$getOptions2, ["leaflet"]);

    var url = toProps.url,
        _o = toProps.opacity,
        _z = toProps.zIndex,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(toProps, ["url", "opacity", "zIndex"]);

    var _this$getOptions3 = this.getOptions(props),
        _l = _this$getOptions3.leaflet,
        params = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$getOptions3, ["leaflet"]);

    if (url !== prevUrl) {
      this.leafletElement.setUrl(url);
    }

    if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default()(params, prevParams)) {
      this.leafletElement.setParams(params);
    }
  };

  _proto.getOptions = function getOptions(params) {
    var superOptions = _GridLayer.prototype.getOptions.call(this, params);

    return Object.keys(superOptions).reduce(function (options, key) {
      if (!_MapEvented__WEBPACK_IMPORTED_MODULE_6__["EVENTS_RE"].test(key)) {
        options[key] = superOptions[key];
      }

      return options;
    }, {});
  };

  return WMSTileLayer;
}(_GridLayer__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_4__["withLeaflet"])(WMSTileLayer));

/***/ }),

/***/ "./node_modules/react-leaflet/es/ZoomControl.js":
/*!******************************************************!*\
  !*** ./node_modules/react-leaflet/es/ZoomControl.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapControl */ "./node_modules/react-leaflet/es/MapControl.js");







var ZoomControl =
/*#__PURE__*/
function (_MapControl) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ZoomControl, _MapControl);

  function ZoomControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = ZoomControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Control"].Zoom(props);
  };

  return ZoomControl;
}(_MapControl__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(ZoomControl));

/***/ }),

/***/ "./node_modules/react-leaflet/es/context.js":
/*!**************************************************!*\
  !*** ./node_modules/react-leaflet/es/context.js ***!
  \**************************************************/
/*! exports provided: useLeaflet, LeafletConsumer, LeafletProvider, withLeaflet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLeaflet", function() { return useLeaflet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletConsumer", function() { return LeafletConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletProvider", function() { return LeafletProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLeaflet", function() { return withLeaflet; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);





var leafletContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
var useLeaflet = function useLeaflet() {
  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(leafletContext);
};
var LeafletConsumer = leafletContext.Consumer;
var LeafletProvider = leafletContext.Provider;
var withLeaflet = function withLeaflet(WrappedComponent) {
  var WithLeafletComponent = function WithLeafletComponent(props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LeafletConsumer, null, function (leaflet) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        leaflet: leaflet,
        ref: ref
      }));
    });
  };

  var name = // flowlint-next-line sketchy-null-string:off
  WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithLeafletComponent.displayName = "Leaflet(" + name + ")";
  var LeafletComponent = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(WithLeafletComponent);
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(LeafletComponent, WrappedComponent);
  return LeafletComponent;
};

/***/ }),

/***/ "./node_modules/react-leaflet/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-leaflet/es/index.js ***!
  \************************************************/
/*! exports provided: LeafletConsumer, LeafletProvider, withLeaflet, useLeaflet, AttributionControl, Circle, CircleMarker, DivOverlay, FeatureGroup, GeoJSON, GridLayer, ImageOverlay, LayerGroup, LayersControl, ControlledLayer, Map, MapComponent, MapControl, MapEvented, MapLayer, Marker, Pane, Path, Polygon, Polyline, Popup, Rectangle, ScaleControl, SVGOverlay, TileLayer, Tooltip, VideoOverlay, WMSTileLayer, ZoomControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletConsumer", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["LeafletConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletProvider", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["LeafletProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLeaflet", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["withLeaflet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLeaflet", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["useLeaflet"]; });

/* harmony import */ var _AttributionControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttributionControl */ "./node_modules/react-leaflet/es/AttributionControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributionControl", function() { return _AttributionControl__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Circle */ "./node_modules/react-leaflet/es/Circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _Circle__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _CircleMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CircleMarker */ "./node_modules/react-leaflet/es/CircleMarker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleMarker", function() { return _CircleMarker__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _DivOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DivOverlay */ "./node_modules/react-leaflet/es/DivOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivOverlay", function() { return _DivOverlay__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _FeatureGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeatureGroup */ "./node_modules/react-leaflet/es/FeatureGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureGroup", function() { return _FeatureGroup__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _GeoJSON__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GeoJSON */ "./node_modules/react-leaflet/es/GeoJSON.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeoJSON", function() { return _GeoJSON__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _GridLayer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GridLayer */ "./node_modules/react-leaflet/es/GridLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridLayer", function() { return _GridLayer__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ImageOverlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ImageOverlay */ "./node_modules/react-leaflet/es/ImageOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageOverlay", function() { return _ImageOverlay__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _LayerGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LayerGroup */ "./node_modules/react-leaflet/es/LayerGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerGroup", function() { return _LayerGroup__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _LayersControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LayersControl */ "./node_modules/react-leaflet/es/LayersControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayersControl", function() { return _LayersControl__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlledLayer", function() { return _LayersControl__WEBPACK_IMPORTED_MODULE_10__["ControlledLayer"]; });

/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Map */ "./node_modules/react-leaflet/es/Map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _Map__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _MapComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MapComponent */ "./node_modules/react-leaflet/es/MapComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return _MapComponent__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MapControl */ "./node_modules/react-leaflet/es/MapControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapControl", function() { return _MapControl__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _MapEvented__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MapEvented */ "./node_modules/react-leaflet/es/MapEvented.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapEvented", function() { return _MapEvented__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapLayer", function() { return _MapLayer__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Marker */ "./node_modules/react-leaflet/es/Marker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return _Marker__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _Pane__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Pane */ "./node_modules/react-leaflet/es/Pane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pane", function() { return _Pane__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _Path__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Polygon */ "./node_modules/react-leaflet/es/Polygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return _Polygon__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _Polyline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Polyline */ "./node_modules/react-leaflet/es/Polyline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return _Polyline__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Popup */ "./node_modules/react-leaflet/es/Popup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _Popup__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Rectangle */ "./node_modules/react-leaflet/es/Rectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _Rectangle__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _ScaleControl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ScaleControl */ "./node_modules/react-leaflet/es/ScaleControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScaleControl", function() { return _ScaleControl__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _SVGOverlay__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SVGOverlay */ "./node_modules/react-leaflet/es/SVGOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGOverlay", function() { return _SVGOverlay__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _TileLayer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./TileLayer */ "./node_modules/react-leaflet/es/TileLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TileLayer", function() { return _TileLayer__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Tooltip */ "./node_modules/react-leaflet/es/Tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _VideoOverlay__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./VideoOverlay */ "./node_modules/react-leaflet/es/VideoOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoOverlay", function() { return _VideoOverlay__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _WMSTileLayer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./WMSTileLayer */ "./node_modules/react-leaflet/es/WMSTileLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WMSTileLayer", function() { return _WMSTileLayer__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _ZoomControl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ZoomControl */ "./node_modules/react-leaflet/es/ZoomControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomControl", function() { return _ZoomControl__WEBPACK_IMPORTED_MODULE_29__["default"]; });


































/***/ }),

/***/ "./node_modules/react-leaflet/es/utils/omit.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/utils/omit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return omit; });


function omit(obj) {
  for (var _len = arguments.length, keysToOmit = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keysToOmit[_key - 1] = arguments[_key];
  }

  return Object.keys(obj).reduce(function (acc, key) {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/react-leaflet/es/utils/pick.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/utils/pick.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pick; });


function pick(object, keys) {
  return keys.reduce(function (obj, key) {
    if (typeof object[key] !== 'undefined') {
      obj[key] = object[key];
    }

    return obj;
  }, {});
}

/***/ }),

/***/ "./node_modules/react-leaflet/es/utils/updateClassName.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-leaflet/es/utils/updateClassName.js ***!
  \****************************************************************/
/*! exports provided: addClassName, removeClassName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClassName", function() { return addClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClassName", function() { return removeClassName; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);




var splitClassName = function splitClassName(className) {
  if (className === void 0) {
    className = '';
  }

  return className.split(' ').filter(Boolean);
};

var addClassName = function addClassName(container, className) {
  splitClassName(className).forEach(function (cls) {
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomUtil"].addClass(container, cls);
  });
};
var removeClassName = function removeClassName(container, className) {
  splitClassName(className).forEach(function (cls) {
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomUtil"].removeClass(container, cls);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (function (container, prevClassName, nextClassName) {
  if (container != null && nextClassName !== prevClassName) {
    if (prevClassName != null && prevClassName.length > 0) {
      removeClassName(container, prevClassName);
    }

    if (nextClassName != null && nextClassName.length > 0) {
      addClassName(container, nextClassName);
    }
  }
});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./src/components/global-dashboard/global-dashboard.tsx":
/*!**************************************************************!*\
  !*** ./src/components/global-dashboard/global-dashboard.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
// import './global-dashboard.scss';
__webpack_require__(/*! ./global-mobile.scss */ "./src/components/global-dashboard/global-mobile.scss");
const react_leaflet_1 = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/index.js");
const leaflet_1 = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
const Recharts = __webpack_require__(/*! recharts */ "recharts");
const util_1 = __webpack_require__(/*! ../../util */ "./src/util.ts");
const SYNC_INTERVAL_MINUTES = 30; //time in minutes to refresh data
const POPULATION_SYNC_INTERVAL_MINUTES = 60 * 24; //population data can be synced once a day
function cfr(item) {
    if (item.confirmed == 0)
        return '0%';
    let r = 100 * item.deaths / item.confirmed;
    return r.toFixed(1) + '%';
}
class MapWidget extends React.Component {
    componentDidMount() {
    }
    componentDidUpdate(prevProps) {
        var _a, _b, _c, _d;
        if (this.props.items.length == 0)
            return;
        if (this.props.selectedItem != null) {
            let zoom = ((_a = this.map) === null || _a === void 0 ? void 0 : _a.getZoom()) || 0;
            if (zoom < 3)
                zoom = 3;
            (_b = this.map) === null || _b === void 0 ? void 0 : _b.setView([this.props.selectedItem.lat, this.props.selectedItem.lon], zoom);
            return;
        }
        /* if only one point is present - fitBounds() fails. So just pan to that item */
        if (this.props.items.length == 1) {
            let zoom = ((_c = this.map) === null || _c === void 0 ? void 0 : _c.getZoom()) || 0;
            if (zoom < 3)
                zoom = 3;
            (_d = this.map) === null || _d === void 0 ? void 0 : _d.setView([this.props.items[0].lat, this.props.items[0].lon], zoom);
            return;
        }
        let bounds = this.props.items.map(item => [item.lat, item.lon]);
        this.map.fitBounds(bounds);
    }
    render() {
        var _a;
        let size = '';
        let zoom = (_a = this.map) === null || _a === void 0 ? void 0 : _a.getZoom();
        if (zoom < 3) {
            size = 'tiny';
        }
        return React.createElement("div", { className: 'gmap' },
            React.createElement(react_leaflet_1.Map, { center: [45.4, -75.7], zoom: 2, ref: (el) => {
                    if (!!el) {
                        this.map = el.leafletElement;
                    }
                } },
                React.createElement(react_leaflet_1.TileLayer, { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }),
                this.props.items.map((item, key) => this.renderMarker(item, key, size))));
    }
    renderMarker(item, key, size) {
        var _a;
        if (!(item === null || item === void 0 ? void 0 : item.lat) || !(item === null || item === void 0 ? void 0 : item.lon)) {
            return null;
        }
        let stat = util_1.shortenNumber(item[this.props.stat]);
        let markerClass = `micon ${this.props.stat} ${size}`;
        if (item.id === ((_a = this.props.selectedItem) === null || _a === void 0 ? void 0 : _a.id)) {
            markerClass += ' selected';
        }
        return React.createElement(react_leaflet_1.Marker, { onClick: () => this.props.onItemSelected(item), position: [item.lat, item.lon], key: item.id, icon: leaflet_1.divIcon({ className: markerClass, 'html': '<div><div class="inner"></div><div class="outer"></div><div class="txt">' + stat + '</div></div>' }) });
    }
}
let Context = React.createContext({
    getTrends: (c, r) => { throw 'not implemented'; }
});
class AxisTick extends React.PureComponent {
    render() {
        let payload = this.props.payload;
        return React.createElement("text", null, 'XXX' + payload);
    }
}
class ListWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = { trendData: null, trendDataError: null, population: 0 };
    }
    componentDidUpdate(prevProps, prevState) {
        let prevItem = prevProps.selectedItem;
        let item = this.props.selectedItem;
        if (item == null) {
            return;
        }
        if (prevItem != null && prevItem.id === item.id) {
            return;
        }
        console.log('Updating trends');
        this.props.context.getTrends(item.country, item.region)
            .then(({ trends, population }) => this.setState({ trendData: trends, population, trendDataError: null }, () => {
            if (this.selectedEl && this.containerEl) {
                this.selectedEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }))
            .catch(e => this.setState({ trendDataError: e, trendData: null }));
    }
    render() {
        let t = this.props.sorting;
        let items = this.props.items.slice().sort((a, b) => {
            return Number(b[t]) - Number(a[t]);
        });
        return React.createElement("div", { ref: (el) => this.containerEl = el, className: 'list-widget' }, items.map((item, key) => this.renderItem(item, key)));
    }
    selectItem(item) {
        var _a;
        if (((_a = this.props.selectedItem) === null || _a === void 0 ? void 0 : _a.id) == item.id) {
            this.props.onItemSelected(null);
        }
        else {
            this.props.onItemSelected(item);
        }
    }
    renderSelectedItem(item, key) {
        return React.createElement("div", { key: key, ref: (el) => this.selectedEl = el, className: 'selected-item', onClick: this.selectItem.bind(this, item) },
            React.createElement("div", { className: 'row1' },
                (this.props.mode != 'global' && !!item.region) ? null :
                    React.createElement("div", { className: 'country c' },
                        React.createElement("div", { className: 'label' }, "Country"),
                        React.createElement("div", { className: 'value' }, item.country)),
                (this.props.mode == 'global' || !item.region) ? null :
                    React.createElement("div", { className: 'area c' },
                        React.createElement("div", { className: 'label' }, "Area"),
                        React.createElement("div", { className: 'value' }, item.region)),
                this.state.population ? React.createElement(React.Fragment, null,
                    React.createElement("div", { className: 'population c' },
                        React.createElement("div", { className: 'label' }, "Population"),
                        React.createElement("div", { className: 'value' }, util_1.shortenNumber(this.state.population))))
                    : null,
                React.createElement("div", { className: 'cfr c' },
                    React.createElement("div", { className: 'label', title: 'Case Fatality Rate' }, "CFR"),
                    React.createElement("div", { className: 'value' }, cfr(item)))),
            React.createElement("div", { className: 'row2' },
                React.createElement("div", { className: 'confirmed c' },
                    React.createElement("div", { className: 'label' }, "Confirmed"),
                    React.createElement("div", { className: 'value' }, item.confirmed)),
                React.createElement("div", { className: 'deaths c' },
                    React.createElement("div", { className: 'label' }, "Deaths"),
                    React.createElement("div", { className: 'value' }, item.deaths)),
                React.createElement("div", { className: 'recovered c' },
                    React.createElement("div", { className: 'label' }, "Recovered"),
                    React.createElement("div", { className: 'value' }, item.recovered))),
            React.createElement("div", { className: 'chart-row x' }, this.state.trendData == null ? React.createElement("div", { className: 'loading-data' }, "Loading") : this.renderTrends()));
    }
    renderTrends() {
        var _a, _b, _c, _d;
        if (this.state.trendDataError != null) {
            return React.createElement("div", { className: 'loading-data' }, "An error occurred while loading data. Please try later");
        }
        let data = this.state.trendData;
        if (data == null || data.confirmed.length == 0) {
            return React.createElement("div", { className: 'loading-data' }, "No data available");
        }
        let zippedData = [];
        for (let i = 0; i < data.confirmed.length; i++) {
            zippedData.push({
                confirmed: (_a = data.confirmed[i]) === null || _a === void 0 ? void 0 : _a.value,
                recovered: (_b = data.recovered[i]) === null || _b === void 0 ? void 0 : _b.value,
                deaths: (_c = data.deaths[i]) === null || _c === void 0 ? void 0 : _c.value,
                timestamp: (_d = data.confirmed[i]) === null || _d === void 0 ? void 0 : _d.timestamp,
            });
        }
        return React.createElement(Recharts.ResponsiveContainer, { height: '100%', width: '100%' },
            React.createElement(Recharts.AreaChart, { data: zippedData },
                React.createElement(Recharts.Tooltip, { content: (o) => {
                        if (o.active) {
                            let obj = o.payload[0].payload;
                            return React.createElement("div", { className: 'tt' },
                                React.createElement("div", { className: 'date' }, new Date(obj.timestamp).toLocaleDateString()),
                                React.createElement("div", { className: 'c' }, 'Confirmed: ' + obj.confirmed),
                                React.createElement("div", { className: 'c' }, 'Recovered: ' + obj.recovered),
                                React.createElement("div", { className: 'c' }, 'Deaths: ' + obj.deaths));
                        }
                        else {
                            return null;
                        }
                    } }),
                React.createElement(Recharts.Area, { type: 'monotone', activeDot: { r: 1 }, dataKey: 'confirmed', fillOpacity: 0.7, fill: '#06F' }),
                React.createElement(Recharts.Area, { type: 'monotone', activeDot: { r: 1 }, dataKey: 'recovered', fillOpacity: 0.7, fill: 'green' }),
                React.createElement(Recharts.Area, { type: 'monotone', activeDot: { r: 1 }, dataKey: 'deaths', fillOpacity: 0.7, fill: 'red' })));
    }
    renderItem(item, key) {
        var _a;
        if (item.id === ((_a = this.props.selectedItem) === null || _a === void 0 ? void 0 : _a.id)) {
            return this.renderSelectedItem(item, key);
        }
        return React.createElement("div", { key: key, className: 'item', onClick: this.selectItem.bind(this, item) },
            (this.props.mode != 'global' && !!item.region) ? null :
                React.createElement("div", { className: 'country c' },
                    React.createElement("div", { className: 'label' }, "Country"),
                    React.createElement("div", { className: 'value' }, item.country)),
            (this.props.mode == 'global' || !item.region) ? null :
                React.createElement("div", { className: 'area c' },
                    React.createElement("div", { className: 'label' }, "Area"),
                    React.createElement("div", { className: 'value' }, item.region)),
            React.createElement("div", { className: 'confirmed c' },
                React.createElement("div", { className: 'label' }, "Confirmed"),
                React.createElement("div", { className: 'value' }, item.confirmed)),
            React.createElement("div", { className: 'deaths c' },
                React.createElement("div", { className: 'label' }, "Deaths"),
                React.createElement("div", { className: 'value' }, item.deaths)),
            React.createElement("div", { className: 'recovered c' },
                React.createElement("div", { className: 'label' }, "Recovered"),
                React.createElement("div", { className: 'value' }, item.recovered)));
    }
}
class HealthDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedItem: null,
            metadata: null,
            countryFilter: '',
            mapFilter: 'confirmed',
            sorting: 'confirmed',
            dialog: '',
        };
    }
    filterItem(item) {
        if (this.state.countryFilter == '')
            return item;
        return (item.country === this.state.countryFilter);
        return true;
    }
    filteredData() {
        let data = this.state.data;
        let items = [];
        let confirmed = 0;
        let deaths = 0;
        let recovered = 0;
        let countryMap = {};
        let countryList = [];
        let countryCoords = {};
        let aggregateCountries = !this.state.countryFilter;
        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            if (this.filterItem(item)) {
                confirmed += item.confirmed;
                deaths += item.deaths;
                recovered += item.recovered;
                items.push(item);
                if (aggregateCountries) {
                    if (!countryMap[item.country]) {
                        countryMap[item.country] = {
                            confirmed: 0,
                            country: item.country,
                            deaths: 0,
                            recovered: 0,
                            region: '',
                            lat: 0,
                            lon: 0,
                            id: item.country,
                        };
                        countryList.push(countryMap[item.country]);
                    }
                    if (!countryCoords[item.country]) {
                        countryCoords[item.country] = [];
                    }
                    countryMap[item.country].confirmed += item.confirmed;
                    countryMap[item.country].recovered += item.recovered;
                    countryMap[item.country].deaths += item.deaths;
                    countryCoords[item.country].push({ lat: item.lat, lon: item.lon });
                }
            }
        }
        if (aggregateCountries) {
            items = countryList.map(item => {
                let newCoords = util_1.averageGeolocation(countryCoords[item.country]);
                item.lat = newCoords.lat;
                item.lon = newCoords.lon;
                return item;
            });
        }
        return { items, confirmed, deaths, recovered };
    }
    composeId(country, region) {
        let id = country;
        if (!!region) {
            id += '/' + region;
        }
        return id;
    }
    getTrends(country, region) {
        return __awaiter(this, void 0, void 0, function* () {
            let trends = yield this.getTrendData(country, region);
            let population = 0;
            /* only support population at the country level currently */
            if (!region) {
                let populationData = yield this.getPopulationData();
                let populationItems = populationData.filter(_ => _.country == country);
                if (populationItems === null || populationItems === void 0 ? void 0 : populationItems.length) {
                    population = populationItems[0].population;
                }
            }
            return { trends, population };
        });
    }
    getTrendData(country, region) {
        let requiresResync = false;
        let id = this.composeId(country, region);
        let trendData = localStorage.getItem('trends/' + id);
        let lastSync = localStorage.getItem('trends/sync/' + id);
        if (!lastSync || !trendData) {
            requiresResync = true;
        }
        else {
            let dt = new Date(lastSync);
            let elapsedMinutes = (Number(new Date()) - Number(dt)) / (1000 * 60);
            if (elapsedMinutes > SYNC_INTERVAL_MINUTES) {
                requiresResync = true;
            }
        }
        if (!requiresResync) {
            return new Promise((resolve, reject) => {
                try {
                    let items = JSON.parse(trendData);
                    resolve(items);
                }
                catch (e) {
                    reject(e);
                }
            });
        }
        return this.loadRemoteTrends(country, region);
    }
    loadRemoteTrends(country, region) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = this.composeId(country, region);
                console.log('fetching trend data', id);
                let payload = { country, region };
                let response = yield fetch(this.props.apiUrl + '/trends', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw yield response.text();
                }
                let rawData = (yield response.json()).trends;
                let mapData = (x) => {
                    let trendItem = { timestamp: x.Time, value: Number(x.Value) };
                    return trendItem;
                };
                let confirmed = rawData.confirmed.map(mapData);
                let recovered = rawData.recovered.map(mapData);
                let deaths = rawData.deaths.map(mapData);
                let trendData = { confirmed, recovered, deaths };
                localStorage.setItem('trends/' + id, JSON.stringify(trendData));
                localStorage.setItem('trends/sync/' + id, new Date().toISOString());
                return trendData;
            }
            catch (e) {
                throw e;
            }
        });
    }
    getPopulationData() {
        let raw = localStorage.getItem('population');
        let lastUpdate = localStorage.getItem('population/lastSync');
        let requiresResync = false;
        if (!lastUpdate || !raw) {
            requiresResync = true;
        }
        else {
            let dt = new Date(lastUpdate);
            let elapsedMinutes = (Number(new Date()) - Number(dt)) / (1000 * 60);
            if (elapsedMinutes > POPULATION_SYNC_INTERVAL_MINUTES) {
                requiresResync = true;
            }
        }
        ;
        if (!requiresResync) {
            return new Promise((resolve, reject) => {
                try {
                    let items = JSON.parse(raw);
                    resolve(items);
                }
                catch (e) {
                    reject(e);
                }
            });
        }
        return this.loadRemotePopulationData();
    }
    loadRemotePopulationData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('fetching population data...');
                let response = yield fetch(this.props.apiUrl + '/population', { method: 'GET' });
                if (!response.ok) {
                    throw yield response.text();
                }
                let rawData = (yield response.json()).population;
                let data = rawData.map((item) => ({
                    country: item.country,
                    population: Number(item.population)
                }));
                localStorage.setItem('population', JSON.stringify(data));
                localStorage.setItem('population/lastSync', new Date().toISOString());
                return data;
            }
            catch (e) {
                throw e;
            }
        });
    }
    getMasterData() {
        let raw = localStorage.getItem('raw');
        let lastUpdate = localStorage.getItem('lastSync');
        let requiresResync = false;
        if (!lastUpdate || !raw) {
            requiresResync = true;
        }
        else {
            let dt = new Date(lastUpdate);
            let elapsedMinutes = (Number(new Date()) - Number(dt)) / (1000 * 60);
            if (elapsedMinutes > SYNC_INTERVAL_MINUTES) {
                requiresResync = true;
            }
        }
        ;
        if (!requiresResync) {
            return new Promise((resolve, reject) => {
                try {
                    let items = JSON.parse(raw);
                    let metadata = this.getMetadata(items);
                    metadata.lastUpdate = localStorage.getItem('lastUpdated') || '';
                    resolve({ items, metadata });
                }
                catch (e) {
                    reject(e);
                }
            });
        }
        return this.loadRemoteData();
    }
    getMetadata(items) {
        let countries = {};
        let lastUpdate = '';
        for (let i = 0; i < items.length; i++) {
            countries[items[i].country] = 1;
            lastUpdate = '';
        }
        let countryList = Object.keys(countries).sort();
        return { countries: countryList, lastUpdate };
    }
    componentDidMount() {
        this.getMasterData().then(data => this.setState({ data: data.items, metadata: data.metadata }));
    }
    loadRemoteData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('fetching data...');
                let response = yield fetch(this.props.apiUrl + '/regions', { method: 'GET' });
                if (!response.ok) {
                    throw yield response.text();
                }
                let rawData = yield response.json();
                let lastUpdate = rawData.updated;
                let data = rawData.regions.map((item) => ({
                    country: item['Country/Region'],
                    region: item['Province/State'],
                    confirmed: Number(item['Confirmed']),
                    recovered: Number(item['Recovered']),
                    deaths: Number(item['Deaths']),
                    lat: Number(item['lat'] || item['Latitude']) || null,
                    lon: Number(item['lon'] || item['Longitude']) || null,
                    id: item['Country/Region'] + '/' + item['Province/State'],
                }));
                localStorage.setItem('raw', JSON.stringify(data));
                localStorage.setItem('lastSync', new Date().toISOString());
                localStorage.setItem('lastUpdated', lastUpdate);
                let metadata = this.getMetadata(data);
                /* we now get this separtely */
                metadata.lastUpdate = lastUpdate;
                return { items: data, metadata };
            }
            catch (e) {
                throw e;
            }
        });
    }
    onItemSelected(item) {
        this.setState({ selectedItem: item });
    }
    setMapFilter(filter) {
        this.setState({ mapFilter: filter });
    }
    setSorting(type) {
        this.setState({ sorting: type });
    }
    setCountryFilter(country) {
        this.setState({ countryFilter: country, selectedItem: null });
    }
    render() {
        return this.renderWithContext(this);
    }
    renderWithContext(context) {
        var _a, _b;
        let { items, confirmed, deaths, recovered } = this.filteredData();
        let selectedItem = this.state.selectedItem;
        let countries = ((_a = this.state.metadata) === null || _a === void 0 ? void 0 : _a.countries) || [];
        let mode = this.state.countryFilter ? 'country' : 'global';
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'toolbar' },
                React.createElement("div", { className: 'countries ddl' },
                    React.createElement("div", { className: 'txt' }, this.state.countryFilter || 'All Countries'),
                    React.createElement("select", { value: this.state.countryFilter, onChange: (e) => {
                            this.setCountryFilter(e.target.value);
                        } },
                        React.createElement("option", { key: -1, value: '' }, "All Countries"),
                        countries.map((c, i) => {
                            return React.createElement("option", { key: i, value: c }, c);
                        })))),
            React.createElement("div", { className: 'data-section' },
                React.createElement("div", { className: 'stats' },
                    React.createElement("div", { className: 'stats-header' },
                        React.createElement("div", { className: 'dt' }, ((_b = this.state.metadata) === null || _b === void 0 ? void 0 : _b.lastUpdate) ? React.createElement(React.Fragment, null,
                            React.createElement("div", { className: 'lbl' }, "Last Updated"),
                            React.createElement("div", { className: 'value' }, new Date(this.state.metadata.lastUpdate).toLocaleString())) : null)),
                    React.createElement("div", { className: 'stat confirmed' },
                        React.createElement("div", { className: 'metric' }, confirmed),
                        React.createElement("div", { className: 'title' }, "confirmed")),
                    React.createElement("div", { className: 'stat deaths' },
                        React.createElement("div", { className: 'metric' }, deaths),
                        React.createElement("div", { className: 'title' }, "deaths")),
                    React.createElement("div", { className: 'stat recovered' },
                        React.createElement("div", { className: 'metric' }, recovered),
                        React.createElement("div", { className: 'title' }, "recovered"))),
                React.createElement("div", { className: 'map' },
                    React.createElement("div", { className: 'map-widget' },
                        React.createElement("div", { className: 'filters' },
                            React.createElement("div", { onClick: this.setMapFilter.bind(this, 'confirmed'), className: (this.state.mapFilter == 'confirmed' ? 'set' : '') + ' switch confirmed' }, "Confirmed"),
                            React.createElement("div", { onClick: this.setMapFilter.bind(this, 'deaths'), className: (this.state.mapFilter == 'deaths' ? 'set' : '') + ' switch deaths' }, "Deaths"),
                            React.createElement("div", { onClick: this.setMapFilter.bind(this, 'recovered'), className: (this.state.mapFilter == 'recovered' ? 'set' : '') + ' switch recovered' }, "Recovered")),
                        React.createElement(MapWidget, { stat: this.state.mapFilter, items: items, selectedItem: selectedItem, onItemSelected: this.onItemSelected.bind(this) }))),
                React.createElement("div", { className: 'data-list-container' },
                    React.createElement("div", { className: 'data-list' },
                        React.createElement("div", { className: 'header' },
                            React.createElement("div", { className: 'title' }, mode == 'global' ? 'Countries' : React.createElement(React.Fragment, null,
                                React.createElement("div", { className: 'goback', onClick: () => this.setState({ countryFilter: '' }) }),
                                this.state.countryFilter)),
                            React.createElement("div", { className: 'filters' },
                                React.createElement("span", { className: 'lbl' }, "Sort"),
                                React.createElement("div", { onClick: this.setSorting.bind(this, 'confirmed'), className: (this.state.sorting == 'confirmed' ? 'set' : '') + ' switch confirmed' }, "Confirmed"),
                                React.createElement("div", { onClick: this.setSorting.bind(this, 'deaths'), className: (this.state.sorting == 'deaths' ? 'set' : '') + ' switch deaths' }, "Deaths"),
                                React.createElement("div", { onClick: this.setSorting.bind(this, 'recovered'), className: (this.state.sorting == 'recovered' ? 'set' : '') + ' switch recovered' }, "Recovered"))),
                        React.createElement(ListWidget, { sorting: this.state.sorting, context: context, selectedItem: selectedItem, mode: mode, items: items, onItemSelected: this.onItemSelected.bind(this) }),
                        React.createElement("div", { className: 'footer' },
                            React.createElement("div", { className: 'tip' }, "Learn more about this dashboard"),
                            React.createElement("div", { className: 'action', onClick: this.props.renderInfo }, "Info")))))));
    }
}
exports.default = HealthDashboard;


/***/ }),

/***/ "./src/components/global-dashboard/global-mobile.scss":
/*!************************************************************!*\
  !*** ./src/components/global-dashboard/global-mobile.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./global-mobile.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/global-dashboard/global-mobile.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/local-dashboard/countries.tsx":
/*!******************************************************!*\
  !*** ./src/components/local-dashboard/countries.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* https://developers.google.com/public-data/docs/canonical/countries_csv */
let countryData = [
    { "lat": 42.546245, "lon": 1.601554, "country": "Andorra" },
    { "lat": 23.424076, "lon": 53.847818, "country": "United Arab Emirates" },
    { "lat": 33.93911, "lon": 67.709953, "country": "Afghanistan" },
    { "lat": 17.060816, "lon": -61.796428, "country": "Antigua and Barbuda" },
    { "lat": 18.220554, "lon": -63.068615, "country": "Anguilla" },
    { "lat": 41.153332, "lon": 20.168331, "country": "Albania" },
    { "lat": 40.069099, "lon": 45.038189, "country": "Armenia" },
    { "lat": 12.226079, "lon": -69.060087, "country": "Netherlands Antilles" },
    { "lat": -11.202692, "lon": 17.873887, "country": "Angola" },
    { "lat": -75.250973, "lon": -0.071389, "country": "Antarctica" },
    { "lat": -38.416097, "lon": -63.616672, "country": "Argentina" },
    { "lat": -14.270972, "lon": -170.132217, "country": "American Samoa" },
    { "lat": 47.516231, "lon": 14.550072, "country": "Austria" },
    { "lat": -25.274398, "lon": 133.775136, "country": "Australia" },
    { "lat": 12.52111, "lon": -69.968338, "country": "Aruba" },
    { "lat": 40.143105, "lon": 47.576927, "country": "Azerbaijan" },
    { "lat": 43.915886, "lon": 17.679076, "country": "Bosnia and Herzegovina" },
    { "lat": 13.193887, "lon": -59.543198, "country": "Barbados" },
    { "lat": 23.684994, "lon": 90.356331, "country": "Bangladesh" },
    { "lat": 50.503887, "lon": 4.469936, "country": "Belgium" },
    { "lat": 12.238333, "lon": -1.561593, "country": "Burkina Faso" },
    { "lat": 42.733883, "lon": 25.48583, "country": "Bulgaria" },
    { "lat": 25.930414, "lon": 50.637772, "country": "Bahrain" },
    { "lat": -3.373056, "lon": 29.918886, "country": "Burundi" },
    { "lat": 9.30769, "lon": 2.315834, "country": "Benin" },
    { "lat": 32.321384, "lon": -64.75737, "country": "Bermuda" },
    { "lat": 4.535277, "lon": 114.727669, "country": "Brunei" },
    { "lat": -16.290154, "lon": -63.588653, "country": "Bolivia" },
    { "lat": -14.235004, "lon": -51.92528, "country": "Brazil" },
    { "lat": 25.03428, "lon": -77.39628, "country": "Bahamas" },
    { "lat": 27.514162, "lon": 90.433601, "country": "Bhutan" },
    { "lat": -54.423199, "lon": 3.413194, "country": "Bouvet Island" },
    { "lat": -22.328474, "lon": 24.684866, "country": "Botswana" },
    { "lat": 53.709807, "lon": 27.953389, "country": "Belarus" },
    { "lat": 17.189877, "lon": -88.49765, "country": "Belize" },
    { "lat": 56.130366, "lon": -106.346771, "country": "Canada" },
    { "lat": -12.164165, "lon": 96.870956, "country": "Cocos [Keeling] Islands" },
    { "lat": -4.038333, "lon": 21.758664, "country": "Congo [DRC]" },
    { "lat": 6.611111, "lon": 20.939444, "country": "Central African Republic" },
    { "lat": -0.228021, "lon": 15.827659, "country": "Congo [Republic]" },
    { "lat": 46.818188, "lon": 8.227512, "country": "Switzerland" },
    { "lat": 7.539989, "lon": -5.54708, "country": "Côte d'Ivoire" },
    { "lat": -21.236736, "lon": -159.777671, "country": "Cook Islands" },
    { "lat": -35.675147, "lon": -71.542969, "country": "Chile" },
    { "lat": 7.369722, "lon": 12.354722, "country": "Cameroon" },
    { "lat": 35.86166, "lon": 104.195397, "country": "China" },
    { "lat": 4.570868, "lon": -74.297333, "country": "Colombia" },
    { "lat": 9.748917, "lon": -83.753428, "country": "Costa Rica" },
    { "lat": 21.521757, "lon": -77.781167, "country": "Cuba" },
    { "lat": 16.002082, "lon": -24.013197, "country": "Cape Verde" },
    { "lat": -10.447525, "lon": 105.690449, "country": "Christmas Island" },
    { "lat": 35.126413, "lon": 33.429859, "country": "Cyprus" },
    { "lat": 49.817492, "lon": 15.472962, "country": "Czech Republic" },
    { "lat": 51.165691, "lon": 10.451526, "country": "Germany" },
    { "lat": 11.825138, "lon": 42.590275, "country": "Djibouti" },
    { "lat": 56.26392, "lon": 9.501785, "country": "Denmark" },
    { "lat": 15.414999, "lon": -61.370976, "country": "Dominica" },
    { "lat": 18.735693, "lon": -70.162651, "country": "Dominican Republic" },
    { "lat": 28.033886, "lon": 1.659626, "country": "Algeria" },
    { "lat": -1.831239, "lon": -78.183406, "country": "Ecuador" },
    { "lat": 58.595272, "lon": 25.013607, "country": "Estonia" },
    { "lat": 26.820553, "lon": 30.802498, "country": "Egypt" },
    { "lat": 24.215527, "lon": -12.885834, "country": "Western Sahara" },
    { "lat": 15.179384, "lon": 39.782334, "country": "Eritrea" },
    { "lat": 40.463667, "lon": -3.74922, "country": "Spain" },
    { "lat": 9.145, "lon": 40.489673, "country": "Ethiopia" },
    { "lat": 61.92411, "lon": 25.748151, "country": "Finland" },
    { "lat": -16.578193, "lon": 179.414413, "country": "Fiji" },
    { "lat": -51.796253, "lon": -59.523613, "country": "Falkland Islands [Islas Malvinas]" },
    { "lat": 7.425554, "lon": 150.550812, "country": "Micronesia" },
    { "lat": 61.892635, "lon": -6.911806, "country": "Faroe Islands" },
    { "lat": 46.227638, "lon": 2.213749, "country": "France" },
    { "lat": -0.803689, "lon": 11.609444, "country": "Gabon" },
    { "lat": 55.378051, "lon": -3.435973, "country": "United Kingdom" },
    { "lat": 12.262776, "lon": -61.604171, "country": "Grenada" },
    { "lat": 42.315407, "lon": 43.356892, "country": "Georgia" },
    { "lat": 3.933889, "lon": -53.125782, "country": "French Guiana" },
    { "lat": 49.465691, "lon": -2.585278, "country": "Guernsey" },
    { "lat": 7.946527, "lon": -1.023194, "country": "Ghana" },
    { "lat": 36.137741, "lon": -5.345374, "country": "Gibraltar" },
    { "lat": 71.706936, "lon": -42.604303, "country": "Greenland" },
    { "lat": 13.443182, "lon": -15.310139, "country": "Gambia" },
    { "lat": 9.945587, "lon": -9.696645, "country": "Guinea" },
    { "lat": 16.995971, "lon": -62.067641, "country": "Guadeloupe" },
    { "lat": 1.650801, "lon": 10.267895, "country": "Equatorial Guinea" },
    { "lat": 39.074208, "lon": 21.824312, "country": "Greece" },
    { "lat": -54.429579, "lon": -36.587909, "country": "South Georgia and the South Sandwich Islands" },
    { "lat": 15.783471, "lon": -90.230759, "country": "Guatemala" },
    { "lat": 13.444304, "lon": 144.793731, "country": "Guam" },
    { "lat": 11.803749, "lon": -15.180413, "country": "Guinea-Bissau" },
    { "lat": 4.860416, "lon": -58.93018, "country": "Guyana" },
    { "lat": 31.354676, "lon": 34.308825, "country": "Gaza Strip" },
    { "lat": 22.396428, "lon": 114.109497, "country": "Hong Kong" },
    { "lat": -53.08181, "lon": 73.504158, "country": "Heard Island and McDonald Islands" },
    { "lat": 15.199999, "lon": -86.241905, "country": "Honduras" },
    { "lat": 45.1, "lon": 15.2, "country": "Croatia" },
    { "lat": 18.971187, "lon": -72.285215, "country": "Haiti" },
    { "lat": 47.162494, "lon": 19.503304, "country": "Hungary" },
    { "lat": -0.789275, "lon": 113.921327, "country": "Indonesia" },
    { "lat": 53.41291, "lon": -8.24389, "country": "Ireland" },
    { "lat": 31.046051, "lon": 34.851612, "country": "Israel" },
    { "lat": 54.236107, "lon": -4.548056, "country": "Isle of Man" },
    { "lat": 20.593684, "lon": 78.96288, "country": "India" },
    { "lat": -6.343194, "lon": 71.876519, "country": "British Indian Ocean Territory" },
    { "lat": 33.223191, "lon": 43.679291, "country": "Iraq" },
    { "lat": 32.427908, "lon": 53.688046, "country": "Iran" },
    { "lat": 64.963051, "lon": -19.020835, "country": "Iceland" },
    { "lat": 41.87194, "lon": 12.56738, "country": "Italy" },
    { "lat": 49.214439, "lon": -2.13125, "country": "Jersey" },
    { "lat": 18.109581, "lon": -77.297508, "country": "Jamaica" },
    { "lat": 30.585164, "lon": 36.238414, "country": "Jordan" },
    { "lat": 36.204824, "lon": 138.252924, "country": "Japan" },
    { "lat": -0.023559, "lon": 37.906193, "country": "Kenya" },
    { "lat": 41.20438, "lon": 74.766098, "country": "Kyrgyzstan" },
    { "lat": 12.565679, "lon": 104.990963, "country": "Cambodia" },
    { "lat": -3.370417, "lon": -168.734039, "country": "Kiribati" },
    { "lat": -11.875001, "lon": 43.872219, "country": "Comoros" },
    { "lat": 17.357822, "lon": -62.782998, "country": "Saint Kitts and Nevis" },
    { "lat": 40.339852, "lon": 127.510093, "country": "North Korea" },
    { "lat": 35.907757, "lon": 127.766922, "country": "South Korea" },
    { "lat": 29.31166, "lon": 47.481766, "country": "Kuwait" },
    { "lat": 19.513469, "lon": -80.566956, "country": "Cayman Islands" },
    { "lat": 48.019573, "lon": 66.923684, "country": "Kazakhstan" },
    { "lat": 19.85627, "lon": 102.495496, "country": "Laos" },
    { "lat": 33.854721, "lon": 35.862285, "country": "Lebanon" },
    { "lat": 13.909444, "lon": -60.978893, "country": "Saint Lucia" },
    { "lat": 47.166, "lon": 9.555373, "country": "Liechtenstein" },
    { "lat": 7.873054, "lon": 80.771797, "country": "Sri Lanka" },
    { "lat": 6.428055, "lon": -9.429499, "country": "Liberia" },
    { "lat": -29.609988, "lon": 28.233608, "country": "Lesotho" },
    { "lat": 55.169438, "lon": 23.881275, "country": "Lithuania" },
    { "lat": 49.815273, "lon": 6.129583, "country": "Luxembourg" },
    { "lat": 56.879635, "lon": 24.603189, "country": "Latvia" },
    { "lat": 26.3351, "lon": 17.228331, "country": "Libya" },
    { "lat": 31.791702, "lon": -7.09262, "country": "Morocco" },
    { "lat": 43.750298, "lon": 7.412841, "country": "Monaco" },
    { "lat": 47.411631, "lon": 28.369885, "country": "Moldova" },
    { "lat": 42.708678, "lon": 19.37439, "country": "Montenegro" },
    { "lat": -18.766947, "lon": 46.869107, "country": "Madagascar" },
    { "lat": 7.131474, "lon": 171.184478, "country": "Marshall Islands" },
    { "lat": 41.608635, "lon": 21.745275, "country": "Macedonia [FYROM]" },
    { "lat": 17.570692, "lon": -3.996166, "country": "Mali" },
    { "lat": 21.913965, "lon": 95.956223, "country": "Myanmar [Burma]" },
    { "lat": 46.862496, "lon": 103.846656, "country": "Mongolia" },
    { "lat": 22.198745, "lon": 113.543873, "country": "Macau" },
    { "lat": 17.33083, "lon": 145.38469, "country": "Northern Mariana Islands" },
    { "lat": 14.641528, "lon": -61.024174, "country": "Martinique" },
    { "lat": 21.00789, "lon": -10.940835, "country": "Mauritania" },
    { "lat": 16.742498, "lon": -62.187366, "country": "Montserrat" },
    { "lat": 35.937496, "lon": 14.375416, "country": "Malta" },
    { "lat": -20.348404, "lon": 57.552152, "country": "Mauritius" },
    { "lat": 3.202778, "lon": 73.22068, "country": "Maldives" },
    { "lat": -13.254308, "lon": 34.301525, "country": "Malawi" },
    { "lat": 23.634501, "lon": -102.552784, "country": "Mexico" },
    { "lat": 4.210484, "lon": 101.975766, "country": "Malaysia" },
    { "lat": -18.665695, "lon": 35.529562, "country": "Mozambique" },
    { "lat": -22.95764, "lon": 18.49041, "country": "Namibia" },
    { "lat": -20.904305, "lon": 165.618042, "country": "New Caledonia" },
    { "lat": 17.607789, "lon": 8.081666, "country": "Niger" },
    { "lat": -29.040835, "lon": 167.954712, "country": "Norfolk Island" },
    { "lat": 9.081999, "lon": 8.675277, "country": "Nigeria" },
    { "lat": 12.865416, "lon": -85.207229, "country": "Nicaragua" },
    { "lat": 52.132633, "lon": 5.291266, "country": "Netherlands" },
    { "lat": 60.472024, "lon": 8.468946, "country": "Norway" },
    { "lat": 28.394857, "lon": 84.124008, "country": "Nepal" },
    { "lat": -0.522778, "lon": 166.931503, "country": "Nauru" },
    { "lat": -19.054445, "lon": -169.867233, "country": "Niue" },
    { "lat": -40.900557, "lon": 174.885971, "country": "New Zealand" },
    { "lat": 21.512583, "lon": 55.923255, "country": "Oman" },
    { "lat": 8.537981, "lon": -80.782127, "country": "Panama" },
    { "lat": -9.189967, "lon": -75.015152, "country": "Peru" },
    { "lat": -17.679742, "lon": -149.406843, "country": "French Polynesia" },
    { "lat": -6.314993, "lon": 143.95555, "country": "Papua New Guinea" },
    { "lat": 12.879721, "lon": 121.774017, "country": "Philippines" },
    { "lat": 30.375321, "lon": 69.345116, "country": "Pakistan" },
    { "lat": 51.919438, "lon": 19.145136, "country": "Poland" },
    { "lat": 46.941936, "lon": -56.27111, "country": "Saint Pierre and Miquelon" },
    { "lat": -24.703615, "lon": -127.439308, "country": "Pitcairn Islands" },
    { "lat": 18.220833, "lon": -66.590149, "country": "Puerto Rico" },
    { "lat": 31.952162, "lon": 35.233154, "country": "Palestinian Territories" },
    { "lat": 39.399872, "lon": -8.224454, "country": "Portugal" },
    { "lat": 7.51498, "lon": 134.58252, "country": "Palau" },
    { "lat": -23.442503, "lon": -58.443832, "country": "Paraguay" },
    { "lat": 25.354826, "lon": 51.183884, "country": "Qatar" },
    { "lat": -21.115141, "lon": 55.536384, "country": "Réunion" },
    { "lat": 45.943161, "lon": 24.96676, "country": "Romania" },
    { "lat": 44.016521, "lon": 21.005859, "country": "Serbia" },
    { "lat": 61.52401, "lon": 105.318756, "country": "Russia" },
    { "lat": -1.940278, "lon": 29.873888, "country": "Rwanda" },
    { "lat": 23.885942, "lon": 45.079162, "country": "Saudi Arabia" },
    { "lat": -9.64571, "lon": 160.156194, "country": "Solomon Islands" },
    { "lat": -4.679574, "lon": 55.491977, "country": "Seychelles" },
    { "lat": 12.862807, "lon": 30.217636, "country": "Sudan" },
    { "lat": 60.128161, "lon": 18.643501, "country": "Sweden" },
    { "lat": 1.352083, "lon": 103.819836, "country": "Singapore" },
    { "lat": -24.143474, "lon": -10.030696, "country": "Saint Helena" },
    { "lat": 46.151241, "lon": 14.995463, "country": "Slovenia" },
    { "lat": 77.553604, "lon": 23.670272, "country": "Svalbard and Jan Mayen" },
    { "lat": 48.669026, "lon": 19.699024, "country": "Slovakia" },
    { "lat": 8.460555, "lon": -11.779889, "country": "Sierra Leone" },
    { "lat": 43.94236, "lon": 12.457777, "country": "San Marino" },
    { "lat": 14.497401, "lon": -14.452362, "country": "Senegal" },
    { "lat": 5.152149, "lon": 46.199616, "country": "Somalia" },
    { "lat": 3.919305, "lon": -56.027783, "country": "Suriname" },
    { "lat": 0.18636, "lon": 6.613081, "country": "São Tomé and Príncipe" },
    { "lat": 13.794185, "lon": -88.89653, "country": "El Salvador" },
    { "lat": 34.802075, "lon": 38.996815, "country": "Syria" },
    { "lat": -26.522503, "lon": 31.465866, "country": "Swaziland" },
    { "lat": 21.694025, "lon": -71.797928, "country": "Turks and Caicos Islands" },
    { "lat": 15.454166, "lon": 18.732207, "country": "Chad" },
    { "lat": -49.280366, "lon": 69.348557, "country": "French Southern Territories" },
    { "lat": 8.619543, "lon": 0.824782, "country": "Togo" },
    { "lat": 15.870032, "lon": 100.992541, "country": "Thailand" },
    { "lat": 38.861034, "lon": 71.276093, "country": "Tajikistan" },
    { "lat": -8.967363, "lon": -171.855881, "country": "Tokelau" },
    { "lat": -8.874217, "lon": 125.727539, "country": "Timor-Leste" },
    { "lat": 38.969719, "lon": 59.556278, "country": "Turkmenistan" },
    { "lat": 33.886917, "lon": 9.537499, "country": "Tunisia" },
    { "lat": -21.178986, "lon": -175.198242, "country": "Tonga" },
    { "lat": 38.963745, "lon": 35.243322, "country": "Turkey" },
    { "lat": 10.691803, "lon": -61.222503, "country": "Trinidad and Tobago" },
    { "lat": -7.109535, "lon": 177.64933, "country": "Tuvalu" },
    { "lat": 23.69781, "lon": 120.960515, "country": "Taiwan" },
    { "lat": -6.369028, "lon": 34.888822, "country": "Tanzania" },
    { "lat": 48.379433, "lon": 31.16558, "country": "Ukraine" },
    { "lat": 1.373333, "lon": 32.290275, "country": "Uganda" },
    { "lat": 37.09024, "lon": -95.712891, "country": "United States" },
    { "lat": -32.522779, "lon": -55.765835, "country": "Uruguay" },
    { "lat": 41.377491, "lon": 64.585262, "country": "Uzbekistan" },
    { "lat": 41.902916, "lon": 12.453389, "country": "Vatican City" },
    { "lat": 12.984305, "lon": -61.287228, "country": "Saint Vincent and the Grenadines" },
    { "lat": 6.42375, "lon": -66.58973, "country": "Venezuela" },
    { "lat": 18.420695, "lon": -64.639968, "country": "British Virgin Islands" },
    { "lat": 18.335765, "lon": -64.896335, "country": "U.S. Virgin Islands" },
    { "lat": 14.058324, "lon": 108.277199, "country": "Vietnam" },
    { "lat": -15.376706, "lon": 166.959158, "country": "Vanuatu" },
    { "lat": -13.768752, "lon": -177.156097, "country": "Wallis and Futuna" },
    { "lat": -13.759029, "lon": -172.104629, "country": "Samoa" },
    { "lat": 42.602636, "lon": 20.902977, "country": "Kosovo" },
    { "lat": 15.552727, "lon": 48.516388, "country": "Yemen" },
    { "lat": -12.8275, "lon": 45.166244, "country": "Mayotte" },
    { "lat": -30.559482, "lon": 22.937506, "country": "South Africa" },
    { "lat": -13.133897, "lon": 27.849332, "country": "Zambia" },
    { "lat": -19.015438, "lon": 29.154857, "country": "Zimbabwe" }
];
function getCountryDetails(countries) {
    countries = countries.map(x => x === null || x === void 0 ? void 0 : x.toLowerCase());
    let output = [];
    for (let i in countryData) {
        let country = countryData[i];
        if (countries.indexOf(country.country.toLowerCase()) >= 0) {
            output.push(country);
        }
    }
    return output;
}
exports.getCountryDetails = getCountryDetails;


/***/ }),

/***/ "./src/components/local-dashboard/local-dashboard.tsx":
/*!************************************************************!*\
  !*** ./src/components/local-dashboard/local-dashboard.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_leaflet_1 = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/index.js");
const leaflet_1 = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
const countries_1 = __webpack_require__(/*! ./countries */ "./src/components/local-dashboard/countries.tsx");
const reports_1 = __webpack_require__(/*! ./reports/reports */ "./src/components/local-dashboard/reports/reports.tsx");
function checkInStatusText(s) {
    switch (s === null || s === void 0 ? void 0 : s.toLowerCase()) {
        default: return 'Expected';
        case 'check-in': return 'Checked In';
        case 'check-out': return 'Checked Out';
    }
}
class ListWidget extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate(prevProps, prevState) { }
    renderItem(item, key) {
        let cls = "";
        if (this.props.selected != null && this.props.selected._id == item._id) {
            cls = "selected";
        }
        if (parseInt(item.healthflag) == 1) {
            cls += " warning";
        }
        return React.createElement("div", { key: key, className: `item local-list ${cls} ${item.status == null || item.status == "" ? "arriving" : item.status} `, id: `emp-${item._id}` },
            React.createElement("div", { className: 'c status', onClick: () => this.props.onSelectItem(item) },
                React.createElement("div", { className: `label ${item.status == null || item.status == "" ? "arriving" : item.status} ` }),
                React.createElement("div", { className: 'value' }, item.status == null ? "Expected" : checkInStatusText(item.status))),
            React.createElement("div", { className: 'c temperature', onClick: () => this.props.onSelectItem(item) },
                React.createElement("div", { className: 'label' }, "Temperature"),
                React.createElement("div", { className: `value ${item.temperature != null ? item.temperature !== "" ? item.tempunit : "" : ""}` },
                    item.temperature,
                    " ")),
            React.createElement("div", { className: 'c location', onClick: () => this.props.onSelectItem(item) },
                React.createElement("div", { className: 'label' },
                    "Location ",
                    React.createElement("span", { className: "icon" })),
                React.createElement("div", { className: 'value' },
                    item.location,
                    " ")),
            React.createElement("div", { className: 'c name', onClick: () => this.props.onSelectItem(item) },
                React.createElement("div", { className: 'label' },
                    React.createElement("span", { className: "icon" }),
                    "Name"),
                React.createElement("div", { className: 'value' }, item.name)),
            React.createElement("div", { className: 'c last-country', onClick: () => this.props.onSelectItem(item) },
                React.createElement("div", { className: 'label' }, "Countries Visited"),
                React.createElement("div", { className: 'value' }, item.countriesvisited)),
            React.createElement("div", { className: 'c data-source', onClick: () => this.props.onSelectItem(item) },
                React.createElement("div", { className: 'label' }, "Data Source"),
                React.createElement("div", { className: 'value' }, item.source == null ? "" : React.createElement("img", { src: `https://s3.amazonaws.com/ecyber.public/lucyinthesky.io/heal/datasources/${item.source.toLowerCase()}.png`, alt: item.source }))),
            React.createElement("div", { className: `c starred` },
                React.createElement("div", { className: `value starred ${item.starred ? "fill" : ""}  `, onClick: () => this.props.toggleStarred(item._id) })));
    }
    render() {
        let items = this.props.items;
        let starredItemsString = localStorage.getItem("starredItems");
        let starredItems = JSON.parse(starredItemsString);
        if (starredItems == null) {
            starredItems = [];
        }
        if (this.props.sorting == "starred") {
            items = items.filter((item) => {
                return (starredItems.indexOf(item._id) != -1);
            });
        }
        let searchText = this.props.searchText;
        if (searchText != null && searchText.trim().length > 0) {
            items = items.filter((item) => {
                let regExp = new RegExp(searchText, "i");
                return ((item.id == searchText) || (regExp.test(item.name)));
            });
        }
        // group items
        let labels = ["check-in", "check-out", "expected"];
        let grouped = [];
        labels.forEach(label => {
            let temp = items.filter(item => {
                if (label == "expected") {
                    return (item.status == null || item.status == "");
                }
                return (item.status == label);
            });
            grouped = grouped.concat(temp);
        });
        return React.createElement("div", { className: 'list-widget' }, grouped.map((item, key) => this.renderItem(item, key)));
    }
}
class MapWidget extends React.Component {
    componentDidUpdate(prevProps) {
        // if (this.props.items.length == 0) return;
        // /* if only one point is present - fitBounds() fails. So just pan to that item */
        // if (this.props.items.length == 1) {
        //     let zoom = this.map?.getZoom() || 0;
        //     //if (zoom < 3) zoom = 3;
        //     this.map?.setView([this.props.items[0].lat, this.props.items[0].long], zoom);
        //     return;
        // }
        // let bounds = this.props.items.map(item => [item.lat, item.long]) as LatLngBoundsExpression;
        // this.map.fitBounds(bounds);
    }
    render() {
        var _a, _b, _c;
        let size = '';
        let zoom = (_a = this.map) === null || _a === void 0 ? void 0 : _a.getZoom();
        if (zoom < 3) {
            size = 'tiny';
        }
        let availableCountries = {};
        for (var i in this.props.items) {
            let countries = (_b = this.props.items[i].countriesvisited) === null || _b === void 0 ? void 0 : _b.split(',');
            for (var c in countries) {
                let country = ((_c = countries[c]) === null || _c === void 0 ? void 0 : _c.trim()) || '';
                if (!country)
                    continue;
                availableCountries[country] = 1;
            }
        }
        let countryData = countries_1.getCountryDetails(Object.keys(availableCountries));
        return React.createElement("div", { className: 'gmap' },
            React.createElement(react_leaflet_1.Map, { center: [45.4, -75.7], zoom: 1, ref: (el) => {
                    if (!!el) {
                        this.map = el.leafletElement;
                    }
                } },
                React.createElement(react_leaflet_1.TileLayer, { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }),
                countryData.map((item, key) => this.renderMarker(item, key, size))));
    }
    renderMarker(item, key, size) {
        //let stat = shortenNumber(item[this.props.stat]);
        //console.log(stat);
        let markerClass = `micon screened -selected ${size}`;
        return React.createElement(react_leaflet_1.Marker
        //onClick={() => this.props.onItemSelected(item)}
        , { 
            //onClick={() => this.props.onItemSelected(item)}
            position: [item.lat, item.lon], key: key, icon: leaflet_1.divIcon({ className: markerClass, 'html': '<div><div class="inner"></div><div class="outer"></div><div class="txt"></div></div>' }) });
    }
}
class LocalDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "user_01",
            lastUpdated: null,
            sorting: 'all',
            data: [],
            dialog: "",
            mapFilter: 'screened',
            scannData: {
                temperature: "",
                id: "",
                name: "",
                location: "",
                lastVisitedCountry: "",
                isValid: false,
                feedback: React.createElement("span", null),
                buttonText: "Submit",
                tempUnit: "celsius"
            },
            selected: null,
            editForm: {
                buttonText: "submit",
                stateButtonText: "check-in",
                feedback: ""
            },
            searchText: "",
            newItems: [],
            view: "all"
        };
        this.submitForm = this.submitForm.bind(this);
        this.updateFormData = this.updateFormData.bind(this);
        this.updateEditFormData = this.updateEditFormData.bind(this);
        this.closeScanningForm = this.closeScanningForm.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.toggleItemStarred = this.toggleItemStarred.bind(this);
        this.onSelectItem = this.onSelectItem.bind(this);
        this.onCloseEditDialog = this.onCloseEditDialog.bind(this);
        this.submitEditForm = this.submitEditForm.bind(this);
        this.updateTempUnit = this.updateTempUnit.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
        this.toggleReportsView = this.toggleReportsView.bind(this);
    }
    componentDidMount() {
        this.loadRemoteData();
        this.subscribe();
    }
    subscribe() {
        window.Lucy.MessageBus.init({ url: this.props.apiUrl, apiKey: this.props.apiKey })
            .then(() => {
            window.Lucy.MessageBus.subscribe('situation-dashboard', (value, channel) => {
                // update status
                var dataSet = this.state.data;
                let NewRecords = this.state.newItems;
                let NewRecord = JSON.parse(value);
                /* keep it on the top */
                dataSet.unshift(NewRecord);
                NewRecords.unshift(NewRecord);
                this.setState({
                    data: dataSet,
                    newItems: NewRecords
                });
            });
        });
    }
    loadRemoteData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield fetch(this.props.apiUrl + "/Lucy/SituationalAwareness/users/today", {
                    method: 'GET',
                    headers: {
                        'Authorization': 'APIKEY ' + this.props.apiKey,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw yield response.text();
                }
                let rawData = yield response.json();
                let lastUpdate = rawData.lastUpdated;
                localStorage.setItem('locallastUpdated', lastUpdate);
                let details = [];
                let screened = 0;
                let employees = 0;
                let oranges = 0;
                if (rawData) {
                    details = rawData;
                    // get localstorage data
                    let starredItemsString = localStorage.getItem("starredItems");
                    let starredItems = JSON.parse(starredItemsString);
                    let temp = details.map((item) => {
                        if (starredItems != null) {
                            item.starred = (starredItems.indexOf(item._id) != -1);
                        }
                        item.tempunit = "celsius";
                        if (item.temperature != null && item.temperature.trim().length > 0) {
                            screened++;
                        }
                        employees++;
                        return item;
                    });
                    details = temp;
                }
                this.setState({
                    data: details,
                    lastUpdated: lastUpdate,
                });
                return { details };
            }
            catch (e) {
                throw e;
            }
        });
    }
    setSorting(type) {
        this.setState({ sorting: type });
    }
    setMapFilter(filter) {
        this.setState({ mapFilter: filter });
    }
    renderPrecautions() {
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'dialog-sheet', onClick: () => this.setState({ dialog: '' }) }),
            React.createElement("div", { className: 'dialog info' },
                React.createElement("div", { className: 'header' },
                    React.createElement("div", { className: 'first' }),
                    React.createElement("div", { className: 'title' }, "Precautions To avoid infection"),
                    React.createElement("div", { className: 'last' },
                        React.createElement("div", { className: 'closer', onClick: () => this.setState({ dialog: '' }) }))),
                React.createElement("div", { className: 'body' },
                    React.createElement("ol", { className: 'items' },
                        React.createElement("li", null,
                            React.createElement("div", { className: 'text' }, "Wash your hands each time you walk in the door "),
                            React.createElement("div", { className: 'action-container' },
                                React.createElement("a", { className: 'action', href: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public', target: '_blank' }, "Read more")))))));
    }
    renderScanningForm() {
        return React.createElement(React.Fragment, null);
    }
    renderEditForm() {
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'dialog-sheet', onClick: this.onCloseEditDialog }),
            React.createElement("div", { className: 'dialog scann-form' },
                React.createElement("div", { className: 'header' },
                    React.createElement("div", { className: 'title edit' },
                        React.createElement("label", { className: `${this.state.selected.status}` }, this.state.selected.status)),
                    React.createElement("div", { className: 'last' },
                        React.createElement("div", { className: 'closer', onClick: this.onCloseEditDialog }))),
                React.createElement("div", { className: 'body edit' },
                    React.createElement("div", { className: `left` },
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", { className: "label" }, "Temperature"),
                            React.createElement("input", { type: "text", name: "temperature", className: `input ${this.state.selected.temperature != null && this.state.selected.temperature.trim().length == 0 ? "" : "filled"} `, value: this.state.selected.temperature, placeholder: "Ex: 23", onChange: (event) => this.updateEditFormData(event, 'temperature') }),
                            React.createElement("span", { className: "temp-units" },
                                React.createElement("span", { className: `temp-label ${this.state.selected.tempunit == "celsius" ? "selected" : ""}`, onClick: () => this.updateTempUnit("celsius") },
                                    React.createElement("span", null, "\u2103")),
                                React.createElement("span", { className: `temp-label ${this.state.selected.tempunit == "fahrenheit" ? "selected" : ""} `, onClick: () => this.updateTempUnit("fahrenheit") },
                                    React.createElement("span", null, "\u2109")))),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", { className: "label" }, "Name  "),
                            React.createElement("input", { type: "text", name: "name", className: `input ${this.state.selected.name != null && this.state.selected.name.trim().length == 0 ? "" : "filled"} `, value: this.state.selected.name, placeholder: "Ex: John Doe", onChange: (event) => this.updateEditFormData(event, 'name') })),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", { className: "label" }, "Location  "),
                            React.createElement("input", { type: "text", name: "location", className: `input ${this.state.selected.location != null && this.state.selected.location.trim().length == 0 ? "" : "filled"} `, value: this.state.selected.location, placeholder: "Ex: Singapore", onChange: (event) => this.updateEditFormData(event, 'location') })),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", { className: "label" }, "Countries Visited "),
                            React.createElement("input", { type: "text", name: "lastvisited", className: `input ${this.state.selected.countriesvisited != null && this.state.selected.countriesvisited.trim().length == 0 ? "" : "filled"} `, value: this.state.selected.countriesvisited, placeholder: "Ex: Kenya", onChange: (event) => this.updateEditFormData(event, 'lastVisited') })),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", { className: "label" }, "Email "),
                            React.createElement("input", { type: "text", name: "email", className: `input ${this.state.selected.email != null && this.state.selected.email.trim().length == 0 ? "" : "filled"} `, value: this.state.selected.email, placeholder: "Ex: abc@abc.com", onChange: (event) => this.updateEditFormData(event, 'email') })),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", { className: "label" }, "Contact Number "),
                            React.createElement("input", { type: "text", name: "contactnumber", className: `input ${this.state.selected.contactnumber != null && this.state.selected.contactnumber.trim().length == 0 ? "" : "filled"} `, value: this.state.selected.contactnumber, placeholder: "Ex: +1(504)43227645", onChange: (event) => this.updateEditFormData(event, 'contactnnumber') })),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", { className: "label" }, "Data Source "),
                            this.state.selected.source == null ? "" : React.createElement("img", { className: "data-source-image", src: `https://s3.amazonaws.com/ecyber.public/lucyinthesky.io/heal/datasources/${this.state.selected.source.toLowerCase()}.png`, alt: this.state.selected.source }))),
                    React.createElement("div", { className: `middle` }),
                    React.createElement("div", { className: `right` },
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", { className: "label full-width" }, "Capture Image "),
                            React.createElement("div", { className: "placeholder" },
                                React.createElement("img", { src: "images/camera.png", alt: "camera" })),
                            React.createElement("button", { className: `take-photo` },
                                React.createElement("span", { className: `icon` }),
                                " Take Photo "))),
                    React.createElement("div", { className: "form-group" }, this.state.editForm.feedback),
                    React.createElement("div", { className: "form-group buttons" },
                        React.createElement("button", { type: "button", className: `check-in-button `, onClick: () => this.submitEditForm("status") },
                            React.createElement("span", { className: "icon" }),
                            this.state.editForm.stateButtonText),
                        React.createElement("button", { type: "button", className: `save-changes-button `, onClick: () => this.submitEditForm("save") },
                            React.createElement("span", { className: "icon" }),
                            this.state.editForm.buttonText)))));
    }
    closeScanningForm() {
        let scannData = this.state.scannData;
        scannData.id = "";
        scannData.name = "";
        scannData.temperature = "";
        scannData.location = "";
        scannData.lastVisitedCountry = "";
        scannData.isValid = false;
        scannData.feedback = React.createElement("span", null);
        scannData.buttonText = "Submit";
        this.setState({
            scannData: scannData,
            dialog: ""
        });
    }
    updateFormData(event, filed) {
        let scannedData = this.state.scannData;
        let newValue = event.target.value;
        switch (filed) {
            case "temperature":
                scannedData.temperature = newValue;
                break;
            case "id":
                scannedData.id = newValue;
                break;
            case "name":
                scannedData.name = newValue;
                break;
            case "location":
                scannedData.location = newValue;
                break;
            case "lastVisited":
                scannedData.lastVisitedCountry = newValue;
                break;
        }
        scannedData.isValid = scannedData.name.trim().length > 0 && scannedData.temperature.trim().length > 0;
        this.setState({ scannData: scannedData });
    }
    updateEditFormData(event, filed) {
        let selected = this.state.selected;
        let newValue = event.target.value;
        switch (filed) {
            case "temperature":
                selected.temperature = newValue;
                break;
            case "name":
                selected.name = newValue;
                break;
            case "location":
                selected.location = newValue;
                break;
            case "lastVisited":
                selected.countriesvisited = newValue;
                break;
            case "email":
                selected.email = newValue;
                break;
            case "contactnnumber":
                selected.contactnumber = newValue;
                break;
        }
        this.setState({ selected: selected });
    }
    updateTempUnit(unit) {
        let selected = this.state.selected;
        selected.tempunit = unit;
        this.setState({ selected: selected });
    }
    submitForm() {
        let scanData = this.state.scannData;
        scanData.feedback = React.createElement("span", { className: "feedback info" }, "Submitting...");
        scanData.buttonText = "Submitting...";
        this.setState({ scannData: scanData });
        if (this.state.scannData.isValid) {
            let temperature = this.state.scannData.temperature.trim();
            let tempUnit = this.state.scannData.tempUnit;
            if (tempUnit == "fahrenheit") {
                temperature = this.calcCelsiusValue(temperature);
            }
            // submit form 
            let _data = JSON.stringify({
                "id": this.state.scannData.id.trim(),
                "name": this.state.scannData.name.trim(),
                "location": this.state.scannData.location.trim(),
                "temperature": temperature,
                "source": "Lucy",
                "countriesvisited": this.state.scannData.lastVisitedCountry.trim(),
            });
            fetch(this.props.apiUrl + "/Lucy/SituationalAwareness/users", {
                method: "post",
                headers: {
                    'Authorization': 'APIKEY ' + this.props.apiKey,
                    'Content-Type': 'application/json'
                },
                body: _data
            })
                .then((res) => res.json())
                .then(response => {
                if (response._id) {
                    let scannedData = this.state.scannData;
                    scannedData.id = "";
                    scannedData.name = "";
                    scannedData.temperature = "";
                    scannedData.lastVisitedCountry = "";
                    scannedData.location = "";
                    scannedData.isValid = false;
                    scannedData.feedback = React.createElement("span", { className: "feedback success" }, "Done");
                    scanData.buttonText = "Submit";
                    this.setState({ scannData: scannedData });
                }
            })
                .catch(err => {
                let scannedData = this.state.scannData;
                scannedData.feedback = React.createElement("span", { className: "feedback error" }, "Oops! something went wrong");
                scanData.buttonText = "Submit";
                this.setState({ scannData: scannedData });
                console.log(err);
                throw err;
            });
        }
    }
    updateUserState() {
        let editForm = this.state.editForm;
        editForm.feedback = React.createElement("span", { className: "feedback info" }, "Submitting...");
        editForm.stateButtonText = "Submitting...";
        this.setState({ editForm: editForm });
    }
    submitEditForm(type) {
        let editForm = this.state.editForm;
        editForm.feedback = React.createElement("span", { className: "feedback info" }, "Submitting...");
        if (type == "status") {
            editForm.stateButtonText = "Submitting...";
        }
        else {
            editForm.buttonText = "Submitting...";
        }
        this.setState({ editForm: editForm });
        let selected = this.state.selected;
        let isValid = selected.temperature.trim().length > 0 && selected.name.trim().length > 0 && selected.location.trim().length > 0;
        if (isValid) {
            status = selected.status == null ? "" : selected.status;
            if (type == "status") {
                status = status == "check-in" ? "check-out" : "check-in";
            }
            let temperature = selected.temperature.trim();
            let tempUnit = selected.tempunit;
            if (tempUnit != "celsius") {
                temperature = this.calcCelsiusValue(temperature);
            }
            // submit form 
            let _data = JSON.stringify({
                "name": selected.name.trim(),
                "location": selected.location.trim(),
                "temperature": temperature,
                "countriesvisited": selected.countriesvisited.trim(),
                "_id": selected._id,
                "id": selected.id,
                "status": status,
                'email': selected.email,
                "contactnumber": selected.contactnumber
            });
            fetch(this.props.apiUrl + "/Lucy/SituationalAwareness/users/update", {
                method: "PATCH",
                headers: {
                    'Authorization': 'APIKEY ' + this.props.apiKey,
                    'Content-Type': 'application/json'
                },
                body: _data
            })
                .then((res) => res.json())
                .then(response => {
                let selected = response;
                let editForm = this.state.editForm;
                editForm.feedback = React.createElement("span", { className: "feedback success" }, "Saved");
                editForm.buttonText = "Submit";
                editForm.stateButtonText = selected.status == "check-in" ? "check-out" : "check-in";
                // update data set
                let data = this.state.data;
                let starredItemsString = localStorage.getItem("starredItems");
                let starredItems = JSON.parse(starredItemsString);
                if (starredItems == null) {
                    starredItems = [];
                }
                let screened = 0;
                let employees = 0;
                let oranges = 0;
                var updated = data.map(item => {
                    if (item._id == selected._id) {
                        item = selected;
                    }
                    item.starred = (starredItems.indexOf(item._id) != -1);
                    item.tempunit = "celsius";
                    if (item.temperature != null && item.temperature.trim().length > 0) {
                        screened++;
                    }
                    employees++;
                    return item;
                });
                this.setState({
                    editForm: editForm,
                    data: updated,
                    selected: selected
                });
            })
                .catch(err => {
                let editForm = this.state.editForm;
                editForm.feedback = React.createElement("span", { className: "feedback error" }, "Oops! something went wrong");
                editForm.buttonText = "Submit";
                editForm.stateButtonText = this.state.selected.status == "check-in" ? "check-out" : "check-in";
                this.setState({ editForm: editForm });
                console.log(err);
                throw err;
            });
        }
        else {
            editForm.feedback = React.createElement("span", { className: "feedback error" }, "Please Complete the form");
            if (type == "status") {
                editForm.stateButtonText = selected.status == "check-in" ? "check-out" : "check-in";
            }
            else {
                editForm.buttonText = "Submit";
            }
            this.setState({ editForm: editForm });
        }
    }
    toggleItemStarred(_id) {
        let starredItemsString = localStorage.getItem("starredItems");
        let starredItems = JSON.parse(starredItemsString);
        if (starredItems == null) {
            starredItems = [];
        }
        // check if item exist in localstorage
        let index = starredItems.indexOf(_id);
        if (index == -1) {
            starredItems.push(_id);
        }
        else {
            starredItems.splice(index, 1);
        }
        // update data list 
        let data = this.state.data;
        data.map((item, key) => {
            if (item._id == _id) {
                item.starred = !item.starred;
            }
        });
        this.setState({ data: data });
        localStorage.setItem("starredItems", JSON.stringify(starredItems));
    }
    onSelectItem(item) {
        item.tempunit = "celsius";
        this.setState({
            selected: item,
            dialog: "edit",
            editForm: {
                stateButtonText: item.status == "check-in" ? "check-out" : "check-in",
                buttonText: "Submit",
                feedback: ""
            }
        });
    }
    onCloseEditDialog() {
        this.setState({
            selected: null,
            dialog: ""
        });
    }
    calcCelsiusValue(fahrenheit) {
        let F = parseFloat(fahrenheit);
        if (isNaN(F)) {
            throw "Temperature should be a numbber";
        }
        let C = (5 / 9) * (F - 32);
        C = Math.round((C + 0.00001) * 100) / 100;
        return C.toString();
    }
    onSearch(event) {
        let seatchText = event.target.value;
        let regExp = /[^\w\s+-]/gi;
        let cleanedSearchText = seatchText.replace(regExp, "");
        this.setState({ searchText: cleanedSearchText });
    }
    renderNotification(item, key) {
        setTimeout(() => {
            this.closeMessage(item);
        }, 10000);
        return (React.createElement("div", { className: "message-box", id: `message-${item._id}`, key: key },
            "New Registration ",
            React.createElement("a", { href: `#emp-${item._id}`, onClick: () => this.viewNewRecord(item) }, "view"),
            React.createElement("div", { className: "close", onClick: () => this.closeMessage(item) })));
    }
    viewNewRecord(item) {
        let element = document.getElementById("emp-" + item._id);
        element.classList.add("preview");
        setTimeout(() => {
            element.classList.remove('preview');
            this.closeMessage(item);
        }, 5000);
    }
    closeMessage(item) {
        let newItems = this.state.newItems;
        let updatedItems = newItems.filter(newItem => {
            return !(newItem._id == item._id);
        });
        this.setState({ newItems: updatedItems });
    }
    toggleReportsView() {
        if (this.state.view == "all") {
            this.setState({ view: "reports" });
        }
        else {
            this.setState({ view: "all" });
        }
    }
    render() {
        var dialog = React.createElement(React.Fragment, null);
        if (this.state.dialog == "precautions") {
            dialog = this.renderPrecautions();
        }
        else if (this.state.dialog == "scan-dialog") {
            dialog = this.renderScanningForm();
        }
        else if (this.state.dialog == "edit") {
            dialog = this.renderEditForm();
        }
        let screened = this.state.data.filter(e => { var _a; return ((_a = e === null || e === void 0 ? void 0 : e.temperature) === null || _a === void 0 ? void 0 : _a.length) > 0; }).length;
        let employees = this.state.data.length;
        let oranges = this.state.data.filter(e => Number(e.healthflag) == 1).length;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'toolbar' },
                React.createElement("div", { className: `toolbar-button ${this.state.view == "reports" ? "selected" : ""} `, onClick: this.toggleReportsView },
                    "Reports ",
                    React.createElement("span", { className: "arrow" }))),
            this.state.view == "all" ?
                React.createElement("div", { className: 'data-section' },
                    React.createElement("div", { className: 'stats stat-local' },
                        React.createElement("div", { className: 'stats-header' },
                            React.createElement("div", { className: 'dt' })),
                        React.createElement("div", { className: 'stat screened' },
                            React.createElement("div", { className: 'metric' }, screened),
                            React.createElement("div", { className: 'title' }, "screened")),
                        React.createElement("div", { className: 'stat employees' },
                            React.createElement("div", { className: 'metric' }, employees),
                            React.createElement("div", { className: 'title' }, "Expected")),
                        React.createElement("div", { className: 'stat oranges' },
                            React.createElement("div", { className: 'metric' }, oranges),
                            React.createElement("div", { className: 'title' }, "oranges"))),
                    React.createElement("div", { className: 'map local-map' },
                        React.createElement("div", { className: 'map-widget' },
                            React.createElement("div", { className: 'filters' }),
                            React.createElement(MapWidget, { items: this.state.data }))),
                    React.createElement("div", { className: 'data-list-container local-list' },
                        React.createElement("div", { className: 'data-list' },
                            React.createElement("div", { className: 'header' },
                                React.createElement("div", { className: 'title local-list' },
                                    React.createElement("span", { className: "arrow" }),
                                    "Today"),
                                React.createElement("div", { className: 'filters' },
                                    React.createElement("input", { type: "text", name: "search", className: "search", placeholder: "search by name or id", value: this.state.searchText, onChange: (event) => this.onSearch(event) }),
                                    React.createElement("div", { onClick: this.setSorting.bind(this, 'starred'), className: (this.state.sorting == 'starred' ? 'set' : '') + ' switch starred' },
                                        React.createElement("span", { className: "icon star" }),
                                        "starred"),
                                    React.createElement("div", { onClick: this.setSorting.bind(this, 'all'), className: (this.state.sorting == 'all' ? 'set' : '') + ' switch all' },
                                        "All ",
                                        " "))),
                            React.createElement(ListWidget, { sorting: this.state.sorting, searchText: this.state.searchText, items: this.state.data, toggleStarred: this.toggleItemStarred, selected: this.state.selected, onSelectItem: this.onSelectItem }),
                            React.createElement("div", { className: 'footer' },
                                React.createElement("div", { className: 'tip' }, "Learn more about this dashboard"),
                                React.createElement("div", { className: 'action', onClick: this.props.renderInfo }, "Info")))))
                :
                    React.createElement(reports_1.default, { apiUrl: this.props.apiUrl, apiKey: this.props.apiKey }),
            React.createElement("div", { className: `bottom-bar` }, this.state.dialog == "scann" ?
                React.createElement("div", { className: `qr-code-holder` },
                    React.createElement("div", { className: "qr-code-box" },
                        React.createElement("div", { className: "header" },
                            React.createElement("div", { className: "closeButton", onClick: () => this.setState({ dialog: "" }) })),
                        React.createElement("img", { src: "https://s3.amazonaws.com/ecyber.public/lucyinthesky.io/heal/qrcodes/qr-lobby.png", alt: "qr-code", className: "qr-code-image" }),
                        React.createElement("p", null, "Scan to start screening"),
                        React.createElement("h3", { onClick: () => this.setState({ dialog: 'scan-dialog' }) }, "new screening")),
                    React.createElement("img", { src: "https://s3.amazonaws.com/ecyber.public/lucyinthesky.io/heal/images/footer-hover.svg", alt: "qr-code-button", className: `qr-code-handle` }))
                :
                    React.createElement("div", { className: "scanning-button" },
                        React.createElement("img", { src: "https://s3.amazonaws.com/ecyber.public/lucyinthesky.io/heal/images/footer-icon.svg", alt: "qr-code-button", className: ``, onClick: () => this.setState({ dialog: "scann" }) }))),
            dialog,
            React.createElement("div", { className: "message-container" }, this.state.newItems.map((item, key) => this.renderNotification(item, key)))));
    }
}
exports.default = LocalDashboard;


/***/ }),

/***/ "./src/components/local-dashboard/reports/contact-tracing.tsx":
/*!********************************************************************!*\
  !*** ./src/components/local-dashboard/reports/contact-tracing.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.isInView = (element) => {
            if (!element) {
                return false;
            }
            const offset = 20;
            const rect = element.getBoundingClientRect();
            return rect.top >= 0 - offset && rect.bottom <= window.innerHeight + offset;
        };
        this.state = {
            selected: null,
            tracingDetails: []
        };
        this.onScroll = this.onScroll.bind(this);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.searchText.length != this.props.searchText.length) {
            this.setState({ selected: null });
        }
        this.onScroll();
    }
    getTracingDetails(item) {
        this.setState({ selected: item });
        // get tracing 
        let _data = JSON.stringify({
            'email': item.email,
            '_id': item._id,
        });
        fetch(this.props.apiUrl + "/Lucy/SituationalAwareness/users/reports/contact-tracing", {
            method: 'POST',
            headers: {
                'Authorization': 'APIKEY ' + this.props.apiKey,
                'Content-Type': 'application/json'
            },
            body: _data
        })
            .then(res => res.json())
            .then(res => {
            this.setState({ tracingDetails: res });
        })
            .catch(err => {
            console.log(err);
            throw err;
        });
    }
    renderItems(item, key) {
        console.log(item);
        let temperatue = null;
        if (item.temperature !== null && item.temperature !== "") {
            temperatue = item.temperature;
        }
        return (React.createElement("div", { className: `result-item`, key: key },
            React.createElement("div", { className: `column status ${item.status == null ? "" : item.status}` }),
            React.createElement("div", { className: `column name` },
                item.name,
                temperatue == null ? "" : React.createElement("span", { className: `temp ${item.temperature != null ? item.temperature !== "" ? item.tempunit : "" : ""}` },
                    temperatue,
                    " ")),
            React.createElement("div", { className: `column temperature` }, temperatue == null ? "" : React.createElement("span", { className: `temp ${item.temperature != null ? item.temperature !== "" ? item.tempunit : "" : ""}` },
                temperatue,
                " ")),
            React.createElement("div", { className: `column details` },
                React.createElement("span", { className: "time" },
                    "08.00 AM ",
                    item.location == null ? "" : item.location),
                React.createElement("span", { className: "connector" }),
                React.createElement("span", { className: "contacted" }, "Contacted \"Jamie Thompson\"")),
            React.createElement("div", { className: `column trace` },
                React.createElement("div", { className: "trace-button", onClick: () => this.getTracingDetails(item) }, "Trace")),
            React.createElement("div", { className: `column star` }),
            React.createElement("div", { className: `column count` }, "08 others")));
    }
    renderSearchResult() {
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: `back-button-container` },
                React.createElement("div", { className: "back-button", onClick: () => this.props.goBack() }, "Back to search")),
            React.createElement("div", { className: "search-result-container" }, this.props.items.length > 0 ?
                this.props.items.map((item, key) => this.renderItems(item, key))
                :
                    React.createElement("div", { className: "no-result" }, "No record found")));
    }
    renderEmployeeDetails(employ, key) {
        return (React.createElement("div", { className: "item", key: key },
            React.createElement("div", { className: "name" }, employ.name),
            React.createElement("div", { className: "other" },
                React.createElement("span", { className: "email" }, employ.email),
                React.createElement("span", { className: "tel" }, employ.contactnumber))));
    }
    renderTracingDetails(item, key) {
        let header = React.createElement("div", { className: "header" });
        if (key == 0) {
            header = React.createElement(React.Fragment, null,
                React.createElement("div", { className: "header" },
                    React.createElement("span", { className: "email" }, this.state.selected.email),
                    React.createElement("span", { className: "tel" }, this.state.selected.contactnumber)),
                ";",
                React.createElement("div", { className: "sub-header" },
                    React.createElement("div", { className: "name" }, this.state.selected.name),
                    React.createElement("div", { className: "temperature celsius" }, this.state.selected.temperature)));
        }
        return (React.createElement("div", { className: "details-block", key: key, id: `tracing-block-${key}` },
            header,
            React.createElement("div", { className: "details" },
                React.createElement("div", { className: "title" },
                    item.time,
                    "  ",
                    item.location),
                item.people.map((emp, key) => this.renderEmployeeDetails(emp, key)))));
    }
    renderTracingNavItem(item, key) {
        return (React.createElement("a", { className: "nav-item", id: `nav-item-${key}`, key: key, href: `#tracing-block-${key}` },
            item.time,
            " ",
            item.location));
    }
    onScroll() {
        for (let i = 0; i < this.state.tracingDetails.length; i++) {
            let element = document.getElementById("tracing-block-" + i);
            let inView = this.isInView(element);
            console.log("tracing-block-" + i + " :: " + inView);
            if (inView) {
                // remove active class
                let navItems = document.getElementsByClassName("nav-item");
                for (let j = 0; j < navItems.length; j++) {
                    navItems[j].classList.remove("active");
                }
                // add active class
                document.getElementById("nav-item-" + i).classList.add("active");
                break;
            }
        }
    }
    renderTracing() {
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: `back-button-container` },
                React.createElement("div", { className: "back-button", onClick: () => this.setState({ selected: null }) }, "Back to search results")),
            React.createElement("div", { className: "tracing-container" },
                React.createElement("div", { className: "tracing-details", id: "tracing-details", onScroll: this.onScroll }, this.state.tracingDetails.map((item, key) => this.renderTracingDetails(item, key))),
                React.createElement("div", { className: "tracing-nav" }, this.state.tracingDetails.map((item, key) => this.renderTracingNavItem(item, key)))));
    }
    render() {
        return (React.createElement(React.Fragment, null, this.state.selected == null ?
            this.renderSearchResult()
            :
                this.renderTracing()));
    }
}
class ContactTracing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            tempSearchText: "",
            searchResult: []
        };
        this.onClickSearchbutton = this.onClickSearchbutton.bind(this);
        this.showSearchView = this.showSearchView.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.searchUsers = this.searchUsers.bind(this);
    }
    onKeyPress(event) {
        if (event.keyCode == 13) {
            this.onClickSearchbutton();
        }
    }
    onClickSearchbutton() {
        let tempSearchText = this.state.tempSearchText;
        this.setState({ searchText: tempSearchText }, this.searchUsers);
    }
    searchUsers() {
        let _data = JSON.stringify({
            searchtext: this.state.searchText
        });
        fetch(this.props.apiUrl + "/Lucy/SituationalAwareness/users/search", {
            method: 'POST',
            headers: {
                'Authorization': 'APIKEY ' + this.props.apiKey,
                'Content-Type': 'application/json'
            },
            body: _data
        })
            .then(res => res.json())
            .then(res => {
            this.setState({ searchResult: res });
        })
            .catch(err => {
            console.log(err);
            throw err;
        });
    }
    showSearchView() {
        this.setState({ searchText: "" }, this.searchUsers);
    }
    render() {
        let searchBoxClass = "search-box";
        if (this.state.searchText.length > 0 || this.state.tempSearchText.length > 0) {
            searchBoxClass += " filled";
        }
        let Items = [];
        return (React.createElement("div", { className: "report-section" },
            React.createElement("div", { className: "report-container" },
                React.createElement("div", { className: "header" },
                    React.createElement("div", { className: "title" },
                        React.createElement("span", { className: `arrow` }),
                        "Contact Tracking"),
                    React.createElement("div", { className: "last-updated" }, this.state.searchText.length > 0 ?
                        React.createElement(React.Fragment, null,
                            React.createElement("i", null, "Showing Results for\u00A0\u00A0"),
                            " ",
                            React.createElement("span", null,
                                "\"",
                                this.state.searchText,
                                "\""))
                        :
                            ""),
                    React.createElement("div", { className: "filters" },
                        React.createElement("div", { className: searchBoxClass },
                            React.createElement("input", { type: "text", className: `search `, placeholder: "search by name or email", value: this.state.searchText, onChange: event => { this.setState({ searchText: event.target.value }, this.searchUsers); } }),
                            React.createElement("span", { className: "close-button", onClick: () => this.setState({ searchText: "" }, this.searchUsers) })))),
                React.createElement("div", { className: "body" },
                    React.createElement("div", { className: "contact-tracing-block" }, this.state.searchText.length > 0 ?
                        React.createElement(SearchResult, { searchText: this.state.searchText, items: this.state.searchResult, apiUrl: this.props.apiUrl, apiKey: this.props.apiKey, goBack: this.showSearchView })
                        :
                            React.createElement(React.Fragment, null,
                                React.createElement("div", { className: `back-button-container` },
                                    React.createElement("div", { className: "back-button", onClick: () => this.props.goBack() }, "Reports Home")),
                                React.createElement("div", { className: searchBoxClass },
                                    React.createElement("input", { type: "text", name: "search", className: "search", placeholder: "search by name or email", value: this.state.tempSearchText, onChange: (event) => { this.setState({ tempSearchText: event.target.value }); }, onKeyDown: (event) => this.onKeyPress(event) }),
                                    React.createElement("span", { className: `search-button`, onClick: this.onClickSearchbutton }))))))));
    }
}
exports.default = ContactTracing;


/***/ }),

/***/ "./src/components/local-dashboard/reports/employee-status.tsx":
/*!********************************************************************!*\
  !*** ./src/components/local-dashboard/reports/employee-status.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function statusName(status) {
    switch (status) {
        case 'office': return 'Checked-In';
        case 'remote': return 'Remote';
        case 'leave': return 'On Leave';
        default: return status;
    }
}
class EmployeeStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            tempSearchText: '',
            mode: '',
            loadingStats: false,
            leaveCount: 0,
            remoteCount: 0,
            officeCount: 0,
            loadingUsers: false,
            users: [],
        };
    }
    componentDidMount() {
        this.loadStats().then(_ => { }).catch(e => console.error(e));
    }
    setStateAsync(state) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((ok, nope) => {
                this.setState(state, () => ok());
            });
        });
    }
    loadStats() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setStateAsync({ loadingStats: true });
            let response = yield fetch(this.props.apiUrl + '/Lucy/UserStatus/stats', {
                method: 'GET',
                headers: {
                    'Authorization': `APIKEY ${this.props.apiKey}`
                }
            });
            let json = yield response.json();
            this.setState({ loadingStats: false, officeCount: json.office, remoteCount: json.remote, leaveCount: json.leave });
        });
    }
    loadUsers(mode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setStateAsync({ loadingUsers: true });
            let response = yield fetch(this.props.apiUrl + `/Lucy/UserStatus/users?mode=${mode}`, {
                method: 'GET',
                headers: {
                    'Authorization': `APIKEY ${this.props.apiKey}`
                }
            });
            let json = yield response.json();
            yield this.setStateAsync({ loadingUsers: false, users: json });
        });
    }
    showUsers(type) {
        this.setState({ mode: type }, () => {
            this.loadUsers(type).then(_ => { });
        });
    }
    renderStats() {
        let leaveCount = this.state.leaveCount + '';
        let officeCount = this.state.officeCount + '';
        let remoteCount = this.state.remoteCount + '';
        if (this.state.loadingStats) {
            leaveCount = '...';
            remoteCount = '...';
            officeCount = '...';
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: `back-button-container` },
                React.createElement("div", { className: "back-button", onClick: () => this.props.goBack() }, "Reports Home")),
            React.createElement("div", { className: 'e-stats' },
                React.createElement("div", { onClick: this.showUsers.bind(this, 'office'), className: 'stat office' },
                    React.createElement("div", { className: 'bg' }),
                    React.createElement("div", { className: 'title' }, "Office"),
                    React.createElement("div", { className: 'value' }, officeCount)),
                React.createElement("div", { onClick: this.showUsers.bind(this, 'remote'), className: 'stat remote' },
                    React.createElement("div", { className: 'bg' }),
                    React.createElement("div", { className: 'title' }, "Remote"),
                    React.createElement("div", { className: 'value' }, remoteCount)),
                React.createElement("div", { onClick: this.showUsers.bind(this, 'leave'), className: 'stat leave' },
                    React.createElement("div", { className: 'bg' }),
                    React.createElement("div", { className: 'title' }, "Leave"),
                    React.createElement("div", { className: 'value' }, leaveCount)))));
    }
    renderUser(user, key) {
        return React.createElement("div", { className: 'e-user ' + user.status, key: key },
            React.createElement("div", { className: 'title' }, user.name),
            React.createElement("div", { className: 'status' }, statusName(user.status)));
    }
    renderFilteredUsers() {
        let users = this.state.users;
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: `back-button-container` },
                React.createElement("div", { className: "back-button", onClick: () => this.setState({ mode: '' }) }, "Back")),
            React.createElement("div", { className: "e-users search-result-container" },
                this.state.loadingUsers ? React.createElement("div", { className: 'loading' }, "Loading") : null,
                users.length > 0 ?
                    users.map((item, key) => this.renderUser(item, key))
                    :
                        React.createElement("div", { className: "no-result" }, "No Users")));
    }
    render() {
        return (React.createElement("div", { className: "report-section" },
            React.createElement("div", { className: "report-container" },
                React.createElement("div", { className: "header" },
                    React.createElement("div", { className: "title" },
                        React.createElement("span", { className: `arrow` }),
                        "Employee Status")),
                React.createElement("div", { className: "body" }, this.state.mode == "" ? this.renderStats() : this.renderFilteredUsers()))));
    }
}
exports.EmployeeStatus = EmployeeStatus;


/***/ }),

/***/ "./src/components/local-dashboard/reports/reports.tsx":
/*!************************************************************!*\
  !*** ./src/components/local-dashboard/reports/reports.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const contact_tracing_1 = __webpack_require__(/*! ./contact-tracing */ "./src/components/local-dashboard/reports/contact-tracing.tsx");
const employee_status_1 = __webpack_require__(/*! ./employee-status */ "./src/components/local-dashboard/reports/employee-status.tsx");
let AllReports = [
    { name: 'contact-tracking', title: 'Contact Tracking', component: contact_tracing_1.default },
    { name: 'employee-status', title: 'Employee Status', component: employee_status_1.EmployeeStatus },
];
function getReportDetails(report) {
    for (var i = 0; i < AllReports.length; i++) {
        if (AllReports[i].name === report) {
            return AllReports[i];
        }
    }
    return null;
}
class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedReport: null,
        };
        this.renderReports = this.renderReports.bind(this);
        this.showReportsView = this.showReportsView.bind(this);
    }
    onSelectReport(report) {
        this.setState({
            selectedReport: report
        });
    }
    showReportsView() {
        this.setState({ selectedReport: null });
    }
    renderReports() {
        return (React.createElement("div", { className: "report-section" },
            React.createElement("div", { className: "report-container" },
                React.createElement("div", { className: "header" },
                    React.createElement("div", { className: "title" }, "Health Reports")),
                React.createElement("div", { className: "body" },
                    React.createElement("div", { className: "reports" }, AllReports.map(r => (React.createElement("div", { className: "report-card " + r.name, onClick: () => this.onSelectReport(r.name) },
                        React.createElement("div", { className: "report-image " + r.name }),
                        React.createElement("div", { className: "report-name" },
                            " ",
                            r.title)))))))));
    }
    render() {
        let content = React.createElement("div", null);
        let reportDetails = getReportDetails(this.state.selectedReport);
        if (reportDetails) {
            let RC = reportDetails.component;
            content = React.createElement(RC, { apiUrl: this.props.apiUrl, apiKey: this.props.apiKey, goBack: this.showReportsView });
        }
        else {
            content = this.renderReports();
        }
        // render content
        return React.createElement(React.Fragment, null, content);
    }
}
exports.default = Reports;


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
const global_dashboard_1 = __webpack_require__(/*! ./components/global-dashboard/global-dashboard */ "./src/components/global-dashboard/global-dashboard.tsx");
const local_dashboard_1 = __webpack_require__(/*! ./components/local-dashboard/local-dashboard */ "./src/components/local-dashboard/local-dashboard.tsx");
__webpack_require__(/*! ./index.scss */ "./src/index.scss");
const API_URL = "http://staywoke.v4.iviva.cloud/hook/Covid19";
const Local_Data_URL = "http://staywoke.v4.iviva.cloud";
const APIKey = "SC:staywoke:529c20cd6c187259";
class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboard: "global",
            title: "Health Monitor",
            userName: null,
            dialog: ""
        };
        this.toggleDashboard = this.toggleDashboard.bind(this);
        this.renderInfo = this.renderInfo.bind(this);
    }
    componentDidMount() {
    }
    toggleDashboard() {
        if (this.state.dashboard == "global") {
            this.setState({
                dashboard: "local",
                title: React.createElement("span", null,
                    React.createElement("span", { className: "highlight" }, "Registration "),
                    " Employees and Guests"),
                userName: "User 01"
            });
        }
        else {
            this.setState({
                dashboard: "global",
                title: "Health Monitor",
                userName: null
            });
        }
    }
    renderInfoDialog() {
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'dialog-sheet', onClick: () => this.setState({ dialog: '' }) }),
            React.createElement("div", { className: 'dialog info' },
                React.createElement("div", { className: 'header' },
                    React.createElement("div", { className: 'first' }),
                    React.createElement("div", { className: 'title' }, "Information"),
                    React.createElement("div", { className: 'last' },
                        React.createElement("div", { className: 'closer', onClick: () => this.setState({ dialog: '' }) }))),
                React.createElement("div", { className: 'body' },
                    React.createElement("ol", { className: 'items' },
                        React.createElement("li", null,
                            React.createElement("div", { className: 'text' }, "WHO has information on how to keep yourself and your family safe. "),
                            React.createElement("div", { className: 'action-container' },
                                React.createElement("a", { className: 'action', href: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public', target: '_blank' }, "View"))),
                        React.createElement("li", null,
                            React.createElement("div", { className: 'text' }, "CFR (Case Fatality Rate) is calculated as percentage of fatalities in confirmed cases."),
                            React.createElement("div", { className: 'action-container' })),
                        React.createElement("li", null,
                            React.createElement("div", { className: 'text' }, "Data for this dashboard is sourced from several places, most notably, John Hopkins Center for System Science  and Engineering"),
                            React.createElement("div", { className: 'action-container' },
                                React.createElement("a", { className: 'action', href: 'https://github.com/CSSEGISandData', target: '_blank' }, "Source"))),
                        React.createElement("li", null,
                            React.createElement("div", { className: 'text' }, "The APIs for this dashboard are powered by Lucy using data culled from the sources mentioned above."),
                            React.createElement("div", { className: 'action-container' },
                                React.createElement("a", { className: 'action', href: 'https://lucyinthesky.io', target: '_blank' }, "Learn More"))),
                        React.createElement("li", null,
                            React.createElement("div", { className: 'text' }, "The code for this dashboard is available on Github."),
                            React.createElement("div", { className: 'action-container' },
                                React.createElement("a", { className: 'action', href: 'https://github.com/lucy-platform/heal', target: '_blank' }, "View on Github")))))));
    }
    renderInfo() {
        this.setState({ dialog: "info" });
    }
    render() {
        let content = React.createElement("div", null);
        if (this.state.dashboard == "global") {
            content = React.createElement(global_dashboard_1.default, { apiUrl: API_URL, basePath: "/", renderInfo: this.renderInfo });
        }
        else {
            content = React.createElement(local_dashboard_1.default, { apiUrl: Local_Data_URL, apiKey: APIKey, basePath: "/", renderInfo: this.renderInfo });
        }
        return (React.createElement("div", { className: 'root' },
            React.createElement("div", { className: 'header' },
                React.createElement("a", { href: '/', className: 'logo' }),
                React.createElement("div", { className: 'title' }, this.state.title),
                React.createElement("div", { className: 'padder' }, this.state.userName == null ? "" : React.createElement(React.Fragment, null,
                    React.createElement("span", { className: "great" }, "Welcome"),
                    " ",
                    this.state.userName))),
            React.createElement("div", { className: "header-buttons" },
                React.createElement("div", { className: "toggle-button" },
                    React.createElement("span", { className: `label ${this.state.dashboard == "global" ? "global" : ""} ` }, "Global Dashboard"),
                    React.createElement("div", { className: "range", onClick: this.toggleDashboard },
                        React.createElement("span", { className: "rail" }),
                        React.createElement("span", { className: `slider ${this.state.dashboard} ` })),
                    React.createElement("span", { className: `label ${this.state.dashboard == "local" ? "local" : ""} ` }, "User Dashboard"))),
            content,
            (this.state.dialog == 'info') ? this.renderInfoDialog() : null));
    }
}
ReactDom.render(React.createElement(Layout, null), document.getElementById("root"));


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function shortenNumber(i) {
    if (i < 1000)
        return '' + i;
    if (i < 10000) {
        return ((i / 1000.0).toFixed(1)) + 'K';
    }
    if (i < 1000000) {
        return (i / 1000).toFixed(0) + 'K';
    }
    if (i < 1000000000) {
        return (i / 1000000).toFixed(0) + 'M';
    }
    return (i / 1000000000).toFixed(1) + 'B';
}
exports.shortenNumber = shortenNumber;
/**
 * Calculate the center/average of multiple GeoLocation coordinates
 * Expects an array of objects with .latitude and .longitude properties
 *
 * @url http://stackoverflow.com/a/14231286/538646
 * @url https://gist.github.com/tlhunter/0ea604b77775b3e7d7d25ea0f70a23eb
 */
function averageGeolocation(coords) {
    if (coords.length === 1) {
        return coords[0];
    }
    let x = 0.0;
    let y = 0.0;
    let z = 0.0;
    for (let coord of coords) {
        let lat = coord.lat * Math.PI / 180;
        let lon = coord.lon * Math.PI / 180;
        x += Math.cos(lat) * Math.cos(lon);
        y += Math.cos(lat) * Math.sin(lon);
        z += Math.sin(lat);
    }
    let total = coords.length;
    x = x / total;
    y = y / total;
    z = z / total;
    let centrallon = Math.atan2(y, x);
    let centralSquareRoot = Math.sqrt(x * x + y * y);
    let centrallat = Math.atan2(z, centralSquareRoot);
    return {
        lat: centrallat * 180 / Math.PI,
        lon: centrallon * 180 / Math.PI
    };
}
exports.averageGeolocation = averageGeolocation;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "Recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Recharts;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map