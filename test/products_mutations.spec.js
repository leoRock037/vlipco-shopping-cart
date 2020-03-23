import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import mutations from '@/store/products/mutations'
import getters from '@/store/products/getters'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    products: {
      namespaced: true,
      state: () => ({
        products: [
          {
            id: 1,
            name: 'milk',
            price: 1.50,
            description: 'Lorem Ipsum',
            photo_url: 'photo_milk.png',
            quantity: 0,
            amount: 0
          },
          {
            id: 2,
            name: 'Milo',
            price: 2.50,
            description: 'Lorem Ipsum is',
            photo_url: 'photo_milo.png',
            quantity: 0,
            amount: 0
          }
        ],
        selectedProduct: {}
      }),
      mutations,
      getters
    }
  }
})

describe('products module store', () => {
  test('setSelectedProduct mutation', () => {
    expect(store.state.products.selectedProduct).toEqual({})

    store.commit('products/setSelectedProduct', store.state.products.products[0])
    expect(store.state.products.selectedProduct).toEqual(
      {
        id: 1,
        name: 'milk',
        price: 1.50,
        description: 'Lorem Ipsum',
        photo_url: 'photo_milk.png',
        quantity: 0,
        amount: 0
      }
    )
  })

  test('incrementProductQuantity mutation', () => {
    expect(store.state.products.products[0].quantity).toBe(0)
    store.commit('products/incrementProductQuantity')
    expect(store.state.products.products[0].quantity).toBe(1)
    store.commit('products/incrementProductQuantity')
    expect(store.state.products.products[0].quantity).toBe(2)
  })

  test('decreaseProductQuantity mutation', () => {
    expect(store.state.products.products[0].quantity).toBe(2)
    store.commit('products/decreaseProductQuantity')
    expect(store.state.products.products[0].quantity).toBe(1)
    store.commit('products/decreaseProductQuantity')
    expect(store.state.products.products[0].quantity).toBe(0)
    store.commit('products/decreaseProductQuantity')
    expect(store.state.products.products[0].quantity).not.toBe(-1)
    expect(store.state.products.products[0].quantity).toBe(0)
  })

  test('setSelectedProduct state amount and quantity', () => {
    store.commit('products/incrementProductQuantity')
    store.commit('products/incrementProductQuantity')

    expect(store.state.products.selectedProduct).toEqual(
      {
        id: 1,
        name: 'milk',
        price: 1.50,
        description: 'Lorem Ipsum',
        photo_url: 'photo_milk.png',
        quantity: 2,
        amount: 3
      }
    )
  })
})
