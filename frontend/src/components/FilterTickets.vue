<template>
  <div class="mt-8">
    <v-btn
      @click="
        byDate = !byDate;
        sortTickets(sortFilter);
      "
      text
      >Date
      <v-icon>
        {{ byDate === true ? `mdi-arrow-up` : `mdi-arrow-down` }}
      </v-icon></v-btn
    >
    <v-btn
      @click="
        byPriority = !byPriority;
        sortTickets(sortFilter);
      "
      text
      >Priority
      <v-icon>
        {{ byPriority === true ? `mdi-arrow-up` : `mdi-arrow-down` }}
      </v-icon></v-btn
    >
    <v-btn
      @click="
        byStatus = !byStatus;
        sortTickets(sortFilter);
      "
      text
      >Status
      <v-icon>
        {{ byStatus === true ? `mdi-arrow-up` : `mdi-arrow-down` }}
      </v-icon></v-btn
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterTickets",
  data() {
    return {
      byDate: false,
      byPriority: false,
      byStatus: false,
    };
  },
  computed: {
    sortFilter() {
      return [
        {
          date: this.byDate === false ? "asc" : "desc",
          priority: this.byPriority === false ? "asc" : "desc",
          status: this.byStatus === false ? "asc" : "desc",
        },
      ];
    },
  },
  methods: {
    ...mapActions(["sortTickets"]),
  },
};
</script>
