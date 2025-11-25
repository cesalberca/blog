import { defineConfig, devices } from '@playwright/test'
import { env } from '@/env'

export default defineConfig({
  testDir: './e2e-tests',
  testMatch: /.*\.test\.e2e\.ts/,
  fullyParallel: true,
  forbidOnly: !!env.CI,
  retries: env.CI ? 2 : 0,
  ...(!!env.CI && { workers: 1 }),
  reporter: 'html',
  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
})
