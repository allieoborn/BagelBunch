(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-380b25a1"],{"32ca":function(t,e,o){"use strict";var a=o("44f5"),r=o.n(a);r.a},"36f9":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content-section container"},[this.created?o("div",[o("h1",[t._v("Account Successfully Created!")]),o("p",[t._v("Now go get yourself some bagels.")]),o("router-link",{attrs:{to:"/login"}},[t._v("Back to login")])],1):o("div",[t._m(0),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"inputName"}},[t._v("Name")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",id:"inputName",placeholder:"What do you want us to call you?"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"inputEmail1"}},[t._v("Email address")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail1",placeholder:"Enter email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"inputPassword"}},[t._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),o("div",{staticClass:"m-5"},[o("button",{class:["col-5","btn","btn-"+t.$store.state.site.mainColor],attrs:{type:"submit"},on:{click:t.createAccount}},[t._v(" Create ")])])])])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("fieldset",{staticClass:"border-bottom form-group"},[o("legend",[o("h2",[t._v("Create New Account")])])])}],s={name:"CreateAccount",data:function(){return{form:{name:"",email:"",password:"",type:"customer",money:100},created:!1}},methods:{createAccount:function(){var t=this;this.$func.createAccount(this.form).then((function(e){console.log("response ".concat(e)),e?(console.log("Success"),t.created=!0):(console.log("Failure"),t.error=e.error)}))}}},n=s,i=(o("32ca"),o("2877")),c=Object(i["a"])(n,a,r,!1,null,null,null);e["default"]=c.exports},"44f5":function(t,e,o){}}]);
//# sourceMappingURL=chunk-380b25a1.40261bb0.js.map