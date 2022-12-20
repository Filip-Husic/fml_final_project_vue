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
      <TopMenu ></TopMenu>
    </div>
  </div>

  <main>

    <HomeButton></HomeButton>

    <router-view></router-view>
  </main>

  <Footer></Footer>
</template>

<style scoped>
template{
  padding: 25px;
  background-color: white;
  color: black;
  font-size: 25px;
  width: 100%;
  margin: auto;
}

header {
  line-height: 1.5;
}
#header{
  opacity: 0.8;
  background: #888;
  color: #bbb;
}



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}


</style>
