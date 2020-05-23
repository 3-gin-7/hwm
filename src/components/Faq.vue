<template>
  <div>
      <div class="faq">
          <div class="quest">
              <p>{{faq.quest}}</p>
              <p class="plus" v-on:click ="showAns()">+</p>
          </div>
          <div class="ans" v-bind:class="{'ans-active':this.isClicked}">
              {{faq.ans}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"faq",
    props:{
        faq: Object
    },
    data(){
        return{
            isClicked:false
        }
    },
    methods:{
        showAns(){
            this.isClicked = !this.isClicked;
        }
    }
}
</script>

<style scoped>
    *{
        font-size:1.3rem;
    }

    .faq{
        width:80%;
        margin:auto;
        background: #FFC56C;
        border:solid rgba(119, 119, 119, 0.336) 1px;
        height: auto;
        padding:30px 0px;
    }

    .quest{
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0px 30px;
    }

    .plus{
        font-size:2rem;
        cursor:pointer;
    }

    .ans{
        height: 0;
        padding-left:30px;
        visibility: hidden;
        opacity: 0;
        transition:height 0.5s, visibility 0s, opacity 0.6s linear;
    }

    .ans-active{
        height: 15vh;
        opacity: 1;
        visibility: visible;
    }
</style>