import{_ as u,o as n,c as l,a as e,f as s,g as d,v as i,j as p,F as v,h as m,p as h,i as f}from"./index-05e8c48f.js";const _={data(){return{}},methods:{incorrect(t){var a=document.getElementById("snackbar");a.innerHTML=t,a.style.backgroundColor="red",a.className="show",setTimeout(function(){a.className=a.className.replace("show","")},3e3)},correct1(){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="getColor"&&this.two.trim()=="return this.color"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},o=t=>(h("data-v-ee7580fe"),t=t(),f(),t),b=o(()=>e("header",{style:{padding:"20px"}},[e("h5",null,"HELP"),e("h1",null,"Getter")],-1)),g=o(()=>e("div",{id:"snackbar"},"Some text some message..",-1)),y={class:"flex-row"},w=m('<div style="width:50%;" data-v-ee7580fe><h2 data-v-ee7580fe>Theory</h2><div class="outbox" data-v-ee7580fe><p data-v-ee7580fe>public class Car(){ <br data-v-ee7580fe><br data-v-ee7580fe>  private String model=&quot;BMW&quot;;<br data-v-ee7580fe>  private String color=&quot;white&quot;;<br data-v-ee7580fe><br data-v-ee7580fe><br data-v-ee7580fe>  public getModel(){return this.model;} <br data-v-ee7580fe><br data-v-ee7580fe> }<br data-v-ee7580fe></p><span id="comment" data-v-ee7580fe>//creating a getter for the variable model</span><p data-v-ee7580fe>Car C = new Car()</p><p data-v-ee7580fe> System.out.println(C.getModel())</p><span id="comment" data-v-ee7580fe>//output: BMW</span><br data-v-ee7580fe></div><div class="content" data-v-ee7580fe><p data-v-ee7580fe> A getter method is a public method of a class used to retrieve the value of a private or protected data member. It typically starts with the prefix &quot;get&quot; followed by the name of the data member it retrieves, has a return type that matches the type of the data member, and takes no parameters. </p></div></div>',1),C={style:{width:"50%"}},x=o(()=>e("h2",null,"Try it yourself",-1)),N={class:"outbox"},k=o(()=>e("br",null,null,-1)),S=o(()=>e("br",null,null,-1)),T=o(()=>e("br",null,null,-1)),I=o(()=>e("br",null,null,-1)),B=o(()=>e("br",null,null,-1)),M=o(()=>e("span",{id:"comment"},'//write a getter function for "Car" class to get variable color',-1)),V=o(()=>e("br",null,null,-1)),q={id:"buttons",class:"relative"},E={key:0,class:"navitem"};function $(t,a,H,L,F,c){return n(),l(v,null,[b,g,e("main",null,[e("div",y,[w,e("div",C,[x,e("div",N,[s(" public "),d(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=r=>t.one=r)},null,512),[[i,t.one]]),s("(){ "),k,S,s("  "),d(e("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=r=>t.two=r)},null,512),[[i,t.two]]),s("; "),T,I,s(" } "),B,M,V]),e("button",{class:"button-9",onClick:a[2]||(a[2]=r=>c.validate_one())},"Validate")])]),e("footer",null,[e("div",q,[t.currentStep===1?(n(),l("button",E,"Next")):p("",!0)])])])],64)}const W=u(_,[["render",$],["__scopeId","data-v-ee7580fe"]]);export{W as default};
