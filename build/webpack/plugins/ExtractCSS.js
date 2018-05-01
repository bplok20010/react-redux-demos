const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env){
	return new ExtractTextPlugin('style.[chunkhash].css');		
}