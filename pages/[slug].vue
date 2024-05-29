<template>
  <div class="detail-page">
    <div class="detail-page__player-stats" v-if="computedPlayerStats">
      <img
        v-if="cardImage"
        :src="$urlFor(cardImage).size(180).url()"
        alt="card-image"
        height="180"
        width="220"
        loading="lazy"
      />
      <div class="detail-page__player-stats-table">
        <div v-for="(value, name, index) in computedPlayerStats" :key="index">
          <PlayerStats
            class="detail-page__player-stats-table-item"
            :header="name"
            :headerValue="getAverageStat(name)"
            :stats="filterStat(value)"
          />
        </div>
      </div>
    </div>
    <div class="flex mt-5 items-end">
      <h1 class="detail-page__player-name">{{ player.name }}</h1>
      <nuxt-link class="underline" to="/">View all cards</nuxt-link>
    </div>
    <div class="detail-page__player-info">
      <div
        v-for="(value, name, index) in playerInfo"
        class="detail-page__player-info-item"
        :key="index"
      >
        <span class="detail-page__player-info-name"> {{ name }} </span>
        <span class="detail-page__player-info-value"> {{ value }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from "@sanity/client";
import PlayerStats from "../components/playerStats";
import { getPlayerStats } from "../queries/fifaCardQueries";

export default {
  name: "PlayerCard",
  data() {
    return {
      player: {},
    };
  },
  components: {
    PlayerStats,
  },

  mounted() {
    this.playerStat();
  },
  computed: {
    computedPlayerStats() {
      let result = [];
      if (this.player.statistics) {
        result = this.player.statistics;
      }
      console.log(this.player, "player");
      return result;
    },
    cardImage() {
      return this.player.cardImage ? this.player.cardImage : "";
    },
    playerInfo() {
      if (this.player) {
        return {
          club: this.player?.club,
          league: this.player?.league,
          nation: this.player?.nation,
          strongFoot: this.player?.strongFoot,
          age: this.player?.age,
          height: this.player?.height,
          workRatesAttacking: this.player.workRatesAttacking,
        };
      }
      return {};
    },
  },
  methods: {
    async playerStat() {

      try {
        const data = await getPlayerStats(this.$route.params.slug);

        if (data) {
          this.player = data;
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    filterStat(stats) {
      const { average, ...rest } = stats;
      return rest;
    },
    getAverageStat(name) {
      return this.computedPlayerStats[`${name}`]?.average;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./[slug].scss";
</style>
