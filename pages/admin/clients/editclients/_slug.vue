<template>
  <div class="px-24 w-12/12">
    <div class="grid px-8 py-10 grid-cols-2 bg-white h-[85vh]">
      <ValidationObserver v-slot="{ handleSubmit }">
        <h3 class="text-sm font-medium text-dark pb-10">
          КЛИЕНТЫ (АВТО) / РЕДАКТИРОВАНИЕ КЛИЕНТА
        </h3>
        <form
          class="grid grid-cols-4 gap-8"
          @submit.prevent="handleSubmit(editClient)"
        >
          <div class="col-span-2">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                >Ф.И.О<span class="text-red-600 absolute"></span
              ></label>
              <input
                type="text"
                v-model="form.full_name"
                id="helper-text"
                v-on:keypress="isLetter($event)"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите имя"
              />
              <p class="text-red-600 absolute">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span-2">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                >Дата рождения<span class="text-red-600 absolute"></span
              ></label>
              <input
                type="date"
                v-model="form.date_of_birth"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите дату"
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
                  v-model="form.phone"
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
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                >Пол <span class="text-red-600"></span
              ></label>
              <select
                id="gender"
                v-model="form.gender"
                class="bg-white border border-gray-300 text-[#4D5D7D] text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Выберите пол" disabled>Выберите пол</option>
                <option value="M">Мужской</option>
                <option value="F">Женский</option>
              </select>
              <p class="text-red-600">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span-2">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                >Номер автомобиля<span class="text-red-600 absolute"></span
              ></label>
              <input
                type="text"
                v-model="form.plate_number"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите номер автомобиля"
              />
              <p class="text-red-600 absolute">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span-2">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                >Номер карты<span class="text-red-600 absolute"></span
              ></label>
              <input
                type="text"
                v-model="form.card_number"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите номер карты"
              />
              <p class="text-red-600 absolute">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span-4">
            <div class="flex items-center pb-4">
              <label class="text-sm font-medium text-[#6B7280]">Статус</label>
            </div>
            <div class="flex">
              <div class="flex items-center mr-4">
                <input
                  :id="`red-radio-act`"
                  type="radio"
                  :value="1"
                  v-model="form.status"
                  name="colored-radio"
                  class="w-4 h-4 bg-gray-100 border-gray-300"
                />
                <label
                  :for="`red-radio-act`"
                  class="ml-2 text-sm font-medium text-gray-500"
                  >Активный</label
                >
              </div>
              <div class="flex items-center mr-4">
                <input
                  :id="`red-radio-dis-act`"
                  type="radio"
                  :value="0"
                  v-model="form.status"
                  name="colored-radio"
                  class="w-4 h-4 bg-gray-100 border-gray-300"
                />
                <label
                  :for="`red-radio-dis-act`"
                  class="ml-2 text-sm font-medium text-gray-500"
                  >Неактивный</label
                >
              </div>
            </div>
          </div>
          <div class="col-span-4 navbtn">
            <button
              type="submit"
              class="text-white bg-[#009688] hover:bg-[#157766] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            >
              Сохранить
            </button>
            <nuxt-link
              to="/admin/clients"
              type="button"
              class="text-[#4D5D7D] border border-[#009688] text-[#009688] hover:bg-[#009688] hover:text-[#fff] focus:outline-none focus:ring-gray-200 font-medium rounded-lg hover:rounded-lg text-sm px-8 py-2.5 hover:px-8 hover:py-2.5 mr-2 mb-2"
              >Назад</nuxt-link
            >
            <p
              id="send-validate"
              class="text-red-600 pt-4 block whitespace-nowrap"
              v-if="toast.open"
            >
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
      form: {
        full_name: "",
        date_of_birth: "",
        gender: "",
        plate_number: "",
        card_number: "",
        phone: "",
        registration_date: "",
        bonus: null,
        status: null,
      },
      statuses: ["Активный", "Неактивный"],
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
      edit: "api/edit",
      get_page: "api/get_page",
      edit: "api/edit",
    }),
    async getClient() {
      let request = await this.$axios.get(`/Client/${this.$route.params.slug}`);
      return Object.keys(this.form).map((item) => {
        this.form[item] = request.data[item];
      });
    },
    async editClient() {
      let payload = {
        text: "Клиент изменено!",
        request: `/Client/${this.$route.params.slug}`,
        form: this.form,
      };
      await this.edit(payload);
      setTimeout(() => {
        this.$router.back();
      }, 3000);
    },
  },
  mounted() {
    this.getClient();
  },
};
</script>
