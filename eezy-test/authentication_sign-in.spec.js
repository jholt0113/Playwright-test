// @ts-check
const { test, expect } = require("@playwright/test");

test("Admin sign-in", async ({ page }) => {
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
test("Login failure", async ({ page }) => {
  await page.goto("/skip");
  await page.locator('[id="cm-login-email"]').type("dummyemail@email.com");
  await page.locator('[id="cm-login-password"]').type("dummypassword");
  await page.locator('[type="submit"]').click();
  await expect(page.locator('[class="ui negative message"]')).toContainText(
    "Invalid email address or password"
  );
});
test("Password Reset", async ({ page }) => {
  await page.goto("/skip");
  await page.locator("text=Forgot your password?").click();
  await expect(page).toHaveURL(
    "https://develop.eezy-content-manager.work/users/password/new"
  );
  await page.locator('[placeholder="Email address"]').click();
  await page.locator('[placeholder="Email address"]').fill("bbriggs@eezy.com");
  await page.locator("text=Send reset password instructions").click();
  await expect(page).toHaveURL(
    "https://develop.eezy-content-manager.work/users/sign_in"
  );
  await expect(page.locator('[class="ui success message"]')).toContainText(
    "You will receive an email with instructions on how to reset your password in a few minutes."
  );
});
