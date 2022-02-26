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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getGoods\": () => (/* binding */ getGoods)\n/* harmony export */ });\nconst getGoods = () => {\r\n    try {\r\n        const renderGoods = (goods) => {\r\n            const goodsContainer = document.querySelector('.long-goods-list');\r\n            goodsContainer.innerHTML = '';\r\n\r\n            goods.forEach(good => {\r\n                const goodBlock = document.createElement('div');\r\n                goodBlock.classList.add('col-lg-3', 'col-sm-6');\r\n                goodBlock.innerHTML = `\r\n            <div class=\"goods-card\">\r\n\t\t\t\t<span class=\"label ${good.label ? '' : 'd-none'}\">${good.label}</span>\r\n\t\t\t\t<img src=\"db/${good.img}\" alt=\"image: ${good.name}\" class=\"goods-image\">\r\n\t\t\t\t<h3 class=\"goods-title\">${good.name}</h3>\r\n\t\t\t\t<p class=\"goods-description\">${good.description}</p>\r\n\t\t\t\t<button class=\"button goods-card-btn add-to-cart\" data-id=\"${good.id}\">\r\n\t\t\t\t\t<span class=\"button-price\">$${good.price}</span>\r\n                </button>\r\n\t\t\t</div>`;\r\n                goodsContainer.append(goodBlock);\r\n            });\r\n        };\r\n\r\n        const getData = (value, field, valueSearch) => {\r\n            fetch('./db/db.json')\r\n                .then((res) => res.json())\r\n                .then((data) => {\r\n                    const array = valueSearch ? data.filter((good) => good.name.toLowerCase().includes(valueSearch.toLowerCase()))\r\n                        : field ? data.filter((item) => item[field] === value) : data;\r\n                    localStorage.setItem('data', JSON.stringify(array));\r\n                    const hrefPath = window.location.pathname.toString();\r\n                    console.log(hrefPath);\r\n                    if (hrefPath.includes('/goods.html')) {\r\n                        renderGoods(array);\r\n                    } else {\r\n                        let pathGo = hrefPath.replace('/index.html', '/goods.html'); //   /\\\\\\w*\\.html/g\r\n                        console.log(pathGo);\r\n                        window.location.href = pathGo;\r\n                    }\r\n                });\r\n        };\r\n\r\n        const links = document.querySelectorAll('.navigation-link');\r\n        links.forEach((link) => {\r\n            link.addEventListener('click', (event) => {\r\n                event.preventDefault();\r\n                const linkValue = link.textContent;\r\n                const linkDataField = link.dataset.field;\r\n                getData(linkValue, linkDataField, '');\r\n            });\r\n        });\r\n\r\n        const inputSearch = document.querySelector('.search-block > input');\r\n        const buttonSearch = document.querySelector('.search-block > button');\r\n\r\n        buttonSearch.addEventListener('click', () => getData('', '', inputSearch.value));\r\n\r\n        const viewAll = document.querySelector('.more');\r\n        if (viewAll) {\r\n            viewAll.addEventListener('click', () => getData());\r\n        }\r\n\r\n        if (localStorage.getItem('data') && window.location.pathname.toString().includes('/goods.html')) {\r\n            renderGoods(JSON.parse(localStorage.getItem('data')));\r\n        }\r\n    } catch (e) {\r\n        console.log(\"Что-то пошло не так.. \" + e.message);\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nZXRHb29kcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkIsSUFBSSxXQUFXO0FBQ25FLG1CQUFtQixTQUFTLGdCQUFnQixVQUFVO0FBQ3RELDhCQUE4QixVQUFVO0FBQ3hDLG1DQUFtQyxpQkFBaUI7QUFDcEQsaUVBQWlFLFFBQVE7QUFDekUsbUNBQW1DLFdBQVc7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3Rfd2lsZGJlcnJpZXMvLi9zcmMvbW9kdWxlcy9nZXRHb29kcy5qcz9kNTlhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRHb29kcyA9ICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyR29vZHMgPSAoZ29vZHMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ29vZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9uZy1nb29kcy1saXN0Jyk7XHJcbiAgICAgICAgICAgIGdvb2RzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgZ29vZHMuZm9yRWFjaChnb29kID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZ29vZEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2NvbC1sZy0zJywgJ2NvbC1zbS02Jyk7XHJcbiAgICAgICAgICAgICAgICBnb29kQmxvY2suaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ29vZHMtY2FyZFwiPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibGFiZWwgJHtnb29kLmxhYmVsID8gJycgOiAnZC1ub25lJ31cIj4ke2dvb2QubGFiZWx9PC9zcGFuPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiZGIvJHtnb29kLmltZ31cIiBhbHQ9XCJpbWFnZTogJHtnb29kLm5hbWV9XCIgY2xhc3M9XCJnb29kcy1pbWFnZVwiPlxyXG5cdFx0XHRcdDxoMyBjbGFzcz1cImdvb2RzLXRpdGxlXCI+JHtnb29kLm5hbWV9PC9oMz5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImdvb2RzLWRlc2NyaXB0aW9uXCI+JHtnb29kLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGdvb2RzLWNhcmQtYnRuIGFkZC10by1jYXJ0XCIgZGF0YS1pZD1cIiR7Z29vZC5pZH1cIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYnV0dG9uLXByaWNlXCI+JCR7Z29vZC5wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIGdvb2RzQ29udGFpbmVyLmFwcGVuZChnb29kQmxvY2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBnZXREYXRhID0gKHZhbHVlLCBmaWVsZCwgdmFsdWVTZWFyY2gpID0+IHtcclxuICAgICAgICAgICAgZmV0Y2goJy4vZGIvZGIuanNvbicpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheSA9IHZhbHVlU2VhcmNoID8gZGF0YS5maWx0ZXIoKGdvb2QpID0+IGdvb2QubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlU2VhcmNoLnRvTG93ZXJDYXNlKCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkID8gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW1bZmllbGRdID09PSB2YWx1ZSkgOiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBocmVmUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGhyZWZQYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaHJlZlBhdGguaW5jbHVkZXMoJy9nb29kcy5odG1sJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyR29vZHMoYXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXRoR28gPSBocmVmUGF0aC5yZXBsYWNlKCcvaW5kZXguaHRtbCcsICcvZ29vZHMuaHRtbCcpOyAvLyAgIC9cXFxcXFx3KlxcLmh0bWwvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXRoR28pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhHbztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uLWxpbmsnKTtcclxuICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rVmFsdWUgPSBsaW5rLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlua0RhdGFGaWVsZCA9IGxpbmsuZGF0YXNldC5maWVsZDtcclxuICAgICAgICAgICAgICAgIGdldERhdGEobGlua1ZhbHVlLCBsaW5rRGF0YUZpZWxkLCAnJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmxvY2sgPiBpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvblNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmxvY2sgPiBidXR0b24nKTtcclxuXHJcbiAgICAgICAgYnV0dG9uU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ2V0RGF0YSgnJywgJycsIGlucHV0U2VhcmNoLnZhbHVlKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZXdBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9yZScpO1xyXG4gICAgICAgIGlmICh2aWV3QWxsKSB7XHJcbiAgICAgICAgICAgIHZpZXdBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBnZXREYXRhKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhJykgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnRvU3RyaW5nKCkuaW5jbHVkZXMoJy9nb29kcy5odG1sJykpIHtcclxuICAgICAgICAgICAgcmVuZGVyR29vZHMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi0KfRgtC+LdGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQui4uIFwiICsgZS5tZXNzYWdlKTtcclxuICAgIH1cclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/getGoods.js\n");

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