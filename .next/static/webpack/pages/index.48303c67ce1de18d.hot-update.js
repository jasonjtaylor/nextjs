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

/***/ "./components/thumbs/thumbs.js":
/*!*************************************!*\
  !*** ./components/thumbs/thumbs.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Thumbs = function() {\n    _s();\n    var likes = useSelector(function(state) {\n        return state.likes;\n    });\n    var dislikes = useSelector(function(state) {\n        return state.dislikes;\n    });\n    // const isLogged = useSelector((state) => state.isLogged);\n    var dispatch = useDispatch();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"like-section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"increment\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            onClick: function() {\n                                return dispatch(increment());\n                            },\n                            children: [\n                                \"👍 \",\n                                likes\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/thumbs/thumbs.js\",\n                            lineNumber: 14,\n                            columnNumber: 7\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/thumbs/thumbs.js\",\n                        lineNumber: 13,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"decrement\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            onClick: function() {\n                                return dispatch(decrement());\n                            },\n                            children: [\n                                \"👎 \",\n                                dislikes\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/thumbs/thumbs.js\",\n                            lineNumber: 17,\n                            columnNumber: 7\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/thumbs/thumbs.js\",\n                        lineNumber: 16,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/thumbs/thumbs.js\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/thumbs/thumbs.js\",\n            lineNumber: 11,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false));\n};\n_s(Thumbs, \"xnbujb+ckuUL7OxFTP1S3W4HIXw=\", true);\n_c = Thumbs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thumbs);\nvar _c;\n$RefreshReg$(_c, \"Thumbs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RodW1icy90aHVtYnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5Qjs7O0FBRXpCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLFFBQ2YsR0FEcUIsQ0FBQzs7SUFFbEIsR0FBSyxDQUFDQyxLQUFLLEdBQUdDLFdBQVcsQ0FBQyxRQUFRLENBQVBDLEtBQUs7UUFBS0EsTUFBTUYsQ0FBTkUsS0FBSyxDQUFDRixLQUFLOztJQUNuRCxHQUFLLENBQUNHLFFBQVEsR0FBR0YsV0FBVyxDQUFDLFFBQVEsQ0FBUEMsS0FBSztRQUFLQSxNQUFNQyxDQUFORCxLQUFLLENBQUNDLFFBQVE7O0lBQ3RELEVBQTJEO0lBQzNELEdBQUssQ0FBQ0MsUUFBUSxHQUFHQyxXQUFXO0lBQzVCLE1BQU07OEZBRUhDLENBQUc7a0dBQ0ZDLENBQU87Z0JBQUNDLFNBQVMsRUFBQyxDQUFjOztnR0FDL0JGLENBQUc7d0JBQUNFLFNBQVMsRUFBQyxDQUFXOzhHQUN4QkMsQ0FBRTs0QkFBQ0MsT0FBTyxFQUFFLFFBQVE7Z0NBQUZOLE1BQU0sQ0FBTkEsUUFBUSxDQUFDTyxTQUFTOzs7Z0NBQUssQ0FBRTtnQ0FBSVgsS0FBSzs7Ozs7Ozs7Ozs7O2dHQUVsRE0sQ0FBQTt3QkFBQ0UsU0FBUyxFQUFDLENBQVc7OEdBQ3hCQyxDQUFFOzRCQUFDQyxPQUFPLEVBQUUsUUFBUTtnQ0FBRk4sTUFBTSxDQUFOQSxRQUFRLENBQUNRLFNBQVM7OztnQ0FBSyxDQUFFO2dDQUFDVCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0QsQ0FBQztHQXBCS0osTUFBTTtLQUFOQSxNQUFNO0FBc0JaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aHVtYnMvdGh1bWJzLmpzP2ZjNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUaHVtYnMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBsaWtlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubGlrZXMpO1xuXHRjb25zdCBkaXNsaWtlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZGlzbGlrZXMpO1xuXHQvLyBjb25zdCBpc0xvZ2dlZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaXNMb2dnZWQpO1xuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImxpa2Utc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5jcmVtZW50XCI+XG5cdFx0XHRcdFx0XHQ8aDIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goaW5jcmVtZW50KCkpfT7wn5GNIHtsaWtlc308L2gyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVjcmVtZW50XCI+XG5cdFx0XHRcdFx0XHQ8aDIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZGVjcmVtZW50KCkpfT7wn5GOIHtkaXNsaWtlc308L2gyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRodW1icztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRodW1icyIsImxpa2VzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImRpc2xpa2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImRpdiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMiIsIm9uQ2xpY2siLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/thumbs/thumbs.js\n");

/***/ })

});