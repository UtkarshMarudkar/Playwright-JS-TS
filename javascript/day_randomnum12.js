// random numbers

// there is a Math class present in the JS and which also has random function - Math.random()
// floor function - eg 20.9 - will print 29
// cell function - eg 20.1 - will print 30

// need random number between 1 to 100

// for (let i = 0; i < 10; i++){
//     console.log(Math.floor(Math.random() * 100));
// }

// need random number between 100 to 500
// range 500 - 100 = 400

// for (let i = 100; i < 500; i++){
//     console.log(100 + Math.floor(Math.random() * 400));
// }

// or with 2nd logic

// let start = 100;
// let end = 500;

// for (let i = 100; i < 500; i++){
//     console.log(start + Math.floor(Math.random() * (end - start)));
// }

// what if yoy do not want 5 in above op

// let ar = [0,1,2,3,4,6,7,8,9]  // do not add 5

// let start = 0;
// let end = ar.length;
// let ttlDigit = 4

// for (let k = 1; k <= 10; k++){
//     let randomnum = "";
//     for (let i = 0; i < ttlDigit; i++){
//         let index = start + Math.floor(Math.random() * (end - start));
//         randomnum = randomnum + ar[index];
//     }
//     console.log(randomnum);
// }

// ---------------------------

// char

// let ar = ['a','b','c','x','d','z'] 

// let ar = "abckhkiytfiytfkyu87658765876579";   // js has feature of if you enterd a string it automatically converts it into the array

// let start = 0;
// let end = ar.length;
// let ttlDigit = 10

// for (let k = 1; k <= 10; k++){
//     let randomnum = "";
//     for (let i = 0; i < ttlDigit; i++){
//         let index = start + Math.floor(Math.random() * (end - start));
//         randomnum = randomnum + ar[index];
//     }
//     console.log(randomnum);
// }

// create function for upper code

function createRandom(totalChar, randomString){
   
   let random = function generateRandom(){
        let start = 0;
        let end = randomString.length;

        let randomnum = "";
        for (let i = 0; i < totalChar; i++){
            let index = start + Math.floor(Math.random() * (end - start));
            randomnum = randomnum + randomString[index];
        }
        return randomnum;
    }
    return random;
}

let lowerCase5char = createRandom(5,'khglhvkjyv');
console.log(lowerCase5char());

let lowerCase5Numeric = createRandom(5,'5868976987698760876jgvkygi6ti7gkuyg');
console.log(lowerCase5Numeric());

let upperCase5char = createRandom(5,'khglhvkjyv' + 'khgvkhvkhgv'.toUpperCase());
console.log(upperCase5char());