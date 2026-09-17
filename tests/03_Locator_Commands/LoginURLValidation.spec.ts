import {test,expect} from '@playwright/test'

test('Login & URL Validation',async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.locator("//input[@id='email']").fill("shashank");
    await page.locator("//input[@id='password']").fill("shashank");
    await expect(page.locator("//input[@name='remember']")).not.toBeChecked();
    await page.locator("//input[@name='remember']").check();
    await expect(page.locator("//input[@name='remember']")).toBeChecked();
    await page.locator("//*[contains(text(),'Login to Practice Account')]").click();
    expect(page.url()).toContain('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    await expect(page).toHaveURL(page.url());
    await expect(page.locator("//button[contains(@class,'login-bt')]")).toBeVisible();
    await expect(page.locator("//button[contains(@class,'login-bt')]")).toBeEnabled();
 

})