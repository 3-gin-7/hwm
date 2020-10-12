<template>
    <div class="treatBox" v-bind:class="{treatBoxActive:isClicked}" onselectstart="return false">
        <div class="treatBox-container">

        <h1 class="treatBoxTitle">{{treat.title}}</h1>

        <div class="treatBoxInfo">
            <p>{{treat.description}}</p>
            <p v-on:click="showExtra()" id="ReadMore">Read More...</p>
            <div v-html="treat.price" class="price"></div>
            <div class="extraThings" v-bind:class="{active:this.isClicked}" v-html="treat.extraInfo"></div>
            
        </div>

        </div>
    </div>
</template>

<script>
export default {
    name:'Treatment',
    props:{
        treat: Object
    },
    methods:{
        showExtra(){
            this.isClicked = !this.isClicked;
        }
    },
    data(){
        return({
            isClicked:false
        });
    }
}
</script>

<style scoped>
    .treatBox{
        width:75%;
        margin:auto;
        margin-bottom:40px;
        box-shadow:5px 5px 10px rgb(112, 112, 112);
        transition: all 0.5s ease;
        background: rgba(255, 255, 255, 0.445);
    }

    .treatBox-container{
        min-height:40vh;
        width:80%;
        margin:auto;
        display: flex;
        flex-direction: column;
        
    }

    .treatBoxTitle{
        font-size:2rem;
        text-align:center;
        padding:10px 0px 50px 0px;
    }

    .treatBoxInfo{
        padding:20px 0px;
    }

    .treatBoxInfo >p{
        text-align: center;
        font-size:1.6rem;
        padding:5px 0px;
    }
    
    #ReadMore{
        font-size: 1.2rem;
        cursor: pointer;
        color:lightgreen;
        transition:all 0.5s ease;
    }

    #ReadMore:hover{
        color:rgb(69, 87, 56);
    }

    .price{
        padding: 10px 0px;
        width:100%;
        text-align: center;
        font-style: italic;
    }

    .extraThings{
        width:100%;
        font-size: 1.2rem;
        height: 0px;
        opacity:0;
        overflow: hidden;
        transition: opacity 0.5s linear;
    }

    .active{
        opacity:1;
        height:auto;
        padding: 10px 0px;
    }
    
    @media only screen and (max-width:760px) {
        .treatBox-container{
            min-height:35vh;
        }
                
    }
    
</style>