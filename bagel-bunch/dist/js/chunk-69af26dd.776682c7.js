(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69af26dd"],{a55b:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content-section container"},[o("fieldset",{staticClass:"border-bottom form-group"},[o("legend",[o("h2",[t._v("Welcome to "+t._s(t.$store.state.site.compName))])])]),t.error?o("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"inputEmail1"}},[t._v("Email address")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail1",placeholder:"Enter email"},domProps:{value:t.form.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitLogin(e)},input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"inputPassword"}},[t._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password"},domProps:{value:t.form.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitLogin(e)},input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),o("div",{staticClass:"m-5"},[o("button",{class:["col-5","btn","btn-"+t.$store.state.site.mainColor],attrs:{type:"submit"},on:{click:t.submitLogin}},[t._v(" Login ")])]),o("div",{staticClass:"m-5"},[o("router-link",{attrs:{to:"/createAccount"}},[t._v("Create Account")])],1)])},s=[],n={name:"Login",data:function(){return{form:{email:"",password:""},error:null}},methods:{submitLogin:function(){var t=this;this.$func.login(this.form).then((function(e){e.success||(t.error=e.error)}))},createAccount:function(){console.log("Create Account button working")}}},a=n,i=(o("d6db"),o("2877")),l=Object(i["a"])(a,r,s,!1,null,null,null);e["default"]=l.exports},d6db:function(t,e,o){"use strict";var r=o("e67a"),s=o.n(r);s.a},e67a:function(t,e,o){}}]);
//# sourceMappingURL=chunk-69af26dd.776682c7.js.map