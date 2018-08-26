// 解决在文件读取中 ./ 相对路径的问题
// 解决： __dirname、 __filename
// __dirname:表示，当前正在执行的js文件所在的目录
// __filename:表示，当前正在执行的js文件所在的完整路径

console.log(__dirname);
console.log(__filename);

var fs = require('fs');

var filename = __dirname+ '\\' + 'hello.txt';

fs.readFile(filename, function(err,data){
	if(err){
		throw err;
	}
	console.log(data.toString());
	console.log(data);
}); 