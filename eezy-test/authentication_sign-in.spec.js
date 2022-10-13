// @ts-check
const { test, expect } = require("@playwright/test");

test("Testing authentication on the sign-in page", async ({ page }) => {
  await page.goto("/skip");
  await expect(page).toHaveTitle(/Content Manager/);
  await page.locator('[id="cm-login-email"]').click().type();
});
