<script>
  export default {
    name: "TopMenuArticle",
  }
</script>

<template>

  <article>
    <h1>WELCOME TO FML <font-awesome-icon icon="fa-solid fa-camera" id="camera"/></h1>
    <hr>
    <p>We are aspiring to create a community where you can freely express yourself, upload your photographic creations and explore others'. Find your inspiration, express your ideas and make a profit along the way. We are excited to see the world through your lens, and for that just <router-link :to="{name:'Register'}">Sign up</router-link> or if you are already registered then just <router-link :to="{name:'Login'}">Sign in</router-link></p>
    <div class="gumb">FIND OUT MORE</div>
    <div class="gumb">Post something</div>
  </article>

</template>

<style scoped>
  article h1{
    margin-top: 200px;
    color: white;
    font-size: 40px;
  }
  #camera{
    color: #f05f40;
    rotate: 20deg;
  }
  article font-awesome-icon{
    color: #f05f40;
  }
  article hr {
    width: 300px;
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
</style>