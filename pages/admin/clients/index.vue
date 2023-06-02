<template>
  <div class="px-24 w-12/12">
    <div class="bg-white w-full h-[85vh] p-4 overflow-y-auto">
      <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">КЛИЕНТЫ (АВТО)</h3>
        </div>
        <div class="flex items-baseline">
          <div class="pl-4 w-64">
            <select id="countries"
              class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 h-10 focus:border-blue-500 block w-full p-2.5 w-56 ml-4">
              <option value="US">Выберите станцию</option>
              <option value="CA">Станция №1</option>
              <option value="CA">Станция №2</option>
              <option value="CA">Станция №3</option>
              <option value="CA">Станция №4</option>
              <option value="CA">Станция №5</option>
            </select>
          </div>
          <div class="flex pl-4 w-72">
            <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
          </div>
        </div>
      </div>
      <div class="pb-4">
        <Table :titles="thead" :bodies="clients.results" path="/editclients" :isIcon="true" :keys="[
          'full_name',
          'date_of_birth',
          'gender',
          'plate_number',
          'card_number',
          'phone',
          'registration_date',
          'bonus',
          'full_name',
          'status',
        ]" />
      </div>
      <div class="btn flex justify-end py-4">
        <button class="bg-[#009688] text-white px-3 py-2 rounded-md ml-4">
          Экспорт
        </button>
      </div>
      <div>
        <Pagination :currentPage="page" :totalPage="Number(clients.count)" @pageChangeHandler="pageChangeHandler" />
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
    };
  },
  computed: {
    ...mapState({
      clients: (state) => state.api.client,
      meta: (state) => state.api.meta,
    }),
  },
  methods: {
    ...mapActions({
      get_page: "api/get_page",
    }),
    async getClient() {
      let payload = {
        request: `/Client?type=1&page=${this.page}`,
        form: {
          liter: this.liter,
        },
        key: "client",
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
  mounted() {
    this.getClient();
  },
};
</script>