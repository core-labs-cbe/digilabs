import{C as w,V as S,a as k,P as j,b as V}from"./ClassDiagramViewComponent-5e64d5be.js";import{_ as d,o as u,c as b,b as t,p as v,a as y,d as x,r as C,n as f,f as r,e as i,w as c,v as p,t as m,K as E,g as R,F as I}from"./index-0ba2a450.js";import T from"./abstractComponent-7d5996b3.js";import P from"./arrayListComponent-2bb638d3.js";import D from"./classCastExceptionComponent-86a925f2.js";import B from"./constructorWritingComponent-58dd154d.js";import N from"./dateComponent-261c4d12.js";import U from"./extendsComponent-0af1dfaf.js";import F from"./functionCallingWithObjectComponent-6b937f3c.js";import M from"./getterComponent-2914698e.js";import O from"./interfaceComponent-c23cc8cf.js";import H from"./newVariableComponent-db81c3e9.js";import A from"./nullPointerExceptionComponent-bcbaab33.js";import L from"./objectCreationComponent-beacb37d.js";import W from"./parseExceptionComponent-c58e7014.js";import $ from"./passingArgumentsToFunctionsComponent-f74d085c.js";import K from"./printFunctionComponent-279899f3.js";import q from"./setterComponent-5876e336.js";import z from"./StringcompareComponent-29f90f51.js";import G from"./superKeywordComponent-a3169cb6.js";import J from"./thisComponent-55ab1b4d.js";import Q from"./tryCatchComponent-14e1a240.js";const X={},g=n=>(v("data-v-a2b1df18"),n=n(),y(),n),Y={class:"app"},Z={class:"box"},tt=g(()=>t("h1",null,"Instructions",-1)),et=g(()=>t("ol",null,[t("li",{class:"arrow"},"To work on future experiments, we will now fill in the Rental System class."),t("li",{class:"arrow"},"Person, Customer, Exec, Reservation and Vehicle classes have been implemented and are to be referred to."),t("li",{class:"arrow"},"Switch between instructions, classes and the class diagram by clicking on the respective elements in the top navigation bar."),t("li",{class:"arrow"},"To proceed, finish coding the RentalSystem class, after which a Next button will appear.")],-1));function nt(n,e){return u(),b("main",Y,[t("div",Z,[tt,et,t("button",{class:"button-9",onClick:e[0]||(e[0]=h=>n.$emit("instructions-read",!0))},"Next")])])}const ot=d(X,[["render",nt],["__scopeId","data-v-a2b1df18"]]);const st={},lt=n=>(v("data-v-0ab7efd2"),n=n(),y(),n),it={class:"app"},rt=lt(()=>t("div",{class:"codebox"},[t("pre",null,`
import java.text.ParseException;

public class RentalSystem {
	public Customer[] cobj;
	public Exec[] execobj;
	public Vehicle[] vobj;
	public Reservation[] robj;
	
	public Exec assignExec()
	{
		return this.execobj[0];
	}
	
	public void visitOffice(Reservation res) throws ParseException
	{
		Exec cl = assignExec();
		if(cl !=null)
		{
			if (cl.requestVehicle(res).compareTo("initiate contract")==0)
			{
				System.out.println("Vehicle is available, initiating contract..");
				System.out.println(cl.signContract(res));
			}
			else
				System.out.println("Vehicle is on trip, please wait");
		}
		else 
			System.out.println("wait for exec");
	}
}

      
      `)],-1)),ct=[rt];function at(n,e){return u(),b("main",it,ct)}const pt=d(st,[["render",at],["__scopeId","data-v-0ab7efd2"]]);const ut={components:{abstractComponent:T,arrayListComponent:P,classCastExceptionComponent:D,constructorWritingComponent:B,dateComponent:N,extendsComponent:U,functionCallingWithObjectComponent:F,getterComponent:M,interfaceComponent:O,newVariableComponent:H,nullPointerExceptionComponent:A,objectCreationComponent:L,parseExceptionComponent:W,passingArgumentsToFunctionsComponent:$,printFunctionComponent:K,setterComponent:q,stringCompareComponent:z,superKeywordComponent:G,thisComponent:J,tryCatchComponent:Q},methods:{popup(n){this.currentComponent=n,console.log("popup");var e=document.getElementById("myModal");console.log(e);var h=document.getElementsByClassName("close")[0];e.style.display="block",console.log(e.style.display),h.onclick=function(){e.style.display="none"},window.onclick=function(_){_.target==e&&(e.style.display="none")}},correct1(){var n=document.getElementById("snackbar");n.innerHTML="Correct",n.style.backgroundColor="green",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},incorrect(){var n=document.getElementById("snackbar");n.innerHTML="Incorrect. Try again",n.style.backgroundColor="red",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},validate_one(){this.one=="public"&&this.two=="Customer[]"&&this.three=="public"&&this.four=="Exec[]"&&this.five=="public"&&this.six=="Vehicle[]"&&this.seven=="public"&&this.eight=="Reservation[]"?(this.correct1(),this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,console.log("one_correct")):(this.incorrect(),this.button_value=this.button_text)},validate_two(){this.nine==="Exec"?(this.correct1(),this.button_value=this.button_text_right,this.display[1]="none",this.display[2]="block",console.log("two_correct")):(this.incorrect(),this.button_value=this.button_text)},validate_three(){this.ten==="execobj[0]"?(this.correct1(),this.button_value=this.button_text_right,this.display[2]="none",this.display[3]="block",console.log("three_correct"),this.completed[1]=!0):(this.incorrect(),this.button_value=this.button_text)},validate_four(){this.eleven==="Reservation"?(this.correct1(),this.button_value=this.button_text_right,this.display[3]="none",this.display[4]="block",console.log("four_correct")):(this.incorrect(),this.button_value=this.button_text)},validate_five(){this.twelve==="assignExec()"?(this.correct1(),this.button_value=this.button_text_right,this.display[4]="none",this.display[5]="block",console.log("five_correct"),this.completed[2]=!0,this.$emit("rentalSystemComplete",!0)):(this.incorrect(),this.button_value=this.button_text)}},data(){return{id:"container",class:"wrapper",button_value:"Next",currentComponent:"constructorWritingComponent",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1]}}},l=n=>(v("data-v-b491f25f"),n=n(),y(),n),mt={class:"app"},dt=l(()=>t("div",{id:"snackbar"},"Error Message.",-1)),bt={id:"myModal"},ht={class:"modal-content"},vt=l(()=>t("span",{class:"close"},"×",-1)),yt={class:"column",style:{position:"sticky",top:"25%",left:"70%",float:"right"}},_t={class:"column"},ft={class:"codebox"},xt={style:{"line-height":"125%"}},Ct={class:"row"},gt={class:"column"},wt={style:{display:"flex","flex-direction":"row"}},St=l(()=>t("div",{style:{flex:"5"}},[t("h1",{style:{padding:"25px","padding-bottom":"0px"}},"Constructing RentalSystem"),t("p",{style:{padding:"25px","padding-top":"0px"}},"Create the RentalSystem class with methods to assign an Exec to a Customer and to handle office visits from customers.")],-1)),kt={style:{flex:"1"}},jt=l(()=>t("pre",null,`import java.text.ParseException;

public class RentalSystem {
`,-1)),Vt=l(()=>t("br",null,null,-1)),Et=l(()=>t("br",null,null,-1)),Rt=l(()=>t("br",null,null,-1)),It=l(()=>t("p",{id:"comment"},"//Create arrays of Customer, Exec, Vehicle and Reservation objects",-1)),Tt=l(()=>t("br",null,null,-1)),Pt=l(()=>t("br",null,null,-1)),Dt=l(()=>t("pre",null,`import java.text.ParseException;

public class RentalSystem {
    public Customer[] cobj;
	public Exec[] execobj;
	public Vehicle[] vobj;
	public Reservation[] robj;
                `,-1)),Bt=l(()=>t("br",null,null,-1)),Nt=l(()=>t("p",{id:"comment"},"//Create a method assignExec() which returns an object of type Exec",-1)),Ut=l(()=>t("br",null,null,-1)),Ft=l(()=>t("br",null,null,-1)),Mt=l(()=>t("pre",null,`import java.text.ParseException;

public class RentalSystem {
    public Customer[] cobj;
	public Exec[] execobj;
	public Vehicle[] vobj;
	public Reservation[] robj;

    public Exec assignExec()
	{
                `,-1)),Ot=l(()=>t("br",null,null,-1)),Ht=l(()=>t("p",{id:"comment"},"//Return 0th object of the execobj array",-1)),At=l(()=>t("br",null,null,-1)),Lt=l(()=>t("br",null,null,-1)),Wt=l(()=>t("pre",null,`import java.text.ParseException;

public class RentalSystem {
    public Customer[] cobj;
	public Exec[] execobj;
	public Vehicle[] vobj;
	public Reservation[] robj;

    public Exec assignExec()
	{   
        return this.execobj[0];
    }
                `,-1)),$t=l(()=>t("br",null,null,-1)),Kt=l(()=>t("p",{id:"comment"},"//Pass an object of Reservation as parameter",-1)),qt=l(()=>t("br",null,null,-1)),zt=l(()=>t("br",null,null,-1)),Gt=l(()=>t("pre",null,`import java.text.ParseException;

public class RentalSystem {
    public Customer[] cobj;
	public Exec[] execobj;
	public Vehicle[] vobj;
	public Reservation[] robj;

    public Exec assignExec()
	{   
        return this.execobj[0];
    }

    public void visitOffice(Reservation res) throws ParseException{
                `,-1)),Jt=l(()=>t("br",null,null,-1)),Qt=l(()=>t("p",{id:"comment"},"//Call a function to assign a exec object to the cl variable",-1)),Xt=l(()=>t("br",null,null,-1)),Yt=l(()=>t("br",null,null,-1)),Zt=l(()=>t("pre",null,`                    
import java.text.ParseException;

public class RentalSystem {
	public Customer[] cobj;
	public Exec[] execobj;
	public Vehicle[] vobj;
	public Reservation[] robj;
	
	public Exec assignExec()
	{
		return this.execobj[0];
	}
	
	public void visitOffice(Reservation res) throws ParseException
	{
		Exec cl = assignExec();
		if(cl !=null)
		{
			if (cl.requestVehicle(res).compareTo("initiate contract")==0)
			{
				System.out.println("Vehicle is available, initiating contract..");
				System.out.println(cl.signContract(res));
			}
			else
				System.out.println("Vehicle is on trip, please wait");
		}
		else 
			System.out.println("wait for exec");
	}
}

                `,-1)),te=[Zt];function ee(n,e,h,_,s,a){return u(),b("main",mt,[dt,t("div",bt,[t("div",ht,[vt,(u(),x(C(s.currentComponent)))])]),t("div",yt,[t("div",_t,[t("div",ft,[t("ul",xt,[t("li",{class:f({completed:s.completed[0]})},"Initiate object arrays of Customer, Exec, Vehicle and Reservation classes. ",2),t("li",{class:f({completed:s.completed[1]})},"Write a method that assigns the 0th element of the Exec array called assignExec ",2),t("li",{class:f({completed:s.completed[2]})},"Write a method visitOffice that checks for exec availability, verifies vehicle status and signs contract if vehicle is available ",2)])])])]),t("div",Ct,[t("div",gt,[t("div",wt,[St,t("div",kt,[t("button",{style:r([{float:"right","margin-bottom":"30px"},{display:s.display[0]}]),onClick:e[0]||(e[0]=o=>a.popup("arraysComponent")),class:"button-30"},"Help",4),t("button",{style:r([{float:"right","margin-bottom":"30px"},{display:s.display[2]}]),onClick:e[1]||(e[1]=o=>a.popup("thisComponent")),class:"button-30"},"Help",4),t("button",{style:r([{float:"right","margin-bottom":"30px"},{display:s.display[3]}]),onClick:e[2]||(e[2]=o=>a.popup("passingArguementsToFunctionsComponent")),class:"button-30"},"Help",4)])]),t("div",{class:"codebox",style:r({display:s.display[0]})},[jt,i("  "),c(t("input",{spellcheck:"false",maxlength:"6",style:{width:"90px"},"onUpdate:modelValue":e[3]||(e[3]=o=>n.one=o)},null,512),[[p,n.one]]),c(t("input",{spellcheck:"false",id:"two",maxlength:"10",style:{width:"95px"},"onUpdate:modelValue":e[4]||(e[4]=o=>n.two=o)},null,512),[[p,n.two]]),i(" cobj; "),Vt,i("  "),c(t("input",{spellcheck:"false",maxlength:"6",style:{width:"90px"},"onUpdate:modelValue":e[5]||(e[5]=o=>n.three=o)},null,512),[[p,n.three]]),c(t("input",{spellcheck:"false",id:"two",maxlength:"7",style:{width:"80px"},"onUpdate:modelValue":e[6]||(e[6]=o=>n.four=o)},null,512),[[p,n.four]]),i(" execobj; "),Et,i("  "),c(t("input",{spellcheck:"false",maxlength:"6",style:{width:"90px"},"onUpdate:modelValue":e[7]||(e[7]=o=>n.five=o)},null,512),[[p,n.five]]),c(t("input",{spellcheck:"false",id:"two",maxlength:"9",style:{width:"90px"},"onUpdate:modelValue":e[8]||(e[8]=o=>n.six=o)},null,512),[[p,n.six]]),i(" vobj; "),Rt,i("  "),c(t("input",{spellcheck:"false",maxlength:"6",style:{width:"90px"},"onUpdate:modelValue":e[9]||(e[9]=o=>n.seven=o)},null,512),[[p,n.seven]]),c(t("input",{spellcheck:"false",id:"two",maxlength:"14",style:{width:"120px"},"onUpdate:modelValue":e[10]||(e[10]=o=>n.eight=o)},null,512),[[p,n.eight]]),i(" robj; "),It,Tt,i(" } "),Pt,t("button",{class:"button-9",id:"btn1",onClick:e[11]||(e[11]=o=>a.validate_one())},m(s.button_value),1)],4),t("div",{class:"codebox",style:r({display:s.display[1]})},[Dt,Bt,i("   public "),c(t("input",{spellcheck:"false",maxlength:"7",style:{width:"90px"},"onUpdate:modelValue":e[12]||(e[12]=o=>n.nine=o)},null,512),[[p,n.nine]]),i(' assignExec(){" '),Nt,Ut,i(" } "),Ft,t("button",{class:"button-9",id:"btn2",onClick:e[13]||(e[13]=o=>a.validate_two())},m(s.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:r({display:s.display[2]})},[Mt,Ot,i("   return this. "),c(t("input",{spellcheck:"false",maxlength:"11",style:{width:"110px"},"onUpdate:modelValue":e[14]||(e[14]=o=>n.ten=o)},null,512),[[p,n.ten]]),i("; "),Ht,At,i(" } "),Lt,t("button",{class:"button-9",id:"btn3",onClick:e[15]||(e[15]=o=>a.validate_three())},m(s.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:r({display:s.display[3]})},[Wt,$t,i("   public void visitOffice( "),c(t("input",{spellcheck:"false",maxlength:"11",style:{width:"110px"},"onUpdate:modelValue":e[16]||(e[16]=o=>n.eleven=o)},null,512),[[p,n.eleven]]),i(" res) throws ParseException{ "),Kt,qt,i(" } "),zt,t("button",{class:"button-9",id:"btn4",onClick:e[17]||(e[17]=o=>a.validate_four())},m(s.button_value),1)],4),t("div",{class:"codebox",style:r({display:s.display[4]})},[Gt,Jt,i("   Exec cl = "),c(t("input",{spellcheck:"false",maxlength:"13",style:{width:"110px"},"onUpdate:modelValue":e[18]||(e[18]=o=>n.twelve=o)},null,512),[[p,n.twelve]]),i("; "),Qt,Xt,i(" } "),Yt,t("button",{class:"button-9",id:"btn5",onClick:e[19]||(e[19]=o=>a.validate_five())},m(s.button_value),1)],4),t("div",{class:"codebox",style:r([{display:s.display[5]},{width:"100ch"}])},te,4)])])])}const ne=d(ut,[["render",ee],["__scopeId","data-v-b491f25f"]]);const oe={},se=n=>(v("data-v-ac96e880"),n=n(),y(),n),le={class:"app"},ie=se(()=>t("div",{class:"codebox"},[t("pre",null,`
import java.util.Scanner;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TestDriver {
	
	public static void main(String[] args) throws ParseException {
		// TODO Auto-generated method stub
		
		RentalSystem rentalSystem = new RentalSystem();
		
		rentalSystem.execobj=new Exec[1];
		rentalSystem.execobj[0]=new Exec("EFG", "efg@gmail.com");
		
		rentalSystem.cobj= new Customer[3];
		rentalSystem.cobj[0]=new Customer("ABC", "abc@gmail.com");
		rentalSystem.cobj[1]=new Customer("DEF", 8654678976L);
		rentalSystem.cobj[2]=new Customer("GHI", "ghi@gmail.com", 1234567890L);
		rentalSystem.cobj[0].setCity("Coimbatore");
		rentalSystem.cobj[1].setCity("Coimbatore");
		rentalSystem.cobj[2].setCity("Chennai");
		
		rentalSystem.vobj = new Vehicle[1];
		rentalSystem.vobj[0]=new Vehicle(1234);
		
		rentalSystem.robj=new Reservation[1];
		rentalSystem.robj[0]= new Reservation(rentalSystem.cobj[0],rentalSystem.vobj[0]);
		SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd");
        Date d = sdformat.parse("2022-02-29");
		rentalSystem.robj[0].setBookingDate(d);
		rentalSystem.robj[0].setContractStatus("Reservation not released");
		
		rentalSystem.visitOffice(rentalSystem.robj[0]);
	}	
}

      
      `)],-1)),re=[ie];function ce(n,e){return u(),b("main",le,re)}const ae=d(oe,[["render",ce],["__scopeId","data-v-ac96e880"]]);const pe={components:{CustomerView:w,VehicleView:S,InstructionsView:ot,ReservationSystemView:pt,ClassView:k,PersonView:j,ClerkView:V,RentalSystem:ne,TestDriverViewComponent:ae},data(){return{componentSelect:"InstructionsView",testdriver_completed:!1,rental_system_completed:!1}},methods:{testDriverCallBack(n){console.log("Test driver callback triggered",n),this.testdriver_completed=!0},rentalSystemCallBack(n){console.log("Rental system callback triggered",n),this.rental_system_completed=!0},instructionsReadCallback(n){console.log("Instructions callback triggered",n),this.componentSelect="RentalSystem"}}},ue={class:"app"},me={id:"buttons",class:"relative"};function de(n,e,h,_,s,a){return u(),b(I,null,[t("main",ue,[t("button",{onClick:e[0]||(e[0]=o=>s.componentSelect="InstructionsView"),style:r(s.componentSelect==="InstructionsView"?"background-color: #55acee":"")},"1. Instructions",4),t("button",{onClick:e[1]||(e[1]=o=>s.componentSelect="PersonView"),style:r(s.componentSelect==="PersonView"?"background-color: #55acee":"")},"2. Person Class",4),t("button",{onClick:e[2]||(e[2]=o=>s.componentSelect="CustomerView"),style:r(s.componentSelect==="CustomerView"?"background-color: #55acee":"")},"3. Customer Class",4),t("button",{onClick:e[3]||(e[3]=o=>s.componentSelect="ClerkView"),style:r(s.componentSelect==="ClerkView"?"background-color: #55acee":"")},"4. Exec Class",4),t("button",{onClick:e[4]||(e[4]=o=>s.componentSelect="VehicleView"),style:r(s.componentSelect==="VehicleView"?"background-color: #55acee":"")},"5. Vehicle Class",4),t("button",{onClick:e[5]||(e[5]=o=>s.componentSelect="RentalSystem"),style:r(s.componentSelect==="RentalSystem"?"background-color: #55acee":"")},"6. Rental System Class",4),t("button",{onClick:e[6]||(e[6]=o=>s.componentSelect="TestDriverViewComponent"),style:r(s.componentSelect==="TestDriverViewComponent"?"background-color: #55acee":"")},"7. Test Driver",4),t("button",{onClick:e[7]||(e[7]=o=>s.componentSelect="ClassView"),style:r(s.componentSelect==="ClassView"?"background-color: #55acee":"")},"8. Class diagram",4),(u(),x(E,null,[(u(),x(C(s.componentSelect),{onTestdriverComplete:a.testDriverCallBack,onRentalSystemComplete:a.rentalSystemCallBack,onInstructionsRead:a.instructionsReadCallback},null,40,["onTestdriverComplete","onRentalSystemComplete","onInstructionsRead"]))],1024))]),c(t("footer",null,[t("div",me,[t("button",{class:"navitem",onClick:e[8]||(e[8]=o=>n.$router.push("/method-completion-execution"))},"Next")])],512),[[R,s.rental_system_completed]])],64)}const Ue=d(pe,[["render",de]]);export{Ue as default};
