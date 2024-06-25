import { test as baseTest } from "@playwright/test";
import HomePage from "../pages/homePage";
import CreateAccountPage from "../pages/createAccountPage";
import AccountPage from "../pages/accountPage";
import SignInPage from "../pages/signInPage";
import WhatsNewPage from "../pages/whatsNewPage";

type pages = {
    homePage: HomePage,
    createAccountPage: CreateAccountPage,
    accountPage: AccountPage,
    signInPage: SignInPage,
    whatsNewPage: WhatsNewPage,
}

const testPages = baseTest.extend<pages>({
    homePage: async({page}, use) => {
        await use(new HomePage(page))
    },
    createAccountPage: async({page}, use) => {
        await use(new CreateAccountPage(page))
    },

    accountPage: async({page}, use) => {
        await use(new AccountPage(page))
    },

    signInPage: async({page}, use) => {
        await use(new SignInPage(page))
    },
    
    whatsNewPage: async({page}, use) => {
        await use(new WhatsNewPage(page))
    }

})

export const test = testPages;
export const expect = testPages.expect;