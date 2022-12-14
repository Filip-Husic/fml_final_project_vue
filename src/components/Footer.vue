<template>
  <hr>
  <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class=""><a href="https://www.hrvatskitelekom.hr/" target="_blank"><img src="src/assets/img/telekom-logo-claim.svg" alt="Telekom - Erleben, was verbindet." loading="lazy"></a>&copy; 2022 Lana Pavić, Matija Bevandić & Filip Husić </p>
      <nav class="nav nav-pills">
        <ul class="nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link active" :to="{name:'About'}">About us</router-link>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.container{
  background-color: lightgray;
  color: white;
  font-size: larger;
}
</style>