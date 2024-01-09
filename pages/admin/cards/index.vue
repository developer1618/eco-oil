<template>
    <div class="px-24 w-12/12">
      <div class="bg-white w-full h-[85vh] p-4 overflow-y-auto overflow-x-auto">
        <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">МОНИТОРИНГ / КАРТЫ</h3>
        </div>
        <div class="flex">
          <div class="pr-4 w-64">
            <select  placeholder="Выберите станцию"  id="address" v-model="station" class="bg-white border border-gray-300 text-[#4D5D7D] text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500">
              <option :value="null" selected>Выберите станцию</option>
              <option :value="item?.id" v-for="item in stations?.results">
                {{ item.station_address }}
              </option>
            </select>
          </div>
          <div class="flex w-64">
            <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
          </div>
        </div>
      </div>
      <div class="pb-4">
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="text-center text-xs font-semibold bg-[#009688] border-b border-r border-gray-200 text-left leading-4 text-white tracking-wider h-10"
                v-for="title in thead"
              >
                {{ title }}
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <template v-for="(cards) in card">
              <tr v-for="(item,i) in  cards" class="border-b border-gray-200">
              <td
                v-if="i === 0"
                :rowspan="cards.length"
                class="text-center border py-4"
              >
                {{ item.station_address }}
              </td>
              <td
                class="text-center border py-4"
              >
                {{ item.name }} {{ item.surname }}
              </td>
              <td
                class="text-center border py-4"
              >
                {{ item.phone }}
              </td>
              <td
                class="text-center border py-4"
              >
                {{ item.sold_card }}
              </td>
              <td
              v-if="i === 0"
              :rowspan="cards.length"
              class="text-center border py-4"
              >
              {{ item.total_sold_cards}}
              </td>
            </tr>
            </template>
        
          </tbody>
        </table>
      </div>
      <div>
        <Pagination
          :currentPage="page"
          :totalPage="Number(meta)"
          @pageChangeHandler="pageChangeHandler"
        />
      </div>
      </div>
    </div>
  </template>
  <script>
  import { mapState, mapActions,mapGetters} from "vuex";
  export default
  {
    props: ["bodies", "titles", "isIcon", "keys", "path", "deleted"],
    layout: "admin",
    name: "IndexPage",
    head: {
      title: "СОТРУДНИКИ",
    },
    data() {
      return {
        page: 1,
        search: "",
        id: null,
        station: null,
        thead: [
          "СТАНЦИЯ",
          "КАССИР",
          "ТЕЛЕФОН",
          "ПРОДАННО КАРТ",
          "ПРОДАННО КАРТ ВСЕГО",
        ],
      };
    },
    computed: {
      ...mapState({
        staff: (state) => state.api.staff,
        meta: (state) => state.api.meta,
        stations:(state) => state.api.station
      }),
      ...mapGetters({
        card:"api/cardFilter",
      })
    },
    methods: {
      ...mapActions({
        get_page: "api/get_page",
        set_modal: "api/SET_MODAL",
      }),
      async getStuff() {
        const params = {
        type:1,
        page:this.page,
        station_id:this.station,
        status:this.status
      }

        let payload = {
          request: `/Staff?type=1&page=${this.page}`,
          params,
          form: {
            liter: this.liter,
          },
          key: "card",
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
      station() {
        this.getStuff();
      },
      status() {
        this.getStuff();
      }
    },
    mounted() {
      this.getStuff();
      this.getStations();
    },
  };
  </script>
