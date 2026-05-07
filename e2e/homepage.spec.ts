import { test, expect } from "@playwright/test";

test("homepage loads correctly", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Salil Saurav/);
  await expect(page.getByRole("heading", { name: /I build fast, scalable, and maintainable web systems/i })).toBeVisible();
});

test("navigation works", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/#about/);

  await page.getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/#projects/);
});

test("contact section has form and contact methods", async ({ page }) => {
  await page.goto("/#contact");

  await expect(page.getByRole("heading", { name: /Contact info/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Send a message/i })).toBeVisible();
  await expect(page.getByRole("form")).toBeVisible();
  await expect(page.getByRole("link", { name: "Email" })).toBeVisible();
});

test("theme toggle is present", async ({ page }) => {
  await page.goto("/");

  const themeToggle = page.getByRole("button", { name: /switch to/i });
  await expect(themeToggle).toBeVisible();
});

test("skip navigation link works", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to main content" })).toBeFocused();
});
