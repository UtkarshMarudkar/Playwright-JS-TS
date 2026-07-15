import { test, expect, chromium } from '@playwright/test';  // ready made test =is a fun which create test case, expect which used for result.

// function printnm(){
//     console.log("Utkarsh");
// }
    
// test("First test case", printnm);

// test("First test case", ()=>{
//     console.log("Utkarsh");
// });


// Fixtures - Already created object in  plywright.
// UI level 3 main fixture
// Browsers - browser service
// Context - cookie free session - complete brand new page/session in simple lang
// Page - tabs

// --------------------------------------------------------------------------------------

// async function fixtureDemo(){
//     const browser = await chromium.launch({headless:false}); // service

//     // context 1 - browser 1- seperate window
//     const context1 = await browser.newContext();
//     const page1 = await context1.newPage();            // browser 1 tab 1 
//     await page1.goto("https://www.google.com")

//     const page2 = await context1.newPage();        // browser 1 tab  2
//     await page2.goto("https://www.amazon.com")

//     // context 2 - browser 2 - separate window
//     const context2 = await browser.newContext();
//     const page3 = await context2.newPage();         // browser 2 tab 1
//     await page3.goto("https://www.facebook.com")

//     const page4 = await context2.newPage();
//     await page4.goto("https://www.flipkart.com")

// }

// test("First test case", fixtureDemo);

// ------------------------------------------------------------------------------


test("First test case", async ()=>{
    const browser = await chromium.launch({headless:false}); // service

    // context 1 - browser 1- seperate window
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();            // browser 1 tab 1 
    await page1.goto("https://www.google.com")

    const page2 = await context1.newPage();        // browser 1 tab  2
    await page2.goto("https://www.amazon.com")

    // context 2 - browser 2 - separate window
    const context2 = await browser.newContext();
    const page3 = await context2.newPage();         // browser 2 tab 1
    await page3.goto("https://www.facebook.com")

    const page4 = await context2.newPage();
    await page4.goto("https://www.flipkart.com")
});
