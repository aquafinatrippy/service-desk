<template>
  <div class="mt-8">
    <v-btn
      @click="
        byDate = !byDate;
        SORT_TICKETS({ key: 'created_at', status: byDate });
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
        SORT_TICKETS({ key: 'priority', status: byPriority });
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
        SORT_TICKETS({ key: 'status', status: byStatus });
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
import { mapMutations } from "vuex";

export default {
  name: "FilterTickets",
  data() {
    return {
      byDate: false,
      byPriority: false,
      byStatus: false
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
    ...mapMutations(["SORT_TICKETS"]),
  },
};
</script>
