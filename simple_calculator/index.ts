import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number: ", type: "number", name: "firstNumber" },
  { message: "Enter second number: ", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Condtional statement
if (answer.operator === "Addition") {
  console.log(
    "sum of these two number is : ",
    answer.firstNumber + answer.secondNumber
  );
}


else if(answer.operator === "Subtraction") {
    console.log(
      "subtraction of these two number is : ",
      answer.firstNumber - answer.secondNumber
    );
  }

  else if(answer.operator === "Multiplication") {
    console.log(
      "Multiplication of these two number is : ",
      answer.firstNumber * answer.secondNumber
    );
  }

  else if(answer.operator === "Division") {
    console.log(
      "Division of these two number is : ",
      answer.firstNumber / answer.secondNumber
    );
  }

  else
  {
    console.log("Invalid operator")
  }

