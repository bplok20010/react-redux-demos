
module.exports = {
	test: /\.(eot|svg|ttf|woff|woff2)$/,
	use: [
		{
			loader: "file-loader",
			options: {
				name: 'fonts/[name].[ext]'	
			}
		}
	]
};