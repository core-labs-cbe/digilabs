import d from"./abstractComponent-7d5996b3.js";import u from"./arrayListComponent-2bb638d3.js";import b from"./classCastExceptionComponent-86a925f2.js";import h from"./constructorWritingComponent-58dd154d.js";import g from"./dateComponent-261c4d12.js";import y from"./extendsComponent-0af1dfaf.js";import v from"./functionCallingWithObjectComponent-6b937f3c.js";import f from"./getterComponent-2914698e.js";import C from"./interfaceComponent-c23cc8cf.js";import _ from"./newVariableComponent-db81c3e9.js";import x from"./nullPointerExceptionComponent-bcbaab33.js";import P from"./objectCreationComponent-beacb37d.js";import w from"./parseExceptionComponent-c58e7014.js";import S from"./passingArgumentsToFunctionsComponent-f74d085c.js";import j from"./printFunctionComponent-279899f3.js";import k from"./setterComponent-5876e336.js";import E from"./StringcompareComponent-29f90f51.js";import T from"./superKeywordComponent-a3169cb6.js";import N from"./thisComponent-55ab1b4d.js";import F from"./tryCatchComponent-14e1a240.js";import{_ as A,o as c,c as D,b as t,d as I,r as V,f as a,w as q,v as B,e as L,t as m,i as R,p as H,a as M}from"./index-0ba2a450.js";const O={components:{abstractComponent:d,arrayListComponent:u,classCastExceptionComponent:b,constructorWritingComponent:h,dateComponent:g,extendsComponent:y,functionCallingWithObjectComponent:v,getterComponent:f,interfaceComponent:C,newVariableComponent:_,nullPointerExceptionComponent:x,objectCreationComponent:P,parseExceptionComponent:w,passingArgumentsToFunctionsComponent:S,printFunctionComponent:j,setterComponent:k,stringCompareComponent:E,superKeywordComponent:T,thisComponent:N,tryCatchComponent:F},methods:{popup(e){this.currentComponent=e,console.log("popup");var n=document.getElementById("myModal");console.log(n);var l=document.getElementsByClassName("close")[0];n.style.display="block",console.log(n.style.display),l.onclick=function(){n.style.display="none"},window.onclick=function(p){p.target==n&&(n.style.display="none")}},validate_one(){this.one=="abstract"?(this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block"):this.button_value=this.button_text}},data(){return{id:"container",class:"wrapper",button_value:"Next",currentComponent:"abstractComponent",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none"]}}},i=e=>(H("data-v-d3e586f8"),e=e(),M(),e),U={id:"myModal"},G={class:"modal-content"},Q=i(()=>t("span",{class:"close"},"×",-1)),W={style:{display:"flex","flex-direction":"row"}},z=i(()=>t("div",{style:{flex:"5"}},[t("h1",{style:{padding:"25px","padding-bottom":"0px"}},"Adding abstraction to the Person class"),t("p",{style:{padding:"25px","padding-top":"0px"}},"To continue, make the Person class abstract. Note that it can no longer be instantiated.")],-1)),J={style:{flex:"1"}},K={class:"flex"},X=i(()=>t("pre",null,`	private String name;
	private String email;
	private long phone;
	private String city;

	public Person()
	{
		
	}
	
	public Person(String name, String email) {
		this.name = name;
		this.setEmail(email);
	}
	
	public Person(String name, long phone) {
		this.name = name;
		this.setPhone(phone);
	}
	
	public Person(String name, String email, long phone) {
		this.name = name;
		this.email =email;
		this.setPhone(phone);
	}

	public String getName() {
		return name;
	}
	
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {		
		if(phone >= 0000000000L && phone <= 9999999999L)
			this.phone = phone;
		else
			this.phone = 9999999999L;
		
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

}

        `,-1)),Y={class:"flex"},Z=i(()=>t("h3",{style:{"font-family":"monospace"}},"Person.java",-1)),$=i(()=>t("p",{class:"comment"},"//Note that person is now abstract",-1)),tt=i(()=>t("pre",null,`
abstract public class Person {
	private String name;
	private String email;
	private long phone;
	private String city;

	public Person()
	{
		
	}
	
	...
}

        `,-1)),nt=i(()=>t("div",null,[t("h3",{style:{"font-family":"monospace"}},"Test Driver.java"),t("pre",null,`...

public class TestDriver {
	
	public static void main(String[] args) throws ParseException {

		
		Person[] cobj= new Person[5];
		
		cobj[0]=new Customer("ABC", "abc@gmail.com"); //upcasting
		cobj[1]=new Customer("DEF", 8654678976L); //upcasting
                cobj[2]=new Customer("GHI", "ghi@gmail.com", 1234567890L); //upcasting
		cobj[3]=new Exec("EFG","efg@gmail.com"); //upcasting
		cobj[4]=new Person("PQR","pqr@gmail.com"); 
		
		cobj[0].setCity("Coimbatore");
		cobj[1].setCity("Coimbatore");
		cobj[2].setCity("Chennai");
		cobj[3].setCity("Coimbatore");
		
		Vehicle vobj=new Vehicle(1234);
		
		//Downcasting required from Person to Customer
		Reservation robj1= new Reservation((Customer)cobj[0],vobj);
		robj1.setBookingDate(new Date());

	}	
}

            `)],-1)),et=[Z,$,tt,nt],ot=R('<p data-v-d3e586f8>OUTPUT</p><p style="color:#FF6262;" data-v-d3e586f8>prog.Java:12: Abstract classes cannot be instantiated. They can only be extended.</p><p style="color:#FF6262;" data-v-d3e586f8>    cobj[4]=new Person(&quot;PQR&quot;,&quot;pqr@gmail.com&quot;)</p><br data-v-d3e586f8><p style="color:#FF6262;" data-v-d3e586f8>1 Error</p><div style="height:100px;background-color:#202020;" data-v-d3e586f8></div><h4 style="font-family:monospace;color:inherit;background-color:inherit;" data-v-d3e586f8>EXPLANATION</h4><p data-v-d3e586f8>As stated in the error, abstract classes cannot be instantiated. To access the attributes and methods defined here, the classes have to be extended. In our example, Person is being extended by Customer and Exec.</p>',8);function it(e,n,l,p,o,r){return c(),D("main",null,[t("div",U,[t("div",G,[Q,(c(),I(V(o.currentComponent)))])]),t("div",W,[z,t("div",J,[t("button",{style:a([{float:"right","margin-bottom":"30px"},{display:o.display[0]}]),onClick:n[0]||(n[0]=s=>r.popup("abstractComponent")),class:"button-30"},"Help",4)])]),t("div",K,[t("div",{class:"codebox",id:"codebox",style:a({display:o.display[0]})},[t("div",null,[q(t("input",{spellcheck:"false",type:"text",id:"input1","onUpdate:modelValue":n[1]||(n[1]=s=>e.one=s),maxlength:"8"},null,512),[[B,e.one]]),L(" public cd class Person { ")]),X,t("button",{class:"button-9",id:"btn1",onClick:n[2]||(n[2]=(...s)=>r.validate_one&&r.validate_one(...s))},m(o.button_value),1),t("button",{style:{float:"right","margin-bottom":"30px"},onClick:n[3]||(n[3]=s=>r.popup("abstractComponent")),class:"button-30"},"Help")],4),t("div",{class:"codebox",style:a({display:o.display[0]})}," Convert the class Person into an abstract class ",4)]),t("div",Y,[t("div",{class:"codebox",id:"codebox",style:a({display:o.display[1]})},et,4),t("div",{class:"outbox",style:a({display:o.display[1]})},[ot,t("button",{class:"button-9",id:"btn1",onClick:n[4]||(n[4]=s=>e.$router.push("/request-vehicle-view"))},m(o.button_value),1)],4)])])}const jt=A(O,[["render",it],["__scopeId","data-v-d3e586f8"]]);export{jt as default};
