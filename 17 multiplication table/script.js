let inputTable = Number(
  prompt("Enter the number for the multiplication table:")
);

for (let i = 1; i <= 10; i++) {
  console.log(`${inputTable} x ${i} = ${inputTable * i}`);
}
