<template>
<h1>Post list</h1>
  <table class="table table-striped">
    <thead class="table-dark">
    <th>Title</th>
    <th>Content</th>
    <th>Date</th>
    <th>Posted by</th>
    </thead>
    <tbody>
    <tr v-for="post of posts" :key="post.id">
      <td>{{post.title}}</td>
      <td>{{post.content}}</td>
      <td>{{post.postedDate}}</td>
      <td>{{post.user.username}}</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
      <td colspan="4">Total posts: {{ posts.length }}</td>
    </tr>
    </tfoot>
  </table>
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

        let response = await fetch("http://localhost:8080/api/post");
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