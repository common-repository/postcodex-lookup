(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps/autosuggest-address/index"],{

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: apiRequest, sendRequest, _template, createSource, _localStorage, _sessionStorage, hashCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiRequest", function() { return apiRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequest", function() { return sendRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_template", function() { return _template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSource", function() { return createSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_localStorage", function() { return _localStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_sessionStorage", function() { return _sessionStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashCode", function() { return hashCode; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_buffer_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array-buffer.slice */ "./node_modules/core-js/modules/es.array-buffer.slice.js");
/* harmony import */ var core_js_modules_es_array_buffer_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_pad_start__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.pad-start */ "./node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.typed-array.every */ "./node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter */ "./node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.find */ "./node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes */ "./node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.typed-array.join */ "./node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.typed-array.map */ "./node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.typed-array.set */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice */ "./node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.typed-array.some */ "./node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray */ "./node_modules/core-js/modules/es.typed-array.subarray.js");
/* harmony import */ var core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! lodash/memoize */ "./node_modules/lodash/memoize.js");
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var lodash_template__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! lodash/template */ "./node_modules/lodash/template.js");
/* harmony import */ var lodash_template__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(lodash_template__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! lodash/isNull */ "./node_modules/lodash/isNull.js");
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_50__);















































(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_45___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Author: postcodex
 * @todo define postcodexLookupObj in php wp_localize_script()
 */





var apiRequest = function apiRequest() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var ep = props.ep,
      options = props.options,
      method = props.method;
  return sendRequest(ep, lodash_omit__WEBPACK_IMPORTED_MODULE_50___default()(props, ['ep', 'options', 'method']), method || 'POST', options || {});
};
var sendRequest = function sendRequest(ep) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'POST';
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var defaultArgs = {
    url: "".concat(postcodexLookupObj.apiUrl).concat(ep),
    method: method || 'POST',
    headers: {
      'X-WP-Nonce': postcodexLookupObj.restNonce
    },
    timeout: 30000,
    dataType: 'json',
    contentType: 'application/json'
  };
  var args = 'get' === method.toLowerCase() ? _objectSpread(_objectSpread({}, defaultArgs), {}, {
    params: props
  }, options) : _objectSpread(_objectSpread({}, defaultArgs), {}, {
    data: props
  }, options);
  return axios__WEBPACK_IMPORTED_MODULE_46___default()(args).then(function (response) {
    return response;
  }).catch(function (error) {
    return {
      error: error
    };
  });
};
/**
 * Usage:
 * Somewhere on the page you have the following markup:
 * <script id="tmpl-my-template" type="text/html">
 *     <div class="some-class">
 *         {{ jsVariableNameObject.whatever }}
 *     </div>
 * </script>
 *
 * // then on your component file:
 *
 * // Load the template
 * const myTemplate = _template( 'my-template', 'jsVariableNameObject' );
 *
 * // Output the template passing the variable for output. Example variable object:
 * const someObjectInAppToBeDisplayed = {
 *     whatever : 'Sample Text'
 * };
 * myTemplate( someObjectInAppToBeDisplayed );
 */

var _template = lodash_memoize__WEBPACK_IMPORTED_MODULE_47___default()(function (id, varName) {
  var variable = varName || 'data';
  var compiled,
      options = {
    evaluate: /<#([\s\S]+?)#>/g,
    interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
    escape: /\{\{([^\}]+?)\}\}(?!\})/g,
    variable: variable
  };
  return function (data) {
    compiled = compiled || lodash_template__WEBPACK_IMPORTED_MODULE_48___default()(document.getElementById("tmpl-".concat(id)).innerHTML, options);
    return compiled(data);
  };
});
/**
 * Create EventSource object
 * @param url
 * @returns object
 */

var createSource = function createSource(url) {
  var source = new EventSource(url);
  var deferred;

  source.onmessage = function (event) {
    var json = JSON.parse(event.data);

    if (deferred) {
      deferred.resolve(json);
      deferred = null;
    }
  };

  source.onopen = function (event) {
    console.log('eventsource open');
  };

  source.onerror = function (event) {
    var source = event.target;
    console.log('eventsource error', event); //source.close();
  };

  return {
    nextMessage: function nextMessage() {
      if (!deferred) {
        deferred = {};
        deferred.promise = new Promise(function (resolve) {
          return deferred.resolve = resolve;
        });
      }

      return deferred.promise;
    },
    source: source
  };
};
var _localStorage = {
  getItem: function getItem(key) {
    if (typeof Storage !== 'undefined') {
      return localStorage.getItem(key);
    }

    return null;
  },
  setItem: function setItem(key, value) {
    if (typeof Storage !== 'undefined') {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        console.log(e);
      }
    }
  },
  getJSON: function getJSON(key) {
    if (typeof Storage !== 'undefined') {
      return JSON.parse(localStorage.getItem(key));
    }

    return null;
  },
  setJSON: function setJSON(key, value) {
    if (typeof Storage !== 'undefined') {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.log(e);
      }
    }
  }
};
var _sessionStorage = {
  get: function get(key) {
    if (typeof Storage !== 'undefined') {
      return sessionStorage.getItem(key);
    }

    return null;
  },
  set: function set(key, value) {
    if (typeof Storage !== 'undefined') {
      try {
        sessionStorage.setItem(key, value);
      } catch (e) {
        console.log(e);
      }
    }
  },
  getJSON: function getJSON(key) {
    if (typeof Storage !== 'undefined') {
      return JSON.parse(sessionStorage.getItem(key));
    }

    return null;
  },
  setJSON: function setJSON(key, value) {
    if (typeof Storage !== 'undefined') {
      try {
        sessionStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.log(e);
      }
    }
  }
};
/**
 * Usage:
 * hashCode( data ).then( hash => { ...do something with `hash` } );
 *
 * @param message
 * @param maxChars
 * @returns {Promise<string>}
 */

var hashCode = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_44___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_42___default.a.mark(function _callee(message) {
    var maxChars,
        code,
        msgUint8,
        hashBuffer,
        hashArray,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_42___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            maxChars = _args.length > 1 && _args[1] !== undefined ? _args[1] : 8;
            code = '';

            if (!('undefined' !== typeof crypto && 'undefined' !== typeof crypto.subtle && 'undefined' !== typeof crypto.subtle.digest)) {
              _context.next = 11;
              break;
            }

            msgUint8 = new TextEncoder().encode(JSON.stringify(message));
            _context.next = 6;
            return crypto.subtle.digest('SHA-256', msgUint8);

          case 6:
            hashBuffer = _context.sent;
            hashArray = Array.from(new Uint8Array(hashBuffer));
            code = hashArray.map(function (b) {
              return b.toString(16).padStart(2, '0');
            }).join('');
            _context.next = 12;
            break;

          case 11:
            code = md5(JSON.stringify(message));

          case 12:
            if (!(lodash_isNull__WEBPACK_IMPORTED_MODULE_49___default()(maxChars) && maxChars !== code.length)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", code);

          case 14:
            return _context.abrupt("return", code.substr(0, maxChars));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function hashCode(_x) {
    return _ref.apply(this, arguments);
  };
}();
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(apiRequest, "apiRequest", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/api/index.js");
  reactHotLoader.register(sendRequest, "sendRequest", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/api/index.js");
  reactHotLoader.register(_template, "_template", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/api/index.js");
  reactHotLoader.register(createSource, "createSource", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/api/index.js");
  reactHotLoader.register(_localStorage, "_localStorage", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/api/index.js");
  reactHotLoader.register(_sessionStorage, "_sessionStorage", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/api/index.js");
  reactHotLoader.register(hashCode, "hashCode", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/api/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/autosuggest-address/actions/index.js":
/*!*******************************************************!*\
  !*** ./src/apps/autosuggest-address/actions/index.js ***!
  \*******************************************************/
/*! exports provided: APP_PROP_CHANGE, SEARCH_ADDRESSES, SEARCH_ADDRESSES_SUCCESS, SEARCH_ADDRESSES_ERROR, searchAddresses, appPropChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_PROP_CHANGE", function() { return APP_PROP_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_ADDRESSES", function() { return SEARCH_ADDRESSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_ADDRESSES_SUCCESS", function() { return SEARCH_ADDRESSES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_ADDRESSES_ERROR", function() { return SEARCH_ADDRESSES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchAddresses", function() { return searchAddresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appPropChange", function() { return appPropChange; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Author: postcodex
 * Date: 10/5/20
 * Time: 5:31 PM
 */
var APP_PROP_CHANGE = 'APP_PROP_CHANGE',
    SEARCH_ADDRESSES = 'SEARCH_ADDRESSES',
    SEARCH_ADDRESSES_SUCCESS = 'SEARCH_ADDRESSES_SUCCESS',
    SEARCH_ADDRESSES_ERROR = 'SEARCH_ADDRESSES_ERROR',
    searchAddresses = function searchAddresses(payload) {
  return {
    type: SEARCH_ADDRESSES,
    payload: payload
  };
},
    appPropChange = function appPropChange(payload) {
  return {
    type: APP_PROP_CHANGE,
    payload: payload
  };
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(APP_PROP_CHANGE, "APP_PROP_CHANGE", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/actions/index.js");
  reactHotLoader.register(SEARCH_ADDRESSES, "SEARCH_ADDRESSES", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/actions/index.js");
  reactHotLoader.register(SEARCH_ADDRESSES_SUCCESS, "SEARCH_ADDRESSES_SUCCESS", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/actions/index.js");
  reactHotLoader.register(SEARCH_ADDRESSES_ERROR, "SEARCH_ADDRESSES_ERROR", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/actions/index.js");
  reactHotLoader.register(searchAddresses, "searchAddresses", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/actions/index.js");
  reactHotLoader.register(appPropChange, "appPropChange", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/actions/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/autosuggest-address/containers/App.js":
/*!********************************************************!*\
  !*** ./src/apps/autosuggest-address/containers/App.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../style.scss */ "./src/apps/autosuggest-address/style.scss");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../actions */ "./src/apps/autosuggest-address/actions/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../api */ "./src/api/index.js");
/* harmony import */ var _components_LoadingBar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../components/LoadingBar */ "./src/components/LoadingBar.js");














(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Author: postcodex
 */










var SuggestionResults = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_13__["lazy"])(function () {
  return __webpack_require__.e(/*! import() | apps/autosuggest-address/chunks/suggestion-results */ "apps/autosuggest-address/chunks/suggestion-results").then(__webpack_require__.bind(null, /*! ../components/SuggestionResults */ "./src/apps/autosuggest-address/components/SuggestionResults.js"));
});

var App = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default()(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, App);

    _this = _super.call(this, props);

    _this._queryAddresses = function (postcode) {
      var hash = md5__WEBPACK_IMPORTED_MODULE_20___default()("".concat(_this.props.cacheId, "_").concat(postcode));

      var addresses = _api__WEBPACK_IMPORTED_MODULE_21__["_sessionStorage"].getJSON("postcode_".concat(hash));

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_19__["isEmpty"])(addresses)) {
        _this.props.appPropChange({
          addresses: addresses
        });

        return;
      }

      var args = {
        ep: 'search-addresses',
        method: 'GET',
        postcode: postcode
      };

      if (!postcodexLookupObj.isLoggedIn) {
        args.options = {
          headers: {}
        };
      }

      _this.props.searchAddresses(args);
    };

    _this.debounceSearchAddreses = function (postcode) {
      _this._queryAddresses(postcode);
    };

    _this.handlePostCodeInputChange = function (e) {
      _this.debounceSearchAddreses(e.target.value);
    };

    _this.handleClickItem = function (address, e) {
      var addressLine1 = address.addressLine1,
          addressLine2 = address.addressLine2,
          addressLine3 = address.addressLine3,
          postTown = address.postTown;

      if (_this._address1Input) {
        _this._address1Input.value = [addressLine1, addressLine2].filter(Boolean).join(', ');
      }

      if (_this._address2Input) {
        _this._address2Input.value = addressLine3;
      }

      if (_this._townInput) {
        _this._townInput.value = postTown;
      }

      _this.props.unmountAppEntry();
    };

    _this.debounceSearchAddreses = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["debounce"])(_this.debounceSearchAddreses, 700);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(App, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.searchingAddresses && !this.props.searchingAddresses) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_19__["isEmpty"])(this.props.addresses)) {
          this.props.unmountAppEntry();
        } else {
          var postcode = this._postCodeInput.value;

          if (postcode) {
            var hash = md5__WEBPACK_IMPORTED_MODULE_20___default()("".concat(this.props.cacheId, "_").concat(postcode));

            _api__WEBPACK_IMPORTED_MODULE_21__["_sessionStorage"].setJSON("postcode_".concat(hash), this.props.addresses);
          }
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._postCodeInput = this.props.form.querySelector(plAutosuggestAddrObj.postcodeSelector);
      this._counrtyInput = this.props.form.querySelector(plAutosuggestAddrObj.countrySelector);
      this._address1Input = this.props.form.querySelector(plAutosuggestAddrObj.address1Selector);
      this._address2Input = this.props.form.querySelector(plAutosuggestAddrObj.address2Selector);
      this._townInput = this.props.form.querySelector(plAutosuggestAddrObj.citySelector);
      this.postCodeInput.addEventListener('keyup', this.handlePostCodeInputChange);

      if (this.postCodeInput.value) {
        this._queryAddresses(this.postCodeInput.value);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.postCodeInput.removeEventListener('keyup', this.handlePostCodeInputChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          searchingAddresses = _this$props.searchingAddresses,
          addresses = _this$props.addresses;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "postcodex-lookup-app ".concat(_style_scss__WEBPACK_IMPORTED_MODULE_17__["default"].postcodexLookupApp)
      }, searchingAddresses && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
        className: _style_scss__WEBPACK_IMPORTED_MODULE_17__["default"].searching
      }, "Searching...") || !Object(lodash__WEBPACK_IMPORTED_MODULE_19__["isEmpty"])(addresses) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_13__["Suspense"], {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_LoadingBar__WEBPACK_IMPORTED_MODULE_22__["default"], null)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(SuggestionResults, {
        addresses: addresses,
        onClick: this.handleClickItem
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }, {
    key: "postCodeInput",
    get: function get() {
      return this._postCodeInput;
    },
    set: function set(el) {
      this._postCodeInput = el;
    }
  }, {
    key: "billingCountryInput",
    get: function get() {
      return this._counrtyInput;
    },
    set: function set(el) {
      this._counrtyInput = el;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

App.propTypes = {
  searchingAddresses: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.bool,
  addresses: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.array,
  unmountAppEntry: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.func,
  cacheId: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string,
  form: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.instanceOf(Element).isRequired
};

var _default = Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_14__["hot"])(module)(Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(function (state) {
  return _objectSpread({}, state.app);
}, {
  appPropChange: _actions__WEBPACK_IMPORTED_MODULE_18__["appPropChange"],
  searchAddresses: _actions__WEBPACK_IMPORTED_MODULE_18__["searchAddresses"]
})(App));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SuggestionResults, "SuggestionResults", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/containers/App.js");
  reactHotLoader.register(App, "App", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/containers/App.js");
  reactHotLoader.register(_default, "default", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/containers/App.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/autosuggest-address/index.js":
/*!***********************************************!*\
  !*** ./src/apps/autosuggest-address/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducers */ "./src/apps/autosuggest-address/reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sagas */ "./src/apps/autosuggest-address/sagas/index.js");
/* harmony import */ var _containers_App__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/App */ "./src/apps/autosuggest-address/containers/App.js");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Author: postcodex
 */
__webpack_require__.p = "".concat(postcodexLookupObj.publicPath, "/");










var postCodeInput = document.querySelectorAll(plAutosuggestAddrObj.postcodeSelector),
    countryInput = document.querySelector(plAutosuggestAddrObj.countrySelector);

var initApp = function initApp(form) {
  var _document$getElementB, _document$getElementB2;

  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_8__["compose"];
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_8__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_10__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_8__["applyMiddleware"])(sagaMiddleware)));
  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_11__["default"]);
  var postcodeInput = form.querySelector(plAutosuggestAddrObj.postcodeSelector);
  var formDataPlApp = form.getAttribute('data-pl-app');
  var cacheId = formDataPlApp !== null && formDataPlApp !== void 0 ? formDataPlApp : Object(lodash__WEBPACK_IMPORTED_MODULE_6__["uniqueId"])('plApp');

  if (!formDataPlApp) {
    form.setAttribute('data-pl-app', cacheId);
  }

  var root = document.createElement('div');
  root.id = cacheId;
  root.classList.add('pl-autosuggest-address', 'pl-custom');
  document.body.appendChild(root);

  var cumulativeOffset = function cumulativeOffset(mainElement) {
    var top = 0,
        left = 0,
        element = mainElement;

    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);

    return {
      top: top + mainElement.offsetHeight,
      left: left
    };
  };

  var offset = cumulativeOffset(postcodeInput);
  var adminBarHeight = (_document$getElementB = (_document$getElementB2 = document.getElementById('wpadminbar')) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.offsetHeight) !== null && _document$getElementB !== void 0 ? _document$getElementB : 0;
  root.style.top = offset.top + adminBarHeight + 'px';
  root.style.left = offset.left + 'px';
  root.style.width = 200 < postcodeInput.clientWidth ? postcodeInput.clientWidth + 'px' : '200px';
  react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_9__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_containers_App__WEBPACK_IMPORTED_MODULE_12__["default"], {
    unmountAppEntry: unmountAppEntry,
    cacheId: cacheId,
    form: form
  })), root);
};

var unmountAppEntry = function unmountAppEntry() {
  var appRoot = document.querySelector('.pl-autosuggest-address');

  if (!appRoot) {
    return;
  }

  react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.unmountComponentAtNode(document.querySelector('.pl-autosuggest-address'));
  document.querySelector('.pl-autosuggest-address').remove();
};

var toggleFieldsDisplay = function toggleFieldsDisplay() {
  var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var inputFields = [plAutosuggestAddrObj.address1Selector, plAutosuggestAddrObj.address2Selector, plAutosuggestAddrObj.citySelector];

  if (!show) {
    inputFields.forEach(function (fieldId) {
      var field = document.querySelector(fieldId),
          container = field === null || field === void 0 ? void 0 : field.closest("".concat(fieldId, "_field"));

      if (container) {
        container.style.display = 'none';
      }
    });
  } else {
    inputFields.forEach(function (fieldId) {
      var field = document.querySelector(fieldId),
          container = field === null || field === void 0 ? void 0 : field.closest("".concat(fieldId, "_field"));

      if (container) {
        container.style.display = 'block';
      }
    });
  }
};

var togglePostCodeDesc = function togglePostCodeDesc() {
  var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var postcodeDesc = document.querySelectorAll('.pl-postcode-desc');

  if (!postcodeDesc.length && show) {
    postcodeDesc = document.createElement('span');
    postcodeDesc.classList.add('pl-postcode-desc');

    if ('yes' === plAutosuggestAddrObj.autosearch) {
      postcodeDesc.innerText = 'Enter your postcode to automatically find your address.';
    } else {
      postcodeDesc.innerHTML = 'Enter your postcode and click <code>SEARCH</code> button to find your address.';
    }

    postCodeInput.forEach(function (node) {
      var _node$closest;

      (_node$closest = node.closest("#".concat(node.id, "_field"))) === null || _node$closest === void 0 ? void 0 : _node$closest.appendChild(postcodeDesc);
    });
  } else if (postcodeDesc) {
    postCodeInput.forEach(function (node) {
      var _node$closest2;

      console.log(node);
      (_node$closest2 = node.closest("#".concat(node.id, "_field"))) === null || _node$closest2 === void 0 ? void 0 : _node$closest2.removeChild(postcodeDesc);
    });
  }
};

var toggleSearchBtnDisplay = function toggleSearchBtnDisplay() {
  var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var _plAutosuggestAddrObj = plAutosuggestAddrObj,
      autosearch = _plAutosuggestAddrObj.autosearch,
      isCheckout = _plAutosuggestAddrObj.isCheckout;

  if ((!isCheckout || isCheckout && countryInput && 'GB' === countryInput.value) && show && 'no' === autosearch) {
    document.body.classList.add('pl-no-autosuggest');
    postCodeInput.forEach(function (node) {
      var searchBtn = document.createElement('button');
      searchBtn.classList.add('pl-search-addresses-btn', 'btn', 'btn-secondary');
      searchBtn.type = 'button';
      searchBtn.textContent = 'Search';
      searchBtn.addEventListener('click', handleSearchBtnClick);
      node.parentNode.insertBefore(searchBtn, node.nextSibling);
    });
  } else if ('no' === autosearch && (!show || isCheckout && countryInput && 'GB' !== countryInput.value)) {
    var searchBtn = document.querySelectorAll('.pl-search-addresses-btn');

    if (!!searchBtn.length) {
      searchBtn.forEach(function (btn) {
        btn.remove();
        document.body.classList.remove('pl-no-autosuggest');
      });
    }
  }
};

var handleSearchBtnClick = function handleSearchBtnClick(e) {
  var form = e.target.closest('form');
  initApp(form);
};

var debouncedToggleFieldsDisplay = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["debounce"])(function () {
  toggleFieldsDisplay(false);
}, 10);

var postCodeChange = function postCodeChange(e) {
  var form = e.target.closest('form');

  if (plAutosuggestAddrObj.isCheckout && countryInput && 'GB' === countryInput.value || !form.querySelector('.pl-autosuggest-address') && 2 <= e.target.value.trim().length) {
    initApp(form);
  } else if (form.querySelector('.pl-autosuggest-address') && 2 > e.target.value.trim().length) {
    unmountAppEntry(form);
  }
};

var debouncePostcodeChange = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["debounce"])(function (e) {
  postCodeChange(e);
}, 700);

if (!!postCodeInput.length && 'yes' === plAutosuggestAddrObj.autosearch) {
  postCodeInput.forEach(function (node) {
    node.addEventListener('keyup', debouncePostcodeChange);
    node.addEventListener('focus', postCodeChange);
  });
}

document.addEventListener('mousedown', function (e) {
  var appNode = document.querySelectorAll('.pl-autosuggest-address');
  postCodeInput.forEach(function (input) {
    if (input && !(input === null || input === void 0 ? void 0 : input.contains(e.target)) && !!appNode.length) {
      appNode.forEach(function (node) {
        if (!node.contains(e.target)) {
          unmountAppEntry(node.closest('form'));
        }
      });
    }
  });
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(plAutosuggestAddrObj.countrySelector).on('change', function (e) {
  if ('GB' === e.target.value) {
    togglePostCodeDesc();
    toggleSearchBtnDisplay();
  } else {
    unmountAppEntry(document.querySelector(plAutosuggestAddrObj.countrySelector).closest('form'));
    togglePostCodeDesc(false);
    toggleSearchBtnDisplay(false);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(function () {
  if (!plAutosuggestAddrObj.isCheckout || plAutosuggestAddrObj.isCheckout && countryInput && 'GB' === countryInput.value) {
    togglePostCodeDesc();
    toggleSearchBtnDisplay();
  }
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(postCodeInput, "postCodeInput", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/index.js");
  reactHotLoader.register(countryInput, "countryInput", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/index.js");
  reactHotLoader.register(initApp, "initApp", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/index.js");
  reactHotLoader.register(unmountAppEntry, "unmountAppEntry", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/index.js");
  reactHotLoader.register(toggleFieldsDisplay, "toggleFieldsDisplay", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/index.js");
  reactHotLoader.register(togglePostCodeDesc, "togglePostCodeDesc", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/index.js");
  reactHotLoader.register(toggleSearchBtnDisplay, "toggleSearchBtnDisplay", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/index.js");
  reactHotLoader.register(handleSearchBtnClick, "handleSearchBtnClick", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/index.js");
  reactHotLoader.register(debouncedToggleFieldsDisplay, "debouncedToggleFieldsDisplay", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/index.js");
  reactHotLoader.register(postCodeChange, "postCodeChange", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/index.js");
  reactHotLoader.register(debouncePostcodeChange, "debouncePostcodeChange", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/autosuggest-address/reducers/app.js":
/*!******************************************************!*\
  !*** ./src/apps/autosuggest-address/reducers/app.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ "./src/apps/autosuggest-address/actions/index.js");









(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Author: postcodex
 * Date: 2018/08/23
 * Time: 2:01 PM
 */

var INITIAL_STATE = {
  searchingAddresses: false,
  addresses: [],
  searchError: null
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_8__["APP_PROP_CHANGE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);

    case _actions__WEBPACK_IMPORTED_MODULE_8__["SEARCH_ADDRESSES"]:
      return _objectSpread(_objectSpread(_objectSpread({}, state), action.payload), {}, {
        searchingAddresses: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_8__["SEARCH_ADDRESSES_SUCCESS"]:
      return _objectSpread(_objectSpread(_objectSpread({}, state), action.data), {}, {
        searchingAddresses: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_8__["SEARCH_ADDRESSES_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchError: _objectSpread({}, action.error.response.data),
        searchingAddresses: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(INITIAL_STATE, "INITIAL_STATE", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/reducers/app.js");
  reactHotLoader.register(_default, "default", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/reducers/app.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/autosuggest-address/reducers/index.js":
/*!********************************************************!*\
  !*** ./src/apps/autosuggest-address/reducers/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/apps/autosuggest-address/reducers/app.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Author: postcodex
 * Date: 2018/08/23
 * Time: 1:57 PM
 */



var _default = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  app: _app__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/reducers/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/autosuggest-address/sagas/app.js":
/*!***************************************************!*\
  !*** ./src/apps/autosuggest-address/sagas/app.js ***!
  \***************************************************/
/*! exports provided: watchSearchAddresses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchSearchAddresses", function() { return watchSearchAddresses; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api */ "./src/api/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/apps/autosuggest-address/actions/index.js");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sendSearchAddresses),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSearchAddresses);

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Author: postcodex
 * Date: 10/5/20
 * Time: 5:58 PM
 */


 //region Regular AJAX request

function sendSearchAddresses(action) {
  var _yield$call, data, error;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sendSearchAddresses$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_api__WEBPACK_IMPORTED_MODULE_3__["apiRequest"], action.payload);

        case 2:
          _yield$call = _context.sent;
          data = _yield$call.data;
          error = _yield$call.error;

          if (!data) {
            _context.next = 10;
            break;
          }

          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions__WEBPACK_IMPORTED_MODULE_4__["SEARCH_ADDRESSES_SUCCESS"],
            data: data
          });

        case 8:
          _context.next = 12;
          break;

        case 10:
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions__WEBPACK_IMPORTED_MODULE_4__["SEARCH_ADDRESSES_ERROR"],
            error: error
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function watchSearchAddresses() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSearchAddresses$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_4__["SEARCH_ADDRESSES"], sendSearchAddresses);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
} //endregion

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(sendSearchAddresses, "sendSearchAddresses", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/sagas/app.js");
  reactHotLoader.register(watchSearchAddresses, "watchSearchAddresses", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/sagas/app.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/autosuggest-address/sagas/index.js":
/*!*****************************************************!*\
  !*** ./src/apps/autosuggest-address/sagas/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./src/apps/autosuggest-address/sagas/app.js");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Author: postcodex
 * Date: 2018/08/23
 * Time: 1:57 PM
 */


function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(_app__WEBPACK_IMPORTED_MODULE_3__["watchSearchAddresses"])()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(rootSaga, "rootSaga", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/apps/autosuggest-address/sagas/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/autosuggest-address/style.scss":
/*!*************************************************!*\
  !*** ./src/apps/autosuggest-address/style.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"postcodex-lookup-app":"postcodex-lookup-app-2aY85OUU","postcodexLookupApp":"postcodex-lookup-app-2aY85OUU","searching":"searching-cEsjjE5-","search-results-container":"search-results-container-Wvb-ux4V","searchResultsContainer":"search-results-container-Wvb-ux4V","results-heading":"results-heading-1wQjQw_8","resultsHeading":"results-heading-1wQjQw_8","result-item":"result-item-2Lrwk9lR","resultItem":"result-item-2Lrwk9lR"});

/***/ }),

/***/ "./src/components/LoadingBar.js":
/*!**************************************!*\
  !*** ./src/components/LoadingBar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Author: postcodex
 * Date: 10/7/20
 * Time: 10:49 AM
 */


var Loading = function Loading(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      margin: 0,
      background: 'transparent',
      display: 'inline-block'
    },
    width: "32px",
    height: "32px",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "0",
    y: "30",
    width: "10",
    height: "40",
    fill: "#353535"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "opacity",
    dur: "2s",
    repeatCount: "indefinite",
    calcMode: "spline",
    keyTimes: "0;0.5;1",
    keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
    values: "1;0.2;1",
    begin: "-1.2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "20",
    y: "30",
    width: "10",
    height: "40",
    fill: "#666666"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "opacity",
    dur: "2s",
    repeatCount: "indefinite",
    calcMode: "spline",
    keyTimes: "0;0.5;1",
    keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
    values: "1;0.2;1",
    begin: "-0.8"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "40",
    y: "30",
    width: "10",
    height: "40",
    fill: "#9b9b9b"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "opacity",
    dur: "2s",
    repeatCount: "indefinite",
    calcMode: "spline",
    keyTimes: "0;0.5;1",
    keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
    values: "1;0.2;1",
    begin: "-0.4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "60",
    y: "30",
    width: "10",
    height: "40",
    fill: "#d4d4d4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "opacity",
    dur: "2s",
    repeatCount: "indefinite",
    calcMode: "spline",
    keyTimes: "0;0.5;1",
    keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
    values: "1;0.2;1",
    begin: "-2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "80",
    y: "30",
    width: "10",
    height: "40",
    fill: "#e3e3e3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "opacity",
    dur: "2s",
    repeatCount: "indefinite",
    calcMode: "spline",
    keyTimes: "0;0.5;1",
    keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
    values: "1;0.2;1",
    begin: "-2"
  })));
};

Loading.propTypes = {};
Loading.defaultProps = {};
var _default = Loading;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, "Loading", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/components/LoadingBar.js");
  reactHotLoader.register(_default, "default", "/home/paul/sites/rgm.test/wp-content/plugins/postcodex-lookup/src/components/LoadingBar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = lodash;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

},[["./src/apps/autosuggest-address/index.js","manifest","vendor"]],["apps/autosuggest-address/chunks/suggestion-results"]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHBzL2F1dG9zdWdnZXN0LWFkZHJlc3MvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwcy9hdXRvc3VnZ2VzdC1hZGRyZXNzL2NvbnRhaW5lcnMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHBzL2F1dG9zdWdnZXN0LWFkZHJlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcHMvYXV0b3N1Z2dlc3QtYWRkcmVzcy9yZWR1Y2Vycy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcHMvYXV0b3N1Z2dlc3QtYWRkcmVzcy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwcy9hdXRvc3VnZ2VzdC1hZGRyZXNzL3NhZ2FzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwcy9hdXRvc3VnZ2VzdC1hZGRyZXNzL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHBzL2F1dG9zdWdnZXN0LWFkZHJlc3Mvc3R5bGUuc2Nzcz9jY2FmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmdCYXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbImFwaVJlcXVlc3QiLCJwcm9wcyIsImVwIiwib3B0aW9ucyIsIm1ldGhvZCIsInNlbmRSZXF1ZXN0Iiwib21pdCIsImRlZmF1bHRBcmdzIiwidXJsIiwicG9zdGNvZGV4TG9va3VwT2JqIiwiYXBpVXJsIiwiaGVhZGVycyIsInJlc3ROb25jZSIsInRpbWVvdXQiLCJkYXRhVHlwZSIsImNvbnRlbnRUeXBlIiwiYXJncyIsInRvTG93ZXJDYXNlIiwicGFyYW1zIiwiZGF0YSIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsIl90ZW1wbGF0ZSIsIm1lbW9pemUiLCJpZCIsInZhck5hbWUiLCJ2YXJpYWJsZSIsImNvbXBpbGVkIiwiZXZhbHVhdGUiLCJpbnRlcnBvbGF0ZSIsImVzY2FwZSIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImNyZWF0ZVNvdXJjZSIsInNvdXJjZSIsIkV2ZW50U291cmNlIiwiZGVmZXJyZWQiLCJvbm1lc3NhZ2UiLCJldmVudCIsImpzb24iLCJKU09OIiwicGFyc2UiLCJyZXNvbHZlIiwib25vcGVuIiwiY29uc29sZSIsImxvZyIsIm9uZXJyb3IiLCJ0YXJnZXQiLCJuZXh0TWVzc2FnZSIsInByb21pc2UiLCJQcm9taXNlIiwiX2xvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJrZXkiLCJTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInZhbHVlIiwiZSIsImdldEpTT04iLCJzZXRKU09OIiwic3RyaW5naWZ5IiwiX3Nlc3Npb25TdG9yYWdlIiwiZ2V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXQiLCJoYXNoQ29kZSIsIm1lc3NhZ2UiLCJtYXhDaGFycyIsImNvZGUiLCJjcnlwdG8iLCJzdWJ0bGUiLCJkaWdlc3QiLCJtc2dVaW50OCIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwiaGFzaEJ1ZmZlciIsImhhc2hBcnJheSIsIkFycmF5IiwiZnJvbSIsIlVpbnQ4QXJyYXkiLCJtYXAiLCJiIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImpvaW4iLCJtZDUiLCJpc051bGwiLCJsZW5ndGgiLCJzdWJzdHIiLCJBUFBfUFJPUF9DSEFOR0UiLCJTRUFSQ0hfQUREUkVTU0VTIiwiU0VBUkNIX0FERFJFU1NFU19TVUNDRVNTIiwiU0VBUkNIX0FERFJFU1NFU19FUlJPUiIsInNlYXJjaEFkZHJlc3NlcyIsInBheWxvYWQiLCJ0eXBlIiwiYXBwUHJvcENoYW5nZSIsIlN1Z2dlc3Rpb25SZXN1bHRzIiwibGF6eSIsIkFwcCIsIl9xdWVyeUFkZHJlc3NlcyIsInBvc3Rjb2RlIiwiaGFzaCIsImNhY2hlSWQiLCJhZGRyZXNzZXMiLCJpc0VtcHR5IiwiaXNMb2dnZWRJbiIsImRlYm91bmNlU2VhcmNoQWRkcmVzZXMiLCJoYW5kbGVQb3N0Q29kZUlucHV0Q2hhbmdlIiwiaGFuZGxlQ2xpY2tJdGVtIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMSIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsInBvc3RUb3duIiwiX2FkZHJlc3MxSW5wdXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiX2FkZHJlc3MySW5wdXQiLCJfdG93bklucHV0IiwidW5tb3VudEFwcEVudHJ5IiwiZGVib3VuY2UiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsInNlYXJjaGluZ0FkZHJlc3NlcyIsIl9wb3N0Q29kZUlucHV0IiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJwbEF1dG9zdWdnZXN0QWRkck9iaiIsInBvc3Rjb2RlU2VsZWN0b3IiLCJfY291bnJ0eUlucHV0IiwiY291bnRyeVNlbGVjdG9yIiwiYWRkcmVzczFTZWxlY3RvciIsImFkZHJlc3MyU2VsZWN0b3IiLCJjaXR5U2VsZWN0b3IiLCJwb3N0Q29kZUlucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsInBvc3Rjb2RleExvb2t1cEFwcCIsInNlYXJjaGluZyIsImVsIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImFycmF5IiwiZnVuYyIsInN0cmluZyIsImluc3RhbmNlT2YiLCJFbGVtZW50IiwiaXNSZXF1aXJlZCIsImhvdCIsIm1vZHVsZSIsImNvbm5lY3QiLCJzdGF0ZSIsImFwcCIsIl9fd2VicGFja19wdWJsaWNfcGF0aF9fIiwicHVibGljUGF0aCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb3VudHJ5SW5wdXQiLCJpbml0QXBwIiwiY29tcG9zZUVuaGFuY2VycyIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsImNvbXBvc2UiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXJzIiwiYXBwbHlNaWRkbGV3YXJlIiwicnVuIiwicm9vdFNhZ2EiLCJwb3N0Y29kZUlucHV0IiwiZm9ybURhdGFQbEFwcCIsImdldEF0dHJpYnV0ZSIsInVuaXF1ZUlkIiwic2V0QXR0cmlidXRlIiwicm9vdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjdW11bGF0aXZlT2Zmc2V0IiwibWFpbkVsZW1lbnQiLCJ0b3AiLCJsZWZ0IiwiZWxlbWVudCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJvZmZzZXRQYXJlbnQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXQiLCJhZG1pbkJhckhlaWdodCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJSZWFjdERPTSIsInJlbmRlciIsImFwcFJvb3QiLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwicmVtb3ZlIiwidG9nZ2xlRmllbGRzRGlzcGxheSIsInNob3ciLCJpbnB1dEZpZWxkcyIsImZvckVhY2giLCJmaWVsZElkIiwiZmllbGQiLCJjb250YWluZXIiLCJjbG9zZXN0IiwiZGlzcGxheSIsInRvZ2dsZVBvc3RDb2RlRGVzYyIsInBvc3Rjb2RlRGVzYyIsImF1dG9zZWFyY2giLCJpbm5lclRleHQiLCJub2RlIiwicmVtb3ZlQ2hpbGQiLCJ0b2dnbGVTZWFyY2hCdG5EaXNwbGF5IiwiaXNDaGVja291dCIsInNlYXJjaEJ0biIsInRleHRDb250ZW50IiwiaGFuZGxlU2VhcmNoQnRuQ2xpY2siLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJidG4iLCJkZWJvdW5jZWRUb2dnbGVGaWVsZHNEaXNwbGF5IiwicG9zdENvZGVDaGFuZ2UiLCJ0cmltIiwiZGVib3VuY2VQb3N0Y29kZUNoYW5nZSIsImFwcE5vZGUiLCJpbnB1dCIsImNvbnRhaW5zIiwiJCIsIm9uIiwiSU5JVElBTF9TVEFURSIsInNlYXJjaEVycm9yIiwiYWN0aW9uIiwiY29tYmluZVJlZHVjZXJzIiwiQXBwUmVkdWNlciIsInNlbmRTZWFyY2hBZGRyZXNzZXMiLCJ3YXRjaFNlYXJjaEFkZHJlc3NlcyIsImNhbGwiLCJwdXQiLCJ0YWtlTGF0ZXN0IiwiYWxsIiwiTG9hZGluZyIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQWtCO0FBQUEsTUFBaEJDLEtBQWdCLHVFQUFSLEVBQVE7QUFBQSxNQUNuQ0MsRUFEbUMsR0FDWEQsS0FEVyxDQUNuQ0MsRUFEbUM7QUFBQSxNQUMvQkMsT0FEK0IsR0FDWEYsS0FEVyxDQUMvQkUsT0FEK0I7QUFBQSxNQUN0QkMsTUFEc0IsR0FDWEgsS0FEVyxDQUN0QkcsTUFEc0I7QUFHM0MsU0FBT0MsV0FBVyxDQUFFSCxFQUFGLEVBQU1JLG1EQUFJLENBQUVMLEtBQUYsRUFBUyxDQUFDLElBQUQsRUFBTyxTQUFQLEVBQWtCLFFBQWxCLENBQVQsQ0FBVixFQUFrREcsTUFBTSxJQUFJLE1BQTVELEVBQW9FRCxPQUFPLElBQUksRUFBL0UsQ0FBbEI7QUFDQSxDQUpNO0FBTUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMs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a0MsZUFBVyxFQUFDLFlBRDlDO0FBQzJELFlBQVEsRUFBQyxRQURwRTtBQUM2RSxZQUFRLEVBQUMsU0FEdEY7QUFFQyxjQUFVLEVBQUMseUJBRlo7QUFFc0MsVUFBTSxFQUFDLFNBRjdDO0FBRXVELFNBQUssRUFBQztBQUY3RCxJQURELENBMUJELGVBZ0NDO0FBQU0sS0FBQyxFQUFDLElBQVI7QUFBYSxLQUFDLEVBQUMsSUFBZjtBQUFvQixTQUFLLEVBQUMsSUFBMUI7QUFBK0IsVUFBTSxFQUFDLElBQXRDO0FBQTJDLFFBQUksRUFBQztBQUFoRCxrQkFDQztBQUNDLGlCQUFhLEVBQUMsU0FEZjtBQUN5QixPQUFHLEVBQUMsSUFEN0I7QUFDa0MsZUFBVyxFQUFDLFlBRDlDO0FBQzJELFlBQVEsRUFBQyxRQURwRTtBQUM2RSxZQUFRLEVBQUMsU0FEdEY7QUFFQyxjQUFVLEVBQUMseUJBRlo7QUFFc0MsVUFBTSxFQUFDLFNBRjdDO0FBRXVELFNBQUssRUFBQztBQUY3RCxJQURELENBaENELENBREQ7QUF5Q0EsQ0ExQ0Q7O0FBNENBb0MsT0FBTyxDQUFDeEcsU0FBUixHQUFvQixFQUFwQjtBQUVBd0csT0FBTyxDQUFDRyxZQUFSLEdBQXVCLEVBQXZCO2VBRWVILE87QUFBQTs7Ozs7Ozs7OzswQkFoRFRBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BOLHdCOzs7Ozs7Ozs7OztBQ0FBLHdCOzs7Ozs7Ozs7OztBQ0FBLHVCOzs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6ImFwcHMvYXV0b3N1Z2dlc3QtYWRkcmVzcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXV0aG9yOiBwb3N0Y29kZXhcbiAqIEB0b2RvIGRlZmluZSBwb3N0Y29kZXhMb29rdXBPYmogaW4gcGhwIHdwX2xvY2FsaXplX3NjcmlwdCgpXG4gKi9cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdsb2Rhc2gvbWVtb2l6ZSc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnbG9kYXNoL3RlbXBsYXRlJztcbmltcG9ydCBpc051bGwgZnJvbSAnbG9kYXNoL2lzTnVsbCc7XG5pbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gvb21pdCc7XG5cbmV4cG9ydCBjb25zdCBhcGlSZXF1ZXN0ID0gKCBwcm9wcyA9IHt9ICkgPT4ge1xuXHRjb25zdCB7IGVwLCBvcHRpb25zLCBtZXRob2QgfSA9IHByb3BzO1xuXG5cdHJldHVybiBzZW5kUmVxdWVzdCggZXAsIG9taXQoIHByb3BzLCBbJ2VwJywgJ29wdGlvbnMnLCAnbWV0aG9kJ10gKSwgbWV0aG9kIHx8ICdQT1NUJywgb3B0aW9ucyB8fCB7fSApO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRSZXF1ZXN0ID0gKCBlcCwgcHJvcHMgPSBudWxsLCBtZXRob2QgPSAnUE9TVCcsIG9wdGlvbnMgPSB7fSApID0+IHtcblx0Y29uc3QgZGVmYXVsdEFyZ3MgPSB7XG5cdFx0dXJsICAgICAgICAgOiBgJHsgcG9zdGNvZGV4TG9va3VwT2JqLmFwaVVybCB9JHsgZXAgfWAsXG5cdFx0bWV0aG9kICAgICAgOiBtZXRob2QgfHwgJ1BPU1QnLFxuXHRcdGhlYWRlcnMgICAgIDogeyAnWC1XUC1Ob25jZScgOiBwb3N0Y29kZXhMb29rdXBPYmoucmVzdE5vbmNlIH0sXG5cdFx0dGltZW91dCAgICAgOiAzMDAwMCxcblx0XHRkYXRhVHlwZSAgICA6ICdqc29uJyxcblx0XHRjb250ZW50VHlwZSA6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0fTtcblxuXHRjb25zdCBhcmdzID0gKCAnZ2V0JyA9PT0gbWV0aG9kLnRvTG93ZXJDYXNlKCkgKVxuXHQgICAgICAgICAgICAgPyB7IC4uLmRlZmF1bHRBcmdzLCBwYXJhbXMgOiBwcm9wcywgLi4ub3B0aW9ucyB9XG5cdCAgICAgICAgICAgICA6IHsgLi4uZGVmYXVsdEFyZ3MsIGRhdGEgOiBwcm9wcywgLi4ub3B0aW9ucyB9O1xuXG5cdHJldHVybiBheGlvcyggYXJncyApXG5cdFx0LnRoZW4oXG5cdFx0XHRyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHRcdH1cblx0XHQpXG5cdFx0LmNhdGNoKFxuXHRcdFx0ZXJyb3IgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKCB7IGVycm9yIH0gKTtcblx0XHRcdH1cblx0XHQpO1xufTtcblxuLyoqXG4gKiBVc2FnZTpcbiAqIFNvbWV3aGVyZSBvbiB0aGUgcGFnZSB5b3UgaGF2ZSB0aGUgZm9sbG93aW5nIG1hcmt1cDpcbiAqIDxzY3JpcHQgaWQ9XCJ0bXBsLW15LXRlbXBsYXRlXCIgdHlwZT1cInRleHQvaHRtbFwiPlxuICogICAgIDxkaXYgY2xhc3M9XCJzb21lLWNsYXNzXCI+XG4gKiAgICAgICAgIHt7IGpzVmFyaWFibGVOYW1lT2JqZWN0LndoYXRldmVyIH19XG4gKiAgICAgPC9kaXY+XG4gKiA8L3NjcmlwdD5cbiAqXG4gKiAvLyB0aGVuIG9uIHlvdXIgY29tcG9uZW50IGZpbGU6XG4gKlxuICogLy8gTG9hZCB0aGUgdGVtcGxhdGVcbiAqIGNvbnN0IG15VGVtcGxhdGUgPSBfdGVtcGxhdGUoICdteS10ZW1wbGF0ZScsICdqc1ZhcmlhYmxlTmFtZU9iamVjdCcgKTtcbiAqXG4gKiAvLyBPdXRwdXQgdGhlIHRlbXBsYXRlIHBhc3NpbmcgdGhlIHZhcmlhYmxlIGZvciBvdXRwdXQuIEV4YW1wbGUgdmFyaWFibGUgb2JqZWN0OlxuICogY29uc3Qgc29tZU9iamVjdEluQXBwVG9CZURpc3BsYXllZCA9IHtcbiAqICAgICB3aGF0ZXZlciA6ICdTYW1wbGUgVGV4dCdcbiAqIH07XG4gKiBteVRlbXBsYXRlKCBzb21lT2JqZWN0SW5BcHBUb0JlRGlzcGxheWVkICk7XG4gKi9cbmV4cG9ydCBjb25zdCBfdGVtcGxhdGUgPSBtZW1vaXplKCBmdW5jdGlvbiAoIGlkLCB2YXJOYW1lICkge1xuXHRjb25zdCB2YXJpYWJsZSA9IHZhck5hbWUgfHwgJ2RhdGEnO1xuXHRsZXQgY29tcGlsZWQsXG5cdCAgICBvcHRpb25zID0ge1xuXHRcdCAgICBldmFsdWF0ZSAgICA6IC88IyhbXFxzXFxTXSs/KSM+L2csXG5cdFx0ICAgIGludGVycG9sYXRlIDogL1xce1xce1xceyhbXFxzXFxTXSs/KVxcfVxcfVxcfS9nLFxuXHRcdCAgICBlc2NhcGUgICAgICA6IC9cXHtcXHsoW15cXH1dKz8pXFx9XFx9KD8hXFx9KS9nLFxuXHRcdCAgICB2YXJpYWJsZSAgICA6IHZhcmlhYmxlXG5cdCAgICB9O1xuXG5cdHJldHVybiBmdW5jdGlvbiAoIGRhdGEgKSB7XG5cdFx0Y29tcGlsZWQgPSBjb21waWxlZCB8fCB0ZW1wbGF0ZSggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGB0bXBsLSR7IGlkIH1gICkuaW5uZXJIVE1MLCBvcHRpb25zICk7XG5cdFx0cmV0dXJuIGNvbXBpbGVkKCBkYXRhICk7XG5cdH07XG59ICk7XG5cbi8qKlxuICogQ3JlYXRlIEV2ZW50U291cmNlIG9iamVjdFxuICogQHBhcmFtIHVybFxuICogQHJldHVybnMgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVTb3VyY2UgPSAoIHVybCApID0+IHtcblx0Y29uc3Qgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCB1cmwgKTtcblx0bGV0IGRlZmVycmVkO1xuXG5cdHNvdXJjZS5vbm1lc3NhZ2UgPSAoIGV2ZW50ICkgPT4ge1xuXHRcdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKCBldmVudC5kYXRhICk7XG5cblx0XHRpZiAoIGRlZmVycmVkICkge1xuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSgganNvbiApO1xuXHRcdFx0ZGVmZXJyZWQgPSBudWxsO1xuXHRcdH1cblx0fTtcblxuXHRzb3VyY2Uub25vcGVuID0gKCBldmVudCApID0+IHtcblx0XHRjb25zb2xlLmxvZyggJ2V2ZW50c291cmNlIG9wZW4nICk7XG5cdH07XG5cblx0c291cmNlLm9uZXJyb3IgPSAoIGV2ZW50ICkgPT4ge1xuXHRcdGNvbnN0IHNvdXJjZSA9IGV2ZW50LnRhcmdldDtcblx0XHRjb25zb2xlLmxvZyggJ2V2ZW50c291cmNlIGVycm9yJywgZXZlbnQgKTtcblx0XHQvL3NvdXJjZS5jbG9zZSgpO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0bmV4dE1lc3NhZ2UoKSB7XG5cdFx0XHRpZiAoICFkZWZlcnJlZCApIHtcblx0XHRcdFx0ZGVmZXJyZWQgPSB7fTtcblx0XHRcdFx0ZGVmZXJyZWQucHJvbWlzZSA9IG5ldyBQcm9taXNlKCAoIHJlc29sdmUgKSA9PiBkZWZlcnJlZC5yZXNvbHZlID0gcmVzb2x2ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblx0XHR9LFxuXHRcdHNvdXJjZVxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IF9sb2NhbFN0b3JhZ2UgPSB7XG5cdGdldEl0ZW0gOiAoIGtleSApID0+IHtcblx0XHRpZiAoIHR5cGVvZiBTdG9yYWdlICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgga2V5ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cblx0c2V0SXRlbSA6ICgga2V5LCB2YWx1ZSApID0+IHtcblx0XHRpZiAoIHR5cGVvZiBTdG9yYWdlICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBrZXksIHZhbHVlICk7XG5cdFx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdFx0Y29uc29sZS5sb2coIGUgKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Z2V0SlNPTiA6ICgga2V5ICkgPT4ge1xuXHRcdGlmICggdHlwZW9mIFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBrZXkgKSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXG5cdHNldEpTT04gOiAoIGtleSwgdmFsdWUgKSA9PiB7XG5cdFx0aWYgKCB0eXBlb2YgU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgga2V5LCBKU09OLnN0cmluZ2lmeSggdmFsdWUgKSApO1xuXHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCBlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxufTtcblxuZXhwb3J0IGNvbnN0IF9zZXNzaW9uU3RvcmFnZSA9IHtcblx0Z2V0IDogKCBrZXkgKSA9PiB7XG5cdFx0aWYgKCB0eXBlb2YgU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRyZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgga2V5ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cblx0c2V0IDogKCBrZXksIHZhbHVlICkgPT4ge1xuXHRcdGlmICggdHlwZW9mIFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgga2V5LCB2YWx1ZSApO1xuXHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCBlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdGdldEpTT04gOiAoIGtleSApID0+IHtcblx0XHRpZiAoIHR5cGVvZiBTdG9yYWdlICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCBrZXkgKSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXG5cdHNldEpTT04gOiAoIGtleSwgdmFsdWUgKSA9PiB7XG5cdFx0aWYgKCB0eXBlb2YgU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCBrZXksIEpTT04uc3RyaW5naWZ5KCB2YWx1ZSApICk7XG5cdFx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdFx0Y29uc29sZS5sb2coIGUgKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG59O1xuXG4vKipcbiAqIFVzYWdlOlxuICogaGFzaENvZGUoIGRhdGEgKS50aGVuKCBoYXNoID0+IHsgLi4uZG8gc29tZXRoaW5nIHdpdGggYGhhc2hgIH0gKTtcbiAqXG4gKiBAcGFyYW0gbWVzc2FnZVxuICogQHBhcmFtIG1heENoYXJzXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICovXG5leHBvcnQgY29uc3QgaGFzaENvZGUgPSBhc3luYyAoIG1lc3NhZ2UsIG1heENoYXJzID0gOCApID0+IHtcblx0bGV0IGNvZGUgPSAnJztcblx0aWYgKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGNyeXB0byAmJiAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGNyeXB0by5zdWJ0bGUgJiYgJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBjcnlwdG8uc3VidGxlLmRpZ2VzdCApIHtcblx0XHRjb25zdCBtc2dVaW50OCAgID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKCBKU09OLnN0cmluZ2lmeSggbWVzc2FnZSApICksXG5cdFx0ICAgICAgaGFzaEJ1ZmZlciA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KCAnU0hBLTI1NicsIG1zZ1VpbnQ4ICksXG5cdFx0ICAgICAgaGFzaEFycmF5ICA9IEFycmF5LmZyb20oIG5ldyBVaW50OEFycmF5KCBoYXNoQnVmZmVyICkgKTtcblxuXHRcdGNvZGUgPSBoYXNoQXJyYXkubWFwKCBiID0+IGIudG9TdHJpbmcoIDE2ICkucGFkU3RhcnQoIDIsICcwJyApICkuam9pbiggJycgKTtcblx0fSBlbHNlIHtcblx0XHRjb2RlID0gbWQ1KCBKU09OLnN0cmluZ2lmeSggbWVzc2FnZSApICk7XG5cdH1cblxuXHRpZiAoIGlzTnVsbCggbWF4Q2hhcnMgKSAmJiBtYXhDaGFycyAhPT0gY29kZS5sZW5ndGggKSB7XG5cdFx0cmV0dXJuIGNvZGU7XG5cdH1cblxuXHRyZXR1cm4gY29kZS5zdWJzdHIoIDAsIG1heENoYXJzICk7XG59O1xuIiwiLyoqXG4gKiBBdXRob3I6IHBvc3Rjb2RleFxuICogRGF0ZTogMTAvNS8yMFxuICogVGltZTogNTozMSBQTVxuICovXG5cbmV4cG9ydCBjb25zdFxuQVBQX1BST1BfQ0hBTkdFICAgICAgICAgID0gJ0FQUF9QUk9QX0NIQU5HRScsXG5cblNFQVJDSF9BRERSRVNTRVMgICAgICAgICA9ICdTRUFSQ0hfQUREUkVTU0VTJyxcblNFQVJDSF9BRERSRVNTRVNfU1VDQ0VTUyA9ICdTRUFSQ0hfQUREUkVTU0VTX1NVQ0NFU1MnLFxuU0VBUkNIX0FERFJFU1NFU19FUlJPUiAgID0gJ1NFQVJDSF9BRERSRVNTRVNfRVJST1InLFxuXG5zZWFyY2hBZGRyZXNzZXMgICAgICAgICAgPSAoIHBheWxvYWQgKSA9PiB7XG5cdHJldHVybiB7IHR5cGUgOiBTRUFSQ0hfQUREUkVTU0VTLCBwYXlsb2FkIH07XG59LFxuXG5hcHBQcm9wQ2hhbmdlICAgICAgICAgICAgPSAoIHBheWxvYWQgKSA9PiB7XG5cdHJldHVybiB7IHR5cGUgOiBBUFBfUFJPUF9DSEFOR0UsIHBheWxvYWQgfTtcbn07XG4iLCIvKipcbiAqIEF1dGhvcjogcG9zdGNvZGV4XG4gKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFN1c3BlbnNlLCBsYXp5IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZS5zY3NzJztcbmltcG9ydCB7IGFwcFByb3BDaGFuZ2UsIHNlYXJjaEFkZHJlc3NlcyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgZGVib3VuY2UsIGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG1kNSBmcm9tICdtZDUnO1xuaW1wb3J0IHsgX3Nlc3Npb25TdG9yYWdlIH0gZnJvbSAnLi4vLi4vLi4vYXBpJztcbmltcG9ydCBMb2FkaW5nQmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ0Jhcic7XG5cbmNvbnN0IFN1Z2dlc3Rpb25SZXN1bHRzID0gbGF6eSggKCkgPT4gaW1wb3J0KFxuXHQvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFwcHMvYXV0b3N1Z2dlc3QtYWRkcmVzcy9jaHVua3Mvc3VnZ2VzdGlvbi1yZXN1bHRzXCIgKi9cblx0Lyogd2VicGFja01vZGU6IFwibGF6eVwiICovXG5cdC8qIHdlYnBhY2tQcmVmZXRjaDogdHJ1ZSAqL1xuXHQnLi4vY29tcG9uZW50cy9TdWdnZXN0aW9uUmVzdWx0cydcblx0KVxuKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xuXHRcdHN1cGVyKCBwcm9wcyApO1xuXG5cdFx0dGhpcy5kZWJvdW5jZVNlYXJjaEFkZHJlc2VzID0gZGVib3VuY2UoIHRoaXMuZGVib3VuY2VTZWFyY2hBZGRyZXNlcywgNzAwICk7XG5cdH1cblxuXHRnZXQgcG9zdENvZGVJbnB1dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fcG9zdENvZGVJbnB1dDtcblx0fVxuXG5cdHNldCBwb3N0Q29kZUlucHV0KCBlbCApIHtcblx0XHR0aGlzLl9wb3N0Q29kZUlucHV0ID0gZWw7XG5cdH1cblxuXHRnZXQgYmlsbGluZ0NvdW50cnlJbnB1dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY291bnJ0eUlucHV0O1xuXHR9XG5cblx0c2V0IGJpbGxpbmdDb3VudHJ5SW5wdXQoIGVsICkge1xuXHRcdHRoaXMuX2NvdW5ydHlJbnB1dCA9IGVsO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKCBwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QgKSB7XG5cdFx0aWYgKCBwcmV2UHJvcHMuc2VhcmNoaW5nQWRkcmVzc2VzICYmICF0aGlzLnByb3BzLnNlYXJjaGluZ0FkZHJlc3NlcyApIHtcblx0XHRcdGlmICggaXNFbXB0eSggdGhpcy5wcm9wcy5hZGRyZXNzZXMgKSApIHtcblx0XHRcdFx0dGhpcy5wcm9wcy51bm1vdW50QXBwRW50cnkoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHBvc3Rjb2RlID0gdGhpcy5fcG9zdENvZGVJbnB1dC52YWx1ZTtcblx0XHRcdFx0aWYgKCBwb3N0Y29kZSApIHtcblx0XHRcdFx0XHRjb25zdCBoYXNoID0gbWQ1KCBgJHsgdGhpcy5wcm9wcy5jYWNoZUlkIH1fJHsgcG9zdGNvZGUgfWAgKTtcblx0XHRcdFx0XHRfc2Vzc2lvblN0b3JhZ2Uuc2V0SlNPTiggYHBvc3Rjb2RlXyR7IGhhc2ggfWAsIHRoaXMucHJvcHMuYWRkcmVzc2VzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLl9wb3N0Q29kZUlucHV0ID0gdGhpcy5wcm9wcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoIHBsQXV0b3N1Z2dlc3RBZGRyT2JqLnBvc3Rjb2RlU2VsZWN0b3IgKTtcblx0XHR0aGlzLl9jb3VucnR5SW5wdXQgPSB0aGlzLnByb3BzLmZvcm0ucXVlcnlTZWxlY3RvciggcGxBdXRvc3VnZ2VzdEFkZHJPYmouY291bnRyeVNlbGVjdG9yICk7XG5cdFx0dGhpcy5fYWRkcmVzczFJbnB1dCA9IHRoaXMucHJvcHMuZm9ybS5xdWVyeVNlbGVjdG9yKCBwbEF1dG9zdWdnZXN0QWRkck9iai5hZGRyZXNzMVNlbGVjdG9yICk7XG5cdFx0dGhpcy5fYWRkcmVzczJJbnB1dCA9IHRoaXMucHJvcHMuZm9ybS5xdWVyeVNlbGVjdG9yKCBwbEF1dG9zdWdnZXN0QWRkck9iai5hZGRyZXNzMlNlbGVjdG9yICk7XG5cdFx0dGhpcy5fdG93bklucHV0ID0gdGhpcy5wcm9wcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoIHBsQXV0b3N1Z2dlc3RBZGRyT2JqLmNpdHlTZWxlY3RvciApO1xuXHRcdHRoaXMucG9zdENvZGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCAna2V5dXAnLCB0aGlzLmhhbmRsZVBvc3RDb2RlSW5wdXRDaGFuZ2UgKTtcblxuXHRcdGlmICggdGhpcy5wb3N0Q29kZUlucHV0LnZhbHVlICkge1xuXHRcdFx0dGhpcy5fcXVlcnlBZGRyZXNzZXMoIHRoaXMucG9zdENvZGVJbnB1dC52YWx1ZSApO1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMucG9zdENvZGVJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5dXAnLCB0aGlzLmhhbmRsZVBvc3RDb2RlSW5wdXRDaGFuZ2UgKTtcblx0fVxuXG5cdF9xdWVyeUFkZHJlc3NlcyA9ICggcG9zdGNvZGUgKSA9PiB7XG5cblx0XHRjb25zdCBoYXNoID0gbWQ1KCBgJHsgdGhpcy5wcm9wcy5jYWNoZUlkIH1fJHsgcG9zdGNvZGUgfWAgKTtcblx0XHRjb25zdCBhZGRyZXNzZXMgPSBfc2Vzc2lvblN0b3JhZ2UuZ2V0SlNPTiggYHBvc3Rjb2RlXyR7IGhhc2ggfWAgKTtcblx0XHRpZiAoICFpc0VtcHR5KCBhZGRyZXNzZXMgKSApIHtcblx0XHRcdHRoaXMucHJvcHMuYXBwUHJvcENoYW5nZSggeyBhZGRyZXNzZXMgfSApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBhcmdzID0ge1xuXHRcdFx0ZXAgICAgIDogJ3NlYXJjaC1hZGRyZXNzZXMnLFxuXHRcdFx0bWV0aG9kIDogJ0dFVCcsXG5cdFx0XHRwb3N0Y29kZVxuXHRcdH07XG5cdFx0aWYgKCAhcG9zdGNvZGV4TG9va3VwT2JqLmlzTG9nZ2VkSW4gKSB7XG5cdFx0XHRhcmdzLm9wdGlvbnMgPSB7IGhlYWRlcnMgOiB7fSB9O1xuXHRcdH1cblxuXHRcdHRoaXMucHJvcHMuc2VhcmNoQWRkcmVzc2VzKCBhcmdzICk7XG5cdH07XG5cblx0ZGVib3VuY2VTZWFyY2hBZGRyZXNlcyA9ICggcG9zdGNvZGUgKSA9PiB7XG5cdFx0dGhpcy5fcXVlcnlBZGRyZXNzZXMoIHBvc3Rjb2RlICk7XG5cdH07XG5cblx0aGFuZGxlUG9zdENvZGVJbnB1dENoYW5nZSA9ICggZSApID0+IHtcblx0XHR0aGlzLmRlYm91bmNlU2VhcmNoQWRkcmVzZXMoIGUudGFyZ2V0LnZhbHVlICk7XG5cdH07XG5cblx0aGFuZGxlQ2xpY2tJdGVtID0gKCBhZGRyZXNzLCBlICkgPT4ge1xuXHRcdGNvbnN0IHsgYWRkcmVzc0xpbmUxLCBhZGRyZXNzTGluZTIsIGFkZHJlc3NMaW5lMywgcG9zdFRvd24gfSA9IGFkZHJlc3M7XG5cblx0XHRpZiAoIHRoaXMuX2FkZHJlc3MxSW5wdXQgKSB7XG5cdFx0XHR0aGlzLl9hZGRyZXNzMUlucHV0LnZhbHVlID0gW2FkZHJlc3NMaW5lMSwgYWRkcmVzc0xpbmUyXS5maWx0ZXIoIEJvb2xlYW4gKS5qb2luKCAnLCAnICk7XG5cdFx0fVxuXHRcdGlmICggdGhpcy5fYWRkcmVzczJJbnB1dCApIHtcblx0XHRcdHRoaXMuX2FkZHJlc3MySW5wdXQudmFsdWUgPSBhZGRyZXNzTGluZTM7XG5cdFx0fVxuXHRcdGlmICggdGhpcy5fdG93bklucHV0ICkge1xuXHRcdFx0dGhpcy5fdG93bklucHV0LnZhbHVlID0gcG9zdFRvd247XG5cdFx0fVxuXG5cdFx0dGhpcy5wcm9wcy51bm1vdW50QXBwRW50cnkoKTtcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBzZWFyY2hpbmdBZGRyZXNzZXMsIGFkZHJlc3NlcyB9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGBwb3N0Y29kZXgtbG9va3VwLWFwcCAkeyBzdHlsZS5wb3N0Y29kZXhMb29rdXBBcHAgfWAgfT5cblx0XHRcdFx0eyAoIHNlYXJjaGluZ0FkZHJlc3NlcyAmJiA8cCBjbGFzc05hbWU9eyBzdHlsZS5zZWFyY2hpbmcgfT5TZWFyY2hpbmcuLi48L3A+ICkgfHxcblx0XHRcdFx0KCAhaXNFbXB0eSggYWRkcmVzc2VzICkgJiZcblx0XHRcdFx0XHQ8U3VzcGVuc2UgZmFsbGJhY2s9eyA8TG9hZGluZ0JhciAvPiB9PlxuXHRcdFx0XHRcdFx0PFN1Z2dlc3Rpb25SZXN1bHRzIGFkZHJlc3Nlcz17IGFkZHJlc3NlcyB9IG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrSXRlbSB9IC8+XG5cdFx0XHRcdFx0PC9TdXNwZW5zZT4gKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG5cdHNlYXJjaGluZ0FkZHJlc3NlcyA6IFByb3BUeXBlcy5ib29sLFxuXHRhZGRyZXNzZXMgICAgICAgICAgOiBQcm9wVHlwZXMuYXJyYXksXG5cdHVubW91bnRBcHBFbnRyeSAgICA6IFByb3BUeXBlcy5mdW5jLFxuXHRjYWNoZUlkICAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRmb3JtICAgICAgICAgICAgICAgOiBQcm9wVHlwZXMuaW5zdGFuY2VPZiggRWxlbWVudCApLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBob3QoIG1vZHVsZSApKCBjb25uZWN0KFxuXHRzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLmFwcFxuXHRcdH07XG5cdH0sXG5cdHtcblx0XHRhcHBQcm9wQ2hhbmdlLFxuXHRcdHNlYXJjaEFkZHJlc3Nlcyxcblx0fVxuKSggQXBwICkgKTtcbiIsIi8qKlxuICogQXV0aG9yOiBwb3N0Y29kZXhcbiAqL1xuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSBgJHsgcG9zdGNvZGV4TG9va3VwT2JqLnB1YmxpY1BhdGggfS9gO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGRlYm91bmNlLCB1bmlxdWVJZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9zYWdhcyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29udGFpbmVycy9BcHAnO1xuXG5jb25zdCBwb3N0Q29kZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggcGxBdXRvc3VnZ2VzdEFkZHJPYmoucG9zdGNvZGVTZWxlY3RvciApLFxuICAgICAgY291bnRyeUlucHV0ICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHBsQXV0b3N1Z2dlc3RBZGRyT2JqLmNvdW50cnlTZWxlY3RvciApO1xuXG5jb25zdCBpbml0QXBwID0gKCBmb3JtICkgPT4ge1xuXHRjb25zdCBjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXHRjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5cdGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoIHJlZHVjZXJzLCBjb21wb3NlRW5oYW5jZXJzKCBhcHBseU1pZGRsZXdhcmUoIHNhZ2FNaWRkbGV3YXJlICkgKSApO1xuXHRzYWdhTWlkZGxld2FyZS5ydW4oIHJvb3RTYWdhICk7XG5cblx0Y29uc3QgcG9zdGNvZGVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvciggcGxBdXRvc3VnZ2VzdEFkZHJPYmoucG9zdGNvZGVTZWxlY3RvciApO1xuXHRjb25zdCBmb3JtRGF0YVBsQXBwID0gZm9ybS5nZXRBdHRyaWJ1dGUoICdkYXRhLXBsLWFwcCcgKTtcblx0Y29uc3QgY2FjaGVJZCA9IGZvcm1EYXRhUGxBcHAgPz8gdW5pcXVlSWQoICdwbEFwcCcgKTtcblx0aWYgKCAhZm9ybURhdGFQbEFwcCApIHtcblx0XHRmb3JtLnNldEF0dHJpYnV0ZSggJ2RhdGEtcGwtYXBwJywgY2FjaGVJZCApO1xuXHR9XG5cblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdHJvb3QuaWQgPSBjYWNoZUlkO1xuXHRyb290LmNsYXNzTGlzdC5hZGQoICdwbC1hdXRvc3VnZ2VzdC1hZGRyZXNzJywgJ3BsLWN1c3RvbScgKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggcm9vdCApO1xuXG5cdGNvbnN0IGN1bXVsYXRpdmVPZmZzZXQgPSAoIG1haW5FbGVtZW50ICkgPT4ge1xuXHRcdGxldCB0b3AgPSAwLFxuXHRcdCAgICBsZWZ0ID0gMCxcblx0XHQgICAgZWxlbWVudCA9IG1haW5FbGVtZW50O1xuXG5cdFx0ZG8ge1xuXHRcdFx0dG9wICs9IGVsZW1lbnQub2Zmc2V0VG9wIHx8IDA7XG5cdFx0XHRsZWZ0ICs9IGVsZW1lbnQub2Zmc2V0TGVmdCB8fCAwO1xuXHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuXHRcdH0gd2hpbGUgKCBlbGVtZW50ICk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9wICA6IHRvcCArIG1haW5FbGVtZW50Lm9mZnNldEhlaWdodCxcblx0XHRcdGxlZnQgOiBsZWZ0XG5cdFx0fTtcblx0fTtcblx0Y29uc3Qgb2Zmc2V0ID0gY3VtdWxhdGl2ZU9mZnNldCggcG9zdGNvZGVJbnB1dCApO1xuXG5cdGxldCBhZG1pbkJhckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnd3BhZG1pbmJhcicgKT8ub2Zmc2V0SGVpZ2h0ID8/IDA7XG5cdHJvb3Quc3R5bGUudG9wID0gb2Zmc2V0LnRvcCArIGFkbWluQmFySGVpZ2h0ICsgJ3B4Jztcblx0cm9vdC5zdHlsZS5sZWZ0ID0gb2Zmc2V0LmxlZnQgKyAncHgnO1xuXHRyb290LnN0eWxlLndpZHRoID0gMjAwIDwgcG9zdGNvZGVJbnB1dC5jbGllbnRXaWR0aCA/IHBvc3Rjb2RlSW5wdXQuY2xpZW50V2lkdGggKyAncHgnIDogJzIwMHB4JztcblxuXHRSZWFjdERPTS5yZW5kZXIoXG5cdFx0PFByb3ZpZGVyIHN0b3JlPXsgc3RvcmUgfT5cblx0XHRcdDxBcHBcblx0XHRcdFx0dW5tb3VudEFwcEVudHJ5PXsgdW5tb3VudEFwcEVudHJ5IH1cblx0XHRcdFx0Y2FjaGVJZD17IGNhY2hlSWQgfVxuXHRcdFx0XHRmb3JtPXsgZm9ybSB9XG5cdFx0XHQvPlxuXHRcdDwvUHJvdmlkZXI+LFxuXHRcdHJvb3Rcblx0KTtcbn07XG5cbmNvbnN0IHVubW91bnRBcHBFbnRyeSA9ICgpID0+IHtcblx0Y29uc3QgYXBwUm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGwtYXV0b3N1Z2dlc3QtYWRkcmVzcycgKTtcblx0aWYgKCAhYXBwUm9vdCApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0UmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSggZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wbC1hdXRvc3VnZ2VzdC1hZGRyZXNzJyApICk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGwtYXV0b3N1Z2dlc3QtYWRkcmVzcycgKS5yZW1vdmUoKTtcbn07XG5cbmNvbnN0IHRvZ2dsZUZpZWxkc0Rpc3BsYXkgPSAoIHNob3cgPSB0cnVlICkgPT4ge1xuXHRjb25zdCBpbnB1dEZpZWxkcyA9IFtcblx0XHRwbEF1dG9zdWdnZXN0QWRkck9iai5hZGRyZXNzMVNlbGVjdG9yLFxuXHRcdHBsQXV0b3N1Z2dlc3RBZGRyT2JqLmFkZHJlc3MyU2VsZWN0b3IsXG5cdFx0cGxBdXRvc3VnZ2VzdEFkZHJPYmouY2l0eVNlbGVjdG9yLFxuXHRdO1xuXG5cdGlmICggIXNob3cgKSB7XG5cdFx0aW5wdXRGaWVsZHMuZm9yRWFjaCggZmllbGRJZCA9PiB7XG5cdFx0XHRjb25zdCBmaWVsZCAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBmaWVsZElkICksXG5cdFx0XHQgICAgICBjb250YWluZXIgPSBmaWVsZD8uY2xvc2VzdCggYCR7IGZpZWxkSWQgfV9maWVsZGAgKTtcblx0XHRcdGlmICggY29udGFpbmVyICkge1xuXHRcdFx0XHRjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0gZWxzZSB7XG5cdFx0aW5wdXRGaWVsZHMuZm9yRWFjaCggZmllbGRJZCA9PiB7XG5cdFx0XHRjb25zdCBmaWVsZCAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBmaWVsZElkICksXG5cdFx0XHQgICAgICBjb250YWluZXIgPSBmaWVsZD8uY2xvc2VzdCggYCR7IGZpZWxkSWQgfV9maWVsZGAgKTtcblx0XHRcdGlmICggY29udGFpbmVyICkge1xuXHRcdFx0XHRjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59O1xuXG5jb25zdCB0b2dnbGVQb3N0Q29kZURlc2MgPSAoIHNob3cgPSB0cnVlICkgPT4ge1xuXHRsZXQgcG9zdGNvZGVEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5wbC1wb3N0Y29kZS1kZXNjJyApO1xuXHRpZiAoICFwb3N0Y29kZURlc2MubGVuZ3RoICYmIHNob3cgKSB7XG5cdFx0cG9zdGNvZGVEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG5cdFx0cG9zdGNvZGVEZXNjLmNsYXNzTGlzdC5hZGQoICdwbC1wb3N0Y29kZS1kZXNjJyApO1xuXHRcdGlmICggJ3llcycgPT09IHBsQXV0b3N1Z2dlc3RBZGRyT2JqLmF1dG9zZWFyY2ggKSB7XG5cdFx0XHRwb3N0Y29kZURlc2MuaW5uZXJUZXh0ID0gJ0VudGVyIHlvdXIgcG9zdGNvZGUgdG8gYXV0b21hdGljYWxseSBmaW5kIHlvdXIgYWRkcmVzcy4nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwb3N0Y29kZURlc2MuaW5uZXJIVE1MID0gJ0VudGVyIHlvdXIgcG9zdGNvZGUgYW5kIGNsaWNrIDxjb2RlPlNFQVJDSDwvY29kZT4gYnV0dG9uIHRvIGZpbmQgeW91ciBhZGRyZXNzLic7XG5cdFx0fVxuXG5cdFx0cG9zdENvZGVJbnB1dC5mb3JFYWNoKCBub2RlID0+IHtcblx0XHRcdG5vZGUuY2xvc2VzdCggYCMkeyBub2RlLmlkIH1fZmllbGRgICk/LmFwcGVuZENoaWxkKCBwb3N0Y29kZURlc2MgKTtcblx0XHR9ICk7XG5cdH0gZWxzZSBpZiAoIHBvc3Rjb2RlRGVzYyApIHtcblx0XHRwb3N0Q29kZUlucHV0LmZvckVhY2goIG5vZGUgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coIG5vZGUgKTtcblx0XHRcdG5vZGUuY2xvc2VzdCggYCMkeyBub2RlLmlkIH1fZmllbGRgICk/LnJlbW92ZUNoaWxkKCBwb3N0Y29kZURlc2MgKTtcblx0XHR9ICk7XG5cdH1cbn07XG5cbmNvbnN0IHRvZ2dsZVNlYXJjaEJ0bkRpc3BsYXkgPSAoIHNob3cgPSB0cnVlICkgPT4ge1xuXHRjb25zdCB7IGF1dG9zZWFyY2gsIGlzQ2hlY2tvdXQgfSA9IHBsQXV0b3N1Z2dlc3RBZGRyT2JqO1xuXG5cdGlmICggKCAhaXNDaGVja291dCB8fCAoIGlzQ2hlY2tvdXQgJiYgY291bnRyeUlucHV0ICYmICdHQicgPT09IGNvdW50cnlJbnB1dC52YWx1ZSApICkgJiYgc2hvdyAmJiAnbm8nID09PSBhdXRvc2VhcmNoICkge1xuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCggJ3BsLW5vLWF1dG9zdWdnZXN0JyApO1xuXHRcdHBvc3RDb2RlSW5wdXQuZm9yRWFjaCggbm9kZSA9PiB7XG5cdFx0XHRjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnYnV0dG9uJyApO1xuXHRcdFx0c2VhcmNoQnRuLmNsYXNzTGlzdC5hZGQoICdwbC1zZWFyY2gtYWRkcmVzc2VzLWJ0bicsICdidG4nLCAnYnRuLXNlY29uZGFyeScgKTtcblx0XHRcdHNlYXJjaEJ0bi50eXBlID0gJ2J1dHRvbic7XG5cdFx0XHRzZWFyY2hCdG4udGV4dENvbnRlbnQgPSAnU2VhcmNoJztcblx0XHRcdHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBoYW5kbGVTZWFyY2hCdG5DbGljayApO1xuXHRcdFx0bm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSggc2VhcmNoQnRuLCBub2RlLm5leHRTaWJsaW5nICk7XG5cdFx0fSApO1xuXHR9IGVsc2UgaWYgKCAnbm8nID09PSBhdXRvc2VhcmNoICYmICggIXNob3cgfHwgKCBpc0NoZWNrb3V0ICYmIGNvdW50cnlJbnB1dCAmJiAnR0InICE9PSBjb3VudHJ5SW5wdXQudmFsdWUgKSApICkge1xuXHRcdGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcucGwtc2VhcmNoLWFkZHJlc3Nlcy1idG4nICk7XG5cdFx0aWYgKCAhIXNlYXJjaEJ0bi5sZW5ndGggKSB7XG5cdFx0XHRzZWFyY2hCdG4uZm9yRWFjaCggYnRuID0+IHtcblx0XHRcdFx0YnRuLnJlbW92ZSgpO1xuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdwbC1uby1hdXRvc3VnZ2VzdCcgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IGhhbmRsZVNlYXJjaEJ0bkNsaWNrID0gKCBlICkgPT4ge1xuXHRjb25zdCBmb3JtID0gZS50YXJnZXQuY2xvc2VzdCggJ2Zvcm0nICk7XG5cdGluaXRBcHAoIGZvcm0gKTtcbn07XG5cbmNvbnN0IGRlYm91bmNlZFRvZ2dsZUZpZWxkc0Rpc3BsYXkgPSBkZWJvdW5jZSggKCkgPT4geyB0b2dnbGVGaWVsZHNEaXNwbGF5KCBmYWxzZSApO30sIDEwICk7XG5cbmNvbnN0IHBvc3RDb2RlQ2hhbmdlID0gKCBlICkgPT4ge1xuXHRjb25zdCBmb3JtID0gZS50YXJnZXQuY2xvc2VzdCggJ2Zvcm0nICk7XG5cdGlmICggKCBwbEF1dG9zdWdnZXN0QWRkck9iai5pc0NoZWNrb3V0ICYmIGNvdW50cnlJbnB1dCAmJiAnR0InID09PSBjb3VudHJ5SW5wdXQudmFsdWUgKSB8fFxuXHRcdCFmb3JtLnF1ZXJ5U2VsZWN0b3IoICcucGwtYXV0b3N1Z2dlc3QtYWRkcmVzcycgKSAmJiAyIDw9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKS5sZW5ndGggKSB7XG5cdFx0aW5pdEFwcCggZm9ybSApO1xuXHR9IGVsc2UgaWYgKCBmb3JtLnF1ZXJ5U2VsZWN0b3IoICcucGwtYXV0b3N1Z2dlc3QtYWRkcmVzcycgKSAmJiAyID4gZS50YXJnZXQudmFsdWUudHJpbSgpLmxlbmd0aCApIHtcblx0XHR1bm1vdW50QXBwRW50cnkoIGZvcm0gKTtcblx0fVxufTtcblxuY29uc3QgZGVib3VuY2VQb3N0Y29kZUNoYW5nZSA9IGRlYm91bmNlKCAoIGUgKSA9PiB7IHBvc3RDb2RlQ2hhbmdlKCBlICk7fSwgNzAwICk7XG5cbmlmICggISFwb3N0Q29kZUlucHV0Lmxlbmd0aCAmJiAneWVzJyA9PT0gcGxBdXRvc3VnZ2VzdEFkZHJPYmouYXV0b3NlYXJjaCApIHtcblx0cG9zdENvZGVJbnB1dC5mb3JFYWNoKCBub2RlID0+IHtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdrZXl1cCcsIGRlYm91bmNlUG9zdGNvZGVDaGFuZ2UgKTtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdmb2N1cycsIHBvc3RDb2RlQ2hhbmdlICk7XG5cdH0gKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsICggZSApID0+IHtcblx0Y29uc3QgYXBwTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcucGwtYXV0b3N1Z2dlc3QtYWRkcmVzcycgKTtcblx0cG9zdENvZGVJbnB1dC5mb3JFYWNoKCBpbnB1dCA9PiB7XG5cdFx0aWYgKCBpbnB1dCAmJiAhaW5wdXQ/LmNvbnRhaW5zKCBlLnRhcmdldCApICYmICEhYXBwTm9kZS5sZW5ndGggKSB7XG5cdFx0XHRhcHBOb2RlLmZvckVhY2goIG5vZGUgPT4ge1xuXHRcdFx0XHRpZiAoICFub2RlLmNvbnRhaW5zKCBlLnRhcmdldCApICkge1xuXHRcdFx0XHRcdHVubW91bnRBcHBFbnRyeSggbm9kZS5jbG9zZXN0KCAnZm9ybScgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9ICk7XG59ICk7XG5cbiQoIHBsQXV0b3N1Z2dlc3RBZGRyT2JqLmNvdW50cnlTZWxlY3RvciApLm9uKCAnY2hhbmdlJywgKCBlICkgPT4ge1xuXHRpZiAoICdHQicgPT09IGUudGFyZ2V0LnZhbHVlICkge1xuXHRcdHRvZ2dsZVBvc3RDb2RlRGVzYygpO1xuXHRcdHRvZ2dsZVNlYXJjaEJ0bkRpc3BsYXkoKTtcblx0fSBlbHNlIHtcblx0XHR1bm1vdW50QXBwRW50cnkoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHBsQXV0b3N1Z2dlc3RBZGRyT2JqLmNvdW50cnlTZWxlY3RvciApLmNsb3Nlc3QoICdmb3JtJyApICk7XG5cdFx0dG9nZ2xlUG9zdENvZGVEZXNjKCBmYWxzZSApO1xuXHRcdHRvZ2dsZVNlYXJjaEJ0bkRpc3BsYXkoIGZhbHNlICk7XG5cdH1cbn0gKTtcblxuJCggZnVuY3Rpb24gKCkge1xuXHRpZiAoICFwbEF1dG9zdWdnZXN0QWRkck9iai5pc0NoZWNrb3V0IHx8ICggcGxBdXRvc3VnZ2VzdEFkZHJPYmouaXNDaGVja291dCAmJiBjb3VudHJ5SW5wdXQgJiYgJ0dCJyA9PT0gY291bnRyeUlucHV0LnZhbHVlICkgKSB7XG5cdFx0dG9nZ2xlUG9zdENvZGVEZXNjKCk7XG5cdFx0dG9nZ2xlU2VhcmNoQnRuRGlzcGxheSgpO1xuXHR9XG59ICk7XG4iLCIvKipcbiAqIEF1dGhvcjogcG9zdGNvZGV4XG4gKiBEYXRlOiAyMDE4LzA4LzIzXG4gKiBUaW1lOiAyOjAxIFBNXG4gKi9cbmltcG9ydCB7XG5cdEFQUF9QUk9QX0NIQU5HRSxcblx0U0VBUkNIX0FERFJFU1NFUyxcblx0U0VBUkNIX0FERFJFU1NFU19TVUNDRVNTLFxuXHRTRUFSQ0hfQUREUkVTU0VTX0VSUk9SLFxufSBmcm9tICcuLi9hY3Rpb25zJztcblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcblx0c2VhcmNoaW5nQWRkcmVzc2VzIDogZmFsc2UsXG5cdGFkZHJlc3NlcyAgICAgICAgICA6IFtdLFxuXHRzZWFyY2hFcnJvciAgICAgICAgOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCBzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbiApIHtcblx0c3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XG5cdFx0Y2FzZSBBUFBfUFJPUF9DSEFOR0U6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Li4uYWN0aW9uLnBheWxvYWQsXG5cdFx0XHR9O1xuXHRcdGNhc2UgU0VBUkNIX0FERFJFU1NFUzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHQuLi5hY3Rpb24ucGF5bG9hZCxcblx0XHRcdFx0c2VhcmNoaW5nQWRkcmVzc2VzIDogdHJ1ZSxcblx0XHRcdH07XG5cdFx0Y2FzZSBTRUFSQ0hfQUREUkVTU0VTX1NVQ0NFU1M6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Li4uYWN0aW9uLmRhdGEsXG5cdFx0XHRcdHNlYXJjaGluZ0FkZHJlc3NlcyA6IGZhbHNlLFxuXHRcdFx0fTtcblx0XHRjYXNlIFNFQVJDSF9BRERSRVNTRVNfRVJST1I6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2VhcmNoRXJyb3IgOiB7IC4uLmFjdGlvbi5lcnJvci5yZXNwb25zZS5kYXRhIH0sXG5cdFx0XHRcdHNlYXJjaGluZ0FkZHJlc3NlcyA6IGZhbHNlLFxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG4iLCIvKipcbiAqIEF1dGhvcjogcG9zdGNvZGV4XG4gKiBEYXRlOiAyMDE4LzA4LzIzXG4gKiBUaW1lOiAxOjU3IFBNXG4gKi9cbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBBcHBSZWR1Y2VyIGZyb20gJy4vYXBwJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKFxuXHR7XG5cdFx0YXBwIDogQXBwUmVkdWNlclxuXHR9XG4pO1xuIiwiLyoqXG4gKiBBdXRob3I6IHBvc3Rjb2RleFxuICogRGF0ZTogMTAvNS8yMFxuICogVGltZTogNTo1OCBQTVxuICovXG5pbXBvcnQgeyBwdXQsIGNhbGwsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgYXBpUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2FwaSc7XG5pbXBvcnQgeyBTRUFSQ0hfQUREUkVTU0VTLCBTRUFSQ0hfQUREUkVTU0VTX1NVQ0NFU1MsIFNFQVJDSF9BRERSRVNTRVNfRVJST1IgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuLy9yZWdpb24gUmVndWxhciBBSkFYIHJlcXVlc3RcbmZ1bmN0aW9uKiBzZW5kU2VhcmNoQWRkcmVzc2VzKCBhY3Rpb24gKSB7XG5cdGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHlpZWxkIGNhbGwoIGFwaVJlcXVlc3QsIGFjdGlvbi5wYXlsb2FkICk7XG5cblx0aWYgKCBkYXRhICkge1xuXHRcdHlpZWxkIHB1dCggeyB0eXBlIDogU0VBUkNIX0FERFJFU1NFU19TVUNDRVNTLCBkYXRhIH0gKTtcblx0fSBlbHNlIHtcblx0XHR5aWVsZCBwdXQoIHsgdHlwZSA6IFNFQVJDSF9BRERSRVNTRVNfRVJST1IsIGVycm9yIH0gKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIHdhdGNoU2VhcmNoQWRkcmVzc2VzKCkge1xuXHR5aWVsZCB0YWtlTGF0ZXN0KCBTRUFSQ0hfQUREUkVTU0VTLCBzZW5kU2VhcmNoQWRkcmVzc2VzICk7XG59XG5cbi8vZW5kcmVnaW9uXG4iLCIvKipcbiAqIEF1dGhvcjogcG9zdGNvZGV4XG4gKiBEYXRlOiAyMDE4LzA4LzIzXG4gKiBUaW1lOiAxOjU3IFBNXG4gKi9cbmltcG9ydCB7IGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyB3YXRjaFNlYXJjaEFkZHJlc3NlcyB9IGZyb20gJy4vYXBwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuXHR5aWVsZCBhbGwoIFtcblx0XHR3YXRjaFNlYXJjaEFkZHJlc3NlcygpXG5cdF0gKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicG9zdGNvZGV4LWxvb2t1cC1hcHBcIjpcInBvc3Rjb2RleC1sb29rdXAtYXBwLTJhWTg1T1VVXCIsXCJwb3N0Y29kZXhMb29rdXBBcHBcIjpcInBvc3Rjb2RleC1sb29rdXAtYXBwLTJhWTg1T1VVXCIsXCJzZWFyY2hpbmdcIjpcInNlYXJjaGluZy1jRXNqakU1LVwiLFwic2VhcmNoLXJlc3VsdHMtY29udGFpbmVyXCI6XCJzZWFyY2gtcmVzdWx0cy1jb250YWluZXItV3ZiLXV4NFZcIixcInNlYXJjaFJlc3VsdHNDb250YWluZXJcIjpcInNlYXJjaC1yZXN1bHRzLWNvbnRhaW5lci1XdmItdXg0VlwiLFwicmVzdWx0cy1oZWFkaW5nXCI6XCJyZXN1bHRzLWhlYWRpbmctMXdRalF3XzhcIixcInJlc3VsdHNIZWFkaW5nXCI6XCJyZXN1bHRzLWhlYWRpbmctMXdRalF3XzhcIixcInJlc3VsdC1pdGVtXCI6XCJyZXN1bHQtaXRlbS0yTHJ3azlsUlwiLFwicmVzdWx0SXRlbVwiOlwicmVzdWx0LWl0ZW0tMkxyd2s5bFJcIn07IiwiLyoqXG4gKiBBdXRob3I6IHBvc3Rjb2RleFxuICogRGF0ZTogMTAvNy8yMFxuICogVGltZTogMTA6NDkgQU1cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTG9hZGluZyA9ICggcHJvcHMgKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHN2Z1xuXHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRzdHlsZT17IHsgbWFyZ2luIDogMCwgYmFja2dyb3VuZCA6ICd0cmFuc3BhcmVudCcsIGRpc3BsYXkgOiAnaW5saW5lLWJsb2NrJyB9IH1cblx0XHRcdHdpZHRoPVwiMzJweFwiXG5cdFx0XHRoZWlnaHQ9XCIzMnB4XCJcblx0XHRcdHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG5cdFx0XHRwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIlxuXHRcdD5cblx0XHRcdDxyZWN0IHg9XCIwXCIgeT1cIjMwXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjQwXCIgZmlsbD1cIiMzNTM1MzVcIj5cblx0XHRcdFx0PGFuaW1hdGVcblx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIGR1cj1cIjJzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC41OzFcIlxuXHRcdFx0XHRcdGtleVNwbGluZXM9XCIwLjUgMCAwLjUgMTswLjUgMCAwLjUgMVwiIHZhbHVlcz1cIjE7MC4yOzFcIiBiZWdpbj1cIi0xLjJcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9yZWN0PlxuXHRcdFx0PHJlY3QgeD1cIjIwXCIgeT1cIjMwXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjQwXCIgZmlsbD1cIiM2NjY2NjZcIj5cblx0XHRcdFx0PGFuaW1hdGVcblx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIGR1cj1cIjJzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC41OzFcIlxuXHRcdFx0XHRcdGtleVNwbGluZXM9XCIwLjUgMCAwLjUgMTswLjUgMCAwLjUgMVwiIHZhbHVlcz1cIjE7MC4yOzFcIiBiZWdpbj1cIi0wLjhcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9yZWN0PlxuXHRcdFx0PHJlY3QgeD1cIjQwXCIgeT1cIjMwXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjQwXCIgZmlsbD1cIiM5YjliOWJcIj5cblx0XHRcdFx0PGFuaW1hdGVcblx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIGR1cj1cIjJzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC41OzFcIlxuXHRcdFx0XHRcdGtleVNwbGluZXM9XCIwLjUgMCAwLjUgMTswLjUgMCAwLjUgMVwiIHZhbHVlcz1cIjE7MC4yOzFcIiBiZWdpbj1cIi0wLjRcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9yZWN0PlxuXHRcdFx0PHJlY3QgeD1cIjYwXCIgeT1cIjMwXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjQwXCIgZmlsbD1cIiNkNGQ0ZDRcIj5cblx0XHRcdFx0PGFuaW1hdGVcblx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIGR1cj1cIjJzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC41OzFcIlxuXHRcdFx0XHRcdGtleVNwbGluZXM9XCIwLjUgMCAwLjUgMTswLjUgMCAwLjUgMVwiIHZhbHVlcz1cIjE7MC4yOzFcIiBiZWdpbj1cIi0yXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvcmVjdD5cblx0XHRcdDxyZWN0IHg9XCI4MFwiIHk9XCIzMFwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCI0MFwiIGZpbGw9XCIjZTNlM2UzXCI+XG5cdFx0XHRcdDxhbmltYXRlXG5cdFx0XHRcdFx0YXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiBkdXI9XCIyc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuNTsxXCJcblx0XHRcdFx0XHRrZXlTcGxpbmVzPVwiMC41IDAgMC41IDE7MC41IDAgMC41IDFcIiB2YWx1ZXM9XCIxOzAuMjsxXCIgYmVnaW49XCItMlwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L3JlY3Q+XG5cdFx0PC9zdmc+XG5cdCk7XG59O1xuXG5Mb2FkaW5nLnByb3BUeXBlcyA9IHt9O1xuXG5Mb2FkaW5nLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwibW9kdWxlLmV4cG9ydHMgPSBsb2Rhc2g7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyJdLCJzb3VyY2VSb290IjoiIn0=