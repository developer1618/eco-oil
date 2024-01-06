<template>
  <div class="px-24 w-12/12">
    <div class="bg-white w-full h-[85vh] p-4 overflow-y-auto overflow-x-auto">
      <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">СОТРУДНИКИ</h3>
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
          <div class="pl-4 w-64">
            <select id="countries"
              class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 h-10 focus:border-blue-500 block w-full p-2.5 w-56 ml-4">
              <option disabled>Выберите статус</option>
              <option value="1">Активный</option>
              <option value="0">Неактивный</option>
            </select>
          </div>
          <div class="flex pl-4 w-72">
            <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
          </div>
          <div class="btn">
            <AddButton addButton="Добавить +" link="/admin/staff/addstaff" />
          </div>
        </div>
      </div>
      <div class="pb-4">
        <Table :titles="thead" :bodies="staff.results" path="/editstaff" :isIcon="true" :keys="[
          ['name', 'surname'],
          'date_of_birth',
          'gender',
          'phone',
          'station_address',
          'status',
        ]" />
      </div>
      <div>
        <Pagination :currentPage="page" :totalPage="Number(staff.count)" @pageChangeHandler="pageChangeHandler" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "IndexPage",
  layout: "admin",
  head: {
    title: "СОТРУДНИКИ",
  },
  data() {
    return {
      page: 1,
      search: "",
      station: null,
      thead: [
        "ФИО",
        "ДАТА РОЖДЕНИЯ",
        "ПОЛ",
        "ТЕЛЕФОН",
        "СТАНЦИЯ",
        "СТАТУС",
        "",
      ],
    };
  },
  computed: {
    ...mapState({
      staff: (state) => state.api.staff,
      meta: (state) => state.api.meta,
      stations:(state) => state.api.station
    }),
  },
  methods: {
    ...mapActions({
      get_page: "api/get_page",
    }),
    async getStuff(stationID) {
      const params = {
        type:1,
        page:this.page,
      }

      if(stationID) {
        params.station_registration = stationID;
      }

      let payload = {
        request: `/Staff`,
        params,
        form: {
          liter: this.liter,
        },
        key: "staff",
      };
      await this.get_page(payload);
    },
    async getStuff() {
      let payload = {
        request: `/Staff?page=${this.page}`,
        form: {
          liter: this.liter,
        },
        key: "staff",
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
        key: "staff",
      };
      await this.get_page(payload);
    },
    pageChangeHandler(selected) {
      this.page = selected;
      this.getStuff();
    },
  },
  watch:{
    station(stationId) {
      this.getStuff(stationId);
    }
  },
  mounted() {
    this.getStuff();
    this.getStations();
  },
};
</script>

