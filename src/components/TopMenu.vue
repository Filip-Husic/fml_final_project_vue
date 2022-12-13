<template>
  <nav class="topMenu">
    <ul class="topMenu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link :to="{name:'Users'}">Users page</router-link></li>
      <li><router-link :to="{name:'Posts'}">Posts page</router-link></li>
      <li><router-link :to="{name:'Login'}">Login</router-link></li>
      <li><router-link :to="{name:'Register'}">Register</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TopMenu"
}
</script>

<style scoped>
.topMenu {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  box-shadow: 0px 3px 5px #000;
}
.topMenu li {
  display: inline;
}
.topMenu a {
  text-decoration: none;
  color: black;
  /* color: inherit; */
  padding: 10px 20px;
  display: inline-block;
}

.topMenu a:hover {
  background-color: red;
  color: white;
}
</style>