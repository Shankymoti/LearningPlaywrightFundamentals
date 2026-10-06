import {test, expect, Locator, FrameLocator} from '@playwright/test'

test("Verify Nested iframe TC ", async({page})=>{
    await page.goto("https://selectorshub.com/iframe-scenario/");
    const frame1 : FrameLocator =  page.frameLocator("#pact1");
    const frame2 : FrameLocator = page.frameLocator("#pact1");
    const frame3 : FrameLocator = page.frameLocator("#pact3");

    await frame1.locator("#inp_val").fill("Aishwarya Rai");
    await frame2.locator("#jex").fill("Test2");
    await frame3.locator("#glaf").fill("Test3");

    const text = await frame1.locator("h3").innerText();
    console.log(text);

    await page.pause();
})