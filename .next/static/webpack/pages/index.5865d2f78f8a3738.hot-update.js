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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuExampleBasic; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\nclass MenuExampleBasic extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        const { activeItem } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                    name: \"editorials\",\n                    active: activeItem === \"editorials\",\n                    onClick: this.handleItemClick,\n                    children: \"Editorials\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Henry Sato\\\\Desktop\\\\Leilao\\\\leilao\\\\components\\\\Navbar.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                    name: \"reviews\",\n                    active: activeItem === \"reviews\",\n                    onClick: this.handleItemClick,\n                    children: \"Reviews\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Henry Sato\\\\Desktop\\\\Leilao\\\\leilao\\\\components\\\\Navbar.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                    name: \"upcomingEvents\",\n                    active: activeItem === \"upcomingEvents\",\n                    onClick: this.handleItemClick,\n                    children: \"Upcoming Events\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Henry Sato\\\\Desktop\\\\Leilao\\\\leilao\\\\components\\\\Navbar.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Henry Sato\\\\Desktop\\\\Leilao\\\\leilao\\\\components\\\\Navbar.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {};\n        this.handleItemClick = (e, param)=>{\n            let { name } = param;\n            return this.setState({\n                activeItem: name\n            });\n        };\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ1U7QUFFbkMsTUFBTUkseUJBQXlCSCw0Q0FBU0E7SUFLckRJLFNBQVM7UUFDUCxNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUVqQyxxQkFDRSw4REFBQ0osbURBQUlBOzs4QkFDSCw4REFBQ0QsdURBQVFBO29CQUNQTSxNQUFLO29CQUNMQyxRQUFRSCxlQUFlO29CQUN2QkksU0FBUyxJQUFJLENBQUNDLGVBQWU7OEJBQzlCOzs7Ozs7OEJBSUQsOERBQUNULHVEQUFRQTtvQkFDUE0sTUFBSztvQkFDTEMsUUFBUUgsZUFBZTtvQkFDdkJJLFNBQVMsSUFBSSxDQUFDQyxlQUFlOzhCQUM5Qjs7Ozs7OzhCQUlELDhEQUFDVCx1REFBUUE7b0JBQ1BNLE1BQUs7b0JBQ0xDLFFBQVFILGVBQWU7b0JBQ3ZCSSxTQUFTLElBQUksQ0FBQ0MsZUFBZTs4QkFDOUI7Ozs7Ozs7Ozs7OztJQUtQOzs7YUFsQ0FKLFFBQVEsQ0FBQzthQUVUSSxrQkFBa0IsQ0FBQ0M7Z0JBQUcsRUFBRUosSUFBSSxFQUFFO21CQUFLLElBQUksQ0FBQ0ssUUFBUSxDQUFDO2dCQUFFUCxZQUFZRTtZQUFLO1FBQUM7O0FBaUN2RTtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzP2ZiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUV4YW1wbGVCYXNpYyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7fVxyXG5cclxuICBoYW5kbGVJdGVtQ2xpY2sgPSAoZSwgeyBuYW1lIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNZW51PlxyXG4gICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgbmFtZT0nZWRpdG9yaWFscydcclxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2VkaXRvcmlhbHMnfVxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRWRpdG9yaWFsc1xyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcblxyXG4gICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgbmFtZT0ncmV2aWV3cydcclxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3Jldmlld3MnfVxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUmV2aWV3c1xyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcblxyXG4gICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgbmFtZT0ndXBjb21pbmdFdmVudHMnXHJcbiAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICd1cGNvbWluZ0V2ZW50cyd9XHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICBVcGNvbWluZyBFdmVudHNcclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICA8L01lbnU+XHJcbiAgICApXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudUl0ZW0iLCJNZW51IiwiTWVudUV4YW1wbGVCYXNpYyIsInJlbmRlciIsImFjdGl2ZUl0ZW0iLCJzdGF0ZSIsIm5hbWUiLCJhY3RpdmUiLCJvbkNsaWNrIiwiaGFuZGxlSXRlbUNsaWNrIiwiZSIsInNldFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});