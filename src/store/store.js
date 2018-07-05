import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
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

    initProductsP ({commit}, n) {
      commit('INIT_PRODUCTS_P', n)
    },
    initProducts ({commit}, n) {
      commit('INIT_PRODUCTS', n)
    },
    initReciepts ({commit}, n) {
      commit('INIT_RECIEPTS', n)
    },

    addProductP ({commit}, n) {
      commit('ADD_PRODUCT_P', n)
    },
    removeProductP ({commit}, p) {
      commit('REMOVE_PRODUCT_P', p)
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

    addReciept ({commit}, n) {
      commit('ADD_RECIEPT', n)
    },
    removeReciept ({commit}, n) {
      commit('REMOVE_RECIEPT', n)
    }
  },

  mutations: {
    PAGE_TITLE_CHANGE (state, n) {
      state.pageTitle = n
    },
    AUTHORIZE_USER (state, n) {
      state.user.uid = n
    },

    INIT_PRODUCTS_P (state, n) {
      state.productsP = n
    },
    INIT_PRODUCTS (state, n) {
      state.products = n
    },
    INIT_RECIEPTS (state, n) {
      state.reciepts = n
    },

    ADD_PRODUCT_P (state, n) {
      var productRef = firebase.database().ref('ProductsP')
      var productRefPush = productRef.push()
      productRefPush.set(n).then(function (snapshot) {
        console.log('Uploaded!')
      })
      var postId = productRefPush.key
      state.productsP[postId] = n
    },
    REMOVE_PRODUCT_P (state, p) {
      var productRef = firebase.database().ref('ProductsP')
      productRef.child(p[1]).remove().then(function (snapshot) {
        console.log('Removed!')
      })
      state.productsP[p[1]] = null
      delete state.productsP[p[1]]
    },

    ADD_PRODUCT (state, n) {
      var productRef = firebase.database().ref('Products')
      var productRefPush = productRef.push()
      productRefPush.set(n).then(function (snapshot) {
        console.log('Uploaded!')
      })
      var postId = productRefPush.key
      state.products[postId] = n
    },
    REMOVE_PRODUCT (state, p) {
      var productRef = firebase.database().ref('Products')
      productRef.child(p[1]).remove().then(function (snapshot) {
        console.log('Removed!')
      })
      state.products[p[1]] = null
      delete state.products[p[1]]
    },
    EDIT_PRODUCT (state, n) {
      state.products[state.products.indexOf(n)] = n
    },

    ADD_RECIEPT (state, n) {
      state.reciepts.push(n)
    },
    REMOVE_RECIEPT (state, n) {
      state.reciepts.splice(state.reciepts.indexOf(n), 1)
    }
  }
})
