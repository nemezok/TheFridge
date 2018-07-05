<template>
	<section id="user-login" class="auth">
		<div class="container">
			<div class="flex flex-row">
        <div xs-flex="12">
          <input class="f-1" type="email" name="email" v-model='email'>
        </div>
        <div xs-flex="12">
          <input class="f-1" type="password" name="password" v-model='password'>
        </div>
        <div xs-flex="12" class="a-center">
			    <button class="btn1" type="submit" name="" @click="SendAuth">Войти</button>
        </div>
        <div class="a-center">
          <router-link :to="{ name: 'Register'}">Регистрация</router-link>
        </div>
      </div>
		</div>
	</section>
</template>

<script>

import store from '../store/store'
import firebase from 'firebase'

export default {
  name: 'Login',

  mounted () {
    store.dispatch('pageTitleChange', 'Авторизация')
  },

  data: {
    email: String,
    password: String
  },

  methods: {
    SendAuth () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(alert('You are in! Congrats!!!'))
      let user = {
        email: this.email,
        password: this.password
      }
      store.dispatch('authorizeUser', user)
    }
  }
}
</script>

<style src="../assets/style.css">
</style>