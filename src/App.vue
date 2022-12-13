<script>
import Posts from "./components/Posts.vue";
import Users from "./components/Users.vue";
import TopMenu from "./components/TopMenu.vue";
import Homepage from "./components/Homepage.vue";
import Register from "./components/Register.vue";

export default {
  data() {
    return {}
  },
  methods:{},
  components:{
    Homepage,
    TopMenu,
    Users,
    Posts,
  }
}
</script>

<template>
  <header>
   <TopMenu></TopMenu>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
