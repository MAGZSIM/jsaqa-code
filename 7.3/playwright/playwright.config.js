// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  use: {
    launchOptions: {
        headless: false,
        slowMo: 1000
    }
  },
});