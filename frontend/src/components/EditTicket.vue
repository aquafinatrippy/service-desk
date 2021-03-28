<template>
  <v-card>
    <v-card-title class="headline grey lighten-2">
      Edit ticket
    </v-card-title>
    <v-container>
      <v-text-field
        v-model="email"
        label="E-mail"
        clearable
        :rules="emailRules"
      ></v-text-field>
      <v-text-field v-model="title" label="Title" clearable></v-text-field>
      <v-textarea v-model="description">
        <template v-slot:label>
          <div>Description</div>
        </template>
      </v-textarea>
      <v-rating
        v-model="rating"
        background-color="indigo lighten-3"
        color="indigo"
        large
      ></v-rating>
      <select v-model="status">
        <option value="" selected disabled hidden>Select ticket status</option>
        <option>open</option>
        <option>ongoing</option>
        <option>closed</option>
      </select>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn outlined rounded color="error">
        Close edit
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        outlined
        rounded
        color="primary"
        @click="
          updateTicket({
            title,
            description,
            email,
            rating,
            id,
            status,
          });
          reset();
        "
      >
        Save ticket
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EditTicket",
  data() {
    return {
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      status: this.ticketData.status || "",
      title: this.ticketData.title || "",
      description: this.ticketData.description || "",
      email: this.ticketData.email || "",
      rating: this.ticketData.priority || "",
      id: this.ticketData._id || "",
      priority: this.ticketData.priority || "",
    };
  },
  props: ["ticketData", "reset"],
  methods: {
    ...mapActions(["updateTicket"]),
  },
};
</script>
