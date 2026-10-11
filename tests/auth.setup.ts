import { test as setup } from '@playwright/test';

setup('authenticate', async ({ page }) => {
  await page.goto('/libs/granite/core/content/login.html');
  await page.fill('#username', process.env.AEM_USER!);
  await page.fill('#password', process.env.AEM_PASS!);
  await page.click('button[type="submit"]');
  await page.waitForURL('**/start.html');
  await page.context().storageState({ path: 'auth/user.json' });
});