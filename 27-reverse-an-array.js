let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`Original array: ${arr}`);

let result = [];

for (let i = arr.length - 1; i >= 0; i--) {
  result.push(arr[i]);
}

console.log(`Reversed array: ${result}`);
