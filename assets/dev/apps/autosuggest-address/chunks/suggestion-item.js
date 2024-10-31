(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps/autosuggest-address/chunks/suggestion-item"],{

/***/ "./src/apps/autosuggest-address/components/SuggestionItem.js":
/*!*******************************************************************!*\
  !*** ./src/apps/autosuggest-address/components/SuggestionItem.js ***!
  \*******************************************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ErrorBoundary */ "./src/components/ErrorBoundary.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../style.scss */ "./src/apps/autosuggest-address/style.scss");









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
 * Date: 10/6/20
 * Time: 5:33 PM
 */





var SuggestionItem = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SuggestionItem, _Component);

  var _super = _createSuper(SuggestionItem);

  function SuggestionItem(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, SuggestionItem);

    _this = _super.call(this, props);

    _this.onClick = function (e) {
      e.preventDefault();
      var address = _this.props.address;

      _this.props.onClick(address, e);
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(SuggestionItem, [{
    key: "render",
    value: function render() {
      var address = this.props.address;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "result-item ".concat(_style_scss__WEBPACK_IMPORTED_MODULE_11__["default"].resultItem),
        key: address.hash,
        onClick: this.onClick
      }, address.addressDescription));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SuggestionItem;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

SuggestionItem.propTypes = {
  address: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};
SuggestionItem.defaultProps = {
  onClick: function onClick(address, e) {
    alert('onCLick() handler for SuggestionItem component is not implemented!');
  }
};
var _default = SuggestionItem;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SuggestionItem, "SuggestionItem", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/components/SuggestionItem.js");
  reactHotLoader.register(_default, "default", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/components/SuggestionItem.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwcy9hdXRvc3VnZ2VzdC1hZGRyZXNzL2NvbXBvbmVudHMvU3VnZ2VzdGlvbkl0ZW0uanMiXSwibmFtZXMiOlsiU3VnZ2VzdGlvbkl0ZW0iLCJwcm9wcyIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRyZXNzIiwic3R5bGUiLCJyZXN1bHRJdGVtIiwiaGFzaCIsImFkZHJlc3NEZXNjcmlwdGlvbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsYzs7Ozs7QUFDTCwwQkFBYUMsS0FBYixFQUFxQjtBQUFBOztBQUFBOztBQUNwQiw4QkFBT0EsS0FBUDs7QUFEb0IsVUFJckJDLE9BSnFCLEdBSVgsVUFBRUMsQ0FBRixFQUFTO0FBQ2xCQSxPQUFDLENBQUNDLGNBQUY7QUFEa0IsVUFFVkMsT0FGVSxHQUVFLE1BQUtKLEtBRlAsQ0FFVkksT0FGVTs7QUFJbEIsWUFBS0osS0FBTCxDQUFXQyxPQUFYLENBQW9CRyxPQUFwQixFQUE2QkYsQ0FBN0I7QUFDQSxLQVRvQjs7QUFBQTtBQUVwQjs7Ozs2QkFTUTtBQUFBLFVBQ0FFLE9BREEsR0FDWSxLQUFLSixLQURqQixDQUNBSSxPQURBO0FBR1IsMEJBQ0MsMkRBQUMsa0VBQUQscUJBQ0M7QUFBSyxpQkFBUyx3QkFBbUJDLG9EQUFLLENBQUNDLFVBQXpCLENBQWQ7QUFBdUQsV0FBRyxFQUFHRixPQUFPLENBQUNHLElBQXJFO0FBQTRFLGVBQU8sRUFBRyxLQUFLTjtBQUEzRixTQUNHRyxPQUFPLENBQUNJLGtCQURYLENBREQsQ0FERDtBQU9BOzs7Ozs7Ozs7OztFQXRCMkJDLCtDOztBQXlCN0JWLGNBQWMsQ0FBQ1csU0FBZixHQUEyQjtBQUMxQk4sU0FBTyxFQUFHTyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUREO0FBRTFCWixTQUFPLEVBQUdVLGlEQUFTLENBQUNHLElBQVYsQ0FBZUQ7QUFGQyxDQUEzQjtBQUtBZCxjQUFjLENBQUNnQixZQUFmLEdBQThCO0FBQzdCZCxTQUFPLEVBQUcsaUJBQUVHLE9BQUYsRUFBV0YsQ0FBWCxFQUFrQjtBQUFDYyxTQUFLLENBQUUsb0VBQUYsQ0FBTDtBQUErRTtBQUQvRSxDQUE5QjtlQUllakIsYztBQUFBOzs7Ozs7Ozs7OzBCQWxDVEEsYyIsImZpbGUiOiJhcHBzL2F1dG9zdWdnZXN0LWFkZHJlc3MvY2h1bmtzL3N1Z2dlc3Rpb24taXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXV0aG9yOiBwb3N0Y29kZXhcbiAqIERhdGU6IDEwLzYvMjBcbiAqIFRpbWU6IDU6MzMgUE1cbiAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5JztcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZS5zY3NzJztcblxuY2xhc3MgU3VnZ2VzdGlvbkl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG5cdFx0c3VwZXIoIHByb3BzICk7XG5cdH1cblxuXHRvbkNsaWNrID0gKCBlICkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCB7IGFkZHJlc3MgfSA9IHRoaXMucHJvcHM7XG5cblx0XHR0aGlzLnByb3BzLm9uQ2xpY2soIGFkZHJlc3MsIGUgKTtcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBhZGRyZXNzIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxFcnJvckJvdW5kYXJ5PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGByZXN1bHQtaXRlbSAkeyBzdHlsZS5yZXN1bHRJdGVtIH1gIH0ga2V5PXsgYWRkcmVzcy5oYXNoIH0gb25DbGljaz17IHRoaXMub25DbGljayB9PlxuXHRcdFx0XHRcdHsgYWRkcmVzcy5hZGRyZXNzRGVzY3JpcHRpb24gfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRXJyb3JCb3VuZGFyeT5cblx0XHQpO1xuXHR9XG59XG5cblN1Z2dlc3Rpb25JdGVtLnByb3BUeXBlcyA9IHtcblx0YWRkcmVzcyA6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblx0b25DbGljayA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5TdWdnZXN0aW9uSXRlbS5kZWZhdWx0UHJvcHMgPSB7XG5cdG9uQ2xpY2sgOiAoIGFkZHJlc3MsIGUgKSA9PiB7YWxlcnQoICdvbkNMaWNrKCkgaGFuZGxlciBmb3IgU3VnZ2VzdGlvbkl0ZW0gY29tcG9uZW50IGlzIG5vdCBpbXBsZW1lbnRlZCEnICk7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VnZ2VzdGlvbkl0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9