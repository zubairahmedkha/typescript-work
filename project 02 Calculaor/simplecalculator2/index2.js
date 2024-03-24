#!/usr/bin/env node
console.clear();
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        massage: "Enter your firstNumber", type: "number",
        name: "firstNumber"
    }, {
        message: "Enter your secondNumber", type: "number",
        name: "secondNumber"
    },
    { message: "select one of the operator", type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Divion"]
    },
]);
// condional satement
if (answer.operator === "Addition") {
    console.log("\t\n  your value is :", answer.firstNumber, "+", answer.secondNumber, "=", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Substraction") {
    console.log("\t\n your value is :", answer.firstNumber, "-", answer.secondNumber, "=", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("\t\n your value is :", answer.firstNumber, "x", answer.secondNumber, "=", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Divion") {
    console.log("\t\n your value is :", answer.firstNumber, "%", answer.secondNumber, "=", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("\t\nThis is an invalid Number");
}
;
console.log("\t\n    zubair khan calculator \t\n");
