let firstNumber = prompt("Enter the first number:");
let secondNumber = prompt("Enter the second number:");

if (firstNumber > secondNumber) {
  console.log(firstNumber + " is greater than " + secondNumber);
} else if (firstNumber == secondNumber) {
  console.log("Both numbers are equal");
} else {
  console.log(secondNumber + " is greater than " + firstNumber);
}
