import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../../Pages/loginpage.js";

LoginPage ;

Given ("user open {string} link", async function (url) {
    
    await this.page.goto(url);
    this.LoginPage = new LoginPage(this.page);
});

When("user enter {string} in username box", async function(username){

    // await this.page.locator('[data-test="username"]').click();
    // await this.page.locator('[data-test="username"]').fill(username);

    this.LoginPage.enterUserName(username);

});

When("user enter {string} in password box", async function(password){

    // await this.page.locator('[data-test="username"]').press('Tab');
    // await this.page.locator('[data-test="password"]').fill(password);

    this.LoginPage.enterPassword(password);
});

When("user click on sign in button", async function(){

    await this.page.locator('[data-test="login-button"]').click();

});

Then("user verify error msg {string}", async function(errmsg){

});

Then("user verify dashboard", async function(){

});