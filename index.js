// потоки на node.js
var fs = require('fs');

//чтение потоками 
//var myReadShort = fs.createReadStream(__dirname + '/text.txt', 'utf8');
//myReadShort.on('data', function(chunk){
//	console.log("Данные получены:\n" + chunk);
//})

var myReadShort = fs.createReadStream(__dirname + '/text.txt', 'utf8');
var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');
myReadShort.on('data', function(chunk){
	console.log("Данные получены:\n" + chunk);
	myWriteShort.write(chunk);
})