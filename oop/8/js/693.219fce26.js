"use strict";(self["webpackChunkexp_8"]=self["webpackChunkexp_8"]||[]).push([[693],{4693:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});n(7658);var a=n(3396);const o=t=>((0,a.dD)("data-v-71ca371e"),t=t(),(0,a.Cn)(),t),r={class:"flex"},s=o((()=>(0,a._)("div",{class:"codebox"},[(0,a._)("h3",{style:{"font-family":"monospace"}},"Test Driver.java"),(0,a._)("pre",null,'...\n\n\npublic class TestDriver {\n\t\n\tpublic static void main(String[] args) throws ParseException {\n\t\t\n\t\t//RentalSystem rentalSystem = new RentalSystem();\n\t\t//Singleton Pattern Demo\n\t\tRentalSystem rentalSystem = RentalSystem.getRentalSystem();\n\t\t\n\t\trentalSystem.execobj=new Exec[1];\n\t\trentalSystem.execobj[0]=new Person.PersonBuilder("EFG")\n\t\t\t\t.withEmail("efg@gmail.com")\n\t\t\t\t.withCity("Coimbatore")\n\t\t\t\t.buildExec();\n\t\t\n\t\trentalSystem.cobj= new Customer[3];\n\t\trentalSystem.cobj[0]=new Person.PersonBuilder("ABC")\n\t\t\t\t.withEmail("abc@gmail.com")\n\t\t\t\t.withCity("Coimbatore")\n\t\t\t\t.buildCustomer();\n\t\trentalSystem.cobj[1]=new Person.PersonBuilder("DEF")\n\t\t\t\t.withPhone(8654678976L)\n\t\t\t\t.withCity("Coimbatore")\n\t\t\t\t.buildCustomer();\n\t\trentalSystem.cobj[2]=new Person.PersonBuilder("GHI")\n\t\t\t\t.withEmail("ghi@gmail.com")\n\t\t\t\t.withPhone(1234567890L)\n\t\t\t\t.withCity("Chennai")\n\t\t\t\t.buildCustomer();\n\t\t\n\t\trentalSystem.vobj = new Vehicle[1];\n\t\trentalSystem.vobj[0]=new Vehicle(1234);\n\t\t\n\t\trentalSystem.robj=new Reservation[1];\n\t\trentalSystem.robj[0]= new Reservation(rentalSystem.cobj[0],rentalSystem.vobj[0]);\n\t\tSimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd");\n        Date d = sdformat.parse("2022-02-29");\n\t\trentalSystem.robj[0].setBookingDate(d);\n\t\trentalSystem.robj[0].setContractStatus("Reservation not released");\n\t\t\n\t\trentalSystem.visitOffice(rentalSystem.robj[0]);\n\t}\t\n}\n\n            ')],-1))),i={class:"outbox"},l=(0,a.uE)('<p data-v-71ca371e>OUTPUT</p><p style="color:#fff;" data-v-71ca371e>Vehicle is available, initiating contract..</p><p style="color:#fff;" data-v-71ca371e>Reservation released</p><p style="color:#fff;" data-v-71ca371e>Vehicle key handedover</p><br data-v-71ca371e><p style="color:#fff;" data-v-71ca371e>Process finished with exit code 0</p><div style="height:100px;background-color:#202020;" data-v-71ca371e></div>',7);function c(t,e){return(0,a.wg)(),(0,a.iD)("main",null,[(0,a._)("div",r,[s,(0,a._)("div",i,[l,(0,a._)("button",{class:"button-9",id:"btn1",onClick:e[0]||(e[0]=e=>t.$router.push("/congratulations"))},"Continue")])])])}var m=n(89);const d={},y=(0,m.Z)(d,[["render",c],["__scopeId","data-v-71ca371e"]]);var u=y}}]);
//# sourceMappingURL=693.219fce26.js.map