<template>
  <div class="container">
    <div class="home-bg">
      <div class="main-heading-container">
        <h1 id="main-heading">THE HOUSE OF WORLD MASSAGES</h1>
        <h3 id="main-sub-heading">A massage is not just a treatment but art that can improve everyone`s physical and emotional conditions</h3>
      </div>
    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
//import Header from '../components/layouts/Header.vue';
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
.container{
  height:100vh;
}

.main-heading-container{
  background: rgba(255, 255, 255, 0.1);
  padding:10px;
  box-shadow: 10px 10px 5px rgba(128, 128, 128, 0.445);
  text-align:center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height:20%;
}

#main-heading{
  font-size:3rem;
}

#main-sub-heading{
  font-style: italic;
  font-size:1.3rem;
}

.home-bg{
  width:100%;
  height:100%;
  background-image: url('../assets/homeImage.jpg');
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  display:flex;
  align-items:center;
  justify-content: center;
  padding:0px 50px;
}

@media only screen and (max-width:1024px){
  .main-heading-container{
    height: auto;
  }

  #main-sub-heading{
    padding-top:30px;
  }
}

</style>