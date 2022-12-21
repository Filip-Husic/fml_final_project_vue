<script>
import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useAuthStore } from "@/store/auth";
import ErrorMessage from "@/components/ErrorMessage.vue";

export default defineComponent({
  name: "LoginForm",
  components: { ErrorMessage },
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      error: null,
      isLoggedIn: false,
    }
  },
  methods: {
    login() {
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
    <form id="form" @submit.prevent="login" v-if="!authStore.isAuthenticated">
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

  <ErrorMessage v-if="error?.message" :error="error"/>
</template>

<style scoped>
.container{
  background-color: lightgrey;
  border-radius: 20px;
  width: 400px;
  padding: 20px;
  margin-top: 20px;
}
#errorList {
  background-color: rgb(0, 0, 0);
  padding: 2px;
  border: 1px solid black;
  float: bottom;
  margin-left: 20px;
  color: rgb(255, 0, 0);
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

.test{
  margin-top: 20px;
}
</style>
