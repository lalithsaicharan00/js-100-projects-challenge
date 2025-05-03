let principalAmount = prompt("Enter the principal amount");
principalAmount = Number(principalAmount);
let interestRate = prompt("Enter the interest rate");
interestRate = Number(interestRate);
let time = prompt("Enter the time in years");
time = Number(time);

let simpleInterest = (principalAmount * time * interestRate) / 100;

console.log("Interest : " + simpleInterest);
console.log("Total amount : " + (simpleInterest + principalAmount));
