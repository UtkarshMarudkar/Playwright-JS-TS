// js is dynamically typed language

a = 10; // number
console.log(typeof a);
a = "hello"; // string
console.log(typeof a);
a = true; // boolean
console.log(typeof a);

// waht is variable?
// variable is a container that holds a value
// variable that can change its value

// a = 10; // number   - yoy can cahne the value of a
// for cosnt a = 10; // number - you cannot change the value of a

// var, let, const - keywords to declare a variable

// var - function scope
// let - block scope    
// const - block scope  - cannot be reassigned

// js is a blocking language - it executes code line by line

/*

implicit global variable - if you declare a variable without var, let, const it becomes a global variable
var variable - global + functional  
let variable - 
const variable - 

for implicit global variable - you can access it anywhere in the code
same for var variable - you can access it anywhere in the code
for let and const variable - you can access it only within the block where it is declared   
for const variable - you cannot reassign it but you can change the value of the object or array that it holds

//  diifference between let & const is  - let can be reassigned but const cannot be reassigned or value of the variable ---
    cannot be changed for only const variable but for let variable you can change the value of the variable 

*/