<template>
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="nav me-auto">
        <a href="https://www.hrvatskitelekom.hr/" target="_blank">
          <img src="src/assets/img/telekom-logo-claim.svg" alt="Telekom - Erleben, was verbindet." loading="lazy">
        </a>&copy; 2022 Lana Pavić, Matija Bevandić & Filip Husić
      </p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

footer {
  line-height: 1.5;
  opacity: 0.8;
  background: #888;
  color: #bbb;
}

.btn {
  width: 120px;
  border-radius: 20px;
  background: #f05f40;
  color: lightgrey;
  box-shadow: 0px 2px 10px black;
  padding: 10px;
  margin: auto;
}


</style>