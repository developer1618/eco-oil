(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{446:function(t,e,r){"use strict";r.r(e);r(35),r(30),r(34),r(14),r(47),r(31),r(48);var o=r(3),n=r(16),l=(r(23),r(27),r(233),r(73),r(49));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"admin",data:function(){var t;return t={typePassword:!0},Object(n.a)(t,"typePassword",!0),Object(n.a)(t,"min",9),Object(n.a)(t,"max",9),Object(n.a)(t,"name_tj",""),Object(n.a)(t,"name_ru",""),Object(n.a)(t,"lastname_tj",""),Object(n.a)(t,"lastname_ru",""),Object(n.a)(t,"phone",""),Object(n.a)(t,"email",""),Object(n.a)(t,"job_tj",""),Object(n.a)(t,"job_ru",""),Object(n.a)(t,"password",""),Object(n.a)(t,"password2",""),Object(n.a)(t,"description_tj",""),Object(n.a)(t,"description_ru",""),Object(n.a)(t,"type",0),Object(n.a)(t,"generate",""),t},computed:d({},Object(l.e)({toast:function(t){return t.api.toast}})),methods:d(d({isLetter:function(t){var e=String.fromCharCode(t.keyCode);if(/^[A-Za-z,А-Яа-я]+$/.test(e))return!0;t.preventDefault()}},Object(l.b)({store:"api/store"})),{},{getStations:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={text:"Сотрудник добавлено!",request:"/consults",form:{name_tj:t.name_tj,name_ru:t.name_ru,lastname_tj:t.lastname_tj,lastname_ru:t.lastname_ru,phone:t.phone,email:t.email,job_tj:t.job_tj,job_ru:t.job_ru,password:t.password,description_tj:t.description_tj,description_ru:t.description_ru,type:0===Number(t.type)?1:0}},e.next=3,t.store(r);case 3:setTimeout((function(){t.$router.back()}),2e3);case 4:case"end":return e.stop()}}),e)})))()}}),watch:{generate:function(t){if(t){var e="";e+="abcdefghijklmnopqrstuvwxyz",e+="0123456789",e+="!@#$%^&*+=";for(var r="",i=0;i<16;i++){r+=e[Math.floor(46*Math.random())]}this.password=r}}}},v=r(11),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"px-24 w-12/12"},[e("div",{staticClass:"grid px-8 py-10 grid-cols-2 bg-white h-[85vh]"},[e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.handleSubmit;return[e("h3",{staticClass:"text-sm font-medium text-dark pb-10"},[t._v("CОТРУДНИКИ (РОСТ ОИЛ) / ДОБАВЛЕНИЕ СОТРУДНИКА")]),t._v(" "),e("form",{staticClass:"grid grid-cols-4 gap-8",on:{submit:function(e){return e.preventDefault(),o(t.getStations)}}},[e("div",{staticClass:"col-span-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("label",{staticClass:"block mb-2 text-sm font-medium text-[#4D5D7D]",attrs:{for:"helper-text"}},[t._v("Ф. И. О. "),e("span",{staticClass:"text-red-600 absolute"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name_ru,expression:"name_ru"}],staticClass:"bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500",attrs:{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",placeholder:"Введите Ф. И. О."},domProps:{value:t.name_ru},on:{keypress:function(e){return t.isLetter(e)},input:function(e){e.target.composing||(t.name_ru=e.target.value)}}}),t._v(" "),e("p",{staticClass:"text-red-600 absolute"},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-span-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("label",{staticClass:"block mb-2 text-sm font-medium text-[#4D5D7D]",attrs:{for:"website-admin"}},[t._v("Номер телефона "),e("span",{staticClass:"text-red-600 absolute"})]),t._v(" "),e("div",{staticClass:"flex"},[e("span",{staticClass:"inline-flex items-center px-3 text-sm text-[#4D5D7D] rounded-l-md border border-r-0 border-gray-300 bg-white"},[t._v("\n                            +992\n                        ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"rounded-none rounded-r-lg border text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5",attrs:{type:"tel",id:"website-admin",placeholder:"Введите номер телефона"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),e("p",{staticClass:"text-red-600 absolute"},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-span-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("label",{staticClass:"block mb-2 text-sm font-medium text-[#4D5D7D]",attrs:{for:"helper-text"}},[t._v("Номер автомобиля "),e("span",{staticClass:"text-red-600 absolute"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name_ru,expression:"name_ru"}],staticClass:"bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500",attrs:{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",placeholder:"Введите номер автомобиля"},domProps:{value:t.name_ru},on:{keypress:function(e){return t.isLetter(e)},input:function(e){e.target.composing||(t.name_ru=e.target.value)}}}),t._v(" "),e("p",{staticClass:"text-red-600 absolute"},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-span-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("label",{staticClass:"block mb-2 text-sm font-medium text-[#4D5D7D]",attrs:{for:"helper-text"}},[t._v("Номер карты "),e("span",{staticClass:"text-red-600 absolute"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name_ru,expression:"name_ru"}],staticClass:"bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500",attrs:{type:"number",id:"helper-text","aria-describedby":"helper-text-explanation",placeholder:"Введите номер карты"},domProps:{value:t.name_ru},on:{keypress:function(e){return t.isLetter(e)},input:function(e){e.target.composing||(t.name_ru=e.target.value)}}}),t._v(" "),e("p",{staticClass:"text-red-600 absolute"},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-span-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("label",{staticClass:"block mb-2 text-sm font-medium text-[#4D5D7D]",attrs:{for:"helper-text"}},[t._v("Лимит "),e("span",{staticClass:"text-red-600 absolute"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name_ru,expression:"name_ru"}],staticClass:"bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500",attrs:{type:"number",id:"helper-text","aria-describedby":"helper-text-explanation",placeholder:"Установите лимит"},domProps:{value:t.name_ru},on:{keypress:function(e){return t.isLetter(e)},input:function(e){e.target.composing||(t.name_ru=e.target.value)}}}),t._v(" "),e("p",{staticClass:"text-red-600 absolute"},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-span-4"},[e("div",{staticClass:"flex items-center pb-4"},[e("label",{staticClass:"text-sm font-medium text-[#6B7280]"},[t._v("Вид топлива")])]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"flex items-center mr-4"},[e("input",{staticClass:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded",attrs:{id:"inline-checkbox",type:"checkbox",value:""}}),t._v(" "),e("label",{staticClass:"ml-2 text-sm font-medium text-gray-600",attrs:{for:"inline-checkbox"}},[t._v("АИ — 95")])]),t._v(" "),e("div",{staticClass:"flex items-center mr-4"},[e("input",{staticClass:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded",attrs:{id:"inline-2-checkbox",type:"checkbox",value:""}}),t._v(" "),e("label",{staticClass:"ml-2 text-sm font-medium text-gray-600",attrs:{for:"inline-2-checkbox"}},[t._v("АИ — 92")])]),t._v(" "),e("div",{staticClass:"flex items-center mr-4"},[e("input",{staticClass:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded",attrs:{id:"inline-checkbox",type:"checkbox",value:""}}),t._v(" "),e("label",{staticClass:"ml-2 text-sm font-medium text-gray-600",attrs:{for:"inline-checkbox"}},[t._v("ГАЗ")])]),t._v(" "),e("div",{staticClass:"flex items-center mr-4"},[e("input",{staticClass:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded",attrs:{id:"inline-2-checkbox",type:"checkbox",value:""}}),t._v(" "),e("label",{staticClass:"ml-2 text-sm font-medium text-gray-600",attrs:{for:"inline-2-checkbox"}},[t._v("ДТ")])])])]),t._v(" "),e("div",{staticClass:"col-span-4"},[e("div",{staticClass:"flex items-center pb-4"},[e("label",{staticClass:"text-sm font-medium text-[#6B7280]"},[t._v("Статус")])]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"flex items-center mr-4"},[e("input",{staticClass:"w-4 h-4 bg-gray-100 border-gray-300",attrs:{id:"red-radio",type:"radio",value:"",name:"colored-radio"}}),t._v(" "),e("label",{staticClass:"ml-2 text-sm font-medium text-gray-600",attrs:{for:"red-radio"}},[t._v("Активный")])]),t._v(" "),e("div",{staticClass:"flex items-center mr-4"},[e("input",{staticClass:"w-4 h-4 bg-gray-100 border-gray-300",attrs:{id:"green-radio",type:"radio",value:"",name:"colored-radio"}}),t._v(" "),e("label",{staticClass:"ml-2 text-sm font-medium text-gray-600",attrs:{for:"green-radio"}},[t._v("Неактивный")])])])]),t._v(" "),e("div",{staticClass:"col-span-4 navbtn"},[e("button",{staticClass:"text-white bg-[#009688] hover:bg-[#157766] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none",attrs:{type:"submit"}},[t._v("Сохранить")]),t._v(" "),e("nuxt-link",{staticClass:"text-[#4D5D7D] border border-[#009688] text-[#009688] hover:bg-[#009688] hover:text-[#fff] focus:outline-none focus:ring-gray-200 font-medium rounded-lg hover:rounded-lg text-sm px-8 py-2.5 hover:px-8 hover:py-2.5 mr-2 mb-2",attrs:{to:"/partner/staff",type:"button"}},[t._v("Назад")]),t._v(" "),t.toast.open?e("p",{staticClass:"text-red-600 pt-4",attrs:{id:"send-validate"}},[t._v(t._s(t.toast.text))]):t._e()],1)])]}}])})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);