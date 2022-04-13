const { tailwindPreset } = require("@wework/ray2");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [tailwindPreset]
};