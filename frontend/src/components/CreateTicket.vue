<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Create ticket
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="
                dialog = false;
                createTicket({title, description, email, rating});
              "
            >
              Create ticket
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <v-text-field v-model="title" label="Title" clearable></v-text-field>
          <v-text-field v-model="email" label="E-mail" clearable></v-text-field>
          <v-textarea v-model="description">
            <template v-slot:label>
              <div>Description</div>
            </template>
          </v-textarea>
          <div>
            <v-text>Priority</v-text>
            <v-rating
              v-model="rating"
              background-color="indigo lighten-3"
              color="indigo"
              large
            ></v-rating>
          </div>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CreateTicket",

  data() {
    return {
      dialog: false,
      rating: 4,
      title: "",
      description: "",
      email: "",
    };
  },
  methods: {
    ...mapActions(["createTicket"]),
  },
};
</script>
