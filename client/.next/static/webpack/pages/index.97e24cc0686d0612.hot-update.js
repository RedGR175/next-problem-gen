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

/***/ "./components/problem-gen.js":
/*!***********************************!*\
  !*** ./components/problem-gen.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProblemGenerator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ProblemGenerator() {\n    _s();\n    const [difficulty, setDifficulty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"default\");\n    const [isStoryProb, setIsStoryProb] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"default\");\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Output...\");\n    const handleDifficultyClick = (id)=>{\n        setDifficulty(id);\n    };\n    const handleStoryProbClick = (id)=>{\n        setIsStoryProb(id);\n    };\n    const handleInputChange = (event)=>{\n        setUserInput(event.target.value);\n    };\n    const getValues = ()=>{\n        let promptData = userInput;\n        promptData += \" || Difficulty: \".concat(difficulty, \" || Story Problem: \").concat(isStoryProb);\n        return promptData;\n    };\n    const submit = async ()=>{\n        setOutput(\"Generating...\");\n        const promptData = getValues();\n        const response = await fetch(\"/serverhttp:localhost:4000/ask\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                promptData\n            })\n        });\n        if (!response.ok) {\n            setOutput(\"Request failed with status: \".concat(response.status));\n            return;\n        }\n        const data = await response.json();\n        setOutput(data.answer);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"problem-generator\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"input-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"option-box\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"input-box\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"description\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Prompt Input\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"text-input-container\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        placeholder: \"Ex. Adding fractions\",\n                                        name: \"user-input\",\n                                        id: \"user-input\",\n                                        maxLength: \"100\",\n                                        value: userInput,\n                                        onChange: handleInputChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"separator\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"description\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Difficulty\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"selector-container difficulty\",\n                            children: [\n                                \"Easy\",\n                                \"Medium\",\n                                \"Hard\"\n                            ].map((level)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"selector-button \".concat(difficulty === level ? \"selected\" : \"\"),\n                                    onClick: ()=>handleDifficultyClick(level),\n                                    children: level\n                                }, level, false, {\n                                    fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"separator\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"description\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Story Problem?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"selector-container story-problem\",\n                            children: [\n                                \"Yes\",\n                                \"No\"\n                            ].map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"selector-button \".concat(isStoryProb === option ? \"selected\" : \"\"),\n                                    onClick: ()=>handleStoryProbClick(option),\n                                    children: option\n                                }, option, false, {\n                                    fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"separator\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: submit,\n                            id: \"submit-button\",\n                            children: \"Generate\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"output-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    id: \"output\",\n                    children: output\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mailz\\\\Desktop\\\\Snorkl\\\\Nextjs\\\\client\\\\components\\\\problem-gen.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(ProblemGenerator, \"H8EtRj+KqVqmEWm9aiz0I7SDtSw=\");\n_c = ProblemGenerator;\nvar _c;\n$RefreshReg$(_c, \"ProblemGenerator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNOLDRFQUFDdUI7b0JBQUV2QixJQUFHOzhCQUFVSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEI7R0FoSHdCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2JsZW0tZ2VuLmpzPzFkYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2JsZW1HZW5lcmF0b3IoKSB7XHJcbiAgY29uc3QgW2RpZmZpY3VsdHksIHNldERpZmZpY3VsdHldID0gdXNlU3RhdGUoJ2RlZmF1bHQnKTtcclxuICBjb25zdCBbaXNTdG9yeVByb2IsIHNldElzU3RvcnlQcm9iXSA9IHVzZVN0YXRlKCdkZWZhdWx0Jyk7XHJcbiAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbb3V0cHV0LCBzZXRPdXRwdXRdID0gdXNlU3RhdGUoJ091dHB1dC4uLicpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEaWZmaWN1bHR5Q2xpY2sgPSAoaWQpID0+IHtcclxuICAgIHNldERpZmZpY3VsdHkoaWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN0b3J5UHJvYkNsaWNrID0gKGlkKSA9PiB7XHJcbiAgICBzZXRJc1N0b3J5UHJvYihpZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFVzZXJJbnB1dChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFZhbHVlcyA9ICgpID0+IHtcclxuICAgIGxldCBwcm9tcHREYXRhID0gdXNlcklucHV0O1xyXG4gICAgcHJvbXB0RGF0YSArPSBgIHx8IERpZmZpY3VsdHk6ICR7ZGlmZmljdWx0eX0gfHwgU3RvcnkgUHJvYmxlbTogJHtpc1N0b3J5UHJvYn1gO1xyXG4gICAgcmV0dXJuIHByb21wdERhdGE7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0T3V0cHV0KCdHZW5lcmF0aW5nLi4uJyk7XHJcbiAgICBjb25zdCBwcm9tcHREYXRhID0gZ2V0VmFsdWVzKCk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL3NlcnZlcmh0dHA6bG9jYWxob3N0OjQwMDAvYXNrJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJvbXB0RGF0YSB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgc2V0T3V0cHV0KGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgc2V0T3V0cHV0KGRhdGEuYW5zd2VyKTtcclxuICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJwcm9ibGVtLWdlbmVyYXRvclwiPlxyXG4gICAgICA8ZGl2IGlkPVwiaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24tYm94XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHA+UHJvbXB0IElucHV0PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInRleHQtaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4LiBBZGRpbmcgZnJhY3Rpb25zXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwidXNlci1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJJbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgPHA+RGlmZmljdWx0eTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rvci1jb250YWluZXIgZGlmZmljdWx0eVwiPlxyXG4gICAgICAgICAgICB7WydFYXN5JywgJ01lZGl1bScsICdIYXJkJ10ubWFwKChsZXZlbCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGtleT17bGV2ZWx9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzZWxlY3Rvci1idXR0b24gJHtkaWZmaWN1bHR5ID09PSBsZXZlbCA/ICdzZWxlY3RlZCcgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGlmZmljdWx0eUNsaWNrKGxldmVsKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGV2ZWx9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIDxwPlN0b3J5IFByb2JsZW0/PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdG9yLWNvbnRhaW5lciBzdG9yeS1wcm9ibGVtXCI+XHJcbiAgICAgICAgICAgIHtbJ1llcycsICdObyddLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXtvcHRpb259XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzZWxlY3Rvci1idXR0b24gJHtpc1N0b3J5UHJvYiA9PT0gb3B0aW9uID8gJ3NlbGVjdGVkJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdG9yeVByb2JDbGljayhvcHRpb24pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0gaWQ9XCJzdWJtaXQtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIEdlbmVyYXRlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJvdXRwdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHAgaWQ9XCJvdXRwdXRcIj57b3V0cHV0fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2JsZW1HZW5lcmF0b3IiLCJkaWZmaWN1bHR5Iiwic2V0RGlmZmljdWx0eSIsImlzU3RvcnlQcm9iIiwic2V0SXNTdG9yeVByb2IiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJoYW5kbGVEaWZmaWN1bHR5Q2xpY2siLCJpZCIsImhhbmRsZVN0b3J5UHJvYkNsaWNrIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZ2V0VmFsdWVzIiwicHJvbXB0RGF0YSIsInN1Ym1pdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInN0YXR1cyIsImRhdGEiLCJqc29uIiwiYW5zd2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwibWF4TGVuZ3RoIiwib25DaGFuZ2UiLCJtYXAiLCJsZXZlbCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/problem-gen.js\n"));

/***/ })

});