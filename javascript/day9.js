// JS -  Java Script Object Notation

// const marks = [48,49,50,51]

// // key values 
// // object{}, array []

// const marks1 = {
//     "maths" : 40,
//     "science" : 50,
//     "gk" : 80
// }

// console.log(marks1["science"])

const userprofile = 
{
    "name" : "utkarsh",
    "city" : "CSN",
    "education" : 
    [
        {
            "educationlevel" : "10th",
            "marks" : 90,
            "percentage" : 90,
            "school" : {
                "name" : "st law",
                "address" : "cidco",
                "contact" : 888888888,
                "principal" : "ram"
            }
        },
        {
            "educationlevel" : "11th",
            "marks" : 80,
            "percentage" : 80,
            "school" : {
                "name" : "st m",
                "address" : "cidco2",
                "contact" : 888687435488,
                "principal" : "sam"
            }
        }
    ]
}

console.log("name");
console.log(userprofile["education"][0]["school"]["address"]);
console.log(userprofile["education"][1]["school"]["address"]);