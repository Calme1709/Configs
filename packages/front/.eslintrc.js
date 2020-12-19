const { ESLint: CommonESLint, deepMerge } = require("@calme1709/config-common");

//TODO: JSX ESLint Rules?

module.exports = deepMerge(CommonESLint, { env: { browser: true }});