import { pi, mul } from "./day10.js";

let radius = 12;
//let aoc = pi() *  radius*radius;
let aoc = mul(pi() , mul(radius,radius));
console.log(aoc);


// function are variable in js
// print my name 


let printNm = function printerNm(){
    console.log("utkarsh");
}

printNm();

let pr = printNm;
pr();