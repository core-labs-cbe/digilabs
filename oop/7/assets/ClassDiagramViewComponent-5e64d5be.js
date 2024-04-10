import{_ as e,o as i,c as s,p as o,a as c,b as n}from"./index-0ba2a450.js";const r={},p=t=>(o("data-v-e00fd9e9"),t=t(),c(),t),u={class:"app"},l=p(()=>n("div",{class:"codebox"},[n("pre",null,`
    public class Person {
	private String name;
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




      
      `)],-1)),_=[l];function m(t,a){return i(),s("main",u,_)}const A=e(r,[["render",m],["__scopeId","data-v-e00fd9e9"]]);const d={},h=t=>(o("data-v-4514c09b"),t=t(),c(),t),g={class:"app"},S=h(()=>n("div",{class:"codebox"},[n("pre",null,`import java.util.*;
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
	
	public String toString()
	{
		return "[ID: "+ getEmpID()+ ", Name: "+getName()+
				", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";
	}
	
}



      
      `)],-1)),b=[S];function v(t,a){return i(),s("main",g,b)}const F=e(d,[["render",v],["__scopeId","data-v-4514c09b"]]);const y={},C=t=>(o("data-v-30a9a01e"),t=t(),c(),t),f={class:"app"},I=C(()=>n("div",{class:"codebox"},[n("pre",null,`public class Customer extends Person{
	
	private final int customerID;
	private static int customerCount=0; 
	
	public Customer()
	{
		super();
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String custName, String email) {
		super(custName, email);
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String custName, long phone) {
		super(custName, phone);
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String custName, String email, long phone) {
		super(custName, email, phone);
		customerCount++;
		this.customerID=customerCount;
	}
	
	public int getcustomerID() {
		return customerID;
	}
	
	public String toString()
	{
		return "[ID: "+ getcustomerID()+ ", Name: "+getName()+
				", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";
	}
}




      
      `)],-1)),x=[I];function $(t,a){return i(),s("main",f,x)}const G=e(y,[["render",$],["__scopeId","data-v-30a9a01e"]]);const D={},N=t=>(o("data-v-7471df57"),t=t(),c(),t),P={class:"app"},w=N(()=>n("div",{class:"codebox"},[n("pre",null,`
public class Vehicle {
	private final int regNum;
	private String keyStatus;
	
	public Vehicle(int regNum)
	{
		this.regNum=regNum;
		this.keyStatus="available";
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

      
      `)],-1)),V=[w];function E(t,a){return i(),s("main",P,V)}const H=e(D,[["render",E],["__scopeId","data-v-7471df57"]]),k="/digilabs/oop/7/assets/Screen-2d20a59f.png";const j={},B=t=>(o("data-v-2c4f63a2"),t=t(),c(),t),L={class:"app"},K=B(()=>n("div",{class:"codebox",style:{"align-items":"center","justify-content":"center",display:"flex"}},[n("img",{src:k,style:{width:"100%",height:"100%","object-fit":"contain"}})],-1)),R=[K];function q(t,a){return i(),s("main",L,R)}const J=e(j,[["render",q],["__scopeId","data-v-2c4f63a2"]]);export{G as C,A as P,H as V,J as a,F as b};
