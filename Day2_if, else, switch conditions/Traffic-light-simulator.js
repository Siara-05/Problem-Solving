
// Write a program that takes the current traffic light color ("red", "yellow", "green") and: If "red" → print "Stop".If "yellow" → print "Get Ready".If "green" → print "Go".If any other color → print "Invalid signal"

// Normal method

let lightColor = "red";      // change to "yellow", "green", or anything else

if (lightColor === "red") {
    console.log ("Stop");
}

else if (lightColor === "yellow") {
    console.log("Get Ready");
}

else if (lightColor === "Green") {
    console.log ("Go");
}

else {
    console.lpg("invalid signal");
}


//  If we want to take by the user

// Import readline module to take user input in terminal
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter traffic light color (red, yellow, green): ", (color) => {
    color = color.trim().toLowerCase();

    if (color === "red") {
        console.log("Stop");
    }
    
    else if (color === "yellow") {
        console.log("Get Ready");
    }
    
    else if (color === "green") {
        console.log("Go");
    }
    
    else {
        console.log("Invalid signal");
    }

    rl.close();
});
