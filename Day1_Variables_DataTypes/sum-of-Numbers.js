
// PROBLEM STATEMENT :- Write a function which takes 3 numbers as input and prints their sum

// By Normal Method 

function sum(a,b,c) {
    const sum = a+b+c;
    console.log(" Sum of the numbers is ", sum);
}

sum(128,295,734.6);


// By using readline (built-in Node.js)
// Taking input from the user

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter three numbers separated by space: ", (input) => {
    let [a, b, c] = input.split(" ").map(Number);
    console.log("The sum is:", a + b + c);
    rl.close();
});
