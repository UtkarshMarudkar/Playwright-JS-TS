// cache mgt - session storage

import { test, expect } from "playwright/test";

test.use({                                                     // 2nd step
    storageState: "auth/cache.json"                       
});

test("cache", async({page}) =>{

    await page.goto("https://www.sonyliv.com/signin");
    //await page.waitForTimeout(30000);
    //await page.pause();                                 // stop code after using page.pause

    // await page.context().storageState({                     // 1st step
    //     path: 'auth/cache.json'
    // });

});
