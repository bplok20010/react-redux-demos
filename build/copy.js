const rimraf = require('rimraf');
const copy = require('copy');

/*
		 {
			from: './static', to: 'D:\wamp\www\idreamsky\datax\datax-proj\src\main\resources\static' 
		 },
		 {
			from: './static', to: './static-dev' 
		 }*/

function copyFiles(){
	
	copy('./static/**', './static-dev', function(){
	});	
	
	copy('./src/**', 'D:/wamp/www/idreamsky/datax/datax-proj/src/main/resources/webapp/src', function(){
	});	
	
	copy('./static/**', 'D:/wamp/www/idreamsky/datax/datax-proj/src/main/resources/static', function(){
		console.log('copy complete!');	
		setTimeout(function(){
			rimraf('./static-dev/dist/*', function(){
				rimraf('D:/wamp/www/idreamsky/datax/datax-proj/src/main/resources/static/dist/*', function(){
					copyFiles();		
				})
			})	
		}, 10000);
	});	
}

copyFiles();
