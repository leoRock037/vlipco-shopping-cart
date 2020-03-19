import store from '@/services/store'

export default {
  fetchProducts ({ commit }) {
    store.getProducts((products) => {
      commit('setProducts', products)
    })
  }
}
