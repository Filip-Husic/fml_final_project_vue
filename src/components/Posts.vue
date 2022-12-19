<template>
  <div class="album py-5 bg-light" >
    <div class="container" >
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
        <div class="col" v-for="post of posts" :key="post.id">
          <div class="card shadow-sm">
            <img src="https://picsum.photos/200/100" alt="random lorem picsum image">

            <div class="card-body">
              <h4>{{post.title}}</h4>
              <p class="card-text">{{
                  post.content
                }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">{{ post.postedDate }}</small>
                <small class="text-muted">Posted by: {{ post.user.username }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  data(){
    return{
      posts: []
    };
  },
  methods: {
    async getPosts() {
      try {

        let response = await fetch("/api/post");
        this.posts = await response.json();
        console.log(this.posts);
      } catch (error) {
        console.log("Error = ", error);
      }

    }
  },
  created() {
    this.getPosts();
  }
}
</script>

<style scoped>
h1{
  text-align: center;
}
.table {
  border: 1px solid black;
  border-collapse: collapse;
  margin: auto;
  width: 80%;
  padding: 20px;
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
</style>