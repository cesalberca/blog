import { expect, test } from '@playwright/test'

test.describe('Home', () => {
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

    await expect(page).toHaveTitle(/.+/)
    await expect(page.locator('main')).toBeVisible({ timeout: 15000 })
    expect(consoleErrors, `Console errors encountered:\n${consoleErrors.join('\n')}`).toHaveLength(0)
  })
})
