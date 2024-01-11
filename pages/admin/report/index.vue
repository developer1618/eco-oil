<template>
  <div class="px-24 w-12/12">
    <div class="bg-white w-full h-[85vh] p-4 overflow-y-auto overflow-x-auto">
      <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">ОТЧЁТЫ</h3>
        </div>
        <div class="flex">
          <!-- <div class="pl-4 w-64">
            <select  placeholder="Выберите станцию"  id="address" v-model="station" class="bg-white border border-gray-300 text-[#4D5D7D] text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500">
              <option :value="null" selected>Выберите станцию</option>
              <option :value="item?.id" v-for="item in stations?.results">
                {{ item.station_address }}
              </option>
            </select>
          </div> -->
          <div class="pl-4 w-64">
            <select placeholder="Выберите год" id="address" v-model="selectedYear" class="bg-white border border-gray-300 text-[#4D5D7D] text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500">
              <option :value="null" selected>Выберите год</option>
              <option :value="year" v-for="year in years">
                {{ year }}
              </option>
            </select>
          </div>
          <div class="pl-4 w-64">
            <select id="countries" v-model="month" class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-56">
              <option :value="null" selected>Выберите месяц</option>
              <option id="1" value="1">Январь</option>
              <option id="2" value="2">Февраль</option>
              <option id="3" value="3">Март</option>
              <option id="4" value="4">Апрель</option>
              <option id="5" value="5">Май</option>
              <option id="6" value="6">Июнь</option>
              <option id="7" value="7">Июль</option>
              <option id="8" value="8">Август</option>
              <option id="9" value="9">Сентябрь</option>
              <option id="10" value="10">Октябрь</option>
              <option id="11" value="11">Ноябрь</option>
              <option id="12" value="12">Декабр</option>
            </select>
          </div>
          <div class="flex pl-4 w-72">
            <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
          </div>
          <button @click="exportReport" class="bg-[#009688] text-white px-3 py-2 rounded-md ml-4">
            Экспорт
          </button>
        </div>
      </div>
      <div class="pb-4">
        <Table :titles="thead" :bodies="scoreboard.results" :isIcon="false" :keys="[
          ['station', 'station_address'],
          'staff_name',
          ['client_data', 'full_name'],
          ['client_data', 'plate_number'],
          ['client_data', 'card_number'],
          'payment_type',
          'fuel_type',
          'amount_per_liter',
          'total_bonus',
          'client_bonus',
          ['client_data', 'registration_date']
        ]" :icon="true" />
      </div>
      <div>
        <Pagination :currentPage="page" :totalPage="Number(scoreboard.count)" @pageChangeHandler="pageChangeHandler" />
      </div>
    </div>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/datepicker.min.js"></script>
<script>
import { mapState, mapActions } from "vuex";
import CalendarInput from "../../../components/CalendarInput.vue";
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
      fromDate: "",
      date_of_birth: "",
      icon: false,
      search: "",
      years: [],
      selectedYear: null,
      month: null,
      station: null,
      liter: "",
      thead: [
        "СТАНЦИЯ",
        "КАССИР",
        "ВОДИТЕЛЬ",
        "НОМЕР АВТОМОБИЛЯ",
        "НОМЕР КАРТЫ",
        "ТИП ОПЛАТЫ",
        "ТИП ТОВАРА",
        "ЛИТР",
        "СУММА",
        "НАЧИСЛЕНО БОНУСОВ",
        "ДАТА",
      ],
    };
  },
  computed: {
    ...mapState({
      scoreboard: (state) => state.api.scoreboard,
      meta: (state) => state.api.meta,
      years: (state) => state.api.years
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
    async fetchYears() {
      try {
        const response = await this.$axios.get('http://api.ecooil.colibri.tj/api/avail-years');
        this.years = response.data.years;
      } catch (error) {
        console.error('Ошибка при получении данных о годах:', error);
      }
    },
    async exportReport() {
      try {
        const year = this.selectedYear;
        const month = this.month;

        let baseUrl = 'http://api.ecooil.colibri.tj/api';
        let url = `${baseUrl}/ReportSomoni/export/`;

        // Check if only year is selected
        if (year !== null && month === null) {
          url += `?year=${year}`;
        }

        // Check if both year and month are selected
        if (year !== null && month !== null) {
          url += `?year=${year}&month=${month}`;
        }

        const response = await this.$axios.get(url, {
          responseType: 'arraybuffer',
        });

        const blob = new Blob([response.data], { type: 'application/octet-stream' });
        const link = document.createElement('a');

        // Set the filename based on whether year and month are selected
        if (year !== null && month !== null) {
          link.download = `Report_on_stations_in_somoni_${year}_${month}.xlsx`;
        } else if (year !== null) {
          link.download = `Report_on_stations_in_somoni_${year}.xlsx`;
        } else {
          link.download = 'Report_on_stations_in_somoni.xlsx';
        }

        link.href = window.URL.createObjectURL(blob);
        link.click();
      } catch (error) {
        console.error('Error exporting file:', error);
      }
    },

    async getScoreboard() {
      let payload = {
        request: `/Board?type=1&page=${this.page}`,
        form: {
          liter: this.liter,
        },
        key:"scoreboard"
      };
      await this.get_page(payload);
    },
    async onSearch(val) {
      let payload = {
        request: `/SearchInBoard?query=${val}`,
        body: [],
        key:"scoreboard"
      };
      await this.get_page(payload);
    },
    pageChangeHandler(selected) {
      this.page = selected;
      this.getScoreboard();
    },
  },
  mounted() {
    this.getScoreboard();
    this.fetchYears();
  },
  components: { CalendarInput, Footer },
};
</script>