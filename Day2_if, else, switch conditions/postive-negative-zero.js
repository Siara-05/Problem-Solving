
// Given a number, check whether it is positive, negative, or zero.

// function PositiveOrNegativeOrZero(a) {

//     if (a > 0) {
//         return "postivee number";
//     }

//     else if (a < 0) {
//         return "negative number";
//     }

//     else {
//         return "the number is zero";
//     }

// }

// console.log(PositiveOrNegativeOrZero(1));
// console.log(PositiveOrNegativeOrZero(-1));
// console.log(PositiveOrNegativeOrZero(0));


//  If we have to take number from user 
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function PositiveOrNegativeOrZero(a) {
    if (a > 0) {
        return "postive number";
    }

    else if ( a < 0) {
        return "negative number";
    }

    else {
        return "the number is zero";
    }
}

readline.question("Enter a number: ", (userInput) => {
    let number = Number(userInput);
    console.log (PositiveOrNegativeOrZero(number));
    readline.close();
}
);