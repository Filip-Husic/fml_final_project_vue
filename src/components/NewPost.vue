<template>
<h1>Add new post</h1>
  <form id="form" @submit.prevent="addPost" v-if="!response">
    <section id="inputField"><p>
      <label class="form-label" for="title">Title:
        <input class="form-control" type="text" id="title" autocomplete="title" v-model="postData.title" required>
      </label>
    </p>
    </section>
    <section id="inputField"><p>
      <label class="form-label" for="price">Price in euros:
        <input class="form-control" type="number" id="price" autocomplete="price" v-model="postData.price" required>
      </label>
    </p>
    </section>
    <section id="inputField"><p>
      <label class="form-label" for="image">Attach image:
        <input class="form-control" type="file" id="image" required>
      </label>
    </p>
    </section>

    <p class="test">
      <button class="butreg" type="submit" :disabled="!valid">Submit</button>
      <button class="buthomepag">
        <router-link class="nav-link active" to="/">Back to homepage</router-link>
      </button>
    </p>
    <ErrorMessage v-if="error?.message" :error="error"/>
  </form>
</template>

<script>
import {defineComponent} from "vue";
import {mapStores} from "pinia";
import {useAuthStore} from "@/store/auth";
import ErrorMessage from "@/components/ErrorMessage.vue";

export default defineComponent ({
  name: "NewPost",
  components: {ErrorMessage},
  data() {
    return {
      postData: {
        title: '',
        price: '',
        image: null
      },
      response: null,
      error: null
    }
  },
  computed: {
    ...mapStores(useAuthStore),
    valid() {
      const titleValid = this.postData.title.length > 0;
      const priceValid = this.postData.price.length >= 0;
      const imageValid = this.postData.image !== null;

      return titleValid && priceValid && imageValid;
    },
  },
  methods: {
    // addPost() {
    //   this.error = null;
    //   this.authStore.addPost(this.postData)
    //       .then(data => {
    //         this.response = data;
    //         this.$router.push({ name: 'Home' })
    //       })
    //       .catch(error => {
    //         this.error = error.message
    //       })
    // }
    /*
    async register(user) {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            await handleResponse(response, this);
        }
     */
  }
})
</script>

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