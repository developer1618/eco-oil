<template>
    <div class="px-24 w-12/12">
        <div class="grid px-8 py-10 grid-cols-4 bg-white  ">
            <ValidationObserver v-slot="{handleSubmit}">
            <h3 class="text-sm font-medium text-dark pb-10">ПАРТНЁРЫ / ДОБАВЛЕНИЕ ПАРТНЁРА</h3>
                <form class="grid grid-cols-2 gap-8" @submit.prevent="handleSubmit(editPartner)">
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Партнёр<span class="text-red-600"></span></label>
                            <input type="text" v-model="form.name" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите имя партнёра">
                            <p class="text-red-600">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Адрес <span class="text-red-600"></span></label>
                            <input type="text" v-model="form.address" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите адрес">
                            <p class="text-red-600">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Логин<span class="text-red-600"></span></label>
                            <input type="text" v-model="form.username" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите логин">
                            <p class="text-red-600">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                            <div class="relative">
                                <label for="password" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Пароль <span class="text-red-600"></span></label>
                                <input :type="typePassword ? 'password' : 'text'" id="password" name="password" v-model="form.password" placeholder="••••••••" class="bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg  block w-full p-2.5">
                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mb-[-25px]">
                                <img src="/img/eye-pass-on.svg" v-if="typePassword" @click="typePassword = !typePassword" alt="on" class="cursor-pointer">
                                <img src="/img/eye-pass-off.svg" v-else alt="off" @click="typePassword = !typePassword" class="cursor-pointer">
                                </div>                            
                            </div>
                    </div>
                    <div class="col-span-2">
                            <div class="relative">
                                <label for="password" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Повторите пароль <span class="text-red-600"></span></label>
                                <input :type="typePassword ? 'password' : 'text'" id="password2" name="password" v-model="password" placeholder="••••••••" class="bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg  block w-full p-2.5">
                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mb-[-25px]">
                                <img src="/img/eye-pass-on.svg" v-if="typePassword" @click="typePassword = !typePassword" alt="on" class="cursor-pointer">
                                <img src="/img/eye-pass-off.svg" v-else alt="off" @click="typePassword = !typePassword" class="cursor-pointer">
                                </div>
                            </div>
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
            typePassword: false,
            typePassword: false,
            form: {
                username: '',
                address: '',
                status:null,
                name: '',
                password: '',
         },
       };
    },
    computed:{
        ...mapState({
            toast:(state) => state.api.toast,
        }),
    },
    methods: {
    ...mapActions({
      edit: "api/edit",
      get_page: "api/get_page",
      edit: "api/edit",
    }),
    async getPartner() {
      let request = await this.$axios.get(
        `/PartnerRegistration/${this.$route.params.slug}`
      );
      return Object.keys(this.form).map((item) => {
        this.form[item] = request.data[item];
      });
    },
    async editPartner() {
      let payload = {
        text: "Партнер изменено!",
        request: `/PartnerRegistration/${this.$route.params.slug}`,
        form: this.form,
      };
      await this.edit(payload);
      setTimeout(() => {
        this.$router.back();
      }, 2000);
    },
  },
    mounted() {
        this.getPartner();
    },  

}
</script>