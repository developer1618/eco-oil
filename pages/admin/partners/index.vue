<template>
  <div class="px-24 w-12/12">
    <div class="bg-white w-full h-[85vh] p-4 overflow-y-auto">
      <div class="flex py-8 items-baseline justify-between px-4">
        <div class="flex">
          <h3 class="text-sm font-medium text-dark pb-5">ПАРТНЁРЫ</h3>
        </div>
        <div class="flex items-baseline">
          <div class="flex pl-4 w-72">
            <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
          </div>
          <div class="btn">
            <AddButton
              addButton="Добавить +"
              link="partners/addpartners"
            />
          </div>
        </div>
      </div>
      <div class="pb-4">
        <Table :titles="thead" :bodies="partners" deleted="partners" path="/editpartners" :isIcon="true" :keys="['name', 'address', 'registration_date', 'balance', 'status',]"/>
      </div>
      <div>
        <Pagination :currentPage="page" :totalPage="Number(meta)" @pageChangeHandler="pageChangeHandler"/>
        <!-- <Modal /> -->
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
  name: 'IndexPage',
  layout:"admin",
  head: {
    title: "ПАРТНЁРЫ",
  },
  data() {
    return {
      page:1,
      search:"",
      thead: ['ПАРТНËР', 'АДРЕС', 'ДАТА РЕГИСТРАЦИИ', 'ТЕКУЩИЙ БАЛАНС(TJS)', 'СТАТУС', ''],
    }
  },
  computed:{
    ...mapState({
      partners:(state) => state.api.partners,
      meta:(state) => state.api.meta,
    })
  },

  methods:{
      ...mapActions({
        get_page:"api/get_page"
      }),
      async getPartner(){
        let payload = {
          // request:`/PartnerRegistration=${this.page}`,
          request:`/PartnerRegistration`,
          body:[],
          key: 'partners',
        }
        await this.get_page(payload);
        console.log(this.partners); // add this line to check the retrieved data
      },

      async onSearch(val){
        let payload = {
          request:`/searchVideos?query=${val}`,
          body:[]
        }
        console.log(payload); // add this line to check the payload being sent
        await this.get_page(payload);
        console.log(this.partners); // add this line to check the retrieved data
      },

      pageChangeHandler(selected){
        console.log(selected); // add this line to check the selected page number
        this.page = selected;
        this.getPartner();
      },

    } ,
    mounted(){
      this.getPartner();
    }
}
</script>