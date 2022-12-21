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
        <input class="form-control" type="file" id="image" @change="uploadFile" ref="file" required>
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
import {integer} from "vee-validate/dist/rules.esm";


export default defineComponent ({
  name: "NewPost",
  components: {ErrorMessage},
  data() {
    return {
      postData: {
        title: '',
        price: integer,
        images: null
      },
      response: null,
      error: null
    }
  },
  computed: {
    ...mapStores(useAuthStore),
    valid() {
      const titleValid = this.postData.title.length > 0;
      const priceValid = this.postData.price >= 0;
      const imageValid = this.postData.image !== null;

      return titleValid && priceValid && imageValid;
    },
  },
  methods: {
    uploadFile() {
    //   this.images = this.$refs.file.files[0];
    },
    addPost() {
    //   const formData = new FormData();
    //   formData.append('file', this.title);
    //   formData.append('file', this.price);
    //   formData.append('file', this.images);
    //
    //   const headers = { 'Content-Type': 'multipart/form-data' };
    //
    //   axios.post('api/post' + this.user.id, formData, { headers }).then((res) => {
    //     res.data.files; // binary representation of the file
    //     res.status; // HTTP status
    //     console.log("file uploaded")
    //   });
      // this.error = null;
      // this.authStore.addPost(this.postData)
      //     .then(data => {
      //       this.response = data;
      //       this.$router.push({ name: 'Home' })
      //       alert("You've added a new post!")
      //     })
      //     .catch(error => {
      //       this.error = error.message
      //     })
    }
  }
})
</script>

<style scoped>

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