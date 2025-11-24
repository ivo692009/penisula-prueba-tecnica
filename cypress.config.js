const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1600,
    viewportHeight: 900,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 120000,
    requestTimeout: 120000,
    responseTimeout: 120000,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true, 
    setupNodeEvents(on, config) {
      // node events
    },
  },
});