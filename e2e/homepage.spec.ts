import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load the correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Salil Saurav/);
  });

  test("should display the hero section correctly", async ({ page }) => {
    const heroHeading = page.getByRole("heading", { name: /I build fast, scalable, and maintainable web systems/i });
    await expect(heroHeading).toBeVisible();
  });

  test("should navigate to sections via the navbar", async ({ page }) => {
    // About Section
    await page.getByRole("link", { name: /About/i }).click();
    await expect(page).toHaveURL(/.*#about/);
    await expect(page.getByRole("region", { name: "About" })).toBeInViewport();

    // Projects Section
    await page.getByRole("link", { name: /Projects/i }).click();
    await expect(page).toHaveURL(/.*#projects/);
    await expect(page.getByRole("region", { name: "Projects" })).toBeInViewport();
  });

  test("should interact with the contact form", async ({ page }) => {
    await page.goto("/#contact");
    
    await page.getByLabel("Name").fill("Test User");
    await page.getByLabel("Email").fill("test@example.com");
    await page.getByLabel("Message").fill("This is a test message.");
    
    // Note: Form currently just prevents default and shows success/error status
    await page.getByRole("button", { name: /Send message/i }).click();
    
    // Check if status feedback appears
    await expect(page.locator("role=status")).toBeVisible();
  });

  test("should toggle the theme", async ({ page }) => {
    const themeToggle = page.getByLabel(/switch to/i);
    const initialLabel = await themeToggle.getAttribute("aria-label");
    
    await themeToggle.click();
    
    const newLabel = await themeToggle.getAttribute("aria-label");
    expect(newLabel).not.toBe(initialLabel);
  });

  test("should trigger skip link with keyboard", async ({ page }) => {
    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: /Skip to main content/i });
    await expect(skipLink).toBeFocused();
  });
});
