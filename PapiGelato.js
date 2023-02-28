//const prompt=require("prompt-sync")({sigint:true}); 
var IceOptions = {IceFlawor: "", IcePrice: 0.95, PriceBowlIce: 0.75, PriceHornIce: 1.25};
var IceToppings = {CreamPrice: 0.50, SprinklesPrice: 0.30, CaramelBowlPrice: 0.90, CaramelHornPrice: 0.60};
var Total = {TotalHorn: 0, TotalBowl: 0, TotalBalls: 0};
var ZakelijkijsBoninfo = {PrijsLiterIjs: 9.80, LiterIjs: 0};
var Topping = {Topping: 0, ToppingTotal: 0};

function Welcome(){
   console.log('Welcome to Papi Gelato.');
}
function Thanks(){
   console.log('Thanks and see you again.');
}
function Sorry(){
   console.log("Sorry dat is geen optie die we aanbieden...");
}
function OutOfOrder(){
   console.log("Sorry, zulke grote bakken hebben we niet");
}
function TypeCustomer(){
   bool = true;
   while(bool){
      var bool = false;
      var Customer = prompt("Bent u (A) zakelijk of (B) particuier? kies (A) voor zakelijk (B) voor particulier ").toUpperCase();
      if(Customer == "A" || Customer == "B"){
         return Customer;
      }
      else if (Customer == null){
         return;
      }
      Sorry();
      bool = true;
   }
}
function ZakelijkIjsBon(){
   var Total = (ZakelijkijsBoninfo["LiterIjs"] * ZakelijkijsBoninfo["PrijsLiterIjs"]);
   var BTW = (Total/106*6).toFixed(2);
   console.log("------------[Papi Gelato]------------");
   console.log(`Liter    ${ZakelijkijsBoninfo["LiterIjs"]} x  ${ZakelijkijsBoninfo["PrijsLiterIjs"]} = €${Total}`);
   console.log(`Totaal   = €${Total}`);
   console.log(`BTW (6%) = €${BTW}`);
}
function ZakelijkIjsSmaken(){
   let literijs = parseInt(prompt("Hoeveel liter ijs wilt u hebben? "));
   ZakelijkijsBoninfo["LiterIjs"] = literijs;

   for(let i = 0; i < literijs; i++){
      let smaken = prompt(`Welke smaak wilt u voor ${i + 1} literijs? A) Aardbei, C) Chocolade, of V) Vanille? `).toUpperCase();
      if(smaken == "A"){
         IceOptions["IceFlawor"] = "Aardbei";
      }else if (smaken == "C"){
         IceOptions["IceFlawor"] = "Chocolade";
      }else if(smaken == "V"){
         IceOptions["IceFlawor"] = "Vanillie";
      }else{
         Sorry();
         ZakelijkIjsSmaken();
      }
   }
}
function Toppings(BakjeHoorentje){
   repeat = true;
   while(repeat){
      repeat = false;
      PrompToppings = prompt("Wat voor topping wilt u: A) Geen, B) Slagroom, C) Sprinkels of D) Caramel Saus?").toUpperCase();
      if(PrompToppings == "A"){
         continue;
      }else if (PrompToppings == "B"){
         Topping["Topping"] +=1;
         Topping["ToppingTotal"] += IceToppings["CreamPrice"];
      }else if(PrompToppings == "C"){
         Topping["Topping"] +=1;
      }else if (PrompToppings == "D"){
         Topping["Topping"] +=1
         Topping["ToppingTotal"] +=  IceToppings["SprinklesPrice"];
         if(BakjeHoorentje == "hoorntje"){
            Topping["ToppingTotal"] += IceToppings["CaramelHornPrice"];
         }else{
            Topping["ToppingTotal"] += IceToppings["CaramelBowlPrice"];
         }
      }else{
         Sorry();
         repeat = true;
      }
   }
}
function Bon(){
   var IceBalls = Total["TotalBalls"];
   var CalculatePriceIceBalls = Total["TotalBalls"] * IceOptions["IcePrice"];
   var CalculatePriceBowl = Total["TotalBowl"] * IceOptions["PriceBowlIce"];
   var CalculatePriceHorn = Total["TotalHorn"] * IceOptions["PriceHornIce"];
   var CalculateTotalPrice = CalculatePriceIceBalls + CalculatePriceBowl + CalculatePriceHorn + Topping["ToppingTotal"];

   console.log("------------[Papi Gelato]-------------");
   console.log(`Bolletjes ${Total["TotalBalls"]} x €${IceOptions["IcePrice"]} = ${CalculatePriceIceBalls.toFixed(2)}`);
   if(Total["TotalHorn"] > 0){
      console.log(`Hoorntje   ${Total["TotalHorn"]} x = €${CalculatePriceHorn.toFixed(2)}`);
   }else{null}
   if(Total["TotalBowl"] > 0){
      console.log(`Bakje      ${Total["TotalBowl"]} x = €${CalculatePriceBowl.toFixed(2)}`);
   }else{null}
   if(Topping["Topping"] > 0){
      console.log(`Topping    ${Topping["Topping"]} x = €${Topping["ToppingTotal"]}`);
   }else{null}
   console.log("------------------------------------------------");
   console.log(`TotalPrice €${CalculateTotalPrice.toFixed(2)}`);
}  
function Order(){
   var AskCustomerOrder = prompt("wilt u nog meer bestellen Y/N:? ").toUpperCase();
   if(AskCustomerOrder == "Y"){
      return true;
   }else if(AskCustomerOrder == "N"){
      return false;
   }
   else{
      Sorry();
      Order();
   }
}
function AskCustomerBowlOrHorn(){
   bool = true;
   while(bool){
      bool = false;
      AskBowlOrHorn = prompt(`Wilt u deze ${Total["TotalBalls"]} bolletje(s) in A) een hoorntje of B) een bakje?`).toUpperCase();
      if(AskBowlOrHorn == "A"){
         return "Hoorntje";
      }else if (AskBowlOrHorn == "B"){
         return "Bakje";
      }else{
         Sorry();
         AskCustomerBowlOrHorn();
      }
   }
}
function AskCustomerIceBalls(){
   var AskTotalBalls = prompt("Hoeveel bolletjes wilt u hebben?: ");
   
   if(AskTotalBalls >= 1 && AskTotalBalls <=8){
      Total["TotalBalls"] = AskTotalBalls;
   }else{
      OutOfOrder();
      AskCustomerIceBalls();
   }
}
function AskCustomerIceFlawor(){
   for(let i = 0; i < Total["TotalBalls"]; i ++){
      var AskFlawor = prompt(`Welke smaak wilt u voor bolletje nummer ${i + 1}? A) Aardbei, C) Chocolade, of V) Vanille? `).toUpperCase();
      if(AskFlawor == "A"){
         IceOptions["Iceflawor"] = "Aardbei";
      }else if (AskFlawor == "C"){
         IceOptions["Iceflawor"] = "Chocolade";
      }else if (AskFlawor == "V"){
         IceOptions["Iceflawor"] = "Vanille";
      }else{
         Sorry();
         AskCustomerIceFlawor();
      }
   }
}
Welcome();
holder = true;
while(holder){
   var Typecustomer = TypeCustomer();
   if(Typecustomer == "A"){
      ZakelijkIjsSmaken();
      ZakelijkIjsBon();
      holder = false;
   }else{
      AskCustomerIceBalls();
      if(Total["TotalBalls"] >= 1 && Total["TotalBalls"] <= 3){
         var HornOrBowl = AskCustomerBowlOrHorn();
      }else if (Total["TotalBalls"] >= 3 && Total["TotalBalls"] <= 8){
         HornOrBowl = "Bakje";
      }console.log(`Dan krijgt u van mij een ${HornOrBowl} met ${Total["TotalBalls"]} bolletjes`);
      if(HornOrBowl == "Hoorntje"){Total["TotalHorn"] +=1; }
      else{Total["TotalBowl"] +=1; }
      AskCustomerIceFlawor();
      Toppings(HornOrBowl);
      holder = Order();
      Bon();
   }
}
Thanks();

