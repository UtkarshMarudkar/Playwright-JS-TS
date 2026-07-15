
function click(element){
        let p1 = new Promise((resolve, reject) =>{
            setTimeout(() => 
        {
            console.log(element, "Clicked");
            resolve();
        }, 5000);
    })
    return p1;
}

function fill(element, text){
        let p2 = new Promise((resolve, reject) =>{
            setTimeout(() => 
        {
            console.log(element, "filled with", text);
            resolve();
        }, 1000);
    })
    return p2;
}

// click("login link").then(()=>{
//     return fill("username", "user1")
// }).then(() =>{
//     return fill("password", "pass1")
// }).then(() =>{
//     click("login button")
// }).catch(() =>{
//     console.log("Issue Found");
// })

// await = i am waiting for function to return me  promise status
// need to use async to use await - it is always be inside in async function
// await always use with function which is return promise

async function loginflow(){
    try{
        await click("login link");
        await fill("username", "user1");
        await fill("password", "pass1");
        await click("login flow")
    }catch(err){
        console.log("error", err)
    }finally{
        console.log(" I am Finally")
    }
}
loginflow();