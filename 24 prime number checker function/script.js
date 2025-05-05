let number = Number(prompt("Enter a positive number:"));

while (isNaN(number) || number <= 0) {
  number = Number(prompt("Please enter a positive number:"));
}

let result = isPrime(number);

if (result) {
  alert(`${number} is a prime number.`);
} else {
  alert(`${number} is not a prime number.`);
}

function isPrime(num) {
  let rootNumber = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= rootNumber; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
