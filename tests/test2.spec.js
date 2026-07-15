
import { test, expect } from "playwright/test";


test.beforeEach( async({page}) =>{
    await page.goto("https://www.saucedemo.com"),{timeout: 60000};
})

test("my second test", async({page}) => {

    // goto - open the page
    // playwright element locator default 30 sec
    // playwright asserttions default 5 sec 
    // Locator - Placeholder, label, title, role, testid, text, alttext
    // Locator - xpath and css selector


    // 

    //await page.goto("https://www.saucedemo.com"),{timeout: 60000};
    expect(await page.getByPlaceholder("Username")).toBeVisible();
    await page.getByPlaceholder("Username").fill("Abcd");
    expect(await page.getByPlaceholder("Password")).toBeVisible();
    await page.getByPlaceholder("Password").fill("password");
    expect(await page.locator("[value='Login']")).toBeVisible();
    await page.locator("[value='Login']").click();
    const errmsg = await page.locator("[data-test='error']").textContent("")

    // assertion = validation
    // expect calls the validation library for assertion = validation
    //expect(errmsg).toBe("Epic sadface: Username and password do not match any user in this service")   // there are multiple functions using "toBe"
    // or 2nd way

    expect(await page.locator("[data-test='error']")).toBeVisible();
    expect.soft(await page.locator("[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service");
    
    // two types of assertions
    // 1. Hard assertion = If test case has failed then playwright not able to run further script
    // 2. Soft assertion = as opposite of hard, you can move further via using soft asssertions
    // syntax = expect.soft      ----  only difference is of soft word.


})


test("second TC2", async({page})=> {
    //await page.goto("https://www.saucedemo.com"),{timeout: 60000};
    expect(await page.getByPlaceholder("Username")).toBeVisible();
    await page.getByPlaceholder("Username").fill("standard_user");
    expect(await page.getByPlaceholder("Password")).toBeVisible();
    await page.getByPlaceholder("Password").fill("secret_sauce");
    expect(await page.locator("[value='Login']")).toBeVisible();
    await page.locator("[value='Login']").click();                                  // .hover - will scrolldown - focous.


    await page.locator("[data-test='product-sort-container']").selectOption({value: "hilo"}); // index 2 or 3      // or value = "za" or "hilo" or label = "Name (Z to A)"

    await page.locator("[data-test='inventory-item']").filter({hasText: "Sauce Labs Backpack"}).getByText("Add to cart").click();   
    
    await page.locator("[data-test='product-sort-container']").selectOption({value: "hilo"}); // index 2 or 3      // or value = "za" or "hilo" or label = "Name (Z to A)"
    
    await page.locator("[data-test='inventory-item']").filter({hasText: "Sauce Labs Bolt T-Shirt"}).getByText("Add to cart").click();   
    await page.waitForTimeout(15000);

})


// alert, multiple windows

