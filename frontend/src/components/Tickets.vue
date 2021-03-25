<template>
  <v-container>
    <div>
       <select v-model="selected" @change="filtering(selected)">
        <option value="" selected disabled hidden
          >Click here to select filter</option
        >
        <option>Date</option>
        <option>Open</option>
        <option>Ongoing</option>
        <option>Closed</option>
        
      </select>
    </div>
    <div v-if="tickets.length === 0">
      <h2>There are no tickets</h2>
    </div>
    <div v-else>
     

      <v-row class="mt-3"> 
        <v-col
          sm="12"
          md="6"
          v-for="(ticket, index) in tickets"
          v-bind:key="index"
          
        >
          <v-card class="mx-auto" color="#f6f6f6">
            <v-list-item three-line>
              <v-list-item-content class="text-center">
                <div v-if="editAble === ticket._id" class="custom-select">
                  <select v-model="newStatus">
                    <option value="" selected disabled hidden
                      >Select ticket status</option
                    >
                    <option>open</option>
                    <option>ongoing</option>
                    <option>closed</option>
                  </select>
                </div>
                <p
                  v-else
                  :class="
                    ticket.status === 'open' ? 'green--text' : 'red--text'
                  "
                >
                  {{ ticket.status }}
                </p>
                <v-text-field
                  v-if="editAble === ticket._id"
                  v-model="ticket.email"
                  label="E-mail"
                  clearable
                  :rules="emailRules"
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

            <v-card-actions class="justify-center">
              <v-btn
                v-if="editAble === ticket._id"
                outlined
                rounded
                color="primary"
                @click="
                  updateTicket({
                    title: ticket.title,
                    description: ticket.description,
                    email: ticket.email,
                    rating: ticket.priority,
                    id: ticket._id,
                    status: newStatus
                  });
                  resetEdit();
                "
              >
                Save ticket
              </v-btn>
              <v-btn
                v-else
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
                color="error"
                @click="deleteTicket(ticket._id)"
              >
                Delete ticket
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Tickets",
  data() {
    return {
      editAble: "",
      filter: "",
      selected: "",
      newStatus: "",
       emailRules: [ 
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    };
  },
  mounted() {
    this.getTickets();
  },
  computed: mapState(["tickets"]),
  methods: {
    ...mapActions(["deleteTicket", "updateTicket", "getTickets", "filtering"]),
    ...mapMutations(["sortTickets"]),
    resetEdit() {
      this.editAble = "";
      return this.editAble;
    },
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
