
// Check if a number is odd/even.

function checkIfEvenOrOdd(a){
    const remainder = (a % 2);

    if(remainder === 0) {
        return "even"
    }

    else {
        return "odd";
    }

}

console.log(checkIfEvenOrOdd(1267));
