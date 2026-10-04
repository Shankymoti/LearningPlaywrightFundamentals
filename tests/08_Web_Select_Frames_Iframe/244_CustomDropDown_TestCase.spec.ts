import {test, expect} from '@playwright/test'

test("Verify Custom DropDowns", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");
    await page.getByTestId("lang-trigger").click();
   await page.getByRole("option", {name: "TypeScript"}).click();
   await expect(page.getByTestId("lang-trigger")).toContainText("TypeScript")
//    await page.getByText("Python",{exact: true}).first().click();
//     await expect(page.getByTestId("lang-trigger")).toContainText("Python")

    await page.getByTestId("experience-trigger").click();
    await page.getByText("Mid-level (4-6 years)", {exact : true}).click();
    await expect(page.getByTestId("experience-trigger")).toContainText("Mid-level (4-6 years)")
    await page.waitForTimeout(10000)
})