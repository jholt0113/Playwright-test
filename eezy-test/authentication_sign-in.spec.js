// @ts-check
const { test, expect } = require("@playwright/test");

test("Testing authentication on the sign-in page", async ({ page }) => {
  await page.goto("/skip");
  await expect(page).toHaveTitle(/Content Manager/);
  await page
    .locator('[id="cm-login-email"]')
    .type(process.env.super_admin_email);
  await page
    .locator('[id="cm-login-password"]')
    .type(process.env.super_admin_password);
  await page.locator('[type="submit"]').click();
  await expect(page).toHaveURL(/admin/);
});
