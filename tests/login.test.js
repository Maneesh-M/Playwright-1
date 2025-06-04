import { test, expect } from '@playwright/test';

test('TC01 : Login', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.waitForTimeout(3000);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon.in/);
  await page.waitForTimeout(1500);
  await page.locator(`//span[contains(.,'Account & Lists')]`).click();
  await page.waitForTimeout(1500);
  await expect(page).toHaveURL(/signin/); // partial match of the url
  await page.waitForTimeout(1500);
  await page.locator('#ap_email_login').fill("maneesherat@gmail.com");
  await page.waitForTimeout(2000);
  await page.locator(`//input[@type='submit']`).click();
  await page.waitForTimeout(2000);
});
