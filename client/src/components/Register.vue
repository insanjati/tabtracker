<template>
  <v-layout row wrap>
    <v-flex xs4 offset-xs4>
      <div class="white elevation-2 mt-5">
        <v-toolbar flat dense class="light-blue darken-4">
          <v-flex xs10 offset-xs1>
            <v-toolbar-title>REGISTER</v-toolbar-title>
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
            @click="register">
            SUBMIT
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  // name: 'HelloWorld',
  data() {
    // set default value in form input
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
      } catch (error) {
        this.error = error.response.data.error; // error.response.data came from axios
      }
    },
    // console.log(response.data);
  },
  // just a demonstration
  // // watch changed value in form input
  // watch: {
  //   email (value) {
  //     console.log('email has changed', value)
  //   }
  // },
  // // more than 2000ms, default value changes
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'helloworld'
  //   }, 2000)
  // }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
