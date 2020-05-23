<template>
  <div class="btn-container" v-bind:class="{'visible':this.visibleBtn}">
      <div class="btn" v-on:click="goTop()">
            UP
      </div>
  </div>
</template>

<script>
export default {
    name:"TopButton",
    data(){
        return{
            visibleBtn:false
        }
        },
    methods:{
        goTop(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            },
        handleScroll(){
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                this.visibleBtn = true;
            } else {
                this.visibleBtn = false;
            }
            }
        },
    created () {
        window.addEventListener('scroll', this.handleScroll);
        },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
        }
}
</script>

<style scoped>
    .btn-container{
        position: fixed;
        bottom:20px;
        width:90%;
        height:50px;
        padding-right:5px;
        display: none;
    }
    .btn{
        background-color: #FFC56C;
        width:50px;
        height:50px;
        border:none;
        border-radius: 50%;
        color:black;
        float:right;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    .btn:hover{
        background-color: rgb(194, 149, 82);
    }
    .visible{
        display:block;
    }
</style>