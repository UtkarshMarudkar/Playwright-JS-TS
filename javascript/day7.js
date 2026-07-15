// loops
// while loop - executes a block of code as long as a specified condition is true
// do while loop - executes a block of code once, and then repeats the loop as long as a specified condition is true
// for loop - executes a block of code a specified number of times

const { backup } = require("node:sqlite");

// while loop = when we check the condition before executing the block of code

/* 
let a = 1 ;
while (a <= 5){
    if (a == 3){
        break; // exit the loop when a is 3
    }
    console.log(a);
    a++;
}
*/

let a = 1 ;
while (a <= 5){
    a++;
    if (a == 3){
        continue; // skip the current iteration when a is 3
    }
    console.log(a);
}

// do while loop = when we execute the block of code at least once, and then check the condition

/*
let b = 10 ;
do {
    console.log(b);
    b = b+1;
    // or b++;
} while ( b <= 5);
*/


// for loop = when we know the number of iterations in advance

for (let k = 1; k<=5; k++){
    if (k ==3){
        continue; // skip the current iteration when k is 3
    }
    console.log(k);
}

// break and continue statements
// break statement - used to exit a loop or switch statement prematurely
// continue statement - used to skip the current iteration of a loop and continue with the next iteration

// for each loop - used to iterate over the elements of an array or collection
// off

// what is array? - 

// let ab = [20, 30, 40, 50, 60]
// console.log(ab);

// array starts with 0 index

// for each loop - we use of in it // - used to iterate over the elements of an array or collection

let ab = [20, 30, 40, 50, 60]

for (let k of ab){
    console.log(k);
}

//

let ac = [21, 31, 41, 51, 61];
console.table(ac);