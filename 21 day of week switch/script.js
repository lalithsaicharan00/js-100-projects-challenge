let number = Number(prompt("Enter a number between 1 and 7: "));

while (number > 7 || number < 1) {
  number = Number(
    prompt("Invalid number. Please enter a number between 1 and 7: ")
  );
}

switch (number) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid number. Please enter a number between 1 and 7.");
    break;
}
