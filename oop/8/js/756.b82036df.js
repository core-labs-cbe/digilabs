"use strict";(self["webpackChunkexp_8"]=self["webpackChunkexp_8"]||[]).push([[756],{7756:function(t,a,e){e.r(a),e.d(a,{default:function(){return T}});var n=e(3396),s=e(9242);const l=t=>((0,n.dD)("data-v-26e6fda2"),t=t(),(0,n.Cn)(),t),r=l((()=>(0,n._)("header",{style:{padding:"20px"}},[(0,n._)("h5",null,"HELP"),(0,n._)("h1",null,"Abstract")],-1))),o=l((()=>(0,n._)("div",{id:"snackbar"},"Some text some message..",-1))),i={class:"flex-row"},c=(0,n.uE)('<div style="width:50%;" data-v-26e6fda2><h2 data-v-26e6fda2>Theory</h2><div class="outbox" data-v-26e6fda2><pre data-v-26e6fda2>    <span id="comment" data-v-26e6fda2>//an abstract class </span>\n  public abstract class Animal {\n\n  public abstract void makeSound();\n  \n  }\n  <span id="comment" data-v-26e6fda2>//concrete class that extends <br data-v-26e6fda2> Animal and implements its abstract method </span>\n  public class Dog extends Animal {\n\n  public void makeSound() {\n\n      System.out.println(&quot;Wolf&quot;);\n    \n    }\n  }\n\n                </pre></div><div class="content" data-v-26e6fda2><p data-v-26e6fda2>An abstract class is a class that cannot be instantiated i.e., cannot create an object of the abstract class directly. It provides a blueprint or template for other classes to extend and implement its abstract methods. </p></div></div>',1),d={style:{width:"50%"}},u=l((()=>(0,n._)("h2",null,"Try it yourself",-1))),m={class:"outbox"},p=l((()=>(0,n._)("br",null,null,-1))),b=l((()=>(0,n._)("br",null,null,-1))),h=l((()=>(0,n._)("span",{id:"comment"},"//Initialize an 'abstract' class Bike with an 'abstract' method 'sunroof'",-1))),v=l((()=>(0,n._)("p",null,"{",-1))),_=l((()=>(0,n._)("p",null,"void horn();",-1))),f=l((()=>(0,n._)("p",null,"}",-1))),y=l((()=>(0,n._)("br",null,null,-1))),k={id:"buttons",class:"relative"},w={key:0,class:"navitem"};function x(t,a,e,l,x,g){return(0,n.wg)(),(0,n.iD)(n.HY,null,[r,o,(0,n._)("main",null,[(0,n._)("div",i,[c,(0,n._)("div",d,[u,(0,n._)("div",m,[p,(0,n.Uk)(),b,h,(0,n._)("p",null,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=a=>t.one=a)},null,512),[[s.nr,t.one]]),(0,n.Uk)("class Bike")]),v,(0,n._)("p",null,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=a=>t.two=a)},null,512),[[s.nr,t.two]]),(0,n.Uk)(" void "),(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=a=>t.three=a)},null,512),[[s.nr,t.three]]),(0,n.Uk)(";")]),_,f,y]),(0,n._)("button",{class:"button-9",onClick:a[3]||(a[3]=t=>g.validate_one())},"Validate")])]),(0,n._)("footer",null,[(0,n._)("div",k,[1===t.currentStep?((0,n.wg)(),(0,n.iD)("button",w,"Next")):(0,n.kq)("",!0)])])])],64)}var g={data(){return{}},methods:{incorrect(t){var a=document.getElementById("snackbar");a.innerHTML=t,a.style.backgroundColor="red",a.className="show",setTimeout((function(){a.className=a.className.replace("show","")}),3e3)},correct1(){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},validate_one(){"abstract"==this.one.trim()&&"abstract"==this.two.trim()&&"sunroof"==this.three.trim()&&"Yamaha"==this.four.trim()?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},C=e(89);const N=(0,C.Z)(g,[["render",x],["__scopeId","data-v-26e6fda2"]]);var T=N}}]);
//# sourceMappingURL=756.b82036df.js.map