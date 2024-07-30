"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cn: function() { return /* binding */ cn; },\n/* harmony export */   countTransactionCategories: function() { return /* binding */ countTransactionCategories; },\n/* harmony export */   decryptId: function() { return /* binding */ decryptId; },\n/* harmony export */   encryptId: function() { return /* binding */ encryptId; },\n/* harmony export */   extractCustomerIdFromUrl: function() { return /* binding */ extractCustomerIdFromUrl; },\n/* harmony export */   formSchema: function() { return /* binding */ formSchema; },\n/* harmony export */   formUrlQuery: function() { return /* binding */ formUrlQuery; },\n/* harmony export */   formatAmount: function() { return /* binding */ formatAmount; },\n/* harmony export */   formatDateTime: function() { return /* binding */ formatDateTime; },\n/* harmony export */   getAccountTypeColors: function() { return /* binding */ getAccountTypeColors; },\n/* harmony export */   getTransactionStatus: function() { return /* binding */ getTransactionStatus; },\n/* harmony export */   parseStringify: function() { return /* binding */ parseStringify; },\n/* harmony export */   removeSpecialCharacters: function() { return /* binding */ removeSpecialCharacters; }\n/* harmony export */ });\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ \"(app-pages-browser)/./node_modules/query-string/index.js\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n/* eslint-disable no-prototype-builtins */ \n\n\nfunction cn() {\n    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){\n        inputs[_key] = arguments[_key];\n    }\n    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));\n}\n// FORMAT DATE TIME\nconst formatDateTime = (dateString)=>{\n    const dateTimeOptions = {\n        weekday: \"short\",\n        month: \"short\",\n        day: \"numeric\",\n        hour: \"numeric\",\n        minute: \"numeric\",\n        hour12: true\n    };\n    const dateDayOptions = {\n        weekday: \"short\",\n        year: \"numeric\",\n        month: \"2-digit\",\n        day: \"2-digit\"\n    };\n    const dateOptions = {\n        month: \"short\",\n        year: \"numeric\",\n        day: \"numeric\"\n    };\n    const timeOptions = {\n        hour: \"numeric\",\n        minute: \"numeric\",\n        hour12: true\n    };\n    const formattedDateTime = new Date(dateString).toLocaleString(\"en-US\", dateTimeOptions);\n    const formattedDateDay = new Date(dateString).toLocaleString(\"en-US\", dateDayOptions);\n    const formattedDate = new Date(dateString).toLocaleString(\"en-US\", dateOptions);\n    const formattedTime = new Date(dateString).toLocaleString(\"en-US\", timeOptions);\n    return {\n        dateTime: formattedDateTime,\n        dateDay: formattedDateDay,\n        dateOnly: formattedDate,\n        timeOnly: formattedTime\n    };\n};\nfunction formatAmount(amount) {\n    const formatter = new Intl.NumberFormat(\"en-US\", {\n        style: \"currency\",\n        currency: \"USD\",\n        minimumFractionDigits: 2\n    });\n    return formatter.format(amount);\n}\nconst parseStringify = (value)=>JSON.parse(JSON.stringify(value));\nconst removeSpecialCharacters = (value)=>{\n    return value.replace(/[^\\w\\s]/gi, \"\");\n};\nfunction formUrlQuery(param) {\n    let { params, key, value } = param;\n    const currentUrl = query_string__WEBPACK_IMPORTED_MODULE_2__[\"default\"].parse(params);\n    currentUrl[key] = value;\n    return query_string__WEBPACK_IMPORTED_MODULE_2__[\"default\"].stringifyUrl({\n        url: window.location.pathname,\n        query: currentUrl\n    }, {\n        skipNull: true\n    });\n}\nfunction getAccountTypeColors(type) {\n    switch(type){\n        case \"depository\":\n            return {\n                bg: \"bg-blue-25\",\n                lightBg: \"bg-blue-100\",\n                title: \"text-blue-900\",\n                subText: \"text-blue-700\"\n            };\n        case \"credit\":\n            return {\n                bg: \"bg-success-25\",\n                lightBg: \"bg-success-100\",\n                title: \"text-success-900\",\n                subText: \"text-success-700\"\n            };\n        default:\n            return {\n                bg: \"bg-green-25\",\n                lightBg: \"bg-green-100\",\n                title: \"text-green-900\",\n                subText: \"text-green-700\"\n            };\n    }\n}\nfunction countTransactionCategories(transactions) {\n    const categoryCounts = {};\n    let totalCount = 0;\n    // Iterate over each transaction\n    transactions && transactions.forEach((transaction)=>{\n        // Extract the category from the transaction\n        const category = transaction.category;\n        // If the category exists in the categoryCounts object, increment its count\n        if (categoryCounts.hasOwnProperty(category)) {\n            categoryCounts[category]++;\n        } else {\n            // Otherwise, initialize the count to 1\n            categoryCounts[category] = 1;\n        }\n        // Increment total count\n        totalCount++;\n    });\n    // Convert the categoryCounts object to an array of objects\n    const aggregatedCategories = Object.keys(categoryCounts).map((category)=>({\n            name: category,\n            count: categoryCounts[category],\n            totalCount\n        }));\n    // Sort the aggregatedCategories array by count in descending order\n    aggregatedCategories.sort((a, b)=>b.count - a.count);\n    return aggregatedCategories;\n}\nfunction extractCustomerIdFromUrl(url) {\n    // Split the URL string by '/'\n    const parts = url.split(\"/\");\n    // Extract the last part, which represents the customer ID\n    const customerId = parts[parts.length - 1];\n    return customerId;\n}\nfunction encryptId(id) {\n    return btoa(id);\n}\nfunction decryptId(id) {\n    return atob(id);\n}\nconst getTransactionStatus = (date)=>{\n    const today = new Date();\n    const twoDaysAgo = new Date(today);\n    twoDaysAgo.setDate(today.getDate() - 2);\n    return date > twoDaysAgo ? \"Processing\" : \"Success\";\n};\nconst formSchema = z.object({\n    email: z.string().email()\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi91dGlscy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXdDLEdBQ0s7QUFDZjtBQUNXO0FBRWxDLFNBQVNHO0lBQUc7UUFBR0MsT0FBSCx1QkFBdUI7O0lBQ3hDLE9BQU9GLHVEQUFPQSxDQUFDRiwwQ0FBSUEsQ0FBQ0k7QUFDdEI7QUFFQSxtQkFBbUI7QUFDWixNQUFNQyxpQkFBaUIsQ0FBQ0M7SUFDN0IsTUFBTUMsa0JBQThDO1FBQ2xEQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsS0FBSztRQUNMQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUTtJQUNWO0lBRUEsTUFBTUMsaUJBQTZDO1FBQ2pETixTQUFTO1FBQ1RPLE1BQU07UUFDTk4sT0FBTztRQUNQQyxLQUFLO0lBQ1A7SUFFQSxNQUFNTSxjQUEwQztRQUM5Q1AsT0FBTztRQUNQTSxNQUFNO1FBQ05MLEtBQUs7SUFDUDtJQUVBLE1BQU1PLGNBQTBDO1FBQzlDTixNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUTtJQUNWO0lBRUEsTUFBTUssb0JBQTRCLElBQUlDLEtBQUtiLFlBQVljLGNBQWMsQ0FDbkUsU0FDQWI7SUFHRixNQUFNYyxtQkFBMkIsSUFBSUYsS0FBS2IsWUFBWWMsY0FBYyxDQUNsRSxTQUNBTjtJQUdGLE1BQU1RLGdCQUF3QixJQUFJSCxLQUFLYixZQUFZYyxjQUFjLENBQy9ELFNBQ0FKO0lBR0YsTUFBTU8sZ0JBQXdCLElBQUlKLEtBQUtiLFlBQVljLGNBQWMsQ0FDL0QsU0FDQUg7SUFHRixPQUFPO1FBQ0xPLFVBQVVOO1FBQ1ZPLFNBQVNKO1FBQ1RLLFVBQVVKO1FBQ1ZLLFVBQVVKO0lBQ1o7QUFDRixFQUFFO0FBRUssU0FBU0ssYUFBYUMsTUFBYztJQUN6QyxNQUFNQyxZQUFZLElBQUlDLEtBQUtDLFlBQVksQ0FBQyxTQUFTO1FBQy9DQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsdUJBQXVCO0lBQ3pCO0lBRUEsT0FBT0wsVUFBVU0sTUFBTSxDQUFDUDtBQUMxQjtBQUVPLE1BQU1RLGlCQUFpQixDQUFDQyxRQUFlQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLFNBQVMsQ0FBQ0gsUUFBUTtBQUV6RSxNQUFNSSwwQkFBMEIsQ0FBQ0o7SUFDdEMsT0FBT0EsTUFBTUssT0FBTyxDQUFDLGFBQWE7QUFDcEMsRUFBRTtBQVFLLFNBQVNDLGFBQWEsS0FBc0M7UUFBdEMsRUFBRUMsTUFBTSxFQUFFQyxHQUFHLEVBQUVSLEtBQUssRUFBa0IsR0FBdEM7SUFDM0IsTUFBTVMsYUFBYTlDLG9EQUFFQSxDQUFDdUMsS0FBSyxDQUFDSztJQUU1QkUsVUFBVSxDQUFDRCxJQUFJLEdBQUdSO0lBRWxCLE9BQU9yQyxvREFBRUEsQ0FBQytDLFlBQVksQ0FDcEI7UUFDRUMsS0FBS0MsT0FBT0MsUUFBUSxDQUFDQyxRQUFRO1FBQzdCQyxPQUFPTjtJQUNULEdBQ0E7UUFBRU8sVUFBVTtJQUFLO0FBRXJCO0FBRU8sU0FBU0MscUJBQXFCQyxJQUFrQjtJQUNyRCxPQUFRQTtRQUNOLEtBQUs7WUFDSCxPQUFPO2dCQUNMQyxJQUFJO2dCQUNKQyxTQUFTO2dCQUNUQyxPQUFPO2dCQUNQQyxTQUFTO1lBQ1g7UUFFRixLQUFLO1lBQ0gsT0FBTztnQkFDTEgsSUFBSTtnQkFDSkMsU0FBUztnQkFDVEMsT0FBTztnQkFDUEMsU0FBUztZQUNYO1FBRUY7WUFDRSxPQUFPO2dCQUNMSCxJQUFJO2dCQUNKQyxTQUFTO2dCQUNUQyxPQUFPO2dCQUNQQyxTQUFTO1lBQ1g7SUFDSjtBQUNGO0FBRU8sU0FBU0MsMkJBQ2RDLFlBQTJCO0lBRTNCLE1BQU1DLGlCQUFpRCxDQUFDO0lBQ3hELElBQUlDLGFBQWE7SUFFakIsZ0NBQWdDO0lBQ2hDRixnQkFDRUEsYUFBYUcsT0FBTyxDQUFDLENBQUNDO1FBQ3BCLDRDQUE0QztRQUM1QyxNQUFNQyxXQUFXRCxZQUFZQyxRQUFRO1FBRXJDLDJFQUEyRTtRQUMzRSxJQUFJSixlQUFlSyxjQUFjLENBQUNELFdBQVc7WUFDM0NKLGNBQWMsQ0FBQ0ksU0FBUztRQUMxQixPQUFPO1lBQ0wsdUNBQXVDO1lBQ3ZDSixjQUFjLENBQUNJLFNBQVMsR0FBRztRQUM3QjtRQUVBLHdCQUF3QjtRQUN4Qkg7SUFDRjtJQUVGLDJEQUEyRDtJQUMzRCxNQUFNSyx1QkFBd0NDLE9BQU9DLElBQUksQ0FBQ1IsZ0JBQWdCUyxHQUFHLENBQzNFLENBQUNMLFdBQWM7WUFDYk0sTUFBTU47WUFDTk8sT0FBT1gsY0FBYyxDQUFDSSxTQUFTO1lBQy9CSDtRQUNGO0lBR0YsbUVBQW1FO0lBQ25FSyxxQkFBcUJNLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFSCxLQUFLLEdBQUdFLEVBQUVGLEtBQUs7SUFFckQsT0FBT0w7QUFDVDtBQUVPLFNBQVNTLHlCQUF5QjdCLEdBQVc7SUFDbEQsOEJBQThCO0lBQzlCLE1BQU04QixRQUFROUIsSUFBSStCLEtBQUssQ0FBQztJQUV4QiwwREFBMEQ7SUFDMUQsTUFBTUMsYUFBYUYsS0FBSyxDQUFDQSxNQUFNRyxNQUFNLEdBQUcsRUFBRTtJQUUxQyxPQUFPRDtBQUNUO0FBRU8sU0FBU0UsVUFBVUMsRUFBVTtJQUNsQyxPQUFPQyxLQUFLRDtBQUNkO0FBRU8sU0FBU0UsVUFBVUYsRUFBVTtJQUNsQyxPQUFPRyxLQUFLSDtBQUNkO0FBRU8sTUFBTUksdUJBQXVCLENBQUNDO0lBQ25DLE1BQU1DLFFBQVEsSUFBSXZFO0lBQ2xCLE1BQU13RSxhQUFhLElBQUl4RSxLQUFLdUU7SUFDNUJDLFdBQVdDLE9BQU8sQ0FBQ0YsTUFBTUcsT0FBTyxLQUFLO0lBRXJDLE9BQU9KLE9BQU9FLGFBQWEsZUFBZTtBQUM1QyxFQUFFO0FBRUssTUFBTUcsYUFBYUMsRUFBRUMsTUFBTSxDQUFDO0lBQ2pDQyxPQUFPRixFQUFFRyxNQUFNLEdBQUdELEtBQUs7QUFDekIsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvdXRpbHMudHM/Zjc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cclxuaW1wb3J0IHsgdHlwZSBDbGFzc1ZhbHVlLCBjbHN4IH0gZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHFzIGZyb20gXCJxdWVyeS1zdHJpbmdcIjtcclxuaW1wb3J0IHsgdHdNZXJnZSB9IGZyb20gXCJ0YWlsd2luZC1tZXJnZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNuKC4uLmlucHV0czogQ2xhc3NWYWx1ZVtdKSB7XHJcbiAgcmV0dXJuIHR3TWVyZ2UoY2xzeChpbnB1dHMpKTtcclxufVxyXG5cclxuLy8gRk9STUFUIERBVEUgVElNRVxyXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZVRpbWUgPSAoZGF0ZVN0cmluZzogRGF0ZSkgPT4ge1xyXG4gIGNvbnN0IGRhdGVUaW1lT3B0aW9uczogSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMgPSB7XHJcbiAgICB3ZWVrZGF5OiBcInNob3J0XCIsIC8vIGFiYnJldmlhdGVkIHdlZWtkYXkgbmFtZSAoZS5nLiwgJ01vbicpXHJcbiAgICBtb250aDogXCJzaG9ydFwiLCAvLyBhYmJyZXZpYXRlZCBtb250aCBuYW1lIChlLmcuLCAnT2N0JylcclxuICAgIGRheTogXCJudW1lcmljXCIsIC8vIG51bWVyaWMgZGF5IG9mIHRoZSBtb250aCAoZS5nLiwgJzI1JylcclxuICAgIGhvdXI6IFwibnVtZXJpY1wiLCAvLyBudW1lcmljIGhvdXIgKGUuZy4sICc4JylcclxuICAgIG1pbnV0ZTogXCJudW1lcmljXCIsIC8vIG51bWVyaWMgbWludXRlIChlLmcuLCAnMzAnKVxyXG4gICAgaG91cjEyOiB0cnVlLCAvLyB1c2UgMTItaG91ciBjbG9jayAodHJ1ZSkgb3IgMjQtaG91ciBjbG9jayAoZmFsc2UpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0ZURheU9wdGlvbnM6IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zID0ge1xyXG4gICAgd2Vla2RheTogXCJzaG9ydFwiLCAvLyBhYmJyZXZpYXRlZCB3ZWVrZGF5IG5hbWUgKGUuZy4sICdNb24nKVxyXG4gICAgeWVhcjogXCJudW1lcmljXCIsIC8vIG51bWVyaWMgeWVhciAoZS5nLiwgJzIwMjMnKVxyXG4gICAgbW9udGg6IFwiMi1kaWdpdFwiLCAvLyBhYmJyZXZpYXRlZCBtb250aCBuYW1lIChlLmcuLCAnT2N0JylcclxuICAgIGRheTogXCIyLWRpZ2l0XCIsIC8vIG51bWVyaWMgZGF5IG9mIHRoZSBtb250aCAoZS5nLiwgJzI1JylcclxuICB9O1xyXG5cclxuICBjb25zdCBkYXRlT3B0aW9uczogSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMgPSB7XHJcbiAgICBtb250aDogXCJzaG9ydFwiLCAvLyBhYmJyZXZpYXRlZCBtb250aCBuYW1lIChlLmcuLCAnT2N0JylcclxuICAgIHllYXI6IFwibnVtZXJpY1wiLCAvLyBudW1lcmljIHllYXIgKGUuZy4sICcyMDIzJylcclxuICAgIGRheTogXCJudW1lcmljXCIsIC8vIG51bWVyaWMgZGF5IG9mIHRoZSBtb250aCAoZS5nLiwgJzI1JylcclxuICB9O1xyXG5cclxuICBjb25zdCB0aW1lT3B0aW9uczogSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMgPSB7XHJcbiAgICBob3VyOiBcIm51bWVyaWNcIiwgLy8gbnVtZXJpYyBob3VyIChlLmcuLCAnOCcpXHJcbiAgICBtaW51dGU6IFwibnVtZXJpY1wiLCAvLyBudW1lcmljIG1pbnV0ZSAoZS5nLiwgJzMwJylcclxuICAgIGhvdXIxMjogdHJ1ZSwgLy8gdXNlIDEyLWhvdXIgY2xvY2sgKHRydWUpIG9yIDI0LWhvdXIgY2xvY2sgKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGVUaW1lOiBzdHJpbmcgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKS50b0xvY2FsZVN0cmluZyhcclxuICAgIFwiZW4tVVNcIixcclxuICAgIGRhdGVUaW1lT3B0aW9uc1xyXG4gICk7XHJcblxyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGVEYXk6IHN0cmluZyA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpLnRvTG9jYWxlU3RyaW5nKFxyXG4gICAgXCJlbi1VU1wiLFxyXG4gICAgZGF0ZURheU9wdGlvbnNcclxuICApO1xyXG5cclxuICBjb25zdCBmb3JtYXR0ZWREYXRlOiBzdHJpbmcgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKS50b0xvY2FsZVN0cmluZyhcclxuICAgIFwiZW4tVVNcIixcclxuICAgIGRhdGVPcHRpb25zXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZm9ybWF0dGVkVGltZTogc3RyaW5nID0gbmV3IERhdGUoZGF0ZVN0cmluZykudG9Mb2NhbGVTdHJpbmcoXHJcbiAgICBcImVuLVVTXCIsXHJcbiAgICB0aW1lT3B0aW9uc1xyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkYXRlVGltZTogZm9ybWF0dGVkRGF0ZVRpbWUsXHJcbiAgICBkYXRlRGF5OiBmb3JtYXR0ZWREYXRlRGF5LFxyXG4gICAgZGF0ZU9ubHk6IGZvcm1hdHRlZERhdGUsXHJcbiAgICB0aW1lT25seTogZm9ybWF0dGVkVGltZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEFtb3VudChhbW91bnQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xyXG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxyXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChhbW91bnQpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFyc2VTdHJpbmdpZnkgPSAodmFsdWU6IGFueSkgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW15cXHdcXHNdL2dpLCBcIlwiKTtcclxufTtcclxuXHJcbmludGVyZmFjZSBVcmxRdWVyeVBhcmFtcyB7XHJcbiAgcGFyYW1zOiBzdHJpbmc7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1VcmxRdWVyeSh7IHBhcmFtcywga2V5LCB2YWx1ZSB9OiBVcmxRdWVyeVBhcmFtcykge1xyXG4gIGNvbnN0IGN1cnJlbnRVcmwgPSBxcy5wYXJzZShwYXJhbXMpO1xyXG5cclxuICBjdXJyZW50VXJsW2tleV0gPSB2YWx1ZTtcclxuXHJcbiAgcmV0dXJuIHFzLnN0cmluZ2lmeVVybChcclxuICAgIHtcclxuICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICAgIHF1ZXJ5OiBjdXJyZW50VXJsLFxyXG4gICAgfSxcclxuICAgIHsgc2tpcE51bGw6IHRydWUgfVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY2NvdW50VHlwZUNvbG9ycyh0eXBlOiBBY2NvdW50VHlwZXMpIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgXCJkZXBvc2l0b3J5XCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYmc6IFwiYmctYmx1ZS0yNVwiLFxyXG4gICAgICAgIGxpZ2h0Qmc6IFwiYmctYmx1ZS0xMDBcIixcclxuICAgICAgICB0aXRsZTogXCJ0ZXh0LWJsdWUtOTAwXCIsXHJcbiAgICAgICAgc3ViVGV4dDogXCJ0ZXh0LWJsdWUtNzAwXCIsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBcImNyZWRpdFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGJnOiBcImJnLXN1Y2Nlc3MtMjVcIixcclxuICAgICAgICBsaWdodEJnOiBcImJnLXN1Y2Nlc3MtMTAwXCIsXHJcbiAgICAgICAgdGl0bGU6IFwidGV4dC1zdWNjZXNzLTkwMFwiLFxyXG4gICAgICAgIHN1YlRleHQ6IFwidGV4dC1zdWNjZXNzLTcwMFwiLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYmc6IFwiYmctZ3JlZW4tMjVcIixcclxuICAgICAgICBsaWdodEJnOiBcImJnLWdyZWVuLTEwMFwiLFxyXG4gICAgICAgIHRpdGxlOiBcInRleHQtZ3JlZW4tOTAwXCIsXHJcbiAgICAgICAgc3ViVGV4dDogXCJ0ZXh0LWdyZWVuLTcwMFwiLFxyXG4gICAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50VHJhbnNhY3Rpb25DYXRlZ29yaWVzKFxyXG4gIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXVxyXG4pOiBDYXRlZ29yeUNvdW50W10ge1xyXG4gIGNvbnN0IGNhdGVnb3J5Q291bnRzOiB7IFtjYXRlZ29yeTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICBsZXQgdG90YWxDb3VudCA9IDA7XHJcblxyXG4gIC8vIEl0ZXJhdGUgb3ZlciBlYWNoIHRyYW5zYWN0aW9uXHJcbiAgdHJhbnNhY3Rpb25zICYmXHJcbiAgICB0cmFuc2FjdGlvbnMuZm9yRWFjaCgodHJhbnNhY3Rpb24pID0+IHtcclxuICAgICAgLy8gRXh0cmFjdCB0aGUgY2F0ZWdvcnkgZnJvbSB0aGUgdHJhbnNhY3Rpb25cclxuICAgICAgY29uc3QgY2F0ZWdvcnkgPSB0cmFuc2FjdGlvbi5jYXRlZ29yeTtcclxuXHJcbiAgICAgIC8vIElmIHRoZSBjYXRlZ29yeSBleGlzdHMgaW4gdGhlIGNhdGVnb3J5Q291bnRzIG9iamVjdCwgaW5jcmVtZW50IGl0cyBjb3VudFxyXG4gICAgICBpZiAoY2F0ZWdvcnlDb3VudHMuaGFzT3duUHJvcGVydHkoY2F0ZWdvcnkpKSB7XHJcbiAgICAgICAgY2F0ZWdvcnlDb3VudHNbY2F0ZWdvcnldKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpbml0aWFsaXplIHRoZSBjb3VudCB0byAxXHJcbiAgICAgICAgY2F0ZWdvcnlDb3VudHNbY2F0ZWdvcnldID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gSW5jcmVtZW50IHRvdGFsIGNvdW50XHJcbiAgICAgIHRvdGFsQ291bnQrKztcclxuICAgIH0pO1xyXG5cclxuICAvLyBDb252ZXJ0IHRoZSBjYXRlZ29yeUNvdW50cyBvYmplY3QgdG8gYW4gYXJyYXkgb2Ygb2JqZWN0c1xyXG4gIGNvbnN0IGFnZ3JlZ2F0ZWRDYXRlZ29yaWVzOiBDYXRlZ29yeUNvdW50W10gPSBPYmplY3Qua2V5cyhjYXRlZ29yeUNvdW50cykubWFwKFxyXG4gICAgKGNhdGVnb3J5KSA9PiAoe1xyXG4gICAgICBuYW1lOiBjYXRlZ29yeSxcclxuICAgICAgY291bnQ6IGNhdGVnb3J5Q291bnRzW2NhdGVnb3J5XSxcclxuICAgICAgdG90YWxDb3VudCxcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgLy8gU29ydCB0aGUgYWdncmVnYXRlZENhdGVnb3JpZXMgYXJyYXkgYnkgY291bnQgaW4gZGVzY2VuZGluZyBvcmRlclxyXG4gIGFnZ3JlZ2F0ZWRDYXRlZ29yaWVzLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KTtcclxuXHJcbiAgcmV0dXJuIGFnZ3JlZ2F0ZWRDYXRlZ29yaWVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEN1c3RvbWVySWRGcm9tVXJsKHVybDogc3RyaW5nKSB7XHJcbiAgLy8gU3BsaXQgdGhlIFVSTCBzdHJpbmcgYnkgJy8nXHJcbiAgY29uc3QgcGFydHMgPSB1cmwuc3BsaXQoXCIvXCIpO1xyXG5cclxuICAvLyBFeHRyYWN0IHRoZSBsYXN0IHBhcnQsIHdoaWNoIHJlcHJlc2VudHMgdGhlIGN1c3RvbWVyIElEXHJcbiAgY29uc3QgY3VzdG9tZXJJZCA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xyXG5cclxuICByZXR1cm4gY3VzdG9tZXJJZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuY3J5cHRJZChpZDogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGJ0b2EoaWQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVjcnlwdElkKGlkOiBzdHJpbmcpIHtcclxuICByZXR1cm4gYXRvYihpZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUcmFuc2FjdGlvblN0YXR1cyA9IChkYXRlOiBEYXRlKSA9PiB7XHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHR3b0RheXNBZ28gPSBuZXcgRGF0ZSh0b2RheSk7XHJcbiAgdHdvRGF5c0Fnby5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAtIDIpO1xyXG5cclxuICByZXR1cm4gZGF0ZSA+IHR3b0RheXNBZ28gPyBcIlByb2Nlc3NpbmdcIiA6IFwiU3VjY2Vzc1wiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcclxufSlcclxuIl0sIm5hbWVzIjpbImNsc3giLCJxcyIsInR3TWVyZ2UiLCJjbiIsImlucHV0cyIsImZvcm1hdERhdGVUaW1lIiwiZGF0ZVN0cmluZyIsImRhdGVUaW1lT3B0aW9ucyIsIndlZWtkYXkiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJkYXRlRGF5T3B0aW9ucyIsInllYXIiLCJkYXRlT3B0aW9ucyIsInRpbWVPcHRpb25zIiwiZm9ybWF0dGVkRGF0ZVRpbWUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJmb3JtYXR0ZWREYXRlRGF5IiwiZm9ybWF0dGVkRGF0ZSIsImZvcm1hdHRlZFRpbWUiLCJkYXRlVGltZSIsImRhdGVEYXkiLCJkYXRlT25seSIsInRpbWVPbmx5IiwiZm9ybWF0QW1vdW50IiwiYW1vdW50IiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXQiLCJwYXJzZVN0cmluZ2lmeSIsInZhbHVlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMiLCJyZXBsYWNlIiwiZm9ybVVybFF1ZXJ5IiwicGFyYW1zIiwia2V5IiwiY3VycmVudFVybCIsInN0cmluZ2lmeVVybCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJxdWVyeSIsInNraXBOdWxsIiwiZ2V0QWNjb3VudFR5cGVDb2xvcnMiLCJ0eXBlIiwiYmciLCJsaWdodEJnIiwidGl0bGUiLCJzdWJUZXh0IiwiY291bnRUcmFuc2FjdGlvbkNhdGVnb3JpZXMiLCJ0cmFuc2FjdGlvbnMiLCJjYXRlZ29yeUNvdW50cyIsInRvdGFsQ291bnQiLCJmb3JFYWNoIiwidHJhbnNhY3Rpb24iLCJjYXRlZ29yeSIsImhhc093blByb3BlcnR5IiwiYWdncmVnYXRlZENhdGVnb3JpZXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibmFtZSIsImNvdW50Iiwic29ydCIsImEiLCJiIiwiZXh0cmFjdEN1c3RvbWVySWRGcm9tVXJsIiwicGFydHMiLCJzcGxpdCIsImN1c3RvbWVySWQiLCJsZW5ndGgiLCJlbmNyeXB0SWQiLCJpZCIsImJ0b2EiLCJkZWNyeXB0SWQiLCJhdG9iIiwiZ2V0VHJhbnNhY3Rpb25TdGF0dXMiLCJkYXRlIiwidG9kYXkiLCJ0d29EYXlzQWdvIiwic2V0RGF0ZSIsImdldERhdGUiLCJmb3JtU2NoZW1hIiwieiIsIm9iamVjdCIsImVtYWlsIiwic3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/utils.ts\n"));

/***/ })

});