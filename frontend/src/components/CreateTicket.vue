<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="create" color="primary" dark v-bind="attrs" v-on="on">
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
      emailRules: [ 
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    };
  },
  methods: {
    ...mapActions(["createTicket"]),
  },
};
</script>
