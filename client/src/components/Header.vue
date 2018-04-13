<template>
  <v-toolbar fixed class="light-blue darken-4">
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'Root'})">
        TabTracker
      </span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat>
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        @click="navigateTo({name: 'Login'})">
        Log In
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        @click="navigateTo({name: 'Register'})">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.toolbar__items {
  color: white;
}
.home {
  cursor: pointer;
}
</style>
