# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alert.spec.js >> Handle Alert
- Location: tests\alert.spec.js:4:1

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:5500/html/test1.html
Call log:
  - navigating to "http://127.0.0.1:5500/html/test1.html", waiting until "load"

```

# Test source

```ts
  1  | 
  2  | import { test, expect } from "playwright/test";
  3  | 
  4  | test("Handle Alert", async({page}) => {
> 5  |     await page.goto("http://127.0.0.1:5500/html/test1.html")
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:5500/html/test1.html
  6  | 
  7  |     // trigger one event
  8  |     let alertWait = page.waitForEvent("dialog"); // should be passed before click.
  9  |     await page.getByText("Show Alert").click();
  10 |     let alert = await alertWait;
  11 |     await page.waitForTimeout(2000);
  12 |     await alert.accept();   // click on OK buttion
  13 |     //await alert.dismiss();    // click on cancle button
  14 |     //await page.waitForTimeout(5000);
  15 |     //await page.getByPlaceholder("goToAmazon")
  16 | 
  17 | });
  18 | 
  19 | test("Handle Window", async({page}) => {
  20 |     await page.goto("http://127.0.0.1:5500/html/test1.html")
  21 | 
  22 |     // trigger one event
  23 |     let newWindow = page.waitForEvent("popup"); 
  24 |     await page.getByText("Go to Amazon").click();
  25 |     let windw = await newWindow;
  26 |     await page.waitForTimeout(2000);
  27 |     console.log(await windw.title());
  28 |     await windw.getByPlaceholder("Search Amazon").fill("Phone");
  29 |     await windw.getByPlaceholder("Search Amazon").press("Enter");
  30 |     await windw.waitForTimeout(3000);
  31 | });
```