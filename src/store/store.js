import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {},
    productsP: {},
    reciepts: {},
    pageTitle: 'Главная',
    user: {
      email: 'stas0904@mail.ru',
      password: '09042007',
      uid: String
    }
  },

  getters: {
    Products (state) {
      return state.products
    },
    ProductsP (state) {
      return state.productsP
    },
    Reciepts (state) {
      return state.reciepts
    },
    PageTitle (state) {
      return state.pageTitle
    }
  },

  actions: {
    pageTitleChange ({commit}, n) {
      commit('PAGE_TITLE_CHANGE', n)
    },

    authorizeUser ({commit}, n) {
      let email = n.email
      let password = n.password
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (userData) { commit('AUTHORIZE_USER', userData.user.uid) })
    },

    initProducts ({commit}, n) {
      commit('INIT_PRODUCT', n)
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

    initProductsP ({commit}, n) {
      commit('GET_PRODUCTS_P', n)
    },
    removeProductP ({commit}, n) {
      commit('REMOVE_PRODUCT_P', n)
    },
    addProductP ({commit}, n) {
      commit('ADD_PRODUCT_P', n)
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
    GET_PRODUCTS_P (state, n) {
      state.productsP = n
    },
    REMOVE_PRODUCT_P (state, n) {
      state.productsP.splice(state.products.indexOf(n), 1)
    },
    ADD_PRODUCT_P (state, n) {
      state.productsP.push(n)
    }
  }
})
