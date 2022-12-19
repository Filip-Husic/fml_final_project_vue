<script>
import DarkModeToggle from "@/components/DarkModeToggle.vue";

export default {
  name: "TopMenu",
  components: {DarkModeToggle}
}
</script>


<template>
<!--  <div class="container">-->
<!--    <header-->
<!--        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">-->
<!--      <nav class="nav nav-pills">-->
<!--        <ul class="nav me-auto">-->
<!--          <li>-->
<!--            <router-link to="/"><button class="btn btn-primary">Home</button></router-link>-->
<!--          </li>-->
<!--          <li>-->
<!--            <router-link :to="{name:'Users'}"><button class="btn btn-primary">Users Page</button></router-link>-->
<!--          </li>-->
<!--          <li>-->
<!--            <router-link :to="{name:'Posts'}"><button class="btn btn-primary">Posts page</button></router-link>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </nav>-->
<!--&lt;!&ndash;      For nor lets comment the toggle switch&ndash;&gt;-->
<!--&lt;!&ndash;    <DarkModeToggle></DarkModeToggle>&ndash;&gt;-->
<!--        <div class="col-md-3 text-end" id="login">-->
<!--          <router-link :to="{name:'Login'}"><button class="btn btn-outline-primary me-2">Login</button></router-link>-->
<!--          <router-link :to="{name:'Register'}"><button class="btn btn-primary">Register</button></router-link>-->
<!--        </div>-->
<!--    </header>-->
<!--  </div>-->
  <div class="container">
    <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
      <nav class="nav nav-pills">
        <ul class="nav me-auto">
          <li>
            <router-link to="/"><a>Home</a></router-link>
          </li>
          <li>
            <router-link :to="{name:'Users'}">Users Page</router-link>
          </li>
        </ul>
      </nav>
<!--      For nor lets comment the toggle switch-->
<!--    <DarkModeToggle></DarkModeToggle>-->
        <div class="col-md-3 text-end" id="login">
          <router-link :to="{name:'Login'}"><button class="btn btn-outline-primary me-2">Login</button></router-link>
          <router-link :to="{name:'Register'}"><button class="btn btn-primary">Register</button></router-link>
        </div>
    </header>
  </div>

</template>


<style scoped>
  a{
    color: lightgrey;
    text-decoration: none;
  }
  a:hover{
    color: lightgrey;
    text-decoration: none;
  }

  header ul li{
    display: inline-block;
    padding: 15px;
  }

  header ul li:hover{
    transition: ease 0.7s;
    background: #f05f40;
    cursor: pointer;
  }

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