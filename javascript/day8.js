// array index entity - 

//let ar = [10,20,30,40];

/* console.table(ar[3]);

for(let k of ar){
    console.log(k);
}
*/

// ar.push(20);
// ar.unshift(87);
// ar.unshift(80);
// ar.push(56);
// ar.pop();
// ar.shift();
// console.log(ar);

// push - add value at the last
// pop - remove last value
// unshift - add value to start
// shift  - remove from start
// splice - add and remove from mid -3 parameters - 
// splice.(index, deletecount or 0, number to add or you can add multiple value using comma ,)
// if you want to delete - splice.(index,0)

// ar.splice(2,0,22);
// console.log(ar)

// ar.splice(2,1,42);
// console.log(ar)

// let ar = [10,270,30,40];

// //if you use ort it will consider it as string and give wrong op
// ar.sort((a,b) => a-b); // arrow
// console.log(ar)

// 2D array - a array conatin 2 or multiple array   - best eg is excel sheet
// use case marks eg


std1m = [10,30,89,90];
std2m = [56,98,3,89];

totalstdmarks = [std1m, std2m]
console.log(totalstdmarks);
console.log(totalstdmarks[0,1]);
console.log(totalstdmarks[0][2], totalstdmarks[1][3]);