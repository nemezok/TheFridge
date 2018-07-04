<template>
  <div>
	QRcode
  </div>
</template>

<script>

import store from '../store/store'

export default {
  name: 'QRcode',
  mounted () {
    store.dispatch('pageTitleChange', 'QR-код')
  }
}
</script>

<style src="../assets/style.css">
</style>