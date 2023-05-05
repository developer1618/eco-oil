<template>
    <div class="px-24 w-12/12">
      <div class="bg-white w-full h-[85vh] p-4 overflow-y-auto">
        <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">МОНИТОРИНГ / КАРТЫ</h3>
        </div>
        <div class="flex items-baseline">
          <CalendarInput />
          <div class="pl-4 w-64">
            <select id="countries" class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-56 ml-4">
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
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="text-center text-xs font-semibold bg-[#009688] border-b border-r border-gray-200 text-left leading-4 text-white tracking-wider h-10"
                v-for="title in thead"
              >
                {{ title }}
              </th>
              <!-- <th class="flex justify-end text-xs font-semibold px-6 py-3 border-b border-gray-200 text-left leading-4 text-[#B3B9C9] tracking-wider">

            </th> -->
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="(title, i) in bodies" class="border-b border-gray-200">
              <td
                class="text-center border py-4"
                v-for="key in Object.values(keys)"
              >
                <div class="flex items-center flex justify-center">
                  <!-- <div class="ml-1 flex justify-between"> -->
                  <div class="text-sm leading-5 font-medium text-gray-900">
                    <p v-if="!Array.isArray(key)">
                      {{
                        key === "created_at"
                          ? $moment(title[key]).format("DD/MM/YYYY")
                          : (key === 'status' && title[key] === 1) ? 'Активен' : (key === 'status' && title[key] === 0) ? 'Неактивен' : title[key]
                      }}
                    </p>
                    <p v-else>
                      {{ !title[key[0]][key[1]] ? `${title[key[0]]} ${title[key[1]]}` : title[key[0]][key[1]] }}
                    </p>
                    <!-- </div> -->
                  </div>
                </div>
              </td>
              <td
                class="flex justify-center text-center py-2"
              >
                <nuxt-link
                  v-if="isIcon"
                  :to="`${$route.path}${path}/${title.id}`"
                  class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline flex"
                  >
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33322 3.83334H3.99988C3.2635 3.83334 2.66655 4.43029 2.66655 5.16667V12.5C2.66655 13.2364 3.2635 13.8333 3.99988 13.8333H11.3332C12.0696 13.8333 12.6665 13.2364 12.6665 12.5V9.16667M11.7237 2.89052C12.2444 2.36983 13.0887 2.36983 13.6094 2.89052C14.1301 3.41122 14.1301 4.25544 13.6094 4.77614L7.8855 10.5H5.99988L5.99988 8.61438L11.7237 2.89052Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </nuxt-link>
                <!-- <div
                  v-if="isIcon"
                  class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline flex cursor-pointer"
                  @click="set_modal(true), (id = title.id)"
                >
                  <img src="/img/delete.svg" alt="Delete" />
                </div> -->
              </td>
            </tr>
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
  import { mapState, mapActions } from "vuex";
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
        stuff: (state) => state.api.stuff,
        meta: (state) => state.api.meta,
      }),
    },
    methods: {
      ...mapActions({
        get_page: "api/get_page",
        set_modal: "api/SET_MODAL",
      }),
      async getStuff() {
        let payload = {
          request: `/StaffRegistration?type=1&page=${this.page}`,
          form: {
            liter: this.liter,
          },
          key: "stuff",
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
    },
  };
  </script>
