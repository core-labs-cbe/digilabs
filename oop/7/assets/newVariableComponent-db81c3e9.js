import{_ as u,o,c as i,b as e,w as l,v as r,e as d,h as p,F as v,i as m,p as _,a as h}from"./index-0ba2a450.js";const b={data(){return{}},methods:{incorrect(t){var a=document.getElementById("snackbar");a.innerHTML=t,a.style.backgroundColor="red",a.className="show",setTimeout(function(){a.className=a.className.replace("show","")},3e3)},correct1(){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="String"&&this.two.trim()=="key"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},s=t=>(_("data-v-28c08a89"),t=t(),h(),t),y=s(()=>e("header",{style:{padding:"20px"}},[e("h5",null,"HELP"),e("h1",null,"Creating Variables")],-1)),f=s(()=>e("div",{id:"snackbar"},"Some text some message..",-1)),g={class:"flex-row"},w=m('<div style="width:50%;" data-v-28c08a89><h2 data-v-28c08a89>Theory</h2><div class="outbox" data-v-28c08a89><p data-v-28c08a89>int a = 10;</p><span id="comment" data-v-28c08a89>//variable initialization</span><p data-v-28c08a89>int b;</p><span id="comment" data-v-28c08a89>//variable declaration</span><br data-v-28c08a89></div><div class="content" data-v-28c08a89><p data-v-28c08a89> Variables are for storing information of different types, such as text, numbers, and Boolean values. When declaring a variable, you specify its type and name. The assignment operator (=) is used to assign a value to a variable. Variable names are unique and case-sensitive. </p></div></div>',1),x={style:{width:"50%"}},V=s(()=>e("h2",null,"Try it yourself",-1)),k={class:"outbox"},N=s(()=>e("br",null,null,-1)),T=s(()=>e("br",null,null,-1)),C=s(()=>e("span",{id:"comment"},`//Initialize a variable "key" of type String with the value 'Help!'`,-1)),I=s(()=>e("br",null,null,-1)),S={id:"buttons",class:"relative"},B={key:0,class:"navitem"};function H(t,a,E,$,L,c){return o(),i(v,null,[y,f,e("main",null,[e("div",g,[w,e("div",x,[V,e("div",k,[l(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=n=>t.one=n)},null,512),[[r,t.one]]),d(),l(e("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=n=>t.two=n)},null,512),[[r,t.two]]),d(" = 'Help!'; "),N,T,C,I]),e("button",{class:"button-9",onClick:a[2]||(a[2]=n=>c.validate_one())},"Validate")])]),e("footer",null,[e("div",S,[t.currentStep===1?(o(),i("button",B,"Next")):p("",!0)])])])],64)}const z=u(b,[["render",H],["__scopeId","data-v-28c08a89"]]);export{z as default};
