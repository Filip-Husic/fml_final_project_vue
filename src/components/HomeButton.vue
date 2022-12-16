<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },

    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },

    methods: {
      handleScroll() {
        const scrollBtn = this.$refs.scrollTopButton;

        if (window.scrollY > 50) {
          scrollBtn.classList.remove("invisible");
        } else {
          scrollBtn.classList.add("invisible");
        }
      },
      // When the user clicks on the button, scroll to the top of the document
      topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    },

  });
</script>

<template>
    <a href="#" ref="scrollTopButton">
      <button class="myBtn" href="#">
        ^
      </button>
    </a>
</template>

<style>
  .myBtn {
    /*display: none; !* Hidden by default *!*/
    position: fixed; /* Fixed/sticky position */
    bottom: 20px; /* Place the button at the bottom of the page */
    right: 30px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    background-color: red; /* Set a background color */
    color: white; /* Text color */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 15px; /* Some padding */
    border-radius: 10px; /* Rounded corners */
    font-size: 18px; /* Increase font size */
    box-shadow: 0px 2px 10px black; /* Adds shadows around the button*/
    transition: 500ms ease;
  }

  .myBtn:hover {
    background-color: magenta; /* Add a dark-grey background on hover */
    transition: 300ms ease-out;
  }
</style>