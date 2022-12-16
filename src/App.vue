<script>
function myFunction() {

}

import Posts from "./components/Posts.vue";
import Users from "./components/Users.vue";
import TopMenu from "./components/TopMenu.vue";
import Homepage from "./components/Homepage.vue";
import Footer from "./components/Footer.vue";
import HomeButton from "@/components/HomeButton.vue";

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
    Posts,
    HomeButton,
  }
}
</script>

<template>
  <TopMenu></TopMenu>

  <main>

    <router-view></router-view>

    <HomeButton></HomeButton>

  </main>

  <Footer></Footer>
</template>

<style scoped>
template{
  padding: 25px;
  background-color: white;
  color: black;
  font-size: 25px;
}
.dark-mode {
  background-color: black;
  color: white;
}

header {
  line-height: 1.5;
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
