<template>
<h1>Post list</h1>
  <table>
    <thead>
    <th>Title</th>
    <th>Content</th>
    <th>Date</th>
    <th>Posted by</th>
    </thead>
    <tr v-for="post of posts" :key="post.id">
      <td>{{post.title}}</td>
      <td>{{post.content}}</td>
      <td>{{post.postedDate}}</td>
      <td>{{post.postedBy}}</td>
    </tr>
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

</style>