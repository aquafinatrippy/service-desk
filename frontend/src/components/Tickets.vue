<template>
  <v-row>
    <v-col sm="12" md="6" v-for="(ticket, index) in tickets" v-bind:key="index">
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">
              {{ ticket.email }}
            </div>
            <v-list-item-title class="headline mb-1">
              {{ ticket.title }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ticket.description}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn outlined rounded text color="primary">
            Edit ticket
          </v-btn>
          <v-btn outlined rounded text color="error">
            close ticket
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Tickets",
  mounted() {
    this.$store.dispatch("getTickets");
  },
  computed: mapState(["tickets"]),
};
</script>
