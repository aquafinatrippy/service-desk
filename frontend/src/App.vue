<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Service desk</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="text-center">
        <h3>Create and manage tickets.</h3>
        <br />
        <h4>Get started right now!</h4>
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
  

  data: () => ({
    //
  }),
};
</script>
