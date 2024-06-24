import { Page } from "@playwright/test";

export default class SignInPage {
    constructor(public page: Page){}

    async enterEmail(email: string){
        await this.page.fill("input[id='email']", email)
    }

    async enterPassword(password: string){
        await this.page.fill("input[title='Password']", password)
    }

    async clickSignIn(){
        await this.page.click("button.action.login")
       
    }

    async clickForgotPassword(){
        await Promise.all([
            this.page.waitForURL("https://magento.softwaretestingboard.com/customer/account/forgotpassword/"),
            this.page.click("a[class='action remind']")
        ])
    }
    async clickCreateAccount(){
        await Promise.all([
            this.page.waitForURL("https://magento.softwaretestingboard.com/customer/account/create/"),
            this.page.click("a[class='action create primary']")
        ])
    }
}