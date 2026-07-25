import { test, expect } from '@playwright/test';
import users from '../test-data/users.json' with { type:"json" };

for (let user of users) {
  test(`test ${user.username}`, async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('users.username');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('users.password');
    await page.locator('form').click();
    await page.locator('[data-test="login-button"]').click();
    // await page.locator('[data-test="inventory-item-description"]').first().click();
    // await page.locator('[data-test="item-4-img-link"]').click();
    // await page.locator('[data-test="add-to-cart"]').click();
    // await page.locator('[data-test="back-to-products"]').click();
    // await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    // await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    // await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
    // await page.locator('[data-test="product-sort-container"]').selectOption('az');
    // await page.getByRole('button', { name: 'Open Menu' }).click();
    // await page.locator('[data-test="logout-sidebar-link"]').click();
  });
}



