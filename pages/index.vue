<template>
  <div>
    <TableComponent
      :headers="[ 'Name', 'OVR', 'POS', 'Type', 'PAC', 'SHO', 'DRI', 'DEF', 'PHY', 'WR' ]"
      :body="getFifaCards"
    />
    <!-- <PlayerStats /> -->
  </div>
</template>

<script>
import { createClient } from "@sanity/client";
import TableComponent from "../components/table";

const client = createClient({
  projectId: "21fy9g0s",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});

export default {
  data() {
    return {
      fifaCards: [],
    };
  },

  components: {
    TableComponent
  },

  computed: {
    getFifaCards() {
      return this.fifaCards.map((card) => {
        return {
          Name: card.name,
          OVR: card.rating,
          POS: card.position || '', // Assuming you have a position field, otherwise it defaults to an empty string
          Type: '',
          PAC: card.statistics.physical.average,
          SHO: card.statistics.shooting.average,
          DRI: '', // Assuming you don't have this data, otherwise map it
          DEF: card.statistics.defense.average,
          PHY: card.statistics.physical.average,
          WR: '', // Assuming you don't have this data, otherwise map it
        };
      });
    },
  },

  mounted() {
    this.getPosts();
  },

  methods: {
    async getPosts() {
      try {
        const posts = await client.fetch(`*[_type == "fifaCard"]{
          name,
          rating,
          position,
          statistics {
            shooting { average },
            passing { average },
            defense { average },
            physical { average }
          },
          slug {
            current
          },
          _id
        }`);
        console.log(posts);
        this.fifaCards = posts;
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here if needed */
</style
