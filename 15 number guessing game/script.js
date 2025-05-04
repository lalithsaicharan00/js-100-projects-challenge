const secretNumber = Math.floor(Math.random() * 100) + 1;
let userInput = prompt(
  "We have a number between 1 and 100. What's your guess?"
);

let guessedNumber = Number(userInput);

while (true) {
  userInput = prompt("try again! What's your guess?");

  // If they hit “Cancel”
  if (userInput === null) {
    alert("Game cancelled. Thanks for playing!");
    break;
  }

  // Convert to number
  guessedNumber = Number(userInput);

  // If conversion failed (e.g. they typed “foo”)
  if (Number.isNaN(guessedNumber)) {
    alert("Please enter a valid number.");
    continue;
  }

  if (guessedNumber < secretNumber) {
    alert("Too low—try again!");
  } else if (guessedNumber > secretNumber) {
    alert("Too high—try again!");
  } else {
    alert(`🎉 Congratulations! You guessed it: ${secretNumber}.`);
    break;
  }
}
