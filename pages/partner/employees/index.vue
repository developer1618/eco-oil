<template>
  <div class="px-24 w-12/12">
    <div class="bg-white w-full  p-4">
      <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">CОТРУДНИКИ (РОСТ ОИЛ)</h3>
        </div>
        <div class="flex items-baseline">
          <div class="flex pl-4 w-64">
            <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
          </div>
          <div class="btn">
            <button class="bg-[#009688] text-white px-3 py-2 rounded-md ml-4">Добавить +</button>
          </div>
        </div>
      </div>
      <div class="pb-4">
        <Table :titles="thead" path="editstaff" deleted="staff" :bodies="staff" :isIcon="true" :keys="['name_ru','description_ru','created_at',]"/>
      </div>
      <div>
        <Pagination :currentPage="page" :totalPage="Number(meta)" @pageChangeHandler="pageChangeHandler"/>
      </div>
      <div class="flex">
        <AddButton addButton="Добавить" link="/partner/staff/addstaff"/>
        <AddButton addButton="Редактировать" link="/partner/staff/editstaff"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
  layout:"admin",
  name: 'IndexPage',
  head: {
    title: "СОТРУДНИКИ",
  },
  data() {
    return {
      page:1,
      search:"",
      thead: ['ФИО', 'НОМЕР АВТОМОБИЛЯ', 'НОМЕР КАРТЫ', 'НОМЕР ТЕЛЕФОНА', 'ВИД ТОПЛИВА', 'ЛИМИТ (TJS)', 'СТАТУС', ''],
    }
  },
  computed:{
    ...mapState({
      staff:(state) => state.api.data,
      meta:(state) => state.api.meta,
    })
  },
  methods:{
      ...mapActions({
        get_page:"api/get_page"
      }),
      async getArticles(){
        let payload = {
          request:`/staff?type=1&page=${this.page}`,
          body:[]
        }
        await this.get_page(payload);
      },
      async onSearch(val){
        let payload = {
          request:`/searchArticles?query=${val}`,
          body:[]
        }
        await this.get_page(payload)
      },
      pageChangeHandler(selected){
        this.page = selected;
        this.getArticles();
      },
    } ,
    mounted(){
      this.getArticles();
    }
}
</script>