(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{450:function(t,e,r){"use strict";r.r(e);r(72),r(53),r(35),r(30),r(34),r(14),r(47),r(31),r(48);var o=r(3),n=r(16),d=(r(23),r(73),r(49));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"admin",data:function(){return{typePassword:!0,min:9,max:9,name_tj:"",name_ru:"",lastname_tj:"",lastname_ru:"",phone:"",email:"",password:"",type:null,generate:""}},computed:c({},Object(d.e)({toast:function(t){return t.api.toast}})),methods:c(c({},Object(d.b)({store:"api/store",get_page:"api/get_page",edit:"api/edit"})),{},{getProfile:function(){this.name_tj=this.$auth.user.name_tj,this.name_ru=this.$auth.user.name_ru,this.lastname_tj=this.$auth.user.lastname_tj,this.lastname_ru=this.$auth.user.lastname_ru,this.phone=this.$auth.user.phone,this.email=this.$auth.user.email},editProfile:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={text:"Пароль изменен!",request:"/profile/".concat(t.$auth.user.id),form:{name_tj:t.name_tj,name_ru:t.name_ru,lastname_tj:t.lastname_tj,lastname_ru:t.lastname_ru,phone:t.phone,email:t.email}},e.next=3,t.store(r);case 3:setTimeout((function(){t.$router.back()}),2e3);case 4:case"end":return e.stop()}}),e)})))()}}),watch:{generate:function(t){if(t){var e="";e+="abcdefghijklmnopqrstuvwxyz",e+="0123456789",e+="!@#$%^&*+=";for(var r="",i=0;i<16;i++){r+=e[Math.floor(46*Math.random())]}this.password=r}}},mounted:function(){this.getProfile()}},w=r(11),component=Object(w.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-16 px-36 w-12/12"},[t._m(0),t._v(" "),e("div",{staticClass:"grid gap-8"},[e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.handleSubmit;return[e("form",{staticClass:"grid gap-8 col-span-6",on:{submit:function(e){return e.preventDefault(),o(t.editProfile)}}},[e("div",{staticClass:"col-span-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("div",{staticClass:"relative"},[e("label",{staticClass:"block mb-2 text-sm font-medium text-[#4D5D7D]",attrs:{for:"password"}},[t._v("Старый пароль "),e("span",{staticClass:"text-red-600 absolute"})]),t._v(" "),"checkbox"==(t.typePassword?"password":"text")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5",attrs:{id:"password",name:"password",placeholder:"••••••••",type:"checkbox"},domProps:{checked:Array.isArray(t.password)?t._i(t.password,null)>-1:t.password},on:{change:function(e){var r=t.password,o=e.target,n=!!o.checked;if(Array.isArray(r)){var d=t._i(r,null);o.checked?d<0&&(t.password=r.concat([null])):d>-1&&(t.password=r.slice(0,d).concat(r.slice(d+1)))}else t.password=n}}}):"radio"==(t.typePassword?"password":"text")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5",attrs:{id:"password",name:"password",placeholder:"••••••••",type:"radio"},domProps:{checked:t._q(t.password,null)},on:{change:function(e){t.password=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5",attrs:{id:"password",name:"password",placeholder:"••••••••",type:t.typePassword?"password":"text"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),e("div",{staticClass:"absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mb-[-25px]"},[t.typePassword?e("img",{staticClass:"cursor-pointer",attrs:{src:"/img/eye-pass-on.svg",alt:"on"},on:{click:function(e){t.typePassword=!t.typePassword}}}):e("img",{staticClass:"cursor-pointer",attrs:{src:"/img/eye-pass-off.svg",alt:"off"},on:{click:function(e){t.typePassword=!t.typePassword}}})]),t._v(" "),e("p",{staticClass:"text-red-600 pb-4 absolute"},[t._v(t._s(o[0]))])])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-span-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("div",{staticClass:"relative"},[e("label",{staticClass:"block mb-2 text-sm font-medium text-[#4D5D7D]",attrs:{for:"password"}},[t._v("Новый пароль "),e("span",{staticClass:"text-red-600 absolute"})]),t._v(" "),"checkbox"==(t.typePassword?"password":"text")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.password1,expression:"password1"}],staticClass:"bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5",attrs:{id:"password1",name:"password",placeholder:"••••••••",type:"checkbox"},domProps:{checked:Array.isArray(t.password1)?t._i(t.password1,null)>-1:t.password1},on:{change:function(e){var r=t.password1,o=e.target,n=!!o.checked;if(Array.isArray(r)){var d=t._i(r,null);o.checked?d<0&&(t.password1=r.concat([null])):d>-1&&(t.password1=r.slice(0,d).concat(r.slice(d+1)))}else t.password1=n}}}):"radio"==(t.typePassword?"password":"text")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.password1,expression:"password1"}],staticClass:"bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5",attrs:{id:"password1",name:"password",placeholder:"••••••••",type:"radio"},domProps:{checked:t._q(t.password1,null)},on:{change:function(e){t.password1=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.password1,expression:"password1"}],staticClass:"bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5",attrs:{id:"password1",name:"password",placeholder:"••••••••",type:t.typePassword?"password":"text"},domProps:{value:t.password1},on:{input:function(e){e.target.composing||(t.password1=e.target.value)}}}),t._v(" "),e("div",{staticClass:"absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mb-[-25px]"},[t.typePassword?e("img",{staticClass:"cursor-pointer",attrs:{src:"/img/eye-pass-on.svg",alt:"on"},on:{click:function(e){t.typePassword=!t.typePassword}}}):e("img",{staticClass:"cursor-pointer",attrs:{src:"/img/eye-pass-off.svg",alt:"off"},on:{click:function(e){t.typePassword=!t.typePassword}}})]),t._v(" "),e("p",{staticClass:"text-red-600 pb-4 absolute"},[t._v(t._s(o[0]))])])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-span-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("div",{staticClass:"relative"},[e("label",{staticClass:"block mb-2 text-sm font-medium text-[#4D5D7D]",attrs:{for:"password"}},[t._v("Повторит новый пароль "),e("span",{staticClass:"text-red-600 absolute"})]),t._v(" "),"checkbox"==(t.typePassword?"password":"text")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],staticClass:"bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5",attrs:{id:"password2",name:"password",placeholder:"••••••••",type:"checkbox"},domProps:{checked:Array.isArray(t.password2)?t._i(t.password2,null)>-1:t.password2},on:{change:function(e){var r=t.password2,o=e.target,n=!!o.checked;if(Array.isArray(r)){var d=t._i(r,null);o.checked?d<0&&(t.password2=r.concat([null])):d>-1&&(t.password2=r.slice(0,d).concat(r.slice(d+1)))}else t.password2=n}}}):"radio"==(t.typePassword?"password":"text")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],staticClass:"bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5",attrs:{id:"password2",name:"password",placeholder:"••••••••",type:"radio"},domProps:{checked:t._q(t.password2,null)},on:{change:function(e){t.password2=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],staticClass:"bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5",attrs:{id:"password2",name:"password",placeholder:"••••••••",type:t.typePassword?"password":"text"},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}}),t._v(" "),e("div",{staticClass:"absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mb-[-25px]"},[t.typePassword?e("img",{staticClass:"cursor-pointer",attrs:{src:"/img/eye-pass-on.svg",alt:"on"},on:{click:function(e){t.typePassword=!t.typePassword}}}):e("img",{staticClass:"cursor-pointer",attrs:{src:"/img/eye-pass-off.svg",alt:"off"},on:{click:function(e){t.typePassword=!t.typePassword}}})]),t._v(" "),e("p",{staticClass:"text-red-600 pb-4 absolute"},[t._v(t._s(o[0]))])])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-span-6 pt-4"},[e("nuxt-link",{staticClass:"text-[#4D5D7D] hover:bg-white border border-[#00A700] text-[#00A700] focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",attrs:{to:"/admin/staff",type:"button"}},[t._v("Назад")]),t._v(" "),e("button",{staticClass:"text-white bg-[#00A700] hover:bg-[#5a6097] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none",attrs:{type:"submit"}},[t._v("Сохранить")]),t._v(" "),t.toast.open?e("p",{staticClass:"text-red-600 pt-2",attrs:{id:"send-validate"}},[t._v(t._s(t.toast.text))]):t._e()],1)])]}}])})],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex"},[e("h3",{staticClass:"text-sm font-medium text-[#B3B9C9] pb-5 pr-2"},[t._v("Профиль")]),t._v(" "),e("h3",{staticClass:"text-sm font-medium text-[#B3B9C9] pb-5 pr-2"},[t._v(" >")]),t._v(" "),e("h3",{staticClass:"text-sm font-medium text-[#00A700] pb-5"},[t._v("Сменить пароль")])])}],!1,null,null,null);e.default=component.exports}}]);