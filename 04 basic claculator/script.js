let firstNumber = prompt("Enter the first number");
firstNumber = Number(firstNumber);

let secondNumber = prompt("Enter your second number");
secondNumber = Number(secondNumber);

let operation = prompt("Enter the operator");
let result;

switch (operation) {
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "*":
    result = firstNumber * secondNumber;
    break;
  case "/":
    result = firstNumber / secondNumber;
    break;
  default:
    console.log("Enter a valid operator");
    break;
}

alert("The result of your operation is " + result);
