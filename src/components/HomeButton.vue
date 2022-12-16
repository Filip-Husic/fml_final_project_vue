<script>
  export default {
    data() {
      return {}
    },
    methods: {
      button() {
        let mybutton = document.getElementById("myBtn");
        window.onscroll = function () {
          scrollFunction()
        }
      },
      scrollFunction(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
          mybutton.style.display="block";
        }else {
          mybutton.style.display = "none";
        }
      },
      topFunction(){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

    }
  }
</script>

<template>
<!--      <a href="#">-->
<!--        <button-->
<!--            type="button"-->
<!--            class="btn btn-danger btn-floating btn-lg"-->
<!--            id="btn-back-to-top">-->
<!--          Back to top ^-->
<!--        </button>-->
<!--      </a>-->

<!--      <a href="#">-->
<!--        <button-->
<!--            type="button"-->
<!--            class="btn btn-danger btn-floating btn-lg"-->
<!--            id="myBtn">-->
<!--          ^-->
<!--        </button>-->
<!--      </a>-->

    <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
</template>

<style scoped>

  /*#btn-back-to-top {*/
  /*  position: fixed;*/
  /*  bottom: 20px;*/
  /*  right: 20px;*/
  /*}*/
  #myBtn {
      display: none; /* Hidden by default */
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
  }

  #myBtn:hover {
    background-color: magenta; /* Add a dark-grey background on hover */
    transition: 500ms ease-out;
  }

</style>