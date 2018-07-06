<template>
  <section id="user-register" class="auth">
    <div class="container">
      <div class="flex flex-row">
        <div xs-flex="12">
          <input class="f-1" type="email" name="email" v-model='email'>
        </div>
        <div xs-flex="12">
          <input class="f-1" type="password" name="password" v-model='password'>
        </div>
        <div xs-flex="12" class="a-center">
          <button class="btn1" type="submit" name="" @click="SendAuth">Регистрация</button>
        </div>
        <div class="a-center">
          <router-link :to="{ name: 'Login'}">Авторизация</router-link>
        </div>
        <a @click="checkSession">checkSession</a>
      </div>
    </div>
  </section>
</template>

<script>

import store from '../store/store'
import firebase from 'firebase'

export default {
  name: 'Register',

  mounted () {
    store.dispatch('pageTitleChange', 'Регистрация')
  },

  data () {
    return {
      email: String,
      password: String
    }
  },

  methods: {
    SendAuth () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(alert('You are registered!'))
      //  .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // if (errorCode == 'auth/weak-password') {
      // alert('The password is too weak.');
      // } else {
      // alert(errorMessage);
      // }
      // console.log(error);
      // });
      // let qwe = {
      //  email: this.email,
      //  password: this.password
      // }
      // store.dispatch('authorizeUser', qwe)
    },
    checkSession: function () {
      console.log(this.$session.getAll())
    }
  }
}
</script>

<style src="../assets/style.css">
</style>