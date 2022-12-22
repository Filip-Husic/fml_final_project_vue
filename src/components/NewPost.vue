<template>

  <h1>Add new post</h1>
  <form id="form" @submit.prevent="addPost" v-if="!response">

    <section id="title"><p>
      <label class="form-label" for="title">Title:
        <input class="form-control" type="text" id="title" autocomplete="title" v-model="postData.title" required>
      </label>
    </p>
    </section>

    <section id="price"><p>
      <label class="form-label" for="price">Price in euros:
        <input class="form-control" type="number" id="price" autocomplete="price" v-model="postData.price" required>
      </label>
    </p>
    </section>


    <section id="image">
      <div>
        <label class="form-label" for="image">Attach image:
          <input class="form-control" type="file" id="image" @change="handleFileUpload" ref="file">
        </label>
      </div>
      <!--      Preview to be added later   -->
      <!--      <div class="img-thumbnail">-->
      <!--        <img src="{{postData.image}}"/>-->
      <!--        <button type="button" @click="removeImage">Remove image</button>-->
      <!--      </div>-->
    </section>

    <section id="buttons">
      <button class="butreg" type="submit" :disabled="!valid">Submit</button>
      <button class="buthomepag">
        <router-link class="nav-link active" to="/">Back to homepage</router-link>
      </button>
    </section>
    <div v-if="error?.message">{{ this.error.message }}</div>
  </form>
</template>

<script>
import {defineComponent} from "vue";
import {mapStores} from "pinia";
import {useAuthStore} from "@/store/auth";
import {image} from "vee-validate/dist/rules.esm";
import {fetch} from "whatwg-fetch";


export default defineComponent({
  name: "NewPost",
  data() {
    return {
      postData: {
        title: '',
        price: 0,
        image: null
      },
      response: null,
      error: null
    }
  },
  computed: {
    image() {
      return image
    },
    ...mapStores(useAuthStore),
    valid() {
      const titleValid = this.postData.title.length > 0;
      const priceValid = this.postData.price >= 0;
      const imageValid = this.postData.image !== null;

      return titleValid && priceValid && imageValid;
    },
  },
  methods: {
    async addPost() {

      // noinspection JSUnresolvedFunction
      fetch('/api/post/' + this.authStore.user.id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.postData.title,
          price: this.postData.price,
        })
      })
          .then(response => response.json())
          .then(data => {
            const formData = new FormData();
            formData.append('file',this.postData.image)
            fetch(`api/post/${data.id}/picture`, {
              method: 'POST',
              body: formData
            })
          })
          .catch(error => {
            console.error('Error:', error)
          })
          .then(() => this.$router.push({ name: 'Home' }))
    },
    handleFileUpload(event){
      this.postData.image = event.target.files[0]
    }


    //     Preview to be added later
    // onUploadChange(e) {
    //   let image = e.target.postData.image || e.dataTransfer.postData.image;
    //   if (!image.length)
    //     return;
    //   this.createImage(image);
    // },
    // createImage(file) {
    //   let image = new Image();
    //   let reader = new FileReader();
    //   let vm = this;
    //
    //   reader.onload = (e) => {
    //     vm.image = e.target.result;
    //   };
    //   reader.readAsDataURL(file);
    // },
    // removeImage: function (e) {
    //   this.image = '';
    // }
  }
})
</script>

<style scoped>

.butreg {
  width: 120px;
  border-radius: 10px;
  border-width: 0;
  background: #f05f40;
  color: lightgrey;
  box-shadow: 0 2px 5px #000000;
  padding: 1px;
  margin: auto;
}

.butreg:hover {
  background-color: lightgrey;
  color: #f05f40;
  transition: 300ms ease-out;
}

.buthomepag {
  width: 150px;
  border-radius: 10px;
  border-width: 0;
  background: #f05f40;
  color: lightgrey;
  box-shadow: 0 2px 5px #000000;
  padding: 1px;
  margin-left: 20px;

}

.buthomepag:hover {
  background-color: lightgrey;
  color: #f05f40;
  transition: 300ms ease-out;
}
</style>