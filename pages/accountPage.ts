import { Page } from "@playwright/test";

export default class AccountPage {
    constructor(public page: Page){}

    
    async clickExpandMenu(){
        await this.page.locator("button[class='action switch']").nth(0).click()
    }

    async clickSignOutExpanded(){
        await Promise.all([
            this.page.waitForURL("https://magento.softwaretestingboard.com/customer/account/logoutSuccess/"),
            this.page.getByText("Sign Out").nth(0).click()
        ])
    }

    async clickMyWishListExpanded(){
        await Promise.all([
            this.page.waitForURL("https://magento.softwaretestingboard.com/wishlist/"),
            this.page.getByText("My Wish List").nth(0).click()
        ])
    }

    async clickMyAccountExpanded(){
        await Promise.all([
            this.page.waitForURL("https://magento.softwaretestingboard.com/customer/account/"),
            this.page.getByText("My Account").nth(0).click()
        ])
    }
    
    async clickEditContactInformation(){
        await Promise.all([
            this.page.waitForURL("https://magento.softwaretestingboard.com/customer/account/edit/"),
            this.page.locator("a[class='action edit']").nth(0).click()
        ])
    }

    async clickChangePassword(){
        await Promise.all([
            this.page.waitForURL("https://magento.softwaretestingboard.com/customer/account/edit/changepass/1/"),
            this.page.click("a[class='action change-password']")
        ])
    }

    async clickManageAddreses(){
        await Promise.all([
            this.page.waitForURL("https://magento.softwaretestingboard.com/customer/address/new/"),
            this.page.click("//span[text()='Manage Addresses']")
        ])
    }

    async clickBillingAddress(){
        await Promise.all([
            this.page.waitForURL("https://magento.softwaretestingboard.com/customer/address/new/"),
            this.page.click("//span[text()='Manage Addresses']")
        ])
    }
    
    async clickMyOrders(){
        await Promise.all([
            this.page.waitForURL("https://magento.softwaretestingboard.com/sales/order/history/"),
            this.page.getByRole('link', { name: 'My Orders' }).click()
        ])
    }

    async clickMyWishlist(){
        await Promise.all([
            this.page.waitForURL("https://magento.softwaretestingboard.com/wishlist/"),
            this.page.getByRole('link', { name: 'My Wish List' }).click()
        ])
    }

    async clickMyDownloads(){
        await Promise.all([
            this.page.waitForURL("https://magento.softwaretestingboard.com/downloadable/customer/products/"),
            this.page.getByRole('link', { name: 'My Downloadable Products' }).click()
        ])
    }

    async clickMyAccount(){
        await Promise.all([
            this.page.waitForURL("https://magento.softwaretestingboard.com/customer/account/"),
            this.page.getByRole('link', { name: 'My Account' }).click()
        ])
    }

}