export default {
  setProducts (state, products) {
    state.products = products
  },
  setSelectedProduct (state, product) {
    state.selectedProduct = product
  },
  incrementProductQuantity (state) {
    state.selectedProduct.quantity++
    state.selectedProduct.amount = state.selectedProduct.quantity * state.selectedProduct.price
  },
  decreaseProductQuantity (state) {
    const value = state.selectedProduct.quantity

    if (value > 0) {
      state.selectedProduct.quantity--
      state.selectedProduct.amount = state.selectedProduct.quantity * state.selectedProduct.price
    }
  }
}
