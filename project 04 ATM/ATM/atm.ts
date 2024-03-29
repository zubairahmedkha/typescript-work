console.clear();
console.log("Zubair Kham Atm");
let balance = 100000;
console.log("your Balance ", balance)
let pinNumber =1122
import inquirer from "inquirer" ;
let pinAnswer = await inquirer.prompt([{
    name:"pin",
message:"enter your pin number",
    type:"number"
}])
if(pinNumber===pinAnswer.pin) {
    let  ans = await inquirer.prompt([{
     name:"option",
     massage:"Select options" ,
     type:"list",choices:["CashWihtdrawl","FastCach"
    ,"Balance Inquiery"],

    }])
if(ans.option=== "CashWihtdrawl" ) {
    let amount = await inquirer.prompt([{
        name:"cash",
        message:"enter amount",
        type:"number",
     }])
     if (amount.cash > balance) { console.log("Insuffiant Balance") }
     else
     {console.log("your withdrawl amount is ", amount.cash)
  console.log("your Balance ", balance - amount.cash)}}
  //if (balance < amount.cash) { console.log("Insuffiant Balance") }}
  
   if (ans.option === "FastCach") {
    let amount = await inquirer.prompt([{
        name:"cash",
        message:"select amount",
        type:"list",
        choices:["2000","5000","10000"]
     }])
     console.log("your withdrawl amount is ", amount.cash)
  console.log("your Balance ", balance - amount.cash)  }
  if (ans.option === "Balance Inquiery") {
    console.log("your Balance ", balance)  }
    
    }
else
    {console.log("invalid pin number")}

   