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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ \"./components/ui/Card.js\");\n/* harmony import */ var _WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebsiteItem.module.css */ \"./components/websites/WebsiteItem.module.css\");\n/* harmony import */ var _WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _thumbs_thumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../thumbs/thumbs */ \"./components/thumbs/thumbs.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n// import { useDispatch } from \"react-redux\";\n// import { useSelector } from \"react-redux\";\n// import { increment, decrement } from \"../actions\";\n\nvar _s = $RefreshSig$();\nfunction WebsiteItem(props) {\n    var showDetailsHandler = function showDetailsHandler() {\n        router.push(\"/\" + props.id);\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // const likes = useSelector((state) => state.likes);\n    // const dislikes = useSelector((state) => state.dislikes);\n    // const isLogged = useSelector((state) => state.isLogged);\n    // const dispatch = useDispatch();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: props.image,\n                            alt: props.title\n                        }, void 0, false, {\n                            fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                            lineNumber: 25,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: props.title\n                            }, void 0, false, {\n                                fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                                lineNumber: 28,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                                children: props.address\n                            }, void 0, false, {\n                                fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                                lineNumber: 29,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                        lineNumber: 27,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: showDetailsHandler,\n                            children: \"Show Details\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                            lineNumber: 32,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thumbs_thumbs__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                lineNumber: 35,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, this));\n}\n_s(WebsiteItem, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = WebsiteItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebsiteItem);\nvar _c;\n$RefreshReg$(_c, \"WebsiteItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYnNpdGVzL1dlYnNpdGVJdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1Y7QUFDaUI7QUFDOUMsRUFBNkM7QUFDN0MsRUFBNkM7QUFDN0MsRUFBcUQ7QUFDaEI7O1NBRTVCSSxXQUFXLENBQUNDLEtBQUssRUFBRSxDQUFDO1FBR25CQyxrQkFBa0IsR0FBM0IsUUFBUSxDQUFDQSxrQkFBa0IsR0FBRyxDQUFDO1FBQzlCQyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFHLEtBQUdILEtBQUssQ0FBQ0ksRUFBRTtJQUMzQixDQUFDOztJQUpELEdBQUssQ0FBQ0YsTUFBTSxHQUFHUCxzREFBUztJQU14QixFQUFxRDtJQUNyRCxFQUEyRDtJQUMzRCxFQUEyRDtJQUMzRCxFQUFrQztJQUVsQyxNQUFNLDZFQUNKVSxDQUFFO1FBQUNDLFNBQVMsRUFBRVQscUVBQVk7O3dGQUN6QkQsZ0RBQUk7O2dHQUNIWSxDQUFHO3dCQUFDRixTQUFTLEVBQUVULHNFQUFhOzhHQUMzQmEsQ0FBRzs0QkFBQ0MsR0FBRyxFQUFFWCxLQUFLLENBQUNTLEtBQUs7NEJBQUVHLEdBQUcsRUFBRVosS0FBSyxDQUFDYSxLQUFLOzs7Ozs7Ozs7OztnR0FFdkNMLENBQUc7d0JBQUNGLFNBQVMsRUFBRVQsd0VBQWU7O3dHQUM3QmtCLENBQUU7MENBQUVmLEtBQUssQ0FBQ2EsS0FBSzs7Ozs7O3dHQUNmRyxDQUFPOzBDQUFFaEIsS0FBSyxDQUFDZ0IsT0FBTzs7Ozs7Ozs7Ozs7O2dHQUV2QlIsQ0FBRzt3QkFBQ0YsU0FBUyxFQUFFVCx3RUFBZTs4R0FDN0JxQixDQUFNOzRCQUFDQyxPQUFPLEVBQUVsQixrQkFBa0I7c0NBQUUsQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR2xESCxzREFBTTs7Ozs7Ozs7Ozs7QUFHVixDQUFDO0dBN0JRQyxXQUFXOztRQUNKSixrREFBUzs7O0tBRGhCSSxXQUFXO0FBK0JwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvd2Vic2l0ZXMvV2Vic2l0ZUl0ZW0uanM/ODM0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi91aS9DYXJkXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9XZWJzaXRlSXRlbS5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuLy8gaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbi8vIGltcG9ydCB7IGluY3JlbWVudCwgZGVjcmVtZW50IH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmltcG9ydCBUaHVtYnMgZnJvbSBcIi4uL3RodW1icy90aHVtYnNcIjtcblxuZnVuY3Rpb24gV2Vic2l0ZUl0ZW0ocHJvcHMpIHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0ZnVuY3Rpb24gc2hvd0RldGFpbHNIYW5kbGVyKCkge1xuXHRcdHJvdXRlci5wdXNoKFwiL1wiICsgcHJvcHMuaWQpO1xuXHR9XG5cblx0Ly8gY29uc3QgbGlrZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmxpa2VzKTtcblx0Ly8gY29uc3QgZGlzbGlrZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRpc2xpa2VzKTtcblx0Ly8gY29uc3QgaXNMb2dnZWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmlzTG9nZ2VkKTtcblx0Ly8gY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG5cdHJldHVybiAoXG5cdFx0PGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cblx0XHRcdDxDYXJkPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG5cdFx0XHRcdFx0PGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG5cdFx0XHRcdFx0PGgzPntwcm9wcy50aXRsZX08L2gzPlxuXHRcdFx0XHRcdDxhZGRyZXNzPntwcm9wcy5hZGRyZXNzfTwvYWRkcmVzcz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17c2hvd0RldGFpbHNIYW5kbGVyfT5TaG93IERldGFpbHM8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0NhcmQ+XG5cdFx0XHQ8VGh1bWJzPjwvVGh1bWJzPlxuXHRcdDwvbGk+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYnNpdGVJdGVtO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkNhcmQiLCJjbGFzc2VzIiwiVGh1bWJzIiwiV2Vic2l0ZUl0ZW0iLCJwcm9wcyIsInNob3dEZXRhaWxzSGFuZGxlciIsInJvdXRlciIsInB1c2giLCJpZCIsImxpIiwiY2xhc3NOYW1lIiwiaXRlbSIsImRpdiIsImltYWdlIiwiaW1nIiwic3JjIiwiYWx0IiwidGl0bGUiLCJjb250ZW50IiwiaDMiLCJhZGRyZXNzIiwiYWN0aW9ucyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/websites/WebsiteItem.js\n");

/***/ })

});