import { test, expect } from '@playwright/test';
import { SitesConsolePage } from '../pages/SitesConsolePage';

const SITE = '/content/2026/40/quickhawk79967';

test('sites console loads and shows the English page', async ({ page }) => {
  const sites = new SitesConsolePage(page);
  await sites.open(SITE);
  await expect(sites.row(`${SITE}/en`)).toBeVisible();
});



/* without pom import { test, expect } from '@playwright/test';

test('sites console loads for quickhawk79967', async ({ page }) => {
  await page.goto('/ui#/aem/sites.html/content/2026/40/quickhawk79967');

  const sites = page.frameLocator('iframe[title="Main Content"]');
  const englishRow = sites.locator(
    'coral-columnview-item[data-foundation-collection-item-id="/content/2026/40/quickhawk79967/en"]'
  );

  await expect(englishRow).toBeVisible({ timeout: 60_000 });
});*/

