<template>
  <div>
    <h1>Register</h1>

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
    <button
      @click="register">
      Register</button>
  </div>
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
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
      console.log(response.data);
    },
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

</style>
