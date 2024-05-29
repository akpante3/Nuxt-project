<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            scope="col"
            class="px-6 py-3"
          >
            <div :key="index" class="flex items-center">
              {{ header }}
              <a href="#"
                ><svg
                  class="w-3 h-3 ms-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
                  /></svg
              ></a>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in body"
          :key="index"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <nuxt-link
            :to="`/${row.slug}`"
            class="contents"
          >
            <td
              v-for="(item, id) in filterRow(row)"
              :key="id"
              class="px-6 py-4"
            >
              {{ item }}
            </td>
          </nuxt-link>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { VTable } from 'vuejs-smart-table'

export default {
  name: "TableComponent",
  props: {
    rows: {
      /** @type {import('vue').PropType<row[]>} */
      type: Array,
    },
    rowsPerPage: {
      type: Number,
    },
    headers: {
      type: Array,
    },
    body: {
      type: Array,
    },
  },
  data() {
    return {};
  },

  methods: {
    handleRowClick(slug) {
      console.log(slug, "------");
    },
    filterRow(row) {
      const { slug, ...rest } = row;
      // if (this.header.length === this.rest.length) {
      //   console.log('======= hello')
      // }
      return rest;
    },
  },
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>
