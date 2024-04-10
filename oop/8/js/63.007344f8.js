"use strict";(self["webpackChunkexp_8"]=self["webpackChunkexp_8"]||[]).push([[63],{7063:function(t,e,a){a.r(e),a.d(e,{default:function(){return x}});var n=a(3396),c=a(9242);const o=t=>((0,n.dD)("data-v-7608e99c"),t=t(),(0,n.Cn)(),t),r=o((()=>(0,n._)("header",{style:{padding:"20px"}},[(0,n._)("h5",null,"HELP"),(0,n._)("h1",null,"Try-Catch Blocks")],-1))),s=o((()=>(0,n._)("div",{id:"snackbar"},"Some text some message..",-1))),i={class:"flex-row"},l=(0,n.uE)('<div style="width:50%;" data-v-7608e99c><h2 data-v-7608e99c>Theory</h2><div class="outbox" data-v-7608e99c><span id="comment" data-v-7608e99c>//a try block</span><p data-v-7608e99c>try {</p><p data-v-7608e99c>int[] myNumbers = {1, 2, 3};</p><span id="comment" data-v-7608e99c>//an index out of bound exception</span><p data-v-7608e99c>System.out.println(myNumbers[10]);</p><p data-v-7608e99c>}</p><span id="comment" data-v-7608e99c>//a catch block with the exception</span><p data-v-7608e99c>catch (Exception e) {</p><p data-v-7608e99c>System.out.println(&quot;Something went wrong.&quot;);</p><p data-v-7608e99c>}</p><span id="comment" data-v-7608e99c>//a finally block</span><br data-v-7608e99c></div><div class="content" data-v-7608e99c><p data-v-7608e99c>When you write code that may throw an exception, you can use a try block to enclose that code. If an exception is thrown within the try block, the program control is transferred to the catch block, which contains the code that handles the exception. </p></div></div>',1),d={style:{width:"50%"}},p=o((()=>(0,n._)("h2",null,"Try it yourself",-1))),u={class:"outbox"},h=o((()=>(0,n._)("span",{id:"comment"},"//try block",-1))),m=o((()=>(0,n._)("span",{id:"comment"},"//catch block",-1))),v={id:"buttons",class:"relative"},y={key:0,class:"navitem"};function k(t,e,a,o,k,b){return(0,n.wg)(),(0,n.iD)(n.HY,null,[r,s,(0,n._)("main",null,[(0,n._)("div",i,[l,(0,n._)("div",d,[p,(0,n._)("div",u,[(0,n._)("pre",null,[(0,n.Uk)(""),h,(0,n.Uk)("\n"),(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=e=>t.one=e)},null,512),[[c.nr,t.one]]),(0,n.Uk)(' {\n        int result = divide(10, 0);\n        System.out.println("Result is: " + result);\n}\n'),m,(0,n.Uk)(" \n"),(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=e=>t.two=e)},null,512),[[c.nr,t.two]]),(0,n.Uk)(' (ArithmeticException e) {\n        System.out.println("Error: ");\n}\n        ')])]),(0,n._)("button",{class:"button-9",onClick:e[2]||(e[2]=t=>b.validate_one())},"Validate")])]),(0,n._)("footer",null,[(0,n._)("div",v,[1===t.currentStep?((0,n.wg)(),(0,n.iD)("button",y,"Next")):(0,n.kq)("",!0)])])])],64)}var b={data(){return{}},methods:{incorrect(t){var e=document.getElementById("snackbar");e.innerHTML=t,e.style.backgroundColor="red",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3)},correct1(){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},validate_one(){"try"==this.one.trim()&&"catch"==this.two.trim()?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},w=a(89);const _=(0,w.Z)(b,[["render",k],["__scopeId","data-v-7608e99c"]]);var x=_}}]);
//# sourceMappingURL=63.007344f8.js.map