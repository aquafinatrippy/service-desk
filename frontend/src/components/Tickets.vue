<template>
  <v-container>
    <div v-if="tickets.length === 0">
      <h2>There are no tasks</h2>
    </div>
    <div v-else>
      <v-select :items="items" filled label="Sort"></v-select>
      <v-row>
        <v-col
          sm="12"
          md="6"
          v-for="(ticket, index) in tickets"
          v-bind:key="index"
        >
          <v-card class="mx-auto" color="#f6f6f6">
            <v-list-item three-line>
              <v-list-item-content>
                <v-text-field
                  v-if="editAble === ticket._id"
                  v-model="ticket.email"
                  label="E-mail"
                  clearable
                ></v-text-field>
                <div v-else class="overline mb-4">
                  {{ ticket.email }}
                </div>
                <v-text-field
                  v-if="editAble === ticket._id"
                  v-model="ticket.title"
                  label="Title"
                  clearable
                ></v-text-field>
                <v-list-item-title v-else class="headline mb-1">
                  {{ ticket.title }}
                </v-list-item-title>
                <v-textarea
                  v-model="ticket.description"
                  v-if="editAble === ticket._id"
                >
                  <template v-slot:label>
                    <div>Description</div>
                  </template>
                </v-textarea>
                <v-list-item-subtitle v-else>{{
                  ticket.description
                }}</v-list-item-subtitle>
                <v-rating
                  v-if="editAble === ticket._id"
                  v-model="ticket.priority"
                  background-color="indigo lighten-3"
                  color="indigo"
                  large
                ></v-rating>
                <v-rating
                  v-else
                  v-model="ticket.priority"
                  background-color="indigo lighten-3"
                  color="indigo"
                  small
                  readonly
                ></v-rating>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn
                outlined
                rounded
                color="primary"
                @click="editAble = ticket._id"
              >
                Edit ticket
              </v-btn>
              <v-btn
                outlined
                rounded
                color="primary"
                @click="
                  updateTicket({
                    title: ticket.title,
                    description: ticket.description,
                    email: ticket.email,
                    rating: ticket.priority,
                    id: ticket._id
                  })
                "
              >
                Save ticket
              </v-btn>
              <v-btn
                outlined
                rounded
                color="error"
                @click="deleteTicket(ticket._id)"
              >
                close ticket
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Tickets",
  data() {
    return {
      items: ["Priority"],
      editAble: "",
    };
  },
  mounted() {
    this.$store.dispatch("getTickets");
  },
  computed: mapState(["tickets"]),
  methods: {
    ...mapActions(["deleteTicket", "updateTicket"]),
  },
};
</script>
