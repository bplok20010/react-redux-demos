const babel = require('./babel');
const sass = require('./sass');
const image = require('./image');
const inlineImage = require('./inlineImage');
const font = require('./font');

module.exports = [
	babel,
	sass,
	//image,
	inlineImage,
	font
];