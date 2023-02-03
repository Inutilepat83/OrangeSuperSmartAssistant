import { test, expect } from '@playwright/test';

test('basic page display test', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('div');
  await expect(page.locator('div')).toContainText('Chatbot');
  await expect(page.locator('div.card-header')).toContainText('Chatbot');
  await expect(page.locator('div.card-body')).toContainText('Type your message');
  await expect(page.locator('input[name="user"]')).toHaveAttribute('id', 'textAreaExample');
})