<template>
    <div class="px-24 w-12/12">
      <div class="bg-white w-full h-[85vh] p-4 overflow-y-auto">
        <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">МОНИТОРИНГ / КАРТЫ</h3>
        </div>
        <div class="flex">
          <div class="w-64 pr-4">
            <select id="countries" class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-56">
              <option value="year">Год</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
          <div class="w-64 pr-4">
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
          <div class="w-64 pr-4">
            <select id="countries" class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-56">
              <option value="US">Выберите станцию</option>
              <option value="CA">Станция №1</option>
              <option value="CA">Станция №2</option>
              <option value="CA">Станция №3</option>
              <option value="CA">Станция №4</option>
              <option value="CA">Станция №5</option>
            </select>
          </div>
          <div class="flex w-72">
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
        meta: (state) => state.api.meta,
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
      async getCard() {
        let payload = {
          request: `/Staff?type=1&page=${this.page}`,
          key: "card",
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
        this.getCard();
      },
    },
    mounted() {
      this.getCard();
    },
  };
  </script>
