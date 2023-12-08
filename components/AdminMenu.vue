<template>
  <div
    class="sidebar flex items-center bg-[#009688] text-white px-24 py-4 items-between justify-between"
  >
    <ExitModal :modal="modal" @onClose="modal = $event" />
    <div class="flex items-center 2xl:gap-4 xl:gap-0">
      <div class="sidebar_user-info flex items-center">
        <a href="/main" class="image-bg">
          <img src="../static/logo.png" alt="Logo" class="w-36" />
        </a>
      </div>
      <div class="sidebar_navigation">
        <nav>
          <ul class="flex items-center gap-2">
            <li class="flex" v-for="(nav, index) in navigation">
              <div v-if="nav.children">
                <div
                  class="relative text-sm font-semibold whitespace-nowrap"
                  @mouseenter="active = index"
                  @mouseleave="active = null"
                >
                  <nuxt-link :to="nav.url" @click="active = index">
                    {{ nav.title }}
                  </nuxt-link>
                  <div class="absolute" v-if="active == index">
                    <div
                      class="bg-white text-[#00a700] hover:bg-[#00a700] hover:text-white rounded p-2 cursor-pointer border border-[#D1D5DB]"
                      v-for="to in nav.children"
                      @click="$router.push(to.url)"
                    >
                      {{ to.title }}
                    </div>
                  </div>
                </div>
              </div>

              <nuxt-link class="flex header-menu" :to="nav.url" v-else>
                <span class="text-sm font-semibold whitespace-nowrap">{{
                  nav.title
                }}</span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="sidebar_exit">
      <div>
        <div
          class="flex cursor-pointer text-sm font-semibold"
          @click="onLogout"
        >
          <span>{{ logout.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ExitModal from "./ExitModal.vue";
export default {
  name: "NuxtSidebar",
  data() {
    return {
      active: null,
      modal: false,
      navigation: [
        {
          title: "ТАБЛО",
          url: "/main",
        },
        {
          title: "КЛИЕНТЫ (АВТО)",
          url: "/admin/clients",
        },
        {
          title: "СТАНЦИИ",
          url: "/admin/stations",
        },
        {
          title: "СОТРУДНИКИ",
          url: "/admin/staff",
        },
        {
          title: "ПАРТНЁРЫ",
          url: "/admin/partners",
        },
        {
          title: "МОНИТОРИНГ ˅",
          url: "/admin/monitoring",
          children: [
            { title: "Cотрудники", url: "/admin/monitoring" },
            { title: "Карты", url: "/admin/cards" },
            { title: "Устройство", url: "/admin/device" },
          ],
        },
        {
          title: "ОТЧЁТЫ ˅",
          url: "report",
          children: [
            { title: "За месяц", url: "/admin/report" },
            { title: "Бонусы", url: "/admin/bonus" },
          ],
        },
        {
          title: "НАСТРОЙКИ",
          url: "settings",
        },
      ],
      logout: {
        title: "ВЫХОД",
        url: "/",
      },
    };
  },
  methods: {
    ...mapMutations({
      change_modal: "api/SET_MODAL",
    }),
    async onLogout() {
      this.modal = true;
      // this.change_modal(true);
      // await this.$auth.logout();
    },
  },
  components: { ExitModal },
};
</script>
<style>
a {
  padding: 8px 16px;
  border-radius: 6px;
}
.active a {
  fill: #00a700 !important;
}
a.nuxt-link-active {
  background-color: #00a700;
  padding: 8px 16px;
  border-radius: 6px;
}
/* a:hover {
  background-color: #00a700;
  padding: 8px 16px;
  border-radius: 6px;
} */

.navbtn a.nuxt-link-active {
  background-color: #fff !important;
  color: #009688;
  padding: 10px 30px;
  border-radius: 6px;
}
.navbtn a:hover {
  background-color: #009688 !important;
  color: #fff;
}
.navdelbtn a.nuxt-link-active {
  background-color: #fff !important;
  color: #f44336;
  padding: 10px 30px;
  border-radius: 6px;
}
.navdelbtn a:hover {
  background-color: #f44336 !important;
  color: #fff;
}
</style>
