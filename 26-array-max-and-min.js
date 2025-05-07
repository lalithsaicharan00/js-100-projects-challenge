let arr = [10, 41, 32, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(`Maximum value: ${max}`);
console.log(`Minimum value: ${min}`);
