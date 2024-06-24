import { Page } from "@playwright/test";

export default class CreateAccountPage {
    constructor(public page: Page){}

    async enterFirstName(firstName: string){
        await this.page.fill("input[name='firstname']", firstName)
    }

    async clearFirstName(){
        await this.page.locator("input[name='firstname']").clear()
    }

    async enterLastName(lastName: string){
        await this.page.fill("input[name='lastname']", lastName)
    }

    async clearLastName(){
        await this.page.locator("input[name='lastname']").clear()
    }

    async enterEmail(email: string){
        await this.page.fill("input[name='email']", email)
    }

    async clearEmail(){
        await this.page.locator("input[name='email']").clear()
    }

    async enterPassword(password: string){
        await this.page.fill("input[title='Password']", password)
    }

    async clearPassword(){
        await this.page.locator("input[title='Password']").clear()
    }

    async enterConfirmPassword(password: string){
        await this.page.fill("input[title='Confirm Password']", password)
    }

    async clearConfirmPassword(){
        await this.page.locator("input[title='Confirm Password']").clear()
    }

    async clickCreateAccount(){
        await this.page.click("button[title='Create an Account']")
    }
}