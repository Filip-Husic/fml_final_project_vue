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
          .then(() => this.$router.push({ name: 'home' }))
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
    <form @submit.prevent="login" v-if="!authStore.isAuthenticated">
      <fieldset>
        <p><label for="username">
          <span>Username </span>
          <input type="text" id="username" autocomplete="username" v-model="user.username">
        </label>
        </p>

        <p><label for="password">
          <span>Password </span>
          <input type="password" id="password" autocomplete="current-password" v-model="user.password">
        </label>
        </p>

        <button type="submit" :disabled="!valid">Login</button>
      </fieldset>
    </form>
  </div>

  <ErrorMessage v-if="error?.message" :error="error"/>
</template>

<style scoped>

</style>
