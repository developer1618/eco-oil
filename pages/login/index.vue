<template>
  <div class="first-step">
    <section class="bg-[#009688]">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen sm:px-6 lg:px-8"
      >
        <div class="sm:mx-auto sm:w-full sm:max-w-md pb-8">
          <img
            class="mx-auto h-12 w-auto"
            src="../../static/logo.png"
            alt="Your Company"
          />
        </div>
        <div
          class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2
              class="mb-6 text-center text-3xl font-bold tracking-tight text-gray-900"
            >
              Авторизация
            </h2>
            <ValidationObserver v-slot="{ handleSubmit }">
              <form
                class="space-y-4 md:space-y-6"
                @submit.prevent="handleSubmit(login)"
              >
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <div class="pb-8">
                    <label
                      for="website-admin"
                      class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                      >Логин</label
                    >
                    <div class="flex">
                      <input
                        type="text"
                        v-model="name"
                        id="website-admin"
                        class="rounded-lg border text-[#4D5D7D] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 bg-white"
                        placeholder="Введите Логин"
                      />
                    </div>
                    <p class="text-red-600 pt-2">{{ errors[0] }}</p>
                  </div>
                </ValidationProvider>

                <ValidationProvider rules="required" v-slot="{ errors }">
                  <div class="relative pb-8">
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                      >Пароль</label
                    >
                    <input
                      :type="typePassword ? 'password' : 'text'"
                      id="password"
                      name="password"
                      v-model="password"
                      placeholder="••••••••"
                      class="bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5"
                    />
                    <div
                      class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
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
                    <p class="text-red-600 pt-4 pb-4 absolute">
                      {{ errors[0] }}
                    </p>
                    <p class="text-red-600 pt-4 pb-4 absolute" v-if="error">
                      Неверный логин или пароль!
                    </p>
                  </div>
                </ValidationProvider>
                <button
                  type="submit"
                  class="w-full h-12 text-white bg-[#009688] hover:bg-[#157766] шfont-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Войти
                </button>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  layout: "login",
  data() {
    return {
      typePassword: true,
      min: 4,
      max: 32,
      error: false,
      name: "",
      password: "",
    };
  },
  methods: {
    async login() {
      this.$auth
        .loginWith("local", {
          data: {
            username: this.name,
            password: this.password,
          },
        })
        .then(() => {
          this.error = false;
          this.$router.push("/admin/scoreboard");
        })
        .catch((err) => {
          this.error = true;
        });
    },
  },
  mounted() {},
  watch: {
    login() {
      this.error = false;
    },
    password() {
      this.error = false;
    },
  },
};
</script>
