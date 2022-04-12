const { tailwindPreset } = require("@wework/ray2");

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/@wework/ray2/**/*.{html,js,jsx,ts,tsx}'
  ],
  presets: [tailwindPreset]
};