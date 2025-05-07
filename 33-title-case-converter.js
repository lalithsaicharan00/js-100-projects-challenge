let str = "the quick brown fox jumps over the lazy dog";
let words = str.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

let titleCasedStr = words.join(" ");
console.log(`Title cased string: ${titleCasedStr}`);
