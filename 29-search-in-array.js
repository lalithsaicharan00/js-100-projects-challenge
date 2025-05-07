let arr = [21, 67, 34, 56, 78, 90, 12, 45, 67, 89, 23, 45, 67, 89, 12];
let target = 45;

let index = -1; // Initialize index to -1 to indicate not found

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    index = i; // Update index if target is found
    break; // Exit loop once the target is found
  }
}

if (index !== -1) {
  console.log(`Element ${target} found at index ${index}`);
} else {
  console.log(`Element ${target} not found in the array`);
}
