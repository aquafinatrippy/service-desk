<template>
  <v-container class="mt-4">
    <v-text-field v-model="title" label="Title" clearable></v-text-field>
    <v-text-field
      :rules="emailRules"
      v-model="email"
      label="E-mail"
      clearable
    ></v-text-field>
    <v-textarea v-model="description">
      <template v-slot:label>
        <div>Description</div>
      </template>
    </v-textarea>
    <div>
      <p>Priority</p>
      <v-rating
        v-model="rating"
        background-color="indigo lighten-3"
        color="indigo"
        large
      ></v-rating>
    </div>
    <div>
      <v-btn
        dark
        outlined
        rounded
        color="primary"
        @click="
          createTicket({ title, description, email, rating });
          $router.push({ path: '/' });
        "
      >
        Create ticket
      </v-btn>
    </div>
  </v-container>
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
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
    };
  },
  methods: {
    ...mapActions(["createTicket"]),
  },
};
</script>
