import h from"./abstractComponent-7d5996b3.js";import v from"./arrayListComponent-2bb638d3.js";import g from"./arraysComponent-0f19f893.js";import C from"./classCastExceptionComponent-86a925f2.js";import f from"./constructorWritingComponent-58dd154d.js";import _ from"./dateComponent-261c4d12.js";import y from"./extendsComponent-0af1dfaf.js";import D from"./functionCallingWithObjectComponent-6b937f3c.js";import x from"./getterComponent-2914698e.js";import S from"./interfaceComponent-c23cc8cf.js";import k from"./newVariableComponent-db81c3e9.js";import j from"./nullPointerExceptionComponent-bcbaab33.js";import O from"./objectCreationComponent-beacb37d.js";import w from"./parseExceptionComponent-c58e7014.js";import V from"./passingArgumentsToFunctionsComponent-f74d085c.js";import I from"./printFunctionComponent-279899f3.js";import R from"./setterComponent-5876e336.js";import B from"./StringcompareComponent-29f90f51.js";import N from"./superKeywordComponent-a3169cb6.js";import T from"./thisComponent-55ab1b4d.js";import E from"./tryCatchComponent-14e1a240.js";import{_ as M,o as u,c as H,b as t,d as K,r as L,f as a,e as i,w as d,v as m,t as b,i as W,p as A,a as F,j as U}from"./index-0ba2a450.js";const z={components:{abstractComponent:h,arrayListComponent:v,arraysComponent:g,classCastExceptionComponent:C,constructorWritingComponent:f,dateComponent:_,extendsComponent:y,functionCallingWithObjectComponent:D,getterComponent:x,interfaceComponent:S,newVariableComponent:k,nullPointerExceptionComponent:j,objectCreationComponent:O,parseExceptionComponent:w,passingArgumentsToFunctionsComponent:V,printFunctionComponent:I,setterComponent:R,stringCompareComponent:B,superKeywordComponent:N,thisComponent:T,tryCatchComponent:E},methods:{popup(e){this.currentComponent=e,console.log("popup");var n=document.getElementById("myModal");console.log(n);var l=document.getElementsByClassName("close")[0];n.style.display="block",console.log(n.style.display),l.onclick=function(){n.style.display="none"},window.onclick=function(c){c.target==n&&(n.style.display="none")}},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},incorrect(){var e=document.getElementById("snackbar");e.innerHTML="Inorrect. Try again",e.style.backgroundColor="red",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_one(){this.one==="String"&&this.two==="setContractStatus"?(this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,this.correct1()):(this.button_value=this.button_text,this.incorrect())}},data(){return{id:"container",class:"wrapper",button_value:"Next",currentComponent:"constructorWritingComponent",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1]}}},o=e=>(A("data-v-740cf0dd"),e=e(),F(),e),P={class:"app"},q=o(()=>t("div",{id:"snackbar"},"Error Message.",-1)),G={id:"myModal"},J={class:"modal-content"},Q=o(()=>t("span",{class:"close"},"×",-1)),X={class:"row"},Y={class:"column"},Z={style:{display:"flex","flex-direction":"row"}},$=o(()=>t("div",{style:{flex:"5"}},[t("h1",{style:{padding:"25px","padding-top":"0px"}},"Reservation class - Release Contract method"),t("p",{style:{padding:"25px","padding-top":"0px"}},"Add the releaseContract method to the Reservation class. This method will be used in the upcoming experiments")],-1)),tt={style:{flex:"1"}},et=o(()=>t("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;
	
	public Reservation(Customer customerObj, Vehicle vehicleObj) {
		this.customerObj = customerObj;
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public String getContractStatus() {
		return contractStatus;
	}

	public void setContractStatus(String contractStatus) {
		this.contractStatus = contractStatus;
	}

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}
	
	public Customer getCustomerObj() {
		return customerObj;
	}

	public Vehicle getVehicleObj() {
		return vehicleObj;
	}

	public int getReservationID() {
		return reservationID;
	}
	
	public String locateReservation(){
		if(this.getVehicleObj().getKeyStatus().compareTo("available")==0)
			return "Vehicle available";
		else
			return "Vehicle on trip";
	}
`,-1)),nt=o(()=>t("br",null,null,-1)),ot=o(()=>t("br",null,null,-1)),it=o(()=>t("br",null,null,-1)),st=o(()=>t("br",null,null,-1)),rt=o(()=>t("p",{id:"comment"},'//Call the appropriate function to set the contract status to "Reservation released".',-1)),at=o(()=>t("br",null,null,-1)),lt=o(()=>t("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;
	
	public Reservation(Customer customerObj, Vehicle vehicleObj) {
		this.customerObj = customerObj;
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public String getContractStatus() {
		return contractStatus;
	}

	public void setContractStatus(String contractStatus) {
		this.contractStatus = contractStatus;
	}

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}
	
	public Customer getCustomerObj() {
		return customerObj;
	}

	public Vehicle getVehicleObj() {
		return vehicleObj;
	}

	public int getReservationID() {
		return reservationID;
	}
	
	public String locateReservation(){
		if(this.getVehicleObj().getKeyStatus().compareTo("available")==0)
			return "Vehicle available";
		else
			return "Vehicle on trip";
	}
	
	public String releaseContract(){
		this.setContractStatus("Reservation released");
		return this.getContractStatus();
	}

}

`,-1)),ct=W('<div class="column" data-v-740cf0dd><h1 style="padding:25px;padding-bottom:0px;" data-v-740cf0dd>Class diagram.</h1><p style="padding:25px;padding-top:0px;" data-v-740cf0dd>If the diagram does not fit on your screen, right click on the image and in options, choose the &#39;Open in new tab&#39; option.</p><div class="codebox sticky" data-v-740cf0dd><img style="max-width:800px;" src="'+U+'" data-v-740cf0dd></div></div>',1);function pt(e,n,l,c,s,p){return u(),H("main",P,[q,t("div",G,[t("div",J,[Q,(u(),K(L(s.currentComponent)))])]),t("div",X,[t("div",Y,[t("div",Z,[$,t("div",tt,[t("button",{style:a([{float:"right","margin-bottom":"30px"},{display:s.display[0]}]),onClick:n[0]||(n[0]=r=>p.popup("thisComponent")),class:"button-30"},"Help",4)])]),t("div",{class:"codebox",style:a({display:s.display[0]})},[et,i("    public "),d(t("input",{spellcheck:"false",id:"one","onUpdate:modelValue":n[1]||(n[1]=r=>e.one=r),style:{width:"80px"},maxlength:"6"},null,512),[[m,e.one]]),i(" releaseContract() "),nt,i("    { "),ot,i("     this."),d(t("input",{spellcheck:"false",id:"two","onUpdate:modelValue":n[2]||(n[2]=r=>e.two=r),maxlength:"17",style:{width:"140px"}},null,512),[[m,e.two]]),i('("Reservation released"); '),it,i("     return this.getContractStatus(); "),st,i("    } "),rt,at,t("button",{class:"button-9",id:"btn1",onClick:n[3]||(n[3]=r=>p.validate_one())},b(s.button_value),1)],4),t("div",{class:"codebox",style:a({display:s.display[1]})},[lt,t("button",{class:"button-9",id:"btn1",onClick:n[4]||(n[4]=r=>e.$router.push("/update-key-status-view"))},b(s.button_value),1)],4)]),ct])])}const Nt=M(z,[["render",pt],["__scopeId","data-v-740cf0dd"]]);export{Nt as default};
