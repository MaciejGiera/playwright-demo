import { Page } from "@playwright/test";
import { test, expect } from "../base/baseFixture"
import SignInPage from "../pages/signInPage";
import * as testData from "../test-data/testData.json"
import AccountPage from "../pages/accountPage";



test.only('login succesful', async ({ page, signInPage }) => {
    await login(page, signInPage);
})

test('Sign out', async ({ page, signInPage, accountPage }) => {
    await login(page, signInPage);
    await signOut(accountPage, page);

})

test('Account page navigation', async ({ page, accountPage, signInPage }) => {
    await login(page, signInPage);
    await accountPage.clickExpandMenu();
    await accountPage.clickMyAccountExpanded();
    await accountPage.clickMyOrders();
    await accountPage.clickMyWishlist();
    await accountPage.clickMyDownloads(); 
    await accountPage.clickMyAccount();
})

test('Expanded menu', async ({ page, accountPage, signInPage }) => {
    await login(page, signInPage);
    await accountPage.clickExpandMenu();
    await accountPage.clickMyAccountExpanded();
    await accountPage.clickExpandMenu();
    await accountPage.clickMyWishListExpanded();
    await accountPage.clickExpandMenu();
    await accountPage.clickSignOutExpanded();
})


async function signOut(accountPage: AccountPage, page: Page) {
    await accountPage.clickExpandMenu();
    await accountPage.clickSignOutExpanded();
    await expect(page).toHaveURL("https://magento.softwaretestingboard.com/", { timeout: 10000 });
}

async function login(page: Page, signInPage: SignInPage) {
    await page.goto('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
    await signInPage.enterEmail(testData.email);
    await signInPage.enterPassword(testData.password_hash);
    await signInPage.clickSignIn();
    await expect(page).toHaveURL("https://magento.softwaretestingboard.com/");
}