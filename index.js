// потоки на node.js
var fs = require('fs');
var myReadShort = fs.createReadStream(__dirname + '/text.txt' 'utf8');
myReadShort.on('data', function(chunk){
	console.log("Данные получены:\n" + chunk);
})