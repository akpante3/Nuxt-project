<template>
  <div class="flex" v-if="computedPlayerStats">
      <img
      v-if="cardImage"
      :src="$urlFor(cardImage).size(426).url()"
      alt="card-image"
      height="426"
      width="426"
      loading="lazy"
    />
    <div v-for="(value, name, index) in computedPlayerStats" :key="index">
      <PlayerStats :header="name" :stats="value" />
    </div>
  </div>
</template>

<script>
import { createClient } from "@sanity/client"; // Ensure correct import
import PlayerStats from "../components/playerStats"; // Check the correct path

const client = createClient({
  projectId: "21fy9g0s",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});

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
    this.getPlayerStat();
  },
  computed: {
    computedPlayerStats() {
      let result = [];
      if (this.player.statistics) {
        result = this.player.statistics;
      }
      console.log(result, "stat");
      return result;
    },
    cardImage() {
      let result = "";
      if (this.player.cardImage) {
        return this.player.cardImage;
      }
      return result;
    },
  },
  methods: {
    async getPlayerStat() {
      let slug = "kevin-de-bruyne-93-totw-25";

      try {
        const posts = await client.fetch(`
          *[_type == "fifaCard" && slug.current == '${slug}'] {
            ...,
            cardImage {
              asset-> {
                _id, metadata {
                  lqip, dimensions
                }
              }
            },
          }
        `);
        console.log(posts[0]);
        this.player = posts[0];
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    filterStat(stats) {},
    getAverageStat(name) {
      console.log(this.computedPlayerStats[`${name}`]);
      return 67;
    },
  },
};
</script>

<style scoped></style>
