(window.webpackJsonp=window.webpackJsonp||[]).push([[13,6,9,11],{331:function(t,e,n){var content=n(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("23606bd9",content,!0,{sourceMap:!1})},332:function(t,e,n){"use strict";n.r(e);n(234),n(14),n(41),n(72),n(35),n(30),n(34),n(47),n(31),n(48);var r=n(3),o=n(16),l=(n(23),n(49));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:["bodies","titles","isIcon","keys","path","deleted","icon"],computed:d({},Object(l.e)({isDelete:function(t){return t.api.isDelete}})),data:function(){return{id:null}},methods:d(d({},Object(l.d)({set_modal:"api/SET_MODAL"})),{},{ondelete:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.delete("".concat(e.deleted,"/").concat(t)).then((function(){window.location.reload()}));case 2:case"end":return n.stop()}}),n)})))()}}),mounted:function(){}},h=(n(334),n(11)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col"},[e("DeleteModal"),t._v(" "),e("div",{staticClass:"-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"},[e("div",{staticClass:"align-middle inline-block min-w-full shadow overflow-hidden border-b border-gray-200 overflow-x-auto"},[e("table",{staticClass:"min-w-full"},[e("thead",[e("tr",t._l(t.titles,(function(title){return e("th",{staticClass:"text-center text-xs font-semibold bg-[#009688] border-b border-r border-gray-200 text-left leading-4 text-white tracking-wider h-10"},[t._v("\n              "+t._s(title)+"\n            ")])})),0)]),t._v(" "),e("tbody",{staticClass:"bg-white"},t._l(t.bodies,(function(title,i){return e("tr",{staticClass:"border-b border-gray-200"},[t._l(Object.values(t.keys),(function(n){return e("td",{staticClass:"text-center border py-4"},[e("div",{staticClass:"flex items-center flex justify-center"},[e("div",{staticClass:"text-sm leading-5 font-medium text-gray-900"},[Array.isArray(n)?e("p",[t._v("\n                    "+t._s(title[n[0]][n[1]]?title[n[0]][n[1]]:"".concat(title[n[0]]," ").concat(title[n[1]]))+"\n                  ")]):e("p",[t._v("\n                    "+t._s("created_at"===n?t.$moment(title[n]).format("DD/MM/YYYY"):"status"===n&&1===title[n]?"Активен":"status"===n&&0===title[n]?"Неактивен":"payment_type"===n&&"Bonus"===title[n]?"Бонус":"payment_type"===n&&"Cash"===title[n]?"Наличные":"gender"===n&&"M"===title[n]?"М":"gender"===n&&"F"===title[n]?"Ж":title[n])+"\n                  ")])])])])})),t._v(" "),e("td",{staticClass:"flex justify-center text-center py-2",class:t.icon?"table-icon":""},[t.isIcon?e("nuxt-link",{staticClass:"text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline flex",attrs:{to:"".concat(t.$route.path).concat(t.path,"/").concat(title.id)}},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M7.33322 3.83334H3.99988C3.2635 3.83334 2.66655 4.43029 2.66655 5.16667V12.5C2.66655 13.2364 3.2635 13.8333 3.99988 13.8333H11.3332C12.0696 13.8333 12.6665 13.2364 12.6665 12.5V9.16667M11.7237 2.89052C12.2444 2.36983 13.0887 2.36983 13.6094 2.89052C14.1301 3.41122 14.1301 4.25544 13.6094 4.77614L7.8855 10.5H5.99988L5.99988 8.61438L11.7237 2.89052Z",stroke:"#121212","stroke-linecap":"round","stroke-linejoin":"round"}})])]):t._e()],1)],2)})),0)])])])],1)}),[],!1,null,"3230e47e",null);e.default=component.exports;installComponents(component,{DeleteModal:n(333).default,Table:n(332).default})},333:function(t,e,n){"use strict";n.r(e);n(35),n(30),n(34),n(14),n(47),n(31),n(48);var r=n(3),o=n(16),l=(n(23),n(73),n(49));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:["isDelete","request"],methods:d(d({},Object(l.d)({set_modal:"api/SET_MODAL",set_delete:"api/SET_DELETE"})),{},{onDelete:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.delete(t.request).then((function(){t.set_modal(!1),setTimeout((function(){t.$router.back()}),2e3)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}}),computed:d({},Object(l.e)({modal:function(t){return t.api.modal}}))},h=n(11),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return t.modal?e("div",{staticClass:"relative z-10",attrs:{"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"}},[e("div",{staticClass:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),t._v(" "),e("div",{staticClass:"fixed inset-0 z-10 overflow-y-auto"},[e("div",{staticClass:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},[e("div",{staticClass:"relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"},[e("div",{staticClass:"sm:flex sm:items-start"},[e("div",{staticClass:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[e("svg",{staticClass:"h-6 w-6 text-red-600",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z"}})])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},[e("button",{staticClass:"inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",attrs:{type:"button"},on:{click:t.onDelete}},[t._v("\n            Удалить\n          ")]),t._v(" "),e("button",{staticClass:"mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm",attrs:{type:"button"},on:{click:function(e){return t.set_modal(!1)}}},[t._v("\n            Отмена\n          ")])])])])])]):t._e()}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},[e("h3",{staticClass:"text-lg font-medium leading-6 text-gray-900",attrs:{id:"modal-title"}},[t._v("\n              Удаление\n            ")]),t._v(" "),e("div",{staticClass:"mt-2"},[e("p",{staticClass:"text-sm text-gray-500"},[t._v("\n                Вы уверены что хотите удалить?\n              ")])])])}],!1,null,null,null);e.default=component.exports},334:function(t,e,n){"use strict";n(331)},335:function(t,e,n){var r=n(92)((function(i){return i[1]}));r.push([t.i,".table-icon[data-v-3230e47e]{display:none}",""]),r.locals={},t.exports=r},336:function(t,e,n){window,t.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t){t.exports=JSON.parse('{"componentClass":"c-sliding-pagination","list":"c-sliding-pagination__list","element":"c-sliding-pagination__list-element","elementDisabled":"c-sliding-pagination__list-element--disabled","elementActive":"c-sliding-pagination__list-element--active","page":"c-sliding-pagination__page"}')},function(t,e,i){"use strict";i.r(e),i.d(e,"range",(function(){return s}));var n={name:"SlidingPaginationDefaultPage",props:{ariaPageLabel:{type:String,required:!0},isCurrent:{type:Boolean,required:!0},page:{type:Number,required:!0},pageClass:{type:String,required:!0}},computed:{pageClasses:function(){var t=this.pageClass;return this.isCurrent&&(t+=" c-sliding-pagination__page--current"),t}},methods:{goToPage:function(t){t.preventDefault(),t.stopPropagation(),this.$emit("page-click",this.page)}},render:function(t){return t("a",{class:this.pageClasses,attrs:{href:"#","aria-label":this.ariaPageLabel},on:{click:this.goToPage}},this.page)}},a=i(0);function s(t,e){var i=[];if("number"!=typeof t||"number"!=typeof e)return i;if(t>e){var n=t;t=e,e=n}for(var a=t;a<=e;a++)i.push(a);return i}var r=function(t,e,i,n,a,s,r,o){var g,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),n&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),r?(g=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=g):a&&(g=o?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),g)if(l.functional){l._injectStyles=g;var u=l.render;l.render=function(t,e){return g.call(e),u(t,e)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,g):[g]}return{exports:t,options:l}}({name:"SlidingPagination",props:{ariaPaginationLabel:{type:String,required:!1,default:"Pagination Navigation"},ariaGotoPageLabel:{type:String,required:!1,default:"Go to page %page% of %total%"},ariaPreviousPageLabel:{type:String,required:!1,default:"Go to previous page"},ariaNextPageLabel:{type:String,required:!1,default:"Go to next page"},ariaCurrentPageLabel:{type:String,required:!1,default:"Page %page% of %total%, current page"},classMap:{type:Object,required:!1,default:function(){return a}},current:{required:!0,type:Number},total:{required:!0,type:Number},slidingEndingSize:{required:!1,type:Number,default:2},slidingWindowSize:{required:!1,type:Number,default:3},nonSlidingSize:{required:!1,type:Number,default:9},pageComponent:{required:!1,type:Object,default:function(){return n}}},components:{SlidingPaginationDefaultPage:n},computed:{isSliding:function(){return this.total>this.nonSlidingSize},hasBeginningGap:function(){return!!this.isSliding&&this.lastBeginningPage+1!==this.firstWindowPage},hasEndingGap:function(){return!!this.isSliding&&this.lastWindowPage+1!==this.firstEndingPage},beginningPages:function(){return s(1,this.isSliding?this.slidingEndingSize:this.total)},lastBeginningPage:function(){return this.beginningPages[this.beginningPages.length-1]},endingPages:function(){return this.isSliding?s(this.total-this.slidingEndingSize+1,this.total):[]},firstEndingPage:function(){return this.endingPages[0]},slidingWindowHalf:function(){var t=this.slidingWindowSize/2;return this.slidingWindowSize%2==1&&(t-=.5),t},slidingWindowPages:function(){if(!this.isSliding)return[];var t=this.lastBeginningPage+this.slidingWindowHalf,e=this.firstEndingPage-this.slidingWindowHalf;if(this.current<=t)return s(this.lastBeginningPage+1,this.lastBeginningPage+this.slidingWindowSize);if(this.current>t&&this.current<e){var i=this.slidingWindowHalf;return this.slidingWindowSize%2==0&&(i/=2),s(-this.slidingWindowHalf+this.current,i+this.current)}return s(this.firstEndingPage-this.slidingWindowSize,this.firstEndingPage-1)},firstWindowPage:function(){return this.slidingWindowPages[0]},lastWindowPage:function(){return this.slidingWindowPages[this.slidingWindowPages.length-1]},showPreviousPageAction:function(){return this.total>this.nonSlidingSize},showNextPageAction:function(){return this.total>this.nonSlidingSize}},methods:{replaceLabelVars:function(t,e){return t.replace("%total%",this.total).replace("%page%",e)},isCurrentPage:function(t){return this.current===t},currentPageLabel:function(t){return this.replaceLabelVars(this.ariaCurrentPageLabel,t)},goToPage:function(t){this.$emit("page-change",t)},goToNextPage:function(){this.goToPage(this.current+1)},goToPreviousPage:function(){this.goToPage(this.current-1)},goToPageLabel:function(t){return this.replaceLabelVars(this.ariaGotoPageLabel,t)},pageLabel:function(t){return this.isCurrentPage(t)?this.currentPageLabel(t):this.goToPageLabel(t)},slotOrDefault:function(t,e){return this.$slots[t]?this.$slots[t]:e},navigationElement:function(t,e,i,n,a){return t("li",{class:[this.classMap.element,this.current===e?this.classMap.elementDisabled:""],key:e},[t("a",{class:this.classMap.page,attrs:{href:"#","aria-label":n,disabled:1===this.current},on:{click:e===this.total?this.goToNextPage:this.goToPreviousPage}},a)])},pageListPage:function(t,e){return t("li",{class:[this.classMap.element,this.isCurrentPage(e)?this.classMap.elementActive:""]},[t(this.pageComponent,{props:{isCurrent:this.isCurrentPage(e),ariaPageLabel:this.pageLabel(e),page:e,pageClass:this.classMap.page},on:{"page-click":this.goToPage}})])},gap:function(t,e){return t("li",{class:[this.classMap.element,this.classMap.elementDisabled],attrs:{"aria-hidden":!0}},[t("a",{class:this.classMap.page,attrs:{href:"#",disabled:!0}},e)])}},render:function(t){var e=this,i=[];return this.showPreviousPageAction&&i.push(this.navigationElement(t,1,-1,this.ariaPreviousPageLabel,this.slotOrDefault("previousPage","«"))),i=i.concat(this.beginningPages.map((function(i){return e.pageListPage(t,i)}))),this.hasBeginningGap&&i.push(this.gap(t,this.slotOrDefault("gapLeft","…"))),i=i.concat(this.slidingWindowPages.map((function(i){return e.pageListPage(t,i)}))),this.hasEndingGap&&i.push(this.gap(t,this.slotOrDefault("gapRight","…"))),i=i.concat(this.endingPages.map((function(i){return e.pageListPage(t,i)}))),this.showNextPageAction&&i.push(this.navigationElement(t,this.total,1,this.ariaNextPageLabel,this.slotOrDefault("nextPage","»"))),t("nav",{class:this.classMap.component,attrs:{"aria-label":this.ariaPaginationLabel}},[t("ul",{class:this.classMap.list},i)])}},void 0,void 0,!1,null,null,null);r.options.__file="src/SlidingPagination.vue",e.default=r.exports}])},337:function(t,e,n){var content=n(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("419ee48b",content,!0,{sourceMap:!1})},338:function(t,e,n){var r=n(92)((function(i){return i[1]}));r.push([t.i,".c-sliding-pagination{pointer-events:all}.c-sliding-pagination__list{display:inline;margin:0;padding:0}.c-sliding-pagination__list-element{background:transparent;border:1px solid #d1d5db;color:#6b7280;display:inline-block;font-size:14px;font-weight:500;margin:0 0 1em;padding:9px 16px}.c-sliding-pagination__list-element,.c-sliding-pagination__list-element:hover{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:background,color;transition-property:background,color}.c-sliding-pagination__list-element:hover{background:#e5e7eb;color:#009688}.c-sliding-pagination__list-element:last-of-type{margin-right:0}.c-sliding-pagination__list-element--active{background:#e5e7eb;border:1px solid #009688;color:#009688}.c-sliding-pagination__list-element--active:hover{background:#246068;color:#fff;cursor:default}.c-sliding-pagination__list-element--disabled{background:none;color:inherit;cursor:not-allowed}.c-sliding-pagination__page{color:inherit;margin:0;padding:0;-webkit-text-decoration:none;text-decoration:none}.c-sliding-pagination__page[disabled]{cursor:not-allowed;pointer-events:none}",""]),r.locals={},t.exports=r},339:function(t,e,n){"use strict";n.r(e);var r=n(336),o=n.n(r),l=(n(337),{props:["currentPage","totalPage"],components:{SlidingPagination:o.a},methods:{pageChangeHandler:function(t){this.$emit("pageChangeHandler",t)}},computed:{total:function(){return Math.ceil(this.totalPage/10)}}}),c=n(11),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-end"},[t.total>1?e("sliding-pagination",{attrs:{current:t.currentPage,total:t.total},on:{"page-change":t.pageChangeHandler}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},360:function(t,e,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("7f4c7ec0",content,!0,{sourceMap:!1})},365:function(t,e,n){"use strict";n(360)},366:function(t,e,n){var r=n(92)((function(i){return i[1]}));r.push([t.i,".table-icon[data-v-fa6e29c2]{display:none}",""]),r.locals={},t.exports=r},427:function(t,e,n){"use strict";n.r(e);n(233),n(35),n(30),n(34),n(14),n(47),n(31),n(48);var r=n(3),o=n(16),l=(n(23),n(49));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"IndexPage",layout:"admin",head:{title:"ОТЧЁТЫ"},data:function(){return{page:1,icon:!1,date_of_birth:"",search:"",liter:"",thead:["АИ-95","АИ-92","ДТ","ГАЗ"],thead2:["АИ-95","АИ-92","ДТ","ГАЗ"],thead3:["КАССИР","ЛИТР","СУММА","НОМЕР АВТОМОБИЛЯ","ДАТА"]}},computed:d({},Object(l.e)({scoreboard:function(t){return t.api.scoreboard},station:function(t){return t.api.station},meta:function(t){return t.api.meta}})),methods:d(d({},Object(l.b)({get_page:"api/get_page"})),{},{getScoreboard:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={request:"/Station?type=1&page=".concat(t.page),form:{liter:t.liter},key:"station",body:[]},e.next=3,t.get_page(n);case 3:case"end":return e.stop()}}),e)})))()},onSearch:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={request:"/SearchInStation?query=".concat(t),body:[],key:"station"},n.next=3,e.get_page(r);case 3:case"end":return n.stop()}}),n)})))()},pageChangeHandler:function(t){this.page=t,this.getScoreboard()}}),mounted:function(){this.getScoreboard()}},h=(n(365),n(11)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"px-24 w-12/12"},[e("div",{staticClass:"bg-white w-full h-[85vh] p-4 overflow-y-auto"},[t._m(0),t._v(" "),e("div",{staticClass:"pb-4 grid gap-8 grid-cols-2"},[e("div",{staticClass:"col-span-1"},[e("p",{staticClass:"bg-[#009688] text-center text-white text-xs font-semibold shadow overflow-hidden border-b border-gray-200 py-3"},[t._v("ВСЕГО ПРОДАННОГО ТОПЛИВА (ЛИТРЫ)")]),t._v(" "),e("Table",{attrs:{titles:t.thead,bodies:t.station.results,isIcon:!1,keys:["ai95","ai92","disel","gas"],icon:!0}}),t._v(" "),t._m(1)],1),t._v(" "),e("div",{staticClass:"col-span-1"},[e("p",{staticClass:"bg-[#009688] text-center text-white text-xs font-semibold shadow overflow-hidden border-b border-gray-200 py-3"},[t._v("ВСЕГО НАЧИСЛЕННЫХ БОНУСОВ (TJS)")]),t._v(" "),e("Table",{attrs:{titles:t.thead2,bodies:t.station.results,isIcon:!1,keys:["ai95","ai92","disel","gas"],icon:!0}}),t._v(" "),t._m(2)],1),t._v(" "),e("div",{staticClass:"col-span-2"},[e("Table",{attrs:{titles:t.thead3,bodies:t.user,isIcon:!1,keys:["staff_name","amount_per_liter","total_bonus",["client_data","card_number"],["client_data","registration_date"]],icon:!0}}),t._v(" "),t._m(3)],1)]),t._v(" "),e("div",[e("Pagination",{attrs:{currentPage:t.page,totalPage:Number(t.meta)},on:{pageChangeHandler:t.pageChangeHandler}})],1)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex py-8 items-baseline justify-between px-4"},[e("div",{staticClass:"flex"},[e("h3",{staticClass:"text-sm font-medium text-dark pb-5"},[t._v("ОТЧЁТЫ / БОНУСЫ")])]),t._v(" "),e("div",{staticClass:"flex items-baseline"},[e("div",{staticClass:"pr-4 w-64 mr-4"},[e("select",{staticClass:"bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-56 ml-4",attrs:{id:"countries"}},[e("option",{attrs:{value:"US"}},[t._v("Выберите станцию")]),t._v(" "),e("option",{attrs:{value:"CA"}},[t._v("Станция №1")]),t._v(" "),e("option",{attrs:{value:"CA"}},[t._v("Станция №2")]),t._v(" "),e("option",{attrs:{value:"CA"}},[t._v("Станция №3")]),t._v(" "),e("option",{attrs:{value:"CA"}},[t._v("Станция №4")]),t._v(" "),e("option",{attrs:{value:"CA"}},[t._v("Станция №5")])])]),t._v(" "),e("div",{staticClass:"w-64 mr-8"},[e("select",{staticClass:"bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-56",attrs:{id:"countries"}},[e("option",{attrs:{value:"year"}},[t._v("Год")]),t._v(" "),e("option",{attrs:{value:"2020"}},[t._v("2020")]),t._v(" "),e("option",{attrs:{value:"2021"}},[t._v("2021")]),t._v(" "),e("option",{attrs:{value:"2022"}},[t._v("2022")]),t._v(" "),e("option",{attrs:{value:"2023"}},[t._v("2023")])])]),t._v(" "),e("div",{staticClass:"w-56"},[e("select",{staticClass:"bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-56",attrs:{id:"countries"}},[e("option",{attrs:{value:"month"}},[t._v("Месяц")]),t._v(" "),e("option",{attrs:{value:"jan"}},[t._v("Январь")]),t._v(" "),e("option",{attrs:{value:"feb"}},[t._v("Февраль")]),t._v(" "),e("option",{attrs:{value:"apr"}},[t._v("Март")]),t._v(" "),e("option",{attrs:{value:"mar"}},[t._v("Апрель")]),t._v(" "),e("option",{attrs:{value:"may"}},[t._v("Май")]),t._v(" "),e("option",{attrs:{value:"jun"}},[t._v("Июнь")]),t._v(" "),e("option",{attrs:{value:"jul"}},[t._v("Июль")]),t._v(" "),e("option",{attrs:{value:"aug"}},[t._v("Август")]),t._v(" "),e("option",{attrs:{value:"sep"}},[t._v("Сентябрь")]),t._v(" "),e("option",{attrs:{value:"oct"}},[t._v("Октябрь")]),t._v(" "),e("option",{attrs:{value:"nov"}},[t._v("Ноябрь")]),t._v(" "),e("option",{attrs:{value:"dec"}},[t._v("Декабр")])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"btn flex justify-start pb-10 pt-4"},[t("button",{staticClass:"bg-[#009688] text-white px-3 py-2 rounded-md"},[this._v("Экспорт")])])},function(){var t=this._self._c;return t("div",{staticClass:"btn flex justify-start pb-10 pt-4"},[t("button",{staticClass:"bg-[#009688] text-white px-3 py-2 rounded-md"},[this._v("Экспорт")])])},function(){var t=this._self._c;return t("div",{staticClass:"btn flex justify-start pb-10 pt-4"},[t("button",{staticClass:"bg-[#009688] text-white px-3 py-2 rounded-md"},[this._v("Экспорт")])])}],!1,null,"fa6e29c2",null);e.default=component.exports;installComponents(component,{Table:n(332).default,Pagination:n(339).default})}}]);