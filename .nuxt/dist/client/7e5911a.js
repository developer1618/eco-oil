(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{442:function(t,e,r){"use strict";r.r(e);r(55),r(34),r(14),r(35),r(30),r(47),r(31),r(48);var o=r(3),n=r(16),l=(r(23),r(73),r(49));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"admin",data:function(){return{typePassword:!0,typePassword2:!0,form:{username:"",address:"",name:"",password:"",password2:"",role:3}}},computed:c({},Object(l.e)({toast:function(t){return t.api.toast}})),methods:c(c({},Object(l.b)({store:"api/store",get_page:"api/get_page",edit:"api/edit"})),{},{getPartner:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={text:"ПАРТНЁРЫ добавлено!",request:"/PartnerRegistration",form:t.form},e.next=3,t.store(r);case 3:setTimeout((function(){t.$router.back()}),2e3);case 4:case"end":return e.stop()}}),e)})))()}})},v=r(11),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"px-24 w-12/12"},[e("div",{staticClass:"grid px-8 py-10 grid-cols-4 bg-white h-[85vh]"},[e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.handleSubmit;return[e("h3",{staticClass:"text-sm font-medium text-dark pb-10"},[t._v("МОНИТОРИНГ / УСТРОЙСТВА / ДОБАВЛЕНИЕ")]),t._v(" "),e("form",{staticClass:"grid grid-cols-2 gap-8",on:{submit:function(e){return e.preventDefault(),o(t.getPartner)}}},[e("div",{staticClass:"col-span-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("label",{staticClass:"block mb-2 text-sm font-medium text-[#4D5D7D]",attrs:{for:"helper-text"}},[t._v("ID"),e("span",{staticClass:"text-red-600 absolute"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.id,expression:"form.id"}],staticClass:"bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500",attrs:{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",placeholder:"Введите ID"},domProps:{value:t.form.id},on:{input:function(e){e.target.composing||t.$set(t.form,"id",e.target.value)}}}),t._v(" "),e("p",{staticClass:"text-red-600 absolute"},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-span-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("label",{staticClass:"block mb-2 text-sm font-medium text-[#4D5D7D]",attrs:{for:"helper-text"}},[t._v("Станция регистрации "),e("span",{staticClass:"text-red-600 absolute"})]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.station,expression:"form.station"}],staticClass:"bg-white border border-gray-300 text-[#4D5D7D] text-sm rounded-lg block w-full p-2.5 text-white focus:ring-blue-500 focus:border-blue-500",attrs:{id:"address"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"station",e.target.multiple?r:r[0])}}},[e("option",{attrs:{value:"1"}},[t._v("\n              Шохмансур, Дустии Халкҳо 31\n            ")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("\n              Шохмансур, Дустии Халкҳо 32\n            ")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("\n              Шохмансур, Дустии Халкҳо 33\n            ")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("\n              Шохмансур, Дустии Халкҳо 34\n            ")]),t._v(" "),t._v('">\n              Шохмансур, Дустии Халкҳо 35\n            ')]),t._v(" "),e("p",{staticClass:"text-red-600 absolute"},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"flex items-center pb-4"},[e("label",{staticClass:"text-sm font-medium text-[#6B7280]"},[t._v("Статус")])]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"flex items-center mr-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"w-4 h-4 bg-gray-100 border-gray-300",attrs:{id:"red-radio",type:"radio",name:"colored-radio"},domProps:{value:1,checked:t._q(t.form.status,1)},on:{change:function(e){return t.$set(t.form,"status",1)}}}),t._v(" "),e("label",{staticClass:"ml-2 text-sm font-medium text-gray-500",attrs:{for:"red-radio"}},[t._v("Активный")])]),t._v(" "),e("div",{staticClass:"flex items-center mr-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"w-4 h-4 bg-gray-100 border-gray-300",attrs:{id:"green-radio",type:"radio",name:"colored-radio"},domProps:{value:0,checked:t._q(t.form.status,0)},on:{change:function(e){return t.$set(t.form,"status",0)}}}),t._v(" "),e("label",{staticClass:"ml-2 text-sm font-medium text-gray-500",attrs:{for:"green-radio"}},[t._v("Неактивный")])])])]),t._v(" "),e("div",{staticClass:"col-span-2 navbtn"},[e("button",{staticClass:"text-white bg-[#009688] hover:bg-[#157766] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none",attrs:{type:"submit"}},[t._v("\n                    Сохранить\n                    ")]),t._v(" "),e("nuxt-link",{staticClass:"text-[#4D5D7D] border border-[#009688] text-[#009688] hover:bg-[#009688] hover:text-[#fff] focus:outline-none focus:ring-gray-200 font-medium rounded-lg hover:rounded-lg text-sm px-8 py-2.5 hover:px-8 hover:py-2.5 mr-2 mb-2",attrs:{to:"/admin/partners",type:"button"}},[t._v("Назад")]),t._v(" "),t.toast.open?e("p",{staticClass:"text-red-600 pt-4 block",attrs:{id:"send-validate"}},[t._v("\n                    "+t._s(t.toast.text)+"\n                    ")]):t._e()],1)])]}}])})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);