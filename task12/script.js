// Principal amount (P)
let principal = 50000;

// Annual interest rate (r)
// 10% is written as 0.10
let rate = 0.10;

// Number of times interest is compounded in one year (n)
let frequency = 1;

// Time in years (t)
let time = 3;

// Calculate total amount using the compound interest formula
let amount = principal * Math.pow((1 + (rate / frequency)), (frequency * time));

// Calculate compound interest
let compoundInterest = amount - principal;

// Display the result
console.log("Principal Amount: ₹" + principal);
console.log("Rate of Interest: " + (rate * 100) + "%");
console.log("Compounded Per Year: " + frequency);
console.log("Time: " + time + " years");
console.log("Total Amount: ₹" + amount.toFixed(2));
console.log("The compound interest after " + time + " years is: ₹" + compoundInterest.toFixed(2));