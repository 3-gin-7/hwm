(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f42a3c1f","chunk-11d500b6":"b59a5e9b","chunk-185a0dd0":"91b6cdcd","chunk-1c20fd3e":"d5541bde","chunk-347e8601":"588dedf7","chunk-3903b3a5":"1f310b87"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1,"chunk-11d500b6":1,"chunk-185a0dd0":1,"chunk-1c20fd3e":1,"chunk-347e8601":1,"chunk-3903b3a5":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"5fecf5db","chunk-11d500b6":"79b8eb71","chunk-185a0dd0":"c5ad65fc","chunk-1c20fd3e":"45a99f1b","chunk-347e8601":"5c06a50b","chunk-3903b3a5":"eb7f5786"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"},on:{click:this.bodyClick}},[n("div",{staticClass:"header"},[e._m(0),n("ul",{staticClass:"nav-bar",class:{active:this.isClicked}},[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("li",[n("router-link",{attrs:{to:"/treatments"}},[e._v("Treatments")])],1),n("li",[n("router-link",{attrs:{to:"/travelers"}},[e._v("Travellers")])],1),n("li",[n("router-link",{attrs:{to:"/contact"}},[e._v("Contact")])],1),n("li",[n("router-link",{attrs:{to:"/policies"}},[e._v("Policies")])],1),n("li",[n("router-link",{attrs:{to:"/faq"}},[e._v("FAQ")])],1)]),n("div",{staticClass:"burger",on:{click:this.navClick}},[n("span"),n("span"),n("span")])]),n("router-view")],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("img",{attrs:{src:n("8884"),alt:"logo",srcset:""}}),r("p",[e._v("HWM")])])}],i={name:"App",data:function(){return{isClicked:!1}},methods:{navClick:function(e){this.isClicked=!this.isClicked,e.stopPropagation()},bodyClick:function(){this.isClicked=!1}}},c=i,u=(n("034f"),n("2877")),s=Object(u["a"])(c,a,o,!1,null,null,null),l=s.exports,d=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"home-bg"},[n("div",{staticClass:"main-heading-container"},[n("h1",{attrs:{id:"main-heading"}},[e._v("THE HOUSE OF WORLD MASSAGES")]),n("h3",{attrs:{id:"main-sub-heading"}},[e._v("A massage is not just a treatment but art that can improve everyone`s physical and emotional conditions")])])])])}],h={name:"Home",components:{}},b=h,m=(n("b65c"),Object(u["a"])(b,f,p,!1,null,"2e0b27c2",null)),v=m.exports;r["a"].use(d["a"]);var k=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/treatments",name:"Treatments",component:function(){return n.e("chunk-185a0dd0").then(n.bind(null,"de7f"))}},{path:"/travelers",name:"Travelers",component:function(){return n.e("chunk-11d500b6").then(n.bind(null,"ee81"))}},{path:"/contact",name:"Contact",component:function(){return n.e("chunk-3903b3a5").then(n.bind(null,"b8fa"))}},{path:"/policies",name:"Policies",component:function(){return n.e("chunk-347e8601").then(n.bind(null,"6470"))}},{path:"/faq",name:"FAQ",component:function(){return n.e("chunk-1c20fd3e").then(n.bind(null,"0b2e"))}}],g=new d["a"]({routes:k}),y=g;r["a"].config.productionTip=!1,new r["a"]({router:y,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},8884:function(e,t,n){e.exports=n.p+"img/logo-1.876c77de.svg"},b65c:function(e,t,n){"use strict";var r=n("f55f"),a=n.n(r);a.a},f55f:function(e,t,n){}});
//# sourceMappingURL=app.10b50012.js.map