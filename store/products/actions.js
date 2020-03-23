import store from '@/services/store'

export default {
  fetchProducts ({ commit }) {
    store.getProducts((products) => {
      const shoppingCart = localStorage.getItem('shopping_cart')

      if (shoppingCart) {
        const productsCartList = JSON.parse(shoppingCart)
        productsCartList.forEach((localProduct) => {
          const index = products.findIndex(product => product.id === localProduct.id)
          if (index !== -1) { products.splice(index, 1, localProduct) }
        })
      }

      commit('setProducts', products)
    })
  }
}
