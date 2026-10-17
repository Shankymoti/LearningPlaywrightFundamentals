import { test, expect } from '@playwright/test'

test.describe('Expect Assert2', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter.html');
    })

    test('expect assertion', async ({ page }) => {
        const heading = page.getByText('multiple element filters', { exact: true });
        await expect(heading).toBeVisible();
        await expect(heading).toContainText('filters', { timeout: 1000 });


        const email = page.getByRole('textbox', { name: 'email' })
        //    await email.fill('shashank');
        await expect(email).toHaveAttribute('id', "email");
        await expect(email).toHaveAttribute("type", "email");
        await expect(email).toHaveAttribute('placeholder', 'student@thetestingacademy.com')

        const footerLink = page.locator('footer a')
        await expect(footerLink).toHaveCount(16);
        await page.pause()

    })
})