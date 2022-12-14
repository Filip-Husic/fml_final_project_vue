<template>
  <div class="container">
    <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <nav class="nav nav-pills">
        <ul class="nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" :to="{name:'Users'}">Users page</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" :to="{name:'Posts'}">Posts page</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" :to="{name:'About'}">About us</router-link>
          </li>
        </ul>
      </nav>
        <div class="col-md-3 text-end" id="login">
          <router-link :to="{name:'Login'}"><button class="btn btn-outline-primary me-2">Login</button></router-link>
          <router-link :to="{name:'Register'}"><button class="btn btn-primary">Register</button></router-link>
        </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "TopMenu"
}
</script>

<style scoped>

</style>