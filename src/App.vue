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

export default {
  name: 'app',

  created () {
    const productRef = firebase.database().ref('Products')
    productRef.once('value').then(this.GetProducts).catch((error) => console.log(error))
    const recieptRef = firebase.database().ref('Recipes')
    recieptRef.once('value').then(this.GetReciepts).catch((error) => console.log(error))

    const ProductsPRef = firebase.database().ref('ProductsP')
    ProductsPRef.once('value').then(this.getProductsP).catch((error) => console.log(error))
  },

  methods: {
    GetProducts: function (snapshot) {
      console.log(snapshot.val())
      store.dispatch('initProducts', snapshot.val())
    },
    GetReciepts: function (snapshot) {
      console.log(snapshot.val())
      store.dispatch('initReciepts', snapshot.val())
    },
    getProductsP: function (snapshot) {
      console.log(snapshot.val())
      store.dispatch('getProductsP', snapshot.val())
    }
  },

  components: {
    Header,
    Footer
  }
}
</script>

<style src="./assets/style.css">
</style>
