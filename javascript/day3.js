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


// Hosting in js
// var, let, const & fumctions auto moved to the top of the scope where they are declared
// implicit global variable are not hoisted 

// for var variable - it is hoisted but its value is not hoisted
// for let and const variable - they are hoisted but they are in temporal dead zone until they are declared -wi;ll throw error

      
// console.log(a); // undefined
// var a = 10; // number   

console.log(a); // undefined
let a = 10; // number   