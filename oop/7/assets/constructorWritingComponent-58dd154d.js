import{_ as b,o as n,c as r,b as t,e as s,w as i,v as l,h as u,F as p,i as v,p as h,a as m}from"./index-0ba2a450.js";const _={data(){return{}},methods:{incorrect(e){var a=document.getElementById("snackbar");a.innerHTML=e,a.style.backgroundColor="red",a.className="show",setTimeout(function(){a.className=a.className.replace("show","")},3e3)},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="String color"&&this.two.trim()=="this.color=color"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},o=e=>(h("data-v-bed90db1"),e=e(),m(),e),y=o(()=>t("header",{style:{padding:"20px"}},[t("h5",null,"HELP"),t("h1",null,"Constructor Writing")],-1)),g=o(()=>t("div",{id:"snackbar"},"Some text some message..",-1)),f={class:"flex-row"},w=v('<div style="width:50%;" data-v-bed90db1><h2 data-v-bed90db1>Theory</h2><div class="outbox" data-v-bed90db1><p data-v-bed90db1>public class Car(){ <br data-v-bed90db1><br data-v-bed90db1>  public car(String model){ <br data-v-bed90db1><br data-v-bed90db1>   this.model = model; <br data-v-bed90db1><br data-v-bed90db1>  } <br data-v-bed90db1><br data-v-bed90db1> }<br data-v-bed90db1></p><span id="comment" data-v-bed90db1>//creating a constructor</span><p data-v-bed90db1>Car C = new Car(&quot;Audi&quot;)</p><span id="comment" data-v-bed90db1>//calling a constructor</span><br data-v-bed90db1></div><div class="content" data-v-bed90db1><p data-v-bed90db1> A constructor is a special method used to initialize objects of a class. Its purpose is to ensure that an object is initialized with appropriate initial values before it can be used. Constructors have the same name as the class and no return type. They can have parameters to pass arguments if so they are called parametrised constructor. </p></div></div>',1),C={style:{width:"50%"}},x=o(()=>t("h2",null,"Try it yourself",-1)),N={class:"outbox"},T=o(()=>t("br",null,null,-1)),k=o(()=>t("br",null,null,-1)),I=o(()=>t("br",null,null,-1)),S=o(()=>t("br",null,null,-1)),V=o(()=>t("br",null,null,-1)),B=o(()=>t("span",{id:"comment"},'//write a constructor for "Car" class to initialize the color of the car',-1)),E=o(()=>t("br",null,null,-1)),$={id:"buttons",class:"relative"},z={key:0,class:"navitem"};function H(e,a,L,M,W,c){return n(),r(p,null,[y,g,t("main",null,[t("div",f,[w,t("div",C,[x,t("div",N,[s(" public Car("),i(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=d=>e.one=d)},null,512),[[l,e.one]]),s("){ "),T,k,s("  "),i(t("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=d=>e.two=d)},null,512),[[l,e.two]]),s("; "),I,S,s(" } "),V,B,E]),t("button",{class:"button-9",onClick:a[2]||(a[2]=d=>c.validate_one())},"Validate")])]),t("footer",null,[t("div",$,[e.currentStep===1?(n(),r("button",z,"Next")):u("",!0)])])])],64)}const q=b(_,[["render",H],["__scopeId","data-v-bed90db1"]]);export{q as default};