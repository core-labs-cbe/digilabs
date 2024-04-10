import{_ as g,o as b,c as y,p as f,a as S,b as t,d as D,e as V,f as N,g as O,h as R,i as I,j as $,k as T,l as F,n as E,m as B,q as L,r as H,s as U,t as M,u as K,v as A,w as P,x as J,y as W,z as j,A as x,B as k,C as u,D as n,E as p,F as m,G as v,H as i,I as a,J as G,K as z,L as q,M as Q}from"./index-db6c1348.js";const X={},Y=e=>(f("data-v-f06f3bb4"),e=e(),S(),e),Z={class:"app"},tt=Y(()=>t("div",{class:"codebox"},[t("pre",null,`public class Customer {
	
	private final int customerID;
	private String email;
	private String custName;
	private long phone;
	private String city;
	private static int customerCount=0; 
	
	public Customer()
	{
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String custName, String email) {
		this();
		this.custName = custName;
		this.email=email;
	}
	
	public Customer(String custName, long phone) {
		this();
		this.custName = custName;
		this.setPhone(phone);
	}
	
	public Customer(String custName, String email, long phone) {
		this();
		this.custName = custName;
		this.email=email;
		this.setPhone(phone);
	}

	public String getcustName() {
		return custName;
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
	
	public int getcustomerID() {
		return customerID;
	}
	
	public String toString()
	{
		return "[ID: "+ getcustomerID()+ ", Name: "+getcustName()+
				", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";
	}
}

      
      `)],-1)),et=[tt];function nt(e,o){return b(),y("main",Z,et)}const ot=g(X,[["render",nt],["__scopeId","data-v-f06f3bb4"]]);const lt={components:{abstractComponent:D,arrayListComponent:V,classCastExceptionComponent:N,constructorWritingComponent:O,dateComponent:R,extendsComponent:I,functionCallingWithObjectComponent:$,getterComponent:T,interfaceComponent:F,newVariableComponent:E,nullPointerExceptionComponent:B,objectCreationComponent:L,parseExceptionComponent:H,passingArgumentsToFunctionsComponent:U,printFunctionComponent:M,setterComponent:K,stringCompareComponent:A,superKeywordComponent:P,thisComponent:J,tryCatchComponent:W},methods:{popup(e){this.currentComponent=e,console.log("popup");var o=document.getElementById("myModal");console.log(o);var _=document.getElementsByClassName("close")[0];o.style.display="block",console.log(o.style.display),_.onclick=function(){o.style.display="none"},window.onclick=function(C){C.target==o&&(o.style.display="none")}},correct(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},incorrect(){var e=document.getElementById("snackbar");e.innerHTML="Inorrect. Try again",e.style.backgroundColor="red",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_four(){if(this.eight=="String"&&this.nine=="customerName"&&this.ten=="long"&&this.eleven=="phone"&&this.twelve=="Vehicle"&&this.thirteen=="vehicleObj"){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3),this.display[0]="none",this.display[1]="block"}else this.incorrect()},validate_five(){if(this.fourteen=="new"&&this.fifteen=="customerName"&&this.sixteen=="phone"){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3),this.display[1]="none",this.display[2]="block"}else this.incorrect()},validate_six(){this.button_value="Next",this.display[2]="none",this.display[3]="block"},validate_seven(){this.button_value="Next",this.display[3]="none",this.display[4]="block",this.$emit("reservationComplete",!0)}},data(){return{id:"container",class:"wrapper",button_value:"Next",currentComponent:"constructorWritingComponent",button_text:"Incorrect. Try again",button_text_right:"Correct. Next",correct:!1,display:["block","none","none","none","none","none","none","none","none","none","none","none","none","none","none"]}}},s=e=>(f("data-v-37249d55"),e=e(),S(),e),st={class:"app"},it=s(()=>t("div",{id:"snackbar"},"Some text some message..",-1)),at={id:"myModal"},rt={class:"modal-content"},ct=s(()=>t("span",{class:"close"},"×",-1)),ut={class:"row"},dt={class:"column"},pt={style:{display:"flex","flex-direction":"row"}},ht=s(()=>t("div",{style:{flex:"5"}},[t("h1",{style:{padding:"25px","padding-bottom":"0px"}},"Constructing the Reservation Class"),t("p",{style:{padding:"25px","padding-top":"0px"}},"To understand the concept of composition, create the appropriate constructors.")],-1)),mt={style:{flex:"1"}},bt=s(()=>t("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;

      `,-1)),vt=s(()=>t("br",null,null,-1)),_t=s(()=>t("p",{id:"comment"},"//Create a constructor for Reservation class with by passing Customer parameters and Vehicle object to establish composition",-1)),gt=s(()=>t("br",null,null,-1)),yt=s(()=>t("br",null,null,-1)),Ct=s(()=>t("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;
	
	public Reservation(String customerName, long phone, Vehicle vehicleObj) {
    `,-1)),ft=s(()=>t("br",null,null,-1)),St=s(()=>t("br",null,null,-1)),wt=s(()=>t("br",null,null,-1)),xt=s(()=>t("br",null,null,-1)),kt=s(()=>t("br",null,null,-1)),jt=s(()=>t("p",{id:"comment"},"//Assign new Customer object with customerName and phone values to customerObj - enforcing composition",-1)),Dt=s(()=>t("br",null,null,-1)),Vt=s(()=>t("br",null,null,-1)),Nt=s(()=>t("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;
	
	public Reservation(String customerName, long phone, Vehicle vehicleObj) {
		this.customerObj = new Customer(customerName, phone);
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public Reservation(String customerName, String email, Vehicle vehicleObj){
		this.customerObj = new Customer(customerName, email);
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}
    `,-1)),Ot=s(()=>t("br",null,null,-1)),Rt=s(()=>t("br",null,null,-1)),It=s(()=>t("p",{id:"comment",style:{"font-weight":"bold"}},"//Here the second constructor using customerName and email is created similarly - enforcing composition",-1)),$t=s(()=>t("br",null,null,-1)),Tt=s(()=>t("br",null,null,-1)),Ft=s(()=>t("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;
	
	public Reservation(String customerName, long phone, Vehicle vehicleObj) {
		this.customerObj = new Customer(customerName, phone);
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public Reservation(String customerName, String email, Vehicle vehicleObj){
		this.customerObj = new Customer(customerName, email);
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

  public Reservation(String customerName, String email, long phone, Vehicle vehicleObj){
		this.customerObj = new Customer(customerName, email, phone);
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}
    `,-1)),Et=s(()=>t("br",null,null,-1)),Bt=s(()=>t("br",null,null,-1)),Lt=s(()=>t("p",{id:"comment",style:{"font-weight":"bold"}},"//Here the third constructor using customerName email and phone is created similarly - enforcing composition",-1)),Ht=s(()=>t("br",null,null,-1)),Ut=s(()=>t("br",null,null,-1)),Mt=s(()=>t("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;
	

	public Reservation(String customerName, long phone, Vehicle vehicleObj) {
		this.customerObj = new Customer(customerName, phone);
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public Reservation(String customerName, String email, Vehicle vehicleObj){
		this.customerObj = new Customer(customerName, email);
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public Reservation(String customerName, String email, long phone, Vehicle vehicleObj){
		this.customerObj = new Customer(customerName, email, phone);
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
	
	public String releaseContract(){
		if(bookingDate.compareTo(releaseDate)==0 && vehicleObj.getKeyStatus().compareTo("available")==0)
			return vehicleObj.updateKeyStatus();
		else
			return "Vehicle not avaible";
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
	
}

      `,-1)),Kt=s(()=>t("br",null,null,-1)),At={class:"column",style:{position:"relative",left:"5%",width:"fit-content"}},Pt={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},Jt={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},Wt=s(()=>t("br",null,null,-1)),Gt=s(()=>t("br",null,null,-1)),zt=s(()=>t("br",null,null,-1)),qt=s(()=>t("br",null,null,-1)),Qt=s(()=>t("br",null,null,-1)),Xt=s(()=>t("br",null,null,-1)),Yt={style:{padding:"15px","line-height":"40px"}},Zt=s(()=>t("br",null,null,-1)),te=s(()=>t("br",null,null,-1)),ee=s(()=>t("br",null,null,-1)),ne=s(()=>t("br",null,null,-1)),oe=s(()=>t("br",null,null,-1)),le=s(()=>t("br",null,null,-1)),se={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},ie={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},ae=s(()=>t("br",null,null,-1)),re=s(()=>t("br",null,null,-1)),ce=s(()=>t("br",null,null,-1)),ue=s(()=>t("br",null,null,-1)),de=s(()=>t("br",null,null,-1)),pe=s(()=>t("br",null,null,-1)),he={style:{padding:"15px","line-height":"40px"}},me=s(()=>t("br",null,null,-1)),be=s(()=>t("br",null,null,-1)),ve=s(()=>t("br",null,null,-1)),_e=s(()=>t("br",null,null,-1)),ge=s(()=>t("br",null,null,-1)),ye=s(()=>t("br",null,null,-1)),Ce={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},fe={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},Se=s(()=>t("br",null,null,-1)),we=s(()=>t("br",null,null,-1)),xe=s(()=>t("br",null,null,-1)),ke=s(()=>t("br",null,null,-1)),je=s(()=>t("br",null,null,-1)),De=s(()=>t("br",null,null,-1)),Ve={style:{padding:"15px","line-height":"40px"}},Ne=s(()=>t("br",null,null,-1)),Oe=s(()=>t("br",null,null,-1)),Re=s(()=>t("br",null,null,-1)),Ie=s(()=>t("br",null,null,-1)),$e=s(()=>t("br",null,null,-1)),Te=s(()=>t("br",null,null,-1)),Fe={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},Ee={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},Be=s(()=>t("br",null,null,-1)),Le=s(()=>t("br",null,null,-1)),He=s(()=>t("br",null,null,-1)),Ue=s(()=>t("br",null,null,-1)),Me=s(()=>t("br",null,null,-1)),Ke=s(()=>t("br",null,null,-1)),Ae={style:{padding:"15px","line-height":"40px"}},Pe=s(()=>t("br",null,null,-1)),Je=s(()=>t("br",null,null,-1)),We=s(()=>t("br",null,null,-1)),Ge=s(()=>t("br",null,null,-1)),ze=s(()=>t("br",null,null,-1)),qe=s(()=>t("br",null,null,-1)),Qe={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},Xe={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},Ye=s(()=>t("br",null,null,-1)),Ze=s(()=>t("br",null,null,-1)),tn=s(()=>t("br",null,null,-1)),en=s(()=>t("br",null,null,-1)),nn=s(()=>t("br",null,null,-1)),on=s(()=>t("br",null,null,-1)),ln={style:{padding:"15px","line-height":"40px"}},sn=s(()=>t("br",null,null,-1)),an=s(()=>t("br",null,null,-1)),rn=s(()=>t("br",null,null,-1)),cn=s(()=>t("br",null,null,-1)),un=s(()=>t("br",null,null,-1)),dn=s(()=>t("br",null,null,-1));function pn(e,o,_,C,r,h){const l=j("mark1"),w=j("mark0");return b(),y("main",st,[it,t("div",at,[t("div",rt,[ct,(b(),x(k(r.currentComponent)))])]),t("div",ut,[t("div",dt,[t("div",pt,[ht,t("div",mt,[t("button",{style:u([{float:"right","margin-bottom":"30px"},{display:r.display[0]}]),onClick:o[0]||(o[0]=d=>h.popup("constructorWritingComponent")),class:"button-30"},"Help",4),t("button",{style:u([{float:"right","margin-bottom":"30px"},{display:r.display[1]}]),onClick:o[1]||(o[1]=d=>h.popup("objectCreationComponent")),class:"button-30"},"Help",4)])]),t("div",{class:"codebox",id:"codebox",style:u({display:r.display[0]})},[bt,n("    public Reservation( "),p(t("input",{spellcheck:"false",maxlength:"6",style:{width:"85px"},"onUpdate:modelValue":o[2]||(o[2]=d=>e.eight=d)},null,512),[[m,e.eight]]),p(t("input",{spellcheck:"false",maxlength:"12",style:{width:"105px"},"onUpdate:modelValue":o[3]||(o[3]=d=>e.nine=d)},null,512),[[m,e.nine]]),n(", "),p(t("input",{spellcheck:"false",maxlength:"4",style:{width:"60px"},"onUpdate:modelValue":o[4]||(o[4]=d=>e.ten=d)},null,512),[[m,e.ten]]),p(t("input",{spellcheck:"false",maxlength:"5",style:{width:"70px"},"onUpdate:modelValue":o[5]||(o[5]=d=>e.eleven=d)},null,512),[[m,e.eleven]]),n(", "),p(t("input",{spellcheck:"false",maxlength:"7",style:{width:"90px"},"onUpdate:modelValue":o[6]||(o[6]=d=>e.twelve=d)},null,512),[[m,e.twelve]]),p(t("input",{spellcheck:"false",maxlength:"10",style:{width:"100px"},"onUpdate:modelValue":o[7]||(o[7]=d=>e.thirteen=d)},null,512),[[m,e.thirteen]]),n(",) "),vt,n("  "),_t,gt,n(" } "),yt,t("button",{class:"button-9",id:"btn4",onClick:o[8]||(o[8]=d=>h.validate_four())},v(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:u({display:r.display[1]})},[Ct,n("        this.customerObj = "),p(t("input",{spellcheck:"false",maxlength:"3",style:{width:"50px"},"onUpdate:modelValue":o[9]||(o[9]=d=>e.fourteen=d)},null,512),[[m,e.fourteen]]),n(" Customer("),p(t("input",{spellcheck:"false",maxlength:"12",style:{width:"120px"},"onUpdate:modelValue":o[10]||(o[10]=d=>e.fifteen=d)},null,512),[[m,e.fifteen]]),n(", "),p(t("input",{spellcheck:"false",maxlength:"5",style:{width:"70px"},"onUpdate:modelValue":o[11]||(o[11]=d=>e.sixteen=d)},null,512),[[m,e.sixteen]]),n("); "),ft,n("       this.vehicleObj = vehicleObj; "),St,n("       reservationCount++; "),wt,n("       this.reservationID=reservationCount;        "),xt,n("   "),kt,n(" } "),jt,Dt,n(" } "),Vt,t("button",{class:"button-9",id:"btn5",onClick:o[12]||(o[12]=d=>h.validate_five())},v(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:u({display:r.display[2]})},[Nt,Ot,n("   "),Rt,n(" } "),It,$t,n(" } "),Tt,t("button",{class:"button-9",id:"btn6",onClick:o[13]||(o[13]=d=>h.validate_six())},v(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:u({display:r.display[3]})},[Ft,Et,n("   "),Bt,n(" } "),Lt,Ht,n(" } "),Ut,t("button",{class:"button-9",id:"btn7",onClick:o[14]||(o[14]=d=>h.validate_seven())},v(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:u({display:r.display[4]})},[Mt,n(),Kt],4)]),t("div",At,[t("div",{style:u([{"margin-left":"15%",height:"fit-content",width:"400px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:r.display[0]}])},[t("div",Pt,[i(l,null,{default:a(()=>[n("Class Reservation")]),_:1})]),t("div",Jt,[i(l,null,{default:a(()=>[n("-reservationID: int ")]),_:1}),Wt,i(l,null,{default:a(()=>[n("-customerObj: Customer")]),_:1}),Gt,i(l,null,{default:a(()=>[n("-vehicleObj: Vehicle")]),_:1}),zt,i(l,null,{default:a(()=>[n("-contractStatus: String")]),_:1}),qt,i(l,null,{default:a(()=>[n("+booking Date: Date")]),_:1}),Qt,i(l,null,{default:a(()=>[n("-releaseDate: Date")]),_:1}),Xt,i(l,null,{default:a(()=>[n("-reservationCount: int")]),_:1})]),t("div",Yt,[i(w,null,{default:a(()=>[n("+Reservation(String customerName, long phone, Vehicle vehicleObj)")]),_:1}),Zt,n(" +Reservation(String customerName, String email, Vehicle vehicleObj) "),te,n(" +Reservation(String customerName, String email, long phone, Vehicle vehicleObj) "),ee,n(" +setContractStatus(String contractStatus): void "),ne,n(" +getContractStatus(): String "),oe,n(" +releaseContract(): String "),le,n(" +getReleaseDate(): Date ")])],4),t("div",{style:u([{"margin-left":"15%",height:"fit-content",width:"400px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:r.display[1]}])},[t("div",se,[i(l,null,{default:a(()=>[n("Class Reservation")]),_:1})]),t("div",ie,[i(l,null,{default:a(()=>[n("-reservationID: int ")]),_:1}),ae,i(l,null,{default:a(()=>[n("-customerObj: Customer")]),_:1}),re,i(l,null,{default:a(()=>[n("-vehicleObj: Vehicle")]),_:1}),ce,i(l,null,{default:a(()=>[n("-contractStatus: String")]),_:1}),ue,i(l,null,{default:a(()=>[n("+booking Date: Date")]),_:1}),de,i(l,null,{default:a(()=>[n("-releaseDate: Date")]),_:1}),pe,i(l,null,{default:a(()=>[n("-reservationCount: int")]),_:1})]),t("div",he,[i(w,null,{default:a(()=>[n("+Reservation(String customerName, long phone, Vehicle vehicleObj)")]),_:1}),me,n(" +Reservation(String customerName, String email, Vehicle vehicleObj) "),be,n(" +Reservation(String customerName, String email, long phone, Vehicle vehicleObj) "),ve,n(" +setContractStatus(String contractStatus): void "),_e,n(" +getContractStatus(): String "),ge,n(" +releaseContract(): String "),ye,n(" +getReleaseDate(): Date ")])],4),t("div",{style:u([{"margin-left":"15%",height:"fit-content",width:"400px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:r.display[2]}])},[t("div",Ce,[i(l,null,{default:a(()=>[n("Class Reservation")]),_:1})]),t("div",fe,[i(l,null,{default:a(()=>[n("-reservationID: int ")]),_:1}),Se,i(l,null,{default:a(()=>[n("-customerObj: Customer")]),_:1}),we,i(l,null,{default:a(()=>[n("-vehicleObj: Vehicle")]),_:1}),xe,i(l,null,{default:a(()=>[n("-contractStatus: String")]),_:1}),ke,i(l,null,{default:a(()=>[n("+booking Date: Date")]),_:1}),je,i(l,null,{default:a(()=>[n("-releaseDate: Date")]),_:1}),De,i(l,null,{default:a(()=>[n("-reservationCount: int")]),_:1})]),t("div",Ve,[i(l,null,{default:a(()=>[n("+Reservation(String customerName, long phone, Vehicle vehicleObj)")]),_:1}),Ne,i(w,null,{default:a(()=>[n("+Reservation(String customerName, String email, Vehicle vehicleObj)")]),_:1}),Oe,n(" +Reservation(String customerName, String email, long phone, Vehicle vehicleObj) "),Re,n(" +setContractStatus(String contractStatus): void "),Ie,n(" +getContractStatus(): String "),$e,n(" +releaseContract(): String "),Te,n(" +getReleaseDate(): Date ")])],4),t("div",{style:u([{"margin-left":"15%",height:"fit-content",width:"400px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:r.display[3]}])},[t("div",Fe,[i(l,null,{default:a(()=>[n("Class Reservation")]),_:1})]),t("div",Ee,[i(l,null,{default:a(()=>[n("-reservationID: int ")]),_:1}),Be,i(l,null,{default:a(()=>[n("-customerObj: Customer")]),_:1}),Le,i(l,null,{default:a(()=>[n("-vehicleObj: Vehicle")]),_:1}),He,i(l,null,{default:a(()=>[n("-contractStatus: String")]),_:1}),Ue,i(l,null,{default:a(()=>[n("+booking Date: Date")]),_:1}),Me,i(l,null,{default:a(()=>[n("-releaseDate: Date")]),_:1}),Ke,i(l,null,{default:a(()=>[n("-reservationCount: int")]),_:1})]),t("div",Ae,[i(l,null,{default:a(()=>[n("+Reservation(String customerName, long phone, Vehicle vehicleObj)")]),_:1}),Pe,i(l,null,{default:a(()=>[n("+Reservation(String customerName, String email, Vehicle vehicleObj)")]),_:1}),Je,i(w,null,{default:a(()=>[n("+Reservation(String customerName, String email, long phone, Vehicle vehicleObj)")]),_:1}),We,n(" +setContractStatus(String contractStatus): void "),Ge,n(" +getContractStatus(): String "),ze,n(" +releaseContract(): String "),qe,n(" +getReleaseDate(): Date ")])],4),t("div",{style:u([{"margin-left":"15%",height:"fit-content",width:"400px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:r.display[4]}])},[t("div",Qe,[i(l,null,{default:a(()=>[n("Class Reservation")]),_:1})]),t("div",Xe,[i(l,null,{default:a(()=>[n("-reservationID: int ")]),_:1}),Ye,i(l,null,{default:a(()=>[n("-customerObj: Customer")]),_:1}),Ze,i(l,null,{default:a(()=>[n("-vehicleObj: Vehicle")]),_:1}),tn,i(l,null,{default:a(()=>[n("-contractStatus: String")]),_:1}),en,i(l,null,{default:a(()=>[n("+booking Date: Date")]),_:1}),nn,i(l,null,{default:a(()=>[n("-releaseDate: Date")]),_:1}),on,i(l,null,{default:a(()=>[n("-reservationCount: int")]),_:1})]),t("div",ln,[i(l,null,{default:a(()=>[n("+Reservation(String customerName, long phone, Vehicle vehicleObj)")]),_:1}),sn,i(l,null,{default:a(()=>[n("+Reservation(String customerName, String email, Vehicle vehicleObj)")]),_:1}),an,i(l,null,{default:a(()=>[n("+Reservation(String customerName, String email, long phone, Vehicle vehicleObj)")]),_:1}),rn,i(l,null,{default:a(()=>[n("+setContractStatus(String contractStatus): void")]),_:1}),cn,i(l,null,{default:a(()=>[n("+getContractStatus(): String")]),_:1}),un,i(l,null,{default:a(()=>[n("+releaseContract(): String")]),_:1}),dn,i(l,null,{default:a(()=>[n("+getReleaseDate(): Date")]),_:1})])],4)])])])}const hn=g(lt,[["render",pn],["__scopeId","data-v-37249d55"]]);const mn={},bn=e=>(f("data-v-752286a7"),e=e(),S(),e),vn={class:"app"},_n=bn(()=>t("div",{class:"codebox"},[t("pre",null,`
public class Vehicle {
	private final int regNum;
	private String keyStatus;
	
	public Vehicle(int regNum)
	{
		this.regNum=regNum;
		this.keyStatus="available";
	}
	
	public String updateKeyStatus()
	{
		this.keyStatus="not available";
		return this.keyStatus;
	}

	public String getKeyStatus() {
		return keyStatus;
	}

	public void setKeyStatus(String keyStatus) {
		this.keyStatus = keyStatus;
	}

	public int getRegNum() {
		return regNum;
	}
	
}

    `)],-1)),gn=[_n];function yn(e,o){return b(),y("main",vn,gn)}const Cn=g(mn,[["render",yn],["__scopeId","data-v-752286a7"]]);const fn={},Sn={class:"app"},wn={class:"box"},xn=G('<h1 data-v-e9651a51>Instructions</h1><ol data-v-e9651a51><li class="arrow" data-v-e9651a51>In this section of the experiment, we&#39;ll be writing code to understand composition.</li><li class="arrow" data-v-e9651a51>Customer, Reservation and Vehicle classes have been implemented and are to be referred to.</li><li class="arrow" data-v-e9651a51>To combine the different classes as shown in the diagram, we will be creating a Reservation System class.</li><li class="arrow" data-v-e9651a51>Switch between instructions, classes and the class diagram by clicking on the respective elements in the top navigation bar.</li><li class="arrow" data-v-e9651a51>Once you&#39;re done programming the Reservation and Reservation System classes, a&#39;Next&#39; button will appear at the bottom left corner.</li></ol>',2);function kn(e,o){return b(),y("main",Sn,[t("div",wn,[xn,t("button",{class:"button-9",onClick:o[0]||(o[0]=_=>e.$emit("instructions-read",!0))},"Next")])])}const jn=g(fn,[["render",kn],["__scopeId","data-v-e9651a51"]]);const Dn={components:{abstractComponent:D,arrayListComponent:V,classCastExceptionComponent:N,constructorWritingComponent:O,dateComponent:R,extendsComponent:I,functionCallingWithObjectComponent:$,getterComponent:T,interfaceComponent:F,newVariableComponent:E,nullPointerExceptionComponent:B,objectCreationComponent:L,parseExceptionComponent:H,passingArgumentsToFunctionsComponent:U,printFunctionComponent:M,setterComponent:K,stringCompareComponent:A,superKeywordComponent:P,thisComponent:J,tryCatchComponent:W},methods:{popup(e){this.currentComponent=e,console.log("popup");var o=document.getElementById("myModal");console.log(o);var _=document.getElementsByClassName("close")[0];o.style.display="block",console.log(o.style.display),_.onclick=function(){o.style.display="none"},window.onclick=function(C){C.target==o&&(o.style.display="none")}},correct(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},incorrect(){var e=document.getElementById("snackbar");e.innerHTML="Inorrect. Try again",e.style.backgroundColor="red",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_one(){if(this.one=="Vehicle"&&this.two=="5678"){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3),this.display[0]="none",this.display[1]="inherit"}else this.incorrect()},validate_two(){if(this.three=="Reservation"&&this.four=="rObjComposition"&&this.five=="vobj"){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3),this.display[1]="none",this.display[2]="inherit"}else this.incorrect()},validate_three(){if(this.six=="getCustomerObj"&&this.seven=="setCity"){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3),this.display[2]="none",this.display[3]="inherit"}else this.incorrect()},validate_four(){if(this.eight=="setBookingDate"&&this.nine=="new"&&this.ten=="Date()"){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3),this.display[3]="none",this.display[4]="inherit"}else this.incorrect()},validate_five(){if(this.eleven=="getVehicleObj"&&this.twelve=="updateKeyStatus"){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3),this.display[4]="none",this.display[5]="inherit",this.$emit("reservationSystemComplete",!0)}else this.incorrect()}},data(){return{id:"container",class:"wrapper",currentComponent:"constructorWritingComponent",button_value:"Next",button_text:"Incorrect. Try again",button_text_right:"Correct. Next",correct:!1,display:["inherit","none","none","none","none","none","none","none","none","none","none","none","none","none","none"]}}},c=e=>(f("data-v-ef0029c4"),e=e(),S(),e),Vn={class:"app"},Nn=c(()=>t("div",{id:"snackbar"},"Some text some message..",-1)),On={id:"myModal"},Rn={class:"modal-content"},In=c(()=>t("span",{class:"close"},"×",-1)),$n=c(()=>t("div",{class:"column",style:{position:"sticky",top:"20%",left:"60%",float:"right"}},[t("div",{class:"column"},[t("div",{class:"codebox"},[t("h5",null,"Composition: "),t("p",null,"Write a demo class that creates a vehicle object with a registration number. Create a reservation object that does a reservation of the vehicle for current date by providing customerName, email and/or phone number. Later set the city as Coimbatore. Also release the vehicle.")])])],-1)),Tn={class:"row"},Fn={class:"column"},En={style:{display:"flex","flex-direction":"row"}},Bn=c(()=>t("div",{style:{flex:"5"}},[t("h1",{style:{padding:"25px","padding-bottom":"0px"}},"Modifying the TestDriver class"),t("p",{style:{padding:"25px","padding-top":"0px"}},"To understand composition, create a reservation object that reserves a vehicle on the current date.")],-1)),Ln={style:{flex:"1"}},Hn=c(()=>t("pre",null,`import java.util.Scanner;
import java.util.Date;

public class TestDriver {

    public static void main(String[] args) {`,-1)),Un=c(()=>t("p",{id:"comment"},"//Create a Vehicle object with regNum 5678",-1)),Mn=c(()=>t("br",null,null,-1)),Kn=c(()=>t("br",null,null,-1)),An=c(()=>t("pre",null,`import java.util.Scanner;
import java.util.Date;

public class TestDriver {

    public static void main(String[] args) {
      Vehicle vobj = new Vehicle(5678);
                `,-1)),Pn=c(()=>t("br",null,null,-1)),Jn=c(()=>t("p",{id:"comment"},'//Create a new Reservation object "rObjComposition" and pass vobj',-1)),Wn=c(()=>t("br",null,null,-1)),Gn=c(()=>t("br",null,null,-1)),zn=c(()=>t("pre",null,`import java.util.Scanner;
import java.util.Date;

public class TestDriver {

	public static void main(String[] args) {
		Vehicle vobj = new Vehicle(5678);
		Reservation rObjComposition = new Reservation("JKL", 999999999, vobj);
      
      `,-1)),qn=c(()=>t("br",null,null,-1)),Qn=c(()=>t("br",null,null,-1)),Xn=c(()=>t("p",{id:"comment"},'//Get the customer object and set the City to "Coimbatore"',-1)),Yn=c(()=>t("br",null,null,-1)),Zn=c(()=>t("br",null,null,-1)),to=c(()=>t("br",null,null,-1)),eo=c(()=>t("pre",null,`import java.util.Scanner;
import java.util.Date;

public class TestDriver {

	public static void main(String[] args) {
		Vehicle vobj = new Vehicle(5678);
		Reservation rObjComposition = new Reservation("JKL", 999999999, vobj);
		rObjComposition.getCustomerObj().setCity("Coimbatore");
      `,-1)),no=c(()=>t("br",null,null,-1)),oo=c(()=>t("p",{id:"comment"},"//Call the method to set a booking date as new Date()",-1)),lo=c(()=>t("br",null,null,-1)),so=c(()=>t("br",null,null,-1)),io=c(()=>t("pre",null,`import java.util.Scanner;
import java.util.Date;

public class TestDriver {

	public static void main(String[] args) {
		Vehicle vobj = new Vehicle(5678);
		Reservation rObjComposition = new Reservation("JKL", 999999999, vobj);
		rObjComposition.getCustomerObj().setCity("Coimbatore");
		rObjComposition.setBookingDate(new Date());
      `,-1)),ao=c(()=>t("br",null,null,-1)),ro=c(()=>t("br",null,null,-1)),co=c(()=>t("p",{id:"comment"},"//Get the Vehicle Object and call the method to update key status",-1)),uo=c(()=>t("br",null,null,-1)),po=c(()=>t("br",null,null,-1)),ho=c(()=>t("pre",null,`import java.util.Scanner;
import java.util.Date;

public class TestDriver {

	public static void main(String[] args) {
		Vehicle vobj = new Vehicle(5678);
		Reservation rObjComposition = new Reservation("JKL", 999999999, vobj);
		rObjComposition.getCustomerObj().setCity("Coimbatore");
		rObjComposition.setBookingDate(new Date());
		rObjComposition.getVehicleObj().updateKeyStatus();
		}
	}
      `,-1)),mo=[ho];function bo(e,o,_,C,r,h){return b(),y("main",Vn,[Nn,t("div",On,[t("div",Rn,[In,(b(),x(k(r.currentComponent)))])]),$n,t("div",Tn,[t("div",Fn,[t("div",En,[Bn,t("div",Ln,[t("button",{style:u([{float:"right","margin-bottom":"30px"},{display:r.display[0]}]),onClick:o[0]||(o[0]=l=>h.popup("objectCreationComponent")),class:"button-30"},"Help",4),t("button",{style:u([{float:"right","margin-bottom":"30px"},{display:r.display[1]}]),onClick:o[1]||(o[1]=l=>h.popup("objectCreationComponent")),class:"button-30"},"Help",4),t("button",{style:u([{float:"right","margin-bottom":"30px"},{display:r.display[2]}]),onClick:o[2]||(o[2]=l=>h.popup("getterComponent")),class:"button-30"},"Help",4),t("button",{style:u([{float:"right","margin-bottom":"30px"},{display:r.display[3]}]),onClick:o[3]||(o[3]=l=>h.popup("setterComponent")),class:"button-30"},"Help",4),t("button",{style:u([{float:"right","margin-bottom":"30px"},{display:r.display[4]}]),onClick:o[4]||(o[4]=l=>h.popup("getterComponent")),class:"button-30"},"Help",4)])]),t("div",{class:"codebox",id:"codebox",style:u({display:r.display[0]})},[Hn,n("  "),p(t("input",{spellcheck:"false",maxlength:"7",style:{width:"80px"},"onUpdate:modelValue":o[5]||(o[5]=l=>e.one=l)},null,512),[[m,e.one]]),n(" vobj = new Vehicle( "),p(t("input",{spellcheck:"false",id:"two",maxlength:"4",style:{width:"60px"},"onUpdate:modelValue":o[6]||(o[6]=l=>e.two=l)},null,512),[[m,e.two]]),n(") "),Un,Mn,n(" } "),Kn,t("button",{class:"button-9",id:"btn1",onClick:o[7]||(o[7]=l=>h.validate_one())},v(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:u({display:r.display[1]})},[An,Pn,n("    "),p(t("input",{spellcheck:"false",maxlength:"11",style:{width:"100px"},"onUpdate:modelValue":o[8]||(o[8]=l=>e.three=l)},null,512),[[m,e.three]]),p(t("input",{spellcheck:"false",maxlength:"15",style:{width:"130px"},"onUpdate:modelValue":o[9]||(o[9]=l=>e.four=l)},null,512),[[m,e.four]]),n(' = new Reservation("JKL", 999999999, '),p(t("input",{spellcheck:"false",maxlength:"4",style:{width:"50px"},"onUpdate:modelValue":o[10]||(o[10]=l=>e.five=l)},null,512),[[m,e.five]]),n("); "),Jn,Wn,n(" } "),Gn,t("button",{class:"button-9",id:"btn2",onClick:o[11]||(o[11]=l=>h.validate_two())},v(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:u({display:r.display[2]})},[zn,qn,n("   rObjComposition. "),p(t("input",{spellcheck:"false",maxlength:"14",style:{width:"125px"},"onUpdate:modelValue":o[12]||(o[12]=l=>e.six=l)},null,512),[[m,e.six]]),n("(). "),p(t("input",{spellcheck:"false",maxlength:"7",style:{width:"70px"},"onUpdate:modelValue":o[13]||(o[13]=l=>e.seven=l)},null,512),[[m,e.seven]]),n('("Coimbatore"); '),Qn,n("  "),Xn,Yn,n(" } "),Zn,n(" } "),to,t("button",{class:"button-9",id:"btn3",onClick:o[14]||(o[14]=l=>h.validate_three())},v(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:u({display:r.display[3]})},[eo,n("     rObjComposition. "),p(t("input",{spellcheck:"false",maxlength:"14",style:{width:"130px"},"onUpdate:modelValue":o[15]||(o[15]=l=>e.eight=l)},null,512),[[m,e.eight]]),n("( "),p(t("input",{spellcheck:"false",maxlength:"3",style:{width:"50px"},"onUpdate:modelValue":o[16]||(o[16]=l=>e.nine=l)},null,512),[[m,e.nine]]),p(t("input",{spellcheck:"false",maxlength:"6",style:{width:"65px"},"onUpdate:modelValue":o[17]||(o[17]=l=>e.ten=l)},null,512),[[m,e.ten]]),n("); "),no,n(" } "),oo,lo,n(" } "),so,t("button",{class:"button-9",id:"btn4",onClick:o[18]||(o[18]=l=>h.validate_four())},v(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:u({display:r.display[4]})},[io,n("    rObjComposition. "),p(t("input",{spellcheck:"false",maxlength:"13",style:{width:"120px"},"onUpdate:modelValue":o[19]||(o[19]=l=>e.eleven=l)},null,512),[[m,e.eleven]]),n("(). "),p(t("input",{spellcheck:"false",maxlength:"15",style:{width:"140px"},"onUpdate:modelValue":o[20]||(o[20]=l=>e.twelve=l)},null,512),[[m,e.twelve]]),n("(); "),ao,n("   "),ro,n(" } "),co,uo,n(" } "),po,t("button",{class:"button-9",id:"btn5",onClick:o[21]||(o[21]=l=>h.validate_five())},v(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:u({display:r.display[5]})},mo,4)])])])}const vo=g(Dn,[["render",bo],["__scopeId","data-v-ef0029c4"]]),_o="/digilabs/oop/5/assets/compositionans-3472726d.png";const go={},yo=e=>(f("data-v-1e23f08c"),e=e(),S(),e),Co={class:"app"},fo=yo(()=>t("div",{class:"codebox",style:{"align-items":"center","justify-content":"center",display:"flex"}},[t("img",{src:_o})],-1)),So=[fo];function wo(e,o){return b(),y("main",Co,So)}const xo=g(go,[["render",wo],["__scopeId","data-v-1e23f08c"]]);const ko={components:{CustomerView2:ot,ReservationView2:hn,VehicleView2:Cn,InstructionsView2:jn,ReservationSystemView2:vo,ClassView2:xo},data(){return{componentSelect:"InstructionsView2",reservation_complete:!1,reservation_system_complete:!1}},methods:{reservationCallback(e){console.log("Event reservation triggered",e),this.reservation_complete=!0,this.componentSelect="VehicleView2"},reservationSystemCallBack(e){console.log("Event reservation system triggered",e),this.reservation_system_complete=!0,this.componentSelect="ClassView2"},instructionsReadCallback(e){console.log("Instructions read",e),this.componentSelect="ReservationView2"}}},jo={class:"app"},Do=["disabled"],Vo={id:"buttons",class:"relative"};function No(e,o,_,C,r,h){return b(),y(Q,null,[t("main",jo,[t("button",{onClick:o[0]||(o[0]=l=>r.componentSelect="InstructionsView2"),style:u(r.componentSelect==="InstructionsView2"?"background-color: #55acee":"")}," 1. Instructions ",4),t("button",{onClick:o[1]||(o[1]=l=>r.componentSelect="CustomerView2"),style:u(r.componentSelect==="CustomerView2"?"background-color: #55acee":"")}," 2. Customer Class ",4),t("button",{onClick:o[2]||(o[2]=l=>r.componentSelect="ReservationView2"),style:u(r.componentSelect==="ReservationView2"?"background-color: #55acee":"")}," 3. Reservation Class ",4),t("button",{onClick:o[3]||(o[3]=l=>r.componentSelect="VehicleView2"),style:u(r.componentSelect==="VehicleView2"?"background-color: #55acee":"")}," 4. Vehicle Class ",4),t("button",{onClick:o[4]||(o[4]=l=>r.componentSelect="ReservationSystemView2"),style:u(r.componentSelect==="ReservationSystemView2"?"background-color: #55acee":""),disabled:!r.reservation_complete}," 5. Reservation System Class ",12,Do),t("button",{onClick:o[5]||(o[5]=l=>r.componentSelect="ClassView2"),style:u(r.componentSelect==="ClassView2"?"background-color: #55acee":"")}," 6. Class diagram ",4),(b(),x(z,null,[(b(),x(k(r.componentSelect),{onReservationComplete:h.reservationCallback,onReservationSystemComplete:h.reservationSystemCallBack,onInstructionsRead:h.instructionsReadCallback},null,40,["onReservationComplete","onReservationSystemComplete","onInstructionsRead"]))],1024))]),p(t("footer",null,[t("div",Vo,[t("button",{class:"navitem",onClick:o[6]||(o[6]=l=>e.$router.push("/screen-four"))}," Next ")])],512),[[q,r.reservation_complete&&r.reservation_system_complete]])],64)}const Ro=g(ko,[["render",No]]);export{Ro as default};
