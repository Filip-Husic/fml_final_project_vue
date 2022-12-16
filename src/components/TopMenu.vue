<template>
  <div class="container">
    <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <nav class="nav nav-pills">
        <ul class="nav me-auto">
          <li>
            <router-link to="/"><button class="btn btn-primary">Home</button></router-link>
          </li>
          <li>
            <router-link :to="{name:'Users'}"><button class="btn btn-primary">Users Page</button></router-link>
          </li>
          <li>
            <router-link :to="{name:'Posts'}"><button class="btn btn-primary">Posts page</button></router-link>
          </li>
        </ul>
      </nav>
      <DarkModeToggle></DarkModeToggle>
        <div class="col-md-3 text-end" id="login">
          <router-link :to="{name:'Login'}"><button class="btn btn-outline-primary me-2">Login</button></router-link>
          <router-link :to="{name:'Register'}"><button class="btn btn-primary">Register</button></router-link>
        </div>
    </header>
  </div>
</template>

<script>
import DarkModeToggle from "@/components/DarkModeToggle.vue";

export default {
  name: "TopMenu",
  components: {DarkModeToggle}
}
</script>

<style scoped>

</style>