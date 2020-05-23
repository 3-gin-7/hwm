<template>
  <div class="container">
      <div id="contact-img"></div>
      <div class="contact-info-container">
          <div class="contact-info">
              <div>
              <h1>Contact Details</h1>
              <h2>Lara Maier</h2>
              <span>Cell: (+27)677050079 (Whatsapp Only)</span>
              <br>
              <span>Email:maierlgv@gmail.com</span>
              </div>
              <div>
              <h1>Working Hours</h1>
              <span>05:30 - 19:00 Mon-Fri</span>
              <br>
              <span>05:30 - 19:00 Sat-Sun</span>
              <br>
              <span>Locatated in Gauteng, Edenvale</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .container{
        height: 100vh;
        display: flex;
    }

    #contact-img{
        flex:1;
        width:100%;
        height:100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(../assets/contact.jpg);
    }

    .contact-info-container{
        flex:1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contact-info{
        width:100%;
        height:100%;
        background: #FFC56C;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding:20px;
    }

    .contact-info > div>h1{
        font-size: 2rem;
        text-align: center;
        padding-bottom: 10px;
    }

    .contact-info > div>span{
        font-size: 1.2rem;
        line-height: 40px;
    }

    @media only screen and (max-width: 760px){
        #contact-img{
            display: none;
        }
    }

</style>