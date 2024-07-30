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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./components/ui/form.tsx\");\n/* harmony import */ var _CustomInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomInput */ \"(app-pages-browser)/./components/CustomInput.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst formSchema = zod__WEBPACK_IMPORTED_MODULE_8__.z.object({\n    email: zod__WEBPACK_IMPORTED_MODULE_8__.z.string().email()\n});\nconst AuthForm = (param)=>{\n    let { type } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // 1. Define your form.\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__.zodResolver)(formSchema),\n        defaultValues: {\n            email: \"\"\n        }\n    });\n    // 2. Define a submit handler.\n    function onSubmit(values) {\n        // Do something with the form values.\n        // ✅ This will be type-safe and validated.\n        console.log(values);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"auth-form\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex flex-col gap-5 md:gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/\",\n                        className: \"flex items-center gap-1 cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/icons/logo.svg\",\n                                width: 34,\n                                height: 34,\n                                alt: \"Horizon logo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-bold font-ibm-plex-serif text-26 text-black-1\",\n                                children: \"Horizon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-1 md:gap-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-semibold text-24 text-gray-900 lg:text-36\",\n                            children: [\n                                user ? \"Link Account\" : type === \"sign-in\" ? \"Sign In\" : \"Sign Up\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-normal text-16 text-gray-600\",\n                                    children: user ? \"Link your account to get started\" : \"Please enter your details\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 8\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                lineNumber: 48,\n                columnNumber: 6\n            }, undefined),\n            user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    ...form,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: form.handleSubmit(onSubmit),\n                        className: \"space-y-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomInput__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                form: form,\n                                name: \"email\",\n                                label: \"Email\",\n                                placeholder: \"Enter your email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomInput__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                form: form,\n                                name: \"password\",\n                                label: \"Password\",\n                                placeholder: \"Enter your password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                type: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 10\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kamin\\\\Desktop\\\\kamin_banking\\\\kamin_banking\\\\components\\\\AuthForm.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"ARGI7YtAWSJWPfUWEasldGu4CMs=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm\n    ];\n});\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQXV0aEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXVDO0FBQ1Q7QUFDRjtBQUVMO0FBQzhCO0FBQ1o7QUFDTTtBQVNsQjtBQUVVO0FBRXZDLE1BQU1VLGFBQWFOLGtDQUFDQSxDQUFDTyxNQUFNLENBQUM7SUFDeEJDLE9BQU9SLGtDQUFDQSxDQUFDUyxNQUFNLEdBQUdELEtBQUs7QUFDM0I7QUFHQSxNQUFNRSxXQUFXO1FBQUMsRUFBRUMsSUFBSSxFQUFxQjs7SUFDM0MsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUVqQyx1QkFBdUI7SUFDdkIsTUFBTWlCLE9BQU9aLHdEQUFPQSxDQUE2QjtRQUMvQ2EsVUFBVWQsb0VBQVdBLENBQUNLO1FBQ3RCVSxlQUFlO1lBQ2JSLE9BQU87UUFDVDtJQUNGO0lBRUEsOEJBQThCO0lBQzlCLFNBQVNTLFNBQVNDLE1BQWtDO1FBQ2xELHFDQUFxQztRQUNyQywwQ0FBMEM7UUFDMUNDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtJQUVBLHFCQUNFLDhEQUFDRztRQUFRQyxXQUFVOzswQkFDbEIsOERBQUNDO2dCQUFPRCxXQUFVOztrQ0FDakIsOERBQUN2QixpREFBSUE7d0JBQUN5QixNQUFLO3dCQUFJRixXQUFVOzswQ0FDdkIsOERBQUN4QixrREFBS0E7Z0NBQ0YyQixLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxLQUFJOzs7Ozs7MENBRVIsOERBQUNDO2dDQUFHUCxXQUFVOzBDQUFxRDs7Ozs7Ozs7Ozs7O2tDQUtyRSw4REFBQ1E7d0JBQUlSLFdBQVU7a0NBQ2QsNEVBQUNPOzRCQUFHUCxXQUFVOztnQ0FDWlYsT0FDRSxpQkFDQUQsU0FBUyxZQUNSLFlBQ0E7OENBRUosOERBQUNvQjtvQ0FBRVQsV0FBVTs4Q0FDWFYsT0FDRSxxQ0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNTkEscUJBQ0UsOERBQUNrQjtnQkFBSVIsV0FBVTs7Ozs7MENBSWY7MEJBQ0MsNEVBQUNsQixxREFBSUE7b0JBQUUsR0FBR1UsSUFBSTs4QkFDWCw0RUFBQ0E7d0JBQUtHLFVBQVVILEtBQUtrQixZQUFZLENBQUNmO3dCQUFXSyxXQUFVOzswQ0FDbkQsOERBQUNqQixvREFBV0E7Z0NBQ1JTLE1BQU1BO2dDQUNObUIsTUFBSztnQ0FDTEMsT0FBTTtnQ0FDTkMsYUFBWTs7Ozs7OzBDQUVoQiw4REFBQzlCLG9EQUFXQTtnQ0FDUlMsTUFBTUE7Z0NBQ05tQixNQUFLO2dDQUNMQyxPQUFNO2dDQUNOQyxhQUFZOzs7Ozs7MENBRWhCLDhEQUFDaEMseURBQU1BO2dDQUFDUSxNQUFLOzBDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdEM7R0E3RU1EOztRQUlTUixvREFBT0E7OztLQUpoQlE7QUErRU4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoRm9ybS50c3g/YmM4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIlxyXG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZFwiXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCJcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybURlc2NyaXB0aW9uLFxyXG4gIEZvcm1GaWVsZCxcclxuICBGb3JtSXRlbSxcclxuICBGb3JtTGFiZWwsXHJcbiAgRm9ybU1lc3NhZ2UsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9mb3JtXCJcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcclxuaW1wb3J0IEN1c3RvbUlucHV0IGZyb20gJy4vQ3VzdG9tSW5wdXQnXHJcblxyXG5jb25zdCBmb3JtU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcclxufSlcclxuXHJcblxyXG5jb25zdCBBdXRoRm9ybSA9ICh7IHR5cGUgfSA6IHsgdHlwZTogc3RyaW5nIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBcclxuICAvLyAxLiBEZWZpbmUgeW91ciBmb3JtLlxyXG4gIGNvbnN0IGZvcm0gPSB1c2VGb3JtPHouaW5mZXI8dHlwZW9mIGZvcm1TY2hlbWE+Pih7XHJcbiAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIoZm9ybVNjaGVtYSksXHJcbiAgICBkZWZhdWx0VmFsdWVzOiB7XHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgfSxcclxuICB9KVxyXG4gXHJcbiAgLy8gMi4gRGVmaW5lIGEgc3VibWl0IGhhbmRsZXIuXHJcbiAgZnVuY3Rpb24gb25TdWJtaXQodmFsdWVzOiB6LmluZmVyPHR5cGVvZiBmb3JtU2NoZW1hPikge1xyXG4gICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIGZvcm0gdmFsdWVzLlxyXG4gICAgLy8g4pyFIFRoaXMgd2lsbCBiZSB0eXBlLXNhZmUgYW5kIHZhbGlkYXRlZC5cclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2F1dGgtZm9ybSc+XHJcbiAgICAgPGhlYWRlciBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTUgbWQ6Z2FwLTgnPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICBzcmM9XCIvaWNvbnMvbG9nby5zdmdcIiBcclxuICAgICAgICAgICAgd2lkdGg9ezM0fSBcclxuICAgICAgICAgICAgaGVpZ2h0PXszNH0gXHJcbiAgICAgICAgICAgIGFsdD1cIkhvcml6b24gbG9nb1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGZvbnQtaWJtLXBsZXgtc2VyaWYgdGV4dC0yNiB0ZXh0LWJsYWNrLTFcIj5cclxuICAgICAgICAgSG9yaXpvblxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0xIG1kOmdhcC0zJz5cclxuICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC0yNCB0ZXh0LWdyYXktOTAwIGxnOnRleHQtMzYnPlxyXG4gICAgICAgIHt1c2VyXHJcbiAgICAgICAgID8gJ0xpbmsgQWNjb3VudCdcclxuICAgICAgICAgOiB0eXBlID09PSAnc2lnbi1pbidcclxuICAgICAgICAgID8gJ1NpZ24gSW4nXHJcbiAgICAgICAgICA6ICdTaWduIFVwJ1xyXG4gICAgICAgIH1cclxuICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbm9ybWFsIHRleHQtMTYgdGV4dC1ncmF5LTYwMCc+XHJcbiAgICAgICAgIHt1c2VyIFxyXG4gICAgICAgICAgPyAnTGluayB5b3VyIGFjY291bnQgdG8gZ2V0IHN0YXJ0ZWQnXHJcbiAgICAgICAgICA6ICdQbGVhc2UgZW50ZXIgeW91ciBkZXRhaWxzJ1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgPC9oZWFkZXI+XHJcbiAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTQnPlxyXG4gICAgICAgICAgICB7LyogUGxhaWRMaW5rICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8Rm9ybSB7Li4uZm9ybX0+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtLmhhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT1cInNwYWNlLXktOFwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIGVtYWlsJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdQYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgICApfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTGluayIsInoiLCJ6b2RSZXNvbHZlciIsInVzZUZvcm0iLCJCdXR0b24iLCJGb3JtIiwiQ3VzdG9tSW5wdXQiLCJmb3JtU2NoZW1hIiwib2JqZWN0IiwiZW1haWwiLCJzdHJpbmciLCJBdXRoRm9ybSIsInR5cGUiLCJ1c2VyIiwic2V0VXNlciIsImZvcm0iLCJyZXNvbHZlciIsImRlZmF1bHRWYWx1ZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDEiLCJkaXYiLCJwIiwiaGFuZGxlU3VibWl0IiwibmFtZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AuthForm.tsx\n"));

/***/ })

});