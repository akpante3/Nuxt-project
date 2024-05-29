<template>
  <div class="player-stats max-w-sm mx-auto text-black p-4">
    <ul>
      <li class="border-y-2 flex justify-between items-center py-2">
        <span class="text-lg font-bold">{{ formatHeader(header) }}</span>
        <span class="text-lg">{{ headerValue }}</span>
      </li>
      <li
        v-for="(value, name, index) in stats"
        class="flex justify-between items-center py-2"
      >
        <span>{{ name }}</span>
        <span>{{ value }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PlayerStats",
  props: {
    header: {
      type: String,
    },
    stats: {
      type: Object,
    },
    headerValue: {
      type: Number,
    },
  },
  methods: {
    formatHeader(str) {
      if (str.length < 3) {
        return str.toUpperCase();
      }
      return str.slice(0, 3).toUpperCase(); 
    },
  },
};
</script>

<style scoped>
.player-stats {
  min-width: 120px;
}
/* Add any additional styles here if needed */
</style>
