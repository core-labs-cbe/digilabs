import{C as _,V as k,a as x,P as V,b as S}from"./ClassDiagramViewComponent-5e64d5be.js";import{_ as h,o as d,c as v,p as y,a as w,b as e,d as C,r as f,n as m,e as i,f as r,w as a,v as c,t as u,K as D,g as P,F as I}from"./index-0ba2a450.js";import E from"./abstractComponent-7d5996b3.js";import R from"./arrayListComponent-2bb638d3.js";import T from"./arraysComponent-0f19f893.js";import U from"./classCastExceptionComponent-86a925f2.js";import B from"./constructorWritingComponent-58dd154d.js";import F from"./dateComponent-261c4d12.js";import H from"./extendsComponent-0af1dfaf.js";import L from"./functionCallingWithObjectComponent-6b937f3c.js";import G from"./getterComponent-2914698e.js";import N from"./interfaceComponent-c23cc8cf.js";import O from"./newVariableComponent-db81c3e9.js";import A from"./nullPointerExceptionComponent-bcbaab33.js";import q from"./objectCreationComponent-beacb37d.js";import Q from"./parseExceptionComponent-c58e7014.js";import M from"./passingArgumentsToFunctionsComponent-f74d085c.js";import K from"./printFunctionComponent-279899f3.js";import W from"./setterComponent-5876e336.js";import z from"./StringcompareComponent-29f90f51.js";import J from"./superKeywordComponent-a3169cb6.js";import X from"./thisComponent-55ab1b4d.js";import Y from"./tryCatchComponent-14e1a240.js";const Z={},$=n=>(y("data-v-9f0e791f"),n=n(),w(),n),ee={class:"app"},te=$(()=>e("div",{class:"codebox"},[e("pre",null,`import java.util.Date;

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
	
}


      
      `)],-1)),ne=[te];function oe(n,t){return d(),v("main",ee,ne)}const se=h(Z,[["render",oe],["__scopeId","data-v-9f0e791f"]]);const ie={},j=n=>(y("data-v-8476e6cb"),n=n(),w(),n),le={class:"app"},re={class:"box"},ae=j(()=>e("h1",null,"Instructions",-1)),ce=j(()=>e("ol",null,[e("li",{class:"arrow"},"To learn about upcasting, down casting and static binding, we'll be modifying the TestDriver class."),e("li",{class:"arrow"},"Person, Customer, Exec, Reservation and Vehicle classes have been implemented and are to be referred to."),e("li",{class:"arrow"},"Switch between instructions, classes and the class diagram by clicking on the respective elements in the top navigation bar."),e("li",{class:"arrow"},"To proceed, finish coding the Test Driver class, after which a Next button will appear.")],-1));function pe(n,t){return d(),v("main",le,[e("div",re,[ae,ce,e("button",{class:"button-9",onClick:t[0]||(t[0]=b=>n.$emit("instructions-read",!0))},"Next")])])}const ue=h(ie,[["render",pe],["__scopeId","data-v-8476e6cb"]]);const me={components:{abstractComponent:E,arrayListComponent:R,arraysComponent:T,classCastExceptionComponent:U,constructorWritingComponent:B,dateComponent:F,extendsComponent:H,functionCallingWithObjectComponent:L,getterComponent:G,interfaceComponent:N,newVariableComponent:O,nullPointerExceptionComponent:A,objectCreationComponent:q,parseExceptionComponent:Q,passingArgumentsToFunctionsComponent:M,printFunctionComponent:K,setterComponent:W,stringCompareComponent:z,superKeywordComponent:J,thisComponent:X,tryCatchComponent:Y},methods:{popup(n){this.currentComponent=n,console.log("popup");var t=document.getElementById("myModal");console.log(t);var b=document.getElementsByClassName("close")[0];t.style.display="block",console.log(t.style.display),b.onclick=function(){t.style.display="none"},window.onclick=function(g){g.target==t&&(t.style.display="none")}},correct1(){var n=document.getElementById("snackbar");n.innerHTML="Correct",n.style.backgroundColor="green",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},incorrect(){var n=document.getElementById("snackbar");n.innerHTML="Incorrect. Try again",n.style.backgroundColor="red",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},validate_one(){this.one=="Person[]"&&this.two=="Person[5]"?(this.correct1(),this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,console.log("one_correct")):this.incorrect()},validate_two(){this.three=="Customer"&&this.four=="ABC"&&this.five=="abc@gmail.com"?(this.correct1(),this.button_value=this.button_text_right,this.display[1]="none",this.display[2]="block",this.completed[1]=!0):this.incorrect()},validate_three(){this.six=="Exec"&&this.seven=="EFG"&&this.eight=="efg@gmail.com"?(this.correct1(),this.button_value=this.button_text_right,this.display[2]="none",this.display[3]="block",this.completed[2]=!0):this.incorrect()},validate_four(){this.nine=="Person"&&this.ten=="PQR"&&this.eleven=="pqr@gmail.com"?(this.correct1(),this.button_value=this.button_text_right,this.display[3]="none",this.display[4]="block",this.completed[3]=!0):this.incorrect()},validate_five(){this.twelve==="setCity"&&this.thirteen==="Coimbatore"?(this.correct1(),this.button_value=this.button_text_right,this.display[4]="none",this.display[5]="block",this.completed[4]=!0):this.incorrect()},validate_six(){this.fourteen==="Vehicle"&&this.fifteen==="Vehicle"&&this.sixteen==="1234"?(this.correct1(),this.button_value=this.button_text_right,this.display[5]="none",this.display[6]="block",this.completed[5]=!0):this.incorrect()},validate_seven(){this.seventeen==="Reservation"&&this.eighteen==="Reservation"&&this.nineteen==="Customer"?(this.correct1(),this.button_value=this.button_text_right,this.display[6]="none",this.display[7]="block",this.completed[6]=!0):this.incorrect()},validate_eight(){this.twenty==="setBookingDate"&&this.twentyone==="Date()"?(this.correct1(),this.button_value=this.button_text_right,this.display[7]="none",this.display[8]="block",this.completed[7]=!0,this.$emit("testdriverComplete",!0)):this.incorrect()}},data(){return{id:"container",class:"wrapper",button_value:"Next",button_text:"Incorrect. Try again",currentComponent:"constructorWritingComponent",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1,!1,!1,!1,!1,!1]}}},l=n=>(y("data-v-ca84cb0d"),n=n(),w(),n),de={class:"app"},be=l(()=>e("div",{id:"snackbar"},"Error Message.",-1)),he={id:"myModal"},ve={class:"modal-content"},ge=l(()=>e("span",{class:"close"},"×",-1)),Ce={class:"column",style:{position:"sticky",float:"right",top:"5%",left:"80%"}},ye={class:"column"},we={class:"codebox"},fe={style:{"line-height":"125%"}},je=l(()=>e("b",null,"upcasting",-1)),_e=l(()=>e("b",null,"upcasting",-1)),ke=l(()=>e("b",null,"static binding",-1)),xe=l(()=>e("b",null,"vobj",-1)),Ve=l(()=>e("b",null,"robj1",-1)),Se={class:"row"},De={class:"column"},Pe={style:{display:"flex","flex-direction":"row"}},Ie=l(()=>e("div",{style:{flex:"5"}},[e("h1",{style:{padding:"25px","padding-bottom":"0px"}},"Implementing the Test Driver"),e("p",{style:{padding:"25px","padding-top":"0px"}},"Follow the instructions in the comments to understand the concepts of upcasting and downcasting")],-1)),Ee={style:{flex:"1"}},Re=l(()=>e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {`,-1)),Te=l(()=>e("p",{id:"comment"},"//Create an array of type Person with 5 objects",-1)),Ue=l(()=>e("br",null,null,-1)),Be=l(()=>e("br",null,null,-1)),Fe=l(()=>e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj= new Person[5];
                  `,-1)),He=l(()=>e("br",null,null,-1)),Le=l(()=>e("p",{id:"comment"},' //Create a new Customer object using name as "ABC" and email "abc@gmail.com" ',-1)),Ge=l(()=>e("br",null,null,-1)),Ne=l(()=>e("br",null,null,-1)),Oe=l(()=>e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj= new Person[5];
          cobj[0] = new Customer("ABC", "abc@gmail.com");
          cobj[1] = new Customer("DEF", 8654678976L);
          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
                  `,-1)),Ae=l(()=>e("br",null,null,-1)),qe=l(()=>e("p",{id:"comment"},' //Create a new Exec object using name as "EFG" and email as "efg@gmail.com" ',-1)),Qe=l(()=>e("br",null,null,-1)),Me=l(()=>e("br",null,null,-1)),Ke=l(()=>e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj= new Person[5];
          cobj[0] = new Customer("ABC", "abc@gmail.com");
          cobj[1] = new Customer("DEF", 8654678976L);
          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
          cobj[3] = new Exec("EFG", "efg@gmail.com")
                  `,-1)),We=l(()=>e("br",null,null,-1)),ze=l(()=>e("p",{id:"comment"},' //Create a new Person object using name as "PQR" and email as "pqr@gmail.com" ',-1)),Je=l(()=>e("br",null,null,-1)),Xe=l(()=>e("br",null,null,-1)),Ye=l(()=>e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj = new Person[5];gmail.com");
          cobj[1] = new Customer("DEF", 8654678976L);
          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
          cobj[3] = new Exec("EFG", "efg@gmail.com")
          cobj[4] = new Person("PQR", "pqr@gmail.com")

        `,-1)),Ze=l(()=>e("br",null,null,-1)),$e=l(()=>e("br",null,null,-1)),et=l(()=>e("p",{id:"comment"},'//Set the City of first object to "Coimbatore"',-1)),tt=l(()=>e("br",null,null,-1)),nt=l(()=>e("br",null,null,-1)),ot=l(()=>e("br",null,null,-1)),st=l(()=>e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj = new Person[5];
          cobj[0] = new Customer("ABC", "abc@gmail.com");
          cobj[1] = new Customer("DEF", 8654678976L);
          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
          cobj[3] = new Exec("EFG", "efg@gmail.com")
          cobj[4] = new Person("PQR", "pqr@gmail.com")
          cobj[0].setCity("Coimbatore");
          cobj[1].setCity("Coimbatore");
          cobj[2].setCity("Chennai");
          cobj[3].setCity("Coimbatore");
        `,-1)),it=l(()=>e("br",null,null,-1)),lt=l(()=>e("p",{id:"comment"},'//Create a new Vehicle object with value "1234"',-1)),rt=l(()=>e("br",null,null,-1)),at=l(()=>e("br",null,null,-1)),ct=l(()=>e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj = new Person[5];
          cobj[0] = new Customer("ABC", "abc@gmail.com");
          cobj[1] = new Customer("DEF", 8654678976L);
          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
          cobj[3] = new Exec("EFG", "efg@gmail.com")
          cobj[4] = new Person("PQR", "pqr@gmail.com")
          cobj[0].setCity("Coimbatore");
          cobj[1].setCity("Coimbatore");
          cobj[2].setCity("Chennai");
          cobj[3].setCity("Coimbatore");

          Vehicle vobj = new Vehicle("1234");
        `,-1)),pt=l(()=>e("br",null,null,-1)),ut=l(()=>e("p",{id:"comment"}," //Create a Reservation object 'robj' and initialise it by passing cobj[0] and vobj as parameters. ",-1)),mt=l(()=>e("p",{id:"comment"}," //Clue: cobj[0] is of type Person but Reservation only takes Customer objects. ",-1)),dt=l(()=>e("br",null,null,-1)),bt=l(()=>e("br",null,null,-1)),ht=l(()=>e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj = new Person[5];
          cobj[0] = new Customer("ABC", "abc@gmail.com");
          cobj[1] = new Customer("DEF", 8654678976L);
          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
          cobj[3] = new Exec("EFG", "efg@gmail.com")
          cobj[4] = new Person("PQR", "pqr@gmail.com")
          cobj[0].setCity("Coimbatore");
          cobj[1].setCity("Coimbatore");
          cobj[2].setCity("Chennai");
          cobj[3].setCity("Coimbatore");

          Vehicle vobj = new Vehicle("1234");
          Reservation robj1= new Reservation((Customer)cobj[0],vobj);
        `,-1)),vt=l(()=>e("br",null,null,-1)),gt=l(()=>e("p",{id:"comment"},"//Set the booking date for robj1 to today's date",-1)),Ct=l(()=>e("br",null,null,-1)),yt=l(()=>e("br",null,null,-1)),wt=l(()=>e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj = new Person[5];
          cobj[0] = new Customer("ABC", "abc@gmail.com");
          cobj[1] = new Customer("DEF", 8654678976L);
          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
          cobj[3] = new Exec("EFG", "efg@gmail.com")
          cobj[4] = new Person("PQR", "pqr@gmail.com")
          cobj[0].setCity("Coimbatore");
          cobj[1].setCity("Coimbatore");
          cobj[2].setCity("Chennai");
          cobj[3].setCity("Coimbatore");

          Vehicle vobj = new Vehicle("1234");
          Reservation robj1= new Reservation((Customer)cobj[0],vobj);

          robj1.setBookingDate(new Date());
        `,-1));function ft(n,t,b,g,s,p){return d(),v("main",de,[be,e("div",he,[e("div",ve,[ge,(d(),C(f(s.currentComponent)))])]),e("div",Ce,[e("div",ye,[e("div",we,[e("ul",fe,[e("li",{class:m({completed:s.completed[0]})}," Initiate an array of type Person with 5 objects. ",2),e("li",{class:m({completed:s.completed[1]})},[i(" Using the concept of "),je,i(", initiate objects 0, 1 and 2 as instances of the class Customer. ")],2),e("li",{class:m({completed:s.completed[2]})},[i(" Using the concept of "),_e,i(", initiate object 3 as an instance of of the class Exec. ")],2),e("li",{class:m({completed:s.completed[3]})},[i(" Initiate object 4 as an instance of class Person using the concept of "),ke],2),e("li",{class:m({completed:s.completed[4]})}," Set the city for each of the objects based on instructions in the comments ",2),e("li",{class:m({completed:s.completed[5]})},[i(" Create an object "),xe,i(" of type Vehicle with a regNum value of 1234 ")],2),e("li",{class:m({completed:s.completed[6]})},[i(" Create an object "),Ve,i(" of type Reservation passing cobj[0] (with proper typecasting) and vobj as parameters. ")],2),e("li",{class:m({completed:s.completed[7]})}," Set the booking date for robj1 to the current date. ",2)])])])]),e("div",Se,[e("div",De,[e("div",Pe,[Ie,e("div",Ee,[e("button",{style:r([{float:"right","margin-bottom":"30px"},{display:s.display[0]}]),onClick:t[0]||(t[0]=o=>p.popup("arraysComponent")),class:"button-30"},"Help",4),e("button",{style:r([{float:"right","margin-bottom":"30px"},{display:s.display[1]}]),onClick:t[1]||(t[1]=o=>p.popup("objectCreationComponent")),class:"button-30"},"Help",4),e("button",{style:r([{float:"right","margin-bottom":"30px"},{display:s.display[2]}]),onClick:t[2]||(t[2]=o=>p.popup("objectCreationComponent")),class:"button-30"},"Help",4),e("button",{style:r([{float:"right","margin-bottom":"30px"},{display:s.display[3]}]),onClick:t[3]||(t[3]=o=>p.popup("objectCreationComponent")),class:"button-30"},"Help",4),e("button",{style:r([{float:"right","margin-bottom":"30px"},{display:s.display[4]}]),onClick:t[4]||(t[4]=o=>p.popup("setterComponent")),class:"button-30"},"Help",4),e("button",{style:r([{float:"right","margin-bottom":"30px"},{display:s.display[5]}]),onClick:t[5]||(t[5]=o=>p.popup("objectCreationComponent")),class:"button-30"},"Help",4),e("button",{style:r([{float:"right","margin-bottom":"30px"},{display:s.display[6]}]),onClick:t[6]||(t[6]=o=>p.popup("objectCreationComponent")),class:"button-30"},"Help",4),e("button",{style:r([{float:"right","margin-bottom":"30px"},{display:s.display[7]}]),onClick:t[7]||(t[7]=o=>p.popup("setterComponent")),class:"button-30"},"Help",4)])]),e("div",{class:"codebox",id:"codebox",style:r({display:s.display[0]})},[Re,i("   "),a(e("input",{spellcheck:"false",maxlength:"8",style:{width:"90px"},"onUpdate:modelValue":t[8]||(t[8]=o=>n.one=o)},null,512),[[c,n.one]]),i(" cobj = new "),a(e("input",{spellcheck:"false",id:"two",maxlength:"9",style:{width:"95px"},"onUpdate:modelValue":t[9]||(t[9]=o=>n.two=o)},null,512),[[c,n.two]]),i("; "),Te,Ue,i(" } "),Be,e("button",{class:"button-9",id:"btn1",onClick:t[10]||(t[10]=o=>p.validate_one())},u(s.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:r({display:s.display[1]})},[Fe,He,i("   cobj[0] = new "),a(e("input",{spellcheck:"false",maxlength:"8",style:{width:"90px"},"onUpdate:modelValue":t[11]||(t[11]=o=>n.three=o)},null,512),[[c,n.three]]),i('(" '),a(e("input",{spellcheck:"false",maxlength:"3",style:{width:"50px"},"onUpdate:modelValue":t[12]||(t[12]=o=>n.four=o)},null,512),[[c,n.four]]),i('", " '),a(e("input",{spellcheck:"false",maxlength:"13",style:{width:"130px"},"onUpdate:modelValue":t[13]||(t[13]=o=>n.five=o)},null,512),[[c,n.five]]),i('") '),Le,Ge,i(" } "),Ne,e("button",{class:"button-9",id:"btn2",onClick:t[14]||(t[14]=o=>p.validate_two())},u(s.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:r({display:s.display[2]})},[Oe,Ae,i("   cobj[3] = new "),a(e("input",{spellcheck:"false",maxlength:"4",style:{width:"60px"},"onUpdate:modelValue":t[15]||(t[15]=o=>n.six=o)},null,512),[[c,n.six]]),i('(" '),a(e("input",{spellcheck:"false",maxlength:"3",style:{width:"60px"},"onUpdate:modelValue":t[16]||(t[16]=o=>n.seven=o)},null,512),[[c,n.seven]]),i('", " '),a(e("input",{spellcheck:"false",maxlength:"13",style:{width:"130px"},"onUpdate:modelValue":t[17]||(t[17]=o=>n.eight=o)},null,512),[[c,n.eight]]),i('") '),qe,Qe,i(" } "),Me,e("button",{class:"button-9",id:"btn3",onClick:t[18]||(t[18]=o=>p.validate_three())},u(s.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:r({display:s.display[3]})},[Ke,We,i("   cobj[3] = new "),a(e("input",{spellcheck:"false",maxlength:"6",style:{width:"70px"},"onUpdate:modelValue":t[19]||(t[19]=o=>n.nine=o)},null,512),[[c,n.nine]]),i('(" '),a(e("input",{spellcheck:"false",maxlength:"3",style:{width:"55px"},"onUpdate:modelValue":t[20]||(t[20]=o=>n.ten=o)},null,512),[[c,n.ten]]),i('", " '),a(e("input",{spellcheck:"false",maxlength:"13",style:{width:"130px"},"onUpdate:modelValue":t[21]||(t[21]=o=>n.eleven=o)},null,512),[[c,n.eleven]]),i('") '),ze,Je,i(" } "),Xe,e("button",{class:"button-9",id:"btn4",onClick:t[22]||(t[22]=o=>p.validate_four())},u(s.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:r({display:s.display[4]})},[Ye,Ze,i("   cobj[0]. "),a(e("input",{spellcheck:"false",maxlength:"7",style:{width:"75px"},"onUpdate:modelValue":t[23]||(t[23]=o=>n.twelve=o)},null,512),[[c,n.twelve]]),i('(" '),a(e("input",{spellcheck:"false",maxlength:"10",style:{width:"110px"},"onUpdate:modelValue":t[24]||(t[24]=o=>n.thirteen=o)},null,512),[[c,n.thirteen]]),i('"); '),$e,i("  "),et,tt,i(" } "),nt,i(" } "),ot,e("button",{class:"button-9",id:"btn5",onClick:t[25]||(t[25]=o=>p.validate_five())},u(s.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:r({display:s.display[5]})},[st,i("     "),a(e("input",{spellcheck:"false",maxlength:"7",style:{width:"75px"},"onUpdate:modelValue":t[26]||(t[26]=o=>n.fourteen=o)},null,512),[[c,n.fourteen]]),i(" vobj = new "),a(e("input",{spellcheck:"false",maxlength:"7",style:{width:"75px"},"onUpdate:modelValue":t[27]||(t[27]=o=>n.fifteen=o)},null,512),[[c,n.fifteen]]),i("( "),a(e("input",{spellcheck:"false",maxlength:"4",style:{width:"60px"},"onUpdate:modelValue":t[28]||(t[28]=o=>n.sixteen=o)},null,512),[[c,n.sixteen]]),i(";) "),it,i(" } "),lt,rt,i(" } "),at,e("button",{class:"button-9",id:"btn6",onClick:t[29]||(t[29]=o=>p.validate_six())},u(s.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:r({display:s.display[6]})},[ct,i("     "),a(e("input",{spellcheck:"false",maxlength:"11",style:{width:"100px"},"onUpdate:modelValue":t[30]||(t[30]=o=>n.seventeen=o)},null,512),[[c,n.seventeen]]),i(" robj = new "),a(e("input",{spellcheck:"false",maxlength:"11",style:{width:"100px"},"onUpdate:modelValue":t[31]||(t[31]=o=>n.eighteen=o)},null,512),[[c,n.eighteen]]),i("(( "),a(e("input",{spellcheck:"false",maxlength:"8",style:{width:"85px"},"onUpdate:modelValue":t[32]||(t[32]=o=>n.nineteen=o)},null,512),[[c,n.nineteen]]),i(")cobj[0], vobj); "),pt,i(" } "),ut,mt,dt,i(" } "),bt,e("button",{class:"button-9",id:"btn7",onClick:t[33]||(t[33]=o=>p.validate_seven())},u(s.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:r({display:s.display[7]})},[ht,i("     robj1."),a(e("input",{spellcheck:"false",maxlength:"14",style:{width:"130px"},"onUpdate:modelValue":t[34]||(t[34]=o=>n.twenty=o)},null,512),[[c,n.twenty]]),i("(new "),a(e("input",{spellcheck:"false",maxlength:"6",style:{width:"60px"},"onUpdate:modelValue":t[35]||(t[35]=o=>n.twentyone=o)},null,512),[[c,n.twentyone]]),i("); "),vt,i(" } "),gt,Ct,i(" } "),yt,e("button",{class:"button-9",id:"btn8",onClick:t[36]||(t[36]=o=>p.validate_eight())},u(s.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:r({display:s.display[8]})},[wt,e("button",{class:"button-9",id:"btn8",onClick:t[37]||(t[37]=o=>n.$router.push("/abstraction"))},u(s.button_value),1)],4)])])])}const jt=h(me,[["render",ft],["__scopeId","data-v-ca84cb0d"]]);const _t={components:{CustomerView:_,ReservationView:se,VehicleView:k,InstructionsView:ue,ReservationSystemView:jt,ClassView:x,PersonView:V,ClerkView:S},data(){return{componentSelect:"InstructionsView",testdriver_completed:!1}},methods:{testDriverCallBack(n){console.log("Test driver callback triggered",n),this.testdriver_completed=!0},instructionsReadCallback(n){console.log("Instructions read",n),this.componentSelect="ReservationSystemView"}}},kt={class:"app"},xt={id:"buttons",class:"relative"};function Vt(n,t,b,g,s,p){return d(),v(I,null,[e("main",kt,[e("button",{onClick:t[0]||(t[0]=o=>s.componentSelect="InstructionsView"),style:r(s.componentSelect==="InstructionsView"?"background-color: #55acee":"")},"1. Instructions",4),e("button",{onClick:t[1]||(t[1]=o=>s.componentSelect="ClassView"),style:r(s.componentSelect==="ClassView"?"background-color: #55acee":"")},"2. Class diagram",4),e("button",{onClick:t[2]||(t[2]=o=>s.componentSelect="PersonView"),style:r(s.componentSelect==="PersonView"?"background-color: #55acee":"")},"3. Person Class",4),e("button",{onClick:t[3]||(t[3]=o=>s.componentSelect="CustomerView"),style:r(s.componentSelect==="CustomerView"?"background-color: #55acee":"")},"4. Customer Class",4),e("button",{onClick:t[4]||(t[4]=o=>s.componentSelect="ClerkView"),style:r(s.componentSelect==="ClerkView"?"background-color: #55acee":"")},"5. Exec Class",4),e("button",{onClick:t[5]||(t[5]=o=>s.componentSelect="ReservationView"),style:r(s.componentSelect==="ReservationView"?"background-color: #55acee":"")}," 6. Reservation Class ",4),e("button",{onClick:t[6]||(t[6]=o=>s.componentSelect="VehicleView"),style:r(s.componentSelect==="VehicleView"?"background-color: #55acee":"")},"7. Vehicle Class",4),e("button",{onClick:t[7]||(t[7]=o=>s.componentSelect="ReservationSystemView"),style:r(s.componentSelect==="ReservationSystemView"?"background-color: #55acee":"")}," 8. Test Driver Class ",4),(d(),C(D,null,[(d(),C(f(s.componentSelect),{onTestdriverComplete:p.testDriverCallBack,onInstructionsRead:p.instructionsReadCallback},null,40,["onTestdriverComplete","onInstructionsRead"]))],1024))]),a(e("footer",null,[e("div",xt,[e("button",{class:"navitem",onClick:t[8]||(t[8]=o=>n.$router.push("/method-completion"))},"Next")])],512),[[P,s.testdriver_completed]])],64)}const Xt=h(_t,[["render",Vt]]);export{Xt as default};
