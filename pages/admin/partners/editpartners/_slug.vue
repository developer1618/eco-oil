<template>
    <div class="px-24 w-12/12">
        <div class="grid px-8 py-10 grid-cols-2 bg-white  h-[85vh]">
            <ValidationObserver v-slot="{ handleSubmit }">
                <h3 class="text-sm font-medium text-dark pb-10">ПАРТНЁРЫ / РЕДАКТИРОВАНИЕ ПАРТНЁРА</h3>
                <form class="grid grid-cols-4 gap-8" @submit.prevent="handleSubmit(editPartner)">
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Партнёр<span
                                    class="text-red-600 absolute"></span></label>
                            <input type="text" v-model="form.name" id="helper-text"
                                aria-describedby="helper-text-explanation"
                                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Введите имя партнёра">
                            <p class="text-red-600 absolute">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Логин<span
                                    class="text-red-600 absolute"></span></label>
                            <input type="text" v-model="form.username" id="helper-text"
                                aria-describedby="helper-text-explanation"
                                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Введите логин">
                            <p class="text-red-600 absolute">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="website-admin" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Номер телефона
                                <span class="text-red-600 absolute"></span></label>
                            <div class="flex">
                                <span
                                    class="inline-flex items-center px-3 text-sm text-[#4D5D7D] rounded-l-md border border-r-0 border-gray-300 bg-white">
                                    +992
                                </span>
                                <input type="number" v-model="form.phone" id="website-admin"
                                    class="rounded-none rounded-r-lg border text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                    placeholder="Введите Номер телефона" />
                            </div>
                            <p class="text-red-600 absolute">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="min:8" v-slot="{ errors }" vid="password">
                            <div class="relative">
                                <label for="password" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Пароль <span
                                    class="text-red-600"></span></label>
                                <input :type="typePassword ? 'password' : 'text'" id="password" v-model="form.password" name="password"
                                placeholder="••••••••"
                                class="bg-white border border-gray-300 text-[#4D5D7D] sm:text-sm rounded-lg block w-full p-2.5" />
                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mb-[-25px]">
                                <img src="/img/eye-pass-on.svg" v-if="typePassword" @click="typePassword = !typePassword" alt="on"
                                    class="cursor-pointer" />
                                <img src="/img/eye-pass-off.svg" v-else alt="off" @click="typePassword = !typePassword"
                                    class="cursor-pointer" />
                                </div>
                            </div>
                            <p class="text-red-600 pb-4 absolute">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Адрес <span
                                    class="text-red-600 absolute"></span></label>
                            <input type="text" v-model="form.address" id="helper-text"
                                aria-describedby="helper-text-explanation"
                                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Введите адрес">
                            <p class="text-red-600 absolute">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>

                    <div class="col-span-2">
                        <ValidationProvider rules="confirmed:password" v-slot="{ errors }">
                            <div class="relative">
                                <label for="password" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Повторите пароль <span
                                    class="text-red-600"></span></label>
                                <input :type="typePassword2 ? 'password' : 'text'" id="password" v-model="form.password2" name="password"
                                placeholder="••••••••"
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
                    <div class="col-span-2">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Баланс (TJS)
                                <span class="text-red-600 absolute"></span></label>
                            <input type="number" v-model="form.balance" id="helper-text"
                                aria-describedby="helper-text-explanation"
                                class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Введите допустимый баланс">
                            <p class="text-red-600 absolute">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                    <div class="flex-wrap col-span-4">
                        <div class="flex items-center pb-4">
                            <label class="text-sm font-medium text-[#6B7280]">Статус</label>
                        </div>
                        <div class="flex">
                            <div class="flex items-center mr-4">
                                <input id="red-radio" type="radio" v-model="form.status" value="1" name="colored-radio"
                                    class="w-4 h-4 bg-gray-100 border-gray-300">
                                <label for="red-radio" class="ml-2 text-sm font-medium text-gray-500">Активный</label>
                            </div>
                            <div class="flex items-center mr-4">
                                <input id="green-radio" type="radio" v-model="form.status" value="0" name="colored-radio"
                                    class="w-4 h-4 bg-gray-100 border-gray-300">
                                <label for="green-radio" class="ml-2 text-sm font-medium text-gray-500">Неактивный</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 navbtn">
                        <button type="submit"
                            class="text-white bg-[#009688] hover:bg-[#157766] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                            Сохранить
                        </button>
                        <nuxt-link to="/admin/partners" type="button"
                            class="text-[#4D5D7D] border border-[#009688] text-[#009688] hover:bg-[#009688] hover:text-[#fff] focus:outline-none focus:ring-gray-200 font-medium rounded-lg hover:rounded-lg text-sm px-8 py-2.5 hover:px-8 hover:py-2.5 mr-2 mb-2">Назад</nuxt-link>
                        <p id="send-validate" class="text-red-600 pt-4 block whitespace-nowrap" v-if="toast.open">
                            {{ toast.text }}
                        </p>
                    </div>
                </form>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations} from "vuex";
export default {
    layout: "admin",
    data() {
        return {
            typePassword: true,
            typePassword2: true,
            form: {
                username: '',
                password: "",
                password2: "",
                phone: '',
                name: '',
                address: '',
                role: 3,
                balance: '',
                status: '',
                min: 9,
                max: 9,
            },
        };
    },
    computed: {
        ...mapState({
            toast: (state) => state.api.toast,
        }),
    },
    methods: {
        ...mapMutations({
                change_modal: "api/SET_MODAL",
            }),
            isLetter(e) {
                let char = String.fromCharCode(e.keyCode);
                if (/^[A-Za-z,А-Яа-я]+$/.test(char)) return true;
                else e.preventDefault();
            },
        ...mapActions({
            store: "api/store",
            get_page: "api/get_page",
            edit: "api/edit",
        }),
        async getPartner() {
            let request = await this.$axios.get(
                `/Partner/${this.$route.params.slug}`
            );
            return Object.keys(this.form).map((item) => {
                this.form[item] = request.data[item];
            });
        },
        async editPartner() {
            let payload = {
                text: "Партнер изменено!",
                request: `/Partner/${this.$route.params.slug}`,
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