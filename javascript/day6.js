// conditional statements & Switch case statements

// if, else, else if statement

let age  = 21;
let catg = "";

if (age < 18) {
    catg = "child";
}else if (age >= 18 && age <= 50) {
    catg = "adult";
}else if (age > 50 && age <=65) {
    catg = "senior citizen";
}else {
    catg = "super senior citizen";
}
console.log("age is " + age + " and category is " + catg);

// user input -  npm install prompt-sync
// const prompt = require("prompt-sync")();
// let age1 = prompt("Enter your age: ");
// console.log("age is " + age1 + " and category is " + catg);

const prompt = require("prompt-sync")();
let age1 = parseInt(prompt("Enter your age: "));
let catg1 = "";

if (!Number.isNaN(age1)) {
    if (age1 < 18) {
        catg1 = "child";
    }else if (age1 >= 18 && age1 <= 50) {
        catg1 = "adult";
    }else if (age1 > 50 && age1 <=65) {
        catg1 = "senior citizen";
    }else if (age1 > 65)    {
        catg1 = "super senior citizen";
    }console.log("age is " + age1 + " and category is " + catg1);
}else {
    console.log("invalid age format - age should be a number");
}

// switch case statement
//const prompt = require("prompt-sync")();
let day = parseInt(prompt("Enter a day number (1-14): "));
let dayName = "";   

switch (day) {
    case 1:
    case 8:
        dayName = "Monday"; 
        break;
    case 2:
    case 9:
        dayName = "Tuesday";
        break;
    case 3:
    case 10:
        dayName = "Wednesday";
        break;
    case 4:
    case 11:
        dayName = "Thursday";
        break;
    case 5:
    case 12:
        dayName = "Friday";
        break;
    case 6:
    case 13:
        dayName = "Saturday";
        break;
    case 7:
    case 14:
        dayName = "Sunday";
        break;
    default:
       dayName = "Invalid day";
}
console.log("Day is " + day + " and its name is " + dayName);