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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ \"./components/ui/Card.js\");\n/* harmony import */ var _WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebsiteItem.module.css */ \"./components/websites/WebsiteItem.module.css\");\n/* harmony import */ var _WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _thumbs_thumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../thumbs/thumbs */ \"./components/thumbs/thumbs.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n// import { useDispatch } from \"react-redux\";\n// import { useSelector } from \"react-redux\";\n// import { increment, decrement } from \"../actions\";\n\nvar _s = $RefreshSig$();\nfunction WebsiteItem(props) {\n    var showDetailsHandler = function showDetailsHandler() {\n        router.push(\"/\" + props.id);\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // const likes = useSelector((state) => state.likes);\n    // const dislikes = useSelector((state) => state.dislikes);\n    // const isLogged = useSelector((state) => state.isLogged);\n    // const dispatch = useDispatch();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: props.image,\n                        alt: props.title\n                    }, void 0, false, {\n                        fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                        lineNumber: 25,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: props.title\n                        }, void 0, false, {\n                            fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                            lineNumber: 28,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                            children: props.address\n                        }, void 0, false, {\n                            fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                            lineNumber: 29,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_WebsiteItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().actions),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: showDetailsHandler,\n                        children: \"Show Details\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                        lineNumber: 32,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thumbs_thumbs__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n                    lineNumber: 34,\n                    columnNumber: 4\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n            lineNumber: 23,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jasontaylor/Desktop/nextJS1/components/websites/WebsiteItem.js\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, this));\n}\n_s(WebsiteItem, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = WebsiteItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebsiteItem);\nvar _c;\n$RefreshReg$(_c, \"WebsiteItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYnNpdGVzL1dlYnNpdGVJdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1Y7QUFDaUI7QUFDOUMsRUFBNkM7QUFDN0MsRUFBNkM7QUFDN0MsRUFBcUQ7QUFDaEI7O1NBRTVCSSxXQUFXLENBQUNDLEtBQUssRUFBRSxDQUFDO1FBR25CQyxrQkFBa0IsR0FBM0IsUUFBUSxDQUFDQSxrQkFBa0IsR0FBRyxDQUFDO1FBQzlCQyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFHLEtBQUdILEtBQUssQ0FBQ0ksRUFBRTtJQUMzQixDQUFDOztJQUpELEdBQUssQ0FBQ0YsTUFBTSxHQUFHUCxzREFBUztJQU14QixFQUFxRDtJQUNyRCxFQUEyRDtJQUMzRCxFQUEyRDtJQUMzRCxFQUFrQztJQUVsQyxNQUFNLDZFQUNKVSxDQUFFO1FBQUNDLFNBQVMsRUFBRVQscUVBQVk7OEZBQ3pCRCxnREFBSTs7NEZBQ0hZLENBQUc7b0JBQUNGLFNBQVMsRUFBRVQsc0VBQWE7MEdBQzNCYSxDQUFHO3dCQUFDQyxHQUFHLEVBQUVYLEtBQUssQ0FBQ1MsS0FBSzt3QkFBRUcsR0FBRyxFQUFFWixLQUFLLENBQUNhLEtBQUs7Ozs7Ozs7Ozs7OzRGQUV2Q0wsQ0FBRztvQkFBQ0YsU0FBUyxFQUFFVCx3RUFBZTs7b0dBQzdCa0IsQ0FBRTtzQ0FBRWYsS0FBSyxDQUFDYSxLQUFLOzs7Ozs7b0dBQ2ZHLENBQU87c0NBQUVoQixLQUFLLENBQUNnQixPQUFPOzs7Ozs7Ozs7Ozs7NEZBRXZCUixDQUFHO29CQUFDRixTQUFTLEVBQUVULHdFQUFlOzBHQUM3QnFCLENBQU07d0JBQUNDLE9BQU8sRUFBRWxCLGtCQUFrQjtrQ0FBRSxDQUFZOzs7Ozs7Ozs7Ozs0RkFFbERILHNEQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FBSVYsQ0FBQztHQTdCUUMsV0FBVzs7UUFDSkosa0RBQVM7OztLQURoQkksV0FBVztBQStCcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3dlYnNpdGVzL1dlYnNpdGVJdGVtLmpzPzgzNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vdWkvQ2FyZFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vV2Vic2l0ZUl0ZW0ubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbi8vIGltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG4vLyBpbXBvcnQgeyBpbmNyZW1lbnQsIGRlY3JlbWVudCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5pbXBvcnQgVGh1bWJzIGZyb20gXCIuLi90aHVtYnMvdGh1bWJzXCI7XG5cbmZ1bmN0aW9uIFdlYnNpdGVJdGVtKHByb3BzKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdGZ1bmN0aW9uIHNob3dEZXRhaWxzSGFuZGxlcigpIHtcblx0XHRyb3V0ZXIucHVzaChcIi9cIiArIHByb3BzLmlkKTtcblx0fVxuXG5cdC8vIGNvbnN0IGxpa2VzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5saWtlcyk7XG5cdC8vIGNvbnN0IGRpc2xpa2VzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5kaXNsaWtlcyk7XG5cdC8vIGNvbnN0IGlzTG9nZ2VkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5pc0xvZ2dlZCk7XG5cdC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG5cdFx0XHQ8Q2FyZD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PXtwcm9wcy50aXRsZX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuXHRcdFx0XHRcdDxoMz57cHJvcHMudGl0bGV9PC9oMz5cblx0XHRcdFx0XHQ8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3Nob3dEZXRhaWxzSGFuZGxlcn0+U2hvdyBEZXRhaWxzPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PFRodW1icyAvPlxuXHRcdFx0PC9DYXJkPlxuXHRcdDwvbGk+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYnNpdGVJdGVtO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkNhcmQiLCJjbGFzc2VzIiwiVGh1bWJzIiwiV2Vic2l0ZUl0ZW0iLCJwcm9wcyIsInNob3dEZXRhaWxzSGFuZGxlciIsInJvdXRlciIsInB1c2giLCJpZCIsImxpIiwiY2xhc3NOYW1lIiwiaXRlbSIsImRpdiIsImltYWdlIiwiaW1nIiwic3JjIiwiYWx0IiwidGl0bGUiLCJjb250ZW50IiwiaDMiLCJhZGRyZXNzIiwiYWN0aW9ucyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/websites/WebsiteItem.js\n");

/***/ })

});