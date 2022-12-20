<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1>About us</h1>
    <font-awesome-icon icon="fa-solid fa-chevron-down" />
    <p>This project was made with lots of hard work, love and a few bugs by:</p>


    <article class="about left">
      <img src="images/lana.webp" class="lanaimg"/>
<!--      <img src="images/matija.jpg" class="lanaimg"/>-->
      <quote>Works in HT from 22.01.2020 <br>
        She started as an operator in the Call Center in Zagreb in the Department for Sales to Small Business Users.<br>
        The last position before applying to the Career Shifter program -> Specialist for Premium support for business users.<br>
        Plays music in her free time, is an introverted extrovert and a big Harry Potter fan.<br>
        She's persistent, hardworking and tireless.
      </quote>
      <div class="clear"/>
      <h3 class="leftText">Lana Pavić</h3>
    </article>

    <div class="clear"/>

    <article class="about right">
      <img src="images/matija.jpg" class="matijaimg"/>
      <quote>Last position before applying for Career Shift: Customer Care Agent of the Technical Service of HT. <br>
        Likes to constantly improve his skills and learn new things.<br>
        Hobbies: walking the dogs, bothering the cat, gaming and technology in general.
      </quote>
      <div class="clear"/>
      <h3 class="rightText">Matija Bevandić</h3>
    </article>

    <div class="clear"/>

    <article class="about left">
      <img src="images/filip.jpg" class="filipimg"/>
      <!--      <img src="images/matija.jpg" class="lanaimg"/>-->
      <quote> Works in HT from 2020, last position before applying to the Career Shifter program -> Superior call centre agent for business users.
        <br>
        Interested in finding new ways to solve problems, great in a team. <br>
        Loves everything related to computers and technology. <br>
        Passionate gamer and loves working on his car.
      </quote>
      <div class="clear"/>
      <h3 class="leftText">Filip Husić</h3>
    </article>

    <div class="clear"/>

    <p><a href="https://github.com/Filip-Husic/fml_final_project_vue" target="_blank">Frontend part of this project on github</a></p>
    <p><a href="https://github.com/Filip-Husic/fml_final_project_spring" target="_blank">Backend part of this project on github</a></p>
  </div>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style scoped>
/* define the boundaries of article*/
  article{
    width: 1000px;
    margin: 0 auto;
  }
  .clear{
    clear: both;
  }
/* .about is class for us FML*/
  .about {   margin-top: 20px;}
  .about img {
    border-radius: 50%;
    margin: 0 auto;
    display: block;
    width: 150px;
  }
  .about h3 { text-align: center;}
  /* LANA & FILIP on the left side*/
  .left img{
    float: left;
    margin-top:60px;
  }
  .leftText{
    float:left;
    margin-bottom: 30px;
    margin-left: 15px;
  }
  /*MATIJA on the right side*/
  .right img{
    float: right;
    margin-top: 30px;
    margin-right: 15px;
    margin-left: 30px;
  }
  .rightText{
    float: right;
    margin-top: 10px;
  }
/* Quote adding " " .img before and after */
  .about quote:before{
    content: url('images/quote_sign_left.png');
    position: relative;
    left: -10px;
  }
  .about quote:after {
    content: url('images/quote_sign_right.png');
    position: absolute;
  }
  .about quote {
    width: 800px;
    float: right;
    margin-top: 50px;
    text-align: center;
    padding: 20px;
    background: #f9f9f9;
    color: #888888;
    display: block;
    font-style: italic;
  }


</style>