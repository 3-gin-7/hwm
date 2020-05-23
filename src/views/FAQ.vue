<template>
  <div class="container">
      <div class="faq-header">FAQ</div>
      <div v-bind:key = "faq.id" v-for="faq in faqs" class="faq-container">
          <Faq v-bind:faq ="faq"/>
      </div>
  </div>
</template>

<script>
import Faq from "../components/Faq.vue"
export default {
 name:"FAQ",
 components:{
     Faq
 },
 data(){
     return{
         faqs:[
             {
                 id:"1",
                 quest:"Can I eat before the treatment ?",
                 ans:"It is not recommended unless you ate 1,5-2 hours before the treatment as"+
                     "it can create some problems with digestion of food, nausea and even vomiting."
             },
             {
                 id:"2",
                 quest:"Can I do any physical activities, such as gym workout or swimming, after the massage ?",
                 ans:"It is not a good idea to do physical activities the same day."+
                 "Rather, let your body rest and do the workout next day."
             },
             {
                 id:"3",
                 quest:"Can I consume alcohol before the treatment ?",
                 ans:"No. Consuming alcohol before the treatment can result in the following: "+
                 "Numbed senses, Amplified drunkness, intensified hangovers and can cancel-out the positive effects of the treatment"
             },
             {
                 id:"4",
                 quest:"Can I have a massage if I have a problem with blood pressure ?",
                 ans:"Yes if you take the prescribed medicine. For more information check out the Policy "+
                 "where indications and contraindications are described."
             },
             {
                 id:"5",
                 quest:"How many massage treatments do I need?",
                 ans:"It depends on your body condition. Different issues take different time. As in general"+
                 "it is recommended to have treatment at least once a week and after your body issues have been resolved, once a month for maintenance."
             }
         ]
     }
 }

}
</script>

<style scoped>
    .container{
        min-height: 100vh;
    }

    .faq-header{
        text-align: center;
        font-size:2rem;
    }

    .faq-container{
        margin-top:30px;
    }

    

</style>