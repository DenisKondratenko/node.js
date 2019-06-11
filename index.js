var fs = require('fs');

var file_readed=fs.readFileSync('text.txt', 'utf8');
console.log(file_readed);
var message = "Привет мир!\n" +file_readed;
fs.writeFileSync('some_new_file.txt', message);
