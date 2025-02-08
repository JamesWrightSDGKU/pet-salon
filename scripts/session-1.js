console.log("Welcome to FSDI 104");

// Global variables
let globalVariable = "I am a global variable";

function exampleFunction(){
    // Local variable
    let localVariable = "I am a local variable";
    
    console.log(globalVariable);
    console.log(localVariable);
}

exampleFunction();

console.log(globalVariable);
// console.log(localVariable);

// Arrays
let fruits = ["apple", "banana", "orange"];
console.log(`This is an array: ${fruits}`);

console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[0]);

fruits[1] = "cherry";
console.log(fruits);

// Array length
console.log(fruits.length);

// Adding and removing elements
fruits.push("watermelon");
console.log(fruits);

fruits.pop(); // removing from the end
fruits.pop(); // removing from the end
console.log(fruits);

fruits.unshift("grape"); // adding to the beginning
console.log(fruits);

fruits.shift(); // removing from the beginning
console.log(fruits);

// CHALLENGE
/*
    1. Create an array of student names
    2. Use a for loop to iterate through the array
    3. Log eag student's name
*/
let students = ["James", "Robert", "Cassius", "Edward", "Gabriel"];
for(let i = 0; i < students.length; i++){ 
    // i: 1. initialize, 2. condition, 3. logic, 4. increment
    console.log(students[i]);
    }

// OBJECTS (aka Object Literals)
/* 
    An object is a collection of key-value pairs.
    It allows you to group related data together in a structured way.

    let objectName = {
        key1: value1,
        key2: value2,
        key3: value3
    }
*/

let person = {
    name: "Michael",
    lastName: "Scott",
    age: 40,
    isStudent: false
}

// access the properties of an object
console.log(`The person name is ${person.name}`);
console.log(person.lastName);
console.log(person.age);
console.log(person.isStudent);

// Example 2
let student1 = {
    name: "George",
    email: "george@example.com",
    age: 32,
    address: "123 Main Street, Anytown, CA 92001"
}

let student2 = {
    name: "Mahmoud",
    email: "mahmoud@example.com",
    age: 29,
    address: "987 Main Street, Anytown, CA 92001"
}

let student3 = {
    name: "Joel",
    email: "joel@example.com",
    age: 36,
    address: "155 Main Street, Anytown, CA 92001"
}

let student4 = {
    name: "Peter",
    email: "peter@example.com",
    age: 31,
    address: "276 Main Street, Anytown, CA 92001"
}
let studentList = [student1, student2, student3, student4];

function numStudents(){
    document.getElementById("studentCounter").innerHTML=`There are ${studentList.length} students.`
}

numStudents();

function getStudentNames(){
    for(let i = 0; i < studentList.length; i++){
        document.getElementById("studentNames").innerHTML+=`<li>${studentList[i].name}</li>`
    }
}

getStudentNames();