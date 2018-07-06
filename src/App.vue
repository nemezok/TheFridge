<template>
  <div id="app">
    <Header/>
    <main>
      <router-view></router-view>
    </main>
    <Footer/>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import firebase from 'firebase'
import store from './store/store'
import Vue from 'vue'
import VueSession from 'vue-session'

Vue.use(VueSession, {persist: true})

export default {
  name: 'app',

  created () {
    const productRef = firebase.database().ref('Products')
    productRef.once('value').then(this.GetProducts).catch((error) => console.log(error))
    const recieptRef = firebase.database().ref('Recipes')
    recieptRef.once('value').then(this.GetReciepts).catch((error) => console.log(error))

    const ProductsPRef = firebase.database().ref('ProductsP')
    ProductsPRef.once('value').then(this.GetProductsP).catch((error) => console.log(error))

    const UserDataRef = firebase.database().ref(this.$session.get('uid'))
    UserDataRef.once('value').then(function (data) {
      // console.log(data.val())
      store.dispatch('initUserData', data.val())
    })
  },

  methods: {
    GetProducts: function (snapshot) {
      store.dispatch('initProducts', snapshot.val())
    },
    GetReciepts: function (snapshot) {
      store.dispatch('initReciepts', snapshot.val())
    },
    GetProductsP: function (snapshot) {
      store.dispatch('initProductsP', snapshot.val())
    },

    GetUserData: function (snapshot) {
      store.dispatch('UserData', snapshot.val())
    }
  },

  components: {
    Header,
    Footer
  }
}
console.log(store)
</script>

<style src="./assets/style.css">
</style>
