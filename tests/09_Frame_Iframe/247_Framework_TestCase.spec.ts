import {test, expect, Locator} from '@playwright/test'

test('Verify Advance Custom DropDowns', async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames")
    const mainFrame = page.frameLocator('[name="main"]');
    const headingText = await mainFrame.locator("#main-heading").innerText();
    console.log(headingText);

    const framesLocator : Locator[] = await page.locator("//frame").all();
    console.log(framesLocator.length);

    for(let i=0; i<framesLocator.length; i++){
        console.log(await framesLocator[i].getAttribute('name')," : ", await framesLocator[i].getAttribute('src'));
    }

    const sideFrame =  page.frameLocator('[name="side"]');
   await sideFrame.getByTestId("side-link-registration").click();
   await page.pause();
})