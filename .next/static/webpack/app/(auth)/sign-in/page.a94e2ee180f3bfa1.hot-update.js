"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/sign-in/page",{

/***/ "(app-pages-browser)/./components/AuthForm.tsx":
/*!*********************************!*\
  !*** ./components/AuthForm.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst formSchema = zod__WEBPACK_IMPORTED_MODULE_4__.z.object({\n    username: zod__WEBPACK_IMPORTED_MODULE_4__.z.string().min(2, {\n        message: \"Username must be at least 2 characters.\"\n    })\n});\nconst AuthForm = (param)=>{\n    let { type } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"auth-form\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex flex-col gap-5 md:gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/\",\n                        className: \"flex items-center gap-1 cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/icons/logo.svg\",\n                                width: 34,\n                                height: 34,\n                                alt: \"Horizon logo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-bold font-ibm-plex-serif text-26 text-black-1\",\n                                children: \"Horizon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-1 md:gap-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-semibold text-24 text-gray-900 lg:text-36\",\n                            children: [\n                                user ? \"Link Account\" : type === \"sign-in\" ? \"Sign In\" : \"Sign Up\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-normal text-16 text-gray-600\",\n                                    children: user ? \"Link your account to get started\" : \"Please enter your details\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 8\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                lineNumber: 24,\n                columnNumber: 6\n            }, undefined),\n            user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: \"FORM\"\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"Iei9RGtZU29Y1RhBe1sbfh/MntA=\");\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQXV0aEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUV1QztBQUNUO0FBQ0Y7QUFFTDtBQUl2QixNQUFNSyxhQUFhRCxrQ0FBQ0EsQ0FBQ0UsTUFBTSxDQUFDO0lBQ3hCQyxVQUFVSCxrQ0FBQ0EsQ0FBQ0ksTUFBTSxHQUFHQyxHQUFHLENBQUMsR0FBRztRQUMxQkMsU0FBUztJQUNYO0FBQ0o7QUFHQSxNQUFNQyxXQUFXO1FBQUMsRUFBRUMsSUFBSSxFQUFxQjs7SUFDM0MsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdiLCtDQUFRQSxDQUFDO0lBR2pDLHFCQUNFLDhEQUFDYztRQUFRQyxXQUFVOzswQkFDbEIsOERBQUNDO2dCQUFPRCxXQUFVOztrQ0FDakIsOERBQUNiLGlEQUFJQTt3QkFBQ2UsTUFBSzt3QkFBSUYsV0FBVTs7MENBQ3ZCLDhEQUFDZCxrREFBS0E7Z0NBQ0ZpQixLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxLQUFJOzs7Ozs7MENBRVIsOERBQUNDO2dDQUFHUCxXQUFVOzBDQUFxRDs7Ozs7Ozs7Ozs7O2tDQUtyRSw4REFBQ1E7d0JBQUlSLFdBQVU7a0NBQ2QsNEVBQUNPOzRCQUFHUCxXQUFVOztnQ0FDWkgsT0FDRSxpQkFDQUQsU0FBUyxZQUNSLFlBQ0E7OENBRUosOERBQUNhO29DQUFFVCxXQUFVOzhDQUNYSCxPQUNFLHFDQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1OQSxxQkFDRSw4REFBQ1c7Z0JBQUlSLFdBQVU7Ozs7OzBDQUlmOzBCQUFFOzs7Ozs7OztBQU1WO0dBL0NNTDtLQUFBQTtBQWlETiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0F1dGhGb3JtLnRzeD9iYzgzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiXHJcbmltcG9ydCB7IHpvZFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMvem9kXCJcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIlxyXG5cclxuY29uc3QgZm9ybVNjaGVtYSA9IHoub2JqZWN0KHtcclxuICAgIHVzZXJuYW1lOiB6LnN0cmluZygpLm1pbigyLCB7XHJcbiAgICAgIG1lc3NhZ2U6IFwiVXNlcm5hbWUgbXVzdCBiZSBhdCBsZWFzdCAyIGNoYXJhY3RlcnMuXCIsXHJcbiAgICB9KSxcclxufSlcclxuXHJcblxyXG5jb25zdCBBdXRoRm9ybSA9ICh7IHR5cGUgfSA6IHsgdHlwZTogc3RyaW5nIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYXV0aC1mb3JtJz5cclxuICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtNSBtZDpnYXAtOCc+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgIHNyYz1cIi9pY29ucy9sb2dvLnN2Z1wiIFxyXG4gICAgICAgICAgICB3aWR0aD17MzR9IFxyXG4gICAgICAgICAgICBoZWlnaHQ9ezM0fSBcclxuICAgICAgICAgICAgYWx0PVwiSG9yaXpvbiBsb2dvXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgZm9udC1pYm0tcGxleC1zZXJpZiB0ZXh0LTI2IHRleHQtYmxhY2stMVwiPlxyXG4gICAgICAgICBIb3Jpem9uXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTEgbWQ6Z2FwLTMnPlxyXG4gICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LTI0IHRleHQtZ3JheS05MDAgbGc6dGV4dC0zNic+XHJcbiAgICAgICAge3VzZXJcclxuICAgICAgICAgPyAnTGluayBBY2NvdW50J1xyXG4gICAgICAgICA6IHR5cGUgPT09ICdzaWduLWluJ1xyXG4gICAgICAgICAgPyAnU2lnbiBJbidcclxuICAgICAgICAgIDogJ1NpZ24gVXAnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1ub3JtYWwgdGV4dC0xNiB0ZXh0LWdyYXktNjAwJz5cclxuICAgICAgICAge3VzZXIgXHJcbiAgICAgICAgICA/ICdMaW5rIHlvdXIgYWNjb3VudCB0byBnZXQgc3RhcnRlZCdcclxuICAgICAgICAgIDogJ1BsZWFzZSBlbnRlciB5b3VyIGRldGFpbHMnXHJcbiAgICAgICAgIH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICA8L2hlYWRlcj5cclxuICAgICB7dXNlciA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtNCc+XHJcbiAgICAgICAgICAgIHsvKiBQbGFpZExpbmsgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKTogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIEZPUk1cclxuICAgICAgICA8Lz5cclxuICAgICApfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTGluayIsInoiLCJmb3JtU2NoZW1hIiwib2JqZWN0IiwidXNlcm5hbWUiLCJzdHJpbmciLCJtaW4iLCJtZXNzYWdlIiwiQXV0aEZvcm0iLCJ0eXBlIiwidXNlciIsInNldFVzZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDEiLCJkaXYiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AuthForm.tsx\n"));

/***/ })

});