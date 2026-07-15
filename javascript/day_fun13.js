// setTimeout - i will execute this function after specified delay

// function printNm(){
//     console.log("Utkarsh");
// }

// function printNm1(){
//     console.log("Utkarsh1");
// }
// setTimeout(printNm, 5000);
// setTimeout(printNm1, 4000);


function click(element){
    setTimeout(() => {
        console.log(element, "Clicked");
        }, 5000);
}

function fill(element, text){
    setTimeout(() =>{
        console.log(element, "filled with", text);
    }, 2000);
}
// - user click on login linl
// eneter username
// enter pass
// click on login button
click("login link");
fill("eneter username","user1");
fill("enter password","pass1");
click("click on login button");

/// js is single threaded lang
// js triggers the function sequencially, but do not wait to finish it

// solution = Promices - day_proms13.js
