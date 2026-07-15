
import { test, expect } from '@playwright/test';

test("api learning @api", async({request}) =>{
    let authEndpoint = "http://localhost:4000/api/auth/login";
    let authResponse = await request.post(authEndpoint,{
        data:{
        "email": "admin@acme.test",
        "password": "admin123"
    }
    });
    expect(await (await authResponse).status()).toBe(200);
    let json = await authResponse.json();
    console.log(json.data.token);
    let token = json.data.token;

    let userEndpoint = "http://localhost:4000/api/users";
    let userResponse = await request.post(userEndpoint,{
        headers:{
            "Authorization" : `Bearer ${token}`,
            "Content-Type" : "application/json"
        },
        data:{
            "firstName": "Jay",
            "lastName": "Rao",
            "email": "j@gmail.com",
            "phone": "9999999999",
            "role": "QA",
            "status": "Active"
        }
    });

    expect(await (await userResponse).status()).toBe(201);
    let userjson = await userResponse.json();
    console.log(userjson.data.token);
});