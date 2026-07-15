// opertators - are those entity who define the operation to be performed on the operands.

// types of operators in javascript
// 1. arthimetic operators - +, -, *, /, %, ++, --
// 2. assignment operators - =, +=, -=, *=, /=, %=
// 3. comparison operators - ==, ===, !=, !==, >, <, >=, <=
// 4. logical operators - &&, ||, !
// 5. bitwise operators - &, |, ^, ~, <<, >>, >>>
// 6. ternary operator - condition ? expression1 : expression2
// 7. typeof operator - typeof operand
// 8. delete operator - delete object.property, delete object[index], delete variable (not recommended)
// 9. in operator - property in object, element in array
// 10. instanceof operator - object instanceof constructor

//

let a = 8
let b = 24
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log((a/b).toFixed(2));
console.log(a%b);

// BODMAS or Operator precedence - Bracket, Order, Division, Multiplication, Addition, Subtraction

console.log((2+8/9*8+4-3).toFixed(2));   // 2 + 7.11 + 4 - 3 = 10.11

// relational operators - >, <, >=, <=, ==, ===, !=, !==  --- returns boolean value

console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 >= 3);   // true
console.log(5 <= 3);   // false
console.log(5 == 5);   // true
console.log(5 == "5"); // true - reason - data type is different but value is same
console.log(5 === 5);  // true
console.log(5 === "5"); // false - reason - data type is different & value is same
console.log(5 != 3);   // true
console.log(5 != 5);   // false
console.log(5 !== 5);  // false
console.log(5 !== "5"); // true - reason - data type is different & value is same

// === checks for value and data type both
// == checks for value only
// != checks for value only
// !== checks for value and data type both  

let aa = 10
let bb = "20";
console.log(aa + bb);   // 1020 - reason - when we use + operator with string it performs concatenation
console.log(aa - bb);   // -10 - reason - when we use - operator with string it performs subtraction and converts string to number if possible otherwise returns NaN
console.log(aa * bb);   // 200 - reason - when we use * operator with string it performs multiplication and converts string to number if possible otherwise returns NaN
console.log(aa / bb);   // 0.5 - reason - when we use / operator with string it performs division and converts string to number if possible otherwise returns NaN
console.log(aa % bb);   // 10 - reason - when we use % operator with string it performs modulus and converts string to number if possible otherwise returns NaN       
console.log(10 + "20" + 30);   // 102030 - reason - when we use + operator with string it performs concatenation and converts number to string
console.log(10 + 20 + "30");   // 3030 - reason - when we use + operator with string it performs concatenation and converts number to string    
console.log(10 + "20" - 30);   // -20 - reason - when we use - operator with string it performs subtraction and converts string to number if possible otherwise returns NaN
console.log(10 + 20 + "30" + 40);   // 303040 - reason - when we use + operator with string it performs concatenation and converts number to string

// logical operators - &&, ||, !  --- returns boolean value
// && - logical AND operator - returns true if both operands are true, otherwise returns false
// || - logical OR operator - returns true if at least one operand is true, otherwise returns false
// ! - logical NOT operator - returns true if operand is false, otherwise returns false

// truth table for && operator
// true && true = true
// true && false = false
// false && true = false
// false && false = false   

// true || true = true
// true || false = true
// false || true = true
// false || false = false


    
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);  // false       
console.log(false && false); // false
console.log(true || true);    // true
console.log(true || false);   // true
console.log(false || true);  // true
console.log(false || false); // false
console.log(!true);   // false
console.log(!false);  // true       


