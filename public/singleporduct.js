(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["singleporduct"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheAlertComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheAlertComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TheAlertComponent",
  props: ['msg', 'alertType'],
  computed: {
    alertCloseXType: function alertCloseXType() {
      return this.alertType + "-close";
    }
  },
  data: function data() {
    return {
      hideAlert: false
    };
  },
  methods: {
    closeAlert: function closeAlert() {
      this.hideAlert = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SingleProduct.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SingleProduct.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TheAlertComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TheAlertComponent.vue */ "./resources/js/components/TheAlertComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SingleProduct',
  components: {
    TheAlertComponent: _components_TheAlertComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    id: {
      required: true,
      type: Number | String
    }
  },
  data: function data() {
    return {
      info: "",
      loading: true,
      errored: false,
      hideAlert: false
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/api/post/".concat(this.id)).then(function (response) {
      _this.info = response.data.data;
      console.log(_this.info);
    })["catch"](function (errors) {
      console.log(errors);
      _this.errored = true;
    })["finally"](function () {
      return _this.loading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheAlertComponent.vue?vue&type=template&id=90d2fc12&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheAlertComponent.vue?vue&type=template&id=90d2fc12& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "alert",
      class: [{ hidden: _vm.hideAlert }, _vm.alertType],
      attrs: { role: "alert" }
    },
    [
      _c("strong", { staticClass: "font-bold" }, [_vm._v(" message :  ")]),
      _vm._v(" "),
      _c("span", { staticClass: "block sm:inline" }, [
        _vm._v("\n          " + _vm._s(_vm.msg) + "\n      ")
      ]),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "absolute top-0 bottom-0 right-0 px-4 py-3",
          on: { click: _vm.closeAlert }
        },
        [
          _c(
            "svg",
            {
              staticClass: "fill-current h-6 w-6",
              class: _vm.alertCloseXType,
              attrs: {
                role: "button",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20"
              }
            },
            [
              _c("title", [_vm._v("Close")]),
              _c("path", {
                attrs: {
                  d:
                    "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                }
              })
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SingleProduct.vue?vue&type=template&id=55d32178&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SingleProduct.vue?vue&type=template&id=55d32178& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.errored
    ? _c(
        "section",
        [
          _c("TheAlertComponent", {
            attrs: { msg: "Post Not Found", alertType: "alert-danger" }
          })
        ],
        1
      )
    : _c("section", [
        _vm.loading
          ? _c("div", [_vm._v("Loading...")])
          : _c("div", { staticClass: "mx-auto w-full mt-5  " }, [
              _c("div", { staticClass: " h-full  px-8" }, [
                _c("img", {
                  staticStyle: { width: "200px,height:200px" },
                  attrs: { src: _vm.info.image, alt: "..." }
                }),
                _vm._v(" "),
                _c("h1", { staticClass: "py-2 " }, [
                  _vm._v("title:  " + _vm._s(_vm.info.title))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-green-400" }, [
                  _vm._v(" author : "),
                  _c("span", { staticClass: "font-bold text-xl" }, [
                    _vm._v(" " + _vm._s(_vm.info.author) + " ")
                  ])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-red-400" }, [
                  _vm._v("last updated : "),
                  _c("span", { staticClass: "font-bold text-xl" }, [
                    _vm._v("  " + _vm._s(_vm.info.updated_at) + " ")
                  ])
                ]),
                _vm._v(" "),
                _c("p", {
                  domProps: { innerHTML: _vm._s(_vm.info.description) }
                })
              ])
            ])
      ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/TheAlertComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/TheAlertComponent.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheAlertComponent_vue_vue_type_template_id_90d2fc12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheAlertComponent.vue?vue&type=template&id=90d2fc12& */ "./resources/js/components/TheAlertComponent.vue?vue&type=template&id=90d2fc12&");
/* harmony import */ var _TheAlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheAlertComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/TheAlertComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheAlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheAlertComponent_vue_vue_type_template_id_90d2fc12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheAlertComponent_vue_vue_type_template_id_90d2fc12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TheAlertComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TheAlertComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/TheAlertComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheAlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TheAlertComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheAlertComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheAlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TheAlertComponent.vue?vue&type=template&id=90d2fc12&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/TheAlertComponent.vue?vue&type=template&id=90d2fc12& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheAlertComponent_vue_vue_type_template_id_90d2fc12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TheAlertComponent.vue?vue&type=template&id=90d2fc12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheAlertComponent.vue?vue&type=template&id=90d2fc12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheAlertComponent_vue_vue_type_template_id_90d2fc12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheAlertComponent_vue_vue_type_template_id_90d2fc12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/SingleProduct.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/SingleProduct.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleProduct_vue_vue_type_template_id_55d32178___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=template&id=55d32178& */ "./resources/js/views/SingleProduct.vue?vue&type=template&id=55d32178&");
/* harmony import */ var _SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=script&lang=js& */ "./resources/js/views/SingleProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleProduct_vue_vue_type_template_id_55d32178___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleProduct_vue_vue_type_template_id_55d32178___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SingleProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/SingleProduct.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/SingleProduct.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SingleProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SingleProduct.vue?vue&type=template&id=55d32178&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/SingleProduct.vue?vue&type=template&id=55d32178& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_55d32178___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=template&id=55d32178& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SingleProduct.vue?vue&type=template&id=55d32178&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_55d32178___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_55d32178___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);