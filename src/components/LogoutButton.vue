<script>
import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useAuthStore } from "@/store/auth";

export default defineComponent({
  methods: {
    logout() {
      this.authStore.logout()
          .then(() => this.$router.push({ name: 'Home' }))
    },
  },
  computed: {
    ...mapStores(useAuthStore)
  }
});
</script>

<template>
  <article>
    <p>Are you sure that you want to logout?</p>

    <button @click="logout" v-if="authStore.isAuthenticated" class="btnOut">Logout</button>
    <router-link class="nav-link active" to="/"><button class="btnHome">Cancel</button></router-link>

  </article>
</template>
<style scoped>
  article{
    padding: 55px;
    width: 300px;
    height: 200px;
    margin: 20px auto;
    background-color: lightgrey;
    border-radius: 20px;
  }

  .btnOut{
    width: 120px;
    border-radius: 10px;
    border-width: 0;
    background: #f05f40;
    color: lightgrey;
    box-shadow: 0 2px 5px #000000;
    padding: 1px;
    margin: auto;
  }
  .btnOut:hover{
    background-color: lightgrey;
    color: #f05f40;
    transition: 300ms ease-out;
  }

  .btnHome{
    width: 120px;
    border-radius: 10px;
    border-width: 0;
    background: lightgrey;
    color: #f05f40;
    box-shadow: 0 2px 5px #000000;
    padding: 1px;
    margin-top: 10px;

  }
  .btnHome:hover{
    background-color: #f05f40;
    color: lightgrey;
    transition: 300ms ease-out;
  }




</style>
