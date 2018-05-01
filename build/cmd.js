
const devDependencies = {
	base: [
		'core-js',
		'rimraf',
		'eslint',
		'npm-run-all'
	],
	webpack: [
		'webpack',
		//loaders
		'babel-loader',
		'sass-loader',
		'css-loader',
		'node-sass',
		'style-loader',
		'extract-loader', // module.exports = "file data" => file data
		'file-loader', // save file data to file
		'html-loader',
		'url-loader', // => module.exports = "base64" | path
		'raw-loader', // => module.exports = "file data",
		'postcss-loader',
		'precss',
		'autoprefixer',
		//plugins
		'uglifyjs-webpack-plugin',
		'html-webpack-plugin',
		'copy-webpack-plugin',
		'extract-text-webpack-plugin',
		'manifest-webpack-plugin',
	],
	rollup: [
		'rollup',
		'rollup-plugin-babel',
		'rollup-plugin-commonjs',
		'rollup-plugin-json',
		'rollup-plugin-node-resolve',
		'rollup-plugin-replace',
	],
	babel: [
		'babel-core',
		'babel-cli',
		'babel-preset-env',
		'babel-preset-react', // jsx
		'babel-polyfill',
		'babel-plugin-transform-runtime', // runtime
		'babel-plugin-transform-object-rest-spread',
		'babel-plugin-external-helpers',
		'babel-plugin-syntax-dynamic-import',
		'babel-plugin-transform-class-properties',
	],
	polyfill: [
		'promise-polyfill', //maybe
		'raf', //maybe
	],
	vendor: [
		'react',
		'react-dom'
	]
};

module.exports = devDependencies;