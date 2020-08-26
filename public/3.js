(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
  name: 'ProductPage',
  data: function data() {
    return {
      info: null,
      loading: true,
      errored: false,
      hideAlert: false
    };
  },
  methods: {
    closeAlert: function closeAlert() {
      this.hideAlert = true;
    }
  },
  mounted: function mounted() {
    var _this = this;

    console.log('product mounted.');
    axios.get('/api/post').then(function (response) {
      _this.info = response.data.data;
    })["catch"](function (errors) {
      console.log(errors);
      _this.errored = true;
    })["finally"](function () {
      return _this.loading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductPage.vue?vue&type=template&id=26955003&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductPage.vue?vue&type=template&id=26955003& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    ? _c("section", [
        _c(
          "div",
          {
            staticClass:
              "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",
            class: { hidden: _vm.hideAlert },
            attrs: { role: "alert" }
          },
          [
            _c("strong", { staticClass: "font-bold" }, [_vm._v("errors")]),
            _vm._v(" "),
            _c("span", { staticClass: "block sm:inline" }, [
              _vm._v(
                "We're sorry, we're not able to retrieve this information at the moment, please try back later"
              )
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
                    staticClass: "fill-current h-6 w-6 text-red-500",
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
      ])
    : _c("section", [
        _c(
          "div",
          { staticClass: "grid grid-cols-3 gap-4 mt-2" },
          [
            _vm.loading
              ? _c("div", [_vm._v("Loading...")])
              : _vm._l(_vm.info, function(post) {
                  return _c(
                    "div",
                    {
                      staticClass: "max-w-sm rounded overflow-hidden shadow-lg"
                    },
                    [
                      _c("div", [
                        _c("img", {
                          staticClass: "w-full",
                          attrs: {
                            src: "https://tailwindcss.com/img/card-top.jpg",
                            alt: "Sunset in the mountains"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "px-6 py-4" }, [
                          _c("div", { staticClass: "font-bold text-xl mb-2" }, [
                            _vm._v(" " + _vm._s(post.title) + " ")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "font-bold text-sm my-1" }, [
                            _vm._v(_vm._s(post.author))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-gray-700 text-base" }, [
                            _vm._v(
                              "\n\t\t\t\t\t" +
                                _vm._s(post.description) +
                                "\n\t\t\t\t\t"
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "font-bold text-sm my-1" }, [
                            _vm._v(_vm._s(post.updated_at))
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(0, true)
                      ])
                    ]
                  )
                })
          ],
          2
        )
      ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "px-6 pt-4 pb-2" }, [
      _c(
        "span",
        {
          staticClass:
            "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        },
        [_vm._v("\n\t\t\t\t\t#photography\n\t\t\t\t\t")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ProductPage.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ProductPage.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductPage_vue_vue_type_template_id_26955003___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductPage.vue?vue&type=template&id=26955003& */ "./resources/js/components/ProductPage.vue?vue&type=template&id=26955003&");
/* harmony import */ var _ProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductPage.vue?vue&type=script&lang=js& */ "./resources/js/components/ProductPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductPage_vue_vue_type_template_id_26955003___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductPage_vue_vue_type_template_id_26955003___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProductPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProductPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ProductPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProductPage.vue?vue&type=template&id=26955003&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ProductPage.vue?vue&type=template&id=26955003& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPage_vue_vue_type_template_id_26955003___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPage.vue?vue&type=template&id=26955003& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductPage.vue?vue&type=template&id=26955003&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPage_vue_vue_type_template_id_26955003___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPage_vue_vue_type_template_id_26955003___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);