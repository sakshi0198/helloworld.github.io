// Dummy Array

let numbers = [4, 8, 2, 11, 6, 7, 10];

console.log("Array:", numbers);

// -----------------------------
// Normal Function
// Find Maximum Number
// -----------------------------

function findMaximum(array){

    let max = array[0];

    for(let i = 1; i < array.length; i++){

        if(array[i] > max){

            max = array[i];

        }

    }

    return max;

}

console.log("Maximum number:", findMaximum(numbers));


// -----------------------------
// Arrow Function
// Find Sum
// -----------------------------

const findSum = (array) => {

    let total = 0;

    for(let i = 0; i < array.length; i++){

        total = total + array[i];

    }

    return total;

};

console.log("Sum of all elements:", findSum(numbers));


// -----------------------------
// Anonymous Function
// Count Odd Numbers
// -----------------------------

const countOdd = function(array){

    let count = 0;

    for(let i = 0; i < array.length; i++){

        if(array[i] % 2 !== 0){

            count++;

        }

    }

    return count;

};

console.log("Count of odd numbers:", countOdd(numbers));