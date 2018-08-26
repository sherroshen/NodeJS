var fs = require('fs');

var ms1 = 'Hello World!';
var ms2 = '你好!';
var msg = ms1 + '\r\n' + ms2;

fs.writeFile('./hello.txt',msg,'utf8',function(err){
	if(err){
		console.log('写文件出错！具体错误：'+err);
	}else{
		console.log('ok');
	}
});

console.log(1);
console.log("A");



