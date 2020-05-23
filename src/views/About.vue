<template>
    <div class="container">
      <h1 class="about-heading">LARA MAIER</h1>
      <div class="info-container">
        <div class="photo-container">
          <img id="photo" src="../assets/Lara[443].jpg" alt="photo" />
        </div>
        <div class="info">
          <div class="text-container">
            <p>
              A massage is not just a treatment but art that can improve and
              develop everyone‘s physical and emotional condition.
            </p>
            <p>
              After a long experience in different fields of sport and completing a
              Sport Science Degree I decided to help people who have
              disabilities and bring them back to an active life by creating
              rehabilitation programs that include massage sessions.
            </p>
            <p>
              After several years of experience as a biokinetics I’ve realized
              how powerful massage can be and decided to walk this path. I’ve
              completed additional courses for Remedial & Sport massage,
              Lomi-Lomi, Reflexology (Thai routine) Thai Yoga Massage and it`s
              my plan to study abroad in the future to develop new skills that
              can help people improve their conditions.
            </p>
            <p>
              I update and upgrade my knowledge frequently. My mission is
              to educate people about their body anatomy, physiology, psychology
              and to help them in finding the right physical activity and life
              style.
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.container {
  background:rgba(255, 196, 108, 0.363);
  height: 100vh;
  border-radius: 10px;
}

.about-heading {
  font-size: 2rem;
  width: 100%;
  text-align: center;
  height: 7%;
  padding: 10px;
}

.info-container {
  padding-top: 50px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: stretch;
  height: 93%;
}

.photo-container {
  flex: 1;
  margin: auto;
  justify-content: center;
  align-items: center;
}

#photo {
  width: 70%;
  height: 70%;
  transition: all 1s ease;
  border-radius: 5px;
}

#photo:hover {
  opacity: 0.8;
}

.info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.text-container {
  width: 70%;
  font-size: 1.2rem;
}

.text-container>h1{
  width:100%;
  font-size:1.4rem;
  text-align:center;  
}

.text-container p {
  padding: 10px; 
  line-height: 1.4rem; 
}

@media only screen and (max-width: 1200px){
  html{
    font-size:14px;
  }

  .text-container{
    width:85%;
  }
}

@media only screen and (max-width: 1024px) {
  .container{
    height: auto;
    padding-bottom: 30px;
  }

  .info-container{
    flex-direction:column;
  }

  .text-container{
    padding-top:100px;
    width:50%;
  }

  #photo {
  width: 300px;
  height: 300px;
  }

  .text-container p {
  line-height: 1.8rem; 
  }
}

@media only screen and (max-width:730px){
  .text-container{
    width: 80%;
  }
}

@media only screen and (max-width:360px){
  #photo {
  width: 200px;
  height: 200px;
  }
}
</style>
