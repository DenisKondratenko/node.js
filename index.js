var fs = require('fs');
//fs.unlinlink('file.txt', function(){console.log("указаный файл удален");}); 
//fs.rmdir('new-one', function() {"указаная папка удалена"}); 
fs.mkdir('new-one', function() {
	fs.writeFile('./new-one/some_new.txt', 'Привет мир!', function() {
		console.log("Все сраблтало!");
	});
});