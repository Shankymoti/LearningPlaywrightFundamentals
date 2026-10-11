import {test, expect, Locator} from '@playwright/test'

test.describe("SVG Elements",()=>{
    const URL = "https://www.flipkart.com/search";

    test.beforeEach(async({page})=>{
        console.log("Before running anyTest case");
        await page.goto(URL);
    })

    test('Verify the SVG elements',async({page})=>{
        await page.locator("[name='q']").fill("macmini");
        const svgElement = page.locator('svg');
        await svgElement.first().click();
        await page.waitForLoadState('networkidle');
       // await page.waitForTimeout(5000)
   //const titleResults: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]");

       const titleResults : Locator = page.locator("//div[contains(@data-id,'MPC') or contains(@data-id,'COM')]//a[2]");
       const titleCount = await titleResults.count();
       console.log(titleCount);

       for(let i=0; i<titleCount; i++){
         const titleRes : string|null = await titleResults.nth(i).innerText();
         console.log(titleRes);
       }


        await page.pause();
    })
})