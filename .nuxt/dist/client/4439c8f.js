(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{447:function(t,e,r){"use strict";r.r(e);r(30),r(33),r(14),r(47),r(31),r(48);var o=r(3),n=r(16),l=(r(23),r(26),r(55),r(34),r(73),r(49));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"admin",data:function(){return{form:{full_name:"",date_of_birth:"",gender:"",plate_number:"",card_number:"",phone:"",registration_date:"",bonus:null,status:null},statuses:["Активный","Неактивный"]}},computed:c({},Object(l.e)({toast:function(t){return t.api.toast}})),methods:c(c({isLetter:function(t){var e=String.fromCharCode(t.keyCode);if(/^[A-Za-z,А-Яа-я]+$/.test(e))return!0;t.preventDefault()}},Object(l.b)(Object(n.a)({edit:"api/edit",get_page:"api/get_page"},"edit","api/edit"))),{},{getClient:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/Client/".concat(t.$route.params.slug));case 2:return r=e.sent,e.abrupt("return",Object.keys(t.form).map((function(e){t.form[e]=r.data[e]})));case 4:case"end":return e.stop()}}),e)})))()},editClient:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={text:"Клиент изменено!",request:"/Client/".concat(t.$route.params.slug),form:t.form},e.next=3,t.edit(r);case 3:setTimeout((function(){t.$router.back()}),2e3);case 4:case"end":return e.stop()}}),e)})))()}}),mounted:function(){this.getClient()}},f=r(11),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"px-24 w-12/12"},[e("div",{staticClass:"grid px-8 py-10 grid-cols-2 bg-white h-[85vh]"},[e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.handleSubmit;return[e("h3",{staticClass:"text-sm font-medium text-dark pb-10"},[t._v("КЛИЕНТЫ (АВТО) / РЕДАКТИРОВАНИЕ КЛИЕНТА")]),t._v(" "),e("form",{staticClass:"grid grid-cols-4 gap-8",on:{submit:function(e){return e.preventDefault(),o(t.editClient)}}},[e("div",{staticClass:"col-span-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("label",{staticClass:"block mb-2 text-sm font-medium text-[#4D5D7D]",attrs:{for:"helper-text"}},[t._v("Ф.И.О"),e("span",{staticClass:"text-red-600 absolute"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.full_name,expression:"form.full_name"}],staticClass:"bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500",attrs:{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",placeholder:"Введите имя"},domProps:{value:t.form.full_name},on:{keypress:function(e){return t.isLetter(e)},input:function(e){e.target.composing||t.$set(t.form,"full_name",e.target.value)}}}),t._v(" "),e("p",{staticClass:"text-red-600 absolute"},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-span-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("label",{staticClass:"block mb-2 text-sm font-medium text-[#4D5D7D]",attrs:{for:"helper-text"}},[t._v("Дата рождения"),e("span",{staticClass:"text-red-600 absolute"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.date_of_birth,expression:"form.date_of_birth"}],staticClass:"bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500",attrs:{type:"date",id:"helper-text","aria-describedby":"helper-text-explanation",placeholder:"Введите дату"},domProps:{value:t.form.date_of_birth},on:{input:function(e){e.target.composing||t.$set(t.form,"date_of_birth",e.target.value)}}}),t._v(" "),e("p",{staticClass:"text-red-600 absolute"},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-span-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("label",{staticClass:"block mb-2 text-sm font-medium text-[#4D5D7D]",attrs:{for:"website-admin"}},[t._v("Номер телефона "),e("span",{staticClass:"text-red-600 absolute"})]),t._v(" "),e("div",{staticClass:"flex"},[e("span",{staticClass:"inline-flex items-center px-3 text-sm text-[#4D5D7D] rounded-l-md border border-r-0 border-gray-300 bg-white"},[t._v("\n                +992\n              ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"rounded-none rounded-r-lg border text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5",attrs:{type:"tel",id:"website-admin",placeholder:"Введите Номер телефона"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}})]),t._v(" "),e("p",{staticClass:"text-red-600 absolute"},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-span-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("label",{staticClass:"block mb-2 text-sm font-medium text-[#4D5D7D]",attrs:{for:"helper-text"}},[t._v("Номер автомобиля"),e("span",{staticClass:"text-red-600 absolute"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.plate_number,expression:"form.plate_number"}],staticClass:"bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500",attrs:{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",placeholder:"Введите номер автомобиля"},domProps:{value:t.form.plate_number},on:{input:function(e){e.target.composing||t.$set(t.form,"plate_number",e.target.value)}}}),t._v(" "),e("p",{staticClass:"text-red-600 absolute"},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-span-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("label",{staticClass:"block mb-2 text-sm font-medium text-[#4D5D7D]",attrs:{for:"helper-text"}},[t._v("Номер карты"),e("span",{staticClass:"text-red-600 absolute"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.card_number,expression:"form.card_number"}],staticClass:"bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500",attrs:{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",placeholder:"Введите номер карты"},domProps:{value:t.form.card_number},on:{input:function(e){e.target.composing||t.$set(t.form,"card_number",e.target.value)}}}),t._v(" "),e("p",{staticClass:"text-red-600 absolute"},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-span-4"},[e("div",{staticClass:"flex items-center pb-4"},[e("label",{staticClass:"text-sm font-medium text-[#6B7280]"},[t._v("Статус")])]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"flex items-center mr-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"w-4 h-4 bg-gray-100 border-gray-300",attrs:{id:"red-radio-act",type:"radio",name:"colored-radio"},domProps:{value:1,checked:t._q(t.form.status,1)},on:{change:function(e){return t.$set(t.form,"status",1)}}}),t._v(" "),e("label",{staticClass:"ml-2 text-sm font-medium text-gray-500",attrs:{for:"red-radio-act"}},[t._v("Активный")])]),t._v(" "),e("div",{staticClass:"flex items-center mr-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"w-4 h-4 bg-gray-100 border-gray-300",attrs:{id:"red-radio-dis-act",type:"radio",name:"colored-radio"},domProps:{value:0,checked:t._q(t.form.status,0)},on:{change:function(e){return t.$set(t.form,"status",0)}}}),t._v(" "),e("label",{staticClass:"ml-2 text-sm font-medium text-gray-500",attrs:{for:"red-radio-dis-act"}},[t._v("Неактивный")])])])]),t._v(" "),e("div",{staticClass:"col-span-4 navbtn"},[e("button",{staticClass:"text-white bg-[#009688] hover:bg-[#157766] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none",attrs:{type:"submit"}},[t._v("\n            Сохранить\n          ")]),t._v(" "),e("nuxt-link",{staticClass:"text-[#4D5D7D] border border-[#009688] text-[#009688] hover:bg-[#009688] hover:text-[#fff] focus:outline-none focus:ring-gray-200 font-medium rounded-lg hover:rounded-lg text-sm px-8 py-2.5 hover:px-8 hover:py-2.5 mr-2 mb-2",attrs:{to:"/admin/clients",type:"button"}},[t._v("Назад")]),t._v(" "),t.toast.open?e("p",{staticClass:"text-red-600 pt-4 block",attrs:{id:"send-validate"}},[t._v("\n            "+t._s(t.toast.text)+"\n          ")]):t._e()],1)])]}}])})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);