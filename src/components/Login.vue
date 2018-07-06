<template>
  <div id="auth-wrapper">
  	<section id="user-login" class="auth" v-show="loginFormShow">
  		<div class="container">
  			<div class="flex flex-row">
          <div xs-flex="12">
            <h3>E-mail</h3>
            <input class="f-1" type="email" name="email" v-model='emailL'>
          </div>
          <div xs-flex="12">
            <h3>Пароль</h3>
            <input class="f-1" type="password" name="password" v-model='passwordL'>
          </div>
          <div xs-flex="12" class="a-left">
            <div class="errors">{{errorsL}}</div>
          </div>
          <div xs-flex="12" class="a-center">
  			    <button class="btn1" type="submit" name="" @click="login">Войти</button>
          </div>
          <div class="a-center">
            <a @click="switchLA">Регистрация</a>
          </div>
        </div>
  		</div>
  	</section>

    <section id="user-register" class="auth" v-show="registerFormShow">
      <div class="container">
        <div class="flex flex-row">
          <div xs-flex="12">
            <h3>E-mail</h3>
            <input class="f-1" type="email" name="email" v-model='emailR'>
          </div>
          <div xs-flex="12">
            <h3>Пароль</h3>
            <input class="f-1" type="password" name="password" v-model='passwordR'>
          </div>
          <div xs-flex="12" class="a-left">
            <div class="errors">{{errorsR}}</div>
          </div>
          <div xs-flex="12" class="a-center">
            <button class="btn1" type="submit" name="" @click="register">Регистрация</button>
          </div>
          <div class="a-center">
            <a @click="switchLA">Авторизация</a>
          </div>
        </div>
      </div>
    </section>

    <section id="user-logout" class="auth" v-show="logoutFormShow">
      <div class="container">
        <div class="flex flex-row">
          <div xs-flex="12">
            <h2 class="a-center">Поздравляем, вы успешно авторизованы!</h2>
            <h3 class="a-center">Теперь готовить станет еще проще!</h3>
          </div>
          <div xs-flex="12" class="a-center">
            <button class="btn1" type="submit" name="" @click="logout">Выйти</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import VueSession from 'vue-session'
import store from '../store/store'
import firebase from 'firebase'

console.log(firebase)

Vue.use(VueSession)
export default {
  name: 'Login',

  mounted () {
    store.dispatch('pageTitleChange', 'Авторизация')
  },
  created () {
    if (this.$session.exists()) {
      this.logoutFormShow = true
    } else {
      this.loginFormShow = true
    }
  },

  data () {
    return {
      loginFormShow: false,
      registerFormShow: false,
      logoutFormShow: false,

      emailL: '',
      passwordL: '',
      emailR: '',
      passwordR: '',
      errorsL: '',
      errorsR: ''

      /* valid: true,
      username: '',
      nameRules: [(v) => !!v || 'Se requiere nombre de usuario'],
      password: '',
      passwordRules: [(v) => !!v || 'Se requiere contraseña'],
      checkboxRules: [v => !!v || 'Debe aceptar para continuar!'],
      checkbox: false */
    }
  },

  methods: {
    login: function () {
      var self = this
      firebase.auth().signInWithEmailAndPassword(this.emailL, this.passwordL)
        .then(function (response) {
          console.log(response)
          if (response) {
            console.log('loginSuccess')
            self.$session.start()
            self.$session.set('uid', response.user.uid)
            self.loginFormShow = false
            self.registerFormShow = false
            self.logoutFormShow = true
            location.reload()
            // Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.token
            // this.$router.push('/')
          }
        }).catch(function (error) {
          self.errorsL = error.message
        })
    },
    register () {
      var self = this
      firebase.auth().createUserWithEmailAndPassword(this.emailR, this.passwordR)
        .then(function (response) {
          console.log('registerSuccess', response)
          self.emailL = self.emailR
          self.passwordL = self.passwordR
          self.login()

          self.loginFormShow = false
          self.registerFormShow = false
          self.logoutFormShow = true
        }).catch(function (error) {
          self.errorsR = error.message
        })
    },
    logout: function () {
      var self = this
      self.$session.destroy()
      self.loginFormShow = true
      self.registerFormShow = false
      self.logoutFormShow = false
      location.reload()
    },
    switchLA () {
      console.log(this.loginFormShow, this.registerFormShow)
      this.loginFormShow = !this.loginFormShow
      this.registerFormShow = !this.registerFormShow
    }
  }
}
/* export default {
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
} */
</script>

<style src="../assets/style.css">
</style>