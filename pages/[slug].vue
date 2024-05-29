<template>
  <div class="flex">
    <PlayerStats v-for="index in 6" :key="index" />
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
      let result = {};
      if (this.player.length) {
        result = {
          statistics: player.statistics,
        };
      }
      console.log(result, "stat");
      return result;
    },
  },
  methods: {
    async getPlayerStat() {
      let slug = "kevin-de-bruyne-93-totw-25";

      try {
        const posts = await client.fetch(`
          *[_type == "fifaCard" && slug.current == '${slug}] {
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
        this.player = posts[0];
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
  },
};
</script>

<style scoped></style>
