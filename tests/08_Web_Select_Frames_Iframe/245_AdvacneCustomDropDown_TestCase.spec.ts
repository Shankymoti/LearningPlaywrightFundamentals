import {test, expect} from '@playwright/test'

test("Verify Advance Custom DropDowns", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes")

      // ① Single — searchable

      await page.getByTestId('rs-single').click();
      await page.getByRole('option',{"name": "Cypress"}).click();

       // ②  Multi — chips with remove
       await page.locator("#rs-multi").click();
       await page.getByText("Pytest", {exact: true}).click();
       await page.getByText("JUnit", {exact: true}).click();
       await page.keyboard.press("Escape");


    // ③ Creatable multi — type and Enter
    await page.locator("#rs-creatable").click()
    await page.getByText("api-testing", {exact:true}).click();
    await page.getByText("accessibility", {exact : true}).click();
    await page.getByText("visual-regression", {exact:true}).click();

    
       await page.pause()
    })