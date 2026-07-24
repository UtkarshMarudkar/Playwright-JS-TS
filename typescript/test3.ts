// Interface 

interface employee{
    // readonly id: number,                                        // readonly id - like const - cant change
    id: number,
    name: string,
    salary?: number                                            // ? = non mandatory
}   // mandatory to provide values if you choose interface

let emp:employee = {
    id: 1020,
    name: "utkarsh",
    salary: 1000000000000000
}

emp.id = 102;
emp.name = "cat";


// Type


type sport = {
    id: number,
    name: string,
    salary: number;

}

const abc : sport = {
    id: 5,
    name: "xyz",
    salary: 500000
}  

type ID = string | number;
let empID = 5;

let stdID: ID;
let masterID: ID;