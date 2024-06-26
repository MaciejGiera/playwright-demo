import { Page } from "@playwright/test";

export default class AddAddressPage {
    constructor(public page: Page){}

    async enterFirstName(firstName: string){
        await this.page.fill("input[id='firstname']", firstName);
    }

    async enterLastName(lastName: string){
        await this.page.fill("input[id='lastname']", lastName);
    }

    async enterPhoneNumber(phoneNumber: string){
        await this.page.fill("input[id='telephone']", phoneNumber);
    }
    
    async enterStreetAddress(streetAddress: string){
        await this.page.fill("input[id='street_1']", streetAddress);
    }

    async enterCity(city: string){
        await this.page.fill("input[id='city']", city);
    }

    async selectState(state: string){
        await this.page.selectOption("#region_id", {label: state});
    }

    async enterZipCode(zipCode: string){
        await this.page.fill("input[id='zip']", zipCode);
    }

    async selectCountry(country: string){
        await this.page.selectOption("#country", {label: country});
    }

    async clickSaveAddress(){
        await Promise.all([
            this.page.waitForURL("https://magento.softwaretestingboard.com/customer/address/index/"),
            this.page.click("button[title='Save Address']")
        ])
    }
}