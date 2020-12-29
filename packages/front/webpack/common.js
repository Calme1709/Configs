const CopyWebpackPlugin = require("copy-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const autoPrefixer = require("autoprefixer");
const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: {
		bundle: process.cwd() + "/src/index.tsx"
	},
	output: {
		filename: "[name].js",
		path: process.cwd() + "/dist/"
	},
	resolve: {
		extensions: [ ".ts", ".tsx", ".js", ".json" ],
		plugins: [ new TsconfigPathsPlugin() ]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								"@babel/preset-env",
								"@babel/typescript",
								"@babel/react"
							],
							plugins: [
								"@babel/plugin-transform-runtime",
								"@babel/proposal-class-properties",
								"@babel/proposal-object-rest-spread",
								"@babel/plugin-proposal-nullish-coalescing-operator",
							]
						}
					}
				]
			},
			{
				test: /\.s?css$/,
				use: [
					"style-loader",
					{ loader: 'css-loader', options: { modules: true } },
					{ loader: 'postcss-loader', options: { plugins: () => [ autoPrefixer() ] } },
					"sass-loader"
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{ loader: "url-loader", options: { limit: 2000, fallback: "file-loader" } }
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)$/,
				use: [
					"file-loader"
				]
			},
			{
				test: /\.svg$/,
				use: [ '@svgr/webpack' ]
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns:[{
				from: path.resolve(process.cwd() + "/public"),
				to: "",
				force: true
			}]
		}),
		new webpack.ProvidePlugin({
			React: "react"
		})
	]
};