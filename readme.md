# 100 JavaScript Projects Challenge

Welcome to my **100 JavaScript Projects** repository! 🎉 I’ve embarked on this journey to **master core (vanilla) JavaScript**, sharpen my problem-solving skills, and boost my confidence as a programmer.

---

## 📖 About This Challenge

Over **8 weeks**, I’ll complete **100 hands-on projects**—from simple console exercises to interactive web apps—covering **every fundamental JavaScript concept**, including:

- **Syntax, variables & data types**
- **Control flow** (conditionals, loops, functions)
- **Data structures** (arrays, strings, objects, Maps & Sets)
- **Modern ES6+ features** (arrow functions, spread/rest, classes, modules)
- **Asynchronous programming** (callbacks, Promises, `async/await`)
- **DOM manipulation & events**
- **Best practices** (modular code, strict mode, testing)
- **Capstone projects** that integrate everything learned

Each week builds on the last, with **12–13 projects/week** that grow in complexity. By the end, I’ll not only know how to write idiomatic JavaScript, but also have a portfolio of 100 mini-apps and utilities to demonstrate my skills.

---

## 🎯 Motivation

- **Deepen my JavaScript knowledge** beyond theory ✅
- **Gain confidence** by writing code every day ✅
- Build a **diverse project portfolio** for resumes & interviews ✅
- Develop **daily coding habit**

---

## This is the complete roadmap that i followed

# 8-Week JavaScript Mastery Roadmap (20 Hours/Week, 99% Core JS)

**Overview:** This intensive 8-week plan focuses strictly on **core JavaScript (vanilla JS)** – the language itself, without front-end frameworks or Node.js. Each week introduces new JavaScript concepts _in a logical sequence_, so every topic builds on prior knowledge. You will practice each concept with hands-on projects, totaling **100 projects**. The projects are distributed evenly (about 12–13 per week) and increase in difficulty gradually. Each project includes a clear problem statement, implementation guidance, and expected outcome (console output, web page behavior, etc.). By the end of Week 8, you will have covered essentially all fundamental JavaScript concepts and built a rich portfolio of small projects, giving you the confidence to call yourself a **professional in core JavaScript**.

> **Note:** Early weeks use the **browser console** (and simple `prompt/alert`) for I/O to focus on JS basics. Later weeks integrate HTML/DOM for interactive web projects. Ensure you have a modern browser and a code editor ready. It’s recommended to spend roughly **4 hours a day, 5 days a week** (20 hours weekly) on learning and coding.

## Week 1: JavaScript Foundations – Syntax, Variables & Data Types

**Focus:** Setting up your environment and learning the basics of JavaScript syntax. You’ll cover how to output messages, declare variables, work with primary data types (Number, String, Boolean, `null`, `undefined`), and perform simple operations. By the end of this week, you should understand how to get input (using `prompt`), display output (`console.log` or `alert`), and use variables to store data. We’ll also introduce simple decision-making with `if/else` toward the end of the week.

- **Topics Covered:** Introduction to JS execution (embedding `<script>` in HTML or using browser console), statements and comments, variables (`let`, `const` vs `var`), primitive data types (string, number, boolean, `null`, `undefined`), basic operators (arithmetic `+ - * / %`, string concatenation, assignment `=`), using `prompt()` and `alert()` for simple user interaction, and basic `if/else` conditions (using relational operators `> < >= <= == ===` and logical operators `&& || !`).

- **Goal:** Comfortably write simple scripts that compute values and make basic decisions.

#### Projects for Week 1 (Projects 1–12):

**Project 1: Hello World**

- _Problem:_ Create a simple program that prints “Hello, World!” to the console.
- _Implementation:_ Use `console.log("Hello, World!");` to output the message. This verifies your environment is set up correctly.
- _Expected Output:_ The text **Hello, World!** appears in the browser’s console.

**Project 2: Greeting Prompt**

- _Problem:_ Ask the user for their name, then greet them with a message.
- _Implementation:_ Use `prompt("What is your name?")` to get input, store it in a variable, then use `alert` or `console.log` to display `Hello, [Name]!`.
- _Expected Output:_ If the user enters “Alice”, the program displays **Hello, Alice!**.

**Project 3: Simple Addition**

- _Problem:_ Prompt the user for two numbers and display their sum.
- _Implementation:_ Use two `prompt` calls to get values (as strings), convert them to numbers (using `Number()` or unary `+`), then add and `alert` the result. Handle basic numeric input.
- _Expected Output:_ If inputs are `5` and `7`, the program outputs **12**.

**Project 4: Basic Calculator**

- _Problem:_ Extend addition to a simple calculator that can add, subtract, multiply, or divide two numbers based on user choice.
- _Implementation:_ Prompt for two numbers and an operator (`+ - * /`). Use `if/else` (or `switch`) to decide which operation to perform, then show the result with `alert`. (Prerequisite: understanding of `if/else` introduced late this week.)
- _Expected Output:_ If inputs are `8`, `3`, and `*`, the program outputs **24**. If an unsupported operator is entered, it can output an error message.

**Project 5: Temperature Converter**

- _Problem:_ Convert temperatures between Celsius and Fahrenheit.
- _Implementation:_ Prompt the user for a temperature in Celsius, convert it to Fahrenheit using the formula `F = C * 9/5 + 32`, and display the result (round if necessary). You can also allow the reverse (Fahrenheit to Celsius) as an added feature or separate prompt.
- _Expected Output:_ If the user enters `0` Celsius, the program outputs **32°F**. For `100` Celsius, output **212°F**.

**Project 6: Area of a Circle**

- _Problem:_ Calculate the area and circumference of a circle from its radius.
- _Implementation:_ Prompt for the circle’s radius as a number. Compute area = πr² and circumference = 2πr (use `Math.PI` for π). Use `console.log` to display both results in a readable format.
- _Expected Output:_ For radius `5`, output messages like **“Area: 78.54”** and **“Circumference: 31.42”** (approximately).

**Project 7: String Length and Case**

- _Problem:_ Take a string input (e.g., a word or phrase) and output its length, as well as an uppercase and lowercase version.
- _Implementation:_ Use `prompt` to get a string. Use the string’s `.length` property, and `toUpperCase()` / `toLowerCase()` methods to transform case. Log the results to console or alert them.
- _Expected Output:_ If input is “Hello”, output **Length: 5**, **Upper: HELLO**, **Lower: hello**.

**Project 8: Full Name Combiner**

- _Problem:_ Ask for a first name and last name separately, then display the full name.
- _Implementation:_ Prompt for first name and last name. Concatenate them with a space in between (`firstName + " " + lastName`). Ensure proper spacing.
- _Expected Output:_ If first name = “John” and last name = “Doe”, output **John Doe**.

**Project 9: Simple Interest Calculator**

- _Problem:_ Calculate simple interest on a principal over a given time and rate.
- _Implementation:_ Prompt for three values: principal amount, interest rate (as a percentage), and time (years). Compute simple interest = principal \* rate \* time. Output the interest and total amount (principal + interest).
- _Expected Output:_ For principal `1000`, rate `5%`, time `2` years, output **“Interest: 100; Total: 1100.”**

**Project 10: Even or Odd**

- _Problem:_ Determine if a given integer is even or odd.
- _Implementation:_ Prompt for a whole number. Convert to Number and use the modulus operator (`% 2`). If `number % 2` equals 0, it’s even; otherwise odd. Use an `if` statement to check and display the result.
- _Expected Output:_ If input is `11`, output **“11 is odd.”** If input is `24`, output **“24 is even.”**

**Project 11: Max of Two Numbers**

- _Problem:_ Compare two numbers and report which one is larger (or if they are equal).
- _Implementation:_ Prompt for two numeric inputs. Use an `if/else` chain to compare them (`>` operator). Handle the equal case as well. Display a message stating which is greater or if they’re the same.
- _Expected Output:_ For inputs `7` and `3`, output **“7 is greater than 3.”** For `4` and `4`, output **“Both numbers are equal.”**

**Project 12: Age Check**

- _Problem:_ Ask the user’s age and determine if they are an adult or minor (using 18 as the threshold).
- _Implementation:_ Prompt for age (as number). Use `if` to check `age >= 18`. If true, output that the user is an adult; otherwise, output that they are a minor.
- _Expected Output:_ If age input is `20`, output **“You are an adult.”** If `16`, output **“You are a minor.”**

> **Week 1 outcome:** You can declare and use variables of different types, perform calculations, and make simple decisions in code. You’ve built basic interactive console programs like calculators and converters, setting the stage for more complex logic next week.

## Week 2: Control Flow – Conditional Logic, Loops, and Functions

**Focus:** This week dives deeper into controlling program flow. You’ll master **conditional statements** (complex `if/else` logic and `switch` cases) and **loops** (`for`, `while`, etc.) for repetition. We’ll also introduce **functions** – reusable blocks of code – to organize logic. By the end of the week, you will write more complex scripts that use loops to handle repetitive tasks and wrap code in functions for reuse.

- **Topics Covered:** Advanced `if/else` patterns (nested conditions, multiple `else if` branches), the `switch` statement for multi-way branching, logical operators (`&&`, `||`, `!`) in conditions. Loops: `for` loops (with counters), `while` and `do...while` loops, using `break` and `continue`. Introduction to writing functions: function declaration vs. expression, passing parameters, returning values. Basic scope concept (local function scope vs global). Using functions to avoid repeating code.

- **Goal:** Be able to handle complex decision-making and repetition in code, and organize code into functions. Practice will include classic loop algorithms and basic function usage.

#### Projects for Week 2 (Projects 13–24):

**Project 13: Grading System**

- _Problem:_ Convert a numeric score into a letter grade.
- _Implementation:_ Prompt for a score (0–100). Use an `if/else if` ladder to assign grades: e.g., ≥90: A, ≥80: B, ≥70: C, ≥60: D, else F. Output the grade.
- _Expected Output:_ If input is `85`, output **“Grade: B”**.

**Project 14: FizzBuzz**

- _Problem:_ Classic FizzBuzz – print numbers 1 to N, but replace multiples of 3 with “Fizz”, multiples of 5 with “Buzz”, and multiples of 3 and 5 with “FizzBuzz”.
- _Implementation:_ Prompt for a positive integer N. Use a `for` loop from 1 to N. For each number, use `if/else` to check divisibility (`% 3` and `% 5`) and determine what to print. Use `console.log` for each result (or collect into a single string).
- _Expected Output:_ For N = 15, the console logs: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz (each on new lines or comma-separated).

**Project 15: Number Guessing Game**

- _Problem:_ Create an interactive guessing game where the program chooses a random number and the user tries to guess it.
- _Implementation:_ Use `Math.random()` to pick a random integer between 1 and 100. Then use a `while` loop to prompt the user to guess the number. After each guess, respond with “Too high”, “Too low”, or “Correct!” and loop until the guess is correct. (Use `if` inside the loop for comparisons.)
- _Expected Output:_ The game continues until the user guesses correctly. For example: **“Guess the number (1-100):”** user enters 50 -> **“Too high, try again:”** ... until **“Correct! The number was 42.”** (The exact sequence depends on user input.)

**Project 16: Factorial Calculator**

- _Problem:_ Compute the factorial of a given positive integer _n_ (i.e., n! = 1×2×...×n).
- _Implementation:_ Prompt for an integer n. Use a `for` loop to multiply numbers from 1 through n. You can use a running product variable initialized to 1. Alternatively, implement with a `while` loop. Output the result.
- _Expected Output:_ If n = 5, output **“5! = 120.”** If n = 1 or 0, output **“1”** (by definition, 0! = 1).

**Project 17: Multiplication Table**

- _Problem:_ Display the multiplication table for a given number.
- _Implementation:_ Prompt for an integer (e.g., 7). Use a loop (for or while) to iterate from 1 to, say, 10, and in each iteration output “7 x i = result”. (This can be done with `console.log` for each line.)
- _Expected Output:_ For input 7, the console shows:
  7 x 1 = 7
  7 x 2 = 14
  ... up to 7 x 10 = 70.

**Project 18: Sum of Even Numbers**

- _Problem:_ Calculate the sum of all even numbers up to a given limit N.
- _Implementation:_ Prompt for N. Use a `for` loop from 1 to N, use an `if` to check even (`% 2 === 0`), and accumulate the sum in a variable. Finally, display the sum.
- _Expected Output:_ If N = 10, even numbers are 2,4,6,8,10 and sum is **30**. If N = 7, sum of evens (2+4+6) is **12**.

**Project 19: Find Maximum (Loop)**

- _Problem:_ Ask the user to input a sequence of numbers and determine the largest number.
- _Implementation:_ Decide on how many numbers to compare (or use a sentinel value to end input). For simplicity, prompt the user for, say, 5 numbers (one by one). Use a loop to read each number and track the maximum in a variable. After the loop, output the max.
- _Expected Output:_ If user inputs 10, 22, 5, 17, 22, output **“The largest number is 22.”** (If equal largest values, it still reports 22.)

**Project 20: Input Validation Loop**

- _Problem:_ Keep prompting the user until they enter a valid value that meets a condition.
- _Implementation:_ For example, ask the user to enter a password that meets a simple condition (like at least 6 characters). Use a `while` loop: if input is invalid, inform the user and prompt again. Exit the loop when the condition is satisfied and confirm success.
- _Expected Output:_ If user enters “abc” -> **“Password too short, try again.”**; enters “abcdef” -> **“Password accepted.”** (The exact messages can vary.)

**Project 21: Day of Week Switch**

- _Problem:_ Map a number (1–7) to a day of the week (Monday–Sunday).
- _Implementation:_ Prompt for a number 1-7. Use a `switch` statement to choose the corresponding day name. Handle default for invalid numbers. Output the day name.
- _Expected Output:_ Input `3` -> **“Wednesday”**; input `7` -> **“Sunday”**; input `0` -> **“Invalid day number.”**

**Project 22: Simple Function – Square a Number**

- _Problem:_ Write a reusable function to square a number, and use it in a program.
- _Implementation:_ Define a function `square(x)` that returns `x*x`. Prompt the user for a number, call the `square` function with that input, and display the result. This tests creating and invoking a function with a return value.
- _Expected Output:_ If input is `4`, the program outputs **16** (since 4² = 16).

**Project 23: Temperature Converter Function**

- _Problem:_ Refactor the earlier temperature converter (Project 5) into functions for cleaner reuse.
- _Implementation:_ Create two functions: `celsiusToFahrenheit(c)` and `fahrenheitToCelsius(f)`, each returning the converted value. Prompt the user to choose a conversion direction and enter a temperature. Use the appropriate function to compute the result and display it.
- _Expected Output:_ Input “C to F” and `100` -> **“212°F”**. Input “F to C” and `32` -> **“0°C”**.

**Project 24: Prime Number Checker**

- _Problem:_ Determine whether a given number is prime (only divisible by 1 and itself).
- _Implementation:_ Prompt for a positive integer. Write a function `isPrime(n)` that returns true if n is prime, false otherwise. Use a loop in the function to check divisibility from 2 up to √n (or up to n-1 for simplicity). Then in the main code, call `isPrime` and display an appropriate message.
- _Expected Output:_ If input is `29`, output **“29 is a prime number.”** If input is `30`, output **“30 is not prime (divisible by 2, 3, etc.).”**

> **Week 2 outcome:** You can implement more complex logic flows. You’ve used loops to handle repetition (e.g., generating tables, summing sequences) and `if/else` for multi-branch decisions. You’ve started organizing code into functions. These skills are the basis for writing any algorithm. Next week, we’ll introduce structured data (arrays & strings) to manage collections of values.

## Week 3: Data Structures – Arrays and Strings in Depth

**Focus:** Now that you can use loops and functions, it’s time to handle collections of data. This week introduces **Arrays** (ordered lists of values) and deeper work with **Strings** (sequences of characters). You’ll learn how to create and manipulate arrays, common array methods, and iterate through arrays. We’ll also explore useful string operations (slicing, searching, etc.). By the end of the week, you will manage lists of data and perform operations like searching, sorting basics, and simple data transformations.

- **Topics Covered:** Creating arrays (`[]` literal syntax), accessing elements by index, array properties (`length`) and basic methods (`push`, `pop`, `shift`, `unshift` for adding/removing, `indexOf`, etc.). Iterating over arrays with loops (`for` and the newer `for...of`). Multi-dimensional arrays (basic mention) for context. Strings: review that strings are array-like sequences of characters; string methods (`charAt`, `slice()/substring()`, `includes`, `indexOf`, `toUpperCase`/`toLowerCase`, etc.). Discuss immutability of strings vs mutability of arrays. Also cover **type conversion** between strings and numbers, and using `split` and `join` to convert between strings and arrays. Introduce the concept of **reference vs value** (arrays being reference types). If time permits, introduce the Date object (`new Date()`) as an example of a built-in object, and perhaps the basics of the Math object (though Math was touched on in Week 1 with `Math.PI` and `Math.random`).

- **Goal:** Be proficient in storing and manipulating collections of data using arrays, and comfortable working with text using string operations. Practice tasks will include searching and aggregating array data, and simple text algorithms (like checking palindromes, counting characters).

#### Projects for Week 3 (Projects 25–37):

**Project 25: Array Element Sum**

- _Problem:_ Calculate the sum of all elements in an array of numbers.
- _Implementation:_ Define an array with several number values (you can hard-code it in the script or prompt the user to input a sequence, e.g., comma-separated and then split into an array). Use a `for` loop (or `for...of`) to traverse the array and accumulate the sum. Output the total.
- _Expected Output:_ For array `[2, 5, 8]`, output **“Sum = 15.”** For an empty array, output **“Sum = 0.”**

**Project 26: Array Max and Min**

- _Problem:_ Find the largest and smallest number in an array.
- _Implementation:_ Use a predefined array of numbers (or prompt user to enter numbers and construct the array). Iterate through the array, tracking a `max` and `min` value. Alternatively, use `Math.max(...array)` and `Math.min(...array)` as a shortcut (after learning the spread operator in a later week, but here do it manually to practice loops). Output the min and max values.
- _Expected Output:_ For `[3, 17, 9, 4]`, output **“Min = 3, Max = 17.”** If array has one element or all equal, min and max will be the same.

**Project 27: Reverse an Array**

- _Problem:_ Create a new array that is the reverse of a given array.
- _Implementation:_ Take an initial array (e.g., `let arr = [1,2,3,4]`). Create an empty array `reversed`. Loop through the original array from the end to the beginning (`for (let i = arr.length-1; i >= 0; i--)`), and `push` each element into `reversed`. Output the reversed array.
- _Expected Output:_ Original `[1,2,3,4]` -> Reversed array **\[4,3,2,1]**. If original is `[5, 10]` -> **\[10, 5]**.

**Project 28: Remove Array Duplicates**

- _Problem:_ Remove duplicate values from an array, leaving only unique values.
- _Implementation:_ Prompt the user for a series of numbers or strings (or define an array with duplicates, e.g., `[1,2,2,3,1]`). Use a new array `unique` and loop through the original; for each item, check if it’s _not_ already in `unique` (you can use `unique.indexOf(item)` or `includes`). If not present, push it. Output the `unique` array.
- _Expected Output:_ For `[1,2,2,3,1]` -> **\[1, 2, 3]**. The order of first occurrences is preserved. For `["a","b","a","c"]` -> **\["a","b","c"]**.

**Project 29: Search in Array**

- _Problem:_ Check if a certain value exists in an array (linear search).
- _Implementation:_ Prompt for a search term (number or string) and have a predefined array to search. Use a loop or the `indexOf` method to determine if the value is in the array. Output an appropriate message (found at index X, or not found).
- _Expected Output:_ Searching for `7` in `[3,7,8]` -> **“7 found at index 1.”** Searching for `"cat"` in `["dog","bird","cat"]` -> **“cat found at index 2.”** If not found: **“Value not in array.”**

**Project 30: Vowel Counter**

- _Problem:_ Count the number of vowels in a given string.
- _Implementation:_ Prompt for a string (e.g., a sentence). Define an array or string of vowels `['a','e','i','o','u']`. Convert input string to lower case for simplicity. Loop through each character of the string (using a `for` or `for...of` loop over the string, or convert to array with `split('')`). Check if the character is in the vowels list (`includes`). If yes, increment a counter. At the end, output the vowel count.
- _Expected Output:_ Input “Hello World” -> **3 vowels** (`e`, `o`, `o`). Input “XYZ” -> **0 vowels**.

**Project 31: Palindrome Checker (String)**

- _Problem:_ Determine if a given word or phrase is a palindrome (reads the same backward and forward, ignoring case and spaces).
- _Implementation:_ Prompt for a string. Normalize it by removing spaces and converting to one case (e.g., `let normalized = input.toLowerCase().replace(/\\s+/g, "")`). Then create a reversed version of `normalized` (you can use `split('')`, `reverse()`, `join('')` chain on the string). Compare the normalized string with its reverse. Output whether it’s a palindrome.
- _Expected Output:_ Input “level” -> **“‘level’ is a palindrome.”**; Input “Hello” -> **“‘Hello’ is not a palindrome.”**; Input “A man a plan a canal Panama” -> **“...is a palindrome.”** (ignoring spaces/case).

**Project 32: Word Counter**

- _Problem:_ Count the number of words in a given sentence.
- _Implementation:_ Prompt for a sentence. Use `string.split(" ")` to split by spaces into an array of words (simple method, won’t account for punctuation perfectly but good for this exercise). The number of words is then the length of that array (filter out any empty strings if the input had extra spaces). Output the word count.
- _Expected Output:_ Input “JavaScript is fun” -> **3 words**. Input “ Hello world ” (with extra spaces) -> **2 words**.

**Project 33: Title Case Converter**

- _Problem:_ Capitalize the first letter of each word in a given phrase (title case).
- _Implementation:_ Prompt for a phrase. Split it into an array of words by space. Loop through the array and for each word, take the first character and make it uppercase (`word.charAt(0).toUpperCase()`) and concatenate with the rest of the word in lowercase (`word.slice(1).toLowerCase()`). You can also use `substring`. Collect the transformed words and join them back with spaces. Output the title-cased phrase.
- _Expected Output:_ Input “the QUICK broWN foX” -> **“The Quick Brown Fox”**.

**Project 34: Array Merge**

- _Problem:_ Combine two arrays into one.
- _Implementation:_ Prompt (or define) two arrays, e.g., `arr1 = [1,3,5]` and `arr2 = [2,4,6]`. Merge them by creating a new array that starts as a copy of the first (you can use `slice()` or spread syntax in later weeks, but here simply loop `push` each element of arr2 into arr1 copy). Alternatively, use `concat`: `let merged = arr1.concat(arr2)`. Output the merged array.
- _Expected Output:_ `[1,3,5]` + `[2,4,6]` -> **\[1,3,5,2,4,6]**. (Order can be arr1 followed by arr2.)

**Project 35: Sorting an Array**

- _Problem:_ Sort an array of numbers in ascending order (using a built-in method for now).
- _Implementation:_ Define an array of unsorted numbers, e.g., `[5, 2, 8, 1]`. Use the array’s `.sort()` method. (Be cautious: by default, `.sort()` converts numbers to strings; for correct numeric sort you’d pass a compare function. At this stage, you can simply use `.sort((a,b) => a - b)` or note the quirk if not using a compare function.) Output the sorted array.
- _Expected Output:_ `[5,2,8,1]` -> after sort -> **\[1,2,5,8]**. For strings, e.g., `["banana","apple","cherry"]` -> **\["apple","banana","cherry"]**.

**Project 36: Date Display**

- _Problem:_ Show the current date and time in a readable format.
- _Implementation:_ Use JavaScript’s `Date` object. Create a new date with `let now = new Date()`. Extract components like year (`now.getFullYear()`), month (`now.getMonth()` – note: 0-indexed so you may add 1), day (`getDate()`), hours, minutes, etc. Format them into a string, such as “YYYY-MM-DD HH\:MM\:SS” or a long-form date. Output using `console.log` or alert.
- _Expected Output:_ If today is March 5, 2025 and time 14:07, it might output **“2025-03-05 14:07:00”** or **“March 5, 2025, 2:07 PM”** depending on formatting chosen.

**Project 37: Random Quote Generator (Array)**

- _Problem:_ Display a random quote from a predefined list each time the program runs (or each time user prompts).
- _Implementation:_ Define an array of quote strings (at least a few). Use `Math.random()` and `Math.floor()` to pick a random index (`const i = Math.floor(Math.random() * quotes.length)`). Retrieve `quotes[i]` and display it (console or alert).
- _Expected Output:_ Each run shows one quote, e.g.: **“The only way to learn a new programming language is by writing programs in it.”** If run again, a different quote from the list appears.

> **Week 3 outcome:** You can manage collections of data using arrays and perform common operations like summing, searching, filtering duplicates, etc. You’ve practiced manipulating strings extensively – important for processing text input and output. By now, tasks like reversing a string or counting characters should be straightforward. Next week, we’ll introduce more complex data structures (objects) and dive into how JavaScript organizes data and behavior together.

## Week 4: Objects and Advanced Data Types (Object-Oriented JS Basics)

**Focus:** This week you will learn about **Objects** – the cornerstone of JavaScript’s data structures – which allow storing data in key–value pairs. You’ll see how objects group related data (and even functions) together. We also cover **Maps and Sets** (ES6 structures for unique values or key-value pairs with special properties) for completeness. Additionally, you’ll explore the concept of **prototypes** and how JavaScript inheritance works, and get introduced to **ES6 Classes** as a more familiar syntax for creating objects with methods. By the end of the week, you will be comfortable creating and using objects, and have a basic grasp of object-oriented programming in JavaScript.

- **Topics Covered:** Object literals – defining an object with `{}` containing properties (keys and associated values). Accessing and modifying properties (dot notation and bracket notation). Adding and deleting properties. Looping through objects (`for...in` loop). **Methods** in objects – assigning functions as property values, and using the `this` keyword to refer to the object’s own data. Discuss how objects are references (modifying one reference affects others pointing to the same object). Introduction to built-in objects: the `Math` object (with methods like `Math.floor`, etc.), `Date` (already touched on), and JSON (as a format for objects). Introduction to **Map** (keys of any type, ordered) and **Set** (unique values) and when to use them vs plain objects/arrays. Explain **prototype-based inheritance**: every object has a prototype, use of `Object.getPrototypeOf`, and how methods like `.toString()` come from `Object.prototype`. Then introduce **ES6 Classes** as a way to create multiple similar objects: defining a class with constructor and methods, instantiating objects with `new`. Also show class inheritance (`extends` keyword) to create subclasses. Emphasize that under the hood, classes use prototypes. If time, mention **hoisting** differences for `var` vs `let/const`, and the `this` context nuance (but `this` will be covered in objects and again in advanced function week). Cover **Error handling basics** (constructing an `Error` object, though `try/catch` will be in Week 6).

- **Goal:** Gain the ability to model more complex data using objects and to understand the basics of OOP in JavaScript. You’ll practice creating objects and classes to represent things like a user profile, a product, etc., and using methods to operate on object data. You’ll also use a Set to eliminate duplicates (contrasting with the manual method earlier) and a Map for key-value data. By the end, you should recognize how JavaScript’s prototypal inheritance works at a high level and be able to use classes to structure code.

#### Projects for Week 4 (Projects 38–50):

**Project 38: Person Object**

- _Problem:_ Create an object to represent a person with certain properties and a method.
- _Implementation:_ Define an object literal `person` with properties like `name` (string), `age` (number), and `city` (string). Add a method `introduce()` that uses `this.name` and `this.city` to return a greeting like “Hi, I’m \[Name] from \[City].” Use `console.log(person.introduce())` to test the method. Also demonstrate accessing a property (e.g., `person.age`).
- _Expected Output:_ If `name="Alice", city="Paris"`, the method call outputs **“Hi, I’m Alice from Paris.”** Logging `person.age` might show **the age** (say, 30 if set).

**Project 39: Contact List (Array of Objects)**

- _Problem:_ Manage a simple contact list using an array of objects, and search within it.
- _Implementation:_ Create an array `contacts` that contains multiple objects, each with properties `name` and `phone` (and maybe `email`). For example: `{ name: "Bob", phone: "123-4567" }`, etc. Write a function `findContactByName(name)` that loops through the array and returns the contact object (or its phone) matching the given name (using `contact.name` comparison). Test the function by prompting for a name and displaying the result.
- _Expected Output:_ If contacts include _Bob_ and user searches “Bob”, output **“Bob: 123-4567”**. If not found, output **“Contact not found.”**.

**Project 40: Character Frequency Counter**

- _Problem:_ Count the frequency of each character in a string using an object.
- _Implementation:_ Prompt for a string. Create an empty object `freq = {}`. Loop over each character of the string (after perhaps lowercasing it). For each char, if it’s already a key in `freq`, increment `freq[char]`; if not, set `freq[char] = 1`. (Skip spaces if you like.) After building the frequency object, loop through `freq` keys (using `for...in`) and log the counts.
- _Expected Output:_ Input “hello” -> freq object would be `{h:1, e:1, l:2, o:1}`. The program might output lines: **“h:1, e:1, l:2, o:1”.** Input “Mississippi” -> output **“M:1, i:4, s:4, p:2”.**

**Project 41: Shopping Cart Total (Array of Objects)**

- _Problem:_ Compute the total price of items in a shopping cart array.
- _Implementation:_ Create an array `cart` of objects, where each object represents an item with properties: `name`, `price`, and `quantity`. Example: `{ name: "Apple", price: 0.5, quantity: 4 }`. Write a loop to iterate over `cart` and calculate a running total = sum of `item.price * item.quantity` for each item. Output the total cost.
- _Expected Output:_ If cart has Apple (\$0.5 ×4 = \$2) and Bread (\$2 ×1 = \$2) and Milk (\$1.5 ×2 = \$3), total = **\$7.00**. Output **“Total: \$7.00”** (formatted to two decimals if possible).

**Project 42: Rectangle Object with Method**

- _Problem:_ Model a geometric rectangle with properties and methods to compute area and perimeter.
- _Implementation:_ Create an object `rectangle` with properties `width` and `height`. Add two methods: `area()` that returns width*height, and `perimeter()` that returns 2*(width+height). Use `this.width` etc. to access properties. Test by setting some dimensions and calling the methods, logging the results.
- _Expected Output:_ If `rectangle.width = 5` and `height = 3`, `rectangle.area()` returns **15**, and `rectangle.perimeter()` returns **16**. You can log **“Area: 15, Perimeter: 16.”**

**Project 43: ES6 Class – Circle**

- _Problem:_ Create a class to represent a circle and compute its area and circumference.
- _Implementation:_ Use the `class` syntax to define a class `Circle`. It should have a constructor that takes a `radius` property. Add two methods: `area()` returns πr² (use `Math.PI`), and `circumference()` returns 2πr. Instantiate a couple of Circle objects with different radii to test (e.g., `new Circle(1.5)`). Log their area and circumference.
- _Expected Output:_ For a circle of radius 3, `area()` \~ **28.27**, `circumference()` \~ **18.85**. For radius 1.5, area \~ **7.07**, circumference \~ **9.42**.

**Project 44: Class Inheritance – Person/Student**

- _Problem:_ Use class inheritance to extend a base class with a subclass.
- _Implementation:_ Define a class `Person` with constructor(name, age) and a method `describe()` that returns “Name is \[name], age \[age]”. Define a subclass `Student` that extends `Person`, adding a property like `grade` or `school`. Give `Student` its own method, e.g., `study()` that returns “\[name] is studying.” Use `super(name, age)` in the constructor to initialize inherited properties. Create a Student instance and call both the inherited `describe()` and its own `study()` method.
- _Expected Output:_ For `let s = new Student("Jake", 20, "Senior")`, `s.describe()` -> **“Name is Jake, age 20.”**; `s.study()` -> **“Jake is studying.”** (If `grade` was provided, you can include that in describe or a separate method.)

**Project 45: Using a Map for a Phone Book**

- _Problem:_ Implement a simple phone book using a Map to store name–number pairs.
- _Implementation:_ Create a `Map` called `phoneBook`. Use `phoneBook.set(name, number)` to add a few entries. Then prompt the user for a name and use `phoneBook.get(name)` to retrieve the number. If the name isn’t found (`get` returns undefined), output an appropriate message. Also demonstrate iterating over the Map with `phoneBook.forEach` or `for...of` to list all entries.
- _Expected Output:_ If the map contains (“Alice” -> “111-1111”, “Bob” -> “222-2222”) and user searches “Bob”, output **“Bob’s number: 222-2222.”** If search “Charlie”, output **“Charlie is not in the phone book.”** Also, listing all might output **“Alice: 111-1111; Bob: 222-2222.”**

**Project 46: Using a Set for Unique Values**

- _Problem:_ Take a list of values and easily filter out duplicates using a Set.
- _Implementation:_ Prompt the user for a series of numbers or strings separated by commas (e.g., “a,b,c,a”). Split the input into an array. Create a `Set` from the array (`new Set(array)`). Convert the Set back to an array using the spread operator or `Array.from` (we will cover spread in Week 5, but you can mention using it here if previewing). Output the resulting array of unique values.
- _Expected Output:_ Input “5,3,5,1” -> unique set contains {5,3,1}, output array **\[5,3,1]** (order may vary because Set preserves insertion order: would be 5,3,1 in this case). Input “red,blue,red,green” -> **\[“red”, “blue”, “green”]**.

**Project 47: Student Grades (Array of Objects & Methods)**

- _Problem:_ Assign letter grades to an array of student objects based on their scores.
- _Implementation:_ Create an array `students` of objects, each with `name` and `score` properties (score 0–100). Write a function `assignGrades(students)` that iterates through the array and adds a new property `grade` to each student object based on their score (use the grading logic from Project 13). Alternatively, return a new array of objects with name, score, and grade. After grading, loop through students to print a report of each name and their grade.
- _Expected Output:_ For `[{name:"Ann", score:92}, {name:"Ben", score:75}]`, after assignment: Ann gets grade **“A”**, Ben gets **“C”** (assuming 70–79 is C). The program might log **“Ann – Score: 92, Grade: A”** and **“Ben – Score: 75, Grade: C”**.

**Project 48: Bank Account Object**

- _Problem:_ Simulate a simple bank account with deposit and withdrawal methods.
- _Implementation:_ Create an object `account` with property `balance` (starting at, say, 0). Add methods `deposit(amount)` and `withdraw(amount)`. The deposit method should add to `balance`. The withdraw method should subtract if there are sufficient funds (if `amount > balance`, maybe print an insufficient funds warning and do nothing). Both methods can return the new balance or a confirmation message. Test the object by performing a sequence of deposits and withdrawals.
- _Expected Output:_ Starting balance 0. After `account.deposit(100)`, balance = **100**. After `account.withdraw(30)`, balance = **70**. If `account.withdraw(1000)`, output **“Insufficient funds”** and balance stays **70**. Logging the balance after each operation shows the correct values.

**Project 49: To-Do List (Console-based)**

- _Problem:_ Create a simple text-based to-do list manager that allows adding and removing tasks.
- _Implementation:_ Use an array `todos` to store task strings. Implement a loop that repeatedly asks the user for a command: e.g., “ADD” to add a new task (then prompt for the task description and push into array), “LIST” to list all tasks (with their index numbers), “REMOVE” to delete a task (prompt for index or task name, then use `splice` to remove it), and “QUIT” to exit the loop. (Use a `while(true)` that breaks on “QUIT”).
- _Expected Output:_ The program might prompt:
  **“Enter command (ADD, LIST, REMOVE, QUIT):”**
  If user enters ADD, then it asks **“Enter new task:”**, user inputs “Buy groceries”, program confirms **“‘Buy groceries’ added.”**
  If user enters LIST, it shows **“0: Buy groceries”** (and other tasks with indices).
  If REMOVE, asks **“Enter index to remove:”**, removes that task and confirms **“Task 0 removed.”**
  QUIT ends the loop with a message **“Goodbye!”**.
  _(This project ties together arrays, loops, and basic I/O; it’s an extended console app.)_

**Project 50: JSON Serialization**

- _Problem:_ Convert a JavaScript object to a JSON string and back (to simulate data storage or transfer).
- _Implementation:_ Take an object (for example, the `person` from Project 38 or `students` array from Project 47). Use `JSON.stringify(object)` to turn it into a JSON string. Log the JSON string. Then use `JSON.parse(string)` to turn it back into an object, and verify by logging one of its properties or the whole object. This demonstrates understanding of object serialization.
- _Expected Output:_ If `person = {name:"Alice", age:25}`, `JSON.stringify(person)` might produce **'{"name":"Alice","age":25}'** (a string). After parsing back, accessing the `name` property yields **“Alice”** again as a normal object.

> **Week 4 outcome:** You now understand how to structure data using objects and even classes. You’ve created objects to model real-world entities (people, accounts, etc.) and practiced adding methods that use `this`. You saw how multiple objects can be managed in arrays (e.g., a contact list). You also got a taste of more advanced structures like Map and Set, as well as converting objects to JSON for storage. At this stage, you have a solid grasp of both procedural and basic object-oriented programming in JavaScript. The next step is to tackle more advanced function concepts and asynchronous programming, which we’ll begin in Week 5.

## Week 5: Advanced Functions and Modern JavaScript Features (ES6+)

**Focus:** This week deepens your understanding of functions and modern ES6+ features that improve JavaScript coding. Key concepts include **higher-order functions** (functions that take or return other functions), **closures** (functions remembering the environment in which they were created), and the behavior of `this` in different contexts. We will introduce **arrow functions (=>)** and how they differ from regular functions (especially with `this`). You’ll also learn about the spread (`...`) and rest (`...`) operators for more flexible function parameters and array/object manipulation, and default function parameters. Additionally, we cover handy array methods that use callbacks: `.forEach`, `.map`, `.filter`, `.reduce`, and how to use them to process arrays in a functional style. By the end of the week, you should be comfortable with writing clean, modern JS functions and using functional programming techniques for array operations.

- **Topics Covered:**

  - **Closures:** Understanding that an inner function retains access to variables of outer functions even after the outer function has returned. Use cases of closure (like function factories or private variables).
  - **Higher-Order Functions:** Passing functions as arguments (e.g., the callback in `setTimeout` or array methods), returning functions from functions.
  - **Arrow Functions:** Shorter syntax, implicit `return` for one-liners, and crucially, lexical `this` binding (unlike normal functions, arrow `this` is inherited from the surrounding scope).
  - **`this` context:** Review how `this` refers to the caller of a function, and contrast how arrow functions do not have their own `this`. (For example, mention a case with `setTimeout` inside an object method and how `this` behaves, although full grasp may come with practice.)
  - **call/apply/bind:** Introduce how to manually set `this` of a function using `func.call(obj, arg1, arg2)` or `func.apply(obj, [args])`, and `bind` to permanently tie `this` to a function. (This is advanced but good to know professionally. A small project will demonstrate function borrowing.)
  - **Default Parameters:** e.g., `function greet(name = "Guest") {...}`.
  - **Rest Operator:** Using `...` in a function parameter to gather all remaining arguments into an array.
  - **Spread Operator:** Using `...` to spread elements of an array (or object properties) into another array or object. (E.g., merging arrays, copying arrays/objects).
  - **Array functional methods:** `.forEach` (iterate), `.map` (transform array into new array), `.filter` (filter array elements), `.reduce` (accumulate into a single value). These methods take callback functions – practice defining those (as function or arrow).
  - Possibly mention **destructuring** (though could be in Week 3 or here): extracting values from arrays or properties from objects into variables easily (`const [a,b] = array; const {name, age} = person;`).
  - If not yet, cover **template literals** (`` `Hello, ${name}!` ``) as a modern string syntax (could mention in passing as we’ve mostly used string concatenation until now).
  - Brief mention of other ES6+ features like **Symbols** (a unique primitive for object keys) – we will do a small example in a project to cover 99% core features.

- **Goal:** Write more concise and powerful code with modern syntax. Understand how to use functions in advanced ways (as first-class citizens), and use new ES6 features to avoid common pitfalls (like `this` confusion or needing to manually slice arguments). By the end, you will be adept at using array methods to manipulate data without explicit loops, and understand how closures enable patterns like private state or function generation.

#### Projects for Week 5 (Projects 51–62):

**Project 51: Counter Closure**

- _Problem:_ Create a function that generates a counter – each call to the inner function increments a private count.
- _Implementation:_ Write a function `createCounter()` that uses a closure. Inside, have a variable `count = 0`. Return an inner function `function()` that does `count++` and `return count`. Because of closure, `count` persists across calls. Use it like: `const counter1 = createCounter();` Then call `counter1()` multiple times and log the result to see it increasing. Create a second counter to verify it has its own independent count.
- _Expected Output:_ Calling `counter1()` successively might output **1, 2, 3...** on each call. A fresh `counter2()` starts at **1** independently. This demonstrates two independent counters using the closure.

**Project 52: Adder Factory**

- _Problem:_ Use a function that returns another function (closure) to create “adder” functions for specific values.
- _Implementation:_ Write `function makeAdder(x)` that returns a new function `function(y) { return x + y; }`. This inner function remembers `x` from its creation. Use `makeAdder` to create functions like `add5 = makeAdder(5)` and `add10 = makeAdder(10)`. Then call `add5(3)` which should give 8, and `add10(3)` gives 13.
- _Expected Output:_ If `add5 = makeAdder(5)`, then `add5(2)` -> **7**, `add5(10)` -> **15**. `add10(2)` -> **12**. This shows how the returned functions have captured `x` in their closure.

**Project 53: Recursive Factorial**

- _Problem:_ Calculate factorial of a number using recursion (a function calling itself).
- _Implementation:_ Define a function `fact(n)` that calls itself: if n <= 1, return 1 (base case); else return `n * fact(n-1)`. Prompt user for a number and call `fact` on it. (Make sure to convert the input to Number.)
- _Expected Output:_ Input `5` -> **120** (since 5! = 5*4*3*2*1). Input `0` or `1` -> **1**. This demonstrates recursion and that the result matches the iterative approach from Project 16.

**Project 54: Array Map with Arrow**

- _Problem:_ Square each number in an array using the Array.map method and arrow functions.
- _Implementation:_ Take an array of numbers, e.g., `[1, 2, 3, 4]`. Use `const squares = arr.map(num => num * num);` (an arrow function callback) to produce a new array of squared numbers. Log the original and new array.
- _Expected Output:_ Original **\[1,2,3,4]**, Squared **\[1,4,9,16]**. If the original has negatives, they’ll still square accordingly (e.g., `[-2,3]` -> `[4,9]`). Arrow function makes the code concise.

**Project 55: Filter Evens**

- _Problem:_ Use Array.filter to extract only even numbers from an array.
- _Implementation:_ Define an array of integers (mixed even and odd). Use `const evens = arr.filter(n => n % 2 === 0);`. The arrow function returns true for even numbers, so filter will keep those. Log the filtered result.
- _Expected Output:_ From `[5,6,7,8,9]` you get **\[6,8]**. From `[1,3,5]` you get **\[]** (empty array, if no evens).

**Project 56: Sum with Reduce**

- _Problem:_ Compute the sum of an array of numbers using Array.reduce.
- _Implementation:_ Use an array of numbers. Apply `const total = arr.reduce((accumulator, current) => accumulator + current, 0);`. This uses an arrow for the reducer function and starts `accumulator` at 0. Print the resulting total. (Compare with the manual loop from Project 25 to appreciate brevity.)
- _Expected Output:_ For `[2,4,6]`, result **12**. For an empty array, ensure it returns **0** (due to initial 0 argument).

**Project 57: Function Borrowing with call**

- _Problem:_ Use `call` to borrow a method from one object to use on another object.
- _Implementation:_ Define an object `alice` with a method `sayHello()` that returns something like “Hello, I’m Alice”. Define another object `bob` with a `name` property but no `sayHello`. Use `alice.sayHello.call(bob)` to invoke Alice’s method with Bob’s context. Alternatively, define a standalone function `greet` that uses `this.name`, and use `.call` to run it with different `this`.
- _Expected Output:_ If `alice.sayHello()` normally gives **“Hello, I’m Alice.”**, then using `alice.sayHello.call(bob)` should output **“Hello, I’m Bob.”** even though Bob didn’t have that method, by borrowing Alice’s. This demonstrates manually setting `this`.

**Project 58: Bound Function Example**

- _Problem:_ Use `bind` to create a function with preset `this` or arguments.
- _Implementation:_ Create an object `driver` with a name. Write a standalone function `drive(car)` that returns “<driver name> drives a <car>”. Use `bind` to create a new function `driveForAlice = drive.bind({ name: "Alice" })`. Then call `driveForAlice("Toyota")`. Also create another bound function for a different driver.
- _Expected Output:_ The bound function uses the provided object as `this`, so calling `driveForAlice("Toyota")` outputs **“Alice drives a Toyota.”**. If `driveForBob = drive.bind({name:"Bob"})`, then `driveForBob("Honda")` -> **“Bob drives a Honda.”**. This shows how bind can fix `this` to a specific value.

**Project 59: Default Parameters**

- _Problem:_ Demonstrate a function with default parameter values.
- _Implementation:_ Write a function `greet(name = "Guest", greeting = "Hello")` that returns “<greeting>, <name>!”. Call it in various ways: with both arguments, with one argument, with none. Print the results.
- _Expected Output:_ `greet("Sam","Hi")` -> **“Hi, Sam!”**; `greet("Sam")` -> **“Hello, Sam!”** (uses default greeting); `greet()` -> **“Hello, Guest!”** (uses both defaults). This confirms that defaults work when arguments are missing or undefined.

**Project 60: Rest Parameters – Sum All**

- _Problem:_ Create a function that accepts any number of numerical arguments and returns their sum.
- _Implementation:_ Use the rest operator: `function sumAll(...numbers) { /* numbers is an array */ }`. Inside, use `reduce` or a loop to sum up `numbers`. Test the function with different counts of arguments: e.g., `sumAll(1,2,3)`, `sumAll(10, -5, 15, 5)`.
- _Expected Output:_ `sumAll(1,2,3)` -> **6**; `sumAll(10,-5,15,5)` -> **25**. `sumAll()` with no args -> **0**. This shows how `...numbers` captures all provided arguments.

**Project 61: Spread Operator – Array Cloning and Merging**

- _Problem:_ Use spread syntax to clone an array and merge two arrays.
- _Implementation:_ Define an array `arr1 = [1,2,3]`. Clone it: `let arr2 = [...arr1];` then modify arr2 (e.g., push a new element) and show that arr1 is unaffected (proving it’s a true clone, not a reference copy). Also merge: `let arr3 = [...arr1, ...[4,5,6]];`. Output all arrays to verify values.
- _Expected Output:_ Initially arr1 **\[1,2,3]**. Cloned arr2 (before modification) **\[1,2,3]**. After `arr2.push(4)`, arr2 **\[1,2,3,4]**, arr1 still **\[1,2,3]**. Merged arr3 becomes **\[1,2,3,4,5,6]**. This exhibits how spread simplifies these tasks.

**Project 62: Spread Operator – Object Merge**

- _Problem:_ Use spread to merge two objects (e.g., for updating state).
- _Implementation:_ Create two objects, for example: `let person = { name: "Carol", age: 30 };` and `let job = { title: "Developer", company: "Tech Co." };`. Merge them: `let employee = { ...person, ...job };`. Also try overriding a property: e.g., `let updatedPerson = { ...person, age: 31 };` to update age. Output the merged objects.
- _Expected Output:_ Merged `employee` object should have **{ name: "Carol", age: 30, title: "Developer", company: "Tech Co." }**. The order of spreading matters if keys overlap. In `updatedPerson`, age becomes **31** while other properties remain (name "Carol"). This illustrates merging and updating objects immutably.

> **Week 5 outcome:** You’ve mastered advanced function patterns and modern syntax. You can write concise arrow functions and understand how their `this` works. You’ve seen closure in action enabling powerful patterns like generating specialized functions (e.g., adders, counters). You can use array methods (`map`, `filter`, etc.) to process data efficiently without manual loops, making your code cleaner. Spread and rest operators now allow you to easily manipulate arrays and objects (like copying and merging) and handle variable argument functions. All these skills contribute to writing more maintainable and modern JavaScript code. Next, we move into one of the most important aspects of JavaScript: asynchronous programming and dealing with the browser environment.

## Week 6: Asynchronous JavaScript – Timers, Callbacks, Promises, and Error Handling

**Focus:** This week addresses how JavaScript handles tasks over time and external operations – known as **asynchronous programming**. You’ll learn to use **timers** (`setTimeout` and `setInterval`) to schedule code, understand the **event loop** conceptually (how JS can do non-blocking operations), and manage asynchronous workflows first with **callbacks** and then with **Promises** and the `async/await` syntax. We’ll practice fetching data from an API using promises. Additionally, we introduce **error handling** using `try...catch` and discuss error propagation with promises. By the end of the week, you should be comfortable writing code that doesn’t run sequentially from top to bottom, but instead responds to events or completes out-of-order, which is crucial for real-world JavaScript (e.g., making HTTP requests or handling user interactions).

- **Topics Covered:**

  - **setTimeout** and **setInterval**: scheduling functions to run after a delay or repeatedly. Clearing timers with `clearTimeout/clearInterval`.
  - **Callbacks**: passing a function to another function to be called later (e.g., the callback in `setTimeout` or an event listener). Acknowledge the “callback hell” issue in complex asynchronous code.
  - **Event Loop & Concurrency:** Explain in simple terms that JavaScript is single-threaded with an event loop that handles asynchronous callbacks. Mention that `setTimeout(fn, 0)` doesn’t run immediately but is deferred. (Maybe demonstrate ordering with a short example.)
  - **Promises:** Introduce the Promise object as a way to encapsulate an async result. Show how to create a promise (new Promise) and how to use `.then` and `.catch`. Emphasize that promises avoid deep nesting of callbacks by chaining.
  - **async/await:** Modern syntax to handle promises more readably. Explain that `async` function returns a promise and inside it you can `await` other promises (pausing until they resolve).
  - **Fetch API (or AJAX basics):** Demonstrate using the `fetch()` function (which returns a promise) to get data from a public API, and how to handle the response (use `.then` or `await`). Also discuss JSON parsing (`response.json()` returning a promise).
  - **Error handling:** Using `try...catch` around code that might throw (synchronous errors or awaiting a promise rejection). How promise rejections can be caught with `.catch` or try/catch in an async function. Possibly show custom Error creation (`throw new Error("message")`).
  - **Event handling** (if not already in Week 7): though DOM events are next week, conceptually mention that event callbacks are asynchronous (executed on user action later).
  - **Microtasks vs Macrotasks**: (Optional deep detail) Explain briefly that promise callbacks run in microtask queue (after current stack, before next macrotask like timeout). Only if keen to understand ordering issues, but not strictly necessary at this stage.

- **Goal:** Write JavaScript that can wait for things (timers, server data) without freezing the program. Use promises and async/await to write asynchronous code that looks synchronous. Be able to handle errors gracefully, catching exceptions or promise rejections. This will prepare you for working with web APIs, user interactions, and any scenario where actions happen over time.

#### Projects for Week 6 (Projects 63–74):

**Project 63: Delayed Message**

- _Problem:_ Print a message to the console after a 3-second delay.
- _Implementation:_ Use `setTimeout`. For example: `setTimeout(() => { console.log("Time's up!"); }, 3000);`. This schedules the arrow function to run after 3000ms. Start a timer and maybe log something immediately to show the delay.
- _Expected Output:_ Immediately, nothing (or you can log “Timer started”). After 3 seconds, the console shows **"Time's up!"**. This demonstrates asynchronous delay.

**Project 64: Repeating Clock**

- _Problem:_ Display the current time every second (for 5 seconds) using setInterval, then stop.
- _Implementation:_ Use `setInterval` to print the current time (use `new Date().toLocaleTimeString()` for a readable format) every 1000ms. Use a counter or separate timer to stop after 5 iterations: e.g., maintain a count, and if count == 5, call `clearInterval`.
- _Expected Output:_ The console outputs the current time (e.g., **“14:00:01”**, **“14:00:02”**, etc.) every second, about five times, then stops. This shows using intervals and clearing them.

**Project 65: doAfter (Callback Function)**

- _Problem:_ Create a utility function that takes a delay and a callback, and calls that callback after the delay (essentially wrapping setTimeout).
- _Implementation:_ Write `function doAfter(delay, callback) { setTimeout(callback, delay); }`. Then use it like: `doAfter(2000, () => { console.log("Called after 2 seconds"); });`. Also test it with a named function or different delays.
- _Expected Output:_ After 2 seconds, **“Called after 2 seconds”** is printed. If called again with 1 second and a different message, that appears after 1 second. This shows understanding of passing functions as parameters.

**Project 66: Fetch Data (Promise then)**

- _Problem:_ Retrieve data from a public API using fetch and display part of it.
- _Implementation:_ Use the Fetch API (which returns a promise). For example, call `fetch("https://jsonplaceholder.typicode.com/posts/1")` to get a sample post. Use `.then(response => response.json())` to parse JSON, then another `.then(data => { ...use data... })`. In the final then, log the title of the post (`data.title`). Also use `.catch(error => ...)` to handle network errors.
- _Expected Output:_ It should eventually log the title of post #1, e.g., **“sunt aut facere repellat provident occaecati excepturi optio reprehenderit”** (some placeholder text). If the fetch fails (no internet), it should log an error message from catch. This demonstrates promise chaining and API calls.

**Project 67: Fetch Data (Async/Await)**

- _Problem:_ Repeat the data fetch from Project 66 but using async/await syntax for clarity.
- _Implementation:_ Write an `async function fetchPost()` that uses `await fetch(url)`, then `await response.json()`, and logs the result. Call `fetchPost()` and see the output. Wrap the await calls in try/catch to handle errors (like a network failure) by catching exceptions.
- _Expected Output:_ Same as project 66 (the title or data from the fetched post) but achieved via synchronous-looking code. If an error occurs, the catch block can log **“Error fetching data: ...”**. This shows how async/await makes promise code easier to read.

**Project 68: Try/Catch Error Handling**

- _Problem:_ Write a function that can throw an error and handle that error with try/catch.
- _Implementation:_ Create a function `divide(a, b)` that: if b is 0, `throw new Error("Division by zero")`; otherwise return a/b. Then in another function or the main code, use a try/catch: call `divide(x,y)` inside try. If it throws, catch it and log the error message. Test with one normal case and one error case.
- _Expected Output:_ For `divide(10,2)` in try, it returns 5 (no error, maybe log **5**). For `divide(5,0)`, an Error is thrown and caught – in catch, log **“Error: Division by zero”**. This demonstrates manual error throwing and catching.

**Project 69: Promise.all Example**

- _Problem:_ Run multiple asynchronous operations in parallel and do something when all complete.
- _Implementation:_ Create two or more promises. For demonstration without real async calls, you can make promises that resolve after a timeout using `new Promise(resolve => setTimeout(resolve, time, value))`. For example: `let p1 = new Promise(res => setTimeout(res, 1000, "One")); let p2 = new Promise(res => setTimeout(res, 2000, "Two"));`. Use `Promise.all([p1, p2])` to get a promise for both results. In a `.then`, log the array of results.
- _Expected Output:_ After \~2 seconds (when the longest promise resolves), output **\["One","Two"]**. The exact strings depend on what you passed to resolve. This shows how Promise.all waits for both.

**Project 70: JSON Parse Error Handling**

- _Problem:_ Safely parse a JSON string that might be malformed, using try/catch to handle errors.
- _Implementation:_ Take an input string (you can prompt or just define a couple of test strings). Use `JSON.parse(str)` inside a try block. If the JSON is invalid (it throws a SyntaxError), catch it and print an error message. If valid, print the resulting object or one of its properties. Test with a correct JSON like `"{"x":10}"` and an incorrect one like `"{"x":10"` (missing closing brace).
- _Expected Output:_ For valid JSON input, output the parsed object or a confirmation **“Parsed successfully: \[object details]”**. For invalid JSON, output **“Failed to parse JSON: Unexpected end of JSON input”** or a similar error message. This shows error handling for built-in operations.

**Project 71: Chained Promise Operations**

- _Problem:_ Use promise chaining to perform a sequence of asynchronous operations (or transformations).
- _Implementation:_ Create a promise `p = Promise.resolve(2)` (this immediately resolves to 2). Chain `.then` handlers to perform calculations: for example, `.then(x => x * 3)` (result 6), then `.then(y => y + 4)` (result 10), then `.then(z => console.log("Result:", z))`. The final output should be logged once with the cumulative result.
- _Expected Output:_ **“Result: 10”** (given the operations 2 -> \*3 -> +4). This shows how the result flows through the chain. If any `.then` returns a promise, it would wait for it (you could insert a `return new Promise(res=>setTimeout(res,1000, value))` in the chain to simulate async step).

**Project 72: Sequential Async (fetch then fetch)**

- _Problem:_ Perform two asynchronous fetch calls one after the other, using data from the first in the second.
- _Implementation:_ Use the JSONPlaceholder API or similar. For example: fetch a user by ID, then use a field from that response to fetch that user’s posts. Specifically: First do `let user = await fetch(.../users/1).then(res=>res.json())`. Then get `user.id` or `user.name` and do another fetch to `/posts?userId=1`. Await and parse that. Finally, log something like the number of posts or the title of the first post along with the user’s name. Use async/await for clarity (inside a try/catch).
- _Expected Output:_ It might output **“Leanne Graham has 10 posts.”** (if user 1 is Leanne and they have 10 posts in JSONPlaceholder). The exact data depends on the API. This shows waiting for one async result to trigger another request.

**Project 73: Traffic Light (Timeout Chaining)**

- _Problem:_ Simulate a traffic light that changes colors with delays (using nested timeouts or chaining).
- _Implementation:_ Write a function `changeLight(color)` that perhaps logs the color (e.g., `console.log("LIGHT:", color)`). Then use `setTimeout` to sequence through: call `changeLight("Green")`, then after 3 seconds call `changeLight("Yellow")`, after 1 second call `changeLight("Red")`, after 2 seconds, repeat or stop. You can implement this with a recursive function or a chain of setTimeouts. (This doesn’t involve promises, it’s practicing callback sequencing.)
- _Expected Output:_ Immediately **“LIGHT: Green”**, after 3s **“LIGHT: Yellow”**, after 4s total **“LIGHT: Red”**. You could loop back to Green after say 2 more seconds for a continuous cycle, but an initial one-cycle demo is fine. This mimics real asynchronous workflows and timing.

**Project 74: Async Error Propagation**

- _Problem:_ Demonstrate that an error in a promise chain is caught in a single catch at the end.
- _Implementation:_ Create a promise chain that deliberately throws an error in one of the `.then` steps. For example: `Promise.resolve(5).then(x => { throw new Error("Oops"); }).then(x => x*2) ... .catch(err => console.error("Caught:", err.message));`. Only include one catch at the end of the chain.
- _Expected Output:_ It should output **“Caught: Oops”**. The subsequent `.then` (x\*2) is skipped because the error jumped to catch. This shows promise error propagation. (Alternatively, if using async/await, put multiple awaits in a try block and throw in one to see catch handle it.)

> **Week 6 outcome:** You have a solid grasp of asynchronous programming. You can use timers to delay or repeat actions. You understand how to use and chain promises, as well as the syntactic sugar of async/await, making asynchronous code easier to write and read. You’ve practiced fetching data from an API and handling the results and errors properly. Crucially, you know how to catch and handle errors in both sync and async contexts. With these skills, you can avoid freezing the UI while waiting for data, and you’re ready to handle user events and browser API calls which are inherently asynchronous. Next week, we’ll apply these skills to interacting with the web page (DOM) and building more interactive projects.

## Week 7: Browser DOM Manipulation & Events

**Focus:** This week shifts from pure language to using JavaScript in the browser to create interactive web pages. You will learn to manipulate the **DOM (Document Object Model)**: selecting elements, changing content and styles, creating or removing elements, and handling **events** (like clicks, key presses) to make pages interactive. We’ll also use browser-specific APIs like **localStorage** for data persistence in the browser. By the end of the week, you will be able to build dynamic web interfaces without any libraries – just vanilla JS and the DOM.

- **Topics Covered:**

  - **DOM Selection:** Using methods like `document.getElementById`, `document.querySelector` and `querySelectorAll` to select elements.
  - **DOM Traversal:** Navigating parent/child relationships if needed (e.g., `element.parentElement`, `element.children`).
  - **Manipulating content and attributes:** Changing text content (`element.textContent` or `innerText`), HTML content (`element.innerHTML`), and element attributes (`element.src`, `element.value`, `element.setAttribute`).
  - **Styles and CSS classes:** Changing inline styles via `element.style.property = value`, or adding/removing CSS classes via `element.classList.add/remove/toggle`.
  - **Creating and Removing Elements:** `document.createElement`, `element.appendChild`, `element.removeChild` or `element.remove()`, and perhaps `element.insertBefore`.
  - **Events:** Attaching event listeners with `element.addEventListener("click", function)` (and other event types like "input", "submit", "keydown", etc.). Understanding event objects and maybe event propagation basics (stopPropagation, preventDefault for form submissions or links if needed).
  - **Form handling:** Getting values from form inputs (`input.value`), and reacting to form submissions (using `submit` event or preventing default).
  - **LocalStorage API:** Storing data in `localStorage.setItem(key, value)` and retrieving with `getItem`, so you can save user preferences or to-do list items locally between page refreshes.
  - Possibly mention **Browser APIs** like `alert`, `confirm` (though alert was used already), but focus on DOM.
  - **Best practices:** Keeping script at end of body or using DOMContentLoaded event to ensure elements exist before script runs. Also, separating JS from HTML (not using onclick attributes inline, but using addEventListener in JS).

- **Goal:** Build interactive web mini-apps where the user can click buttons, enter input, and see the page update without refresh. This cements understanding of how JS interacts with HTML/CSS to create dynamic behavior. By completing this week, you will have created things like a to-do list, a simple form validation, and small web UI components (modal, tabs, etc.) from scratch, which is essential knowledge for front-end development.

#### Projects for Week 7 (Projects 75–87):

**Project 75: Background Color Changer**

- _Problem:_ Create a button that, when clicked, changes the page’s background color to a random color.
- _Implementation:_ HTML: have a `<button id="colorBtn">Change Background</button>`. JS: select the button with `document.getElementById`. Attach an event listener: `button.addEventListener("click", ...)`. In the handler, generate a random color (e.g., `'#'+Math.floor(Math.random()*16777215).toString(16)` for a random hex code) and set `document.body.style.backgroundColor` to that color.
- _Expected Output:_ Each click on the “Change Background” button immediately changes the page’s background to a new random color. (The button text could also update to show the hex code of the color, optional.)

**Project 76: Click Counter**

- _Problem:_ Display a counter that increments each time a button is clicked.
- _Implementation:_ HTML: a `<div id="counter">0</div>` and a `<button id="countBtn">Increment</button>`. JS: get the elements. Initialize a count variable (or convert the div text to number). On `countBtn.click`, increment the count and update `counterDiv.textContent` with the new value.
- _Expected Output:_ The page shows “0”. Each click on "Increment" updates the number: 1, 2, 3, … The count increases by 1 per click.

**Project 77: To-Do List App**

- _Problem:_ Implement a basic to-do list where a user can add and remove tasks.
- _Implementation:_ HTML: an `<input id="taskInput" type="text">` for new task, a `<button id="addTaskBtn">Add Task</button>`, and a `<ul id="taskList"></ul>` to display tasks. JS:

  - On clicking Add: get the `taskInput.value`. If not empty, create a new `<li>` element with that text and maybe a “remove” button inside it. Append it to `taskList`. Then clear the input.
  - For removing: attach an event listener to the remove button (maybe an “X”) that, on click, finds the parent `<li>` and removes it (`li.remove()`).
  - Optionally, you can allow marking tasks as done by toggling a class on li when clicked.

- _Expected Output:_ Initially the list is empty. User types "Buy milk", clicks Add -> a new list item "Buy milk" appears with a remove \[X]. Typing "Learn JS", Add -> new item appears below. Clicking \[X] next to "Buy milk" removes that item from the list. The list updates dynamically as tasks are added/removed.

**Project 78: Simple Form Validation**

- _Problem:_ Validate an email input from a form and show a message if invalid when the user submits.
- _Implementation:_ HTML: a form with `<input type="email" id="emailInput">` and `<button type="submit">Submit</button>` and maybe a `<p id="message"></p>` for feedback. JS: attach a `"submit"` event listener to the form (`form.addEventListener("submit", ...`) and use `event.preventDefault()` to stop actual submission. In handler: get the input value. Check if it contains "@" and "." (simple check or use regex). If valid, set `message.textContent = "Email is valid!"` in green. If invalid, set `message.textContent = "Please enter a valid email."` in red.
- _Expected Output:_ If user enters "userexample.com" (missing @) and hits Submit, the page does not reload, and a red message appears under the form **"Please enter a valid email."**. If they enter "[user@example.com](mailto:user@example.com)", the message might say **"Email is valid!"**. This shows real-time form validation feedback.

**Project 79: Image Carousel (Manual)**

- _Problem:_ Create a simple image carousel with “Next” and “Prev” buttons to cycle through a set of images.
- _Implementation:_ HTML: an `<img id="carouselImg" src="image1.jpg">`, and two buttons `<button id="prevBtn">Prev</button> <button id="nextBtn">Next</button>`. (Include 3-5 image URLs in an array in JS for demonstration – they could be online images or placeholders.) JS: store an array of image URLs, and an index variable (current image index). Set the `src` of `carouselImg` initially. On clicking Next: increment index (wrap to 0 if at end), then set `carouselImg.src = images[index]`. On clicking Prev: decrement index (wrap to last if at beginning), update src.
- _Expected Output:_ Initially shows first image. Clicking “Next” changes the image element to the second image, etc. Clicking “Prev” goes back. It cycles around at ends. The images visibly change on the page as buttons are pressed.

**Project 80: Stopwatch**

- _Problem:_ Implement a basic stopwatch with Start, Stop, and Reset controls.
- _Implementation:_ HTML: a `<span id="time">0.0</span>` to display time in seconds, and three buttons: Start, Stop, Reset. JS:

  - Use `setInterval` to increment a timer count (say every 100ms for a tenth of a second resolution) updating the span text.
  - Start button: start the interval (if not already running).
  - Stop button: clear the interval.
  - Reset button: set time to 0 and update display, also clear interval if running.
  - Manage state so multiple Start clicks don’t spawn multiple intervals (use a variable to track interval ID or running state).

- _Expected Output:_ Clicking Start begins the counter (0.1, 0.2, 0.3... seconds). Clicking Stop pauses it. Clicking Start again resumes from that time. Reset sets back to 0.0. The display updates in real time. (This integrates DOM updates with the interval from Week 6.)

**Project 81: Dark/Light Mode Toggle**

- _Problem:_ Provide a toggle button to switch the page between light mode and dark mode.
- _Implementation:_ CSS: define a `.dark-mode` class on body (e.g., with dark background and light text). HTML: a button `<button id="modeToggle">Dark Mode</button>`. JS: on button click, use `document.body.classList.toggle("dark-mode")`. Also change the button text to "Light Mode" or "Dark Mode" accordingly (check with `classList.contains`).
- _Expected Output:_ Initially light background, button says "Dark Mode". Clicking it adds dark-mode class to body, styles change to dark background, button now says "Light Mode". Clicking again toggles back to light mode. This shows class toggling and style changes.

**Project 82: Live Search Filter**

- _Problem:_ Filter a list of items in real-time as the user types into a search box.
- _Implementation:_ HTML: an `<input id="searchInput" placeholder="Search...">` and an unordered list `<ul id="nameList"><li>Apple</li><li>Banana</li><li>Cherry</li>...</ul>` with a bunch of list items. JS: add an `input` event listener to `searchInput`. On each input event, get the current filter text (lowercase). Loop through each `li` in `nameList` (`document.querySelectorAll('#nameList li')`). If the li text (lowercase) includes the filter text, show it (`li.style.display = ""` or keep as is). If not, hide it (`li.style.display = "none"`).
- _Expected Output:_ As the user types "ap" in the search box, only list items containing "ap" remain visible (e.g., "Apple", "Grape"), others hide. Clearing the search shows all again. This demonstrates reacting to keyboard input and updating DOM accordingly.

**Project 83: Modal Popup**

- _Problem:_ Create a modal dialog that appears on button click and can be closed.
- _Implementation:_ HTML: a hidden overlay div for modal, e.g.,

  ```html
  <div id="myModal" class="modal" style="display:none;">
    <div class="modal-content">
      <span id="closeModal" class="close">&times;</span>
      <p>This is a modal popup!</p>
    </div>
  </div>
  <button id="openModal">Open Modal</button>
  ```

  CSS (assumed): .modal with a fixed position black translucent background, .modal-content with a white box, etc., and .close as an “X” button. JS:

  - On clicking #openModal, set `myModal.style.display = "block"`.
  - On clicking #closeModal (the × span), or clicking outside the modal content (listen on window for clicks where event.target == myModal), set display back to "none".

- _Expected Output:_ Clicking "Open Modal" shows a centered dialog with text and an X. Clicking X or outside closes the modal. This uses DOM manipulation and event handling for a common UI component.

**Project 84: Tabs Interface**

- _Problem:_ Create a tabbed content interface where clicking each tab shows corresponding content and hides others.
- _Implementation:_ HTML:

  ```html
  <div class="tabs">
    <button class="tab-link active" data-tab="tab1">Tab 1</button>
    <button class="tab-link" data-tab="tab2">Tab 2</button>
  </div>
  <div id="tab1" class="tab-content">Content for tab 1</div>
  <div id="tab2" class="tab-content" style="display:none;">
    Content for tab 2
  </div>
  ```

  (two tabs for simplicity, can add more similarly). JS: select all `.tab-link` buttons and `.tab-content` divs. Attach click listeners to each tab link: when clicked, remove the "active" class from all tab links and add to the clicked one; hide all `.tab-content` divs (`style.display = "none"`); then show the relevant content div by id (use `button.dataset.tab` to get target id, then `document.getElementById` to find it and display).

- _Expected Output:_ Initially Tab 1 is active and its content shown. Clicking Tab 2 will highlight Tab 2 and show content 2, while hiding content 1. Clicking back to Tab 1 returns to first content. This illustrates dynamic class switching and content toggling.

**Project 85: Calculator (Web)**

- _Problem:_ Build a simple calculator UI that can perform basic arithmetic (+, -, ×, ÷).
- _Implementation:_ HTML: Create a calculator layout with buttons 0-9, +, -, \*, /, =, and an input or div to display the current input/result. Simpler approach: use an `<input id="calcDisplay" disabled>` to show the value, and a bunch of buttons with values and classes to identify digits vs operators. JS:

  - Add click handlers for digit buttons to append that digit to a current input string (display.value).
  - For operator buttons (+ - \* /), also append to the input string (but you might want to handle ensuring not two operators in a row, etc., for simplicity assume well-behaved input).
  - On '=' button click, use `eval()` on the string in display to compute the result (or implement a simple parser manually if avoiding eval). Set display to the result. (Note: using `eval` is acceptable here as a quick solution, but caution in real apps).
  - Clear button to reset display.

- _Expected Output:_ Clicking “2”, “+”, “3”, “=” should result in the display showing **5**. Complex sequences should evaluate correctly (e.g., 12+3\*4 = 24 if respecting order of operations if using eval). This project ties together event handling for many elements and dynamic updating of an interface.

**Project 86: Local Storage “Remember Me”**

- _Problem:_ Use localStorage to remember a user’s name and greet them on subsequent page loads.
- _Implementation:_ HTML: an input for name and a button "Save Name". JS:

  - On clicking save, read the input value, save it to `localStorage.setItem("username", name)`. Also display a greeting like “Hi, \[name]! We’ll remember you next time.”
  - On page load (when script runs), check `localStorage.getItem("username")`. If it exists, skip showing the input and instead directly show “Welcome back, \[name]!” (and maybe a "Clear name" button to reset). If not, show the input form.
  - Provide a way to clear the saved name (clear button that calls `localStorage.removeItem("username")` and refreshes the UI).

- _Expected Output:_ User enters name "Alice", clicks Save – maybe an alert or message confirms saving. If they refresh or reopen the page, the script finds the stored name and automatically displays **"Welcome back, Alice!"** without asking again. Clearing removes the stored data. This demonstrates persistent storage in the browser.

**Project 87: Random Quote Display (DOM)**

- _Problem:_ Display a random quote from a predefined list on the webpage, and allow the user to get a new random quote by clicking a button.
- _Implementation:_ Use an array of quote strings (or objects with quote and author). HTML: a `<div id="quoteDisplay">Quote will show here</div>` and a `<button id="newQuoteBtn">New Quote</button>`. JS: on load or first time, select a random quote from the array and put it in `quoteDisplay.innerText`. On clicking the New Quote button, pick another random quote (use similar random index as earlier) and update the display. (Ensure it can repeat possibly, that’s fine.)
- _Expected Output:_ On page load, for example, **"The journey of a thousand miles begins with one step."** is shown. Each click on "New Quote" replaces it with some other random quote from the list. This recycles knowledge of arrays, random, DOM selection, and events in one practical mini-app.

> **Week 7 outcome:** You’ve built a variety of interactive UI components: buttons, forms, modals, lists, etc. You can now manipulate web page content and style dynamically based on events, which is the foundation of all front-end web development. You understand how to respond to user actions and update the DOM, as well as store data in the browser for persistence. At this point, you’re able to create a fully functional (if simple) web application with just vanilla JS. In the final week, we will cover any remaining advanced topics and focus on consolidating everything you’ve learned with larger projects.

## Week 8: Advanced Topics, Best Practices, and Capstone Projects

**Focus:** The final week will round out your JavaScript knowledge by covering a few advanced or specialized topics that weren’t in earlier weeks (to truly achieve “99%” coverage). We will also discuss best practices (code organization, strict mode) and have you undertake **capstone projects** that combine many aspects of what you’ve learned. This is a week to solidify your skills, fill gaps, and produce showcase pieces for your portfolio.

- **Topics Covered:**

  - **ES6 Modules:** How to split code into modules (using `export` and `import` syntax). We’ll practice by modularizing some code from previous projects.
  - **Symbols:** Introduction to the `Symbol` primitive type and its use for unique property keys or special uses (like Symbol.iterator). Not commonly needed, but part of core JS.
  - **Iterators and Generators:** Basic concept of iterables. Show a simple generator function example (`function* gen(){ yield ...}`). This is advanced, but we’ll do one use-case example (like generating an infinite sequence or iterating custom objects).
  - **Proxies and Reflect:** Briefly explain that you can intercept operations on objects using Proxy. We might do a small demonstration (like a proxy that logs property access).
  - **Performance considerations:** Big-O mention for array vs object operations perhaps, and using the right data structures (just conceptual).
  - **Memory and Garbage Collection:** Explain that JS is garbage-collected; discuss avoiding common memory leaks (like forgetting to remove DOM listeners).
  - **Strict Mode:** Encourage always using `"use strict";` at top of scripts to catch common mistakes (like assigning to undeclared variables).
  - **Coding Best Practices:** e.g., meaningful naming, avoiding global variables (we touched by using modules or IIFEs), commenting code, using linters perhaps.
  - **Testing and debugging:** Encourage using console logs or breakpoints in DevTools to debug. Maybe show a simple example writing a unit test for a function manually (or just the concept of testing).
  - **Next Steps:** (Not a JS concept, but guidance) Mention that with core JS mastered, one could next learn a framework (React/Vue etc.), TypeScript for typing, or Node.js for back-end, etc.

- **Goal:** Ensure the student has a near-complete picture of core JavaScript. The projects this week will be more open-ended or larger, integrating multiple skills (perhaps a final game or app). By the end, the student should feel confident to tackle real-world JS tasks or continue into more specialized areas, armed with solid fundamentals.

#### Projects for Week 8 (Projects 88–100):

**Project 88: Modularize a Previous Project**

- _Problem:_ Take one of your earlier projects and split its code into modules for better organization.
- _Implementation:_ For example, use the Calculator or To-Do app code. Create separate JS files (modules), e.g., `calculator.js` exporting functions for calculations and a `app.js` importing those to handle DOM events. In a browser environment, use `<script type="module">` to include the main module. Or if running with a bundler, simulate modules. Specifically: `// calculator.js` might `export function add(a,b){ return a+b; } export function subtract(a,b){...}` etc. Then in `app.js`: `import { add, subtract } from './calculator.js';` and use them when the user clicks buttons. Ensure to run via a server (since module import needs it).
- _Expected Output:_ The functionality of the chosen project remains the same (e.g., the calculator still works in the browser), but your code is now organized into separate modules. There’s no visual difference to the user; the outcome is improved code structure. (You can log something to confirm a module function was called.)

**Project 89: Symbol Property Example**

- _Problem:_ Use a Symbol to add a “hidden” or unique property to an object, demonstrating that it doesn’t conflict with other property names.
- _Implementation:_ Create an object `user = { name: "Bob" }`. Define `const idSymbol = Symbol("id");` and set `user[idSymbol] = 123;`. Log the object and verify that `console.log(user)` doesn’t show the symbol property (some consoles might show it, but generally it’s not enumerated). Show that `for..in` loop over `user` yields only 'name'. Also log `user[idSymbol]` to see the value.
- _Expected Output:_ Logging the user object might output just `{ name: "Bob" }`. The loop prints just "name". But logging `user[idSymbol]` outputs **123**. This shows the symbol property exists but is non-enumerable and unique (cannot be accidentally overwritten by another property with same description).

**Project 90: Event Delegation**

- _Problem:_ Implement event delegation on a list: one event listener on a parent handles clicks on all child items.
- _Implementation:_ HTML: an unordered list with many `<li>` items (e.g., 100 items generated). Instead of adding a click listener to each `li`, add one to the parent `ul`. In the handler, use `event.target` to determine which `<li>` was clicked. For example, if clicking an item, `event.target.tagName` would be "LI" and you can do something like `event.target.style.backgroundColor = "yellow"` to highlight it. (Maybe also `console.log("You clicked: " + event.target.textContent)`).
- _Expected Output:_ Clicking any list item causes only one event listener (on the UL) to run, which then logs e.g., **"You clicked: Item 42"** and highlights that item. This shows efficient handling by not adding 100 separate listeners. (The user sees the effect the same as if each item had its own handler.)

**Project 91: Sorting Objects by Property**

- _Problem:_ Given an array of objects, sort it by a specific property using a custom compare function.
- _Implementation:_ Define an array of objects, e.g., `people = [ {name:"Charlie", age:25}, {name:"Alice", age:30}, {name:"Bob", age:20} ]`. Use `people.sort((a, b) => a.name.localeCompare(b.name));` to sort alphabetically by name. Then use `people.sort((a,b) => a.age - b.age);` to sort by age ascending. Print the results each time.
- _Expected Output:_ After sorting by name: an array order of Alice, Bob, Charlie. After sorting by age: Bob, Charlie, Alice (20,25,30). This reinforces writing comparator functions and understanding sort’s behavior.

**Project 92: Generator Function (Fibonacci Sequence)**

- _Problem:_ Write a generator that produces an infinite sequence of Fibonacci numbers, and use it to get the first N Fibonacci numbers.
- _Implementation:_ Define `function* fibonacciGenerator()` that yields Fibonacci numbers endlessly: start with a=0, b=1, then in a loop `yield a; [a, b] = [b, a+b];`. In code, use the generator: `const fibGen = fibonacciGenerator();` then use a loop to retrieve, say, 10 values via `fibGen.next().value`. Store those in an array and log them.
- _Expected Output:_ The first 10 Fibonacci numbers: **0, 1, 1, 2, 3, 5, 8, 13, 21, 34**. This demonstrates generators and the `yield` keyword.

**Project 93: Proxy for Validation**

- _Problem:_ Use a Proxy to add validation logic to an object’s properties (e.g., ensure age is always positive).
- _Implementation:_ Create a `let person = { age: 25, name: "John" };`. Create a `proxyPerson = new Proxy(person, { set(target, property, value) { if(property === 'age'){ if(typeof value !== 'number' || value < 0) { console.log("Invalid age"); return false; } } target[property] = value; return true; } });`. Then try setting `proxyPerson.age = 30` (valid) and `proxyPerson.age = -5` (invalid). Also perhaps proxyPerson.newProp = 'test' to show other props still work.
- _Expected Output:_ Setting age to 30 works normally. Setting age to -5 triggers console log **"Invalid age"** and the assignment is rejected (proxy `set` returns false, perhaps throwing in strict mode). If you log `person.age` after the invalid set, it should still be 30 (unchanged). This shows how a proxy trap can intercept and validate assignments.

**Project 94: Tic-Tac-Toe Game**

- _Problem:_ Build a Tic-Tac-Toe game that two players can play in the browser.
- _Implementation:_ HTML: a 3x3 grid of divs or buttons (maybe styled to look like a board). Each cell has a data-index or id from 0 to 8. JS: maintain a game state array of 9 elements for cells (initially all null). Also maintain current player ("X" or "O"). Attach click listeners to each cell or use event delegation on the board container. On cell click: if that cell is empty (not already played), mark it with current player’s symbol (update state array and set cell.textContent). Then check for a win or draw: You can hardcode win index combinations (\[0,1,2], \[3,4,5], etc.) and check if any have the same non-null symbol. If win, announce winner (e.g., alert or display a message) and prevent further moves. If no win, toggle current player ("X"->"O" or vice versa) and continue. If all cells filled with no win, announce draw. Provide a "Reset" button to clear the board for a new game (reset state, textContent, etc.).
- _Expected Output:_ The players can click alternatingly on the 3x3 grid. X and O appear as they click. When one gets three in a row, a message like **"Player X wins!"** is shown and no more moves are allowed until reset. If all 9 cells are filled without winner, **"It's a draw!"** is shown. This project brings together conditionals, loops, DOM updates, and event handling into a bigger interactive application.

**Project 95: Memory Card Matching Game**

- _Problem:_ Create a simple memory matching game (concentration) with a set of cards that the user can flip to find pairs.
- _Implementation:_ For brevity, use a small even number of cards (say 6 cards = 3 pairs). HTML: a grid of face-down card elements (could just be `<div class="card" data-value="A">?</div>` etc., where data-value is the symbol/letter of the card, and "?" is shown initially). JS: randomize an array of 6 values with pairs (e.g., \["🍎","🍎","🍌","🍌","🍒","🍒"]). Assign these to cards’ data-value. On card click: reveal the card (show its emoji or value by setting textContent or applying a flipped class that changes background image). Use logic to handle matching:

  - Keep track of currently flipped card (if one already flipped and waiting for second).
  - If flipping the first card of a pair attempt, just store it.
  - If flipping second card, compare its data-value with the first’s. If match, leave both face-up (perhaps mark them as matched, e.g., remove click event or set a flag). If not a match, after a short timeout (e.g., 1 second), flip them back face-down (hide value).
  - Manage that the user cannot flip more than 2 at once (ignore clicks during the short timeout if two are already flipped).
  - Continue until all pairs are found. Then display a “You win!” message and possibly count number of moves it took.

- _Expected Output:_ The user clicks on cards, sees them flip to reveal symbols. If they find a matching pair consecutively, those cards remain revealed. If not, they briefly see both then they flip back. Once all pairs are revealed, a message like **"Congratulations, you found all pairs!"** appears. This is a more complex project that uses array shuffling, event logic, timeouts, and DOM updates extensively.

**Project 96: Weather App (API + DOM)**

- _Problem:_ Build a small weather lookup app that fetches data from a weather API and displays it on the page for a city input.
- _Implementation:_ Use a free weather API (e.g., OpenWeatherMap requires an API key though; for this educational context, maybe use an open one like MetaWeather or an example API). HTML: an input for city and a button “Get Weather”, and a `<div id="weatherResult"></div>` for output. JS: on click, take city name, call `fetch` on the weather API endpoint for that city (likely need to construct URL with city and API key if needed). Use async/await or .then to get JSON data. Extract relevant info (e.g., temperature, description). Update `weatherResult` div to show something like “City: London, Temp: 15°C, Clear sky”. Handle errors (city not found -> show error message).
- _Expected Output:_ Typing “London” and clicking get might display **“London: 15°C, Light Rain”** (depending on actual API response). If an invalid city, **“City not found”**. This combines asynchronous fetch (from Week 6) with DOM updates (Week 7). (If actual API usage is an issue, one can simulate by having a dummy data object for a given city to demonstrate functionality.)

**Project 97: “Simon” Memory Game or Whack-a-Mole (Optional Big Project)**

- _Problem:_ (Optional advanced) Implement a simplified version of a classic game like Simon (color sequence memory game) or Whack-a-Mole (click appearing moles quickly).
- _Implementation:_ _Simon:_ 4 colored buttons. The game lights up a random sequence (adding one each round). Player has to repeat by clicking colors in order. Use sounds or highlights for feedback. Increase sequence length each round. If player gets it wrong, game over.
  _Whack-a-Mole:_ A grid of holes, a “mole” randomly pops up (highlight one hole) for a short time. The player has to click it before it disappears. Keep score of hits. Continue for a time limit or number of rounds.
- _Expected Output:_ _Simon:_ The game might display a sequence like Red -> Blue -> Red (with visual cues), player clicks those in same order. If correct, sequence gets longer. If wrong, display **"Game Over. You reached round 3."**
  _Whack-a-Mole:_ Moles appear and disappear; each successful click increments score, missed ones perhaps decrement time or so. After time’s up, **"Your score: X"** is shown.
  _(These projects are comprehensive and integrate nearly everything: timeouts/intervals, event handling, state management, and more. They can be used as capstone challenges.)_

**Project 98: Code Refactoring Exercise**

- _Problem:_ Take some of your earlier written code and refactor it for clarity or efficiency, applying best practices learned.
- _Implementation:_ For example, revisit the FizzBuzz or to-do list logic. Perhaps use more appropriate data structures or methods: maybe you initially used a loop to filter, refactor to use `.filter`. Or you used var, change to let/const and enable strict mode `'use strict';`. Remove global variables by encapsulating in an IIFE or module. If some code was repetitive, refactor into a helper function.
- _Expected Output:_ Functionality remains the same as before refactoring (no user-visible change), but the code is cleaner, shorter, or more conformant to modern style. You might log a message **"Refactoring complete - behavior unchanged."** to indicate success. This is about improving code quality rather than output.

**Project 99: Final Capstone – Build Your Own Project**

- _Problem:_ Design and implement a project of your choice that uses core JavaScript. For example, a small quiz app, a personal budget tracker, or any idea that interests you.
- _Implementation:_ Go through the software development steps: define the requirements and features, sketch a simple UI, decide the data structures and algorithms needed, then code it using what you’ve learned. Try to include at least: dynamic DOM manipulation, event handling, maybe data storage or fetch if relevant, and any needed algorithmic logic. Ensure to test each part and then the whole integration. Use modules if the code grows large, and keep functions focused (each doing one thing).
- _Expected Output:_ A fully working mini-application. For example:

  - If a quiz app: It displays questions one by one, accepts answers (via buttons or input), keeps score, and shows a result at the end.
  - If a budget tracker: Allows input of expenses and incomes, stores them (maybe in localStorage), and shows a summary of balance, possibly with a chart (could be done with DOM or ASCII art).
  - If another game: For instance, a simplified platform or canvas-based game if you ventured into the Canvas API.

  The exact output depends on the chosen project. The key expectation is that you can plan and build something without step-by-step instructions now, using the broad skillset acquired.

**Project 100: Knowledge Review and Interview Prep**

- _Problem:_ Solidify your understanding by explaining key concepts and solving a few algorithmic challenges without looking at answers – simulating an interview or review session.
- _Implementation:_ Write (in comments or a document) short explanations for topics: e.g., "Explain hoisting", "Difference between == and ===", "How does prototypal inheritance work in JS?", "What is closure?" – ensuring you can articulate these. Then take 2-3 basic algorithm problems (for example, reverse a string, fizzbuzz (again, from memory), find the factorial or Fibonacci of N without recursion, etc.) and code solutions from scratch in a fresh environment to test yourself. Finally, enable strict mode `'use strict'` at top and see if any of your code errors out, and fix those errors (like undeclared variables).
- _Expected Output:_ This isn't an app output but a personal Q\&A and self-test. The "output" could be a set of solutions and explanations you've written. For instance:

  - Explanation of closure (in your own words).
  - Implementation of a function to reverse a string `reverseString("hello") -> "olleh"`.
  - Rewriting FizzBuzz without reviewing earlier code to ensure you can do it cold.

  Successfully doing this project indicates you’ve internalized the concepts (which is the ultimate goal). There’s no user interface – the benefit is the confidence and clarity in understanding gained.

> **Week 8 outcome:** You have now touched on virtually every core concept of JavaScript, including some of the most recent additions to the language. You know how to organize code, write and use modules, and you have built substantial projects that integrate multiple skills (which you hopefully saved to a portfolio or GitHub). By completing the capstone project(s), you proved to yourself that you can start with an idea and implement it with JavaScript from the ground up. You are also comfortable explaining how and why things work in JavaScript, which is a sign of true mastery. Congratulations – after 8 weeks of intense learning and 100 projects built, you can confidently call yourself a **Professional JavaScript Developer** in core (vanilla) JavaScript!
