// function is variable in JS
// high order function
// call-back function


let starPrinter = function (content){ // annonymous function
    console.log("*****", content, "*****");
}

let hashPrinter = (content) => { // arrow function
    console.log("#####", content, "######");
}

// starPrinter("utkarsh");
// hashPrinter("utkarsh");

function add(a,b,p){
    let c = a + b;
    p(c);
}
// add - fun name
// a,b parameter given while writing function
// un body


// arguments - given while calling function
let k = 10;
let m = 20;

add (k,m,starPrinter);
add (30, 90, hashPrinter);
