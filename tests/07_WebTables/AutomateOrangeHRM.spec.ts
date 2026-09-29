import { test, expect, Page, Locator } from '@playwright/test';

const BASE = "https://opensource-demo.orangehrmlive.com/web/index.php";

// Public demo data is shared, so use a unique name for every run
const uniqueFirstName = () => `Shanky${Date.now().toString().slice(-6)}`;

// Click "Next" and wait for the new page of data instead of using waitForTimeout
async function goToNextPage(page: Page, next: Locator) {
    await Promise.all([
        page.waitForResponse(r => r.url().includes('/pim/employees') && r.ok()),
        next.click(),
    ]);
    await expect(page.locator('.oxd-loading-spinner')).toHaveCount(0);
}

/* ---------------------------------------------------------------
   TEST 1: CSS selectors
---------------------------------------------------------------- */
test('OrangeHRM - add and delete employee (CSS selectors)', async ({ page }) => {
    test.setTimeout(120_000);
    const firstName = uniqueFirstName();

    // Login
    await page.goto(`${BASE}/auth/login`);
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await expect(page).toHaveURL(/dashboard/);

    // Add employee
    await page.locator("a[href='/web/index.php/pim/viewPimModule']").click();
    await page.locator(".orangehrm-header-container button").click();
    await page.locator("input[name='firstName']").fill(firstName);
    await page.locator("input[name='lastName']").fill("Kumar");
    await page.locator("button[type='submit']").click();
    await expect(page).toHaveURL(/viewPersonalDetails/, { timeout: 20_000 });

    // Back to the employee list and find the row (with pagination)
    await page.locator("a[href='/web/index.php/pim/viewPimModule']").click();

    const cards = page.locator(".oxd-table-body .oxd-table-card");
    const next = page.locator("button:has(i.bi-chevron-right)");
    let row: Locator;

    while (true) {
        await cards.first().waitFor();                 // table has rendered
        row = cards.filter({ hasText: firstName });
        if (await row.count()) break;
        if (!(await next.isVisible())) throw new Error(`Employee "${firstName}" not found`);
        await goToNextPage(page, next);
    }

    // Delete
    await row.first().locator("button:has(i.bi-trash)").click();
    await page.locator(".oxd-dialog-container-default button.oxd-button--label-danger").click();
    await expect(page.getByText("Successfully Deleted")).toBeVisible();
    await expect(cards.filter({ hasText: firstName })).toHaveCount(0);
});

/* ---------------------------------------------------------------
   TEST 2: XPath
---------------------------------------------------------------- */
test('OrangeHRM - add and delete employee (XPath)', async ({ page }) => {
    test.setTimeout(120_000);
    const firstName = uniqueFirstName();

    // Login
    await page.goto(`${BASE}/auth/login`);
    await page.locator("xpath=//input[@name='username']").fill("Admin");
    await page.locator("xpath=//input[@name='password']").fill("admin123");
    await page.locator("xpath=//button[@type='submit']").click();
    await expect(page).toHaveURL(/dashboard/);

    // Add employee
    const pimMenu = page.locator("xpath=//a[@href='/web/index.php/pim/viewPimModule']");
    await pimMenu.click();
    await page.locator("xpath=//div[contains(@class,'orangehrm-header-container')]//button").click();
    await page.locator("xpath=//input[@name='firstName']").fill(firstName);
    await page.locator("xpath=//input[@name='lastName']").fill("Kumar");
    await page.locator("xpath=//button[@type='submit']").click();
    await expect(page).toHaveURL(/viewPersonalDetails/, { timeout: 20_000 });

    // Back to the employee list and find the row (with pagination)
    await pimMenu.click();

    const anyRow = page.locator("xpath=//div[contains(@class,'oxd-table-body')]//div[@role='row']");
    const nameCell = page.locator(
        `xpath=//div[contains(@class,'oxd-table-body')]//div[@role='cell']/div[contains(normalize-space(),'${firstName}')]`
    );
    const next = page.locator("xpath=//button[.//i[contains(@class,'bi-chevron-right')]]");

    while (true) {
        await anyRow.first().waitFor();
        if (await nameCell.count()) break;
        if (!(await next.isVisible())) throw new Error(`Employee "${firstName}" not found`);
        await goToNextPage(page, next);
    }

    // From the name cell, go up to its row, then down to that row's trash button
    await nameCell.first()
        .locator("xpath=ancestor::div[@role='row']//button[.//i[contains(@class,'bi-trash')]]")
        .click();

    await page.locator(
        "xpath=//div[contains(@class,'oxd-dialog-container-default')]//button[contains(@class,'oxd-button--label-danger')]"
    ).click();

    await expect(page.getByText("Successfully Deleted")).toBeVisible();
    await expect(nameCell).toHaveCount(0);
});