const path = require('path');

module.exports = function(env){
	return {
		publicPath: './',
		path: path.resolve('./dist/'),
		filename: '[name].[chunkhash].js'
	}	
}