/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/menu/menu.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/menu/menu.js ***!
  \*****************************************/
/***/ (() => {

var hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close"),
    closeElemOverlay = document.querySelector(".menu__overlay");
hamburger.addEventListener("click", function () {
  menu.classList.add("active");
});
closeElem.addEventListener("click", function () {
  menu.classList.remove("active");
});
closeElemOverlay.addEventListener("click", function () {
  menu.classList.remove("active");
});

/***/ }),

/***/ "./src/blocks/modules/sidepanel/sidepanel.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/sidepanel/sidepanel.js ***!
  \***************************************************/
/***/ (() => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var red = 255,
    green = 255,
    blue = 255;
var section1 = document.querySelector(".sidepanel__text"),
    section2 = document.querySelector(".sidepanel__divider"),
    section3 = document.querySelector("#social-icon1"),
    section4 = document.querySelector("#social-icon2"),
    section5 = document.querySelector("#social-icon3"),
    section6 = document.querySelector("#line1"),
    section7 = document.querySelector("#line2"),
    section8 = document.querySelector("#line3");

function changeColorBg(section) {
  window.addEventListener("scroll", function () {
    var y = 1 + (window.scrollY || window.pageYOffset) / 450;
    y = y < 1 ? 1 : y;

    var _map = [red / y, green / y, blue / y].map(Math.round),
        _map2 = _slicedToArray(_map, 3),
        r = _map2[0],
        g = _map2[1],
        b = _map2[2];

    section.style.backgroundColor = "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
  });
}

function changeColor(section) {
  window.addEventListener("scroll", function () {
    var y = 1 + (window.scrollY || window.pageYOffset) / 450;
    y = y < 1 ? 1 : y;

    var _map3 = [red / y, green / y, blue / y].map(Math.round),
        _map4 = _slicedToArray(_map3, 3),
        r = _map4[0],
        g = _map4[1],
        b = _map4[2];

    section.style.color = "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
  });
}

changeColor(section1);
changeColor(section3);
changeColor(section4);
changeColor(section5);
changeColorBg(section2);
changeColorBg(section6);
changeColorBg(section7);
changeColorBg(section8);

/***/ }),

/***/ "./src/blocks/modules/skills/skills.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/skills/skills.js ***!
  \*********************************************/
/***/ (() => {

var counters = document.querySelectorAll(".skills__ratings-counter"),
    lines = document.querySelectorAll(".skills__ratings-line span");
counters.forEach(function (item, i) {
  lines[i].style.width = item.innerHTML;
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sidepanel_sidepanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/sidepanel/sidepanel */ "./src/blocks/modules/sidepanel/sidepanel.js");
/* harmony import */ var _modules_sidepanel_sidepanel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_sidepanel_sidepanel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/menu/menu */ "./src/blocks/modules/menu/menu.js");
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_menu_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_skills_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/skills/skills */ "./src/blocks/modules/skills/skills.js");
/* harmony import */ var _modules_skills_skills__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_skills_skills__WEBPACK_IMPORTED_MODULE_2__);




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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=main.js.map