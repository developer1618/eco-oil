<template>
    <div class="px-24 w-12/12">
      <div class="bg-white w-full h-[85vh] p-4 overflow-y-auto">
        <div class="flex py-8 items-baseline justify-between px-4">
          <div class="flex">
            <h3 class="text-sm font-medium text-dark pb-5">ТАБЛО</h3>
          </div>
          <div class="flex">
            <CalendarInput />
            <div class="pl-4 w-64">
              <select id="bonus" class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 h-10 focus:border-blue-500 block w-full p-2.5 w-56 ml-4">
                <option value="del">Снято из бонусов</option>
                <option value="add">Начислено бонусов</option>
              </select>
            </div>
            <div class="flex pl-4 w-64">
              <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
            </div>
          </div>
        </div>
        <div class="pb-4">
          <Table :titles="thead" :bodies="user.results" :isIcon="false" :keys="['liter','total','bonus','liter','total','bonus','liter','total','bonus','bonus','bonus']"/>
        </div>
        <div>
          <Pagination :currentPage="page" :totalPage="Number(meta)" @pageChangeHandler="pageChangeHandler"/>
        </div>
      </div>
    </div>
  </template>
<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/datepicker.min.js"></script>
<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
<script>
  import {mapState,mapActions} from "vuex";
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
            icon: false,
            search: "",
            liter: "",
            thead: ["НОМЕР АВТОМОБИЛЯ", "НОМЕР КАРТЫ", "ВОДИТЕЛЬ", "КАССИР", "СТАНЦИЯ", "ТИП ТОВАРА", "ЛИТР", "ТИП ОПЛАТЫ", "СНЯТО ИЗ БОНУСОВ", "ДАТА",],
        };
    },
    computed: {
        ...mapState({
            user: (state) => state.api.data,
            meta: (state) => state.api.meta,
        })
    },
    methods: {
        ...mapActions({
            get_page: "api/get_page"
        }),
        async getScoreboard() {
            let payload = {
                request: `/scoreboard?type=1&page=${this.page}`,
                form:{
                  liter: this.liter,
                }
            };
            await this.get_page(payload);
        },
        async onSearch(val) {
            let payload = {
                request: `/searchUsers?query=${val}`,
                body: []
            };
            await this.get_page(payload);
        },
        pageChangeHandler(selected) {
            this.page = selected;
            this.getScoreboard();
        }
    },
    mounted() {
        this.getScoreboard();
    },
    components: { CalendarInput, Footer }
}
  </script>
