import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {},
    reciepts: {},
    pageTitle: 'Главная',
    user: {
      email: 'stas0904@mail.ru',
      password: '09042007',
      uid: String
    },
    userData: {}
  },

  getters: {
    Products (state) {
      return state.products
    },
    Reciepts (state) {
      return state.reciepts
    },
    PageTitle (state) {
      return state.pageTitle
    },
    userData (state) {
      return state.userData
    }
  },

  actions: {
    initProducts ({commit}, n) {
      commit('INIT_PRODUCT', n)
    },
    authorizeUser ({commit}, n) {
      let email = n.email
      let password = n.password
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (userData) { commit('AUTHORIZE_USER', userData.user.uid) })
    },
    addProduct ({commit}, n) {
      commit('ADD_PRODUCT', n)
    },
    editProduct ({commit}, n) {
      commit('EDIT_PRODUCT', n)
    },
    removeProduct ({commit}, n) {
      commit('REMOVE_PRODUCT', n)
    },
    initReciepts ({commit}, n) {
      commit('INIT_RECIEPTS', n)
    },
    addReciept ({commit}, n) {
      commit('ADD_RECIEPT', n)
    },
    removeReciept ({commit}, n) {
      commit('REMOVE_RECIEPT', n)
    },
    pageTitleChange ({commit}, n) {
      commit('PAGE_TITLE_CHANGE', n)
    },
    getUserData ({commit}, n) {
      commit('GET_USER_DATA', n)
    }
  },

  mutations: {
    AUTHORIZE_USER (state, n) {
      state.user.uid = n
    },
    INIT_PRODUCT (state, n) {
      state.products = n
    },
    ADD_PRODUCT (state, n) {
      state.products.push(n)
    },
    EDIT_PRODUCT (state, n) {
      state.products[state.products.indexOf(n)] = n
    },
    REMOVE_PRODUCT (state, n) {
      state.products.splice(state.products.indexOf(n), 1)
    },
    INIT_RECIEPTS (state, n) {
      state.reciepts = n
    },
    ADD_RECIEPT (state, n) {
      state.reciepts.push(n)
    },
    REMOVE_RECIEPT (state, n) {
      state.reciepts.splice(state.reciepts.indexOf(n), 1)
    },
    PAGE_TITLE_CHANGE (state, n) {
      state.pageTitle = n
    },
    GET_USER_DATA (state, n) {
      state.userData = n
    }
  }
})
