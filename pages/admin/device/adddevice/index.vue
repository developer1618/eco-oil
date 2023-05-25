<template>
    <div class="px-24 w-12/12">
        <div class="grid px-8 py-10 grid-cols-4 bg-white h-[85vh] ">
            <ValidationObserver v-slot="{handleSubmit}">
            <h3 class="text-sm font-medium text-dark pb-10">МОНИТОРИНГ / УСТРОЙСТВА / ДОБАВЛЕНИЕ</h3>
                <form class="grid grid-cols-2 gap-8" @submit.prevent="handleSubmit(getPartner)">
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">ID<span class="text-red-600 absolute"></span></label>
                            <input type="text" v-model="form.id" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите ID">
                            <p class="text-red-600 absolute">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                >Станция регистрации <span class="text-red-600 absolute"></span></label
              >
              <select
                id="address"
                v-model="form.station"
                class="bg-white border border-gray-300 text-[#4D5D7D] text-sm rounded-lg block w-full p-2.5 text-white focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="1">
                  Шохмансур, Дустии Халкҳо 31
                </option>
                <option value="2">
                  Шохмансур, Дустии Халкҳо 32
                </option>
                <option value="3">
                  Шохмансур, Дустии Халкҳо 33
                </option>
                <option value="4">
                  Шохмансур, Дустии Халкҳо 34
                </option>
                <option value=5">
                  Шохмансур, Дустии Халкҳо 35
                </option>
              </select>
              <p class="text-red-600 absolute">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="flex flex-wrap">
                        <div class="flex items-center pb-4">
                            <label class="text-sm font-medium text-[#6B7280]">Статус</label>
                        </div>
                        <div class="flex">
                            <div class="flex items-center mr-4">
                                <input id="red-radio" type="radio" v-model="form.status" :value="1" name="colored-radio" class="w-4 h-4 bg-gray-100 border-gray-300">
                                <label for="red-radio" class="ml-2 text-sm font-medium text-gray-500">Активный</label>
                            </div>
                            <div class="flex items-center mr-4">
                                <input id="green-radio" type="radio" v-model="form.status" :value="0" name="colored-radio" class="w-4 h-4 bg-gray-100 border-gray-300">
                                <label for="green-radio" class="ml-2 text-sm font-medium text-gray-500">Неактивный</label>
                            </div>
                        </div>

                    </div>
                    <div class="col-span-2 navbtn">
                        <button
                        type="submit"
                        class="text-white bg-[#009688] hover:bg-[#157766] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                        >
                        Сохранить
                        </button>
                        <nuxt-link
                        to="/admin/partners"
                        type="button"
                        class="text-[#4D5D7D] border border-[#009688] text-[#009688] hover:bg-[#009688] hover:text-[#fff] focus:outline-none focus:ring-gray-200 font-medium rounded-lg hover:rounded-lg text-sm px-8 py-2.5 hover:px-8 hover:py-2.5 mr-2 mb-2"
                        >Назад</nuxt-link
                        >
                        <p id="send-validate" class="text-red-600 pt-4 block" v-if="toast.open">
                        {{ toast.text }}
                        </p>
                    </div>
                </form>
            </ValidationObserver>
        </div>
    </div>
  </template>
<script>
import {  mapActions, mapState, } from "vuex";
export default {
    layout:"admin",
    data() {
        return {
        typePassword: true,
        typePassword2: true,
        form: {
            username: '',
            address: '',
            name: '',
            password: '',
            password2: '',
            role: 3,
        },
    };
},
    computed:{
        ...mapState({
            toast:(state) => state.api.toast,
        })
    },
    methods: {
        ...mapActions({
            store:"api/store",
            get_page:"api/get_page",
            edit:"api/edit",
        }),
        async getPartner()
        {
            let payload = {
                text:"ПАРТНЁРЫ добавлено!",
                request:"/PartnerRegistration",
                form:this.form,
            }
           await this.store(payload);
      setTimeout(() => {
        this.$router.back();
      }, 2000);
            
        },
    },
}
</script>