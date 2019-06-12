// потоки на node.js
var fs = require('fs');
// server на node.js 
var http = require('http');

//fs.rmdir('new-one', function() {console.log("указаная папка удалена");}); 
var server = http.createServer(function(req, res) {
	console.log("URL страницы: " + req.url);

	//res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); вывод текста
	//var myReadShort = fs.createReadStream(__dirname + '/text.txt', 'utf8');

	//res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); вывод html
	//var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');

    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
	var obj = {
		model: 'Audi',
		speed: '234.5',
		wheels: 4
	};

res.end(JSON.stringify(obj));
//myReadShort.pipe(res);
	
});



server.listen(3000, '127.0.0.1');
console.log ("Мы отслеживаем порт 3000"); 