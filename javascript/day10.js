// fuunctions - are services
// take 1 input => perform operations => op

// calculator 
// + button
// input = 2, => op - 1
// logic - curly braces
// op - 1, return


//if you run function before declaring it will host
// functions are hosted
let c = add(19,8);
// console.log(c);

// add
export function add(a,b){
    let c = a + b;
    return c;
}
let s = add(10,20);
// console.log(s);

// sub
export function sub(d,e){
    let f = d - e;
    return f;
}
let k = sub(10,20);
// console.log(k);

// mul
export function mul(x,y){
    let v = x * y;
    return v;
}
let w = mul(10,20);
// console.log(w);

// 1 function is one responsibility

// square
export function sqr(ss){
    //let sqb = ss * ss;
    let sqb = mul(ss,ss);
    return sqb;
}
let square = sqr(10);
// console.log(square);

// PI
export function pi(){
    return 3.14;
}

// area of circle = pi r * r

let radius = 12;
//let aoc = pi() *  radius*radius;
let aoc = mul(pi() , mul(radius,radius));
// console.log(aoc);
// use this in fun10.js = use export before function