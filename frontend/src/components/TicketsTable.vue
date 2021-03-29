<template>
  <v-data-table
    :headers="headers"
    :items="tickets"
    :items-per-page="10"
    class="elevation-1"
  >
    <template v-slot:item.created_at="{ item }">
      <span>{{ new Date(item.created_at).toLocaleString().slice(0, 18) }}</span>
    </template>
    <template v-slot:item.controls="props">
      <v-dialog v-model="x" width="80%" :retain-focus="false">
        <template v-slot:activator="{ on, attrs }">
          <v-btn outlined rounded color="primary" v-bind="attrs" v-on="on">
            Edit ticket
          </v-btn>
        </template>
        <EditTicket :reset="resetEdit" :ticketData="props.item" />
      </v-dialog>
    </template>
  </v-data-table>
</template>

<script>
import EditTicket from "./EditTicket";

export default {
  name: "TicketsList",
  props: ["tickets"],
  components: { EditTicket },
  methods: {
    resetEdit() {
      this.x = false;
    },
  },
  data() {
    return {
      x: false,
      headers: [
        {
          text: "Email",
          align: "start",
          sortable: false,
          value: "email",
        },
        { text: "Title", value: "title" },
        { text: "Problem", value: "description" },
        { text: "Priority", value: "priority" },
        { text: "Date", value: "created_at" },
        { text: "Status", value: "status" },
        { text: "", value: "createdOn", sortable: false },
        { text: "", value: "controls", sortable: false },
      ],
    };
  },
};
</script>
