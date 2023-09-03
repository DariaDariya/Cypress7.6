const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3002",

    setupNodeEvents(on, config) {},

    viewportWidth: 846,
    viewportHeight: 414,
  },
});