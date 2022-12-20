<template>
  <div id="headerBackground">
    <TopMenuArticle></TopMenuArticle>
  </div>
<!--  <section class="py-5 text-center container">-->
<!--    <div class="row py-lg-5">-->
<!--      <div class="col-lg-6 col-md-8 mx-auto">-->
<!--        <h1 class="fw-light">FML final project</h1>-->
<!--        <p class="lead text-muted">Welcome to our webpage, here you can post pictures and also buy the ones you-->
<!--          like.</p>-->
<!--        <p>-->
<!--          <button class="button btn btn-primary my-2"><span>Post something </span></button>-->
<!--        </p>-->
<!--      </div>-->

<!--    </div>-->
<!--  </section>-->
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




/*h1 {*/
/*  text-align: center;*/
/*}*/

/*.button span {*/
/*  cursor: pointer;*/
/*  display: inline-block;*/
/*  position: relative;*/
/*  transition: 0.5s;*/
/*}*/

/*.button span:after {*/
/*  content: '\00bb';*/
/*  position: absolute;*/
/*  opacity: 0;*/
/*  top: 0;*/
/*  right: -20px;*/
/*  transition: 0.5s;*/
/*}*/

/*.button:hover span {*/
/*  padding-right: 25px;*/
/*}*/

/*.button:hover span:after {*/
/*  opacity: 1;*/
/*  right: 0;*/
/*}*/
</style>