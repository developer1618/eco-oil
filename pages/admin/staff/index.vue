<template>
  <div class="px-24 w-12/12">
    <div class="bg-white w-full h-[85vh] p-4">
      <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">СОТРУДНИКИ</h3>
        </div>
        <div class="flex items-baseline">
          <div class="pl-4 w-64">
            <select
              id="countries"
              class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-56 ml-4"
            >
              <option value="US">Выберите станцию</option>
              <option value="CA">Станция №1</option>
              <option value="CA">Станция №2</option>
              <option value="CA">Станция №3</option>
              <option value="CA">Станция №4</option>
              <option value="CA">Станция №5</option>
            </select>
          </div>
          <div class="pl-4 w-64">
            <select
              id="countries"
              class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-56 ml-4"
            >
              <option value="US">Выберите статус</option>
              <option value="CA">Активный</option>
              <option value="CA">Неактивный</option>
            </select>
          </div>
          <div class="flex pl-4 w-64">
            <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
          </div>
          <div class="btn">
            <AddButton
              addButton="Добавить +"
              link="/admin/staff/addstaff"
            />
          </div>
        </div>
      </div>
      <div class="pb-4">
        <Table
          :titles="thead"
          path="/editstaff"
          deleted="editstaff"
          :bodies="stuff"
          :isIcon="true"
          :keys="['name', 'date_of_birth', 'gender', 'phone','station_address','status',]"
        />
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
      stuff: (state) => state.api.stuff,
      meta: (state) => state.api.meta,
    }),
  },
  methods: {
    ...mapActions({
      get_page: "api/get_page",
    }),
    async getStuff() {
      let payload = {
        request: `/StaffRegistration`,
        body: [],
        key: "stuff",
      };
      await this.get_page(payload);
    },
    async onSearch(val) {
      let payload = {
        request: `/searchArticles?query=${val}`,
        body: [],
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
  },
};
</script>
