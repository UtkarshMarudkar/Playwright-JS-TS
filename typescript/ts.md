
// TS is superset of js
ts -> compiler -> js -> run

ts is statically typed language

let a = 1;
a = "abcd"  // not work

right one ---

let a:number = 1;    // a: Number | 
a = 20


js is dynamicallt typed language

let a = 1;
a = "acdc"   // will work
-------------------------------------------

installation

-- npm install typescript  // ts & ts compiler will install

-- npm install tsx   // will install - your execute code


----------

npx tsc test1.ts      -- will compile code first 

npx tsx test1.ts       --- will execute code after the compilation

------------------------- IMP ------------------------

crete ts config file

-->  npx tsc --init    --- run at root level

--> npx tsc  -> compile