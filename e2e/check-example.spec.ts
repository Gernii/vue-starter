import { expect, test } from "@playwright/test";

test.describe("Task Management E2E Tests", () => {
	test("should verify if the 'Add' button exists", async ({ page }) => {
		// Navigate to the page where the button should be
		await page.goto("/"); // Adjust the URL as needed

		// Check if the 'Add' button exists
		const addButton = page.locator('button:has-text("Add")');
		await expect(addButton).toHaveCount(1); // Ensure there's exactly one 'Add' button
	});
	test("should show new task modal when clicking add button", async ({
		page,
	}) => {
		await page.goto("/"); // Adjust the URL as needed
		// Click the add task button
		await page.click('button:has-text("Add")');

		// Verify modal appears
		const modal = page.locator('div[role="dialog"]');
		await expect(modal).toBeVisible();
	});
});
