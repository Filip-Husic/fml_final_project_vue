<template>
 <h1>User list</h1>
 <table class="table table-striped">
    <thead class="table-dark">
    <th>Username</th>
    <th>Email</th>
    <th>Website</th>
    </thead>
    <tr v-for="user of users" :key="user.id">
      <td>{{user.id}}</td>
      <td>{{user.username}}</td>
      <td>{{user.email}}</td>
      <td><router-link :to="{ name: 'userInfo', params: { userId: user.id}}">ℹ️</router-link></td>
    </tr>
    <tfoot>
    <tr>
      <td colspan="6">Total users: {{ users.length }}</td>
    </tr>
    </tfoot>
  </table>
</template>
<script>
export default {
  name: "Users",
  data(){
    return{
      users: []
    };
  },
  methods: {
    async getUsers() {
      try {

        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        this.users = await response.json();
        console.log(this.users);
      } catch (error) {
        console.log("Error = ", error);
      }

    }
  },
  created() {
    this.getUsers();
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