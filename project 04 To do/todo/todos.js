#! /usr/bin/env node
console.clear();
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let todosQuestion = await inquirer.prompt([{
            name: "q1",
            message: " what would like to you want to add in list",
            type: "inupt"
        },
        {
            name: "q2",
            message: "do you want to add more in list",
            type: "list",
            choices: ["update", "Exit"],
            //  default:true
        },
    ]);
    // if condition is true then it will add in list
    if (todosQuestion.q2 === "update") {
        condition = true;
    }
    ;
    if (todosQuestion.q2 === "Exit") {
        todo.push(todosQuestion.q1);
        console.log(todo);
        break;
    }
    todo.push(todosQuestion.q1);
    condition = todosQuestion.q2;
    console.log(todo);
}
// write a code of currency converter here?
