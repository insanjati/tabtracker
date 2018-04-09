<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <input
            type="email"
            name="email"
            v-model="email"
            placeholder="email"/>
          <br>
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="password"/>
          <br>
          <div class="error" v-html="error" />
          <v-btn
            @click="register">
            Register
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
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
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
