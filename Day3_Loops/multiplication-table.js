
// Take a number (e.g., 5) and print its multiplication table up to 10.Format the output like 5 x 3 = 15 to make it look real.

let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log (`${number} * ${i} = ${number *i}`);
}

// NOTE:- the syntax is (``) not ('') 

// Alternative:-  String concatenation using +

let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(number + " * " + i + " = " + (number * i));
}
