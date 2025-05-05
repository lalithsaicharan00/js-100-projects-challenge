let input = Number(prompt("Enter a number:"));

let sum = 0;

for (let i = 1; i <= input; i++) {
  if (i % 2 === 0) {
    sum += i;
  } else {
    continue;
  }
}

alert(`The sum of even numbers from 1 to ${input} is: ${sum}`);
