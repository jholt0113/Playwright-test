// @ts-check
const { test, expect } = require("@playwright/test");

test("Testing authentication on the sign-in page", async ({ page }) => {
  await page.goto("https://develop.eezy-content-manager.work/skip");
  await expect(page).toHaveTitle(/Content Manager/);
});
