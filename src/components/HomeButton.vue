<script>
  import { defineComponent } from "vue";
  import debounce from "lodash/debounce";

  export default defineComponent({
    data() {
      return {
        handleDebouncedScroll: null,
      };
    },
    mounted() {
      // window.addEventListener("scroll", this.handleScroll);
      this.handleDebouncedScroll = debounce(this.handleScroll, 200);
      window.addEventListener("scroll", this.handleDebouncedScroll);
    },

    beforeUnmount() {
      // window.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("scroll", this.handleDebouncedScroll);
    },

    methods: {
      handleScroll() {
          const scrollBtn = this.$refs.scrollTopButton;
          // after when will the Button for the Top appear
          if (window.scrollY > 50) {
            scrollBtn.classList.remove("invisible");
          } else {
            scrollBtn.classList.add("invisible");
          }
        },
      //method for smooth automatically scrolling back to the Top of web
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },

    }
  });
</script>

<template>
  <!-- added class invisible so its invisible initially -->
  <button id="goTopBtn"
          ref="scrollTopButton"
          class="invisible"
          @click="scrollToTop"
          role="button"
          aria-label="scroll to top of the page">
    <font-awesome-icon icon="fa-solid fa-arrow-up" />
  </button>

</template>

<style scoped>
  #goTopBtn {
    /*display: none; !* Hidden by default *!*/
    position: fixed; /* Fixed/sticky position */
    bottom: 20px; /* Place the button at the bottom of the page */
    right: 30px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none;
    outline: none;
    background-color: #f05f40;
    color: lightgrey; /*color of the arrow*/
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;
    font-size: 18px;
    box-shadow: 0px 2px 10px black; /* Adds shadows around the button*/
    transition: 300ms ease;
  }

  #goTopBtn:hover {
    background-color: lightgrey;
    color: #f05f40;
    transition: 300ms ease-out;
  }
</style>