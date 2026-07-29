// Function to divide two numbers using Promise

const divide = (num1, num2) => {

    return new Promise(function(resolve, reject){

        if(num2 == 0){

            reject("Division by zero is not allowed.");

        }
        else{

            let answer = num1 / num2;

            resolve(answer);

        }

    });

};


// Test Case 1

console.log("Dividing 10 by 2...");

divide(10,2)

.then(function(result){

    console.log("Result:", result);

})

.catch(function(error){

    console.log(error);

});


// Test Case 2

console.log("Dividing 20 by 5...");

divide(20,5)

.then(function(result){

    console.log("Result:", result);

})

.catch(function(error){

    console.log(error);

});


// Test Case 3

console.log("Dividing 15 by 3...");

divide(15,3)

.then(function(result){

    console.log("Result:", result);

})

.catch(function(error){

    console.log(error);

});


// Test Case 4

console.log("Dividing 10 by 0...");

divide(10,0)

.then(function(result){

    console.log("Result:", result);

})

.catch(function(error){

    console.log("Error:", error);

});


// Test Case 5

console.log("Dividing 45 by 9...");

divide(45,9)

.then(function(result){

    console.log("Result:", result);

})

.catch(function(error){

    console.log("Error:", error);

});