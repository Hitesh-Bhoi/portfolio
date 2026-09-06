import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
  await page.locator('#hero').click();
  await page.locator('#about').click();
  await page.locator('#skills').click();
  await page.locator('#projects').click();
});