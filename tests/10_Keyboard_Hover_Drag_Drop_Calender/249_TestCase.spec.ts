import {test, expect} from '@playwright/test'

test("Verify the TestCase", async({page})=>{
    await page.goto("https://keycode.info");
    
})