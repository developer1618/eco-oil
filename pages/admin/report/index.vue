<template>
    <div class="px-24 w-12/12">
      <div class="bg-white w-full  p-4">
        <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">ОТЧЁТЫ / ЕЖЕМЕСЯЧНЫЙ</h3>
        </div>
        <div class="flex items-baseline">
          <CalendarInput />
          <div class="pl-4 w-64">
            <select id="countries" class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-48 ml-4">
              <option value="US">Сумма (TJS)</option>
              <option value="CA">Сумма (ЛИТРЫ)</option>
              <option value="CA">Сумма (БОНУСЫ)</option>
            </select>
          </div>
          <div class="flex pl-4 w-64">
            <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
          </div>
          <div class="btn">
            <button class="bg-[#009688] text-white px-3 py-2 rounded-md ml-4">Экспорт</button>
          </div>
        </div>
      </div>
        <div class="pb-4">
          <Table :titles="thead" :bodies="user" :isIcon="false" :keys="['name_ru','phone']" />
        </div>
        <div>
          <Pagination :currentPage="page" :totalPage="Number(meta)" @pageChangeHandler="pageChangeHandler"  />
        </div>
      </div>
    </div>
  </template>
  <script>
  import {mapState,mapActions} from "vuex";
  export default {
    name: 'IndexPage',
    layout: "admin",
    head: {
      title: "ОТЧЁТЫ",
    },
    data() {
      return {
        page:1,
        icon: false,
        search:"",
        thead: ['СТАНЦИЯ', 'АИ-95', 'АИ-92', 'ДТ', 'ГАЗ', 'ВСЕГО',],
      }
    },
    computed:{
      ...mapState({
        user:(state) => state.api.data,
        meta:(state) => state.api.meta,
      })
    },
    methods:{
      ...mapActions({
        get_page:"api/get_page"
      }),
      async getScoreboard(){
        let payload = {
          request:`/scoreboard?type=1&page=${this.page}`,
          body:[],
        }
        await this.get_page(payload);
      },
      async onSearch(val){
        let payload = {
          request:`/searchUsers?query=${val}`,
          body:[]
        }
        await this.get_page(payload)
      },
      pageChangeHandler(selected){
        this.page = selected;
        this.getScoreboard();
      }
    } ,
    mounted(){
      this.getScoreboard();
    },
  }
  </script>
