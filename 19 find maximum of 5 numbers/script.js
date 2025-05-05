// alert("Enter 5 numbers to find the maximum");

// let maximumNumber = 0;

// let firstNumber = Number(prompt("Enter first number: "));
// if (firstNumber > maximumNumber) {
//   maximumNumber = firstNumber;
// }

// let secondNumber = Number(prompt("Enter second number: "));
// if (secondNumber > maximumNumber) {
//   maximumNumber = secondNumber;
// }

// let thirdNumber = Number(prompt("Enter third number: "));
// if (thirdNumber > maximumNumber) {
//   maximumNumber = thirdNumber;
// }
// let fourthNumber = Number(prompt("Enter fourth number: "));
// if (fourthNumber > maximumNumber) {
//   maximumNumber = fourthNumber;
// }
// let fifthNumber = Number(prompt("Enter fifth number: "));
// if (fifthNumber > maximumNumber) {
//   maximumNumber = fifthNumber;
// }

// alert("The maximum number is: " + maximumNumber);

let totalNumbers = Number(
  prompt(
    "Enter the total count of numbers you want to compare to find the maximum.: "
  )
);

let maximumNumber = 0;

for (let i = 1; i <= totalNumbers; i++) {
  let number = Number(prompt(`Enter number ${i}: `));
  if (number > maximumNumber) {
    maximumNumber = number;
  }
}

alert("The maximum number is: " + maximumNumber);
