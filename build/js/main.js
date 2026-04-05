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

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validate */ \"./modules/validate.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"April 5, 2026 01:10:00\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?\n}");

/***/ },

/***/ "./modules/menu.js"
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const closeBtn = menu.querySelector(\".close-btn\");\r\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n  const scrollToNext = document.querySelector(\"a[href='#service-block']\");\r\n\r\n  const sections = [\r\n    ...document.querySelectorAll(\r\n      \"#service-block, #portfolio, #calc, #command, #connect\",\r\n    ),\r\n  ];\r\n\r\n  const handleMenu = (e) => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  const animateScroll = (el) => {\r\n    const target = sections.find(\r\n      (section) => el.hash.slice(1) === section.id,\r\n    );\r\n    if (target) {\r\n      target.scrollIntoView({ behavior: \"smooth\" });\r\n    }\r\n  };\r\n\r\n  menuBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  closeBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  scrollToNext.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    animateScroll(scrollToNext)\r\n  });\r\n\r\n  menuItems.forEach((item) =>\r\n    item.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n\r\n      handleMenu();\r\n      animateScroll(item)\r\n    }),\r\n  );\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?\n}");

/***/ },

/***/ "./modules/modal.js"
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const overlay = document.querySelector(\".popup\");\r\n  const modal = document.querySelector(\".popup-content\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const closeBtn = document.querySelector(\".popup-close\");\r\n\r\n  overlay.style.opacity = \"0\";\r\n  modal.style.top = \"30%\";\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      if (window.innerWidth <= 768) {\r\n        overlay.style.display = \"block\";\r\n        overlay.style.opacity = \"1\";\r\n\r\n        return;\r\n      }\r\n\r\n      fadeIn(overlay, 300);\r\n      overlay.style.display = \"block\";\r\n    });\r\n  });\r\n\r\n  closeBtn.addEventListener(\"click\", () => {\r\n    overlay.style.display = \"none\";\r\n    overlay.style.opacity = \"0\";\r\n  });\r\n};\r\n\r\nconst fadeIn = (el, duration = 1000) => {\r\n  let start = null;\r\n  let startOpacity = 0;\r\n\r\n  el.style.opacity = 0;\r\n  el.style.display = \"block\";\r\n\r\n  function step(timestamp) {\r\n    if (!start) start = timestamp;\r\n\r\n    const elapsed = timestamp - start;\r\n    const progress = Math.min(elapsed / duration, 1);\r\n\r\n    el.style.opacity = startOpacity + (1 - startOpacity) * progress;\r\n\r\n    if (progress < 1) {\r\n      requestAnimationFrame(step);\r\n    }\r\n  }\r\n\r\n  requestAnimationFrame(step);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?\n}");

/***/ },

/***/ "./modules/timer.js"
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine) => {\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n  \r\n  const format = (num) => num.toString().padStart(2, \"0\");\r\n\r\n  const getTimerRemaining = () => {\r\n    let dateStop = new Date(deadLine).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    if (timeRemaining < 0) {\r\n      timeRemaining = 0;\r\n    }\r\n\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return { timeRemaining, hours, minutes, seconds };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimerRemaining();\r\n    if (getTimerRemaining().timeRemaining <= 0) {\r\n      clearInterval(interval);\r\n      return;\r\n    }\r\n\r\n    timerHours.textContent = format(getTime.hours);\r\n    timerMinutes.textContent = format(getTime.minutes);\r\n    timerSeconds.textContent = format(getTime.seconds);\r\n  };\r\n\r\n  const interval = setInterval(updateClock, 1000);\r\n\r\n  updateClock();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?\n}");

/***/ },

/***/ "./modules/validate.js"
/*!*****************************!*\
  !*** ./modules/validate.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = () => {\r\n  const typeOfFlat = document.querySelector(\".calc-type\");\r\n  const totalSquare = document.querySelector(\".calc-square\");\r\n  const flatCount = document.querySelector(\".calc-count\");\r\n  const dueDays = document.querySelector(\".calc-day\");\r\n\r\n  const form1 = document.querySelector(\"#form1\");\r\n  const form2 = document.querySelector(\"#form2\");\r\n  const form3 = document.querySelector(\"#form3\");\r\n\r\n  const textForm1 = form1.querySelectorAll('input[type=\"text\"]');\r\n  const textForm2 = form2.querySelectorAll('input[type=\"text\"], input[placeholder=\"Ваше сообщение\"]');\r\n  const textForm3 = form3.querySelectorAll('input[type=\"text\"]');\r\n\r\n  const textInputs = [...textForm1, ...textForm2, ...textForm3];\r\n  const emailImputs = document.querySelectorAll('input[type=\"email\"]');\r\n  const phoneImputs = document.querySelectorAll('input[type=\"tel\"]');\r\n\r\n  const handleInput = (isValid = false) => {\r\n    if (!isValid) {\r\n      undefined.style.border = \"2px solid red\";\r\n    } else {\r\n      undefined.style.border = \"\";\r\n    }\r\n  };\r\n\r\n  const validateNumber = function () {\r\n    this.value = this.value.replace(/\\D/g, \"\");\r\n  };\r\n  const validateText = function () {\r\n    this.value = this.value.replace(/[^а-я\\s-]/gi, \"\");\r\n  };\r\n  const validateEmail = function () {\r\n    this.value = this.value.replace(/[^a-z@_.!~*'-]/gi, \"\");\r\n  };\r\n  const validatePhone = function () {\r\n    this.value = this.value.replace(/[^\\d()-]/gi, \"\");\r\n  };\r\n\r\n  totalSquare.addEventListener(\"input\", validateNumber);\r\n  flatCount.addEventListener(\"input\", validateNumber);\r\n  dueDays.addEventListener(\"input\", validateNumber);\r\n\r\n  textInputs.forEach((input) => {\r\n    input.addEventListener(\"input\", validateText);\r\n  });\r\n  emailImputs.forEach((input) => {\r\n    input.addEventListener(\"input\", validateEmail);\r\n  });\r\n  phoneImputs.forEach((input) => {\r\n    input.addEventListener(\"input\", validatePhone);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\r\n\n\n//# sourceURL=webpack:///./modules/validate.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;