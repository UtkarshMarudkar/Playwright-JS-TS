// promices - they will return  you some status - 1. pending 2. fulfilled(resolve) 3. rejected

const p1 = new Promise((resolve, reject) => { // (a,b) =>
        resolve("Hello"); // reject("Hello"); 
    });

// fulfilled - then
// reject - catch

p1.then((msg) => {
    console.log("Then ->", msg);
}).catch((msg) =>{
    console.log("Catch ->", msg);
})