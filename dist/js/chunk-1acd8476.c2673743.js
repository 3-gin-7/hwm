(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1acd8476"],{a228:function(e,i,t){},b0a0:function(e,i,t){"use strict";var s=t("ff6f"),a=t.n(s);a.a},c11d:function(e,i,t){"use strict";var s=t("eb3f"),a=t.n(s);a.a},de7f:function(e,i,t){"use strict";t.r(i);var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"container"},[t("div",{staticClass:"treat-header"},[e._v("Treatments")]),e._m(0),t("div",{staticClass:"bg"},e._l(e.treats,(function(e){return t("div",{key:e.id},[t("Treatment",{attrs:{treat:e}})],1)})),0),t("Top")],1)},a=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"discount-container"},[t("div",{staticClass:"discount"},[t("div",{staticClass:"discount-info"},[t("h3",[e._v("Buying any 5 massages")]),t("p",[e._v("When buying 5 massages you get 5% off. Valid for 7 weeks")])]),t("div",{staticClass:"discount-info"},[t("h3",[e._v("Buying 10 massages")]),t("p",[e._v("When buying 10 massages you get 10% off. Valid for 12 weeks")])])])])}],n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"treatBox",class:{treatBoxActive:e.isClicked},attrs:{onselectstart:"return false"}},[t("div",{staticClass:"treatBox-container"},[t("h1",{staticClass:"treatBoxTitle"},[e._v(e._s(e.treat.title))]),t("div",{staticClass:"treatBoxInfo"},[t("p",[e._v(e._s(e.treat.description))]),t("p",{attrs:{id:"ReadMore"},on:{click:function(i){return e.showExtra()}}},[e._v("Read More...")]),t("div",{staticClass:"price",domProps:{innerHTML:e._s(e.treat.price)}}),t("div",{staticClass:"extraThings",class:{active:this.isClicked},domProps:{innerHTML:e._s(e.treat.extraInfo)}})])])])},o=[],r={name:"Treatment",props:{treat:Object},methods:{showExtra:function(){this.isClicked=!this.isClicked}},data:function(){return{isClicked:!1}}},l=r,c=(t("eb16"),t("2877")),d=Object(c["a"])(l,n,o,!1,null,"7cebcd86",null),p=d.exports,u=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"btn-container",class:{visible:this.visibleBtn}},[t("div",{staticClass:"btn",on:{click:function(i){return e.goTop()}}},[e._v(" UP ")])])},m=[],h={name:"TopButton",data:function(){return{visibleBtn:!1}},methods:{goTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},handleScroll:function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?this.visibleBtn=!0:this.visibleBtn=!1}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},f=h,g=(t("b0a0"),Object(c["a"])(f,u,m,!1,null,"82bf958e",null)),v=g.exports,y={name:"Treatment-page",components:{Treatment:p,Top:v},data:function(){return{treats:[{id:1,title:"Back, Neck & Shoulder Massage",description:"This massage focuses purely on the back and shoulder areas to relieve tension of these commonly overstressed muscles.",price:"<p>30min/R250</p><p>45min/R300</p>",extraInfo:"This type of massage can encourage relaxation, relieve stress, improve blood circulation, relieving headaches and improving flexibility."},{id:2,title:"Reflexology (Thai Routine)",description:"This massage is an alternative medical practice involving the application of pressure to specific points on hands and feet.",price:"<p>45min/R350</p>",extraInfo:"Reflexology can help with relaxation, increase blood circulation, body detoxification, improve nerve function and brain power and boost metabolism and energy levels. Treatment starts with soaking feet in the aroma salt bath."},{id:3,title:"Lomi-Lomi",description:"Lomi lomi is a traditional Hawaiian massage that uses a combination of massage techniques and nut oils",price:"<p>60min/R500</p><p>90 min/R570</p>",extraInfo:"The benefits of Lomi-Lomi massage include relaxing muscles, promoting circulation and releasing blocked energy."},{id:4,title:"Swedish",description:"With long gliding strokes, this massage relaxes the body and relieves the stress and pressure.",price:"<p>60min/R500</p><p>90min/R550</p>",extraInfo:"Swedish massage has many benefits to overall physical and mental state of the body. Swedish massage provides relaxation, reduces stress, increases flexibility, improves posture and blood circulation."},{id:5,title:"Deep Tissue/SportMassage",description:"Deep tissue massage applies the same strokes as Swedish massage but with more pressure in order to reach deep muscle tissue.",price:"<p>60min/R550</p><p>90min/R600</p>",extraInfo:"This type of massage helps to improve low back pain, limited mobility, postural problems, muscle tension osteoarthritis pain, aid sport-related muscle recovery and aids injury rehabilitation."},{id:6,title:"Aromatherapy",description:"Aromatherapy utilizes, gentle massage as well as essential oils in order to improve physical and psychological health.",price:"<p>60min/R550</p><p>90min/R580</p>",extraInfo:"Aromatherapy helps to improve sleep quality, boost immune system, reduce stress and irritation and manage pain."},{id:7,title:"Remedial",description:"The main purpose of remedial massage is to find and heal the areas of the body that are damaged as well as speed up the natural body repairing process",price:"<p>90min/R600</p>",extraInfo:"Remedial massage is a mix of techniques such as neuromuscular technique, post-isometric relaxation, reciprocal inhibition, proprioceptive neuromuscular facilitation, soft tissue release and connective tissue manipulation. This massage is beneficial to the athletes and people who sufferer from high stress and tension."},{id:8,title:"Thai Yoga Massage",description:"This massage is mix of different techniques that include osteopathic stretches and assisted yoga postures that can help athletes with sport related issues and increase sport performance.",price:"<p>90min/R600</p>",extraInfo:"Thai Yoga massage helps to increase flexibility, relieve pain and muscle tension, improve the range of motion, relax and relieve stress, improve range of motion, improve circulation and lymphatic flow, reduce headaches and increase energy levels."},{id:9,title:"CBD(Cannabidiol) Massage",description:"A CBD massage treatment involves CBD tea(before the massage) + CBD oil(that is infused with MCT) and mixed with Frankincense, Peppermint, Orange and Lavender oils. The treatment helps with multiple pain-related conditions",price:"<p>75min/R650</p>",extraInfo:"CBD has no THC therefore it has no drug effect and government approved. CBD has healing properties and moisturizes without clogging pores whilst being good for all skin types, including oily skin as it is sebum regulating and will not make skin more oily. CBD helps with skin conditions like Eczema and Psoriasis and dry skin."},{id:10,title:"Laser",description:"This kind of treatment uses focused light that is tuned to specific wavelengths in order to treat a wide variety of issues.",price:"<p>after consultation</p>",extraInfo:"Laser is used to help in the following areas:<ul class='list'><li>Cardiology: angina, hypertension, cardiovascular diseases</li><li>Otorhinolaryngology: tonsillitis, inflammatory of larynx, nose and ears</li><li>Gastroenterology: stomach and duodenum ulsters, gastritis, gastroduodenitis </li><li>Dermatology: psoriasis, dermatitis, eczemas, abscess, herpes, acnes</li><li>Pulmonology: inflammatory processes of airways, bronchitis, bronchial asthma</li><li>Gynecology: mastitis, cervical sores, erosions</li><li>Proctology & urology: prostatitis, proctitis, urinary diseases</li><li>Neurology: diseases of peripheral nervous system, radiculitis, neuralgia</li><li>Arthrology: diseases of joints, muscles, spine, arthritis, arthrosis</li><li>Dentistry/odontology: parodontitis, gingivitis, stomatitis, pulpitis</li><li>Traumatology: bone fractures, wounds injuries, burns, scalds, bedsores, sprains</li><li>Varicose: enlargement of veins, trophic ulcers</li><li>Sport & military medicine: muscles, tendons and ligaments sprains, pain of spine/joints</li></ul>"},{id:11,title:"Cupping",description:"Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin for a few minutes to create suction that can help relax muscles, relief pain and part of cellulite treatment.",price:"<p>60min/R550</p><p>90min/R580</p>",extraInfo:"Cupping can have the following benefits on your body:<ul class='list'><li>Muscle relaxation</li><li>Local pain relieve</li><li>Reduced inflammation</li><li>Breaks up scar tissue</li><li>Lymphatic drainage</li></ul>"},{id:12,title:"Mother-To-Be",description:"A massage using specific prenatal techniques, to help increase circulation, alleviate tired muscles and relieve mental and physical fatigue.",price:"<p>60min/R500</p>",extraInfo:"This treatment can help to lower anxiety, decrease back and leg pain, improve sleep and decrease stress.The treatment can only be performed after 15 weeks of pregnancy"}]}}},b=y,w=(t("c11d"),Object(c["a"])(b,s,a,!1,null,"36af44e4",null));i["default"]=w.exports},eb16:function(e,i,t){"use strict";var s=t("a228"),a=t.n(s);a.a},eb3f:function(e,i,t){},ff6f:function(e,i,t){}}]);
//# sourceMappingURL=chunk-1acd8476.c2673743.js.map