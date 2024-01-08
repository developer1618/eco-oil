<template>
  <div
    class="sidebar flex items-center bg-[#009688] text-white px-24 py-4 items-between justify-between"
  >
    <div class="flex items-center 2xl:gap-4 xl:gap-0">
      <div class="sidebar_user-info flex items-center">
        <img src="../static/logo.png" alt="Logo" class="w-36" />
      </div>
      <div class="sidebar_navigation">
        <nav>
          <ul class="flex items-center gap-2">
            <li class="flex" v-for="(nav, index) in navigation">
              <div v-if="nav.children">
                <div
                  class="relative"
                  @mouseenter="active = index"
                  @mouseleave="active = null"
                >
                  <nuxt-link class="link" :to="nav.url" @click="active = index">
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

              <nuxt-link class="flex" :to="nav.url" v-else>
                <span class="text-sm font-semibold whitespace-nowrap">{{
                  nav.title
                }}</span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="flex sidebar_exit items-center">
      <div class="mr-10 p bg-[#00a700] text-white rounded px-4 py-2">
        <p>ВСЕГО: 5000 TJS</p>
      </div>
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
export default {
  name: "NuxtSidebar",
  data() {
    return {
      active: null,
      navigation: [
        {
          title: "СОТРУДНИКИ",
          url: "/partner/staff",
        },
        {
          title: "НАСТРОЙКИ",
          url: "/partner/settings",
        },
      ],
      logout: {
        title: "ВЫХОД",
        url: "/",
      },
    };
  },
  methods: {
    async onLogout() {
      await this.$auth.logout();
    },
  },
};
</script>

