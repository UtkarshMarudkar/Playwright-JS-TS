# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test2.spec.js >> my second test
- Location: tests\test2.spec.js:9:1

# Error details

```
ReferenceError: expect is not defined
```

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('[data-test=\'error\']')
Expected: "Epic sadface: Username and password do not match any user in this service"
Received: "Epic sadface: Username is required"

Call log:
  - Expect "soft toHaveText" with timeout 5000ms
  - waiting for locator('[data-test=\'error\']')
    4 × locator resolved to <h3 data-test="error">…</h3>
      - unexpected value "Epic sadface: Username is required"

```

```yaml
- 'heading "Epic sadface: Username is required" [level=3]':
  - button
  - text: "Epic sadface: Username is required"
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from "playwright/test";
  3  | import { LoginPage } from "../Pages/loginpage";
  4  | 
  5  | test.beforeEach( async({page}) =>{
  6  |     await page.goto("https://www.saucedemo.com"),{timeout: 60000};
  7  | })
  8  | 
  9  | test("my second test", async({page}) => {
  10 |     let loginPageObject = new LoginPage(page);
  11 |     // goto - open the page
  12 |     // playwright element locator default 30 sec
  13 |     // playwright asserttions default 5 sec 
  14 |     // Locator - Placeholder, label, title, role, testid, text, alttext
  15 |     // Locator - xpath and css selector
  16 | 
  17 | 
  18 |     // let loginPageObject = new LoginPage(page);
  19 | 
  20 |     //await page.goto("https://www.saucedemo.com"),{timeout: 60000};
  21 |     loginPageObject.enterUserName("abcd");
  22 |     loginPageObject.enterPassword("xyz");
  23 |     expect(await page.locator("[value='Login']")).toBeVisible();
  24 |     await page.locator("[value='Login']").click();
  25 |     const errmsg = await page.locator("[data-test='error']").textContent("")
  26 | 
  27 |     // assertion = validation
  28 |     // expect calls the validation library for assertion = validation
  29 |     //expect(errmsg).toBe("Epic sadface: Username and password do not match any user in this service")   // there are multiple functions using "toBe"
  30 |     // or 2nd way
  31 | 
  32 |     expect(await page.locator("[data-test='error']")).toBeVisible();
> 33 |     expect.soft(await page.locator("[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service");
     |                                                            ^ Error: expect(locator).toHaveText(expected) failed
  34 |     
  35 |     // two types of assertions
  36 |     // 1. Hard assertion = If test case has failed then playwright not able to run further script
  37 |     // 2. Soft assertion = as opposite of hard, you can move further via using soft asssertions
  38 |     // syntax = expect.soft      ----  only difference is of soft word.
  39 | 
  40 | 
  41 | })
  42 | 
  43 | 
  44 | test("second TC2", async({page})=> {
  45 |     let loginPageObject = new LoginPage(page);
  46 |     //await page.goto("https://www.saucedemo.com"),{timeout: 60000};
  47 |     loginPageObject.enterUserName("standard_user");
  48 |     loginPageObject.enterPassword("secret_sauce");
  49 |     expect(await page.locator("[value='Login']")).toBeVisible();
  50 |     await page.locator("[value='Login']").click();                                  // .hover - will scrolldown - focous.
  51 | 
  52 | 
  53 |     await page.locator("[data-test='product-sort-container']").selectOption({value: "hilo"}); // index 2 or 3      // or value = "za" or "hilo" or label = "Name (Z to A)"
  54 | 
  55 |     await page.locator("[data-test='inventory-item']").filter({hasText: "Sauce Labs Backpack"}).getByText("Add to cart").click();   
  56 |     
  57 |     await page.locator("[data-test='product-sort-container']").selectOption({value: "hilo"}); // index 2 or 3      // or value = "za" or "hilo" or label = "Name (Z to A)"
  58 |     
  59 |     await page.locator("[data-test='inventory-item']").filter({hasText: "Sauce Labs Bolt T-Shirt"}).getByText("Add to cart").click();   
  60 |     await page.waitForTimeout(15000);
  61 | 
  62 | })
  63 | 
  64 | 
  65 | // alert, multiple windows
  66 | 
  67 | 
```