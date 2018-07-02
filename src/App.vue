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

export default {
  name: 'app',

  components: {
    Header,
    Footer
  }
}
</script>

<style src="./assets/style.css">
</style>
