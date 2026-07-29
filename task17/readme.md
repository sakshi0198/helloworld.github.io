# Division Using Promise

## About

This project is a simple JavaScript assignment that performs division using **Promises**.

The program takes two numbers, divides the first number by the second, and returns the result using a Promise.

If the second number is zero, the Promise is rejected with an error message.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript

---

## Project Structure

```
Promise-Division/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Features

- Uses an **arrow function**.
- Returns a **Promise**.
- Handles division by zero.
- Uses `.then()` and `.catch()`.
- Includes five different test cases.
- Displays results in the browser console.

---

## How to Run

1. Open the project folder.
2. Open **index.html** in your browser.
3. Press **F12** and open the **Console** tab.
4. View the output of all test cases.

---

## What I Learned

In this assignment, I learned how to create and use JavaScript Promises. I understood how `resolve()` is used when the operation is successful and how `reject()` is used to handle errors like division by zero. I also practiced using arrow functions and handling Promise results with `.then()` and `.catch()`.

---

## Sample Output

```
Dividing 10 by 2...
Result: 5

Dividing 20 by 4...
Result: 5

Dividing 15 by 3...
Result: 5

Dividing 10 by 0...
Error: Division by zero is not allowed.

Dividing 50 by 5...
Result: 10
```

---
