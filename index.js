var fs = require('fs');

var file_readed=fs.readFile('text.txt', 'utf8', function(err, data) {
	console.log(data);
});

console.log("Test");