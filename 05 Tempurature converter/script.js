let tempurature = prompt("Enter the tempurature");
let unit = prompt("Enter the unit F or C");

if (unit == "F") {
  let celsius = ((tempurature - 32) * 5) / 9;
  alert(
    "The result of " + tempurature + " Fahrenheit is " + celsius + " celsius"
  );
} else {
  let fahrenheit = tempurature * (9 / 5) + 32;
  alert(
    "The result of " + tempurature + " celsius is " + fahrenheit + " fahrenheit"
  );
}
