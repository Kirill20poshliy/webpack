const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { use } = require("react");

module.exports = {
	context: path.resolve(__dirname, "src"),
	entry: "./index.tsx",
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.scss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "assets/fonts",
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "assets/images",
						},
					},
				],
			},
			{
				test: /\.(mp3)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "assets/audio",
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve("public/index.html"),
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "public/favicon.png"),
					to: path.resolve(__dirname, "dist"),
				},
			],
		}),
		new MiniCssExtractPlugin(),
	],
};
