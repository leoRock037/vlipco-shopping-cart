import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import mutations from '@/store/products/mutations'
import getters from '@/store/products/getters'

import ProductList from '@/components/products/ProductList.vue'

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

describe('ProductList', () => {
  const wrapper = mount(ProductList, {
    store,
    localVue
  })

  test('It renders products list items', () => {
    expect(wrapper.find('h1').text()).toEqual('Our Products')
    expect(wrapper.find('.product-list').exists()).toBe(true)
    expect(wrapper.find('.product-item').exists()).toBe(true)
    expect(wrapper.findAll('.product-item').length).toBe(2)
  })
})
