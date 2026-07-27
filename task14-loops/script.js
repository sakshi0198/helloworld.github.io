// User inputs
let number = Number(prompt("Enter a number"));
let n = Number(prompt("Enter a value for n"));

// -------------------------------
// Sum of first n numbers
// -------------------------------

function sumOfNumbers(value){

    let sum = 0;

    for(let i=1;i<=value;i++){

        sum = sum + i;

    }

    return sum;

}

console.log("Sum of first " + n + " numbers = " + sumOfNumbers(n));


// -------------------------------
// Table
// -------------------------------

function printTable(value){

    console.log("Table of " + value);

    for(let i=1;i<=10;i++){

        console.log(value + " x " + i + " = " + value*i);

    }

}

printTable(n);


// -------------------------------
// Prime Number
// -------------------------------

function checkPrime(value){

    if(value<=1){

        return false;

    }

    for(let i=2;i<value;i++){

        if(value%i==0){

            return false;

        }

    }

    return true;

}

if(checkPrime(number)){

    console.log(number + " is a Prime Number");

}
else{

    console.log(number + " is not a Prime Number");

}


// -------------------------------
// Factors
// -------------------------------

function printFactors(value){

    let list="";

    for(let i=1;i<=value;i++){

        if(value%i==0){

            list = list + i + " ";

        }

    }

    console.log("Factors = " + list);

}

printFactors(number);


// -------------------------------
// Sum of Digits
// -------------------------------

function digitSum(value){

    let temp=value;

    let sum=0;

    while(temp>0){

        let digit=temp%10;

        sum=sum+digit;

        temp=Math.floor(temp/10);

    }

    return sum;

}

console.log("Sum of digits = " + digitSum(number));


// -------------------------------
// Armstrong Number
// -------------------------------

function checkArmstrong(value){

    let temp=value;

    let total=0;

    while(temp>0){

        let digit=temp%10;

        total=total+(digit*digit*digit);

        temp=Math.floor(temp/10);

    }

    return total==value;

}

if(checkArmstrong(number)){

    console.log(number + " is an Armstrong Number");

}
else{

    console.log(number + " is not an Armstrong Number");

}