<template>
	<div></div>
</template>

<script>
import VueSession from 'vue-session'
Vue.use(VueSession)

export default {
  name: 'login',
  methods: {
    login: function () {
      this.$http.post('http://somehost/user/login', {
        password: this.password,
        email: this.email
      }).then(function (response) {
        if (response.status === 200 && 'token' in response.body) {
          this.$session.start()
          this.$session.set('jwt', response.body.token)
          Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.token
          this.$router.push('/panel/search')
        }
      }, function (err) {
        console.log('err', err)
      })
    }
  }
}
    /* this.$session.getAll()
    this.$session.set(key,value)
    this.$session.get(key)
    this.$session.start()
    this.$session.exists()
    this.$session.has(key)
    this.$session.remove(key)
    this.$session.clear()
    this.$session.destroy()
    this.$session.id()
    this.$session.renew(session_id) */
</script>

<style src="../assets/style.css">
</style>