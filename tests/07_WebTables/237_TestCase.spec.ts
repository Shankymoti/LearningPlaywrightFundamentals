import {test, expect} from '@playwright/test'

test('Verify the TestCase', async({page})=>{
    await page.goto("https://awesomeqa.com/webtable1.html")

    const rows = page.locator("table[summary='Sample Table'] tbody tr");
    const rowsCounnt = await rows.count();

    for(let i=0; i<rowsCounnt; i++){
      //const colsheader = await rows.nth(1).locator('th').allInnerTexts();
      const rowData = await rows.nth(i).locator('td').allInnerTexts();
      console.log(` Rows : ${i+1} : ${rowData}`);
     // console.log(await rows.nth(i).locator('th').allInnerTexts());
    }
})