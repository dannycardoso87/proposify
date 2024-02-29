/* eslint-disable linebreak-style */
/* eslint-disable indent */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // viewportHeight: 880,
  // viewportWidth: 1280,
  e2e: {
    baseUrl: 'https://app.proposify.com',
    defaultCommandTimeout: 30000,
    requestTimeout: 10000,
    video: true,
  },
  //chromeWebSecurity: false,
  projectId: 'gnfx4b',
  experimentalWebKitSupport: true,
})
