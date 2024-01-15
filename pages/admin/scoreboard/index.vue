<template>
  <div class="px-24 w-12/12">
    <div class="bg-white w-full h-[85vh] p-4 overflow-y-auto overflow-x-auto">
      <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">ТАБЛО</h3>
        </div>
        <div class="flex">
          <div class="flex pl-4 w-72">
            <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
          </div>
        </div>
      </div>
      <div class="pb-4">
        <Table :titles="thead" :bodies="scoreboard.results ? scoreboard.results.map(row => ({
            ...row,
            prev_bonus: row.prev_bonus.toFixed(2),
            total_bonus: row.total_bonus.toFixed(2)
          })) : []" :isIcon="false" :keys="[
            ['station', 'station_address'],
            'staff_name',
            ['client_data', 'full_name'],
            'fuel_type',
            'payment_type',
            'amount_per_liter',
            'amount',
            'prev_bonus',
            'client_bonus',
            'total_bonus',
            'created_at',
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
      liter: "",
      thead: [
        "СТАНЦИЯ",
        "КАССИР",
        "ВОДИТЕЛЬ",
        "ТИП ТОВАРА",
        "ТИП ОПЛАТЫ",
        "ЛИТР",
        "СУММА ОПЛАТЫ",
        "ПРЕДЫДУЩИЙ БОНУС",
        "ЗАЧИСЛЕНО БОНУСОВ",
        "БОНУС (ИТОГ)",
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