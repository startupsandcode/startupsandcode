const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { transform } = require('lodash');
const sass = require('sass');

module.exports = {
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					context: './src/sites',
					from: "./**/*.scss",
					to: "sites/[path]/[name].css",
					transform(content, path) {
						const result = sass.renderSync({
							file: path
						});
						return result.css.toString();
					},
				},
				{
					context: './src/sites',
					from: "./**/*.html",
					to: "sites/[path]/[name].html"
				},
				{
					context: './src/sites',
					from: "./**/*.js",
					to: "sites/[path]/[name].js"
				}
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(html)$/,
				use: ['html-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
};