<template>
  <h1>Checkout</h1>
  <div class="card shadow-sm">

    <div class="container card-body">
      <img src="https://via.placeholder.com/500" alt="placeholder image">
      <h4>title</h4>
      <div class="d-flex justify-content-md-evenly align-items-center">
        <p class="text-muted">Author:</p>
        <p class="text-muted">Price:</p>
      </div>
    </div>
  </div>
  <h2>Please enter your payment information</h2>
  <form id="form" @submit.prevent="checkout">
    <fieldset>
      <legend>Payment type:</legend>

      <p>
        <label class="form-label" for="payment">Credit card
          <input class="form-check-input" type="radio" id="payment" name="payment" v-model="selected" value="creditCard"
                 required>
        </label>
      </p>
      <div v-if="selected === 'creditCard'">
        <p>Please enter your credit card info:</p>
        <p><label class="form-label" for="ownerFN">Card owner first name:
          <input class="form-control" type="text" id="ownerFN" required>
        </label></p>
        <p><label class="form-label" for="ownerLN">Card owner last name:
          <input class="form-control" type="text" id="ownerLN" required>
        </label></p>
        <p><label class="form-label" for="cardNum">Card number:
          <input class="form-control" type="number" id="cardNum" required>
        </label></p>
        <p><label class="form-label" for="cardExp">Card expiry date:
          <input class="form-control" type="month" id="cardExp" required>
        </label></p>
        <p><label class="form-label" for="cardCVV">CVV:
          <input class="form-control" type="number" min="111" max="999" maxlength="3" id="cardCVV" v-on:input="checkCVV" required>
          <small class="text-muted">3 digit number on the back of the card</small>
        </label></p>

      </div>

      <p>
        <label class="form-label" for="payment">Paypal
          <input class="form-check-input" type="radio" id="payment" name="payment" v-model="selected" value="paypal">
        </label>
      </p>
      <div v-if="selected === 'paypal'">
        <p>Please enter your Paypal username and password:</p>

        <p>
          <label class="form-label" for="ppUsername">Paypal username:
            <input class="form-control" type="text" id="ppUsername" required>
          </label>
        </p>

        <p>
          <label class="form-label" for="ppPw">Paypal password:
            <input class="form-control" type="password" id="ppPw" required>
          </label>
        </p>

      </div>

      <p>
        <label class="form-label" for="payment">Crypto
          <input class="form-check-input" type="radio" id="payment" name="payment" v-model="selected" value="crypto">
        </label>
      </p>
      <div v-if="selected === 'crypto'">
        <p>Please select cryptocoin from the list and enter your wallet address:</p>
        <p>
          <label class="form-label" for="cryptoWallet">Crypto wallet address
            <input class="form-control" type="text" id="cryptoWallet" required>
          </label>
        </p>
        <fieldset>
          <select name="cryptoOption" id="cryptoOption" required>
            <option value="none">-------</option>
            <option value="FML">FML Coin</option>
            <option value="bitCoin">BitCoin</option>
            <option value="dogeCoin">DogeCoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="USDC">U.S. Dollar Coin</option>
          </select>
        </fieldset>
      </div>
    </fieldset>

    <p class="test">
      <button class="btn btn-outline-primary" type="submit">Checkout</button>
      <button class="btn btn-outline-warning">
        <router-link class="nav-link active" to="/">Back to homepage</router-link>
      </button>
    </p>
  </form>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Checkout",
  methods: {
    checkCVV() {
      if (this.value > '999') {
        console.log("cvv function")
        this.value = '999';
      }
    },
    checkout() {
      this.$router.push({ name: 'ThankYou' })
    }
  },
  data() {
    return {
      selected: null
    }
  }
})
</script>

<style scoped>

</style>