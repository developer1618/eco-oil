<template>
    <div class="px-24 w-12/12">
      <div class="bg-white w-full h-[85vh] p-4 overflow-y-auto">
        <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">ОТЧЁТЫ / ЕЖЕМЕСЯЧНЫЙ</h3>
        </div>
        <div class="flex items-baseline">
          <div class="w-64 pr-4">
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
          <div class="pl-4 w-64">
            <select id="countries" class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-56 ml-4">
              <option value="US">Сумма (TJS)</option>
              <option value="CA">Сумма (ЛИТРЫ)</option>
              <option value="CA">Сумма (БОНУСЫ)</option>
            </select>
          </div>
          <div class="flex pl-4 w-72">
            <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
          </div>
          <div class="btn">
            <button class="bg-[#009688] text-white px-3 py-2 rounded-md ml-4">Экспорт</button>
          </div>
        </div>
      </div>
        <div class="pb-4">
          <Table :titles="thead" :bodies="report.results" :isIcon="false" :keys="['station_address','ai95','ai92','dt','gas','total_sum']" :icon="true"/>
        </div>
        <div>
          <Pagination :currentPage="page" :totalPage="Number(report.count)" @pageChangeHandler="pageChangeHandler"  />
        </div>
      </div>
    </div>
  </template>
  <script>
  import { mapState, mapActions } from "vuex";
  import Footer from "../../../components/Footer.vue";
  export default {
    name: "IndexPage",
    layout: "admin",
    head: {
      title: "ТАБЛО",
    },
    data() {
      return {
        page: 1,
        search: "",
        thead: [
          "СТАНЦИЯ",
          "АИ — 95",
          "АИ — 92",
          "ДТ",
          "ГАЗ",
          "ВСЕГО",
        ],
      };
    },
    computed: {
      ...mapState({
        report: (state) => state.api.report,
        meta: (state) => state.api.meta,
      }),
      minSelectableDate() {
        const minDate = new Date();
        minDate.setDate(minDate.getDate() + 7); // set minimum date to one week from today
        return minDate;
      },
    },
    methods: {
      ...mapActions({
        get_page: "api/get_page",
      }),
  
      async getReport() {
        let payload = {
          request: `/MonthReportSomoni?type=1&page=${this.page}`,
          form: {
            liter: this.liter,
          },
          key:"report"
        };
        await this.get_page(payload);
      },
      async onSearch(val) {
        let payload = {
          request: `/SearchInBoard?query=${val}`,
          body: [],
          key:"report"
        };
        await this.get_page(payload);
      },
      pageChangeHandler(selected) {
        this.page = selected;
        this.getReport();
      },
    },
    mounted() {
      this.getReport();
    },
    components: { Footer },
  };
  </script>
