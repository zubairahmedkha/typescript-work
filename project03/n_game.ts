#! /usr/bin/env nod
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*10 +1)
//console.log(randomNumber);

const answers = await inquirer.prompt([{
    name :"userGuessedNumber",
    type : "number",
    message : "Enter your guess number, please choose 1-10 => ",
}]);
if(answers.userGuessedNumber  === randomNumber){
    console.log(randomNumber,"","you win you choose right number");
}
else {
    console.log("lucky number is =>",randomNumber,"you lose the Game !!!");
}