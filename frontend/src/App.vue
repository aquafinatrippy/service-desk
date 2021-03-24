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
      <br />
      <Tickets />
    </v-main>
  </v-app>
</template>

<script>
import CreateTicket from "./components/CreateTicket";
import Tickets from "./components/Tickets";


export default {
  name: "App",

  components: {
    CreateTicket,
    Tickets,
  },
  created() {
    console.log(this.$store);
  },
  

  data: () => ({
    //
  }),
};
</script>
