import {test, expect, FrameLocator} from '@playwright/test'

test("Verify Advance Custom DropDowns", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/frames/")
    const vechileFrame : FrameLocator =  page.frameLocator("#frame-one");
    await vechileFrame.locator("#RESULT_TextField-1").fill("NEXON");
    await vechileFrame.locator("#RESULT_TextField-2").fill("shashank");
    await vechileFrame.locator("#RESULT_TextField-3").fill("8813");
    await vechileFrame.locator("#RESULT_TextField-4").fill("2025");
    await vechileFrame.locator("#RESULT_RadioButton-1").selectOption("Sedan");
    await vechileFrame.locator("#RESULT_TextArea-1").fill('Amazing car with amazing family car in a budget');
    await vechileFrame.getByText("Submit registration",{exact:true}).click();
    const text = await vechileFrame.locator("#vehicle-output").innerText();
    console.log(text);
    await page.pause();
})