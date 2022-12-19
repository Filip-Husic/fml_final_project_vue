<script>
function myFunction() {

}

import Posts from "./components/Posts.vue";
import Users from "./components/Users.vue";
import TopMenu from "./components/TopMenu.vue";
import TopMenuArticle from "./components/TopMenuArticle.vue";
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
    TopMenuArticle,
    Users,
    Posts,
    HomeButton,

  }
}


</script>

<template>
  <div id="headerBackground">
    <div id="header">
      <TopMenu ></TopMenu>
    </div>
    <TopMenuArticle></TopMenuArticle>
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
.dark-mode {
  background-color: black;
  color: white;
}

header {
  line-height: 1.5;
}

#headerBackground{
  background-image: url("images/header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
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
