<template>
  <div class="px-24 w-12/12">
    <div class="grid px-8 py-10 grid-cols-2 bg-white min-h-screen">
      <ValidationObserver v-slot="{ handleSubmit }">
        <h3 class="text-sm font-medium text-dark pb-10">
          СОТРУДНИКИ / ДОБАВЛЕНИЕ СОТРУДНИКА
        </h3>
        <form class="grid grid-cols-6 gap-8" @submit.prevent="handleSubmit(addStuff)">
          <div class="col-span-3">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Имя<span
                  class="text-red-600"></span></label>
              <input type="text" v-model="form.name" id="helper-text" v-on:keypress="isLetter($event)"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите имя" />
              <p class="text-red-600">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span-3">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Фамилия<span
                  class="text-red-600"></span></label>
              <input type="text" v-model="form.surname" id="helper-text" v-on:keypress="isLetter($event)"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите имя" />
              <p class="text-red-600">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span-3">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Дата рождения<span
                  class="text-red-600"></span></label>
              <input type="date" :max="maxDate" v-model="form.date_of_birth" id="helper-text"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                value="MM/DD/YYYY" />
              <!-- <CalendarInput /> -->
            </ValidationProvider>
          </div>
          <div class="col-span-3">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Пол <span
                  class="text-red-600"></span></label>
              <select id="gender" v-model="form.gender"
                class="bg-white border border-gray-300 text-[#4D5D7D] text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500">
                <option value="Выберите пол" disabled>Выберите пол</option>
                <option value="M">Мужской</option>
                <option value="F">Женский</option>
              </select>
              <p class="text-red-600">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span-3">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Адрес проживания<span
                  class="text-red-600"></span></label>
              <input type="text" v-model="form.address" id="helper-text" aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите адрес" />
              <p class="text-red-600">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span-3">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label for="website-admin" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Номер телефона <span
                  class="text-red-600"></span></label>
              <div class="flex">
                <span
                  class="inline-flex items-center px-3 text-sm text-[#4D5D7D] rounded-l-md border border-r-0 border-gray-300 bg-white">
                  +992
                </span>
                <input type="tel" v-model="form.phone" id="website-admin"
                  class="rounded-none rounded-r-lg border text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                  placeholder="Введите Номер телефона" />
              </div>
              <p class="text-red-600">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span-3">
            <ValidationProvider v-slot="{ errors }">
              <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Должность <span
                  class="text-red-600"></span></label>
              <select id="job" v-model="form.role"
                class="bg-white border border-gray-300 text-[#4D5D7D] text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500">
                <option value="Выберите пол">Выберите должность</option>
                <option value="2">Кассир</option>
                <option value="1">Администратор</option>
              </select>
              <p class="text-red-600">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span-3">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Станция регистрации <span
                  class="text-red-600"></span></label>
              <select id="address" v-model="form.station"
                class="bg-white border border-gray-300 text-[#4D5D7D] text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500">
                <option :value="item?.id" v-for="item in station?.results">
                  {{ item?.station_address }}
                </option>
              </select>
              <p class="text-red-600">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span-2">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Логин<span
                  class="text-red-600"></span></label>
              <input type="text" v-model="form.username" id="helper-text" aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите Логин" />
              <p class="text-red-600">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span-2">
            <ValidationProvider rules="required" v-slot="{ errors }" vid="password">
              <div class="relative">
                <label for="password" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Пароль <span
                    class="text-red-600"></span></label>
                <input :type="typePassword ? 'password' : 'text'" id="password" name="password" v-model="form.password"
                  placeholder="••••••••"
                  class="bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5" />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mb-[-25px]">
                  <img src="/img/eye-pass-on.svg" v-if="typePassword" @click="typePassword = !typePassword" alt="on"
                    class="cursor-pointer" />
                  <img src="/img/eye-pass-off.svg" v-else alt="off" @click="typePassword = !typePassword"
                    class="cursor-pointer" />
                </div>
                <p class="text-red-600 pb-4 absolute">{{ errors[0] }}</p>
              </div>
            </ValidationProvider>
          </div>
          <div class="col-span-2">
            <ValidationProvider rules="required|confirmed:password" v-slot="{ errors }">
              <div class="relative">
                <label for="password" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Повторите пароль <span
                    class="text-red-600"></span></label>
                <input :type="typePassword2 ? 'password' : 'text'" id="password2" name="password2"
                  v-model="form.password2" placeholder="••••••••"
                  class="bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5" />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mb-[-25px]">
                  <img src="/img/eye-pass-on.svg" v-if="typePassword2" @click="typePassword2 = !typePassword2" alt="on"
                    class="cursor-pointer" />
                  <img src="/img/eye-pass-off.svg" v-else alt="off" @click="typePassword2 = !typePassword2"
                    class="cursor-pointer" />
                </div>
                <p class="text-red-600 pb-4 absolute">{{ errors[0] }}</p>
              </div>
            </ValidationProvider>
          </div>
          <div class="flex flex-wrap">
            <div class="flex flex-wrap">
              <div class="flex items-center pb-4">
                <label class="text-sm font-medium text-[#6B7280]">Статус</label>
              </div>
              <div class="flex">
                <div class="flex items-center mr-4">
                  <input id="red-radio" type="radio" v-model="form.status" :value="1" name="colored-radio"
                    class="w-4 h-4 bg-gray-100 border-gray-300" />
                  <label for="red-radio" class="ml-2 text-sm font-medium text-gray-500">Активный</label>
                </div>
                <div class="flex items-center mr-4">
                  <input id="green-radio" type="radio" v-model="form.status" :value="0" name="colored-radio"
                    class="w-4 h-4 bg-gray-100 border-gray-300" />
                  <label for="green-radio" class="ml-2 text-sm font-medium text-gray-500">Неактивный</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-6 navbtn">
            <button type="submit"
              class="text-white bg-[#009688] hover:bg-[#157766] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
              Сохранить
            </button>
            <nuxt-link to="/admin/staff" type="button"
              class="text-[#4D5D7D] border border-[#009688] text-[#009688] hover:bg-[#009688] hover:text-[#fff] focus:outline-none focus:ring-gray-200 font-medium rounded-lg hover:rounded-lg text-sm px-8 py-2.5 hover:px-8 hover:py-2.5 mr-2 mb-2">Назад</nuxt-link>
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
import { mapActions, mapState } from "vuex";
export default {
  layout: "admin",
  data() {
    return {
      typePassword: true,
      typePassword2: true,
      form: {
        username: "",
        password: "",
        password2: "",
        name: "",
        surname: "",
        date_of_birth: "",
        gender: "",
        phone: "",
        status: null,
        address: "",
        station: null,
        role: "",
        min: 9,
        max: 9,
      },
    };
  },
  computed: {
    ...mapState({
      toast: (state) => state.api.toast,
      station: (state) => state.api.station,
    }),
    maxDate() {
      const now = new Date();
      const maxDob = new Date(
        now.getFullYear() - 18,
        now.getMonth(),
        now.getDate()
      );
      return maxDob.toISOString().slice(0, 10);
    },
  },
  methods: {
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z,А-Яа-я]+$/.test(char)) return true;
      else e.preventDefault();
    },
    ...mapActions({
      store: "api/store",
      get_page: "api/get_page",
    }),
    async addStuff() {
      let payload = {
        text: "Сотрудник добавлено!",
        request: "/Staff",
        form: this.form,
      };
      await this.store(payload).then(() => {
        setTimeout(() => {
          this.$router.back();
        }, 2000);
      });
    },
    async getStations() {
      let payload = {
        request: `/Station`,
        key: "station",
      };
      await this.get_page(payload);
    },
  },
  mounted() {
    this.getStations();
  },
};
</script>
