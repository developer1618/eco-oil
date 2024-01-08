<template>
  <div class="px-24 w-12/12">
    <div class="bg-white w-full h-[85vh] p-4 overflow-y-auto overflow-x-auto">
      <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">ОТЧЁТЫ</h3>
        </div>
        <div class="flex">
          <div class="flex pl-4 w-72">
            <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
          </div>
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
      <div class="btn flex justify-end pt-4 pb-4">
        <button @click="exportReport" class="bg-[#009688] text-white px-3 py-2 rounded-md ml-4">
          Экспорт
        </button>
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
    async exportReport() {
      try {
        const response = await this.$axios.get('/ReportSomoni/export/', {
          responseType: 'arraybuffer', // указываем, что ожидаем массив байтов
        });
        const blob = new Blob([response.data], { type: 'application/octet-stream' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'Report_on_stations_in_somoni.xlsx'; // замените на имя файла, которое вы ожидаете
        link.click();
      } catch (error) {
        console.error('Ошибка при экспорте файла:', error);
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
  },
  components: { CalendarInput, Footer },
};
</script>