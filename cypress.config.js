const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3001",
    viewportWidth: 1366,
    viewportHeight: 768,
  },
});
