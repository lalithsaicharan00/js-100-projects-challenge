let arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 10];

let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
}

console.log(`Original array: ${arr}`);
console.log(`Array with duplicates removed: ${uniqueArr}`);
