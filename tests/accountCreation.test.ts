import { test, expect } from "../base/baseFixture";
import * as testData from "../test-data/testData.json"


test.skip('Create account succesful', async ({ page, createAccountPage, homePage }) => {
    await page.goto('https://magento.softwaretestingboard.com/#');
    await homePage.clickCreateAccount();
    await createAccountPage.enterFirstName(testData.firstname);
    await createAccountPage.enterLastName(testData.lastname);
    await createAccountPage.enterEmail(testData.email);
    await createAccountPage.enterPassword(testData.password_hash);
    await createAccountPage.enterConfirmPassword(testData.password_hash)
    await createAccountPage.clickCreateAccount();
    expect(page).toHaveURL("https://magento.softwaretestingboard.com/customer/account/")
})

test('Enforcing first name required field while creating account', async ({ page, createAccountPage, homePage }) => {
    await page.goto('https://magento.softwaretestingboard.com/#');
    await homePage.clickCreateAccount();
    await createAccountPage.enterLastName(testData.lastname);
    await createAccountPage.enterEmail(testData.email);
    await createAccountPage.enterPassword(testData.password_hash);
    await createAccountPage.enterConfirmPassword(testData.password_hash)
    await createAccountPage.clickCreateAccount();
    await expect(page.locator("div[id='firstname-error']")).toBeVisible();
})

test('Enforcing last name required field while creating account', async ({ page, createAccountPage, homePage }) => {
    await page.goto('https://magento.softwaretestingboard.com/#');
    await homePage.clickCreateAccount();
    await createAccountPage.enterFirstName( testData.firstname);
    await createAccountPage.enterEmail(testData.email);
    await createAccountPage.enterPassword(testData.password_hash);
    await createAccountPage.enterConfirmPassword(testData.password_hash)
    await createAccountPage.clickCreateAccount();
    await expect(page.locator("div[id='lastname-error']")).toBeVisible();
})

test('Enforcing required email field while creating account', async ({ page, createAccountPage, homePage }) => {
    await page.goto('https://magento.softwaretestingboard.com/#');
    await homePage.clickCreateAccount();
    await createAccountPage.enterFirstName(testData.firstname);
    await createAccountPage.enterLastName(testData.lastname);
    await createAccountPage.enterPassword(testData.password_hash);
    await createAccountPage.enterConfirmPassword(testData.password_hash)
    await createAccountPage.clickCreateAccount();
    await expect(page.locator("div[id='email_address-error']")).toHaveText("This is a required field.");
})

test('Enforcing email format field while creating account', async ({ page, createAccountPage, homePage }) => {
    await page.goto('https://magento.softwaretestingboard.com/#');
    await homePage.clickCreateAccount();
    await createAccountPage.enterFirstName(testData.firstname);
    await createAccountPage.enterLastName(testData.lastname);
    await createAccountPage.enterEmail("test@test");
    await createAccountPage.enterPassword(testData.password_hash);
    await createAccountPage.enterConfirmPassword(testData.password_hash)
    await createAccountPage.clickCreateAccount();
    await expect(page.locator("div[id='email_address-error']")).toHaveText("Please enter a valid email address (Ex: johndoe@domain.com).");
})

test('Enforcing password format', async ({ page, createAccountPage, homePage }) => {
    await page.goto('https://magento.softwaretestingboard.com/#');
    await homePage.clickCreateAccount();
    await createAccountPage.enterFirstName(testData.firstname);
    await createAccountPage.enterLastName(testData.lastname);
    await createAccountPage.enterEmail(testData.email);
    await createAccountPage.enterPassword("password");
    await createAccountPage.clickCreateAccount();
    await expect(page.locator("div[id='password-error']")).toHaveText("Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.");
    await createAccountPage.clearPassword();
    await createAccountPage.enterPassword("A#d123");
    await createAccountPage.clickCreateAccount();
    await expect(page.locator("div[id='password-error']")).toHaveText("Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.");
    await createAccountPage.clearPassword();
    await createAccountPage.clickCreateAccount();
    await expect(page.locator("div[id='password-error']")).toHaveText("This is a required field.");
})

