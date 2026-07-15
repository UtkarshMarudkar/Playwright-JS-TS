
import { test, expect } from "playwright/test";
import userData from '../test-data/userData.json' with {type: 'json'};

for (let data of userData){
    test (`test ${data.scenario}`, async ({page}) =>{
    await page.goto("https://www.saucedemo.com"),{timeout: 60000};
    // await page.goto("https://www.saucedemo.com", { timeout: 60000 });
    await expect(await page.getByPlaceholder("Username")).toBeVisible();
    await page.getByPlaceholder("Username").fill(data.username1);
    await expect(await page.getByPlaceholder("Password")).toBeVisible();
    await page.getByPlaceholder("Password").fill(data.password);
    await expect(await page.locator("[value='Login']")).toBeVisible();
    await page.locator("[value='Login']").click();
    const errmsg = await page.locator("[data-test='error']").textContent();

    });
}