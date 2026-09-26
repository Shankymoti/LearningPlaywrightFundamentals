import {expect,test} from '@playwright/test'

test('Verify the TestCase',async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter")
    const forgottenPassword = page.locator('.list-group a.list-group-item').filter({hasText:"Forgotten Password"});
    await forgottenPassword.click();

    const privacyPolicy = page.locator("footer a").filter(
        {
            hasText : "Privacy Policy"
        }
    )
   await expect(privacyPolicy).toHaveAttribute("href","#privacy-policy")
    await page.pause();
})