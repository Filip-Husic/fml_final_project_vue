<template>
  <div class="container">
    <h1>Register</h1>
    <form id="form" @submit.prevent="register" v-if="!response">
      <section id="inputField"><p>
        <label class="form-label" for="username">Username:
          <input class="form-control" type="text" id="username" autocomplete="username" v-model="registrationData.username" required>
        </label>
      </p>
      </section>

      <section id="inputField"><p>
        <label class="form-label" for="email">Email:
          <input class="form-control" type="text" id="email" autocomplete="email" v-model="registrationData.email" required>
        </label>
      </p>
      </section>

      <section id="inputField"><p>
        <label class="form-label" for="password1">Password:
          <input class="form-control" type="password" id="password1" autocomplete="new-password" v-model="registrationData.password1" required>
        </label>
      </p>
        <div id="passwordHelpBlock" class="form-text">
          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
        </div>
      </section>

      <section id="inputField"><p>
        <label class="form-label" for="password2">Repeated password:
          <input class="form-control" type="password" autocomplete="new-password" v-model="registrationData.password2" required>
        </label>
      </p>
      </section>

      <p class="test">
        <button class="butreg" type="submit" :disabled="!valid">Register</button>
        <button class="buthomepag">
          <router-link class="nav-link active" to="/">Back to homepage</router-link>
        </button>
      </p>
    </form>
    <div v-if="error1?.message">{{ this.error1.message }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useAuthStore } from "@/store/auth";


export default defineComponent({
  name: "RegistrationForm",
  data() {
    return {
      registrationData: {
        username: '',
        email: '',
        password1: '',
        password2: '',
        password: ''
      },
      response: null,
      error1: {
        message: ''
      }
    }
  },
  computed: {
    ...mapStores(useAuthStore),
    valid() {
      const usernameValid = this.registrationData.username.length > 0;
      const emailValid = this.registrationData.email.length > 3;
      const passwordValid = this.registrationData.password1.length > 3
      const passwordRepeatValid = this.registrationData.password1 === this.registrationData.password2
      if (passwordRepeatValid){
        this.registrationData.password = this.registrationData.password1;
      }
      return usernameValid && emailValid && passwordValid && passwordRepeatValid;
    },
  },
  methods: {
    authStore: undefined,
    register() {
      this.error = null;
      this.authStore.register(this.registrationData)
          .then(data => {
            this.response = data;
            // noinspection JSUnresolvedFunction
            this.$router.push({ name: 'Login' })
          })
          .catch(error => {
            this.error = error.message
          })
    }
  }
});
</script>

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

.test{
  margin-top: 20px;
}

  

</style>