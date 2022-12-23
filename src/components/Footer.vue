<template>
  <footer class="d-flex flex-wrap align-items-center py-2 my-4 border-top">
    <div class="nav">
      <p>
      <a href="https://www.hrvatskitelekom.hr/" target="_blank">
        <img src="src/assets/img/telekom-logo-claim.svg" alt="Telekom - Erleben, was verbindet." loading="lazy">
      </a>
    </p>
      <p>&copy; 2022 Lana Pavić, Matija Bevandić & Filip Husić</p>
      <a href="https://etickikodeks.mingor.gov.hr/#!/app/home" target="_blank">
        <img src="pics/EK-logo-desk.svg" style="width: 150px; min-width: 150px; display:inline-block; " alt="Croatian ethical codex logo"></a></div>
      <p>All prices are in euros €, 1 EUR = 7,53450 HRK</p>

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
  display:flex;
  flex-direction:column
}

</style>