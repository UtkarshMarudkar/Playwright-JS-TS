import { expect } from "@playwright/test";
export class LoginPage{

    constructor(page){
        this.page = page;
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");

    }

  async enterUserName(username) {
        await expect(this.username).toBeVisible();
        await this.username.fill(username);
    }

    async enterPassword(password) {
        await expect(this.password).toBeVisible();
        await this.password.fill(password);
    }
}