/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/***/ (() => {

eval("$(document).ready(function() {\r\n  let total = 0.00;\r\n\r\n  $(\"#add-product\").on(\"click\", function() {\r\n      const product = $(\"#product-select option:selected\").text();\r\n      const quantity = parseInt($(\"#quantity\").val());\r\n\r\n      if (quantity > 0) {\r\n          const price = parseFloat($(\"#product-select option:selected\").val());\r\n          const productTotal = price * quantity;\r\n\r\n          $(\"#product-list\").append(`\r\n              <tr>\r\n                  <td>${product}</td>\r\n                  <td>₹${price.toFixed(2)}</td>\r\n                  <td>${quantity}</td>\r\n              </tr>\r\n          `);\r\n\r\n          total += productTotal;\r\n          $(\"#total\").text(total.toFixed(2));\r\n\r\n          $(\"#product-select\").val($(\"#product-select option:first\").val());\r\n          $(\"#quantity\").val(0);\r\n      }\r\n  });\r\n\r\n  $(\"#billing-form\").on(\"submit\", function(e) {\r\n      e.preventDefault();\r\n      // Implement payment processing logic here\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://hitesh/./src/a.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/a.js"]();
/******/ 	
/******/ })()
;