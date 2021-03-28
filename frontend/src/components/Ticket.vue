<template>
  <v-container>
    <v-row class="mt-3">
      <v-card width="100%" class="mx-auto" color="#f6f6f6">
        <v-list-item three-line>
          <v-list-item-content>
            <p :class="ticket.status === 'open' ? 'green--text' : 'red--text'">
              {{ ticket.status }}
            </p>

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

        <v-card-actions class="justify-center">
          <v-dialog v-model="dialog" width="80%">
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined rounded color="primary" v-bind="attrs" v-on="on">
                Edit ticket
              </v-btn>
            </template>
            <EditTicket :reset="resetEdit" :ticketData="ticket" />
          </v-dialog>

          <v-btn
            outlined
            rounded
            color="error"
            @click="deleteTicket(ticket._id)"
          >
            Delete ticket
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import EditTicket from "./EditTicket";

export default {
  name: "Ticket",
  props: ["ticket"],
  data() {
    return {
      dialog: false,
    };
  },
  mounted() {
    this.getTickets();
  },
  methods: {
    ...mapActions(["deleteTicket", "getTickets", "filtering"]),
    ...mapMutations(["sortTickets"]),
    resetEdit() {
      this.dialog = false;
    },
  },
  components: {
    EditTicket,
  },
};
</script>

<style lang="scss" scoped>
select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: 24px;
  cursor: inherit;
  line-height: inherit;
}
</style>
