<template>
  <div class="player-stats ">
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
        <span class="ml-2">{{ value }}</span>
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

<style scoped lang="scss">
@import './playerStats.scss';
.player-stats {
  min-width: 130px;
}
/* Add any additional styles here if needed */
</style>
