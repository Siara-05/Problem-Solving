

//  PROBLEM STATEMENT:- Create three variables: name (string) , age(number) and isStudent(boolean). Log each variable's value and its type using typeof


// Starting by declaring variables

let name = "Siara";
let age = 19;
let isStudent = true;

//  Now logging values and their types

console.log(name,"-",typeof name);
console.log(age,"-",typeof age);
console.log(isStudent,"-",typeof isStudent);




// If we have give a list of people's names and thir ages -

let people = [
    {name: "Siara", age: 19},
    {name: "Zero", age: 18},
    {name: "Sia", age: 20}
];    // Remember to put ';' here

people.forEach(person => {
    console.log(person.name, "-", typeof person.name);
    console.log(person.age, "-", typeof person.age);
});