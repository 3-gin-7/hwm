<template>
    <div class="container">
        <div class="treat-header">Treatments</div>
        <div class="discount-container">
            <div class="discount">

                <div class="discount-info">
                <h3>Buying any 5 massages</h3>
                <p>When buying 5 massages you get 5% off. Valid for 7 weeks</p>
                </div>

                <div class="discount-info">
                <h3>Buying 10 massages</h3>
                <p>When buying 10 massages you get 10% off. Valid for 12 weeks</p>
                </div>

            </div>
        </div>
        <div class="bg">
        <div v-bind:key = "treat.id" v-for="treat in treats">
            <Treatment v-bind:treat ="treat"/>
        </div>
        </div>
        <Top/>
    </div>
</template>

<script>
import Treatment from '../components/Treatment.vue';
import Top from '../components/TopButton.vue';

export default {
    name:"Treatment-page",
    components:{
        Treatment,
        Top
    },
    data(){
        return{
            treats:[
            {
            id:1,
            title:"Back, Neck & Shoulder Massage",
            description:"This massage focuses purely on the back and shoulder areas to relieve tension of these commonly overstressed muscles.",
            price:"<p>30min/R250</p><p>45min/R300</p>",
            extraInfo:"This type of massage can encourage relaxation, relieve stress, improve blood circulation, relieving headaches and improving flexibility."
            },
            {
            id:2,
            title:"Reflexology (Thai Routine)",
            description:"This massage is an alternative medical practice involving the application of pressure to specific points on hands and feet.",
            price:"<p>45min/R350</p>",
            extraInfo:"Reflexology can help with relaxation, increase blood circulation, body detoxification, improve nerve function and brain power and boost metabolism and energy levels. Treatment starts with soaking feet in the aroma salt bath."
            },
            {
            id:3,
            title:"Lomi-Lomi",
            description:"Lomi lomi is a traditional Hawaiian massage that uses a combination of massage techniques and nut oils",
            price:"<p>60min/R500</p><p>90 min/R570</p>",
            extraInfo:"The benefits of Lomi-Lomi massage include relaxing muscles, promoting circulation and releasing blocked energy."
            },
            {
            id:4,
            title:"Swedish",
            description:"With long gliding strokes, this massage relaxes the body and relieves the stress and pressure.",
            price:"<p>60min/R500</p><p>90min/R550</p>",
            extraInfo:"Swedish massage has many benefits to overall physical and mental state of the body. Swedish massage provides relaxation, reduces stress, increases flexibility, improves posture and blood circulation."
            },
            {
            id:5,
            title:"Deep Tissue/SportMassage",
            description:"Deep tissue massage applies the same strokes as Swedish massage but with more pressure in order to reach deep muscle tissue.",
            price:"<p>60min/R550</p><p>90min/R600</p>",
            extraInfo:"This type of massage helps to improve low back pain, limited mobility, postural problems, muscle tension osteoarthritis pain, aid sport-related muscle recovery and aids injury rehabilitation."
            },
            {
            id:6,
            title:"Aromatherapy",
            description:"Aromatherapy utilizes, gentle massage as well as essential oils in order to improve physical and psychological health.",
            price:"<p>60min/R550</p><p>90min/R580</p>",
            extraInfo:"Aromatherapy helps to improve sleep quality, boost immune system, reduce stress and irritation and manage pain."
            },
            {
            id:7,
            title:"Remedial",
            description:"The main purpose of remedial massage is to find and heal the areas of the body that are damaged as well as speed up the natural body repairing process",
            price:"<p>90min/R600</p>",
            extraInfo:"Remedial massage is a mix of techniques such as neuromuscular technique, post-isometric relaxation, reciprocal inhibition, proprioceptive neuromuscular facilitation, soft tissue release and connective tissue manipulation. This massage is beneficial to the athletes and people who sufferer from high stress and tension."
            },
            {
            id:8,
            title:"Thai Yoga Massage",
            description:"This massage is mix of different techniques that include osteopathic stretches and assisted yoga postures that can help athletes with sport related issues and increase sport performance.",
            price:"<p>90min/R600</p>",
            extraInfo:"Thai Yoga massage helps to increase flexibility, relieve pain and muscle tension, improve the range of motion, relax and relieve stress, improve range of motion, improve circulation and lymphatic flow, reduce headaches and increase energy levels."
            },
            {
            id:9,
            title:"CBD(Cannabidiol) Massage",
            description:"A CBD massage treatment involves CBD tea(before the massage) + CBD oil(that is infused with MCT) and mixed with Frankincense, Peppermint, Orange and Lavender oils. The treatment helps with multiple pain-related conditions",
            price:"<p>75min/R650</p>",
            extraInfo:"CBD has no THC therefore it has no drug effect and government approved. CBD has healing properties and moisturizes without clogging pores whilst being good for all skin types, including oily skin as it is sebum regulating and will not make skin more oily. CBD helps with skin conditions like Eczema and Psoriasis and dry skin."
            },
            {
            id:10,
            title:"Laser",
            description:"This kind of treatment uses focused light that is tuned to specific wavelengths in order to treat a wide variety of issues.",
            price:"<p>after consultation</p>",
            extraInfo:"Laser is used to help in the following areas:"+
            "<ul class='list'>"+
            "<li>Cardiology: angina, hypertension, cardiovascular diseases</li>"+
            "<li>Otorhinolaryngology: tonsillitis, inflammatory of larynx, nose and ears</li>"+
            "<li>Gastroenterology: stomach and duodenum ulsters, gastritis, gastroduodenitis </li>"+
            "<li>Dermatology: psoriasis, dermatitis, eczemas, abscess, herpes, acnes</li>"+
            "<li>Pulmonology: inflammatory processes of airways, bronchitis, bronchial asthma</li>"+
            "<li>Gynecology: mastitis, cervical sores, erosions</li>"+
            "<li>Proctology & urology: prostatitis, proctitis, urinary diseases</li>"+
            "<li>Neurology: diseases of peripheral nervous system, radiculitis, neuralgia</li>"+
            "<li>Arthrology: diseases of joints, muscles, spine, arthritis, arthrosis</li>"+
            "<li>Dentistry/odontology: parodontitis, gingivitis, stomatitis, pulpitis</li>" +
            "<li>Traumatology: bone fractures, wounds injuries, burns, scalds, bedsores, sprains</li>" +
            "<li>Varicose: enlargement of veins, trophic ulcers</li>" +
            "<li>Sport & military medicine: muscles, tendons and ligaments sprains, pain of spine/joints</li>" +
            "</ul>"
            },
            {
            id:11,
            title:"Cupping",
            description:"Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin for a few minutes to create suction that can help relax muscles, relief pain and part of cellulite treatment.",
            price:"<p>60min/R550</p><p>90min/R580</p>",
            extraInfo:"Cupping can have the following benefits on your body:"+
            "<ul class='list'>"+
            "<li>Muscle relaxation</li>"+
            "<li>Local pain relieve</li>"+
            "<li>Reduced inflammation</li>"+
            "<li>Breaks up scar tissue</li>"+
            "<li>Lymphatic drainage</li>"+
            "</ul>"
            },
            {
            id:12,
            title:"Mother-To-Be",
            description:"A massage using specific prenatal techniques, to help increase circulation, alleviate tired muscles and relieve mental and physical fatigue.",
            price:"<p>60min/R500</p>",
            extraInfo:"This treatment can help to lower anxiety, decrease back and leg pain, improve sleep and decrease stress.The treatment can only be performed after 15 weeks of pregnancy"
            }
            ]
        }
    }
}
</script>

<style scoped>

.container{
    width:100%;
    min-height:100vh;
}

.bg{
    background: url("../assets/treatBg2.jpg");
    top:0;
    width:100%;
    height:100%;
    z-index: -1;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 30px 0px;
}

.treat-header{
    width:100%;
    background: #F2F1F1;
    text-align:center;
    font-size:2rem;
    padding:10px 0 0 0;
}

.discount-container{
    height:70vh;
    background-color:#FFC56C;
    display: flex;
    align-items: center;
    justify-content: center;
}

.discount{
    text-align:center;
    height:70%;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
}

.discount-info>h3{
    font-size:1.6rem;
    padding:20px 0; 
}

.discount-info>p{
    font-size:1.5rem;
}
</style>