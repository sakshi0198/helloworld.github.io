// Variables
let number = 153;
let n = 10;
let sum = 0;
let digitSum = 0;
let temp = number;
let armstrongSum = 0;
let factors = "";
let isPrime = true;

// Sum of first n numbers
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log("Sum of first " + n + " numbers = " + sum);


// Table of n
console.log("Table of " + n);

for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}


// Prime Number Check
if (number <= 1) {
    isPrime = false;
} else {

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            isPrime = false;
            break;
        }

    }

}

if (isPrime) {
    console.log(number + " is a Prime Number.");
} else {
    console.log(number + " is not a Prime Number.");
}


// Factors
console.log("Factors of " + number + " are:");

for (let i = 1; i <= number; i++) {

    if (number % i === 0) {
        factors = factors + i + " ";
    }

}

console.log(factors);


// Sum of Digits
temp = number;

while (temp > 0) {

    let digit = temp % 10;

    digitSum = digitSum + digit;

    temp = Math.floor(temp / 10);

}

console.log("Sum of digits = " + digitSum);


// Armstrong Number Check
temp = number;

while (temp > 0) {

    let digit = temp % 10;

    armstrongSum = armstrongSum + (digit * digit * digit);

    temp = Math.floor(temp / 10);

}

if (armstrongSum === number) {

    console.log(number + " is an Armstrong Number.");

}
else{

    console.log(number + " is not an Armstrong Number.");

}