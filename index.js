// потоки на node.js
var fs = require('fs');

//чтение потоками 
//var myReadShort = fs.createReadStream(__dirname + '/text.txt', 'utf8');
//myReadShort.on('data', function(chunk){
//	console.log("Данные получены:\n" + chunk);
//})

//var myReadShort = fs.createReadStream(__dirname + '/text.txt', 'utf8');
//var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');
//
//myReadShort.on('data', function(chunk){
//	console.log("Данные получены:\n" + chunk);
//	myWriteShort.write(chunk);
//})



// server на node.js 
var http = require('http');

//fs.rmdir('new-one', function() {console.log("указаная папка удалена");}); 
var server = http.createServer(function(req, res) {
	console.log("URL страницы: " + req.url);
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	var myReadShort = fs.createReadStream(__dirname + '/text.txt', 'utf8');

myReadShort.pipe(res);
	
});


//fs.mkdir('new-one', function() {
//	fs.writeFile('./new-one/some_new.txt', 'Привет мир!', function() {
//		console.log("Все сраблтало!");
//	});
//}); 
server.listen(3000, '127.0.0.1');
console.log ("Мы отслеживаем порт 3000"); 