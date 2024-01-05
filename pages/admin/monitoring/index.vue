<template>
  <div class="px-24 w-12/12">
    <div class="bg-white w-full h-[85vh] p-4 overflow-y-auto overflow-x-auto">
      <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">МОНИТОРИНГ / СОТРУДНИКИ</h3>
        </div>
        <div class="flex">
          <div class="pl-4 w-64">
            <select  placeholder="Выберите станцию"  id="address" v-model="station" class="bg-white border border-gray-300 text-[#4D5D7D] text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500">
              <option :value="null" disabled selected>Выберите станцию</option>
              <option :value="item?.id" v-for="item in stations?.results">
                {{ item.station_address }}
              </option>
            </select>
          </div>
          <div class="flex pl-4 w-72">
            <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
          </div>
        </div>
      </div>
      <div class="pb-4">
        <Table :titles="thead" path="/editstaff" :bodies="stuff.results"
          :keys="['station_address', ['name', 'surname'], 'phone', 'last_login', 'last_logout',]" :icon="true" />
      </div>
      <div>
        <Pagination :currentPage="page" :totalPage="Number(meta)" @pageChangeHandler="pageChangeHandler" />
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
    title: "СОТРУДНИКИ",
  },
  data() {
    return {
      page: 1,
      search: "",
      station: null,
      thead: [
        "СТАНЦИЯ",
        "КАССИР",
        "ТЕЛЕФОН",
        "ДАТА ВХОДА",
        "ДАТА ВЫХОДА",
      ],
    };
  },
  computed: {
    ...mapState({
      stuff: (state) => state.api.stuff,
      meta: (state) => state.api.meta,
      stations:(state) => state.api.station
    }),
  },
  methods: {
    ...mapActions({
      get_page: "api/get_page",
    }),
    async getStuff() {
      let payload = {
        request: `/Staff?type=1&page=${this.page}`,
        form: {
          liter: this.liter,
        },
        key: "stuff",
      };
      await this.get_page(payload);
    },
    async getStations() {
      let payload = {
        request: `/Station`,
        key: "station",
      };
      await this.get_page(payload);
    },
    async onSearch(val) {
      let payload = {
        request: `/SearchInStaff?query=${val}`,
        body: [],
        key: "stuff",
      };
      await this.get_page(payload);
    },
    pageChangeHandler(selected) {
      this.page = selected;
      this.getStuff();
    },
  },
  mounted() {
    this.getStuff();
    this.getStations();

  },
};
</script>
