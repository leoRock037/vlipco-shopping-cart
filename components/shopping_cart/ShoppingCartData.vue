<template>
  <div>
    <ul class="product-list">
      <li v-for="(product, index) in products" :key="index">
        <span class="counter">{{ product.quantity }}</span>
        <img :src="product.photo_url" alt="empty">
        <h3>{{ product.name }}</h3>
      </li>
    </ul>
    <div class="total">
      <h4>Total</h4>
      <p>$ {{ totalAmount }}</p>
    </div>
    <form>
      <script
        src="https://checkout.wompi.co/widget.js"
        data-render="button"
        data-public-key="pub_test_E7re2spnXAos1XX8VACkFYLi3wr6mx0w"
        data-currency="COP"
        :data-amount-in-cents="amountInCents()"
        data-reference="4XMPGKWWPKWQ"
        >
      </script>
    </form>
  </div>
</template>

<script>

export default {
  name: 'ShoppingCartData',
  data () {
    return {
      products: JSON.parse(localStorage.getItem('shopping_cart')),
      totalAmount: 0
    }
  },
  created () {
    this.totalAmount = this.products.map(p => p.amount).reduce((a, b) => a + b, 0)
  },
  methods: {
    amountInCents () {
      return this.totalAmount * 100
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/assets/scss/components/shopping_cart/shopping_cart_data.scss";
</style>
