import { shallowMount } from '@vue/test-utils'
import Button from '@/components/common/Button.vue'

describe('Button', () => {
  it('It renders based on props', () => {
    const button = shallowMount(Button, {
      propsData: {
        text: 'button text'
      }
    })

    expect(button.find('button').text()).toEqual('button text')
    expect(button.find('i').exists()).toBe(false)

    const button2 = shallowMount(Button, {
      propsData: {
        text: 'button text',
        icon: 'icon-class'
      }
    })

    expect(button2.find('button').text()).toEqual('button text')
    expect(button2.find('i').exists()).toBe(true)
  })
})
