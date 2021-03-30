<template>
  <div class="home">
    <v-container>
      
      <div class="darkSwitch">
        <v-switch v-model="classicTable" :label="`Classic table`"></v-switch>
        <v-btn icon @click="toggle_dark_mode">
          Darkmode
          <v-icon>mdi-theme-light-dark</v-icon></v-btn
        >
      </div>

      <div v-if="classicTable">
        <TicketsTable :tickets="tickets" />
      </div>
      <div v-else>
        <FilterTickets />
        <v-row>
          <v-col sm="12" v-for="(ticket, index) in tickets" v-bind:key="index">
            <Ticket :ticket="ticket" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Ticket from "../components/Ticket";
import FilterTickets from "../components/FilterTickets";
import TicketsTable from "../components/TicketsTable";

// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      classicTable: false,
    };
  },

  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme === "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.$vuetify.theme.dark = true;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
  components: {
    Ticket,
    FilterTickets,
    TicketsTable,
  },
  created() {
    this.getTickets();
  },
  computed: {
    ...mapGetters(["tickets"]),
  },
  methods: {
    ...mapActions(["getTickets", "sortBy"]),
    ...mapMutations(["SORT_TICKETS"]),
    toggle_dark_mode: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
};
</script>
<style lang="scss" scoped>
$material-light: (
  "background": #f6f6f6,
);
.darkSwitch {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
</style>
