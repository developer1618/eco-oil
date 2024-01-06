<template>
  <div class="px-24 w-12/12">
    <div class="grid px-8 py-10 grid-cols-2 bg-white h-[85vh]">
      <ValidationObserver v-slot="{ handleSubmit }">
        <h3 class="text-sm font-medium text-dark pb-10">НАСТРОЙКИ</h3>
        <form
          class="grid grid-cols-4 gap-8"
          @submit.prevent="handleSubmit(getStations)"
        >
          <div class="col-span-2">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                >Название компании<span class="text-red-600 absolute"></span
              ></label>
              <input
                type="text"
                v-model="name_ru"
                id="helper-text"
                v-on:keypress="isLetter($event)"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите Название компании"
              />
              <p class="text-red-600 absolute">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>

          <div class="col-span-2">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label
                for="website-admin"
                class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                >Номер телефона <span class="text-red-600 absolute"></span
              ></label>
              <div class="flex">
                <span
                  class="inline-flex items-center px-3 text-sm text-[#4D5D7D] rounded-l-md border border-r-0 border-gray-300 bg-white"
                >
                  +992
                </span>
                <input
                  type="number"
                  v-model="phone"
                  id="website-admin"
                  class="rounded-none rounded-r-lg border text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                  placeholder="Введите Номер телефона"
                />
              </div>
              <p class="text-red-600 absolute">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span-2">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <div class="relative">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                  >Пароль <span class="text-red-600 absolute"></span
                ></label>
                <input
                  :type="typePassword ? 'password' : 'text'"
                  id="password"
                  name="password"
                  v-model="password"
                  placeholder="••••••••"
                  class="bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5"
                />
                <div
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mb-[-25px]"
                >
                  <img
                    src="/img/eye-pass-on.svg"
                    v-if="typePassword"
                    @click="typePassword = !typePassword"
                    alt="on"
                    class="cursor-pointer"
                  />
                  <img
                    src="/img/eye-pass-off.svg"
                    v-else
                    alt="off"
                    @click="typePassword = !typePassword"
                    class="cursor-pointer"
                  />
                </div>
                <p class="text-red-600 pb-4 absolute">{{ errors[0] }}</p>
              </div>
            </ValidationProvider>
          </div>
          <div class="col-span-2">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <div class="relative">
                <label
                  for="password2"
                  class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                  >Повторите пароль <span class="text-red-600 absolute"></span
                ></label>
                <input
                  :type="typePassword ? 'password' : 'text'"
                  id="password2"
                  name="password"
                  v-model="password2"
                  placeholder="••••••••"
                  class="bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5"
                />
                <div
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mb-[-25px]"
                >
                  <img
                    src="/img/eye-pass-on.svg"
                    v-if="typePassword"
                    @click="typePassword = !typePassword"
                    alt="on"
                    class="cursor-pointer"
                  />
                  <img
                    src="/img/eye-pass-off.svg"
                    v-else
                    alt="off"
                    @click="typePassword = !typePassword"
                    class="cursor-pointer"
                  />
                </div>
                <p class="text-red-600 pb-4 absolute">{{ errors[0] }}</p>
              </div>
            </ValidationProvider>
          </div>
          <div class="col-span-4 navbtn">
            <button
              type="submit"
              class="text-white bg-[#009688] hover:bg-[#157766] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            >
              Сохранить
            </button>
            <nuxt-link
              to="/admin/scoreboard"
              type="button"
              class="text-[#4D5D7D] border border-[#009688] text-[#009688] hover:bg-[#009688] hover:text-[#fff] focus:outline-none focus:ring-gray-200 font-medium rounded-lg hover:rounded-lg text-sm px-8 py-2.5 hover:px-8 hover:py-2.5 mr-2 mb-2"
              >Назад</nuxt-link
            >
            <p id="send-validate" class="text-red-600 pt-4" v-if="toast.open">
              {{ toast.text }}
            </p>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  layout: "admin",
  data() {
    return {
      typePassword: true,
      typePassword: true,
      min: 9,
      max: 9,
      name_tj: "",
      name_ru: "",
      lastname_tj: "",
      lastname_ru: "",
      phone: "",
      email: "",
      job_tj: "",
      job_ru: "",
      password: "",
      password2: "",
      description_tj: "",
      description_ru: "",
      type: 0,
      generate: "",
    };
  },
  computed: {
    ...mapState({
      toast: (state) => state.api.toast,
    }),
  },
  methods: {
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z,А-Яа-я]+$/.test(char)) return true;
      else e.preventDefault();
    },
    ...mapActions({
      store: "api/store",
    }),
    async getStations() {
      let payload = {
        text: "Сотрудник добавлено!",
        request: "/consults",
        form: {
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
        },
      };
      await this.store(payload);
      setTimeout(() => {
        this.$router.back();
      }, 3000);
    },
  },
  watch: {
    generate(val) {
      if (val) {
        let password = "";
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let number = "0123456789";
        let symbol = "!@#$%^&*+=";

        password += alphabet;
        password += number;
        password += symbol;

        let result = "";
        for (let i = 0; i < 16; i++) {
          let num = Math.floor(Math.random() * password.length);
          result += password[num];
        }
        this.password = result;
      }
    },
  },
};
</script>
