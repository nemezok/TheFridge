<template>
	<section id="user-profile">
		<div class="container">
			<router-link :to="{ name: 'Login'}">Авторизация</router-link>
			<router-link :to="{ name: 'Register'}">Регистрация</router-link>
		</div>
	</section>
</template>

<script>

import store from '../store/store'

export default {
  name: 'Profile',

  mounted () {
    store.dispatch('pageTitleChange', 'Профиль')
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