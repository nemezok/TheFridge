<template>
  <div>
  <div v-for="rcp in reciepts" v-if="rcp.ID==$route.params.id">
    {{rcp.author}}
    {{rcp.cooking}}
    {{rcp.cooking_time}} 
  </div>
  </div>
</template>

<script>

import Header from './Header'
import Footer from './Footer'

import store from '../store/store'

export default {
  name: 'Details',

  computed: {
    reciepts () {
      return store.getters.Reciepts
    }
  },

  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>