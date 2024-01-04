<template>
  <div class="px-24 w-12/12">
    <div class="grid px-8 py-10 grid-cols-3 bg-white min-h-screen">
      <ValidationObserver v-slot="{ handleSubmit }">
        <h3 class="text-sm font-medium text-dark pb-10">
          СТАНЦИИ (ЦЕНЫ НА ТОПЛИВО) / ДОБАВЛЕНИЕ СТАНЦИИ
        </h3>
        <form
          class="grid grid-cols-1 gap-8"
          @submit.prevent="handleSubmit(addStation)"
        >
          <div class="col-span">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                >Название станции<span class="text-red-600 absolute"></span
              ></label>
              <input
                type="text"
                v-model="form.station_address"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите название"
              />
              <p class="text-red-600 absolute">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                >АИ — 95<span class="text-red-600 absolute"></span
              ></label>
              <input
                type="number"
                step="any"
                min="0"
                v-model="form.ai95"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите цену"
              />
              <p class="text-red-600 absolute">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                >АИ — 92<span class="text-red-600 absolute"></span
              ></label>
              <input
                type="number"
                step="any"
                min="0"
                v-model="form.ai92"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите цену"
              />
              <p class="text-red-600 absolute">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                >ДТ<span class="text-red-600 absolute"></span
              ></label>
              <input
                type="number"
                step="any"
                min="0"
                v-model="form.disel"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите цену"
              />
              <p class="text-red-600 absolute">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-[#4D5D7D]"
                >ГАЗ<span class="text-red-600 absolute"></span
              ></label>
              <input
                type="number"
                v-model="form.gas"
                step="any"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите цену"
              />
              <p class="text-red-600 absolute">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="col-span navbtn">
            <button
              type="submit"
              class="text-white bg-[#009688] hover:bg-[#157766] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            >
              Добавить
            </button>
            <nuxt-link
              to="/admin/stations"
              type="button"
              class="text-[#4D5D7D] border border-[#009688] text-[#009688] hover:bg-[#009688] hover:text-[#fff] focus:outline-none focus:ring-gray-200 font-medium rounded-lg hover:rounded-lg text-sm px-8 py-2.5 hover:px-8 hover:py-2.5 mr-2 mb-2"
              >Назад</nuxt-link
            >
            <p
              id="send-validate"
              class="text-red-600 pt-4 block"
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
<!-- <script src="../path/to/flatpickr.min.js"></script> -->
<script>
import { mapActions, mapState } from "vuex";
export default {
  layout: "admin",
  data() {
    return {
      form: {
        station_address: "",
        ai95: null,
        ai92: null,
        disel: null,
        gas: null,
      },
    };
  },
  computed: {
    ...mapState({
      toast: (state) => state.api.toast,
    }),
  },
  methods: {
    ...mapActions({
      store: "api/store",
    }),
    async addStation() {
      let payload = {
        text: "Станция добавлено!",
        request: "/Station",
        form: this.form,
      };
      await this.store(payload);
      setTimeout(() => {
        this.$router.back();
      }, 2000);
    },
  },
};
</script>
