import { Page } from "@playwright/test";

export default class HomePage {
    constructor(public page: Page){}
    
    async clickSignIn(){
        await Promise.all([
            this.page.waitForURL('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/'),
            this.page.getByRole('link', { name: 'Sign In' }).click()
        ])
    }

    async clickCreateAccount(){
        await Promise.all([
            this.page.waitForURL('https://magento.softwaretestingboard.com/customer/account/create/'),
            this.page.getByRole('link', {name: 'Create an Account'}).click()
        ])
    }
}