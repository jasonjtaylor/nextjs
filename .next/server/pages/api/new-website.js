"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-website";
exports.ids = ["pages/api/new-website"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-website.js":
/*!**********************************!*\
  !*** ./pages/api/new-website.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://JayTaylor:Camrynbitty1!@cluster0.rskg2.mongodb.net/websites?retryWrites=true&w=majority\");\n        const db = client.db();\n        const websitesCollection = db.collection(\"websites\");\n        const result = await websitesCollection.insertOne(data);\n        client.close();\n        res.status(201).json({\n            message: \"Website Inserted\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LXdlYnNpdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO2VBRXRCQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDakMsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUMzQixLQUFLLENBQUNDLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1FBRXJCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ1Asd0RBQW1CLENBQ3ZDLENBQXVHO1FBRXhHLEtBQUssQ0FBQ1MsRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUU7UUFFcEIsS0FBSyxDQUFDQyxrQkFBa0IsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsQ0FBVTtRQUVuRCxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNGLGtCQUFrQixDQUFDRyxTQUFTLENBQUNSLElBQUk7UUFFdERFLE1BQU0sQ0FBQ08sS0FBSztRQUVaWCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUFrQjtRQUFDLENBQUM7SUFDckQsQ0FBQztBQUNGLENBQUM7QUFFRCxpRUFBZWhCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LXdlYnNpdGUuanM/NmRjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcblx0aWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG5cdFx0Y29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuXG5cdFx0Y29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcblx0XHRcdFwibW9uZ29kYitzcnY6Ly9KYXlUYXlsb3I6Q2FtcnluYml0dHkxIUBjbHVzdGVyMC5yc2tnMi5tb25nb2RiLm5ldC93ZWJzaXRlcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuXHRcdCk7XG5cdFx0Y29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuXHRcdGNvbnN0IHdlYnNpdGVzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJ3ZWJzaXRlc1wiKTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdlYnNpdGVzQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XG5cblx0XHRjbGllbnQuY2xvc2UoKTtcblxuXHRcdHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJXZWJzaXRlIEluc2VydGVkXCIgfSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIndlYnNpdGVzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-website.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-website.js"));
module.exports = __webpack_exports__;

})();