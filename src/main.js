// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import store from './store/store'
import QrcodeReader from './components/QrcodeReader.vue'

// Install the components
export function install (Vue) {
  Vue.component('qrcode-reader', QrcodeReader)
}

// Expose the components
export { QrcodeReader }

Vue.use(store)

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyCbZojv7PyitvUJ1t8IULSW0Zo8joqt-Dk',
  authDomain: 'vuefridge-commando.firebaseapp.com',
  databaseURL: 'https://vuefridge-commando.firebaseio.com',
  projectId: 'vuefridge-commando',
  storageBucket: 'vuefridge-commando.appspot.com',
  messagingSenderId: '722969822636'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
