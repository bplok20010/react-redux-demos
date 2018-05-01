const webpack = require("webpack");

module.exports = function(env){
	return new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(env === 'development' ? 'development' : 'production')
	})
};