const webpack = require("webpack");

module.exports = function(env){
	return new webpack.optimize.CommonsChunkPlugin({
		name: "commons",//vendor
		filename: "commons.[chunkhash].js",
	});
}