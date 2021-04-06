const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	mode: "production",
	target: "node",
	entry: process.cwd() + "/src/index.ts",
	output: {
		filename: "build.js",
		path: process.cwd() + "/dist/"
	},
	resolve: {
		extensions: [ ".ts", ".json", ".js" ],
		plugins: [
			new TsconfigPathsPlugin()
		]
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					"ts-loader"
				]
			}
		]
	},
	externals: [ nodeExternals() ]
};