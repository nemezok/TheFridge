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
    },
    UserData: {}
  },

  getters: {
    PageTitle (state) {
      return state.pageTitle
    },
    Products (state) {
      return state.products
    },
    ProductsP (state) {
      return state.productsP
    },
    Reciepts (state) {
      return state.reciepts
    },
    UserData (state) {
      return state.UserData
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
    initUserData ({commit}, n) {
      commit('INIT_USER_DATA', n)
    },
    addQrCode ({commit}, n) {
      commit('ADD_QR_CODE', n)
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
    removeProductP ({commit}, n) {
      commit('REMOVE_PRODUCT_P', n)
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
    INIT_USER_DATA (state, n) {
      state.UserData = n
    },
    ADD_QR_CODE (state, n) {
      var qrRef = firebase.database().ref(n[0] + '/QRs')
      var qrRefPush = qrRef.push()
      qrRefPush.set(n[1]).then(function (snapshot) {
        console.log('Uploaded!')
      })
      var rowId = qrRefPush.key
      state.UserData.QRs[rowId] = n[1]
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
      var productRef = firebase.database().ref(n[0] + '/productsP')
      console.log(n)
      var productRefPush = productRef.push()
      productRefPush.set(n[1]).then(function (snapshot) {
        console.log('Uploaded!')
      })
      var postId = productRefPush.key
      state.UserData.productsP[postId] = n[1]
    },
    REMOVE_PRODUCT_P (state, n) {
      var productRef = firebase.database().ref(n[0] + '/productsP')
      console.log(n)
      productRef.child(n[1]).remove().then(function (snapshot) {
        console.log('Removed!')
      })
      state.UserData.productsP[n[1]] = null
      delete state.UserData.productsP[n[1]]
    },

    ADD_PRODUCT (state, n) {
      console.log(n[1])
      var productRef = firebase.database().ref(n[0] + '/products')
      var productRefPush = productRef.push()
      productRefPush.set(n[1]).then(function (snapshot) {
        console.log('Uploaded!')
      })
      var postId = productRefPush.key
      state.UserData.products[postId] = n[1]
    },
    REMOVE_PRODUCT (state, n) {
      var productRef = firebase.database().ref(n[0] + '/products')
      productRef.child(n[1]).remove().then(function (snapshot) {
        console.log('Removed!')
      })
      state.UserData.products[n[1]] = null
      delete state.UserData.products[n[1]]
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
