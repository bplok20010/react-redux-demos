/**
 * npm install --save-dev postcss-loader sass-loader node-sass css-loader extract-loader file-loader url-loader
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	test: /\.s?css$/,
	use: ExtractTextPlugin.extract(
		[
			'css-loader', 
			{
				loader: "postcss-loader",
				options: {
					config: {
						path: __dirname + '/postcss.config.js'	
					}	
				}
			}, 
			"sass-loader"
		]
	)
};