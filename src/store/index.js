import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.isAuthenticated = false
      }
      if (localStorage.getItem('admin')) {
        state.Admin = localStorage.getItem('admin')
        state.isAdmin = true
      } else {
        state.Admin = ''
        state.isAdmin = false
      }
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    clearbrands(state) {
      state.brands = []
      state.amount = []
    },
    appendbrands(state, brand) {
      state.brands.push(brand)
    },
    appendamount(state, amount) {
      state.amount.push(amount)
    },
    setAdmin(state, admin) {
      state.Admin = admin
      state.isAdmin = true
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
    },
    removeAdmin(state) {
      state.Admin = ''
      state.isAdmin = false
    }
  },
  actions: {
  },
  modules: {
  }
})
