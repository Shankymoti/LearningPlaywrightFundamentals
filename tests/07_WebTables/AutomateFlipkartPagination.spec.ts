import { test, expect, Page } from '@playwright/test';

test("test flipkart", async ({ page }) => {
    test.setTimeout(120_000); // paginating through many pages needs more than the default 30s

    await page.goto("https://www.flipkart.com/");

    // The login popup doesn't always appear, so don't fail if it's missing
    const closeBtn = page.getByRole('button', { name: '✕' });
    if (await closeBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
        await closeBtn.click();
    }

    const searchBox = page.getByRole('textbox', { name: 'Search for Products, Brands' });
    await searchBox.fill("DSLR Camera");
    await searchBox.press('Enter');

    await printProductDetails(page);   // must be awaited
});

async function printProductDetails(page: Page) {
    const productNameLocator = page.locator('div.RG5Slk');
    const priceLocator = page.locator('div.DeU9vF');
    const nextButton = page.locator('.jgg0SZ').filter({ hasText: 'Next' });

    while (true) {
        // Wait for products of the current page to be rendered
        await productNameLocator.first().waitFor();

        const firstNameOnPage = await productNameLocator.first().innerText();
        const count = await productNameLocator.count();

        for (let i = 0; i < count; i++) {
            const productName = await productNameLocator.nth(i).innerText();
            const price = await priceLocator.nth(i).innerText();   // nth(i), not the whole locator
            console.log(productName, price);
        }

        // Stop when there is no "Next" button (last page)
        if (!(await nextButton.isVisible())) break;

        await nextButton.click();

        // Wait until the new page's first product differs from the previous page's
        await expect(productNameLocator.first()).not.toHaveText(firstNameOnPage);
    }
}