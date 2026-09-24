import { test, expect } from "@playwright/test";

// Load the saved session

test.use(
    {
        storageState : './user-session.json'
    });


test("go directly to dashboard — Test1", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
});

test("go directly to dashboard2 — Test2", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
});

test("go directly to dashboard3 — Test3", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
});


/*
Allure Report

[allurereport.org/docs/playwright/](https://allurereport.org/docs/playwright/) 



## Getting started with Allure Playwright
- Make sure [Node.js](https://nodejs.org/) is installed.
- **npm install --save-dev @playwright/test allure-playwright**
- In the `playwright.config.ts add this line``**["allure-playwright"]]**` 
- Make sure that before running this command - npm i allure-commandline (one time)
- To see the Results -> **allure serve allure-results/**
- Reference -> [allurereport.org/docs/playwright/](https://allurereport.org/docs/playwright/) 


/// if allure is not recognized
> npm i -g allure-commandline



 want to add a custom log 

 **await allure.attachment**("Text file", "This is the file content.", ContentType.TEXT);

*/