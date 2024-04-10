import{_ as c,o as l,c as r,a as t,g as n,v as s,f as i,j as u,F as m,h as v,p as f,i as h}from"./index-05e8c48f.js";const y={data(){return{}},methods:{incorrect(e){var a=document.getElementById("snackbar");a.innerHTML=e,a.style.backgroundColor="red",a.className="show",setTimeout(function(){a.className=a.className.replace("show","")},3e3)},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="operations"&&this.two.trim()=="add"&&this.three.trim()=="int a"&&this.four.trim()=="int b"&&this.five.trim()=="op"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},d=e=>(f("data-v-a66e99fa"),e=e(),h(),e),b=d(()=>t("header",{style:{padding:"20px"}},[t("h5",null,"HELP"),t("h1",null,"Function calling with objects")],-1)),g=d(()=>t("div",{id:"snackbar"},"Some text some message..",-1)),_={class:"flex-row"},w=v('<div style="width:50%;" data-v-a66e99fa><h2 data-v-a66e99fa>Theory</h2><div class="outbox" data-v-a66e99fa><p data-v-a66e99fa>minimum=Math.min(43,58); </p><span id="comment" data-v-a66e99fa>//Calling static method</span><div style="height:20px;" data-v-a66e99fa></div><p data-v-a66e99fa> Object obj=new Object(); </p><p data-v-a66e99fa>a=obj.hashCode(); </p><span id="comment" data-v-a66e99fa>//Calling predefined method</span><div style="height:20px;" data-v-a66e99fa></div><p data-v-a66e99fa>Car C = new Car()</p><p data-v-a66e99fa> System.out.println(C.getModel())</p><span id="comment" data-v-a66e99fa>//calling user-defined functions</span><br data-v-a66e99fa><br data-v-a66e99fa></div><div class="content" data-v-a66e99fa><p data-v-a66e99fa> The method is a collection of statements that performs a specific task or operation. It provides reusability of code. </p><p data-v-a66e99fa> It also provides easy modification. Each method has its own name by which it is called. </p><p data-v-a66e99fa> In order to call a method respective_class_object.method(parameters...) </p></div></div>',1),C={style:{width:"50%"}},N=d(()=>t("h2",null,"Try it yourself",-1)),V={class:"outbox"},k=d(()=>t("div",{style:{heigh:"20px"}},null,-1)),x=d(()=>t("span",{id:"comment"},'//call the "add" function of class "operations"that has two parameters of type integer "a" and "b" ',-1)),I=d(()=>t("br",null,null,-1)),T={id:"buttons",class:"relative"},j={key:0,class:"navitem"};function S(e,a,U,B,E,p){return l(),r(m,null,[b,g,t("main",null,[t("div",_,[w,t("div",C,[N,t("div",V,[n(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=o=>e.one=o)},null,512),[[s,e.one]]),i(" op = new "),n(t("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=o=>e.one=o)},null,512),[[s,e.one]]),i("(); "),k,n(t("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=o=>e.five=o)},null,512),[[s,e.five]]),i("."),n(t("input",{type:"text","onUpdate:modelValue":a[3]||(a[3]=o=>e.two=o)},null,512),[[s,e.two]]),i("( "),n(t("input",{type:"text","onUpdate:modelValue":a[4]||(a[4]=o=>e.three=o)},null,512),[[s,e.three]]),i(", "),n(t("input",{type:"text","onUpdate:modelValue":a[5]||(a[5]=o=>e.four=o)},null,512),[[s,e.four]]),i("); "),x,I]),t("button",{class:"button-9",onClick:a[6]||(a[6]=o=>p.validate_one())},"Validate")])]),t("footer",null,[t("div",T,[e.currentStep===1?(l(),r("button",j,"Next")):u("",!0)])])])],64)}const O=c(y,[["render",S],["__scopeId","data-v-a66e99fa"]]);export{O as default};
