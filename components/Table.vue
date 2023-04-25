<template>
  <div class="flex flex-col">
    <DeleteModal />
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="align-middle inline-block min-w-full shadow overflow-hidden border-b border-gray-200 overflow-x-auto"
      >
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="text-center text-xs font-semibold bg-[#009688] border-b border-r border-gray-200 text-left leading-4 text-white tracking-wider h-10"
                v-for="title in titles"
              >
                {{ title }}
              </th>
              <!-- <th class="flex justify-end text-xs font-semibold px-6 py-3 border-b border-gray-200 text-left leading-4 text-[#B3B9C9] tracking-wider">

            </th> -->
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="(title, i) in bodies" class="border-b border-gray-200">
              <td
                class="text-center border py-4"
                v-for="key in Object.values(keys)"
              >
                <div class="flex items-center flex justify-center">
                  <!-- <div class="ml-1 flex justify-between"> -->
                  <div class="text-sm leading-5 font-medium text-gray-900">
                    <p v-if="!Array.isArray(key)">
                      {{
                        key === "created_at"
                          ? $moment(title[key]).format("DD/MM/YYYY")
                          : (key === 'status' && title[key] === 1) ? 'Активен' : (key === 'status' && title[key] === 0) ? 'Неактивен' : title[key]
                      }}
                    </p>
                    <p v-else>
                      {{ title[key[0]][key[1]] }}
                    </p>
                    <!-- </div> -->
                  </div>
                </div>
              </td>
              <td
                class="flex justify-center text-center py-2"
              >
                <nuxt-link
                  v-if="isIcon"
                  :to="`${$route.path}${path}/${title.id}`"
                  class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline flex"
                  ><img src="/img/edit.svg" alt="Edit" class="pr-5 w-10"
                /></nuxt-link>
                <!-- <div
                  v-if="isIcon"
                  class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline flex cursor-pointer"
                  @click="set_modal(true), (id = title.id)"
                >
                  <img src="/img/delete.svg" alt="Delete" />
                </div> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: ["bodies", "titles", "isIcon", "keys", "path", "deleted"],

  computed: {
    ...mapState({
      isDelete: (state) => state.api.isDelete,
    }),
  },
  data() {
    return {
      id: null,
    };
  },
  methods: {
    ...mapMutations({
      set_modal: "api/SET_MODAL",
    }),
    async ondelete(id) {
      await this.$axios.delete(`${this.deleted}/${id}`).then(() => {
        window.location.reload();
      });
    },
  },
  mounted() {},
};
</script>
