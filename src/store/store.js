import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {},
    reciepts: {}
  },

  getters: {
    Products (state) {
      return state.products
    },
    Reciepts (state) {
      return state.reciepts
    }
  },

  actions: {
    initProducts ({commit}, n) {
      commit('INIT_PRODUCT', n)
    },
    addProduct ({commit}, n) {
      commit('ADD_PRODUCT', n)
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
    }
  },

  mutations: {
    INIT_PRODUCT (state, n) {
      state.products = n
    },
    ADD_PRODUCT (state, n) {
      state.products.push(n)
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
    }
  }
})