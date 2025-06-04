import { test, expect } from '@playwright/test';

test('TC02 : Add product to cart', async ({ page }) => {  
  await page.goto('https://www.amazon.in/');
  await page.waitForTimeout(1000);
  await expect(page).toHaveTitle(/Amazon.in/);
  await page.waitForTimeout(1000);
  await page.locator(`//span[contains(.,'Refrigerator')]`).click();
  await page.waitForTimeout(2000);
  await page.click(`//label//i[1]`);
  await expect(page.locator(`(//div[@data-cy='title-recipe']//a//h2)[3]`)).toBeVisible();
  await page.waitForTimeout(2000);
  await page.locator(`(//div[@data-cy='title-recipe']//a//h2)[3]`).click();
  await page.waitForTimeout(3000);
});