<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="post of posts">
          <div class="card shadow-sm">
            <img :src="post.path" alt="picture thumbnail" @click="modalPicId=post.id">
            <div class="card-body">
              <h4>{{post.title}}</h4>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary mx-1" @click="modalPicId=post.id">View</button>
                  <router-link :to="{name:'Checkout'}" v-if="isAuthenticated"><button type="button" class="btn btn-sm btn-outline-primary">Buy</button></router-link>
                </div>
                <small class="text-muted">Price: {{ post.price }}€</small>
                <small class="text-muted">Author placeholder</small>
              </div>
            </div>
          </div>

            <section v-if="modalPicId === post.id" class="modal">
                <section @click="modalPicId=null">
                  <img :src="post.path" alt="bigger image" >
                  <p id="caption">{{ post.title }}</p>
  <!--                <font-awesome-icon icon="fa-solid fa-chevron-left" class="fa-chevron-left" @click="previousPost()"/>-->
  <!--                <font-awesome-icon icon="fa-solid fa-chevron-right" class="fa-chevron-right" @click="nextPost()"/>-->
                  <span class="btClose" @click="modalPicId=null">X</span>
                </section>
            </section>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleImage from "@/components/SingleImage.vue";


import {mapState} from "pinia";
import {useAuthStore} from "@/store/auth";

export default {
  name: "Posts",
  components: {SingleImage},
  data() {

    return {
      posts: [],
      expanded: false,
      modalPicId: null
    };
  },
  computed: {
    ...mapState(useAuthStore, ["isAuthenticated"])
  },
  methods: {
    async getPosts() {
      try {
        let pageUrl = "api/post/"

        let response = await fetch(pageUrl);
        this.posts = await response.json();
      } catch (error) {
        console.log("Error = ", error);
      }
    },

    nextPost() {

    },
    previousPost(){

    },
  },
  created() {
    this.getPosts();
  }
}





</script>

<style scoped>
h1 {
  text-align: center;
}

.table tr:nth-child(even) {
  background-color: lightgray;
}
.table thead td:nth-child(even){
  border-left: 1px solid white;
  border-right: 1px solid white;
}

.table tbody th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

.table thead, tfoot {
  background-color: black;
  color: white;
}
.table tfoot {
  text-align: center;
}


.modal {

  position: fixed;
  top: 0;
  left: 0;
  /* width: 100%;
  height: 100%; */
  width: 100vw; /* vw - viewport width */
  height: 100vh; /* vh - viewport height */
  background-color: rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  /*visibility: hidden;*/
}
.modal section {
  position: relative;
  background-color: white;
  /*width: 300px;*/
  /*height: 300px;*/
  padding: 20px;
}
.modal img{
  vertical-align: top;
  width: 850px;
  height: 850px;
}

.btClose{
  position: absolute;
  top: -20px;
  right: -20px;
  background-color: black;
  color: lightgrey;
  font-family: Arial, serif;
  font-size: 12px;
  font-weight: bold;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid lightgrey;
  box-shadow: 2px 2px 5px black;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
  user-select: none;
}
.btClose:hover{
  background-color: #f05f40;
  color: black;
  border-color: black;
}
.btClose:active{
  box-shadow: none;
  top: -17px;
  right: -17px;
}
.modal .fa-chevron-left, .modal .fa-chevron-right{
  color: lightgrey;
  font-size: 3em;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
}
.fa-chevron-left:hover{
  color: #f05f40;
  transition: 500ms ease;
}
.fa-chevron-right:hover{
  color: #f05f40;
  transition: 500ms ease;
}

.modal .fa-chevron-left{
  left: 40px;
}
.modal .fa-chevron-right{
  right: 40px;
}
#caption{
  position: absolute;
  color: white;
  left: 20px;
  bottom: 20px;
  background-color: rgba(0,0,0,0.5);
  margin: 0;
  padding: 10px 20px;
  width: calc(100% - 40px);
}
</style>