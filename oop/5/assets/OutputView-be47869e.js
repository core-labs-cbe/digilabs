import{_ as s,o as a,c as i,b as t,M as c,p as r,a as l}from"./index-db6c1348.js";const u={},n=e=>(r("data-v-4097b6ee"),e=e(),l(),e),d=n(()=>t("header",{style:{padding:"30px"}},[t("h1",null," Step 4: Understanding the output "),t("p",null," To understand the execution of the code, the final state of stack/heap memory has been provided along with the output. ")],-1)),p=n(()=>t("div",{class:"flex"},[t("div",{class:"codebox"},[t("pre",null,`import java.util.Scanner;
import java.util.Date;

public class TestDriver {

	public static void main(String[] args) {
		Customer[] cobj= new Customer[3];
		cobj[0]=new Customer("ABC", "abc@gmail.com");
		cobj[1]=new Customer("DEF", 8654678976L);
		cobj[2]=new Customer("GHI", "ghi@gmail.com", 1234567890L);
		cobj[0].setCity("Coimbatore");
		cobj[1].setCity("Coimbatore");
		cobj[2].setCity("Chennai");
		Vehicle vobj=new Vehicle(1234);
		Reservation robj= new Reservation(cobj[0],vobj);
		robj.setBookingDate(new Date());
		robj.getVehicleObj().updateKeyStatus();
		}
	}
                `)]),t("div",{class:"outbox"},[t("p",null,"Process finished with exit code 0")])],-1)),b={style:{padding:"20px"}};function _(e,o){return a(),i(c,null,[d,t("main",null,[p,t("div",b,[t("button",{class:"button-9",onClick:o[0]||(o[0]=m=>e.$router.push("/completion"))},"Next")])])],64)}const v=s(u,[["render",_],["__scopeId","data-v-4097b6ee"]]);export{v as default};
