import {test, expect, Locator} from '@playwright/test';

test("Verify Drag and Drop in Kanban Board", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu")
    await page.locator("span.context-menu-one").first().click({button : 'right'});


    const allOption : string[] = await page.locator(".context-menu-list li button span").first().allInnerTexts();
console.log(allOption);

//   const allOptions: string[] = await page
//         .locator('ul.context-menu-list span')
//         .allInnerTexts();
//     console.log(allOptions);

    await page.getByText('Copy', { exact: true }).first().click();

    await page.pause();
})