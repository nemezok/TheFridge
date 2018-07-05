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
    ProductsPRef.once('value').then(this.GetProductsP).catch((error) => console.log(error))
  },

  methods: {
    GetProducts: function (snapshot) {
      store.dispatch('initProducts', this.ObjectToArray(snapshot.val()))
    },
    GetReciepts: function (snapshot) {
      store.dispatch('initReciepts', this.ObjectToArray(snapshot.val()))
    },
    GetProductsP: function (snapshot) {
      store.dispatch('initProductsP', this.ObjectToArray(snapshot.val()))
    },
    ObjectToArray (obj) {
      return Object.keys(obj).map(function (key) { return obj[key] })
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
