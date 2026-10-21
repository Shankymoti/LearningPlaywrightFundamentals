import { test, expect } from '@playwright/test';
import loginData from '/test-data/registration-data.json'

test.describe('DDT JSON', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page (not the multiple_element_filter page)
    await page.goto('https://app.thetestingacademy.com/playwright/login');
  });

  test.afterEach(async ({}, testInfo) => {
    console.log(`AfterEach: ${testInfo.title} - status ${testInfo.status}`);
  });

  for (const data of loginData) {
    test(`Login with: ${data.description}`, async ({ page }) => {
      const textboxEmailAddress = page.getByRole('textbox', { name: 'Email Address' });
      const textboxPassword = page
        .getByRole('textbox', { name: 'Password' })
        .or(page.locator('#password'))
        .or(page.locator('[name="password"]'));
      const buttonLogin = page
        .getByRole('button', { name: 'Login to Practice Account' })
        .or(page.getByTestId('login-button'))
        .or(page.getByText('Login to Practice Account'));

      await textboxEmailAddress.fill(data.username);
      await textboxPassword.fill(data.password);
      await buttonLogin.click();

      if (data.shouldPass === 'true') {
        await expect(page).not.toHaveURL(/login/);
      } else {
        await expect(page.getByText(data.expectedError)).toBeVisible();
      }
    });
  }
});