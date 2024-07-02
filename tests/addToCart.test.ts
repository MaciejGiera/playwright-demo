import { test, expect } from "../base/baseFixture"
import * as testData from "../test-data/testData.json"
import { login } from "../utils/commonFunctions"

test('Add product to cart', async ({ page, productListPage, whatsNewPage, signInPage }) => {
    await login(page, signInPage, testData.email, testData.password_hash);
    await whatsNewPage.gotoWhatsNewPage();
    await whatsNewPage.clickWomenHoodiesSweatshirts();
    await productListPage.selectSize("XS", 0);
    await productListPage.selectColor(1, 0);
    await productListPage.addToCart(0);

})
