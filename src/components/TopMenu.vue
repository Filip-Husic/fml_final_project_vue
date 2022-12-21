<script>
import DarkModeToggle from "@/components/DarkModeToggle.vue";
import {mapState} from "pinia";
import {useAuthStore} from "@/store/auth";

export default {
  name: "TopMenu",
  components: {DarkModeToggle},
  computed: {
    ...mapState(useAuthStore, ["isAuthenticated"])
  },
}
</script>


<template>
  <div class="container">
    <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
      <nav class="nav nav-pills">
        <ul class="nav me-auto">
          <li>
            <router-link to="/"><button class="topBtn">Home</button></router-link>
          </li>
          <li v-if="isAuthenticated">
            <router-link :to="{name:'Users'}"><button class="topBtn">Users Page</button></router-link>
          </li>
          <li>
            <router-link :to="{name:'About'}"><button class="topBtn">About Us</button></router-link>
          </li>
        </ul>
      </nav>
<!--      For nor lets comment the toggle switch-->
<!--    <DarkModeToggle></DarkModeToggle>-->
        <nav class="nav nav-pills" id="login">
          <ul class="nav me-auto">
          <li  v-if="!isAuthenticated">
            <router-link :to="{name:'Login'}">
              <button class="btn btn-outline-primary me-2">Login</button>
            </router-link>
          </li>
          <li  v-if="!isAuthenticated">
            <router-link :to="{name:'Register'}">
              <button class="btn btn-primary">Register</button>
            </router-link>
          </li>
          <li  v-if="isAuthenticated">
            <router-link :to="{ name: 'Logout' }">
              <button class="btn btn-outline-primary me-2">Logout</button>
            </router-link>
          </li>
          </ul>
        </nav>
    </header>
  </div>
</template>


<style scoped>
  header{
    opacity: 0.8;
    background: #888;
    color: #bbb;
    line-height: 1.5;
  }
  .container{
    padding: 0;
    max-width: 1300px;
  }
/* For Left side of Menu (put new class on button so that left and right would be different*/
  .topBtn{
    color: lightgrey;
    text-decoration: none;
    display: inline-block;
    padding: 15px;
    border: none;
    background: #888;

  }
  .topBtn:hover {
    color: lightgrey;
    text-decoration: none;
    transition: ease 0.7s;
    background: #f05f40;
    cursor: pointer;
  }
/* For right side of Menu*/
  .btn-outline-primary{
    border: none;
    color: lightgrey;
    text-decoration: none;
  }
  .btn-outline-primary:hover{
    transition: ease 0.7s;
    background: #f05f40;
    color: lightgrey;
    cursor: pointer;
  }

  .btn-primary{
    background: #f05f40;
    border: none;
    color: lightgrey;
  }

  .btn-primary:hover{
    background: lightgrey;
    border: #f05f40;
    color: #f05f40;
    transition: ease 0.7s;
  }
</style>