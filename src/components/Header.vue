<template>
  <header>
  <div class="container">
	<div class="flex flex-row flex-center">
		<div xs-flex="2"><a href="/" class="logo"><img src="../assets/img/logo.png"></a></div>
		<div xs-flex="8"><h1 class="page-title">{{pagetitle}}</h1></div>
		<div xs-flex="2" class="profile-href">
			<router-link :to="{ name: 'Login'}"><i class="fo user"></i></router-link>
			<a @click="checkSession">checkSession</a>
		</div>
	</div>
  </div>
  </header>
</template>

<script>
import store from '../store/store'

export default {
  name: 'Header',

  computed: {
    pagetitle () {
      return store.getters.PageTitle
    }
  },

  methods: {
    checkSession: function () {
      console.log(this.$session.getAll())
    }
  }
}
</script>

<style src="../assets/style.css">
</style>