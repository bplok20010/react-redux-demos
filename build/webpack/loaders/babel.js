/**
 * npm install --save-dev babel-cli babel-preset-env babel-preset-react babel-polyfill babel-plugin-transform-object-rest-spread
 */

module.exports = {
	test: /\.jsx?$/,
	exclude: /(node_modules|bower_components)/,
	use: {
		loader: 'babel-loader',
		options: {
			babelrc: false,
			presets: [
				["env", {
					"targets": {
						"browsers": [
							"last 5 versions",
							"not ie <= 8"
						]
					}	
				}],
				"react"
			],
			plugins: [
				'transform-object-rest-spread',
				'syntax-dynamic-import',
				'transform-runtime',
				"transform-class-properties",
				"transform-decorators",
				"nex-utils"
			]
		}
	}
};