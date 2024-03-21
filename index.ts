#! /usr/bin/env node //this line is called SHABANG to make it run on node

import inquirer from "inquirer";

//square brackets in the prompt is for input,
//curly brackets is a object to enter the key(message)
//list(type):  in the 3rd is used to present a list to user
//bin: is a binary file that will be executed to run the program
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "first_number" },
  { message: "Enter second number", type: "number", name: "second_number" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (answer.operator === "Addition") {
  console.log(answer.first_number + answer.second_number);
} else if (answer.operator === "Subtraction") {
  console.log(answer.first_number - answer.second_number);
} else if (answer.operator === "Multiplication") {
  console.log(answer.first_number * answer.second_number);
} else if (answer.operator === "Division") {
  console.log(answer.first_number / answer.second_number);
}
  else {
  console.log("Enter correct operator");
}
console.log("THE END");
