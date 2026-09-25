import {test,expect} from '@playwright/test'

test("Web Table Task", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

     // //table[@aria-label='Employee Management System table']/tbody/tr[2]/td

    const first = "//table[@aria-label='Employee Management System table']/tbody/tr[";
    const second = "]/td[";
    const third = "]"

    const rowCount = await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr").count();
    const columnCount = await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr[2]/td").count();

    for(let i=1; i<=rowCount; i++){
        for(let j=1; j<=columnCount; j++){
            const dynamicPath = `${first}${i}${second}${j}${third}`;
            const data = await page.locator(dynamicPath).innerText();
            //console.log(data);
            if(data.includes("Rohan.Mehta")){
                const path = `${dynamicPath}/preceding-sibling::td/input`;
                await page.locator(path).check();
            
            }
        }
    }
 await page.pause();

})