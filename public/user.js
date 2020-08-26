(window.webpackJsonp=window.webpackJsonp||[]).push([[9],[,function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return O.default}}),t.helpers=void 0;var a=C(r(24)),i=C(r(27)),o=C(r(28)),u=C(r(29)),l=C(r(30)),s=C(r(31)),d=C(r(32)),f=C(r(33)),c=C(r(34)),m=C(r(35)),p=C(r(36)),v=C(r(37)),g=C(r(38)),y=C(r(39)),b=C(r(40)),h=C(r(41)),_=C(r(42)),w=C(r(43)),x=C(r(44)),P=C(r(45)),O=C(r(46)),j=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=$();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(2));function $(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return $=function(){return e},e}function C(e){return e&&e.__esModule?e:{default:e}}t.helpers=j},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return a.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,a=(n=r(25))&&n.__esModule?n:{default:n};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;t.len=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,a.default)({type:e},(function(e){return!o(e)||t.test(e)}))}},function(e,t,r){"use strict";var n={name:"TheAlertComponent",props:["msg","alertType"],computed:{alertCloseXType:function(){return this.alertType+"-close"}},data:function(){return{hideAlert:!1}},methods:{closeAlert:function(){this.hideAlert=!0}}},a=r(0),i=Object(a.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"alert",class:[{hidden:e.hideAlert},e.alertType],attrs:{role:"alert"}},[r("strong",{staticClass:"font-bold"},[e._v(" message :  ")]),e._v(" "),r("span",{staticClass:"block sm:inline"},[e._v("\n          "+e._s(e.msg)+"\n      ")]),e._v(" "),r("span",{staticClass:"absolute top-0 bottom-0 right-0 px-4 py-3",on:{click:e.closeAlert}},[r("svg",{staticClass:"fill-current h-6 w-6",class:e.alertCloseXType,attrs:{role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("title",[e._v("Close")]),r("path",{attrs:{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"}})])])])}),[],!1,null,null,null);t.a=i.exports},,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(2).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(26).withParams:r(11).withParams;t.default=n}).call(this,r(9))},function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},a=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=a}).call(this,r(6))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(2).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(2).regex)("numeric",/^[0-9]*$/);t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(2).regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2),a=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)}));t.default=a;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(a)}))};var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2),a=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(2).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(2).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(2).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";r.r(t);var n={name:"User",components:{TheAlertComponent:r(3).a},data:function(){return{name:null,email:null,user_id:null,loading:!0,errored:!1}},methods:{retrieveUserDetail:function(){var e=this;axios.get("/api/user").then((function(t){e.email=t.data.email,e.user_id=t.data.id,e.name=t.data.name,localStorage.setItem("user-id",t.data.id),console.log(t)})).catch((function(t){console.log(t),e.errored=!0})).finally((function(){return e.loading=!1}))}},created:function(){this.retrieveUserDetail()}},a=r(0),i=Object(a.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[e.errored?r("section",[r("TheAlertComponent",{attrs:{msg:"we cant retrieve information at the moment , please try again later !",alertType:"alert-danger"}})],1):r("section",[e.loading?r("div",[e._v("Loading...")]):e._e(),e._v(" "),r("div",{staticClass:"mx-auto w-full  h-screen"},[r("h1",{staticClass:"pl-5 py-2 text-xl  "},[e._v("welcome "),r("span",{staticClass:"font-bold text-green-400"},[e._v(" "+e._s(e.name)+" ")])]),e._v(" "),r("p",{staticClass:"pl-5 py-2 text-xl"},[e._v("email : "),r("span",{staticClass:"font-bold text-green-400"},[e._v("  "+e._s(e.email)+"   ")])]),e._v(" "),r("p",{staticClass:"pl-5 py-2 text-xl"},[e._v("id : "),r("span",{staticClass:"font-bold text-green-400"},[e._v("  "+e._s(e.user_id)+"   ")])])])])])}),[],!1,null,null,null);t.default=i.exports},function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(1),i={name:"Register",components:{TheAlertComponent:n.a},props:{},computed:{countemail:function(){return this.email.length},countpassword:function(){return this.password.length},countname:function(){return this.name.length}},data:function(){return{errored:!1,email:"",password:"",name:"",submitStatus:null,backendValidationErrors:"",backEndValidationErrored:!1,registeded:!1}},validations:{email:{required:a.required,email:a.email,minLength:Object(a.minLength)(5),maxLength:Object(a.maxLength)(255)},name:{required:a.required,minLength:Object(a.minLength)(3),maxLength:Object(a.maxLength)(50)},password:{required:a.required,minLength:Object(a.minLength)(6),maxLength:Object(a.maxLength)(100)}},methods:{submit_form:function(e){var t=this;e.preventDefault(),this.$v.$touch(),this.$v.$invalid?this.submitStatus="ERROR":(this.submitStatus=null,axios.post("api/register",{email:this.email,password:this.password,name:this.name}).then((function(e){t.registeded=!0})).catch((function(e){console.log(e),422==e.response.status?(t.backEndValidationErrored=!0,t.backendValidationErrors=e.response.data.errors):t.errored=!0})).finally(this.errored=!1,this.$v.$reset()))}},created:function(){null!==localStorage.getItem("user-token")&&(window.location.href="/user")}},o=r(0),u=Object(o.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"  m-auto lg:w-1/3 h-screen "},[r("form",{staticClass:"border-l border-r border-gray-400  w-full  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",on:{submit:e.submit_form}},[e.backEndValidationErrored?r("ul",e._l(e.backendValidationErrors,(function(e,t,n){return r("TheAlertComponent",{attrs:{msg:e,alertType:"alert-danger"}})})),1):e._e(),e._v(" "),r("h1",{staticClass:"py-4 text-xl"},[e._v("Register ")]),e._v(" "),r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"email"}},[e._v("\r\n        email\r\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"model",rawName:"v-model.trim",value:e.$v.email.$model,expression:"$v.email.$model",modifiers:{trim:!0}}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ",attrs:{id:"email",type:"text",placeholder:"example@email.com",autocomplete:"off"},domProps:{value:e.email,value:e.$v.email.$model},on:{input:[function(t){t.target.composing||e.$set(e.$v.email,"$model",t.target.value.trim())},function(t){t.target.composing||(e.email=t.target.value)}],blur:function(t){return e.$forceUpdate()}}}),e._v(" "),r("p",{staticClass:" text-xs text-gray-700"},[e._v(e._s(e.countemail)+"/225")]),e._v(" "),e.$v.email.$dirty?r("div",[e.$v.email.required?e._e():r("div",{staticClass:"form-validate-error "},[e._v("Email is required")]),e._v(" "),e.$v.email.email?e._e():r("div",{staticClass:"form-validate-error "},[e._v("Please provide correct email")]),e._v(" "),e.$v.email.minLength?e._e():r("div",{staticClass:"form-validate-error "},[e._v("Min length is 6")]),e._v(" "),e.$v.email.maxLength?e._e():r("div",{staticClass:"form-validate-error "},[e._v("Max length is 225 only")])]):e._e()]),e._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"name"}},[e._v("\r\n        name\r\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.name.$model,expression:"$v.name.$model",modifiers:{trim:!0}},{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"name",type:"text",placeholder:"Your name etc : Benny",autocomplete:"off"},domProps:{value:e.$v.name.$model,value:e.name},on:{input:[function(t){t.target.composing||(e.name=t.target.value)},function(t){t.target.composing||e.$set(e.$v.name,"$model",t.target.value.trim())}],blur:function(t){return e.$forceUpdate()}}}),e._v(" "),r("p",{staticClass:" text-xs text-gray-700"},[e._v(e._s(e.countname)+"/50")]),e._v(" "),e.$v.name.$dirty?r("div",[e.$v.name.required?e._e():r("div",{staticClass:"form-validate-error "},[e._v("name is required")]),e._v(" "),e.$v.name.minLength?e._e():r("div",{staticClass:"form-validate-error "},[e._v("name at least 3 length")]),e._v(" "),e.$v.name.maxLength?e._e():r("div",{staticClass:"form-validate-error "},[e._v("name filed length count over 50")])]):e._e()]),e._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"password"}},[e._v("\r\n        password\r\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"model",rawName:"v-model.trim",value:e.$v.password.$model,expression:"$v.password.$model",modifiers:{trim:!0}}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ",attrs:{id:"password",type:"password",placeholder:"******************",autocomplete:"off"},domProps:{value:e.password,value:e.$v.password.$model},on:{input:[function(t){t.target.composing||e.$set(e.$v.password,"$model",t.target.value.trim())},function(t){t.target.composing||(e.password=t.target.value)}],blur:function(t){return e.$forceUpdate()}}}),e._v(" "),r("p",{staticClass:" text-xs text-gray-700"},[e._v(e._s(e.countpassword)+"/100")]),e._v(" "),e.$v.password.$dirty?r("div",[e.$v.password.required?e._e():r("div",{staticClass:"form-validate-error "},[e._v("password is required")]),e._v(" "),e.$v.password.minLength?e._e():r("div",{staticClass:"form-validate-error "},[e._v("password at least 6 length")]),e._v(" "),e.$v.password.maxLength?e._e():r("div",{staticClass:"form-validate-error "},[e._v("password filed length count over 100")])]):e._e()]),e._v(" "),e._m(0),e._v(" "),"ERROR"===e.submitStatus?r("p",{staticClass:"typo__p form-validate-error"},[e._v("\r\n    OPPS ,Look like you missed out something please recheck the form thanks\r\n\t")]):e._e(),e._v(" "),e.errored?r("section",[r("TheAlertComponent",{attrs:{msg:"Registration fails , please try again later",alertType:"alert-danger"}})],1):e._e(),e._v(" "),e.registeded?r("section",[r("p",{staticClass:"text-green-400 bg-white border-green-700 py-3 px-4 rounded border font-bold"},[e._v("succesfully registed ")])]):e._e()])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex items-center justify-between"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("\r\n        register\r\n      ")])])}],!1,null,null,null);t.default=u.exports}]]);