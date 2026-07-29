# Promise Division Assignment

## About

This assignment helped me understand how JavaScript Promises work.

I created a function that divides two numbers. If the second number is not zero, the Promise is resolved and the result is displayed. If the second number is zero, the Promise is rejected with an error message.

I tested the function with five different examples to check both success and error cases.

---

## Technologies Used

- HTML
- CSS
- JavaScript

---

## Files

```
Promise-Division/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How to Run

1. Open the project folder.
2. Open `index.html` in your browser.
3. Press **F12**.
4. Open the **Console** tab.
5. Check the output for all five test cases.

---

## What I Learned

At first, I was confused about when to use `resolve()` and `reject()`. After trying different examples, I understood that `resolve()` is used when the task is completed successfully and `reject()` is used when an error occurs.

I also learned how `.then()` receives the successful result and `.catch()` handles the error message.

Adding `console.log()` statements helped me understand the order in which the Promise runs.

---

## Challenges

The main challenge was understanding why the Promise does not immediately return the result. After reading about Promise flow and testing different values, I became more comfortable using `.then()` and `.catch()`.

---
