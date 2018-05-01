const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = function(env){
	return env === 'production' ? new UglifyJsPlugin({
		sourceMap: true	
	}) : null;
};