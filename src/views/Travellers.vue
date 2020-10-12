<template>

  <div class="container">
      <div class="heading">Travellers</div>
      <div class="traveller-bg">

          <div class="intro">
              <h2>Executive treatment for travellers</h2>
              <span>Nobody likes long haul flights. They are stuffy, boring and 
                      generally make your body feel pretty terrible. While you acclimatize 
                      to your new time zone, you might also suffer from swelling, dehydration 
                      and general tiredness. Be kind to yourself and make sure that once you check-in 
                      to your hotel or make it back home, you can book yourself a post-flight massage.
                      Whether you prefer a Swedish massage or a full body Thai yoga treatment it doesn’t
                      matter, any kind of stimulation to your muscles in a considered way will have you 
                      feeling better in no time. If you’re not sure that lying down for an hour on a 
                      massage table will make you feel better, here are 5 reasons to convince you.
              </span>
          </div>
          <div class="content">
              <div>
                  <h2>1) It will help with fluid retention</h2>
                  <span>A full body massage is a great way to flush toxins out of your 
                      system and more beneficial when you’ve been on a long flight. After hours in the air, 
                      fluid can build up in the body, 
                      possibly causing you pain and discomfort. A professional masseuse will 
                      manipulate your body’s lymph system to help drain the fluid 
                      and get you feeling better again.
                  </span>
              </div>
              <div>
                  <h2>2) Your muscles will thank you</h2>
                  <span>Airplane seats are renowned for being uncomfortable and sitting for 
                      long periods of time anywhere is never good for your body. Joint tension and 
                      poor circulation are the main concerns of post flight travellers. 
                      Luckily a massage may help to fix those issues.
                  </span>
              </div>
              <div>
                  <h2>3) It will help to rehydrate you</h2>
                  <span>Airplane toilets and small drinking cups are both factors that hold 
                      people back from keeping hydrated during a flight and this paired with 
                      the poor air systems make dehydration a major concern. A massage will 
                      help to increase your blood flow and massage oils can help 
                      to add moisture back into the skin.
                  </span>
              </div>
              <div>
                  <h2>4) You can say goodbye to stress</h2>
                  <span>Travel angst is a very real thing. The physical and emotional stress 
                        build up quickly over time. One of the most well known benefit of massages
                        is the stress relief. You will feel calm, focused and refreshed again.
                  </span>
              </div>
              <div>
                  <h2>5) It can minimize your jet lag</h2>
                  <span>Jet lag is probably the main cause for nausea, dehydration, tiredness and 
                      irritability and more. Massage 
                      is one of the best things you can do to combat these problems, as it 
                      helps to rid your body of all its discomforts, making it easier to 
                      adjust to your new time zone.
                  </span>
              </div>
          </div> <!-- end of content -->
          <div class="conclude">
              <span>
                We offer our guests a pick up service from the airport to the 
                massage studio and return trip to either the airport or their hotel.
              </span>
              <span>
                You should book in advance and the price in request.
              </span>
          </div>

      </div> <!-- end of background -->
  </div> <!-- end of container -->
</template>

<script>
export default {

}
</script>

<style scoped>
    span{
        display: block;
    }
    .container{
        min-height:100vh;
    }

    .heading{
        text-align:center;
        font-size: 2rem;
    }
    
    .traveller-bg{
        padding:5%;
        width:100%;
        min-height:100vh;
        background-position: center;
        background-size:     cover;
        background-repeat:   no-repeat no-repeat;
        background-image:    linear-gradient(rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0.4)), url("../assets/travelBg.jpg");
    }

    .intro{
        margin-bottom: 100px;
    }

    .intro>h2{
        font-size:1.7rem;
        margin-bottom:20px;
    }

    .intro>span{
        font-size:1.2rem;
        line-height: 1.7rem;
        padding-left:20px;
    }

    .content>div{
        margin-bottom:30px;
    }

    .content>div>h2{
        font-size:1.4rem;
        margin-bottom: 5px;
    }

    .content>div>span{
        padding-left:20px;
        font-size:1.1rem;
        line-height: 1.6rem;
    }

    .conclude>span{
        padding: 10px 0;
        font-size:1.2rem;
    }


</style>