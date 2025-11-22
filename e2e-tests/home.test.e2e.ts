import { expect, test } from '@playwright/test'

// Home page e2e smoke test: fast, stable, zero test-data assumptions
// - Verifies the home loads (HTTP 200/OK)
// - No console errors during initial load
// - Basic shell landmarks exist (main/footer)
// - Page has a non-empty title

test.describe('Home • smoke', () => {
  test('loads without console errors and shows key areas', async ({ page }) => {
    const consoleErrors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text())
      }
    })

    const response = await page.goto('/', { waitUntil: 'domcontentloaded' })
    expect(response, 'navigation response').not.toBeNull()
    expect(response?.ok(), `expected OK response, got ${response?.status()}`).toBeTruthy()

    // Title should not be empty
    await expect(page).toHaveTitle(/.+/)

    // Landmark regions should be present
    await expect(page.locator('main')).toBeVisible({ timeout: 15000 })
    await expect(page.locator('footer')).toBeVisible()

    // Ensure there are no console errors during initial load
    expect(consoleErrors, `Console errors encountered:\n${consoleErrors.join('\n')}`).toHaveLength(0)
  })
})
