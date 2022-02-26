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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getGoods\": () => (/* binding */ getGoods)\n/* harmony export */ });\nconst getGoods = () => {\r\n    try {\r\n        const renderGoods = (goods) => {\r\n            const goodsContainer = document.querySelector('.long-goods-list');\r\n            goodsContainer.innerHTML = '';\r\n\r\n            goods.forEach(good => {\r\n                const goodBlock = document.createElement('div');\r\n                goodBlock.classList.add('col-lg-3', 'col-sm-6');\r\n                goodBlock.innerHTML = `\r\n            <div class=\"goods-card\">\r\n\t\t\t\t<span class=\"label ${good.label ? '' : 'd-none'}\">${good.label}</span>\r\n\t\t\t\t<img src=\"db/${good.img}\" alt=\"image: ${good.name}\" class=\"goods-image\">\r\n\t\t\t\t<h3 class=\"goods-title\">${good.name}</h3>\r\n\t\t\t\t<p class=\"goods-description\">${good.description}</p>\r\n\t\t\t\t<button class=\"button goods-card-btn add-to-cart\" data-id=\"${good.id}\">\r\n\t\t\t\t\t<span class=\"button-price\">$${good.price}</span>\r\n                </button>\r\n\t\t\t</div>`;\r\n                goodsContainer.append(goodBlock);\r\n            });\r\n        };\r\n\r\n        const getData = (value, field, valueSearch) => {\r\n            fetch('./db/db.json')\r\n                .then((res) => res.json())\r\n                .then((data) => {\r\n                    const array = valueSearch ? data.filter((good) => good.name.toLowerCase().includes(valueSearch.toLowerCase()))\r\n                        : field ? data.filter((item) => item[field] === value) : data;\r\n                    localStorage.setItem('data', JSON.stringify(array));\r\n                    const hrefPath = window.location.pathname.toString();\r\n                    if (hrefPath.includes('/goods.html')) {\r\n                        renderGoods(array);\r\n                    } else {\r\n                        let pathGo = hrefPath.replace('/index.html', '/goods.html'); //   /\\\\\\w*\\.html/g\r\n                        window.location.href = pathGo;\r\n                    }\r\n                });\r\n        };\r\n\r\n        const links = document.querySelectorAll('.navigation-link');\r\n        links.forEach((link) => {\r\n            link.addEventListener('click', (event) => {\r\n                event.preventDefault();\r\n                const linkValue = link.textContent;\r\n                const linkDataField = link.dataset.field;\r\n                getData(linkValue, linkDataField, '');\r\n            });\r\n        });\r\n\r\n        const inputSearch = document.querySelector('.search-block > input');\r\n        const buttonSearch = document.querySelector('.search-block > button');\r\n\r\n        buttonSearch.addEventListener('click', () => getData('', '', inputSearch.value));\r\n\r\n        const viewAll = document.querySelector('.more');\r\n        if (viewAll) {\r\n            viewAll.addEventListener('click', () => getData());\r\n        }\r\n\r\n        if (localStorage.getItem('data') && window.location.pathname.toString().includes('/goods.html')) {\r\n            renderGoods(JSON.parse(localStorage.getItem('data')));\r\n        }\r\n    } catch (e) {\r\n        console.log(\"Что-то пошло не так.. \" + e.message);\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nZXRHb29kcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkIsSUFBSSxXQUFXO0FBQ25FLG1CQUFtQixTQUFTLGdCQUFnQixVQUFVO0FBQ3RELDhCQUE4QixVQUFVO0FBQ3hDLG1DQUFtQyxpQkFBaUI7QUFDcEQsaUVBQWlFLFFBQVE7QUFDekUsbUNBQW1DLFdBQVc7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixxRkFBcUY7QUFDckY7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdF93aWxkYmVycmllcy8uL3NyYy9tb2R1bGVzL2dldEdvb2RzLmpzP2Q1OWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldEdvb2RzID0gKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZW5kZXJHb29kcyA9IChnb29kcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBnb29kc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb25nLWdvb2RzLWxpc3QnKTtcclxuICAgICAgICAgICAgZ29vZHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgICAgICBnb29kcy5mb3JFYWNoKGdvb2QgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ29vZEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBnb29kQmxvY2suY2xhc3NMaXN0LmFkZCgnY29sLWxnLTMnLCAnY29sLXNtLTYnKTtcclxuICAgICAgICAgICAgICAgIGdvb2RCbG9jay5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnb29kcy1jYXJkXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJsYWJlbCAke2dvb2QubGFiZWwgPyAnJyA6ICdkLW5vbmUnfVwiPiR7Z29vZC5sYWJlbH08L3NwYW4+XHJcblx0XHRcdFx0PGltZyBzcmM9XCJkYi8ke2dvb2QuaW1nfVwiIGFsdD1cImltYWdlOiAke2dvb2QubmFtZX1cIiBjbGFzcz1cImdvb2RzLWltYWdlXCI+XHJcblx0XHRcdFx0PGgzIGNsYXNzPVwiZ29vZHMtdGl0bGVcIj4ke2dvb2QubmFtZX08L2gzPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiZ29vZHMtZGVzY3JpcHRpb25cIj4ke2dvb2QuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidXR0b24gZ29vZHMtY2FyZC1idG4gYWRkLXRvLWNhcnRcIiBkYXRhLWlkPVwiJHtnb29kLmlkfVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJidXR0b24tcHJpY2VcIj4kJHtnb29kLnByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgZ29vZHNDb250YWluZXIuYXBwZW5kKGdvb2RCbG9jayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGdldERhdGEgPSAodmFsdWUsIGZpZWxkLCB2YWx1ZVNlYXJjaCkgPT4ge1xyXG4gICAgICAgICAgICBmZXRjaCgnLi9kYi9kYi5qc29uJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gdmFsdWVTZWFyY2ggPyBkYXRhLmZpbHRlcigoZ29vZCkgPT4gZ29vZC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWVTZWFyY2gudG9Mb3dlckNhc2UoKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQgPyBkYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbVtmaWVsZF0gPT09IHZhbHVlKSA6IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhyZWZQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhyZWZQYXRoLmluY2x1ZGVzKCcvZ29vZHMuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckdvb2RzKGFycmF5KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF0aEdvID0gaHJlZlBhdGgucmVwbGFjZSgnL2luZGV4Lmh0bWwnLCAnL2dvb2RzLmh0bWwnKTsgLy8gICAvXFxcXFxcdypcXC5odG1sL2dcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRoR287XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbi1saW5rJyk7XHJcbiAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlua1ZhbHVlID0gbGluay50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtEYXRhRmllbGQgPSBsaW5rLmRhdGFzZXQuZmllbGQ7XHJcbiAgICAgICAgICAgICAgICBnZXREYXRhKGxpbmtWYWx1ZSwgbGlua0RhdGFGaWVsZCwgJycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJsb2NrID4gaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBidXR0b25TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJsb2NrID4gYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGJ1dHRvblNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdldERhdGEoJycsICcnLCBpbnB1dFNlYXJjaC52YWx1ZSkpO1xyXG5cclxuICAgICAgICBjb25zdCB2aWV3QWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vcmUnKTtcclxuICAgICAgICBpZiAodmlld0FsbCkge1xyXG4gICAgICAgICAgICB2aWV3QWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ2V0RGF0YSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS50b1N0cmluZygpLmluY2x1ZGVzKCcvZ29vZHMuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgIHJlbmRlckdvb2RzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGEnKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcItCn0YLQvi3RgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LouLiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/getGoods.js\n");

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