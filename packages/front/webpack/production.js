const commonConfig = require("./common");
const merge = require("webpack-merge").merge;

module.exports = merge(commonConfig, {
	mode: "production"
});