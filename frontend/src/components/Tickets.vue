<template>
  <v-row>
    <v-col sm="12" md="6">
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">
              email
            </div>
            <v-list-item-title class="headline mb-1">
              title
            </v-list-item-title>
            <v-list-item-subtitle>description</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn outlined rounded text color="primary">
            Close
          </v-btn>
          <v-btn outlined rounded text color="error">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Tickets",
};
</script>
