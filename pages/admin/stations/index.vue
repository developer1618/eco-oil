<template>
  <div class="px-24 w-12/12">
    <div class="bg-white w-full h-[85vh] p-4 overflow-y-auto overflow-x-auto">
      <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">
            СТАНЦИИ (ЦЕНЫ НА ТОПЛИВО)
          </h3>
        </div>
        <div class="flex">
          <div class="flex pl-4 w-72">
            <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
          </div>
          <div class="btn">
            <AddButton
              addButton="Добавить +"
              link="/admin/stations/addstations"
            />
          </div>
        </div>
      </div>
      <div class="pb-4">
        <Table
          :titles="thead"
          path="/editstations"
          :bodies="station.results"
          :isIcon="true"
          :keys="['station_address', 'ai95', 'ai92', 'disel', 'gas']"
        />
      </div>
      <div>
        <Pagination
          :currentPage="page"
          :totalPage="Number(station.count)"
          @pageChangeHandler="pageChangeHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  layout: "admin",
  name: "IndexPage",
  head: {
    title: "СТАНЦИИ",
  },
  data() {
    return {
      page: 1,
      search: "",
      thead: ["СТАНЦИЯ", "АИ-95", "АИ-92", "ДТ", "ГАЗ", ""],
    };
  },
  computed: {
    ...mapState({
      station: (state) => state.api.station,
      meta: (state) => state.api.meta,
    }),
  },
  methods: {
    ...mapActions({
      get_page: "api/get_page",
    }),
    async getStations() {
      let payload = {
        request: `/Station?type=1&page=${this.page}`,
        form: {
          liter: this.liter,
        },
        key: "station",
      };
      await this.get_page(payload);
    },
    async onSearch(val) {
      let payload = {
        request: `/SearchInStation?query=${val}`,
        body: [],
        key:"station"
      };
      await this.get_page(payload);
    },
    pageChangeHandler(selected) {
      this.page = selected;
      this.getStations();
    },
  },
  mounted() {
    this.getStations();
  },
};
</script>
