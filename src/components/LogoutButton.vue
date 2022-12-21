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
  <p>Are you sure that you want to logout?</p>
  <button class="btn btn-sm btn-outline-primary" @click="logout" v-if="authStore.isAuthenticated">Logout</button>
</template>
<style scoped>

</style>
