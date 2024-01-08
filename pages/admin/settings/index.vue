<template>
  <div class="px-24 w-12/12">
    <div class="grid px-8 py-10 grid-cols-2 bg-white h-[85vh]">
      <ValidationObserver v-slot="{ handleSubmit }">
        <h3 class="text-sm font-medium text-dark pb-10">НАСТРОЙКИ</h3>
        <form
          class="grid grid-cols-4 gap-8"
          @submit.prevent="handleSubmit(editSettings)"
        >
          <div class="col-span-2">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                >Имя<span class="text-red-600 absolute"></span
              ></label>
              <input
                type="text"
                v-model="form.name"
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
                >Фамилия<span class="text-red-600 absolute"></span
              ></label>
              <input
                type="text"
                v-model="form.surname"
                id="helper-text"
                v-on:keypress="isLetter($event)"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите Фамилию"
              />
              <p class="text-red-600 absolute">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span-2">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                >Почта <span class="text-red-600 absolute"></span
              ></label>
              <input
                type="email"
                v-model="form.email"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите электроную почту"
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
            <ValidationProvider
              rules="required"
              vid="password"
              v-slot="{ errors }"
            >
              <div class="relative">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                  >Пароль <span class="text-red-600"></span
                ></label>
                <input
                  :type="typePassword ? 'password' : 'text'"
                  id="password"
                  name="password"
                  v-model="form.password"
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
            <ValidationProvider
              rules="required|confirmed:password"
              v-slot="{ errors }"
            >
              <div class="relative">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                  >Повторите пароль <span class="text-red-600"></span
                ></label>
                <input
                  :type="typePassword2 ? 'password' : 'text'"
                  id="password"
                  name="password"
                  v-model="form.password2"
                  placeholder="••••••••"
                  class="bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5"
                />
                <div
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mb-[-25px]"
                >
                  <img
                    src="/img/eye-pass-on.svg"
                    v-if="typePassword2"
                    @click="typePassword2 = !typePassword2"
                    alt="on"
                    class="cursor-pointer"
                  />
                  <img
                    src="/img/eye-pass-off.svg"
                    v-else
                    alt="off"
                    @click="typePassword2 = !typePassword2"
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
            <p id="send-validate" class="text-red-600 pt-4 whitespace-nowrap" v-if="toast.open">
              {{ toast.text }}
            </p>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  layout: "admin",
  data() {
    return {
      typePassword: true,
      typePassword2: true,
      form: {
        name: "",
        surname: "",
        email: "",
        phone: "",
        password: "",
        password2: "",
      },
    };
  },
  computed: {
    ...mapState({
      toast: (state) => state.api.toast,
      settings: (state) => state.api.settings,
    }),
  },
  methods: {
    isLetter(e) {b
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z,А-Яа-я]+$/.test(char)) return true;
      else e.preventDefault();
    },
    ...mapActions({
      edit: "api/edit",
      get_page: "api/get_page",
      edit: "api/edit",
    }),
    ...mapMutations({
      change_modal: "api/SET_MODAL",
    }),
    async getSettings() {
      let request = await this.$axios.get(
        `/AdminEdit/${this.$route.params.slug}`
      );
      return Object.keys(this.form).map((item) => {
        this.form[item] = request.data[item];
      });
    },
    async editSettings() {
      let payload = {
        text: "Настройки изменены!",
        request: `/AdminEdit/${this.$route.params.slug}`,
        form: this.form,
      };
      await this.edit(payload);
      setTimeout(() => {
        this.$router.back();
      }, 2000);
    },
  },

  mounted() {
    this.getSettings();
  },
};
</script>
