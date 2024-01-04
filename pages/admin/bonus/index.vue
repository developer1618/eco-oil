<template>
    <div class="px-24 w-12/12">
      <div class="bg-white w-full h-[85vh] p-4 overflow-y-auto">
        <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">ОТЧЁТЫ / БОНУСЫ</h3>
        </div>
        <div class="flex">
          <div class="pr-4 w-64 mr-4">
            <select id="countries" class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-56 ml-4">
              <option value="US">Выберите станцию</option>
              <option value="CA">Станция №1</option>
              <option value="CA">Станция №2</option>
              <option value="CA">Станция №3</option>
              <option value="CA">Станция №4</option>
              <option value="CA">Станция №5</option>
            </select>
          </div>
          <div class="w-64 mr-8">
            <select id="countries" class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-56">
              <option value="year">Год</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
          <div class="w-56">
            <select id="countries" class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-56">
              <option value="month">Месяц</option>
              <option value="jan">Январь</option>
              <option value="feb">Февраль</option>
              <option value="apr">Март</option>
              <option value="mar">Апрель</option>
              <option value="may">Май</option>
              <option value="jun">Июнь</option>
              <option value="jul">Июль</option>
              <option value="aug">Август</option>
              <option value="sep">Сентябрь</option>
              <option value="oct">Октябрь</option>
              <option value="nov">Ноябрь</option>
              <option value="dec">Декабр</option>
            </select>
          </div>
        </div>
      </div>
        <div class="pb-4 grid gap-8 grid-cols-2">
          <div class="col-span-1">
            <p class="bg-[#009688] text-center text-white text-xs font-semibold shadow overflow-hidden border-b border-gray-200 py-3">ВСЕГО ПРОДАННОГО ТОПЛИВА (ЛИТРЫ)</p>
            <Table :titles="thead" :bodies="station.results" :isIcon="false" :keys="['ai95', 'ai92', 'disel', 'gas']":icon="true" />
            <div class="btn flex justify-start pb-10 pt-4">
              <button class="bg-[#009688] text-white px-3 py-2 rounded-md">Экспорт</button>
            </div>
          </div>
          <div class="col-span-1">
            <p class="bg-[#009688] text-center text-white text-xs font-semibold shadow overflow-hidden border-b border-gray-200 py-3">ВСЕГО НАЧИСЛЕННЫХ БОНУСОВ (TJS)</p>
            <Table :titles="thead2" :bodies="station.results" :isIcon="false" :keys="['ai95', 'ai92', 'disel', 'gas']":icon="true" />
            <div class="btn flex justify-start pb-10 pt-4">
              <button class="bg-[#009688] text-white px-3 py-2 rounded-md">Экспорт</button>
            </div>
          </div>
          <div class="col-span-2">
            <Table :titles="thead3" :bodies="user" :isIcon="false" :keys="['staff_name','amount_per_liter','total_bonus',['client_data', 'card_number'],['client_data', 'registration_date']]" :icon="true" />
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
        date_of_birth: "",
        search: "",
        liter: "",
        thead: ['АИ-95', 'АИ-92', 'ДТ', 'ГАЗ'],
        thead2: ['АИ-95', 'АИ-92', 'ДТ', 'ГАЗ'],
        thead3: ['КАССИР', 'ЛИТР', 'СУММА', 'НОМЕР АВТОМОБИЛЯ', 'ДАТА'],
      }
    },
    computed:{
      ...mapState({
        scoreboard: (state) => state.api.scoreboard,
        station: (state) => state.api.station,
        meta:(state) => state.api.meta,
      })
    },
    methods:{
      ...mapActions({
        get_page:"api/get_page"
      }),
      async getScoreboard(){
        let payload = {
          request: `/Station?type=1&page=${this.page}`,
          form: {
            liter: this.liter,
          },
          key: "station",
          body:[],
        }
        await this.get_page(payload);
      },
      async onSearch(val){
        let payload = {
          request: `/SearchInStation?query=${val}`,
          body:[],
          key:"station",
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

  <style scoped>
  .table-icon {
    display: none;
  }
 </style>