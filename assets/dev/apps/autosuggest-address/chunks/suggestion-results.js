(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps/autosuggest-address/chunks/suggestion-results"],{

/***/ "./src/apps/autosuggest-address/components/SuggestionResults.js":
/*!**********************************************************************!*\
  !*** ./src/apps/autosuggest-address/components/SuggestionResults.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ErrorBoundary */ "./src/components/ErrorBoundary.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style.scss */ "./src/apps/autosuggest-address/style.scss");
/* harmony import */ var _components_LoadingBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/LoadingBar */ "./src/components/LoadingBar.js");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Author: postcodex
 * Date: 10/6/20
 * Time: 2:14 PM
 */





var SuggestionItem = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["lazy"])(function () {
  return __webpack_require__.e(/*! import() | apps/autosuggest-address/chunks/suggestion-item */ "apps/autosuggest-address/chunks/suggestion-item").then(__webpack_require__.bind(null, /*! ../components/SuggestionItem */ "./src/apps/autosuggest-address/components/SuggestionItem.js"));
});

var SuggestionResults = function SuggestionResults(props) {
  var addresses = props.addresses,
      onClick = props.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "search-results-container ".concat(_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].searchResultsContainer)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "results-heading ".concat(_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].resultsHeading)
  }, "Found ", addresses.length, " matches:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_LoadingBar__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }, addresses.map(function (address) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SuggestionItem, {
      key: address.hash,
      onClick: onClick,
      address: address
    });
  }))));
};

SuggestionResults.propTypes = {
  addresses: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
SuggestionResults.defaultProps = {
  addresses: [],
  onClick: function onClick(e) {
    alert('onClick() handler not implemented!');
  }
};
var _default = SuggestionResults;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SuggestionItem, "SuggestionItem", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/components/SuggestionResults.js");
  reactHotLoader.register(SuggestionResults, "SuggestionResults", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/components/SuggestionResults.js");
  reactHotLoader.register(_default, "default", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/components/SuggestionResults.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ErrorBoundary.js":
/*!*****************************************!*\
  !*** ./src/components/ErrorBoundary.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);









(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Author: postcodex
 * Date: 5/24/20
 * Time: 8:55 PM
 */


var ErrorBoundary = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ErrorBoundary, _Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      error: null,
      errorInfo: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.error) {
        // Error path
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
          style: {
            color: "red"
          }
        }, "Something went wrong."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("details", {
          style: {
            whiteSpace: 'pre-wrap'
          }
        }, this.state.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          style: {
            color: "red"
          }
        }, this.state.error.toString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("em", null, this.state.errorInfo.componentStack)));
      }

      return this.props.children;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

ErrorBoundary.propTypes = {};
ErrorBoundary.defaultProps = {};
var _default = ErrorBoundary;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorBoundary, "ErrorBoundary", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/components/ErrorBoundary.js");
  reactHotLoader.register(_default, "default", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/components/ErrorBoundary.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

},0,["apps/autosuggest-address/chunks/suggestion-item"]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwcy9hdXRvc3VnZ2VzdC1hZGRyZXNzL2NvbXBvbmVudHMvU3VnZ2VzdGlvblJlc3VsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS5qcyJdLCJuYW1lcyI6WyJTdWdnZXN0aW9uSXRlbSIsImxhenkiLCJTdWdnZXN0aW9uUmVzdWx0cyIsInByb3BzIiwiYWRkcmVzc2VzIiwib25DbGljayIsInN0eWxlIiwic2VhcmNoUmVzdWx0c0NvbnRhaW5lciIsInJlc3VsdHNIZWFkaW5nIiwibGVuZ3RoIiwibWFwIiwiYWRkcmVzcyIsImhhc2giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJlIiwiYWxlcnQiLCJFcnJvckJvdW5kYXJ5Iiwic3RhdGUiLCJlcnJvciIsImVycm9ySW5mbyIsInNldFN0YXRlIiwiY29sb3IiLCJ3aGl0ZVNwYWNlIiwidG9TdHJpbmciLCJjb21wb25lbnRTdGFjayIsImNoaWxkcmVuIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsZ0JBQUdDLGtEQUFJLENBQUU7QUFBQSxTQUFNLGtSQUFOO0FBQUEsQ0FBRixDQUEzQjs7QUFRQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUVDLEtBQUYsRUFBYTtBQUFBLE1BQzlCQyxTQUQ4QixHQUNQRCxLQURPLENBQzlCQyxTQUQ4QjtBQUFBLE1BQ25CQyxPQURtQixHQUNQRixLQURPLENBQ25CRSxPQURtQjtBQUd0QyxzQkFDQywyREFBQyxpRUFBRCxxQkFDQztBQUFLLGFBQVMscUNBQWdDQyxtREFBSyxDQUFDQyxzQkFBdEM7QUFBZCxrQkFDQztBQUFHLGFBQVMsNEJBQXNCRCxtREFBSyxDQUFDRSxjQUE1QjtBQUFaLGVBQW1FSixTQUFTLENBQUNLLE1BQTdFLGNBREQsZUFFQywyREFBQyw4Q0FBRDtBQUFVLFlBQVEsZUFBRywyREFBQyw4REFBRDtBQUFyQixLQUNHTCxTQUFTLENBQUNNLEdBQVYsQ0FBZSxVQUFBQyxPQUFPLEVBQUk7QUFFM0Isd0JBQ0MsMkRBQUMsY0FBRDtBQUFnQixTQUFHLEVBQUdBLE9BQU8sQ0FBQ0MsSUFBOUI7QUFBcUMsYUFBTyxFQUFHUCxPQUEvQztBQUF5RCxhQUFPLEVBQUdNO0FBQW5FLE1BREQ7QUFHQSxHQUxDLENBREgsQ0FGRCxDQURELENBREQ7QUFlQSxDQWxCRDs7QUFvQkFULGlCQUFpQixDQUFDVyxTQUFsQixHQUE4QjtBQUM3QlQsV0FBUyxFQUFHVSxpREFBUyxDQUFDQyxLQURPO0FBRTdCVixTQUFPLEVBQUtTLGlEQUFTLENBQUNFO0FBRk8sQ0FBOUI7QUFLQWQsaUJBQWlCLENBQUNlLFlBQWxCLEdBQWlDO0FBQ2hDYixXQUFTLEVBQUcsRUFEb0I7QUFFaENDLFNBQU8sRUFBSyxpQkFBRWEsQ0FBRixFQUFTO0FBQUVDLFNBQUssQ0FBRSxvQ0FBRixDQUFMO0FBQWdEO0FBRnZDLENBQWpDO2VBS2VqQixpQjtBQUFBOzs7Ozs7Ozs7OzBCQXRDVEYsYzswQkFRQUUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CTjs7Ozs7QUFLQTs7SUFFTWtCLGE7Ozs7O0FBQ0wseUJBQWFqQixLQUFiLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ3BCLDhCQUFPQSxLQUFQO0FBRUEsVUFBS2tCLEtBQUwsR0FBYTtBQUNaQyxXQUFLLEVBQU8sSUFEQTtBQUVaQyxlQUFTLEVBQUc7QUFGQSxLQUFiO0FBSG9CO0FBT3BCOzs7O3NDQUVrQkQsSyxFQUFPQyxTLEVBQVk7QUFDckMsV0FBS0MsUUFBTCxDQUFlO0FBQ2RGLGFBQUssRUFBTEEsS0FEYztBQUVkQyxpQkFBUyxFQUFUQTtBQUZjLE9BQWY7QUFJQTs7OzZCQUVRO0FBQ1IsVUFBSyxLQUFLRixLQUFMLENBQVdDLEtBQWhCLEVBQXdCO0FBQ3ZCO0FBQ0EsNEJBQ0MscUZBQ0M7QUFBSSxlQUFLLEVBQUc7QUFBRUcsaUJBQUs7QUFBUDtBQUFaLG1DQURELGVBRUM7QUFBUyxlQUFLLEVBQUc7QUFBRUMsc0JBQVUsRUFBRztBQUFmO0FBQWpCLFdBQ0csS0FBS0wsS0FBTCxDQUFXQyxLQUFYLGlCQUFvQjtBQUFHLGVBQUssRUFBRztBQUFFRyxpQkFBSztBQUFQO0FBQVgsV0FBaUMsS0FBS0osS0FBTCxDQUFXQyxLQUFYLENBQWlCSyxRQUFqQixFQUFqQyxDQUR2QixlQUVDLHVFQUFNLEtBQUtOLEtBQUwsQ0FBV0UsU0FBWCxDQUFxQkssY0FBM0IsQ0FGRCxDQUZELENBREQ7QUFTQTs7QUFFRCxhQUFPLEtBQUt6QixLQUFMLENBQVcwQixRQUFsQjtBQUNBOzs7Ozs7Ozs7OztFQWhDMEJDLCtDOztBQW1DNUJWLGFBQWEsQ0FBQ1AsU0FBZCxHQUEwQixFQUExQjtBQUVBTyxhQUFhLENBQUNILFlBQWQsR0FBNkIsRUFBN0I7ZUFFZUcsYTtBQUFBOzs7Ozs7Ozs7OzBCQXZDVEEsYSIsImZpbGUiOiJhcHBzL2F1dG9zdWdnZXN0LWFkZHJlc3MvY2h1bmtzL3N1Z2dlc3Rpb24tcmVzdWx0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXV0aG9yOiBwb3N0Y29kZXhcbiAqIERhdGU6IDEwLzYvMjBcbiAqIFRpbWU6IDI6MTQgUE1cbiAqL1xuaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlLCBsYXp5IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeSc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xvYWRpbmdCYXInO1xuXG5jb25zdCBTdWdnZXN0aW9uSXRlbSA9IGxhenkoICgpID0+IGltcG9ydChcblx0Lyogd2VicGFja0NodW5rTmFtZTogXCJhcHBzL2F1dG9zdWdnZXN0LWFkZHJlc3MvY2h1bmtzL3N1Z2dlc3Rpb24taXRlbVwiICovXG5cdC8qIHdlYnBhY2tNb2RlOiBcImxhenlcIiAqL1xuXHQvKiB3ZWJwYWNrUHJlZmV0Y2g6IHRydWUgKi9cblx0Jy4uL2NvbXBvbmVudHMvU3VnZ2VzdGlvbkl0ZW0nXG5cdClcbik7XG5cbmNvbnN0IFN1Z2dlc3Rpb25SZXN1bHRzID0gKCBwcm9wcyApID0+IHtcblx0Y29uc3QgeyBhZGRyZXNzZXMsIG9uQ2xpY2sgfSA9IHByb3BzO1xuXG5cdHJldHVybiAoXG5cdFx0PEVycm9yQm91bmRhcnk+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGBzZWFyY2gtcmVzdWx0cy1jb250YWluZXIgJHsgc3R5bGUuc2VhcmNoUmVzdWx0c0NvbnRhaW5lciB9YCB9PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9eyBgcmVzdWx0cy1oZWFkaW5nICR7c3R5bGUucmVzdWx0c0hlYWRpbmd9YCB9PkZvdW5kIHsgYWRkcmVzc2VzLmxlbmd0aCB9IG1hdGNoZXM6PC9wPlxuXHRcdFx0XHQ8U3VzcGVuc2UgZmFsbGJhY2s9eyA8TG9hZGluZ0JhciAvPiB9PlxuXHRcdFx0XHRcdHsgYWRkcmVzc2VzLm1hcCggYWRkcmVzcyA9PiB7XG5cblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxTdWdnZXN0aW9uSXRlbSBrZXk9eyBhZGRyZXNzLmhhc2ggfSBvbkNsaWNrPXsgb25DbGljayB9IGFkZHJlc3M9eyBhZGRyZXNzIH0gLz5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0PC9TdXNwZW5zZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvRXJyb3JCb3VuZGFyeT5cblx0KTtcbn07XG5cblN1Z2dlc3Rpb25SZXN1bHRzLnByb3BUeXBlcyA9IHtcblx0YWRkcmVzc2VzIDogUHJvcFR5cGVzLmFycmF5LFxuXHRvbkNsaWNrICAgOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cblN1Z2dlc3Rpb25SZXN1bHRzLmRlZmF1bHRQcm9wcyA9IHtcblx0YWRkcmVzc2VzIDogW10sXG5cdG9uQ2xpY2sgICA6ICggZSApID0+IHsgYWxlcnQoICdvbkNsaWNrKCkgaGFuZGxlciBub3QgaW1wbGVtZW50ZWQhJyApOyB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VnZ2VzdGlvblJlc3VsdHM7XG4iLCIvKipcbiAqIEF1dGhvcjogcG9zdGNvZGV4XG4gKiBEYXRlOiA1LzI0LzIwXG4gKiBUaW1lOiA4OjU1IFBNXG4gKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG5cdFx0c3VwZXIoIHByb3BzICk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZXJyb3IgICAgIDogbnVsbCxcblx0XHRcdGVycm9ySW5mbyA6IG51bGwsXG5cdFx0fTtcblx0fVxuXG5cdGNvbXBvbmVudERpZENhdGNoKCBlcnJvciwgZXJyb3JJbmZvICkge1xuXHRcdHRoaXMuc2V0U3RhdGUoIHtcblx0XHRcdGVycm9yLFxuXHRcdFx0ZXJyb3JJbmZvXG5cdFx0fSApO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGlmICggdGhpcy5zdGF0ZS5lcnJvciApIHtcblx0XHRcdC8vIEVycm9yIHBhdGhcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGgyIHN0eWxlPXsgeyBjb2xvciA6IGByZWRgIH0gfT5Tb21ldGhpbmcgd2VudCB3cm9uZy48L2gyPlxuXHRcdFx0XHRcdDxkZXRhaWxzIHN0eWxlPXsgeyB3aGl0ZVNwYWNlIDogJ3ByZS13cmFwJyB9IH0+XG5cdFx0XHRcdFx0XHR7IHRoaXMuc3RhdGUuZXJyb3IgJiYgPHAgc3R5bGU9eyB7IGNvbG9yIDogYHJlZGAgfSB9PnsgdGhpcy5zdGF0ZS5lcnJvci50b1N0cmluZygpIH08L3A+IH1cblx0XHRcdFx0XHRcdDxlbT57IHRoaXMuc3RhdGUuZXJyb3JJbmZvLmNvbXBvbmVudFN0YWNrIH08L2VtPlxuXHRcdFx0XHRcdDwvZGV0YWlscz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXHR9XG59XG5cbkVycm9yQm91bmRhcnkucHJvcFR5cGVzID0ge307XG5cbkVycm9yQm91bmRhcnkuZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnk7XG4iXSwic291cmNlUm9vdCI6IiJ9