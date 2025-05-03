let radius = prompt("Enter the radius of circle");
radius = Number(radius);

let area = Math.PI * radius * radius;
let circumference = 2 * Math.PI * radius;

console.log(
  `The area of circle is ${area} and the circumference of circle is ${circumference}`
);
