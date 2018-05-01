
const webpack = require("webpack");
const path = require('path');

const entry = require('./webpack/entry');
const output = require('./webpack/output');
const plugins = require('./webpack/plugins');
const rules = require('./webpack/rules');

function config(env = 'development'){
	
	return {
		entry: entry(env),
		output: output(env),
		module: {
			rules: rules(env)
		},
		plugins: plugins(env),
		resolve: {
			alias: {
				'lib': __dirname +'/../lib',
				'nexui': __dirname +'/../lib/nexui',	
				'utils': __dirname +'/../src/utils',
				'components': __dirname +'/../src/components',	
				'config': __dirname +'/../src/config',
				'data': __dirname +'/../src/data',
			}	
		}
	}
}
module.exports = config;