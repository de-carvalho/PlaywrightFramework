// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 30 *1000, // timeout para os componentes e steps
  expect: {
    timeout: 10 * 1000 // timeout para assertions validations
  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: false
  },

});
module.exports = config
