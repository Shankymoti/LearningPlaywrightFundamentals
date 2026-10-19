import {test} from '@playwright/test';
import loginTestData from './test-data/login.json';


test.describe("Login - data driven", () => {
test.beforeEach(async ({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter")

})

test("login with valid user", async ({page}) => {
    await page.locator('#email').fill(loginTestData.validUser.email);
    await page.locator("#password").fill(loginTestData.validUser.password);
    await page.getByTestId('login-button').click();
})

test('Login with invalid user', async ({page}) => {
    await page.locator('#email').fill(loginTestData.invalidUser.email);
    await page.locator('#password').fill(loginTestData.invalidUser.password);
    await page.getByTestId('login-button').click();
})
})
