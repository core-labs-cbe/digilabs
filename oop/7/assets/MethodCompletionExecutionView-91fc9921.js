import{_ as a,o as s,c as r,b as t,i,p as l,a as c}from"./index-0ba2a450.js";const d={},o=e=>(l("data-v-51064d5a"),e=e(),c(),e),m=o(()=>t("div",{style:{"padding-left":"2%"}},[t("h1",null,"Understanding the Output"),t("p",null,"The TestDriver code on the left end creates the required Customer, Exec, Vehicle and Reservation ojbects and performs a reservation. Observe the output on the right end.")],-1)),p={class:"flex"},y=o(()=>t("div",{class:"codebox"},[t("h3",{style:{"font-family":"monospace"}},"Test Driver.java"),t("pre",null,`...

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


            `)],-1)),v={class:"outbox"},b=i('<p data-v-51064d5a>OUTPUT</p><p style="color:#fff;" data-v-51064d5a>Vehicle is available, initiating contract..</p><p style="color:#fff;" data-v-51064d5a>Reservation released</p><p style="color:#fff;" data-v-51064d5a>Vehicle key handedover</p><br data-v-51064d5a><p style="color:#fff;" data-v-51064d5a>Process finished with exit code 0</p><div style="height:100px;background-color:#202020;" data-v-51064d5a></div>',7);function u(e,n){return s(),r("main",null,[m,t("div",p,[y,t("div",v,[b,t("button",{class:"button-9",id:"btn1",onClick:n[0]||(n[0]=h=>e.$router.push("/congratulations"))},"Continue")])])])}const S=a(d,[["render",u],["__scopeId","data-v-51064d5a"]]);export{S as default};
