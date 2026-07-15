// high oder function 2nd type - 

// function double(doublevalue){
//     return doublevalue * 2;
// }

// function tripple(tripplevalue){
//     return tripplevalue * 3;
// }

// console.log(double(10));
// console.log(tripple(10));

// --------------------------------------------------------------------------------------

// function multiplier(multipliervalue){
//     let give = function mutiply(mulvalue){
//         return multipliervalue * mulvalue;
//     }
//     return give;
// }

// let double = multiplier(2);
// let tripple = multiplier(3);

// console.log(double(40));
// console.log(tripple(40));

//------------------------------------------------------------------------------------------

// loginpage
// loginpage: user login 
// paymentpage: user sent payment to xyz

// closures

function createLogger(module){
    let logger = function log(msg){
        console.log(`${module}: ${msg}`)
    }
    return logger;       
}

let loginLoggor = createLogger("LoginPage");
loginLoggor("This is a login page");
loginLoggor("entering abcd as username");

let PayLoggor = createLogger("PaymentPage");
PayLoggor("This is a login page");
PayLoggor("entering abcd as username");