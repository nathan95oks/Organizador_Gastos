const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.CYPRESS_BASE_URL || null, // Usa null si CYPRESS_BASE_URL no está definida
  },
});
