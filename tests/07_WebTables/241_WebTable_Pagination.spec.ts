import {test, expect} from '@playwright/test'

test('Verify the TestCase', async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    let name : string = "Luca Greco";
    let row;

    while(true){
      row =  page.locator("#employees-table  tr").filter({
            hasText:name
        });
        if(await row.count()){
            break;
        }
        const next = page.getByTestId("next-page");
        if(await next.isDisabled()){
            throw new Error("Row Not Found");
        }
        await next.click();
    }

   const email = await row.locator("td[data-col='email']").innerText();
   const country = await row.locator("td[class='country']").innerText();
   console.log(email);
   console.log(country);
})