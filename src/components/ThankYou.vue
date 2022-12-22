<template>
  <div class="jumbotron text-center">
    <h1 class="display-3">Thank You, and we hope to see you again!</h1>
    <p class="lead"><strong>Please check your email</strong> for the invoice and your picture.</p>
    <hr>
    <p>
      <strong>Learn more about the site creators</strong>
      <button type="button" class="btn btn-success">
        <router-link class="nav-link active" :to="{name:'About'}">Contact us</router-link>
      </button>
    </p>
    <button class="btn btn-outline-warning">
      <router-link class="nav-link active" to="/">Back to homepage</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "ThankYou"
}
</script>

<style scoped>

</style>