
import { test, expect } from "playwright/test";

test("Handle Alert", async({page}) => {
    await page.goto("http://127.0.0.1:5500/html/test1.html")

    // trigger one event
    let alertWait = page.waitForEvent("dialog"); // should be passed before click.
    await page.getByText("Show Alert").click();
    let alert = await alertWait;
    await page.waitForTimeout(2000);
    await alert.accept();   // click on OK buttion
    //await alert.dismiss();    // click on cancle button
    //await page.waitForTimeout(5000);
    //await page.getByPlaceholder("goToAmazon")

});

test("Handle Window", async({page}) => {
    await page.goto("http://127.0.0.1:5500/html/test1.html")

    // trigger one event
    let newWindow = page.waitForEvent("popup"); 
    await page.getByText("Go to Amazon").click();
    let windw = await newWindow;
    await page.waitForTimeout(2000);
    console.log(await windw.title());
    await windw.getByPlaceholder("Search Amazon").fill("Phone");
    await windw.getByPlaceholder("Search Amazon").press("Enter");
    await windw.waitForTimeout(3000);
});