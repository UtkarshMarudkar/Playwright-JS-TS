// Arrays in TS
// you can change array in runtime
let arr: (number | string ) [] = [1, 2, 3, "aa", "bb", 10, 20];
console.log(arr);

// tuple - fixed length array each position will have which datatype

let arr1 : [number,string] = [20, "abcd"]
console.log(arr1);

//

enum state{
    passed, failed, WIP, hold
}

console.log(state.passed);

enum status{
    ok = 202,
    create = 201,
    nocontent = 204
}
console.log(status.ok);

