import{_ as c,o as d,c as r,b as t,w as s,v as i,e as l,h as u,F as m,i as v,p as b,a as h}from"./index-0ba2a450.js";const y={data(){return{}},methods:{incorrect(e){var a=document.getElementById("snackbar");a.innerHTML=e,a.style.backgroundColor="red",a.className="show",setTimeout(function(){a.className=a.className.replace("show","")},3e3)},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="float"&&this.two.trim()=="key[]"&&this.three.trim()=="new"&&this.four.trim()=="float[5]"?(this.correct1(),alert("Correct ")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},o=e=>(b("data-v-05b1e24e"),e=e(),h(),e),_=o(()=>t("header",{style:{padding:"20px"}},[t("h5",null,"HELP"),t("h1",null,"Creating Arrays")],-1)),f=o(()=>t("div",{id:"snackbar"},"Some text some message..",-1)),w={class:"flex-row"},g=v('<div style="width:30%;" data-v-05b1e24e><h2 data-v-05b1e24e>Theory</h2><div class="outbox" data-v-05b1e24e><p data-v-05b1e24e>int a[]=new int[4];</p><span id="comment" data-v-05b1e24e>//variable declaration and instantiation</span><p data-v-05b1e24e>a[0]=33</p><p data-v-05b1e24e>a[1]=6</p><p data-v-05b1e24e>a[2]=22</p><p data-v-05b1e24e>a[3]=3</p><span id="comment" data-v-05b1e24e>//variable initialization</span><p data-v-05b1e24e>int b[]={22,4,5,6};</p><span id="comment" data-v-05b1e24e>//variable declaration and initialization of singledimentional</span><p data-v-05b1e24e>int arr[][]={ {1,2,3},{2,4,5},{4,4,5} };</p><span id="comment" data-v-05b1e24e>//variable declaration and initialization of multidimentional</span><br data-v-05b1e24e></div><div class="content" data-v-05b1e24e><p data-v-05b1e24e> Array is a collection of elements of the same data type. An array has a fixed size .To declare an array you need to specify the data type of the elements it will hold and the number of elements it will contain. </p></div></div>',1),k={style:{width:"70%"}},N=o(()=>t("h2",null,"Try it yourself",-1)),x={class:"outbox"},T=o(()=>t("br",null,null,-1)),C=o(()=>t("br",null,null,-1)),V=o(()=>t("span",{id:"comment"},'//Declare a singledimentional array "key" of type float with size 5',-1)),I=o(()=>t("br",null,null,-1)),S={id:"buttons",class:"relative"},z={key:0,class:"navitem"};function B(e,a,E,U,$,p){return d(),r(m,null,[_,f,t("main",null,[t("div",w,[g,t("div",k,[N,t("div",x,[s(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=n=>e.one=n)},null,512),[[i,e.one]]),l(),s(t("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=n=>e.two=n)},null,512),[[i,e.two]]),l(" = "),s(t("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=n=>e.three=n)},null,512),[[i,e.three]]),l(),s(t("input",{type:"text","onUpdate:modelValue":a[3]||(a[3]=n=>e.four=n)},null,512),[[i,e.four]]),l("; "),T,C,V,I]),t("button",{class:"button-9",onClick:a[4]||(a[4]=n=>p.validate_one())},"Validate")])]),t("footer",null,[t("div",S,[e.currentStep===1?(d(),r("button",z,"Next")):u("",!0)])])])],64)}const H=c(y,[["render",B],["__scopeId","data-v-05b1e24e"]]);export{H as default};