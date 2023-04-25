<template>
    <div class="px-24 w-12/12">
      <div class="bg-white w-full h-[85vh] p-4">
        <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">ОТЧЁТЫ / БОНУСЫ</h3>
        </div>
        <div class="flex items-baseline">
          <div class="pr-4 w-64">
            <select id="countries" class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-48 ml-4">
              <option value="US">Выберите станцию</option>
              <option value="CA">Станция №1</option>
              <option value="CA">Станция №2</option>
              <option value="CA">Станция №3</option>
              <option value="CA">Станция №4</option>
              <option value="CA">Станция №5</option>
            </select>
          </div>
          <CalendarInput />
        </div>
      </div>
        <div class="pb-4 grid gap-8 grid-cols-2">
          <div class="col-span-1">
            <p class="bg-[#009688] text-center text-white text-xs font-semibold shadow overflow-hidden border-b border-gray-200 py-3">ВСЕГО ПРОДАННОГО ТОПЛИВА (ЛИТРЫ)</p>
            <Table :titles="thead" :bodies="user" :isIcon="false" :keys="['name_ru','phone']" />
            <div class="btn flex justify-start pb-10 pt-4">
              <button class="bg-[#009688] text-white px-3 py-2 rounded-md">Экспорт</button>
            </div>
          </div>
          <div class="col-span-1">
            <p class="bg-[#009688] text-center text-white text-xs font-semibold shadow overflow-hidden border-b border-gray-200 py-3">ВСЕГО НАЧИСЛЕННЫХ БОНУСОВ (TJS)</p>
            <Table :titles="thead2" :bodies="user" :isIcon="false" :keys="['name_ru','phone']" />
            <div class="btn flex justify-start pb-10 pt-4">
              <button class="bg-[#009688] text-white px-3 py-2 rounded-md">Экспорт</button>
            </div>
          </div>
          <div class="col-span-2">
            <Table :titles="thead3" :bodies="user" :isIcon="false" :keys="['name_ru','phone']" />
            <div class="btn flex justify-start pb-10 pt-4">
              <button class="bg-[#009688] text-white px-3 py-2 rounded-md">Экспорт</button>
            </div>
          </div>
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
        thead: ['АИ-95', 'АИ-92', 'ДТ', 'ГАЗ'],
        thead2: ['АИ-95', 'АИ-92', 'ДТ', 'ГАЗ'],
        thead3: ['КАССИР', 'ЛИТР', 'СУММА', 'НОМЕР АВТОМОБИЛЯ', 'ДАТА'],
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
