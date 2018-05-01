/**
 * npm install --save-dev file-loader
 */

module.exports = {
	test: /\.(png|jpg|gif)$/,
	use: [
		{
			loader: "file-loader",
			options: {
				publicPath: '',
				name: 'images/[name].[ext]'
			}
		}
	]
};