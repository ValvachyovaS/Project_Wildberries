/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/goods.js":
/*!**********************!*\
  !*** ./src/goods.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_getGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getGoods */ \"./src/modules/getGoods.js\");\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__.cart)()\r\n;(0,_modules_getGoods__WEBPACK_IMPORTED_MODULE_1__.getGoods)()\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ29vZHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXNDO0FBQ1E7QUFDOUM7QUFDQSxtREFBSTtBQUNKLDREQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdF93aWxkYmVycmllcy8uL3NyYy9nb29kcy5qcz83YmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhcnQgfSBmcm9tICcuL21vZHVsZXMvY2FydCc7XHJcbmltcG9ydCB7IGdldEdvb2RzIH0gZnJvbSAnLi9tb2R1bGVzL2dldEdvb2RzJztcclxuXHJcbmNhcnQoKVxyXG5nZXRHb29kcygpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/goods.js\n");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cart\": () => (/* binding */ cart)\n/* harmony export */ });\nconst cart = function () {\r\n    const cartBtn = document.querySelector('.button-cart');\r\n\r\n    cartBtn.addEventListener('click', function () {\r\n        console.log('open');\r\n    });\r\n\r\n    const cartModal = document.getElementById('modal-cart');\r\n\r\n    cartBtn.addEventListener('click', function () {\r\n        cartModal.style.display = 'flex';\r\n    });\r\n\r\n    const closeBtn = cartModal.querySelector('.modal-close');\r\n\r\n    closeBtn.addEventListener('click', function () {\r\n        cartModal.style.display = '';\r\n        console.log('close');\r\n    });\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdF93aWxkYmVycmllcy8uL3NyYy9tb2R1bGVzL2NhcnQuanM/YWMwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2FydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWNhcnQnKTtcclxuXHJcbiAgICBjYXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjYXJ0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY2FydCcpO1xyXG5cclxuICAgIGNhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FydE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGNhcnRNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xvc2UnKTtcclxuXHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYXJ0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZScpO1xyXG4gICAgfSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/cart.js\n");

/***/ }),

/***/ "./src/modules/getGoods.js":
/*!*********************************!*\
  !*** ./src/modules/getGoods.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getGoods\": () => (/* binding */ getGoods)\n/* harmony export */ });\nconst getGoods = () => {\r\n    try {\r\n        const renderGoods = (goods) => {\r\n            const goodsContainer = document.querySelector('.long-goods-list');\r\n            goodsContainer.innerHTML = '';\r\n\r\n            goods.forEach(good => {\r\n                const goodBlock = document.createElement('div');\r\n                goodBlock.classList.add('col-lg-3', 'col-sm-6');\r\n                goodBlock.innerHTML = `\r\n            <div class=\"goods-card\">\r\n\t\t\t\t<span class=\"label ${good.label ? '' : 'd-none'}\">${good.label}</span>\r\n\t\t\t\t<img src=\"db/${good.img}\" alt=\"image: ${good.name}\" class=\"goods-image\">\r\n\t\t\t\t<h3 class=\"goods-title\">${good.name}</h3>\r\n\t\t\t\t<p class=\"goods-description\">${good.description}</p>\r\n\t\t\t\t<button class=\"button goods-card-btn add-to-cart\" data-id=\"${good.id}\">\r\n\t\t\t\t\t<span class=\"button-price\">$${good.price}</span>\r\n                </button>\r\n\t\t\t</div>`;\r\n                goodsContainer.append(goodBlock);\r\n            });\r\n        };\r\n\r\n        const getData = (value, field, valueSearch) => {\r\n            fetch('./db/db.json')\r\n                .then((res) => res.json())\r\n                .then((data) => {\r\n                    const array = valueSearch ? data.filter((good) => good.name.toLowerCase().includes(valueSearch.toLowerCase()))\r\n                        : field ? data.filter((item) => item[field] === value) : data;\r\n                    localStorage.setItem('data', JSON.stringify(array));\r\n                    if (window.location.pathname !== '/goods.html') {\r\n                        window.location.href = '/goods.html';\r\n                    } else {\r\n                        renderGoods(array);\r\n                    }\r\n\r\n                });\r\n        };\r\n\r\n        const links = document.querySelectorAll('.navigation-link');\r\n        links.forEach((link) => {\r\n            link.addEventListener('click', (event) => {\r\n                event.preventDefault();\r\n                const linkValue = link.textContent;\r\n                const linkDataField = link.dataset.field;\r\n                getData(linkValue, linkDataField, '');\r\n            });\r\n        });\r\n\r\n        const inputSearch = document.querySelector('.search-block > input');\r\n        const buttonSearch = document.querySelector('.search-block > button');\r\n\r\n        buttonSearch.addEventListener('click', () => getData('', '', inputSearch.value));\r\n\r\n        const viewAll = document.querySelector('.more');\r\n        if (viewAll) {\r\n            viewAll.addEventListener('click', () => getData());\r\n        }\r\n\r\n        if (localStorage.getItem('data') && window.location.pathname === '/goods.html') {\r\n            renderGoods(JSON.parse(localStorage.getItem('data')));\r\n        }\r\n    } catch (e) {\r\n        console.log(\"Что-то пошло не так.. \" + e.message);\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nZXRHb29kcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkIsSUFBSSxXQUFXO0FBQ25FLG1CQUFtQixTQUFTLGdCQUFnQixVQUFVO0FBQ3RELDhCQUE4QixVQUFVO0FBQ3hDLG1DQUFtQyxpQkFBaUI7QUFDcEQsaUVBQWlFLFFBQVE7QUFDekUsbUNBQW1DLFdBQVc7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0X3dpbGRiZXJyaWVzLy4vc3JjL21vZHVsZXMvZ2V0R29vZHMuanM/ZDU5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0R29vZHMgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlbmRlckdvb2RzID0gKGdvb2RzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdvb2RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvbmctZ29vZHMtbGlzdCcpO1xyXG4gICAgICAgICAgICBnb29kc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgIGdvb2RzLmZvckVhY2goZ29vZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnb29kQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGdvb2RCbG9jay5jbGFzc0xpc3QuYWRkKCdjb2wtbGctMycsICdjb2wtc20tNicpO1xyXG4gICAgICAgICAgICAgICAgZ29vZEJsb2NrLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvb2RzLWNhcmRcIj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImxhYmVsICR7Z29vZC5sYWJlbCA/ICcnIDogJ2Qtbm9uZSd9XCI+JHtnb29kLmxhYmVsfTwvc3Bhbj5cclxuXHRcdFx0XHQ8aW1nIHNyYz1cImRiLyR7Z29vZC5pbWd9XCIgYWx0PVwiaW1hZ2U6ICR7Z29vZC5uYW1lfVwiIGNsYXNzPVwiZ29vZHMtaW1hZ2VcIj5cclxuXHRcdFx0XHQ8aDMgY2xhc3M9XCJnb29kcy10aXRsZVwiPiR7Z29vZC5uYW1lfTwvaDM+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJnb29kcy1kZXNjcmlwdGlvblwiPiR7Z29vZC5kZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBnb29kcy1jYXJkLWJ0biBhZGQtdG8tY2FydFwiIGRhdGEtaWQ9XCIke2dvb2QuaWR9XCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImJ1dHRvbi1wcmljZVwiPiQke2dvb2QucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblx0XHRcdDwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICBnb29kc0NvbnRhaW5lci5hcHBlbmQoZ29vZEJsb2NrKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0RGF0YSA9ICh2YWx1ZSwgZmllbGQsIHZhbHVlU2VhcmNoKSA9PiB7XHJcbiAgICAgICAgICAgIGZldGNoKCcuL2RiL2RiLmpzb24nKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXkgPSB2YWx1ZVNlYXJjaCA/IGRhdGEuZmlsdGVyKChnb29kKSA9PiBnb29kLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZVNlYXJjaC50b0xvd2VyQ2FzZSgpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZCA/IGRhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtW2ZpZWxkXSA9PT0gdmFsdWUpIDogZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gJy9nb29kcy5odG1sJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvZ29vZHMuaHRtbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyR29vZHMoYXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uLWxpbmsnKTtcclxuICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rVmFsdWUgPSBsaW5rLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlua0RhdGFGaWVsZCA9IGxpbmsuZGF0YXNldC5maWVsZDtcclxuICAgICAgICAgICAgICAgIGdldERhdGEobGlua1ZhbHVlLCBsaW5rRGF0YUZpZWxkLCAnJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmxvY2sgPiBpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvblNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmxvY2sgPiBidXR0b24nKTtcclxuXHJcbiAgICAgICAgYnV0dG9uU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ2V0RGF0YSgnJywgJycsIGlucHV0U2VhcmNoLnZhbHVlKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZXdBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9yZScpO1xyXG4gICAgICAgIGlmICh2aWV3QWxsKSB7XHJcbiAgICAgICAgICAgIHZpZXdBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBnZXREYXRhKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhJykgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnL2dvb2RzLmh0bWwnKSB7XHJcbiAgICAgICAgICAgIHJlbmRlckdvb2RzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGEnKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcItCn0YLQvi3RgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LouLiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/getGoods.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/goods.js");
/******/ 	
/******/ })()
;