import { test, expect } from "../base/baseFixture";
import * as testData from "../test-data/testData.json"
import { login } from "../utils/commonFunctions";

test('Add address first time', async ({ page, signInPage, accountPage, addAddressPage }) => {
    await login(page, signInPage, testData.email, testData.password_hash);
    await accountPage.clickExpandMenu();
    await accountPage.clickMyAccountExpanded();
    await accountPage.clickManageAddreses();
    await addAddressPage.enterFirstName(testData.firstname);
    await addAddressPage.enterLastName(testData.lastname);
    await addAddressPage.enterPhoneNumber(testData.phone);
    await addAddressPage.enterStreetAddress(testData.address.street);
    await addAddressPage.enterCity(testData.address.city);
    await addAddressPage.selectCountry(testData.address.country);
    await addAddressPage.selectState(testData.address.state);
    await addAddressPage.enterZipCode(testData.address.zip);
    await addAddressPage.clickSaveAddress();
})
