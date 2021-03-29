<template>
  <div class="home">
    <v-container>
      <v-switch
        v-model="classicTable"
        :label="`Classic table`"
      ></v-switch>
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
import { mapActions, mapGetters } from "vuex";
import Ticket from "../components/Ticket";
import FilterTickets from "../components/FilterTickets";
import TicketsTable from "../components/TicketsTable";

// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      classicTable: true,
    };
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
    ...mapActions(["getTickets"]),
  },
};
</script>
