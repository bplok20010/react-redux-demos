///npm install --save-dev copy-webpack-plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(){
	return new CopyWebpackPlugin([
		 { from: 'src/scss/images', to: './dist/../images' },
		/* {
			from: './static', to: 'D:/wamp/www/idreamsky/datax/datax-proj/src/main/resources/static' 
		 },
		 {
			from: './static', to: './static-dev' 
		 }*/
	]);
}