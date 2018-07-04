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
      </div>
    </div>
  </section>
</template>

<script>

import store from '../store/store'

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
      let qwe = {
        email: this.email,
        password: this.password
      }
      store.dispatch('authorizeUser', qwe)
    }
  }
}
</script>

<style src="../assets/style.css">
</style>