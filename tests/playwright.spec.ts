import { test, expect } from '@playwright/test';

test('basic page display test', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('div');
})