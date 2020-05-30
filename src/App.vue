<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <img src="./assets/logo-1.svg" alt="logo" srcset="">
        <p>HWM</p>
        </div>
            <ul class="nav-bar" v-bind:class="{'active': this.isClicked}">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/treatments">Treatments</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li><router-link to="/policies">Policies</router-link></li>
                <li><router-link to="/faq">FAQ</router-link></li>
            </ul>
        <div class="burger" v-on:click="this.navClick">
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:"App",
  data(){
    return{
      isClicked: false
    }
  },
  methods:{
    navClick(){
      this.isClicked = !this.isClicked
    }
  }
}
</script>

<style>
.price p{
        font-size:1.2rem;
    }

.list{
  padding-top:20px;
}

.list>li{
  line-height: 1.5em;
}

* , html{
  margin:0px;
  padding:0px;
  box-sizing:border-box;
  font-family: 'Spartan', sans-serif;
  font-size: 16px;
}

html{
  height: 100%;
}

body{
  background:#F2F1F1;
  padding: 0 5% 5% 5%;
  overflow-x: hidden;
}

a{
    color: inherit;
    text-decoration:none;
}

#app{
  overflow-x:hidden;
}

.header{
    width:100%;
    min-height:15vh;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background: #F2F1F1;
}

.nav-bar{
    flex:1;
    z-index:1;
    font-size:0.9rem;
    font-weight: 300;
    list-style: none;
    display: flex;
    justify-content: space-between;
}

.nav-bar > li{
    display: inline;
    cursor:pointer;
    transition: all 0.5s;
}

.nav-bar> li:hover{
    color:grey;
}

.container{
    width:100%;
}

.logo{
  display: flex;
  align-items: center;
  flex:1;
}

.logo>img{
  width: 150px;
  height:150px;
}

.logo>p{
  font-size: 2rem;
  padding:10px;
  color:#203567;
}


.burger{
  cursor: pointer;
  width:50px;
  height:50px;
  display: none;
}

.burger>span{
  display: block;
  width:50px;
  height: 3px;
  background: #000;
  margin-top:10px;
}

@media only screen and (max-width:1200px){
  html{
    font-size: 14px;
  }
}

@media screen and (max-width:1024px){
  html{
    font-size:12px;
  }

  .header{
    justify-content: space-between;
  }

  .nav-bar{
    position: absolute;
    top:15vh;
    right:5%;
    flex-direction: column;
    background: rgba(242, 241, 241, 0.822);
    padding:10% 0;
    height:100vh;
    width:40%;
    align-items: center;
    transform: translateX(120%);
    transition: all 0.5s ease;
  }

  .burger{
    display: block;
  }

  .active{
  transform:translateX(0%);
}
}

@media only screen and (max-width:760px){
  html{
    font-size: 10px;
  }
}

</style>
