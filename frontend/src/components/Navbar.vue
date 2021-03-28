<template>
  <v-app-bar app color="primary" dark>
    <v-container>
      <v-toolbar-title>Service desk</v-toolbar-title>
      <router-link class="routerLink" to="/">Tickets list</router-link> |
      <router-link class="routerLink" to="/create">Create ticket</router-link>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
.routerLink {
  color: #fff;
  text-decoration: none;
}
</style>
