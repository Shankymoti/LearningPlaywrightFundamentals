import {test,expect} from '@playwright/test';

test("Verify the Webtable Example 1", async({page})=>{
    await page.goto("https://awesomeqa.com/webtable.html")


   //table[@id="customers"]/tbody/tr[5]/td[2]
   // // 5 - i , 1 to 7 ( 1 header) 2 to 7
   // ]/td[
   // 2 - j , j -> 1,2,3
    // ]


  //  //table[@id='customers']/tbody/tr[2]/td[2]
const first = "//table[@id='customers']/tbody/tr["
const second = "]/td[";
const third = "]";
const rows = page.locator("//table[@id='customers']/tbody/tr");
const rowsCount = await rows.count();
console.log(rowsCount);
////table[@id='customers']/tbody/tr[2]/td
const columnCount = await rows.nth(1).locator('td').count();
console.log(columnCount);

for(let i=2; i<=rowsCount; i++){
    for(let j=1; j<=columnCount; j++){
     const dynamicPath =  `${first}${i}${second}${j}${third}`;
     //console.log(dynamicPath);
     const data = await page.locator(dynamicPath).innerText();
     console.log(data);

     if(data.includes("Helen Bennett")){
        const countryPath =  `${dynamicPath}/following-sibling::td`;
        const countryText = await page.locator(countryPath).innerText();
        console.log(countryText);
     }

     }
}
})

