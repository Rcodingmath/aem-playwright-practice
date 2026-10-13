import { Page, Locator, expect } from '@playwright/test';

export class SitesConsolePage {
  constructor(private readonly page: Page) {}

  // The Sites console lives inside the "Main Content" iframe of the AEM shell
  private get frame() {
    return this.page.frameLocator('iframe[title="Main Content"]');
  }

  // A row in the column view, identified by its content path
  row(path: string): Locator {
    return this.frame.locator(
      `coral-columnview-item[data-foundation-collection-item-id="${path}"]`
    );
  }

  async open(sitePath: string) {
    await this.page.goto(`/ui#/aem/sites.html${sitePath}`);
    // Ready marker: the column view has rendered at least one item
    await expect(this.frame.locator('coral-columnview-item').first()).toBeVisible({
      timeout: 60_000,
    });
  }
}