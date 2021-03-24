<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Service desk</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="text-center">
        <v-text>Create and manage tickets.</v-text>
        <br />
        <v-text>Get started right now!</v-text>
      </v-container>
      <CreateTicket />
    </v-main>
  </v-app>
</template>

<script>
import CreateTicket from "./components/CreateTicket";

export default {
  name: "App",

  components: {
    CreateTicket,
  },

  data: () => ({
    //
  }),
};
</script>
