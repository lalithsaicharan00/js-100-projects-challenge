let input = Number(prompt("Enter a number to calculate its factorial:"));

let factorial = 1;

if (input == 0) {
  alert(`The factorial of ${input} is ${factorial}.`);
} else if (input < 0) {
  alert("Factorial is not defined for negative numbers.");
} else {
  for (let i = 1; i <= input; i++) {
    factorial *= i;
  }
  alert(`The factorial of ${input} is ${factorial}.`);
}
