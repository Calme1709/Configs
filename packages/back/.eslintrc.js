const { ESLint: CommonESLint, deepMerge } = require("@calme1709/config-common");

module.exports = deepMerge(CommonESLint, { env: { node: true }});