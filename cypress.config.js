const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    API_URL: "https://fakestoreapi.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
