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

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuExampleBasic; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\nclass MenuExampleBasic extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        const { activeItem } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                    name: \"editorials\",\n                    active: activeItem === \"editorials\",\n                    onClick: this.handleItemClick,\n                    children: \"Editorials\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Henry Sato\\\\Desktop\\\\Leilao\\\\leilao\\\\components\\\\Navbar.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                    name: \"reviews\",\n                    active: activeItem === \"reviews\",\n                    onClick: this.handleItemClick,\n                    children: \"Reviews\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Henry Sato\\\\Desktop\\\\Leilao\\\\leilao\\\\components\\\\Navbar.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                    name: \"upcomingEvents\",\n                    active: activeItem === \"upcomingEvents\",\n                    onClick: this.handleItemClick,\n                    children: \"Upcoming Events\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Henry Sato\\\\Desktop\\\\Leilao\\\\leilao\\\\components\\\\Navbar.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Henry Sato\\\\Desktop\\\\Leilao\\\\leilao\\\\components\\\\Navbar.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {};\n        this.handleItemClick = (e, param)=>{\n            let { name } = param;\n            return this.setState({\n                activeItem: name\n            });\n        };\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFFekIsTUFBTUcseUJBQXlCRiw0Q0FBU0E7SUFLckRHLFNBQVM7UUFDUCxNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUVqQyxxQkFDRSw4REFBQ0osbURBQUlBOzs4QkFDSCw4REFBQ0s7b0JBQ0NDLE1BQUs7b0JBQ0xDLFFBQVFKLGVBQWU7b0JBQ3ZCSyxTQUFTLElBQUksQ0FBQ0MsZUFBZTs4QkFDOUI7Ozs7Ozs4QkFJRCw4REFBQ0o7b0JBQ0NDLE1BQUs7b0JBQ0xDLFFBQVFKLGVBQWU7b0JBQ3ZCSyxTQUFTLElBQUksQ0FBQ0MsZUFBZTs4QkFDOUI7Ozs7Ozs4QkFJRCw4REFBQ0o7b0JBQ0NDLE1BQUs7b0JBQ0xDLFFBQVFKLGVBQWU7b0JBQ3ZCSyxTQUFTLElBQUksQ0FBQ0MsZUFBZTs4QkFDOUI7Ozs7Ozs7Ozs7OztJQUtQOzs7YUFsQ0FMLFFBQVEsQ0FBQzthQUVUSyxrQkFBa0IsQ0FBQ0M7Z0JBQUcsRUFBRUosSUFBSSxFQUFFO21CQUFLLElBQUksQ0FBQ0ssUUFBUSxDQUFDO2dCQUFFUixZQUFZRztZQUFLO1FBQUM7O0FBaUN2RTtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzP2ZiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51RXhhbXBsZUJhc2ljIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHt9XHJcblxyXG4gIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1lbnU+XHJcbiAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICBuYW1lPSdlZGl0b3JpYWxzJ1xyXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnZWRpdG9yaWFscyd9XHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICBFZGl0b3JpYWxzXHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuXHJcbiAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICBuYW1lPSdyZXZpZXdzJ1xyXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAncmV2aWV3cyd9XHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICBSZXZpZXdzXHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuXHJcbiAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICBuYW1lPSd1cGNvbWluZ0V2ZW50cydcclxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3VwY29taW5nRXZlbnRzJ31cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFVwY29taW5nIEV2ZW50c1xyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgIClcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJNZW51IiwiTWVudUV4YW1wbGVCYXNpYyIsInJlbmRlciIsImFjdGl2ZUl0ZW0iLCJzdGF0ZSIsIk1lbnVJdGVtIiwibmFtZSIsImFjdGl2ZSIsIm9uQ2xpY2siLCJoYW5kbGVJdGVtQ2xpY2siLCJlIiwic2V0U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});