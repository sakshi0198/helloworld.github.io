// Promise function to divide two numbers
// I used an arrow function because it is required in the assignment.

const divideNumbers = (firstNumber, secondNumber) => {

    return new Promise((resolve, reject) => {

        console.log("Checking the numbers...");

        if(secondNumber === 0){

            console.log("Second number is zero.");

            reject("Division by zero is not allowed.");

        }
        else{

            let result = firstNumber / secondNumber;

            console.log("Division completed successfully.");

            resolve(result);

        }

    });

};


// ----------------------
// Test Case 1
// ----------------------

console.log("Test Case 1");
console.log("Dividing 18 by 3");

divideNumbers(18,3)

.then(function(answer){

    console.log("Answer =",answer);

})

.catch(function(error){

    console.log(error);

});



// ----------------------
// Test Case 2
// ----------------------

console.log("Test Case 2");
console.log("Dividing 25 by 5");

divideNumbers(25,5)

.then(function(answer){

    console.log("Answer =",answer);

})

.catch(function(error){

    console.log(error);

});



// ----------------------
// Test Case 3
// ----------------------

console.log("Test Case 3");
console.log("Dividing 12 by 4");

divideNumbers(12,4)

.then(function(answer){

    console.log("Answer =",answer);

})

.catch(function(error){

    console.log(error);

});




// ----------------------
// Test Case 4
// ----------------------

console.log("Test Case 4");
console.log("Dividing 50 by 0");

divideNumbers(50,0)

.then(function(answer){

    console.log("Answer =",answer);

})

.catch(function(error){

    console.log("Error :",error);

});




// ----------------------
// Test Case 5
// ----------------------

console.log("Test Case 5");
console.log("Dividing 100 by 25");

divideNumbers(100,25)

.then(function(answer){

    console.log("Answer =",answer);

})

.catch(function(error){

    console.log(error);

});