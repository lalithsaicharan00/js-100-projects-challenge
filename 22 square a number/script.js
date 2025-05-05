let number = Number(prompt("Enter a number to get square of it: "));

let result = square(number);
alert(`The square of ${number} is ${result}`);

function square(num) {
  return num * num;
}
