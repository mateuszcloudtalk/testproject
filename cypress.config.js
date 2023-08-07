const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://todomvc.com/examples/vanillajs/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
