const process = require('process');
const child_process = require('child_process');
const cmd = require('./cmd');
const pkg = require('../package.json');

const cmdString = [];

function hasInstall(dep){
	return (dep in pkg.dependencies) || (dep in pkg.devDependencies)
}

Object.keys(cmd).forEach(key => cmdString.push.apply(cmdString, cmd[key]));

cmdString.forEach( commonder => {
	if( hasInstall(commonder) ) return;
	let ret = child_process.execSync( `npm install --dev-save ${commonder}` );
	console.log(ret.toString()) 
});


