<script>
import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useAuthStore } from "@/store/auth";

export default defineComponent({
  name: "LoginForm",
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      error: {
        message: ''
      },
      isLoggedIn: false,
    }
  },
  methods: {
    login() {
      // noinspection JSUnusedLocalSymbols,JSUnresolvedFunction
      this.authStore.login(this.user)
          .then(() => this.$router.push({ name: 'Home' }))
          .catch(error => this.error = { message: "Login failed." })
    },
  },
  computed: {
    ...mapStores(useAuthStore),
    valid() {
      return this.user.username.length > 0 && this.user.password.length > 0;
    },
  }
});
</script>

<template>
  <div class="container">
    <h1>Login</h1>
    <form id="form" @submit.prevent="login">
      <section id="inputField">
        <p><label class="form-label" for="username">
          <span>Username </span>
          <input class="form-control" type="text" id="username" autocomplete="username" v-model="user.username">
        </label>
        </p>
      </section>
      <section id="inputField">
        <p><label class="form-label" for="password">
          <span>Password </span>
          <input class="form-control" type="password" id="password" autocomplete="current-password" v-model="user.password">
        </label>
        </p>
      </section>

        <button class="butreg" type="submit" :disabled="!valid">Login</button>
      <button class="buthomepag">
        <router-link class="nav-link active" to="/">Back to homepage</router-link>
      </button>
    </form>
  </div>

  <div v-if="error?.message">{{ this.error.message }}</div>
</template>

<style scoped>
.container{
  background-color: lightgrey;
  border-radius: 20px;
  width: 400px;
  padding: 20px;
  margin-top: 20px;
}

#inputField {

}
.butreg{
  width: 120px;
  border-radius: 10px;
  border-width: 0;
  background: #f05f40;
  color: lightgrey;
  box-shadow: 0 2px 5px #000000;
  padding: 1px;
  margin: auto;
}
.butreg:hover{
  background-color: lightgrey;
  color: #f05f40;
  transition: 300ms ease-out;
}
.buthomepag{
  width: 150px;
  border-radius: 10px;
  border-width: 0;
  background: #f05f40;
  color: lightgrey;
  box-shadow: 0 2px 5px #000000;
  padding: 1px;
  margin-left: 20px;

}
.buthomepag:hover{
  background-color: lightgrey;
  color: #f05f40;
  transition: 300ms ease-out;
}
</style>
