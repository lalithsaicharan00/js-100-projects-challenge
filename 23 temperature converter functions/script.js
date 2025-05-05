let temputure = Number(prompt("Enter the temperature:"));
let unit = prompt(
  "Enter the unit (C for Celsius, F for Fahrenheit):"
).toUpperCase();

convertTemperature(temputure, unit);

function convertTemperature(temp, unit) {
  let convertedTemp;
  if (unit === "C") {
    convertedTemp = (temp * 9) / 5 + 32;
    alert(`The result of ${temp} Celsius is ${convertedTemp} Fahrenheit`);
  } else if (unit === "F") {
    convertedTemp = ((temp - 32) * 5) / 9;
    alert(`The result of ${temp} Fahrenheit is ${convertedTemp} Celsius`);
  } else {
    alert("Invalid unit. Please enter C for Celsius or F for Fahrenheit.");
  }
}
