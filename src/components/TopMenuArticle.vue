<script>
  export default {
    name: "TopMenuArticle",
  }
</script>

<template>

  <article>
    <h1>LOREM IPSUM</h1>
    <hr>
    <p>Lorem ipsum i jos nesto teksta ne znam kolko treba, a ne da mi se paliti lorem ipsum generator da ga nadjem, pa samo tipkam tekst...</p>
    <div class="gumb">FIND OUT MORE</div>
    <div></div>
  </article>

</template>

<style scoped>
  article h1{
    margin-top: 200px;
    color: white;
    font-size: 40px;
  }
  article hr {
    width: 50px;
    margin: 20px auto;
    border-color: #f05f40;
  }
  .gumb{
    width: 150px;
    border-radius: 50px;
    background: #f05f40;
    padding: 10px;
    margin: auto;
  }
  .gumb:hover{
    transition: ease .5s;
    transform: translate(0, -15px);
  }
  article .gumb{
    margin-top: 25px;
    color: white;
    font-weight: bold;
  }
  article p{
    width: 50%;
    margin: 50px auto;
    color: #ccc;
  }
  article div:last-of-type{
    padding-bottom: 250px;
  }
</style>