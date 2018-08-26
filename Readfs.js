var fs = require('fs');

fs.readFile('./hello.txt', function(err,data){
	if(err){
		throw err;
	}
	console.log(data.toString());
	console.log(data);
}); 

// fs.readFile('./hello.txt', 'utf8', function(err,data){
// 	if(err){
// 		throw err;
// 	}
// 	console.log(data);
// });