<template>
<v-container>
  <v-row>
    <div v-if="tickets.length === 0">
      <h2>There are no tasks</h2>
    </div>
    <v-col
      sm="12"
      md="6"
      v-for="(ticket, index) in tickets"
      v-bind:key="index"
      v-else
    >
      <v-card class="mx-auto"  outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">
              {{ ticket.email }}
            </div>
            <v-list-item-title class="headline mb-1">
              {{ ticket.title }}
            </v-list-item-title>
            <v-list-item-subtitle>{{
              ticket.description
            }}</v-list-item-subtitle>
            <v-rating
              v-model="ticket.priority"
              background-color="indigo lighten-3"
              color="indigo"
              small
              readonly
            ></v-rating>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn outlined rounded text color="primary">
            Edit ticket
          </v-btn>
          <v-btn
            outlined
            rounded
            text
            color="error"
            @click="deleteTicket(ticket._id)"
          >
            close ticket
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Tickets",
  mounted() {
    this.$store.dispatch("getTickets");
  },
  computed: mapState(["tickets"]),
  methods: {
    ...mapActions(["deleteTicket"]),
  },
};
</script>
