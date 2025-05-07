let vowels = ["a", "e", "i", "o", "u"];

let inputString = "Hello World!";
let vowelCount = 0;

for (let i = 0; i < inputString.length; i++) {
  if (vowels.includes(inputString[i].toLowerCase())) {
    vowelCount++;
  }
}

console.log(`Number of vowels in "${inputString}": ${vowelCount}`);
