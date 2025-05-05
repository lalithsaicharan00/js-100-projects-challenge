let password = prompt("Enter your password:");

while (password.length < 6) {
  password = prompt(
    "Password must be at least 6 characters long, please try again:"
  );
}

alert("Password accepted!");
