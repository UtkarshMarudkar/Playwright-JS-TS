import { After, Before } from "@cucumber/cucumber";
import { chromium } from "playwright";
// import { Before } from "node:test";

Before(async function(){
    // console.log("I am before hook");
    this.browser = await chromium.launch({
        headless: false
    });

    this.context = await this.browser.newContext();
    this.page = await this.browser.newPage();

 
});

After(async function(){
    // console.log("I am after hook");
    await this.page.close();
    await this.context.close();
    await this.browser.close();
});

// cucumber-js give you intresting concept as following ---
// Global Watch - word object - if you use this. it will carry in global watch then you can use it anywhere
// it is impimented in the cucumber - global watch - this.