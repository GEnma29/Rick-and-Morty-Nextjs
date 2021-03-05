webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_PC1_Nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_PC1_Nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_PC1_Nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_PC1_Nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_PC1_Nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_PC1_Nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! autoprefixer */ "./node_modules/autoprefixer/lib/autoprefixer.js");
/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(autoprefixer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ButtonFloat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ButtonFloat */ "./components/ButtonFloat.jsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.jsx");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "C:\\Users\\PC1\\Nextjs\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_PC1_Nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var defaultEndpoint = "https://rickandmortyapi.com/api/character/";

var HomePage = function HomePage(_ref) {
  _s();

  var data = _ref.data;
  var info = data.info,
      _data$results = data.results,
      defaultResults = _data$results === void 0 ? [] : _data$results;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    current: defaultEndpoint,
    next: info === null || info === void 0 ? void 0 : info.next
  }),
      page = _useState[0],
      updatePage = _useState[1];

  var current = page.current,
      prev = page.prev;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(defaultResults),
      results = _useState2[0],
      updateResults = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (current === defaultEndpoint) return;

    function request() {
      return _request.apply(this, arguments);
    }

    function _request() {
      _request = Object(C_Users_PC1_Nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_Users_PC1_Nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var res, nextData, nextInfo, _nextData$results, nextResults;

        return C_Users_PC1_Nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(current);

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                nextData = _context.sent;
                nextInfo = nextData.info, _nextData$results = nextData.results, nextResults = _nextData$results === void 0 ? [] : _nextData$results;
                updatePage(function (prev) {
                  return _objectSpread(_objectSpread({}, prev), nextInfo);
                });

                if (nextInfo !== null && nextInfo !== void 0 && nextInfo.prev) {
                  _context.next = 11;
                  break;
                }

                updateResults(nextResults);
                return _context.abrupt("return");

              case 11:
                updateResults(function (prev) {
                  return [].concat(Object(C_Users_PC1_Nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prev), Object(C_Users_PC1_Nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(nextResults));
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _request.apply(this, arguments);
    }

    request();
  }, [current]);

  function handleLoadMore() {
    updatePage(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        current: page === null || page === void 0 ? void 0 : page.next
      });
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.Bodypage,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.container,
      children: results.map(function (result) {
        var id = result.id,
            name = result.name,
            image = result.image,
            status = result.status;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: _index_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: image,
            alt: "".concat(name)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [" Status:", status]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 29
          }, _this)]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 27
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ButtonFloat__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
        onClick: handleLoadMore,
        children: "Load More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }, _this);
};

_s(HomePage, "S2L9elflvZKm2XSxtlwJHVsEpTM=");

_c = HomePage;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdEVuZHBvaW50IiwiSG9tZVBhZ2UiLCJkYXRhIiwiaW5mbyIsInJlc3VsdHMiLCJkZWZhdWx0UmVzdWx0cyIsInVzZVN0YXRlIiwiY3VycmVudCIsIm5leHQiLCJwYWdlIiwidXBkYXRlUGFnZSIsInByZXYiLCJ1cGRhdGVSZXN1bHRzIiwidXNlRWZmZWN0IiwicmVxdWVzdCIsImZldGNoIiwicmVzIiwianNvbiIsIm5leHREYXRhIiwibmV4dEluZm8iLCJuZXh0UmVzdWx0cyIsImhhbmRsZUxvYWRNb3JlIiwic3R5bGVzIiwiQm9keXBhZ2UiLCJjb250YWluZXIiLCJtYXAiLCJyZXN1bHQiLCJpZCIsIm5hbWUiLCJpbWFnZSIsInN0YXR1cyIsImNhcmQiLCJidG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGVBQWUsK0NBQXJCOztBQWtCQSxJQUFNQyxRQUFRLEdBQUUsU0FBVkEsUUFBVSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQUEsTUFDcEJDLElBRG9CLEdBQ21CRCxJQURuQixDQUNwQkMsSUFEb0I7QUFBQSxzQkFDbUJELElBRG5CLENBQ2RFLE9BRGM7QUFBQSxNQUNMQyxjQURLLDhCQUNZLEVBRFo7O0FBQUEsa0JBR0RDLHNEQUFRLENBQUM7QUFDbENDLFdBQU8sRUFBRVAsZUFEeUI7QUFFbENRLFFBQUksRUFBRUwsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVLO0FBRnNCLEdBQUQsQ0FIUDtBQUFBLE1BR3JCQyxJQUhxQjtBQUFBLE1BR2ZDLFVBSGU7O0FBQUEsTUFPcEJILE9BUG9CLEdBT0ZFLElBUEUsQ0FPcEJGLE9BUG9CO0FBQUEsTUFPWEksSUFQVyxHQU9GRixJQVBFLENBT1hFLElBUFc7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RVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjViODczNDQxZGY3MDk3Y2UwMDM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmZvIH0gZnJvbSAnYXV0b3ByZWZpeGVyJ1xyXG5pbXBvcnQge1JlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJ1dHRvbkZsb2F0IGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uRmxvYXQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcclxuY29uc3QgZGVmYXVsdEVuZHBvaW50ID0gYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2A7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRlZmF1bHRFbmRwb2ludClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgXHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBkYXRhXHJcbiAgICAgIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gICAgfVxyXG4gIH1cclxuY29uc3QgSG9tZVBhZ2U9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHsgaW5mbywgcmVzdWx0czogZGVmYXVsdFJlc3VsdHMgPSBbXSB9ID0gZGF0YTtcclxuXHJcbiAgY29uc3QgW3BhZ2UsIHVwZGF0ZVBhZ2VdID0gdXNlU3RhdGUoe1xyXG4gICAgY3VycmVudDogZGVmYXVsdEVuZHBvaW50LFxyXG4gICAgbmV4dDogaW5mbz8ubmV4dFxyXG4gIH0pO1xyXG4gIGNvbnN0IHsgY3VycmVudCwgcHJldiB9ID0gcGFnZTtcclxuXHJcbiAgY29uc3QgW3Jlc3VsdHMsIHVwZGF0ZVJlc3VsdHNdID0gdXNlU3RhdGUoZGVmYXVsdFJlc3VsdHMpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCBjdXJyZW50ID09PSBkZWZhdWx0RW5kcG9pbnQgKSByZXR1cm47XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdCgpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goY3VycmVudClcclxuICAgICAgY29uc3QgbmV4dERhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBjb25zdCB7IGluZm86IG5leHRJbmZvLCByZXN1bHRzOiBuZXh0UmVzdWx0cyA9IFtdIH0gPSBuZXh0RGF0YTtcclxuXHJcbiAgICAgIHVwZGF0ZVBhZ2UocHJldiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAuLi5uZXh0SW5mb1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoICFuZXh0SW5mbz8ucHJldiApIHtcclxuICAgICAgICB1cGRhdGVSZXN1bHRzKG5leHRSZXN1bHRzKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVwZGF0ZVJlc3VsdHMocHJldiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAuLi5uZXh0UmVzdWx0c1xyXG4gICAgICAgIF1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0KCk7XHJcbiAgfSwgW2N1cnJlbnRdKVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVMb2FkTW9yZSgpIHtcclxuICAgIHVwZGF0ZVBhZ2UocHJldiA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJldixcclxuICAgICAgICBjdXJyZW50OiBwYWdlPy5uZXh0XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Cb2R5cGFnZX0gPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHtyZXN1bHRzLm1hcChyZXN1bHQ9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7aWQsIG5hbWUsIGltYWdlLCBzdGF0dXMsfSA9IHJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5ID17aWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e2Ake25hbWV9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57bmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IFN0YXR1czp7c3RhdHVzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEJ1dHRvbkZsb2F0PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRufSBvbkNsaWNrPXtoYW5kbGVMb2FkTW9yZX0gPkxvYWQgTW9yZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0J1dHRvbkZsb2F0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==