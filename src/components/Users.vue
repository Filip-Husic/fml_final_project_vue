<template>
 <h1>User list</h1>
 <table class="table table-striped">
    <thead class="table-dark">
    <th>Username</th>
    <th>Email</th>
    <th colspan="2">Actions</th>
    </thead>
    <tr v-for="user of users">
      <td>{{user.username}}</td>
      <td>{{user.email}}</td>
      <td><router-link :to="{ name: 'UserInfo', params: { userId: user.id}}"><button type="button" class="btn btn-outline-primary">Edit</button></router-link></td>
      <td><button type="button" class="btn btn-outline-danger">Delete</button></td>
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

        let response = await fetch("api/user");
        this.users = await response.json();
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