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
            children: status
          }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdEVuZHBvaW50IiwiSG9tZVBhZ2UiLCJkYXRhIiwiaW5mbyIsInJlc3VsdHMiLCJkZWZhdWx0UmVzdWx0cyIsInVzZVN0YXRlIiwiY3VycmVudCIsIm5leHQiLCJwYWdlIiwidXBkYXRlUGFnZSIsInByZXYiLCJ1cGRhdGVSZXN1bHRzIiwidXNlRWZmZWN0IiwicmVxdWVzdCIsImZldGNoIiwicmVzIiwianNvbiIsIm5leHREYXRhIiwibmV4dEluZm8iLCJuZXh0UmVzdWx0cyIsImhhbmRsZUxvYWRNb3JlIiwic3R5bGVzIiwiQm9keXBhZ2UiLCJjb250YWluZXIiLCJtYXAiLCJyZXN1bHQiLCJpZCIsIm5hbWUiLCJpbWFnZSIsInN0YXR1cyIsImNhcmQiLCJidG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGVBQWUsK0NBQXJCOztBQWtCQSxJQUFNQyxRQUFRLEdBQUUsU0FBVkEsUUFBVSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQUEsTUFDcEJDLElBRG9CLEdBQ21CRCxJQURuQixDQUNwQkMsSUFEb0I7QUFBQSxzQkFDbUJELElBRG5CLENBQ2RFLE9BRGM7QUFBQSxNQUNMQyxjQURLLDhCQUNZLEVBRFo7O0FBQUEsa0JBR0RDLHNEQUFRLENBQUM7QUFDbENDLFdBQU8sRUFBRVAsZUFEeUI7QUFFbENRLFFBQUksRUFBRUwsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVLO0FBRnNCLEdBQUQsQ0FIUDtBQUFBLE1BR3JCQyxJQUhxQjtBQUFBLE1BR2ZDLFVBSGU7O0FBQUEsTUFPcEJILE9BUG9CLEdBT0ZFLElBUEUsQ0FPcEJGLE9BUG9CO0FBQUEsTUFPWEksSUFQVyxHQU9GRixJQVBFLENBT1hFLElBUFc7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RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MDdiNTE4YTY1N2VjYTg0NjQyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5mbyB9IGZyb20gJ2F1dG9wcmVmaXhlcidcclxuaW1wb3J0IHtSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCdXR0b25GbG9hdCBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbkZsb2F0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnXHJcbmNvbnN0IGRlZmF1bHRFbmRwb2ludCA9IGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9gO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChkZWZhdWx0RW5kcG9pbnQpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIFxyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgZGF0YVxyXG4gICAgICB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICAgIH1cclxuICB9XHJcbmNvbnN0IEhvbWVQYWdlPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCB7IGluZm8sIHJlc3VsdHM6IGRlZmF1bHRSZXN1bHRzID0gW10gfSA9IGRhdGE7XHJcblxyXG4gIGNvbnN0IFtwYWdlLCB1cGRhdGVQYWdlXSA9IHVzZVN0YXRlKHtcclxuICAgIGN1cnJlbnQ6IGRlZmF1bHRFbmRwb2ludCxcclxuICAgIG5leHQ6IGluZm8/Lm5leHRcclxuICB9KTtcclxuICBjb25zdCB7IGN1cnJlbnQsIHByZXYgfSA9IHBhZ2U7XHJcblxyXG4gIGNvbnN0IFtyZXN1bHRzLCB1cGRhdGVSZXN1bHRzXSA9IHVzZVN0YXRlKGRlZmF1bHRSZXN1bHRzKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICggY3VycmVudCA9PT0gZGVmYXVsdEVuZHBvaW50ICkgcmV0dXJuO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3QoKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGN1cnJlbnQpXHJcbiAgICAgIGNvbnN0IG5leHREYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc3QgeyBpbmZvOiBuZXh0SW5mbywgcmVzdWx0czogbmV4dFJlc3VsdHMgPSBbXSB9ID0gbmV4dERhdGE7XHJcblxyXG4gICAgICB1cGRhdGVQYWdlKHByZXYgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgLi4ubmV4dEluZm9cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCAhbmV4dEluZm8/LnByZXYgKSB7XHJcbiAgICAgICAgdXBkYXRlUmVzdWx0cyhuZXh0UmVzdWx0cyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1cGRhdGVSZXN1bHRzKHByZXYgPT4ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgLi4ubmV4dFJlc3VsdHNcclxuICAgICAgICBdXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdCgpO1xyXG4gIH0sIFtjdXJyZW50XSlcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlTG9hZE1vcmUoKSB7XHJcbiAgICB1cGRhdGVQYWdlKHByZXYgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgY3VycmVudDogcGFnZT8ubmV4dFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQm9keXBhZ2V9ID5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7cmVzdWx0cy5tYXAocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2lkLCBuYW1lLCBpbWFnZSwgc3RhdHVzLH0gPSByZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleSA9e2lkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXtgJHtuYW1lfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e25hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdGF0dXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uRmxvYXQ+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG59IG9uQ2xpY2s9e2hhbmRsZUxvYWRNb3JlfSA+TG9hZCBNb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uRmxvYXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9