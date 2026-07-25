import { expect } from "@playwright/test";
export class LoginPage{

    constructor(page){
        this.page = page;
        // this.username = page.locator("Username");
        // this.password = page.locator("Password");

        this.username = page.locator('[data-test="username"]');   
        this.password = page.locator('[data-test="password"]');   
    }

    async enterUserName(username) {
        await this.username.fill(username);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }
}