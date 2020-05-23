<template>
  <div class="container">
      <h1 id="main-heading">Policy</h1>
      <div class="policy-info-container">

        <ul class="main-list">
          <li class="main-list-item">
              A 24 hour notice period is required for cancellation and rescheduling. If a treatment
            is not cancelled within that time frame, full treatment fee will be charged with no refund
          </li>
          <li class="main-list-item">
            No treatments are offered to people with the following conditions:
            <ul class="policy-list">
              <li>Untreated high blood pressure</li>
              <li>Chronic heart conditions</li>
              <li>Recent major surgery</li>
              <li>Major recent muscle or joint injuries</li>
              <li>Sinusitis</li>
              <li>Pregnancy before 15 weeks</li>
              <li>Epilepsy</li>
              <li>Diabetes (needs medical referral)</li>
              <li>Eczema or Psoriasis (needs medical referral)</li>
              <li>Sunburn</li>
            </ul>
          </li>
          <li class="main-list-item">
            Extra things you need to know:
            <ul class="policy-list">
              <li>Ensure cellular phones are switched off during treatments.</li>
              <li>All prices and information are subject to revision without prior notice.</li>
              <li>Inform your therapist if you are pregnant,have any allergies, medical conditions or on any medications.</li>
              <li>Late arrivals will result in a reduction in treatment time whilst the full treatment fee will apply.</li>
            </ul>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:"Policies"
}
</script>

<style scoped>
  ul{
    list-style: none;
  }

  li{
    font-size:1.3rem;
  }

  .container{
    height:130vh;
    background:#FFC56C;
  }
  
  #main-heading{
    text-align: center;
    font-size: 2rem;
    padding:10px;
  }

  .main-list{
    list-style-type:decimal;
  }

  .main-list-item{
    padding:10px 0;
    font-size: 1.3rem;
  }

  .policy-list{
    padding:20px 0px 0 40px;
    list-style-type: disc;
  }

  .policy-list>li{
    font-size:1.1rem;
  }

  .policy-info-container{
    padding-top:5%;
    width:60%;
    margin:auto;
    line-height: 30px;
  }

  @media only screen and (max-width:760px){
    .container{
      height:auto;
    }
  }
</style>