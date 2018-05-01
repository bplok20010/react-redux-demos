///npm install --save-dev html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env){
	return new HtmlWebpackPlugin({
		//hash: true,
		template: 'src/index.html'	
	});	
}