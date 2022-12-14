<template>
  <input type="checkbox" id="darkmode-toggle"/>Toggle dark mode
  <label for="darkmode-toggle">
  </label>
  <p class="toggle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi consequuntur, dignissimos enim itaque laudantium
    magni nemo obcaecati odio officiis, placeat quibusdam quidem quisquam repellendus saepe temporibus veritatis vitae
    voluptates.</p>

</template>

<script>
export default {
  name: "DarkModeToggle"
}
let toggle = document.querySelector("#dark-mode-toggle")
</script>

<style scoped>
label {
  width:100px;
  height:50px;
  position: relative;
  display: block;
  background: #ebebeb;
  border-radius: 100px;
  box-shadow: inset 0px 5px 15px rgba(0,0,0,0.4), inset 0px -5px 15px rgba(255,255,255,0.4);
  cursor: pointer;
}
label:after {
  content: "";
  width:30px;
  height: 30px;
  position: absolute;
  top:10px;
  left:10px;
  background: linear-gradient(180deg,#ffcc89,#d8860b);
  border-radius: 180px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
}
input {
  width: 0;
  height: 0;
  visibility: hidden;
}
input:checked + label {
  background: #242424;
}
input:checked + label:after {
  left:90px;
  transform: translateX(-100%);
  background: linear-gradient(180deg,#777,#3a3a3a);
}
label, label:after {
  transition: 0.3s
}
label:active:after{
   width: 50px;
 }
input:checked + label + .toggle {
  background:#242424;
  color: white;
}
</style>