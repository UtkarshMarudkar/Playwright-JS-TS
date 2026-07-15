// datatypes

// number - 12 , 13.4, 17.09
// 3 ways
// literal ay = 10, 20
// constructor way - let a = Number(10);
// parse way - let a = parseInt("10"), parseFloat("10.5")


/*

let a = parseInt("10");
console.log(a);
console.log(typeof a);

let b = parseInt("a10vb67");
console.log(b);
console.log(typeof b);

let c = parseInt("10vb67");
console.log(c);
console.log(typeof c);

let d = Number.MAX_SAFE_INTEGER;
console.log(d);     // 9007199254740991
console.log(typeof d);

let cd = 9007199254740991 - 2;
console.log(cd);

let xc = Number.MAX_VALUE;
console.log(xc);     // 1.7976931348623157e+308
console.log(typeof xc);

*/

// BigInt
// literal way - let a = 10n, 20n
// constructor way - let a = BigInt(10);

/*

let bigInt = BigInt("9007199254740991");
console.log(bigInt);
console.log(typeof bigInt);

let c = 9779789898987989898989898989898989898989898989898989898769876987698769876087607668n;
c = c + 1n;
console.log(c);
console.log(typeof c);

*/

// boolean - true, false
// literal way - let a = true, false
// constructor way - let a = Boolean(true), Boolean(false)
// true = non falsy values
// false = falsy values - 0, "", null, undefined, NaN

let bool = true;
console.log(bool);
console.log(typeof bool);   

let ab = Boolean(true);
console.log(ab);
console.log(typeof ab);
