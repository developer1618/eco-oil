<template>
  <div class="px-24 w-12/12">
    <div class="bg-white w-full h-[85vh] p-4 overflow-y-auto overflow-x-auto">
      <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">КЛИЕНТЫ (АВТО)</h3>
        </div>
        <div class="flex">
          <div class="col-span-3 w-64">
            <select  placeholder="Выберите станцию"  id="address" v-model="station" class="bg-white border border-gray-300 text-[#4D5D7D] text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500">
              <option :value="null" selected>Выберите станцию</option>
              <option :value="item?.id" v-for="item in stations?.results">
                {{ item.station_address }}
              </option>
            </select>
          </div>
          <div class="flex pl-4 w-64">
            <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
          </div>
        </div>
      </div>
      <div class="pb-4">
        <Table
          :titles="thead"
          :bodies="clients.results"
          path="/editclients"
          :isIcon="true"
          :keys="[
            'full_name',
            'date_of_birth',
            'gender',
            'plate_number',
            'card_number',
            'phone',
            'registration_date',
            'bonus',
            'station',
            'status',
          ]"
        />
      </div>
      <!-- <div class="btn flex justify-end py-4">
        <button class="bg-[#009688] text-white px-3 py-2 rounded-md ml-4">
          Экспорт
        </button>
      </div> -->
      <div>
        <Pagination
          :currentPage="page"
          :totalPage="Number(clients.count)"
          @pageChangeHandler="pageChangeHandler"
        />
      </div>
      <!-- <div class="flex">
        <AddButton addButton="Редактировать" link="clients/editclients"/>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "IndexPage",
  layout: "admin",
  head: {
    title: "КЛИЕНТЫ (АВТО)",
  },
  data() {
    return {
      page: 1,
      search: "",
      thead: [
        "ФИО",
        "ДАТА РОЖДЕНИЯ",
        "ПОЛ",
        "НОМЕР АВТОМОБИЛЯ",
        "НОМЕР КАРТЫ",
        "ТЕЛЕФОН",
        "ДАТА РЕГИСТРАЦИИ",
        "КОЛ-ВО БОНУСОВ",
        "СТАНЦИЯ",
        "СТАТУС",
        "",
      ],
      station:null
    };
  },
  computed: {
    ...mapState({
      clients: (state) => state.api.client,
      meta: (state) => state.api.meta,
      stations:(state) => state.api.station
    }),
  },
  methods: {
    ...mapActions({
      get_page: "api/get_page",
    }),
    async getClient(stationID) {
      const params = {
        type:1,
        page:this.page,
      }

      if(stationID) {
        params.station_registration = stationID;
      }

      let payload = {
        request: `/Client`,
        params,
        form: {
          liter: this.liter,
        },
        key: "client",
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
        request: `/SearchInClient?query=${val}`,
        body: [],
        key: "client",
      };
      await this.get_page(payload);
    },
    pageChangeHandler(selected) {
      this.page = selected;
      this.getClient();
    },
  },
  watch:{
    station(stationId) {
      this.getClient(stationId);
    }
  },
  mounted() {
    this.getClient();
    this.getStations();
  },
};
</script>
