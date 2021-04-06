const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const DeclarationBundlerPlugin = require("declaration-bundler-webpack-plugin")

const projectName = require(process.cwd() + "/package.json").name.replace(/^@.+\//, "");

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
	externals: [ nodeExternals() ],
	plugins: [
		new DeclarationBundlerPlugin({
			moduleName: projectName,
			out: process.cwd() + "/dist"
		})
	]
};