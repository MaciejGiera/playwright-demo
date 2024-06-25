import { Page } from "@playwright/test";

export default class WhatsNewPage {
    constructor(public page: Page){}

    async gotoWhatsNewPage(){
        await this.page.goto('https://magento.softwaretestingboard.com/what-is-new.html')
    }
    async clickWomenHoodiesSweatshirts(){
        await Promise.all([
            this.page.waitForURL('https://magento.softwaretestingboard.com/women/tops-women/hoodies-and-sweatshirts-women.html'),
            this.page.locator("//a[text()='Hoodies & Sweatshirts']").nth(0).click()
        ])
    }

    async clickWomenJackets(){
        await Promise.all([
            this.page.waitForURL('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html'),
            this.page.locator("//a[text()='Jackets']").nth(0).click()
        ])
    }

    async clickWomanTees(){
        await Promise.all([
            this.page.waitForURL('https://magento.softwaretestingboard.com/women/tops-women/tees-women.html'),
            this.page.locator("//a[text()='Tees']").nth(0).click()
        ])
    }
    
    async clickWomenBrasTanks(){
        await Promise.all([
            this.page.waitForURL('https://magento.softwaretestingboard.com/women/tops-women/tanks-women.html'),
            this.page.locator("//a[text()='Bras & Tanks']").click()
        ])
    }

    async clickWomenPants(){
        await Promise.all([
            this.page.waitForURL('https://magento.softwaretestingboard.com/women/bottoms-women/pants-women.html'),
            this.page.locator("//a[text()='Pants']").nth(0).click()
        ])
    }

    async clickWomanShorts(){
        await Promise.all([
            this.page.waitForURL('https://magento.softwaretestingboard.com/women/bottoms-women/shorts-women.html'),
            this.page.locator("//a[text()='Shorts']").nth(0).click()
        ])
    }

    async clickMenHoodiesSweatshirts(){
        await Promise.all([
            this.page.waitForURL('https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html'),
            this.page.locator("//a[text()='Hoodies & Sweatshirts']").nth(1).click()
        ])
    }
    
    async clickMenJackets(){
        await Promise.all([
            this.page.waitForURL('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html'),
            this.page.locator("//a[text()='Jackets']").nth(1).click()
        ])
    }

    async clickMenTees(){
        await Promise.all([
            this.page.waitForURL('https://magento.softwaretestingboard.com/men/tops-men/tees-men.html'),
            this.page.locator("//a[text()='Tees']").nth(1).click()
        ])
    }

    async clickMenTanks(){
        await Promise.all([
            this.page.waitForURL('https://magento.softwaretestingboard.com/men/tops-men/tanks-men.html'),
            this.page.locator("//a[text()='Tanks']").click()
        ])
    }

    async clickMenPants(){
        await Promise.all([
            this.page.waitForURL('https://magento.softwaretestingboard.com/men/bottoms-men/pants-men.html'),
            this.page.locator("//a[text()='Pants']").nth(1).click()
        ])
    }
    
    async clickMenShorts(){
        await Promise.all([
            this.page.waitForURL('https://magento.softwaretestingboard.com/men/bottoms-men/shorts-men.html'),
            this.page.locator("//a[text()='Shorts']").nth(1).click()
        ])
    }
}