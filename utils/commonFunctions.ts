import { Page, expect } from "@playwright/test";
import AccountPage from "../pages/accountPage";
import SignInPage from "../pages/signInPage";


async function signOut(accountPage: AccountPage, page: Page) {
    await accountPage.clickExpandMenu();
    await accountPage.clickSignOutExpanded();
    await expect(page).toHaveURL("https://magento.softwaretestingboard.com/", { timeout: 10000 });
}

async function login(page: Page, signInPage: SignInPage, email: string, password: string) {
    await page.goto('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
    await signInPage.enterEmail(email);
    await signInPage.enterPassword(password);
    await signInPage.clickSignIn();
    await expect(page).toHaveURL("https://magento.softwaretestingboard.com/");
}

export { signOut, login };