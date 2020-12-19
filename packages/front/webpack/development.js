const commonConfig = require("./common");
const merge = require("webpack-merge").merge;

module.exports = merge(commonConfig, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		historyApiFallback: {
			index: "/"
		},
		port: 5000,
		hot: true,
		publicPath: "/",
		host: "0.0.0.0"
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	}
});
