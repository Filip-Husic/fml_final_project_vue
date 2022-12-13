<template>
 <h1>User list</h1>
 <table>
    <thead>
    <th>Email</th>
    <th>First name</th>
    <th>Is enabled </th>
    <th>Last name</th>
    <th>Password</th>
    <th>Username</th>
    </thead>
    <tr v-for="user of users" :key="user.id">
      <td>{{user.email}}</td>
      <td>{{user.first_name}}</td>
      <td>{{user.is_enabled}}</td>
      <td>{{user.last_name}}</td>
      <td>{{user.password}}</td>
      <td>{{user.username}}</td>
    </tr>
    <tfoot>
    <tr>
      <td colspan="4">Total users: {{ users.length }}</td>
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

        let response = await fetch("http://localhost:8080/api/user");
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

</style>