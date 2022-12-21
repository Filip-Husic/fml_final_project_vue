<script>
import Users from "./components/Users.vue";
import TopMenu from "./components/TopMenu.vue";

import Homepage from "./components/Homepage.vue";
import Footer from "./components/Footer.vue";
import HomeButton from "@/components/HomeButton.vue";
import Register from "@/components/Register.vue";

export default {
  data() {
    return {}
  },
  methods: {},
  components: {
    Footer,
    Homepage,
    TopMenu,
    Users,
    HomeButton,
    Register,

  }
}
</script>

<template>
  <div id="headerBackground">
    <div id="header">
      <TopMenu></TopMenu>
    </div>
  </div>
  <main>
    <HomeButton></HomeButton>
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<style scoped>
  #header{
    background: #888;
    opacity: 0.8;
  }
</style>
