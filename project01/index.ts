console.clear()
console.log("Currecy converter");
const currency:any ={
    USD:1,//BASE CURRENCY
    EUR:0.95,
    GBP:0.76,
    PKR:280,
    INR:74,
}
import inquirer from "inquirer";
let answer:any = await inquirer.prompt([{
    name:"from",
    message:"Enter from currency",
    type:"list",
    choices:["USD","EUR","GBP","PKR","INR"]},
    {name:"to",
    message:"Enter to currency",
    type:"list",
    choices:["USD","EUR","GBP","PKR","INR"]},

  {name:"toamount",
    massage:"Enter your amount",
    type:"number"
    },
]);
let fromAmount = currency[answer.from]
let toAmount = currency[answer.to]
let amount = answer.toamount
let baseAmout = amount / fromAmount
let converted = baseAmout * toAmount

// console.log(fromAmount)
// console.log(toAmount)
// console.log(amount)
console.log(baseAmout)
console.log(converted)
