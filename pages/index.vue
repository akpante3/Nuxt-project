<template>
  <div>
    <TableComponent
      :headers="tableHeaders"
      :body="getFifaCards"
    />
 <!-- TODO: Pagination -->
  </div>
</template>

<script>
import TableComponent from "../components/table";
import {getFifaCards} from '../queries/fifaCardQueries'


export default {
  data() {
    return {
      fifaCards: [],
      tableHeaders: [ 'Name', 'OVR', 'POS', 'Type', 'PAC', 'SHO', 'DRI', 'DEF', 'PHY', 'WR' ]
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
          POS: card.position || '',
          Type: '',
          PAC: card.statistics.physical.average,
          SHO: card.statistics.shooting.average,
          DRI: '', 
          DEF: card.statistics.defense.average,
          PHY: card.statistics.physical.average,
          WR: '',
          slug: card.slug.current
        };
      });
    },
  },

  mounted() {
    this.getCardsList();
  },

  methods: {
    async getCardsList() {
      try {
        const data = await getFifaCards()
        if (data) {
          this.fifaCards = data;
        }
        
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
  },
};
</script>

<style scoped>

</style
