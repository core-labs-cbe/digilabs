import g from"./abstractComponent-7d5996b3.js";import y from"./arrayListComponent-2bb638d3.js";import b from"./classCastExceptionComponent-86a925f2.js";import f from"./constructorWritingComponent-58dd154d.js";import v from"./dateComponent-261c4d12.js";import C from"./extendsComponent-0af1dfaf.js";import _ from"./functionCallingWithObjectComponent-6b937f3c.js";import x from"./getterComponent-2914698e.js";import w from"./interfaceComponent-c23cc8cf.js";import S from"./newVariableComponent-db81c3e9.js";import k from"./nullPointerExceptionComponent-bcbaab33.js";import E from"./objectCreationComponent-beacb37d.js";import D from"./parseExceptionComponent-c58e7014.js";import I from"./passingArgumentsToFunctionsComponent-f74d085c.js";import j from"./printFunctionComponent-279899f3.js";import V from"./setterComponent-5876e336.js";import N from"./StringcompareComponent-29f90f51.js";import T from"./superKeywordComponent-a3169cb6.js";import B from"./thisComponent-55ab1b4d.js";import M from"./tryCatchComponent-14e1a240.js";import{_ as F,o as u,c as P,b as t,d as R,r as O,f as p,e as s,w as a,v as l,t as h,i as U,p as H,a as K,j as L}from"./index-0ba2a450.js";const W={components:{abstractComponent:g,arrayListComponent:y,classCastExceptionComponent:b,constructorWritingComponent:f,dateComponent:v,extendsComponent:C,functionCallingWithObjectComponent:_,getterComponent:x,interfaceComponent:w,newVariableComponent:S,nullPointerExceptionComponent:k,objectCreationComponent:E,parseExceptionComponent:D,passingArgumentsToFunctionsComponent:I,printFunctionComponent:j,setterComponent:V,stringCompareComponent:N,superKeywordComponent:T,thisComponent:B,tryCatchComponent:M},methods:{popup(e){this.currentComponent=e,console.log("popup");var n=document.getElementById("myModal");console.log(n);var m=document.getElementsByClassName("close")[0];n.style.display="block",console.log(n.style.display),m.onclick=function(){n.style.display="none"},window.onclick=function(c){c.target==n&&(n.style.display="none")}},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},incorrect(){var e=document.getElementById("snackbar");e.innerHTML="Inorrect. Try again",e.style.backgroundColor="red",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_one(){this.one==="String"&&this.two==="Reservation"&&this.three==="releaseContract"&&this.four==="updateKeyStatus"?(this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,this.correct1()):(this.button_value=this.button_text,this.incorrect())},validate_two(){this.three==="locateReservation"?(this.button_value=this.button_text_right,this.display[1]="none",this.display[2]="block",console.log("two_correct")):this.button_value=this.button_text}},data(){return{id:"container",class:"wrapper",button_value:"Next",currentComponent:"constructorWritingComponent",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1]}}},o=e=>(H("data-v-12a58ce1"),e=e(),K(),e),q={class:"app"},A=o(()=>t("div",{id:"snackbar"},"Error Message.",-1)),z={id:"myModal"},G={class:"modal-content"},J=o(()=>t("span",{class:"close"},"×",-1)),Q={class:"row"},X={class:"column"},Y={style:{display:"flex","flex-direction":"row"}},Z=o(()=>t("div",{style:{flex:"5"}},[t("h1",{style:{padding:"25px","padding-top":"0px"}},"Exec class - Sign Contract method"),t("p",{style:{padding:"25px","padding-top":"0px"}},"Add the signContract method to the Exec class. This method will be used in the upcoming experiments")],-1)),$={style:{flex:"1"}},tt=o(()=>t("pre",null,`import java.util.*;
import java.text.*;

public class Exec extends Person{
	private final int empID;
	private static int employeeCount=0;
	
	public Exec()
	{
		super();
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email) {
		super(name, email);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, long phone) {
		super(name, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email, long phone) {
		super(name, email, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public int getEmpID() {
		return empID;
	}
	
	public String requestVehicle(Reservation robj) throws ParseException
	{
		SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd");
    Date d = sdformat.parse("2022-02-29");
		if(robj.getBookingDate().compareTo(d)==0)
		{
			if(robj.locateReservation().compareTo("Vehicle available")==0)
				return "initiate contract";
			else
				return "wait for vehicle";
		}
		return "Booking date not matching";
	}

`,-1)),et=o(()=>t("br",null,null,-1)),nt=o(()=>t("br",null,null,-1)),ot=o(()=>t("br",null,null,-1)),it=o(()=>t("br",null,null,-1)),st=o(()=>t("br",null,null,-1)),rt=o(()=>t("p",{id:"comment"},"//Compare the key status vehicle of the Vehicle object to the provided string.",-1)),at=o(()=>t("br",null,null,-1)),lt=o(()=>t("pre",null,`import java.util.*;
import java.text.*;

public class Exec extends Person{
	private final int empID;
	private static int employeeCount=0;
	
	public Exec()
	{
		super();
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email) {
		super(name, email);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, long phone) {
		super(name, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email, long phone) {
		super(name, email, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public int getEmpID() {
		return empID;
	}
	
	public String requestVehicle(Reservation robj) throws ParseException
	{
		SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd");
    Date d = sdformat.parse("2022-02-29");
		if(robj.getBookingDate().compareTo(d)==0)
		{
			if(robj.locateReservation().compareTo("Vehicle available")==0)
				return "initiate contract";
			else
				return "wait for vehicle";
		}
		return "Booking date not matching";
	}
	
	public String signContract(Reservation robj)
	{
		System.out.println(robj.releaseContract());
		robj.getVehicleObj().updateKeyStatus();
		return "Vehicle key handedover";
	}
	
	public String toString()
	{
		return "[ID: "+ getEmpID()+ ", Name: "+getName()+
				", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";
	}
	
}

`,-1)),pt=U('<div class="column" data-v-12a58ce1><h1 style="padding:25px;padding-bottom:0px;" data-v-12a58ce1>Class diagram.</h1><p style="padding:25px;padding-top:0px;" data-v-12a58ce1>If the diagram does not fit on your screen, right click on the image and in options, choose the &#39;Open in new tab&#39; option.</p><div class="codebox sticky" data-v-12a58ce1><img style="max-width:800px;" src="'+L+'" data-v-12a58ce1></div></div>',1);function mt(e,n,m,c,r,d){return u(),P("main",q,[A,t("div",z,[t("div",G,[J,(u(),R(O(r.currentComponent)))])]),t("div",Q,[t("div",X,[t("div",Y,[Z,t("div",$,[t("button",{style:p([{float:"right","margin-bottom":"30px"},{display:r.display[0]}]),onClick:n[0]||(n[0]=i=>d.popup("printFunctionComponent")),class:"button-30"},"Help",4)])]),t("div",{class:"codebox",style:p({display:r.display[0]})},[tt,s("    public "),a(t("input",{spellcheck:"false",id:"one","onUpdate:modelValue":n[1]||(n[1]=i=>e.one=i),style:{width:"80px"},maxlength:"6"},null,512),[[l,e.one]]),s(" signContract("),a(t("input",{spellcheck:"false",id:"two","onUpdate:modelValue":n[2]||(n[2]=i=>e.two=i),style:{width:"120px"},maxlength:"11"},null,512),[[l,e.two]]),s(" robj){ "),et,s("    { "),nt,s("     System.out.println(robj."),a(t("input",{spellcheck:"false",id:"three","onUpdate:modelValue":n[3]||(n[3]=i=>e.three=i),maxlength:"15",style:{width:"120px"}},null,512),[[l,e.three]]),s("()); "),ot,s("     robj.getVehicleObj()."),a(t("input",{spellcheck:"false",id:"four","onUpdate:modelValue":n[4]||(n[4]=i=>e.four=i),maxlength:"15",style:{width:"130px"}},null,512),[[l,e.four]]),s("(); "),it,s('     return "Vehicle key handedover"; '),st,s("    } "),rt,at,t("button",{class:"button-9",id:"btn1",onClick:n[5]||(n[5]=i=>d.validate_one())},h(r.button_value),1)],4),t("div",{class:"codebox",style:p({display:r.display[1]})},[lt,t("button",{class:"button-9",id:"btn1",onClick:n[6]||(n[6]=i=>e.$router.push("/release-contract-view"))},h(r.button_value),1)],4)]),pt])])}const Tt=F(W,[["render",mt],["__scopeId","data-v-12a58ce1"]]);export{Tt as default};
