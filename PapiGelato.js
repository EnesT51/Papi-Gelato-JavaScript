var IceOptions = {IceFlawor: "", IcePrice: 0.95, PriceBowlIce: 0.75, PriceHornIce: 1.25};
var IceToppings = {CreamPrice: 0.50, SprinklesPrice: 0.30, CaramelBowlPrice: 0.90, CaramelHornPrice: 0.60};
var Total = {TotalHorn: 0, TotalBowl: 0, TotalBalls: 0};
var ZakelijkijsBoninfo = {PrijsLiterIjs: 9.80, LiterIjs: 0};
var Topping = {Topping: 0, ToppingTotal: 0};

function Welcome(){
   alert('Welcome to Papi Gelato.');
}
function Thanks(){
   alert('Thanks and see you again.');
}
function Sorry(){
   alert("Sorry dat is geen optie die we aanbieden...");
}
function OutOfOrder(){
   alert("Sorry, zulke grote bakken hebben we niet");
}
function TypeCustomer(){
   bool = true;
   while(bool){
      var bool = false;
      var Customer = prompt("Bent u (A) zakelijk of (B) particuier? kies (A) voor zakelijk (B) voor particulier ").toUpperCase();
      switch(Customer){
         case "A": case "B":
            return Customer;
         case null:
            return;
         default:
            Sorry();
            bool = true;
      }
   }
}
function ZakelijkIjsBon(){
   var text = document.createElement("h2");
   var node = document.createTextNode("[Bon Papi-Gelato]");
   var paragraph = document.createElement("p");
   text.appendChild(node);
   document.body.appendChild(text);
   document.body.appendChild(paragraph);
   var Total = (ZakelijkijsBoninfo["LiterIjs"] * ZakelijkijsBoninfo["PrijsLiterIjs"]).toFixed(2);
   var BTW = (Total/106*6).toFixed(2);
   paragraph.innerHTML += ("------------[Papi Gelato]------------") + "<br>";
   paragraph.innerHTML += (`Liter    ${ZakelijkijsBoninfo["LiterIjs"]} x  ${ZakelijkijsBoninfo["PrijsLiterIjs"]} = €${Total}`) + "<br>";
   paragraph.innerHTML += (`BTW (6%) = €${BTW}`) + "<br>";
   paragraph.innerHTML += (`----------------------------------------`) + "<br>";
   paragraph.innerHTML += (`Totaal   = €${Total}`) + "<br>";
}
function ZakelijkIjsSmaken(){
   let literijs = parseInt(prompt("Hoeveel liter ijs wilt u hebben? "));
   ZakelijkijsBoninfo["LiterIjs"] = literijs;
   for(let i = 0; i < literijs; i++){
      let smaken = prompt(`Welke smaak wilt u voor ${i + 1} literijs? A) Aardbei, C) Chocolade, of V) Vanille? `).toUpperCase();
      switch(smaken){
         case "A":
            IceOptions["IceFlawor"] = "Aardbei";
            break;
         case "C":
            IceOptions["IceFlawor"] = "Chocolade";
            break;
         case "V":
            IceOptions["IceFlawor"] = "Vanillie";
            break;
         default:
            smaken = "";
            literijs = 0;
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
      switch(PrompToppings){
         case "A":
            break;
         case "B":
            Topping["Topping"] +=1;
            Topping["ToppingTotal"] += IceToppings["CreamPrice"];
            break;
         case "C":
            Topping["Topping"] +=1;
            Topping["ToppingTotal"] += IceToppings["SprinklesPrice"];
            break;
         case "D":
            Topping["Topping"] +=1
            switch(BakjeHoorentje){
               case "Hoorntje":
                  Topping["ToppingTotal"] += IceToppings["CaramelHornPrice"];
                  repeat = false;
                  break;
               case "Hakje":
                  Topping["ToppingTotal"] += IceToppings["CaramelBowlPrice"];
                  repeat = false;
                  break;
         }  break; 
         default:
            Sorry();
            repeat = true;
      }
   } 
}

function Bon(){
   var text = document.createElement("h2");
   var node = document.createTextNode("[Bon Papi-Gelato]");
   var paragraph = document.createElement("p");
   text.appendChild(node);
   document.body.appendChild(text);
   document.body.appendChild(paragraph);
   var CalculatePriceIceBalls = Total["TotalBalls"] * IceOptions["IcePrice"];
   var CalculatePriceBowl = Total["TotalBowl"] * IceOptions["PriceBowlIce"];
   var CalculatePriceHorn = Total["TotalHorn"] * IceOptions["PriceHornIce"];
   var CalculateTotalPrice = CalculatePriceIceBalls + CalculatePriceBowl + CalculatePriceHorn + Topping["ToppingTotal"];

   paragraph.innerHTML += ("------------[Papi Gelato]-----------") + "<br>";
   paragraph.innerHTML += (`Bolletjes ${Total["TotalBalls"]} x €${IceOptions["IcePrice"]} = ${CalculatePriceIceBalls.toFixed(2)}`) + "<br>";
   if(Total["TotalHorn"] > 0){
      paragraph.innerHTML += (`Hoorntje   ${Total["TotalHorn"]} x = €${CalculatePriceHorn.toFixed(2)}`) + "<br>";
   }else{null}
   if(Total["TotalBowl"] > 0){
      paragraph.innerHTML += (`Bakje      ${Total["TotalBowl"]} x = €${CalculatePriceBowl.toFixed(2)}`) + "<br>";
   }else{null}
   if(Topping["Topping"] > 0){
      paragraph.innerHTML += (`Topping    ${Topping["Topping"]} x = €${Topping["ToppingTotal"]}`) + "<br>";
   }else{null}
   paragraph.innerHTML += ("---------------------------------------") + "<br>";
   paragraph.innerHTML += (`TotalPrice €${CalculateTotalPrice.toFixed(2)}`) + "<br>";
}
function Order(){
   var AskCustomerOrder = prompt("wilt u nog meer bestellen Y/N:? ").toUpperCase();
   switch(AskCustomerOrder){
      case "Y":
         return true;
      case "N":
         return false;
      default:
         Sorry();
         Order();
   }
}
function AskCustomerBowlOrHorn(){
   bool = true;
   while(bool){
      bool = false;
      AskBowlOrHorn = prompt(`Wilt u deze ${Total["TotalBalls"]} bolletje(s) in A) een hoorntje of B) een bakje?`).toUpperCase();
      switch(AskBowlOrHorn){
         case "A":
            return "Hoorntje";
         case "Bakje":
            return "Bakje";
         default:
            Sorry();
            AskCustomerBowlOrHorn();
            bool = true;
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
      switch(AskFlawor){
         case "A":
            IceOptions["Iceflawor"] = "Aardbei";
            break;
         case "C":
            IceOptions["Iceflawor"] = "Chocolade";
            break;
         case "V":
            IceOptions["Iceflawor"] = "Vanille";
            break;
         default:
         	Sorry();
            AskCustomerIceFlawor();
      }
   }
}
Welcome();
holder = true;
while(holder){
   var Typecustomer = TypeCustomer();
   switch(Typecustomer){
      case "A":
         ZakelijkIjsSmaken();
         ZakelijkIjsBon();
         holder = false;
         break;
      default:
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
         break;
   }
}
Thanks();

