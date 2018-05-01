/**
 * npm install --save-dev sass-loader node-sass
 */

module.exports = {
	test: /\.s?css$/,
	use: [
		{
			loader: "sass-loader"	
		}
	]
};