"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[websiteId]",{

/***/ "./components/websites/WebsiteDetail.js":
/*!**********************************************!*\
  !*** ./components/websites/WebsiteDetail.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _WebsiteDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsiteDetail.module.css */ \"./components/websites/WebsiteDetail.module.css\");\n/* harmony import */ var _WebsiteDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WebsiteDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// import { useDispatch } from \"react-redux\";\n// import { useSelector } from \"react-redux\";\n// import { increment, decrement } from \"../actions\";\n\nfunction WebsiteDetail(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: (_WebsiteDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default().detail),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: props.image,\n                    alt: props.title\n                }, void 0, false, {\n                    fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteDetail.js\",\n                    lineNumber: 11,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: props.title\n                }, void 0, false, {\n                    fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteDetail.js\",\n                    lineNumber: 13,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                    children: props.address\n                }, void 0, false, {\n                    fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteDetail.js\",\n                    lineNumber: 14,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: props.description\n                }, void 0, false, {\n                    fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteDetail.js\",\n                    lineNumber: 15,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteDetail.js\",\n            lineNumber: 10,\n            columnNumber: 4\n        }, this)\n    }, void 0, false));\n}\n_c = WebsiteDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebsiteDetail);\nvar _c;\n$RefreshReg$(_c, \"WebsiteDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYnNpdGVzL1dlYnNpdGVEZXRhaWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLEVBQTZDO0FBQzdDLEVBQTZDO0FBQzdDLEVBQXFEO0FBQ0w7U0FFdkNDLGFBQWEsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDOUIsTUFBTTs4RkFFSEMsQ0FBTztZQUFDQyxTQUFTLEVBQUVKLHlFQUFjOzs0RkFDaENNLENBQUc7b0JBQUNDLEdBQUcsRUFBRUwsS0FBSyxDQUFDTSxLQUFLO29CQUFFQyxHQUFHLEVBQUVQLEtBQUssQ0FBQ1EsS0FBSzs7Ozs7OzRGQUV0Q0MsQ0FBRTs4QkFBRVQsS0FBSyxDQUFDUSxLQUFLOzs7Ozs7NEZBQ2ZFLENBQU87OEJBQUVWLEtBQUssQ0FBQ1UsT0FBTzs7Ozs7OzRGQUN0QkMsQ0FBQzs4QkFBRVgsS0FBSyxDQUFDWSxXQUFXOzs7Ozs7Ozs7Ozs7O0FBSXpCLENBQUM7S0FaUWIsYUFBYTtBQWN0QiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvd2Vic2l0ZXMvV2Vic2l0ZURldGFpbC5qcz85ZGI1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbi8vIGltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG4vLyBpbXBvcnQgeyBpbmNyZW1lbnQsIGRlY3JlbWVudCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9XZWJzaXRlRGV0YWlsLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gV2Vic2l0ZURldGFpbChwcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cblx0XHRcdFx0PGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxuXG5cdFx0XHRcdDxoMT57cHJvcHMudGl0bGV9PC9oMT5cblx0XHRcdFx0PGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxuXHRcdFx0XHQ8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXZWJzaXRlRGV0YWlsO1xuIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJXZWJzaXRlRGV0YWlsIiwicHJvcHMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGV0YWlsIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsImgxIiwiYWRkcmVzcyIsInAiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/websites/WebsiteDetail.js\n");

/***/ })

});