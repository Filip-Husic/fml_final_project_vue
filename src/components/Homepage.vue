<template>
    <div id="headerBackground">
      <TopMenuArticle></TopMenuArticle>
    </div>
  <Posts></Posts>
</template>

<script>
import Posts from "@/components/Posts.vue";
import TopMenuArticle from "@/components/TopMenuArticle.vue";
export default {
  name: "Homepage",
  components: {
    Posts,
    TopMenuArticle,
  }
}
</script>

<style scoped>

#headerBackground{
  padding-top: 1px;
}
</style>