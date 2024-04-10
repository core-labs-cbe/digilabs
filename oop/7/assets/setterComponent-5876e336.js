import{_ as u,o as r,c as n,b as e,e as s,w as l,v as c,h as p,F as v,i as m,p as _,a as f}from"./index-0ba2a450.js";const h={data(){return{}},methods:{incorrect(t){var a=document.getElementById("snackbar");a.innerHTML=t,a.style.backgroundColor="red",a.className="show",setTimeout(function(){a.className=a.className.replace("show","")},3e3)},correct1(){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="setColor"&&this.two.trim()=="this.color=color"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},o=t=>(_("data-v-e67d5c2f"),t=t(),f(),t),b=o(()=>e("header",{style:{padding:"20px"}},[e("h5",null,"HELP"),e("h1",null,"Setter")],-1)),y=o(()=>e("div",{id:"snackbar"},"Some text some message..",-1)),w={class:"flex-row"},g=m('<div style="width:50%;" data-v-e67d5c2f><h2 data-v-e67d5c2f>Theory</h2><div class="outbox" data-v-e67d5c2f><p data-v-e67d5c2f>public class Car(){ <br data-v-e67d5c2f><br data-v-e67d5c2f>  private String model;<br data-v-e67d5c2f>  private String color;<br data-v-e67d5c2f><br data-v-e67d5c2f><br data-v-e67d5c2f>  public setModel(String model){this.model=model;} <br data-v-e67d5c2f><br data-v-e67d5c2f> }<br data-v-e67d5c2f></p><span id="comment" data-v-e67d5c2f>//creating a setter for the variable model</span><p data-v-e67d5c2f>Car C = new Car()</p><p data-v-e67d5c2f>C.setModel(&quot;Ferrari&quot;)</p><p data-v-e67d5c2f>System.out.println(C.model)</p><span id="comment" data-v-e67d5c2f>//prints &#39;Ferrari&#39;</span><br data-v-e67d5c2f></div><div class="content" data-v-e67d5c2f><p data-v-e67d5c2f> A setter method sets or updates its value for each instance variable. It sets the value for any variable used in a class’s programs and starts with the word “set” followed by the variable name. </p></div></div>',1),C={style:{width:"50%"}},S=o(()=>e("h2",null,"Try it yourself",-1)),x={class:"outbox"},N=o(()=>e("br",null,null,-1)),k=o(()=>e("br",null,null,-1)),T=o(()=>e("br",null,null,-1)),I=o(()=>e("br",null,null,-1)),V=o(()=>e("br",null,null,-1)),B=o(()=>e("span",{id:"comment"},'//write a setter function for "Car" class to set variable color',-1)),M=o(()=>e("br",null,null,-1)),E={id:"buttons",class:"relative"},F={key:0,class:"navitem"};function $(t,a,H,L,q,i){return r(),n(v,null,[b,y,e("main",null,[e("div",w,[g,e("div",C,[S,e("div",x,[s(" public "),l(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=d=>t.one=d)},null,512),[[c,t.one]]),s("(String color){ "),N,k,s("  "),l(e("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=d=>t.two=d)},null,512),[[c,t.two]]),s("; "),T,I,s(" } "),V,B,M]),e("button",{class:"button-9",onClick:a[2]||(a[2]=d=>i.validate_one())},"Validate")])]),e("footer",null,[e("div",E,[t.currentStep===1?(r(),n("button",F,"Next")):p("",!0)])])])],64)}const A=u(h,[["render",$],["__scopeId","data-v-e67d5c2f"]]);export{A as default};
