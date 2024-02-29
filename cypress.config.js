/* eslint-disable linebreak-style */
/* eslint-disable indent */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://app.proposify.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    defaultCommandTimeout: 6000,
    requestTimeout: 6000,
    video: true,
  },
  projectId: 'gnfx4b',
})
