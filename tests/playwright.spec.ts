import { test, expect } from '@playwright/test';

test('Chatbot page is displayed correctly', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('div');
  await expect(page.locator('div')).toContainText('Chatbot');
  await expect(page.locator('#chat1')).toBeVisible();
  await expect(page.locator('.card-header')).toBeVisible();
  await expect(page.locator('.card-header')).toContainText('Chatbot');
  await expect(page.locator('.card-body')).toBeVisible();
  await expect(page.locator('#textAreaExample')).toBeVisible();
  await expect(page.locator('#textAreaExample')).toHaveAttribute('placeholder', 'Type your message');
  await expect(page.locator('img[src="https://user-images.githubusercontent.com/56659549/173120825-dd61d903-e53d-4c56-a9ff-e6e008f47f3e.png"]')).toBeVisible();
  await expect(page.locator('img[src="https://user-images.githubusercontent.com/56659549/173120881-73c5b043-0137-47cb-8913-96e1d1c64609.png"]')).toBeVisible();
});