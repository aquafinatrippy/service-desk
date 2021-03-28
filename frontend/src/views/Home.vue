<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col sm="12" v-for="(ticket, index) in tickets" v-bind:key="index">
          <Ticket :ticket="ticket" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Ticket from "../components/Ticket";

// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Ticket,
  },
  created() {
    this.getTickets();
  },
  computed: { ...mapGetters(["tickets"]) },
  methods: { ...mapActions(["getTickets"]) },
};
</script>
