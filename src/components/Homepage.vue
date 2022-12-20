<template>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <Posts></Posts>
    </div>
  </section>
</template>

<script>
import Posts from "@/components/Posts.vue";

export default {
  name: "Homepage",
  components: {Posts}
}
</script>

<style scoped>
h1 {
  text-align: center;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>