<!-- Please remove this file from your project -->
<template>
  <div
    class="sidebar bg-[#0A7194] text-white flex h-full py-8 px-4 flex-col items-between justify-between"
  >
    <div class="pb-8 flex justify-center">
      <img src="../static/img/logo.png" alt="Logo" />
    </div>
    <div class="h-full">
      <div class="sidebar_navigation">
        <div v-for="(page, index) in navigation" :key="page.id" class="mb-1">
            <div class="flex justify-between items-center gap-2 p-2 cursor-pointer rounded-md transition ease-linear"
            :class="$route.name == page.name ? 'bg-[#125B78]' : 'hover:bg-[#125B78]'"
            @click="changePage(page)">
              <div class="flex items-center gap-3">
                <img :src="`/img/vector${index + 1}.svg`" alt="Icon" />
                <p class="text-[#ECFDF5] text-md font-medium">
                  {{page.title}}
                </p>
              </div>
              <svg v-if="page.child" width="24" height="24" fill="#A7F3D0" :class="page.isShowChild ? 'rotate-90' : 'rotate-0'" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.65115 17.7238C8.30664 17.3655 8.31781 16.7958 8.67611 16.4512L13.4014 12L8.67611 7.54875C8.31781 7.20424 8.30664 6.6345 8.65115 6.2762C8.99567 5.91791 9.56541 5.90674 9.9237 6.25125L15.3237 11.3512C15.5002 11.5209 15.5999 11.7552 15.5999 12C15.5999 12.2448 15.5002 12.4791 15.3237 12.6487L9.9237 17.7487C9.56541 18.0933 8.99567 18.0821 8.65115 17.7238Z"/>
              </svg>
            </div>
            <div v-if="page.isShowChild" class="flex flex-col">
              <div v-for="item in page.child" :key="item.id"
              class="flex items-center gap-0.5 pl-3.5"
              @click="$router.push(item.link)">
                <svg v-if="$route.name == item.name" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8C12 9.06087 11.5786 10.0783 10.8284 10.8284C10.0783 11.5786 9.06087 12 8 12C6.93913 12 5.92172 11.5786 5.17157 10.8284C4.42143 10.0783 4 9.06087 4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8Z" fill="#93C5FD"/>
                </svg>
                <p class="p-2 text-sm font-medium cursor-pointer transition ease-linear"
                :class="$route.name == item.name ? 'text-[#93C5FD]' : 'text-[#ECFDF5] hover:text-[#93C5FD]'">
                  {{item.title}}
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="sidebar_exit">
      <div>
        <div
          class="flex cursor-pointer text-lg font-semibold w-56 border-solid border-2 border-[#63E5FD] py-2 justify-center rounded-md hover:bg-[#125B78]"
          @click="onLogout"
        >
          <img :src="logout.icon" alt="icon" class="pr-4" /><span>{{
            logout.title
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtSidebar',
  data() {
    return {
      navigation: [
        {
          id: 1,
          title: 'Главная',
          url: '/main',
          name: 'main',
          icon: '#vector-1',
        },
        {
          id: 2,
          title: 'Пользователи',
          url: '/users',
          name: 'users',
          icon: '#vector-2',
        },
        {
          id: 3,
          title: 'Организации',
          url: '/organization',
          name: 'organization',
          icon: '#vector-3',
        },
        {
          id: 4,
          title: 'Скрининг',
          url: '/screening',
          name: 'screening',
          icon: '#vector-4',
        },
        {
<<<<<<< HEAD
          title: "МОНИТОРИНГ ˅",
          url: "/admin/monitoring",
          children: [
            { title: "Cотрудники", url: "/admin/monitoring" },
            { title: "Карты", url: "/admin/cards" },
            { title: "Устройство", url: "/admin/device" },
          ],
=======
          title: 'Клиенты',
          url: '/clients',
          name: 'clients',
          icon: '#vector-5',
        },
        {
          id: 5,
          title: 'Купоны',
          url: '/coupons',
          name: 'coupons',
          icon: '#vector-6',
          isShowChild: false,
          child: [
            {
              id: 1,
              title: 'Купон-приглашения',
              link: '/sub-invitations',
              name: 'sub-invitations',
            },
            {
              id: 2,
              title: 'Вознаграждения',
              link: '/sub-rewards',
              name: 'sub-rewards'
            },
          ]
>>>>>>> ab8ba99d3d8e30699f32bad4c8845de57c0df2f2
        },
        {
          title: 'Отчеты',
          url: '/reports',
          name: 'reports',
          icon: '#vector-6',
          isShowChild: false,
          child: [
            {
              id: 1,
              title: 'Отчетные формы',
              link: '/sub-form',
              name: 'sub-form',
            },
            {
              id: 2,
              title: 'Визуализация',
              link: '/sub-visualization',
              name: 'sub-visualization'
            },
          ]
        },
        {
          id: 6,
          title: 'Логирование',
          url: '/logs',
          name: 'logs',
          icon: '#vector-7',
        },
        {
          id: 8,
          title: 'Справочники',
          url: '/directories',
          name: 'directories',
          icon: '#vector-8',
          isShowChild: false,
          child: [
            {
              id: 1,
              title: 'Область',
              link: '/sub-region',
              name: 'sub-region',
            },
            {
              id: 2,
              title: 'Город',
              link: '/sub-city',
              name: 'sub-city'
            },
            {
              id: 3,
              title: 'Организация',
              link: '/sub-organization',
              name: 'sub-organization'
            },
            {
              id: 4,
              title: 'Клиенты',
              link: '/sub-clients',
              name: 'sub-clients'
            },
            {
              id: 5,
              title: 'Язык',
              link: '/sub-lang',
              name: 'sub-lang'
            }
          ]
        },
        {
          id: 8,
          title: 'Настройки',
          url: '/settings',
          name: 'settings',
          icon: '#vector-9',
          isShowChild: false,
          child: [
            {
              id: 1,
              title: 'Роли',
              link: '/sub-roles',
              name: 'sub-roles',
            },
            {
              id: 2,
              title: 'Уровень доступа',
              link: '/sub-access',
              name: 'sub-access'
            },
          ]
        },
      ],
      logout: {
        title: 'Выход',
        url: '/',
        icon: '/img/vector11.svg',
      },
    };
  },
  computed: {
    filtrPages() { /* Массив страниц, которые имеют подстраницы */
      return this.navigation.filter((item) => item.child)
    }
  },
  methods: {
    async onLogout() {
      await this.$auth.logout();
    },
    changePage(page) { /* Функция клика по странице */
      if(page.child) { /* Если страница имеет подстраницы то открываем подстраницы */
        page.isShowChild = !page.isShowChild
      } else {
        this.$router.push(page.url) /* Если страница не имеет подстраниц направляем на другую страницу */
        this.closeAllChild()
      }
    },
    checkChild() { /* Функция проверки имени роута с именами подстраниц */
      this.filtrPages.forEach((page) => { /* Проходимся под фильтрованному массиву */
        page.child.forEach((item) => { /* Проходимся по подстраницам страницы */
          if(this.$route.name.includes(item.name)) { /* Если находимся на странице подстраниц то открываем список подстраниц страницы */
            page.isShowChild = true
          }
        })
      })
    },
    closeAllChild() { /* Функция закрывает все подстраницы */
      this.filtrPages.forEach((page) => {
        page.isShowChild = false
      })
    },
  },
};
</script>

<style>
  a.nuxt-link-active {
    background-color: #125B78;
  }
</style>
