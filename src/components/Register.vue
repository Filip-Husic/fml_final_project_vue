<template>
  <div class="container">
  <h1>Register</h1>
  <form id="form" @submit.prevent="processForm">

    <section id="inputField"><p>
      <label for="firstName">First name:
        <input type="text" id="firstName" v-model="user.firstName" required>
      </label>
    </p>
    </section>

    <section id="inputField"><p>
      <label for="Last name">Last name:
        <input type="text" id="lastName" v-model="user.lastName" required>
      </label>
    </p>
    </section>

    <section id="inputField"><p>
      <label for="username">Username:
        <input type="text" id="username" v-model="user.username" required>
      </label>
    </p>
    </section>

    <section id="inputField"><p>
      <label for="email">Email:
        <input type="text" id="email" v-model="user.email" required>
      </label>
    </p>
      <small id="errorList" v-show="error.email!==''">{{ error.email }}</small>
    </section>

    <section id="inputField"><p>
      <label for="password">Password:
        <input type="password" id="password" v-model="user.password" required>
      </label>
    </p>
      <small id="errorList" v-show="error.password!==''">{{ error.password }}</small>
    </section>

    <p>
      <button type="submit">Register user</button>
      <button>
        <router-link class="nav-link active" to="/">Back to homepage</router-link>
      </button>
    </p>
  </form>
</div>
</template>

<script>
import Users from "./Users.vue"


export default {
  name: "Registration",
  components: {Users},
  data() {
    return {
      user: {
        firstName: "",
        lastName:"",
        username: "",
        email: "",
        password: "",
        isActive: ""
      },
      error: {
        username: "",
        email: "",
        password: "",
      }
    }
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
    },
    processForm() {
      this.error.username = "";
      this.error.email = "";
      this.error.password = "";
      let errors = false;
      if (!this.user.username) {
        this.error.username = ("Username field is required!");
        errors = true;
      }
      if (!this.user.email) {
        this.error.email = ("Email field is required!");
        errors = true;
      }
      if (!this.user.password) {
        this.error.password = ("Password field is required!");
        errors = true;
      }
      if (!errors) {
        console.log("Form submitted");
        console.log(this.user);
        this.addUser(this.user);
      }else {
        console.log("It's error time!")
      }
    },


    addUser(user) {
      let urlUser = "http://localhost:8080/api/user";

      fetch(urlUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          email: user.email,
          password: user.password
        })
      })
          .then(response => {
            if (!response.ok) {
              return Promise.reject("Page doesn't exist!");
            } else {
              return response.json();
            }

          })
          .then(answer => {
            console.log(answer);
            alert("User created with id = " + answer.id);
            this.user.firstName ="";
            this.user.lastName ="";
            this.user.username = "";
            this.user.email = "";
            this.user.password = "";

          })
          .catch(error => console.log("An error has occurred: " + error));
    },
    created() {
      this.getUsers();
    }
  }

}

</script>

<style scoped>
#errorList {
  background-color: rgb(0, 0, 0);
  padding: 2px;
  border: 1px solid black;
  float: bottom;
  margin-left: 20px;
  color: rgb(255, 0, 0);
}

#form p {
  padding: 20px;
}

#inputField {
  border: 1px solid black;
  padding: 20px;
  width: 500px;
}
</style>