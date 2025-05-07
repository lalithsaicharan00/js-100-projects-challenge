let arrOne = [1, 2, 3, 4, 5];
let arrTwo = [6, 7, 8, 9, 10];

let mergedString = arrOne.join(",") + "," + arrTwo.join(",");
let mergedArray = mergedString.split(",");

console.log(`Merged array: ${mergedArray}`); // Output: Merged array: 1,2,3,4,5,6,7,8,9,10
