<template>
  <v-layout row wrap>
    <v-flex xs4 offset-xs4>
      <div class="white elevation-2 mt-5">
        <v-toolbar flat dense class="light-blue darken-4">
          <v-flex xs10 offset-xs1>
            <v-toolbar-title>LOG IN</v-toolbar-title>
          </v-flex>
        </v-toolbar>
        <div class="pl-5 pr-5 pt-4 pb-2">
          <v-text-field
            solo
            type="email"
            name="email"
            v-model="email"
            label="Email address"
          ></v-text-field>
          <v-text-field
            solo
            type="password"
            name="password"
            v-model="password"
            label="Password"
            class="mt-3 mb-3"
          ></v-text-field>
          <div class="error" v-html="error" />
          <v-btn
            class="light-blue white--text mb-3"
            @click="login">
            LOG IN
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
