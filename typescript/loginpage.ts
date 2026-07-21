
import { expect, type Page } from "@playwright/test";

export class LoginPage{

    username:any;
    password:any;
    page:any;

    constructor(page:Page){
        this.page = page;
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");

    }

    async enterUserName(username:string) {
        await expect(this.username).toBeVisible();
        await this.username.fill(username);
    }

    async enterPassword(password:string) {
        await expect(this.password).toBeVisible();
        await this.password.fill(password);
    }
}

//  