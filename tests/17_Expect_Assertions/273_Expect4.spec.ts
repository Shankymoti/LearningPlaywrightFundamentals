import {test, expect} from '@playwright/test';


test('Visible · enabled · disabled · checked', async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice.html");
    const automationCheckbox = page.getByRole('checkbox',{name:/UFT/});
    await automationCheckbox.check();
    await expect(automationCheckbox).toBeChecked();

    const profileSubmit = page.getByTestId('profile-submit');
    await expect(profileSubmit).toBeVisible();
    await expect(profileSubmit).toBeEnabled();

    await expect(page).toHaveTitle(/QA Profile Form Practice — The Testing Academy/);

     const appUrl = page.url();
    expect(appUrl).toContain('thetestingacademy'); 

    await page.pause();
})