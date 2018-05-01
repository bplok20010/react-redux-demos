/**
 * npm install --save-dev url-loader
 */

module.exports = {
	test: /\.(png|jpg|gif)$/,
	use: [
		{
			loader: 'url-loader',
			options: {
				publicPath: '',
				name: 'images/[name].[ext]',
				limit: 8192
			}
		}
	]
};