import { Page } from "@playwright/test";
import { test, expect } from "../base/baseFixture"
import SignInPage from "../pages/signInPage";
import * as testData from "../test-data/testData.json"
import AccountPage from "../pages/accountPage";
import { signOut, login } from "../utils/commonFunctions";



test.only('login succesful', async ({ page, signInPage }) => {
    await login(page, signInPage, testData.email, testData.password_hash);
})

test('Sign out', async ({ page, signInPage, accountPage }) => {
    await login(page, signInPage, testData.email, testData.password_hash);
    await signOut(accountPage, page);

})

test('Account page navigation', async ({ page, accountPage, signInPage }) => {
    await login(page, signInPage, testData.email, testData.password_hash);
    await accountPage.clickExpandMenu();
    await accountPage.clickMyAccountExpanded();
    await accountPage.clickMyOrders();
    await accountPage.clickMyWishlist();
    await accountPage.clickMyDownloads(); 
    await accountPage.clickMyAccount();
})

test('Expanded menu', async ({ page, accountPage, signInPage }) => {
    await login(page, signInPage, testData.email, testData.password_hash);
    await accountPage.clickExpandMenu();
    await accountPage.clickMyAccountExpanded();
    await accountPage.clickExpandMenu();
    await accountPage.clickMyWishListExpanded();
    await accountPage.clickExpandMenu();
    await accountPage.clickSignOutExpanded();
})

test('Whats New Page Woman navigation', async ({ page, whatsNewPage }) => {
    await whatsNewPage.gotoWhatsNewPage();
    await whatsNewPage.clickWomenHoodiesSweatshirts();
    await whatsNewPage.gotoWhatsNewPage();
    await whatsNewPage.clickWomenJackets();
    await whatsNewPage.gotoWhatsNewPage();
    await whatsNewPage.clickWomanTees();
    await whatsNewPage.gotoWhatsNewPage();
    await whatsNewPage.clickWomenBrasTanks();
    await whatsNewPage.gotoWhatsNewPage();
    await whatsNewPage.clickWomenPants();
    await whatsNewPage.gotoWhatsNewPage();
    await whatsNewPage.clickWomanShorts();

})

test('Whats New Page Men navigation', async ({ page, whatsNewPage }) => {
    await whatsNewPage.gotoWhatsNewPage();
    await whatsNewPage.clickMenHoodiesSweatshirts();
    await whatsNewPage.gotoWhatsNewPage();
    await whatsNewPage.clickMenJackets();
    await whatsNewPage.gotoWhatsNewPage();
    await whatsNewPage.clickMenTees();
    await whatsNewPage.gotoWhatsNewPage();
    await whatsNewPage.clickMenTanks();
    await whatsNewPage.gotoWhatsNewPage();
    await whatsNewPage.clickMenPants();
    await whatsNewPage.gotoWhatsNewPage();
    await whatsNewPage.clickMenShorts();
})