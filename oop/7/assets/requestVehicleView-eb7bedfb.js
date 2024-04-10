import b from"./abstractComponent-7d5996b3.js";import y from"./arrayListComponent-2bb638d3.js";import g from"./classCastExceptionComponent-86a925f2.js";import v from"./constructorWritingComponent-58dd154d.js";import _ from"./dateComponent-261c4d12.js";import C from"./extendsComponent-0af1dfaf.js";import f from"./functionCallingWithObjectComponent-6b937f3c.js";import x from"./getterComponent-2914698e.js";import w from"./interfaceComponent-c23cc8cf.js";import D from"./newVariableComponent-db81c3e9.js";import E from"./nullPointerExceptionComponent-bcbaab33.js";import I from"./objectCreationComponent-beacb37d.js";import k from"./parseExceptionComponent-c58e7014.js";import S from"./passingArgumentsToFunctionsComponent-f74d085c.js";import V from"./printFunctionComponent-279899f3.js";import j from"./setterComponent-5876e336.js";import T from"./StringcompareComponent-29f90f51.js";import B from"./superKeywordComponent-a3169cb6.js";import N from"./thisComponent-55ab1b4d.js";import M from"./tryCatchComponent-14e1a240.js";import{_ as q,o as h,c as P,b as t,d as R,r as F,f as r,e as i,w as p,v as m,t as c,i as W,p as H,a as L,j as O}from"./index-0ba2a450.js";const U={components:{abstractComponent:b,arrayListComponent:y,classCastExceptionComponent:g,constructorWritingComponent:v,dateComponent:_,extendsComponent:C,functionCallingWithObjectComponent:f,getterComponent:x,interfaceComponent:w,newVariableComponent:D,nullPointerExceptionComponent:E,objectCreationComponent:I,parseExceptionComponent:k,passingArgumentsToFunctionsComponent:S,printFunctionComponent:V,setterComponent:j,stringCompareComponent:T,superKeywordComponent:B,thisComponent:N,tryCatchComponent:M},methods:{popup(e){this.currentComponent=e,console.log("popup");var n=document.getElementById("myModal");console.log(n);var u=document.getElementsByClassName("close")[0];n.style.display="block",console.log(n.style.display),u.onclick=function(){n.style.display="none"},window.onclick=function(d){d.target==n&&(n.style.display="none")}},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},incorrect(){var e=document.getElementById("snackbar");e.innerHTML="Inorrect. Try again",e.style.backgroundColor="red",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_one(){this.one=="String"&&this.two=="Reservation"?(this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,this.correct1()):(this.button_value=this.button_text,this.incorrect())},validate_two(){this.three==="locateReservation"?(this.button_value=this.button_text_right,this.display[1]="none",this.display[2]="block",console.log("two_correct")):this.button_value=this.button_text}},data(){return{id:"container",class:"wrapper",button_value:"Next",currentComponent:"constructorWritingComponent",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1]}}},o=e=>(H("data-v-482b4148"),e=e(),L(),e),A={class:"app"},z=o(()=>t("div",{id:"snackbar"},"Error Message.",-1)),K={id:"myModal"},G={class:"modal-content"},J=o(()=>t("span",{class:"close"},"×",-1)),Q={class:"row"},X={class:"column"},Y={style:{display:"flex","flex-direction":"row"}},Z=o(()=>t("div",{style:{flex:"5"}},[t("h1",{style:{padding:"25px","padding-top":"0px"}},"Exec class - Request Vehicle method"),t("p",{style:{padding:"25px","padding-top":"0px"}},"Add the requestVehicle method to the Exec class. This method will be used in the upcoming experiments")],-1)),$={style:{flex:"1"}},tt=o(()=>t("pre",null,`import java.util.*;
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
	

`,-1)),et=o(()=>t("br",null,null,-1)),nt=o(()=>t("p",{id:"comment"},"//Write a function 'requestVehicle' of return type String that takes a Reservation object as parameter.",-1)),ot=o(()=>t("br",null,null,-1)),it=o(()=>t("pre",null,`import java.util.*;
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
	

`,-1)),st=o(()=>t("br",null,null,-1)),lt=o(()=>t("br",null,null,-1)),rt=o(()=>t("br",null,null,-1)),at=o(()=>t("br",null,null,-1)),pt=o(()=>t("br",null,null,-1)),mt=o(()=>t("br",null,null,-1)),ct=o(()=>t("p",{id:"comment"},"//Call the appropriate function to compare the reservation to the provided string.",-1)),ut=o(()=>t("br",null,null,-1)),dt=o(()=>t("pre",null,`import java.util.*;
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
	
}
`,-1)),ht=W('<div class="column" data-v-482b4148><h1 style="padding:25px;padding-bottom:0px;" data-v-482b4148>Class diagram.</h1><p style="padding:25px;padding-top:0px;" data-v-482b4148>If the diagram does not fit on your screen, right click on the image and in options, choose the &#39;Open in new tab&#39; option.</p><div class="codebox sticky" data-v-482b4148><img style="max-width:800px;" src="'+O+'" data-v-482b4148></div></div>',1);function bt(e,n,u,d,l,a){return h(),P("main",A,[z,t("div",K,[t("div",G,[J,(h(),R(F(l.currentComponent)))])]),t("div",Q,[t("div",X,[t("div",Y,[Z,t("div",$,[t("button",{style:r([{float:"right","margin-bottom":"30px"},{display:l.display[1]}]),onClick:n[0]||(n[0]=s=>a.popup("functionCallingWithObjectComponent")),class:"button-30"},"Help",4)])]),t("div",{class:"codebox",style:r({display:l.display[0]})},[tt,i("    public "),p(t("input",{spellcheck:"false",id:"one","onUpdate:modelValue":n[1]||(n[1]=s=>e.one=s),style:{width:"80px"},maxlength:"6"},null,512),[[m,e.one]]),i(" requestVehicle("),p(t("input",{spellcheck:"false",id:"two","onUpdate:modelValue":n[2]||(n[2]=s=>e.two=s),maxlength:"11",style:{width:"100px"}},null,512),[[m,e.two]]),i(" robj) throws ParseException{ "),et,nt,ot,t("button",{class:"button-9",id:"btn1",onClick:n[3]||(n[3]=s=>a.validate_one())},c(l.button_value),1)],4),t("div",{class:"codebox",style:r({display:l.display[1]})},[it,i("    if(robj."),p(t("input",{spellcheck:"false",id:"three","onUpdate:modelValue":n[4]||(n[4]=s=>e.three=s),style:{width:"150px"},maxlength:"17"},null,512),[[m,e.three]]),i('().compareTo("Vehicle available")==0) '),st,i('    return "Initiate contract"; '),lt,i("   else "),rt,i('    return "Wait for vehicle"; '),at,i("  } "),pt,i(' } return "Booking date not working"; '),mt,ct,ut,t("button",{class:"button-9",id:"btn1",onClick:n[5]||(n[5]=s=>a.validate_two())},c(l.button_value),1)],4),t("div",{class:"codebox",style:r({display:l.display[2]})},[dt,t("button",{class:"button-9",id:"btn1",onClick:n[6]||(n[6]=s=>e.$router.push("/locate-reservation-view"))},c(l.button_value),1)],4)]),ht])])}const Rt=q(U,[["render",bt],["__scopeId","data-v-482b4148"]]);export{Rt as default};
