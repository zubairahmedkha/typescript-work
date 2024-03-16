console.clear()
console.log ("calculator")

import inquirer from "inquirer"
const answer = await inquirer.prompt([{
    massage: "Enter your firstNumber",type:"number",
    name:"firstNumber"},{
    message: "Enter your secondNumber",type:"number",
    name: "secondNumber"},  
    {message:"select one of the operator",type:"list",
name:"operator",
choices:["Addition","Substraction","Multiplication","Divion"]
}  ,
])
// condional satement
if(answer.operator === "Addition"){
    console.log("your value is :",answer.firstNumber,"+",answer.secondNumber ,"="
    ,answer.firstNumber+answer.secondNumber
    )}
    else if(answer.operator === "Substraction"){
        console.log("your value is :",answer.firstNumber,"-",answer.secondNumber ,"="
        ,answer.firstNumber - answer.secondNumber
        )}
        else if (answer.operator === "Multiplication"){
            console.log("your value is :",answer.firstNumber,"x",answer.secondNumber ,"="
            ,answer.firstNumber * answer.secondNumber
            )}
            else if (answer.operator === "Divion"){
                console.log("your value is :",answer.firstNumber,"%",answer.secondNumber ,"="
                ,answer.firstNumber / answer.secondNumber,
                )}
                else
                     { console.log("This is an invalid Number")};
                console.log("zubair khan calculator");