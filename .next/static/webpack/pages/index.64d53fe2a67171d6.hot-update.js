"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/websites/WebsiteItem.js":
/*!********************************************!*\
  !*** ./components/websites/WebsiteItem.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ \"./components/ui/Card.js\");\n/* harmony import */ var _WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebsiteItem.module.css */ \"./components/websites/WebsiteItem.module.css\");\n/* harmony import */ var _WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _thumbs_thumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../thumbs/thumbs */ \"./components/thumbs/thumbs.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n// import { useDispatch } from \"react-redux\";\n// import { useSelector } from \"react-redux\";\n// import { increment, decrement } from \"../actions\";\n\nvar _s = $RefreshSig$();\nfunction WebsiteItem(props) {\n    var showDetailsHandler = function showDetailsHandler() {\n        router.push(\"/\" + props.id);\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // const likes = useSelector((state) => state.likes);\n    // const dislikes = useSelector((state) => state.dislikes);\n    // const isLogged = useSelector((state) => state.isLogged);\n    // const dispatch = useDispatch();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: props.image,\n                                alt: props.title\n                            }, void 0, false, {\n                                fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                                lineNumber: 26,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                            lineNumber: 25,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: props.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                                    children: props.address\n                                }, void 0, false, {\n                                    fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                            lineNumber: 28,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().actions),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: showDetailsHandler,\n                                children: \"Show Details\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                                lineNumber: 33,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                            lineNumber: 32,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thumbs_thumbs__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                lineNumber: 37,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true));\n}\n_s(WebsiteItem, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = WebsiteItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebsiteItem);\nvar _c;\n$RefreshReg$(_c, \"WebsiteItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYnNpdGVzL1dlYnNpdGVJdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1Y7QUFDaUI7QUFDOUMsRUFBNkM7QUFDN0MsRUFBNkM7QUFDN0MsRUFBcUQ7QUFDaEI7O1NBRTVCSSxXQUFXLENBQUNDLEtBQUssRUFBRSxDQUFDO1FBR25CQyxrQkFBa0IsR0FBM0IsUUFBUSxDQUFDQSxrQkFBa0IsR0FBRyxDQUFDO1FBQzlCQyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFHLEtBQUdILEtBQUssQ0FBQ0ksRUFBRTtJQUMzQixDQUFDOztJQUpELEdBQUssQ0FBQ0YsTUFBTSxHQUFHUCxzREFBUztJQU14QixFQUFxRDtJQUNyRCxFQUEyRDtJQUMzRCxFQUEyRDtJQUMzRCxFQUFrQztJQUVsQyxNQUFNOzt3RkFFSFUsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFFVCxxRUFBWTtzR0FDekJELGdEQUFJOztvR0FDSFksQ0FBRzs0QkFBQ0YsU0FBUyxFQUFFVCxzRUFBYTtrSEFDM0JhLENBQUc7Z0NBQUNDLEdBQUcsRUFBRVgsS0FBSyxDQUFDUyxLQUFLO2dDQUFFRyxHQUFHLEVBQUVaLEtBQUssQ0FBQ2EsS0FBSzs7Ozs7Ozs7Ozs7b0dBRXZDTCxDQUFHOzRCQUFDRixTQUFTLEVBQUVULHdFQUFlOzs0R0FDN0JrQixDQUFFOzhDQUFFZixLQUFLLENBQUNhLEtBQUs7Ozs7Ozs0R0FDZkcsQ0FBTzs4Q0FBRWhCLEtBQUssQ0FBQ2dCLE9BQU87Ozs7Ozs7Ozs7OztvR0FFdkJSLENBQUc7NEJBQUNGLFNBQVMsRUFBRVQsd0VBQWU7a0hBQzdCcUIsQ0FBTTtnQ0FBQ0MsT0FBTyxFQUFFbEIsa0JBQWtCOzBDQUFFLENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSW5ESCxzREFBTTs7Ozs7OztBQUdWLENBQUM7R0EvQlFDLFdBQVc7O1FBQ0pKLGtEQUFTOzs7S0FEaEJJLFdBQVc7QUFpQ3BCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93ZWJzaXRlcy9XZWJzaXRlSXRlbS5qcz84MzRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL3VpL0NhcmRcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1dlYnNpdGVJdGVtLm1vZHVsZS5jc3NcIjtcbi8vIGltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG4vLyBpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuLy8gaW1wb3J0IHsgaW5jcmVtZW50LCBkZWNyZW1lbnQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuaW1wb3J0IFRodW1icyBmcm9tIFwiLi4vdGh1bWJzL3RodW1ic1wiO1xuXG5mdW5jdGlvbiBXZWJzaXRlSXRlbShwcm9wcykge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXHRmdW5jdGlvbiBzaG93RGV0YWlsc0hhbmRsZXIoKSB7XG5cdFx0cm91dGVyLnB1c2goXCIvXCIgKyBwcm9wcy5pZCk7XG5cdH1cblxuXHQvLyBjb25zdCBsaWtlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubGlrZXMpO1xuXHQvLyBjb25zdCBkaXNsaWtlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZGlzbGlrZXMpO1xuXHQvLyBjb25zdCBpc0xvZ2dlZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaXNMb2dnZWQpO1xuXHQvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cblx0XHRcdFx0PENhcmQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuXHRcdFx0XHRcdFx0PGgzPntwcm9wcy50aXRsZX08L2gzPlxuXHRcdFx0XHRcdFx0PGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtzaG93RGV0YWlsc0hhbmRsZXJ9PlNob3cgRGV0YWlsczwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHQ8L2xpPlxuXHRcdFx0PFRodW1icyAvPlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXZWJzaXRlSXRlbTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJDYXJkIiwiY2xhc3NlcyIsIlRodW1icyIsIldlYnNpdGVJdGVtIiwicHJvcHMiLCJzaG93RGV0YWlsc0hhbmRsZXIiLCJyb3V0ZXIiLCJwdXNoIiwiaWQiLCJsaSIsImNsYXNzTmFtZSIsIml0ZW0iLCJkaXYiLCJpbWFnZSIsImltZyIsInNyYyIsImFsdCIsInRpdGxlIiwiY29udGVudCIsImgzIiwiYWRkcmVzcyIsImFjdGlvbnMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/websites/WebsiteItem.js\n");

/***/ })

});