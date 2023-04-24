<template>
    <div class="px-24 w-12/12">
        <div class="grid px-8 py-10 grid-cols-2 bg-white   ">
            <ValidationObserver v-slot="{handleSubmit}">
            <h3 class="text-sm font-medium text-dark pb-10">CОТРУДНИКИ (РОСТ ОИЛ) / ДОБАВЛЕНИЕ СОТРУДНИКА</h3>
                <form class="grid grid-cols-4 gap-8" @submit.prevent="handleSubmit(getStations)">
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Ф. И. О. <span class="text-red-600"></span></label>
                            <input type="text" v-model="name_ru" id="helper-text" v-on:keypress="isLetter($event)" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите Ф. И. О.">
                            <p class="text-red-600">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="website-admin" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Номер телефона <span class="text-red-600"></span></label>
                            <div class="flex">
                            <span class="inline-flex items-center px-3 text-sm text-[#4D5D7D]  rounded-l-md border border-r-0 border-gray-300 bg-white">
                                +992
                            </span>
                            <input type="number" v-model="phone"  id="website-admin" class="rounded-none rounded-r-lg border text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="Введите номер телефона">
                            </div>
                            <p class="text-red-600">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Номер автомобиля <span class="text-red-600"></span></label>
                            <input type="text" v-model="name_ru" id="helper-text" v-on:keypress="isLetter($event)" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите номер автомобиля">
                            <p class="text-red-600">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Номер карты <span class="text-red-600"></span></label>
                            <input type="number" v-model="name_ru" id="helper-text" v-on:keypress="isLetter($event)" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите номер карты">
                            <p class="text-red-600">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Лимит <span class="text-red-600"></span></label>
                            <input type="number" v-model="name_ru" id="helper-text" v-on:keypress="isLetter($event)" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Установите лимит">
                            <p class="text-red-600">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-4">
                        <div class="flex items-center pb-4">
                            <label class="text-sm font-medium text-[#6B7280]">Вид топлива</label>
                        </div> 
                        <div class="flex">
                            <div class="flex items-center mr-4">
                                <input id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded">
                                <label for="inline-checkbox" class="ml-2 text-sm font-medium text-gray-600">АИ — 95</label>
                            </div>
                            <div class="flex items-center mr-4">
                                <input id="inline-2-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded">
                                <label for="inline-2-checkbox" class="ml-2 text-sm font-medium text-gray-600">АИ — 92</label>
                            </div>
                            <div class="flex items-center mr-4">
                                <input id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded">
                                <label for="inline-checkbox" class="ml-2 text-sm font-medium text-gray-600">ГАЗ</label>
                            </div>
                            <div class="flex items-center mr-4">
                                <input id="inline-2-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded">
                                <label for="inline-2-checkbox" class="ml-2 text-sm font-medium text-gray-600">ДТ</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-4">
                        <div class="flex items-center pb-4">
                            <label class="text-sm font-medium text-[#6B7280]">Статус</label>
                        </div>
                        <div class="flex">
                            <div class="flex items-center mr-4">
                                <input id="red-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 bg-gray-100 border-gray-300">
                                <label for="red-radio" class="ml-2 text-sm font-medium text-gray-600">Активный</label>
                            </div>
                            <div class="flex items-center mr-4">
                                <input id="green-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 bg-gray-100 border-gray-300">
                                <label for="green-radio" class="ml-2 text-sm font-medium text-gray-600">Неактивный</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-4 navbtn">
                        <button type="submit"  class="text-white bg-[#009688] hover:bg-[#157766] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none">Сохранить</button>
                        <nuxt-link to="/partner/staff" type="button" class="text-[#4D5D7D] border border-[#009688] text-[#009688] hover:bg-[#009688] hover:text-[#fff] focus:outline-none focus:ring-gray-200 font-medium rounded-lg hover:rounded-lg text-sm px-8 py-2.5 hover:px-8 hover:py-2.5 mr-2 mb-2">Назад</nuxt-link>
                        <p id="send-validate" class="text-red-600 pt-4 " v-if="toast.open">{{toast.text}}</p>
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
            typePassword: true,
            min: 9,
            max: 9,
            name_tj: '',
            name_ru: '',
            lastname_tj: '',
            lastname_ru: '',
            phone: '',
            email: '',
            job_tj: '',
            job_ru: '',
            password: '',
            password2: '',
            description_tj: '',
            description_ru: '',
            type: 0,
            generate:"",
        }
    },
    computed:{
        ...mapState({
            toast:(state) => state.api.toast,
        })
    },
    methods: {
        isLetter(e) {
        let char = String.fromCharCode(e.keyCode);
        if(/^[A-Za-z,А-Яа-я]+$/.test(char)) return true;
        else e.preventDefault();
        },
        ...mapActions({
        store:"api/store",
            
        }),
        async getStations() {
            let payload = {
                text:"Сотрудник добавлено!",
                request:"/consults",
                form:{
                    name_tj: this.name_tj,
                    name_ru: this.name_ru,
                    lastname_tj: this.lastname_tj,
                    lastname_ru: this.lastname_ru,
                    phone: this.phone,
                    email: this.email,
                    job_tj: this.job_tj,
                    job_ru: this.job_ru,
                    password: this.password,
                    description_tj: this.description_tj,
                    description_ru: this.description_ru,
                    type: Number(this.type) === 0 ? 1 : 0,
                }
            }
        await this.store(payload);
      setTimeout(() => {
        this.$router.back();
      }, 2000);
        }
    },
    watch:{
       generate(val){
       if(val){
        
            let password = ""
            let alphabet = "abcdefghijklmnopqrstuvwxyz"
            let number = "0123456789"
            let symbol = "!@#$%^&*+="

            password += alphabet
            password += number
            password += symbol

            let result = ""
            for (let i = 0; i < 16; i++) {
                let num = Math.floor(Math.random() * password.length)
                result += password[num]
             }
             this.password = result;
            }
       }
    }
}
</script>