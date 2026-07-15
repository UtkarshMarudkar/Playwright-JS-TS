// refactor meaning - to improve the code without changing its functionality - to make it more readable, maintainable, and efficient

let a = 10;
var b = 20;
{
    let a = 30;
    var b = 40;
    const c = 50;
    d = 60; 
    console.log("1", a, b, c, d);
}
console.log("2", a, b);
{
    //console.log("3", d);  - hosting error - cannot access d before initialization or d is not defined - because d is not declared with var, let, const it becomes an implicit global variable but it is not hoisted
    let d = 70;
    console.log("4", d);
}

    console.log("5", d);

    