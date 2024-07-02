import { Page } from "@playwright/test";

export default class ProductListPage {
    constructor(public page: Page){}

    async clickNthProduct(index: number){
        await this.page.locator("div[data-container='product-grid'] img").nth(index).click();
    }

    async hoverOverProduct(index: number){
        await this.page.locator("div[data-container='product-grid'] img").nth(index).hover();
    }

    //Available sizes XS, S, M, L, XL
    async selectSize(size: string, index: number){
        await this.page.locator(` div[data-container='product-grid'] div[aria-label='Size'] div[option-label='${size}']`).nth(index).click();
    }

    //Available colors 1, 2, 3
    async selectColor(color: number, index: number){
        await this.page.locator("div[data-container='product-grid'] div[aria-label='Color']").nth(index).locator("div").nth(color).click();
    }

    async addToCart(index: number){
        await this.page.locator("div[data-container='product-grid'] img").nth(index).hover();
        await this.page.locator("li").filter({hasText: `${await this.page.locator("div[data-container='product-grid'] strong a").nth(index).innerText()}`}).locator("button[title='Add to Cart']").click();
    }
}