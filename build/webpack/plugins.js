const DefinePlugin = require('./plugins/DefinePlugin');
const UglifyJs = require('./plugins/UglifyJs');
const Copy = require('./plugins/Copy');
const Html = require('./plugins/Html');
const ExtractCSS = require('./plugins/ExtractCSS');
const CommonsChunk = require('./plugins/CommonsChunk');

module.exports = function(env){
	const plugins = [
		DefinePlugin(env),
		Copy(env),
		Html(env),
		ExtractCSS(env),
		CommonsChunk(env),
		UglifyJs(env),
	];
	
	return plugins.filter(v => v);
}