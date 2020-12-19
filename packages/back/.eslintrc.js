const { CommonESLint: ESLint, deepMerge } = require("@calme1709/config-common");

module.exports = deepMerge(CommonESLint, { env: { node: true }});