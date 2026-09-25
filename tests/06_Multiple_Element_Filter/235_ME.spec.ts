import {test, expect, Locator} from '@playwright/test';

test('Basic verify how to handle multiple elements ', async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    const rightPAnalLinkText : string[] = await page.locator('.list-group a.list-group-item').allInnerTexts();
    console.log(rightPAnalLinkText.length);

    for(let link of rightPAnalLinkText){
        console.log(link);
    }

    for(const linkText of rightPAnalLinkText){
        if(linkText === "Forgotten Password"){
            await page.getByText(linkText).first().click()
        }
    }

    const rightPAnalLinkLocator : Locator[] = await page.locator(".list-group a.list-group-item").all();
    for(const loc of rightPAnalLinkLocator){
        console.log(await loc.getAttribute("href"));
    }
    
    await page.pause()
})