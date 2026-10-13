import { test, expect } from '@playwright/test';
import { SitesConsolePage } from '../pages/SitesConsolePage';

const SITE = '/content/2026/40/quickhawk79967';
const LOCALES = ['en', 'jp', 'fr', 'es'];

test.describe('locale parity', () => {
  for (const locale of LOCALES) {
    test(`${locale} language copy exists under the site`, async ({ page }) => {
      const sites = new SitesConsolePage(page);
      await sites.open(SITE);
      await expect(sites.row(`${SITE}/${locale}`)).toBeVisible();
    });
  }
});