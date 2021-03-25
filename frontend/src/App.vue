<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Service desk</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <div v-if="fetching">
        <v-progress-circular
          :size="100"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
      <v-container v-if="!fetching" class="text-center">
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
import { mapState } from "vuex";

export default {
  name: "App",

  components: {
    CreateTicket,
    Tickets,
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapState(["fetching"])
  },
};
</script>
