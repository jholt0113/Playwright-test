// @ts-check
const { test, expect } = require("@playwright/test");

test("Testing authentication on the sign-in page", async ({ page }) => {
  await page.goto("https://develop.eezy-content-manager.work/skip");
  await expect(page).toHaveTitle(/Content Manager/);
});
test("Signing-in", async ({ page }) => {
  // Go to https://develop.eezy-content-manager.work/users/sign_in
  await page.goto("https://develop.eezy-content-manager.work/users/sign_in");
  // Click text=Accept
  await page.locator("text=Accept").click();
  // Click input[name="user\[email\]"]
  await page.locator('input[name="user\\[email\\]"]').click();
  // Fill input[name="user\[email\]"]
  await page.locator('input[name="user\\[email\\]"]').fill("bbriggs@eezy.com");
  // Press Tab
  await page.locator('input[name="user\\[email\\]"]').press("Tab");
  // Click input[name="user\[password\]"]
  await page.locator('input[name="user\\[password\\]"]').click();
  // Fill input[name="user\[password\]"]
  await page.locator('input[name="user\\[password\\]"]').fill("Lost1997&");
  // Click text=Log in
  await page.locator("text=Log in").click();
  await expect(page).toHaveURL(
    "https://develop.eezy-content-manager.work/admin"
  );
});
